// ═══════════════════════════════════════════════════════════════
// City Climate & Geographic Profiles — الملفات المناخية للمدن
// السر الخوارزمي: Entity Intersection بين القطاع والمناخ
// = محتوى فريد لكل مدينة يستحيل تكراره
// ═══════════════════════════════════════════════════════════════

// ─────────────────────────────────────────
// Types
// ─────────────────────────────────────────

export type ClimateZone = 'coastal' | 'central' | 'mountain' | 'holy';

export interface CityClimateProfile {
    zone: ClimateZone;
    zoneName: string;           // "ساحلية" | "وسطى" | "جبلية" | "مقدسة"
    climateTraits: string[];    // السمات المناخية العامة
    challenges: {
        'leak-detection': string[];
        'insulation': string[];
        'pest-control': string[];
        'cleaning': string[];
        'moving': string[];
        'sewage': string[];
    };
    /** فقرات Entity Intersection جاهزة للحقن — فقرة واحدة لكل قطاع */
    intersections: {
        'leak-detection': string;
        'insulation': string;
        'pest-control': string;
        'cleaning': string;
        'moving': string;
        'sewage': string;
    };
}

// ─────────────────────────────────────────
// 1. المدن الساحلية 🌊
// جدة، الدمام، الخبر، الجبيل، ينبع، القطيف، جازان
// ─────────────────────────────────────────

const COASTAL_BASE: Omit<CityClimateProfile, 'challenges' | 'intersections'> = {
    zone: 'coastal',
    zoneName: 'ساحلية',
    climateTraits: [
        'رطوبة عالية (60-90%)',
        'أملاح بحرية وكلوريدات',
        'نسيم بحري محمّل بالأملاح',
        'مياه جوفية قريبة من السطح',
        'صدأ وتآكل سريع للمعادن',
    ],
};

const COASTAL_CHALLENGES: CityClimateProfile['challenges'] = {
    'leak-detection': [
        'رطوبة 60-90% تحوّل أي تسرب مخفي لعفن أسود (Stachybotrys) خلال 48-72 ساعة',
        'ملوحة مياه التحلية (TDS 300-500 ppm) تسبب تآكل أنابيب الحديد من الداخل (Pitting Corrosion)',
        'المياه الجوفية القريبة تضغط على الأساسات وترفع الرطوبة بالخاصية الشعرية (Capillary Action)',
        'أنابيب الحديد المجلفن في الأحياء القديمة متآكلة 60-80% — إصلاح نقطة = مؤقت',
    ],
    'insulation': [
        'العزل المائي أهم من الحراري في المدن الساحلية',
        'Closed-Cell فوم فقط — Open-Cell يمتص الرطوبة البحرية',
        'رولات SBS وليس APP — مرونة أعلى تتحمل التمدد الملحي',
        'حديد التسليح يتآكل بالكلوريدات بدون عزل إيبوكسي',
    ],
    'pest-control': [
        'نشاط حشري 12 شهر في السنة — لا فترة راحة شتوية',
        'مبيدات تفقد فعاليتها 30-40% أسرع بسبب الرطوبة العالية',
        'نمل أبيض أكثر انتشاراً — الرطوبة توفر بيئة مثالية للمستعمرات',
        'الصراصير تتكاثر في الصرف الصحي الرطب بكثافة عالية',
    ],
    'cleaning': [
        'ترسبات ملحية ثقيلة على الزجاج والمطابخ والحمامات',
        'عفن أسود في زوايا الحمامات وخلف الخزائن — يحتاج تعقيم بيروكسيد الهيدروجين',
        'غبار مختلط بأملاح بحرية — يحتاج مذيبات خاصة وليس ماء عادي',
        'الترويبة (Grout) تمتص الرطوبة وتتحول بؤرة بكتيرية بسرعة',
    ],
    'moving': [
        'حرارة 45°+ مع رطوبة عالية = Heat Index 55-60° — إجهاد عمال',
        'خطر تلف الأخشاب والجلود بالرطوبة أثناء التخزين بدون تحكم مناخي',
        'الملح البحري يُتلف الأسطح المعدنية للأثاث أثناء الشحن المكشوف',
        'استخدام دينا مغلقة إلزامي — الشحن المكشوف يعرّض العفش لملوحة الهواء',
    ],
    'sewage': [
        'المياه الجوفية القريبة ترفع منسوب البيارة — تفريغ متكرر',
        'الأملاح تآكل مواسير الصرف PVC — تحتاج صيانة دورية',
        'الرطوبة العالية تسرّع تحلل الفضلات وإنتاج غاز H₂S',
    ],
};

