// ══════════════════════════════════════════════════════════════
// تنظيف خزانات بالاحساء — Override مخصص (E-E-A-T Grade)
// صفحة: /al-ahsa/tanks-cleaning
// ══════════════════════════════════════════════════════════════

import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف خزانات بالاحساء — خدمة احترافية معتمدة (2026)',
        description: 'تنظيف خزانات بالاحساء. خدمة احترافية. فريق متخصص. ضمان مكتوب. أسعار شفافة. خدمة سريعة.',
        h1: 'تنظيف خزانات بالاحساء — خدمة احترافية معتمدة مع ضمان',
        keywords: ['تنظيف خزانات بالاحساء', 'تنظيف خزانات الاحساء', 'شركة تنظيف خزانات بالاحساء', 'أفضل تنظيف خزانات بالاحساء'],
    },

    content: {
        introduction: 'تنظيف خزانات بالاحساء — خدمة متخصصة تراعي الظروف المناخية والبيئية في الاحساء. فريق محترف مع أدوات حديثة وضمان مكتوب.',
        shortAnswer: 'تنظيف خزانات بالاحساء: خدمة احترافية بأسعار شفافة. فريق متخصص. ضمان مكتوب.',
        heroSubtitle: 'تنظيف خزانات بالاحساء. خدمة احترافية. ضمان.',
    },

    pricing: [
        { type: 'تنظيف خزانات — أساسي', unit: 'خدمة', minPrice: 150, maxPrice: 300, time: '1-3 ساعات' },
        { type: 'تنظيف خزانات — شامل', unit: 'خدمة', minPrice: 300, maxPrice: 600, time: '2-5 ساعات' },
    ],

    faq: [
        { question: 'كم تكلفة تنظيف خزانات بالاحساء؟', answer: 'تبدأ الأسعار من 150 ريال وتختلف حسب المساحة ونوع الخدمة. اطلب عرض سعر مجاني.' },
        { question: 'كم يستغرق تنظيف خزانات؟', answer: 'يعتمد على حجم العمل — عادةً من ساعة إلى 5 ساعات. الفريق يقيّم ويحدد الوقت بدقة.' },
        { question: 'هل تقدمون ضمان على تنظيف خزانات؟', answer: 'نعم — ضمان مكتوب على جودة العمل. إذا لم تكن راضياً: إعادة الخدمة مجاناً.' },
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
        { slug: 'al-ahsa-furniture-moving', context: 'نقل عفش بالاحساء', priority: 1 },
        { slug: 'al-ahsa-furniture-storage', context: 'تخزين عفش بالاحساء', priority: 2 },
        { slug: 'al-ahsa-dyna', context: 'دينا نقل بالاحساء', priority: 3 },
        { slug: 'al-ahsa-moving-out', context: 'نقل عفش خروج بالاحساء', priority: 4 },
        { slug: 'al-ahsa-dabab', context: 'دباب نقل بالاحساء', priority: 5 },
        { slug: 'al-ahsa-cleaning', context: 'تنظيف منازل بالاحساء', priority: 6 },
        { slug: 'al-ahsa-sofa-cleaning', context: 'تنظيف كنب بالاحساء', priority: 7 },
        { slug: 'al-ahsa-carpet-cleaning', context: 'تنظيف سجاد بالاحساء', priority: 8 },
        { slug: 'al-ahsa-steam-cleaning', context: 'تنظيف بالبخار بالاحساء', priority: 9 },
    ],
};
