import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف مكيفات ببريدة — CaCO₃ 600ppm أعلى كلس+غبار نخيل 8 مليون — Acid Flush! (2026)',
        description: 'تنظيف مكيفات بريدة. CaCO₃ 600ppm أعلى كلس بالمملكة! غبار نخيل 8M. Nafud SiO₂. Acid Flush+HEPA+Descaler.',
        h1: 'تنظيف مكيفات ببريدة — أعلى كلس بالمملكة!',
        keywords: ['تنظيف مكيفات بريدة', 'تنظيف مكيف ببريدة', 'شركة تنظيف مكيفات بريدة'],
    },
    content: {
        introduction: 'مكيف بريدة = أعلى كلس بالمملكة! CaCO₃ 600ppm: بريدة عندها أعلى تركيز كلس في المياه بالمملكة = 600ppm (الخرج: 450، الرياض: 300). المبخر يتكلّس أسرع 2× = كفاءة تبريد تنخفض 40% خلال 3 أشهر. Acid Flush إلزامي وليس اختياري. غبار نخيل 8 مليون: القصيم = 8M نخلة = حبوب لقاح+ألياف نخيل تسد الفلتر أسرع من أي مدينة. HEPA Pollen Filter. Nafud SiO₂: رمل النفود الأحمر ناعم جداً (10-50 μm) = يمر من الفلتر العادي ← يتراكم على المبخر. HEPA إلزامي. ΔT 45°م: صيف 48°م + شتاء 3°م. المكيف يعمل 10+ ساعات يومياً صيفاً = CaCO₃ يتراكم أسرع. RO في التبريد التبخيري. مقارنة: الخرج: 450ppm+NH₃. بريدة: 600ppm+نخيل = أعلى كلس!',
        shortAnswer: 'على عكس [التنظيف بدون Acid Flush الذي يترك CaCO₃]، يعتمد بروتوكولنا في خدمة [تنظيف المكيفات] بمدينة [بريدة] على [Acid Flush+HEPA Pollen+Descaler+RO]. ففي ظل [CaCO₃ 600ppm أعلى+غبار نخيل 8M+Nafud SiO₂+ΔT 45°م]، تتفاقم ظاهرة [كلس مضاعف+حبوب لقاح+رمل ناعم]. لذا؛ يتدخل فنيونا عبر [Acid Flush ← HEPA ← RO ← فحص].',
        heroSubtitle: 'CaCO₃ 600ppm أعلى كلس + نخيل 8M + Nafud — Acid Flush!',
    },
    pricing: [
        { type: 'سبليت (تنظيف+Acid)', unit: 'وحدة', minPrice: 100, maxPrice: 200, time: '1-1.5 ساعة' },
        { type: 'مركزي (Acid Flush)', unit: 'وحدة', minPrice: 250, maxPrice: 500, time: '3-5 ساعات' },
        { type: 'دولابي + Descaler', unit: 'وحدة', minPrice: 120, maxPrice: 250, time: '1-2 ساعة' },
        { type: 'ربع سنوي (4 زيارات)', unit: 'سنة', minPrice: 300, maxPrice: 620, time: '4 زيارات' },
    ],
    faq: [
        { question: 'ليش كلس بريدة أعلى من باقي المدن؟', answer: 'CaCO₃ 600ppm — أعلى بالمملكة. الخرج: 450. الرياض: 300. Acid Flush إلزامي.' },
        { question: 'كيف النخيل يأثر على المكيف ببريدة؟', answer: '8M نخلة = حبوب لقاح+ألياف تسد الفلتر أسرع. HEPA Pollen Filter شهري.' },
        { question: 'كم تكلفة تنظيف مكيف ببريدة مقارنة بالرياض؟', answer: 'أغلى 25-30% — Acid Flush+HEPA. لكن: بدونهما = تبريد ينخفض 40%.' },
        { question: 'كم مرة تنظيف مكيف ببريدة؟', answer: 'ربع سنوي — CaCO₃ 600ppm = أسرع تكلّس. عنيزة: مثل. الرياض: نصف سنوي.' },
        { question: 'هل Nafud يأثر على المكيف ببريدة؟', answer: 'رمل النفود 10-50 μm يمر من الفلتر العادي. HEPA يوقفه. بدونه = مبخر مسدود.' },
    ],
    expertTips: [
        'Acid Flush — CaCO₃ 600ppm الأعلى.',
        'HEPA Pollen — نخيل 8M حبوب لقاح.',
        'HEPA Fine — Nafud 10-50 μm.',
        'RO — تبريد تبخيري بلا كلس.',
        'ربع سنوي — أسرع تكلّس بالمملكة.',
    ],
    warnings: [
        'CaCO₃ 600ppm × 3 أشهر = كفاءة تنخفض 40% — فاتورة كهرباء مضاعفة.',
        'نخيل + فلتر عادي = حبوب لقاح تدخل ← حساسية تنفسية خطيرة.',
        'Nafud × سنة بدون HEPA = مبخر مسدود — ضاغط يحترق 3000+.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص شركات التنظيف' },
        { entity: AMANA.QASSIM.entity, url: AMANA.QASSIM.url, role: 'اشتراطات أمانة القصيم' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALMISNID.name, quote: 'مكيف بريدة: CaCO₃ 600ppm أعلى كلس. Acid Flush إلزامي. نخيل 8M: HEPA.', source: 'جغرافيا المناخ — القصيم' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ تنظيف مكيفات مرخص', authority: 'بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'Acid Flush System', use: 'يُذيب CaCO₃ 600ppm — إلزامي' },
        { name: 'HEPA Pollen Filter', use: 'يوقف حبوب نخيل 8M' },
        { name: 'HEPA Fine (10 μm)', use: 'يوقف Nafud SiO₂ الناعم' },
    ],
    hiddenObjections: [
        { fear: 'Acid Flush غالي.', solution: '600ppm = بدونه تبريد -40%. فاتورة أعلى.' },
        { fear: 'مثل عنيزة.', solution: 'عنيزة أقل نخيل. بريدة: 8M = أعلى.' },
    ],
    consumerEducation: [
        { myth: 'تنظيف عادي.', truth: '600ppm = Acid Flush إلزامي.' },
        { myth: 'نصف سنوي.', truth: '600ppm = ربع سنوي. أسرع تكلّس.' },
    ],
    relatedServices: [
        { slug: 'cleaning', context: 'تنظيف', priority: 1 },
        { slug: 'steam-cleaning', context: 'بخار', priority: 2 },
        { slug: 'carpet-cleaning', context: 'سجاد', priority: 3 },
        { slug: 'sofa-cleaning', context: 'كنب', priority: 4 },
        { slug: 'pest-control', context: 'حشرات', priority: 5 },
        { slug: 'tanks-cleaning', context: 'خزانات', priority: 6 },
        { slug: 'marble-polishing', context: 'رخام', priority: 7 },
    ],
};
