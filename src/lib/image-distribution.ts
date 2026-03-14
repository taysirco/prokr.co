/**
 * Intelligent Image Distribution System
 * 
 * This module provides smart image distribution across 1,224 silo pages
 * ensuring no duplicate images on any single page and optimal variety.
 */

// Image inventories imported from per-category modules
import { CLEANING_IMAGES } from './services/cleaning/images';
import { FURNITURE_MOVING_IMAGES } from './services/moving/images';
import { PEST_CONTROL_IMAGES } from './services/pest-control/images';
import { LEAK_DETECTION_IMAGES } from './services/leak-detection/images';

export { CLEANING_IMAGES, FURNITURE_MOVING_IMAGES, PEST_CONTROL_IMAGES, LEAK_DETECTION_IMAGES };

// City Hero Images - Using actual existing landmark/skyline images
export const CITY_IMAGES: Record<string, string[]> = {
    riyadh: [
        '/images/cities/riyadh/riyadh-skyline-kingdom-tower-king-fahd-road-saudi-arabia.jpg',
        '/images/cities/riyadh/riyadh-kafd-financial-district-aerial-view-clouds-saudi-arabia.jpg',
        '/images/cities/riyadh/riyadh-downtown-night-lights-modern-buildings-saudi-arabia.jpg',
    ],
    jeddah: [
        '/images/cities/jeddah/jeddah-corniche-red-sea-coast-palm-trees-towers-saudi-arabia.jpg',
        '/images/cities/jeddah/jeddah-waterfront-night-view-modern-skyline-saudi-arabia.jpg',
        '/images/cities/jeddah/jeddah-welcome-sign-sunset-palm-trees-corniche-saudi-arabia.jpg',
    ],
    makkah: [
        '/images/cities/makkah/makkah-masjid-haram-aerial-view-expansion-project-saudi-arabia.jpg',
        '/images/cities/makkah/makkah-kaaba-clock-tower-abraj-al-bait-night-pilgrims-saudi-arabia.jpg',
    ],
    madinah: [
        '/images/cities/madinah/madinah-masjid-nabawi-panoramic-view-blue-sky-saudi-arabia.jpg',
        '/images/cities/madinah/madinah-prophets-mosque-green-dome-minarets-sunset-saudi-arabia.jpg',
    ],
    taif: [
        '/images/cities/taif/taif-rose-garden-mountains-panoramic-view-saudi-arabia.jpg',
        '/images/cities/taif/taif-flower-festival-colorful-gardens-tourism-saudi-arabia.jpg',
    ],
    dammam: [
        '/images/cities/other-cities/dammam-heritage-village-waterfront-island-view-saudi-arabia.jpg',
        '/images/cities/other-cities/dammam-roundabout-night-view-highway-city-lights-saudi-arabia.jpg',
    ],
    'al-khobar': [
        '/images/cities/other-cities/khobar-city-skyline-highway-night-view-towers-saudi-arabia.jpg',
        '/images/cities/other-cities/khobar-water-tower-landmark-sunset-corniche-saudi-arabia.jpg',
    ],
    tabuk: [
        '/images/cities/other-cities/tabuk-old-castle-saudi-flag-historical-landmark-saudi-arabia.jpg',
    ],
    yanbu: [
        '/images/cities/other-cities/yanbu-city-coastal-aerial-view-red-sea-saudi-arabia.jpg',
    ],
    hail: [
        '/images/cities/other-cities/hail-city-panoramic-view-water-tower-urban-saudi-arabia.jpg',
    ],
};


// ============================================
// Smart Image Selection Functions
// ============================================

type ImageCategory = keyof typeof CLEANING_IMAGES | keyof typeof FURNITURE_MOVING_IMAGES | keyof typeof PEST_CONTROL_IMAGES;

/**
 * Get unique images for a city+silo
 * Uses deterministic selection based on city and service slugs to ensure consistency
 * but different images across pages
 */