const COASTAL_INTERSECTIONS: CityClimateProfile['intersections'] = {
    'leak-detection': 'نظراً لارتفاع مستويات الرطوبة (60-90%) والأملاح البحرية، نستخدم جهاز الأكوافون (Aquaphon) لسماع التسرب بدقة ±10 سم، والكاميرا الحرارية (Thermal Camera) لكشف بقع الرطوبة المخفية. ملوحة مياه التحلية (TDS 300-500 ppm) تسبب تآكلاً (Corrosion) من الداخل للأنابيب — لذلك نوصي بالتحويل لمواسير PPR التي لا تتآكل بالملوحة.',
    'insulation': 'في البيئة الساحلية حيث الرطوبة 60-90%، نستخدم فقط فوم البولي يوريثان (Polyurethane) من النوع المغلق Closed-Cell الذي لا يمتص الرطوبة، مع طبقة إيبوكسي (Epoxy) لحماية حديد التسليح من تآكل الكلوريدات. رولات البيتومين (Bitumen) من نوع SBS — أكثر مرونة من APP — تتحمل التمدد الملحي.',
    'pest-control': 'الرطوبة العالية (60-90%) تعني نشاط حشري 12 شهراً بدون فترة راحة. المبيدات التقليدية تفقد فعاليتها 30-40% أسرع. لذلك نعتمد على مبيد الفبرونيل (Fipronil) للنمل الأبيض مع الحقن الخرساني للتربة (Soil Injection)، والطعوم الجيلاتينية (Gel Baits) للصراصير بدل الرش السطحي الذي يتبخر بالرطوبة.',
    'cleaning': 'الرطوبة الساحلية تسبب ترسبات ملحية على الزجاج والمطابخ، وعفن أسود في الحمامات. نستخدم مذيبات الشحوم القلوية (Alkaline Degreasers) للأملاح، وبيروكسيد الهيدروجين (Hydrogen Peroxide) للتعقيم العميق. مكانس بفلاتر HEPA (99.97%) تمنع إعادة نثر الغبار الملحي.',
    'moving': 'الحرارة المرتفعة مع الرطوبة العالية (Heat Index 55-60°) تتطلب استخدام دينا مغلقة (Enclosed Dyna) لحماية العفش من الملوحة البحرية. نلف الأثاث الخشبي ببطانيات حماية (Moving Blankets) ورول الاسترتش (Stretch Film) لمنع امتصاص الرطوبة. التخزين يجب أن يكون مُكيّفاً (Climate Control) لمنع العفن.',
    'sewage': 'المياه الجوفية القريبة من السطح ترفع منسوب البيارة وتتطلب تفريغاً أكثر تكراراً. نستخدم كاميرا تنظير المواسير (Borescope) لفحص خطوط الصرف من الداخل وكشف تآكل مواسير PVC بالأملاح قبل حدوث انسداد كامل.',
};

// ─────────────────────────────────────────
// 2. المدن الوسطى والشمالية 🏜️
// الرياض، الخرج، القصيم، بريدة، عنيزة، حائل، تبوك، حفر الباطن
// ─────────────────────────────────────────

