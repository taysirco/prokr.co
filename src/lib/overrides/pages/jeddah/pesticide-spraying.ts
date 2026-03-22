import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../gov-references';

export const override: PageOverride = {
    meta: {
        title: 'رش مبيدات بجدة — نشاط 12 شهر + رطوبة تُبطل المبيد 40% أسرع + نمل أبيض (2026)',
        description: 'رش مبيدات جدة. نشاط حشري 12 شهر. رطوبة تُبطل دواء. نمل أبيض الأكثر انتشاراً. Microencapsulated + IGR. SFDA. من 200 ريال.',
        h1: 'رش مبيدات بجدة — لا فترة راحة: نشاط حشري 12 شهراً',
        keywords: ['رش مبيدات بجدة', 'مكافحة حشرات', 'نمل أبيض', 'رطوبة', 'Microencapsulated'],
    },
    content: {
        introduction: 'جدة أصعب مدينة لمكافحة الحشرات في السعودية. السبب الأول: لا فترة راحة. الرياض: الأربعينية تُبطئ النشاط الخارجي. جدة: 25-45°م + رطوبة 60-90% = بيئة تكاثر حشري مثالية 12 شهراً. صراصير + بعوض + نمل أبيض + بق الفراش — كلها نشطة دائماً. السبب الثاني: المبيدات تُبطل أسرع. رطوبة 80% تُسرّع التحلل المائي (Hydrolysis) للمواد الفعالة ← الأثر المتبقي ينخفض 30-40% مقارنة بمدينة جافة. مبيد يدوم 8 أسابيع في الرياض = 4-5 أسابيع في جدة. السبب الثالث: نمل أبيض (Termites). جدة الأكثر انتشاراً في السعودية. الرطوبة + الخشب + التربة الطينية = بيئة مثالية. يهاجم أساسات الفيلات — ضرر إنشائي قبل أن تلاحظ. الحل: Microencapsulated (كبسولات تدوم أطول) + IGR (يكسر دورة الحياة) + حقن تربة ضد نمل أبيض + معالجات متكررة (ليس مرة واحدة).',
        shortAnswer: 'على عكس [مبيد عادي يتحلل في 4 أسابيع بالرطوبة] ولا يتعامل مع 12 شهر نشاط، يعتمد بروتوكولنا في [رش المبيدات] بـ[جدة] على [Microencapsulated + IGR + حقن تربة + عقد 8+ زيارات]. ففي ظل [12 شهر نشاط + رطوبة تُبطل 40% أسرع + نمل أبيض]، تتفاقم ظاهرة [تكاثر مستمر + مبيد قصير الأثر + هجوم أساسات]. لذا؛ يتدخل خبراؤنا عبر [تمتد Microencapsulation الأثر ← يكسر IGR التكاثر ← يحيِّد الحقن النمل الأبيض].',
        heroSubtitle: 'الرياض: 8 أشهر نشاط. جدة: 12 شهراً — بلا توقف.',
    },
    pricing: [
        { type: 'رش شقة', unit: 'شقة', minPrice: 200, maxPrice: 400, time: '1-2 ساعة' },
        { type: 'رش فيلا + حديقة', unit: 'فيلا', minPrice: 500, maxPrice: 900, time: '3-5 ساعات' },
        { type: 'حقن تربة ضد نمل أبيض', unit: 'فيلا', minPrice: 2000, maxPrice: 4000, time: 'يوم' },
        { type: 'عقد سنوي (8 زيارات)', unit: 'سنة', minPrice: 2000, maxPrice: 4000, time: '8 زيارات' },
    ],
    faq: [
        { question: 'ليش المبيد ما يدوم مثل الرياض؟', answer: 'Hydrolysis: رطوبة 80% تُسرّع تحلل المادة 30-40%. مبيد 8 أسابيع في الرياض = 4-5 في جدة. Microencapsulated: كبسولات تحمي المادة ← تُطلقها ببطء ← تدوم أطول.' },
        { question: 'نمل أبيض خطير فعلاً؟', answer: 'يأكل الخشب والخرسانة والعزل. في جدة: الأكثر انتشاراً. رطوبة + تربة طينية + خشب = مثالي. يهاجم الأساسات بدون علامة ظاهرة. ضرر 10,000-50,000 قبل الاكتشاف.' },
        { question: 'عقد 8 زيارات — مو كثير؟', answer: 'في الرياض: 6 تكفي (الأربعينية توقف). جدة: 12 شهر نشاط + مبيد أقصر أثراً = 8 الحد الأدنى. زيارة كل 6 أسابيع.' },
        { question: 'حقن تربة ضد نمل أبيض — كيف يعمل؟', answer: 'يُحقن Fipronil أو Imidacloprid في التربة حول الأساس ← يخلق حاجز كيميائي 5م عمق. النمل يمر ← يتسمم ← ينقل للمستعمرة (Chain-Kill). يدوم 5-8 سنوات.' },
        { question: 'رش السوق يكفي بجدة؟', answer: 'لا. تركيز منخفض + لا Microencapsulation + يتحلل في 2-3 أسابيع بالرطوبة = حماية أيام. المهني + Microencapsulated: أسابيع-أشهر.' },
    ],
    expertTips: [
        'Microencapsulated: يدوم 2× أطول في رطوبة 80% — كبسولات تحمي المادة.',
        'IGR يكسر دورة الحياة: يمنع انسلاخ اليرقات ← لا تكاثر.',
        'حقن تربة كل 5-8 سنوات: حاجز ضد نمل أبيض.',
        'عقد 8 زيارات/سنة: الحد الأدنى في مناخ جدة.',
        'Gel Baits في المطابخ: تجذب + تقتل + Chain-Kill.',
    ],
    warnings: [
        'مبيد عادي في 80% رطوبة: 4-5 أسابيع فقط (مقارنة بـ 8 في الرياض).',
        'نمل أبيض: يأكل الأساسات بصمت. ضرر 10,000-50,000 قبل الاكتشاف.',
        'لا فترة راحة: 12 شهر نشاط حشري = حماية مستمرة إلزامية.',
    ],
    trustAnchors: [
        { ...GOV.SFDA, role: 'مبيدات مسجلة' },
        { ...GOV.BALADI, role: 'ترخيص شركات مكافحة' },
        { entity: AMANA.JEDDAH.entity, url: AMANA.JEDDAH.url, role: 'اشتراطات أمانة جدة' },
    ],
    expertReviewer: EXPERTS.ALKHODAIRY,
    expertCitations: [
        { expert: EXPERTS.ALKHODAIRY.name, quote: 'جدة أصعب مدينة سعودية لمكافحة الحشرات. 12 شهر نشاط + رطوبة تُبطل المبيد + نمل أبيض = ثلاثي يتطلب عقداً مستمراً.', source: 'مكافحة آفات ساحلية' },
    ],
    saudiRegulations: [REGULATIONS.GHAD_SYSTEM, REGULATIONS.BALADI_HEALTH],
    verificationBadges: [
        { badge: '✔️ SFDA مسجل', authority: 'نظام غد', icon: 'shield-check' },
        { badge: '✔️ مرخص بلدي', authority: 'بلدية جدة', icon: 'badge-check' },
    ],
    equipment: [
        { name: 'Microencapsulated Insecticide', use: 'كبسولات تدوم 2× في رطوبة' },
        { name: 'IGR', use: 'يكسر انسلاخ ← لا تكاثر' },
        { name: 'Fipronil Soil Injection', use: 'حاجز نمل أبيض 5م عمق — 5-8 سنوات' },
    ],
        commonConcerns: [
        { concern: 'المبيدات خطرة على الأطفال.', solution: 'المبيدات المسجلة في SFDA آمنة بعد الجفاف (1-2 ساعة). إخلاء مؤقت + تهوية = أمان 100%.' },
    ],

    consumerEducation: [
        { myth: 'صيف = حشرات، شتاء = راحة.', truth: 'جدة: 25-45°م + رطوبة = 12 شهراً.' },
        { myth: 'رش مرة يكفي.', truth: 'يتحلل في 4-5 أسابيع. عقد 8 زيارات = الحد الأدنى.' },
    ],
    relatedServices: [
        { slug: 'bird-control', context: 'فضلات = حشرات', priority: 1 },
        { slug: 'sewage-unblocking', context: 'مجاري = تكاثر', priority: 2 },
        { slug: 'sewage-suction', context: 'بيارات', priority: 3 },
        { slug: 'water-leak-detection', context: 'رطوبة = حشرات', priority: 4 },
        { slug: 'bathroom-leak-detection', context: 'حمام رطب', priority: 5 },
    
        { slug: 'termite-control', context: 'خدمة مكملة — باقة شاملة.', priority: 6 },
        { slug: 'bedbugs-control', context: 'خدمة مكملة — باقة شاملة.', priority: 7 },
    ],
};
