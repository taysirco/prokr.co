// ══════════════════════════════════════════════════════════════
// مكافحة ثعابين وعقارب بالقطيف — Override مخصص (E-E-A-T Grade)
// صفحة: /qatif/snakes-control
// ══════════════════════════════════════════════════════════════

import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'مكافحة ثعابين وعقارب بالقطيف — خدمة احترافية معتمدة (2026)',
        description: 'مكافحة ثعابين وعقارب بالقطيف. خدمة احترافية. فريق متخصص. ضمان مكتوب. أسعار شفافة. خدمة سريعة.',
        h1: 'مكافحة ثعابين وعقارب بالقطيف — خدمة احترافية معتمدة مع ضمان',
        keywords: ['مكافحة ثعابين وعقارب بالقطيف', 'مكافحة ثعابين وعقارب القطيف', 'شركة مكافحة ثعابين وعقارب بالقطيف', 'أفضل مكافحة ثعابين وعقارب بالقطيف'],
    },

    content: {
        introduction: 'مكافحة ثعابين وعقارب بالقطيف — خدمة متخصصة تراعي الظروف المناخية والبيئية في القطيف. فريق محترف مع أدوات حديثة وضمان مكتوب.',
        shortAnswer: 'مكافحة ثعابين وعقارب بالقطيف: خدمة احترافية بأسعار شفافة. فريق متخصص. ضمان مكتوب.',
        heroSubtitle: 'مكافحة ثعابين وعقارب بالقطيف. خدمة احترافية. ضمان.',
    },

    pricing: [
        { type: 'مكافحة ثعابين وعقارب — أساسي', unit: 'خدمة', minPrice: 150, maxPrice: 300, time: '1-3 ساعات' },
        { type: 'مكافحة ثعابين وعقارب — شامل', unit: 'خدمة', minPrice: 300, maxPrice: 600, time: '2-5 ساعات' },
    ],

    faq: [
        { question: 'كم تكلفة مكافحة ثعابين وعقارب بالقطيف؟', answer: 'تبدأ الأسعار من 150 ريال وتختلف حسب المساحة ونوع الخدمة. اطلب عرض سعر مجاني.' },
        { question: 'كم يستغرق مكافحة ثعابين وعقارب؟', answer: 'يعتمد على حجم العمل — عادةً من ساعة إلى 5 ساعات. الفريق يقيّم ويحدد الوقت بدقة.' },
        { question: 'هل تقدمون ضمان على مكافحة ثعابين وعقارب؟', answer: 'نعم — ضمان مكتوب على جودة العمل. إذا لم تكن راضياً: إعادة الخدمة مجاناً.' },
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
        { slug: 'qatif-furniture-moving', context: 'نقل عفش بالقطيف', priority: 1 },
        { slug: 'qatif-furniture-storage', context: 'تخزين عفش بالقطيف', priority: 2 },
        { slug: 'qatif-dyna', context: 'دينا نقل بالقطيف', priority: 3 },
        { slug: 'qatif-moving-out', context: 'نقل عفش خروج بالقطيف', priority: 4 },
        { slug: 'qatif-dabab', context: 'دباب نقل بالقطيف', priority: 5 },
        { slug: 'qatif-cleaning', context: 'تنظيف منازل بالقطيف', priority: 6 },
        { slug: 'qatif-tanks-cleaning', context: 'تنظيف خزانات بالقطيف', priority: 7 },
        { slug: 'qatif-sofa-cleaning', context: 'تنظيف كنب بالقطيف', priority: 8 },
        { slug: 'qatif-carpet-cleaning', context: 'تنظيف سجاد بالقطيف', priority: 9 },
    ],
};
