// ══════════════════════════════════════════════════════════════
// كشف تسربات المياه بأبها — Override مخصص (E-E-A-T Grade)
// صفحة: /abha/water-leak-detection
// ══════════════════════════════════════════════════════════════

import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'كشف تسربات المياه بأبها — خدمة احترافية معتمدة (2026)',
        description: 'كشف تسربات المياه بأبها. خدمة احترافية. فريق متخصص. ضمان مكتوب. أسعار شفافة. خدمة سريعة.',
        h1: 'كشف تسربات المياه بأبها — خدمة احترافية معتمدة مع ضمان',
        keywords: ['كشف تسربات المياه بأبها', 'كشف تسربات المياه أبها', 'شركة كشف تسربات المياه بأبها', 'أفضل كشف تسربات المياه بأبها'],
    },

    content: {
        introduction: 'كشف تسربات المياه بأبها — خدمة متخصصة تراعي الظروف المناخية والبيئية في أبها. فريق محترف مع أدوات حديثة وضمان مكتوب.',
        shortAnswer: 'كشف تسربات المياه بأبها: خدمة احترافية بأسعار شفافة. فريق متخصص. ضمان مكتوب.',
        heroSubtitle: 'كشف تسربات المياه بأبها. خدمة احترافية. ضمان.',
    },

    pricing: [
        { type: 'كشف تسربات المياه — أساسي', unit: 'خدمة', minPrice: 150, maxPrice: 300, time: '1-3 ساعات' },
        { type: 'كشف تسربات المياه — شامل', unit: 'خدمة', minPrice: 300, maxPrice: 600, time: '2-5 ساعات' },
    ],

    faq: [
        { question: 'كم تكلفة كشف تسربات المياه بأبها؟', answer: 'تبدأ الأسعار من 150 ريال وتختلف حسب المساحة ونوع الخدمة. اطلب عرض سعر مجاني.' },
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
        { slug: 'abha-furniture-moving', context: 'نقل عفش بأبها', priority: 1 },
        { slug: 'abha-furniture-storage', context: 'تخزين عفش بأبها', priority: 2 },
        { slug: 'abha-dyna', context: 'دينا نقل بأبها', priority: 3 },
        { slug: 'abha-moving-out', context: 'نقل عفش خروج بأبها', priority: 4 },
        { slug: 'abha-dabab', context: 'دباب نقل بأبها', priority: 5 },
        { slug: 'abha-cleaning', context: 'تنظيف منازل بأبها', priority: 6 },
        { slug: 'abha-tanks-cleaning', context: 'تنظيف خزانات بأبها', priority: 7 },
        { slug: 'abha-sofa-cleaning', context: 'تنظيف كنب بأبها', priority: 8 },
        { slug: 'abha-carpet-cleaning', context: 'تنظيف سجاد بأبها', priority: 9 },
    ],
};
