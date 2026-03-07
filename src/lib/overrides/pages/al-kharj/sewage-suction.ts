import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'شفط صرف صحي بالخرج — CaCO₃ يسد+NH₃ رائحة مزارع+SiO₂ — شفط+Descaler! (2026)',
        description: 'شفط صرف صحي الخرج. CaCO₃ 450ppm يسد أنابيب! NH₃ رائحة مزدوجة. SiO₂ ترسيب. شفط+Descaler+تهوية AC.',
        h1: 'شفط صرف صحي بالخرج — كلس يسد + NH₃ رائحة!',
        keywords: ['شفط صرف صحي الخرج', 'شفط بيارة بالخرج', 'شركة شفط صرف صحي الخرج'],
    },
    content: {
        introduction: 'صرف صحي الخرج = تحديات مياه وزراعية! CaCO₃ يسد الأنابيب: 450ppm كلس يتراكم داخل أنابيب الصرف ← يُضيّق القُطر ← يحتاج شفط+Jetting+Descaler = 3 خطوات بدل 1. NH₃ رائحة مزدوجة: أمونيا الصرف + أمونيا مزارع ألبان = رائحة أقوى 2× من المدن العادية. تهوية مقوّاة+AC. SiO₂ ترسيب: رمل يدخل عبر صرف الفناء ← يتراكم في البيارة ← يحتاج شفط أعمق. ΔT 48°م: حرارة تسارع التحلل البكتيري صيفاً = رائحة أسرع = شفط أكثر تواتراً. 15-25% = لا تكثّف في المجاري! مياه تجري بسلاسة — لا تكثّف يُبطئ. مقارنة: خميس = أمطار تملأ البيارة. الخرج = كلس+رمل+NH₃ لكن لا أمطار = أبسط جزئياً.',
        shortAnswer: 'على عكس [الشفط بدون Descaler الذي يترك الكلس]، يعتمد بروتوكولنا في خدمة [شفط الصرف] بمدينة [الخرج] على [شفط+Jetting+Descaler+تهوية AC]. ففي ظل [CaCO₃ يسد+NH₃ مزدوجة+SiO₂ ترسيب+ΔT 48°م]، تتفاقم ظاهرة [انسداد+رائحة+ترسيب]. لذا؛ يتدخل فريقنا عبر [شفط ← جيتنغ ← Descaler ← تهوية] — ميزة: لا أمطار!',
        heroSubtitle: 'CaCO₃ يسد + NH₃ رائحة مزدوجة + SiO₂ — Descaler!',
    },
    pricing: [
        { type: 'شفط بيارة عادي', unit: 'رحلة', minPrice: 200, maxPrice: 400, time: '1-2 ساعة' },
        { type: 'شفط + Jetting', unit: 'رحلة', minPrice: 350, maxPrice: 700, time: '2-3 ساعات' },
        { type: 'شفط + Descaler + Jetting', unit: 'رحلة', minPrice: 450, maxPrice: 900, time: '3-4 ساعات' },
        { type: 'عقد سنوي (4 شفطات)', unit: 'سنة', minPrice: 700, maxPrice: 1400, time: '4 رحلات' },
    ],
    faq: [
        { question: 'ليش البيارة بالخرج تمتلئ أسرع من الرياض؟', answer: 'SiO₂ رمل يتراكم + CaCO₃ كلس يُضيّق الأنابيب = تصريف أبطأ = امتلاء أسرع.' },
        { question: 'ليش الرائحة أقوى بالخرج؟', answer: 'NH₃ صرف + NH₃ مزارع = مزدوجة 2×. تهوية مقوّاة+AC.' },
        { question: 'كم تكلفة شفط بالخرج مقارنة بالرياض؟', answer: 'أغلى 15-20% — Descaler+Jetting إضافي. لكن: بدونهما = انسداد سريع.' },
        { question: 'هل الأمطار تأثر على البيارة بالخرج؟', answer: 'لا! لا أمطار = ميزة. خميس: أمطار تملأ البيارة = شفط أكثر.' },
        { question: 'كم مرة شفط بالخرج؟', answer: 'ربع سنوي (4/سنة). CaCO₃+SiO₂ يتراكمان. Descaler كل شفطة يمنع الانسداد.' },
    ],
    expertTips: [
        'Descaler كل شفطة — CaCO₃ يسد.',
        'Jetting — يُزيل ترسيب SiO₂.',
        'تهوية AC — NH₃ مزدوجة.',
        'ربع سنوي — كلس+رمل يتراكمان.',
        'لا أمطار! — ميزة.',
    ],
    warnings: [
        'شفط بدون Descaler = CaCO₃ يسد خلال أشهر — انسداد كامل.',
        'NH₃ مزدوجة + حرارة = رائحة أسرع — شفط متأخر = أقوى.',
        'SiO₂ × سنة بدون Jetting = ترسيب صلب — يحتاج حفر.',
    ],
    trustAnchors: [
        { ...GOV.NWC, role: 'تنظيم الصرف الصحي' },
        { ...GOV.BALADI, role: 'ترخيص شفط الصرف' },
        { entity: AMANA.RIYADH.entity, url: AMANA.RIYADH.url, role: 'اشتراطات أمانة الرياض' },
    ],
    expertReviewer: EXPERTS.ALMOHAIMED,
    expertCitations: [
        { expert: EXPERTS.ALMOHAIMED.name, quote: 'صرف الخرج: CaCO₃ يسد+NH₃ مزدوجة. Descaler+Jetting. ميزة: لا أمطار.', source: 'موسوعة أخطاء — صرف زراعي' },
    ],
    saudiRegulations: [REGULATIONS.NWC_REPORT],
    verificationBadges: [{ badge: '✔️ شفط مرخص', authority: 'بلدي + NWC', icon: 'shield-check' }],
    equipment: [
        { name: 'شاحنة شفط', use: 'شفط بيارة — سعة كبيرة' },
        { name: 'Jetting ضغط عالي', use: 'يُزيل SiO₂+CaCO₃ ترسيب' },
        { name: 'Chemical Descaler', use: 'يُذيب CaCO₃ — يمنع انسداد' },
    ],
    hiddenObjections: [
        { fear: 'شفط عادي يكفي.', solution: 'CaCO₃ يسد = Descaler+Jetting.' },
        { fear: 'كل 6 أشهر.', solution: 'كلس+رمل = ربع سنوي.' },
    ],
    counterNarratives: [
        { myth: 'شفط بس.', truth: 'CaCO₃ يسد = Descaler+Jetting.' },
        { myth: 'مرتين بالسنة.', truth: 'كلس+رمل = 4. ربع سنوي.' },
    ],
    relatedServices: [
        { slug: 'sewage-unblocking', context: 'تسليك', priority: 1 },
        { slug: 'tanks-cleaning', context: 'خزانات', priority: 2 },
        { slug: 'water-leak-detection', context: 'تسرب', priority: 3 },
        { slug: 'bathroom-leak-detection', context: 'حمام', priority: 4 },
        { slug: 'cleaning', context: 'تنظيف', priority: 5 },
        { slug: 'pest-control', context: 'حشرات', priority: 6 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 7 },
    ],
};
