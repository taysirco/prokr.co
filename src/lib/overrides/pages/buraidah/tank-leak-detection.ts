import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'كشف تسرب خزان ببريدة — CaCO₃ 600ppm تآكل عزل+ΔT إجهاد+بقع كلس — Epoxy+فحص! (2026)',
        description: 'كشف تسرب خزان بريدة. CaCO₃ 600ppm تآكل عزل! ΔT 45°م إجهاد. بقع كلس دليل واضح. فحص ضغط+Epoxy.',
        h1: 'كشف تسرب خزان ببريدة — أعلى كلس تآكل!',
        keywords: ['كشف تسرب خزان بريدة', 'كشف تسربات خزان ببريدة', 'شركة كشف تسرب خزان بريدة'],
    },
    content: {
        introduction: 'خزان بريدة = أعلى كلس يُتلف العزل ويتسرب! CaCO₃ 600ppm تآكل: أعلى كلس بالمملكة يتراكم على جدران الخزان ← يتسلل تحت العزل ← يرفعه ← تسرب. فحص ضغط+Epoxy. بقع كلس = دليل: بقع بيضاء كلسية تحت الخزان = دليل تسرب واضح (لا يحتاج فحص معقد). ΔT 45°م إجهاد: خزان سطح = تمدد/انكماش يومي = مفاصل تتشقق ← تسرب. فحص مفاصل حراري. Nafud SiO₂: لا يأثر على الخزان المغلق. 10-20% = لا تكثّف داخل الخزان! بقع واضحة. مقارنة: خميس = تكثّف يخلط مع التسرب = أعقد. بريدة = بقع كلسية = دليل واضح = أبسط.',
        shortAnswer: 'على عكس [الفحص البصري بدون فحص ضغط]، يعتمد بروتوكولنا في خدمة [كشف تسرب الخزان] بمدينة [بريدة] على [فحص ضغط+حراري+فحص مفاصل+Epoxy]. ففي ظل [CaCO₃ 600ppm تآكل+ΔT إجهاد+بقع واضحة+لا تكثّف]، تتفاقم ظاهرة [تقشّر عزل+تشقق مفاصل]. لذا؛ يتدخل فنيونا عبر [ضغط ← حراري ← مفاصل ← Epoxy] — بقع كلس = دليل!',
        heroSubtitle: 'CaCO₃ 600ppm تآكل + ΔT إجهاد — بقع كلس = دليل واضح!',
    },
    pricing: [
        { type: 'فحص ضغط+حراري', unit: 'خزان', minPrice: 150, maxPrice: 320, time: '1-2h' },
        { type: 'فحص + Epoxy إصلاح', unit: 'خزان', minPrice: 300, maxPrice: 620, time: '2-4h' },
        { type: 'فحص + إعادة عزل كامل', unit: 'خزان', minPrice: 500, maxPrice: 1000, time: '1-2 يوم' },
        { type: 'عقد سنوي (2 فحص)', unit: 'سنة', minPrice: 250, maxPrice: 520, time: '2 زيارة' },
    ],
    faq: [
        { question: 'كيف أعرف خزان بريدة يتسرب؟', answer: 'بقع كلس بيضاء تحت الخزان = دليل 600ppm واضح. لا تكثّف.' },
        { question: 'ليش عزل خزان بريدة يتقشّر؟', answer: 'CaCO₃ 600ppm يتسلل تحت ← يرفع العزل. Epoxy فقط.' },
        { question: 'كم تكلفة فحص خزان ببريدة مقارنة بخميس؟', answer: 'أرخص 15-20% — بقع واضحة (لا تكثّف مُضلل).' },
        { question: 'هل ΔT يأثر على الخزان ببريدة؟', answer: 'ΔT 45°م = إجهاد حراري. مفاصل تتشقق. فحص حراري.' },
        { question: 'كم مرة فحص خزان ببريدة؟', answer: 'سنوياً — 600ppm يتسلل. خزان سطح: كل 6 أشهر.' },
    ],
    expertTips: [
        'بقع كلس بيضاء = دليل تسرب.',
        'فحص ضغط — يكشف داخلي.',
        'فحص مفاصل — ΔT إجهاد.',
        'Epoxy — لا إسمنتي 600ppm.',
        'خزان أرضي — أقل ΔT.',
    ],
    warnings: [
        'CaCO₃ 600ppm × سنة = عزل تالف ← تسرب مياه شرب — YMYL.',
        'ΔT × خزان سطح = مفاصل تتشقق ← تسرب 500 لتر/يوم.',
        'إسمنتي + 600ppm = تقشّر ← تلوث مياه — Epoxy إلزامي.',
    ],
    trustAnchors: [
        { ...GOV.NWC, role: 'تقرير تسرب — تعديل فاتورة' },
        { ...GOV.BALADI, role: 'ترخيص فنيي العزل' },
        { entity: AMANA.QASSIM.entity, url: AMANA.QASSIM.url, role: 'اشتراطات أمانة القصيم' },
    ],
    expertReviewer: EXPERTS.ALMOHAIMED,
    expertCitations: [
        { expert: EXPERTS.ALMOHAIMED.name, quote: 'خزان بريدة: 600ppm يتقشّر عزل. بقع كلس = دليل. Epoxy.', source: 'نصائح هندسية — خزانات القصيم' },
        { expert: EXPERTS.ALMISNID.name, quote: 'ΔT 45°م = خزان سطح إجهاد. أرضي أفضل.', source: 'جغرافيا المناخ — القصيم' },
    ],
    saudiRegulations: [REGULATIONS.NWC_REPORT],
    verificationBadges: [{ badge: '✔️ كشف تسرب خزان مرخص', authority: 'NWC + بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'فاحص ضغط', use: 'يكشف تسرب داخلي' },
        { name: 'كاميرا حرارية', use: 'مفاصل ΔT — تشقق' },
        { name: 'Epoxy Food-Grade', use: 'إصلاح — CaCO₃ 600ppm' },
    ],
    commonConcerns: [
        { concern: 'بصري يكفي.', solution: 'بقع واضحة+فحص ضغط = دقيق.' },
        { concern: 'مثل عنيزة.', solution: 'نفس 600ppm لكن بريدة أكبر.' },
    ],
    consumerEducation: [
        { myth: 'فحص 5 سنوات.', truth: '600ppm = سنوي. يتسلل.' },
        { myth: 'إسمنتي يكفي.', truth: '600ppm = Epoxy. يتقشّر.' },
    ],
    relatedServices: [
        { slug: 'tank-insulation', context: 'عزل خزان', priority: 1 },
        { slug: 'tanks-cleaning', context: 'تنظيف خزان', priority: 2 },
        { slug: 'water-leak-detection', context: 'تسرب مياه', priority: 3 },
        { slug: 'water-insulation', context: 'مائي', priority: 4 },
        { slug: 'bathroom-leak-detection', context: 'حمام', priority: 5 },
        { slug: 'cleaning', context: 'تنظيف', priority: 6 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 7 },
    ],
};
