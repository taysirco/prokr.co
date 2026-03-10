import { CityContext } from '../../city-context';

export const jazanContext: CityContext = {
    slug: 'jazan',
    name_ar: 'جازان',
    coordinates: { lat: 16.8892, lng: 42.5511 },
    climate: 'humid-coastal',
    challenges: [
        'رطوبة ساحلية عالية جداً',
        'حرارة مرتفعة صيفاً',
        'أمطار موسمية',
    ],
    urbanTraits: [
        'ميناء ساحلي',
        'جزر فرسان قريبة',
        'زراعة استوائية',
    ],
    priceModifier: 0.8,
    neighborhoods: [
        { name_ar: 'حي الروضة', name_en: 'Al Rawdah', type: 'residential' },
        { name_ar: 'حي الصفا', name_en: 'Al Safa', type: 'residential' },
        { name_ar: 'حي الشاطئ', name_en: 'Al Shati', type: 'residential' },
        { name_ar: 'الميناء', name_en: 'Port District', type: 'commercial' },
    ],
    serviceNuances: {
        cleaning: [
            'مكافحة العفن من الرطوبة',
            'تنظيف دوري للتكييف',
        ],
        'pest-control': [
            'البعوض والذباب منتشران',
            'مكافحة الحشرات الاستوائية',
        ],
    },
    responseTime: 'نفس اليوم',
    nearbyCities: ['صبيا', 'أبو عريش'],
    majorLandmark: 'جزر فرسان',
    majorLandmarkEn: 'Farasan+Islands+Jazan',
    coverageRadius: '30 كم',
};
