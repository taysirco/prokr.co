import { CityContext } from '../../city-context';

export const rabighContext: CityContext = {
    slug: 'rabigh',
    name_ar: 'رابغ',
    coordinates: { lat: 22.7994, lng: 39.0378 },
    climate: 'humid-coastal',
    challenges: [
        'رطوبة ساحلية مرتفعة',
        'حرارة صيفية شديدة',
        'بُعد عن المدن الكبرى',
    ],
    urbanTraits: [
        'مدينة صناعية ساحلية',
        'مدينة الملك عبدالله الاقتصادية قريبة',
        'جامعة الملك عبدالله للعلوم والتقنية (كاوست)',
    ],
    priceModifier: 0.85,
    neighborhoods: [
        { name_ar: 'حي الشاطئ', name_en: 'Al Shati', type: 'residential' },
        { name_ar: 'حي المروج', name_en: 'Al Muruj', type: 'residential' },
        { name_ar: 'حي المدينة الاقتصادية', name_en: 'KAEC', type: 'mixed' },
    ],
    serviceNuances: {
        cleaning: ['تنظيف تراكمات ملح بسبب القرب من البحر'],
        insulation: ['عزل مائي ضد الرطوبة البحرية'],
    },
    responseTime: 'خلال 24 ساعة',
    nearbyCities: ['جدة', 'مكة المكرمة', 'ينبع'],
    majorLandmark: 'مدينة الملك عبدالله الاقتصادية',
    majorLandmarkEn: 'King+Abdullah+Economic+City+Rabigh+Saudi+Arabia',
    coverageRadius: '30 كم',
};
