/**
 * Per-Service Geo Context — Makes each of the 53 services unique
 * 
 * Each service slug gets:
 * - Specific equipment/technique keywords (معدات/تقنيات)
 * - Zone preference override (some services need commercial, not residential)
 * - Service-specific dispatch phrase
 * - Unique vehicle/team descriptor
 */

export interface ServiceGeoProfile {
    /** Specific equipment or technique mentioned in narrative */
    equipment: string;
    /** Team/vehicle descriptor specific to this service */
    teamDesc: string;
    /** Zone type override (e.g., office-cleaning → commercial, not residential) */
    zoneOverride?: 'residential' | 'commercial' | 'logistics' | 'landmark';
    /** Arrival context — what the team brings/does on arrival */
    arrivalContext: string;
}

export const SERVICE_GEO_PROFILES: Record<string, ServiceGeoProfile> = {
    // ═══════════════════════════════════════
    // CLEANING (27 services)
    // ═══════════════════════════════════════
    'cleaning': {
        equipment: 'أجهزة تنظيف عميق ومكانس صناعية',
        teamDesc: 'طاقم التنظيف الشامل',
        arrivalContext: 'يبدأون بالفحص البصري ثم التنظيف العميق بالتتابع',
    },
    'tanks-cleaning': {
        equipment: 'مضخات سحب وفرش تنظيف داخلية مع محاليل التعقيم',
        teamDesc: 'فريق تنظيف الخزانات المعتمد',
        zoneOverride: 'logistics',
        arrivalContext: 'يفرغون الخزان ثم يعقمون جدرانه الداخلية',
    },
    'sofa-cleaning': {
        equipment: 'ماكينات شامبو وأجهزة شفط رطوبة متخصصة',
        teamDesc: 'فريق تنظيف المفروشات',
        arrivalContext: 'يفحصون نوع القماش ثم يحددون تقنية الغسيل المناسبة',
    },
    'carpet-cleaning': {
        equipment: 'ماكينات غسيل سجاد أوتوماتيكية وأحواض نقع',
        teamDesc: 'فنيّو غسيل السجاد',
        arrivalContext: 'يصنّفون السجاد حسب الخامة قبل اختيار برنامج الغسيل',
    },
    'steam-cleaning': {
        equipment: 'وحدات بخار صناعي بضغط 180°م وخراطيم متعددة الرؤوس',
        teamDesc: 'فريق التنظيف بالبخار',
        arrivalContext: 'يسخّنون الوحدة ثم يبدأون بالتعقيم الحراري من الأسطح العلوية',
    },
    'sanitization': {
        equipment: 'أجهزة رش ضبابي ULV ومحاليل تعقيم معتمدة من الهيئة العامة للغذاء',
        teamDesc: 'فريق التعقيم الطبي',
        arrivalContext: 'يرتدون بدل واقية ثم يبدأون بالتعقيم المنهجي غرفة بغرفة',
    },
    'air-conditioner-cleaning': {
        equipment: 'سوائل تنظيف تكييف وأجهزة ضغط هواء مع أغطية حماية',
        teamDesc: 'فنيّو صيانة التكييف',
        arrivalContext: 'يفصلون الكهرباء ويفككون الفلاتر قبل الغسيل العميق',
    },
    'mattress-cleaning': {
        equipment: 'أجهزة شفط عث الغبار ومعقمات UV مع شامبو مراتب طبي',
        teamDesc: 'متخصصو تنظيف المراتب',
        arrivalContext: 'يكشفون عن البقع والعث بالأشعة فوق البنفسجية أولاً',
    },
    'glass-facades-cleaning': {
        equipment: 'سقالات معلقة ومعدات تسلق صناعية مع محاليل تلميع واجهات',
        teamDesc: 'فريق تنظيف الواجهات الزجاجية',
        zoneOverride: 'commercial',
        arrivalContext: 'ينصبون السقالات ويجهّزون حبال الأمان قبل بدء التلميع',
    },
    'floor-cleaning': {
        equipment: 'ماكينات تنظيف أرضيات أوتوماتيكية ride-on ومساحات صناعية',
        teamDesc: 'فريق تنظيف الأرضيات',
        arrivalContext: 'يحددون نوع الأرضية (بلاط/رخام/فينيل) ثم يختارون البرنامج المناسب',
    },
    'floor-polishing': {
        equipment: 'ماكينات جلي كريستال وأقراص ألماسية بدرجات خشونة متعددة',
        teamDesc: 'فنيّو جلي البلاط',
        arrivalContext: 'يبدأون بالقرص الخشن ثم يتدرجون حتى اللمعان الكريستالي',
    },
    'marble-polishing': {
        equipment: 'ماكينات جلي رخام ثقيلة وكريمات تلميع إيطالية',
        teamDesc: 'متخصصو جلي الرخام',
        arrivalContext: 'يعاينون الشروخ والبقع ثم يحددون عدد مراحل الجلي اللازمة',
    },
    'villas-cleaning': {
        equipment: 'معدات تنظيف شاملة (بخار + شامبو + مكانس صناعية) لجميع الطوابق',
        teamDesc: 'طاقم تنظيف الفلل المتكامل',
        arrivalContext: 'يُقسّمون العمل بين الطوابق ويبدأون من الأعلى للأسفل',
    },
    'apartments-cleaning': {
        equipment: 'معدات تنظيف خفيفة ومتنقلة مناسبة للشقق',
        teamDesc: 'فريق تنظيف الشقق',
        arrivalContext: 'يفحصون المساحة ويحددون أولويات التنظيف حسب الحالة',
    },
    'palaces-cleaning': {
        equipment: 'معدات تنظيف فاخرة ومواد عناية بالرخام والكريستال والثريات',
        teamDesc: 'الفريق المتخصص في تنظيف القصور',
        zoneOverride: 'landmark',
        arrivalContext: 'يضعون خطة عمل مفصّلة مع مشرف الموقع قبل البدء',
    },
    'shops-cleaning': {
        equipment: 'ماكينات تنظيف واجهات ومعدات تلميع أرضيات تجارية',
        teamDesc: 'فريق تنظيف المحلات التجارية',
        zoneOverride: 'commercial',
        arrivalContext: 'ينسّقون مع صاحب المحل لجدولة التنظيف خارج أوقات الذروة',
    },
    'office-cleaning': {
        equipment: 'معدات تنظيف مكاتب هادئة ومعقمات أسطح عمل',
        teamDesc: 'فريق تنظيف المكاتب',
        zoneOverride: 'commercial',
        arrivalContext: 'يعملون بصمت تام ويركّزون على المكاتب ومناطق الاستقبال',
    },
    'furniture-cleaning': {
        equipment: 'أجهزة تنظيف منجّدات وشامبو أثاث متخصص',
        teamDesc: 'فريق تنظيف الأثاث',
        arrivalContext: 'يحددون نوع الخامة (جلد/قماش/مخمل) قبل اختيار المنظّف',
    },
    'kitchen-cleaning': {
        equipment: 'مزيلات شحوم صناعية ومعدات تنظيف أفران ومداخن',
        teamDesc: 'فريق تنظيف المطابخ',
        arrivalContext: 'يبدأون بإزالة الشحوم المتراكمة ثم التعقيم الحراري',
    },
    'swimming-pool-cleaning': {
        equipment: 'أجهزة شفط قاع مسابح ومعدات فحص كلور وpH',
        teamDesc: 'فنيّو صيانة المسابح',
        zoneOverride: 'landmark',
        arrivalContext: 'يفحصون نسب الكلور والحموضة ثم ينظفون الجدران والقاع',
    },
    'auto-cleaning': {
        equipment: 'أجهزة غسيل سيارات بالبخار ومنظفات جلود متخصصة',
        teamDesc: 'فريق تنظيف السيارات المتنقل',
        zoneOverride: 'commercial',
        arrivalContext: 'يصلون بسيارة الخدمة المتنقلة المجهزة بخزان مياه ومعدات كاملة',
    },
    'oven-cleaning': {
        equipment: 'مزيلات شحوم أفران صناعية ومعدات تفكيك وتنظيف داخلي',
        teamDesc: 'فنيّو تنظيف الأفران',
        arrivalContext: 'يفككون الرفوف والمراوح ثم ينقعون الأجزاء في محلول إزالة الشحوم',
    },
    'councils-cleaning': {
        equipment: 'شامبو مجالس وماكينات شفط وتنظيف سجاد عربي',
        teamDesc: 'فريق تنظيف المجالس',
        arrivalContext: 'يعاينون نوع قماش المجلس ويختارون الشامبو المناسب للخامة',
    },
    'hourly-cleaning': {
        equipment: 'أدوات تنظيف يومية ومعقمات أسطح سريعة',
        teamDesc: 'عاملات النظافة بالساعة',
        arrivalContext: 'يحضرن بأدوات التنظيف الأساسية ويبدأن العمل فوراً',
    },
    'restaurant-chimney-cleaning': {
        equipment: 'معدات تنظيف مداخن صناعية وأجهزة كشط شحوم مع فلاتر بديلة',
        teamDesc: 'فريق تنظيف مداخن المطاعم',
        zoneOverride: 'commercial',
        arrivalContext: 'يفحصون حالة المدخنة والفلاتر ثم يبدأون بالكشط والتنظيف العميق',
    },
    'ac-maintenance': {
        equipment: 'قطع غيار تكييف أصلية ومعدات فحص فريون ومقاييس ضغط',
        teamDesc: 'فنيّو صيانة المكيفات',
        arrivalContext: 'يفحصون مستوى الفريون والكمبريسور قبل التشخيص',
    },
    'ac-installation': {
        equipment: 'مواسير نحاس ومحابس ومعدات تركيب سبليت مع قواعد تثبيت',
        teamDesc: 'فنيّو تركيب المكيفات',
        arrivalContext: 'يحددون موقع الوحدة الخارجية ومسار المواسير قبل التثبيت',
    },

    // ═══════════════════════════════════════
    // PEST CONTROL (10 services)
    // ═══════════════════════════════════════
    'pest-control': {
        equipment: 'أجهزة رش ضبابي وطعوم جل ومصائد لاصقة',
        teamDesc: 'فريق المكافحة العامة',
        arrivalContext: 'يجرون مسحاً شاملاً لتحديد أنواع الآفات ومناطق التركّز',
    },
    'pesticide-spraying': {
        equipment: 'مضخات رش عالية الضغط ومبيدات ذات أثر بقائي',
        teamDesc: 'فنيّو رش المبيدات',
        arrivalContext: 'يحددون تركيز المحلول حسب شدة الإصابة ونوع السطح',
    },
    'insects-spraying': {
        equipment: 'أجهزة رش ضغط منخفض ومبيدات آمنة غير سامة للبشر',
        teamDesc: 'فريق رش الحشرات',
        arrivalContext: 'يطلبون إخلاء المنطقة ثم يرشون بشكل منهجي من الزوايا للمركز',
    },
    'termite-control': {
        equipment: 'مثاقب حقن أرضي ومحاليل مضادة للنمل الأبيض (فيبرونيل)',
        teamDesc: 'متخصصو مكافحة النمل الأبيض',
        zoneOverride: 'logistics',
        arrivalContext: 'يحفرون نقاط حقن حول الأساسات ويضخون المحلول تحت ضغط',
    },
    'cockroach-control': {
        equipment: 'جل بايث متقدم ومصائد فيرومونية وبخاخ شقوق',
        teamDesc: 'فريق مكافحة الصراصير',
        arrivalContext: 'يضعون نقاط جل طُعم في الشقوق والفتحات الحرجة',
    },
    'bedbugs-control': {
        equipment: 'أجهزة معالجة حرارية وبخار ساخن مع مبيدات متخصصة للبق',
        teamDesc: 'متخصصو القضاء على البق',
        arrivalContext: 'يفحصون المراتب والأثاث بمصباح UV لتحديد بؤر الإصابة',
    },
    'rodent-control': {
        equipment: 'مصائد ميكانيكية وطعوم سامة في محطات بلاستيكية آمنة',
        teamDesc: 'فريق مكافحة القوارض',
        arrivalContext: 'يتتبعون آثار الفئران (فضلات/قضم) لوضع المصائد في المسارات',
    },
    'ants-control': {
        equipment: 'جل طُعم نمل وبودرة سيليكا ومحلول رش محيطي',
        teamDesc: 'فريق مكافحة النمل',
        arrivalContext: 'يتتبعون مسارات النمل وصولاً للمستعمرة ثم يعالجون المصدر',
    },
    'bird-control': {
        equipment: 'أشواك طرد حمام وشباك حماية ومعدات تركيب',
        teamDesc: 'فريق مكافحة الحمام والطيور',
        zoneOverride: 'commercial',
        arrivalContext: 'يعاينون الأسطح والنوافذ ثم يثبّتون الأشواك والشباك',
    },
    'snakes-control': {
        equipment: 'عصي إمساك وأقفاص حية ومواد طاردة طبيعية',
        teamDesc: 'فريق الإمساك بالثعابين والزواحف',
        arrivalContext: 'يفحصون الحديقة والجدران بحثاً عن جحور ثم يضعون مواد طاردة',
    },

    // ═══════════════════════════════════════
    // MOVING (5 services)
    // ═══════════════════════════════════════
    'furniture-moving': {
        equipment: 'شاحنات مغلقة (3-7 طن) ومواد تغليف فقاعية وصناديق كرتون',
        teamDesc: 'أسطول نقل العفش',
        arrivalContext: 'يقيّمون حجم المنقولات ثم يبدأون بالتغليف والتحميل المنظّم',
    },
    'furniture-storage': {
        equipment: 'مستودعات مكيّفة ومُراقبة بالكاميرات 24/7',
        teamDesc: 'فريق التخزين المؤمّن',
        arrivalContext: 'يُصنّفون الأثاث ويغلّفونه ببلاستيك حماية قبل التخزين',
    },
    'dyna': {
        equipment: 'دينات نقل مفتوحة (1-3 طن) مع حبال ربط وأغطية مشمّعة',
        teamDesc: 'سائقو الدينات',
        arrivalContext: 'يتحققون من حجم الحمولة ويجهّزون حبال التثبيت',
    },
    'moving-out': {
        equipment: 'شاحنات نقل ثقيل مؤمّنة للمسافات الطويلة مع GPS تتبع',
        teamDesc: 'أسطول النقل بين المدن',
        arrivalContext: 'يجهّزون خطة النقل مع محطات الاستراحة وجدول الوصول',
    },
    'dabab': {
        equipment: 'دبابات نقل خفيفة مثالية للقطع المفردة والأجهزة',
        teamDesc: 'سائقو الدبابات المتنقلة',
        arrivalContext: 'يصلون بالدباب ويحمّلون القطعة مباشرة للتوصيل السريع',
    },

    // ═══════════════════════════════════════
    // LEAK DETECTION (3 services)
    // ═══════════════════════════════════════
    'water-leak-detection': {
        equipment: 'أجهزة كشف إلكتروني بالذبذبات وكاميرات حرارية FLIR',
        teamDesc: 'فنيّو كشف تسربات المياه',
        arrivalContext: 'يفحصون العدادات أولاً ثم يستخدمون الأجهزة الإلكترونية لتحديد موقع التسرب بدقة',
    },
    'tank-leak-detection': {
        equipment: 'أجهزة ضغط نيتروجين واختبار هيدروستاتيكي للخزانات',
        teamDesc: 'فنيّو فحص تسربات الخزانات',
        zoneOverride: 'logistics',
        arrivalContext: 'يضغطون الخزان بالنيتروجين ويراقبون انخفاض الضغط لتحديد التسرب',
    },
    'bathroom-leak-detection': {
        equipment: 'كاميرات تصوير أنابيب وأجهزة رطوبة جدران',
        teamDesc: 'فنيّو كشف تسربات الحمامات',
        arrivalContext: 'يفحصون نقاط التوصيل والسيفونات باستخدام كاميرا الأنابيب',
    },

    // ═══════════════════════════════════════
    // SEWAGE (2 services)
    // ═══════════════════════════════════════
    'sewage-suction': {
        equipment: 'وايتات شفط بيارات (4-14 طن) بمضخات فاكيوم صناعية',
        teamDesc: 'أسطول وايتات الشفط',
        arrivalContext: 'يحددون حجم البيارة ويوصلون خراطيم الشفط ذات القطر المناسب',
    },
    'sewage-unblocking': {
        equipment: 'أجهزة Jet Wash بضغط 3000 PSI وكاميرات فحص مجاري',
        teamDesc: 'فنيّو تسليك المجاري',
        arrivalContext: 'يدخلون الكاميرا لتحديد موقع الانسداد ثم يضخون ماء بضغط عالي',
    },

    // ═══════════════════════════════════════
    // INSULATION (6 services)
    // ═══════════════════════════════════════
    'tank-insulation': {
        equipment: 'مواد إيبوكسي غذائي وطبقات بيتومين مع فرش رول',
        teamDesc: 'فريق عزل الخزانات',
        arrivalContext: 'يفحصون جدران الخزان وينظفونها قبل تطبيق طبقات العزل',
    },
    'roof-insulation': {
        equipment: 'رولات بيتومين ولفائف SBS مع شعلات تسخين',
        teamDesc: 'مقاولو عزل الأسطح',
        arrivalContext: 'ينظفون السطح ثم يلحّمون طبقات البيتومين بالشعلة الحرارية',
    },
    'foam-insulation': {
        equipment: 'ماكينات رش فوم بولي يوريثان (PU) بكثافات مختلفة',
        teamDesc: 'فنيّو رش الفوم',
        arrivalContext: 'يحددون السماكة المطلوبة ثم يرشون طبقة واحدة متجانسة',
    },
    'water-insulation': {
        equipment: 'أغشية HDPE ومواد عزل سائلة (Liquid Membrane)',
        teamDesc: 'فريق العزل المائي',
        arrivalContext: 'يعالجون الشقوق أولاً ثم يطبقون طبقات العزل المائي',
    },
    'thermal-insulation': {
        equipment: 'ألواح بوليسترين XPS ومادة عزل حراري سائلة (سيراميك عاكس)',
        teamDesc: 'متخصصو العزل الحراري',
        zoneOverride: 'residential',
        arrivalContext: 'يقيسون درجة الحرارة بالكاميرا الحرارية ثم يحددون مناطق الفقد',
    },
    'epoxy-coating': {
        equipment: 'راتنج إيبوكسي ثنائي المكون ومعدات خلط وفرد آلية',
        teamDesc: 'فنيّو دهان الإيبوكسي',
        arrivalContext: 'يجهّزون السطح بالصنفرة ثم يخلطون المكوّنين ويبدأون الفرد',
    },
};

