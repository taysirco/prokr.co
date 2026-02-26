// ══════════════════════════════════════════════════════════════
// دينا نقل بتبوك — Override مخصص (E-E-A-T Grade)
// صفحة: /tabuk/dyna
// ══════════════════════════════════════════════════════════════

import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'دينا نقل بتبوك — خدمة احترافية معتمدة (2026)',
        description: 'دينا نقل بتبوك. خدمة احترافية. فريق متخصص. ضمان مكتوب. أسعار شفافة. خدمة سريعة.',
        h1: 'دينا نقل بتبوك — خدمة احترافية معتمدة مع ضمان',
        keywords: ['دينا نقل بتبوك', 'دينا نقل تبوك', 'شركة دينا نقل بتبوك', 'أفضل دينا نقل بتبوك'],
    },

    content: {
        introduction: 'دينا نقل بتبوك — خدمة متخصصة تراعي الظروف المناخية والبيئية في تبوك. فريق محترف مع أدوات حديثة وضمان مكتوب.',
        shortAnswer: 'دينا نقل بتبوك: خدمة احترافية بأسعار شفافة. فريق متخصص. ضمان مكتوب.',
        heroSubtitle: 'دينا نقل بتبوك. خدمة احترافية. ضمان.',
    },

    pricing: [
        { type: 'دينا نقل — أساسي', unit: 'خدمة', minPrice: 150, maxPrice: 300, time: '1-3 ساعات' },
        { type: 'دينا نقل — شامل', unit: 'خدمة', minPrice: 300, maxPrice: 600, time: '2-5 ساعات' },
    ],

    faq: [
        { question: 'كم تكلفة دينا نقل بتبوك؟', answer: 'تبدأ الأسعار من 150 ريال وتختلف حسب المساحة ونوع الخدمة. اطلب عرض سعر مجاني.' },
        { question: 'كم يستغرق دينا نقل؟', answer: 'يعتمد على حجم العمل — عادةً من ساعة إلى 5 ساعات. الفريق يقيّم ويحدد الوقت بدقة.' },
        { question: 'هل تقدمون ضمان على دينا نقل؟', answer: 'نعم — ضمان مكتوب على جودة العمل. إذا لم تكن راضياً: إعادة الخدمة مجاناً.' },
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
        { slug: 'tabuk-moving-out', context: 'نقل عفش خروج بتبوك', priority: 3 },
        { slug: 'tabuk-dabab', context: 'دباب نقل بتبوك', priority: 4 },
        { slug: 'tabuk-cleaning', context: 'تنظيف منازل بتبوك', priority: 5 },
        { slug: 'tabuk-tanks-cleaning', context: 'تنظيف خزانات بتبوك', priority: 6 },
        { slug: 'tabuk-sofa-cleaning', context: 'تنظيف كنب بتبوك', priority: 7 },
        { slug: 'tabuk-carpet-cleaning', context: 'تنظيف سجاد بتبوك', priority: 8 },
        { slug: 'tabuk-steam-cleaning', context: 'تنظيف بالبخار بتبوك', priority: 9 },
    ],
};
