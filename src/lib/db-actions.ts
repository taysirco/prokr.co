import {
    collection,
    doc,
    getDoc,
    getDocs,
    setDoc,
    updateDoc,
    deleteDoc,
    query,
    where,
    orderBy,
    limit,
    Timestamp
} from 'firebase/firestore';
import { db } from './firebase';
import type { City, Service, Advertiser, AdvertiserFormData } from '@/types';

// Collection references
const STATIC_DATA_COLLECTION = 'static_data';
const ADVERTISERS_COLLECTION = 'advertisers';

// ============================================
// Static Data Functions
// ============================================

/**
 * Get all cities from static_data
 */
export async function getCities(): Promise<City[]> {
    const docRef = doc(db, STATIC_DATA_COLLECTION, 'cities');
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return docSnap.data().list as City[];
    }
    return [];
}

/**
 * Get all services from static_data
 */
export async function getServices(): Promise<Service[]> {
    const docRef = doc(db, STATIC_DATA_COLLECTION, 'services');
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return docSnap.data().list as Service[];
    }
    return [];
}

/**
 * Validate if a city slug exists
 */
export async function validateCity(citySlug: string): Promise<City | null> {
    const cities = await getCities();
    return cities.find(city => city.slug === citySlug) || null;
}

/**
 * Validate if a service slug exists
 */
export async function validateService(serviceSlug: string): Promise<Service | null> {
    const services = await getServices();
    return services.find(service => service.slug === serviceSlug) || null;
}

// ============================================
// Advertiser Functions
// ============================================

/**
 * Get advertisers by city and service silo
 * Returns premium (top 15) and standard (50) advertisers
 */
export async function getAdvertisersBySilo(
    citySlug: string,
    serviceSlug: string
): Promise<{ premium: Advertiser[]; standard: Advertiser[] }> {
    const advertisersRef = collection(db, ADVERTISERS_COLLECTION);

    // Query for premium advertisers (top 15 by priority_score)
    const premiumQuery = query(
        advertisersRef,
        where('is_premium', '==', true),
        where('targeted_cities', 'array-contains', citySlug),
        orderBy('priority_score', 'desc'),
        limit(15)
    );

    // Query for standard advertisers (50)
    const standardQuery = query(
        advertisersRef,
        where('is_premium', '==', false),
        where('targeted_cities', 'array-contains', citySlug),
        limit(50)
    );

    const [premiumSnap, standardSnap] = await Promise.all([
        getDocs(premiumQuery),
        getDocs(standardQuery)
    ]);

    // Filter by service (Firestore doesn't support multiple array-contains)
    const premium = premiumSnap.docs
        .map(doc => ({ id: doc.id, ...doc.data() } as Advertiser))
        .filter(ad => ad.targeted_services.includes(serviceSlug));

    const standard = standardSnap.docs
        .map(doc => ({ id: doc.id, ...doc.data() } as Advertiser))
        .filter(ad => ad.targeted_services.includes(serviceSlug));

    return { premium, standard };
}

/**
 * Get a single advertiser by short_code
 */
export async function getAdvertiserByCode(shortCode: string): Promise<Advertiser | null> {
    const advertisersRef = collection(db, ADVERTISERS_COLLECTION);
    const q = query(advertisersRef, where('short_code', '==', shortCode), limit(1));
    const querySnap = await getDocs(q);

    if (querySnap.empty) {
        return null;
    }

    const doc = querySnap.docs[0];
    return { id: doc.id, ...doc.data() } as Advertiser;
}

/**
 * Generate a unique 6-character alphanumeric short_code
 */
