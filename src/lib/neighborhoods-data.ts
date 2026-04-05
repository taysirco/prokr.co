/**
 * Neighborhoods Data — Unified helper for the registration wizard
 * 
 * Combines data from neighborhood-coords.ts and city context files
 * to provide a clean API for neighborhood selection in forms.
 */

import { NEIGHBORHOOD_COORDS } from './neighborhood-coords';
import { CITIES } from './seed';

export interface NeighborhoodOption {
    slug: string;
    name_ar: string;
}

/**
 * Get list of neighborhoods for a city, derived from NEIGHBORHOOD_COORDS.
 * Returns an array of { slug, name_ar } objects.
 */
export function getNeighborhoodsForCity(citySlug: string): NeighborhoodOption[] {
    const coords = NEIGHBORHOOD_COORDS[citySlug];
    if (!coords) return [];

    return Object.keys(coords).map(name_ar => ({
        slug: name_ar.replace(/\s+/g, '-'),
        name_ar,
    }));
}

/**
 * Check if a city has neighborhood data available.
 */
export function cityHasNeighborhoods(citySlug: string): boolean {
    const coords = NEIGHBORHOOD_COORDS[citySlug];
    return !!coords && Object.keys(coords).length > 0;
}

/**
 * Get all cities that have full neighborhood data.
 */
export function getCitiesWithNeighborhoodData(): string[] {
    return CITIES
        .map(c => c.slug)
        .filter(slug => cityHasNeighborhoods(slug));
}

/**
 * Get cities that DON'T have neighborhood data.
 */
export function getCitiesWithoutNeighborhoodData(): string[] {
    return CITIES
        .map(c => c.slug)
        .filter(slug => !cityHasNeighborhoods(slug));
}

/**
 * Get neighborhood count for a city.
 */
export function getNeighborhoodCount(citySlug: string): number {
    const coords = NEIGHBORHOOD_COORDS[citySlug];
    if (!coords) return 0;
    return Object.keys(coords).length;
}
