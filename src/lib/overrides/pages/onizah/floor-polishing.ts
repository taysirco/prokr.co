// ══════════════════════════════════════════════════════════════
// جلي بلاط بعنيزة — Override مخصص (E-E-A-T Grade)
// صفحة: /onizah/floor-polishing
// ══════════════════════════════════════════════════════════════

import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'جلي بلاط بعنيزة — خدمة احترافية معتمدة (2026)',
        description: 'جلي بلاط بعنيزة. خدمة احترافية. فريق متخصص. ضمان مكتوب. أسعار شفافة. خدمة سريعة.',
        h1: 'جلي بلاط بعنيزة — خدمة احترافية معتمدة مع ضمان',
        keywords: ['جلي بلاط بعنيزة', 'جلي بلاط عنيزة', 'شركة جلي بلاط بعنيزة', 'أفضل جلي بلاط بعنيزة'],
    },

    content: {
        introduction: 'جلي بلاط بعنيزة — خدمة متخصصة تراعي الظروف المناخية والبيئية في عنيزة. فريق محترف مع أدوات حديثة وضمان مكتوب.',
        shortAnswer: 'جلي بلاط بعنيزة: خدمة احترافية بأسعار شفافة. فريق متخصص. ضمان مكتوب.',
        heroSubtitle: 'جلي بلاط بعنيزة. خدمة احترافية. ضمان.',
    },

    pricing: [
        { type: 'جلي بلاط — أساسي', unit: 'خدمة', minPrice: 150, maxPrice: 300, time: '1-3 ساعات' },
        { type: 'جلي بلاط — شامل', unit: 'خدمة', minPrice: 300, maxPrice: 600, time: '2-5 ساعات' },
    ],

    faq: [
        { question: 'كم تكلفة جلي بلاط بعنيزة؟', answer: 'تبدأ الأسعار من 150 ريال وتختلف حسب المساحة ونوع الخدمة. اطلب عرض سعر مجاني.' },
        { question: 'كم يستغرق جلي بلاط؟', answer: 'يعتمد على حجم العمل — عادةً من ساعة إلى 5 ساعات. الفريق يقيّم ويحدد الوقت بدقة.' },
        { question: 'هل تقدمون ضمان على جلي بلاط؟', answer: 'نعم — ضمان مكتوب على جودة العمل. إذا لم تكن راضياً: إعادة الخدمة مجاناً.' },
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
        { slug: 'onizah-furniture-moving', context: 'نقل عفش بعنيزة', priority: 1 },
        { slug: 'onizah-furniture-storage', context: 'تخزين عفش بعنيزة', priority: 2 },
        { slug: 'onizah-dyna', context: 'دينا نقل بعنيزة', priority: 3 },
        { slug: 'onizah-moving-out', context: 'نقل عفش خروج بعنيزة', priority: 4 },
        { slug: 'onizah-dabab', context: 'دباب نقل بعنيزة', priority: 5 },
        { slug: 'onizah-cleaning', context: 'تنظيف منازل بعنيزة', priority: 6 },
        { slug: 'onizah-tanks-cleaning', context: 'تنظيف خزانات بعنيزة', priority: 7 },
        { slug: 'onizah-sofa-cleaning', context: 'تنظيف كنب بعنيزة', priority: 8 },
        { slug: 'onizah-carpet-cleaning', context: 'تنظيف سجاد بعنيزة', priority: 9 },
    ],
};
