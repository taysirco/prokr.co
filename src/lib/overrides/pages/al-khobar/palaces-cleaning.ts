// ══════════════════════════════════════════════════════════════
// تنظيف قصور بالخبر — Override مخصص (E-E-A-T Grade)
// صفحة: /al-khobar/palaces-cleaning
// ══════════════════════════════════════════════════════════════

import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف قصور بالخبر — خدمة احترافية معتمدة (2026)',
        description: 'تنظيف قصور بالخبر. خدمة احترافية. فريق متخصص. ضمان مكتوب. أسعار شفافة. خدمة سريعة.',
        h1: 'تنظيف قصور بالخبر — خدمة احترافية معتمدة مع ضمان',
        keywords: ['تنظيف قصور بالخبر', 'تنظيف قصور الخبر', 'شركة تنظيف قصور بالخبر', 'أفضل تنظيف قصور بالخبر'],
    },

    content: {
        introduction: 'تنظيف قصور بالخبر — خدمة متخصصة تراعي الظروف المناخية والبيئية في الخبر. فريق محترف مع أدوات حديثة وضمان مكتوب.',
        shortAnswer: 'تنظيف قصور بالخبر: خدمة احترافية بأسعار شفافة. فريق متخصص. ضمان مكتوب.',
        heroSubtitle: 'تنظيف قصور بالخبر. خدمة احترافية. ضمان.',
    },

    pricing: [
        { type: 'تنظيف قصور — أساسي', unit: 'خدمة', minPrice: 150, maxPrice: 300, time: '1-3 ساعات' },
        { type: 'تنظيف قصور — شامل', unit: 'خدمة', minPrice: 300, maxPrice: 600, time: '2-5 ساعات' },
    ],

    faq: [
        { question: 'كم تكلفة تنظيف قصور بالخبر؟', answer: 'تبدأ الأسعار من 150 ريال وتختلف حسب المساحة ونوع الخدمة. اطلب عرض سعر مجاني.' },
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
        { slug: 'al-khobar-furniture-moving', context: 'نقل عفش بالخبر', priority: 1 },
        { slug: 'al-khobar-furniture-storage', context: 'تخزين عفش بالخبر', priority: 2 },
        { slug: 'al-khobar-dyna', context: 'دينا نقل بالخبر', priority: 3 },
        { slug: 'al-khobar-moving-out', context: 'نقل عفش خروج بالخبر', priority: 4 },
        { slug: 'al-khobar-dabab', context: 'دباب نقل بالخبر', priority: 5 },
        { slug: 'al-khobar-cleaning', context: 'تنظيف منازل بالخبر', priority: 6 },
        { slug: 'al-khobar-tanks-cleaning', context: 'تنظيف خزانات بالخبر', priority: 7 },
        { slug: 'al-khobar-sofa-cleaning', context: 'تنظيف كنب بالخبر', priority: 8 },
        { slug: 'al-khobar-carpet-cleaning', context: 'تنظيف سجاد بالخبر', priority: 9 },
    ],
};