const CENTRAL_BASE: Omit<CityClimateProfile, 'challenges' | 'intersections'> = {
    zone: 'central',
    zoneName: 'وسطى/صحراوية',
    climateTraits: [
        'مناخ جاف (رطوبة 10-20%)',
        'عواصف رملية وغبارية متكررة',
        'تفاوت حراري شديد (نهار 50° / ليل 15°)',
        'أشعة فوق بنفسجية عالية (UV)',
        'مياه عسرة بكلس عالي (كربونات كالسيوم 300-500 ppm)',
    ],
};

const CENTRAL_CHALLENGES: CityClimateProfile['challenges'] = {
    'leak-detection': [
        'التفاوت الحراري الشديد (نهار 50° / ليل 15°) يسبب إجهاد حراري (Thermal Stress) = تشققات خرسانية',
        'مياه عسرة (كلس عالي) تسد الأنابيب بترسبات كربونات الكالسيوم — تقلل التدفق وترفع الضغط',
        'الجفاف يخفي التسربات — الرطوبة لا تظهر سريعاً على الجدران كالمدن الساحلية',
        'التربة الرملية تمتص المياه المتسربة — تسرب تحت الأساس قد لا يُلاحظ لأشهر',
    ],
    'insulation': [
        'العزل الحراري أولوية قصوى — فاتورة كهرباء 1,500-3,000 ريال/شهر صيفاً بدون عزل',
        'الأشعة فوق البنفسجية تُتلف مواد العزل المكشوفة خلال 3-5 سنوات',
        'فوم بولي يوريثان بسمك 5 سم كحد أدنى حسب SBC 601',
        'فواصل التمدد (Expansion Joints) ضرورية — التفاوت الحراري يشقق العزل الصلب',
    ],
    'pest-control': [
        'عقرب أصفر (Deathstalker) في أطراف المدن — لدغته خطيرة طبياً',
        'هجرة شتوية للصراصير للداخل هرباً من البرد — نشاط مكثف أكتوبر-مارس',
        'نمل حريقة (Fire Ant) في الحدائق — لدغات مؤلمة وردود فعل تحسسية',
        'العواصف الرملية تدفع الحشرات والقوارض داخل المنازل',
    ],
    'cleaning': [
        'غبار كثيف يتطلب فلاتر HEPA — شفط عادي يعيد نثر الجزيئات الدقيقة',
        'عواصف رملية متكررة — تنظيف واجهات وزجاج أكثر تكراراً',
        'ترسبات كلسية ثقيلة في الحمامات والمطابخ — تحتاج حمض الأكساليك',
        'الغبار يسد فلاتر المكيفات — تنظيف دوري كل 3 أشهر ضروري',
    ],
    'moving': [
        'حرارة 50°+ صيفاً — العمل يقتصر على الفجر والمساء',
        'العواصف الرملية تؤخر عمليات النقل — تتطلب دينا مغلقة لحماية العفش',
        'المسافات الكبيرة بين الأحياء (الشفا↔النرجس 80 كم) = وقت نقل أطول',
        'الحرارة المرتفعة تُتلف المواد البلاستيكية والشمعية أثناء الشحن المكشوف',
    ],
    'sewage': [
        'التربة الرملية تمتص بسرعة لكن تتشبع بسهولة — فيضان بيارة مفاجئ',
        'الحرارة تسرّع التحلل البكتيري = روائح أقوى في الصيف',
        'الكلس يترسب داخل مواسير الصرف — انسداد تدريجي',
    ],
};

