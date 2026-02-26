// ══════════════════════════════════════════════════════════════
// عزل أسطح بنجران — Override مخصص (E-E-A-T Grade)
// صفحة: /najran/roof-insulation
// ══════════════════════════════════════════════════════════════

import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'عزل أسطح بنجران — خدمة احترافية معتمدة (2026)',
        description: 'عزل أسطح بنجران. خدمة احترافية. فريق متخصص. ضمان مكتوب. أسعار شفافة. خدمة سريعة.',
        h1: 'عزل أسطح بنجران — خدمة احترافية معتمدة مع ضمان',
        keywords: ['عزل أسطح بنجران', 'عزل أسطح نجران', 'شركة عزل أسطح بنجران', 'أفضل عزل أسطح بنجران'],
    },

    content: {
        introduction: 'عزل أسطح بنجران — خدمة متخصصة تراعي الظروف المناخية والبيئية في نجران. فريق محترف مع أدوات حديثة وضمان مكتوب.',
        shortAnswer: 'عزل أسطح بنجران: خدمة احترافية بأسعار شفافة. فريق متخصص. ضمان مكتوب.',
        heroSubtitle: 'عزل أسطح بنجران. خدمة احترافية. ضمان.',
    },

    pricing: [
        { type: 'عزل أسطح — أساسي', unit: 'خدمة', minPrice: 150, maxPrice: 300, time: '1-3 ساعات' },
        { type: 'عزل أسطح — شامل', unit: 'خدمة', minPrice: 300, maxPrice: 600, time: '2-5 ساعات' },
    ],

    faq: [
        { question: 'كم تكلفة عزل أسطح بنجران؟', answer: 'تبدأ الأسعار من 150 ريال وتختلف حسب المساحة ونوع الخدمة. اطلب عرض سعر مجاني.' },
        { question: 'كم يستغرق عزل أسطح؟', answer: 'يعتمد على حجم العمل — عادةً من ساعة إلى 5 ساعات. الفريق يقيّم ويحدد الوقت بدقة.' },
        { question: 'هل تقدمون ضمان على عزل أسطح؟', answer: 'نعم — ضمان مكتوب على جودة العمل. إذا لم تكن راضياً: إعادة الخدمة مجاناً.' },
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
        { slug: 'najran-furniture-moving', context: 'نقل عفش بنجران', priority: 1 },
        { slug: 'najran-furniture-storage', context: 'تخزين عفش بنجران', priority: 2 },
        { slug: 'najran-dyna', context: 'دينا نقل بنجران', priority: 3 },
        { slug: 'najran-moving-out', context: 'نقل عفش خروج بنجران', priority: 4 },
        { slug: 'najran-dabab', context: 'دباب نقل بنجران', priority: 5 },
        { slug: 'najran-cleaning', context: 'تنظيف منازل بنجران', priority: 6 },
        { slug: 'najran-tanks-cleaning', context: 'تنظيف خزانات بنجران', priority: 7 },
        { slug: 'najran-sofa-cleaning', context: 'تنظيف كنب بنجران', priority: 8 },
        { slug: 'najran-carpet-cleaning', context: 'تنظيف سجاد بنجران', priority: 9 },
    ],
};
