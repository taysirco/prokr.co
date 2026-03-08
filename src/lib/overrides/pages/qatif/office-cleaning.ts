import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف مكاتب بالقطيف — NaCl أجهزة + 80-95% عفن مكتبي واحي + طلع + طين (2026)',
        description: 'تنظيف مكاتب القطيف. NaCl أجهزة. 80-95% عفن واحي مكتبي. طلع نخيل حساسية. طين. RO + Anti-Fungal + HEPA.',
        h1: 'تنظيف مكاتب بالقطيف — ملح على أجهزتك وعفن واحي وطلع نخيل',
        keywords: ['تنظيف مكاتب القطيف', 'تنظيف مكتب بالقطيف', 'شركة تنظيف مكاتب بالقطيف'],
    },
    content: {
        introduction: 'المكتب في القطيف = ساحلي-واحي. الأول — NaCl أجهزة: NaCl يترسب على إلكترونيات = Galvanic. RO + Anti-Static. الثاني — 80-95% عفن واحي مكتبي: عفن مكيف + خلف أثاث مكتب = Sick Building. Anti-Fungal. الثالث — طلع نخيل: غبار طلع يدخل المكاتب = حساسية مهنية. HEPA. الرابع — طين: PM10 طيني على الأسطح. الشركات المعتمدة عبر بروكر مرخصة من منصة بلدي وتستخدم معدات صناعية ومواد تنظيف معتمدة SASO. التنظيف العميق يشمل: تعقيم بالبخار 150°م + شفط HEPA + تجفيف كامل. النتيجة: بيئة صحية خالية من البكتيريا والمسببات.',
        shortAnswer: 'على عكس [عاملة مبنى] التي لا تُعالج عفن واحي ولا طلع، يعتمد بروتوكولنا في خدمة [تنظيف المكاتب] بمدينة [القطيف] على [RO + Anti-Fungal + HEPA + Anti-Static]. ففي ظل [NaCl + 80-95% + طلع + طين]، تتفاقم ظاهرة [Galvanic + عفن + حساسية + التصاق]. لذا؛ يتدخل خبراؤنا عبر [بروتوكول مكتب ساحلي-واحي].',
        heroSubtitle: 'NaCl أجهزة + عفن واحي + طلع نخيل حساسية + طين',
    },
    pricing: [
        { type: 'مكتب صغير (50 م²)', unit: 'خدمة', minPrice: 120, maxPrice: 250, time: '2-3 ساعات' },
        { type: 'مكتب كبير (100+ م²)', unit: 'خدمة', minPrice: 250, maxPrice: 500, time: '3-5 ساعات' },
        { type: 'عقد أسبوعي', unit: 'شهر', minPrice: 370, maxPrice: 750, time: '4 زيارات' },
    ],
    faq: [
        { question: 'طلع — حساسية مهنية؟', answer: 'ملايين نخلة. موسم تلقيح = غبار طلع 8 ساعات في المكتب. HEPA ضروري.' },
        { question: 'مقابل الجبيل — أبسط؟', answer: 'لا VOC PM2.5 ولا سخام. أبسط. لكن: طلع+واحي فريد.' },
        { question: 'عفن واحي — Sick Building؟', answer: '80-95% + عيون = عفن مكيف+خلف أثاث. صداع+حساسية.' },
        { question: 'كم تكلفة التنظيف العميق مقارنة بالتنظيف العادي؟', answer: 'التنظيف العميق أغلى 30-50% لكنه يشمل: HEPA + بخار 150°م + تعقيم. التنظيف العادي = مسح سطحي. العميق كل 3-4 أشهر + العادي أسبوعياً = أفضل معادلة تكلفة/نظافة.' },
        { question: 'هل المواد المستخدمة آمنة على الأطفال؟', answer: 'مواد معتمدة من هيئة الغذاء والدواء SFDA. بعد التنظيف: تهوية 30 دقيقة كافية. بخار 150°م = بديل للكيماويات — آمن 100% على الأطفال والحيوانات.' },
    ],
    expertTips: [
        'HEPA — طلع نخيل مهني.',
        'Anti-Fungal — عفن واحي مكتبي.',
        'RO + Anti-Static — NaCl أجهزة.',
        'Dehumidifier مكتبي — 50-60%.',
        'بعد التنظيف: شغّل المكيف وليس الشبّاك — الهواء الخارجي يعيد الغبار على الأسطح النظيفة.',
    ],
    warnings: [
        'طلع × 8 ساعات = حساسية مهنية.',
        'NaCl + إلكترونيات = Galvanic.',
        '80-95% + مكيف = عفن واحي = Sick Building.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص تنظيف تجاري' },
        { entity: AMANA.SHARQIA.entity, url: AMANA.SHARQIA.url, role: 'اشتراطات المكاتب بالشرقية' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALJUND.name, quote: 'مكتب القطيف: NaCl+عفن واحي+طلع نخيل. HEPA+Anti-Fungal+RO. ساحلي-واحي.', source: 'موسوعة أخطاء — مكاتب الواحات' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ تنظيف مكاتب مرخص', authority: 'منصة بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'HEPA', use: 'طلع نخيل — حساسية' },
        { name: 'Anti-Fungal', use: '80-95% — عفن واحي' },
        { name: 'RO + Anti-Static', use: 'NaCl — أجهزة' },
    ],
    hiddenObjections: [
        { fear: 'مثل الخبر.', solution: 'طلع+واحي. مختلف.' },
        { fear: 'عاملة المبنى.', solution: 'بدون HEPA+Anti-Fungal = 0%.' },
    ],
    counterNarratives: [
        { myth: 'ساحلي فقط.', truth: 'واحي = طلع+عيون.' },
        { myth: 'مكيف يكفي.', truth: 'فلتر لا يحجز طلع. HEPA.' },
    ],
    relatedServices: [
        { slug: 'cleaning', context: 'تنظيف', priority: 1 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 2 },
        { slug: 'carpet-cleaning', context: 'موكيت', priority: 3 },
        { slug: 'glass-facades-cleaning', context: 'واجهات', priority: 4 },
        { slug: 'pest-control', context: 'حشرات', priority: 5 },
        { slug: 'steam-cleaning', context: 'بخار', priority: 6 },
        { slug: 'hourly-cleaning', context: 'بالساعة', priority: 7 },
    ],
};
