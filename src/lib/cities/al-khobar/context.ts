import { CityContext } from '../../city-context';

export const alKhobarContext: CityContext = {
    slug: 'al-khobar',
    name_ar: 'الخبر',
    coordinates: { lat: 26.2172, lng: 50.1971 },
    climate: 'humid-coastal',
    challenges: [
        'الرطوبة الساحلية',
        'منطقة راقية بأسعار مرتفعة',
    ],
    urbanTraits: [
        'واجهة بحرية جميلة',
        'مجمعات سكنية راقية',
        'قرب من جسر البحرين',
    ],
    priceModifier: 1.15,
    neighborhoods: [
        { name_ar: 'الكورنيش', name_en: 'Corniche', type: 'residential' },
        { name_ar: 'العقربية', name_en: 'Al Aqrabiyah', type: 'residential' },
        { name_ar: 'الثقبة', name_en: 'Al Thuqbah', type: 'mixed' },
        { name_ar: 'اليرموك', name_en: 'Al Yarmouk', type: 'residential' },
        { name_ar: 'الحزام الذهبي', name_en: 'Golden Belt', type: 'commercial' },
    ],
    serviceNuances: {
        moving: [
            'الفلل والقصور شائعة',
            'أثاث فاخر يحتاج عناية خاصة',
        ],
        cleaning: [
            'خدمات تنظيف فاخرة مطلوبة',
            'تنظيف المسابح منتشر',
        ],
    },
    responseTime: 'خلال 45 دقيقة',
    nearbyCities: ['الدمام', 'الظهران'],
    majorLandmark: 'كورنيش الخبر',
    majorLandmarkEn: 'Al+Khobar+Corniche',
    coverageRadius: '25 كم',
};
