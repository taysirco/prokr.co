// ══════════════════════════════════════════════════════════════
// عزل مائي بالاحساء — Override مخصص (E-E-A-T Grade)
// صفحة: /al-ahsa/water-insulation
// ══════════════════════════════════════════════════════════════

import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'عزل مائي بالاحساء — خدمة احترافية معتمدة (2026)',
        description: 'عزل مائي بالاحساء. خدمة احترافية. فريق متخصص. ضمان مكتوب. أسعار شفافة. خدمة سريعة.',
        h1: 'عزل مائي بالاحساء — خدمة احترافية معتمدة مع ضمان',
        keywords: ['عزل مائي بالاحساء', 'عزل مائي الاحساء', 'شركة عزل مائي بالاحساء', 'أفضل عزل مائي بالاحساء'],
    },

    content: {
        introduction: 'عزل مائي بالاحساء — خدمة متخصصة تراعي الظروف المناخية والبيئية في الاحساء. فريق محترف مع أدوات حديثة وضمان مكتوب.',
        shortAnswer: 'عزل مائي بالاحساء: خدمة احترافية بأسعار شفافة. فريق متخصص. ضمان مكتوب.',
        heroSubtitle: 'عزل مائي بالاحساء. خدمة احترافية. ضمان.',
    },

    pricing: [
        { type: 'عزل مائي — أساسي', unit: 'خدمة', minPrice: 150, maxPrice: 300, time: '1-3 ساعات' },
        { type: 'عزل مائي — شامل', unit: 'خدمة', minPrice: 300, maxPrice: 600, time: '2-5 ساعات' },
    ],

    faq: [
        { question: 'كم تكلفة عزل مائي بالاحساء؟', answer: 'تبدأ الأسعار من 150 ريال وتختلف حسب المساحة ونوع الخدمة. اطلب عرض سعر مجاني.' },
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
        { slug: 'al-ahsa-furniture-moving', context: 'نقل عفش بالاحساء', priority: 1 },
        { slug: 'al-ahsa-furniture-storage', context: 'تخزين عفش بالاحساء', priority: 2 },
        { slug: 'al-ahsa-dyna', context: 'دينا نقل بالاحساء', priority: 3 },
        { slug: 'al-ahsa-moving-out', context: 'نقل عفش خروج بالاحساء', priority: 4 },
        { slug: 'al-ahsa-dabab', context: 'دباب نقل بالاحساء', priority: 5 },
        { slug: 'al-ahsa-cleaning', context: 'تنظيف منازل بالاحساء', priority: 6 },
        { slug: 'al-ahsa-tanks-cleaning', context: 'تنظيف خزانات بالاحساء', priority: 7 },
        { slug: 'al-ahsa-sofa-cleaning', context: 'تنظيف كنب بالاحساء', priority: 8 },
        { slug: 'al-ahsa-carpet-cleaning', context: 'تنظيف سجاد بالاحساء', priority: 9 },
    ],
};
