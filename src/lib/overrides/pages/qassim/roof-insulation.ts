// ══════════════════════════════════════════════════════════════
// عزل أسطح بالقصيم — Override مخصص (E-E-A-T Grade)
// صفحة: /qassim/roof-insulation
// ══════════════════════════════════════════════════════════════

import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'عزل أسطح بالقصيم — خدمة احترافية معتمدة (2026)',
        description: 'عزل أسطح بالقصيم. خدمة احترافية. فريق متخصص. ضمان مكتوب. أسعار شفافة. خدمة سريعة.',
        h1: 'عزل أسطح بالقصيم — خدمة احترافية معتمدة مع ضمان',
        keywords: ['عزل أسطح بالقصيم', 'عزل أسطح القصيم', 'شركة عزل أسطح بالقصيم', 'أفضل عزل أسطح بالقصيم'],
    },

    content: {
        introduction: 'عزل أسطح بالقصيم — خدمة متخصصة تراعي الظروف المناخية والبيئية في القصيم. فريق محترف مع أدوات حديثة وضمان مكتوب.',
        shortAnswer: 'عزل أسطح بالقصيم: خدمة احترافية بأسعار شفافة. فريق متخصص. ضمان مكتوب.',
        heroSubtitle: 'عزل أسطح بالقصيم. خدمة احترافية. ضمان.',
    },

    pricing: [
        { type: 'عزل أسطح — أساسي', unit: 'خدمة', minPrice: 150, maxPrice: 300, time: '1-3 ساعات' },
        { type: 'عزل أسطح — شامل', unit: 'خدمة', minPrice: 300, maxPrice: 600, time: '2-5 ساعات' },
    ],

    faq: [
        { question: 'كم تكلفة عزل أسطح بالقصيم؟', answer: 'تبدأ الأسعار من 150 ريال وتختلف حسب المساحة ونوع الخدمة. اطلب عرض سعر مجاني.' },
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
        { slug: 'qassim-furniture-moving', context: 'نقل عفش بالقصيم', priority: 1 },
        { slug: 'qassim-furniture-storage', context: 'تخزين عفش بالقصيم', priority: 2 },
        { slug: 'qassim-dyna', context: 'دينا نقل بالقصيم', priority: 3 },
        { slug: 'qassim-moving-out', context: 'نقل عفش خروج بالقصيم', priority: 4 },
        { slug: 'qassim-dabab', context: 'دباب نقل بالقصيم', priority: 5 },
        { slug: 'qassim-cleaning', context: 'تنظيف منازل بالقصيم', priority: 6 },
        { slug: 'qassim-tanks-cleaning', context: 'تنظيف خزانات بالقصيم', priority: 7 },
        { slug: 'qassim-sofa-cleaning', context: 'تنظيف كنب بالقصيم', priority: 8 },
        { slug: 'qassim-carpet-cleaning', context: 'تنظيف سجاد بالقصيم', priority: 9 },
    ],
};
