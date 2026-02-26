// ══════════════════════════════════════════════════════════════
// نقل عفش بجازان — Override مخصص (E-E-A-T Grade)
// صفحة: /jazan/furniture-moving
// ══════════════════════════════════════════════════════════════

import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'نقل عفش بجازان — خدمة احترافية معتمدة (2026)',
        description: 'نقل عفش بجازان. خدمة احترافية. فريق متخصص. ضمان مكتوب. أسعار شفافة. خدمة سريعة.',
        h1: 'نقل عفش بجازان — خدمة احترافية معتمدة مع ضمان',
        keywords: ['نقل عفش بجازان', 'نقل عفش جازان', 'شركة نقل عفش بجازان', 'أفضل نقل عفش بجازان'],
    },

    content: {
        introduction: 'نقل عفش بجازان — خدمة متخصصة تراعي الظروف المناخية والبيئية في جازان. فريق محترف مع أدوات حديثة وضمان مكتوب.',
        shortAnswer: 'نقل عفش بجازان: خدمة احترافية بأسعار شفافة. فريق متخصص. ضمان مكتوب.',
        heroSubtitle: 'نقل عفش بجازان. خدمة احترافية. ضمان.',
    },

    pricing: [
        { type: 'نقل عفش — أساسي', unit: 'خدمة', minPrice: 150, maxPrice: 300, time: '1-3 ساعات' },
        { type: 'نقل عفش — شامل', unit: 'خدمة', minPrice: 300, maxPrice: 600, time: '2-5 ساعات' },
    ],

    faq: [
        { question: 'كم تكلفة نقل عفش بجازان؟', answer: 'تبدأ الأسعار من 150 ريال وتختلف حسب المساحة ونوع الخدمة. اطلب عرض سعر مجاني.' },
        { question: 'كم يستغرق نقل عفش؟', answer: 'يعتمد على حجم العمل — عادةً من ساعة إلى 5 ساعات. الفريق يقيّم ويحدد الوقت بدقة.' },
        { question: 'هل تقدمون ضمان على نقل عفش؟', answer: 'نعم — ضمان مكتوب على جودة العمل. إذا لم تكن راضياً: إعادة الخدمة مجاناً.' },
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
        { slug: 'jazan-furniture-storage', context: 'تخزين عفش بجازان', priority: 1 },
        { slug: 'jazan-dyna', context: 'دينا نقل بجازان', priority: 2 },
        { slug: 'jazan-moving-out', context: 'نقل عفش خروج بجازان', priority: 3 },
        { slug: 'jazan-dabab', context: 'دباب نقل بجازان', priority: 4 },
        { slug: 'jazan-cleaning', context: 'تنظيف منازل بجازان', priority: 5 },
        { slug: 'jazan-tanks-cleaning', context: 'تنظيف خزانات بجازان', priority: 6 },
        { slug: 'jazan-sofa-cleaning', context: 'تنظيف كنب بجازان', priority: 7 },
        { slug: 'jazan-carpet-cleaning', context: 'تنظيف سجاد بجازان', priority: 8 },
        { slug: 'jazan-steam-cleaning', context: 'تنظيف بالبخار بجازان', priority: 9 },
    ],
};
