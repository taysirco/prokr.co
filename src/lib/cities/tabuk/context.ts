import { CityContext } from '../../city-context';

export const tabukContext: CityContext = {
    slug: 'tabuk',
    name_ar: 'تبوك',
    coordinates: { lat: 28.3838, lng: 36.5550 },
    climate: 'desert',
    challenges: [
        'برودة شتوية شديدة',
        'ثلوج أحياناً',
        'بُعد عن المدن الكبرى',
    ],
    urbanTraits: [
        'مدينة سياحية صاعدة',
        'مشروع نيوم قريب',
        'طبيعة جبلية خلابة',
    ],
    priceModifier: 0.85,
    neighborhoods: [
        { name_ar: 'حي الفيصلية', name_en: 'Al Faisaliyah', type: 'residential' },
        { name_ar: 'حي المروج', name_en: 'Al Muruj', type: 'residential' },
        { name_ar: 'حي السلام', name_en: 'Al Salam', type: 'mixed' },
        { name_ar: 'حي العزيزية', name_en: 'Al Aziziyah', type: 'residential' },
    ],
    serviceNuances: {
        moving: [
            'طرق جبلية تحتاج سائقين محترفين',
        ],
        insulation: [
            'العزل أساسي للشتاء',
            'حماية الأنابيب من التجمد',
        ],
    },
    responseTime: 'نفس اليوم',
    nearbyCities: ['حائل', 'العلا'],
};
