import { CityContext } from '../../city-context';

export const khamisMushaitContext: CityContext = {
    slug: 'khamis-mushait',
    name_ar: 'خميس مشيط',
    coordinates: { lat: 18.3066, lng: 42.7283 },
    climate: 'mountain',
    challenges: [
        'مناخ جبلي بارد',
        'أمطار موسمية',
    ],
    urbanTraits: [
        'قاعدة عسكرية قريبة',
        'مدينة تجارية نشطة',
        'قرب من أبها',
    ],
    priceModifier: 0.85,
    neighborhoods: [
        { name_ar: 'حي الجرف', name_en: 'Al Jurf', type: 'residential' },
        { name_ar: 'حي الضيافة', name_en: 'Al Diyafah', type: 'residential' },
        { name_ar: 'حي الموظفين', name_en: 'Employees District', type: 'residential' },
        { name_ar: 'وسط المدينة', name_en: 'Downtown', type: 'commercial' },
    ],
    serviceNuances: {
        insulation: [
            'عزل من البرودة والأمطار',
        ],
    },
    responseTime: 'خلال ساعة',
    nearbyCities: ['أبها', 'النماص'],
};