function generateShortCode(): string {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789';
    let code = '';
    for (let i = 0; i < 6; i++) {
        code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return code;
}

/**
 * Check if a short_code already exists (collision detection)
 */
async function isShortCodeTaken(shortCode: string): Promise<boolean> {
    const existing = await getAdvertiserByCode(shortCode);
    return existing !== null;
}

/**
 * Generate a collision-safe unique short_code
 */
async function generateUniqueShortCode(): Promise<string> {
    let code = generateShortCode();
    let attempts = 0;
    const maxAttempts = 10;

    while (await isShortCodeTaken(code) && attempts < maxAttempts) {
        code = generateShortCode();
        attempts++;
    }

    if (attempts >= maxAttempts) {
        throw new Error('Failed to generate unique short_code after maximum attempts');
    }

    return code;
}

/**
 * Create a new advertiser (Admin function)
 */
export async function createAdvertiser(data: AdvertiserFormData): Promise<Advertiser> {
    const shortCode = await generateUniqueShortCode();
    const now = new Date();

    const advertiser: Omit<Advertiser, 'id'> = {
        short_code: shortCode,
        business_name: data.business_name,
        phone_number: data.phone_number,
        whatsapp_number: data.whatsapp_number,
        logo_url: data.logo_url || '',
        is_premium: data.is_premium,
        priority_score: data.priority_score,
        subscription_expiry: data.subscription_expiry || null,
        targeted_cities: data.targeted_cities,
        targeted_services: data.targeted_services,
        description: data.description,
        gallery: data.gallery || [],
        reviews: [],
        is_active: true,
        created_at: now,
        updated_at: now,
    };

    const docRef = doc(collection(db, ADVERTISERS_COLLECTION));
    await setDoc(docRef, {
        ...advertiser,
        subscription_expiry: advertiser.subscription_expiry
            ? Timestamp.fromDate(advertiser.subscription_expiry)
            : null,
        created_at: Timestamp.fromDate(now),
        updated_at: Timestamp.fromDate(now),
    });

    return { id: docRef.id, ...advertiser };
}

/**
 * Get other services available in a city (for footer)
 */
export async function getServicesInCity(citySlug: string, excludeService?: string): Promise<Service[]> {
    const services = await getServices();
    return services.filter(service => service.slug !== excludeService);
}

/**
 * Get other cities where a service is available (for footer)
 */
export async function getCitiesForService(serviceSlug: string, excludeCity?: string): Promise<City[]> {
    const cities = await getCities();
    return cities.filter(city => city.slug !== excludeCity);
}

// ============================================
// Admin CRUD Functions
// ============================================

/**
 * Get all advertisers with optional filters
 */
export async function getAllAdvertisers(): Promise<Advertiser[]> {
    const advertisersRef = collection(db, ADVERTISERS_COLLECTION);
    const q = query(advertisersRef, orderBy('created_at', 'desc'));
    const querySnap = await getDocs(q);

    return querySnap.docs.map(doc => {
        const data = doc.data();
        return {
            id: doc.id,
            ...data,
            created_at: data.created_at?.toDate() || new Date(),
            updated_at: data.updated_at?.toDate() || new Date(),
            subscription_expiry: data.subscription_expiry?.toDate() || null,
        } as Advertiser;
    });
}

/**
 * Update an existing advertiser
 */
export async function updateAdvertiser(
    id: string,
    updates: Partial<AdvertiserFormData> & { is_active?: boolean }
): Promise<void> {
    const docRef = doc(db, ADVERTISERS_COLLECTION, id);

    const updateData: Record<string, unknown> = {
        ...updates,
        updated_at: Timestamp.fromDate(new Date()),
    };

    // Convert dates to Timestamps
    if (updates.subscription_expiry) {
        updateData.subscription_expiry = Timestamp.fromDate(updates.subscription_expiry);
    }

    await updateDoc(docRef, updateData);
}

/**
 * Delete an advertiser
 */
export async function deleteAdvertiser(id: string): Promise<void> {
    const docRef = doc(db, ADVERTISERS_COLLECTION, id);
    await deleteDoc(docRef);
}

/**
 * Toggle advertiser premium status
 */
export async function toggleAdvertiserPremium(id: string, isPremium: boolean): Promise<void> {
    const docRef = doc(db, ADVERTISERS_COLLECTION, id);
    await updateDoc(docRef, {
        is_premium: isPremium,
        updated_at: Timestamp.fromDate(new Date()),
    });
}

/**
 * Toggle advertiser active status
 */
export async function toggleAdvertiserActive(id: string, isActive: boolean): Promise<void> {
    const docRef = doc(db, ADVERTISERS_COLLECTION, id);
    await updateDoc(docRef, {
        is_active: isActive,
        updated_at: Timestamp.fromDate(new Date()),
    });
}

