import { CityContext } from '../../city-context';

export const jeddahContext: CityContext = {
    slug: 'jeddah',
    name_ar: 'جدة',
    coordinates: { lat: 21.4858, lng: 39.1925 },
    climate: 'humid-coastal',
    challenges: [
        'الرطوبة العالية تسبب صدأ المعادن وتلف الأثاث',
        'ملوحة الهواء الساحلي تؤثر على الأجهزة',
        'الأمطار الموسمية والسيول',
        'الازدحام في موسم العمرة والحج',
    ],
    urbanTraits: [
        'بوابة الحرمين',
        'واجهة بحرية طويلة',
        'فلل وقصور أكثر من الشقق',
        'أحياء ساحلية راقية',
    ],
    priceModifier: 1.1,
    neighborhoods: [
        { name_ar: 'الحمدانية', name_en: 'Al Hamdaniyah', type: 'residential' },
        { name_ar: 'أبحر الشمالية', name_en: 'Abhur North', type: 'residential' },
        { name_ar: 'أبحر الجنوبية', name_en: 'Abhur South', type: 'residential' },
        { name_ar: 'الصفا', name_en: 'Al Safa', type: 'mixed' },
        { name_ar: 'الحمراء', name_en: 'Al Hamra', type: 'commercial' },
        { name_ar: 'المرجان', name_en: 'Al Murjan', type: 'residential' },
        { name_ar: 'الشاطئ', name_en: 'Al Shati', type: 'residential' },
        { name_ar: 'السلامة', name_en: 'Al Salamah', type: 'residential' },
    ],
    serviceNuances: {
        moving: [
            'الفلل أكثر شيوعاً من الشقق',
            'النقل على الكورنيش يحتاج تصاريح أحياناً',
            'تغليف إضافي لحماية الأثاث من الرطوبة',
        ],
        cleaning: [
            'تنظيف العفن الناتج عن الرطوبة',
            'تلميع المعادن المتأكسدة',
            'تنظيف المكيفات أساسي بسبب الرطوبة',
        ],
        'pest-control': [
            'البعوض والذباب بسبب الساحل',
            'الرطوبة تجذب الحشرات الزاحفة',
        ],
        'leak-detection': [
            'التسربات أكثر شيوعاً بسبب الرطوبة',
            'أنابيب قديمة في الأحياء التاريخية',
        ],
    },
    responseTime: 'خلال ساعة في الأحياء الرئيسية',
    nearbyCities: ['مكة المكرمة', 'رابغ', 'الليث'],
};
