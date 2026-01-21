import type { City } from '@/types';

// ============================================
// Sub-regions/Neighborhoods for Major Cities
// ============================================

export interface SubRegion {
    slug: string;
    name_ar: string;
    name_en: string;
    citySlug: string;
    services: string[]; // Specific services available in this sub-region
}

// Sub-regions data by city
export const SUB_REGIONS: Record<string, SubRegion[]> = {
    'riyadh': [
        {
            slug: 'north',
            name_ar: 'شمال الرياض',
            name_en: 'North Riyadh',
            citySlug: 'riyadh',
            services: ['furniture-moving', 'pest-control', 'cleaning', 'tank-insulation', 'sewer-suction-trucks']
        },
        {
            slug: 'east',
            name_ar: 'شرق الرياض',
            name_en: 'East Riyadh',
            citySlug: 'riyadh',
            services: ['furniture-moving', 'pest-control', 'sewer-cleaning', 'tanks-cleaning', 'water-leak-detection']
        },
        {
            slug: 'west',
            name_ar: 'غرب الرياض',
            name_en: 'West Riyadh',
            citySlug: 'riyadh',
            services: ['furniture-moving']
        },
        {
            slug: 'south',
            name_ar: 'جنوب الرياض',
            name_en: 'South Riyadh',
            citySlug: 'riyadh',
            services: ['furniture-moving']
        },
    ],
    'jeddah': [
        {
            slug: 'al-hamdania',
            name_ar: 'الحمدانية',
            name_en: 'Al Hamdania',
            citySlug: 'jeddah',
            services: ['tanks-cleaning']
        },
    ],
    'makkah': [
        {
            slug: 'sharaia',
            name_ar: 'الشرائع',
            name_en: 'Al Sharaia',
            citySlug: 'makkah',
            services: ['furniture-moving', 'sanitization']
        },
    ],
    'al-ahsa': [
        {
            slug: 'hofuf',
            name_ar: 'الهفوف',
            name_en: 'Hofuf',
            citySlug: 'al-ahsa',
            services: ['furniture-moving', 'water-leak-detection', 'pest-control', 'cleaning']
        },
        {
            slug: 'mubarraz',
            name_ar: 'المبرز',
            name_en: 'Al Mubarraz',
            citySlug: 'al-ahsa',
            services: ['furniture-moving', 'hourly-cleaning']
        },
    ],
};

// Get sub-regions for a city
export function getSubRegionsByCity(citySlug: string): SubRegion[] {
    return SUB_REGIONS[citySlug] || [];
}

// Get a specific sub-region
export function getSubRegion(citySlug: string, subRegionSlug: string): SubRegion | undefined {
    const subRegions = SUB_REGIONS[citySlug];
    return subRegions?.find(sr => sr.slug === subRegionSlug);
}

// Get all cities with sub-regions
export function getCitiesWithSubRegions(): string[] {
    return Object.keys(SUB_REGIONS);
}

// Service slug mapping for sub-regions (some use different slugs like 'movers' instead of 'furniture-moving')
export const SUB_REGION_SERVICE_ALIASES: Record<string, string> = {
    'movers': 'furniture-moving',
    'mover': 'furniture-moving',
};

// Resolve service slug (handle aliases)
export function resolveServiceSlug(slug: string): string {
    return SUB_REGION_SERVICE_ALIASES[slug] || slug;
}
