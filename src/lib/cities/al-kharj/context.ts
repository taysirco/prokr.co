import { CityContext } from '../../city-context';

export const alKharjContext: CityContext = {
    slug: 'al-kharj',
    name_ar: 'الخرج',
    coordinates: { lat: 24.1556, lng: 47.3126 },
    climate: 'dry-hot',
    challenges: [
        'منطقة زراعية تجذب الحشرات الموسمية',
        'الغبار من المزارع المحيطة',
        'مسافة من مراكز الخدمات الرئيسية',
    ],
    urbanTraits: [
        'مدينة زراعية متنامية',
        'قرب من الرياض (80 كم)',
        'أسعار معقولة مقارنة بالرياض',
    ],
    priceModifier: 0.85,
    neighborhoods: [
        { name_ar: 'حي الخالدية', name_en: 'Al Khalidiyah', type: 'residential' },
        { name_ar: 'حي اليرموك', name_en: 'Al Yarmouk', type: 'residential' },
        { name_ar: 'حي السلام', name_en: 'Al Salam', type: 'mixed' },
        { name_ar: 'المركز', name_en: 'City Center', type: 'commercial' },
    ],
    serviceNuances: {
        'pest-control': [
            'الحشرات الزراعية تحتاج معالجة خاصة',
            'القوارض من المزارع المجاورة',
        ],
    },
    responseTime: 'خلال ساعتين',
    nearbyCities: ['الرياض', 'الدلم', 'حوطة بني تميم'],
};
