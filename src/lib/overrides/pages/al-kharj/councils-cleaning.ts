import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف مجالس بالخرج — NH₃ بلمرة حيوانية+CaCO₃ خشونة+SiO₂ خدش — Enzymatic! (2026)',
        description: 'تنظيف مجالس الخرج. NH₃ بلمرة حيوانية في أقمشة! CaCO₃ 450ppm خشونة. SiO₂ خدش. Enzymatic+AC+RO. لا عفن!',
        h1: 'تنظيف مجالس بالخرج — NH₃ مزارع ألبان — لا عفن!',
        keywords: ['تنظيف مجالس الخرج', 'تنظيف مجلس بالخرج', 'شركة تنظيف مجالس الخرج'],
    },
    content: {
        introduction: 'مجلس الخرج يتسخ بطريقة زراعية حيوانية! NH₃ بلمرة حيوانية في الأقمشة: أمونيا مزارع ألبان/دواجن تتراكم في أقمشة المجلس ← تتفاعل مع البخور والدهون ← بلمرة حيوانية (طبقة عضوية لزجة عميقة). الشامبو العادي لا يصل — Enzymatic يكسّر البلمرة. HEPA Activated Carbon يمتص الرائحة. CaCO₃ 450ppm خشونة: لو غُسل المجلس بماء صنبور = كلس يترسب في الألياف ← يُخشّن. RO Rinse إلزامي. SiO₂ رمل يخدش الأسطح اللامعة حول المجلس (طاولات+إطارات). Microfiber فقط. تجفيف: 15-25% = 30-60 دقيقة — ميزة! لا عفن لا عث! مقارنة: خميس = عفن+عث+4-8h+Dehumidifier. الخرج = NH₃+كلس+لا عفن = أبسط 30%.',
        shortAnswer: 'على عكس [الشامبو بدون Enzymatic الذي لا يصل البلمرة]، يعتمد بروتوكولنا في خدمة [تنظيف المجالس] بمدينة [الخرج] على [Enzymatic+AC+RO+Microfiber]. ففي ظل [NH₃ بلمرة حيوانية+CaCO₃ 450ppm+SiO₂+15-25%]، تتفاقم ظاهرة [رائحة عميقة+خشونة+خدش]. لذا؛ يتدخل فريقنا عبر [إنزيم ← بخار ← AC ← RO ← تجفيف سريع].',
        heroSubtitle: 'NH₃ بلمرة حيوانية + CaCO₃ خشونة + SiO₂ — لا عفن!',
    },
    pricing: [
        { type: 'مجلس عادي (10 مقاعد)', unit: 'مجلس', minPrice: 130, maxPrice: 260, time: '2-3h + تجفيف 30 دقيقة' },
        { type: 'مجلس + AC NH₃ عميق', unit: 'مجلس', minPrice: 170, maxPrice: 340, time: '3-4h' },
        { type: 'مجلس كبير (20+ مقعد)', unit: 'مجلس', minPrice: 220, maxPrice: 450, time: '4-6h' },
        { type: 'ربع سنوي (4 زيارات)', unit: 'سنة', minPrice: 420, maxPrice: 840, time: '4 زيارات' },
    ],
    faq: [
        { question: 'ليش مجلس الخرج له رائحة مزارع؟', answer: 'NH₃ بلمرة حيوانية في الأقمشة. المعطر مؤقت. Enzymatic+AC يُزيل.' },
        { question: 'ليش المجلس يخشن بعد الغسل بالخرج؟', answer: 'CaCO₃ 450ppm في الماء يترسب. RO Rinse = لا كلس = ناعم.' },
        { question: 'كم تكلفة مجلس بالخرج مقارنة بخميس؟', answer: 'أرخص 25-30% — لا Anti-Fungal+Anti-Mite+تجفيف 30 دقيقة.' },
        { question: 'هل المجلس يتعفّن بالخرج؟', answer: 'لا! 15-25% = لا عفن لا عث. تجفيف 30-60 دقيقة. ميزة.' },
        { question: 'كم مرة أنظف المجلس بالخرج؟', answer: 'ربع سنوي. قرب مزرعة = كل شهرين. NH₃ يتراكم في الأقمشة.' },
    ],
    expertTips: [
        'Enzymatic — يكسّر بلمرة حيوانية NH₃.',
        'AC — يمتص الرائحة لا يُعطّر.',
        'RO Rinse — CaCO₃ خشونة.',
        'Microfiber — SiO₂ يخدش.',
        'لا عفن! — تجفيف 30-60 دقيقة.',
    ],
    warnings: [
        'NH₃ × بخور × 6 أشهر = بلمرة لا تُزال — تغيير تنجيد.',
        'CaCO₃ + ماء صنبور = خشونة تراكمية — RO إلزامي.',
        'SiO₂ + مسح قطن = خدش طاولات المجلس — Microfiber.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص شركات التنظيف' },
        { entity: AMANA.RIYADH.entity, url: AMANA.RIYADH.url, role: 'اشتراطات أمانة الرياض' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALMISNID.name, quote: 'مجلس الخرج: NH₃ بلمرة حيوانية. Enzymatic إلزامي. ميزة: لا عفن.', source: 'نصائح هندسية — مجالس زراعية' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ تنظيف مجالس مرخص', authority: 'بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'Enzymatic Cleaner', use: 'يكسّر بلمرة حيوانية NH₃' },
        { name: 'HEPA Activated Carbon', use: 'يمتص NH₃/H₂S' },
        { name: 'RO Water', use: 'شطف بدون CaCO₃' },
    ],
    hiddenObjections: [
        { fear: 'معطر يكفي.', solution: 'بلمرة حيوانية عميقة. Enzymatic.' },
        { fear: 'مثل خميس.', solution: 'لا عفن+30 دقيقة. أبسط 30%.' },
    ],
    consumerEducation: [
        { myth: 'شامبو يكفي.', truth: 'بلمرة حيوانية = Enzymatic يكسّر.' },
        { myth: 'ماء صنبور.', truth: 'CaCO₃ 450ppm = خشونة. RO.' },
    ],
    relatedServices: [
        { slug: 'carpet-cleaning', context: 'سجاد', priority: 1 },
        { slug: 'sofa-cleaning', context: 'كنب', priority: 2 },
        { slug: 'cleaning', context: 'تنظيف', priority: 3 },
        { slug: 'steam-cleaning', context: 'بخار', priority: 4 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 5 },
        { slug: 'furniture-cleaning', context: 'أثاث', priority: 6 },
        { slug: 'marble-polishing', context: 'رخام', priority: 7 },
    ],
};
