// ══════════════════════════════════════════════════════════════
// مكافحة حشرات بالدمام — Override مخصص (E-E-A-T Grade)
// صفحة: /dammam/pest-control
// ══════════════════════════════════════════════════════════════

import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'مكافحة حشرات بالدمام — خدمة احترافية معتمدة (2026)',
        description: 'مكافحة حشرات بالدمام. خدمة احترافية. فريق متخصص. ضمان مكتوب. أسعار شفافة. خدمة سريعة.',
        h1: 'مكافحة حشرات بالدمام — خدمة احترافية معتمدة مع ضمان',
        keywords: ['مكافحة حشرات بالدمام', 'مكافحة حشرات الدمام', 'شركة مكافحة حشرات بالدمام', 'أفضل مكافحة حشرات بالدمام'],
    },

    content: {
        introduction: 'مكافحة حشرات بالدمام — خدمة متخصصة تراعي الظروف المناخية والبيئية في الدمام. فريق محترف مع أدوات حديثة وضمان مكتوب.',
        shortAnswer: 'مكافحة حشرات بالدمام: خدمة احترافية بأسعار شفافة. فريق متخصص. ضمان مكتوب.',
        heroSubtitle: 'مكافحة حشرات بالدمام. خدمة احترافية. ضمان.',
    },

    pricing: [
        { type: 'مكافحة حشرات — أساسي', unit: 'خدمة', minPrice: 150, maxPrice: 300, time: '1-3 ساعات' },
        { type: 'مكافحة حشرات — شامل', unit: 'خدمة', minPrice: 300, maxPrice: 600, time: '2-5 ساعات' },
    ],

    faq: [
        { question: 'كم تكلفة مكافحة حشرات بالدمام؟', answer: 'تبدأ الأسعار من 150 ريال وتختلف حسب المساحة ونوع الخدمة. اطلب عرض سعر مجاني.' },
        { question: 'كم يستغرق مكافحة حشرات؟', answer: 'يعتمد على حجم العمل — عادةً من ساعة إلى 5 ساعات. الفريق يقيّم ويحدد الوقت بدقة.' },
        { question: 'هل تقدمون ضمان على مكافحة حشرات؟', answer: 'نعم — ضمان مكتوب على جودة العمل. إذا لم تكن راضياً: إعادة الخدمة مجاناً.' },
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
        { slug: 'dammam-furniture-moving', context: 'نقل عفش بالدمام', priority: 1 },
        { slug: 'dammam-furniture-storage', context: 'تخزين عفش بالدمام', priority: 2 },
        { slug: 'dammam-dyna', context: 'دينا نقل بالدمام', priority: 3 },
        { slug: 'dammam-moving-out', context: 'نقل عفش خروج بالدمام', priority: 4 },
        { slug: 'dammam-dabab', context: 'دباب نقل بالدمام', priority: 5 },
        { slug: 'dammam-cleaning', context: 'تنظيف منازل بالدمام', priority: 6 },
        { slug: 'dammam-tanks-cleaning', context: 'تنظيف خزانات بالدمام', priority: 7 },
        { slug: 'dammam-sofa-cleaning', context: 'تنظيف كنب بالدمام', priority: 8 },
        { slug: 'dammam-carpet-cleaning', context: 'تنظيف سجاد بالدمام', priority: 9 },
    ],
};
