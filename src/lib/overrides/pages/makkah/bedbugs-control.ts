// ══════════════════════════════════════════════════════════════
// مكافحة بق الفراش بمكة المكرمة — Override مخصص (E-E-A-T Grade)
// صفحة: /makkah/bedbugs-control
// ══════════════════════════════════════════════════════════════

import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'مكافحة بق الفراش بمكة المكرمة — خدمة احترافية معتمدة (2026)',
        description: 'مكافحة بق الفراش بمكة المكرمة. خدمة احترافية. فريق متخصص. ضمان مكتوب. أسعار شفافة. خدمة سريعة.',
        h1: 'مكافحة بق الفراش بمكة المكرمة — خدمة احترافية معتمدة مع ضمان',
        keywords: ['مكافحة بق الفراش بمكة المكرمة', 'مكافحة بق الفراش مكة المكرمة', 'شركة مكافحة بق الفراش بمكة المكرمة', 'أفضل مكافحة بق الفراش بمكة المكرمة'],
    },

    content: {
        introduction: 'مكافحة بق الفراش بمكة المكرمة — خدمة متخصصة تراعي الظروف المناخية والبيئية في مكة المكرمة. فريق محترف مع أدوات حديثة وضمان مكتوب.',
        shortAnswer: 'مكافحة بق الفراش بمكة المكرمة: خدمة احترافية بأسعار شفافة. فريق متخصص. ضمان مكتوب.',
        heroSubtitle: 'مكافحة بق الفراش بمكة المكرمة. خدمة احترافية. ضمان.',
    },

    pricing: [
        { type: 'مكافحة بق الفراش — أساسي', unit: 'خدمة', minPrice: 150, maxPrice: 300, time: '1-3 ساعات' },
        { type: 'مكافحة بق الفراش — شامل', unit: 'خدمة', minPrice: 300, maxPrice: 600, time: '2-5 ساعات' },
    ],

    faq: [
        { question: 'كم تكلفة مكافحة بق الفراش بمكة المكرمة؟', answer: 'تبدأ الأسعار من 150 ريال وتختلف حسب المساحة ونوع الخدمة. اطلب عرض سعر مجاني.' },
        { question: 'كم يستغرق مكافحة بق الفراش؟', answer: 'يعتمد على حجم العمل — عادةً من ساعة إلى 5 ساعات. الفريق يقيّم ويحدد الوقت بدقة.' },
        { question: 'هل تقدمون ضمان على مكافحة بق الفراش؟', answer: 'نعم — ضمان مكتوب على جودة العمل. إذا لم تكن راضياً: إعادة الخدمة مجاناً.' },
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
        { slug: 'makkah-furniture-moving', context: 'نقل عفش بمكة المكرمة', priority: 1 },
        { slug: 'makkah-furniture-storage', context: 'تخزين عفش بمكة المكرمة', priority: 2 },
        { slug: 'makkah-dyna', context: 'دينا نقل بمكة المكرمة', priority: 3 },
        { slug: 'makkah-moving-out', context: 'نقل عفش خروج بمكة المكرمة', priority: 4 },
        { slug: 'makkah-dabab', context: 'دباب نقل بمكة المكرمة', priority: 5 },
        { slug: 'makkah-cleaning', context: 'تنظيف منازل بمكة المكرمة', priority: 6 },
        { slug: 'makkah-tanks-cleaning', context: 'تنظيف خزانات بمكة المكرمة', priority: 7 },
        { slug: 'makkah-sofa-cleaning', context: 'تنظيف كنب بمكة المكرمة', priority: 8 },
        { slug: 'makkah-carpet-cleaning', context: 'تنظيف سجاد بمكة المكرمة', priority: 9 },
    ],
};
