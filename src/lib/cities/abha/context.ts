import { CityContext } from '../../city-context';

export const abhaContext: CityContext = {
    slug: 'abha',
    name_ar: 'أبها',
    coordinates: { lat: 18.2164, lng: 42.5053 },
    climate: 'mountain',
    challenges: [
        'طرق جبلية صعبة',
        'أمطار غزيرة وضباب',
        'برودة معظم السنة',
        'انزلاقات في الطرق',
    ],
    urbanTraits: [
        'عاصمة عسير',
        'مصيف رئيسي',
        'طبيعة خضراء',
        'سياحة داخلية نشطة',
    ],
    priceModifier: 0.9,
    neighborhoods: [
        { name_ar: 'حي الخالدية', name_en: 'Al Khalidiyah', type: 'residential' },
        { name_ar: 'حي القوسية', name_en: 'Al Qusiyah', type: 'residential' },
        { name_ar: 'المنسك', name_en: 'Al Mansak', type: 'residential' },
        { name_ar: 'الوردتين', name_en: 'Al Wardatain', type: 'mixed' },
        { name_ar: 'السد', name_en: 'Al Sad', type: 'residential' },
    ],
    serviceNuances: {
        moving: [
            'الطرق الجبلية تتطلب شاحنات مجهزة',
            'العقبات خطيرة في موسم الأمطار',
            'سائقون من ذوي الخبرة فقط',
        ],
        insulation: [
            'عزل الأسطح من الأمطار أولوية',
            'منع تسرب المياه في الشتاء',
        ],
        'leak-detection': [
            'التسربات شائعة بسبب الأمطار',
            'الفحص الدوري ضروري',
        ],
    },
    responseTime: 'خلال ساعتين',
    nearbyCities: ['خميس مشيط', 'النماص'],
    majorLandmark: 'جبل السودة',
    majorLandmarkEn: 'Al+Soudah+Mountain+Abha',
    coverageRadius: '30 كم',
};
