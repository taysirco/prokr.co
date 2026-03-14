import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف كنب ببريدة — Nafud SiO₂ يقطع+CaCO₃ 600ppm خشونة+نخيل — HEPA+RO! (2026)',
        description: 'تنظيف كنب بريدة. Nafud SiO₂ يقطع أقمشة! CaCO₃ 600ppm خشونة. نخيل 8M لقاح. HEPA+RO+Pollen Filter.',
        h1: 'تنظيف كنب ببريدة — Nafud يقطع+أعلى كلس!',
        keywords: ['تنظيف كنب بريدة', 'تنظيف كنب ببريدة', 'شركة تنظيف كنب بريدة'],
    },
    content: {
        introduction: 'كنب بريدة = Nafud يقطع ألياف الأقمشة! Nafud SiO₂ يقطع: رمل النفود الناعم 10-50 μm يتغلغل في تنجيد الكنب ← كل جلوس = ألياف تُقطع من الداخل. HEPA Extraction يسحب قبل القطع. CaCO₃ 600ppm خشونة: لو غُسل الكنب بماء صنبور = أعلى كلس بالمملكة يترسب في الألياف ← يُخشّن الكنب حتى الناعم. RO Rinse إلزامي. نخيل 8M لقاح: حبوب لقاح مارس-مايو تتراكم في الكنب ← مسبب حساسية تنفسية أثناء الجلوس. HEPA Pollen. ΔT 45°م: تجفيف 15-20 دقيقة! 10-20% = لا عفن لا عث! ميزة كبرى. مقارنة: خميس = عفن+عث+Anti-Fungal+Anti-Mite+4-8h تجفيف = أغلى 30%. بريدة = أبسط.',
        shortAnswer: 'على عكس [الشامبو بماء صنبور الذي يُخشّن]، يعتمد بروتوكولنا في خدمة [تنظيف الكنب] بمدينة [بريدة] على [HEPA Extraction+RO+Pollen Filter]. ففي ظل [Nafud يقطع+CaCO₃ 600ppm+نخيل لقاح+10-20%]، تتفاقم ظاهرة [قطع ألياف+خشونة+حساسية]. لذا؛ يتدخل فريقنا عبر [HEPA ← غسل ← RO ← تجفيف 15 دقيقة] — لا عفن!',
        heroSubtitle: 'Nafud يقطع + CaCO₃ 600ppm خشونة + نخيل لقاح — HEPA+RO!',
    },
    pricing: [
        { type: 'كنبة 3 مقاعد', unit: 'كنبة', minPrice: 50, maxPrice: 100, time: '30-45 دقيقة + 15 تجفيف' },
        { type: 'طقم كنب (5 قطع)', unit: 'طقم', minPrice: 150, maxPrice: 310, time: '2-3h' },
        { type: '+ HEPA عميق', unit: 'إضافي', minPrice: 60, maxPrice: 120, time: '1h' },
        { type: 'شهري (4 HEPA)', unit: 'شهر', minPrice: 250, maxPrice: 500, time: '4 زيارات' },
    ],
    faq: [
        { question: 'ليش كنب بريدة يتلف أسرع؟', answer: 'Nafud 10-50 μm يقطع ألياف من الداخل. HEPA Extraction يسحب قبل القطع.' },
        { question: 'ليش الكنب يخشن بعد الغسل ببريدة؟', answer: 'CaCO₃ 600ppm أعلى كلس. يترسب في الألياف. RO = ناعم.' },
        { question: 'كم تكلفة تنظيف كنب ببريدة مقارنة بخميس؟', answer: 'أرخص 25-30% — لا Anti-Fungal+Anti-Mite+تجفيف 15 دقيقة.' },
        { question: 'هل الكنب يتعفّن ببريدة؟', answer: 'لا! 10-20% = لا عفن لا عث. تجفيف 15-20 دقيقة.' },
        { question: 'هل نخيل يأثر على الكنب ببريدة؟', answer: '8M نخلة = لقاح يتراكم. حساسية أثناء الجلوس. HEPA Pollen.' },
    ],
    expertTips: [
        'HEPA Extraction — Nafud يقطع.',
        'RO Rinse — 600ppm خشونة.',
        'HEPA Pollen — لقاح مارس-مايو.',
        'تجفيف 15 دقيقة — لا عفن!',
        'لا قطن — Nafud يخدش.',
    ],
    warnings: [
        'Nafud × 6 أشهر = ألياف مقطوعة — تغيير تنجيد 2000+.',
        'CaCO₃ 600ppm + ماء صنبور = أعلى خشونة — RO إلزامي.',
        'لقاح × ربيع + كنب بدون HEPA = حساسية تنفسية خطيرة.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص شركات التنظيف' },
        { entity: AMANA.QASSIM.entity, url: AMANA.QASSIM.url, role: 'اشتراطات أمانة القصيم' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALMISNID.name, quote: 'كنب بريدة: Nafud يقطع+600ppm خشونة. HEPA+RO. لا عفن.', source: 'جغرافيا المناخ — كنب القصيم' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ تنظيف كنب مرخص', authority: 'بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'HEPA Extraction', use: 'يسحب Nafud — يمنع قطع' },
        { name: 'RO Water', use: 'بدون CaCO₃ 600ppm' },
        { name: 'HEPA Pollen', use: 'لقاح نخيل 8M' },
    ],
    commonConcerns: [
        { concern: 'شامبو يكفي.', solution: 'Nafud يقطع+600ppm يُخشّن. HEPA+RO.' },
        { concern: 'مثل خميس.', solution: 'لا عفن+15 دقيقة = أرخص 30%.' },
    ],
    consumerEducation: [
        { myth: 'ماء عادي.', truth: '600ppm = أعلى خشونة. RO.' },
        { myth: 'مكنسة تكفي.', truth: 'Nafud 10 μm يمر. HEPA.' },
    ],
    relatedServices: [
        { slug: 'carpet-cleaning', context: 'سجاد', priority: 1 },
        { slug: 'councils-cleaning', context: 'مجالس', priority: 2 },
        { slug: 'cleaning', context: 'تنظيف', priority: 3 },
        { slug: 'steam-cleaning', context: 'بخار', priority: 4 },
        { slug: 'furniture-cleaning', context: 'أثاث', priority: 5 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 6 },
        { slug: 'marble-polishing', context: 'رخام', priority: 7 },
    ],
};
