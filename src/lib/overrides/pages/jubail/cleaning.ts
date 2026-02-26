// ══════════════════════════════════════════════════════════════
// تنظيف منازل بالجبيل — Override مخصص (E-E-A-T Grade)
// صفحة: /jubail/cleaning
// ══════════════════════════════════════════════════════════════

import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف منازل بالجبيل — خدمة احترافية معتمدة (2026)',
        description: 'تنظيف منازل بالجبيل. خدمة احترافية. فريق متخصص. ضمان مكتوب. أسعار شفافة. خدمة سريعة.',
        h1: 'تنظيف منازل بالجبيل — خدمة احترافية معتمدة مع ضمان',
        keywords: ['تنظيف منازل بالجبيل', 'تنظيف منازل الجبيل', 'شركة تنظيف منازل بالجبيل', 'أفضل تنظيف منازل بالجبيل'],
    },

    content: {
        introduction: 'تنظيف منازل بالجبيل — خدمة متخصصة تراعي الظروف المناخية والبيئية في الجبيل. فريق محترف مع أدوات حديثة وضمان مكتوب.',
        shortAnswer: 'تنظيف منازل بالجبيل: خدمة احترافية بأسعار شفافة. فريق متخصص. ضمان مكتوب.',
        heroSubtitle: 'تنظيف منازل بالجبيل. خدمة احترافية. ضمان.',
    },

    pricing: [
        { type: 'تنظيف منازل — أساسي', unit: 'خدمة', minPrice: 150, maxPrice: 300, time: '1-3 ساعات' },
        { type: 'تنظيف منازل — شامل', unit: 'خدمة', minPrice: 300, maxPrice: 600, time: '2-5 ساعات' },
    ],

    faq: [
        { question: 'كم تكلفة تنظيف منازل بالجبيل؟', answer: 'تبدأ الأسعار من 150 ريال وتختلف حسب المساحة ونوع الخدمة. اطلب عرض سعر مجاني.' },
        { question: 'كم يستغرق تنظيف منازل؟', answer: 'يعتمد على حجم العمل — عادةً من ساعة إلى 5 ساعات. الفريق يقيّم ويحدد الوقت بدقة.' },
        { question: 'هل تقدمون ضمان على تنظيف منازل؟', answer: 'نعم — ضمان مكتوب على جودة العمل. إذا لم تكن راضياً: إعادة الخدمة مجاناً.' },
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
        { slug: 'jubail-furniture-moving', context: 'نقل عفش بالجبيل', priority: 1 },
        { slug: 'jubail-furniture-storage', context: 'تخزين عفش بالجبيل', priority: 2 },
        { slug: 'jubail-dyna', context: 'دينا نقل بالجبيل', priority: 3 },
        { slug: 'jubail-moving-out', context: 'نقل عفش خروج بالجبيل', priority: 4 },
        { slug: 'jubail-dabab', context: 'دباب نقل بالجبيل', priority: 5 },
        { slug: 'jubail-tanks-cleaning', context: 'تنظيف خزانات بالجبيل', priority: 6 },
        { slug: 'jubail-sofa-cleaning', context: 'تنظيف كنب بالجبيل', priority: 7 },
        { slug: 'jubail-carpet-cleaning', context: 'تنظيف سجاد بالجبيل', priority: 8 },
        { slug: 'jubail-steam-cleaning', context: 'تنظيف بالبخار بالجبيل', priority: 9 },
    ],
};
