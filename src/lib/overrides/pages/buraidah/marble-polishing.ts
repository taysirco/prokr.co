import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'جلي رخام ببريدة — CaCO₃ 600ppm بقع كلس+Nafud SiO₂ خدش+ΔT — Descaler+Diamond! (2026)',
        description: 'جلي رخام بريدة. CaCO₃ 600ppm بقع كلس على رخام! Nafud SiO₂ خدش. ΔT 45°م. Descaler+Diamond Pad+RO.',
        h1: 'جلي رخام ببريدة — أعلى كلس+Nafud خدش!',
        keywords: ['جلي رخام بريدة', 'تلميع رخام ببريدة', 'شركة جلي رخام بريدة'],
    },
    content: {
        introduction: 'رخام بريدة = كلس يبقّع ورمل يخدش! CaCO₃ 600ppm بقع كلس: أعلى كلس بالمملكة = كل نقطة ماء تترك بقعة بيضاء على الرخام. Descaler متخصص للرخام (pH neutral) + RO في الشطف. Nafud SiO₂ خدش: رمل النفود 10-50 μm يمشي عليه ← يخدش الرخام من الداخل. Diamond Pad تجليد + Pre-Rinse يومي. ΔT 45°م: رخام يتمدد/ينكمش = مفاصل تتلف. سيليكون مرن. 10-20% = لا عفن تحت الرخام! ميزة — خميس: عفن تحت البلاط = أصعب. نخيل 8M: صمغ تمور على رخام خارجي = لزج. Chemical Remover. مقارنة: خميس = رطوبة تحت+عفن. بريدة = كلس+خدش = أبسط لكن أعلى كلس.',
        shortAnswer: 'على عكس [الجلي بماء صنبور وبدون Pre-Rinse]، يعتمد بروتوكولنا في خدمة [جلي الرخام] بمدينة [بريدة] على [Descaler pH neutral+Diamond Pad+RO+Pre-Rinse]. ففي ظل [CaCO₃ 600ppm+Nafud خدش+ΔT 45°م+لا عفن]، تتفاقم ظاهرة [بقع كلس+خدش ناعم+تلف مفاصل]. لذا؛ يتدخل فنيونا عبر [Descaler ← Diamond ← RO ← سيليكون].',
        heroSubtitle: 'CaCO₃ 600ppm بقع + Nafud خدش — Diamond+RO! لا عفن!',
    },
    pricing: [
        { type: 'جلي رخام (م²)', unit: 'م²', minPrice: 15, maxPrice: 35, time: '1-3 أيام' },
        { type: 'جلي + Descaler كلس', unit: 'م²', minPrice: 20, maxPrice: 45, time: '1-3 أيام' },
        { type: 'تلميع Crystallization', unit: 'م²', minPrice: 10, maxPrice: 25, time: '1 يوم' },
        { type: 'صيانة سنوية', unit: 'خدمة', minPrice: 300, maxPrice: 620, time: '2 زيارة' },
    ],
    faq: [
        { question: 'ليش رخام بريدة يبقّع أسرع؟', answer: 'CaCO₃ 600ppm أعلى كلس. كل نقطة = بقعة. Descaler+RO.' },
        { question: 'هل Nafud يخدش الرخام ببريدة؟', answer: 'Nafud 10-50 μm يُمشى عليه = خدش ناعم تراكمي. Diamond Pad يُجدد.' },
        { question: 'كم تكلفة جلي رخام ببريدة مقارنة بخميس؟', answer: 'أرخص 15-20% — لا عفن تحت الرخام = أبسط. خميس: رطوبة تحت.' },
        { question: 'هل الرخام يتعفّن تحته ببريدة؟', answer: 'لا! 10-20% = لا عفن. ميزة كبيرة. خميس: عفن أسود تحت.' },
        { question: 'كم مرة جلي رخام ببريدة؟', answer: 'سنوياً جلي. Descaler كل 3 أشهر. Pre-Rinse يومي (Nafud).' },
    ],
    expertTips: [
        'Descaler pH neutral — CaCO₃ 600ppm.',
        'Diamond Pad — Nafud خدش تجديد.',
        'RO Rinse — لا كلس جديد.',
        'Pre-Rinse يومي — Nafud قبل المسح.',
        'لا عفن تحت! — 10-20% ميزة.',
    ],
    warnings: [
        'CaCO₃ 600ppm × شهر = بقع كلس صلبة — Descaler إلزامي.',
        'Nafud × سنة = رخام باهت — Diamond Pad يُجدد.',
        'Descaler حمضي قوي = يتلف رخام — pH neutral للرخام فقط.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص شركات التنظيف' },
        { entity: AMANA.QASSIM.entity, url: AMANA.QASSIM.url, role: 'اشتراطات أمانة القصيم' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALMISNID.name, quote: 'رخام بريدة: 600ppm أعلى كلس+Nafud خدش. Descaler+Diamond. لا عفن.', source: 'جغرافيا المناخ — رخام القصيم' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ جلي رخام مرخص', authority: 'بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'Descaler pH neutral', use: 'CaCO₃ 600ppm — آمن للرخام' },
        { name: 'Diamond Pad', use: 'يُجدد Nafud خدش' },
        { name: 'RO Water', use: 'شطف بدون كلس جديد' },
    ],
    commonConcerns: [
        { concern: 'Descaler يتلف.', solution: 'pH neutral للرخام. ليس حمض قوي.' },
        { concern: 'مثل خميس.', solution: 'لا عفن تحت = أبسط 20%.' },
    ],
    consumerEducation: [
        { myth: 'ماء وصابون.', truth: '600ppm = بقع. Descaler+RO.' },
        { myth: 'سنوياً يكفي.', truth: 'Nafud+كلس = ربع سنوي Descaler.' },
    ],
    relatedServices: [
        { slug: 'cleaning', context: 'تنظيف', priority: 1 },
        { slug: 'glass-facades-cleaning', context: 'واجهات', priority: 2 },
        { slug: 'carpet-cleaning', context: 'سجاد', priority: 3 },
        { slug: 'steam-cleaning', context: 'بخار', priority: 4 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 5 },
        { slug: 'water-leak-detection', context: 'تسرب', priority: 6 },
        { slug: 'pest-control', context: 'حشرات', priority: 7 },
    ],
};
