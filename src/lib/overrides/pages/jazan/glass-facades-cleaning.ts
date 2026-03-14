import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف واجهات زجاجية بجازان — ملح يأكل السيلكون + طحالب على الزجاج + Salt Fog Etching (2026)',
        description: 'تنظيف واجهات جازان. ملح البحر الأحمر يأكل السيلكون 3× أسرع. طحالب/أشنات تنمو على الزجاج. Salt Fog Etching يُعتم. Marine-Grade Sealant + Biocide + Deionized.',
        h1: 'تنظيف واجهات زجاجية بجازان — الملح يأكل والطحالب تنمو والضباب الملحي يُعتم',
        keywords: ['تنظيف واجهات زجاجية بجازان', 'تنظيف واجهات جازان', 'شركة تنظيف واجهات بجازان'],
    },
    content: {
        introduction: 'الواجهات في جازان تتعرض لبيئة بحرية استوائية فريدة. (1) ملح يأكل السيلكون: NaCl + 80% = يتسرب في السيلكون ← يُفتته من الداخل. عمر: 1-2 سنة (جازان) مقابل 5-8 (الرياض). Marine-Grade Sealant فقط. (2) طحالب/أشنات على الزجاج: 80% + ضوء = نمو بيولوجي على الزجاج الخارجي. Biocide + Anti-Moss. (3) Salt Fog Etching: رذاذ البحر (Salt Fog) يُرسّب ميكرو-ملح على الزجاج ← يمتص رطوبة ← يُنتج محلول حمضي خفيف ← Micro-Etching = زجاج مُعتم. Deionized + CeO₂ يستعيد الشفافية.',
        shortAnswer: 'ملح يأكل السيلكون 3× + طحالب تنمو + Salt Fog يُعتم. Marine-Grade + Biocide + Deionized + CeO₂.',
        heroSubtitle: 'بيئة بحرية استوائية: ملح يأكل + طحالب تنمو + ضباب ملحي يُعتم',
    },
    pricing: [
        { type: 'تنظيف واجهة — محل (حتى 50 م²)', unit: 'خدمة', minPrice: 200, maxPrice: 400, time: '2-3 ساعات' },
        { type: 'تنظيف + CeO₂ + Hydrophobic', unit: 'خدمة', minPrice: 400, maxPrice: 800, time: '4-6 ساعات' },
        { type: 'فحص + تجديد Marine Sealant', unit: 'خدمة', minPrice: 300, maxPrice: 700, time: '3-5 ساعات' },
    ],
    faq: [
        { question: 'السيلكون ينتهي أسرع؟', answer: '1-2 سنة — ملح + 80% = يُفتّت من الداخل. Marine-Grade: 3-4 سنوات. فحص كل 6 أشهر.' },
        { question: 'زجاج مُعتم — ليس أوساخ؟', answer: 'Salt Fog Etching: ميكرو-ملح يُنتج محلول حمضي ← Micro-Etching. CeO₂ يملأ الخدوش ← يستعيد الشفافية. Hydrophobic يمنع التكرار.' },
        { question: 'كم تكلفة التنظيف العميق مقارنة بالتنظيف العادي؟', answer: 'التنظيف العميق أغلى 30-50% لكنه يشمل: HEPA + بخار 150°م + تعقيم. التنظيف العادي = مسح سطحي. العميق كل 3-4 أشهر + العادي أسبوعياً = أفضل معادلة تكلفة/نظافة.' },
        { question: 'هل المواد المستخدمة آمنة على الأطفال؟', answer: 'مواد معتمدة من هيئة الغذاء والدواء SFDA. بعد التنظيف: تهوية 30 دقيقة كافية. بخار 150°م = بديل للكيماويات — آمن 100% على الأطفال والحيوانات.' },
    
        { question: 'هل توفرون ضمان على التنظيف؟', answer: 'نعم — ضمان رضا 100%. إذا لم ترضِ عن النتيجة: إعادة التنظيف مجاناً خلال 48 ساعة. الشركات المعتمدة عبر بروكر ملزمة بسياسة الضمان.' },
    ],
    expertTips: [
        'Marine-Grade Sealant حصراً — السيلكون العادي يفنى خلال سنة.',
        'Biocide كل 3 أشهر — طحالب تعود سريعاً في 80%.',
        'Deionized فقط — ماء صنبور = أملاح إضافية.',
        'CeO₂ كل 6 أشهر — يستعيد الشفافية من Salt Fog Etching.',
        'بعد التنظيف: شغّل المكيف وليس الشبّاك — الهواء الخارجي يعيد الغبار على الأسطح النظيفة.',
    ],
    warnings: [
        'سيلكون عادي في جازان = يتفتت خلال سنة = تسلل ماء + ملح = تلف داخلي.',
        'ماء صنبور في الغسل = أملاح إضافية = Etching أسوأ. Deionized فقط.',
        'لا تقبل عمالة بدون تأمين صحي — شركة بدون تأمين = غير مرخصة من بلدي.',
    ],
    trustAnchors: [{ ...GOV.BALADI, role: 'ترخيص شركات تنظيف الواجهات' }, { ...GOV.SCE, role: 'اعتماد فنيي الواجهات' },
        { entity: AMANA.JAZAN.entity, url: AMANA.JAZAN.url, role: 'اشتراطات أمانة جازان' },
    ],
        expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALJUND.name, quote: 'واجهات جازان: بيئة بحرية استوائية = أسرع تدهور سيلكون (1-2 سنة) + Salt Fog Etching + نمو بيولوجي. Marine-Grade + CeO₂ + Biocide = الحد الأدنى.', source: 'موسوعة أخطاء — الواجهات في البيئة البحرية الاستوائية' },
    ],
    saudiRegulations: [REGULATIONS.SBC_601],
    verificationBadges: [{ badge: '✔️ تنظيف واجهات مرخص', authority: 'بلدي + SCE', icon: 'shield-check' }],
    equipment: [
        { name: 'Marine-Grade Sealant', use: 'يتحمل NaCl + 80% — 3-4 سنوات بدلاً من 1' },
        { name: 'Deionized Water', use: 'غسل بدون أملاح إضافية' },
        { name: 'CeO₂ + Hydrophobic', use: 'يستعيد الشفافية + يمنع Salt Fog Etching' },
        { name: 'Biocide Anti-Moss', use: 'يقتل طحالب/أشنات + يمنع العودة 3 أشهر' },
    ],
    commonConcerns: [{ concern: 'Marine-Grade أغلى.', solution: 'سيلكون عادي × تجديد كل سنة = أغلى على 5 سنوات. Marine-Grade × 3-4 سنوات = أرخص 40%.' }],
    consumerEducation: [{ myth: 'الزجاج لا يتأثر.', truth: 'Salt Fog Micro-Etching يُعتمه تدريجياً. + الطحالب تنمو على السطح. + السيلكون يفنى = تسلل.' },
        { myth: 'التنظيف العميق يتلف الأثاث.', truth: 'المعدات الصناعية مصممة للأسطح الحساسة. البخار 150°م ينظف بدون كيماويات. التنظيف اليدوي بمواد خاطئة أخطر بكثير.' },
    ],
    relatedServices: [
        { slug: 'marble-polishing', context: 'رخام — نفس ملح + طحالب', priority: 1 },
        { slug: 'cleaning', context: 'تنظيف — المبنى كاملاً', priority: 2 },
        { slug: 'villas-cleaning', context: 'فلل — واجهات الفيلا', priority: 3 },
        { slug: 'office-cleaning', context: 'مكاتب — واجهات المكتب', priority: 4 },
    
        { slug: 'carpet-cleaning', context: 'خدمة مكملة — باقة شاملة.', priority: 5 },
        { slug: 'sofa-cleaning', context: 'خدمة مكملة — باقة شاملة.', priority: 6 },
        { slug: 'steam-cleaning', context: 'خدمة مكملة — باقة شاملة.', priority: 7 },
    ],
};
