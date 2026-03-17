import {
    collection,
    doc,
    setDoc,
    getDocs,
    query,
    where,
    orderBy,
    limit,
    Timestamp
} from 'firebase/firestore';
import { db } from '../firebase';
import type { ServiceBooking, ServiceBookingFormData } from '@/types';

// ============================================
// AI Booking API — Firestore CRUD
// Collection: service_bookings
// ============================================

const BOOKINGS_COLLECTION = 'service_bookings';

/**
 * Generate a human-readable reservation ID
 * Format: BK-{unix_seconds}-{random_4_chars}
 */
function generateReservationId(): string {
    const timestamp = Math.floor(Date.now() / 1000);
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let random = '';
    for (let i = 0; i < 4; i++) {
        random += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return `BK-${timestamp}-${random}`;
}

/**
 * Normalize Saudi phone number to local format (05xxxxxxxx)
 */
export function normalizeSaudiPhone(phone: string): string {
    // Strip all non-digits
    const digits = phone.replace(/\D/g, '');

    // +966 5xxxxxxxx → 05xxxxxxxx
    if (digits.startsWith('966') && digits.length === 12) {
        return '0' + digits.slice(3);
    }
    // 00966 5xxxxxxxx → 05xxxxxxxx
    if (digits.startsWith('00966') && digits.length === 14) {
        return '0' + digits.slice(5);
    }
    // Already 05xxxxxxxx
    if (digits.startsWith('05') && digits.length === 10) {
        return digits;
    }
    // Return as-is if no match
    return digits;
}

/**
 * Validate Saudi phone number format
 */
export function isValidSaudiPhone(phone: string): boolean {
    const normalized = normalizeSaudiPhone(phone);
    return /^05\d{8}$/.test(normalized);
}

/**
 * Create a new service booking from API request
 */
export async function createServiceBooking(
    data: ServiceBookingFormData,
    matchedProviders: string[] = []
): Promise<ServiceBooking> {
    const now = new Date();
    const reservationId = generateReservationId();
    const normalizedPhone = normalizeSaudiPhone(data.customer_phone);

    const booking: Omit<ServiceBooking, 'id'> = {
        reservation_id: reservationId,
        service_slug: data.service,
        city_slug: data.city,
        customer_name: data.customer_name,
        customer_phone: normalizedPhone,
        ...(data.preferred_date && { preferred_date: data.preferred_date }),
        ...(data.notes && { notes: data.notes }),
        source: data.source || 'api',
        status: 'pending',
        matched_providers: matchedProviders,
        matched_providers_count: matchedProviders.length,
        created_at: now,
        updated_at: now,
    };

    const docRef = doc(collection(db, BOOKINGS_COLLECTION));
    await setDoc(docRef, {
        ...booking,
        created_at: Timestamp.fromDate(now),
        updated_at: Timestamp.fromDate(now),
    });

    return { id: docRef.id, ...booking };
}

/**
 * Get top matched provider short_codes for a city + service
 * Queries the advertisers collection for matching providers
 */
export async function getMatchedProviders(
    citySlug: string,
    serviceSlug: string,
    maxProviders: number = 5
): Promise<string[]> {
    try {
        const advertisersRef = collection(db, 'advertisers');

        // Premium providers first
        const premiumQuery = query(
            advertisersRef,
            where('is_premium', '==', true),
            where('targeted_cities', 'array-contains', citySlug),
            orderBy('priority_score', 'desc'),
            limit(maxProviders)
        );

        const premiumSnap = await getDocs(premiumQuery);
        const premiumCodes = premiumSnap.docs
            .map(d => d.data())
            .filter(ad => (ad.targeted_services as string[]).includes(serviceSlug))
            .map(ad => ad.short_code as string);

        // If we have enough premium, return them
        if (premiumCodes.length >= maxProviders) {
            return premiumCodes.slice(0, maxProviders);
        }

        // Fill remaining with standard providers
        const remaining = maxProviders - premiumCodes.length;
        const standardQuery = query(
            advertisersRef,
            where('is_premium', '==', false),
            where('targeted_cities', 'array-contains', citySlug),
            limit(remaining * 2) // Over-fetch since we need to filter by service
        );

        const standardSnap = await getDocs(standardQuery);
        const standardCodes = standardSnap.docs
            .map(d => d.data())
            .filter(ad => (ad.targeted_services as string[]).includes(serviceSlug))
            .map(ad => ad.short_code as string)
            .slice(0, remaining);

        return [...premiumCodes, ...standardCodes];
    } catch {
        // If query fails (e.g., index not ready), return empty
        return [];
    }
}
