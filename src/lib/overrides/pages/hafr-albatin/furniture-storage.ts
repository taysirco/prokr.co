// ══════════════════════════════════════════════════════════════
// تخزين عفش بحفر الباطن — Override مخصص (E-E-A-T Grade)
// صفحة: /hafr-albatin/furniture-storage
// ══════════════════════════════════════════════════════════════

import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تخزين عفش بحفر الباطن — خدمة احترافية معتمدة (2026)',
        description: 'تخزين عفش بحفر الباطن. خدمة احترافية. فريق متخصص. ضمان مكتوب. أسعار شفافة. خدمة سريعة.',
        h1: 'تخزين عفش بحفر الباطن — خدمة احترافية معتمدة مع ضمان',
        keywords: ['تخزين عفش بحفر الباطن', 'تخزين عفش حفر الباطن', 'شركة تخزين عفش بحفر الباطن', 'أفضل تخزين عفش بحفر الباطن'],
    },

    content: {
        introduction: 'تخزين عفش بحفر الباطن — خدمة متخصصة تراعي الظروف المناخية والبيئية في حفر الباطن. فريق محترف مع أدوات حديثة وضمان مكتوب.',
        shortAnswer: 'تخزين عفش بحفر الباطن: خدمة احترافية بأسعار شفافة. فريق متخصص. ضمان مكتوب.',
        heroSubtitle: 'تخزين عفش بحفر الباطن. خدمة احترافية. ضمان.',
    },

    pricing: [
        { type: 'تخزين عفش — أساسي', unit: 'خدمة', minPrice: 150, maxPrice: 300, time: '1-3 ساعات' },
        { type: 'تخزين عفش — شامل', unit: 'خدمة', minPrice: 300, maxPrice: 600, time: '2-5 ساعات' },
    ],

    faq: [
        { question: 'كم تكلفة تخزين عفش بحفر الباطن؟', answer: 'تبدأ الأسعار من 150 ريال وتختلف حسب المساحة ونوع الخدمة. اطلب عرض سعر مجاني.' },
        { question: 'كم يستغرق تخزين عفش؟', answer: 'يعتمد على حجم العمل — عادةً من ساعة إلى 5 ساعات. الفريق يقيّم ويحدد الوقت بدقة.' },
        { question: 'هل تقدمون ضمان على تخزين عفش؟', answer: 'نعم — ضمان مكتوب على جودة العمل. إذا لم تكن راضياً: إعادة الخدمة مجاناً.' },
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
        { ...GOV.TGA, role: 'الجهة المنظمة والمرخصة لهذا القطاع' },
    ],

    expertReviewer: {
        name: EXPERTS.ALZUWAYED.name,
        title: EXPERTS.ALZUWAYED.title,
        credential: EXPERTS.ALZUWAYED.credential,
        profileUrl: EXPERTS.ALZUWAYED.profileUrl,
    },

    expertCitations: [
        {
            expert: EXPERTS.ALZUWAYED.name,
            quote: 'الالتزام بالمعايير والاشتراطات السعودية ضرورة — يحمي العميل ويضمن جودة العمل',
            source: EXPERTS.ALZUWAYED.title,
            url: EXPERTS.ALZUWAYED.profileUrl,
        },
    ],

    saudiRegulations: [REGULATIONS.TGA_LICENSE],

    verificationBadges: [
        { badge: '✔️ شركة نقل مرخصة من هيئة النقل TGA', authority: 'الهيئة العامة للنقل', icon: 'shield-check' },
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
        { slug: 'hafr-albatin-dyna', context: 'دينا نقل بحفر الباطن', priority: 2 },
        { slug: 'hafr-albatin-moving-out', context: 'نقل عفش خروج بحفر الباطن', priority: 3 },
        { slug: 'hafr-albatin-dabab', context: 'دباب نقل بحفر الباطن', priority: 4 },
        { slug: 'hafr-albatin-cleaning', context: 'تنظيف منازل بحفر الباطن', priority: 5 },
        { slug: 'hafr-albatin-tanks-cleaning', context: 'تنظيف خزانات بحفر الباطن', priority: 6 },
        { slug: 'hafr-albatin-sofa-cleaning', context: 'تنظيف كنب بحفر الباطن', priority: 7 },
        { slug: 'hafr-albatin-carpet-cleaning', context: 'تنظيف سجاد بحفر الباطن', priority: 8 },
        { slug: 'hafr-albatin-steam-cleaning', context: 'تنظيف بالبخار بحفر الباطن', priority: 9 },
    ],
};
