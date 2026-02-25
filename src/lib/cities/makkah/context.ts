import { CityContext } from '../../city-context';

export const makkahContext: CityContext = {
    slug: 'makkah',
    name_ar: 'مكة المكرمة',
    coordinates: { lat: 21.3891, lng: 39.8579 },
    climate: 'dry-hot',
    challenges: [
        'الشوارع الضيقة في الأحياء القديمة',
        'الازدحام الشديد في مواسم الحج والعمرة',
        'الحرارة المرتفعة جداً صيفاً',
        'جبلية وتضاريس صعبة',
    ],
    urbanTraits: [
        'أقدس مدينة في الإسلام',
        'سكان موسميون',
        'فنادق وشقق مفروشة بكثرة',
    ],
    priceModifier: 1.15,
    neighborhoods: [
        { name_ar: 'العزيزية', name_en: 'Al Aziziyah', type: 'mixed' },
        { name_ar: 'الشوقية', name_en: 'Al Shawqiyah', type: 'residential' },
        { name_ar: 'النسيم', name_en: 'Al Naseem', type: 'residential' },
        { name_ar: 'الرصيفة', name_en: 'Al Rasifah', type: 'residential' },
        { name_ar: 'العوالي', name_en: 'Al Awali', type: 'residential' },
        { name_ar: 'جرول', name_en: 'Jarwal', type: 'mixed' },
    ],
    serviceNuances: {
        moving: [
            'الشوارع الضيقة تتطلب شاحنات صغيرة',
            'صعوبة الوصول في مواسم الذروة',
            'الأحياء الجبلية تحتاج خبرة خاصة',
        ],
        cleaning: [
            'تنظيف بعد الحجاج والمعتمرين',
            'الفنادق والشقق المفروشة بحاجة دائمة',
        ],
    },
    responseTime: 'نفس اليوم (حسب الموسم)',
    nearbyCities: ['جدة', 'الطائف'],
};
