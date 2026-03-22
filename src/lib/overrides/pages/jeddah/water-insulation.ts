import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../gov-references';

export const override: PageOverride = {
    meta: {
        title: 'عزل مائي بجدة — سيول 50 مم/ساعة + تربة طينية تتمدد + Cl⁻ يهاجم الأساس (2026)',
        description: 'عزل مائي جدة. سيول. تربة طينية Expansive. كلوريد. HDPE + كريستالي + SBS. ضغط هيدروستاتيكي. من 60 ريال/م².',
        h1: 'عزل مائي بجدة — السيول + الطين + الكلوريد: ثلاثي يهدد الأساس',
        keywords: ['عزل مائي بجدة', 'عزل أساسات', 'سيول جدة', 'تربة طينية', 'كريستالي'],
    },
    content: {
        introduction: 'العزل المائي في جدة ليس خياراً — إنه حماية أساسات. ثلاثة أسباب: سيول نوفمبر-يناير (30-50 مم/ساعة) ← مياه تحاصر الأساس ← ضغط هيدروستاتيكي (Hydrostatic Pressure). تربة طينية (Expansive Clay) خاصة شرق خور البيضاء: تتمدد مع الماء 5-15% ← تضغط على الأساسات ← تشققات. كلوريد من مياه التحلية والرذاذ البحري: Cl⁻ يخترق الخرسانة ← يصل حديد التسليح ← يبدأ صدأ خلال 5-10 سنوات (مقارنة بـ 15-25 في الرياض). منسوب مياه جوفية في المناطق المنخفضة: 1-3 أمتار من السطح ← ضغط دائم على الأساس (وليس موسمي كالسيول). الخاصية الشعرية تُصعّد الرطوبة: أملاح بحرية مذابة تصعد 2-3 أمتار ← تهاجم الخرسانة (Sulfate Attack + Chloride Attack). الحل: كريستالي (Self-Healing) + HDPE French Drain + حقن إيبوكسي للشقوق + SBS خارجي.',
        shortAnswer: 'على عكس [ترك الأساس بدون حماية في تربة طينية وسيول] الذي يُصدّئ الحديد في 5-10 سنوات، يعتمد بروتوكولنا في [العزل المائي] بـ[جدة] على [كريستالي + HDPE + SBS + إيبوكسي]. ففي ظل [سيول 50 مم + Expansive Clay + Cl⁻ + مياه جوفية 1-3م]، تتفاقم ظاهرة [ضغط هيدروستاتيكي + تمدد طين + صدأ كلوريد]. لذا؛ يتدخل خبراؤنا عبر [يتبلور الكريستالي ← يصرّف HDPE ← يحمي SBS ← يسد الإيبوكسي].',
        heroSubtitle: 'الرياض: الخطر من الكلس. جدة: من الكلوريد والطين والسيول.',
    },
    pricing: [
        { type: 'كريستالي أساسات', unit: 'م²', minPrice: 60, maxPrice: 90, time: '2-3 أيام' },
        { type: 'HDPE French Drain', unit: 'م طولي', minPrice: 100, maxPrice: 180, time: '3-5 أيام' },
        { type: 'SBS خارجي', unit: 'م²', minPrice: 35, maxPrice: 55, time: '2-3 أيام' },
        { type: 'نظام كامل فيلا', unit: 'فيلا', minPrice: 20000, maxPrice: 45000, time: '10-15 يوم' },
    ],
    faq: [
        { question: 'بيتي في منطقة منخفضة (خور البيضاء/النزهة) — هل الخطر حقيقي؟', answer: 'نعم — أعلى خطر في جدة. مياه جوفية 1-3م + تربة طينية + سيول = ضغط من 3 جهات. عزل الأساس ليس خياراً — إنه شرط بقاء المبنى.' },
        { question: 'كم يكلف إهمال العزل المائي؟', answer: 'عزل: 20,000-45,000. ترميم أساس متآكل بالكلوريد: 100,000-500,000+. الفرق: 10-25×. في جدة: الكلوريد يُصدّئ في 5-10 سنوات (الرياض: 15-25).' },
        { question: 'ليش التربة الطينية أخطر من الرملية؟', answer: 'الرمل: نفّاذ — الماء يمر. الطين: يمتص ← يتمدد 5-15% ← يضغط على الأساس. الرمل لا يضغط. الطين يخنق.' },
        { question: 'الكريستالي يكفي لوحده؟', answer: 'يحمي الخرسانة من الداخل (Self-Healing). لكن لا يُحلّ ضغط التربة ولا يصرّف المياه. يحتاج HDPE (تصريف) + SBS (حماية خارجية).' },
        { question: 'Chloride Attack vs Sulfate Attack — إيش الفرق؟', answer: 'Chloride: يصل الحديد ← صدأ ← تمدد ← Spalling. Sulfate: يتفاعل مع الأسمنت ← Ettringite ← تفتت. جدة: الاثنان معاً. حماية مزدوجة مطلوبة.' },
    ],
    expertTips: [
        'كريستالي Self-Healing: يتبلور في كل شق جديد ← حماية مستمرة.',
        'HDPE French Drain: يصرّف المياه بعيداً ← يُقلل الضغط الهيدروستاتيكي.',
        'SBS خارجي: حاجز مرن يتحمل حركة الطين.',
        'في المناطق المنخفضة: مضخة Sump Pump ← تصرّف المياه الجوفية الزائدة.',
        'قياس Cl⁻ في الخرسانة كل 5 سنوات: إذا وصل الحديد = إيبوكسي + كريستالي فوراً.',
    ],
    warnings: [
        'كلوريد يُصدّئ الحديد في 5-10 سنوات — أسرع 2× من الرياض.',
        'تربة طينية تتمدد 5-15% ← تضغط ← تشقق الأساس.',
        'مياه جوفية 1-3م في المنخفضات: ضغط دائم على الأساس.',
    ],
    trustAnchors: [
        { ...GOV.SBC, role: 'SBC 602 — عزل مائي أساسات' },
        { ...GOV.BALADI, role: 'اشتراطات بناء — مناطق سيول' },
        { entity: AMANA.JEDDAH.entity, url: AMANA.JEDDAH.url, role: 'اشتراطات أمانة جدة' },
    ],
    expertReviewer: EXPERTS.ALJUND,
    expertCitations: [
        { expert: EXPERTS.ALJUND.name, quote: 'أساسات جدة تُهاجم من ثلاثة جهات: سيول من فوق + طين من الجوانب + كلوريد من كل مكان. العزل المائي ليس رفاهية — هو شرط بقاء المبنى.', source: 'أخطاء في البناء — أساسات الساحل' },
    ],
    saudiRegulations: [REGULATIONS.SBC_602],
    verificationBadges: [
        { badge: '✔️ كريستالي Self-Healing', authority: 'يُصلح نفسه', icon: 'shield-check' },
    ],
    equipment: [
        { name: 'Crystalline Waterproofing', use: 'يتبلور داخل المسام — Self-Healing' },
        { name: 'HDPE French Drain', use: 'تصريف — يُقلل ضغط هيدروستاتيكي' },
        { name: 'SBS Membrane', use: 'حاجز خارجي مرن — يتحمل طين' },
    ],
        commonConcerns: [
        { concern: 'العزل مكلف — مش متأكد يستاهل.', solution: 'عزل SBC 601 يوفر 30-40% كهرباء سنوياً. يسترد تكلفته خلال 2-3 سنوات.' },
    ],

    consumerEducation: [
        { myth: 'البيتومين العادي يكفي.', truth: 'APP يتشقق من حركة الطين. SBS مرن = الخيار لأساسات جدة.' },
        { myth: 'أساسي عميق يحميه.', truth: 'الكلوريد يخترق الخرسانة بغض النظر عن العمق. العمق يحمي من الحرارة لا من الكيمياء.' },
    ],
    relatedServices: [
        { slug: 'roof-insulation', context: 'سيول', priority: 1 },
        { slug: 'foam-insulation', context: 'Closed-Cell', priority: 2 },
        { slug: 'thermal-insulation', context: 'حراري', priority: 3 },
        { slug: 'tank-insulation', context: 'خزان', priority: 4 },
        { slug: 'water-leak-detection', context: 'تسربات', priority: 5 },
        { slug: 'sewage-unblocking', context: 'مجاري', priority: 6 },
    
        { slug: 'cleaning', context: 'خدمة مكملة — باقة شاملة.', priority: 7 },
    ],
};
