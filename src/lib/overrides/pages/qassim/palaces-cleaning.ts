// ══════════════════════════════════════════════════════════════
// تنظيف قصور بالقصيم — Override مخصص (E-E-A-T Grade)
// صفحة: /qassim/palaces-cleaning
// ══════════════════════════════════════════════════════════════

import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف قصور بالقصيم — خدمة احترافية معتمدة (2026)',
        description: 'تنظيف قصور بالقصيم. خدمة احترافية. فريق متخصص. ضمان مكتوب. أسعار شفافة. خدمة سريعة.',
        h1: 'تنظيف قصور بالقصيم — خدمة احترافية معتمدة مع ضمان',
        keywords: ['تنظيف قصور بالقصيم', 'تنظيف قصور القصيم', 'شركة تنظيف قصور بالقصيم', 'أفضل تنظيف قصور بالقصيم'],
    },

    content: {
        introduction: 'تنظيف قصور بالقصيم — خدمة متخصصة تراعي الظروف المناخية والبيئية في القصيم. فريق محترف مع أدوات حديثة وضمان مكتوب.',
        shortAnswer: 'تنظيف قصور بالقصيم: خدمة احترافية بأسعار شفافة. فريق متخصص. ضمان مكتوب.',
        heroSubtitle: 'تنظيف قصور بالقصيم. خدمة احترافية. ضمان.',
    },

    pricing: [
        { type: 'تنظيف قصور — أساسي', unit: 'خدمة', minPrice: 150, maxPrice: 300, time: '1-3 ساعات' },
        { type: 'تنظيف قصور — شامل', unit: 'خدمة', minPrice: 300, maxPrice: 600, time: '2-5 ساعات' },
    ],

    faq: [
        { question: 'كم تكلفة تنظيف قصور بالقصيم؟', answer: 'تبدأ الأسعار من 150 ريال وتختلف حسب المساحة ونوع الخدمة. اطلب عرض سعر مجاني.' },
        { question: 'كم يستغرق تنظيف قصور؟', answer: 'يعتمد على حجم العمل — عادةً من ساعة إلى 5 ساعات. الفريق يقيّم ويحدد الوقت بدقة.' },
        { question: 'هل تقدمون ضمان على تنظيف قصور؟', answer: 'نعم — ضمان مكتوب على جودة العمل. إذا لم تكن راضياً: إعادة الخدمة مجاناً.' },
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
        { ...GOV.BALADI, role: 'الجهة المنظمة والمرخصة لهذا القطاع' },
    ],

    expertReviewer: {
        name: EXPERTS.ALMOHAIMED.name,
        title: EXPERTS.ALMOHAIMED.title,
        credential: EXPERTS.ALMOHAIMED.credential,
        profileUrl: EXPERTS.ALMOHAIMED.profileUrl,
    },

    expertCitations: [
        {
            expert: EXPERTS.ALMOHAIMED.name,
            quote: 'الالتزام بالمعايير والاشتراطات السعودية ضرورة — يحمي العميل ويضمن جودة العمل',
            source: EXPERTS.ALMOHAIMED.title,
            url: EXPERTS.ALMOHAIMED.profileUrl,
        },
    ],

    saudiRegulations: [REGULATIONS.BALADI_HEALTH],

    verificationBadges: [
        { badge: '✔️ شركة تنظيف مرخصة من بلدي', authority: 'وزارة البلديات والإسكان', icon: 'shield-check' },
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
        { slug: 'qassim-furniture-storage', context: 'تخزين عفش بالقصيم', priority: 2 },
        { slug: 'qassim-dyna', context: 'دينا نقل بالقصيم', priority: 3 },
        { slug: 'qassim-moving-out', context: 'نقل عفش خروج بالقصيم', priority: 4 },
        { slug: 'qassim-dabab', context: 'دباب نقل بالقصيم', priority: 5 },
        { slug: 'qassim-cleaning', context: 'تنظيف منازل بالقصيم', priority: 6 },
        { slug: 'qassim-tanks-cleaning', context: 'تنظيف خزانات بالقصيم', priority: 7 },
        { slug: 'qassim-sofa-cleaning', context: 'تنظيف كنب بالقصيم', priority: 8 },
        { slug: 'qassim-carpet-cleaning', context: 'تنظيف سجاد بالقصيم', priority: 9 },
    ],
};
