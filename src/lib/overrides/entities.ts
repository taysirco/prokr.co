// ═══════════════════════════════════════════════════════════════
// Sector Entities Database — قاعدة بيانات الكيانات العلمية
// كل قطاع = أجهزة + مواد + عمليات + مفاهيم
// تُستخدم لبناء Entity Intersection مع المناخ/الجغرافيا
// ═══════════════════════════════════════════════════════════════

// ─────────────────────────────────────────
// Types
// ─────────────────────────────────────────

export interface EntityItem {
    name: string;       // الاسم العربي
    nameEn: string;     // الاسم الإنجليزي/التقني
    use: string;        // الاستخدام أو السياق
}

export interface SectorEntities {
    tools?: EntityItem[];
    materials?: EntityItem[];
    concepts?: EntityItem[];
    /** كيانات الفيزياء — هيدروليكا وديناميكا */
    physics?: EntityItem[];
    /** أعراض العيوب — ما يبحث عنه العميل */
    symptoms?: EntityItem[];
    biological?: EntityItem[];
    chemicals?: EntityItem[];
    processes?: EntityItem[];
    /** كيانات علم السموم المتقدم */
    toxicology?: EntityItem[];
    machines?: EntityItem[];
    surfaces?: EntityItem[];
    /** تفاعلات كيميائية وميكروبيولوجيا */
    reactions?: EntityItem[];
    microbiology?: EntityItem[];
    packaging?: EntityItem[];
    equipment?: EntityItem[];
    operations?: EntityItem[];
    /** فيزياء حركية ومستودعات */
    kinematics?: EntityItem[];
    warehousing?: EntityItem[];

    // ─── NLP & Semantic Strategy ───
    /** مصطلحات عامية دارجة للربط الدلالي (Contextual Bridging) */
    slangTerms?: string[];
    /** أفعال نشطة دقيقة للتحليل النحوي التبعي (Dependency Parsing) */
    activeVerbs?: string[];
    /** ممارسات خاطئة للتأطير التناقضي (Negative Entities & Contrastive NLP) */
    wrongPractices?: EntityItem[];
}

export type ServiceCategory = 'leak-detection' | 'insulation' | 'pest-control' | 'cleaning' | 'moving' | 'sewage';

// ─────────────────────────────────────────
// 1. قطاع كشف التسربات والعزل 💧
// ─────────────────────────────────────────

