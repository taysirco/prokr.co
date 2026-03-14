import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'عزل مائي ببريدة — لا مطر! CaCO₃ 600ppm رطوبة أرضية+ΔT مفاصل+Nafud — Closed-Cell! (2026)',
        description: 'عزل مائي بريدة. لا مطر = لا SBS سطح! CaCO₃ 600ppm رطوبة أرضية. ΔT 45°م. Closed-Cell أساسات فقط.',
        h1: 'عزل مائي ببريدة — لا مطر! Closed-Cell أساسات!',
        keywords: ['عزل مائي بريدة', 'عزل مائي ببريدة', 'شركة عزل مائي بريدة'],
    },
    content: {
        introduction: 'عزل مائي بريدة = عكس المدن الممطرة! لا مطر: لا حاجة لعزل مائي أسطح (SBS Membrane). وفر 50-60% مقارنة بخميس التي تحتاج SBS+مائي كامل. CaCO₃ 600ppm رطوبة أرضية: آبار جوفية كلسية ← رطوبة ترتفع عبر الأساسات (Capillary Rise) ← بلاط يتلف ← ملح أبيض على الجدران. Closed-Cell أساسات + DPC (Damp Proof Course). ΔT 45°م مفاصل: تمدد/انكماش يومي = مفاصل التمدد تتلف ← ماء يتسلل عبرها. سيليكون مرن + فحص. Nafud SiO₂: لا يأثر على العزل المغطى. 10-20% = لا مطر يختبر العزل! مقارنة: خميس = SBS سطح+جدران+مائي شامل. بريدة = أساسات+مفاصل فقط.',
        shortAnswer: 'على عكس [SBS الشامل الغالي بدون حاجة]، يعتمد بروتوكولنا في خدمة [العزل المائي] بمدينة [بريدة] على [Closed-Cell أساسات+DPC+سيليكون مفاصل]. ففي ظل [لا مطر+CaCO₃ رطوبة أرضية+ΔT مفاصل+10-20%]، تتفاقم ظاهرة [رطوبة أرضية+تلف مفاصل]. لذا؛ يتدخل فنيونا عبر [Closed-Cell تحت ← DPC ← سيليكون] = وفر 60%!',
        heroSubtitle: 'لا مطر = لا SBS سطح! CaCO₃ أرضية — Closed-Cell+DPC! وفر 60%!',
    },
    pricing: [
        { type: 'أساسات Closed-Cell', unit: 'م²', minPrice: 30, maxPrice: 65, time: '1-3 أيام' },
        { type: 'DPC (Damp Proof Course)', unit: 'م²', minPrice: 20, maxPrice: 45, time: '1-2 يوم' },
        { type: 'مفاصل سيليكون', unit: 'م.ط', minPrice: 10, maxPrice: 25, time: '1 يوم' },
        { type: 'فحص رطوبة + تقرير', unit: 'خدمة', minPrice: 200, maxPrice: 420, time: '1 يوم' },
    ],
    faq: [
        { question: 'هل بريدة تحتاج عزل مائي سطح؟', answer: 'لا! لا مطر = لا SBS. أساسات+مفاصل فقط. وفر 50-60%.' },
        { question: 'ليش ملح أبيض على الجدران ببريدة؟', answer: 'CaCO₃ 600ppm رطوبة أرضية ترتفع. DPC+Closed-Cell يمنع.' },
        { question: 'كم تكلفة عزل مائي ببريدة مقارنة بخميس؟', answer: 'أرخص 50-60% — أساسات فقط. خميس: SBS+جدران+شامل.' },
        { question: 'هل ΔT يأثر على العزل المائي ببريدة؟', answer: 'ΔT 45°م = مفاصل تمدد تتلف. سيليكون مرن + فحص سنوي.' },
        { question: 'ما الفرق بين DPC و SBS ببريدة؟', answer: 'DPC = أرضي فقط (Capillary Rise). SBS = أمطار (لا حاجة ببريدة).' },
    ],
    expertTips: [
        'لا SBS سطح — لا مطر!',
        'DPC أساسات — CaCO₃ Capillary.',
        'سيليكون مفاصل — ΔT تمدد.',
        'Closed-Cell تحت — لا Open-Cell.',
        'أرخص 60% من خميس.',
    ],
    warnings: [
        'بدون DPC + CaCO₃ 600ppm = رطوبة ترتفع ← ملح+تلف بلاط.',
        'SBS سطح ببريدة = هدر مال — لا مطر يختبره.',
        'ΔT × مفاصل بدون سيليكون = تسرب كلسي ← تلف عزل.',
    ],
    trustAnchors: [
        { ...GOV.SBC, role: 'كود البناء — العزل المائي' },
        { entity: AMANA.QASSIM.entity, url: AMANA.QASSIM.url, role: 'اشتراطات أمانة القصيم' },
    ],
    expertReviewer: EXPERTS.ALJUND,
    expertCitations: [
        { expert: EXPERTS.ALJUND.name, quote: 'مائي بريدة: لا مطر = لا SBS. DPC+Closed أساسات فقط. أرخص 60%.', source: 'موسوعة أخطاء — عزل مائي' },
        { expert: EXPERTS.ALMISNID.name, quote: 'لا مطر القصيم = عزل أساسات+مفاصل. ΔT مفاصل.', source: 'جغرافيا المناخ — القصيم' },
    ],
    saudiRegulations: [REGULATIONS.SBC_602],
    verificationBadges: [{ badge: '✔️ عزل مائي مطابق SBC', authority: 'كود البناء', icon: 'shield-check' }],
    equipment: [
        { name: 'Closed-Cell PU Foam', use: 'أساسات — مقاوم CaCO₃' },
        { name: 'DPC Membrane', use: 'Capillary Rise — أساسات' },
        { name: 'سيليكون مرن', use: 'مفاصل ΔT — تمدد/انكماش' },
    ],
    commonConcerns: [
        { concern: 'SBS لازم.', solution: 'لا مطر = لا SBS! DPC يكفي.' },
        { concern: 'مثل خميس.', solution: 'عكس! أساسات فقط. وفر 60%.' },
    ],
    consumerEducation: [
        { myth: 'SBS ضروري.', truth: 'لا مطر = لا SBS. DPC+Closed.' },
        { myth: 'عزل شامل.', truth: 'أساسات+مفاصل فقط. أرخص 60%.' },
    ],
    relatedServices: [
        { slug: 'roof-insulation', context: 'أسطح', priority: 1 },
        { slug: 'thermal-insulation', context: 'حراري', priority: 2 },
        { slug: 'foam-insulation', context: 'فوم', priority: 3 },
        { slug: 'tank-insulation', context: 'خزان', priority: 4 },
        { slug: 'water-leak-detection', context: 'تسرب', priority: 5 },
        { slug: 'bathroom-leak-detection', context: 'حمام', priority: 6 },
        { slug: 'cleaning', context: 'تنظيف', priority: 7 },
    ],
};
