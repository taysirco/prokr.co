// ══════════════════════════════════════════════════════════════
// تعقيم بعنيزة — Override مخصص (E-E-A-T Grade)
// صفحة: /onizah/sanitization
// ══════════════════════════════════════════════════════════════

import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تعقيم بعنيزة — خدمة احترافية معتمدة (2026)',
        description: 'تعقيم بعنيزة. خدمة احترافية. فريق متخصص. ضمان مكتوب. أسعار شفافة. خدمة سريعة.',
        h1: 'تعقيم بعنيزة — خدمة احترافية معتمدة مع ضمان',
        keywords: ['تعقيم بعنيزة', 'تعقيم عنيزة', 'شركة تعقيم بعنيزة', 'أفضل تعقيم بعنيزة'],
    },

    content: {
        introduction: 'تعقيم بعنيزة — خدمة متخصصة تراعي الظروف المناخية والبيئية في عنيزة. فريق محترف مع أدوات حديثة وضمان مكتوب.',
        shortAnswer: 'تعقيم بعنيزة: خدمة احترافية بأسعار شفافة. فريق متخصص. ضمان مكتوب.',
        heroSubtitle: 'تعقيم بعنيزة. خدمة احترافية. ضمان.',
    },

    pricing: [
        { type: 'تعقيم — أساسي', unit: 'خدمة', minPrice: 150, maxPrice: 300, time: '1-3 ساعات' },
        { type: 'تعقيم — شامل', unit: 'خدمة', minPrice: 300, maxPrice: 600, time: '2-5 ساعات' },
    ],

    faq: [
        { question: 'كم تكلفة تعقيم بعنيزة؟', answer: 'تبدأ الأسعار من 150 ريال وتختلف حسب المساحة ونوع الخدمة. اطلب عرض سعر مجاني.' },
        { question: 'كم يستغرق تعقيم؟', answer: 'يعتمد على حجم العمل — عادةً من ساعة إلى 5 ساعات. الفريق يقيّم ويحدد الوقت بدقة.' },
        { question: 'هل تقدمون ضمان على تعقيم؟', answer: 'نعم — ضمان مكتوب على جودة العمل. إذا لم تكن راضياً: إعادة الخدمة مجاناً.' },
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
