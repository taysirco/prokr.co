import { CityContext } from '../../city-context';

export const hafrAlbatinContext: CityContext = {
    slug: 'hafr-albatin',
    name_ar: 'حفر الباطن',
    coordinates: { lat: 28.4328, lng: 45.9708 },
    climate: 'desert',
    challenges: [
        'قريبة من الحدود',
        'صحراء قاسية',
        'برودة شديدة شتاءً',
    ],
    urbanTraits: [
        'مدينة حدودية',
        'قاعدة عسكرية قريبة',
        'منطقة رعوية',
    ],
    priceModifier: 0.75,
    neighborhoods: [
        { name_ar: 'حي السوق', name_en: 'Market District', type: 'commercial' },
        { name_ar: 'حي الفيصلية', name_en: 'Al Faisaliyah', type: 'residential' },
        { name_ar: 'حي الخالدية', name_en: 'Al Khalidiyah', type: 'residential' },
    ],
    serviceNuances: {
        insulation: [
            'العزل ضروري للبرودة الشتوية الشديدة',
        ],
        'pest-control': [
            'مكافحة العقارب والثعابين',
        ],
    },
    responseTime: 'نفس اليوم',
    nearbyCities: ['الرياض'],
    majorLandmark: 'سوق حفر الباطن',
    majorLandmarkEn: 'Hafr+Al+Batin+Central+Market',
    coverageRadius: '25 كم',
};