const CENTRAL_INTERSECTIONS: CityClimateProfile['intersections'] = {
    'leak-detection': 'التفاوت الحراري الشديد (نهار 50° / ليل 15°) يسبب إجهاداً حرارياً (Thermal Stress) للخرسانة — تشققات تتحول لمسارات تسرب. نستخدم جهاز الأكوافون (Aquaphon) لسماع التسرب الذي يختفي في التربة الرملية، والكاميرا الحرارية (Thermal Camera) لكشف البقع الباردة. المياه العسرة (كلس 300-500 ppm) تسد الأنابيب — قد يحتاج الأمر اختبار ضغط نيتروجين (Nitrogen Test) لكشف الانسداد الجزئي.',
    'insulation': 'لحماية الأسطح من التفاوت الحراري الشديد (50° نهاراً / 15° ليلاً)، نطبق فوم البولي يوريثان (Polyurethane) بسمك 5 سم كحد أدنى حسب كود SBC 601. فواصل التمدد (Expansion Joints) ضرورية لمنع تشقق العزل. الأشعة فوق البنفسجية العالية تستوجب طبقة حماية UV فوق الفوم.',
    'pest-control': 'العواصف الرملية تدفع العقارب (Deathstalker) والقوارض داخل المنازل. في الشتاء تهاجر الصراصير للداخل هرباً من البرد. نطبق المكافحة المتكاملة (IPM): الحقن الخرساني للتربة (Soil Injection) بمبيد الفبرونيل (Fipronil) حول الأساسات، مع الطعوم الجيلاتينية (Gel Baits) داخلياً لكسر دورة حياة الحشرة (Life Cycle Disruption).',
    'cleaning': 'العواصف الرملية المتكررة تترك غباراً دقيقاً (PM2.5) يخترق النوافذ المغلقة. نعتمد على مكانس بفلاتر HEPA (99.97% فعالية) لشفط الجزيئات الدقيقة بدل إعادة نثرها. الترسبات الكلسية (كربونات الكالسيوم) في الحمامات تحتاج حمض الأكساليك (Oxalic Acid) — المنظفات العادية لا تزيلها.',
    'moving': 'الحرارة 50°+ صيفاً تقصر مواعيد النقل على الفجر والمساء. نستخدم دينا مغلقة (Enclosed Dyna) لحماية العفش من العواصف الرملية والحرارة. البلاستيك الفقاعي (Bubble Wrap) والفلين الرغوي (Foam Padding) يحميان الأجهزة الإلكترونية من الصدمات الحرارية.',
    'sewage': 'التربة الرملية تمتص بسرعة لكن تتشبع بسهولة — فيضان بيارة مفاجئ. الحرارة تسرّع التحلل البكتيري = روائح أقوى صيفاً. نستخدم كاميرا تنظير المواسير (Borescope) لكشف ترسبات الكلس داخل خطوط الصرف قبل الانسداد الكامل.',
};

// ─────────────────────────────────────────
// 3. المدن الجبلية والجنوبية 🏔️
// أبها، خميس مشيط، الباحة، الطائف، نجران
// ─────────────────────────────────────────

const MOUNTAIN_BASE: Omit<CityClimateProfile, 'challenges' | 'intersections'> = {
    zone: 'mountain',
    zoneName: 'جبلية/جنوبية',
    climateTraits: [
        'أمطار غزيرة موسمية',
        'سيول مفاجئة (Flash Floods)',
        'تضاريس جبلية ومنحدرات',
        'أسطح مائلة',
        'مناخ معتدل صيفاً / بارد شتاءً',
    ],
};

