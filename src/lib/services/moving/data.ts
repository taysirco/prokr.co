import { Service } from '@/types';

export const movingServices: Service[] = [
    { slug: 'furniture-moving', name_ar: 'نقل عفش', name_en: 'Furniture Moving', category: 'moving' },
    { slug: 'furniture-storage', name_ar: 'تخزين اثاث', name_en: 'Furniture Storage', category: 'moving' },
    { slug: 'dyna', name_ar: 'دينات نقل', name_en: 'Dyna Moving', category: 'moving' },
    { slug: 'moving-out', name_ar: 'نقل عفش بين المدن', name_en: 'Intercity Moving', category: 'moving' },
    { slug: 'dabab', name_ar: 'دباب نقل عفش', name_en: 'Dabab Moving', category: 'moving' },
    { slug: 'intercity-moving', name_ar: 'نقل بين المدن', name_en: 'Intercity Moving', category: 'moving' },
    { slug: 'international-moving', name_ar: 'نقل دولي', name_en: 'International Moving', category: 'moving' },
    { slug: 'heavy-equipment-moving', name_ar: 'نقل معدات ثقيلة', name_en: 'Heavy Equipment Moving', category: 'moving' },
    { slug: 'vehicle-transport', name_ar: 'شحن سيارات', name_en: 'Vehicle Transport', category: 'moving' },
    { slug: 'furniture-packaging', name_ar: 'تغليف أثاث', name_en: 'Furniture Packaging', category: 'moving' },
];

export const movingImages: Record<string, string[]> = {
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
};
