import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../gov-references';

export const override: PageOverride = {
    meta: {
        title: 'تسليك مجاري بالخرج — CaCO₃ يسد+SiO₂ يتراكم+NH₃ — Jetting+Descaler! (2026)',
        description: 'تسليك مجاري الخرج. CaCO₃ 450ppm يسد المفاصل! SiO₂ ترسيب صلب. NH₃ رائحة مزدوجة. Jetting+Descaler+تهوية.',
        h1: 'تسليك مجاري بالخرج — كلس يسد ورمل يتراكم',
        keywords: ['تسليك مجاري الخرج', 'تسليك مجاري بالخرج', 'شركة تسليك مجاري الخرج'],
    },
    content: {
        introduction: 'مجاري الخرجتنسد بطريقة مختلفة! CaCO₃ 450ppm يسد المفاصل: كلس يتراكم عند مفاصل الأنابيب ← يُضيّق ← أي شيء صلب يعلق عند المفصل ← انسداد. Descaler يُذيب الكلس عند التسليك. SiO₂ ترسيب صلب: رمل يدخل من صرف الفناء الخارجي ← يتراكم ← ترسيب صلب يحتاج Jetting ضغط عالي. بدون Jetting = سنبك لا يُزيل. NH₃ رائحة مزدوجة: كل انسداد بالخرج = رائحة أقوى 2× (صرف+مزارع). تهوية مقوّاة. ΔT 48°م: حرارة تسارع التحلل ← رائحة أسرع ← انتظار التسليك = أسوأ. استجابة سريعة. 15-25% = لا تكثّف في المجاري! المياه تجري — لا تكثّف. مقارنة: الرياض = دهون فقط. خميس = جذور أشجار+دهون. الخرج = كلس+رمل = مختلف.',
        shortAnswer: 'على عكس [السنبك بدون Descaler الذي يصنع ثقب في الكلس]، يعتمد بروتوكولنا في خدمة [تسليك المجاري] بمدينة [الخرج] على [Jetting+Descaler+تهوية+سنبك]. ففي ظل [CaCO₃ يسد+SiO₂ ترسيب+NH₃ مزدوجة+ΔT 48°م]، تتفاقم ظاهرة [انسداد مفاصل+ترسيب صلب+رائحة]. لذا؛ يتدخل فنيونا عبر [Jetting ← Descaler ← تهوية ← وقاية].',
        heroSubtitle: 'CaCO₃ يسد + SiO₂ ترسيب + NH₃ مزدوجة — Jetting+Descaler!',
    },
    pricing: [
        { type: 'تسليك بسيط (سنبك)', unit: 'نقطة', minPrice: 80, maxPrice: 170, time: '30-60 دقيقة' },
        { type: 'تسليك + Jetting', unit: 'نقطة', minPrice: 150, maxPrice: 320, time: '1-2 ساعة' },
        { type: 'تسليك + Jetting + Descaler', unit: 'نقطة', minPrice: 220, maxPrice: 450, time: '2-3 ساعات' },
        { type: 'عقد سنوي (4 زيارات وقائية)', unit: 'سنة', minPrice: 500, maxPrice: 1000, time: '4 زيارات' },
    ],
    faq: [
        { question: 'ليش المجاري تنسد أسرع بالخرج؟', answer: 'CaCO₃ يُضيّق المفاصل + SiO₂ يتراكم = انسداد أسرع. Descaler+Jetting يمنعان.' },
        { question: 'ليش السنبك لا يكفي بالخرج؟', answer: 'السنبك يصنع ثقب في الكلس — لا يُذيبه. Descaler يُذيب ← Jetting يُنظف.' },
        { question: 'كم تكلفة تسليك بالخرج مقارنة بالرياض؟', answer: 'أغلى 20% — Descaler+Jetting. لكن: بدونهما = ينسد خلال شهر.' },
        { question: 'ليش الرائحة أقوى عند الانسداد بالخرج؟', answer: 'NH₃ صرف + NH₃ مزارع = مزدوجة + ΔT يسارع التحلل. تهوية مقوّاة.' },
        { question: 'كيف أمنع انسداد المجاري بالخرج؟', answer: 'Descaler وقائي كل 3 أشهر + فلتر فناء (SiO₂). بدونهما = انسداد مفاجئ.' },
    ],
    expertTips: [
        'Descaler كل تسليك — يُذيب CaCO₃.',
        'Jetting — يُزيل SiO₂ ترسيب صلب.',
        'فلتر فناء — يمنع SiO₂ من الدخول.',
        'وقائي ربع سنوي — كلس+رمل.',
        'تهوية مقوّاة — NH₃ مزدوجة.',
    ],
    warnings: [
        'سنبك بدون Descaler = ثقب مؤقت — كلس يُغلق خلال أسابيع.',
        'SiO₂ × سنة = ترسيب صلب — سنبك لا يُزيل — Jetting إلزامي.',
        'تأخير تسليك + ΔT + NH₃ = رائحة تدخل المنزل — صحة YMYL.',
    ],
    trustAnchors: [
        { ...GOV.NWC, role: 'تنظيم الصرف' },
        { ...GOV.BALADI, role: 'ترخيص شركات التسليك' },
        { entity: AMANA.RIYADH.entity, url: AMANA.RIYADH.url, role: 'اشتراطات أمانة الرياض' },
    ],
    expertReviewer: EXPERTS.ALMOHAIMED,
    expertCitations: [
        { expert: EXPERTS.ALMOHAIMED.name, quote: 'مجاري الخرج: CaCO₃ يسد المفاصل. Descaler+Jetting. السنبك لا يكفي.', source: 'موسوعة أخطاء — صرف زراعي' },
    ],
    saudiRegulations: [REGULATIONS.NWC_REPORT],
    verificationBadges: [{ badge: '✔️ تسليك مرخص', authority: 'بلدي + NWC', icon: 'shield-check' }],
    equipment: [
        { name: 'Jetting ضغط عالي', use: 'يُزيل CaCO₃+SiO₂ ترسيب صلب' },
        { name: 'Chemical Descaler', use: 'يُذيب كلس — لا سنبك' },
        { name: 'سنبك كهربائي', use: 'دهون+مواد عضوية' },
    ],
    commonConcerns: [
        { concern: 'سنبك يكفي.', solution: 'CaCO₃ = كلس. سنبك لا يُذيب. Descaler.' },
        { concern: 'مثل الرياض.', solution: 'كلس+رمل. الرياض: دهون فقط.' },
    ],
    consumerEducation: [
        { myth: 'أي تسليك.', truth: 'CaCO₃+SiO₂ = Descaler+Jetting.' },
        { myth: 'مرة بالسنة.', truth: 'كلس+رمل = ربع سنوي.' },
    ],
    relatedServices: [
        { slug: 'sewage-suction', context: 'شفط صرف', priority: 1 },
        { slug: 'bathroom-leak-detection', context: 'حمام', priority: 2 },
        { slug: 'water-leak-detection', context: 'تسرب', priority: 3 },
        { slug: 'tanks-cleaning', context: 'خزانات', priority: 4 },
        { slug: 'cleaning', context: 'تنظيف', priority: 5 },
        { slug: 'pest-control', context: 'حشرات', priority: 6 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 7 },
    ],
};
