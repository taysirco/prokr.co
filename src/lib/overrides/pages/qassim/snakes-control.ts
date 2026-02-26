// ══════════════════════════════════════════════════════════════
// مكافحة ثعابين وعقارب بالقصيم — Override مخصص (E-E-A-T Grade)
// صفحة: /qassim/snakes-control
// ══════════════════════════════════════════════════════════════

import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'مكافحة ثعابين وعقارب بالقصيم — خدمة احترافية معتمدة (2026)',
        description: 'مكافحة ثعابين وعقارب بالقصيم. خدمة احترافية. فريق متخصص. ضمان مكتوب. أسعار شفافة. خدمة سريعة.',
        h1: 'مكافحة ثعابين وعقارب بالقصيم — خدمة احترافية معتمدة مع ضمان',
        keywords: ['مكافحة ثعابين وعقارب بالقصيم', 'مكافحة ثعابين وعقارب القصيم', 'شركة مكافحة ثعابين وعقارب بالقصيم', 'أفضل مكافحة ثعابين وعقارب بالقصيم'],
    },

    content: {
        introduction: 'مكافحة ثعابين وعقارب بالقصيم — خدمة متخصصة تراعي الظروف المناخية والبيئية في القصيم. فريق محترف مع أدوات حديثة وضمان مكتوب.',
        shortAnswer: 'مكافحة ثعابين وعقارب بالقصيم: خدمة احترافية بأسعار شفافة. فريق متخصص. ضمان مكتوب.',
        heroSubtitle: 'مكافحة ثعابين وعقارب بالقصيم. خدمة احترافية. ضمان.',
    },

    pricing: [
        { type: 'مكافحة ثعابين وعقارب — أساسي', unit: 'خدمة', minPrice: 150, maxPrice: 300, time: '1-3 ساعات' },
        { type: 'مكافحة ثعابين وعقارب — شامل', unit: 'خدمة', minPrice: 300, maxPrice: 600, time: '2-5 ساعات' },
    ],

    faq: [
        { question: 'كم تكلفة مكافحة ثعابين وعقارب بالقصيم؟', answer: 'تبدأ الأسعار من 150 ريال وتختلف حسب المساحة ونوع الخدمة. اطلب عرض سعر مجاني.' },
        { question: 'كم يستغرق مكافحة ثعابين وعقارب؟', answer: 'يعتمد على حجم العمل — عادةً من ساعة إلى 5 ساعات. الفريق يقيّم ويحدد الوقت بدقة.' },
        { question: 'هل تقدمون ضمان على مكافحة ثعابين وعقارب؟', answer: 'نعم — ضمان مكتوب على جودة العمل. إذا لم تكن راضياً: إعادة الخدمة مجاناً.' },
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
        { ...GOV.SFDA, role: 'الجهة المنظمة والمرخصة لهذا القطاع' },
    ],

    expertReviewer: {
        name: EXPERTS.ALKHODAIRY.name,
        title: EXPERTS.ALKHODAIRY.title,
        credential: EXPERTS.ALKHODAIRY.credential,
        profileUrl: EXPERTS.ALKHODAIRY.profileUrl,
    },

    expertCitations: [
        {
            expert: EXPERTS.ALKHODAIRY.name,
            quote: 'الالتزام بالمعايير والاشتراطات السعودية ضرورة — يحمي العميل ويضمن جودة العمل',
            source: EXPERTS.ALKHODAIRY.title,
            url: EXPERTS.ALKHODAIRY.profileUrl,
        },
    ],

    saudiRegulations: [REGULATIONS.GHAD_SYSTEM],

    verificationBadges: [
        { badge: '✔️ مبيدات معتمدة من SFDA', authority: 'هيئة الغذاء والدواء', icon: 'shield-check' },
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
