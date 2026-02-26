// ══════════════════════════════════════════════════════════════
// تنظيف مكيفات بخميس مشيط — Override مخصص (E-E-A-T Grade)
// صفحة: /khamis-mushait/air-conditioner-cleaning
// ══════════════════════════════════════════════════════════════

import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف مكيفات بخميس مشيط — خدمة احترافية معتمدة (2026)',
        description: 'تنظيف مكيفات بخميس مشيط. خدمة احترافية. فريق متخصص. ضمان مكتوب. أسعار شفافة. خدمة سريعة.',
        h1: 'تنظيف مكيفات بخميس مشيط — خدمة احترافية معتمدة مع ضمان',
        keywords: ['تنظيف مكيفات بخميس مشيط', 'تنظيف مكيفات خميس مشيط', 'شركة تنظيف مكيفات بخميس مشيط', 'أفضل تنظيف مكيفات بخميس مشيط'],
    },

    content: {
        introduction: 'تنظيف مكيفات بخميس مشيط — خدمة متخصصة تراعي الظروف المناخية والبيئية في خميس مشيط. فريق محترف مع أدوات حديثة وضمان مكتوب.',
        shortAnswer: 'تنظيف مكيفات بخميس مشيط: خدمة احترافية بأسعار شفافة. فريق متخصص. ضمان مكتوب.',
        heroSubtitle: 'تنظيف مكيفات بخميس مشيط. خدمة احترافية. ضمان.',
    },

    pricing: [
        { type: 'تنظيف مكيفات — أساسي', unit: 'خدمة', minPrice: 150, maxPrice: 300, time: '1-3 ساعات' },
        { type: 'تنظيف مكيفات — شامل', unit: 'خدمة', minPrice: 300, maxPrice: 600, time: '2-5 ساعات' },
    ],

    faq: [
        { question: 'كم تكلفة تنظيف مكيفات بخميس مشيط؟', answer: 'تبدأ الأسعار من 150 ريال وتختلف حسب المساحة ونوع الخدمة. اطلب عرض سعر مجاني.' },
        { question: 'كم يستغرق تنظيف مكيفات؟', answer: 'يعتمد على حجم العمل — عادةً من ساعة إلى 5 ساعات. الفريق يقيّم ويحدد الوقت بدقة.' },
        { question: 'هل تقدمون ضمان على تنظيف مكيفات؟', answer: 'نعم — ضمان مكتوب على جودة العمل. إذا لم تكن راضياً: إعادة الخدمة مجاناً.' },
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
        { slug: 'khamis-mushait-furniture-moving', context: 'نقل عفش بخميس مشيط', priority: 1 },
        { slug: 'khamis-mushait-furniture-storage', context: 'تخزين عفش بخميس مشيط', priority: 2 },
        { slug: 'khamis-mushait-dyna', context: 'دينا نقل بخميس مشيط', priority: 3 },
        { slug: 'khamis-mushait-moving-out', context: 'نقل عفش خروج بخميس مشيط', priority: 4 },
        { slug: 'khamis-mushait-dabab', context: 'دباب نقل بخميس مشيط', priority: 5 },
        { slug: 'khamis-mushait-cleaning', context: 'تنظيف منازل بخميس مشيط', priority: 6 },
        { slug: 'khamis-mushait-tanks-cleaning', context: 'تنظيف خزانات بخميس مشيط', priority: 7 },
        { slug: 'khamis-mushait-sofa-cleaning', context: 'تنظيف كنب بخميس مشيط', priority: 8 },
        { slug: 'khamis-mushait-carpet-cleaning', context: 'تنظيف سجاد بخميس مشيط', priority: 9 },
    ],
};
