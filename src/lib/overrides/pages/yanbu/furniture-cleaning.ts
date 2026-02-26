// ══════════════════════════════════════════════════════════════
// تنظيف أثاث بينبع — Override مخصص (E-E-A-T Grade)
// صفحة: /yanbu/furniture-cleaning
// ══════════════════════════════════════════════════════════════

import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف أثاث بينبع — خدمة احترافية معتمدة (2026)',
        description: 'تنظيف أثاث بينبع. خدمة احترافية. فريق متخصص. ضمان مكتوب. أسعار شفافة. خدمة سريعة.',
        h1: 'تنظيف أثاث بينبع — خدمة احترافية معتمدة مع ضمان',
        keywords: ['تنظيف أثاث بينبع', 'تنظيف أثاث ينبع', 'شركة تنظيف أثاث بينبع', 'أفضل تنظيف أثاث بينبع'],
    },

    content: {
        introduction: 'تنظيف أثاث بينبع — خدمة متخصصة تراعي الظروف المناخية والبيئية في ينبع. فريق محترف مع أدوات حديثة وضمان مكتوب.',
        shortAnswer: 'تنظيف أثاث بينبع: خدمة احترافية بأسعار شفافة. فريق متخصص. ضمان مكتوب.',
        heroSubtitle: 'تنظيف أثاث بينبع. خدمة احترافية. ضمان.',
    },

    pricing: [
        { type: 'تنظيف أثاث — أساسي', unit: 'خدمة', minPrice: 150, maxPrice: 300, time: '1-3 ساعات' },
        { type: 'تنظيف أثاث — شامل', unit: 'خدمة', minPrice: 300, maxPrice: 600, time: '2-5 ساعات' },
    ],

    faq: [
        { question: 'كم تكلفة تنظيف أثاث بينبع؟', answer: 'تبدأ الأسعار من 150 ريال وتختلف حسب المساحة ونوع الخدمة. اطلب عرض سعر مجاني.' },
        { question: 'كم يستغرق تنظيف أثاث؟', answer: 'يعتمد على حجم العمل — عادةً من ساعة إلى 5 ساعات. الفريق يقيّم ويحدد الوقت بدقة.' },
        { question: 'هل تقدمون ضمان على تنظيف أثاث؟', answer: 'نعم — ضمان مكتوب على جودة العمل. إذا لم تكن راضياً: إعادة الخدمة مجاناً.' },
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
        { slug: 'yanbu-furniture-moving', context: 'نقل عفش بينبع', priority: 1 },
        { slug: 'yanbu-furniture-storage', context: 'تخزين عفش بينبع', priority: 2 },
        { slug: 'yanbu-dyna', context: 'دينا نقل بينبع', priority: 3 },
        { slug: 'yanbu-moving-out', context: 'نقل عفش خروج بينبع', priority: 4 },
        { slug: 'yanbu-dabab', context: 'دباب نقل بينبع', priority: 5 },
        { slug: 'yanbu-cleaning', context: 'تنظيف منازل بينبع', priority: 6 },
        { slug: 'yanbu-tanks-cleaning', context: 'تنظيف خزانات بينبع', priority: 7 },
        { slug: 'yanbu-sofa-cleaning', context: 'تنظيف كنب بينبع', priority: 8 },
        { slug: 'yanbu-carpet-cleaning', context: 'تنظيف سجاد بينبع', priority: 9 },
    ],
};
