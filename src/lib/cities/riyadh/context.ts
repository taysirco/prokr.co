import { CityContext } from '../../city-context';

export const riyadhContext: CityContext = {
    slug: 'riyadh',
    name_ar: 'الرياض',
    coordinates: { lat: 24.7136, lng: 46.6753 },
    climate: 'dry-hot',
    challenges: [
        'العواصف الرملية المتكررة (الغبرة) تتطلب تنظيفاً دورياً',
        'الازدحام المروري الشديد في أوقات الذروة',
        'الحرارة الجافة تؤثر على الأثاث الخشبي',
        'الأبراج السكنية العالية تحتاج لمعدات نقل خاصة',
    ],
    urbanTraits: [
        'أكبر مدينة في المملكة',
        'أحياء شمالية راقية مثل الملقا والنرجس',
        'توسع عمراني مستمر',
        'مجمعات سكنية حديثة',
    ],
    priceModifier: 1.2, // 20% أعلى - كونها العاصمة
    neighborhoods: [
        { name_ar: 'الملقا', name_en: 'Al Malqa', type: 'residential' },
        { name_ar: 'النرجس', name_en: 'Al Narjis', type: 'residential' },
        { name_ar: 'الياسمين', name_en: 'Al Yasmin', type: 'mixed' },
        { name_ar: 'طويق', name_en: 'Tuwaiq', type: 'residential' },
        { name_ar: 'العزيزية', name_en: 'Al Aziziyah', type: 'mixed' },
        { name_ar: 'حي الملك فهد', name_en: 'King Fahd District', type: 'commercial' },
        { name_ar: 'الربوة', name_en: 'Al Rabwah', type: 'residential' },
        { name_ar: 'النسيم', name_en: 'Al Nasim', type: 'mixed' },
    ],
    serviceNuances: {
        moving: [
            'النقل للأدوار العليا في الأبراج يتطلب رافعات خاصة',
            'الازدحام يستدعي التخطيط المسبق لأوقات النقل',
            'الأحياء الشمالية تفرض رسوم مواقف في بعض الأوقات',
        ],
        cleaning: [
            'الغبار الصحراوي يتراكم بسرعة على الأسطح',
            'تنظيف المكيفات ضروري كل 3 أشهر بسبب الغبار',
            'الزجاج يحتاج تنظيفاً أسبوعياً',
        ],
        'pest-control': [
            'النمل الأبيض (الأرضة) منتشر في المباني القديمة',
            'الصراصير تظهر صيفاً بكثرة',
            'العقارب في الأحياء الطرفية',
        ],
    },
    responseTime: 'خلال ساعة في معظم أحياء الرياض',
    nearbyCities: ['الخرج', 'الدرعية', 'المجمعة'],
};
