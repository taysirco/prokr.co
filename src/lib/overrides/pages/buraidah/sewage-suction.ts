import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'شفط صرف صحي ببريدة — CaCO₃ 600ppm يسد+Nafud SiO₂ ترسيب+ΔT — Descaler+فاكيوم! (2026)',
        description: 'شفط صرف صحي بريدة. CaCO₃ 600ppm يسد أسرع! Nafud SiO₂ ترسيب. ΔT 45°م غازات. Descaler+فاكيوم+فحص.',
        h1: 'شفط صرف صحي ببريدة — أعلى كلس يسد!',
        keywords: ['شفط صرف صحي بريدة', 'شفط بيارات ببريدة', 'شركة شفط صرف بريدة'],
    },
    content: {
        introduction: 'صرف بريدة = أعلى كلس يسد أسرع! CaCO₃ 600ppm يسد: أعلى كلس بالمملكة يترسب داخل الأنابيب ← يُضيّق القطر أسرع 2× من الرياض ← بيارة تمتلئ أسرع. Descaler وقائي كل 3 أشهر. Nafud SiO₂ ترسيب: رمل النفود الناعم يدخل الصرف (مع ماء الغسل) ← يترسب في البيارة ← يزيد حجم الرواسب. شفط متكرر. ΔT 45°م: صيف = بكتيريا لاهوائية تنشط ← H₂S أسرع ← رائحة أقوى. شفط صيفي متكرر. 10-20% = بيارة لا تفيض بسبب المطر! ميزة. مقارنة: خميس = أمطار تملأ+رطوبة. بريدة = كلس+Nafud لكن لا مطر = أبسط.',
        shortAnswer: 'على عكس [الشفط بدون Descaler وقائي]، يعتمد بروتوكولنا في خدمة [شفط الصرف] بمدينة [بريدة] على [فاكيوم+Descaler وقائي+فحص كاميرا]. ففي ظل [CaCO₃ 600ppm يسد+Nafud ترسيب+ΔT H₂S+لا مطر]، تتفاقم ظاهرة [انسداد 2×+رواسب+رائحة]. لذا؛ يتدخل فنيونا عبر [شفط ← Descaler ← فحص] — لا فيضان مطر!',
        heroSubtitle: 'CaCO₃ 600ppm يسد 2× + Nafud ترسيب — Descaler وقائي! لا مطر!',
    },
    pricing: [
        { type: 'شفط بيارة (5 م³)', unit: 'شفط', minPrice: 150, maxPrice: 310, time: '1-2h' },
        { type: 'شفط + Descaler وقائي', unit: 'شفط', minPrice: 200, maxPrice: 420, time: '2-3h' },
        { type: 'فحص كاميرا', unit: 'فحص', minPrice: 100, maxPrice: 220, time: '1h' },
        { type: 'عقد ربع سنوي', unit: 'سنة', minPrice: 500, maxPrice: 1000, time: '4 شفطات' },
    ],
    faq: [
        { question: 'ليش بيارة بريدة تمتلئ أسرع؟', answer: 'CaCO₃ 600ppm يسد أنابيب+Nafud يترسب = أسرع 2× من الرياض.' },
        { question: 'كم مرة شفط ببريدة مقارنة بالرياض؟', answer: 'كل 3-4 أشهر (بدلاً من 6). 600ppm+Nafud = أسرع. Descaler يُطيل.' },
        { question: 'كم تكلفة شفط ببريدة مقارنة بخميس؟', answer: 'متقاربة. لكن: لا مطر = بيارة لا تفيض. خميس: أمطار تُغرق.' },
        { question: 'ليش رائحة أقوى صيفاً ببريدة؟', answer: 'ΔT 48°م = بكتيريا لاهوائية تنشط ← H₂S أسرع. شفط صيفي.' },
        { question: 'هل Descaler يُقلل الشفط ببريدة؟', answer: 'نعم! يُذيب CaCO₃ من الأنابيب = تدفق أفضل = شفط أقل 30-40%.' },
    ],
    expertTips: [
        'Descaler كل 3 أشهر — 600ppm يسد.',
        'شفط صيفي — ΔT H₂S رائحة.',
        'فحص كاميرا — Nafud ترسيب.',
        'لا مطر = لا فيضان — ميزة.',
        'Descaler يُقلل شفط 30-40%.',
    ],
    warnings: [
        'CaCO₃ 600ppm × 6 أشهر = انسداد كامل — شفط طوارئ 500+.',
        'Nafud ترسيب + بدون شفط = رواسب صلبة — يحتاج حفر.',
        'ΔT × صيف = H₂S سام — تهوية YMYL.',
    ],
    trustAnchors: [
        { ...GOV.NWC, role: 'معايير الصرف' },
        { ...GOV.BALADI, role: 'ترخيص شركات الشفط' },
        { entity: AMANA.QASSIM.entity, url: AMANA.QASSIM.url, role: 'تصريف نظامي — أمانة القصيم' },
    ],
    expertReviewer: EXPERTS.ALMOHAIMED,
    expertCitations: [
        { expert: EXPERTS.ALMOHAIMED.name, quote: 'صرف بريدة: 600ppm يسد 2×. Nafud ترسيب. Descaler كل 3 أشهر.', source: 'نصائح هندسية — صرف القصيم' },
    ],
    saudiRegulations: [REGULATIONS.NWC_REPORT],
    verificationBadges: [{ badge: '✔️ شفط مرخص', authority: 'بلدي + NWC', icon: 'shield-check' }],
    equipment: [
        { name: 'فاكيوم صناعي', use: 'شفط — بيارة' },
        { name: 'Chemical Descaler', use: 'CaCO₃ 600ppm — وقائي' },
        { name: 'كاميرا فحص', use: 'Nafud ترسيب — تشخيص' },
    ],
    commonConcerns: [
        { concern: 'شفط فقط.', solution: 'بدون Descaler = يسد أسرع. وقائي.' },
        { concern: 'مثل عنيزة.', solution: 'نفس 600ppm لكن بريدة: فلل أكبر.' },
    ],
    consumerEducation: [
        { myth: 'شفط سنوي.', truth: '600ppm = ربع سنوي. أسرع انسداد.' },
        { myth: 'بدون Descaler.', truth: '600ppm × 6 = انسداد كامل.' },
    ],
    relatedServices: [
        { slug: 'sewage-unblocking', context: 'تسليك', priority: 1 },
        { slug: 'water-leak-detection', context: 'تسرب', priority: 2 },
        { slug: 'tanks-cleaning', context: 'خزانات', priority: 3 },
        { slug: 'cleaning', context: 'تنظيف', priority: 4 },
        { slug: 'pest-control', context: 'حشرات', priority: 5 },
        { slug: 'water-insulation', context: 'مائي', priority: 6 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 7 },
    ],
};
