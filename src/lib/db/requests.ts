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
    Timestamp
} from 'firebase/firestore';
import { db } from '../firebase';
import type { Advertiser, AdvertiserRequest, AdvertiserRequestFormData } from '@/types';
import { createAdvertiser } from './advertisers';

// Collection references
const REQUESTS_COLLECTION = 'advertiser_requests';

/**
 * Create a new advertiser registration request (Public)
 */
export async function createAdvertiserRequest(
    data: AdvertiserRequestFormData,
    logoUrl: string = '',
    galleryUrls: string[] = []
): Promise<string> {
    const now = new Date();

    const requestData = {
        business_name: data.business_name,
        contact_name: data.contact_name,
        phone_number: data.phone_number,
        whatsapp_number: data.whatsapp_number || data.phone_number,
        description: data.description,
        logo_url: logoUrl,
        gallery: galleryUrls,
        targeted_cities: data.targeted_cities,
        targeted_services: data.targeted_services,
        targeted_neighborhoods: data.targeted_neighborhoods || [],
        region: data.region,
        duration_days: data.duration_days,
        calculated_price_sar: data.calculated_price_sar,
        discount_applied_sar: data.discount_applied_sar,
        status: 'pending' as const,
        created_at: Timestamp.fromDate(now),
        updated_at: Timestamp.fromDate(now),
    };

    const docRef = doc(collection(db, REQUESTS_COLLECTION));
    await setDoc(docRef, requestData);

    return docRef.id;
}

/**
 * Get all pending advertiser requests (Admin)
 */
export async function getPendingRequests(): Promise<AdvertiserRequest[]> {
    const requestsRef = collection(db, REQUESTS_COLLECTION);
    const q = query(
        requestsRef,
        where('status', '==', 'pending'),
        orderBy('created_at', 'desc')
    );
    const querySnap = await getDocs(q);

    return querySnap.docs.map(docResult => {
        const data = docResult.data();
        return {
            id: docResult.id,
            ...data,
            created_at: data.created_at?.toDate() || new Date(),
            updated_at: data.updated_at?.toDate() || new Date(),
        } as AdvertiserRequest;
    });
}

/**
 * Get all advertiser requests with any status (Admin)
 */
export async function getAllRequests(): Promise<AdvertiserRequest[]> {
    const requestsRef = collection(db, REQUESTS_COLLECTION);
    const q = query(requestsRef, orderBy('created_at', 'desc'));
    const querySnap = await getDocs(q);

    return querySnap.docs.map(docResult => {
        const data = docResult.data();
        return {
            id: docResult.id,
            ...data,
            created_at: data.created_at?.toDate() || new Date(),
            updated_at: data.updated_at?.toDate() || new Date(),
        } as AdvertiserRequest;
    });
}

/**
 * Approve an advertiser request and create an advertiser (Admin)
 */
export async function approveRequest(requestId: string): Promise<Advertiser> {
    // Get the request data
    const requestRef = doc(db, REQUESTS_COLLECTION, requestId);
    const requestSnap = await getDoc(requestRef);

    if (!requestSnap.exists()) {
        throw new Error('Request not found');
    }

    const requestData = requestSnap.data() as AdvertiserRequest;

    // Since advertiser paid via reps/bank transfer, we honor their requested duration
    const now = new Date();
    const durationDays = requestData.duration_days || 30; // fallback to 30 just in case
    const expiryDate = new Date(now);
    expiryDate.setDate(expiryDate.getDate() + durationDays);

    let priorityScore = 50;
    if (durationDays === 60) priorityScore = 100;
    else if (durationDays === 30) priorityScore = 80;
    else if (durationDays === 15) priorityScore = 65;

    // Create the advertiser
    const advertiser = await createAdvertiser({
        business_name: requestData.business_name,
        phone_number: requestData.phone_number,
        whatsapp_number: requestData.whatsapp_number,
        logo_url: requestData.logo_url,
        is_premium: true, // Mark as premium since they registered via paid wizard
        priority_score: priorityScore,
        subscription_expiry: expiryDate,
        targeted_cities: requestData.targeted_cities,
        targeted_services: requestData.targeted_services,
        targeted_neighborhoods: requestData.targeted_neighborhoods,
        description: requestData.description,
        gallery: requestData.gallery,
    });

    // Update request status to approved
    await updateDoc(requestRef, {
        status: 'approved',
        updated_at: Timestamp.fromDate(new Date()),
    });

    return advertiser;
}

/**
 * Reject an advertiser request (Admin)
 */
export async function rejectRequest(requestId: string, reason?: string): Promise<void> {
    const requestRef = doc(db, REQUESTS_COLLECTION, requestId);
    await updateDoc(requestRef, {
        status: 'rejected',
        rejection_reason: reason || '',
        updated_at: Timestamp.fromDate(new Date()),
    });
}

/**
 * Delete an advertiser request (Admin)
 */
export async function deleteRequest(requestId: string): Promise<void> {
    const requestRef = doc(db, REQUESTS_COLLECTION, requestId);
    await deleteDoc(requestRef);
}
