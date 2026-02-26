// ══════════════════════════════════════════════════════════════
// مكافحة نمل بالباحة — Override مخصص (E-E-A-T Grade)
// صفحة: /al-baha/ants-control
// ══════════════════════════════════════════════════════════════

import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'مكافحة نمل بالباحة — خدمة احترافية معتمدة (2026)',
        description: 'مكافحة نمل بالباحة. خدمة احترافية. فريق متخصص. ضمان مكتوب. أسعار شفافة. خدمة سريعة.',
        h1: 'مكافحة نمل بالباحة — خدمة احترافية معتمدة مع ضمان',
        keywords: ['مكافحة نمل بالباحة', 'مكافحة نمل الباحة', 'شركة مكافحة نمل بالباحة', 'أفضل مكافحة نمل بالباحة'],
    },

    content: {
        introduction: 'مكافحة نمل بالباحة — خدمة متخصصة تراعي الظروف المناخية والبيئية في الباحة. فريق محترف مع أدوات حديثة وضمان مكتوب.',
        shortAnswer: 'مكافحة نمل بالباحة: خدمة احترافية بأسعار شفافة. فريق متخصص. ضمان مكتوب.',
        heroSubtitle: 'مكافحة نمل بالباحة. خدمة احترافية. ضمان.',
    },

    pricing: [
        { type: 'مكافحة نمل — أساسي', unit: 'خدمة', minPrice: 150, maxPrice: 300, time: '1-3 ساعات' },
        { type: 'مكافحة نمل — شامل', unit: 'خدمة', minPrice: 300, maxPrice: 600, time: '2-5 ساعات' },
    ],

    faq: [
        { question: 'كم تكلفة مكافحة نمل بالباحة؟', answer: 'تبدأ الأسعار من 150 ريال وتختلف حسب المساحة ونوع الخدمة. اطلب عرض سعر مجاني.' },
        { question: 'كم يستغرق مكافحة نمل؟', answer: 'يعتمد على حجم العمل — عادةً من ساعة إلى 5 ساعات. الفريق يقيّم ويحدد الوقت بدقة.' },
        { question: 'هل تقدمون ضمان على مكافحة نمل؟', answer: 'نعم — ضمان مكتوب على جودة العمل. إذا لم تكن راضياً: إعادة الخدمة مجاناً.' },
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
        { slug: 'al-baha-furniture-moving', context: 'نقل عفش بالباحة', priority: 1 },
        { slug: 'al-baha-furniture-storage', context: 'تخزين عفش بالباحة', priority: 2 },
        { slug: 'al-baha-dyna', context: 'دينا نقل بالباحة', priority: 3 },
        { slug: 'al-baha-moving-out', context: 'نقل عفش خروج بالباحة', priority: 4 },
        { slug: 'al-baha-dabab', context: 'دباب نقل بالباحة', priority: 5 },
        { slug: 'al-baha-cleaning', context: 'تنظيف منازل بالباحة', priority: 6 },
        { slug: 'al-baha-tanks-cleaning', context: 'تنظيف خزانات بالباحة', priority: 7 },
        { slug: 'al-baha-sofa-cleaning', context: 'تنظيف كنب بالباحة', priority: 8 },
        { slug: 'al-baha-carpet-cleaning', context: 'تنظيف سجاد بالباحة', priority: 9 },
    ],
};
