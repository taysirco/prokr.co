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
        region: data.region,
        selected_plan: data.selected_plan,
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

    // Create the advertiser
    const advertiser = await createAdvertiser({
        business_name: requestData.business_name,
        phone_number: requestData.phone_number,
        whatsapp_number: requestData.whatsapp_number,
        logo_url: requestData.logo_url,
        is_premium: requestData.selected_plan === 'premium',
        priority_score: requestData.selected_plan === 'premium' ? 80 : 50,
        subscription_expiry: requestData.selected_plan === 'premium'
            ? new Date(Date.now() + 30 * 24 * 60 * 60 * 1000) // 30 days
            : null,
        targeted_cities: requestData.targeted_cities,
        targeted_services: requestData.targeted_services,
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
