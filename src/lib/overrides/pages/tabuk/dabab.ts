// ══════════════════════════════════════════════════════════════
// دباب نقل بتبوك — Override مخصص (E-E-A-T Grade)
// صفحة: /tabuk/dabab
// ══════════════════════════════════════════════════════════════

import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'دباب نقل بتبوك — خدمة احترافية معتمدة (2026)',
        description: 'دباب نقل بتبوك. خدمة احترافية. فريق متخصص. ضمان مكتوب. أسعار شفافة. خدمة سريعة.',
        h1: 'دباب نقل بتبوك — خدمة احترافية معتمدة مع ضمان',
        keywords: ['دباب نقل بتبوك', 'دباب نقل تبوك', 'شركة دباب نقل بتبوك', 'أفضل دباب نقل بتبوك'],
    },

    content: {
        introduction: 'دباب نقل بتبوك — خدمة متخصصة تراعي الظروف المناخية والبيئية في تبوك. فريق محترف مع أدوات حديثة وضمان مكتوب.',
        shortAnswer: 'دباب نقل بتبوك: خدمة احترافية بأسعار شفافة. فريق متخصص. ضمان مكتوب.',
        heroSubtitle: 'دباب نقل بتبوك. خدمة احترافية. ضمان.',
    },

    pricing: [
        { type: 'دباب نقل — أساسي', unit: 'خدمة', minPrice: 150, maxPrice: 300, time: '1-3 ساعات' },
        { type: 'دباب نقل — شامل', unit: 'خدمة', minPrice: 300, maxPrice: 600, time: '2-5 ساعات' },
    ],

    faq: [
        { question: 'كم تكلفة دباب نقل بتبوك؟', answer: 'تبدأ الأسعار من 150 ريال وتختلف حسب المساحة ونوع الخدمة. اطلب عرض سعر مجاني.' },
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
        { slug: 'tabuk-furniture-moving', context: 'نقل عفش بتبوك', priority: 1 },
        { slug: 'tabuk-furniture-storage', context: 'تخزين عفش بتبوك', priority: 2 },
        { slug: 'tabuk-dyna', context: 'دينا نقل بتبوك', priority: 3 },
        { slug: 'tabuk-moving-out', context: 'نقل عفش خروج بتبوك', priority: 4 },
        { slug: 'tabuk-cleaning', context: 'تنظيف منازل بتبوك', priority: 5 },
        { slug: 'tabuk-tanks-cleaning', context: 'تنظيف خزانات بتبوك', priority: 6 },
        { slug: 'tabuk-sofa-cleaning', context: 'تنظيف كنب بتبوك', priority: 7 },
        { slug: 'tabuk-carpet-cleaning', context: 'تنظيف سجاد بتبوك', priority: 8 },
        { slug: 'tabuk-steam-cleaning', context: 'تنظيف بالبخار بتبوك', priority: 9 },
    ],
};
