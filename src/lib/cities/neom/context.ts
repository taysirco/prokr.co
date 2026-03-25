import { CityContext } from '../../city-context';

export const neomContext: CityContext = {
    slug: 'neom',
    name_ar: 'نيوم',
    coordinates: { lat: 27.9500, lng: 35.3000 },
    climate: 'desert',
    challenges: [
        'مشروع تحت الإنشاء ومتطلبات عالية',
        'بُعد جغرافي عن المدن الرئيسية',
        'بيئة صحراوية ساحلية',
    ],
    urbanTraits: [
        'مدينة المستقبل — مشروع رؤية 2030',
        'أكبر مشروع بنية تحتية في العالم',
        'منطقة اقتصادية خاصة',
    ],
    priceModifier: 1.25,
    neighborhoods: [
        { name_ar: 'ذا لاين', name_en: 'THE LINE', type: 'mixed' },
        { name_ar: 'أوكساجون', name_en: 'Oxagon', type: 'industrial' },
        { name_ar: 'تروجينا', name_en: 'Trojena', type: 'mixed' },
        { name_ar: 'سندالة', name_en: 'Sindalah', type: 'commercial' },
    ],
    serviceNuances: {
        moving: [
            'نقل معدات ومواد بناء ضخمة',
            'مسافات طويلة من المدن الكبرى',
        ],
        cleaning: [
            'معايير نظافة عالمية لمشاريع البناء',
        ],
        insulation: [
            'عزل متقدم بمعايير دولية',
            'حماية من الحرارة والملوحة الساحلية',
        ],
    },
    responseTime: 'خلال 24-48 ساعة',
    nearbyCities: ['تبوك', 'حقل'],
    majorLandmark: 'ذا لاين',
    majorLandmarkEn: 'NEOM+THE+LINE+Saudi+Arabia',
    coverageRadius: '50 كم',
};
