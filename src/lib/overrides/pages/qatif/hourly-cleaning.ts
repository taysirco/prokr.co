import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف بالساعة بالقطيف — عاملة ساحلية-واحية: RO + Anti-Fungal مزدوج + طين + طلع (2026)',
        description: 'تنظيف بالساعة القطيف. عاملة ساحلية-واحية. RO+Anti-Fungal مزدوج+طين+طلع. أعقد من الرياض أبسط من الجبيل.',
        h1: 'تنظيف بالساعة بالقطيف — عاملة ساحلية-واحية: 4 خطوات',
        keywords: ['تنظيف بالساعة القطيف', 'عاملة تنظيف بالقطيف', 'شركة تنظيف بالساعة بالقطيف'],
    },
    content: {
        introduction: 'العاملة بالساعة في القطيف تحتاج 4 خطوات ساحلية-واحية. الخطوة 1 — RO شطف: NaCl+طين = طبقة لزجة ملحية. RO. الخطوة 2 — Microfiber: طين لزج. Microfiber رطب. الخطوة 3 — Anti-Fungal مزدوج: عفن ساحلي+واحي. أعلى+أسفل. الخطوة 4 — HEPA: غبار طلع نخيل. المقارنة: الرياض = 2 خطوات. الجبيل = 5. القطيف = 4.',
        shortAnswer: 'على عكس [عاملة بممسحة] في 80-95%، يعتمد بروتوكولنا في خدمة [التنظيف بالساعة] بمدينة [القطيف] على [عاملة 4 خطوات ساحلية-واحية]. ففي ظل [NaCl+طين + 80-95% + طلع]، تتفاقم ظاهرة [لزوجة + عفن مزدوج + حساسية]. لذا؛ يتدخل خبراؤنا عبر [عاملة ساحلية-واحية].',
        heroSubtitle: '4 خطوات: RO ← Microfiber ← Anti-Fungal مزدوج ← HEPA طلع',
    },
    pricing: [
        { type: 'ساعة — عاملة ساحلية-واحية', unit: 'ساعة', minPrice: 30, maxPrice: 50, time: '1 ساعة' },
        { type: '4 ساعات', unit: 'حصة', minPrice: 100, maxPrice: 170, time: '4 ساعات' },
        { type: '8 ساعات', unit: 'يوم', minPrice: 175, maxPrice: 300, time: '8 ساعات' },
        { type: 'عقد أسبوعي', unit: 'شهر', minPrice: 330, maxPrice: 660, time: '4 زيارات' },
    ],
    faq: [
        { question: '4 خطوات — أكثر من الرياض؟', answer: 'نعم — الرياض: 2. القطيف: 4. لكن: أقل من الجبيل (5). ساحلي-واحي.' },
        { question: 'Anti-Fungal مزدوج — كل مرة؟', answer: 'كل مرة — عفن واحي+ساحلي = أسبوعي. بدون = رجوع.' },
        { question: 'HEPA — ضروري؟', answer: 'موسم تلقيح = ضروري. باقي السنة = مُستحسن.' },
        { question: 'كم تكلفة التنظيف العميق مقارنة بالتنظيف العادي؟', answer: 'التنظيف العميق أغلى 30-50% لكنه يشمل: HEPA + بخار 150°م + تعقيم. التنظيف العادي = مسح سطحي. العميق كل 3-4 أشهر + العادي أسبوعياً = أفضل معادلة تكلفة/نظافة.' },
        { question: 'هل المواد المستخدمة آمنة على الأطفال؟', answer: 'مواد معتمدة من هيئة الغذاء والدواء SFDA. بعد التنظيف: تهوية 30 دقيقة كافية. بخار 150°م = بديل للكيماويات — آمن 100% على الأطفال والحيوانات.' },
    ],
    expertTips: [
        'RO أولاً — NaCl+طين.',
        'Microfiber رطب — طين لزج.',
        'Anti-Fungal مزدوج — أعلى+أسفل.',
        'HEPA طلع — حساسية.',
        'بعد التنظيف: شغّل المكيف وليس الشبّاك — الهواء الخارجي يعيد الغبار على الأسطح النظيفة.',
    ],
    warnings: [
        'ممسحة عادية = تنقل NaCl+طين.',
        'بدون Anti-Fungal = عفن أسبوعي.',
        'طلع × موسم = حساسية شديدة.',
    ],
    trustAnchors: [
        { ...GOV.HRSD, role: 'تنظيم العمالة' },
        { entity: AMANA.SHARQIA.entity, url: AMANA.SHARQIA.url, role: 'اشتراطات النظافة بالشرقية' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALMISNID.name, quote: 'عاملة القطيف: 4 خطوات ساحلية-واحية. NaCl+طين+عفن مزدوج+طلع. أعقد من الرياض أبسط من الجبيل.', source: 'جغرافيا المناخ — تنظيف بالساعة واحي' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ عمالة مرخصة', authority: 'HRSD + بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'RO + Microfiber', use: 'NaCl+طين — 1+2' },
        { name: 'Anti-Fungal مزدوج', use: 'واحي+ساحلي — 3' },
        { name: 'HEPA', use: 'نخيل طلع — 4' },
    ],
    hiddenObjections: [
        { fear: 'أغلى.', solution: '4 خطوات = أعقد = أغلى. لكن: فعالية.' },
        { fear: 'عاملة عادية.', solution: '4 خطوات + مواد. تدريب.' },
    ],
    counterNarratives: [
        { myth: 'ممسحة.', truth: 'NaCl+طين = 0%.' },
        { myth: 'مثل الرياض.', truth: '4 خطوات vs 2.' },
    ],
    relatedServices: [
        { slug: 'cleaning', context: 'تنظيف', priority: 1 },
        { slug: 'apartments-cleaning', context: 'شقق', priority: 2 },
        { slug: 'carpet-cleaning', context: 'سجاد', priority: 3 },
        { slug: 'steam-cleaning', context: 'بخار', priority: 4 },
        { slug: 'sofa-cleaning', context: 'كنب', priority: 5 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 6 },
        { slug: 'pest-control', context: 'حشرات', priority: 7 },
    ],
};
