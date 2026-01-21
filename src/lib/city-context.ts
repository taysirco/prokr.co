import type { City } from '@/types';

// ============================================
// City Context Data for AI-Ready SEO Content
// Provides unique environmental/geographic context per city
// ============================================

export type ClimateType = 'dry-hot' | 'humid-coastal' | 'mountain' | 'desert' | 'moderate';

export interface Neighborhood {
    name_ar: string;
    name_en: string;
    type: 'residential' | 'commercial' | 'mixed' | 'industrial';
}

export interface CityContext {
    slug: string;
    name_ar: string;
    // Environmental factors
    climate: ClimateType;
    challenges: string[];
    // Geographic/Urban characteristics
    urbanTraits: string[];
    // Price modifier relative to Riyadh (1.0 = baseline)
    priceModifier: number;
    // Major neighborhoods
    neighborhoods: Neighborhood[];
    // Service-specific challenges (applied to certain service categories)
    serviceNuances: {
        moving?: string[];
        cleaning?: string[];
        'pest-control'?: string[];
        'leak-detection'?: string[];
        insulation?: string[];
    };
    // Response time claim for this city
    responseTime: string;
    // Nearby cities for "Do you serve outside?" FAQ
    nearbyCities: string[];
}

// ============================================
// Complete City Context Data (24 Cities)
// ============================================

