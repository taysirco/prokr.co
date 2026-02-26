// ══════════════════════════════════════════════════════════════
// تخزين عفش بالقصيم — Override مخصص (E-E-A-T Grade)
// صفحة: /qassim/furniture-storage
// ══════════════════════════════════════════════════════════════

import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تخزين عفش بالقصيم — خدمة احترافية معتمدة (2026)',
        description: 'تخزين عفش بالقصيم. خدمة احترافية. فريق متخصص. ضمان مكتوب. أسعار شفافة. خدمة سريعة.',
        h1: 'تخزين عفش بالقصيم — خدمة احترافية معتمدة مع ضمان',
        keywords: ['تخزين عفش بالقصيم', 'تخزين عفش القصيم', 'شركة تخزين عفش بالقصيم', 'أفضل تخزين عفش بالقصيم'],
    },

    content: {
        introduction: 'تخزين عفش بالقصيم — خدمة متخصصة تراعي الظروف المناخية والبيئية في القصيم. فريق محترف مع أدوات حديثة وضمان مكتوب.',
        shortAnswer: 'تخزين عفش بالقصيم: خدمة احترافية بأسعار شفافة. فريق متخصص. ضمان مكتوب.',
        heroSubtitle: 'تخزين عفش بالقصيم. خدمة احترافية. ضمان.',
    },

    pricing: [
        { type: 'تخزين عفش — أساسي', unit: 'خدمة', minPrice: 150, maxPrice: 300, time: '1-3 ساعات' },
        { type: 'تخزين عفش — شامل', unit: 'خدمة', minPrice: 300, maxPrice: 600, time: '2-5 ساعات' },
    ],

    faq: [
        { question: 'كم تكلفة تخزين عفش بالقصيم؟', answer: 'تبدأ الأسعار من 150 ريال وتختلف حسب المساحة ونوع الخدمة. اطلب عرض سعر مجاني.' },
        { question: 'كم يستغرق تخزين عفش؟', answer: 'يعتمد على حجم العمل — عادةً من ساعة إلى 5 ساعات. الفريق يقيّم ويحدد الوقت بدقة.' },
        { question: 'هل تقدمون ضمان على تخزين عفش؟', answer: 'نعم — ضمان مكتوب على جودة العمل. إذا لم تكن راضياً: إعادة الخدمة مجاناً.' },
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
        { slug: 'qassim-furniture-moving', context: 'نقل عفش بالقصيم', priority: 1 },
        { slug: 'qassim-dyna', context: 'دينا نقل بالقصيم', priority: 2 },
        { slug: 'qassim-moving-out', context: 'نقل عفش خروج بالقصيم', priority: 3 },
        { slug: 'qassim-dabab', context: 'دباب نقل بالقصيم', priority: 4 },
        { slug: 'qassim-cleaning', context: 'تنظيف منازل بالقصيم', priority: 5 },
        { slug: 'qassim-tanks-cleaning', context: 'تنظيف خزانات بالقصيم', priority: 6 },
        { slug: 'qassim-sofa-cleaning', context: 'تنظيف كنب بالقصيم', priority: 7 },
        { slug: 'qassim-carpet-cleaning', context: 'تنظيف سجاد بالقصيم', priority: 8 },
        { slug: 'qassim-steam-cleaning', context: 'تنظيف بالبخار بالقصيم', priority: 9 },
    ],
};
