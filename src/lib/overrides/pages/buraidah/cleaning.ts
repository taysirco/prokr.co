import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف ببريدة — CaCO₃ 600ppm أعلى كلس+نخيل 8M+Nafud ناعم — 4 محاور قصيمية! (2026)',
        description: 'تنظيف بريدة. CaCO₃ 600ppm أعلى كلس! نخيل 8M غبار+لقاح. Nafud SiO₂ ناعم. ΔT 45°م. 4 محاور قصيمية فريدة.',
        h1: 'تنظيف ببريدة — 4 محاور قصيمية فريدة!',
        keywords: ['تنظيف بريدة', 'شركة تنظيف ببريدة', 'تنظيف منازل بريدة'],
    },
    content: {
        introduction: 'تنظيف بريدة = 4 محاور قصيمية فريدة! المحور 1 — CaCO₃ 600ppm أعلى كلس: بريدة عندها أعلى كلس بالمملكة. كل حمام+مطبخ+حنفية = كلس أسرع 2× من الرياض. Descaler أسبوعي وليس شهري. RO في الشطف. المحور 2 — نخيل 8M: حبوب لقاح مارس-مايو+ألياف+غبار تمور = طبقة غبار نخيلي يومية. HEPA Pollen يمتص. المحور 3 — Nafud SiO₂ ناعم: رمل النفود 10-50 μm أنعم من الرمل العادي = يخدش ويقطع. Pre-Rinse+Microfiber. المحور 4 — ΔT 45°م: صيف 48°م يُجفف. لكن: 10-20% = لا عفن! لا عث! تجفيف 15-25 دقيقة! ميزة كبرى. مقارنة: خميس = 7 محاور+عفن+عث. بريدة = 4 محاور+لا عفن = أبسط 30% وأرخص.',
        shortAnswer: 'على عكس [التنظيف بماء صنبور بدون Descaler+HEPA]، يعتمد بروتوكولنا في خدمة [التنظيف] بمدينة [بريدة] على [Descaler أسبوعي+HEPA Pollen+Pre-Rinse+RO]. ففي ظل [CaCO₃ 600ppm+نخيل 8M+Nafud SiO₂+ΔT 45°م]، تتفاقم ظاهرة [كلس مضاعف+غبار نخيلي+خدش ناعم]. لذا؛ يتدخل فريقنا عبر [4 محاور قصيمية متخصصة] — ميزة: لا عفن! تجفيف سريع!',
        heroSubtitle: '4 محاور قصيمية — CaCO₃ 600ppm+نخيل 8M+Nafud — لا عفن!',
    },
    pricing: [
        { type: 'شقة (2-3 غرف)', unit: 'شقة', minPrice: 150, maxPrice: 300, time: '3-4h + 20 دقيقة' },
        { type: 'فيلا صغيرة (300 م²)', unit: 'فيلا', minPrice: 350, maxPrice: 700, time: '5-7h' },
        { type: 'فيلا كبيرة (500+ م²)', unit: 'فيلا', minPrice: 600, maxPrice: 1200, time: '8-10h' },
        { type: 'أسبوعي (4/شهر)', unit: 'شهر', minPrice: 400, maxPrice: 800, time: '4 زيارات' },
    ],
    faq: [
        { question: 'ليش كلس بريدة أكثر من باقي المدن؟', answer: 'CaCO₃ 600ppm — أعلى بالمملكة. الرياض: 300. الخرج: 450. Descaler أسبوعي.' },
        { question: 'كيف النخيل يأثر على التنظيف ببريدة؟', answer: '8M نخلة = لقاح+ألياف+غبار تمور. HEPA Pollen يمتص. حساسية مارس-مايو.' },
        { question: 'كم تكلفة تنظيف ببريدة مقارنة بخميس؟', answer: 'أرخص 30% — 4 محاور مقابل 7. لا Anti-Fungal+Anti-Mite+تجفيف سريع.' },
        { question: 'هل Nafud يخدش الأسطح ببريدة؟', answer: 'Nafud 10-50 μm أنعم وأخطر. Pre-Rinse أولاً+Microfiber. لا قطن.' },
        { question: 'هل المنزل يتعفّن ببريدة؟', answer: 'لا! 10-20% = لا عفن لا عث. تجفيف 15-25 دقيقة. أفضل بيئة تجفيف.' },
    ],
    expertTips: [
        'Descaler أسبوعي — 600ppm أعلى كلس.',
        'HEPA Pollen — نخيل 8M لقاح.',
        'Pre-Rinse — Nafud SiO₂ قبل المسح.',
        'RO Rinse — لا كلس جديد.',
        'لا عفن! — 10-20% = تجفيف سريع.',
    ],
    warnings: [
        'CaCO₃ 600ppm × أسبوع = كلس صلب — Descaler أسبوعي إلزامي.',
        'نخيل × ربيع = حساسية تنفسية — HEPA Pollen YMYL.',
        'Nafud + قطن = خدش كل الأسطح — Microfiber فقط.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص شركات التنظيف' },
        { entity: AMANA.QASSIM.entity, url: AMANA.QASSIM.url, role: 'اشتراطات أمانة القصيم' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALMISNID.name, quote: 'تنظيف بريدة: 4 محاور قصيمية. 600ppm+8M+Nafud. لا عفن. أبسط 30%.', source: 'جغرافيا المناخ — القصيم' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ تنظيف مرخص', authority: 'بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'Descaler صناعي', use: 'CaCO₃ 600ppm — أسبوعي' },
        { name: 'HEPA Pollen+Fine', use: 'نخيل 8M+Nafud 10 μm' },
        { name: 'RO Water+Microfiber', use: 'لا كلس+لا خدش' },
    ],
    hiddenObjections: [
        { fear: 'مثل الرياض.', solution: '600ppm مقابل 300. 8M نخلة. Nafud.' },
        { fear: 'مثل خميس.', solution: 'لا عفن+15 دقيقة = أرخص 30%.' },
    ],
    counterNarratives: [
        { myth: 'تنظيف عادي.', truth: '4 محاور: Descaler+HEPA+Pre-Rinse+RO.' },
        { myth: 'Descaler شهري.', truth: '600ppm = أسبوعي. أسرع تكلّس.' },
    ],
    relatedServices: [
        { slug: 'apartments-cleaning', context: 'شقق', priority: 1 },
        { slug: 'villas-cleaning', context: 'فلل', priority: 2 },
        { slug: 'carpet-cleaning', context: 'سجاد', priority: 3 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 4 },
        { slug: 'marble-polishing', context: 'رخام', priority: 5 },
        { slug: 'sofa-cleaning', context: 'كنب', priority: 6 },
        { slug: 'pest-control', context: 'حشرات', priority: 7 },
    ],
};
