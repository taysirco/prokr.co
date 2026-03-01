// عزل حراري بجازان — Override (E-E-A-T)
// الزاوية: Heat Index (حرارة+رطوبة) = 50°م+ محسوسة
//   + رطوبة تُجبر التكييف على عمل مزدوج (تبريد+تجفيف)

import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'عزل حراري بجازان — وفر تكييف ضد Heat Index 50°م+ محسوسة (2026)',
        description: 'عزل حراري بجازان. Heat Index يتجاوز 50°م (حرارة+رطوبة). التكييف يعمل مزدوج: تبريد+تجفيف. Closed-Cell فوم سقف + صوف صخري جدران. وفر 25-35%. كود SBC 601.',
        h1: 'عزل حراري بجازان — حماية من حرارة استوائية ورطوبة مضاعفة',
        keywords: ['عزل حراري بجازان', 'عزل حراري جازان', 'تخفيض كهرباء جازان', 'شركة عزل جازان'],
    },

    content: {
        introduction: 'العزل الحراري بجازان مختلف — لأن الحرارة ليست العدو الوحيد. معادلة جازان الخاصة: الحرارة الفعلية (35-41°م) أقل من الرياض (48°م). لكن Heat Index (الحرارة المحسوسة = حرارة + رطوبة) يتجاوز 50°م بجازان. والتكييف يعمل مزدوجاً: (1) تبريد — خفض الحرارة. (2) تجفيف — خفض الرطوبة. استهلاك الكهرباء أعلى مما تتوقع من الحرارة وحدها. العزل يُقلل الحمل الحراري على التكييف ← يركّز التكييف أكثر على التجفيف (الأثقل بجازان) ← وفر 25-35%. اختيار المواد: Closed-Cell فوم (لا يمتص رطوبة — Open-Cell يمتص ← يفشل). صوف صخري للجدران (عزل حراري + مقاوم رطوبة + مقاوم حريق). EPS لا يصلح — يمتص رطوبة جازان ← يفقد عزله ← يتعفن.',
        shortAnswer: 'جازان: Heat Index 50°م+ (حرارة+رطوبة). التكييف يعمل مزدوج (تبريد+تجفيف) ← فاتورة أعلى. العزل يُقلل الحمل الحراري ← وفر 25-35%. Closed-Cell + صوف صخري. لا EPS ولا Open-Cell.',
        heroSubtitle: 'عزل حراري جازان. Closed-Cell. مقاوم رطوبة. وفر طاقة.',
    },

    pricing: [
        { type: 'عزل سقف — فوم Closed-Cell (5 سم)', unit: 'م²', minPrice: 30, maxPrice: 50, time: 'يوم' },
        { type: 'عزل جدران — صوف صخري (5 سم)', unit: 'م²', minPrice: 20, maxPrice: 35, time: 'حسب المساحة' },
        { type: 'فحص حراري FLIR', unit: 'مبنى', minPrice: 300, maxPrice: 600, time: '2-3 ساعات' },
    ],

    faq: [
        {
            question: 'جازان أقل حرارة من الرياض — ليش فاتورة الكهرباء مثلها أو أعلى؟',
            answer: 'Heat Index. الحرارة 38°م + رطوبة 58% = 50°م+ محسوسة. والتكييف يعمل مزدوج: تبريد الهواء + إزالة الرطوبة. إزالة الرطوبة تستهلك طاقة كبيرة (أحياناً أكثر من التبريد). العزل يقطع الحمل الحراري ← التكييف يركز على التجفيف = كهرباء أقل.',
        },
        {
            question: 'EPS أرخص — يصلح بجازان؟',
            answer: 'لا. EPS يمتص رطوبة جازان (58%+) ← يصبح وسيطاً حرارياً بدل عازل ← يفقد قدرته ← يتعفن. Closed-Cell (لا يمتص أبداً) أو صوف صخري (مقاوم رطوبة) = الخيارات الآمنة فقط.',
        },
        {
            question: 'مزيل رطوبة يفيد مع العزل؟',
            answer: 'نعم تكامل: العزل يقطع الحمل الحراري (60%). مزيل الرطوبة يُخفف حمل التجفيف (40% الباقية). معاً = 35-45% وفر شامل. بجازان: الرطوبة = نصف معركة الفاتورة.',
        },
    ],

    expertTips: [
        'فاتورة جازان العالية = Heat Index وليس الحرارة فقط. العزل يقطع الحمل الحراري = وفر 25-35%',
        'Closed-Cell فقط — EPS و Open-Cell يمتصان رطوبة جازان ← يفشلان',
        'صوف صخري للجدران — عزل حراري + مقاوم رطوبة + مقاوم حريق = ثلاثي',
        'مزيل رطوبة (Dehumidifier) يُكمل العزل — يُخفف حمل التجفيف على التكييف',
    ],

    warnings: [
        'EPS بجازان = يمتص الرطوبة ← يفقد عزله ← يتعفن. لا EPS ولا Open-Cell',
        'مبنى بلا عزل بجازان = تكييف يعمل مزدوج 24/7 (تبريد+تجفيف) = أعلى فاتورة ممكنة',
    ],

    trustAnchors: [
        { ...GOV.SBC, role: 'كود البناء السعودي — اشتراطات العزل الحراري SBC 601' },
        { ...GOV.MOENERGY, role: 'معايير كفاءة الطاقة' },
        { entity: AMANA.JAZAN.entity, url: AMANA.JAZAN.url, role: 'تطبيق كود البناء بجازان', acronym: 'أمانة جازان' },
    ],

    expertReviewer: {
        name: EXPERTS.ALMOHAIMED.name,
        title: EXPERTS.ALMOHAIMED.title,
        credential: EXPERTS.ALMOHAIMED.credential,
        profileUrl: EXPERTS.ALMOHAIMED.profileUrl,
    },

    expertCitations: [
        {
            expert: 'م. ماجد المحيميد',
            quote: 'جازان = أعلى Heat Index بالسعودية (حرارة+رطوبة). التكييف يعمل مزدوج = فاتورة مضاعفة. العزل يقطع الحمل الحراري ← التكييف يركز على تجفيف = وفر 25-35%. Closed-Cell وصوف صخري فقط — كل شيء آخر يمتص ويتعفن',
            source: 'خبير جودة البناء والتشطيبات',
            url: 'https://x.com/majedalmohaimed',
        },
    ],

    saudiRegulations: [REGULATIONS.SBC_601],

    verificationBadges: [
        { badge: '✔️ مقاوم رطوبة استوائية', authority: 'Closed-Cell + Rock Wool', icon: 'shield-check' },
        { badge: '✔️ كود SBC 601', authority: 'كود البناء السعودي', icon: 'badge-check' },
    ],

    equipment: [
        { name: 'فوم Closed-Cell', use: 'R-value 6.5/بوصة. لا يمتص رطوبة 58%+. يقطع الحرارة' },
        { name: 'صوف صخري Rock Wool', use: 'R-4/بوصة + مقاوم رطوبة + مقاوم حريق 1,000°م' },
        { name: 'كاميرا FLIR', use: 'تكشف نقاط التسرب الحراري — عزل مُوجّه' },
    ],

    hiddenObjections: [
        { fear: 'فاتورة الكهرباء بجازان ما تنزل حتى مع عزل', solution: 'العزل يقطع الحمل الحراري (60% من استهلاك التكييف). حمل التجفيف يبقى — لكنه أخف بكثير. مزيل رطوبة يُكمل العزل = 40% إضافية من وفر التجفيف' },
    ],

    counterNarratives: [
        { myth: 'جازان ما فيها حر شديد — ما تحتاج عزل', truth: 'Heat Index = 50°م+ (أعلى من الرياض أحياناً). والفاتورة أعلى بسبب التجفيف. العزل = أهم مما تظن بجازان' },
    ],

    relatedServices: [
        { slug: 'jazan-roof-insulation', context: 'عزل سطح = أول 60% من الحماية', priority: 1 },
        { slug: 'jazan-foam-insulation', context: 'فوم Closed-Cell — أقوى مادة مقاومة رطوبة', priority: 2 },
        { slug: 'jazan-water-insulation', context: 'عزل مائي = الأولوية الأولى بجازان', priority: 3 },
        { slug: 'jazan-water-leak-detection', context: 'كشف تسربات — العزل يمنع التكثف', priority: 4 },
        { slug: 'jazan-tank-insulation', context: 'عزل خزان — يحمي مياه الشرب', priority: 5 },
        { slug: 'jazan-bird-control', context: 'طرد حمام — ذرقه يأكل العزل', priority: 6 },
        { slug: 'jazan-pest-control', context: 'مكافحة حشرات — عزل سليم يمنع رطوبة', priority: 7 },
        { slug: 'jazan-sewage-unblocking', context: 'تسليك مجاري — المبنى المعزول يحتاج صرف سليم', priority: 8 },
    ],
};
