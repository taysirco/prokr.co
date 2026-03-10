import { CityContext } from '../../city-context';

export const qassimContext: CityContext = {
    slug: 'qassim',
    name_ar: 'القصيم',
    coordinates: { lat: 26.3260, lng: 43.9750 },
    climate: 'dry-hot',
    challenges: [
        'بُعد نسبي عن العاصمة',
        'الرياح الموسمية تحمل الغبار',
        'البرودة الشديدة شتاءً',
    ],
    urbanTraits: [
        'منطقة تجارية نشطة',
        'طابع محافظ',
        'تكلفة معيشة أقل',
    ],
    priceModifier: 0.8,
    neighborhoods: [
        { name_ar: 'بريدة', name_en: 'Buraidah', type: 'mixed' },
        { name_ar: 'عنيزة', name_en: 'Unaizah', type: 'residential' },
        { name_ar: 'الرس', name_en: 'Ar Rass', type: 'residential' },
    ],
    serviceNuances: {},
    responseTime: 'نفس اليوم',
    nearbyCities: ['بريدة', 'عنيزة', 'الرس'],
    majorLandmark: 'جامع الأمير سلطان بالقصيم',
    majorLandmarkEn: 'Prince+Sultan+Mosque+Qassim',
    coverageRadius: '30 كم',
};
