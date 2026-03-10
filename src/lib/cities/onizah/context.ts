import { CityContext } from '../../city-context';

export const onizahContext: CityContext = {
    slug: 'onizah',
    name_ar: 'عنيزة',
    coordinates: { lat: 26.0842, lng: 43.9932 },
    climate: 'dry-hot',
    challenges: [
        'مدينة صغيرة نسبياً',
        'تعتمد على بريدة في بعض الخدمات',
    ],
    urbanTraits: [
        'مدينة ثقافية تاريخية',
        'معروفة بالسياحة الداخلية',
    ],
    priceModifier: 0.75,
    neighborhoods: [
        { name_ar: 'حي الوادي', name_en: 'Al Wadi', type: 'residential' },
        { name_ar: 'حي الفيصلية', name_en: 'Al Faisaliyah', type: 'mixed' },
        { name_ar: 'وسط المدينة', name_en: 'Downtown', type: 'commercial' },
    ],
    serviceNuances: {},
    responseTime: 'نفس اليوم',
    nearbyCities: ['بريدة', 'الرس'],
    majorLandmark: 'قلعة عنيزة التراثية',
    majorLandmarkEn: 'Unaizah+Heritage+Castle',
    coverageRadius: '15 كم',
};
