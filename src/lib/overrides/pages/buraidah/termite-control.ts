import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'مكافحة نمل أبيض ببريدة — ΔT 45°م تكاثر+CaCO₃ أساسات+نخيل 8M سيللوز — Termidor! (2026)',
        description: 'مكافحة نمل أبيض بريدة. ΔT 45°م تكاثر سريع! CaCO₃ 600ppm أساسات. نخيل 8M سيللوز. Termidor+حقن+SBC.',
        h1: 'مكافحة نمل أبيض ببريدة — ΔT تكاثر+نخيل 8M!',
        keywords: ['مكافحة نمل أبيض بريدة', 'مكافحة أرضة ببريدة', 'شركة مكافحة نمل أبيض بريدة'],
    },
    content: {
        introduction: 'نمل أبيض بريدة = خطير بسبب الحرارة والنخيل! ΔT 45°م تكاثر: صيف 48°م = نمل أبيض ينشط ويتكاثر أسرع 2× من المدن المعتدلة. مستعمرات أكبر. Termidor SC (Fipronil) — يقتل المستعمرة كاملة. CaCO₃ 600ppm أساسات: رطوبة كلسية حول الأساسات = بيئة رطبة تجذب النمل الأبيض. حقن أساسات + معالجة رطوبة. نخيل 8M سيللوز: 8M نخلة = جذوع+سعف+جذور = أكبر مصدر سيللوز بالمملكة = طعام وفير = مستعمرات ضخمة. معالجة حول النخيل. Nafud SiO₂: لا يأثر مباشرة على النمل. 10-20% = تربة جافة لكن رطوبة أساسات كلسية = فخ! SBC يشترط معالجة قبل البناء.',
        shortAnswer: 'على عكس [الرش السطحي الذي لا يصل المستعمرة]، يعتمد بروتوكولنا في خدمة [مكافحة النمل الأبيض] بمدينة [بريدة] على [Termidor SC+حقن أساسات+معالجة نخيل+SBC]. ففي ظل [ΔT تكاثر 2×+CaCO₃ رطوبة أساسات+نخيل 8M سيللوز]، تتفاقم ظاهرة [مستعمرات ضخمة+أساسات مهددة]. لذا؛ يتدخل فنيونا عبر [Termidor ← حقن ← معالجة نخيل] — SBC!',
        heroSubtitle: 'ΔT تكاثر 2× + نخيل 8M سيللوز — Termidor+حقن! SBC!',
    },
    pricing: [
        { type: 'فحص + شقة', unit: 'شقة', minPrice: 200, maxPrice: 420, time: '2-3h' },
        { type: 'فيلا (حقن أساسات)', unit: 'فيلا', minPrice: 500, maxPrice: 1000, time: '1-2 يوم' },
        { type: 'معالجة قبل بناء (SBC)', unit: 'م²', minPrice: 15, maxPrice: 35, time: '1-3 أيام' },
        { type: 'ضمان 5 سنوات', unit: 'باقة', minPrice: 800, maxPrice: 1600, time: 'فحص سنوي' },
    ],
    faq: [
        { question: 'ليش نمل أبيض بريدة أخطر؟', answer: 'ΔT 45°م = تكاثر 2×. نخيل 8M = سيللوز وفير. مستعمرات ضخمة.' },
        { question: 'كيف CaCO₃ يجذب النمل الأبيض ببريدة؟', answer: '600ppm رطوبة كلسية حول أساسات = بيئة رطبة تجذب. حقن+معالجة.' },
        { question: 'كم تكلفة مكافحة نمل أبيض ببريدة مقارنة بخميس؟', answer: 'متقاربة. لكن: نخيل 8M = نطاق أوسع. خميس: رطوبة+عفن خشب.' },
        { question: 'هل SBC يشترط معالجة نمل أبيض ببريدة؟', answer: 'نعم — SBC يشترط معالجة قبل البناء. غرامة بدونها.' },
        { question: 'كم يدوم Termidor ببريدة؟', answer: '5-8 سنوات. ΔT+جفاف = يدوم أطول (لا مطر يغسله). فحص سنوي.' },
    ],
    expertTips: [
        'Termidor SC — يقتل المستعمرة كاملة.',
        'حقن أساسات — CaCO₃ رطوبة.',
        'معالجة نخيل — 8M سيللوز.',
        'SBC قبل بناء — إلزامي.',
        'لا مطر = يدوم أطول — ميزة.',
    ],
    warnings: [
        'ΔT × صيف = مستعمرة تتضاعف ← هيكل مبنى يتلف — YMYL.',
        'نخيل 8M بدون معالجة = سيللوز وفير ← ينتقل للمبنى.',
        'بدون حقن أساسات = CaCO₃ رطوبة تجذب ← اختراق.',
    ],
    trustAnchors: [
        { ...GOV.SBC, role: 'كود البناء — معالجة قبل البناء' },
        { ...GOV.BALADI, role: 'ترخيص شركات المكافحة' },
        { ...GOV.SCE, role: 'فاحص مباني — تلف هيكلي' },
        { entity: AMANA.QASSIM.entity, url: AMANA.QASSIM.url, role: 'اشتراطات أمانة القصيم' },
    ],
    expertReviewer: EXPERTS.ALJUND,
    expertCitations: [
        { expert: EXPERTS.ALJUND.name, quote: 'نمل أبيض بريدة: ΔT+نخيل 8M = ضخم. Termidor+حقن أساسات. SBC.', source: 'موسوعة أخطاء — نمل أبيض القصيم' },
    ],
    saudiRegulations: [REGULATIONS.SBC_601, REGULATIONS.GHAD_SYSTEM],
    verificationBadges: [{ badge: '✔️ مكافحة نمل أبيض مرخصة', authority: 'بلدي + SBC + SFDA', icon: 'shield-check' }],
    equipment: [
        { name: 'Termidor SC (Fipronil)', use: 'يقتل مستعمرة كاملة — 5-8 سنوات' },
        { name: 'حقن أساسات', use: 'CaCO₃ رطوبة — حاجز' },
        { name: 'كاشف حرارة/صوت', use: 'يكشف نشاط داخل الخشب' },
    ],
    hiddenObjections: [
        { fear: 'رش سطحي يكفي.', solution: 'المستعمرة تحت الأرض. Termidor+حقن.' },
        { fear: 'مثل خميس.', solution: 'نخيل 8M = سيللوز أكثر. نطاق أوسع.' },
    ],
    counterNarratives: [
        { myth: 'رش عام.', truth: 'مستعمرة = Termidor. سطحي لا يصل.' },
        { myth: 'مرة عمر.', truth: 'ΔT+نخيل = فحص سنوي. مستعمرات جديدة.' },
    ],
    relatedServices: [
        { slug: 'pest-control', context: 'حشرات', priority: 1 },
        { slug: 'pesticide-spraying', context: 'رش مبيدات', priority: 2 },
        { slug: 'water-insulation', context: 'مائي', priority: 3 },
        { slug: 'roof-insulation', context: 'أسطح', priority: 4 },
        { slug: 'water-leak-detection', context: 'تسرب', priority: 5 },
        { slug: 'cleaning', context: 'تنظيف', priority: 6 },
        { slug: 'furniture-storage', context: 'تخزين', priority: 7 },
    ],
};
