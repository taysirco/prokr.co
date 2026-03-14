import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'عزل أسطح ببريدة — ΔT 45°م أعلى فارق+Nafud SiO₂ تآكل+CaCO₃ — Open-Cell يكفي! (2026)',
        description: 'عزل أسطح بريدة. ΔT 45°م أعلى فارق! Nafud SiO₂ تآكل طلاء. CaCO₃ 600ppm. Open-Cell لا مطر. SBC 601.',
        h1: 'عزل أسطح ببريدة — ΔT 45°م — Open-Cell يكفي!',
        keywords: ['عزل أسطح بريدة', 'عزل سطح ببريدة', 'شركة عزل أسطح بريدة'],
    },
    content: {
        introduction: 'سطح بريدة = أعلى فارق حراري بلا مطر! ΔT 45°م: صيف 48°م (سطح 70°م+) + شتاء 3°م = فارق حراري 45°م! SBC 601 يشترط عزل. Open-Cell R-3.7/inch يكفي — لا مطر = لا خطر امتصاص. أرخص 40% من Closed-Cell. Nafud SiO₂ تآكل: رمل النفود الناعم يآكل طلاء السطح الحراري (Cool Roof) = يفقد انعكاسيته. إعادة طلاء كل 3 سنوات. CaCO₃ 600ppm: مياه خزان السطح تتسرب = كلس فوق العزل = تلف. فحص تسرب خزان. 10-20% = لا حاجة لعزل مائي مطر! وفرة كبيرة. مقارنة: خميس = Closed-Cell+SBS مائي+مطر = أغلى 50-60%. بريدة = Open-Cell+حراري فقط = أبسط وأرخص.',
        shortAnswer: 'على عكس [Closed-Cell الغالي بدون حاجة]، يعتمد بروتوكولنا في خدمة [عزل الأسطح] بمدينة [بريدة] على [Open-Cell R-3.7+Cool Roof+فحص خزان]. ففي ظل [ΔT 45°م+لا مطر+Nafud تآكل+CaCO₃ 600ppm]، تتفاقم ظاهرة [فقدان حراري+تآكل طلاء+تسرب كلسي]. لذا؛ يتدخل فنيونا عبر [Open-Cell ← Cool Roof ← فحص خزان] = وفر 50%!',
        heroSubtitle: 'ΔT 45°م + لا مطر — Open-Cell يكفي! أرخص 50%!',
    },
    pricing: [
        { type: 'Open-Cell (م²)', unit: 'م²', minPrice: 25, maxPrice: 55, time: '1-3 أيام' },
        { type: 'Cool Roof طلاء', unit: 'م²', minPrice: 10, maxPrice: 22, time: '1 يوم' },
        { type: 'فحص تسرب خزان سطح', unit: 'خدمة', minPrice: 150, maxPrice: 310, time: '1-2h' },
        { type: 'صيانة سنوية', unit: 'خدمة', minPrice: 250, maxPrice: 520, time: '1 زيارة' },
    ],
    faq: [
        { question: 'ليش Open-Cell يكفي ببريدة وخميس تحتاج Closed-Cell؟', answer: 'لا مطر = Open-Cell لا يتبلل. خميس: أمطار → امتصاص → كارثة.' },
        { question: 'كم يوفر عزل السطح كهرباء ببريدة؟', answer: '35-45% تبريد! ΔT 45°م. SBC 601 إلزامي. أعلى عائد وطنياً.' },
        { question: 'كم تكلفة عزل سطح ببريدة مقارنة بخميس؟', answer: 'أرخص 50-60% — Open-Cell+لا مائي. خميس: Closed+SBS+مائي.' },
        { question: 'هل Nafud يتلف طلاء السطح ببريدة؟', answer: 'Nafud ناعم يآكل Cool Roof = فقدان انعكاسية. إعادة طلاء كل 3 سنوات.' },
        { question: 'هل السطح يحتاج عزل مائي ببريدة؟', answer: 'لا! لا مطر. فقط فحص تسرب خزان السطح (CaCO₃ 600ppm).' },
    ],
    expertTips: [
        'Open-Cell R-3.7 — لا مطر = يكفي.',
        'Cool Roof — Nafud يآكل كل 3 سنوات.',
        'فحص خزان سطح — CaCO₃ تسرب.',
        'SBC 601 — إلزامي.',
        'أرخص 50% من خميس — لا مائي.',
    ],
    warnings: [
        'بدون عزل + ΔT 45°م = فاتورة كهرباء مضاعفة — SBC 601 غرامة.',
        'Cool Roof + Nafud × 5 سنوات = فقدان انعكاسية كلي — إعادة طلاء.',
        'تسرب خزان سطح + CaCO₃ 600ppm = كلس فوق العزل ← تلف.',
    ],
    trustAnchors: [
        { ...GOV.MOENERGY, role: 'كفاءة الطاقة — SBC 601' },
        { ...GOV.SBC, role: 'كود البناء السعودي' },
        { entity: AMANA.QASSIM.entity, url: AMANA.QASSIM.url, role: 'اشتراطات أمانة القصيم' },
    ],
    expertReviewer: EXPERTS.ALMOHAIMED,
    expertCitations: [
        { expert: EXPERTS.ALMOHAIMED.name, quote: 'سطح بريدة: Open-Cell يكفي! لا مطر. ΔT 45°م. أرخص 50%.', source: 'نصائح هندسية — أسطح القصيم' },
        { expert: EXPERTS.ALJUND.name, quote: 'Nafud يآكل Cool Roof. إعادة طلاء 3 سنوات. فحص خزان.', source: 'موسوعة أخطاء — عزل' },
    ],
    saudiRegulations: [REGULATIONS.SBC_601],
    verificationBadges: [{ badge: '✔️ عزل مطابق SBC 601', authority: 'كود البناء', icon: 'shield-check' }],
    equipment: [
        { name: 'Open-Cell PU Foam', use: 'R-3.7/inch — حراري' },
        { name: 'Cool Roof Coating', use: 'طلاء عاكس — ΔT' },
        { name: 'كاميرا حرارية', use: 'فحص تسرب خزان سطح' },
    ],
    hiddenObjections: [
        { fear: 'Closed أفضل.', solution: 'لا مطر = Open 50% أرخص. SBC.' },
        { fear: 'عزل مائي لازم.', solution: 'لا مطر = لا مائي. فحص خزان فقط.' },
    ],
    consumerEducation: [
        { myth: 'Closed ضروري.', truth: 'لا مطر = Open R-3.7 يكفي.' },
        { myth: 'مائي لازم.', truth: 'لا مطر = لا مائي. أرخص 50%.' },
    ],
    relatedServices: [
        { slug: 'thermal-insulation', context: 'حراري', priority: 1 },
        { slug: 'foam-insulation', context: 'فوم', priority: 2 },
        { slug: 'water-insulation', context: 'مائي', priority: 3 },
        { slug: 'tank-insulation', context: 'خزان', priority: 4 },
        { slug: 'water-leak-detection', context: 'تسرب', priority: 5 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 6 },
        { slug: 'cleaning', context: 'تنظيف', priority: 7 },
    ],
};
