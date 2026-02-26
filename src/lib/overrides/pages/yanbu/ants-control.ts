// ══════════════════════════════════════════════════════════════
// مكافحة نمل بينبع — Override مخصص (E-E-A-T Grade)
// صفحة: /yanbu/ants-control
// ══════════════════════════════════════════════════════════════

import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'مكافحة نمل بينبع — خدمة احترافية معتمدة (2026)',
        description: 'مكافحة نمل بينبع. خدمة احترافية. فريق متخصص. ضمان مكتوب. أسعار شفافة. خدمة سريعة.',
        h1: 'مكافحة نمل بينبع — خدمة احترافية معتمدة مع ضمان',
        keywords: ['مكافحة نمل بينبع', 'مكافحة نمل ينبع', 'شركة مكافحة نمل بينبع', 'أفضل مكافحة نمل بينبع'],
    },

    content: {
        introduction: 'مكافحة نمل بينبع — خدمة متخصصة تراعي الظروف المناخية والبيئية في ينبع. فريق محترف مع أدوات حديثة وضمان مكتوب.',
        shortAnswer: 'مكافحة نمل بينبع: خدمة احترافية بأسعار شفافة. فريق متخصص. ضمان مكتوب.',
        heroSubtitle: 'مكافحة نمل بينبع. خدمة احترافية. ضمان.',
    },

    pricing: [
        { type: 'مكافحة نمل — أساسي', unit: 'خدمة', minPrice: 150, maxPrice: 300, time: '1-3 ساعات' },
        { type: 'مكافحة نمل — شامل', unit: 'خدمة', minPrice: 300, maxPrice: 600, time: '2-5 ساعات' },
    ],

    faq: [
        { question: 'كم تكلفة مكافحة نمل بينبع؟', answer: 'تبدأ الأسعار من 150 ريال وتختلف حسب المساحة ونوع الخدمة. اطلب عرض سعر مجاني.' },
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
        { slug: 'yanbu-furniture-moving', context: 'نقل عفش بينبع', priority: 1 },
        { slug: 'yanbu-furniture-storage', context: 'تخزين عفش بينبع', priority: 2 },
        { slug: 'yanbu-dyna', context: 'دينا نقل بينبع', priority: 3 },
        { slug: 'yanbu-moving-out', context: 'نقل عفش خروج بينبع', priority: 4 },
        { slug: 'yanbu-dabab', context: 'دباب نقل بينبع', priority: 5 },
        { slug: 'yanbu-cleaning', context: 'تنظيف منازل بينبع', priority: 6 },
        { slug: 'yanbu-tanks-cleaning', context: 'تنظيف خزانات بينبع', priority: 7 },
        { slug: 'yanbu-sofa-cleaning', context: 'تنظيف كنب بينبع', priority: 8 },
        { slug: 'yanbu-carpet-cleaning', context: 'تنظيف سجاد بينبع', priority: 9 },
    ],
};
