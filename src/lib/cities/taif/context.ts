import { CityContext } from '../../city-context';

export const taifContext: CityContext = {
    slug: 'taif',
    name_ar: 'الطائف',
    coordinates: { lat: 21.2703, lng: 40.4158 },
    climate: 'mountain',
    challenges: [
        'الطرق الجبلية المتعرجة',
        'الأمطار الموسمية والضباب',
        'البرودة في الشتاء',
        'الانزلاقات في الطرق',
    ],
    urbanTraits: [
        'مصيف المملكة',
        'مدينة سياحية',
        'مشهورة بالورد والفواكه',
    ],
    priceModifier: 0.9,
    neighborhoods: [
        { name_ar: 'الشفا', name_en: 'Al Shafa', type: 'residential' },
        { name_ar: 'الهدا', name_en: 'Al Hada', type: 'residential' },
        { name_ar: 'القيم', name_en: 'Al Qeem', type: 'mixed' },
        { name_ar: 'شهار', name_en: 'Shihar', type: 'residential' },
        { name_ar: 'العزيزية', name_en: 'Al Aziziyah', type: 'residential' },
    ],
    serviceNuances: {
        moving: [
            'الطرق الجبلية تتطلب سائقين محترفين',
            'العقبات تحتاج احتياطات إضافية',
            'النقل في موسم الأمطار صعب',
        ],
        insulation: [
            'العزل الحراري ضروري للبرودة',
            'حماية من تسربات الأمطار',
        ],
    },
    responseTime: 'نفس اليوم',
    nearbyCities: ['مكة المكرمة', 'جدة'],
};