export function getUniquePageImages(
    citySlug: string,
    serviceSlug: string,
    serviceCategory: string,
    count: number = 4
): string[] {
    // Create a hash from city+service for consistent selection
    const hash = simpleHash(citySlug + serviceSlug);

    let imagePool: string[] = [];

    // Select appropriate image pool based on service category
    switch (serviceCategory) {
        case 'moving':
            imagePool = getMovingImages(serviceSlug);
            break;
        case 'cleaning':
            imagePool = getCleaningImages(serviceSlug);
            break;
        case 'pest-control':
            imagePool = getPestControlImages(serviceSlug, citySlug);
            break;
        case 'leak-detection':
        case 'insulation':
            imagePool = getLeakDetectionImages(citySlug);
            break;
        case 'sewage':
            imagePool = [...CLEANING_IMAGES.bathroom, ...CLEANING_IMAGES.outdoor];
            break;
        default:
            imagePool = Object.values(CLEANING_IMAGES).flat();
    }

    // Select unique images using hash-based offset
    const selected: string[] = [];
    const startIndex = hash % imagePool.length;

    for (let i = 0; i < count && i < imagePool.length; i++) {
        const index = (startIndex + i) % imagePool.length;
        selected.push(imagePool[index]);
    }

    return selected;
}

/**
 * Get moving-related images based on specific service
 */
function getMovingImages(serviceSlug: string): string[] {
    switch (serviceSlug) {
        case 'furniture-moving':
            return [
                ...FURNITURE_MOVING_IMAGES.general,
                ...FURNITURE_MOVING_IMAGES.professional,
                ...FURNITURE_MOVING_IMAGES.villa,
            ];
        case 'furniture-storage':
            return [
                ...FURNITURE_MOVING_IMAGES.storage,
                ...FURNITURE_MOVING_IMAGES.packing,
            ];
        case 'dyna':
        case 'dabab':
            return [
                ...FURNITURE_MOVING_IMAGES.trucks,
                ...FURNITURE_MOVING_IMAGES.fast,
            ];
        case 'moving-out':
            return [
                ...FURNITURE_MOVING_IMAGES.intercity,
                ...FURNITURE_MOVING_IMAGES.heavy,
            ];
        default:
            return Object.values(FURNITURE_MOVING_IMAGES).flat();
    }
}

/**
 * Get cleaning-related images based on specific service
 */
function getCleaningImages(serviceSlug: string): string[] {
    const serviceToCategory: Record<string, (keyof typeof CLEANING_IMAGES)[]> = {
        'cleaning': ['home', 'commercial'],
        'tanks-cleaning': ['tank', 'bathroom'],
        'sofa-cleaning': ['sofa', 'steam'],
        'carpet-cleaning': ['carpet', 'steam'],
        'steam-cleaning': ['steam', 'carpet', 'sofa'],
        'sanitization': ['sterilization'],
        'air-conditioner-cleaning': ['ac', 'commercial'],
        'glass-facades-cleaning': ['glass', 'outdoor'],
        'floor-cleaning': ['floor'],
        'floor-polishing': ['floor', 'marble'],
        'marble-polishing': ['marble', 'floor'],
        'villas-cleaning': ['villa', 'home'],
        'apartments-cleaning': ['apartment', 'home'],
        'palaces-cleaning': ['villa', 'home'],
        'shops-cleaning': ['commercial', 'floor'],
        'office-cleaning': ['office', 'commercial'],
        'furniture-cleaning': ['sofa', 'mattress'],
        'kitchen-cleaning': ['kitchen'],
        'swimming-pool-cleaning': ['pool', 'outdoor'],
        'councils-cleaning': ['majlis', 'sofa'],
        'hourly-cleaning': ['hourly', 'home'],
        'oven-cleaning': ['kitchen'],
        'restaurant-chimney-cleaning': ['restaurant', 'kitchen'],
        'auto-cleaning': ['outdoor', 'commercial'],
    };

    const categories = serviceToCategory[serviceSlug] || ['home', 'commercial'];
    return categories.flatMap(cat => CLEANING_IMAGES[cat] || []);
}

