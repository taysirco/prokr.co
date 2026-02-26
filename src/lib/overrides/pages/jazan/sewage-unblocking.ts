// ══════════════════════════════════════════════════════════════
// تسليك مجاري بجازان — Override مخصص (E-E-A-T Grade)
// صفحة: /jazan/sewage-unblocking
// ══════════════════════════════════════════════════════════════

import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تسليك مجاري بجازان — خدمة احترافية معتمدة (2026)',
        description: 'تسليك مجاري بجازان. خدمة احترافية. فريق متخصص. ضمان مكتوب. أسعار شفافة. خدمة سريعة.',
        h1: 'تسليك مجاري بجازان — خدمة احترافية معتمدة مع ضمان',
        keywords: ['تسليك مجاري بجازان', 'تسليك مجاري جازان', 'شركة تسليك مجاري بجازان', 'أفضل تسليك مجاري بجازان'],
    },

    content: {
        introduction: 'تسليك مجاري بجازان — خدمة متخصصة تراعي الظروف المناخية والبيئية في جازان. فريق محترف مع أدوات حديثة وضمان مكتوب.',
        shortAnswer: 'تسليك مجاري بجازان: خدمة احترافية بأسعار شفافة. فريق متخصص. ضمان مكتوب.',
        heroSubtitle: 'تسليك مجاري بجازان. خدمة احترافية. ضمان.',
    },

    pricing: [
        { type: 'تسليك مجاري — أساسي', unit: 'خدمة', minPrice: 150, maxPrice: 300, time: '1-3 ساعات' },
        { type: 'تسليك مجاري — شامل', unit: 'خدمة', minPrice: 300, maxPrice: 600, time: '2-5 ساعات' },
    ],

    faq: [
        { question: 'كم تكلفة تسليك مجاري بجازان؟', answer: 'تبدأ الأسعار من 150 ريال وتختلف حسب المساحة ونوع الخدمة. اطلب عرض سعر مجاني.' },
        { question: 'كم يستغرق تسليك مجاري؟', answer: 'يعتمد على حجم العمل — عادةً من ساعة إلى 5 ساعات. الفريق يقيّم ويحدد الوقت بدقة.' },
        { question: 'هل تقدمون ضمان على تسليك مجاري؟', answer: 'نعم — ضمان مكتوب على جودة العمل. إذا لم تكن راضياً: إعادة الخدمة مجاناً.' },
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
        { badge: '✔️ شركة صرف صحي مرخصة', authority: 'وزارة البلديات والإسكان', icon: 'shield-check' },
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
        { slug: 'jazan-furniture-moving', context: 'نقل عفش بجازان', priority: 1 },
        { slug: 'jazan-furniture-storage', context: 'تخزين عفش بجازان', priority: 2 },
        { slug: 'jazan-dyna', context: 'دينا نقل بجازان', priority: 3 },
        { slug: 'jazan-moving-out', context: 'نقل عفش خروج بجازان', priority: 4 },
        { slug: 'jazan-dabab', context: 'دباب نقل بجازان', priority: 5 },
        { slug: 'jazan-cleaning', context: 'تنظيف منازل بجازان', priority: 6 },
        { slug: 'jazan-tanks-cleaning', context: 'تنظيف خزانات بجازان', priority: 7 },
        { slug: 'jazan-sofa-cleaning', context: 'تنظيف كنب بجازان', priority: 8 },
        { slug: 'jazan-carpet-cleaning', context: 'تنظيف سجاد بجازان', priority: 9 },
    ],
};
