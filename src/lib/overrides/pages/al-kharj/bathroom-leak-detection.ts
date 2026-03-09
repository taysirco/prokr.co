import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'كشف تسربات حمامات بالخرج — CaCO₃ يسد+SiO₂ يآكل Seal — Descaler+فحص ضغط (2026)',
        description: 'كشف تسربات حمامات الخرج. CaCO₃ 450ppm يسد مفاصل! SiO₂ يآكل Seal. ΔT 48°م يُتعب مواسير. Descaler+فحص ضغط+حراري.',
        h1: 'كشف تسربات حمامات بالخرج — كلس يسد ورمل يآكل',
        keywords: ['كشف تسربات حمامات الخرج', 'كشف تسرب حمام بالخرج', 'شركة كشف تسربات حمامات الخرج'],
    },
    content: {
        introduction: 'تسربات حمامات الخرج تختلف عن المدن الأخرى! أولاً — CaCO₃ 450ppm يسد المفاصل: آبار جوفية = ترسبات كلس تتراكم داخل المواسير ← تضيّق القُطر ← ضغط يرتفع ← المفصل الأضعف يتسرب. Descaler دوري يمنع. ثانياً — SiO₂ صحراوي يآكل Seal: رمل ناعم يدخل مع ماء الصنبور ← يآكل الحلقات المطاطية (O-rings) ← تسرب بطيء. فحص Seal سنوي. ثالثاً — ΔT 48°م: فارق حراري كبير بين صيف 50°م وشتاء 2°م = تمدد وانكماش مواسير ← إجهاد حراري Thermal Fatigue ← كسر مفاصل. رابعاً — لا تكثّف! 15-25% = جاف. التسرب واضح بصرياً — لا خلط مع تكثّف مثل خميس مشيط. ميزة كبيرة! مقارنة: خميس = 3 مصادر (تسرب+مطر+تكثّف). الخرج = مصدر واحد (تسرب) = أبسط تشخيصاً.',
        shortAnswer: 'على عكس [الفحص البصري بدون Descaler]، يعتمد بروتوكولنا في خدمة [كشف تسربات الحمامات] بمدينة [الخرج] على [فحص ضغط+حراري+Descaler+فحص Seal]. ففي ظل [CaCO₃ 450ppm+SiO₂ يآكل+ΔT 48°م+لا تكثّف]، تتفاقم ظاهرة [انسداد+تآكل+إجهاد حراري]. لذا؛ يتدخل فنيونا عبر [ضغط ← حراري ← Descaler ← Seal].',
        heroSubtitle: 'CaCO₃ يسد + SiO₂ يآكل + ΔT 48°م — لا تكثّف = أبسط!',
    },
    pricing: [
        { type: 'فحص حراري+ضغط', unit: 'حمام', minPrice: 120, maxPrice: 260, time: '1-2 ساعة' },
        { type: 'كشف + Descaler', unit: 'حمام', minPrice: 180, maxPrice: 380, time: '2-3 ساعات' },
        { type: 'كشف + إصلاح', unit: 'حمام', minPrice: 300, maxPrice: 650, time: '3-5 ساعات' },
        { type: 'فحص شامل (كل الحمامات)', unit: 'بيت', minPrice: 350, maxPrice: 720, time: '3-5 ساعات' },
    ],
    faq: [
        { question: 'ليش حمام الخرج يتسرب أكثر من الرياض؟', answer: 'CaCO₃ 450ppm يسد المفاصل + SiO₂ يآكل Seal + ΔT 48°م = إجهاد أكثر.' },
        { question: 'هل الكلس يسبب تسرب بالخرج؟', answer: 'CaCO₃ يتراكم داخل المواسير ← يضيّق ← ضغط يرتفع ← أضعف مفصل يتسرب. Descaler يمنع.' },
        { question: 'كم تكلفة كشف تسرب حمام بالخرج مقارنة بخميس؟', answer: 'أرخص 20% — مصدر واحد (لا تكثّف لا مطر). خميس: 3 مصادر = فحص حراري أعقد.' },
        { question: 'هل التكثّف يخلط مع التسرب بالخرج؟', answer: 'لا! 15-25% = لا تكثّف. التسرب واضح بصرياً. ميزة كبيرة — خميس: 3 مصادر مُضللة.' },
        { question: 'متى أفحص تسربات الحمامات بالخرج؟', answer: 'سنوياً Seal + نصف سنوي Descaler. بداية الصيف = ΔT أعلى = إجهاد أكثر.' },
    ],
    expertTips: [
        'Descaler نصف سنوي — CaCO₃ يسد المفاصل.',
        'فحص Seal سنوي — SiO₂ يآكل O-rings.',
        'فحص ضغط — ΔT 48°م إجهاد حراري.',
        'لا تكثّف — التسرب واضح بصرياً.',
        'بداية الصيف = فحص — ΔT أعلى.',
    ],
    warnings: [
        'CaCO₃ × سنة بدون Descaler = انسداد جزئي ← ضغط ← تسرب مفاجئ.',
        'SiO₂ × سنتين = Seal تالف ← تسرب بطيء لا يُلاحظ ← عفن تحت البلاط.',
        'ΔT 48°م × 10 سنوات = Thermal Fatigue ← كسر مفصل — 1000+ ريال إصلاح.',
    ],
    trustAnchors: [
        { ...GOV.NWC, role: 'تقارير تسرب معتمدة' },
        { ...GOV.BALADI, role: 'ترخيص فنيي السباكة' },
        { entity: AMANA.RIYADH.entity, url: AMANA.RIYADH.url, role: 'اشتراطات أمانة الرياض' },
    ],
    expertReviewer: EXPERTS.ALJUND,
    expertCitations: [
        { expert: EXPERTS.ALJUND.name, quote: 'حمام الخرج: CaCO₃ يسد+SiO₂ يآكل+ΔT يُتعب. لكن: لا تكثّف = أبسط تشخيصاً.', source: 'موسوعة أخطاء — سباكة زراعية' },
    ],
    saudiRegulations: [REGULATIONS.NWC_REPORT],
    verificationBadges: [{ badge: '✔️ فني سباكة مرخص', authority: 'بلدي + NWC', icon: 'shield-check' }],
    equipment: [
        { name: 'فاحص ضغط', use: 'يكشف تسرب داخلي — CaCO₃ ضغط' },
        { name: 'كاميرا حرارية', use: 'يُحدد موقع التسرب بدقة' },
        { name: 'Chemical Descaler', use: 'يُذيب CaCO₃ — يمنع انسداد' },
    ],
    hiddenObjections: [
        { fear: 'مثل الرياض.', solution: 'CaCO₃+SiO₂+ΔT = مختلف. الرياض: لا كلس.' },
        { fear: 'غالي.', solution: 'تسرب خفي × سنة = عفن تحت البلاط = 5000+ إصلاح.' },
    ],
    counterNarratives: [
        { myth: 'فحص بصري يكفي.', truth: 'CaCO₃ انسداد داخلي. فحص ضغط.' },
        { myth: 'مثل خميس.', truth: 'أبسط! لا تكثّف. مصدر واحد.' },
    ],
    relatedServices: [
        { slug: 'water-leak-detection', context: 'تسرب مياه', priority: 1 },
        { slug: 'tank-leak-detection', context: 'تسرب خزان', priority: 2 },
        { slug: 'water-insulation', context: 'عزل مائي', priority: 3 },
        { slug: 'tanks-cleaning', context: 'خزانات', priority: 4 },
        { slug: 'sewage-unblocking', context: 'تسليك', priority: 5 },
        { slug: 'cleaning', context: 'تنظيف', priority: 6 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 7 },
    ],
};