const LEAK_DETECTION_ENTITIES: SectorEntities = {
    tools: [
        { name: 'جهاز الأكوافون', nameEn: 'Aquaphon', use: 'يسمع صوت المياه المتسربة تحت البلاط والأنابيب بدقة ±10 سم — بدون تكسير' },
        { name: 'الكاميرا الحرارية', nameEn: 'Thermal Camera', use: 'تكشف بقع الرطوبة المخفية من فرق الحرارة — تصوير حراري بالأشعة تحت الحمراء' },
        { name: 'الميكروفون الأرضي', nameEn: 'Ground Microphone', use: 'يلتقط أصوات التسرب عبر الأسطح الصلبة — يحدد الموقع بدقة عالية' },
        { name: 'جهاز قياس الرطوبة', nameEn: 'Moisture Meter', use: 'يقيس نسبة الرطوبة في الجدران والأسقف — يحدد مدى انتشار التسرب' },
        { name: 'غاز النيتروجين', nameEn: 'Nitrogen Pressure Test', use: 'اختبار ضغط الأنابيب — يكشف نقاط الضعف والتسربات الدقيقة غير المرئية' },
        { name: 'كاميرا تنظير المواسير', nameEn: 'Borescope', use: 'كاميرا مرنة تدخل داخل الأنابيب — تصوّر الصدأ والانسداد والتشققات من الداخل' },
        { name: 'غاز التتبع المدمج', nameEn: 'Tracer Gas (N₂/H₂)', use: 'ضخ نيتروجين أو هيدروجين في المواسير لتتبع صوت التسرب الدقيق الذي لا يسمعه الأكوافون' },
    ],
    materials: [
        { name: 'فوم البولي يوريثان', nameEn: 'Polyurethane Foam', use: 'عازل حراري ومائي مزدوج — يُرش بسمك 3-5 سم حسب كود SBC 601' },
        { name: 'الإيبوكسي', nameEn: 'Epoxy', use: 'مادة لاصقة ومانعة للتسرب — تحمي حديد التسليح من التآكل بالأملاح' },
        { name: 'البيتومين', nameEn: 'Bitumen', use: 'رولات عزل مائي تُلصق بالحرارة — تمنع تسرب الأمطار والرطوبة الأرضية' },
        { name: 'الفايبر جلاس', nameEn: 'Fiberglass', use: 'ألواح عزل حراري خفيفة — تقاوم الرطوبة ولا تتحلل بالماء' },
        { name: 'الأسمنت المقاوم للأملاح', nameEn: 'SRC — Sulfate Resistant Cement', use: 'أسمنت مخصص للمناطق ذات التربة المالحة — يحمي الأساسات من التآكل الكبريتاتي' },
        { name: 'مواسير البولي بروبلين', nameEn: 'PPR Pipes', use: 'بديل الحديد المجلفن — لا تصدأ ولا تتآكل بالملوحة. عمر افتراضي 25+ سنة' },
        { name: 'العزل الكريستالي/البلوري', nameEn: 'Crystalline Waterproofing', use: 'مادة تتفاعل مع رطوبة الخرسانة لتنمو كبلورات تسد المسام من الداخل — عزل ذاتي الشفاء' },
        { name: 'إيلاستومر البولي يوريا', nameEn: 'Polyurea Elastomer', use: 'أحدث تقنيات العزل — يجف خلال ثوانٍ ويتحمل درجات حرارة -40° إلى 150°. مرونة 400%' },
    ],
    concepts: [
        { name: 'الخاصية الشعرية', nameEn: 'Capillary Action', use: 'ظاهرة فيزيائية تفسر صعود الرطوبة بالجدران من الأسفل للأعلى عبر المسامات' },
        { name: 'التآكل والصدأ', nameEn: 'Corrosion', use: 'تفاعل كيميائي بين الحديد والأملاح/الرطوبة — يُضعف الأنابيب وحديد التسليح' },
        { name: 'فواصل التمدد', nameEn: 'Expansion Joints', use: 'فجوات هندسية في الخرسانة تمتص التمدد الحراري — تمنع التشققات' },
        { name: 'الإجهاد الحراري للخرسانة', nameEn: 'Thermal Stress', use: 'تفاوت حراري (نهار 50° / ليل 15°) يسبب تشققات خرسانية تتحول لمسارات تسرب' },
        { name: 'الميول الهندسية للأسطح', nameEn: 'Roof Slope Engineering', use: 'ضبط ميل السطح 1-2% لتوجيه المياه للمصارف — يمنع تجمع المياه والتسرب' },
        { name: 'الكمر المقلوب', nameEn: 'Inverted Beam', use: 'كيان إلزامي في الكود السعودي لعزل الأسطح — يمنع تمدد البلاط ويوجه المياه' },
    ],
    physics: [
        { name: 'الضغط الهيدروستاتيكي', nameEn: 'Hydrostatic Pressure', use: 'ضغط المياه الجوفية على جدران الخزان الأرضي من الخارج — السبب الأول لتشقق الخزانات' },
        { name: 'المطرقة المائية', nameEn: 'Water Hammer Effect', use: 'تغير ضغط الماء المفاجئ عند إغلاق الصنبور بسرعة — يسبب انفجار مواسير السباكة المخفية' },
    ],
    symptoms: [
        { name: 'التزهير الملحي', nameEn: 'Efflorescence', use: 'بقع وبودرة بيضاء على الجدران — ناتجة عن تفاعل الماء مع أملاح الخرسانة. دليل تسرب مخفي' },
        { name: 'تشظي الخرسانة', nameEn: 'Concrete Spalling', use: 'تساقط الغطاء الخرساني بسبب تمدد حديد التسليح الصدئ — علامة تآكل متقدم خطير' },
        { name: 'التعشيش الخرساني', nameEn: 'Honeycombing', use: 'فراغات في الصبة الخرسانية تسرب مياه الأمطار — خلل في تنفيذ الصب يحتاج حقن إيبوكسي' },
    ],
    slangTerms: ['تهريب مويه', 'نقط ماي من السقف', 'خرير', 'تسييل', 'ارتفاع فاتورة المويه', 'عزل فوم', 'عزل شينكو', 'رقبة الخزان'],
    activeVerbs: ['يُحيِّد', 'يشتت', 'يتبلور', 'يعاير', 'يستشعر', 'يحقن', 'يكتشف', 'يغلف'],
    wrongPractices: [
        { name: 'العزل بالزفت الساخن التقليدي', nameEn: 'Traditional Hot Tar', use: 'يتشقق بسرعة مع التفاوت الحراري السعودي ولا يتحمل أشعة UV العالية' },
        { name: 'التكسير العشوائي للبحث عن التسرب', nameEn: 'Random Demolition', use: 'إتلاف البلاط والديكور بدون أجهزة رصد دقيقة — تكلفة مضاعفة وجهد ضائع' },
        { name: 'استخدام أسمنت عادي لسد الشقوق', nameEn: 'Regular Cement Patching', use: 'لا يقاوم ضغط المياه الهيدروستاتيكي وينهار خلال أسابيع قليلة' },
    ],
};