export const CITY_CONTEXT: Record<string, CityContext> = {
    // ============================================
    // CENTRAL REGION (الوسطى)
    // ============================================
    'riyadh': {
        slug: 'riyadh',
        name_ar: 'الرياض',
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
    },

    'al-kharj': {
        slug: 'al-kharj',
        name_ar: 'الخرج',
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
    },

    'qassim': {
        slug: 'qassim',
        name_ar: 'القصيم',
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
    },

    'buraidah': {
        slug: 'buraidah',
        name_ar: 'بريدة',
        climate: 'dry-hot',
        challenges: [
            'الرياح الباردة شتاءً تتطلب عزلاً جيداً',
            'الغبار في فصل الربيع',
        ],
        urbanTraits: [
            'عاصمة منطقة القصيم',
            'سوق التمور الشهير',
            'مدينة تجارية نشطة',
        ],
        priceModifier: 0.78,
        neighborhoods: [
            { name_ar: 'حي الخليج', name_en: 'Al Khaleej', type: 'residential' },
            { name_ar: 'حي الفايزية', name_en: 'Al Faiziyah', type: 'residential' },
            { name_ar: 'حي الإسكان', name_en: 'Al Iskan', type: 'residential' },
            { name_ar: 'الريان', name_en: 'Al Rayyan', type: 'mixed' },
        ],
        serviceNuances: {
            insulation: [
                'العزل الحراري مهم للبرودة الشتوية',
                'الخزانات تحتاج حماية من التجمد',
            ],
        },
        responseTime: 'خلال ساعتين',
        nearbyCities: ['عنيزة', 'القصيم', 'الرس'],
    },

    'onizah': {
        slug: 'onizah',
        name_ar: 'عنيزة',
        climate: 'dry-hot',
        challenges: [
            'مدينة صغيرة نسبياً',
            'تعتمد على بريدة في بعض الخدمات',
        ],
        urbanTraits: [
            'مدينة ثقافية تاريخية',
            'معروفة بالسياحة الداخلية',
        ],
        priceModifier: 0.75,
        neighborhoods: [
            { name_ar: 'حي الوادي', name_en: 'Al Wadi', type: 'residential' },
            { name_ar: 'حي الفيصلية', name_en: 'Al Faisaliyah', type: 'mixed' },
            { name_ar: 'وسط المدينة', name_en: 'Downtown', type: 'commercial' },
        ],
        serviceNuances: {},
        responseTime: 'نفس اليوم',
        nearbyCities: ['بريدة', 'الرس'],
    },

    // ============================================
    // WESTERN REGION (الغربية)
    // ============================================
    'jeddah': {
        slug: 'jeddah',
        name_ar: 'جدة',
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
    },

    'makkah': {
        slug: 'makkah',
        name_ar: 'مكة المكرمة',
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
    },

    'madinah': {
        slug: 'madinah',
        name_ar: 'المدينة المنورة',
        climate: 'dry-hot',
        challenges: [
            'الازدحام في المواسم الدينية',
            'الحرارة العالية صيفاً',
        ],
        urbanTraits: [
            'ثاني أقدس مدينة',
            'توسع عمراني كبير',
            'مشاريع حكومية ضخمة',
        ],
        priceModifier: 1.0,
        neighborhoods: [
            { name_ar: 'العزيزية', name_en: 'Al Aziziyah', type: 'residential' },
            { name_ar: 'قباء', name_en: 'Quba', type: 'mixed' },
            { name_ar: 'العنابيس', name_en: 'Al Anabis', type: 'residential' },
            { name_ar: 'الخالدية', name_en: 'Al Khalidiyah', type: 'residential' },
            { name_ar: 'المبعوث', name_en: 'Al Mab\'uth', type: 'residential' },
        ],
        serviceNuances: {
            cleaning: [
                'تنظيف الفنادق والشقق بعد المواسم',
                'خدمات تعقيم دورية للزوار',
            ],
        },
        responseTime: 'خلال ساعتين',
        nearbyCities: ['ينبع', 'الحناكية', 'بدر'],
    },

    'taif': {
        slug: 'taif',
        name_ar: 'الطائف',
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
    },

    'yanbu': {
        slug: 'yanbu',
        name_ar: 'ينبع',
        climate: 'humid-coastal',
        challenges: [
            'الرطوبة الساحلية العالية',
            'ملوحة الهواء',
            'مدينة صناعية',
        ],
        urbanTraits: [
            'ميناء صناعي رئيسي',
            'وجود مصانع بتروكيماوية',
            'سكن للعمالة الصناعية',
        ],
        priceModifier: 0.95,
        neighborhoods: [
            { name_ar: 'ينبع الصناعية', name_en: 'Yanbu Industrial', type: 'industrial' },
            { name_ar: 'ينبع البحر', name_en: 'Yanbu Al Bahr', type: 'residential' },
            { name_ar: 'الحي المتوسط', name_en: 'Central District', type: 'mixed' },
        ],
        serviceNuances: {
            cleaning: [
                'تنظيف من الأتربة الصناعية',
                'مكافحة التآكل من الملوحة',
            ],
            'pest-control': [
                'مكافحة حشرات المستودعات الصناعية',
            ],
        },
        responseTime: 'خلال ساعتين',
        nearbyCities: ['المدينة المنورة', 'رابغ'],
    },

    // ============================================
    // EASTERN REGION (الشرقية)
    // ============================================
    'dammam': {
        slug: 'dammam',
        name_ar: 'الدمام',
        climate: 'humid-coastal',
        challenges: [
            'الرطوبة العالية من الخليج',
            'العواصف الرملية أحياناً',
            'كثافة سكانية عالية',
        ],
        urbanTraits: [
            'عاصمة المنطقة الشرقية',
            'مركز صناعي ونفطي',
            'مجمعات سكنية لموظفي أرامكو',
        ],
        priceModifier: 1.05,
        neighborhoods: [
            { name_ar: 'الفيصلية', name_en: 'Al Faisaliyah', type: 'residential' },
            { name_ar: 'الدانة', name_en: 'Al Danah', type: 'residential' },
            { name_ar: 'الراكة', name_en: 'Al Rakah', type: 'residential' },
            { name_ar: 'الخالدية', name_en: 'Al Khalidiyah', type: 'mixed' },
            { name_ar: 'الشاطئ الشرقي', name_en: 'Eastern Beach', type: 'residential' },
            { name_ar: 'الواحة', name_en: 'Al Wahah', type: 'residential' },
        ],
        serviceNuances: {
            moving: [
                'نقل للمجمعات السكنية الخاصة',
                'تحتاج تصاريح لبعض المناطق النفطية',
            ],
            cleaning: [
                'تنظيف من الغبار الصناعي',
                'معالجة الصدأ من الرطوبة',
            ],
            'pest-control': [
                'مكافحة الذباب والبعوض الساحلي',
                'النمل الأبيض في المباني القديمة',
            ],
        },
        responseTime: 'خلال ساعة',
        nearbyCities: ['الخبر', 'الظهران', 'القطيف'],
    },

    'al-khobar': {
        slug: 'al-khobar',
        name_ar: 'الخبر',
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
    },

    'dhahran': {
        slug: 'dhahran',
        name_ar: 'الظهران',
        climate: 'humid-coastal',
        challenges: [
            'منطقة أمنية (قرب أرامكو)',
            'تصاريح دخول مطلوبة أحياناً',
        ],
        urbanTraits: [
            'مقر أرامكو السعودية',
            'جامعة الملك فهد للبترول',
            'مجمعات سكنية مغلقة',
        ],
        priceModifier: 1.2,
        neighborhoods: [
            { name_ar: 'حي أرامكو', name_en: 'Aramco District', type: 'residential' },
            { name_ar: 'حي الجامعة', name_en: 'University District', type: 'mixed' },
            { name_ar: 'نادي الظهران', name_en: 'Dhahran Club', type: 'residential' },
        ],
        serviceNuances: {
            moving: [
                'تحتاج تصاريح لدخول المجمعات',
                'أوقات محددة للعمل',
            ],
        },
        responseTime: 'حسب التصريح',
        nearbyCities: ['الخبر', 'الدمام'],
    },

    'jubail': {
        slug: 'jubail',
        name_ar: 'الجبيل',
        climate: 'humid-coastal',
        challenges: [
            'مدينة صناعية',
            'غبار المصانع',
            'بعد نسبي عن المدن الكبرى',
        ],
        urbanTraits: [
            'أكبر مدينة صناعية',
            'مصانع بتروكيماوية',
            'سكن للعمالة',
        ],
        priceModifier: 0.9,
        neighborhoods: [
            { name_ar: 'الجبيل الصناعية', name_en: 'Jubail Industrial', type: 'industrial' },
            { name_ar: 'الجبيل البلد', name_en: 'Jubail City', type: 'residential' },
            { name_ar: 'حي الفناتير', name_en: 'Al Fanateer', type: 'residential' },
        ],
        serviceNuances: {
            cleaning: [
                'تنظيف من الأتربة الصناعية',
                'فلاتر المكيفات تحتاج تبديلاً أكثر',
            ],
        },
        responseTime: 'نفس اليوم',
        nearbyCities: ['الدمام', 'القطيف'],
    },

    'al-ahsa': {
        slug: 'al-ahsa',
        name_ar: 'الاحساء',
        climate: 'dry-hot',
        challenges: [
            'واحة زراعية كبيرة',
            'حشرات زراعية موسمية',
            'رطوبة من الينابيع',
        ],
        urbanTraits: [
            'أكبر واحة نخيل في العالم',
            'تراث ثقافي غني',
            'سياحة زراعية',
        ],
        priceModifier: 0.8,
        neighborhoods: [
            { name_ar: 'الهفوف', name_en: 'Al Hofuf', type: 'mixed' },
            { name_ar: 'المبرز', name_en: 'Al Mubarraz', type: 'residential' },
            { name_ar: 'العيون', name_en: 'Al Oyoun', type: 'residential' },
            { name_ar: 'الطرف', name_en: 'Al Taraf', type: 'residential' },
        ],
        serviceNuances: {
            'pest-control': [
                'مكافحة حشرات النخيل',
                'سوسة النخيل منتشرة',
                'ذباب الفاكهة',
            ],
        },
        responseTime: 'خلال ساعتين',
        nearbyCities: ['الدمام', 'القطيف', 'الجبيل'],
    },

    'qatif': {
        slug: 'qatif',
        name_ar: 'القطيف',
        climate: 'humid-coastal',
        challenges: [
            'رطوبة ساحلية',
            'منطقة زراعية وساحلية',
        ],
        urbanTraits: [
            'مدينة ساحلية تاريخية',
            'واحات نخيل',
            'صيد أسماك',
        ],
        priceModifier: 0.85,
        neighborhoods: [
            { name_ar: 'سيهات', name_en: 'Saihat', type: 'residential' },
            { name_ar: 'العوامية', name_en: 'Al Awamiyah', type: 'residential' },
            { name_ar: 'تاروت', name_en: 'Tarut', type: 'residential' },
            { name_ar: 'الجش', name_en: 'Al Jish', type: 'residential' },
        ],
        serviceNuances: {
            'pest-control': [
                'مكافحة البعوض الساحلي',
                'حشرات المزارع',
            ],
        },
        responseTime: 'خلال ساعة',
        nearbyCities: ['الدمام', 'الجبيل'],
    },

    'hafr-albatin': {
        slug: 'hafr-albatin',
        name_ar: 'حفر الباطن',
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
    },

    // ============================================
    // NORTHERN REGION (الشمالية)
    // ============================================
    'tabuk': {
        slug: 'tabuk',
        name_ar: 'تبوك',
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
    },

    'hail': {
        slug: 'hail',
        name_ar: 'حائل',
        climate: 'desert',
        challenges: [
            'برودة شتوية قارسة',
            'ثلوج في الشتاء',
            'طرق جبلية',
        ],
        urbanTraits: [
            'معروفة بكرم أهلها',
            'جبال أجا وسلمى',
            'تراث ثقافي',
        ],
        priceModifier: 0.78,
        neighborhoods: [
            { name_ar: 'حي المنتزه', name_en: 'Al Muntazah', type: 'residential' },
            { name_ar: 'حي الورود', name_en: 'Al Wurud', type: 'residential' },
            { name_ar: 'حي العزيزية', name_en: 'Al Aziziyah', type: 'mixed' },
            { name_ar: 'حي المحطة', name_en: 'Al Mahattah', type: 'commercial' },
        ],
        serviceNuances: {
            insulation: [
                'عزل الخزانات من التجمد ضروري',
                'العزل الحراري للمنازل',
            ],
        },
        responseTime: 'نفس اليوم',
        nearbyCities: ['تبوك', 'القصيم'],
    },

    // ============================================
    // SOUTHERN REGION (الجنوبية)
    // ============================================
    'abha': {
        slug: 'abha',
        name_ar: 'أبها',
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
    },

    'khamis-mushait': {
        slug: 'khamis-mushait',
        name_ar: 'خميس مشيط',
        climate: 'mountain',
        challenges: [
            'مناخ جبلي بارد',
            'أمطار موسمية',
        ],
        urbanTraits: [
            'قاعدة عسكرية قريبة',
            'مدينة تجارية نشطة',
            'قرب من أبها',
        ],
        priceModifier: 0.85,
        neighborhoods: [
            { name_ar: 'حي الجرف', name_en: 'Al Jurf', type: 'residential' },
            { name_ar: 'حي الضيافة', name_en: 'Al Diyafah', type: 'residential' },
            { name_ar: 'حي الموظفين', name_en: 'Employees District', type: 'residential' },
            { name_ar: 'وسط المدينة', name_en: 'Downtown', type: 'commercial' },
        ],
        serviceNuances: {
            insulation: [
                'عزل من البرودة والأمطار',
            ],
        },
        responseTime: 'خلال ساعة',
        nearbyCities: ['أبها', 'النماص'],
    },

    'najran': {
        slug: 'najran',
        name_ar: 'نجران',
        climate: 'dry-hot',
        challenges: [
            'منطقة حدودية',
            'حرارة صيفية مرتفعة',
        ],
        urbanTraits: [
            'تراث تاريخي (الأخدود)',
            'زراعة تقليدية',
            'قرب من الحدود',
        ],
        priceModifier: 0.75,
        neighborhoods: [
            { name_ar: 'حي الفيصلية', name_en: 'Al Faisaliyah', type: 'residential' },
            { name_ar: 'حي الفهد', name_en: 'Al Fahd', type: 'residential' },
            { name_ar: 'أبا السعود', name_en: 'Aba Al Saud', type: 'mixed' },
        ],
        serviceNuances: {},
        responseTime: 'نفس اليوم',
        nearbyCities: ['أبها', 'شرورة'],
    },

    'jazan': {
        slug: 'jazan',
        name_ar: 'جازان',
        climate: 'humid-coastal',
        challenges: [
            'رطوبة ساحلية عالية جداً',
            'حرارة مرتفعة صيفاً',
            'أمطار موسمية',
        ],
        urbanTraits: [
            'ميناء ساحلي',
            'جزر فرسان قريبة',
            'زراعة استوائية',
        ],
        priceModifier: 0.8,
        neighborhoods: [
            { name_ar: 'حي الروضة', name_en: 'Al Rawdah', type: 'residential' },
            { name_ar: 'حي الصفا', name_en: 'Al Safa', type: 'residential' },
            { name_ar: 'حي الشاطئ', name_en: 'Al Shati', type: 'residential' },
            { name_ar: 'الميناء', name_en: 'Port District', type: 'commercial' },
        ],
        serviceNuances: {
            cleaning: [
                'مكافحة العفن من الرطوبة',
                'تنظيف دوري للتكييف',
            ],
            'pest-control': [
                'البعوض والذباب منتشران',
                'مكافحة الحشرات الاستوائية',
            ],
        },
        responseTime: 'نفس اليوم',
        nearbyCities: ['صبيا', 'أبو عريش'],
    },

    'al-baha': {
        slug: 'al-baha',
        name_ar: 'الباحة',
        climate: 'mountain',
        challenges: [
            'طرق جبلية ضيقة',
            'ضباب وأمطار',
            'برودة شتوية',
        ],
        urbanTraits: [
            'غابات ومناظر طبيعية',
            'سياحة بيئية',
            'مناخ معتدل صيفاً',
        ],
        priceModifier: 0.8,
        neighborhoods: [
            { name_ar: 'المخواة', name_en: 'Al Mikhwah', type: 'residential' },
            { name_ar: 'بني ظبيان', name_en: 'Bani Dhubyan', type: 'residential' },
            { name_ar: 'الحي الحكومي', name_en: 'Government District', type: 'mixed' },
        ],
        serviceNuances: {
            moving: [
                'طرق جبلية صعبة',
                'شاحنات صغيرة فقط',
            ],
            insulation: [
                'عزل من الأمطار الغزيرة',
            ],
        },
        responseTime: 'نفس اليوم',
        nearbyCities: ['أبها', 'الطائف'],
    },
};

