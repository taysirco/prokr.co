// ══════════════════════════════════════════════════════════════
// تخزين عفش بالخبر — Override مخصص (E-E-A-T Grade)
// صفحة: /al-khobar/furniture-storage
// ══════════════════════════════════════════════════════════════

import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تخزين عفش بالخبر — خدمة احترافية معتمدة (2026)',
        description: 'تخزين عفش بالخبر. خدمة احترافية. فريق متخصص. ضمان مكتوب. أسعار شفافة. خدمة سريعة.',
        h1: 'تخزين عفش بالخبر — خدمة احترافية معتمدة مع ضمان',
        keywords: ['تخزين عفش بالخبر', 'تخزين عفش الخبر', 'شركة تخزين عفش بالخبر', 'أفضل تخزين عفش بالخبر'],
    },

    content: {
        introduction: 'تخزين عفش بالخبر — خدمة متخصصة تراعي الظروف المناخية والبيئية في الخبر. فريق محترف مع أدوات حديثة وضمان مكتوب.',
        shortAnswer: 'تخزين عفش بالخبر: خدمة احترافية بأسعار شفافة. فريق متخصص. ضمان مكتوب.',
        heroSubtitle: 'تخزين عفش بالخبر. خدمة احترافية. ضمان.',
    },

    pricing: [
        { type: 'تخزين عفش — أساسي', unit: 'خدمة', minPrice: 150, maxPrice: 300, time: '1-3 ساعات' },
        { type: 'تخزين عفش — شامل', unit: 'خدمة', minPrice: 300, maxPrice: 600, time: '2-5 ساعات' },
    ],

    faq: [
        { question: 'كم تكلفة تخزين عفش بالخبر؟', answer: 'تبدأ الأسعار من 150 ريال وتختلف حسب المساحة ونوع الخدمة. اطلب عرض سعر مجاني.' },
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
        { slug: 'al-khobar-furniture-moving', context: 'نقل عفش بالخبر', priority: 1 },
        { slug: 'al-khobar-dyna', context: 'دينا نقل بالخبر', priority: 2 },
        { slug: 'al-khobar-moving-out', context: 'نقل عفش خروج بالخبر', priority: 3 },
        { slug: 'al-khobar-dabab', context: 'دباب نقل بالخبر', priority: 4 },
        { slug: 'al-khobar-cleaning', context: 'تنظيف منازل بالخبر', priority: 5 },
        { slug: 'al-khobar-tanks-cleaning', context: 'تنظيف خزانات بالخبر', priority: 6 },
        { slug: 'al-khobar-sofa-cleaning', context: 'تنظيف كنب بالخبر', priority: 7 },
        { slug: 'al-khobar-carpet-cleaning', context: 'تنظيف سجاد بالخبر', priority: 8 },
        { slug: 'al-khobar-steam-cleaning', context: 'تنظيف بالبخار بالخبر', priority: 9 },
    ],
};
