// ══════════════════════════════════════════════════════════════
// مكافحة صراصير بالطائف — Override مخصص (E-E-A-T Grade)
// صفحة: /taif/cockroach-control
// ══════════════════════════════════════════════════════════════

import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'مكافحة صراصير بالطائف — خدمة احترافية معتمدة (2026)',
        description: 'مكافحة صراصير بالطائف. خدمة احترافية. فريق متخصص. ضمان مكتوب. أسعار شفافة. خدمة سريعة.',
        h1: 'مكافحة صراصير بالطائف — خدمة احترافية معتمدة مع ضمان',
        keywords: ['مكافحة صراصير بالطائف', 'مكافحة صراصير الطائف', 'شركة مكافحة صراصير بالطائف', 'أفضل مكافحة صراصير بالطائف'],
    },

    content: {
        introduction: 'مكافحة صراصير بالطائف — خدمة متخصصة تراعي الظروف المناخية والبيئية في الطائف. فريق محترف مع أدوات حديثة وضمان مكتوب.',
        shortAnswer: 'مكافحة صراصير بالطائف: خدمة احترافية بأسعار شفافة. فريق متخصص. ضمان مكتوب.',
        heroSubtitle: 'مكافحة صراصير بالطائف. خدمة احترافية. ضمان.',
    },

    pricing: [
        { type: 'مكافحة صراصير — أساسي', unit: 'خدمة', minPrice: 150, maxPrice: 300, time: '1-3 ساعات' },
        { type: 'مكافحة صراصير — شامل', unit: 'خدمة', minPrice: 300, maxPrice: 600, time: '2-5 ساعات' },
    ],

    faq: [
        { question: 'كم تكلفة مكافحة صراصير بالطائف؟', answer: 'تبدأ الأسعار من 150 ريال وتختلف حسب المساحة ونوع الخدمة. اطلب عرض سعر مجاني.' },
        { question: 'كم يستغرق مكافحة صراصير؟', answer: 'يعتمد على حجم العمل — عادةً من ساعة إلى 5 ساعات. الفريق يقيّم ويحدد الوقت بدقة.' },
        { question: 'هل تقدمون ضمان على مكافحة صراصير؟', answer: 'نعم — ضمان مكتوب على جودة العمل. إذا لم تكن راضياً: إعادة الخدمة مجاناً.' },
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
        { slug: 'taif-furniture-moving', context: 'نقل عفش بالطائف', priority: 1 },
        { slug: 'taif-furniture-storage', context: 'تخزين عفش بالطائف', priority: 2 },
        { slug: 'taif-dyna', context: 'دينا نقل بالطائف', priority: 3 },
        { slug: 'taif-moving-out', context: 'نقل عفش خروج بالطائف', priority: 4 },
        { slug: 'taif-dabab', context: 'دباب نقل بالطائف', priority: 5 },
        { slug: 'taif-cleaning', context: 'تنظيف منازل بالطائف', priority: 6 },
        { slug: 'taif-tanks-cleaning', context: 'تنظيف خزانات بالطائف', priority: 7 },
        { slug: 'taif-sofa-cleaning', context: 'تنظيف كنب بالطائف', priority: 8 },
        { slug: 'taif-carpet-cleaning', context: 'تنظيف سجاد بالطائف', priority: 9 },
    ],
};
