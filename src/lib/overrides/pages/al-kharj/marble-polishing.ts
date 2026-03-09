import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'جلي رخام بالخرج — CaCO₃ كلس+SiO₂ خدش+NH₃ بقع — Descaler+Diamond Pad! (2026)',
        description: 'جلي رخام الخرج. CaCO₃ 450ppm كلس على الرخام! SiO₂ خدش. NH₃ بقع عضوية. Descaler+Diamond Pad+RO. لا رطوبة!',
        h1: 'جلي رخام بالخرج — كلس وخدش — لا رطوبة!',
        keywords: ['جلي رخام الخرج', 'جلي رخام بالخرج', 'شركة جلي رخام الخرج'],
    },
    content: {
        introduction: 'رخام الخرج يواجه تحديات مياه وغبار! CaCO₃ 450ppm كلس: ماء صنبور = ترسبات كلس على سطح الرخام ← يفقد اللمعان. Descaler حمضي مخصوص للرخام (pH 5-6 ← ليس حمضي قوي يآكل). SiO₂ خدش: رمل ناعم يُمشى عليه ← يخدش سطح الرخام ← يفقد اللمعان. Diamond Pad يُعيد اللمعان. NH₃ بقع عضوية: أمونيا مزارع ± فضلات حمام تترك بقع عضوية صفراء. Poultice يسحب. ΔT 48°م: فارق حراري يُسبب تشققات شعرية (Hairline Cracks) في الرخام الخارجي. Sealant يحمي. 15-25% = لا رطوبة! لا عفن تحت الرخام! تجفيف لمعان فوري. مقارنة: خميس = رطوبة+عفن تحت الرخام+طحالب. الخرج = كلس+خدش لكن لا عفن = أبسط.',
        shortAnswer: 'على عكس [الجلي بماء صنبور الذي يترسّب كلس]، يعتمد بروتوكولنا في خدمة [جلي الرخام] بمدينة [الخرج] على [Descaler pH 5-6+Diamond Pad+RO+Poultice]. ففي ظل [CaCO₃ 450ppm+SiO₂ خدش+NH₃ بقع+ΔT تشقق]، تتفاقم ظاهرة [كلس+خدش+بقع+Hairline]. لذا؛ يتدخل فنيونا عبر [Descaler ← Diamond ← Poultice ← Sealant ← RO].',
        heroSubtitle: 'CaCO₃ كلس + SiO₂ خدش + NH₃ بقع — Diamond Pad+RO!',
    },
    pricing: [
        { type: 'جلي عادي (م²)', unit: 'م²', minPrice: 15, maxPrice: 30, time: 'حسب المساحة' },
        { type: 'جلي + تلميع Diamond', unit: 'م²', minPrice: 25, maxPrice: 50, time: 'حسب المساحة' },
        { type: '+ Poultice بقع NH₃', unit: 'بقعة', minPrice: 50, maxPrice: 100, time: '1-2 ساعة' },
        { type: 'نصف سنوي (2 زيارتين)', unit: 'سنة', minPrice: 400, maxPrice: 800, time: '2 زيارتين' },
    ],
    faq: [
        { question: 'ليش الرخام يفقد لمعانه بالخرج؟', answer: 'CaCO₃ كلس + SiO₂ خدش = سببان. Descaler+Diamond Pad يعيدان اللمعان.' },
        { question: 'هل Descaler يآكل الرخام بالخرج؟', answer: 'Descaler مخصوص pH 5-6 = لا يآكل. حمض قوي (خل/ليمون) = يآكل!' },
        { question: 'كم تكلفة جلي رخام بالخرج مقارنة بخميس؟', answer: 'أرخص 15-20% — لا عفن تحت الرخام = لا Anti-Fungal = أبسط.' },
        { question: 'هل الرخام يتشقق بالخرج؟', answer: 'ΔT 48°م = Hairline Cracks في الرخام الخارجي. Sealant يحمي. داخلي: آمن.' },
        { question: 'كيف أزيل بقع NH₃ صفراء من الرخام بالخرج؟', answer: 'Poultice يسحب البقعة من العمق. مسح سطحي لا يكفي. بقعة عضوية عميقة.' },
    ],
    expertTips: [
        'Descaler pH 5-6 — كلس بدون تآكل.',
        'Diamond Pad — يُعيد لمعان SiO₂ خدش.',
        'RO Rinse — لا كلس جديد بعد الجلي.',
        'Poultice — بقع NH₃ عميقة.',
        'Sealant خارجي — ΔT تشقق.',
    ],
    warnings: [
        'خل/ليمون على الرخام = تآكل — Descaler مخصوص pH 5-6 فقط.',
        'SiO₂ × سنة بدون جلي = خدوش تراكمية — يحتاج Diamond إعادة.',
        'CaCO₃ + ماء صنبور بعد الجلي = كلس جديد فوراً — RO إلزامي.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص شركات الجلي' },
        { entity: AMANA.RIYADH.entity, url: AMANA.RIYADH.url, role: 'اشتراطات أمانة الرياض' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALMISNID.name, quote: 'رخام الخرج: CaCO₃+SiO₂ = كلس+خدش. Descaler pH 5-6+Diamond. ميزة: لا عفن.', source: 'نصائح هندسية — رخام صحراوي' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ جلي رخام مرخص', authority: 'بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'Descaler pH 5-6', use: 'CaCO₃ كلس — لا يآكل الرخام' },
        { name: 'Diamond Pad', use: 'يُعيد لمعان — SiO₂ خدش' },
        { name: 'RO Water', use: 'شطف بدون كلس جديد' },
    ],
    hiddenObjections: [
        { fear: 'خل يكفي.', solution: 'حمض قوي = يآكل الرخام! pH 5-6 فقط.' },
        { fear: 'مثل خميس.', solution: 'لا عفن تحت الرخام = أبسط وأرخص.' },
    ],
    counterNarratives: [
        { myth: 'ماء صنبور يكفي.', truth: 'CaCO₃ 450ppm = كلس جديد فوراً. RO.' },
        { myth: 'جلي مرة يكفي.', truth: 'SiO₂ يومي = نصف سنوي إلزامي.' },
    ],
    relatedServices: [
        { slug: 'cleaning', context: 'تنظيف', priority: 1 },
        { slug: 'glass-facades-cleaning', context: 'واجهات', priority: 2 },
        { slug: 'villas-cleaning', context: 'فلل', priority: 3 },
        { slug: 'steam-cleaning', context: 'بخار', priority: 4 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 5 },
        { slug: 'carpet-cleaning', context: 'سجاد', priority: 6 },
        { slug: 'office-cleaning', context: 'مكاتب', priority: 7 },
    ],
};
