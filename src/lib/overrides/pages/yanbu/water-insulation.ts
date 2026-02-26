// ══════════════════════════════════════════════════════════════
// عزل مائي بينبع — Override مخصص (E-E-A-T Grade)
// صفحة: /yanbu/water-insulation
// ══════════════════════════════════════════════════════════════

import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'عزل مائي بينبع — خدمة احترافية معتمدة (2026)',
        description: 'عزل مائي بينبع. خدمة احترافية. فريق متخصص. ضمان مكتوب. أسعار شفافة. خدمة سريعة.',
        h1: 'عزل مائي بينبع — خدمة احترافية معتمدة مع ضمان',
        keywords: ['عزل مائي بينبع', 'عزل مائي ينبع', 'شركة عزل مائي بينبع', 'أفضل عزل مائي بينبع'],
    },

    content: {
        introduction: 'عزل مائي بينبع — خدمة متخصصة تراعي الظروف المناخية والبيئية في ينبع. فريق محترف مع أدوات حديثة وضمان مكتوب.',
        shortAnswer: 'عزل مائي بينبع: خدمة احترافية بأسعار شفافة. فريق متخصص. ضمان مكتوب.',
        heroSubtitle: 'عزل مائي بينبع. خدمة احترافية. ضمان.',
    },

    pricing: [
        { type: 'عزل مائي — أساسي', unit: 'خدمة', minPrice: 150, maxPrice: 300, time: '1-3 ساعات' },
        { type: 'عزل مائي — شامل', unit: 'خدمة', minPrice: 300, maxPrice: 600, time: '2-5 ساعات' },
    ],

    faq: [
        { question: 'كم تكلفة عزل مائي بينبع؟', answer: 'تبدأ الأسعار من 150 ريال وتختلف حسب المساحة ونوع الخدمة. اطلب عرض سعر مجاني.' },
        { question: 'كم يستغرق عزل مائي؟', answer: 'يعتمد على حجم العمل — عادةً من ساعة إلى 5 ساعات. الفريق يقيّم ويحدد الوقت بدقة.' },
        { question: 'هل تقدمون ضمان على عزل مائي؟', answer: 'نعم — ضمان مكتوب على جودة العمل. إذا لم تكن راضياً: إعادة الخدمة مجاناً.' },
    ],

    expertTips: [
        'اطلب عرض سعر مكتوب قبل بدء العمل — يحميك من المفاجآت',
        'تأكد من رخصة الشركة — الشركات المرخصة ملتزمة بمعايير الجودة',
        'اسأل عن الضمان — الشركة المحترفة تقدم ضمان مكتوب',
    ],

    warnings: [
        'لا تتعامل مع شركة بدون ترخيص — لا ضمان ولا حماية لحقوقك',
        'تأكد من وجود عقد مكتوب يحدد نطاق العمل والسعر والضمان',
    ],

    trustAnchors: [
        { ...GOV.SBC, role: 'الجهة المنظمة والمرخصة لهذا القطاع' },
    ],

    expertReviewer: {
        name: EXPERTS.ALJUND.name,
        title: EXPERTS.ALJUND.title,
        credential: EXPERTS.ALJUND.credential,
        profileUrl: EXPERTS.ALJUND.profileUrl,
    },

    expertCitations: [
        {
            expert: EXPERTS.ALJUND.name,
            quote: 'الالتزام بالمعايير والاشتراطات السعودية ضرورة — يحمي العميل ويضمن جودة العمل',
            source: EXPERTS.ALJUND.title,
            url: EXPERTS.ALJUND.profileUrl,
        },
    ],

    saudiRegulations: [REGULATIONS.SBC_601],

    verificationBadges: [
        { badge: '✔️ عزل مطابق لكود SBC', authority: 'كود البناء السعودي', icon: 'shield-check' },
    ],

    equipment: [
        { name: 'أدوات ومعدات احترافية', use: 'معدات حديثة تضمن جودة النتائج وسرعة الإنجاز' },
    ],

    hiddenObjections: [
        { fear: 'الأسعار غالية', solution: 'أسعارنا تنافسية — اطلب عرض سعر مجاني للمقارنة. الجودة + الضمان = استثمار وليس تكلفة' },
    ],

    counterNarratives: [
        { myth: 'أي شركة تكفي — المهم الأرخص', truth: 'الشركة المرخصة تقدم ضمان + تأمين + جودة. الأرخص بدون ترخيص = مخاطرة بدون حماية' },
    ],

    relatedServices: [
        { slug: 'yanbu-furniture-moving', context: 'نقل عفش بينبع', priority: 1 },
        { slug: 'yanbu-furniture-storage', context: 'تخزين عفش بينبع', priority: 2 },
        { slug: 'yanbu-dyna', context: 'دينا نقل بينبع', priority: 3 },
        { slug: 'yanbu-moving-out', context: 'نقل عفش خروج بينبع', priority: 4 },
        { slug: 'yanbu-dabab', context: 'دباب نقل بينبع', priority: 5 },
        { slug: 'yanbu-cleaning', context: 'تنظيف منازل بينبع', priority: 6 },
        { slug: 'yanbu-tanks-cleaning', context: 'تنظيف خزانات بينبع', priority: 7 },
        { slug: 'yanbu-sofa-cleaning', context: 'تنظيف كنب بينبع', priority: 8 },
        { slug: 'yanbu-carpet-cleaning', context: 'تنظيف سجاد بينبع', priority: 9 },
    ],
};
