import { CityContext } from '../../city-context';

export const diriyahContext: CityContext = {
    slug: 'diriyah',
    name_ar: 'الدرعية',
    coordinates: { lat: 24.7344, lng: 46.5728 },
    climate: 'dry-hot',
    challenges: [
        'حرارة صيفية مرتفعة',
        'غبار وعواصف رملية',
        'مشاريع تطويرية كبرى',
    ],
    urbanTraits: [
        'موقع تراثي عالمي — حي الطريف',
        'بوابة الدرعية — مشروع سياحي ضخم',
        'قريبة من الرياض',
    ],
    priceModifier: 1.1,
    neighborhoods: [
        { name_ar: 'حي الطريف', name_en: 'At-Turaif', type: 'mixed' },
        { name_ar: 'حي البجيري', name_en: 'Al Bujairi', type: 'commercial' },
        { name_ar: 'حي الوادي', name_en: 'Al Wadi', type: 'residential' },
    ],
    serviceNuances: {
        moving: ['قرب من الرياض يسهل النقل'],
        cleaning: ['مشاريع بناء تحتاج تنظيف ما بعد البناء'],
    },
    responseTime: 'خلال ساعتين',
    nearbyCities: ['الرياض'],
    majorLandmark: 'بوابة الدرعية',
    majorLandmarkEn: 'Diriyah+Gate+Saudi+Arabia',
    coverageRadius: '15 كم',
};
