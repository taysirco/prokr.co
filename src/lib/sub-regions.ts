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

// Sub-regions data by city (24 cities)
export const SUB_REGIONS: Record<string, SubRegion[]> = {
    // ============================================
    // CENTRAL REGION
    // ============================================
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
            services: ['furniture-moving', 'cleaning', 'pest-control']
        },
        {
            slug: 'south',
            name_ar: 'جنوب الرياض',
            name_en: 'South Riyadh',
            citySlug: 'riyadh',
            services: ['furniture-moving', 'cleaning', 'water-leak-detection']
        },
    ],
    'al-kharj': [
        {
            slug: 'city-center',
            name_ar: 'وسط الخرج',
            name_en: 'Al Kharj Center',
            citySlug: 'al-kharj',
            services: ['furniture-moving', 'pest-control', 'cleaning']
        },
        {
            slug: 'industrial',
            name_ar: 'المنطقة الصناعية',
            name_en: 'Industrial Area',
            citySlug: 'al-kharj',
            services: ['pest-control', 'sewer-cleaning']
        },
    ],
    'qassim': [
        {
            slug: 'buraidah-center',
            name_ar: 'وسط القصيم',
            name_en: 'Qassim Center',
            citySlug: 'qassim',
            services: ['furniture-moving', 'cleaning', 'pest-control']
        },
        {
            slug: 'ar-rass',
            name_ar: 'الرس',
            name_en: 'Ar Rass',
            citySlug: 'qassim',
            services: ['furniture-moving', 'water-leak-detection']
        },
    ],
    'buraidah': [
        {
            slug: 'center',
            name_ar: 'وسط بريدة',
            name_en: 'Buraidah Center',
            citySlug: 'buraidah',
            services: ['furniture-moving', 'cleaning', 'pest-control', 'tank-insulation']
        },
        {
            slug: 'north-buraidah',
            name_ar: 'شمال بريدة',
            name_en: 'North Buraidah',
            citySlug: 'buraidah',
            services: ['furniture-moving', 'pest-control']
        },
    ],
    'onizah': [
        {
            slug: 'center',
            name_ar: 'وسط عنيزة',
            name_en: 'Onizah Center',
            citySlug: 'onizah',
            services: ['furniture-moving', 'cleaning', 'pest-control']
        },
    ],
    // ============================================
    // WESTERN REGION
    // ============================================
    'jeddah': [
        {
            slug: 'al-hamdania',
            name_ar: 'الحمدانية',
            name_en: 'Al Hamdania',
            citySlug: 'jeddah',
            services: ['tanks-cleaning', 'cleaning', 'pest-control']
        },
        {
            slug: 'north-jeddah',
            name_ar: 'شمال جدة',
            name_en: 'North Jeddah',
            citySlug: 'jeddah',
            services: ['furniture-moving', 'cleaning', 'pest-control', 'water-leak-detection']
        },
        {
            slug: 'south-jeddah',
            name_ar: 'جنوب جدة',
            name_en: 'South Jeddah',
            citySlug: 'jeddah',
            services: ['furniture-moving', 'sewer-cleaning', 'pest-control']
        },
        {
            slug: 'obhur',
            name_ar: 'أبحر',
            name_en: 'Obhur',
            citySlug: 'jeddah',
            services: ['cleaning', 'pest-control', 'tank-insulation']
        },
    ],
    'makkah': [
        {
            slug: 'sharaia',
            name_ar: 'الشرائع',
            name_en: 'Al Sharaia',
            citySlug: 'makkah',
            services: ['furniture-moving', 'cleaning', 'pest-control']
        },
        {
            slug: 'awali',
            name_ar: 'العوالي',
            name_en: 'Al Awali',
            citySlug: 'makkah',
            services: ['furniture-moving', 'cleaning', 'water-leak-detection']
        },
        {
            slug: 'aziziya',
            name_ar: 'العزيزية',
            name_en: 'Al Aziziya',
            citySlug: 'makkah',
            services: ['furniture-moving', 'pest-control', 'sewer-cleaning']
        },
    ],
    'madinah': [
        {
            slug: 'quba',
            name_ar: 'قباء',
            name_en: 'Quba',
            citySlug: 'madinah',
            services: ['furniture-moving', 'cleaning', 'pest-control']
        },
        {
            slug: 'alharam',
            name_ar: 'منطقة الحرم',
            name_en: 'Haram Area',
            citySlug: 'madinah',
            services: ['cleaning', 'pest-control']
        },
    ],
    'taif': [
        {
            slug: 'center',
            name_ar: 'وسط الطائف',
            name_en: 'Taif Center',
            citySlug: 'taif',
            services: ['furniture-moving', 'cleaning', 'pest-control']
        },
        {
            slug: 'al-hada',
            name_ar: 'الهدا',
            name_en: 'Al Hada',
            citySlug: 'taif',
            services: ['cleaning', 'pest-control', 'tank-insulation']
        },
    ],
    'yanbu': [
        {
            slug: 'industrial',
            name_ar: 'ينبع الصناعية',
            name_en: 'Yanbu Industrial',
            citySlug: 'yanbu',
            services: ['cleaning', 'pest-control', 'tank-insulation']
        },
        {
            slug: 'bahar',
            name_ar: 'ينبع البحر',
            name_en: 'Yanbu Al Bahar',
            citySlug: 'yanbu',
            services: ['furniture-moving', 'cleaning', 'water-leak-detection']
        },
    ],
    // ============================================
    // EASTERN REGION
    // ============================================
    'dammam': [
        {
            slug: 'north-dammam',
            name_ar: 'شمال الدمام',
            name_en: 'North Dammam',
            citySlug: 'dammam',
            services: ['furniture-moving', 'cleaning', 'pest-control', 'water-leak-detection']
        },
        {
            slug: 'south-dammam',
            name_ar: 'جنوب الدمام',
            name_en: 'South Dammam',
            citySlug: 'dammam',
            services: ['furniture-moving', 'sewer-cleaning', 'pest-control']
        },
        {
            slug: 'corniche',
            name_ar: 'الكورنيش',
            name_en: 'Corniche',
            citySlug: 'dammam',
            services: ['cleaning', 'pest-control', 'tank-insulation']
        },
    ],
    'al-khobar': [
        {
            slug: 'north-khobar',
            name_ar: 'شمال الخبر',
            name_en: 'North Khobar',
            citySlug: 'al-khobar',
            services: ['furniture-moving', 'cleaning', 'pest-control']
        },
        {
            slug: 'south-khobar',
            name_ar: 'جنوب الخبر',
            name_en: 'South Khobar',
            citySlug: 'al-khobar',
            services: ['furniture-moving', 'water-leak-detection', 'tank-insulation']
        },
    ],
    'dhahran': [
        {
            slug: 'doha',
            name_ar: 'الدوحة',
            name_en: 'Doha District',
            citySlug: 'dhahran',
            services: ['furniture-moving', 'cleaning', 'pest-control']
        },
    ],
    'jubail': [
        {
            slug: 'industrial-jubail',
            name_ar: 'الجبيل الصناعية',
            name_en: 'Jubail Industrial',
            citySlug: 'jubail',
            services: ['cleaning', 'pest-control', 'tank-insulation']
        },
        {
            slug: 'residential-jubail',
            name_ar: 'الجبيل السكنية',
            name_en: 'Jubail Residential',
            citySlug: 'jubail',
            services: ['furniture-moving', 'cleaning', 'water-leak-detection']
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
            services: ['furniture-moving', 'cleaning', 'pest-control']
        },
    ],
    'qatif': [
        {
            slug: 'center',
            name_ar: 'وسط القطيف',
            name_en: 'Qatif Center',
            citySlug: 'qatif',
            services: ['furniture-moving', 'cleaning', 'pest-control']
        },
        {
            slug: 'tarut',
            name_ar: 'تاروت',
            name_en: 'Tarut Island',
            citySlug: 'qatif',
            services: ['pest-control', 'water-leak-detection']
        },
    ],
    'hafr-albatin': [
        {
            slug: 'center',
            name_ar: 'وسط حفر الباطن',
            name_en: 'Hafr Al-Batin Center',
            citySlug: 'hafr-albatin',
            services: ['furniture-moving', 'cleaning', 'pest-control']
        },
    ],
    // ============================================
    // NORTHERN REGION
    // ============================================
    'tabuk': [
        {
            slug: 'center',
            name_ar: 'وسط تبوك',
            name_en: 'Tabuk Center',
            citySlug: 'tabuk',
            services: ['furniture-moving', 'cleaning', 'pest-control', 'tank-insulation']
        },
        {
            slug: 'north-tabuk',
            name_ar: 'شمال تبوك',
            name_en: 'North Tabuk',
            citySlug: 'tabuk',
            services: ['furniture-moving', 'water-leak-detection']
        },
    ],
    'hail': [
        {
            slug: 'center',
            name_ar: 'وسط حائل',
            name_en: 'Hail Center',
            citySlug: 'hail',
            services: ['furniture-moving', 'cleaning', 'pest-control', 'tank-insulation']
        },
        {
            slug: 'barzan',
            name_ar: 'برزان',
            name_en: 'Barzan',
            citySlug: 'hail',
            services: ['furniture-moving', 'cleaning']
        },
    ],
    // ============================================
    // SOUTHERN REGION
    // ============================================
    'abha': [
        {
            slug: 'center',
            name_ar: 'وسط أبها',
            name_en: 'Abha Center',
            citySlug: 'abha',
            services: ['furniture-moving', 'cleaning', 'pest-control', 'water-leak-detection']
        },
        {
            slug: 'al-soudah',
            name_ar: 'السودة',
            name_en: 'Al Soudah',
            citySlug: 'abha',
            services: ['cleaning', 'pest-control', 'tank-insulation']
        },
    ],
    'khamis-mushait': [
        {
            slug: 'center',
            name_ar: 'وسط خميس مشيط',
            name_en: 'Khamis Mushait Center',
            citySlug: 'khamis-mushait',
            services: ['furniture-moving', 'cleaning', 'pest-control']
        },
        {
            slug: 'north-khamis',
            name_ar: 'شمال خميس مشيط',
            name_en: 'North Khamis',
            citySlug: 'khamis-mushait',
            services: ['furniture-moving', 'tank-insulation']
        },
    ],
    'najran': [
        {
            slug: 'center',
            name_ar: 'وسط نجران',
            name_en: 'Najran Center',
            citySlug: 'najran',
            services: ['furniture-moving', 'cleaning', 'pest-control']
        },
    ],
    'jazan': [
        {
            slug: 'center',
            name_ar: 'وسط جازان',
            name_en: 'Jazan Center',
            citySlug: 'jazan',
            services: ['furniture-moving', 'cleaning', 'pest-control']
        },
        {
            slug: 'port',
            name_ar: 'منطقة الميناء',
            name_en: 'Port Area',
            citySlug: 'jazan',
            services: ['cleaning', 'pest-control', 'sewer-cleaning']
        },
    ],
    'al-baha': [
        {
            slug: 'center',
            name_ar: 'وسط الباحة',
            name_en: 'Al Baha Center',
            citySlug: 'al-baha',
            services: ['furniture-moving', 'cleaning', 'pest-control']
        },
        {
            slug: 'mikhwah',
            name_ar: 'المخواة',
            name_en: 'Al Mikhwah',
            citySlug: 'al-baha',
            services: ['furniture-moving', 'pest-control']
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
