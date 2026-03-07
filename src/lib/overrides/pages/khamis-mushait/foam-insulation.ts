import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'عزل فوم بخميس مشيط — أمطار+ضباب+برد 0°م = عزل حراري+مائي مزدوج! SBC 601 (2026)',
        description: 'عزل فوم خميس مشيط. أمطار+ضباب+برد 0°م. عزل حراري+مائي مزدوج! Closed-Cell PU. SBC 601. R-value 6.5/inch.',
        h1: 'عزل فوم بخميس مشيط — برد ومطر — عزل مزدوج!',
        keywords: ['عزل فوم خميس مشيط', 'عزل فوم بخميس مشيط', 'شركة عزل فوم خميس مشيط'],
    },
    content: {
        introduction: 'خميس مشيط تحتاج عزل فوم مزدوج (حراري+مائي) وليس أحادي! لماذا؟ أولاً — برد 0-5°م شتاءً: فقدان حراري كبير عبر السقف والجدران. R-value عالي ضروري. Closed-Cell PU Foam R-6.5/inch = أعلى عزل حراري. ثانياً — أمطار موسمية: ماء يتسرب من الأسطح ← يُتلف العزل ← ثم يتسرب للداخل. Closed-Cell = مقاوم للماء (Water Barrier). Open-Cell يمتص الماء = كارثة بخميس! ثالثاً — ضباب 200 يوم + 60-85%: تكثّف داخل الجدران (Interstitial Condensation) يُتلف عزل Open-Cell. Closed-Cell يمنع. رابعاً — عفن: بدون Vapor Barrier = عفن ينمو خلف العزل. مقارنة: عنيزة = Open-Cell يكفي (لا مطر+لا تكثّف). خميس = Closed-Cell إلزامي = أغلى 40-60%.',
        shortAnswer: 'على عكس [عزل Open-Cell الذي يمتص الماء ويتعفّن]، يعتمد بروتوكولنا في خدمة [عزل الفوم] بمدينة [خميس مشيط] على [Closed-Cell PU R-6.5+Vapor Barrier+تصريف]. ففي ظل [برد 0°م+أمطار+ضباب 60-85%+تكثّف بيني]، تتفاقم ظاهرة [فقدان حراري+تسرب+تكثّف+عفن]. لذا؛ يتدخل فنيونا عبر [Closed-Cell ← Vapor ← تصريف] لعزل مزدوج.',
        heroSubtitle: 'برد + أمطار + ضباب — Closed-Cell إلزامي! R-6.5!',
    },
    pricing: [
        { type: 'سقف (سماكة 3 سم)', unit: 'م²', minPrice: 35, maxPrice: 75, time: '1 يوم (100 م²)' },
        { type: 'سقف (سماكة 5 سم)', unit: 'م²', minPrice: 55, maxPrice: 110, time: '1-2 يوم' },
        { type: 'جدران + سقف', unit: 'م²', minPrice: 70, maxPrice: 140, time: '2-3 أيام' },
        { type: 'كشف + إصلاح عزل قديم', unit: 'خدمة', minPrice: 300, maxPrice: 650, time: '1 يوم' },
    ],
    faq: [
        { question: 'ليش Closed-Cell إلزامي بخميس وOpen-Cell يكفي بعنيزة؟', answer: 'خميس: أمطار+ضباب = Open-Cell يمتص الماء = كارثة. عنيزة: لا مطر+لا تكثّف = Open-Cell يكفي.' },
        { question: 'كم يوفر عزل الفوم بخميس مشيط كهرباء؟', answer: '25-40% كهرباء تدفئة شتاءً. R-6.5/inch = أعلى عزل. SBC 601 يشترط.' },
        { question: 'كم تكلفة عزل فوم بخميس مقارنة بعنيزة؟', answer: 'أغلى 40-60% — Closed-Cell مقابل Open-Cell. لكن يحمي من مطر+تكثّف+عفن.' },
        { question: 'هل عزل الفوم يمنع العفن بخميس مشيط؟', answer: 'Closed-Cell + Vapor Barrier = يمنع تكثّف بيني = يمنع عفن خلف العزل. بدونهما = عفن.' },
        { question: 'متى أعزل بخميس مشيط؟', answer: 'قبل الشتاء (أكتوبر) = أقصى توفير. بعد إصلاح أي تسريب سقف. لا تعزل فوق تسريب.' },
    ],
    expertTips: [
        'Closed-Cell فقط — Open-Cell يمتص الماء بخميس.',
        'R-6.5/inch — أعلى عزل حراري. SBC 601.',
        'Vapor Barrier — يمنع تكثّف بيني 60-85%.',
        'تصريف أسطح — عزل الفوم لا يمنع تجمع المطر.',
        'لا تعزل فوق تسريب — أصلح أولاً ثم اعزل.',
    ],
    warnings: [
        'Open-Cell + أمطار = العزل يمتص الماء ← يتعفّن ← تسريب أسوأ — خسارة كاملة.',
        'بدون Vapor Barrier + 60-85% = تكثّف بيني = عفن خلف العزل — لا يُرى حتى يتلف.',
        'عزل فوق تسريب = العزل يحبس الماء = تلف هيكلي — إصلاح 10000+ ريال.',
    ],
    trustAnchors: [
        { ...GOV.MOENERGY, role: 'كفاءة الطاقة — SBC 601' },
        { ...GOV.BALADI, role: 'ترخيص مقاولي العزل' },
        { entity: AMANA.ASIR.entity, url: AMANA.ASIR.url, role: 'اشتراطات أمانة عسير' },
    ],
    expertReviewer: EXPERTS.ALJUND,
    expertCitations: [
        { expert: EXPERTS.ALJUND.name, quote: 'عزل خميس: Closed-Cell فقط. أمطار+ضباب = Open-Cell كارثة. عزل مزدوج حراري+مائي.', source: 'موسوعة أخطاء — عزل جبلي' },
    ],
    saudiRegulations: [REGULATIONS.SBC_601],
    verificationBadges: [{ badge: '✔️ عزل مرخص SBC', authority: 'بلدي + كفاءة طاقة', icon: 'shield-check' }],
    equipment: [
        { name: 'Closed-Cell PU Foam', use: 'R-6.5/inch — عزل حراري+مائي مزدوج' },
        { name: 'Vapor Barrier', use: 'يمنع تكثّف بيني — 60-85%' },
        { name: 'جهاز رش ضغط عالي', use: 'تطبيق متساوي — سماكة دقيقة' },
    ],
    hiddenObjections: [
        { fear: 'Open-Cell أرخص.', solution: 'يمتص الماء = كارثة بخميس. Closed-Cell أغلى لكن يحمي.' },
        { fear: 'مثل الباحة.', solution: 'متشابه — نفس الفيزياء الجبلية. نفس الحل.' },
    ],
    counterNarratives: [
        { myth: 'أي فوم يكفي بخميس.', truth: 'Open-Cell = كارثة. Closed-Cell فقط.' },
        { myth: 'عزل حراري يكفي.', truth: 'أمطار + ضباب = عزل مائي أيضاً. مزدوج.' },
    ],
    relatedServices: [
        { slug: 'roof-insulation', context: 'عزل أسطح', priority: 1 },
        { slug: 'thermal-insulation', context: 'عزل حراري', priority: 2 },
        { slug: 'water-insulation', context: 'عزل مائي', priority: 3 },
        { slug: 'tank-insulation', context: 'عزل خزانات', priority: 4 },
        { slug: 'water-leak-detection', context: 'تسرب مياه', priority: 5 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 6 },
        { slug: 'cleaning', context: 'تنظيف', priority: 7 },
    ],
};
