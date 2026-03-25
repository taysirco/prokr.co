import { CityContext } from '../../city-context';

export const rasTanuraContext: CityContext = {
    slug: 'ras-tanura',
    name_ar: 'رأس تنورة',
    coordinates: { lat: 26.7692, lng: 50.1691 },
    climate: 'humid-coastal',
    challenges: [
        'رطوبة عالية طوال السنة',
        'ملوحة الهواء الساحلي',
        'تآكل المعادن والدهانات',
    ],
    urbanTraits: [
        'مدينة نفطية تاريخية',
        'ميناء تصدير النفط الرئيسي',
        'مجتمع صغير متماسك',
    ],
    priceModifier: 0.90,
    neighborhoods: [
        { name_ar: 'حي الدانة', name_en: 'Al Danah', type: 'residential' },
        { name_ar: 'حي النخيل', name_en: 'Al Nakheel', type: 'residential' },
        { name_ar: 'حي الروضة', name_en: 'Al Rawdah', type: 'mixed' },
    ],
    serviceNuances: {
        cleaning: ['تنظيف ملح وصدأ مستمر بسبب البيئة الساحلية'],
        insulation: ['عزل مائي أساسي ضد الرطوبة الساحلية'],
    },
    responseTime: 'نفس اليوم',
    nearbyCities: ['الجبيل', 'الدمام', 'القطيف'],
    majorLandmark: 'شاطئ نصف القمر',
    majorLandmarkEn: 'Ras+Tanura+Beach+Saudi+Arabia',
    coverageRadius: '20 كم',
};
