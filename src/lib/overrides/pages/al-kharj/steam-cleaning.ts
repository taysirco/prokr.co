// ══════════════════════════════════════════════════════════════
// تنظيف بالبخار بالخرج — Override مخصص (E-E-A-T Grade)
// صفحة: /al-kharj/steam-cleaning
// ══════════════════════════════════════════════════════════════

import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف بالبخار بالخرج — خدمة احترافية معتمدة (2026)',
        description: 'تنظيف بالبخار بالخرج. خدمة احترافية. فريق متخصص. ضمان مكتوب. أسعار شفافة. خدمة سريعة.',
        h1: 'تنظيف بالبخار بالخرج — خدمة احترافية معتمدة مع ضمان',
        keywords: ['تنظيف بالبخار بالخرج', 'تنظيف بالبخار الخرج', 'شركة تنظيف بالبخار بالخرج', 'أفضل تنظيف بالبخار بالخرج'],
    },

    content: {
        introduction: 'تنظيف بالبخار بالخرج — خدمة متخصصة تراعي الظروف المناخية والبيئية في الخرج. فريق محترف مع أدوات حديثة وضمان مكتوب.',
        shortAnswer: 'تنظيف بالبخار بالخرج: خدمة احترافية بأسعار شفافة. فريق متخصص. ضمان مكتوب.',
        heroSubtitle: 'تنظيف بالبخار بالخرج. خدمة احترافية. ضمان.',
    },

    pricing: [
        { type: 'تنظيف بالبخار — أساسي', unit: 'خدمة', minPrice: 150, maxPrice: 300, time: '1-3 ساعات' },
        { type: 'تنظيف بالبخار — شامل', unit: 'خدمة', minPrice: 300, maxPrice: 600, time: '2-5 ساعات' },
    ],

    faq: [
        { question: 'كم تكلفة تنظيف بالبخار بالخرج؟', answer: 'تبدأ الأسعار من 150 ريال وتختلف حسب المساحة ونوع الخدمة. اطلب عرض سعر مجاني.' },
        { question: 'كم يستغرق تنظيف بالبخار؟', answer: 'يعتمد على حجم العمل — عادةً من ساعة إلى 5 ساعات. الفريق يقيّم ويحدد الوقت بدقة.' },
        { question: 'هل تقدمون ضمان على تنظيف بالبخار؟', answer: 'نعم — ضمان مكتوب على جودة العمل. إذا لم تكن راضياً: إعادة الخدمة مجاناً.' },
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
        { slug: 'al-kharj-furniture-moving', context: 'نقل عفش بالخرج', priority: 1 },
        { slug: 'al-kharj-furniture-storage', context: 'تخزين عفش بالخرج', priority: 2 },
        { slug: 'al-kharj-dyna', context: 'دينا نقل بالخرج', priority: 3 },
        { slug: 'al-kharj-moving-out', context: 'نقل عفش خروج بالخرج', priority: 4 },
        { slug: 'al-kharj-dabab', context: 'دباب نقل بالخرج', priority: 5 },
        { slug: 'al-kharj-cleaning', context: 'تنظيف منازل بالخرج', priority: 6 },
        { slug: 'al-kharj-tanks-cleaning', context: 'تنظيف خزانات بالخرج', priority: 7 },
        { slug: 'al-kharj-sofa-cleaning', context: 'تنظيف كنب بالخرج', priority: 8 },
        { slug: 'al-kharj-carpet-cleaning', context: 'تنظيف سجاد بالخرج', priority: 9 },
    ],
};
