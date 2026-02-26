// ══════════════════════════════════════════════════════════════
// كشف تسربات خزانات بالمدينة المنورة — Override مخصص (E-E-A-T Grade)
// صفحة: /madinah/tank-leak-detection
// ══════════════════════════════════════════════════════════════

import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'كشف تسربات خزانات بالمدينة المنورة — خدمة احترافية معتمدة (2026)',
        description: 'كشف تسربات خزانات بالمدينة المنورة. خدمة احترافية. فريق متخصص. ضمان مكتوب. أسعار شفافة. خدمة سريعة.',
        h1: 'كشف تسربات خزانات بالمدينة المنورة — خدمة احترافية معتمدة مع ضمان',
        keywords: ['كشف تسربات خزانات بالمدينة المنورة', 'كشف تسربات خزانات المدينة المنورة', 'شركة كشف تسربات خزانات بالمدينة المنورة', 'أفضل كشف تسربات خزانات بالمدينة المنورة'],
    },

    content: {
        introduction: 'كشف تسربات خزانات بالمدينة المنورة — خدمة متخصصة تراعي الظروف المناخية والبيئية في المدينة المنورة. فريق محترف مع أدوات حديثة وضمان مكتوب.',
        shortAnswer: 'كشف تسربات خزانات بالمدينة المنورة: خدمة احترافية بأسعار شفافة. فريق متخصص. ضمان مكتوب.',
        heroSubtitle: 'كشف تسربات خزانات بالمدينة المنورة. خدمة احترافية. ضمان.',
    },

    pricing: [
        { type: 'كشف تسربات خزانات — أساسي', unit: 'خدمة', minPrice: 150, maxPrice: 300, time: '1-3 ساعات' },
        { type: 'كشف تسربات خزانات — شامل', unit: 'خدمة', minPrice: 300, maxPrice: 600, time: '2-5 ساعات' },
    ],

    faq: [
        { question: 'كم تكلفة كشف تسربات خزانات بالمدينة المنورة؟', answer: 'تبدأ الأسعار من 150 ريال وتختلف حسب المساحة ونوع الخدمة. اطلب عرض سعر مجاني.' },
        { question: 'كم يستغرق كشف تسربات خزانات؟', answer: 'يعتمد على حجم العمل — عادةً من ساعة إلى 5 ساعات. الفريق يقيّم ويحدد الوقت بدقة.' },
        { question: 'هل تقدمون ضمان على كشف تسربات خزانات؟', answer: 'نعم — ضمان مكتوب على جودة العمل. إذا لم تكن راضياً: إعادة الخدمة مجاناً.' },
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
        { slug: 'madinah-furniture-moving', context: 'نقل عفش بالمدينة المنورة', priority: 1 },
        { slug: 'madinah-furniture-storage', context: 'تخزين عفش بالمدينة المنورة', priority: 2 },
        { slug: 'madinah-dyna', context: 'دينا نقل بالمدينة المنورة', priority: 3 },
        { slug: 'madinah-moving-out', context: 'نقل عفش خروج بالمدينة المنورة', priority: 4 },
        { slug: 'madinah-dabab', context: 'دباب نقل بالمدينة المنورة', priority: 5 },
        { slug: 'madinah-cleaning', context: 'تنظيف منازل بالمدينة المنورة', priority: 6 },
        { slug: 'madinah-tanks-cleaning', context: 'تنظيف خزانات بالمدينة المنورة', priority: 7 },
        { slug: 'madinah-sofa-cleaning', context: 'تنظيف كنب بالمدينة المنورة', priority: 8 },
        { slug: 'madinah-carpet-cleaning', context: 'تنظيف سجاد بالمدينة المنورة', priority: 9 },
    ],
};
