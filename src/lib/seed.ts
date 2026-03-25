import type { City, Service } from '@/types';

// Re-export image distribution functions
export {
    getUniquePageImages,
    getCityHeroImage,
    getServicePrimaryImage,
    CLEANING_IMAGES,
    FURNITURE_MOVING_IMAGES,
    PEST_CONTROL_IMAGES,
    LEAK_DETECTION_IMAGES,
} from './image-distribution';

// Complete Saudi Cities Data (Based on Roadmap)
// ============================================
export const CITIES: City[] = [
    // Central Region (الوسطى)
    { slug: 'riyadh', name_ar: 'الرياض', name_en: 'Riyadh', region: 'central' },
    { slug: 'al-kharj', name_ar: 'الخرج', name_en: 'Al Kharj', region: 'central' },
    { slug: 'qassim', name_ar: 'القصيم', name_en: 'Al Qassim', region: 'central' },
    { slug: 'buraidah', name_ar: 'بريدة', name_en: 'Buraidah', region: 'central' },
    { slug: 'onizah', name_ar: 'عنيزة', name_en: 'Onizah', region: 'central' },
    { slug: 'diriyah', name_ar: 'الدرعية', name_en: 'Diriyah', region: 'central' },
    { slug: 'majmaah', name_ar: 'المجمعة', name_en: 'Majmaah', region: 'central' },

    // Western Region (الغربية)
    { slug: 'jeddah', name_ar: 'جدة', name_en: 'Jeddah', region: 'western' },
    { slug: 'makkah', name_ar: 'مكة المكرمة', name_en: 'Makkah', region: 'western' },
    { slug: 'madinah', name_ar: 'المدينة المنورة', name_en: 'Madinah', region: 'western' },
    { slug: 'taif', name_ar: 'الطائف', name_en: 'Taif', region: 'western' },
    { slug: 'yanbu', name_ar: 'ينبع', name_en: 'Yanbu', region: 'western' },
    { slug: 'rabigh', name_ar: 'رابغ', name_en: 'Rabigh', region: 'western' },

    // Eastern Region (الشرقية)
    { slug: 'dammam', name_ar: 'الدمام', name_en: 'Dammam', region: 'eastern' },
    { slug: 'al-khobar', name_ar: 'الخبر', name_en: 'Al Khobar', region: 'eastern' },
    { slug: 'dhahran', name_ar: 'الظهران', name_en: 'Dhahran', region: 'eastern' },
    { slug: 'jubail', name_ar: 'الجبيل', name_en: 'Jubail', region: 'eastern' },
    { slug: 'al-ahsa', name_ar: 'الاحساء', name_en: 'Al Ahsa', region: 'eastern' },
    { slug: 'qatif', name_ar: 'القطيف', name_en: 'Qatif', region: 'eastern' },
    { slug: 'hafr-albatin', name_ar: 'حفر الباطن', name_en: 'Hafr Al Batin', region: 'eastern' },
    { slug: 'ras-tanura', name_ar: 'رأس تنورة', name_en: 'Ras Tanura', region: 'eastern' },

    // Northern Region (الشمالية)
    { slug: 'tabuk', name_ar: 'تبوك', name_en: 'Tabuk', region: 'northern' },
    { slug: 'hail', name_ar: 'حائل', name_en: 'Hail', region: 'northern' },
    { slug: 'neom', name_ar: 'نيوم', name_en: 'NEOM', region: 'northern' },

    // Southern Region (الجنوبية)
    { slug: 'abha', name_ar: 'أبها', name_en: 'Abha', region: 'southern' },
    { slug: 'khamis-mushait', name_ar: 'خميس مشيط', name_en: 'Khamis Mushait', region: 'southern' },
    { slug: 'najran', name_ar: 'نجران', name_en: 'Najran', region: 'southern' },
    { slug: 'jazan', name_ar: 'جازان', name_en: 'Jazan', region: 'southern' },
    { slug: 'al-baha', name_ar: 'الباحة', name_en: 'Al Baha', region: 'southern' },
];

// SERVICES and SERVICE_IMAGES are now imported from the modular services folder
import { SERVICES, SERVICE_IMAGES } from './services';
export { SERVICES, SERVICE_IMAGES };

// ============================================
// Helper Functions
// ============================================

// Get city by slug
export function getCityBySlug(slug: string): City | undefined {
    return CITIES.find(city => city.slug === slug);
}