// ─────────────────────────────────────────
// 2. قطاع مكافحة الحشرات 🐜
// ─────────────────────────────────────────

const PEST_CONTROL_ENTITIES: SectorEntities = {
    biological: [
        { name: 'النمل الأبيض/الأرضة', nameEn: 'Isoptera (Termites)', use: 'يتغذى على السليلوز في الخشب والأسقف — يُدمّر الهياكل الخشبية من الداخل بصمت' },
        { name: 'بق الفراش', nameEn: 'Cimex lectularius (Bed Bugs)', use: 'حشرة ليلية تتغذى على الدم — تنتقل عبر الأمتعة والأثاث المستعمل والفنادق' },
        { name: 'الصرصور الألماني', nameEn: 'Blattella germanica', use: 'أصغر وأخطر أنواع الصراصير — يتكاثر بسرعة مذهلة ويقاوم المبيدات التقليدية' },
        { name: 'سوس الخشب', nameEn: 'Wood Borers', use: 'يحفر أنفاقاً داخل الأثاث والأبواب — يُضعف القطع الخشبية حتى تنهار' },
        { name: 'القوارض والفئران', nameEn: 'Rodents', use: 'ناقلة للأمراض — تقرض الأسلاك الكهربائية وتسبب حرائق وتلوث غذائي' },
        { name: 'حشرة العث', nameEn: 'Moths', use: 'تتلف الأقمشة والسجاد والملابس — تنشط في البيئة الرطبة' },
        { name: 'محفظة البيض', nameEn: 'Ootheca', use: 'الكيس الصلب الذي يحمي بيض الصراصير من المبيدات العادية — يفسر سبب عودتها بعد الرش الأول' },
        { name: 'طور الحورية واليرقة', nameEn: 'Nymph & Larva Instars', use: 'مراحل نمو الحشرة قبل البلوغ — استهداف هذه المراحل يكسر التكاثر نهائياً' },
        { name: 'المسارات الفيرومونية', nameEn: 'Pheromone Trails', use: 'اللغة الكيميائية للنمل والصراصير لتحديد أماكن الغذاء — الطعوم تستغل هذه المسارات' },
        { name: 'النظام الغذائي السليلوزي', nameEn: 'Cellulose Diet', use: 'يُفسر لماذا يُدمّر النمل الأبيض الأبواب والأثاث الخشبي — يتغذى على السليلوز' },
    ],
    chemicals: [
        { name: 'مبيد الفبرونيل', nameEn: 'Fipronil', use: 'المبيد الأساسي للنمل الأبيض — يعمل كسلسلة قتل (الحشرة تنقله للمستعمرة)' },
        { name: 'البايفنثرين', nameEn: 'Bifenthrin', use: 'مبيد واسع الطيف — فعّال ضد الصراصير والنمل والعناكب. منخفض السمية للإنسان' },
        { name: 'الطعوم الجيلاتينية', nameEn: 'Gel Baits', use: 'طُعم جاذب يضعه الفني في نقاط محددة — الحشرة تأكله وتنقل السم للمستعمرة' },
        { name: 'حمض البوريك', nameEn: 'Boric Acid', use: 'مبيد منخفض السمية للإنسان — فعّال ضد الصراصير والنمل عبر ابتلاعه' },
        { name: 'منظمات نمو الحشرات', nameEn: 'IGR — Insect Growth Regulators', use: 'تمنع تكوين قشرة الكيتين فتمنع الحشرة من الانسلاخ — تكسر دورة الحياة بدون سمية عالية للإنسان' },
    ],
    processes: [
        { name: 'المكافحة المتكاملة للآفات', nameEn: 'IPM — Integrated Pest Management', use: 'نهج علمي يجمع بين الوقاية والمكافحة الكيميائية والبيولوجية — يقلل استخدام المبيدات' },
        { name: 'التبخير الحراري', nameEn: 'Fumigation', use: 'ملء المكان بغاز مبيد تحت ضغط — يقتل كل الحشرات بما فيها البيض في الشقوق' },
        { name: 'الرش الرذاذي متناهي الصغر', nameEn: 'ULV Fogging', use: 'رش قطرات مبيد دقيقة (5-50 ميكرون) تصل للشقوق — فعّال في الأماكن المغلقة' },
        { name: 'الضباب الحراري', nameEn: 'Thermal Fogging', use: 'تحويل المبيد لضباب ساخن يخترق الشقوق والزوايا — يستخدم في المساحات الكبيرة' },
        { name: 'الحقن الخرساني للتربة', nameEn: 'Soil Injection', use: 'حقن مبيد في التربة حول الأساسات — خط دفاع ضد النمل الأبيض لـ 5+ سنوات' },
        { name: 'كسر دورة حياة الحشرة', nameEn: 'Life Cycle Disruption', use: 'استهداف مراحل البيض/اليرقة/البالغ — القضاء الشامل وليس المؤقت' },
    ],
    toxicology: [
        { name: 'الكبسلة الدقيقة', nameEn: 'Microencapsulation', use: 'تغليف المبيد بكبسولات مجهرية تلتصق بأرجل الحشرة وتنقل السم للمستعمرة — تأثير الدومينو' },
        { name: 'الأثر المتبقي', nameEn: 'Residual Efficacy', use: 'مدة بقاء المبيد فعالاً على السطح بعد رشه — المبيدات عالية الجودة تبقى 3-6 أشهر' },
        { name: 'الجرعة النصفية المميتة', nameEn: 'LD50', use: 'المقياس العالمي لسمية المبيدات — رقم أعلى = أكثر أماناً للأطفال والحيوانات الأليفة' },
    ],
    slangTerms: ['وزغ', 'أرضة', 'صراصير مطبخ', 'بق', 'فيران', 'رش حشرات', 'شركة رش'],
    activeVerbs: ['يثبط', 'يكسر دورة الحياة', 'يستأصل', 'يعطل النمو', 'يحقن التربة', 'يُبخر', 'ينقل العدوى (للمستعمرة)'],
    wrongPractices: [
        { name: 'الرش السطحي بالمبيدات العضوية المتطايرة', nameEn: 'Surface Spraying with VOCs', use: 'يوفر حماية وهمية مؤقتة ويسبب تهيجاً تنفسياً دون المساس بالمستعمرة الأم' },
        { name: 'استخدام الديزل والمبيدات الزراعية', nameEn: 'Agricultural Pesticides in Homes', use: 'مخاطر تسمم عالية للسكان ومواد مسرطنة غير مصرحة للاستخدام المنزلي' },
        { name: 'رش النمل الأبيض من الداخل فقط', nameEn: 'Indoor Treatment Only for Termites', use: 'تجاهل الحقن الخرساني الخارجي يعني عودة المستعمرة من التربة خلال أشهر' },
    ],
};

