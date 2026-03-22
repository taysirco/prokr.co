import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../gov-references';

export const override: PageOverride = {
    meta: {
        title: 'كشف تسربات حمام ببريدة — CaCO₃ 600ppm يسد+يتلف Seal+ΔT — فحص Descaler! (2026)',
        description: 'كشف تسربات حمام بريدة. CaCO₃ 600ppm أعلى كلس يسد ويتلف Seal! ΔT 45°م إجهاد. فحص ضغط+Descaler+حراري.',
        h1: 'كشف تسربات حمام ببريدة — أعلى كلس يسد!',
        keywords: ['كشف تسربات حمام بريدة', 'كشف تسرب حمام ببريدة', 'شركة كشف تسربات حمام بريدة'],
    },
    content: {
        introduction: 'حمام بريدة = أعلى كلس يُتلف! CaCO₃ 600ppm يسد المفاصل: أعلى تركيز كلس بالمملكة ← يتراكم عند المفاصل أسرع 2× ← يُضيّق ← ضغط يرتفع ← أضعف نقطة تتسرب. Descaler وقائي كل 3 أشهر إلزامي. CaCO₃ يتلف Seal: كلس يتراكم على O-rings والحشيات المطاطية ← يُصلّبها ← تتشقق ← تسرب بطيء لا يُلاحظ. فحص Seal سنوي. ΔT 45°م: أنابيب مياه ساخنة في جدار خارجي = تمدد/انكماش يومي ← إجهاد مفاصل. SiO₂ Nafud: لا يأثر مباشرة على الأنابيب الداخلية. 10-20% = لا تكثّف! بقع CaCO₃ بيضاء = دليل تسرب واضح. مقارنة: خميس = 3 مصادر مُضللة. بريدة = مصدر واحد+أعلى كلس.',
        shortAnswer: 'على عكس [الفحص البصري بدون Descaler]، يعتمد بروتوكولنا في خدمة [كشف تسربات الحمام] بمدينة [بريدة] على [فحص ضغط+Descaler وقائي+حراري+فحص Seal]. ففي ظل [CaCO₃ 600ppm يسد+يتلف Seal+ΔT إجهاد+لا تكثّف]، تتفاقم ظاهرة [انسداد+تصلّب Seal+إجهاد حراري]. لذا؛ يتدخل فنيونا عبر [ضغط ← Descaler ← حراري ← Seal].',
        heroSubtitle: 'CaCO₃ 600ppm يسد+يتلف Seal — لا تكثّف = دليل واضح!',
    },
    pricing: [
        { type: 'فحص ضغط+حراري', unit: 'حمام', minPrice: 120, maxPrice: 260, time: '1-2 ساعة' },
        { type: 'فحص + Descaler وقائي', unit: 'حمام', minPrice: 180, maxPrice: 380, time: '2-3 ساعات' },
        { type: 'فحص شامل (كل الحمامات)', unit: 'بيت', minPrice: 300, maxPrice: 620, time: '3-5 ساعات' },
        { type: 'عقد سنوي (2 فحص+Descaler)', unit: 'سنة', minPrice: 400, maxPrice: 800, time: '2 زيارة' },
    ],
    faq: [
        { question: 'ليش تسربات حمام بريدة أكثر؟', answer: 'CaCO₃ 600ppm أعلى بالمملكة. يسد+يُصلّب Seal أسرع 2×. Descaler وقائي.' },
        { question: 'كيف CaCO₃ يتلف Seal الحمام ببريدة؟', answer: 'كلس يتراكم على O-ring ← يُصلّبها ← تتشقق ← تسرب بطيء. فحص سنوي.' },
        { question: 'كم تكلفة فحص حمام ببريدة مقارنة بخميس؟', answer: 'أرخص 20% — مصدر واحد (لا تكثّف لا مطر). أبسط تشخيصاً.' },
        { question: 'هل التكثّف يخلط مع التسرب ببريدة؟', answer: 'لا! 10-20% = لا تكثّف. بقع CaCO₃ بيضاء = دليل تسرب واضح.' },
        { question: 'كم مرة Descaler وقائي ببريدة؟', answer: 'كل 3 أشهر — 600ppm = أسرع تراكم. الرياض: كل 6 أشهر.' },
    ],
    expertTips: [
        'Descaler كل 3 أشهر — 600ppm أعلى.',
        'فحص Seal سنوي — CaCO₃ يُصلّب.',
        'بقع بيضاء = دليل — واضح.',
        'لا تكثّف! — مصدر واحد = أبسط.',
        'أنابيب خارجية = فحص ΔT.',
    ],
    warnings: [
        'CaCO₃ 600ppm × 6 أشهر = Seal تالف ← تسرب بطيء — 3000+ إصلاح.',
        'انسداد CaCO₃ + ضغط مرتفع = مفصل ينكسر — تسرب مفاجئ YMYL.',
        'تسرب بطيء + 6 أشهر = عفن تحت البلاط — رغم جفاف السطح.',
    ],
    trustAnchors: [
        { ...GOV.NWC, role: 'تقرير تسرب — تعديل فاتورة' },
        { ...GOV.BALADI, role: 'ترخيص فنيي السباكة' },
        { entity: AMANA.QASSIM.entity, url: AMANA.QASSIM.url, role: 'اشتراطات أمانة القصيم' },
    ],
    expertReviewer: EXPERTS.ALJUND,
    expertCitations: [
        { expert: EXPERTS.ALJUND.name, quote: 'حمام بريدة: 600ppm يسد+يُصلّب Seal. Descaler كل 3 أشهر. لا تكثّف.', source: 'موسوعة أخطاء — سباكة القصيم' },
    ],
    saudiRegulations: [REGULATIONS.NWC_REPORT],
    verificationBadges: [{ badge: '✔️ كشف تسربات مرخص', authority: 'بلدي + NWC', icon: 'shield-check' }],
    equipment: [
        { name: 'فاحص ضغط', use: 'يكشف تسرب CaCO₃ داخلي' },
        { name: 'Chemical Descaler', use: 'يُذيب CaCO₃ 600ppm — وقائي' },
        { name: 'كاميرا حرارية', use: 'يُحدد موقع التسرب' },
    ],
    commonConcerns: [
        { concern: 'بصري يكفي.', solution: '600ppm داخلي = فحص ضغط.' },
        { concern: 'مثل عنيزة.', solution: 'نفس 600ppm لكن بريدة: فلل أكبر.' },
    ],
    consumerEducation: [
        { myth: 'فحص بصري.', truth: 'CaCO₃ داخلي = ضغط+حراري.' },
        { myth: 'Descaler سنوي.', truth: '600ppm = كل 3 أشهر.' },
    ],
    relatedServices: [
        { slug: 'water-leak-detection', context: 'تسرب مياه', priority: 1 },
        { slug: 'tank-leak-detection', context: 'خزان', priority: 2 },
        { slug: 'sewage-unblocking', context: 'تسليك', priority: 3 },
        { slug: 'water-insulation', context: 'عزل مائي', priority: 4 },
        { slug: 'cleaning', context: 'تنظيف', priority: 5 },
        { slug: 'tanks-cleaning', context: 'خزانات', priority: 6 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 7 },
    ],
};
