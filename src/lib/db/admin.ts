import {
    collection,
    doc,
    getDocs,
    updateDoc,
    deleteDoc,
    query,
    orderBy,
    Timestamp
} from 'firebase/firestore';
import { db } from '../firebase';
import type { Advertiser, AdvertiserFormData } from '@/types';

// Collection references
const ADVERTISERS_COLLECTION = 'advertisers';

/**
 * Get all advertisers with optional filters
 */
export async function getAllAdvertisers(): Promise<Advertiser[]> {
    const advertisersRef = collection(db, ADVERTISERS_COLLECTION);
    const q = query(advertisersRef, orderBy('created_at', 'desc'));
    const querySnap = await getDocs(q);

    return querySnap.docs.map(docResult => {
        const data = docResult.data();
        return {
            id: docResult.id,
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