// ─────────────────────────────────────────
// 3. قطاع التنظيف والتعقيم 🧹
// ─────────────────────────────────────────

const CLEANING_ENTITIES: SectorEntities = {
    machines: [
        { name: 'ماكينة اللباد الدوارة', nameEn: 'Rotary Floor Scrubber', use: 'تنظيف وتلميع الأرضيات الصلبة (رخام، بورسلين، جرانيت) بحركة دائرية عالية السرعة' },
        { name: 'مضخات الغسيل بالضغط العالي', nameEn: 'High Pressure Washer', use: 'غسيل واجهات المباني والأرصفة والمواقف — ضغط 100-200 بار يزيل الأوساخ العميقة' },
        { name: 'ماكينات التنظيف بالبخار', nameEn: 'Steam Cleaning Machine', use: 'بخار حرارة 150°+ يقتل البكتيريا والعث — آمن على الأقمشة والكنب' },
        { name: 'فلاتر هيبا', nameEn: 'HEPA Filters', use: 'تُصفّي 99.97% من الجزيئات (0.3 ميكرون) — تمنع إعادة نثر الغبار والمسببات التحسسية' },
        { name: 'مكانس الشفط الرطب والجاف', nameEn: 'Wet & Dry Vacuum', use: 'شفط السوائل والأتربة معاً — ضرورية بعد غسيل السجاد والكنب بالشامبو' },
    ],
    chemicals: [
        { name: 'هيبوكلوريت الصوديوم', nameEn: 'Sodium Hypochlorite (Chlorine)', use: 'تعقيم خزانات المياه — تركيز 0.5-1 PPM حسب معايير NWC' },
        { name: 'بيروكسيد الهيدروجين', nameEn: 'Hydrogen Peroxide', use: 'مطهر بديل للكلور — يتحلل للماء والأكسجين. آمن على خزانات مياه الشرب' },
        { name: 'مذيبات الشحوم القلوية', nameEn: 'Alkaline Degreasers', use: 'تُذيب الدهون المتراكمة في الأفران والمداخن — فعّالة على الشحوم المحروقة' },
        { name: 'بودرة الكريستال', nameEn: 'Diamond Pads / Crystal Powder', use: 'لجلي وتلميع الرخام والجرانيت — تُعيد اللمعان الأصلي بدون إزالة طبقة سميكة' },
        { name: 'حمض الأكساليك', nameEn: 'Oxalic Acid', use: 'يزيل بقع الصدأ والكلس من الأسطح — يُستخدم بحذر مع حماية اليدين' },
        { name: 'المواد الخافضة للتوتر السطحي', nameEn: 'Surfactants', use: 'المادة الفعالة في منظفات الكنب — تفصل جزيئات البقعة عن ألياف النسيج كيميائياً' },
    ],
    surfaces: [
        { name: 'التلوث التبادلي', nameEn: 'Cross-contamination', use: 'نقل البكتيريا بين الأسطح عبر أدوات التنظيف — يُمنع باستخدام أقمشة مُلوّنة لكل منطقة' },
        { name: 'الرقم الهيدروجيني المتعادل', nameEn: 'Neutral pH', use: 'يُستخدم مع تنظيف الرخام والكنب — يضمن عدم حرق الأنسجة أو إطفاء لمعة الحجر الطبيعي' },
        { name: 'الترويبة', nameEn: 'Grout', use: 'مادة ملء الفراغات بين البلاط — تمتص البكتيريا والعفن وتتطلب تنظيف عميق' },
        { name: 'البورسلين', nameEn: 'Porcelain', use: 'سطح صلب غير مسامي — يتحمل المنظفات القوية لكنه يحتاج تلميع دوري' },
        { name: 'الواجهات الزجاجية', nameEn: 'Glass Cladding', use: 'تنظيف زجاج المباني التجارية — يتطلب معدات تسلق وسوائل مانعة للخطوط' },
    ],
    reactions: [
        { name: 'التصبّن', nameEn: 'Saponification', use: 'تحويل الزيوت والشحوم المتفحمة في الأفران والمداخن لمادة صابونية يسهل إزالتها بالمذيبات القلوية' },
        { name: 'التبلور الميكانيكي', nameEn: 'Mechanical Crystallization', use: 'تفاعل جلي الرخام بأقراص الألماس وحمض الأكساليك — يُغلق مسام الرخام طبيعياً بدون شمع صناعي' },
    ],
    microbiology: [
        { name: 'البيوفيلم / الغشاء الحيوي', nameEn: 'Biofilm', use: 'طبقة لزجة (طحالب/بكتيريا) داخل خزانات المياه تحمي الجراثيم من الكلور العادي — تحتاج تنظيف ميكانيكي أولاً' },
        { name: 'مدة التلامس', nameEn: 'Dwell Time / Contact Time', use: 'الوقت الدقيق الذي يُترك فيه المعقم على السطح ليخترق جدار الفيروسات — أقل من المطلوب = تعقيم فاشل' },
    ],
    slangTerms: ['غسيل موكيت', 'تلميع سيراميك', 'تنظيف ستائر', 'جلي بلاط', 'غسيل سجاد'],
    activeVerbs: ['يذيب', 'يفكك', 'يتصبن', 'يعادل (الرقم الهيدروجيني)', 'يشفط', 'يجلي', 'يُعقم'],
    wrongPractices: [
        { name: 'استخدام المنظفات الحمضية القوية كالفلاش', nameEn: 'Harsh Acid Cleaners', use: 'يسبب تآكل الترويبة، ويطفي لمعات الرخام الطبيعي ويسبب تفاعل سام عند الخلط بالكلور' },
        { name: 'تنظيف المكيفات كيميائياً بالحمضيات', nameEn: 'Acidic AC Coil Cleaning', use: 'يسبب تآكل زعانف الألمنيوم الرقيقة ونحاس المكثف مما يقلل كفاءة التبريد' },
        { name: 'استخدام نفس أدوات التنظيف لجميع الغرف', nameEn: 'Single Vector Cleaning', use: 'يُسبب التلوث التبادلي بنقل أشرس بكتيريا الحمامات إلى غرف النوم والمطابخ' },
    ],
};