const MOUNTAIN_CHALLENGES: CityClimateProfile['challenges'] = {
    'leak-detection': [
        'أمطار غزيرة (250-500 مم/سنة) تكشف أي ضعف في العزل المائي',
        'السيول تضغط على الأساسات وتتسلل من فواصل التمدد (Expansion Joints)',
        'الأسطح المائلة تحتاج ميول هندسية دقيقة (1-2%) لتوجيه المياه',
        'البرد الشتوي يسبب تمدد وانكماش الأنابيب — تشققات حرارية',
    ],
    'insulation': [
        'العزل المائي أولوية بسبب الأمطار الغزيرة — لا يكفي العزل الحراري وحده',
        'رولات البيتومين (Bitumen) ضرورية على الأسطح — طبقتين كحد أدنى',
        'الميول الهندسية دقيقة لمنع تجمع مياه الأمطار',
        'الأسطح المائلة تحتاج تثبيت ميكانيكي للعزل — اللصق وحده لا يكفي',
    ],
    'pest-control': [
        'الرطوبة بعد الأمطار تنشّط النمل الأبيض والعفن',
        'الثعابين والعقارب تنزل من الجبال للمنازل في الأجواء الباردة',
        'مواسم الأمطار تزيد البعوض والذباب — مياه راكدة',
        'المناخ المعتدل يطيل دورة حياة الحشرات مقارنة بالمدن الحارة',
    ],
    'cleaning': [
        'الأمطار تجلب أتربة ووحل داخل المنازل — تنظيف متكرر',
        'الرطوبة بعد المطر تنبت عفناً في الزوايا والخزائن',
        'تنظيف مزاريب وقنوات الصرف ضروري قبل موسم الأمطار',
        'الأسطح الخارجية تتسخ بالطحالب والأشنيات (Algae) — تحتاج غسيل بالضغط',
    ],
    'moving': [
        'الطرق الجبلية المنحدرة تتطلب مكابح قوية وتثبيت صارم للعفش',
        'أحزمة الربط والتثبيت (Tie-down Straps) إلزامية على المنحدرات',
        'دينا مغلقة (Enclosed Dyna) تحمي من الأمطار المفاجئة أثناء النقل',
        'النقل بين المدن الجبلية يحتاج وقت أطول — المنحنيات تبطئ السرعة',
    ],
    'sewage': [
        'الأمطار الغزيرة تملأ البيارات بسرعة — تفريغ طارئ بعد كل موسم',
        'السيول تتسلل لخطوط الصرف — انسداد بالحصى والأتربة',
        'المنحدرات تسبب تراكم الضغط في نقاط منخفضة — انفجار مواسير',
    ],
};

const MOUNTAIN_INTERSECTIONS: CityClimateProfile['intersections'] = {
    'leak-detection': 'بسبب غزارة الأمطار (250-500 مم/سنة)، يركز مهندسونا على فحص فواصل التمدد (Expansion Joints) والميول الهندسية للأسطح بجهاز قياس الرطوبة (Moisture Meter). الكاميرا الحرارية (Thermal Camera) تكشف مسارات تسلل مياه الأمطار عبر الجدران. اختبار ضغط النيتروجين (Nitrogen Test) يتحقق من سلامة الأنابيب بعد تمدد وانكماش الشتاء.',
    'insulation': 'الأمطار الغزيرة تستوجب عزلاً مائياً مزدوجاً: رولات البيتومين (Bitumen) بطبقتين على الأسطح مع ضبط الميول الهندسية (Roof Slope 1-2%) لتوجيه المياه للمصارف. الأسطح المائلة تحتاج تثبيتاً ميكانيكياً لفوم البولي يوريثان (Polyurethane) — اللصق الحراري وحده لا يصمد أمام السيول.',
    'pest-control': 'الرطوبة بعد الأمطار تنشّط مستعمرات النمل الأبيض (Isoptera) والعفن. الثعابين والعقارب تنزل من التضاريس الجبلية للمنازل في الشتاء. نطبق الحقن الخرساني للتربة (Soil Injection) حول الأساسات بمبيد الفبرونيل (Fipronil)، مع الرش الرذاذي (ULV Fogging) للمحيط الخارجي لصد الزواحف.',
    'cleaning': 'الأمطار تجلب أتربة ووحل داخل المنازل — نستخدم مكانس الشفط الرطب والجاف (Wet & Dry Vacuum) لشفط الماء والطين معاً. الرطوبة بعد المطر تنبت عفناً خلف الخزائن — التعقيم ببيروكسيد الهيدروجين (Hydrogen Peroxide) ضروري. تنظيف مزاريب الأسطح بمضخات الضغط العالي (High Pressure Washer) قبل موسم الأمطار يمنع فيضان السطح.',
    'moving': 'الطرق الجبلية المنحدرة تتطلب دينا مغلقة (Enclosed Dyna) مزودة بمكابح جبلية وتثبيت بأحزمة الربط (Tie-down Straps) لضمان أمان الأثاث على المنحدرات. نلف كل قطعة ببطانيات الحماية (Moving Blankets) والبلاستيك الفقاعي (Bubble Wrap) لامتصاص اهتزازات الطرق الجبلية.',
    'sewage': 'الأمطار الغزيرة تملأ البيارات بسرعة — نوفر خدمة تفريغ طارئ بعد كل موسم. كاميرا تنظير المواسير (Borescope) تكشف انسداد خطوط الصرف بالحصى والأتربة التي تجلبها السيول. المنحدرات الجبلية تسبب تراكم الضغط في النقاط المنخفضة.',
};

