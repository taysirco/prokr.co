// ══════════════════════════════════════════════════════════════
// تنظيف كنب بجازان — Override مخصص (E-E-A-T Grade)
// صفحة: /jazan/sofa-cleaning
// ══════════════════════════════════════════════════════════════

import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف كنب بجازان — خدمة احترافية معتمدة (2026)',
        description: 'تنظيف كنب بجازان. خدمة احترافية. فريق متخصص. ضمان مكتوب. أسعار شفافة. خدمة سريعة.',
        h1: 'تنظيف كنب بجازان — خدمة احترافية معتمدة مع ضمان',
        keywords: ['تنظيف كنب بجازان', 'تنظيف كنب جازان', 'شركة تنظيف كنب بجازان', 'أفضل تنظيف كنب بجازان'],
    },

    content: {
        introduction: 'تنظيف كنب بجازان — خدمة متخصصة تراعي الظروف المناخية والبيئية في جازان. فريق محترف مع أدوات حديثة وضمان مكتوب.',
        shortAnswer: 'تنظيف كنب بجازان: خدمة احترافية بأسعار شفافة. فريق متخصص. ضمان مكتوب.',
        heroSubtitle: 'تنظيف كنب بجازان. خدمة احترافية. ضمان.',
    },

    pricing: [
        { type: 'تنظيف كنب — أساسي', unit: 'خدمة', minPrice: 150, maxPrice: 300, time: '1-3 ساعات' },
        { type: 'تنظيف كنب — شامل', unit: 'خدمة', minPrice: 300, maxPrice: 600, time: '2-5 ساعات' },
    ],

    faq: [
        { question: 'كم تكلفة تنظيف كنب بجازان؟', answer: 'تبدأ الأسعار من 150 ريال وتختلف حسب المساحة ونوع الخدمة. اطلب عرض سعر مجاني.' },
        { question: 'كم يستغرق تنظيف كنب؟', answer: 'يعتمد على حجم العمل — عادةً من ساعة إلى 5 ساعات. الفريق يقيّم ويحدد الوقت بدقة.' },
        { question: 'هل تقدمون ضمان على تنظيف كنب؟', answer: 'نعم — ضمان مكتوب على جودة العمل. إذا لم تكن راضياً: إعادة الخدمة مجاناً.' },
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
        { slug: 'jazan-furniture-moving', context: 'نقل عفش بجازان', priority: 1 },
        { slug: 'jazan-furniture-storage', context: 'تخزين عفش بجازان', priority: 2 },
        { slug: 'jazan-dyna', context: 'دينا نقل بجازان', priority: 3 },
        { slug: 'jazan-moving-out', context: 'نقل عفش خروج بجازان', priority: 4 },
        { slug: 'jazan-dabab', context: 'دباب نقل بجازان', priority: 5 },
        { slug: 'jazan-cleaning', context: 'تنظيف منازل بجازان', priority: 6 },
        { slug: 'jazan-tanks-cleaning', context: 'تنظيف خزانات بجازان', priority: 7 },
        { slug: 'jazan-carpet-cleaning', context: 'تنظيف سجاد بجازان', priority: 8 },
        { slug: 'jazan-steam-cleaning', context: 'تنظيف بالبخار بجازان', priority: 9 },
    ],
};
