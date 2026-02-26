// ══════════════════════════════════════════════════════════════
// دباب نقل بنجران — Override مخصص (E-E-A-T Grade)
// صفحة: /najran/dabab
// ══════════════════════════════════════════════════════════════

import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'دباب نقل بنجران — خدمة احترافية معتمدة (2026)',
        description: 'دباب نقل بنجران. خدمة احترافية. فريق متخصص. ضمان مكتوب. أسعار شفافة. خدمة سريعة.',
        h1: 'دباب نقل بنجران — خدمة احترافية معتمدة مع ضمان',
        keywords: ['دباب نقل بنجران', 'دباب نقل نجران', 'شركة دباب نقل بنجران', 'أفضل دباب نقل بنجران'],
    },

    content: {
        introduction: 'دباب نقل بنجران — خدمة متخصصة تراعي الظروف المناخية والبيئية في نجران. فريق محترف مع أدوات حديثة وضمان مكتوب.',
        shortAnswer: 'دباب نقل بنجران: خدمة احترافية بأسعار شفافة. فريق متخصص. ضمان مكتوب.',
        heroSubtitle: 'دباب نقل بنجران. خدمة احترافية. ضمان.',
    },

    pricing: [
        { type: 'دباب نقل — أساسي', unit: 'خدمة', minPrice: 150, maxPrice: 300, time: '1-3 ساعات' },
        { type: 'دباب نقل — شامل', unit: 'خدمة', minPrice: 300, maxPrice: 600, time: '2-5 ساعات' },
    ],

    faq: [
        { question: 'كم تكلفة دباب نقل بنجران؟', answer: 'تبدأ الأسعار من 150 ريال وتختلف حسب المساحة ونوع الخدمة. اطلب عرض سعر مجاني.' },
        { question: 'كم يستغرق دباب نقل؟', answer: 'يعتمد على حجم العمل — عادةً من ساعة إلى 5 ساعات. الفريق يقيّم ويحدد الوقت بدقة.' },
        { question: 'هل تقدمون ضمان على دباب نقل؟', answer: 'نعم — ضمان مكتوب على جودة العمل. إذا لم تكن راضياً: إعادة الخدمة مجاناً.' },
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
        { ...GOV.TGA, role: 'الجهة المنظمة والمرخصة لهذا القطاع' },
    ],

    expertReviewer: {
        name: EXPERTS.ALZUWAYED.name,
        title: EXPERTS.ALZUWAYED.title,
        credential: EXPERTS.ALZUWAYED.credential,
        profileUrl: EXPERTS.ALZUWAYED.profileUrl,
    },

    expertCitations: [
        {
            expert: EXPERTS.ALZUWAYED.name,
            quote: 'الالتزام بالمعايير والاشتراطات السعودية ضرورة — يحمي العميل ويضمن جودة العمل',
            source: EXPERTS.ALZUWAYED.title,
            url: EXPERTS.ALZUWAYED.profileUrl,
        },
    ],

    saudiRegulations: [REGULATIONS.TGA_LICENSE],

    verificationBadges: [
        { badge: '✔️ شركة نقل مرخصة من هيئة النقل TGA', authority: 'الهيئة العامة للنقل', icon: 'shield-check' },
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
        { slug: 'najran-furniture-moving', context: 'نقل عفش بنجران', priority: 1 },
        { slug: 'najran-furniture-storage', context: 'تخزين عفش بنجران', priority: 2 },
        { slug: 'najran-dyna', context: 'دينا نقل بنجران', priority: 3 },
        { slug: 'najran-moving-out', context: 'نقل عفش خروج بنجران', priority: 4 },
        { slug: 'najran-cleaning', context: 'تنظيف منازل بنجران', priority: 5 },
        { slug: 'najran-tanks-cleaning', context: 'تنظيف خزانات بنجران', priority: 6 },
        { slug: 'najran-sofa-cleaning', context: 'تنظيف كنب بنجران', priority: 7 },
        { slug: 'najran-carpet-cleaning', context: 'تنظيف سجاد بنجران', priority: 8 },
        { slug: 'najran-steam-cleaning', context: 'تنظيف بالبخار بنجران', priority: 9 },
    ],
};
