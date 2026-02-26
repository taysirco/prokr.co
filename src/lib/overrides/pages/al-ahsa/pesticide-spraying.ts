// ══════════════════════════════════════════════════════════════
// رش مبيدات بالاحساء — Override مخصص (E-E-A-T Grade)
// صفحة: /al-ahsa/pesticide-spraying
// ══════════════════════════════════════════════════════════════

import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'رش مبيدات بالاحساء — خدمة احترافية معتمدة (2026)',
        description: 'رش مبيدات بالاحساء. خدمة احترافية. فريق متخصص. ضمان مكتوب. أسعار شفافة. خدمة سريعة.',
        h1: 'رش مبيدات بالاحساء — خدمة احترافية معتمدة مع ضمان',
        keywords: ['رش مبيدات بالاحساء', 'رش مبيدات الاحساء', 'شركة رش مبيدات بالاحساء', 'أفضل رش مبيدات بالاحساء'],
    },

    content: {
        introduction: 'رش مبيدات بالاحساء — خدمة متخصصة تراعي الظروف المناخية والبيئية في الاحساء. فريق محترف مع أدوات حديثة وضمان مكتوب.',
        shortAnswer: 'رش مبيدات بالاحساء: خدمة احترافية بأسعار شفافة. فريق متخصص. ضمان مكتوب.',
        heroSubtitle: 'رش مبيدات بالاحساء. خدمة احترافية. ضمان.',
    },

    pricing: [
        { type: 'رش مبيدات — أساسي', unit: 'خدمة', minPrice: 150, maxPrice: 300, time: '1-3 ساعات' },
        { type: 'رش مبيدات — شامل', unit: 'خدمة', minPrice: 300, maxPrice: 600, time: '2-5 ساعات' },
    ],

    faq: [
        { question: 'كم تكلفة رش مبيدات بالاحساء؟', answer: 'تبدأ الأسعار من 150 ريال وتختلف حسب المساحة ونوع الخدمة. اطلب عرض سعر مجاني.' },
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
        { slug: 'al-ahsa-furniture-moving', context: 'نقل عفش بالاحساء', priority: 1 },
        { slug: 'al-ahsa-furniture-storage', context: 'تخزين عفش بالاحساء', priority: 2 },
        { slug: 'al-ahsa-dyna', context: 'دينا نقل بالاحساء', priority: 3 },
        { slug: 'al-ahsa-moving-out', context: 'نقل عفش خروج بالاحساء', priority: 4 },
        { slug: 'al-ahsa-dabab', context: 'دباب نقل بالاحساء', priority: 5 },
        { slug: 'al-ahsa-cleaning', context: 'تنظيف منازل بالاحساء', priority: 6 },
        { slug: 'al-ahsa-tanks-cleaning', context: 'تنظيف خزانات بالاحساء', priority: 7 },
        { slug: 'al-ahsa-sofa-cleaning', context: 'تنظيف كنب بالاحساء', priority: 8 },
        { slug: 'al-ahsa-carpet-cleaning', context: 'تنظيف سجاد بالاحساء', priority: 9 },
    ],
};
