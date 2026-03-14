import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف بالساعة ببريدة — CaCO₃ 600ppm يومي+Nafud SiO₂+نخيل — Descaler+HEPA! (2026)',
        description: 'تنظيف بالساعة بريدة. CaCO₃ 600ppm يومي! Nafud SiO₂ يتراكم. حبوب نخيل 8M. Descaler+HEPA+RO+Microfiber.',
        h1: 'تنظيف بالساعة ببريدة — كلس يومي+Nafud!',
        keywords: ['تنظيف بالساعة بريدة', 'عاملة بالساعة ببريدة', 'شركة تنظيف بالساعة بريدة'],
    },
    content: {
        introduction: 'تنظيف بالساعة ببريدة = مواجهة يومية للكلس والنخيل! CaCO₃ 600ppm يومي: أعلى كلس بالمملكة يتراكم يومياً على الحنفيات والدش. عاملة بدون Descaler = كلس يتحول لصلب خلال أسبوع. Descaler يومي أو كل يومين. Nafud SiO₂ يتراكم: رمل النفود الناعم 10-50 μm يدخل من النوافذ والمكيفات ← يتراكم على كل سطح ← Pre-Rinse ثم Microfiber. لا مكنسة عادية = تنثر الرمل. نخيل 8M: حبوب لقاح مارس-مايو + ألياف نخيل + غبار تمور = طبقة نخيلية يومية. HEPA Pollen. 10-20% = لا عفن! تجفيف 15 دقيقة! عاملة بالساعة ببريدة تحتاج 3 أدوات خاصة: Descaler+HEPA+Microfiber. مقارنة: خميس = Anti-Fungal+Anti-Mite+4h تجفيف. بريدة = Descaler+HEPA = أبسط.',
        shortAnswer: 'على عكس [التنظيف بمكنسة وماء صنبور]، يعتمد بروتوكولنا في خدمة [التنظيف بالساعة] بمدينة [بريدة] على [Descaler يومي+HEPA+Microfiber+RO]. ففي ظل [CaCO₃ 600ppm+Nafud SiO₂+نخيل 8M+10-20%]، تتفاقم ظاهرة [كلس يومي+رمل ناعم+لقاح]. لذا؛ يتدخل فريقنا عبر [Descaler ← HEPA ← Pre-Rinse ← RO] — 15 دقيقة تجفيف!',
        heroSubtitle: 'CaCO₃ 600ppm يومي + Nafud + نخيل — Descaler+HEPA! تجفيف سريع!',
    },
    pricing: [
        { type: 'ساعة واحدة', unit: 'ساعة', minPrice: 25, maxPrice: 50, time: '1h' },
        { type: '3 ساعات', unit: 'جلسة', minPrice: 65, maxPrice: 130, time: '3h' },
        { type: '5 ساعات', unit: 'جلسة', minPrice: 100, maxPrice: 200, time: '5h' },
        { type: 'يومي (30 يوم)', unit: 'شهر', minPrice: 600, maxPrice: 1200, time: '30 زيارة' },
    ],
    faq: [
        { question: 'ليش بريدة تحتاج Descaler يومي؟', answer: 'CaCO₃ 600ppm أعلى بالمملكة. كلس يتصلب خلال أسبوع. يومي أو كل يومين.' },
        { question: 'ليش HEPA ضروري بالساعة ببريدة؟', answer: 'Nafud 10-50 μm يمر من مكنسة عادية + نخيل 8M لقاح. HEPA يوقف الاثنين.' },
        { question: 'كم تكلفة عاملة بالساعة ببريدة مقارنة بخميس؟', answer: 'متقاربة ساعة. لكن: بريدة أبسط (لا Anti-Fungal+Anti-Mite). أسرع تجفيف.' },
        { question: 'ليش Microfiber وليس قطن ببريدة؟', answer: 'Nafud يعلق بالقطن = يخدش كل الأسطح. Microfiber يحمل بدون خدش.' },
        { question: 'هل التنظيف بالساعة يسبب عفن ببريدة؟', answer: 'لا! 10-20% = تجفيف 15 دقيقة. ميزة. خميس: 4h تجفيف.' },
    ],
    expertTips: [
        'Descaler يومي — 600ppm أعلى كلس.',
        'HEPA — Nafud + نخيل.',
        'Microfiber — لا قطن أبداً.',
        'Pre-Rinse — Nafud قبل المسح.',
        '15 دقيقة تجفيف — لا عفن!',
    ],
    warnings: [
        'CaCO₃ 600ppm × أسبوع بدون Descaler = كلس صلب — يحتاج حمض.',
        'مكنسة عادية + Nafud = ينثر ← يخدش — HEPA فقط.',
        'قطن + Nafud = خدش كل الأسطح — Microfiber إلزامي.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص شركات التنظيف' },
        { entity: AMANA.QASSIM.entity, url: AMANA.QASSIM.url, role: 'اشتراطات أمانة القصيم' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALMISNID.name, quote: 'بالساعة ببريدة: Descaler يومي 600ppm. HEPA Nafud+نخيل. 15 دقيقة تجفيف.', source: 'جغرافيا المناخ — القصيم' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ تنظيف مرخص', authority: 'بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'Descaler صناعي', use: 'CaCO₃ 600ppm — يومي' },
        { name: 'HEPA Pollen+Fine', use: 'Nafud+نخيل — 10 μm' },
        { name: 'Microfiber', use: 'Nafud لا يخدش' },
    ],
    commonConcerns: [
        { concern: 'عاملة عادية.', solution: 'Descaler+HEPA+Microfiber = 3 أدوات خاصة.' },
        { concern: 'مثل الرياض.', solution: '600ppm+Nafud+نخيل = مختلف.' },
    ],
    consumerEducation: [
        { myth: 'مكنسة تكفي.', truth: 'Nafud 10 μm يمر = HEPA.' },
        { myth: 'Descaler شهري.', truth: '600ppm = يومي أو كل يومين.' },
    ],
    relatedServices: [
        { slug: 'cleaning', context: 'تنظيف', priority: 1 },
        { slug: 'apartments-cleaning', context: 'شقق', priority: 2 },
        { slug: 'villas-cleaning', context: 'فلل', priority: 3 },
        { slug: 'carpet-cleaning', context: 'سجاد', priority: 4 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 5 },
        { slug: 'marble-polishing', context: 'رخام', priority: 6 },
        { slug: 'pest-control', context: 'حشرات', priority: 7 },
    ],
};
