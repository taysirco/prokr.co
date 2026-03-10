/**
 * Phantom Geo-Hijacking — Dispatch Zone Data
 * 
 * Each city has 4 distinct dispatch zones with REAL coordinates:
 * - residential: Main residential district (cleaning, pest-control, leak-detection)
 * - commercial: Business/commercial hub (insulation, glass-facades, office cleaning)
 * - logistics: Logistics/industrial zone (moving, sewage, heavy equipment)
 * - landmark: Famous city landmark (default/fallback)
 * 
 * Service categories map to zones for unique content per city+service combo.
 */

export interface DispatchZone {
    name_ar: string;          // Arabic display name
    nameEn: string;           // URL-safe for Google Maps query
    lat: number;              // Real latitude
    lng: number;              // Real longitude
    description: string;      // Unique zone description for this city
}

export interface CityDispatchData {
    residential: DispatchZone;
    commercial: DispatchZone;
    logistics: DispatchZone;
    landmark: DispatchZone;
}

// Service category → dispatch zone type mapping
export const SERVICE_ZONE_MAP: Record<string, keyof CityDispatchData> = {
    'cleaning': 'residential',
    'pest-control': 'residential',
    'leak-detection': 'residential',
    'moving': 'logistics',
    'sewage': 'logistics',
    'insulation': 'commercial',
};

// Service-category-specific narrative templates
// Each category gets 3 templates — selected by stable hash to ensure uniqueness per slug
export const GEO_NARRATIVES: Record<string, string[]> = {
    'cleaning': [
        'تنطلق فرق التنظيف المتخصصة من قاعدة العمليات في منطقة {zone} — بمعدات بخار صناعية ومحاليل تعقيم مُعتمدة — لتغطية جميع أحياء {city} السكنية في نطاق {radius}.',
        'فرق النظافة الاحترافية تتمركز بالقرب من {zone} لضمان وصول سريع بأجهزة التنظيف العميق إلى مختلف أحياء {city} — خلال {responseTime}.',
        'من محطة التشغيل المركزية قرب {zone}، تنتشر طواقم التنظيف المجهّزة بمعدات جلي وتلميع ومكائن بخار لخدمة منازل {city} بمعايير فندقية.',
    ],
    'pest-control': [
        'تتحرك فرق المكافحة المرخّصة من مستودع المبيدات المعتمد قرب {zone} — بسيارات مجهّزة بأجهزة رش ضبابي ULV — لمعالجة الإصابات في أحياء {city} خلال {responseTime}.',
        'أخصائيو مكافحة الآفات ينطلقون من قاعدة {zone} بمعدات تشخيص متقدمة ومبيدات آمنة معتمدة من وزارة الصحة لتغطية {city} في نطاق {radius}.',
        'من نقطة الانتشار قرب {zone}، تصل فرق المكافحة المتخصصة لأحياء {city} بسيارات مجهّزة بمعدات الرش والطعوم — استجابة طوارئ {responseTime}.',
    ],
    'leak-detection': [
        'فنيّو كشف التسربات يتمركزون بالقرب من {zone} بأجهزة إلكترونية متقدمة (كاميرات حرارية + نيتروجين) — يغطون أحياء {city} بتقارير معتمدة من شركة المياه الوطنية.',
        'من القاعدة التشغيلية قرب {zone}، ينتشر فنيّو الكشف بأجهزة الذبذبات الصوتية والأشعة تحت الحمراء لفحص شبكات المياه في {city} — بدون تكسير.',
        'أجهزة كشف التسربات الإلكترونية تنطلق من مستودع {zone} لفحص خطوط المياه في أحياء {city} — وقت وصول لا يتجاوز {responseTime}.',
    ],
    'moving': [
        'أسطول سيارات النقل والدينات يتمركز في منطقة {zone} اللوجستية — بفنيّي فك وتركيب ومواد تغليف احترافية — لخدمة عمليات النقل في {city} ضمن {radius}.',
        'من مستودعات التخزين والتحميل قرب {zone}، تتحرك شاحنات النقل المؤمّنة بأحجام مختلفة لتغطية كافة أحياء {city} — بتأمين شامل على المنقولات.',
        'فرق النقل المحترفة تنطلق من القاعدة اللوجستية في {zone} — بدينات مغلقة ورافعات هيدروليكية — لعمليات نقل آمنة في {city} خلال {responseTime}.',
    ],
    'sewage': [
        'وايتات الشفط وسيارات التسليك بالضغط العالي تتمركز في المنطقة الصناعية قرب {zone} — جاهزة لاستجابة طوارئ فورية في أحياء {city} على مدار الساعة.',
        'من محطة التشغيل في {zone}، ينطلق أسطول سيارات شفط البيارات (4-14 طن) وأجهزة Jet Wash لتسليك مجاري {city} — استجابة خلال {responseTime}.',
        'سيارات الصيانة والشفط تتمركز قرب {zone} بمعدات ضغط عالي ومضخات شفط صناعية لخدمة شبكات الصرف في كافة أحياء {city}.',
    ],
    'insulation': [
        'مقاولو العزل المعتمدون يتمركزون بالقرب من {zone} التجاري — بمعدات رش الفوم والإيبوكسي ورولات البيتومين — لتغطية مشاريع العزل في {city} ضمن {radius}.',
        'من قاعدة التشغيل قرب {zone}، تنتشر فرق العزل المتخصصة بمواد معتمدة دولياً (SBS + PU Foam) لمعالجة أسطح ومباني {city} بضمان يمتد 10 سنوات.',
        'فرق العزل الحراري والمائي تنطلق من {zone} — بمعدات رش متقدمة ومواد عزل مطابقة لمواصفات ASTM — لحماية مباني {city} من الرطوبة والحرارة.',
    ],
};

