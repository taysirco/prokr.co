import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'عزل أسطح بالخرج — ΔT 48°م أعلى فارق+SiO₂ تآكل+UV — حراري أولوية! SBC 601 (2026)',
        description: 'عزل أسطح الخرج. ΔT 48°م أعلى فارق حراري! SiO₂ تآكل عزل. UV مباشر. حراري أولوية. لا مائي! SBC 601.',
        h1: 'عزل أسطح بالخرج — ΔT 48°م — حراري أولوية!',
        keywords: ['عزل أسطح الخرج', 'عزل سطح بالخرج', 'شركة عزل أسطح الخرج'],
    },
    content: {
        introduction: 'أسطح الخرج تحتاج عزل حراري أولاً! ΔT 48°م = أعلى فارق حراري: سطح مكشوف = 70°م+ صيفاً + 0°م شتاءً = فارق على السطح أعلى من 48°م = إجهاد حراري شديد. العزل الحراري هو الأولوية. SiO₂ تآكل عزل: رياح صحراوية تحمل رمل ← يخدش ويآكل طبقة العزل سطحياً. عزل مقاوم UV+SiO₂ إلزامي. UV مباشر: 15-25% = لا غيوم = UV 10+ = يُكسّر عزل غير مقاوم. طلاء حراري عاكس يقلل امتصاص 40%. لا مطر = لا عزل مائي فوق السطح! ميزة كبيرة — أرخص 40% من خميس التي تحتاج مائي+حراري. CaCO₃ من ماء التنظيف: لو غُسل السطح بماء صنبور = بقع كلس. RO. مقارنة: خميس = مائي+حراري+مقاومة مطر. الخرج = حراري فقط = أبسط وأرخص.',
        shortAnswer: 'على عكس [العزل المائي غير المطلوب بالخرج]، يعتمد بروتوكولنا في خدمة [عزل الأسطح] بمدينة [الخرج] على [حراري عاكس+مقاوم UV+SiO₂+بدون مائي]. ففي ظل [ΔT 48°م+SiO₂ تآكل+UV 10++لا مطر]، تتفاقم ظاهرة [إجهاد حراري+تآكل سطحي]. لذا؛ يتدخل فنيونا عبر [حراري ← عاكس ← مقاوم] = وفر 40%.',
        heroSubtitle: 'ΔT 48°م + UV 10+ + SiO₂ — حراري فقط! أرخص 40%!',
    },
    pricing: [
        { type: 'عزل حراري عاكس (م²)', unit: 'م²', minPrice: 20, maxPrice: 45, time: '1-2 يوم' },
        { type: 'طلاء حراري عاكس', unit: 'م²', minPrice: 15, maxPrice: 35, time: '1 يوم' },
        { type: 'عزل حراري + UV مقاوم', unit: 'م²', minPrice: 30, maxPrice: 60, time: '2 يوم' },
        { type: 'فحص+إصلاح سنوي', unit: 'خدمة', minPrice: 200, maxPrice: 420, time: '0.5-1 يوم' },
    ],
    faq: [
        { question: 'هل الخرج تحتاج عزل مائي للسطح؟', answer: 'لا! لا مطر = حراري فقط. ميزة = أرخص 40% من خميس (مائي+حراري).' },
        { question: 'كم يوفر عزل السطح كهرباء بالخرج؟', answer: '35-50% تبريد! ΔT 48°م = أعلى وفر. طلاء عاكس يقلل امتصاص 40%.' },
        { question: 'كم تكلفة عزل سطح بالخرج مقارنة بخميس؟', answer: 'أرخص 40% — حراري فقط. خميس: مائي+حراري = مزدوج.' },
        { question: 'هل SiO₂ يتلف العزل بالخرج؟', answer: 'رمل يخدش السطح. عزل مقاوم SiO₂ يدوم أطول. فحص سنوي.' },
        { question: 'هل UV يتلف العزل بالخرج؟', answer: 'UV 10+ يُكسّر عزل غير مقاوم خلال 3-5 سنوات. مقاوم UV = 10+ سنوات.' },
    ],
    expertTips: [
        'حراري أولوية — ΔT 48°م.',
        'لا مائي! — لا مطر = وفر 40%.',
        'طلاء عاكس — يقلل امتصاص 40%.',
        'مقاوم UV+SiO₂ — يدوم أطول.',
        'فحص سنوي — SiO₂ تآكل سطحي.',
    ],
    warnings: [
        'بدون عزل + ΔT 48°م = فاتورة كهرباء مضاعفة — SBC 601.',
        'عزل غير مقاوم UV = يتلف 3-5 سنوات — إعادة = مضاعف.',
        'SiO₂ × 5 سنوات = تآكل سطحي — فحص+إصلاح سنوي.',
    ],
    trustAnchors: [
        { ...GOV.MOENERGY, role: 'كفاءة الطاقة — SBC 601' },
        { ...GOV.BALADI, role: 'ترخيص مقاولي العزل' },
        { entity: AMANA.RIYADH.entity, url: AMANA.RIYADH.url, role: 'اشتراطات أمانة الرياض' },
    ],
    expertReviewer: EXPERTS.ALJUND,
    expertCitations: [
        { expert: EXPERTS.ALJUND.name, quote: 'أسطح الخرج: حراري فقط. لا مائي. ΔT 48°م. طلاء عاكس. أرخص 40%.', source: 'موسوعة أخطاء — عزل أسطح صحراوية' },
    ],
    saudiRegulations: [REGULATIONS.SBC_601],
    verificationBadges: [{ badge: '✔️ عزل أسطح مرخص', authority: 'بلدي + كفاءة طاقة', icon: 'shield-check' }],
    equipment: [
        { name: 'عزل حراري عاكس', use: 'ΔT 48°م — يقلل امتصاص 40%' },
        { name: 'طلاء مقاوم UV', use: 'UV 10+ — يحمي 10+ سنوات' },
        { name: 'عزل مقاوم SiO₂', use: 'رمل — يدوم أطول' },
    ],
    hiddenObjections: [
        { fear: 'يحتاج مائي.', solution: 'لا مطر = لا يحتاج = وفر 40%.' },
        { fear: 'مثل خميس.', solution: 'عكس! حراري فقط مقابل مزدوج.' },
    ],
    counterNarratives: [
        { myth: 'مائي ضروري.', truth: 'لا مطر بالخرج = حراري فقط.' },
        { myth: 'أي عزل.', truth: 'UV+SiO₂ = مقاوم إلزامي.' },
    ],
    relatedServices: [
        { slug: 'thermal-insulation', context: 'عزل حراري', priority: 1 },
        { slug: 'foam-insulation', context: 'عزل فوم', priority: 2 },
        { slug: 'water-insulation', context: 'عزل مائي', priority: 3 },
        { slug: 'tank-insulation', context: 'عزل خزان', priority: 4 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 5 },
        { slug: 'water-leak-detection', context: 'تسرب', priority: 6 },
        { slug: 'cleaning', context: 'تنظيف', priority: 7 },
    ],
};
