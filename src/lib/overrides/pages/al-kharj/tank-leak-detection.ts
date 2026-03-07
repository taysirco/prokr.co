import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'كشف تسرب خزان بالخرج — CaCO₃ تآكل Epoxy+SiO₂ خدش+ΔT — فحص سُمك! (2026)',
        description: 'كشف تسرب خزان الخرج. CaCO₃ 450ppm يآكل العزل! SiO₂ خدش. ΔT 48°م إجهاد. فحص سُمك+ضغط+حراري.',
        h1: 'كشف تسرب خزان بالخرج — CaCO₃ يآكل العزل!',
        keywords: ['كشف تسرب خزان الخرج', 'كشف تسرب خزان بالخرج', 'شركة كشف تسرب خزان الخرج'],
    },
    content: {
        introduction: 'تسرب خزان الخرج له أسباب فريدة! CaCO₃ 450ppm يآكل العزل: كلس يتراكم ← يتفاعل مع Epoxy ← يُضعفه ← تسرب بطيء لا يُلاحظ. فحص سُمك عزل سنوي يكشف مبكراً. SiO₂ خدش: رمل ناعم يخدش العزل الداخلي من الماء ← نقاط ضعف = تسرب. فحص بصري. ΔT 48°م إجهاد: تمدد/انكماش يومي = إجهاد عند مفاصل الخزان ← تشققات. فحص مفاصل. 15-25% = لا تكثّف خارجي! التسرب واضح بصرياً — لا خلط مع تكثّف. ميزة تشخيصية كبيرة. CaCO₃ تسرب: لو تسرب = بقع كلس بيضاء واضحة = دليل بصري. مقارنة: خميس = 3 مصادر (تسرب+مطر+تكثّف). الخرج = مصدر واحد = أبسط تشخيصاً.',
        shortAnswer: 'على عكس [الفحص البصري فقط بدون سُمك]، يعتمد بروتوكولنا في خدمة [كشف تسرب الخزان] بمدينة [الخرج] على [فحص سُمك+ضغط+حراري+بصري CaCO₃]. ففي ظل [CaCO₃ تآكل+SiO₂ خدش+ΔT إجهاد+لا تكثّف]، تتفاقم ظاهرة [تآكل عزل+نقاط ضعف+تشققات]. لذا؛ يتدخل فنيونا عبر [سُمك ← ضغط ← حراري ← بصري CaCO₃].',
        heroSubtitle: 'CaCO₃ يآكل + SiO₂ خدش + ΔT إجهاد — لا تكثّف = أبسط!',
    },
    pricing: [
        { type: 'فحص بصري+ضغط', unit: 'خزان', minPrice: 120, maxPrice: 260, time: '1-2 ساعة' },
        { type: 'فحص سُمك عزل', unit: 'خزان', minPrice: 200, maxPrice: 420, time: '2-3 ساعات' },
        { type: 'فحص شامل + كاميرا', unit: 'خزان', minPrice: 300, maxPrice: 620, time: '3-4 ساعات' },
        { type: 'فحص سنوي (عقد)', unit: 'سنة', minPrice: 350, maxPrice: 700, time: '2 فحص/سنة' },
    ],
    faq: [
        { question: 'كيف أعرف إن خزان الخرج يتسرب؟', answer: 'بقع CaCO₃ بيضاء خارج الخزان = دليل بصري. + فاتورة ماء مرتفعة.' },
        { question: 'ليش فحص سُمك بالخرج؟', answer: 'CaCO₃ يآكل Epoxy ببطء. فحص سُمك يكشف قبل التسرب.' },
        { question: 'كم تكلفة فحص خزان بالخرج مقارنة بخميس؟', answer: 'أرخص 20% — مصدر واحد (لا تكثّف لا مطر). خميس: 3 مصادر مُضللة.' },
        { question: 'هل التكثّف يخلط مع التسرب بالخرج؟', answer: 'لا! 15-25% = لا تكثّف. بقع CaCO₃ = دليل تسرب واضح.' },
        { question: 'كم يعيش عزل الخزان بالخرج؟', answer: '7-10 سنوات مع Descaler سنوي. بدونه: 4-5 سنوات (CaCO₃ يآكل).' },
    ],
    expertTips: [
        'فحص سُمك سنوي — CaCO₃ تآكل.',
        'بقع بيضاء = دليل تسرب — واضح.',
        'فحص مفاصل — ΔT 48°م.',
        'لا تكثّف! — مصدر واحد = أبسط.',
        'Descaler وقائي — يُطيل عمر العزل.',
    ],
    warnings: [
        'CaCO₃ × 5 سنوات بدون فحص = تسرب خفي — 5000+ إصلاح.',
        'SiO₂ خدش × سنوات = نقاط ضعف — تسرب مفاجئ.',
        'ΔT × 10 سنوات = مفاصل تتلف — تسرب كبير.',
    ],
    trustAnchors: [
        { ...GOV.NWC, role: 'تقرير خزان معتمد' },
        { ...GOV.BALADI, role: 'ترخيص الفحص' },
        { entity: AMANA.RIYADH.entity, url: AMANA.RIYADH.url, role: 'اشتراطات أمانة الرياض' },
    ],
    expertReviewer: EXPERTS.ALJUND,
    expertCitations: [
        { expert: EXPERTS.ALJUND.name, quote: 'خزان الخرج: CaCO₃ يآكل Epoxy ببطء. فحص سُمك يكشف. بقع بيضاء = دليل.', source: 'موسوعة أخطاء — خزانات' },
    ],
    saudiRegulations: [REGULATIONS.NWC_REPORT],
    verificationBadges: [{ badge: '✔️ فحص خزان مرخص', authority: 'بلدي + NWC', icon: 'shield-check' }],
    equipment: [
        { name: 'جهاز سُمك', use: 'يقيس تآكل Epoxy — CaCO₃' },
        { name: 'فحص ضغط', use: 'يكشف تسرب داخلي' },
        { name: 'كاميرا حرارية', use: 'يُحدد موقع التسرب' },
    ],
    hiddenObjections: [
        { fear: 'بصري يكفي.', solution: 'CaCO₃ تآكل داخلي. سُمك يكشف.' },
        { fear: 'مثل خميس.', solution: 'أبسط! لا تكثّف. مصدر واحد.' },
    ],
    counterNarratives: [
        { myth: 'فحص بصري.', truth: 'CaCO₃ تآكل داخلي = سُمك.' },
        { myth: 'كل 5 سنوات.', truth: 'CaCO₃ = سنوي. يمنع التسرب.' },
    ],
    relatedServices: [
        { slug: 'tank-insulation', context: 'عزل خزان', priority: 1 },
        { slug: 'tanks-cleaning', context: 'خزانات', priority: 2 },
        { slug: 'water-leak-detection', context: 'تسرب مياه', priority: 3 },
        { slug: 'water-insulation', context: 'عزل مائي', priority: 4 },
        { slug: 'bathroom-leak-detection', context: 'حمام', priority: 5 },
        { slug: 'cleaning', context: 'تنظيف', priority: 6 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 7 },
    ],
};
