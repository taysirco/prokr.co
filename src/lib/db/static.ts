import {
    collection,
    doc,
    getDoc,
    getDocs,
} from 'firebase/firestore';
import { db } from '../firebase';
import type { City, Service } from '@/types';

// Collection references
const STATIC_DATA_COLLECTION = 'static_data';

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
