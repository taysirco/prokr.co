import {
    collection,
    doc,
    getDocs,
    setDoc,
    query,
    where,
    orderBy,
    limit,
    Timestamp
} from 'firebase/firestore';
import { db } from '../firebase';
import type { Advertiser, AdvertiserFormData } from '@/types';
import { injectFeaturedCompany } from '../featured-company';

// Collection references
const ADVERTISERS_COLLECTION = 'advertisers';

/**
 * Get advertisers by city and service silo
 * Returns premium (top 15) and standard (50) advertisers
 */
export async function getAdvertisersBySilo(
    citySlug: string,
    serviceSlug: string
): Promise<{ premium: Advertiser[]; standard: Advertiser[] }> {
    const advertisersRef = collection(db, ADVERTISERS_COLLECTION);

    // Query for premium advertisers by city — fetch generously because
    // Firestore can't do two array-contains (city + service).
    // We fetch up to 150 per city, then filter by service in JS.
    const premiumQuery = query(
        advertisersRef,
        where('is_premium', '==', true),
        where('targeted_cities', 'array-contains', citySlug),
        orderBy('priority_score', 'desc'),
        limit(150)
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

    // حقن الشركة المميزة (الاسطورة) في المقدمة دائماً
    const premiumWithFeatured = injectFeaturedCompany(premium, citySlug, serviceSlug);

    return { premium: premiumWithFeatured, standard };
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

    const docResult = querySnap.docs[0];
    return { id: docResult.id, ...docResult.data() } as Advertiser;
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
        targeted_neighborhoods: data.targeted_neighborhoods || [],
        description: data.description,
        gallery: data.gallery || [],
        reviews: [],
        is_active: true,
        created_at: now,
        updated_at: now,
        // Enhanced LocalBusiness Schema fields
        ...(data.crn && { crn: data.crn }),
        ...(data.sbc_number && { sbc_number: data.sbc_number }),
        ...(data.street_address && { street_address: data.street_address }),
        ...(data.postal_code && { postal_code: data.postal_code }),
        ...(data.google_maps_url && { google_maps_url: data.google_maps_url }),
        ...(data.google_maps_place_id && { google_maps_place_id: data.google_maps_place_id }),
        ...(data.payment_methods && data.payment_methods.length > 0 && { payment_methods: data.payment_methods }),
        ...(data.has_verified_employees !== undefined && { has_verified_employees: data.has_verified_employees }),
        ...(data.zatca_registered !== undefined && { zatca_registered: data.zatca_registered }),
        ...(data.qiwa_registered !== undefined && { qiwa_registered: data.qiwa_registered }),
        ...(data.nitaqat_band && { nitaqat_band: data.nitaqat_band }),
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
