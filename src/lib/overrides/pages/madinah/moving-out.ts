// ══════════════════════════════════════════════════════════════
// نقل عفش خروج بالمدينة المنورة — Override مخصص (E-E-A-T Grade)
// صفحة: /madinah/moving-out
// ══════════════════════════════════════════════════════════════

import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'نقل عفش خروج بالمدينة المنورة — خدمة احترافية معتمدة (2026)',
        description: 'نقل عفش خروج بالمدينة المنورة. خدمة احترافية. فريق متخصص. ضمان مكتوب. أسعار شفافة. خدمة سريعة.',
        h1: 'نقل عفش خروج بالمدينة المنورة — خدمة احترافية معتمدة مع ضمان',
        keywords: ['نقل عفش خروج بالمدينة المنورة', 'نقل عفش خروج المدينة المنورة', 'شركة نقل عفش خروج بالمدينة المنورة', 'أفضل نقل عفش خروج بالمدينة المنورة'],
    },

    content: {
        introduction: 'نقل عفش خروج بالمدينة المنورة — خدمة متخصصة تراعي الظروف المناخية والبيئية في المدينة المنورة. فريق محترف مع أدوات حديثة وضمان مكتوب.',
        shortAnswer: 'نقل عفش خروج بالمدينة المنورة: خدمة احترافية بأسعار شفافة. فريق متخصص. ضمان مكتوب.',
        heroSubtitle: 'نقل عفش خروج بالمدينة المنورة. خدمة احترافية. ضمان.',
    },

    pricing: [
        { type: 'نقل عفش خروج — أساسي', unit: 'خدمة', minPrice: 150, maxPrice: 300, time: '1-3 ساعات' },
        { type: 'نقل عفش خروج — شامل', unit: 'خدمة', minPrice: 300, maxPrice: 600, time: '2-5 ساعات' },
    ],

    faq: [
        { question: 'كم تكلفة نقل عفش خروج بالمدينة المنورة؟', answer: 'تبدأ الأسعار من 150 ريال وتختلف حسب المساحة ونوع الخدمة. اطلب عرض سعر مجاني.' },
        { question: 'كم يستغرق نقل عفش خروج؟', answer: 'يعتمد على حجم العمل — عادةً من ساعة إلى 5 ساعات. الفريق يقيّم ويحدد الوقت بدقة.' },
        { question: 'هل تقدمون ضمان على نقل عفش خروج؟', answer: 'نعم — ضمان مكتوب على جودة العمل. إذا لم تكن راضياً: إعادة الخدمة مجاناً.' },
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
        { slug: 'madinah-furniture-moving', context: 'نقل عفش بالمدينة المنورة', priority: 1 },
        { slug: 'madinah-furniture-storage', context: 'تخزين عفش بالمدينة المنورة', priority: 2 },
        { slug: 'madinah-dyna', context: 'دينا نقل بالمدينة المنورة', priority: 3 },
        { slug: 'madinah-dabab', context: 'دباب نقل بالمدينة المنورة', priority: 4 },
        { slug: 'madinah-cleaning', context: 'تنظيف منازل بالمدينة المنورة', priority: 5 },
        { slug: 'madinah-tanks-cleaning', context: 'تنظيف خزانات بالمدينة المنورة', priority: 6 },
        { slug: 'madinah-sofa-cleaning', context: 'تنظيف كنب بالمدينة المنورة', priority: 7 },
        { slug: 'madinah-carpet-cleaning', context: 'تنظيف سجاد بالمدينة المنورة', priority: 8 },
        { slug: 'madinah-steam-cleaning', context: 'تنظيف بالبخار بالمدينة المنورة', priority: 9 },
    ],
};