/**
 * Get pest control images based on service and city
 */
function getPestControlImages(serviceSlug: string, citySlug: string): string[] {
    const serviceToCategory: Record<string, (keyof typeof PEST_CONTROL_IMAGES)[]> = {
        'pest-control': ['general', 'residential', 'commercial'],
        'pesticide-spraying': ['fumigation', 'spraying'],
        'insects-spraying': ['spraying', 'extermination'],
        'termite-control': ['termite'],
        'cockroach-control': ['cockroach', 'spraying'],
        'bedbugs-control': ['bedbug'],
        'rodent-control': ['rodent'],
        'ants-control': ['ant', 'spraying'],
        'bird-control': ['inspection', 'eco'],
        'snakes-control': ['snake', 'garden'],
    };

    const categories = serviceToCategory[serviceSlug] || ['general'];
    let images = categories.flatMap(cat => PEST_CONTROL_IMAGES[cat] || []);

    // Add city-specific images for major cities
    if (['riyadh', 'jeddah', 'dammam'].includes(citySlug)) {
        const cityImages = PEST_CONTROL_IMAGES.general.filter(img =>
            img.toLowerCase().includes(citySlug)
        );
        images = [...cityImages, ...images];
    }

    return images;
}

/**
 * Get leak detection images for a city
 */
function getLeakDetectionImages(citySlug: string): string[] {
    // Map city slugs to our image keys
    const cityMap: Record<string, keyof typeof LEAK_DETECTION_IMAGES> = {
        'riyadh': 'riyadh',
        'jeddah': 'jeddah',
        'dammam': 'dammam',
        'makkah': 'makkah',
        'madinah': 'madinah',
        'taif': 'taif',
        'al-khobar': 'khobar',
        'tabuk': 'tabuk',
        'qassim': 'qassim',
        'hail': 'hail',
        'abha': 'abha',
        'najran': 'najran',
        'jazan': 'jazan',
        'jubail': 'jubail',
        'yanbu': 'yanbu',
        'khamis-mushait': 'khamis',
        'al-ahsa': 'hofuf',
        'buraidah': 'buraydah',
        'dhahran': 'dhahran',
    };

    const cityKey = cityMap[citySlug];
    if (cityKey && LEAK_DETECTION_IMAGES[cityKey]) {
        return [
            ...LEAK_DETECTION_IMAGES[cityKey],
            ...LEAK_DETECTION_IMAGES.general,
        ];
    }

    // Fallback to general + nearby city images
    return [
        ...LEAK_DETECTION_IMAGES.general,
        ...LEAK_DETECTION_IMAGES.riyadh,
        ...LEAK_DETECTION_IMAGES.jeddah,
    ];
}

/**
 * Simple hash function for deterministic selection
 */
function simpleHash(str: string): number {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash; // Convert to 32bit integer
    }
    return Math.abs(hash);
}

/**
 * Get hero image for a city page
 */
export function getCityHeroImage(citySlug: string, index: number = 0): string {
    const cityImages = CITY_IMAGES[citySlug];
    if (cityImages && cityImages.length > 0) {
        return cityImages[index % cityImages.length];
    }
    // Fallback to a generic city skyline image
    return '/images/cities/other-cities/dammam-heritage-village-waterfront-island-view-saudi-arabia.jpg';
}

/**
 * Get primary image for a silo (non-city-specific)
 */
export function getServicePrimaryImage(serviceSlug: string, serviceCategory: string): string {
    const images = getCleaningImages(serviceSlug);
    if (images.length > 0) {
        return images[0];
    }

    // Fallback by category
    switch (serviceCategory) {
        case 'moving':
            return FURNITURE_MOVING_IMAGES.general[0];
        case 'pest-control':
            return PEST_CONTROL_IMAGES.general[0];
        case 'leak-detection':
            return LEAK_DETECTION_IMAGES.riyadh[0];
        default:
            return CLEANING_IMAGES.commercial[0];
    }
}
