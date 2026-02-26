// ══════════════════════════════════════════════════════════════
// كشف تسربات خزانات بالقطيف — Override مخصص (E-E-A-T Grade)
// صفحة: /qatif/tank-leak-detection
// ══════════════════════════════════════════════════════════════

import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'كشف تسربات خزانات بالقطيف — خدمة احترافية معتمدة (2026)',
        description: 'كشف تسربات خزانات بالقطيف. خدمة احترافية. فريق متخصص. ضمان مكتوب. أسعار شفافة. خدمة سريعة.',
        h1: 'كشف تسربات خزانات بالقطيف — خدمة احترافية معتمدة مع ضمان',
        keywords: ['كشف تسربات خزانات بالقطيف', 'كشف تسربات خزانات القطيف', 'شركة كشف تسربات خزانات بالقطيف', 'أفضل كشف تسربات خزانات بالقطيف'],
    },

    content: {
        introduction: 'كشف تسربات خزانات بالقطيف — خدمة متخصصة تراعي الظروف المناخية والبيئية في القطيف. فريق محترف مع أدوات حديثة وضمان مكتوب.',
        shortAnswer: 'كشف تسربات خزانات بالقطيف: خدمة احترافية بأسعار شفافة. فريق متخصص. ضمان مكتوب.',
        heroSubtitle: 'كشف تسربات خزانات بالقطيف. خدمة احترافية. ضمان.',
    },

    pricing: [
        { type: 'كشف تسربات خزانات — أساسي', unit: 'خدمة', minPrice: 150, maxPrice: 300, time: '1-3 ساعات' },
        { type: 'كشف تسربات خزانات — شامل', unit: 'خدمة', minPrice: 300, maxPrice: 600, time: '2-5 ساعات' },
    ],

    faq: [
        { question: 'كم تكلفة كشف تسربات خزانات بالقطيف؟', answer: 'تبدأ الأسعار من 150 ريال وتختلف حسب المساحة ونوع الخدمة. اطلب عرض سعر مجاني.' },
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
        { slug: 'qatif-furniture-moving', context: 'نقل عفش بالقطيف', priority: 1 },
        { slug: 'qatif-furniture-storage', context: 'تخزين عفش بالقطيف', priority: 2 },
        { slug: 'qatif-dyna', context: 'دينا نقل بالقطيف', priority: 3 },
        { slug: 'qatif-moving-out', context: 'نقل عفش خروج بالقطيف', priority: 4 },
        { slug: 'qatif-dabab', context: 'دباب نقل بالقطيف', priority: 5 },
        { slug: 'qatif-cleaning', context: 'تنظيف منازل بالقطيف', priority: 6 },
        { slug: 'qatif-tanks-cleaning', context: 'تنظيف خزانات بالقطيف', priority: 7 },
        { slug: 'qatif-sofa-cleaning', context: 'تنظيف كنب بالقطيف', priority: 8 },
        { slug: 'qatif-carpet-cleaning', context: 'تنظيف سجاد بالقطيف', priority: 9 },
    ],
};