// ─────────────────────────────────────────
// 4. المدن المقدسة 🕋
// مكة المكرمة، المدينة المنورة
// ─────────────────────────────────────────

const HOLY_BASE: Omit<CityClimateProfile, 'challenges' | 'intersections'> = {
    zone: 'holy',
    zoneName: 'مقدسة',
    climateTraits: [
        'مواسم حج وعمرة على مدار السنة',
        'كثافة بشرية عالية جداً',
        'قطاع فنادق وضيافة ضخم',
        'إشغال مستمر بدون فترات راحة',
        'تلوث بيولوجي متنقل عبر المسافرين',
    ],
};

const HOLY_CHALLENGES: CityClimateProfile['challenges'] = {
    'leak-detection': [
        'الإشغال المستمر يمنع إغلاق المباني للصيانة — كشف سريع بدون تعطيل ضروري',
        'ضغط الاستخدام العالي يُرهق شبكات المياه — أنابيب تتآكل أسرع من المعتاد',
        'تسربات الفنادق تؤثر على أدوار متعددة — كشف مبكر يمنع أضرار كبيرة',
        'المطابخ التجارية في الفنادق = ضغط عالي على شبكات الصرف والمياه',
    ],
    'insulation': [
        'حرارة شديدة صيفاً (45-50°) تتطلب عزل حراري قوي للفنادق والمباني',
        'الكثافة البشرية ترفع حمل التكييف — العزل يخفض فاتورة الكهرباء بشكل ضخم',
        'صيانة العزل يجب أن تتم بدون إزعاج النزلاء',
        'أسطح المباني التجارية كبيرة المساحة — تحتاج فرق عمل متخصصة',
    ],
    'pest-control': [
        'الكثافة البشرية العالية = تلوث بيولوجي متنقل عبر المسافرين (بق فراش)',
        'فنادق بإشغال 90%+ — المكافحة يجب أن تكون سريعة بدون إخلاء طويل',
        'المطابخ التجارية الكبيرة تجذب الصراصير والقوارض',
        'موسم الحج: 3+ مليون حاج = ضغط غير عادي على النظافة والمكافحة',
    ],
    'cleaning': [
        'تسليم الغرف بين النزلاء يحتاج تنظيف عميق وتعقيم شامل في وقت قصير',
        'التلوث التبادلي (Cross-contamination) خطر حقيقي في الفنادق بالمواسم',
        'مطابخ تجارية تحتاج إزالة شحوم قلوية (Alkaline Degreasers) يومياً',
        'سجاد المساجد والصالات يحتاج تنظيف بالبخار بعد كل موسم',
    ],
    'moving': [
        'شوارع ضيقة في المناطق المركزية — تحتاج دينا صغيرة أو دباب',
        'أوقات النقل محدودة — منع الشاحنات الكبيرة في ساعات الذروة',
        'نقل أثاث الفنادق يحتاج تنسيق مع إدارة المنشأة والأمن',
        'التخزين المؤقت مطلوب أثناء تجديد الفنادق بين المواسم',
    ],
    'sewage': [
        'الضغط الهائل على شبكات الصرف في المواسم — انسدادات متكررة',
        'المطابخ التجارية تصب دهون في الصرف — تسبب انسداد شحمي',
        'تفريغ بيارات الفنادق يجب أن يتم ليلاً بدون إزعاج النزلاء',
    ],
};

