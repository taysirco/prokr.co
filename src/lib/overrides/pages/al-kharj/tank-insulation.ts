import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'عزل خزانات بالخرج — CaCO₃ 450ppm تآكل+SiO₂ خدش+ΔT 48°م — Epoxy+Descaler! (2026)',
        description: 'عزل خزانات الخرج. CaCO₃ 450ppm يتراكم ويآكل العزل! SiO₂ خدش. ΔT 48°م إجهاد. Epoxy Food-Grade+Descaler.',
        h1: 'عزل خزانات بالخرج — CaCO₃ تآكل — Epoxy!',
        keywords: ['عزل خزانات الخرج', 'عزل خزان بالخرج', 'شركة عزل خزانات الخرج'],
    },
    content: {
        introduction: 'خزان الخرج يواجه تحديات مياه فريدة! CaCO₃ 450ppm تآكل عزل: كلس يتراكم على جدران الخزان ← يُضعف الطبقة العازلة ← تسرب. Epoxy Food-Grade مقاوم + Descaler دوري. SiO₂ خدش: رمل ناعم يدخل من الأنابيب ← يخدش العزل الداخلي ← يُقلل العمر. Epoxy سميك يتحمل. ΔT 48°م: خزان علوي = 50°م صيفاً ← عزل يتمدد. شتاء 2°م ← ينكمش. إجهاد حراري سنوي. Epoxy مرن يتحمل. 15-25% = لا تكثّف! لا عفن داخل الخزان! ميزة كبيرة — خميس: عفن+طحالب داخل الخزان = Anti-Fungal. مقارنة: خميس = عزل مائي+Anti-Fungal. الخرج = عزل CaCO₃+حراري = أبسط لكن مختلف. NWC تقرير معتمد.',
        shortAnswer: 'على عكس [العزل بدون مقاومة CaCO₃]، يعتمد بروتوكولنا في خدمة [عزل الخزانات] بمدينة [الخرج] على [Epoxy Food-Grade مقاوم CaCO₃+Descaler+مرن ΔT]. ففي ظل [CaCO₃ 450ppm+SiO₂ خدش+ΔT 48°م+لا تكثّف]، تتفاقم ظاهرة [تآكل عزل+خدش+إجهاد]. لذا؛ يتدخل فنيونا عبر [Descaler ← Epoxy ← فحص]. ميزة: لا عفن!',
        heroSubtitle: 'CaCO₃ تآكل + SiO₂ خدش + ΔT 48°م — Epoxy مرن!',
    },
    pricing: [
        { type: 'خزان علوي (1-5 م³)', unit: 'خزان', minPrice: 300, maxPrice: 600, time: '1-2 يوم' },
        { type: 'خزان أرضي (5-20 م³)', unit: 'خزان', minPrice: 500, maxPrice: 1000, time: '1-2 يوم' },
        { type: '+ Descaler CaCO₃', unit: 'إضافي', minPrice: 100, maxPrice: 220, time: '2-3 ساعات' },
        { type: 'فحص سنوي', unit: 'خدمة', minPrice: 150, maxPrice: 320, time: '1-2 ساعة' },
    ],
    faq: [
        { question: 'ليش عزل خزان الخرج يتلف أسرع؟', answer: 'CaCO₃ 450ppm يتراكم ← يُضعف العزل. + ΔT 48°م إجهاد. Epoxy+Descaler.' },
        { question: 'هل Descaler ضروري قبل العزل بالخرج؟', answer: 'CaCO₃ يمنع التصاق العزل. Descaler أولاً ← ثم Epoxy = التصاق أقوى.' },
        { question: 'كم تكلفة عزل خزان بالخرج مقارنة بخميس؟', answer: 'متقاربة — لكن خميس: Anti-Fungal إضافي. الخرج: Descaler إضافي.' },
        { question: 'هل الخزان يتعفّن بالخرج؟', answer: 'لا! 15-25% = لا عفن. ميزة. خميس: عفن+طحالب = Anti-Fungal.' },
        { question: 'كم يدوم عزل خزان بالخرج؟', answer: 'Epoxy: 7-10 سنوات مع Descaler سنوي. بدون Descaler: 4-5 سنوات (كلس يآكل).' },
    ],
    expertTips: [
        'Descaler قبل العزل — CaCO₃ يمنع التصاق.',
        'Epoxy Food-Grade — شرب آمن.',
        'مرن ΔT — يتحمل تمدد/انكماش.',
        'Descaler سنوي — يُطيل عمر العزل.',
        'لا عفن! — لا Anti-Fungal.',
    ],
    warnings: [
        'عزل بدون Descaler = CaCO₃ يمنع التصاق ← تقشّر خلال سنة.',
        'Epoxy غير Food-Grade = تلوث مياه — YMYL صحة.',
        'ΔT بدون مرونة = تشققات عزل — تسرب.',
    ],
    trustAnchors: [
        { ...GOV.NWC, role: 'تقرير خزان معتمد' },
        { ...GOV.BALADI, role: 'ترخيص مقاولي العزل' },
        { entity: AMANA.RIYADH.entity, url: AMANA.RIYADH.url, role: 'اشتراطات أمانة الرياض' },
    ],
    expertReviewer: EXPERTS.ALMOHAIMED,
    expertCitations: [
        { expert: EXPERTS.ALJUND.name, quote: 'خزان الخرج: CaCO₃ يآكل. Descaler+Epoxy. لا عفن. ΔT = مرن.', source: 'موسوعة أخطاء — خزانات صحراوية' },
    ],
    saudiRegulations: [REGULATIONS.NWC_REPORT],
    verificationBadges: [{ badge: '✔️ عزل خزان مرخص', authority: 'بلدي + NWC', icon: 'shield-check' }],
    equipment: [
        { name: 'Epoxy Food-Grade', use: 'عزل مقاوم CaCO₃+مرن ΔT' },
        { name: 'Descaler', use: 'يُذيب CaCO₃ قبل العزل' },
        { name: 'فحص سُمك', use: 'يقيس تآكل العزل' },
    ],
    hiddenObjections: [
        { fear: 'عزل عادي.', solution: 'CaCO₃ يآكل العادي. Epoxy مقاوم.' },
        { fear: 'مثل خميس.', solution: 'لا عفن = لا Anti-Fungal = مختلف.' },
    ],
    consumerEducation: [
        { myth: 'أي عزل.', truth: 'CaCO₃ = مقاوم فقط. + Food-Grade.' },
        { myth: 'بدون Descaler.', truth: 'كلس يمنع التصاق = تقشّر.' },
    ],
    relatedServices: [
        { slug: 'tanks-cleaning', context: 'خزانات', priority: 1 },
        { slug: 'tank-leak-detection', context: 'تسرب خزان', priority: 2 },
        { slug: 'water-insulation', context: 'عزل مائي', priority: 3 },
        { slug: 'water-leak-detection', context: 'تسرب', priority: 4 },
        { slug: 'foam-insulation', context: 'فوم', priority: 5 },
        { slug: 'cleaning', context: 'تنظيف', priority: 6 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 7 },
    ],
};