// ============================================
// Helper Functions
// ============================================

/**
 * Get city context by slug
 */
export function getCityContext(slug: string): CityContext | null {
    return CITY_CONTEXT[slug] || null;
}

/**
 * Get adjusted price for a city (multiply base price by modifier)
 */
export function getAdjustedPrice(basePrice: number, citySlug: string): number {
    const context = getCityContext(citySlug);
    if (!context) return basePrice;
    return Math.round(basePrice * context.priceModifier);
}

/**
 * Get price range string adjusted for city
 */
export function getAdjustedPriceRange(minPrice: number, maxPrice: number, citySlug: string): string {
    const context = getCityContext(citySlug);
    if (!context) return `${minPrice} - ${maxPrice}`;

    const adjustedMin = Math.round(minPrice * context.priceModifier);
    const adjustedMax = Math.round(maxPrice * context.priceModifier);

    return `${adjustedMin.toLocaleString('ar-SA')} - ${adjustedMax.toLocaleString('ar-SA')}`;
}

/**
 * Get service-specific challenges for a city
 */
export function getServiceNuances(citySlug: string, serviceCategory: string): string[] {
    const context = getCityContext(citySlug);
    if (!context) return [];

    return context.serviceNuances[serviceCategory as keyof typeof context.serviceNuances] || [];
}