/**
 * Get geo profile for a service slug.
 * Falls back to a default profile based on category if slug not found.
 */
export function getServiceGeoProfile(slug: string, category: string): ServiceGeoProfile {
    if (SERVICE_GEO_PROFILES[slug]) {
        return SERVICE_GEO_PROFILES[slug];
    }
    
    // Fallback: generate a basic profile from category
    const categoryDefaults: Record<string, ServiceGeoProfile> = {
        'cleaning': {
            equipment: 'أدوات ومعدات تنظيف احترافية',
            teamDesc: 'فريق التنظيف',
            arrivalContext: 'يبدأون العمل فوراً بمعدات متكاملة',
        },
        'pest-control': {
            equipment: 'مبيدات ومعدات مكافحة متخصصة',
            teamDesc: 'فريق المكافحة',
            arrivalContext: 'يجرون فحصاً أولياً ثم يبدأون المعالجة',
        },
        'moving': {
            equipment: 'شاحنات نقل ومواد تغليف',
            teamDesc: 'فريق النقل',
            arrivalContext: 'يبدأون بالتغليف والتحميل المنظّم',
        },
        'sewage': {
            equipment: 'سيارات شفط ومعدات ضغط',
            teamDesc: 'فريق الصيانة',
            arrivalContext: 'يبدأون بالفحص ثم المعالجة الفورية',
        },
        'insulation': {
            equipment: 'مواد عزل ومعدات تطبيق',
            teamDesc: 'فريق العزل',
            arrivalContext: 'يجهّزون السطح ثم يطبقون العزل',
        },
        'leak-detection': {
            equipment: 'أجهزة كشف إلكترونية',
            teamDesc: 'فنيّو الكشف',
            arrivalContext: 'يشخّصون الحالة بالأجهزة الإلكترونية',
        },
    };
    
    return categoryDefaults[category] || categoryDefaults['cleaning'];
}
