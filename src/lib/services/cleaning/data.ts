import { Service } from '@/types';

export const cleaningServices: Service[] = [
    { slug: 'cleaning', name_ar: 'تنظيف منازل', name_en: 'Home Cleaning', category: 'cleaning' },
    { slug: 'tanks-cleaning', name_ar: 'تنظيف خزانات', name_en: 'Tank Cleaning', category: 'cleaning' },
    { slug: 'sofa-cleaning', name_ar: 'تنظيف كنب', name_en: 'Sofa Cleaning', category: 'cleaning' },
    { slug: 'carpet-cleaning', name_ar: 'تنظيف سجاد', name_en: 'Carpet Cleaning', category: 'cleaning' },
    { slug: 'steam-cleaning', name_ar: 'تنظيف بالبخار', name_en: 'Steam Cleaning', category: 'cleaning' },
    { slug: 'sanitization', name_ar: 'تعقيم', name_en: 'Sanitization', category: 'cleaning' },
    { slug: 'air-conditioner-cleaning', name_ar: 'تنظيف مكيفات', name_en: 'AC Cleaning', category: 'cleaning' },
    { slug: 'mattress-cleaning', name_ar: 'تنظيف مراتب', name_en: 'Mattress Cleaning', category: 'cleaning' },
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
    { slug: 'ac-maintenance', name_ar: 'صيانة مكيفات', name_en: 'AC Maintenance', category: 'cleaning' },
    { slug: 'ac-installation', name_ar: 'تركيب مكيفات', name_en: 'AC Installation', category: 'cleaning' },
];

export const cleaningImages: Record<string, string[]> = {
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
    'mattress-cleaning': [
        '/images/cleaning/mattress_cleaning_services_jeddah.jpg',
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
    'ac-maintenance': [
        '/images/cleaning/ac_cleaning_and_maintenance_services.jpg',
    ],
    'ac-installation': [
        '/images/cleaning/ac_cleaning_and_maintenance_services.jpg',
    ],
};