/**
 * Complete dispatch zone data for all 24 cities
 * Coordinates are REAL coordinates for actual locations in each city
 */
export const CITY_DISPATCH_ZONES: Record<string, CityDispatchData> = {
    // ═══════════════════════════════════════
    // CENTRAL REGION
    // ═══════════════════════════════════════
    'riyadh': {
        residential: {
            name_ar: 'حي الملقا',
            nameEn: 'Al+Malqa+Riyadh',
            lat: 24.8231,
            lng: 46.6350,
            description: 'القلب السكني لشمال الرياض — فلل ومجمعات حديثة',
        },
        commercial: {
            name_ar: 'طريق الملك فهد — العليا',
            nameEn: 'King+Fahd+Road+Olaya+Riyadh',
            lat: 24.6908,
            lng: 46.6849,
            description: 'المحور التجاري الرئيسي — أبراج ومكاتب',
        },
        logistics: {
            name_ar: 'المنطقة الصناعية الثانية',
            nameEn: 'Second+Industrial+City+Riyadh',
            lat: 24.5541,
            lng: 46.7711,
            description: 'مركز لوجستي ومستودعات نقل',
        },
        landmark: {
            name_ar: 'برج المملكة',
            nameEn: 'Kingdom+Tower+Riyadh',
            lat: 24.7116,
            lng: 46.6744,
            description: 'أيقونة الرياض المعمارية — 302 متر',
        },
    },
    'al-kharj': {
        residential: {
            name_ar: 'حي الخالدية',
            nameEn: 'Al+Khalidiyah+Al+Kharj',
            lat: 24.1512,
            lng: 47.3122,
            description: 'الحي السكني الرئيسي — مجمعات عائلية',
        },
        commercial: {
            name_ar: 'شارع الملك فهد التجاري',
            nameEn: 'King+Fahd+Street+Al+Kharj',
            lat: 24.1556,
            lng: 47.3081,
            description: 'الشريان التجاري الأول في الخرج',
        },
        logistics: {
            name_ar: 'المنطقة الصناعية بالخرج',
            nameEn: 'Industrial+Area+Al+Kharj',
            lat: 24.1124,
            lng: 47.3455,
            description: 'منطقة مستودعات ونقل',
        },
        landmark: {
            name_ar: 'قصر أبو جفان التاريخي',
            nameEn: 'Abu+Jifan+Palace+Al+Kharj',
            lat: 24.0294,
            lng: 47.2981,
            description: 'معلم تاريخي بارز',
        },
    },
    'qassim': {
        residential: {
            name_ar: 'حي الصفراء',
            nameEn: 'Al+Safra+Qassim',
            lat: 26.3280,
            lng: 43.9608,
            description: 'حي سكني مركزي في القصيم',
        },
        commercial: {
            name_ar: 'سوق عنيزة المركزي',
            nameEn: 'Unaizah+Central+Market+Qassim',
            lat: 26.0910,
            lng: 43.9840,
            description: 'مركز تجاري نشط',
        },
        logistics: {
            name_ar: 'المنطقة الصناعية بالقصيم',
            nameEn: 'Industrial+Zone+Qassim',
            lat: 26.2900,
            lng: 43.9200,
            description: 'مستودعات وورش صناعية',
        },
        landmark: {
            name_ar: 'جامع الأمير سلطان',
            nameEn: 'Prince+Sultan+Mosque+Qassim',
            lat: 26.3358,
            lng: 43.9679,
            description: 'أبرز مسجد في المنطقة',
        },
    },
    'buraidah': {
        residential: {
            name_ar: 'حي الإسكان',
            nameEn: 'Al+Iskan+Buraidah',
            lat: 26.3516,
            lng: 43.9627,
            description: 'أكبر حي سكني في بريدة',
        },
        commercial: {
            name_ar: 'سوق الخضار المركزي',
            nameEn: 'Central+Vegetable+Market+Buraidah',
            lat: 26.3300,
            lng: 43.9750,
            description: 'أكبر سوق للتمور والخضار في الشرق الأوسط',
        },
        logistics: {
            name_ar: 'المنطقة الصناعية ببريدة',
            nameEn: 'Industrial+Area+Buraidah',
            lat: 26.3100,
            lng: 43.9300,
            description: 'مركز صناعي ولوجستي',
        },
        landmark: {
            name_ar: 'سوق الخضار المركزي',
            nameEn: 'Central+Vegetable+Market+Buraidah',
            lat: 26.3300,
            lng: 43.9750,
            description: 'معلم تجاري عالمي',
        },
    },
    'onizah': {
        residential: {
            name_ar: 'حي المنتزه',
            nameEn: 'Al+Muntazah+Unaizah',
            lat: 26.1010,
            lng: 43.9810,
            description: 'حي سكني حديث',
        },
        commercial: {
            name_ar: 'شارع الملك عبدالعزيز',
            nameEn: 'King+Abdulaziz+Road+Unaizah',
            lat: 26.0890,
            lng: 43.9850,
            description: 'محور تجاري مركزي',
        },
        logistics: {
            name_ar: 'المنطقة الصناعية بعنيزة',
            nameEn: 'Industrial+Zone+Unaizah',
            lat: 26.0700,
            lng: 43.9600,
            description: 'منطقة ورش ومستودعات',
        },
        landmark: {
            name_ar: 'قلعة عنيزة التراثية',
            nameEn: 'Unaizah+Heritage+Castle',
            lat: 26.0920,
            lng: 43.9870,
            description: 'معلم تراثي بارز',
        },
    },

    // ═══════════════════════════════════════
    // WESTERN REGION
    // ═══════════════════════════════════════
    'jeddah': {
        residential: {
            name_ar: 'حي الحمراء',
            nameEn: 'Al+Hamra+District+Jeddah',
            lat: 21.5658,
            lng: 39.1665,
            description: 'حي سكني راقٍ — فلل وشقق حديثة',
        },
        commercial: {
            name_ar: 'شارع التحلية',
            nameEn: 'Tahlia+Street+Jeddah',
            lat: 21.5873,
            lng: 39.1282,
            description: 'أشهر شارع تجاري — مكاتب ومعارض',
        },
        logistics: {
            name_ar: 'المنطقة الصناعية جنوب جدة',
            nameEn: 'South+Jeddah+Industrial+Area',
            lat: 21.4190,
            lng: 39.2340,
            description: 'مستودعات ونقليات بحرية',
        },
        landmark: {
            name_ar: 'نافورة الملك فهد',
            nameEn: 'King+Fahd+Fountain+Jeddah',
            lat: 21.4957,
            lng: 39.1524,
            description: 'أعلى نافورة في العالم — 312 متر',
        },
    },
    'makkah': {
        residential: {
            name_ar: 'حي العزيزية',
            nameEn: 'Al+Aziziyah+Makkah',
            lat: 21.3853,
            lng: 39.8279,
            description: 'أكبر حي سكني بمكة',
        },
        commercial: {
            name_ar: 'منطقة أبراج البيت',
            nameEn: 'Abraj+Al+Bait+Makkah',
            lat: 21.4175,
            lng: 39.8274,
            description: 'المجمع التجاري الأبرز',
        },
        logistics: {
            name_ar: 'منطقة كدي الصناعية',
            nameEn: 'Kadi+Industrial+Zone+Makkah',
            lat: 21.3700,
            lng: 39.8500,
            description: 'مركز خدمات لوجستية',
        },
        landmark: {
            name_ar: 'الحرم المكي الشريف',
            nameEn: 'Masjid+Al+Haram+Makkah',
            lat: 21.4225,
            lng: 39.8262,
            description: 'أقدس بقعة على وجه الأرض',
        },
    },
    'madinah': {
        residential: {
            name_ar: 'حي العريض',
            nameEn: 'Al+Areed+Madinah',
            lat: 24.4150,
            lng: 39.6116,
            description: 'حي سكني حديث ومتنامي',
        },
        commercial: {
            name_ar: 'المنطقة المركزية',
            nameEn: 'Central+Area+Madinah',
            lat: 24.4672,
            lng: 39.6128,
            description: 'قلب المدينة التجاري',
        },
        logistics: {
            name_ar: 'المنطقة الصناعية بالمدينة',
            nameEn: 'Industrial+Area+Madinah',
            lat: 24.4300,
            lng: 39.5800,
            description: 'مستودعات ومخازن',
        },
        landmark: {
            name_ar: 'المسجد النبوي الشريف',
            nameEn: 'Al+Masjid+an+Nabawi+Madinah',
            lat: 24.4672,
            lng: 39.6112,
            description: 'ثاني أقدس مسجد في الإسلام',
        },
    },
    'taif': {
        residential: {
            name_ar: 'حي الشهار',
            nameEn: 'Al+Shahar+Taif',
            lat: 21.2780,
            lng: 40.4150,
            description: 'حي سكني راقٍ في قلب الطائف',
        },
        commercial: {
            name_ar: 'شارع خالد بن الوليد',
            nameEn: 'Khalid+bin+Walid+Street+Taif',
            lat: 21.2735,
            lng: 40.4285,
            description: 'شريان الطائف التجاري',
        },
        logistics: {
            name_ar: 'المنطقة الصناعية بالطائف',
            nameEn: 'Industrial+Area+Taif',
            lat: 21.2300,
            lng: 40.4600,
            description: 'منطقة مستودعات وورش',
        },
        landmark: {
            name_ar: 'تلفريك الهدا',
            nameEn: 'Al+Hada+Cable+Car+Taif',
            lat: 21.3540,
            lng: 40.2700,
            description: 'معلم سياحي — 2000 متر فوق سطح البحر',
        },
    },
    'yanbu': {
        residential: {
            name_ar: 'حي الصناعية السكني',
            nameEn: 'Yanbu+Al+Sinaiyah+Residential',
            lat: 24.0860,
            lng: 38.0520,
            description: 'حي سكني حديث مخطط',
        },
        commercial: {
            name_ar: 'كورنيش ينبع التجاري',
            nameEn: 'Yanbu+Commercial+Corniche',
            lat: 24.0867,
            lng: 38.0604,
            description: 'واجهة بحرية تجارية',
        },
        logistics: {
            name_ar: 'ميناء الملك فهد الصناعي',
            nameEn: 'King+Fahd+Industrial+Port+Yanbu',
            lat: 24.1050,
            lng: 38.0300,
            description: 'ميناء صناعي ولوجستي',
        },
        landmark: {
            name_ar: 'كورنيش ينبع',
            nameEn: 'Yanbu+Corniche',
            lat: 24.0867,
            lng: 38.0604,
            description: 'أجمل واجهة بحرية بالمنطقة',
        },
    },

    // ═══════════════════════════════════════
    // EASTERN REGION
    // ═══════════════════════════════════════
    'dammam': {
        residential: {
            name_ar: 'حي الشاطئ',
            nameEn: 'Al+Shati+District+Dammam',
            lat: 26.4330,
            lng: 50.1140,
            description: 'حي راقٍ مطل على الخليج',
        },
        commercial: {
            name_ar: 'شارع الملك سعود',
            nameEn: 'King+Saud+Street+Dammam',
            lat: 26.4255,
            lng: 50.0883,
            description: 'محور تجاري رئيسي',
        },
        logistics: {
            name_ar: 'المنطقة الصناعية الأولى',
            nameEn: 'First+Industrial+Area+Dammam',
            lat: 26.3930,
            lng: 50.0510,
            description: 'مركز لوجستي وصناعي',
        },
        landmark: {
            name_ar: 'كورنيش الدمام',
            nameEn: 'Dammam+Corniche',
            lat: 26.4470,
            lng: 50.1260,
            description: 'كورنيش ساحلي — 4 كم',
        },
    },
    'al-khobar': {
        residential: {
            name_ar: 'حي الراكة',
            nameEn: 'Al+Rakah+Al+Khobar',
            lat: 26.3040,
            lng: 50.2050,
            description: 'حي سكني فاخر',
        },
        commercial: {
            name_ar: 'مجمع الراشد مول',
            nameEn: 'Rashid+Mall+Al+Khobar',
            lat: 26.2955,
            lng: 50.2088,
            description: 'أكبر مجمع تجاري بالخبر',
        },
        logistics: {
            name_ar: 'المنطقة الصناعية بالخبر',
            nameEn: 'Industrial+Area+Al+Khobar',
            lat: 26.2700,
            lng: 50.1800,
            description: 'مستودعات وورش',
        },
        landmark: {
            name_ar: 'كورنيش الخبر',
            nameEn: 'Al+Khobar+Corniche',
            lat: 26.2817,
            lng: 50.2194,
            description: 'واجهة بحرية ساحرة',
        },
    },
    'dhahran': {
        residential: {
            name_ar: 'حي الدانة',
            nameEn: 'Al+Danah+Dhahran',
            lat: 26.2900,
            lng: 50.1400,
            description: 'حي سكني مخطط',
        },
        commercial: {
            name_ar: 'مركز الملك عبدالعزيز الثقافي',
            nameEn: 'Ithra+Center+Dhahran',
            lat: 26.2898,
            lng: 50.1358,
            description: 'مركز ثقافي عالمي — إثراء',
        },
        logistics: {
            name_ar: 'منطقة أرامكو اللوجستية',
            nameEn: 'Aramco+Logistics+Zone+Dhahran',
            lat: 26.3130,
            lng: 50.1210,
            description: 'قاعدة لوجستية ضخمة',
        },
        landmark: {
            name_ar: 'مركز الملك عبدالعزيز الثقافي (إثراء)',
            nameEn: 'Ithra+Center+Dhahran',
            lat: 26.2898,
            lng: 50.1358,
            description: 'أيقونة ثقافية عالمية',
        },
    },
    'jubail': {
        residential: {
            name_ar: 'حي الفناتير',
            nameEn: 'Al+Fanateer+Jubail',
            lat: 27.0210,
            lng: 49.6590,
            description: 'أرقى أحياء الجبيل السكنية',
        },
        commercial: {
            name_ar: 'الجبيل التجاري',
            nameEn: 'Jubail+Commercial+Center',
            lat: 26.9700,
            lng: 49.6500,
            description: 'مركز تجاري نشط',
        },
        logistics: {
            name_ar: 'الجبيل الصناعية — الهيئة الملكية',
            nameEn: 'Jubail+Industrial+City+Royal+Commission',
            lat: 27.0040,
            lng: 49.6120,
            description: 'أكبر مدينة صناعية في الشرق الأوسط',
        },
        landmark: {
            name_ar: 'الجبيل الصناعية',
            nameEn: 'Jubail+Industrial+City',
            lat: 27.0040,
            lng: 49.6120,
            description: 'مدينة صناعية عملاقة',
        },
    },
    'al-ahsa': {
        residential: {
            name_ar: 'حي المبرز',
            nameEn: 'Al+Mubarraz+Al+Ahsa',
            lat: 25.3960,
            lng: 49.5660,
            description: 'حي المبرز السكني التاريخي',
        },
        commercial: {
            name_ar: 'سوق القيصرية',
            nameEn: 'Qaisariyyah+Souq+Al+Ahsa',
            lat: 25.3742,
            lng: 49.5872,
            description: 'أقدم سوق شعبي — تراث عالمي',
        },
        logistics: {
            name_ar: 'المنطقة الصناعية بالأحساء',
            nameEn: 'Industrial+Zone+Al+Ahsa',
            lat: 25.3500,
            lng: 49.5400,
            description: 'قاعدة صناعية ونقل',
        },
        landmark: {
            name_ar: 'واحة الأحساء',
            nameEn: 'Al+Ahsa+Oasis+Saudi+Arabia',
            lat: 25.3800,
            lng: 49.5700,
            description: 'أكبر واحة نخيل في العالم — يونسكو',
        },
    },
    'qatif': {
        residential: {
            name_ar: 'حي الجش',
            nameEn: 'Al+Jish+Qatif',
            lat: 26.5610,
            lng: 50.0100,
            description: 'حي سكني تاريخي',
        },
        commercial: {
            name_ar: 'سوق الخميس',
            nameEn: 'Thursday+Market+Qatif',
            lat: 26.5190,
            lng: 50.0120,
            description: 'سوق شعبي تاريخي',
        },
        logistics: {
            name_ar: 'المنطقة الصناعية بالقطيف',
            nameEn: 'Industrial+Zone+Qatif',
            lat: 26.5000,
            lng: 49.9800,
            description: 'ورش ومستودعات',
        },
        landmark: {
            name_ar: 'قلعة القطيف',
            nameEn: 'Qatif+Castle+Saudi+Arabia',
            lat: 26.5194,
            lng: 50.0124,
            description: 'قلعة تاريخية بارزة',
        },
    },
    'hafr-albatin': {
        residential: {
            name_ar: 'حي الخالدية',
            nameEn: 'Al+Khalidiyyah+Hafr+Al+Batin',
            lat: 28.4340,
            lng: 45.9600,
            description: 'حي سكني رئيسي',
        },
        commercial: {
            name_ar: 'شارع الملك فيصل التجاري',
            nameEn: 'King+Faisal+Street+Hafr+Al+Batin',
            lat: 28.4300,
            lng: 45.9650,
            description: 'المحور التجاري الأول',
        },
        logistics: {
            name_ar: 'المنطقة الصناعية',
            nameEn: 'Industrial+Area+Hafr+Al+Batin',
            lat: 28.4100,
            lng: 45.9400,
            description: 'ورش ومخازن',
        },
        landmark: {
            name_ar: 'سوق حفر الباطن',
            nameEn: 'Hafr+Al+Batin+Central+Market',
            lat: 28.4290,
            lng: 45.9630,
            description: 'سوق مركزي نشط',
        },
    },

    // ═══════════════════════════════════════
    // NORTHERN REGION
    // ═══════════════════════════════════════
    'tabuk': {
        residential: {
            name_ar: 'حي المروج',
            nameEn: 'Al+Muruj+Tabuk',
            lat: 28.3878,
            lng: 36.5570,
            description: 'حي سكني حديث ومخطط',
        },
        commercial: {
            name_ar: 'شارع الأمير فهد بن سلطان',
            nameEn: 'Prince+Fahd+bin+Sultan+Street+Tabuk',
            lat: 28.3870,
            lng: 36.5720,
            description: 'محور تبوك التجاري',
        },
        logistics: {
            name_ar: 'المنطقة الصناعية بتبوك',
            nameEn: 'Industrial+Area+Tabuk',
            lat: 28.3600,
            lng: 36.5300,
            description: 'قاعدة لوجستية شمالية',
        },
        landmark: {
            name_ar: 'قلعة تبوك',
            nameEn: 'Tabuk+Castle+Saudi+Arabia',
            lat: 28.3905,
            lng: 36.5784,
            description: 'قلعة عثمانية تاريخية',
        },
    },
    'hail': {
        residential: {
            name_ar: 'حي المنتزه',
            nameEn: 'Al+Muntazah+Hail',
            lat: 27.5190,
            lng: 41.7010,
            description: 'حي سكني حديث',
        },
        commercial: {
            name_ar: 'شارع الملك عبدالعزيز',
            nameEn: 'King+Abdulaziz+Street+Hail',
            lat: 27.5230,
            lng: 41.6870,
            description: 'الشريان التجاري لحائل',
        },
        logistics: {
            name_ar: 'المنطقة الصناعية بحائل',
            nameEn: 'Industrial+Zone+Hail',
            lat: 27.5000,
            lng: 41.6600,
            description: 'منطقة صناعية ونقل',
        },
        landmark: {
            name_ar: 'قلعة أعيرف',
            nameEn: 'Aarif+Fort+Hail',
            lat: 27.5267,
            lng: 41.6862,
            description: 'قلعة تاريخية — رمز حائل',
        },
    },

    // ═══════════════════════════════════════
    // SOUTHERN REGION
    // ═══════════════════════════════════════
    'abha': {
        residential: {
            name_ar: 'حي المنسك',
            nameEn: 'Al+Mansak+Abha',
            lat: 18.2298,
            lng: 42.4980,
            description: 'حي سكني جبلي — مناخ معتدل',
        },
        commercial: {
            name_ar: 'شارع الفن',
            nameEn: 'Art+Street+Abha',
            lat: 18.2190,
            lng: 42.5050,
            description: 'شارع الفن والثقافة',
        },
        logistics: {
            name_ar: 'المنطقة الصناعية بأبها',
            nameEn: 'Industrial+Area+Abha',
            lat: 18.2000,
            lng: 42.5300,
            description: 'ورش ومستودعات جبلية',
        },
        landmark: {
            name_ar: 'جبل السودة',
            nameEn: 'Al+Soudah+Mountain+Abha',
            lat: 18.2563,
            lng: 42.3680,
            description: 'أعلى قمة في المملكة — 3015 متر',
        },
    },
    'khamis-mushait': {
        residential: {
            name_ar: 'حي الراقي',
            nameEn: 'Al+Raqi+Khamis+Mushait',
            lat: 18.3030,
            lng: 42.7310,
            description: 'حي سكني راقٍ',
        },
        commercial: {
            name_ar: 'شارع الملك فهد',
            nameEn: 'King+Fahd+Road+Khamis+Mushait',
            lat: 18.3100,
            lng: 42.7290,
            description: 'المحور التجاري الرئيسي',
        },
        logistics: {
            name_ar: 'المنطقة الصناعية بخميس مشيط',
            nameEn: 'Industrial+Area+Khamis+Mushait',
            lat: 18.2800,
            lng: 42.7500,
            description: 'قاعدة لوجستية جنوبية',
        },
        landmark: {
            name_ar: 'منتزه الحبلة',
            nameEn: 'Al+Habala+Park+Khamis+Mushait',
            lat: 18.1470,
            lng: 42.7910,
            description: 'قرية معلقة تاريخية',
        },
    },
    'najran': {
        residential: {
            name_ar: 'حي الفهد',
            nameEn: 'Al+Fahd+District+Najran',
            lat: 17.4936,
            lng: 44.1275,
            description: 'حي سكني حديث',
        },
        commercial: {
            name_ar: 'شارع الملك عبدالعزيز',
            nameEn: 'King+Abdulaziz+Road+Najran',
            lat: 17.4950,
            lng: 44.1320,
            description: 'المحور التجاري لنجران',
        },
        logistics: {
            name_ar: 'المنطقة الصناعية بنجران',
            nameEn: 'Industrial+Zone+Najran',
            lat: 17.4700,
            lng: 44.1100,
            description: 'ورش ومخازن',
        },
        landmark: {
            name_ar: 'سد وادي نجران',
            nameEn: 'Najran+Dam+Saudi+Arabia',
            lat: 17.5180,
            lng: 44.0930,
            description: 'أكبر سد في المنطقة الجنوبية',
        },
    },
    'jazan': {
        residential: {
            name_ar: 'حي الشاطئ',
            nameEn: 'Al+Shati+District+Jazan',
            lat: 16.8940,
            lng: 42.5600,
            description: 'حي ساحلي سكني',
        },
        commercial: {
            name_ar: 'كورنيش جازان',
            nameEn: 'Jazan+Corniche',
            lat: 16.8900,
            lng: 42.5510,
            description: 'واجهة جازان البحرية التجارية',
        },
        logistics: {
            name_ar: 'ميناء جازان',
            nameEn: 'Jazan+Port',
            lat: 16.8783,
            lng: 42.5528,
            description: 'ميناء بحري ولوجستي',
        },
        landmark: {
            name_ar: 'جزر فرسان',
            nameEn: 'Farasan+Islands+Jazan',
            lat: 16.7020,
            lng: 41.9850,
            description: 'أرخبيل طبيعي ساحر',
        },
    },
    'al-baha': {
        residential: {
            name_ar: 'حي الخالدية',
            nameEn: 'Al+Khalidiyyah+Al+Baha',
            lat: 20.0000,
            lng: 41.4686,
            description: 'حي سكني مركزي',
        },
        commercial: {
            name_ar: 'شارع الملك فهد',
            nameEn: 'King+Fahd+Street+Al+Baha',
            lat: 20.0040,
            lng: 41.4650,
            description: 'المحور التجاري',
        },
        logistics: {
            name_ar: 'المنطقة الصناعية بالباحة',
            nameEn: 'Industrial+Area+Al+Baha',
            lat: 19.9800,
            lng: 41.4500,
            description: 'ورش ومخازن',
        },
        landmark: {
            name_ar: 'منتزه غابة رغدان',
            nameEn: 'Raghadan+Forest+Park+Al+Baha',
            lat: 20.0068,
            lng: 41.4532,
            description: 'غابة ضبابية خلابة',
        },
    },
};

