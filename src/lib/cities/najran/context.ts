import { CityContext } from '../../city-context';

export const najranContext: CityContext = {
    slug: 'najran',
    name_ar: 'نجران',
    coordinates: { lat: 17.4933, lng: 44.1277 },
    climate: 'dry-hot',
    challenges: [
        'منطقة حدودية',
        'حرارة صيفية مرتفعة',
    ],
    urbanTraits: [
        'تراث تاريخي (الأخدود)',
        'زراعة تقليدية',
        'قرب من الحدود',
    ],
    priceModifier: 0.75,
    neighborhoods: [
        { name_ar: 'حي الفيصلية', name_en: 'Al Faisaliyah', type: 'residential' },
        { name_ar: 'حي الفهد', name_en: 'Al Fahd', type: 'residential' },
        { name_ar: 'أبا السعود', name_en: 'Aba Al Saud', type: 'mixed' },
    ],
    serviceNuances: {},
    responseTime: 'نفس اليوم',
    nearbyCities: ['أبها', 'شرورة'],
};
