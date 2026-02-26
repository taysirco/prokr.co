// ══════════════════════════════════════════════════════════════
// تنظيف شقق بالباحة — Override مخصص (E-E-A-T Grade)
// صفحة: /al-baha/apartments-cleaning
// ══════════════════════════════════════════════════════════════

import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف شقق بالباحة — خدمة احترافية معتمدة (2026)',
        description: 'تنظيف شقق بالباحة. خدمة احترافية. فريق متخصص. ضمان مكتوب. أسعار شفافة. خدمة سريعة.',
        h1: 'تنظيف شقق بالباحة — خدمة احترافية معتمدة مع ضمان',
        keywords: ['تنظيف شقق بالباحة', 'تنظيف شقق الباحة', 'شركة تنظيف شقق بالباحة', 'أفضل تنظيف شقق بالباحة'],
    },

    content: {
        introduction: 'تنظيف شقق بالباحة — خدمة متخصصة تراعي الظروف المناخية والبيئية في الباحة. فريق محترف مع أدوات حديثة وضمان مكتوب.',
        shortAnswer: 'تنظيف شقق بالباحة: خدمة احترافية بأسعار شفافة. فريق متخصص. ضمان مكتوب.',
        heroSubtitle: 'تنظيف شقق بالباحة. خدمة احترافية. ضمان.',
    },

    pricing: [
        { type: 'تنظيف شقق — أساسي', unit: 'خدمة', minPrice: 150, maxPrice: 300, time: '1-3 ساعات' },
        { type: 'تنظيف شقق — شامل', unit: 'خدمة', minPrice: 300, maxPrice: 600, time: '2-5 ساعات' },
    ],

    faq: [
        { question: 'كم تكلفة تنظيف شقق بالباحة؟', answer: 'تبدأ الأسعار من 150 ريال وتختلف حسب المساحة ونوع الخدمة. اطلب عرض سعر مجاني.' },
        { question: 'كم يستغرق تنظيف شقق؟', answer: 'يعتمد على حجم العمل — عادةً من ساعة إلى 5 ساعات. الفريق يقيّم ويحدد الوقت بدقة.' },
        { question: 'هل تقدمون ضمان على تنظيف شقق؟', answer: 'نعم — ضمان مكتوب على جودة العمل. إذا لم تكن راضياً: إعادة الخدمة مجاناً.' },
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
        { ...GOV.BALADI, role: 'الجهة المنظمة والمرخصة لهذا القطاع' },
    ],

    expertReviewer: {
        name: EXPERTS.ALMOHAIMED.name,
        title: EXPERTS.ALMOHAIMED.title,
        credential: EXPERTS.ALMOHAIMED.credential,
        profileUrl: EXPERTS.ALMOHAIMED.profileUrl,
    },

    expertCitations: [
        {
            expert: EXPERTS.ALMOHAIMED.name,
            quote: 'الالتزام بالمعايير والاشتراطات السعودية ضرورة — يحمي العميل ويضمن جودة العمل',
            source: EXPERTS.ALMOHAIMED.title,
            url: EXPERTS.ALMOHAIMED.profileUrl,
        },
    ],

    saudiRegulations: [REGULATIONS.BALADI_HEALTH],

    verificationBadges: [
        { badge: '✔️ شركة تنظيف مرخصة من بلدي', authority: 'وزارة البلديات والإسكان', icon: 'shield-check' },
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
