import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف بالساعة بالظهران — عاملة مزدوجة: RO + ترتيب NaCl→SiO₂ + Anti-Fungal 75-85% (2026)',
        description: 'تنظيف بالساعة الظهران. عاملة مُدرّبة على بروتوكول مزدوج: RO ← Microfiber ← Anti-Fungal ← Anti-Corrosion ← تجفيف. 75-85% عفن. NaCl+SiO₂ ترتيب.',
        h1: 'تنظيف بالساعة بالظهران — عاملة تعرف الترتيب المزدوج',
        keywords: ['تنظيف بالساعة بالظهران', 'عاملة تنظيف الظهران', 'شركة تنظيف بالساعة بالظهران'],
    },
    content: {
        introduction: 'العاملة بالساعة في الظهران يجب أن تعرف ترتيب مزدوج لا يتعلمه أي عامل. الترتيب المزدوج — RO أولاً: ماء الظهران = NaCl ← إذا مسحت به = ملح جديد + SiO₂ يخدش تحته. RO يُذيب NaCl بدون NaCl جديد. الترتيب — Microfiber ناعم ثانياً: بعد RO يُذيب NaCl ← SiO₂ يُرفع بـ Microfiber بلا خدش. عكس = خدش مُبلّل. الخطوة 3 — Anti-Fungal: 75-85% = عفن 3-4 أسابيع في حمام + مطبخ + خزائن. روتيني. الخطوة 4 — Anti-Corrosion: NaCl+SiO₂ يُصدّئ صنابير. رش حماية. الخطوة 5 — تجفيف: 75-85% = أبطأ من تجفيف الرياض لكن أسرع من الخبر. Microfiber جاف.',
        shortAnswer: 'على عكس [عاملة بممسحة عادية] التي تخدش بـ SiO₂ وتترك NaCl، يعتمد بروتوكولنا في خدمة [التنظيف بالساعة] بمدينة [الظهران] على [عاملة مزدوجة: RO ← Microfiber ← Anti-Fungal ← تجفيف]. ففي ظل [NaCl+SiO₂ + 75-85%]، تتفاقم ظاهرة [خدش+ملح + عفن]. لذا؛ يتدخل خبراؤنا عبر [عاملة مزدوجة مُدرّبة].',
        heroSubtitle: 'ترتيب: RO ← Microfiber ← Anti-Fungal ← Anti-Corrosion ← تجفيف',
    },
    pricing: [
        { type: 'ساعة — عاملة مزدوجة', unit: 'ساعة', minPrice: 30, maxPrice: 50, time: '1 ساعة' },
        { type: '4 ساعات (حد أدنى)', unit: 'حصة', minPrice: 100, maxPrice: 170, time: '4 ساعات' },
        { type: '8 ساعات — يوم كامل', unit: 'يوم', minPrice: 170, maxPrice: 290, time: '8 ساعات' },
        { type: 'عقد أسبوعي (4/شهر)', unit: 'شهر', minPrice: 340, maxPrice: 670, time: '4 زيارات' },
    ],
    faq: [
        { question: 'ترتيب — حقاً مهم؟', answer: 'حاسم: RO ← Microfiber = يُذيب NaCl ← يرفع SiO₂. Microfiber ← RO = SiO₂ يخدش تحت NaCl = Micro-Abrasion مُبلّل. عكسه = أسوأ من عدم التنظيف.' },
        { question: 'كل هذا لعاملة؟', answer: 'في الرياض: ممسحة + ماء = يكفي. في الظهران: 5 خطوات مُرتّبة. بدونها: التنظيف = تلويث.' },
        { question: 'الأدوات؟', answer: 'العاملة تأتي بـ RO + Anti-Fungal + Anti-Corrosion + Microfiber. لا تحتاج شراء.' },
        { question: '4 ساعات — ليش الحد?', answer: '5 خطوات مُرتّبة = وقت أطول. 4 ساعات = شقة صغيرة كاملة.' },
        { question: 'أسبوعي — ليش؟', answer: 'NaCl+SiO₂ يومي. عفن أسبوعي. أسبوعي = يمنع تراكم مزدوج.' },
    ],
    expertTips: [
        'اطلب عاملة مُدرّبة على بروتوكول مزدوج — ترتيب حاسم.',
        'وفّر RO أو تأكد أن العاملة تجلبه.',
        'Anti-Fungal حمام + مطبخ + خزائن = الأولوية.',
        'Anti-Corrosion صنابير + مقابض = يمنع NaCl.',
        'عقد أسبوعي = الأمثل. مزدوج يومي.',
    ],
    warnings: [
        'ممسحة + ماء الظهران = NaCl جديد + SiO₂ خدش = تلف مزدوج كل زيارة.',
        'بدون Anti-Fungal = عفن 3-4 أسابيع = حساسية.',
        'عكس الترتيب = Micro-Abrasion مُبلّل = خدوش.',
    ],
    trustAnchors: [
        { ...GOV.HRSD, role: 'تنظيم العمالة' },
        { entity: AMANA.SHARQIA.entity, url: AMANA.SHARQIA.url, role: 'اشتراطات النظافة بالشرقية' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALMISNID.name, quote: 'عاملة الظهران = مزدوجة: RO ← Microfiber ← Anti-Fungal ← Anti-Corrosion ← تجفيف. 5 خطوات مُرتّبة. الترتيب = الفرق بين نظيف ومُتلف.', source: 'جغرافيا المناخ — التنظيف المزدوج' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [
        { badge: '✔️ عمالة مرخصة', authority: 'HRSD + بلدي', icon: 'shield-check' },
        { badge: '✔️ تدريب مزدوج', authority: 'معتمد داخلياً', icon: 'badge-check' },
    ],
    equipment: [
        { name: 'RO Water', use: 'الخطوة 1 — يُذيب NaCl بدون أملاح' },
        { name: 'Microfiber ناعم', use: 'الخطوة 2 — يرفع SiO₂ بلا خدش' },
        { name: 'Anti-Fungal + Anti-Corrosion', use: 'الخطوات 3-4 — حماية مزدوجة' },
    ],
    commonConcerns: [
        { concern: 'أنظف بنفسي.', solution: 'بماء الظهران = NaCl + SiO₂ خدش = تلف مزدوج. 5 خطوات = تحتاج تدريب.' },
        { concern: 'أرخص.', solution: 'أرخص = بدون ترتيب = خدش + ملح + عفن = 3 أخطاء كل زيارة.' },
    ],
    consumerEducation: [
        { myth: 'ممسحة.', truth: 'ممسحة + SiO₂ = خدش. + ماء الظهران = NaCl. 2 أخطاء.' },
        { myth: 'مثل الرياض.', truth: 'NaCl إضافي + 75-85% عفن. مختلف.' },
        { myth: 'شهري.', truth: 'مزدوج يومي. أسبوعي = الحد.' },
    ],
    relatedServices: [
        { slug: 'cleaning', context: 'تنظيف — مزدوج', priority: 1 },
        { slug: 'apartments-cleaning', context: 'شقق — كاملة', priority: 2 },
        { slug: 'steam-cleaning', context: 'بخار — تعقيم', priority: 3 },
        { slug: 'carpet-cleaning', context: 'سجاد — مزدوج', priority: 4 },
        { slug: 'sofa-cleaning', context: 'كنب — عث', priority: 5 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف — مزدوج', priority: 6 },
        { slug: 'pest-control', context: 'حشرات — رطوبة', priority: 7 },
    ],
};