/**
 * Get neighborhoods formatted for display
 */
export function getNeighborhoodsList(citySlug: string): string[] {
    const context = getCityContext(citySlug);
    if (!context) return [];

    return context.neighborhoods.map(n => n.name_ar);
}

/**
 * Get climate-based content suggestions
 */
export function getClimateContent(climate: ClimateType): {
    challenges: string[];
    tips: string[];
} {
    switch (climate) {
        case 'humid-coastal':
            return {
                challenges: ['الرطوبة العالية', 'ملوحة الهواء', 'صدأ المعادن'],
                tips: ['تغليف إضافي لحماية الأثاث', 'صيانة دورية للأجهزة', 'تنظيف وتعقيم متكرر'],
            };
        case 'dry-hot':
            return {
                challenges: ['الغبار والعواصف الرملية', 'الحرارة المرتفعة'],
                tips: ['تنظيف فلاتر المكيفات', 'حماية الأثاث من الشمس'],
            };
        case 'mountain':
            return {
                challenges: ['الطرق الجبلية', 'الأمطار والضباب', 'البرودة'],
                tips: ['نقل في الأوقات المناسبة', 'عزل جيد للمباني', 'سائقون محترفون'],
            };
        case 'desert':
            return {
                challenges: ['البرودة الشتوية الشديدة', 'العواصف الرملية'],
                tips: ['عزل حراري ممتاز', 'حماية الخزانات من التجمد'],
            };
        default:
            return { challenges: [], tips: [] };
    }
}
