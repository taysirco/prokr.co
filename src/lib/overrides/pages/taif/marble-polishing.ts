// ══════════════════════════════════════════════════════════════
// جلي رخام بالطائف — Override مخصص (E-E-A-T Grade)
// صفحة: /taif/marble-polishing
// ══════════════════════════════════════════════════════════════

import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'جلي رخام بالطائف — خدمة احترافية معتمدة (2026)',
        description: 'جلي رخام بالطائف. خدمة احترافية. فريق متخصص. ضمان مكتوب. أسعار شفافة. خدمة سريعة.',
        h1: 'جلي رخام بالطائف — خدمة احترافية معتمدة مع ضمان',
        keywords: ['جلي رخام بالطائف', 'جلي رخام الطائف', 'شركة جلي رخام بالطائف', 'أفضل جلي رخام بالطائف'],
    },

    content: {
        introduction: 'جلي رخام بالطائف — خدمة متخصصة تراعي الظروف المناخية والبيئية في الطائف. فريق محترف مع أدوات حديثة وضمان مكتوب.',
        shortAnswer: 'جلي رخام بالطائف: خدمة احترافية بأسعار شفافة. فريق متخصص. ضمان مكتوب.',
        heroSubtitle: 'جلي رخام بالطائف. خدمة احترافية. ضمان.',
    },

    pricing: [
        { type: 'جلي رخام — أساسي', unit: 'خدمة', minPrice: 150, maxPrice: 300, time: '1-3 ساعات' },
        { type: 'جلي رخام — شامل', unit: 'خدمة', minPrice: 300, maxPrice: 600, time: '2-5 ساعات' },
    ],

    faq: [
        { question: 'كم تكلفة جلي رخام بالطائف؟', answer: 'تبدأ الأسعار من 150 ريال وتختلف حسب المساحة ونوع الخدمة. اطلب عرض سعر مجاني.' },
        { question: 'كم يستغرق جلي رخام؟', answer: 'يعتمد على حجم العمل — عادةً من ساعة إلى 5 ساعات. الفريق يقيّم ويحدد الوقت بدقة.' },
        { question: 'هل تقدمون ضمان على جلي رخام؟', answer: 'نعم — ضمان مكتوب على جودة العمل. إذا لم تكن راضياً: إعادة الخدمة مجاناً.' },
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
        { slug: 'taif-furniture-moving', context: 'نقل عفش بالطائف', priority: 1 },
        { slug: 'taif-furniture-storage', context: 'تخزين عفش بالطائف', priority: 2 },
        { slug: 'taif-dyna', context: 'دينا نقل بالطائف', priority: 3 },
        { slug: 'taif-moving-out', context: 'نقل عفش خروج بالطائف', priority: 4 },
        { slug: 'taif-dabab', context: 'دباب نقل بالطائف', priority: 5 },
        { slug: 'taif-cleaning', context: 'تنظيف منازل بالطائف', priority: 6 },
        { slug: 'taif-tanks-cleaning', context: 'تنظيف خزانات بالطائف', priority: 7 },
        { slug: 'taif-sofa-cleaning', context: 'تنظيف كنب بالطائف', priority: 8 },
        { slug: 'taif-carpet-cleaning', context: 'تنظيف سجاد بالطائف', priority: 9 },
    ],
};
