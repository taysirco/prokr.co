// ══════════════════════════════════════════════════════════════
// تنظيف مطابخ بالمدينة المنورة — هيكل مبدئي
// صفحة: /madinah/kitchen-cleaning
// ══════════════════════════════════════════════════════════════

import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف مطابخ بالمدينة المنورة — إزالة الدهون والزيوت المستعصية',
        description: 'تنظيف مطابخ بالمدينة المنورة. تنظيف شامل للبوتاجازات، الشفاطات، الأرضيات، والجدران لإزالة الدهون المتراكمة والزيوت. تعقيم كامل.',
        h1: 'تنظيف مطابخ بالمدينة المنورة — نظافة وتعقيم عميق',
        keywords: [
            'تنظيف مطابخ بالمدينة المنورة',
            'شركة تنظيف مطابخ بالمدينة المنورة',
            'إزالة دهون المطابخ',
        ],
    },

    content: {
        introduction: 'المطابخ من أكثر الأماكن تجمعاً للدهون والبكتيريا، خاصة في المدينة المنورة. نقدم خدمة تنظيف مطابخ شاملة لإزالة أصعب البقع والدهون المتراكمة وإعادة المطبخ لامعاً ومعقماً.',
        shortAnswer: 'تنظيف مطابخ جذري يشمل إزالة الدهون، تنظيف الأجهزة، وتعقيم الأسطح. من 150 ريال.',
        heroSubtitle: 'ننظف مطبخك من أصعب الدهون',
    },

    pricing: [
        { type: 'تنظيف مطبخ مساحة صغيرة', unit: 'مطبخ', minPrice: 150, maxPrice: 300, time: '2-3 ساعات' },
        { type: 'تنظيف مطبخ كبير/عميق', unit: 'مطبخ', minPrice: 300, maxPrice: 600, time: '3-5 ساعات' },
    ],

    faq: [
        {
            question: 'هل يضر التنظيف دواليب المطبخ؟',
            answer: 'لا، نستخدم مواد مخصصة وأنواع مناسبة من المنظفات لكل نوع من الأخشاب أو الألمنيوم لحماية مواد دولاب المطبخ.',
        },
    ],

    expertTips: [
        'احرصي على مسح البقع الزيتية فور حدوثها لتجنب تصلبها.',
    ],

    warnings: [
        'تجاهل تنظيف الشفاطات قد يؤدي إلى انسدادها أو نشوب حرائق لا قدر الله.',
    ],

    trustAnchors: [
        { ...GOV.BALADI, role: 'تراخيص شركات النظافة' },
    ],

    expertReviewer: {
        name: EXPERTS.ALMOHAIMED.name,
        title: EXPERTS.ALMOHAIMED.title,
        credential: EXPERTS.ALMOHAIMED.credential,
        profileUrl: EXPERTS.ALMOHAIMED.profileUrl,
    },

    expertCitations: [],

    saudiRegulations: [REGULATIONS.BALADI_HEALTH],

    verificationBadges: [
        { badge: '✔️ مواد آمنة ومعتمدة', authority: 'الجهات المختصة', icon: 'shield-check' },
    ],

    equipment: [
        { name: 'أجهزة تنظيف بالبخار', use: 'لإذابة الدهون الصعبة دون مواد كيميائية قاسية' },
    ],

    hiddenObjections: [
        { fear: 'المواد الكيميائية ستترك رائحة قوية', solution: 'نستخدم منظفات آمنة ومصرحة، ونهتم بتهوية المطبخ واستخدام معقمات ذات روائح لطيفة.' },
    ],

    counterNarratives: [
        { myth: 'المطبخ النظيف ظاهرياً لا يحتاج تنظيف عميق', truth: 'الدهون والبكتيريا تتراكم في الأماكن غير المرئية كخلف الثلاجة والبوتاجاز، التنظيف العميق ضروري للصحة.' },
    ],

    relatedServices: [
        { slug: 'madinah-cleaning', context: 'تنظيف شامل للمنزل', priority: 1 },
        { slug: 'madinah-pest-control', context: 'مكافحة حشرات المطبخ مثل الصراصير', priority: 2 },
    ],
};