// ─────────────────────────────────────────
// 4. قطاع نقل العفش والتخزين 🚚
// ─────────────────────────────────────────

const MOVING_ENTITIES: SectorEntities = {
    packaging: [
        { name: 'البلاستيك الفقاعي', nameEn: 'Bubble Wrap', use: 'حماية الأجهزة الإلكترونية والزجاج — يمتص الصدمات أثناء النقل' },
        { name: 'رول الاسترتش المطاطي', nameEn: 'Stretch Film', use: 'لف الأثاث لمنع الخدوش والغبار — يثبت الأبواب والأدراج أثناء الحركة' },
        { name: 'كرتون مضلع مزدوج الجدار', nameEn: 'Double-wall Corrugated Boxes', use: 'صناديق تعبئة مضلعة مزدوجة الجدار — تتحمل الأوزان حتى 30 كجم بدون انبعاج' },
        { name: 'الفلين الرغوي', nameEn: 'Foam Padding', use: 'يحمي حواف وزوايا الأثاث من الكسر — يُقطع بمقاسات مخصصة' },
        { name: 'بطانيات حماية الأثاث', nameEn: 'Moving Blankets', use: 'بطانيات سميكة تُلف حول الأثاث الخشبي — تمنع الخدوش والاحتكاك' },
        { name: 'هلام السيليكا / المجففات', nameEn: 'Desiccants / Silica Gel', use: 'توضع داخل كراتين التخزين لامتصاص الرطوبة ومنع العفن — ضرورية للتخزين طويل المدة' },
    ],
    equipment: [
        { name: 'دينا مغلقة', nameEn: 'Enclosed Dyna/Truck', use: 'شاحنة نقل مغلقة تحمي العفش من الغبار والمطر والشمس أثناء النقل بين المدن' },
        { name: 'الونش الهيدروليكي', nameEn: 'Hydraulic Crane', use: 'رفع الأثاث الثقيل من النوافذ والبلكونات — ضروري للأدوار العليا بدون مصعد' },
        { name: 'الرافعة الشوكية', nameEn: 'Forklift', use: 'تحميل وتفريغ البضائع الثقيلة في المستودعات — تتعامل مع البلاتات والحاويات' },
        { name: 'أحزمة الربط والتثبيت', nameEn: 'Tie-down Straps', use: 'تثبيت الأثاث داخل الشاحنة لمنع الحركة والانزلاق — ضرورية للطرق الجبلية' },
        { name: 'البلاتات الخشبية', nameEn: 'Wooden Pallets', use: 'قواعد خشبية ترفع العفش عن أرضية المستودع — تمنع الرطوبة والحشرات' },
    ],
    operations: [
        { name: 'الفك والتركيب', nameEn: 'Disassembly & Assembly', use: 'فك الأثاث بالموقع القديم وإعادة تركيبه بالمنزل الجديد — يشمل غرف النوم والمطابخ' },
        { name: 'الترقيم والجرد', nameEn: 'Inventory Tracking', use: 'ترقيم كل قطعة وتسجيلها — يضمن عدم فقدان أي قطعة ويُسرّع التسليم' },
        { name: 'التحكم بالمناخ والتهوية المتقاطعة', nameEn: 'Climate Control & Cross-ventilation', use: 'تخزين مُكيّف مع تهوية متقاطعة يمنع العفن وتمدد الأخشاب — ضروري للأثاث الخشبي والجلدي' },
        { name: 'بوليصة الشحن', nameEn: 'Bill of Lading', use: 'وثيقة رسمية تُوثّق محتويات الشحنة — مطلوبة للنقل بين المدن وعبر نقاط التفتيش' },
        { name: 'الهندسة العكسية للتجميع', nameEn: 'Reverse Engineering Assembly', use: 'تقنية فك وتركيب أثاث ايكيا والأثاث المعقد — توثيق خطوات الفك بالصور لضمان إعادة التجميع الصحيح' },
    ],
    kinematics: [
        { name: 'مركز الثقل', nameEn: 'Center of Gravity', use: 'فهم توزيع وزن الأجهزة (الثلاجات/الغسالات) أثناء رفعها على السلالم — يمنع السقوط وإصابات العمل' },
        { name: 'القصور الذاتي', nameEn: 'Inertia', use: 'السبب الفيزيائي لكسر الزجاج داخل الشاحنة عند الفرملة المفاجئة — يُعالج بالتثبيت والتغليف' },
        { name: 'امتصاص الصدمات الحركية', nameEn: 'Kinematic Shock Absorption', use: 'تشتيت طاقة الاهتزازات أثناء سير الشاحنة — البلاستيك الفقاعي والفلين يمتصان الصدمات' },
    ],
    slangTerms: ['عفش', 'دينا', 'دباب نقل', 'كراتين', 'شيل عفش', 'تخزين اثاث', 'نجار فك'],
    activeVerbs: ['يمتص الصدمات', 'يوزع الأحمال', 'يغلف', 'يحيد الاهتزاز', 'يثبت', 'يفكك (التعقيد)', 'يحتوي'],
    wrongPractices: [
        { name: 'النقل بشاحنات مكشوفة أو غير مخصصة', nameEn: 'Open Bed Transport', use: 'يعرض الأثاث لأشعة الشمس، الأمطار، والغبار، ويُتلف المنسوجات والأخشاب' },
        { name: 'استخدام كراتين مُعاد تدويرها أحادية الجدار', nameEn: 'Single-wall Used Boxes', use: 'لا تتحمل الإجهاد الانضغاطي وانهيارها يؤدي لكسر المحتويات الهشة فوراً' },
        { name: 'التعامل اليدوي مع الأجهزة الثقيلة بلا أوناش', nameEn: 'Manual Heavy Lifting', use: 'يسبب خللاً في توازن غاز الفريون للثلاجات وتلفاً للمحركات الدقيقة بسبب الإمالة العشوائية' },
    ],
};

