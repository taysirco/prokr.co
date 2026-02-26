// ══════════════════════════════════════════════════════════════
// كشف تسربات المياه بعنيزة — Override مخصص (E-E-A-T Grade)
// صفحة: /onizah/water-leak-detection
// ══════════════════════════════════════════════════════════════

import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'كشف تسربات المياه بعنيزة — خدمة احترافية معتمدة (2026)',
        description: 'كشف تسربات المياه بعنيزة. خدمة احترافية. فريق متخصص. ضمان مكتوب. أسعار شفافة. خدمة سريعة.',
        h1: 'كشف تسربات المياه بعنيزة — خدمة احترافية معتمدة مع ضمان',
        keywords: ['كشف تسربات المياه بعنيزة', 'كشف تسربات المياه عنيزة', 'شركة كشف تسربات المياه بعنيزة', 'أفضل كشف تسربات المياه بعنيزة'],
    },

    content: {
        introduction: 'كشف تسربات المياه بعنيزة — خدمة متخصصة تراعي الظروف المناخية والبيئية في عنيزة. فريق محترف مع أدوات حديثة وضمان مكتوب.',
        shortAnswer: 'كشف تسربات المياه بعنيزة: خدمة احترافية بأسعار شفافة. فريق متخصص. ضمان مكتوب.',
        heroSubtitle: 'كشف تسربات المياه بعنيزة. خدمة احترافية. ضمان.',
    },

    pricing: [
        { type: 'كشف تسربات المياه — أساسي', unit: 'خدمة', minPrice: 150, maxPrice: 300, time: '1-3 ساعات' },
        { type: 'كشف تسربات المياه — شامل', unit: 'خدمة', minPrice: 300, maxPrice: 600, time: '2-5 ساعات' },
    ],

    faq: [
        { question: 'كم تكلفة كشف تسربات المياه بعنيزة؟', answer: 'تبدأ الأسعار من 150 ريال وتختلف حسب المساحة ونوع الخدمة. اطلب عرض سعر مجاني.' },
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
        { slug: 'onizah-furniture-moving', context: 'نقل عفش بعنيزة', priority: 1 },
        { slug: 'onizah-furniture-storage', context: 'تخزين عفش بعنيزة', priority: 2 },
        { slug: 'onizah-dyna', context: 'دينا نقل بعنيزة', priority: 3 },
        { slug: 'onizah-moving-out', context: 'نقل عفش خروج بعنيزة', priority: 4 },
        { slug: 'onizah-dabab', context: 'دباب نقل بعنيزة', priority: 5 },
        { slug: 'onizah-cleaning', context: 'تنظيف منازل بعنيزة', priority: 6 },
        { slug: 'onizah-tanks-cleaning', context: 'تنظيف خزانات بعنيزة', priority: 7 },
        { slug: 'onizah-sofa-cleaning', context: 'تنظيف كنب بعنيزة', priority: 8 },
        { slug: 'onizah-carpet-cleaning', context: 'تنظيف سجاد بعنيزة', priority: 9 },
    ],
};
