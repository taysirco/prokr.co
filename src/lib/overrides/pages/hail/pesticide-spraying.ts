// ══════════════════════════════════════════════════════════════
// رش مبيدات بحائل — Override مخصص (E-E-A-T Grade)
// صفحة: /hail/pesticide-spraying
// ══════════════════════════════════════════════════════════════

import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'رش مبيدات بحائل — خدمة احترافية معتمدة (2026)',
        description: 'رش مبيدات بحائل. خدمة احترافية. فريق متخصص. ضمان مكتوب. أسعار شفافة. خدمة سريعة.',
        h1: 'رش مبيدات بحائل — خدمة احترافية معتمدة مع ضمان',
        keywords: ['رش مبيدات بحائل', 'رش مبيدات حائل', 'شركة رش مبيدات بحائل', 'أفضل رش مبيدات بحائل'],
    },

    content: {
        introduction: 'رش مبيدات بحائل — خدمة متخصصة تراعي الظروف المناخية والبيئية في حائل. فريق محترف مع أدوات حديثة وضمان مكتوب.',
        shortAnswer: 'رش مبيدات بحائل: خدمة احترافية بأسعار شفافة. فريق متخصص. ضمان مكتوب.',
        heroSubtitle: 'رش مبيدات بحائل. خدمة احترافية. ضمان.',
    },

    pricing: [
        { type: 'رش مبيدات — أساسي', unit: 'خدمة', minPrice: 150, maxPrice: 300, time: '1-3 ساعات' },
        { type: 'رش مبيدات — شامل', unit: 'خدمة', minPrice: 300, maxPrice: 600, time: '2-5 ساعات' },
    ],

    faq: [
        { question: 'كم تكلفة رش مبيدات بحائل؟', answer: 'تبدأ الأسعار من 150 ريال وتختلف حسب المساحة ونوع الخدمة. اطلب عرض سعر مجاني.' },
        { question: 'كم يستغرق رش مبيدات؟', answer: 'يعتمد على حجم العمل — عادةً من ساعة إلى 5 ساعات. الفريق يقيّم ويحدد الوقت بدقة.' },
        { question: 'هل تقدمون ضمان على رش مبيدات؟', answer: 'نعم — ضمان مكتوب على جودة العمل. إذا لم تكن راضياً: إعادة الخدمة مجاناً.' },
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
        { ...GOV.SFDA, role: 'الجهة المنظمة والمرخصة لهذا القطاع' },
    ],

    expertReviewer: {
        name: EXPERTS.ALKHODAIRY.name,
        title: EXPERTS.ALKHODAIRY.title,
        credential: EXPERTS.ALKHODAIRY.credential,
        profileUrl: EXPERTS.ALKHODAIRY.profileUrl,
    },

    expertCitations: [
        {
            expert: EXPERTS.ALKHODAIRY.name,
            quote: 'الالتزام بالمعايير والاشتراطات السعودية ضرورة — يحمي العميل ويضمن جودة العمل',
            source: EXPERTS.ALKHODAIRY.title,
            url: EXPERTS.ALKHODAIRY.profileUrl,
        },
    ],

    saudiRegulations: [REGULATIONS.GHAD_SYSTEM],

    verificationBadges: [
        { badge: '✔️ مبيدات معتمدة من SFDA', authority: 'هيئة الغذاء والدواء', icon: 'shield-check' },
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
        { slug: 'hail-furniture-moving', context: 'نقل عفش بحائل', priority: 1 },
        { slug: 'hail-furniture-storage', context: 'تخزين عفش بحائل', priority: 2 },
        { slug: 'hail-dyna', context: 'دينا نقل بحائل', priority: 3 },
        { slug: 'hail-moving-out', context: 'نقل عفش خروج بحائل', priority: 4 },
        { slug: 'hail-dabab', context: 'دباب نقل بحائل', priority: 5 },
        { slug: 'hail-cleaning', context: 'تنظيف منازل بحائل', priority: 6 },
        { slug: 'hail-tanks-cleaning', context: 'تنظيف خزانات بحائل', priority: 7 },
        { slug: 'hail-sofa-cleaning', context: 'تنظيف كنب بحائل', priority: 8 },
        { slug: 'hail-carpet-cleaning', context: 'تنظيف سجاد بحائل', priority: 9 },
    ],
};
