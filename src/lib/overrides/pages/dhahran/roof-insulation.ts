// ══════════════════════════════════════════════════════════════
// عزل أسطح بالظهران — Override مخصص (E-E-A-T Grade)
// صفحة: /dhahran/roof-insulation
// ══════════════════════════════════════════════════════════════

import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'عزل أسطح بالظهران — خدمة احترافية معتمدة (2026)',
        description: 'عزل أسطح بالظهران. خدمة احترافية. فريق متخصص. ضمان مكتوب. أسعار شفافة. خدمة سريعة.',
        h1: 'عزل أسطح بالظهران — خدمة احترافية معتمدة مع ضمان',
        keywords: ['عزل أسطح بالظهران', 'عزل أسطح الظهران', 'شركة عزل أسطح بالظهران', 'أفضل عزل أسطح بالظهران'],
    },

    content: {
        introduction: 'عزل أسطح بالظهران — خدمة متخصصة تراعي الظروف المناخية والبيئية في الظهران. فريق محترف مع أدوات حديثة وضمان مكتوب.',
        shortAnswer: 'عزل أسطح بالظهران: خدمة احترافية بأسعار شفافة. فريق متخصص. ضمان مكتوب.',
        heroSubtitle: 'عزل أسطح بالظهران. خدمة احترافية. ضمان.',
    },

    pricing: [
        { type: 'عزل أسطح — أساسي', unit: 'خدمة', minPrice: 150, maxPrice: 300, time: '1-3 ساعات' },
        { type: 'عزل أسطح — شامل', unit: 'خدمة', minPrice: 300, maxPrice: 600, time: '2-5 ساعات' },
    ],

    faq: [
        { question: 'كم تكلفة عزل أسطح بالظهران؟', answer: 'تبدأ الأسعار من 150 ريال وتختلف حسب المساحة ونوع الخدمة. اطلب عرض سعر مجاني.' },
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
        { slug: 'dhahran-furniture-moving', context: 'نقل عفش بالظهران', priority: 1 },
        { slug: 'dhahran-furniture-storage', context: 'تخزين عفش بالظهران', priority: 2 },
        { slug: 'dhahran-dyna', context: 'دينا نقل بالظهران', priority: 3 },
        { slug: 'dhahran-moving-out', context: 'نقل عفش خروج بالظهران', priority: 4 },
        { slug: 'dhahran-dabab', context: 'دباب نقل بالظهران', priority: 5 },
        { slug: 'dhahran-cleaning', context: 'تنظيف منازل بالظهران', priority: 6 },
        { slug: 'dhahran-tanks-cleaning', context: 'تنظيف خزانات بالظهران', priority: 7 },
        { slug: 'dhahran-sofa-cleaning', context: 'تنظيف كنب بالظهران', priority: 8 },
        { slug: 'dhahran-carpet-cleaning', context: 'تنظيف سجاد بالظهران', priority: 9 },
    ],
};
