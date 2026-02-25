import type { SubRegion } from '../../sub-regions';

export const SUB_REGIONS_RIYADH: SubRegion[] = [
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
];

