import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف شقق ببريدة — CaCO₃ 600ppm أعلى كلس+نخيل 8M غبار+Nafud — Descaler+HEPA! (2026)',
        description: 'تنظيف شقق بريدة. CaCO₃ 600ppm أعلى كلس بالمملكة! نخيل 8M غبار. Nafud SiO₂. Descaler+HEPA+RO+Microfiber.',
        h1: 'تنظيف شقق ببريدة — أعلى كلس+نخيل 8M!',
        keywords: ['تنظيف شقق بريدة', 'تنظيف شقة ببريدة', 'شركة تنظيف شقق بريدة'],
    },
    content: {
        introduction: 'شقة بريدة = كلس في كل مكان! CaCO₃ 600ppm: أعلى كلس بالمملكة. كل حنفية+دش+ماء غسالة = بقع كلس بيضاء أسرع 2× من الرياض. Descaler أسبوعي وليس شهري. RO في الشطف النهائي. نخيل 8M غبار: حبوب لقاح (مارس-مايو) + ألياف نخيل + غبار تمور = طبقة غبار نخيلي فريدة تدخل من كل فتحة. HEPA Pollen يمتص. Nafud SiO₂: رمل النفود الأحمر 10-50 μm ناعم جداً = يمشى عليه ← يخدش البلاط والأسطح. Pre-Rinse+Microfiber. ΔT 45°م: حرارة تُجفف الخشب. لا رطوبة = لا عفن! تجفيف 20-30 دقيقة. مقارنة: خميس = 7 محاور+عفن+عث. بريدة = 4 محاور (كلس+نخيل+Nafud+ΔT)+لا عفن = أبسط 30%.',
        shortAnswer: 'على عكس [التنظيف بماء صنبور بدون Descaler]، يعتمد بروتوكولنا في خدمة [تنظيف الشقق] بمدينة [بريدة] على [Descaler أسبوعي+HEPA Pollen+RO+Microfiber]. ففي ظل [CaCO₃ 600ppm+نخيل 8M+Nafud SiO₂+ΔT 45°م]، تتفاقم ظاهرة [كلس مضاعف+غبار نخيلي+خدش]. لذا؛ يتدخل فريقنا عبر [Descaler ← HEPA ← Pre-Rinse ← RO] — ميزة: لا عفن!',
        heroSubtitle: 'CaCO₃ 600ppm أعلى كلس + نخيل 8M — لا عفن! تجفيف سريع!',
    },
    pricing: [
        { type: 'شقة صغيرة (2 غرف)', unit: 'شقة', minPrice: 150, maxPrice: 300, time: '3-4h + 20 دقيقة' },
        { type: 'شقة كبيرة (4 غرف)', unit: 'شقة', minPrice: 250, maxPrice: 500, time: '5-7h' },
        { type: '+ Descaler عميق', unit: 'إضافي', minPrice: 80, maxPrice: 170, time: '1-2h' },
        { type: 'أسبوعي (4/شهر)', unit: 'شهر', minPrice: 400, maxPrice: 800, time: '4 زيارات' },
    ],
    faq: [
        { question: 'ليش كلس شقة بريدة أكثر من الرياض؟', answer: 'CaCO₃ 600ppm — أعلى بالمملكة (الرياض: 300). كلس 2× أسرع. Descaler أسبوعي.' },
        { question: 'كيف النخيل يأثر على الشقة ببريدة؟', answer: '8M نخلة = حبوب لقاح+ألياف تدخل يومياً. HEPA Pollen يمتص. حساسية تنفسية.' },
        { question: 'كم تكلفة تنظيف شقة ببريدة مقارنة بخميس؟', answer: 'أرخص 25-30% — 4 محاور مقابل 7. لا عفن+Anti-Fungal+Anti-Mite.' },
        { question: 'هل النفود يخدش البلاط ببريدة؟', answer: 'Nafud 10-50 μm ناعم = يخدش. Pre-Rinse+Microfiber = لا خدش.' },
        { question: 'هل الشقة تتعفّن ببريدة؟', answer: 'لا! 10-20% = لا عفن. تجفيف 20-30 دقيقة. خميس: عفن أسبوعين.' },
    ],
    expertTips: [
        'Descaler أسبوعي — CaCO₃ 600ppm أعلى.',
        'HEPA Pollen — نخيل 8M حبوب لقاح.',
        'Pre-Rinse — Nafud SiO₂ قبل المسح.',
        'RO Rinse — لا كلس جديد.',
        'لا عفن! — تجفيف 20 دقيقة.',
    ],
    warnings: [
        'CaCO₃ 600ppm × أسبوع = كلس صلب — Descaler أسبوعي إلزامي.',
        'نخيل × ربيع = حساسية تنفسية — HEPA Pollen YMYL.',
        'Nafud + قطن = خدش بلاط — Microfiber فقط.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص شركات التنظيف' },
        { entity: AMANA.QASSIM.entity, url: AMANA.QASSIM.url, role: 'اشتراطات أمانة القصيم' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALMISNID.name, quote: 'شقة بريدة: CaCO₃ 600ppm أعلى كلس. نخيل 8M. Descaler أسبوعي. لا عفن.', source: 'جغرافيا المناخ — القصيم' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ تنظيف شقق مرخص', authority: 'بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'Descaler صناعي', use: 'CaCO₃ 600ppm — أسبوعي' },
        { name: 'HEPA Pollen', use: 'حبوب لقاح 8M نخلة' },
        { name: 'RO Water+Microfiber', use: 'لا كلس+لا خدش Nafud' },
    ],
    hiddenObjections: [
        { fear: 'مثل عنيزة.', solution: 'عنيزة أقل نخيل. بريدة: 8M+600ppm.' },
        { fear: 'مثل خميس.', solution: 'لا عفن+20 دقيقة = أرخص 30%.' },
    ],
    consumerEducation: [
        { myth: 'Descaler شهري.', truth: '600ppm = أسبوعي. أسرع تكلّس.' },
        { myth: 'ماء عادي.', truth: '600ppm = بقع فوراً. RO.' },
    ],
    relatedServices: [
        { slug: 'cleaning', context: 'تنظيف', priority: 1 },
        { slug: 'carpet-cleaning', context: 'سجاد', priority: 2 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 3 },
        { slug: 'sofa-cleaning', context: 'كنب', priority: 4 },
        { slug: 'marble-polishing', context: 'رخام', priority: 5 },
        { slug: 'pest-control', context: 'حشرات', priority: 6 },
        { slug: 'steam-cleaning', context: 'بخار', priority: 7 },
    ],
};
