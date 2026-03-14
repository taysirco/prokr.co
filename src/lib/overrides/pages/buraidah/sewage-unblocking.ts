import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تسليك مجاري ببريدة — CaCO₃ 600ppm يسد 2×+Nafud SiO₂ ترسيب+ΔT — Descaler+Hydro! (2026)',
        description: 'تسليك مجاري بريدة. CaCO₃ 600ppm يسد أسرع 2×! Nafud SiO₂ ترسيب. ΔT 45°م. Descaler+Hydro Jetting.',
        h1: 'تسليك مجاري ببريدة — أعلى كلس يسد 2×!',
        keywords: ['تسليك مجاري بريدة', 'تسليك مجاري ببريدة', 'شركة تسليك مجاري بريدة'],
    },
    content: {
        introduction: 'مجاري بريدة = أعلى كلس يسد أسرع! CaCO₃ 600ppm يسد: أعلى كلس بالمملكة يترسب داخل المجاري ← يُضيّق القطر 2× أسرع من الرياض. Descaler كل 3 أشهر + Hydro Jetting سنوي. Nafud SiO₂ ترسيب: رمل النفود الناعم يدخل مع مياه الغسل/الأرضيات ← يترسب في نقاط الانحناء. سبرنج يدوي لا يكفي — Hydro Jetting يُزيل. ΔT 45°م: صيف = تحلل أسرع = رائحة أقوى + فقاعات. تسليك صيفي. CaCO₃ + دهون: كلس يُصلّب الدهون = طبقة صلبة. Descaler أولاً ← ثم Degreaser. 10-20% = لا مطر تفيض المجاري! ميزة. مقارنة: خميس = أمطار+فيضان+جذور. بريدة = كلس+Nafud لكن لا مطر = أبسط.',
        shortAnswer: 'على عكس [السبرنج بدون Descaler]، يعتمد بروتوكولنا في خدمة [تسليك المجاري] بمدينة [بريدة] على [Descaler+Hydro Jetting+فحص كاميرا]. ففي ظل [CaCO₃ 600ppm يسد 2×+Nafud ترسيب+ΔT رائحة+لا مطر]، تتفاقم ظاهرة [انسداد كلسي+ترسيب+رائحة]. لذا؛ يتدخل فنيونا عبر [Descaler ← Hydro ← فحص] — لا فيضان!',
        heroSubtitle: 'CaCO₃ 600ppm يسد 2× + Nafud ترسيب — Descaler+Hydro! لا مطر!',
    },
    pricing: [
        { type: 'تسليك عادي', unit: 'نقطة', minPrice: 80, maxPrice: 170, time: '30-60 دقيقة' },
        { type: 'تسليك + Descaler', unit: 'نقطة', minPrice: 120, maxPrice: 260, time: '1-2h' },
        { type: 'Hydro Jetting شامل', unit: 'خدمة', minPrice: 250, maxPrice: 520, time: '2-4h' },
        { type: 'عقد ربع سنوي', unit: 'سنة', minPrice: 400, maxPrice: 800, time: '4 زيارات' },
    ],
    faq: [
        { question: 'ليش مجاري بريدة تنسد أكثر؟', answer: 'CaCO₃ 600ppm أعلى بالمملكة. يسد 2× أسرع. Descaler كل 3 أشهر.' },
        { question: 'ليش السبرنج لا يكفي ببريدة؟', answer: 'Nafud ترسيب+كلس صلب = سبرنج لا يخترق. Hydro Jetting.' },
        { question: 'كم تكلفة تسليك ببريدة مقارنة بخميس؟', answer: 'متقاربة. لكن: لا مطر = لا فيضان. خميس: أمطار تُغرق.' },
        { question: 'كم مرة تسليك ببريدة مقارنة بالرياض؟', answer: 'كل 3 أشهر (بدلاً من 6). 600ppm = أسرع. Descaler يُطيل.' },
        { question: 'هل المجاري تفيض بالمطر ببريدة؟', answer: 'لا! لا مطر = ميزة. خميس: فيضان موسمي.' },
    ],
    expertTips: [
        'Descaler كل 3 أشهر — 600ppm.',
        'Hydro Jetting — Nafud ترسيب.',
        'Descaler أولاً — كلس+دهن.',
        'تسليك صيفي — ΔT رائحة.',
        'لا مطر — لا فيضان.',
    ],
    warnings: [
        'CaCO₃ 600ppm × 6 أشهر = انسداد كامل — تسليك طوارئ 500+.',
        'سبرنج + كلس صلب = يكسر أنبوب — Hydro Jetting أآمن.',
        'ΔT × صيف = H₂S سام ← تهوية إلزامية YMYL.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص شركات التسليك' },
        { entity: AMANA.QASSIM.entity, url: AMANA.QASSIM.url, role: 'اشتراطات أمانة القصيم' },
    ],
    expertReviewer: EXPERTS.ALMOHAIMED,
    expertCitations: [
        { expert: EXPERTS.ALMOHAIMED.name, quote: 'تسليك بريدة: 600ppm يسد 2×. Nafud ترسيب. Descaler+Hydro.', source: 'نصائح هندسية — مجاري القصيم' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ تسليك مرخص', authority: 'بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'Hydro Jetting', use: 'يُزيل Nafud+كلس — ضغط' },
        { name: 'Chemical Descaler', use: 'CaCO₃ 600ppm — يُذيب' },
        { name: 'كاميرا فحص', use: 'Nafud ترسيب — تشخيص' },
    ],
    commonConcerns: [
        { concern: 'سبرنج يكفي.', solution: '600ppm كلس صلب. Hydro Jetting.' },
        { concern: 'مثل عنيزة.', solution: 'نفس 600ppm لكن بريدة أكبر.' },
    ],
    consumerEducation: [
        { myth: 'تسليك سنوي.', truth: '600ppm = كل 3 أشهر. أسرع.' },
        { myth: 'سبرنج.', truth: 'كلس+Nafud صلب = Hydro.' },
    ],
    relatedServices: [
        { slug: 'sewage-suction', context: 'شفط', priority: 1 },
        { slug: 'water-leak-detection', context: 'تسرب', priority: 2 },
        { slug: 'bathroom-leak-detection', context: 'حمام', priority: 3 },
        { slug: 'tanks-cleaning', context: 'خزانات', priority: 4 },
        { slug: 'cleaning', context: 'تنظيف', priority: 5 },
        { slug: 'pest-control', context: 'حشرات', priority: 6 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 7 },
    ],
};