const HOLY_INTERSECTIONS: CityClimateProfile['intersections'] = {
    'leak-detection': 'نظراً للإشغال المستمر في فنادق الحج والعمرة، نستخدم جهاز الأكوافون (Aquaphon) والكاميرا الحرارية (Thermal Camera) لكشف التسربات بدون تكسير ودون تعطيل النزلاء. ضغط الاستخدام العالي يُرهق شبكات المياه — اختبار ضغط النيتروجين (Nitrogen Test) يكشف نقاط الضعف قبل انفجارها.',
    'insulation': 'الكثافة البشرية العالية في المواسم ترفع حمل التكييف بشكل هائل. فوم البولي يوريثان (Polyurethane) بسمك 5+ سم يخفض فاتورة كهرباء الفنادق 30-40% حسب كود SBC 601. الصيانة تتم بين المواسم أو ليلاً بطبقات إيبوكسي (Epoxy) سريعة الجفاف.',
    'pest-control': 'الكثافة العالية في فنادق الحج والعمرة تنقل بق الفراش (Cimex lectularius) عبر أمتعة المسافرين. نقدم خدمات مكافحة سريعة بالتبخير الحراري (Fumigation) بدون إخلاء طويل. الطعوم الجيلاتينية (Gel Baits) في المطابخ التجارية تقضي على الصراصير بدون رش يُعيق العمل. بيروكسيد الهيدروجين (Hydrogen Peroxide) للتعقيم بين تسليم الغرف.',
    'cleaning': 'بين تسليم النزلاء في فنادق الحج والعمرة، نقدم خدمات التنظيف العميق والتعقيم ببيروكسيد الهيدروجين (Hydrogen Peroxide) لمنع التلوث التبادلي (Cross-contamination). ماكينات التنظيف بالبخار (Steam Cleaning) تعقم الأسرّة والكنب بدرجة 150°+. مذيبات الشحوم القلوية (Alkaline Degreasers) لمطابخ الفنادق التجارية.',
    'moving': 'الشوارع الضيقة في المناطق المركزية تتطلب دينا صغيرة أو دباب نقل (Dabab). نلف الأثاث بالبلاستيك الفقاعي (Bubble Wrap) والاسترتش (Stretch Film) لحمايته في المساحات الضيقة. الترقيم والجرد (Inventory Tracking) ضروري لنقل أثاث الفنادق — كل قطعة مُرقّمة ومُسجّلة.',
    'sewage': 'الضغط الهائل في المواسم يسبب انسدادات متكررة. نستخدم كاميرا تنظير المواسير (Borescope) لتحديد موقع الانسداد بدقة. المطابخ التجارية تصب دهون — تحتاج مصيدة شحوم (Grease Trap) وتنظيف دوري. التفريغ يتم ليلاً بدون إزعاج النزلاء.',
};

// ─────────────────────────────────────────
// City → Climate Profile Mapping
// ─────────────────────────────────────────

