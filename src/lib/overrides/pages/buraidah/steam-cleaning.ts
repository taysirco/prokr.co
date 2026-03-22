import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../gov-references';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف بالبخار ببريدة — CaCO₃ 600ppm كلس بخار+Nafud SiO₂+نخيل — RO+HEPA! (2026)',
        description: 'تنظيف بالبخار بريدة. CaCO₃ 600ppm كلس داخل الجهاز! Nafud SiO₂ يقطع. نخيل 8M. RO+HEPA+Descaler.',
        h1: 'تنظيف بالبخار ببريدة — أعلى كلس يتلف الجهاز!',
        keywords: ['تنظيف بالبخار بريدة', 'تنظيف بخار ببريدة', 'شركة تنظيف بالبخار بريدة'],
    },
    content: {
        introduction: 'بخار بريدة = كلس يتلف جهاز البخار! CaCO₃ 600ppm كلس داخل الجهاز: أعلى كلس بالمملكة = جهاز البخار يتكلّس 2× أسرع ← يفقد ضغط ← يتلف. ماء RO إلزامي لتشغيل الجهاز. Descaler شهري للجهاز. Nafud SiO₂ يقطع: بخار يُحرّك Nafud الناعم على الأسطح ← يُخدش. Pre-Rinse أولاً ← ثم بخار. نخيل 8M: حبوب لقاح مارس-مايو + ألياف = بخار يُذيبها = لزج. HEPA أولاً. ΔT 45°م: بخار+حرارة بيئة = تجفيف 10-15 دقيقة! 10-20% = لا عفن! ميزة كبرى. مقارنة: خميس = بخار+رطوبة+عفن+4h تجفيف. بريدة = بخار+كلس+جفاف = أبسط.',
        shortAnswer: 'على عكس [البخار بماء صنبور الذي يُتلف الجهاز]، يعتمد بروتوكولنا في خدمة [التنظيف بالبخار] بمدينة [بريدة] على [RO Water+HEPA Pre-Rinse+Descaler جهاز]. ففي ظل [CaCO₃ 600ppm+Nafud خدش+نخيل لزج+10-20%]، تتفاقم ظاهرة [تكلّس جهاز+خدش+لزج]. لذا؛ يتدخل فريقنا عبر [HEPA ← Pre-Rinse ← RO بخار ← تجفيف 10 دقائق] — لا عفن!',
        heroSubtitle: 'CaCO₃ 600ppm يتلف الجهاز — RO إلزامي! تجفيف 10 دقائق!',
    },
    pricing: [
        { type: 'كنب (طقم 5)', unit: 'طقم', minPrice: 120, maxPrice: 250, time: '1-2h + 10 تجفيف' },
        { type: 'سجاد (م²)', unit: 'م²', minPrice: 6, maxPrice: 14, time: 'حسب المساحة' },
        { type: 'مطبخ + حمام', unit: 'خدمة', minPrice: 150, maxPrice: 310, time: '2-3h' },
        { type: 'شامل (شقة)', unit: 'شقة', minPrice: 250, maxPrice: 520, time: '3-5h' },
    ],
    faq: [
        { question: 'ليش جهاز البخار يتلف أسرع ببريدة؟', answer: 'CaCO₃ 600ppm أعلى بالمملكة. كلس يتراكم = فقدان ضغط. RO إلزامي.' },
        { question: 'هل البخار يخدش الأسطح ببريدة؟', answer: 'Nafud 10-50 μm يتحرك بالبخار = خدش. Pre-Rinse أولاً ← ثم بخار.' },
        { question: 'كم تكلفة بخار ببريدة مقارنة بخميس؟', answer: 'أرخص 20% — لا Anti-Fungal. تجفيف 10 دقائق.' },
        { question: 'هل البخار يسبب عفن ببريدة؟', answer: 'لا! 10-20% = تجفيف 10-15 دقيقة. خميس: 4h+عفن.' },
        { question: 'كم مرة Descaler جهاز البخار ببريدة؟', answer: 'شهرياً! 600ppm = أسرع تكلّس. بدونه = جهاز يتلف 6 أشهر.' },
    ],
    expertTips: [
        'RO Water — جهاز بخار 600ppm.',
        'Pre-Rinse — Nafud قبل بخار.',
        'HEPA أولاً — نخيل ألياف.',
        'Descaler جهاز شهرياً — 600ppm.',
        'تجفيف 10 دقائق — لا عفن!',
    ],
    warnings: [
        'CaCO₃ 600ppm + ماء صنبور = جهاز يتلف 6 أشهر — RO إلزامي.',
        'بخار + Nafud بدون Pre-Rinse = خدش كل الأسطح.',
        'نخيل ألياف + بخار = لزج يلتصق — HEPA أولاً.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص شركات التنظيف' },
        { entity: AMANA.QASSIM.entity, url: AMANA.QASSIM.url, role: 'اشتراطات أمانة القصيم' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALMISNID.name, quote: 'بخار بريدة: 600ppm يتلف جهاز. RO إلزامي. تجفيف 10 دقائق. لا عفن.', source: 'جغرافيا المناخ — بخار القصيم' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ تنظيف بخار مرخص', authority: 'بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'جهاز بخار صناعي', use: 'RO Water — لا كلس' },
        { name: 'HEPA Pollen', use: 'نخيل ألياف — أولاً' },
        { name: 'Descaler جهاز', use: 'CaCO₃ 600ppm — شهري' },
    ],
    commonConcerns: [
        { concern: 'ماء صنبور يكفي.', solution: '600ppm = جهاز يتلف 6 أشهر. RO.' },
        { concern: 'مثل خميس.', solution: 'لا عفن+10 دقائق = أرخص 20%.' },
    ],
    consumerEducation: [
        { myth: 'أي ماء.', truth: '600ppm = RO إلزامي. يتلف.' },
        { myth: 'بخار يعفّن.', truth: '10-20% = 10 دقائق. لا عفن.' },
    ],
    relatedServices: [
        { slug: 'cleaning', context: 'تنظيف', priority: 1 },
        { slug: 'sofa-cleaning', context: 'كنب', priority: 2 },
        { slug: 'carpet-cleaning', context: 'سجاد', priority: 3 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 4 },
        { slug: 'marble-polishing', context: 'رخام', priority: 5 },
        { slug: 'oven-cleaning', context: 'أفران', priority: 6 },
        { slug: 'pest-control', context: 'حشرات', priority: 7 },
    ],
};
