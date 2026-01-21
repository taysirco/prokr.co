import type { City, Service } from '@/types';

// ============================================
// Complete Saudi Cities Data (Based on Roadmap)
// ============================================
export const CITIES: City[] = [
    // Central Region (الوسطى)
    { slug: 'riyadh', name_ar: 'الرياض', name_en: 'Riyadh', region: 'central' },
    { slug: 'al-kharj', name_ar: 'الخرج', name_en: 'Al Kharj', region: 'central' },
    { slug: 'qassim', name_ar: 'القصيم', name_en: 'Al Qassim', region: 'central' },
    { slug: 'buraidah', name_ar: 'بريدة', name_en: 'Buraidah', region: 'central' },
    { slug: 'onizah', name_ar: 'عنيزة', name_en: 'Onizah', region: 'central' },

    // Western Region (الغربية)
    { slug: 'jeddah', name_ar: 'جدة', name_en: 'Jeddah', region: 'western' },
    { slug: 'makkah', name_ar: 'مكة المكرمة', name_en: 'Makkah', region: 'western' },
    { slug: 'madinah', name_ar: 'المدينة المنورة', name_en: 'Madinah', region: 'western' },
    { slug: 'taif', name_ar: 'الطائف', name_en: 'Taif', region: 'western' },
    { slug: 'yanbu', name_ar: 'ينبع', name_en: 'Yanbu', region: 'western' },

    // Eastern Region (الشرقية)
    { slug: 'dammam', name_ar: 'الدمام', name_en: 'Dammam', region: 'eastern' },
    { slug: 'al-khobar', name_ar: 'الخبر', name_en: 'Al Khobar', region: 'eastern' },
    { slug: 'dhahran', name_ar: 'الظهران', name_en: 'Dhahran', region: 'eastern' },
    { slug: 'jubail', name_ar: 'الجبيل', name_en: 'Jubail', region: 'eastern' },
    { slug: 'al-ahsa', name_ar: 'الاحساء', name_en: 'Al Ahsa', region: 'eastern' },
    { slug: 'qatif', name_ar: 'القطيف', name_en: 'Qatif', region: 'eastern' },
    { slug: 'hafr-albatin', name_ar: 'حفر الباطن', name_en: 'Hafr Al Batin', region: 'eastern' },

    // Northern Region (الشمالية)
    { slug: 'tabuk', name_ar: 'تبوك', name_en: 'Tabuk', region: 'northern' },
    { slug: 'hail', name_ar: 'حائل', name_en: 'Hail', region: 'northern' },

    // Southern Region (الجنوبية)
    { slug: 'abha', name_ar: 'أبها', name_en: 'Abha', region: 'southern' },
    { slug: 'khamis-mushait', name_ar: 'خميس مشيط', name_en: 'Khamis Mushait', region: 'southern' },
    { slug: 'najran', name_ar: 'نجران', name_en: 'Najran', region: 'southern' },
    { slug: 'jazan', name_ar: 'جازان', name_en: 'Jazan', region: 'southern' },
    { slug: 'al-baha', name_ar: 'الباحة', name_en: 'Al Baha', region: 'southern' },
];