export const CITY_CLIMATE: Record<string, CityClimateProfile> = {
    // ═══ ساحلية ═══
    'jeddah': { ...COASTAL_BASE, challenges: COASTAL_CHALLENGES, intersections: COASTAL_INTERSECTIONS },
    'dammam': { ...COASTAL_BASE, challenges: COASTAL_CHALLENGES, intersections: COASTAL_INTERSECTIONS },
    'al-khobar': { ...COASTAL_BASE, challenges: COASTAL_CHALLENGES, intersections: COASTAL_INTERSECTIONS },
    'jubail': { ...COASTAL_BASE, challenges: COASTAL_CHALLENGES, intersections: COASTAL_INTERSECTIONS },
    'yanbu': { ...COASTAL_BASE, challenges: COASTAL_CHALLENGES, intersections: COASTAL_INTERSECTIONS },
    'qatif': { ...COASTAL_BASE, challenges: COASTAL_CHALLENGES, intersections: COASTAL_INTERSECTIONS },
    'jazan': { ...COASTAL_BASE, challenges: COASTAL_CHALLENGES, intersections: COASTAL_INTERSECTIONS },

    // ═══ وسطى/صحراوية ═══
    'riyadh': { ...CENTRAL_BASE, challenges: CENTRAL_CHALLENGES, intersections: CENTRAL_INTERSECTIONS },
    'al-kharj': { ...CENTRAL_BASE, challenges: CENTRAL_CHALLENGES, intersections: CENTRAL_INTERSECTIONS },
    'qassim': { ...CENTRAL_BASE, challenges: CENTRAL_CHALLENGES, intersections: CENTRAL_INTERSECTIONS },
    'buraidah': { ...CENTRAL_BASE, challenges: CENTRAL_CHALLENGES, intersections: CENTRAL_INTERSECTIONS },
    'onizah': { ...CENTRAL_BASE, challenges: CENTRAL_CHALLENGES, intersections: CENTRAL_INTERSECTIONS },
    'hail': { ...CENTRAL_BASE, challenges: CENTRAL_CHALLENGES, intersections: CENTRAL_INTERSECTIONS },
    'tabuk': { ...CENTRAL_BASE, challenges: CENTRAL_CHALLENGES, intersections: CENTRAL_INTERSECTIONS },
    'hafr-albatin': { ...CENTRAL_BASE, challenges: CENTRAL_CHALLENGES, intersections: CENTRAL_INTERSECTIONS },
    'dhahran': { ...CENTRAL_BASE, challenges: CENTRAL_CHALLENGES, intersections: CENTRAL_INTERSECTIONS },
    'al-ahsa': { ...CENTRAL_BASE, challenges: CENTRAL_CHALLENGES, intersections: CENTRAL_INTERSECTIONS },

    // ═══ جبلية/جنوبية ═══
    'abha': { ...MOUNTAIN_BASE, challenges: MOUNTAIN_CHALLENGES, intersections: MOUNTAIN_INTERSECTIONS },
    'khamis-mushait': { ...MOUNTAIN_BASE, challenges: MOUNTAIN_CHALLENGES, intersections: MOUNTAIN_INTERSECTIONS },
    'al-baha': { ...MOUNTAIN_BASE, challenges: MOUNTAIN_CHALLENGES, intersections: MOUNTAIN_INTERSECTIONS },
    'taif': { ...MOUNTAIN_BASE, challenges: MOUNTAIN_CHALLENGES, intersections: MOUNTAIN_INTERSECTIONS },
    'najran': { ...MOUNTAIN_BASE, challenges: MOUNTAIN_CHALLENGES, intersections: MOUNTAIN_INTERSECTIONS },

    // ═══ مقدسة ═══
    'makkah': { ...HOLY_BASE, challenges: HOLY_CHALLENGES, intersections: HOLY_INTERSECTIONS },
    'madinah': { ...HOLY_BASE, challenges: HOLY_CHALLENGES, intersections: HOLY_INTERSECTIONS },
};

// ─────────────────────────────────────────
// Helper Functions
// ─────────────────────────────────────────

/**
 * Get climate profile for a city
 */
export function getCityClimate(citySlug: string): CityClimateProfile | null {
    return CITY_CLIMATE[citySlug] || null;
}

/**
 * Get entity intersection paragraph for a city + sector
 */
export function getEntityIntersection(
    citySlug: string,
    sectorCategory: 'leak-detection' | 'insulation' | 'pest-control' | 'cleaning' | 'moving' | 'sewage'
): string | null {
    const profile = CITY_CLIMATE[citySlug];
    if (!profile) return null;
    return profile.intersections[sectorCategory] || null;
}

/**
 * Get climate challenges for a city + sector
 */
export function getClimateChallenges(
    citySlug: string,
    sectorCategory: 'leak-detection' | 'insulation' | 'pest-control' | 'cleaning' | 'moving' | 'sewage'
): string[] {
    const profile = CITY_CLIMATE[citySlug];
    if (!profile) return [];
    return profile.challenges[sectorCategory] || [];
}