// ─────────────────────────────────────────
// Aggregated Export
// ─────────────────────────────────────────

export const SECTOR_ENTITIES: Record<string, SectorEntities> = {
    // كشف التسربات والعزل
    'water-leak-detection': LEAK_DETECTION_ENTITIES,
    'bathroom-leak-detection': LEAK_DETECTION_ENTITIES,
    'tank-leak-detection': LEAK_DETECTION_ENTITIES,
    'water-insulation': LEAK_DETECTION_ENTITIES,
    'roof-insulation': LEAK_DETECTION_ENTITIES,
    'tank-insulation': LEAK_DETECTION_ENTITIES,
    'thermal-insulation': LEAK_DETECTION_ENTITIES,
    'foam-insulation': LEAK_DETECTION_ENTITIES,

    // مكافحة الحشرات
    'pest-control': PEST_CONTROL_ENTITIES,
    'cockroach-control': PEST_CONTROL_ENTITIES,
    'bed-bug-control': PEST_CONTROL_ENTITIES,
    'ant-control': PEST_CONTROL_ENTITIES,
    'termite-control': PEST_CONTROL_ENTITIES,
    'snake-scorpion-control': PEST_CONTROL_ENTITIES,
    'pigeon-control': PEST_CONTROL_ENTITIES,
    'rat-control': PEST_CONTROL_ENTITIES,
    'pesticide-spraying': PEST_CONTROL_ENTITIES,

    // التنظيف
    'cleaning': CLEANING_ENTITIES,
    'apartments-cleaning': CLEANING_ENTITIES,
    'villas-cleaning': CLEANING_ENTITIES,
    'hourly-cleaning': CLEANING_ENTITIES,
    'sofa-cleaning': CLEANING_ENTITIES,
    'carpet-cleaning': CLEANING_ENTITIES,
    'mattress-cleaning': CLEANING_ENTITIES,
    'marble-polishing': CLEANING_ENTITIES,
    'tanks-cleaning': CLEANING_ENTITIES,
    'pool-cleaning': CLEANING_ENTITIES,
    'oven-cleaning': CLEANING_ENTITIES,
    'kitchen-chimney-cleaning': CLEANING_ENTITIES,
    'councils-cleaning': CLEANING_ENTITIES,
    'mosque-cleaning': CLEANING_ENTITIES,
    'facade-cleaning': CLEANING_ENTITIES,
    'auto-cleaning': CLEANING_ENTITIES,
    'ac-duct-cleaning': CLEANING_ENTITIES,
    'steam-cleaning': CLEANING_ENTITIES,

    // النقل والتخزين
    'furniture-moving': MOVING_ENTITIES,
    'furniture-storage': MOVING_ENTITIES,
    'dyna': MOVING_ENTITIES,
    'international-moving': MOVING_ENTITIES,
    'crane-rental': MOVING_ENTITIES,
    'moving-out': MOVING_ENTITIES,
    'dabab': MOVING_ENTITIES,

    // الصرف الصحي (يستخدم كيانات التسربات جزئياً)
    'sewage-unblocking': LEAK_DETECTION_ENTITIES,
    'sewage-suction': LEAK_DETECTION_ENTITIES,
} as const;