// ============================================
// Complete Services Data (Based on Roadmap)
// ============================================
export const SERVICES: Service[] = [
    // نقل (Moving)
    { slug: 'furniture-moving', name_ar: 'نقل عفش', name_en: 'Furniture Moving', category: 'moving' },
    { slug: 'furniture-storage', name_ar: 'تخزين اثاث', name_en: 'Furniture Storage', category: 'moving' },
    { slug: 'dyna', name_ar: 'دينات نقل', name_en: 'Dyna Moving', category: 'moving' },
    { slug: 'moving-out', name_ar: 'نقل عفش بين المدن', name_en: 'Intercity Moving', category: 'moving' },
    { slug: 'dabab', name_ar: 'دباب نقل عفش', name_en: 'Dabab Moving', category: 'moving' },

    // تنظيف (Cleaning)
    { slug: 'cleaning', name_ar: 'تنظيف منازل', name_en: 'Home Cleaning', category: 'cleaning' },
    { slug: 'tanks-cleaning', name_ar: 'تنظيف خزانات', name_en: 'Tank Cleaning', category: 'cleaning' },
    { slug: 'sofa-cleaning', name_ar: 'تنظيف كنب', name_en: 'Sofa Cleaning', category: 'cleaning' },
    { slug: 'carpet-cleaning', name_ar: 'تنظيف سجاد', name_en: 'Carpet Cleaning', category: 'cleaning' },
    { slug: 'steam-cleaning', name_ar: 'تنظيف بالبخار', name_en: 'Steam Cleaning', category: 'cleaning' },
    { slug: 'sanitization', name_ar: 'تعقيم', name_en: 'Sanitization', category: 'cleaning' },
    { slug: 'air-conditioner-cleaning', name_ar: 'تنظيف مكيفات', name_en: 'AC Cleaning', category: 'cleaning' },
    { slug: 'glass-facades-cleaning', name_ar: 'تنظيف واجهات زجاج', name_en: 'Glass Facades Cleaning', category: 'cleaning' },
    { slug: 'floor-cleaning', name_ar: 'تنظيف ارضيات', name_en: 'Floor Cleaning', category: 'cleaning' },
    { slug: 'floor-polishing', name_ar: 'جلي بلاط', name_en: 'Floor Polishing', category: 'cleaning' },
    { slug: 'marble-polishing', name_ar: 'جلي رخام', name_en: 'Marble Polishing', category: 'cleaning' },
    { slug: 'villas-cleaning', name_ar: 'تنظيف فلل', name_en: 'Villa Cleaning', category: 'cleaning' },
    { slug: 'apartments-cleaning', name_ar: 'تنظيف شقق', name_en: 'Apartment Cleaning', category: 'cleaning' },
    { slug: 'palaces-cleaning', name_ar: 'تنظيف قصور', name_en: 'Palace Cleaning', category: 'cleaning' },
    { slug: 'shops-cleaning', name_ar: 'تنظيف محلات', name_en: 'Shop Cleaning', category: 'cleaning' },
    { slug: 'office-cleaning', name_ar: 'تنظيف مكاتب', name_en: 'Office Cleaning', category: 'cleaning' },
    { slug: 'furniture-cleaning', name_ar: 'تنظيف اثاث', name_en: 'Furniture Cleaning', category: 'cleaning' },
    { slug: 'kitchen-cleaning', name_ar: 'تنظيف مطابخ', name_en: 'Kitchen Cleaning', category: 'cleaning' },
    { slug: 'swimming-pool-cleaning', name_ar: 'تنظيف مسابح', name_en: 'Pool Cleaning', category: 'cleaning' },
    { slug: 'auto-cleaning', name_ar: 'تنظيف سيارات', name_en: 'Car Cleaning', category: 'cleaning' },
    { slug: 'oven-cleaning', name_ar: 'تنظيف افران', name_en: 'Oven Cleaning', category: 'cleaning' },
    { slug: 'councils-cleaning', name_ar: 'تنظيف مجالس', name_en: 'Majlis Cleaning', category: 'cleaning' },
    { slug: 'hourly-cleaning', name_ar: 'تنظيف بالساعة', name_en: 'Hourly Cleaning', category: 'cleaning' },
    { slug: 'restaurant-chimney-cleaning', name_ar: 'تنظيف مداخن مطاعم', name_en: 'Restaurant Chimney Cleaning', category: 'cleaning' },

    // مجاري (Sewage)
    { slug: 'sewer-cleaning', name_ar: 'تسليك مجاري', name_en: 'Sewer Cleaning', category: 'sewage' },
    { slug: 'sewage-pumping', name_ar: 'شفط بيارات', name_en: 'Sewage Pumping', category: 'sewage' },
    { slug: 'sewer-suction-trucks', name_ar: 'وايت شفط', name_en: 'Suction Trucks', category: 'sewage' },
    { slug: 'sewage-compressor', name_ar: 'كمبروسر مجاري', name_en: 'Sewage Compressor', category: 'sewage' },

    // مكافحة حشرات (Pest Control)
    { slug: 'pest-control', name_ar: 'مكافحة حشرات', name_en: 'Pest Control', category: 'pest-control' },
    { slug: 'pesticide-spraying', name_ar: 'رش مبيدات', name_en: 'Pesticide Spraying', category: 'pest-control' },
    { slug: 'insects-spraying', name_ar: 'رش حشرات', name_en: 'Insect Spraying', category: 'pest-control' },
    { slug: 'termite-control', name_ar: 'مكافحة النمل الابيض', name_en: 'Termite Control', category: 'pest-control' },
    { slug: 'cockroach-control', name_ar: 'مكافحة الصراصير', name_en: 'Cockroach Control', category: 'pest-control' },
    { slug: 'bedbugs-control', name_ar: 'مكافحة البق', name_en: 'Bedbug Control', category: 'pest-control' },
    { slug: 'rodent-control', name_ar: 'مكافحة الفئران', name_en: 'Rodent Control', category: 'pest-control' },
    { slug: 'ants-control', name_ar: 'مكافحة النمل', name_en: 'Ant Control', category: 'pest-control' },
    { slug: 'bird-control', name_ar: 'مكافحة الحمام', name_en: 'Bird Control', category: 'pest-control' },
    { slug: 'snakes-control', name_ar: 'مكافحة الثعابين', name_en: 'Snake Control', category: 'pest-control' },

    // كشف تسربات وعزل (Leak Detection & Insulation)
    { slug: 'water-leak-detection', name_ar: 'كشف تسربات المياه', name_en: 'Water Leak Detection', category: 'leak-detection' },
    { slug: 'tank-leak-detection', name_ar: 'كشف تسربات الخزانات', name_en: 'Tank Leak Detection', category: 'leak-detection' },
    { slug: 'bathroom-leak-detection', name_ar: 'كشف تسربات الحمامات', name_en: 'Bathroom Leak Detection', category: 'leak-detection' },
    { slug: 'tank-insulation', name_ar: 'عزل خزانات', name_en: 'Tank Insulation', category: 'insulation' },
    { slug: 'roof-insulation', name_ar: 'عزل اسطح', name_en: 'Roof Insulation', category: 'insulation' },
    { slug: 'foam-insulation', name_ar: 'عزل فوم', name_en: 'Foam Insulation', category: 'insulation' },
    { slug: 'water-insulation', name_ar: 'عزل مائي', name_en: 'Water Insulation', category: 'insulation' },
    { slug: 'thermal-insulation', name_ar: 'عزل حراري', name_en: 'Thermal Insulation', category: 'insulation' },
];

