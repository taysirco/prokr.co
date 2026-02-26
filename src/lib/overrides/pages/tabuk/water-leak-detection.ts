// ══════════════════════════════════════════════════════════════
// كشف تسربات المياه بتبوك — Override مخصص (E-E-A-T Grade)
// صفحة: /tabuk/water-leak-detection
// ══════════════════════════════════════════════════════════════

import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'كشف تسربات المياه بتبوك — خدمة احترافية معتمدة (2026)',
        description: 'كشف تسربات المياه بتبوك. خدمة احترافية. فريق متخصص. ضمان مكتوب. أسعار شفافة. خدمة سريعة.',
        h1: 'كشف تسربات المياه بتبوك — خدمة احترافية معتمدة مع ضمان',
        keywords: ['كشف تسربات المياه بتبوك', 'كشف تسربات المياه تبوك', 'شركة كشف تسربات المياه بتبوك', 'أفضل كشف تسربات المياه بتبوك'],
    },

    content: {
        introduction: 'كشف تسربات المياه بتبوك — خدمة متخصصة تراعي الظروف المناخية والبيئية في تبوك. فريق محترف مع أدوات حديثة وضمان مكتوب.',
        shortAnswer: 'كشف تسربات المياه بتبوك: خدمة احترافية بأسعار شفافة. فريق متخصص. ضمان مكتوب.',
        heroSubtitle: 'كشف تسربات المياه بتبوك. خدمة احترافية. ضمان.',
    },

    pricing: [
        { type: 'كشف تسربات المياه — أساسي', unit: 'خدمة', minPrice: 150, maxPrice: 300, time: '1-3 ساعات' },
        { type: 'كشف تسربات المياه — شامل', unit: 'خدمة', minPrice: 300, maxPrice: 600, time: '2-5 ساعات' },
    ],

    faq: [
        { question: 'كم تكلفة كشف تسربات المياه بتبوك؟', answer: 'تبدأ الأسعار من 150 ريال وتختلف حسب المساحة ونوع الخدمة. اطلب عرض سعر مجاني.' },
        { question: 'كم يستغرق كشف تسربات المياه؟', answer: 'يعتمد على حجم العمل — عادةً من ساعة إلى 5 ساعات. الفريق يقيّم ويحدد الوقت بدقة.' },
        { question: 'هل تقدمون ضمان على كشف تسربات المياه؟', answer: 'نعم — ضمان مكتوب على جودة العمل. إذا لم تكن راضياً: إعادة الخدمة مجاناً.' },
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
        { ...GOV.NWC, role: 'الجهة المنظمة والمرخصة لهذا القطاع' },
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

    saudiRegulations: [REGULATIONS.NWC_REPORT],

    verificationBadges: [
        { badge: '✔️ تقرير معتمد NWC', authority: 'شركة المياه الوطنية', icon: 'shield-check' },
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
        { slug: 'tabuk-furniture-moving', context: 'نقل عفش بتبوك', priority: 1 },
        { slug: 'tabuk-furniture-storage', context: 'تخزين عفش بتبوك', priority: 2 },
        { slug: 'tabuk-dyna', context: 'دينا نقل بتبوك', priority: 3 },
        { slug: 'tabuk-moving-out', context: 'نقل عفش خروج بتبوك', priority: 4 },
        { slug: 'tabuk-dabab', context: 'دباب نقل بتبوك', priority: 5 },
        { slug: 'tabuk-cleaning', context: 'تنظيف منازل بتبوك', priority: 6 },
        { slug: 'tabuk-tanks-cleaning', context: 'تنظيف خزانات بتبوك', priority: 7 },
        { slug: 'tabuk-sofa-cleaning', context: 'تنظيف كنب بتبوك', priority: 8 },
        { slug: 'tabuk-carpet-cleaning', context: 'تنظيف سجاد بتبوك', priority: 9 },
    ],
};
