import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../gov-references';

export const override: PageOverride = {
    meta: {
        title: 'تخزين أثاث بحفر الباطن — ΔT 54°م مُعزول + SiO₂ مُحكم + 10-15% لا عفن (ميزة!) (2026)',
        description: 'تخزين أثاث حفر الباطن. ΔT 54°م عزل حراري إلزامي. SiO₂ إحكام. 10-15% لا عفن ولا رطوبة (ميزة!). لا Dehumidifier! مستودع مُعزول + مُحكم.',
        h1: 'تخزين أثاث بحفر الباطن — مُعزول من ΔT 54°م ومُحكم من SiO₂',
        keywords: ['تخزين أثاث حفر الباطن', 'تخزين عفش حفر الباطن', 'شركة تخزين أثاث حفر الباطن'],
    },
    content: {
        introduction: 'تخزين الأثاث في حفر الباطن = ميزتان + تحديان. الميزة 1 — لا Dehumidifier!: 10-15% = لا عفن. لا رطوبة. لا Dehumidifier 24/7. توفير كهرباء 30-50% عن الشرقية! الميزة 2 — لا تكثّف: صفر خطر Short Circuit. لا VCI. التحدي 1 — ΔT 54°م: 52°م صيفاً ← -2°م شتاءً في المستودع = PVAc يلين ← يتصلب. مستودع مُعزول حرارياً (< 35°م / > 10°م). التحدي 2 — SiO₂ عواصف: مستودع مُحكم (Sealed). فلتر هواء.',
        shortAnswer: 'على عكس [مستودع عادي] الذي لا يُعزل من ΔT 54°م، يعتمد بروتوكولنا في خدمة [تخزين الأثاث] بمدينة [حفر الباطن] على [مُعزول + مُحكم + لا Dehumidifier]. ففي ظل [ΔT 54°م + SiO₂]، تتفاقم ظاهرة [Cycling + خدش]. لذا؛ يتدخل خبراؤنا عبر [مستودع قاري].',
        heroSubtitle: 'مُعزول ΔT 54°م + مُحكم SiO₂ + لا عفن + لا Dehumidifier',
    },
    pricing: [
        { type: 'غرفة صغيرة (10 م²)', unit: 'شهر', minPrice: 210, maxPrice: 420, time: 'شهري' },
        { type: 'غرفة كبيرة (20 م²)', unit: 'شهر', minPrice: 360, maxPrice: 730, time: 'شهري' },
        { type: 'تغليف + نقل + تخزين', unit: 'باقة', minPrice: 730, maxPrice: 1850, time: 'حسب' },
        { type: 'عقد سنوي (خصم 20%)', unit: 'سنة', minPrice: 2100, maxPrice: 4200, time: 'سنوي' },
    ],
    faq: [
        { question: 'لا Dehumidifier — حقاً؟', answer: 'حقاً! 10-15% = أجف مدينة. لا عفن. لا رطوبة. توفير 30-50% كهرباء عن الشرقية. ميزة قارية كبيرة.' },
        { question: 'ΔT 54°م — عزل حراري؟', answer: '52°م بدون عزل = PVAc يلين. -2°م = يتصلب. مُعزول حرارياً: 10°م-35°م. يمنع Cycling.' },
        { question: 'أرخص من الشرقية؟', answer: 'نعم — لا Dehumidifier = كهرباء أقل. لكن: عزل حراري = تكلفة. النتيجة: أرخص 10-20%.' },
        { question: 'فحص — كل كم؟', answer: 'حرارة + SiO₂ + سلامة تغليف. كل 2 شهر (أقل من شهري في الشرقية = لا عفن).' },
        { question: 'SiO₂ — يدخل المستودع؟', answer: 'عاصفة = SiO₂ يدخل من أي فتحة. مُحكم (Sealed) + فلتر = يمنع.' },
    ],
    expertTips: [
        'لا Dehumidifier — توفير 30-50%. ميزة 10-15%.',
        'عزل حراري إلزامي — ΔT 54°م = PVAc Cycling.',
        'إحكام (Sealed) — SiO₂ عواصف ناعمة.',
        'فحص كل 2 شهر — أقل من الشرقية (لا عفن).',
        'لا VCI — لا رطوبة = لا صدأ. توفير!',
    ],
    warnings: [
        'مستودع بدون عزل + ΔT 54°م = PVAc Cycling = تفكك.',
        'بدون إحكام + عاصفة = SiO₂ يخدش أثناء التخزين.',
        'بدون عزل + -2°م شتاء = تجمد + شقوق.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص مستودعات' },
        { entity: AMANA.HAFR.entity, url: AMANA.HAFR.url, role: 'اشتراطات التخزين بحفر الباطن' },
    ],
    expertReviewer: EXPERTS.ALMOHAIMED,
    expertCitations: [
        { expert: EXPERTS.ALMOHAIMED.name, quote: 'تخزين حفر الباطن: لا Dehumidifier + لا VCI + لا عفن = ميزات! ΔT 54°م = عزل حراري. SiO₂ = إحكام. 2 تحديات + 3 ميزات.', source: 'نصائح هندسية — تخزين قاري' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ مستودع مرخص', authority: 'منصة بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'عزل حراري', use: 'ΔT 54°م → 10-35°م' },
        { name: 'إحكام (Sealed)', use: 'SiO₂ عواصف' },
        { name: 'فلتر هواء', use: 'SiO₂ ناعم' },
    ],
    commonConcerns: [
        { concern: 'عادي أرخص.', solution: 'بدون عزل + ΔT 54°م = تلف. أرخص بـ 100/شهر — أغلى بآلاف تلف.' },
        { concern: 'مثل الرياض.', solution: 'ΔT 54°م > 35°م. -2°م شتاء. عزل أهم.' },
    ],
    consumerEducation: [
        { myth: 'أي مستودع.', truth: 'بدون عزل = ΔT 54°م. بدون إحكام = SiO₂.' },
        { myth: 'غالي.', truth: 'أرخص 10-20% من الشرقية (لا Dehumidifier).' },
        { myth: 'بيت.', truth: 'بيت بدون عزل + ΔT 54°م = نفس المشكلة.' },
    ],
    relatedServices: [
        { slug: 'furniture-moving', context: 'نقل — للمستودع', priority: 1 },
        { slug: 'furniture-cleaning', context: 'أثاث — قبل', priority: 2 },
        { slug: 'pest-control', context: 'حشرات — عقارب', priority: 3 },
        { slug: 'cleaning', context: 'تنظيف', priority: 4 },
        { slug: 'dyna', context: 'دينا', priority: 5 },
        { slug: 'dabab', context: 'دباب', priority: 6 },
        { slug: 'termite-control', context: 'نمل أبيض', priority: 7 },
    ],
};