// ─────────────────────────────────────────
// Helper: Get entities for a specific service
// ─────────────────────────────────────────

export function getServiceEntities(serviceSlug: string): SectorEntities | null {
    return SECTOR_ENTITIES[serviceSlug] || null;
}

/**
 * Get category key for a service slug
 */
export function getServiceSectorCategory(serviceSlug: string): ServiceCategory | null {
    if (['water-leak-detection', 'bathroom-leak-detection', 'tank-leak-detection'].includes(serviceSlug)) return 'leak-detection';
    if (['water-insulation', 'roof-insulation', 'tank-insulation', 'thermal-insulation', 'foam-insulation'].includes(serviceSlug)) return 'insulation';
    if (['pest-control', 'cockroach-control', 'bed-bug-control', 'ant-control', 'termite-control', 'snake-scorpion-control', 'pigeon-control', 'rat-control', 'pesticide-spraying'].includes(serviceSlug)) return 'pest-control';
    if (['cleaning', 'apartments-cleaning', 'villas-cleaning', 'hourly-cleaning', 'sofa-cleaning', 'carpet-cleaning', 'mattress-cleaning', 'marble-polishing', 'tanks-cleaning', 'pool-cleaning', 'oven-cleaning', 'kitchen-chimney-cleaning', 'councils-cleaning', 'mosque-cleaning', 'facade-cleaning', 'auto-cleaning', 'ac-duct-cleaning', 'steam-cleaning'].includes(serviceSlug)) return 'cleaning';
    if (['furniture-moving', 'furniture-storage', 'dyna', 'international-moving', 'crane-rental', 'moving-out', 'dabab'].includes(serviceSlug)) return 'moving';
    if (['sewage-unblocking', 'sewage-suction'].includes(serviceSlug)) return 'sewage';
    return null;
}
