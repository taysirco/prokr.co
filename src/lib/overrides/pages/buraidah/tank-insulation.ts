// ══════════════════════════════════════════════════════════════
// عزل خزانات ببريدة — Override مخصص (E-E-A-T Grade)
// صفحة: /buraidah/tank-insulation
// ══════════════════════════════════════════════════════════════

import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'عزل خزانات ببريدة — خدمة احترافية معتمدة (2026)',
        description: 'عزل خزانات ببريدة. خدمة احترافية. فريق متخصص. ضمان مكتوب. أسعار شفافة. خدمة سريعة.',
        h1: 'عزل خزانات ببريدة — خدمة احترافية معتمدة مع ضمان',
        keywords: ['عزل خزانات ببريدة', 'عزل خزانات بريدة', 'شركة عزل خزانات ببريدة', 'أفضل عزل خزانات ببريدة'],
    },

    content: {
        introduction: 'عزل خزانات ببريدة — خدمة متخصصة تراعي الظروف المناخية والبيئية في بريدة. فريق محترف مع أدوات حديثة وضمان مكتوب.',
        shortAnswer: 'عزل خزانات ببريدة: خدمة احترافية بأسعار شفافة. فريق متخصص. ضمان مكتوب.',
        heroSubtitle: 'عزل خزانات ببريدة. خدمة احترافية. ضمان.',
    },

    pricing: [
        { type: 'عزل خزانات — أساسي', unit: 'خدمة', minPrice: 150, maxPrice: 300, time: '1-3 ساعات' },
        { type: 'عزل خزانات — شامل', unit: 'خدمة', minPrice: 300, maxPrice: 600, time: '2-5 ساعات' },
    ],

    faq: [
        { question: 'كم تكلفة عزل خزانات ببريدة؟', answer: 'تبدأ الأسعار من 150 ريال وتختلف حسب المساحة ونوع الخدمة. اطلب عرض سعر مجاني.' },
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
        { slug: 'buraidah-furniture-moving', context: 'نقل عفش ببريدة', priority: 1 },
        { slug: 'buraidah-furniture-storage', context: 'تخزين عفش ببريدة', priority: 2 },
        { slug: 'buraidah-dyna', context: 'دينا نقل ببريدة', priority: 3 },
        { slug: 'buraidah-moving-out', context: 'نقل عفش خروج ببريدة', priority: 4 },
        { slug: 'buraidah-dabab', context: 'دباب نقل ببريدة', priority: 5 },
        { slug: 'buraidah-cleaning', context: 'تنظيف منازل ببريدة', priority: 6 },
        { slug: 'buraidah-tanks-cleaning', context: 'تنظيف خزانات ببريدة', priority: 7 },
        { slug: 'buraidah-sofa-cleaning', context: 'تنظيف كنب ببريدة', priority: 8 },
        { slug: 'buraidah-carpet-cleaning', context: 'تنظيف سجاد ببريدة', priority: 9 },
    ],
};
