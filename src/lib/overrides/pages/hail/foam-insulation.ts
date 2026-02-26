// ══════════════════════════════════════════════════════════════
// عزل فوم بحائل — Override مخصص (E-E-A-T Grade)
// صفحة: /hail/foam-insulation
// ══════════════════════════════════════════════════════════════

import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'عزل فوم بحائل — خدمة احترافية معتمدة (2026)',
        description: 'عزل فوم بحائل. خدمة احترافية. فريق متخصص. ضمان مكتوب. أسعار شفافة. خدمة سريعة.',
        h1: 'عزل فوم بحائل — خدمة احترافية معتمدة مع ضمان',
        keywords: ['عزل فوم بحائل', 'عزل فوم حائل', 'شركة عزل فوم بحائل', 'أفضل عزل فوم بحائل'],
    },

    content: {
        introduction: 'عزل فوم بحائل — خدمة متخصصة تراعي الظروف المناخية والبيئية في حائل. فريق محترف مع أدوات حديثة وضمان مكتوب.',
        shortAnswer: 'عزل فوم بحائل: خدمة احترافية بأسعار شفافة. فريق متخصص. ضمان مكتوب.',
        heroSubtitle: 'عزل فوم بحائل. خدمة احترافية. ضمان.',
    },

    pricing: [
        { type: 'عزل فوم — أساسي', unit: 'خدمة', minPrice: 150, maxPrice: 300, time: '1-3 ساعات' },
        { type: 'عزل فوم — شامل', unit: 'خدمة', minPrice: 300, maxPrice: 600, time: '2-5 ساعات' },
    ],

    faq: [
        { question: 'كم تكلفة عزل فوم بحائل؟', answer: 'تبدأ الأسعار من 150 ريال وتختلف حسب المساحة ونوع الخدمة. اطلب عرض سعر مجاني.' },
        { question: 'كم يستغرق عزل فوم؟', answer: 'يعتمد على حجم العمل — عادةً من ساعة إلى 5 ساعات. الفريق يقيّم ويحدد الوقت بدقة.' },
        { question: 'هل تقدمون ضمان على عزل فوم؟', answer: 'نعم — ضمان مكتوب على جودة العمل. إذا لم تكن راضياً: إعادة الخدمة مجاناً.' },
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
        { slug: 'hail-furniture-moving', context: 'نقل عفش بحائل', priority: 1 },
        { slug: 'hail-furniture-storage', context: 'تخزين عفش بحائل', priority: 2 },
        { slug: 'hail-dyna', context: 'دينا نقل بحائل', priority: 3 },
        { slug: 'hail-moving-out', context: 'نقل عفش خروج بحائل', priority: 4 },
        { slug: 'hail-dabab', context: 'دباب نقل بحائل', priority: 5 },
        { slug: 'hail-cleaning', context: 'تنظيف منازل بحائل', priority: 6 },
        { slug: 'hail-tanks-cleaning', context: 'تنظيف خزانات بحائل', priority: 7 },
        { slug: 'hail-sofa-cleaning', context: 'تنظيف كنب بحائل', priority: 8 },
        { slug: 'hail-carpet-cleaning', context: 'تنظيف سجاد بحائل', priority: 9 },
    ],
};
