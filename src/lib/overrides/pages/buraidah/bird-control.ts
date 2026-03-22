import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../gov-references';

export const override: PageOverride = {
    meta: {
        title: 'مكافحة طيور ببريدة — حمام نخيل 8M+فضلات تمور+Nafud — شبك نخيل خاص! (2026)',
        description: 'مكافحة طيور بريدة. حمام نخيل 8M عدد ضخم! فضلات تمور حمضية. Nafud يآكل شبك. شبك نخيل مقاوم+طرد.',
        h1: 'مكافحة طيور ببريدة — حمام نخيل 8M!',
        keywords: ['مكافحة طيور بريدة', 'مكافحة حمام ببريدة', 'شركة مكافحة طيور بريدة'],
    },
    content: {
        introduction: 'طيور بريدة = عدد ضخم بسبب النخيل! حمام نخيل 8M: القصيم = 8M نخلة = تمور+حشرات = طعام وفير = حمام بأعداد 5-10× من المدن بدون نخيل. يُعشّش في المباني القريبة. مشكلة ضخمة. فضلات تمور حمضية: الحمام يتغذى على التمور = فضلات أكثر حمضية (pH 3-4) = تآكل أسرع للطلاء والأسطح المعدنية. تنظيف فوري 24h. Nafud يآكل شبك: رمل النفود ناعم يآكل الشبك المعدني العادي = يتلف أسرع. شبك ستانلس 316 أو بلاستيكي UV. CaCO₃ 600ppm: فضلات+كلس = طبقة مزدوجة صلبة على الأسطح. Descaler+حمض. 10-20% = فضلات تجف فوراً = أصعب في الإزالة. مقارنة: الرياض = حمام مدني عادي. بريدة = حمام نخيل 5-10× = أعقد.',
        shortAnswer: 'على عكس [الشبك العادي الذي يتلف بالنفود]، يعتمد بروتوكولنا في خدمة [مكافحة الطيور] بمدينة [بريدة] على [شبك 316+طرد+تنظيف فوري+Descaler]. ففي ظل [حمام نخيل 5-10×+فضلات حمضية+Nafud يآكل+CaCO₃ طبقة]، تتفاقم ظاهرة [أعداد ضخمة+تآكل+تلف شبك]. لذا؛ يتدخل فريقنا عبر [شبك 316 ← طرد ← تنظيف ← حماية].',
        heroSubtitle: 'حمام نخيل 5-10× + فضلات حمضية + Nafud — شبك 316!',
    },
    pricing: [
        { type: 'شبك 316 (م²)', unit: 'م²', minPrice: 25, maxPrice: 55, time: '1-2 يوم' },
        { type: 'نظام طرد (أشواك+صوت)', unit: 'مبنى', minPrice: 300, maxPrice: 620, time: '1 يوم' },
        { type: 'تنظيف فضلات', unit: 'زيارة', minPrice: 150, maxPrice: 320, time: '2-4 ساعات' },
        { type: 'عقد سنوي (صيانة+تنظيف)', unit: 'سنة', minPrice: 500, maxPrice: 1000, time: '4 زيارات' },
    ],
    faq: [
        { question: 'ليش حمام بريدة أكثر 5-10× من الرياض؟', answer: '8M نخلة = تمور+حشرات = طعام وفير. حمام يتكاثر. عدد ضخم.' },
        { question: 'ليش الشبك العادي يتلف ببريدة؟', answer: 'Nafud SiO₂ ناعم يآكل المعدن. شبك 316 أو بلاستيكي UV.' },
        { question: 'كم تكلفة مكافحة طيور ببريدة مقارنة بالرياض؟', answer: 'أغلى 30-40% — أعداد 5-10×+شبك 316. لكن: بدونه = ضرر أكبر.' },
        { question: 'هل فضلات حمام بريدة أخطر؟', answer: 'تمور = فضلات حمضية pH 3-4 تآكل طلاء أسرع. تنظيف 24h.' },
        { question: 'كيف أمنع حمام النخيل من العشّ ببريدة؟', answer: 'شبك 316+أشواك+صوت طرد. سد كل فتحة > 5 سم. تقليم نخيل قريب.' },
    ],
    expertTips: [
        'شبك 316 — Nafud يآكل العادي.',
        'تنظيف فضلات 24h — حمضية pH 3-4.',
        'طرد صوتي — أعداد ضخمة.',
        'سد فتحات > 5 سم — عشّ.',
        'تقليم نخيل قريب — يُقلل جذب.',
    ],
    warnings: [
        'فضلات حمضية × أسبوع = تآكل طلاء — إعادة طلاء 5000+.',
        'شبك عادي + Nafud = يتلف خلال سنة — شبك 316 إلزامي.',
        'حمام نخيل × بدون حاجز = أعداد تتضاعف سنوياً.',
    ],
    trustAnchors: [
        { ...GOV.WEQAA, role: 'مكافحة الآفات' },
        { ...GOV.BALADI, role: 'ترخيص مكافحة الطيور' },
        { entity: AMANA.QASSIM.entity, url: AMANA.QASSIM.url, role: 'اشتراطات أمانة القصيم' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALMISNID.name, quote: 'طيور بريدة: حمام نخيل 5-10×. فضلات حمضية. شبك 316.', source: 'جغرافيا المناخ — حمام نخيل القصيم' },
    ],
    saudiRegulations: [REGULATIONS.GHAD_SYSTEM],
    verificationBadges: [{ badge: '✔️ مكافحة طيور مرخصة', authority: 'بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'شبك ستانلس 316', use: 'مقاوم Nafud SiO₂ — حمام' },
        { name: 'أشواك+طرد صوتي', use: 'منع عشّ — أعداد ضخمة' },
        { name: 'Descaler+حمض', use: 'فضلات+CaCO₃ طبقة مزدوجة' },
    ],
    commonConcerns: [
        { concern: 'شبك عادي يكفي.', solution: 'Nafud يآكل. 316 يدوم.' },
        { concern: 'طرد يكفي.', solution: '8M نخلة = طعام. شبك+طرد.' },
    ],
    consumerEducation: [
        { myth: 'حمام عادي.', truth: 'نخيل 8M = أعداد 5-10×.' },
        { myth: 'فضلات عادية.', truth: 'تمور = حمضية pH 3-4.' },
    ],
    relatedServices: [
        { slug: 'pest-control', context: 'حشرات', priority: 1 },
        { slug: 'glass-facades-cleaning', context: 'واجهات', priority: 2 },
        { slug: 'cleaning', context: 'تنظيف', priority: 3 },
        { slug: 'pesticide-spraying', context: 'رش', priority: 4 },
        { slug: 'roof-insulation', context: 'أسطح', priority: 5 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 6 },
        { slug: 'marble-polishing', context: 'رخام', priority: 7 },
    ],
};
