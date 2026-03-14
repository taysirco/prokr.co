import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'عزل حراري بالخرج — ΔT 48°م أعلى فارق بالمملكة+UV 10++SiO₂ — SBC 601! (2026)',
        description: 'عزل حراري الخرج. ΔT 48°م أعلى فارق! UV 10+ يُكسّر. SiO₂ تآكل. عاكس+مقاوم UV+SiO₂. SBC 601.',
        h1: 'عزل حراري بالخرج — ΔT 48°م — أعلى فارق!',
        keywords: ['عزل حراري الخرج', 'عزل حراري بالخرج', 'شركة عزل حراري الخرج'],
    },
    content: {
        introduction: 'عزل حراري الخرج = أعلى عائد استثماري! ΔT 48°م = أعلى فارق حراري بالمملكة: صيف 52°م+ + شتاء 2°م = فارق 48-50°م! كل R-value إضافي يوفر أكثر من أي مدينة أخرى. SBC 601 يفرض R-value محدد. UV 10+ يُكسّر: 15-25% = لا غيوم = UV مباشر طوال السنة = يُكسّر عزل غير مقاوم خلال 3-5 سنوات. عزل مقاوم UV إلزامي. SiO₂ تآكل سطحي: رياح صحراوية+رمل = تآكل تدريجي. مقاوم SiO₂. لا مطر! = لا حاجة لمقاومة رطوبة في العزل الحراري (خميس: تحتاج مزدوج). أرخص 30-40%. مقارنة: خميس = عزل حراري+مائي = مزدوج+غالي. الخرج = حراري فقط = أبسط+أرخص+أعلى عائد.',
        shortAnswer: 'على عكس [العزل المزدوج غير المطلوب بالخرج]، يعتمد بروتوكولنا في خدمة [العزل الحراري] بمدينة [الخرج] على [R-value عالي+مقاوم UV+SiO₂+بدون مائي]. ففي ظل [ΔT 48°م+UV 10++SiO₂+لا مطر]، تتفاقم ظاهرة [فقدان حراري أعلى بالمملكة]. لذا؛ يتدخل فنيونا عبر [عاكس ← مقاوم UV ← مقاوم SiO₂] = وفر 35-50% كهرباء.',
        heroSubtitle: 'ΔT 48°م أعلى فارق + UV 10+ — حراري فقط! أعلى عائد!',
    },
    pricing: [
        { type: 'جدران (XPS/EPS)', unit: 'م²', minPrice: 18, maxPrice: 40, time: '1-3 أيام' },
        { type: 'سقف عاكس', unit: 'م²', minPrice: 25, maxPrice: 55, time: '1-2 يوم' },
        { type: 'فوم PU (رش)', unit: 'م²', minPrice: 20, maxPrice: 45, time: '1-2 يوم' },
        { type: 'فحص R-value', unit: 'خدمة', minPrice: 200, maxPrice: 420, time: '0.5-1 يوم' },
    ],
    faq: [
        { question: 'كم يوفر العزل الحراري كهرباء بالخرج؟', answer: '35-50% تبريد! ΔT 48°م = أعلى وفر بالمملكة. أعلى عائد استثماري.' },
        { question: 'ليش الخرج لا تحتاج عزل مائي مع الحراري؟', answer: 'لا مطر = حراري فقط. خميس: مائي+حراري = أغلى 30-40%.' },
        { question: 'كم تكلفة عزل حراري بالخرج مقارنة بخميس؟', answer: 'أرخص 30-40% — حراري فقط بدون مائي. نفس R-value.' },
        { question: 'هل UV يتلف العزل بالخرج؟', answer: 'UV 10+ طوال السنة. عزل غير مقاوم = يتلف 3-5 سنوات. مقاوم UV = 10+.' },
        { question: 'هل SBC 601 إلزامي بالخرج؟', answer: 'SBC 601 يفرض R-value محدد. بدونه = غرامة + فاتورة كهرباء مضاعفة.' },
    ],
    expertTips: [
        'R-value عالي — ΔT 48°م = أعلى عائد.',
        'مقاوم UV — UV 10+ يُكسّر.',
        'لا مائي! — أرخص 30-40%.',
        'SBC 601 — إلزامي.',
        'فحص R-value — التأكد سنوياً.',
    ],
    warnings: [
        'بدون عزل + ΔT 48°م = فاتورة كهرباء مضاعفة — SBC 601.',
        'عزل غير مقاوم UV = يتلف 3-5 سنوات — رمي مال.',
        'SiO₂ × 5 سنوات = تآكل سطحي — فحص+صيانة.',
    ],
    trustAnchors: [
        { ...GOV.MOENERGY, role: 'كفاءة الطاقة — SBC 601' },
        { ...GOV.BALADI, role: 'ترخيص مقاولي العزل' },
        { entity: AMANA.RIYADH.entity, url: AMANA.RIYADH.url, role: 'اشتراطات أمانة الرياض' },
    ],
    expertReviewer: EXPERTS.ALMOHAIMED,
    expertCitations: [
        { expert: EXPERTS.ALJUND.name, quote: 'حراري الخرج: ΔT 48°م أعلى فارق. أعلى عائد. حراري فقط. SBC 601.', source: 'موسوعة أخطاء — عزل صحراوي' },
    ],
    saudiRegulations: [REGULATIONS.SBC_601],
    verificationBadges: [{ badge: '✔️ عزل حراري مرخص', authority: 'بلدي + كفاءة طاقة', icon: 'shield-check' }],
    equipment: [
        { name: 'XPS/EPS عازل', use: 'جدران — R-value عالي' },
        { name: 'طلاء عاكس UV', use: 'سقف — يعكس 40%' },
        { name: 'PU Foam رش', use: 'فوم — سد تسربات حرارية' },
    ],
    commonConcerns: [
        { concern: 'يحتاج مائي.', solution: 'لا مطر = حراري فقط = وفر 30%.' },
        { concern: 'غالي.', solution: 'وفر 35-50% كهرباء. عائد 2-3 سنة.' },
    ],
    consumerEducation: [
        { myth: 'مزدوج.', truth: 'لا مطر = حراري فقط.' },
        { myth: 'أي عزل.', truth: 'UV+SiO₂ = مقاوم إلزامي.' },
    ],
    relatedServices: [
        { slug: 'foam-insulation', context: 'فوم', priority: 1 },
        { slug: 'roof-insulation', context: 'أسطح', priority: 2 },
        { slug: 'water-insulation', context: 'عزل مائي', priority: 3 },
        { slug: 'tank-insulation', context: 'خزان', priority: 4 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 5 },
        { slug: 'water-leak-detection', context: 'تسرب', priority: 6 },
        { slug: 'cleaning', context: 'تنظيف', priority: 7 },
    ],
};
