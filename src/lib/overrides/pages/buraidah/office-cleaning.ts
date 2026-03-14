import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف مكاتب ببريدة — CaCO₃ 600ppm كلس+Nafud SiO₂ إلكترونيات+نخيل — HEPA+RO! (2026)',
        description: 'تنظيف مكاتب بريدة. CaCO₃ 600ppm كلس حمامات! Nafud SiO₂ إلكترونيات. نخيل 8M. HEPA+Descaler+RO.',
        h1: 'تنظيف مكاتب ببريدة — كلس+Nafud إلكترونيات!',
        keywords: ['تنظيف مكاتب بريدة', 'تنظيف مكتب ببريدة', 'شركة تنظيف مكاتب بريدة'],
    },
    content: {
        introduction: 'مكتب بريدة = Nafud يتلف الإلكترونيات! CaCO₃ 600ppm كلس حمامات: أعلى كلس بالمملكة = حمام المكتب ومطبخ الموظفين يتكلّسان أسرع. Descaler أسبوعي. Nafud SiO₂ إلكترونيات: رمل النفود الناعم 10-50 μm يدخل الحواسيب والطابعات ← يتراكم على المراوح ← حرارة ترتفع ← عمر أقصر. HEPA + تنظيف أجهزة. نخيل 8M: حبوب لقاح تدخل نظام التكييف المركزي ← حساسية موظفين. فلتر HEPA Pollen. ΔT 45°م: مكيف المركزي يعمل 12+ ساعة صيفاً = فلتر يتسخ أسرع. 10-20% = لا عفن في السجاد! تجفيف سريع. مقارنة: خميس = عفن+رطوبة. بريدة = كلس+Nafud+نخيل = مختلف.',
        shortAnswer: 'على عكس [التنظيف بدون HEPA بدون Descaler]، يعتمد بروتوكولنا في خدمة [تنظيف المكاتب] بمدينة [بريدة] على [HEPA+Descaler+RO+Pollen Filter]. ففي ظل [CaCO₃ 600ppm+Nafud إلكترونيات+نخيل لقاح+ΔT 45°م]، تتفاقم ظاهرة [كلس+تلف أجهزة+حساسية]. لذا؛ يتدخل فريقنا عبر [HEPA ← Descaler ← فلتر ← RO] — لا عفن!',
        heroSubtitle: 'CaCO₃ 600ppm + Nafud إلكترونيات + نخيل لقاح — HEPA+Descaler!',
    },
    pricing: [
        { type: 'مكتب صغير (50 م²)', unit: 'زيارة', minPrice: 100, maxPrice: 200, time: '1-2h' },
        { type: 'مكتب كبير (200+ م²)', unit: 'زيارة', minPrice: 250, maxPrice: 520, time: '3-5h' },
        { type: '+ تنظيف أجهزة HEPA', unit: 'إضافي', minPrice: 80, maxPrice: 170, time: '1h' },
        { type: 'يومي (30 يوم)', unit: 'شهر', minPrice: 800, maxPrice: 1600, time: '30 زيارة' },
    ],
    faq: [
        { question: 'ليش أجهزة المكتب تتلف أسرع ببريدة؟', answer: 'Nafud 10-50 μm يدخل الحاسوب ← مراوح تتسخ ← حرارة ← عمر أقصر. HEPA.' },
        { question: 'ليش حمام المكتب يتكلّس ببريدة؟', answer: 'CaCO₃ 600ppm أعلى كلس. Descaler أسبوعي. RO في الشطف.' },
        { question: 'كم تكلفة تنظيف مكتب ببريدة مقارنة بخميس؟', answer: 'أرخص 15-20% — لا Anti-Fungal (لا عفن). Descaler +HEPA.' },
        { question: 'هل نخيل يأثر على المكتب ببريدة؟', answer: 'لقاح يدخل التكييف المركزي ← حساسية موظفين. فلتر HEPA Pollen.' },
        { question: 'هل سجاد المكتب يتعفّن ببريدة؟', answer: 'لا! 10-20% = لا عفن. تجفيف سريع. خميس: عفن أسبوعين.' },
    ],
    expertTips: [
        'HEPA أجهزة — Nafud يتلف إلكترونيات.',
        'Descaler أسبوعي — 600ppm حمام مكتب.',
        'فلتر Pollen — نخيل تكييف مركزي.',
        'Microfiber — Nafud يخدش مكاتب.',
        'لا عفن سجاد — تجفيف سريع.',
    ],
    warnings: [
        'Nafud × 6 أشهر بدون HEPA = حاسوب يحترق — 3000+.',
        'CaCO₃ 600ppm × أسبوع = حمام مكتب كلس صلب.',
        'نخيل + تكييف مركزي = حساسية موظفين — إنتاجية تقل YMYL.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص شركات التنظيف' },
        { entity: AMANA.QASSIM.entity, url: AMANA.QASSIM.url, role: 'اشتراطات أمانة القصيم' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALMISNID.name, quote: 'مكتب بريدة: Nafud يتلف أجهزة. 600ppm كلس. HEPA+Descaler.', source: 'جغرافيا المناخ — مكاتب القصيم' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ تنظيف مكاتب مرخص', authority: 'بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'HEPA Fine', use: 'Nafud 10 μm — إلكترونيات' },
        { name: 'Descaler صناعي', use: 'CaCO₃ 600ppm — حمام' },
        { name: 'HEPA Pollen', use: 'نخيل — تكييف مركزي' },
    ],
    hiddenObjections: [
        { fear: 'مكنسة تكفي.', solution: 'Nafud 10 μm يمر = HEPA. أجهزة.' },
        { fear: 'مثل الرياض.', solution: '600ppm+Nafud+نخيل = 3 تحديات فريدة.' },
    ],
    consumerEducation: [
        { myth: 'تنظيف عادي.', truth: 'Nafud يتلف أجهزة+600ppm كلس. HEPA+Descaler.' },
        { myth: 'شهري.', truth: 'Nafud+كلس = يومي أو أسبوعي.' },
    ],
    relatedServices: [
        { slug: 'cleaning', context: 'تنظيف', priority: 1 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 2 },
        { slug: 'carpet-cleaning', context: 'سجاد', priority: 3 },
        { slug: 'glass-facades-cleaning', context: 'واجهات', priority: 4 },
        { slug: 'marble-polishing', context: 'رخام', priority: 5 },
        { slug: 'pest-control', context: 'حشرات', priority: 6 },
        { slug: 'steam-cleaning', context: 'بخار', priority: 7 },
    ],
};
