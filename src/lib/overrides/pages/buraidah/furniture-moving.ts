// ══════════════════════════════════════════════════════════════
// نقل عفش ببريدة — Override مخصص (E-E-A-T Grade)
// صفحة: /buraidah/furniture-moving
// ══════════════════════════════════════════════════════════════

import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'نقل عفش ببريدة — خدمة احترافية معتمدة (2026)',
        description: 'نقل عفش ببريدة. خدمة احترافية. فريق متخصص. ضمان مكتوب. أسعار شفافة. خدمة سريعة.',
        h1: 'نقل عفش ببريدة — خدمة احترافية معتمدة مع ضمان',
        keywords: ['نقل عفش ببريدة', 'نقل عفش بريدة', 'شركة نقل عفش ببريدة', 'أفضل نقل عفش ببريدة'],
    },

    content: {
        introduction: 'نقل عفش ببريدة — خدمة متخصصة تراعي الظروف المناخية والبيئية في بريدة. فريق محترف مع أدوات حديثة وضمان مكتوب.',
        shortAnswer: 'نقل عفش ببريدة: خدمة احترافية بأسعار شفافة. فريق متخصص. ضمان مكتوب.',
        heroSubtitle: 'نقل عفش ببريدة. خدمة احترافية. ضمان.',
    },

    pricing: [
        { type: 'نقل عفش — أساسي', unit: 'خدمة', minPrice: 150, maxPrice: 300, time: '1-3 ساعات' },
        { type: 'نقل عفش — شامل', unit: 'خدمة', minPrice: 300, maxPrice: 600, time: '2-5 ساعات' },
    ],

    faq: [
        { question: 'كم تكلفة نقل عفش ببريدة؟', answer: 'تبدأ الأسعار من 150 ريال وتختلف حسب المساحة ونوع الخدمة. اطلب عرض سعر مجاني.' },
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
        { slug: 'buraidah-furniture-storage', context: 'تخزين عفش ببريدة', priority: 1 },
        { slug: 'buraidah-dyna', context: 'دينا نقل ببريدة', priority: 2 },
        { slug: 'buraidah-moving-out', context: 'نقل عفش خروج ببريدة', priority: 3 },
        { slug: 'buraidah-dabab', context: 'دباب نقل ببريدة', priority: 4 },
        { slug: 'buraidah-cleaning', context: 'تنظيف منازل ببريدة', priority: 5 },
        { slug: 'buraidah-tanks-cleaning', context: 'تنظيف خزانات ببريدة', priority: 6 },
        { slug: 'buraidah-sofa-cleaning', context: 'تنظيف كنب ببريدة', priority: 7 },
        { slug: 'buraidah-carpet-cleaning', context: 'تنظيف سجاد ببريدة', priority: 8 },
        { slug: 'buraidah-steam-cleaning', context: 'تنظيف بالبخار ببريدة', priority: 9 },
    ],
};