// Get service by slug
export function getServiceBySlug(slug: string): Service | undefined {
    return SERVICES.find(service => service.slug === slug);
}

// Get cities grouped by region
export function getCitiesByRegion(): Record<string, City[]> {
    return CITIES.reduce((acc, city) => {
        if (!acc[city.region]) {
            acc[city.region] = [];
        }
        acc[city.region].push(city);
        return acc;
    }, {} as Record<string, City[]>);
}

// Get services grouped by category
export function getServicesByCategory(): Record<string, Service[]> {
    return SERVICES.reduce((acc, service) => {
        if (!acc[service.category]) {
            acc[service.category] = [];
        }
        acc[service.category].push(service);
        return acc;
    }, {} as Record<string, Service[]>);
}

// Get a relevant image for a service (smart selection)
export function getServiceImage(serviceSlug: string, index: number = 0): string {
    const images = SERVICE_IMAGES[serviceSlug];
    if (images && images.length > 0) {
        return images[index % images.length];
    }
    // Fallback to a general image
    return '/images/cleaning/professional_cleaning_company_saudi.jpg';
}

// Get multiple images for a service
export function getServiceImages(serviceSlug: string, count: number = 4): string[] {
    const images = SERVICE_IMAGES[serviceSlug];
    if (images && images.length > 0) {
        // Return up to 'count' images, cycling if needed
        return Array.from({ length: Math.min(count, images.length) }, (_, i) => images[i]);
    }
    return ['/images/cleaning/professional_cleaning_company_saudi.jpg'];
}

// Get a city-specific image if available
export function getCityServiceImage(citySlug: string, serviceSlug: string): string {
    // For leak detection, we have city-specific images
    if (serviceSlug === 'water-leak-detection') {
        const cityImageMap: Record<string, string> = {
            'riyadh': '/images/leak-detection/Riyadh water leak detection Saudi Arabia.jpg',
            'jeddah': '/images/leak-detection/Jeddah water leak detection Saudi Arabia.jpg',
            'dammam': '/images/leak-detection/Dammam water leak detection Saudi Arabia.jpg',
            'makkah': '/images/leak-detection/Makkah water leak detection Saudi Arabia.jpg',
            'madinah': '/images/leak-detection/Madinah water leak detection Saudi Arabia.jpg',
            'taif': '/images/leak-detection/Taif water leak detection Saudi Arabia.jpg',
            'al-khobar': '/images/leak-detection/Khobar water leak detection Saudi Arabia.jpg',
            'abha': '/images/leak-detection/Abha water leak detection Saudi Arabia.jpg',
            'hail': '/images/leak-detection/Hail water leak detection Saudi Arabia.jpg',
            'jazan': '/images/leak-detection/Jazan water leak detection Saudi Arabia.jpg',
            'najran': '/images/leak-detection/Najran water leak detection Saudi Arabia.jpg',
            'tabuk': '/images/leak-detection/Tabuk water leak detection Saudi Arabia.jpg',
            'khamis-mushait': '/images/leak-detection/Khamis Mushait water leak detection Saudi Arabia.jpg',
            'qassim': '/images/leak-detection/Qassim water leak detection Saudi Arabia.jpg',
            'al-ahsa': '/images/leak-detection/Al Ahsa water leak detection Saudi Arabia.jpg',
            'jubail': '/images/leak-detection/Jubail sink drain repair plumber Saudi Arabia.jpg',
            'yanbu': '/images/leak-detection/Yanbu acoustic leak detector equipment Saudi Arabia.jpg',
        };
        return cityImageMap[citySlug] || getServiceImage(serviceSlug);
    }

    // For other services, return generic service image
    return getServiceImage(serviceSlug);
}

// Region names in Arabic
export const REGION_NAMES: Record<string, string> = {
    'central': 'المنطقة الوسطى',
    'western': 'المنطقة الغربية',
    'eastern': 'المنطقة الشرقية',
    'northern': 'المنطقة الشمالية',
    'southern': 'المنطقة الجنوبية',
};

// Category names in Arabic
export const CATEGORY_NAMES: Record<string, string> = {
    'moving': 'نقل',
    'cleaning': 'تنظيف',
    'sewage': 'صرف صحي',
    'pest-control': 'مكافحة حشرات',
    'leak-detection': 'كشف تسربات',
    'insulation': 'عزل',
};
