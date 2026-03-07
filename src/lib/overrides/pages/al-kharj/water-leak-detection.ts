import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'كشف تسربات مياه بالخرج — CaCO₃ يسد+SiO₂ يآكل+ΔT 48°م — فحص ضغط+حراري! (2026)',
        description: 'كشف تسربات مياه الخرج. CaCO₃ 450ppm يسد المفاصل! SiO₂ يآكل Seal. ΔT 48°م إجهاد. فحص ضغط+حراري+Descaler.',
        h1: 'كشف تسربات مياه بالخرج — كلس يسد ورمل يآكل',
        keywords: ['كشف تسربات مياه الخرج', 'كشف تسرب مياه بالخرج', 'شركة كشف تسربات الخرج'],
    },
    content: {
        introduction: 'تسربات مياه الخرج = تحديات مياه فريدة! CaCO₃ 450ppm يسد المفاصل: كلس يتراكم داخل الأنابيب عند المفاصل ← يُضيّق القُطر ← ضغط يرتفع ← أضعف نقطة تتسرب. Descaler وقائي + فحص ضغط. SiO₂ يآكل Seal: رمل ناعم في ماء الأنابيب ← يآكل الحلقات المطاطية (O-rings/Gaskets) ← تسرب بطيء لا يُلاحظ. فحص Seal سنوي. ΔT 48°م إجهاد حراري: أنابيب خارجية تتعرض لصيف 50°م + شتاء 2°م = تمدد/انكماش يومي ← إجهاد مفاصل ← كسر. أنابيب داخلية: آمنة (مكيف). 15-25% = لا تكثّف! التسرب واضح بصرياً — لا خلط مع تكثّف = أبسط تشخيصاً. مقارنة: خميس = 3 مصادر (تسرب+مطر+تكثّف). الخرج = مصدر واحد = أبسط.',
        shortAnswer: 'على عكس [الفحص البصري بدون Descaler ولا فحص ضغط]، يعتمد بروتوكولنا في خدمة [كشف تسربات المياه] بمدينة [الخرج] على [فحص ضغط+حراري+Descaler+فحص Seal]. ففي ظل [CaCO₃ يسد+SiO₂ يآكل+ΔT إجهاد+لا تكثّف]، تتفاقم ظاهرة [انسداد+تآكل+إجهاد حراري]. لذا؛ يتدخل فنيونا عبر [ضغط ← حراري ← Descaler ← Seal] — ميزة: لا تكثّف!',
        heroSubtitle: 'CaCO₃ يسد + SiO₂ يآكل + ΔT إجهاد — مصدر واحد = أبسط!',
    },
    pricing: [
        { type: 'فحص ضغط+حراري', unit: 'نقطة', minPrice: 120, maxPrice: 260, time: '1-2 ساعة' },
        { type: 'فحص + Descaler وقائي', unit: 'نقطة', minPrice: 180, maxPrice: 380, time: '2-3 ساعات' },
        { type: 'فحص شامل (كل المنزل)', unit: 'بيت', minPrice: 350, maxPrice: 720, time: '3-5 ساعات' },
        { type: 'عقد سنوي (2 فحص+Descaler)', unit: 'سنة', minPrice: 450, maxPrice: 900, time: '2 زيارة' },
    ],
    faq: [
        { question: 'ليش تسربات الخرج أكثر من الرياض؟', answer: 'CaCO₃ 450ppm يسد+SiO₂ يآكل+ΔT 48°م = 3 عوامل. الرياض: أقل.' },
        { question: 'كيف CaCO₃ يسبب تسرب بالخرج؟', answer: 'كلس يسد المفصل ← ضغط يرتفع ← أضعف نقطة تتسرب. Descaler يمنع.' },
        { question: 'كم تكلفة كشف تسرب بالخرج مقارنة بخميس؟', answer: 'أرخص 20% — مصدر واحد (لا تكثّف لا مطر). أبسط تشخيصاً.' },
        { question: 'هل التكثّف يخلط مع التسرب بالخرج؟', answer: 'لا! 15-25% = لا تكثّف. التسرب واضح. خميس: 3 مصادر مُضللة.' },
        { question: 'كم مرة أفحص تسربات بالخرج؟', answer: 'سنوياً فحص Seal + نصف سنوي Descaler. ΔT صيف = أعلى إجهاد = أفضل وقت.' },
    ],
    expertTips: [
        'Descaler نصف سنوي — CaCO₃ يسد.',
        'فحص Seal سنوي — SiO₂ يآكل.',
        'فحص ضغط — يكشف تسرب CaCO₃ داخلي.',
        'لا تكثّف! — مصدر واحد = أبسط.',
        'أنابيب خارجية بداية صيف = فحص.',
    ],
    warnings: [
        'CaCO₃ × سنة بدون Descaler = انسداد ← ضغط ← تسرب مفاجئ — 3000+.',
        'SiO₂ × سنتين = Seal تالف ← تسرب بطيء ← عفن تحت البلاط.',
        'ΔT × 10 سنوات = إجهاد حراري ← كسر مفصل أنبوب خارجي.',
    ],
    trustAnchors: [
        { ...GOV.NWC, role: 'تقرير تسرب معتمد — تعديل فاتورة' },
        { ...GOV.BALADI, role: 'ترخيص فنيي السباكة' },
        { entity: AMANA.RIYADH.entity, url: AMANA.RIYADH.url, role: 'اشتراطات أمانة الرياض' },
    ],
    expertReviewer: EXPERTS.ALJUND,
    expertCitations: [
        { expert: EXPERTS.ALJUND.name, quote: 'تسرب الخرج: CaCO₃+SiO₂+ΔT. مصدر واحد = أبسط من خميس. Descaler وقائي.', source: 'موسوعة أخطاء — سباكة صحراوية' },
    ],
    saudiRegulations: [REGULATIONS.NWC_REPORT],
    verificationBadges: [{ badge: '✔️ كشف تسربات مرخص', authority: 'بلدي + NWC', icon: 'shield-check' }],
    equipment: [
        { name: 'فاحص ضغط', use: 'يكشف تسرب CaCO₃ داخلي' },
        { name: 'كاميرا حرارية', use: 'يُحدد موقع التسرب' },
        { name: 'Chemical Descaler', use: 'يُذيب CaCO₃ — يمنع انسداد' },
    ],
    hiddenObjections: [
        { fear: 'بصري يكفي.', solution: 'CaCO₃ انسداد داخلي. فحص ضغط.' },
        { fear: 'مثل خميس.', solution: 'أبسط! مصدر واحد. لا تكثّف.' },
    ],
    counterNarratives: [
        { myth: 'فحص بصري.', truth: 'CaCO₃ داخلي = ضغط+حراري.' },
        { myth: 'كل 3 سنوات.', truth: 'CaCO₃+SiO₂ = سنوي. يمنع تسرب.' },
    ],
    relatedServices: [
        { slug: 'bathroom-leak-detection', context: 'حمام', priority: 1 },
        { slug: 'tank-leak-detection', context: 'خزان', priority: 2 },
        { slug: 'water-insulation', context: 'عزل مائي', priority: 3 },
        { slug: 'tanks-cleaning', context: 'خزانات', priority: 4 },
        { slug: 'sewage-unblocking', context: 'تسليك', priority: 5 },
        { slug: 'cleaning', context: 'تنظيف', priority: 6 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 7 },
    ],
};