// ============================================
// Image Mapping for Services
// ============================================
export const SERVICE_IMAGES: Record<string, string[]> = {
    // نقل عفش (Furniture Moving)
    'furniture-moving': [
        '/images/furniture-moving/furniture-movers-saudi-truck-loading-sofa.jpg',
        '/images/furniture-moving/professional-packers-movers-riyadh-wrapped-chair.jpg',
        '/images/furniture-moving/villa-furniture-moving-company-saudi-truck-packing.jpg',
        '/images/furniture-moving/affordable-furniture-moving-company-riyadh-living-room-sofa.jpg',
        '/images/furniture-moving/best-furniture-moving-company-jeddah-box-packing.jpg',
    ],
    'furniture-storage': [
        '/images/furniture-moving/furniture-moving-storage-riyadh-cabinets-chairs.jpg',
        '/images/furniture-moving/moving-storage-company-riyadh-boxes-chairs-lighting.jpg',
    ],
    'dyna': [
        '/images/furniture-moving/cheap-furniture-moving-riyadh-sofa-truck-loading.jpg',
        '/images/furniture-moving/truck-rental-furniture-moving-jeddah-carpet-packing.jpg',
    ],
    'moving-out': [
        '/images/furniture-moving/intercity-furniture-moving-saudi-boxes-sofa.jpg',
        '/images/furniture-moving/long-distance-furniture-moving-saudi-living-room.jpg',
        '/images/furniture-moving/international-moving-saudi-gray-sofa-boxes.jpg',
    ],
    'dabab': [
        '/images/furniture-moving/same-day-furniture-moving-jeddah-box-packing.jpg',
    ],

    // تنظيف (Cleaning)
    'cleaning': [
        '/images/cleaning/home_cleaning_services_riyadh.jpg',
        '/images/cleaning/house_deep_cleaning_jeddah.jpg',
        '/images/cleaning/cleaning_services_company_provider.jpg',
        '/images/cleaning/professional_cleaning_company_saudi.jpg',
    ],
    'tanks-cleaning': [
        '/images/cleaning/water_tank_cleaning_saudi_arabia.jpg',
    ],
    'sofa-cleaning': [
        '/images/cleaning/sofa_cleaning_services_jeddah.jpg',
        '/images/cleaning/deep_sofa_cleaning_services.jpg',
        '/images/cleaning/sofa_shampoo_cleaning_services.jpg',
        '/images/cleaning/steam_sofa_cleaning_jeddah.jpg',
    ],
    'carpet-cleaning': [
        '/images/cleaning/carpet_cleaning_company_riyadh.jpg',
        '/images/cleaning/carpet_cleaning_services_dammam.jpg',
        '/images/cleaning/steam_carpet_washing.jpg',
        '/images/cleaning/shampoo_carpet_washing.jpg',
    ],
    'steam-cleaning': [
        '/images/cleaning/steam_carpet_washing.jpg',
        '/images/cleaning/steam_sofa_cleaning_jeddah.jpg',
        '/images/cleaning/steam_wall_cleaning_services.jpg',
    ],
    'sanitization': [
        '/images/cleaning/comprehensive_sterilization_services.jpg',
        '/images/cleaning/home_sterilization_company_riyadh.jpg',
        '/images/cleaning/disinfection_and_sanitization_services.jpg',
    ],
    'air-conditioner-cleaning': [
        '/images/cleaning/ac_cleaning_and_maintenance_services.jpg',
    ],
    'glass-facades-cleaning': [
        '/images/cleaning/glass_facade_cleaning_riyadh.jpg',
        '/images/cleaning/building_facade_washing.jpg',
        '/images/cleaning/high_rise_facade_cleaning.jpg',
        '/images/cleaning/building_glass_cleaning.jpg',
    ],
    'floor-cleaning': [
        '/images/cleaning/floor_cleaning_and_polishing_service.jpg',
        '/images/cleaning/floor_mopping_services_riyadh.jpg',
    ],
    'floor-polishing': [
        '/images/cleaning/tile_polishing_services_riyadh.jpg',
        '/images/cleaning/tile_and_ceramic_polishing.jpg',
        '/images/cleaning/shop_floor_tile_polishing.jpg',
    ],
    'marble-polishing': [
        '/images/cleaning/marble_floor_polishing_services.jpg',
        '/images/cleaning/marble_polishing_and_grinding_riyadh.jpg',
        '/images/cleaning/marble_polishing_machine.jpg',
        '/images/cleaning/kitchen_marble_polishing.jpg',
    ],
    'villas-cleaning': [
        '/images/cleaning/villa_cleaning_services_riyadh.jpg',
        '/images/cleaning/villa_cleaning_team_riyadh.jpg',
    ],
    'apartments-cleaning': [
        '/images/cleaning/apartment_cleaning_services_riyadh.jpg',
        '/images/cleaning/residential_apartment_cleaning.jpg',
    ],
    'palaces-cleaning': [
        '/images/cleaning/villa_cleaning_team_riyadh.jpg',
    ],
    'shops-cleaning': [
        '/images/cleaning/commercial_cleaning_services_saudi.jpg',
        '/images/cleaning/shop_floor_tile_polishing.jpg',
    ],
    'office-cleaning': [
        '/images/cleaning/office_cleaning_services_saudi_arabia.jpg',
        '/images/cleaning/corporate_office_cleaning_services.jpg',
        '/images/cleaning/office_cleaner_worker.jpg',
    ],
    'furniture-cleaning': [
        '/images/cleaning/deep_sofa_cleaning_services.jpg',
    ],
    'kitchen-cleaning': [
        '/images/cleaning/kitchen_deep_cleaning_service.jpg',
        '/images/cleaning/kitchen_cleaning_maid_riyadh.jpg',
    ],
    'swimming-pool-cleaning': [
        '/images/cleaning/swimming_pool_cleaning.jpg',
    ],
    'councils-cleaning': [
        '/images/cleaning/arabic_majlis_cleaning.jpg',
    ],
    'hourly-cleaning': [
        '/images/cleaning/hourly_cleaning_maids.jpg',
        '/images/cleaning/hourly_maid_services_riyadh.jpg',
    ],
    'oven-cleaning': [
        '/images/cleaning/gas_oven_cleaning_services.jpg',
        '/images/cleaning/oven_grease_removal_cleaning.jpg',
    ],
    'restaurant-chimney-cleaning': [
        '/images/cleaning/restaurant_kitchen_cleaning_hygiene.jpg',
        '/images/cleaning/restaurant_cleaning_services_riyadh.jpg',
    ],

    // مجاري (Sewage)
    'sewer-cleaning': [
        '/images/cleaning/bathroom_deep_cleaning_riyadh.jpg',
    ],
    'sewage-pumping': [
        '/images/cleaning/bathroom_deep_cleaning_riyadh.jpg',
    ],
    'sewer-suction-trucks': [
        '/images/cleaning/bathroom_deep_cleaning_riyadh.jpg',
    ],
    'sewage-compressor': [
        '/images/cleaning/bathroom_deep_cleaning_riyadh.jpg',
    ],

    // مكافحة حشرات (Pest Control)
    'pest-control': [
        '/images/pest-control/pest-control-saudi-arabia.jpg',
        '/images/pest-control/pest-control-riyadh.jpg',
        '/images/pest-control/pest-control-jeddah.jpg',
        '/images/pest-control/pest-control-company-saudi-arabia-best.jpg',
    ],
    'pesticide-spraying': [
        '/images/pest-control/fumigation-services-ksa.jpg',
        '/images/pest-control/fumigation-company-riyadh.jpg',
        '/images/pest-control/pest-spray-technician-riyadh.jpg',
    ],
    'insects-spraying': [
        '/images/pest-control/insect-spraying-riyadh-baseboard.jpg',
        '/images/pest-control/insect-spraying-jeddah-home.jpg',
    ],
    'termite-control': [
        '/images/pest-control/termite-control-riyadh.jpg',
        '/images/pest-control/termite-treatment-saudi-arabia.jpg',
        '/images/pest-control/white-ants-treatment-saudi.jpg',
    ],
    'cockroach-control': [
        '/images/pest-control/cockroach-control-saudi-wall.jpg',
        '/images/pest-control/cockroach-extermination-riyadh.jpg',
        '/images/pest-control/cockroach-treatment-jeddah-kitchen.jpg',
    ],
    'bedbugs-control': [
        '/images/pest-control/bed-bug-removal-jeddah.jpg',
        '/images/pest-control/furniture-fumigation-saudi-bedroom.jpg',
    ],
    'rodent-control': [
        '/images/pest-control/rodent-removal-saudi-arabia.jpg',
        '/images/pest-control/rodent-proofing-service-saudi.jpg',
    ],
    'ants-control': [
        '/images/pest-control/ant-control-service-saudi-arabia.jpg',
    ],
    'bird-control': [
        '/images/pest-control/pest-prevention-saudi-arabia.jpg',
    ],
    'snakes-control': [
        '/images/pest-control/snake-scorpion-removal-saudi.jpg',
    ],

    // كشف تسربات (Leak Detection)
    'water-leak-detection': [
        '/images/leak-detection/Riyadh water leak detection Saudi Arabia.jpg',
        '/images/leak-detection/Jeddah water leak detection Saudi Arabia.jpg',
        '/images/leak-detection/Dammam water leak detection Saudi Arabia.jpg',
        '/images/leak-detection/Saudi Arabia leak detection services near me.jpg',
    ],
    'tank-leak-detection': [
        '/images/leak-detection/Khobar water tank leak detection Saudi Arabia.jpg',
    ],
    'bathroom-leak-detection': [
        '/images/leak-detection/Jeddah bathroom drain pipe repair Saudi Arabia.jpg',
    ],

    // عزل (Insulation)
    'tank-insulation': [
        '/images/leak-detection/Khobar water tank leak detection Saudi Arabia.jpg',
    ],
    'roof-insulation': [
        '/images/leak-detection/Dammam roof leak repair Saudi Arabia.jpg',
    ],
    'foam-insulation': [
        '/images/leak-detection/Dammam roof leak repair Saudi Arabia.jpg',
    ],
    'water-insulation': [
        '/images/leak-detection/Dammam wall moisture detection mold Saudi Arabia.jpg',
    ],
    'thermal-insulation': [
        '/images/leak-detection/Riyadh thermal leak inspection Saudi Arabia.jpg',
    ],
};

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
