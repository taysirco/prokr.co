// ══════════════════════════════════════════════════════════════
// تنظيف قصور بالدمام — Override مخصص (E-E-A-T Grade)
// صفحة: /dammam/palaces-cleaning
// ══════════════════════════════════════════════════════════════

import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف قصور بالدمام — خدمة احترافية معتمدة (2026)',
        description: 'تنظيف قصور بالدمام. خدمة احترافية. فريق متخصص. ضمان مكتوب. أسعار شفافة. خدمة سريعة.',
        h1: 'تنظيف قصور بالدمام — خدمة احترافية معتمدة مع ضمان',
        keywords: ['تنظيف قصور بالدمام', 'تنظيف قصور الدمام', 'شركة تنظيف قصور بالدمام', 'أفضل تنظيف قصور بالدمام'],
    },

    content: {
        introduction: 'تنظيف قصور بالدمام — خدمة متخصصة تراعي الظروف المناخية والبيئية في الدمام. فريق محترف مع أدوات حديثة وضمان مكتوب.',
        shortAnswer: 'تنظيف قصور بالدمام: خدمة احترافية بأسعار شفافة. فريق متخصص. ضمان مكتوب.',
        heroSubtitle: 'تنظيف قصور بالدمام. خدمة احترافية. ضمان.',
    },

    pricing: [
        { type: 'تنظيف قصور — أساسي', unit: 'خدمة', minPrice: 150, maxPrice: 300, time: '1-3 ساعات' },
        { type: 'تنظيف قصور — شامل', unit: 'خدمة', minPrice: 300, maxPrice: 600, time: '2-5 ساعات' },
    ],

    faq: [
        { question: 'كم تكلفة تنظيف قصور بالدمام؟', answer: 'تبدأ الأسعار من 150 ريال وتختلف حسب المساحة ونوع الخدمة. اطلب عرض سعر مجاني.' },
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
        { slug: 'dammam-furniture-moving', context: 'نقل عفش بالدمام', priority: 1 },
        { slug: 'dammam-furniture-storage', context: 'تخزين عفش بالدمام', priority: 2 },
        { slug: 'dammam-dyna', context: 'دينا نقل بالدمام', priority: 3 },
        { slug: 'dammam-moving-out', context: 'نقل عفش خروج بالدمام', priority: 4 },
        { slug: 'dammam-dabab', context: 'دباب نقل بالدمام', priority: 5 },
        { slug: 'dammam-cleaning', context: 'تنظيف منازل بالدمام', priority: 6 },
        { slug: 'dammam-tanks-cleaning', context: 'تنظيف خزانات بالدمام', priority: 7 },
        { slug: 'dammam-sofa-cleaning', context: 'تنظيف كنب بالدمام', priority: 8 },
        { slug: 'dammam-carpet-cleaning', context: 'تنظيف سجاد بالدمام', priority: 9 },
    ],
};
