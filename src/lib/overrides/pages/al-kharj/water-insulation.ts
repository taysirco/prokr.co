import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'عزل مائي بالخرج — CaCO₃ رطوبة أرضية+ΔT 48°م إجهاد+SiO₂ — Bitumen+Membrane! (2026)',
        description: 'عزل مائي الخرج. CaCO₃ رطوبة أرضية من آبار! ΔT 48°م إجهاد. SiO₂ تآكل. Bitumen أساسات+Membrane. SBC 602.',
        h1: 'عزل مائي بالخرج — رطوبة أرضية CaCO₃!',
        keywords: ['عزل مائي الخرج', 'عزل مائي بالخرج', 'شركة عزل مائي الخرج'],
    },
    content: {
        introduction: 'عزل مائي بالخرج = أرضي أولاً! CaCO₃ رطوبة أرضية: آبار جوفية ترتفع تحت الأساسات ← رطوبة CaCO₃ تخترق الخرسانة ← بقع كلس على الجدران السفلية + تآكل حديد التسليح. Bitumen Modified أساسات + Membrane فوق اللبشة. ΔT 48°م إجهاد: عزل مائي خارجي يتمدد/ينكمش ← يتلف بسرعة. مرن = SBS Modified Bitumen. SiO₂ تآكل: رمل يآكل أي عزل مكشوف. تغطية حماية فوق العزل. لا أمطار سطحية! = لا حاجة لعزل مائي فوق السطح — أرضي فقط! ميزة كبيرة = أرخص 50% من خميس التي تحتاج سطحي+أرضي. مقارنة: خميس = أمطار+تكثّف = عزل سطحي+أرضي = مزدوج. الخرج = أرضي فقط = أبسط.',
        shortAnswer: 'على عكس [العزل المائي السطحي غير المطلوب بالخرج]، يعتمد بروتوكولنا في خدمة [العزل المائي] بمدينة [الخرج] على [Bitumen أساسات+Membrane+حماية SiO₂+بدون سطحي]. ففي ظل [CaCO₃ رطوبة أرضية+ΔT 48°م+SiO₂+لا أمطار]، تتفاقم ظاهرة [رطوبة تصاعدية+إجهاد+تآكل]. لذا؛ يتدخل فنيونا عبر [أرضي ← Bitumen ← Membrane ← حماية] = وفر 50%.',
        heroSubtitle: 'CaCO₃ رطوبة أرضية + ΔT إجهاد — أرضي فقط! أرخص 50%!',
    },
    pricing: [
        { type: 'أساسات (Bitumen)', unit: 'م²', minPrice: 25, maxPrice: 55, time: '1-3 أيام' },
        { type: 'Membrane فوق اللبشة', unit: 'م²', minPrice: 30, maxPrice: 65, time: '1-2 يوم' },
        { type: 'حمامات (Membrane)', unit: 'حمام', minPrice: 400, maxPrice: 800, time: '1-2 يوم' },
        { type: 'فحص+إصلاح', unit: 'خدمة', minPrice: 200, maxPrice: 420, time: '0.5-1 يوم' },
    ],
    faq: [
        { question: 'ليش الخرج تحتاج عزل مائي أرضي وليس سطحي؟', answer: 'CaCO₃ رطوبة أرضية من آبار. لا أمطار سطحية = أرضي فقط = أرخص 50%.' },
        { question: 'كيف رطوبة أرضية تتلف المبنى بالخرج؟', answer: 'CaCO₃ يخترق الخرسانة ← بقع كلس+تآكل حديد التسليح. Bitumen يمنع.' },
        { question: 'كم تكلفة عزل مائي بالخرج مقارنة بخميس؟', answer: 'أرخص 50%! أرضي فقط. خميس: سطحي+أرضي = مزدوج.' },
        { question: 'هل ΔT يأثر على العزل المائي بالخرج؟', answer: 'ΔT 48°م يُتعب العزل المكشوف. SBS Modified = مرن يتحمل.' },
        { question: 'هل SBC 602 يفرض عزل مائي بالخرج؟', answer: 'SBC 602 يفرض عزل أساسات في مناطق الآبار. CaCO₃ = إلزامي.' },
    ],
    expertTips: [
        'أرضي فقط — لا سطحي! أرخص 50%.',
        'Bitumen Modified — CaCO₃ مقاوم.',
        'SBS مرن — ΔT 48°م تمدد/انكماش.',
        'حماية فوق العزل — SiO₂ تآكل.',
        'SBC 602 — إلزامي أساسات.',
    ],
    warnings: [
        'CaCO₃ أرضية بدون عزل = تآكل حديد تسليح — YMYL هيكلي.',
        'عزل سطحي بالخرج = مال مرمي — لا أمطار = لا حاجة.',
        'ΔT بدون SBS = عزل يتشقق — تسرب خلال 3-5 سنوات.',
    ],
    trustAnchors: [
        { ...GOV.MOENERGY, role: 'كود البناء SBC 602' },
        { ...GOV.BALADI, role: 'ترخيص مقاولي العزل' },
        { entity: AMANA.RIYADH.entity, url: AMANA.RIYADH.url, role: 'اشتراطات أمانة الرياض' },
    ],
    expertReviewer: EXPERTS.ALJUND,
    expertCitations: [
        { expert: EXPERTS.ALJUND.name, quote: 'مائي الخرج: أرضي فقط. CaCO₃ آبار. لا سطحي. SBC 602. أرخص 50%.', source: 'موسوعة أخطاء — عزل صحراوي' },
    ],
    saudiRegulations: [REGULATIONS.SBC_602],
    verificationBadges: [{ badge: '✔️ عزل مائي مرخص', authority: 'بلدي + SBC', icon: 'shield-check' }],
    equipment: [
        { name: 'SBS Modified Bitumen', use: 'أساسات — CaCO₃+مرن ΔT' },
        { name: 'HDPE Membrane', use: 'فوق اللبشة — حاجز رطوبة' },
        { name: 'حماية ميكانيكية', use: 'فوق العزل — SiO₂ تآكل' },
    ],
    hiddenObjections: [
        { fear: 'يحتاج سطحي.', solution: 'لا أمطار = أرضي فقط = 50% أرخص.' },
        { fear: 'مثل خميس.', solution: 'عكس! أرضي فقط مقابل مزدوج.' },
    ],
    consumerEducation: [
        { myth: 'عزل سطحي.', truth: 'لا أمطار بالخرج. أرضي فقط.' },
        { myth: 'لا يحتاج.', truth: 'CaCO₃ أرضية = تآكل حديد. SBC 602.' },
    ],
    relatedServices: [
        { slug: 'foam-insulation', context: 'فوم', priority: 1 },
        { slug: 'thermal-insulation', context: 'حراري', priority: 2 },
        { slug: 'roof-insulation', context: 'أسطح', priority: 3 },
        { slug: 'tank-insulation', context: 'خزان', priority: 4 },
        { slug: 'water-leak-detection', context: 'تسرب', priority: 5 },
        { slug: 'bathroom-leak-detection', context: 'حمام', priority: 6 },
        { slug: 'cleaning', context: 'تنظيف', priority: 7 },
    ],
};
