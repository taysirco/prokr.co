// ══════════════════════════════════════════════════════════════
// شفط بيارات ببريدة — Override مخصص (E-E-A-T Grade)
// صفحة: /buraidah/sewage-suction
// ══════════════════════════════════════════════════════════════

import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'شفط بيارات ببريدة — خدمة احترافية معتمدة (2026)',
        description: 'شفط بيارات ببريدة. خدمة احترافية. فريق متخصص. ضمان مكتوب. أسعار شفافة. خدمة سريعة.',
        h1: 'شفط بيارات ببريدة — خدمة احترافية معتمدة مع ضمان',
        keywords: ['شفط بيارات ببريدة', 'شفط بيارات بريدة', 'شركة شفط بيارات ببريدة', 'أفضل شفط بيارات ببريدة'],
    },

    content: {
        introduction: 'شفط بيارات ببريدة — خدمة متخصصة تراعي الظروف المناخية والبيئية في بريدة. فريق محترف مع أدوات حديثة وضمان مكتوب.',
        shortAnswer: 'شفط بيارات ببريدة: خدمة احترافية بأسعار شفافة. فريق متخصص. ضمان مكتوب.',
        heroSubtitle: 'شفط بيارات ببريدة. خدمة احترافية. ضمان.',
    },

    pricing: [
        { type: 'شفط بيارات — أساسي', unit: 'خدمة', minPrice: 150, maxPrice: 300, time: '1-3 ساعات' },
        { type: 'شفط بيارات — شامل', unit: 'خدمة', minPrice: 300, maxPrice: 600, time: '2-5 ساعات' },
    ],

    faq: [
        { question: 'كم تكلفة شفط بيارات ببريدة؟', answer: 'تبدأ الأسعار من 150 ريال وتختلف حسب المساحة ونوع الخدمة. اطلب عرض سعر مجاني.' },
        { question: 'كم يستغرق شفط بيارات؟', answer: 'يعتمد على حجم العمل — عادةً من ساعة إلى 5 ساعات. الفريق يقيّم ويحدد الوقت بدقة.' },
        { question: 'هل تقدمون ضمان على شفط بيارات؟', answer: 'نعم — ضمان مكتوب على جودة العمل. إذا لم تكن راضياً: إعادة الخدمة مجاناً.' },
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
        { badge: '✔️ شركة صرف صحي مرخصة', authority: 'وزارة البلديات والإسكان', icon: 'shield-check' },
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
        { slug: 'buraidah-furniture-moving', context: 'نقل عفش ببريدة', priority: 1 },
        { slug: 'buraidah-furniture-storage', context: 'تخزين عفش ببريدة', priority: 2 },
        { slug: 'buraidah-dyna', context: 'دينا نقل ببريدة', priority: 3 },
        { slug: 'buraidah-moving-out', context: 'نقل عفش خروج ببريدة', priority: 4 },
        { slug: 'buraidah-dabab', context: 'دباب نقل ببريدة', priority: 5 },
        { slug: 'buraidah-cleaning', context: 'تنظيف منازل ببريدة', priority: 6 },
        { slug: 'buraidah-tanks-cleaning', context: 'تنظيف خزانات ببريدة', priority: 7 },
        { slug: 'buraidah-sofa-cleaning', context: 'تنظيف كنب ببريدة', priority: 8 },
        { slug: 'buraidah-carpet-cleaning', context: 'تنظيف سجاد ببريدة', priority: 9 },
    ],
};
