// ══════════════════════════════════════════════════════════════
// تنظيف سيارات بحفر الباطن — Override مخصص (E-E-A-T Grade)
// صفحة: /hafr-albatin/auto-cleaning
// ══════════════════════════════════════════════════════════════

import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف سيارات بحفر الباطن — خدمة احترافية معتمدة (2026)',
        description: 'تنظيف سيارات بحفر الباطن. خدمة احترافية. فريق متخصص. ضمان مكتوب. أسعار شفافة. خدمة سريعة.',
        h1: 'تنظيف سيارات بحفر الباطن — خدمة احترافية معتمدة مع ضمان',
        keywords: ['تنظيف سيارات بحفر الباطن', 'تنظيف سيارات حفر الباطن', 'شركة تنظيف سيارات بحفر الباطن', 'أفضل تنظيف سيارات بحفر الباطن'],
    },

    content: {
        introduction: 'تنظيف سيارات بحفر الباطن — خدمة متخصصة تراعي الظروف المناخية والبيئية في حفر الباطن. فريق محترف مع أدوات حديثة وضمان مكتوب.',
        shortAnswer: 'تنظيف سيارات بحفر الباطن: خدمة احترافية بأسعار شفافة. فريق متخصص. ضمان مكتوب.',
        heroSubtitle: 'تنظيف سيارات بحفر الباطن. خدمة احترافية. ضمان.',
    },

    pricing: [
        { type: 'تنظيف سيارات — أساسي', unit: 'خدمة', minPrice: 150, maxPrice: 300, time: '1-3 ساعات' },
        { type: 'تنظيف سيارات — شامل', unit: 'خدمة', minPrice: 300, maxPrice: 600, time: '2-5 ساعات' },
    ],

    faq: [
        { question: 'كم تكلفة تنظيف سيارات بحفر الباطن؟', answer: 'تبدأ الأسعار من 150 ريال وتختلف حسب المساحة ونوع الخدمة. اطلب عرض سعر مجاني.' },
        { question: 'كم يستغرق تنظيف سيارات؟', answer: 'يعتمد على حجم العمل — عادةً من ساعة إلى 5 ساعات. الفريق يقيّم ويحدد الوقت بدقة.' },
        { question: 'هل تقدمون ضمان على تنظيف سيارات؟', answer: 'نعم — ضمان مكتوب على جودة العمل. إذا لم تكن راضياً: إعادة الخدمة مجاناً.' },
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
        { slug: 'hafr-albatin-furniture-moving', context: 'نقل عفش بحفر الباطن', priority: 1 },
        { slug: 'hafr-albatin-furniture-storage', context: 'تخزين عفش بحفر الباطن', priority: 2 },
        { slug: 'hafr-albatin-dyna', context: 'دينا نقل بحفر الباطن', priority: 3 },
        { slug: 'hafr-albatin-moving-out', context: 'نقل عفش خروج بحفر الباطن', priority: 4 },
        { slug: 'hafr-albatin-dabab', context: 'دباب نقل بحفر الباطن', priority: 5 },
        { slug: 'hafr-albatin-cleaning', context: 'تنظيف منازل بحفر الباطن', priority: 6 },
        { slug: 'hafr-albatin-tanks-cleaning', context: 'تنظيف خزانات بحفر الباطن', priority: 7 },
        { slug: 'hafr-albatin-sofa-cleaning', context: 'تنظيف كنب بحفر الباطن', priority: 8 },
        { slug: 'hafr-albatin-carpet-cleaning', context: 'تنظيف سجاد بحفر الباطن', priority: 9 },
    ],
};