/**
 * Get the appropriate dispatch zone for a city + service category combo
 */
export function getDispatchZone(citySlug: string, serviceCategory: string): DispatchZone | null {
    const cityData = CITY_DISPATCH_ZONES[citySlug];
    if (!cityData) return null;

    const zoneType = SERVICE_ZONE_MAP[serviceCategory] || 'landmark';
    return cityData[zoneType];
}

/**
 * Get the unique narrative text for a city + service category combo
 * Uses stable hash to select a template variant — ensuring consistency across builds
 */
export function getGeoNarrative(
    citySlug: string,
    serviceCategory: string,
    cityName: string,
    responseTime: string,
    coverageRadius: string,
    zoneName: string,
): string {
    const templates = GEO_NARRATIVES[serviceCategory] || GEO_NARRATIVES['cleaning'];

    // Stable hash from city+category → template index
    // This ensures same city+category always gets same template
    let hash = 0;
    const key = `${citySlug}:${serviceCategory}`;
    for (let i = 0; i < key.length; i++) {
        hash = ((hash << 5) - hash) + key.charCodeAt(i);
        hash |= 0; // Convert to 32bit integer
    }
    const templateIndex = Math.abs(hash) % templates.length;

    return templates[templateIndex]
        .replace(/\{zone\}/g, zoneName)
        .replace(/\{city\}/g, cityName)
        .replace(/\{responseTime\}/g, responseTime)
        .replace(/\{radius\}/g, coverageRadius);
}
