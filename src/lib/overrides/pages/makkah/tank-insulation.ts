// ══════════════════════════════════════════════════════════════
// عزل خزانات بمكة المكرمة — Override مخصص (E-E-A-T Grade)
// صفحة: /makkah/tank-insulation
// ══════════════════════════════════════════════════════════════

import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'عزل خزانات بمكة المكرمة — خدمة احترافية معتمدة (2026)',
        description: 'عزل خزانات بمكة المكرمة. خدمة احترافية. فريق متخصص. ضمان مكتوب. أسعار شفافة. خدمة سريعة.',
        h1: 'عزل خزانات بمكة المكرمة — خدمة احترافية معتمدة مع ضمان',
        keywords: ['عزل خزانات بمكة المكرمة', 'عزل خزانات مكة المكرمة', 'شركة عزل خزانات بمكة المكرمة', 'أفضل عزل خزانات بمكة المكرمة'],
    },

    content: {
        introduction: 'عزل خزانات بمكة المكرمة — خدمة متخصصة تراعي الظروف المناخية والبيئية في مكة المكرمة. فريق محترف مع أدوات حديثة وضمان مكتوب.',
        shortAnswer: 'عزل خزانات بمكة المكرمة: خدمة احترافية بأسعار شفافة. فريق متخصص. ضمان مكتوب.',
        heroSubtitle: 'عزل خزانات بمكة المكرمة. خدمة احترافية. ضمان.',
    },

    pricing: [
        { type: 'عزل خزانات — أساسي', unit: 'خدمة', minPrice: 150, maxPrice: 300, time: '1-3 ساعات' },
        { type: 'عزل خزانات — شامل', unit: 'خدمة', minPrice: 300, maxPrice: 600, time: '2-5 ساعات' },
    ],

    faq: [
        { question: 'كم تكلفة عزل خزانات بمكة المكرمة؟', answer: 'تبدأ الأسعار من 150 ريال وتختلف حسب المساحة ونوع الخدمة. اطلب عرض سعر مجاني.' },
        { question: 'كم يستغرق عزل خزانات؟', answer: 'يعتمد على حجم العمل — عادةً من ساعة إلى 5 ساعات. الفريق يقيّم ويحدد الوقت بدقة.' },
        { question: 'هل تقدمون ضمان على عزل خزانات؟', answer: 'نعم — ضمان مكتوب على جودة العمل. إذا لم تكن راضياً: إعادة الخدمة مجاناً.' },
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
        { slug: 'makkah-furniture-moving', context: 'نقل عفش بمكة المكرمة', priority: 1 },
        { slug: 'makkah-furniture-storage', context: 'تخزين عفش بمكة المكرمة', priority: 2 },
        { slug: 'makkah-dyna', context: 'دينا نقل بمكة المكرمة', priority: 3 },
        { slug: 'makkah-moving-out', context: 'نقل عفش خروج بمكة المكرمة', priority: 4 },
        { slug: 'makkah-dabab', context: 'دباب نقل بمكة المكرمة', priority: 5 },
        { slug: 'makkah-cleaning', context: 'تنظيف منازل بمكة المكرمة', priority: 6 },
        { slug: 'makkah-tanks-cleaning', context: 'تنظيف خزانات بمكة المكرمة', priority: 7 },
        { slug: 'makkah-sofa-cleaning', context: 'تنظيف كنب بمكة المكرمة', priority: 8 },
        { slug: 'makkah-carpet-cleaning', context: 'تنظيف سجاد بمكة المكرمة', priority: 9 },
    ],
};
