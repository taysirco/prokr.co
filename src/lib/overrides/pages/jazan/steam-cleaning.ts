import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف بالبخار بجازان — يقتل عفن 24/7 + عث 12/12 + يُعقّم بكتيريا استوائية — Dehumidifier إلزامي بعد (2026)',
        description: 'تنظيف بالبخار جازان. 130°م يقتل عفن Aspergillus 24/7 + عث لا ينام + بكتيريا استوائية. Dehumidifier بعد البخار = إلزامي (80% لا تُجفف).',
        h1: 'تنظيف بالبخار بجازان — 130°م يقتل ما لا تقتله الرطوبة',
        keywords: ['تنظيف بالبخار بجازان', 'تنظيف بخار جازان', 'شركة تنظيف بالبخار بجازان'],
    },
    content: {
        introduction: 'البخار 130°م = الأداة الأهم في جازان — لكن مع تعديل حاسم: Dehumidifier بعد كل جلسة. البخار يقتل: (1) عفن Aspergillus/Stachybotrys 24/7 — في 80% رطوبة: العفن لا يتوقف. البخار = Sporicidal (يقتل الأبواغ). (2) عث Dermatophagoides 12/12 — Protein Denaturation. (3) بكتيريا استوائية — E.coli/Salmonella تنتعش في 80%. البخار = يُعقّم. التعديل الحاسم — Dehumidifier بعد البخار: البخار يُضيف رطوبة (حتى Dry Vapor = 5%). في تبوك (12% RH): الرطوبة الإضافية تجف فوراً. في جازان (80% RH): لا تجف ← بيئة عفن أفضل بعد البخار! Dehumidifier يسحب الرطوبة خلال 2-4 ساعات = يمنع هذا. بدونه: البخار يُسوّء الوضع.',
        shortAnswer: 'بخار 130°م يقتل عفن + عث + بكتيريا. لكن: Dehumidifier بعد كل جلسة = إلزامي (80% لا تُجفف = بدون Dehumidifier: البخار يُسوّء).',
        heroSubtitle: 'البخار يقتل — لكن بدون Dehumidifier يُعفّن. التكامل إلزامي',
    },
    pricing: [
        { type: 'بخار + Dehumidifier — غرفة', unit: 'غرفة', minPrice: 120, maxPrice: 220, time: '30 دقيقة بخار + 2-4 ساعات تجفيف' },
        { type: 'بخار + Dehumidifier — شقة', unit: 'شقة', minPrice: 300, maxPrice: 600, time: '2-3 ساعات + 4 ساعات' },
        { type: 'عقد شهري (بخار + تجفيف)', unit: 'شهر', minPrice: 350, maxPrice: 700, time: 'زيارة/شهر' },
    ],
    faq: [
        { question: 'البخار يُعفّن في جازان — فعلاً؟', answer: 'البخار نفسه لا يُعفّن — الرطوبة المتبقية في 80% لا تجف ← العفن ينمو عليها. Dehumidifier يسحب الرطوبة خلال 2-4 ساعات = يمنع العفن الجديد. البخار + Dehumidifier = نظافة. البخار بدون = تخريب.' },
        { question: 'كم مرة بخار في جازان؟', answer: 'شهرياً — عث 12/12 + عفن 24/7. في الرياض: كل 3-4 أشهر. في جازان: شهرياً = الحد الأدنى الصحي.' },
        { question: 'كم تكلفة التنظيف العميق مقارنة بالتنظيف العادي؟', answer: 'التنظيف العميق أغلى 30-50% لكنه يشمل: HEPA + بخار 150°م + تعقيم. التنظيف العادي = مسح سطحي. العميق كل 3-4 أشهر + العادي أسبوعياً = أفضل معادلة تكلفة/نظافة.' },
        { question: 'هل المواد المستخدمة آمنة على الأطفال؟', answer: 'مواد معتمدة من هيئة الغذاء والدواء SFDA. بعد التنظيف: تهوية 30 دقيقة كافية. بخار 150°م = بديل للكيماويات — آمن 100% على الأطفال والحيوانات.' },
    
        { question: 'هل توفرون ضمان على التنظيف؟', answer: 'نعم — ضمان رضا 100%. إذا لم ترضِ عن النتيجة: إعادة التنظيف مجاناً خلال 48 ساعة. الشركات المعتمدة عبر بروكر ملزمة بسياسة الضمان.' },
    ],
    expertTips: [
        'Dehumidifier بعد كل جلسة = إلزامي. بدونه: البخار يُسوّء.',
        'بخار شهرياً — عفن + عث لا يتوقفان.',
        'بخار المطبخ والحمام = أهم — أعلى رطوبة + أكثر بكتيريا.',
        'Anti-Mold بعد البخار + التجفيف — يمنع النمو 3-4 أسابيع.',
        'بعد التنظيف: شغّل المكيف وليس الشبّاك — الهواء الخارجي يعيد الغبار على الأسطح النظيفة.',
    ],
    warnings: [
        'بخار بدون Dehumidifier في جازان = رطوبة إضافية + 80% = عفن أسوأ. Dehumidifier = إلزامي.',
        'عفن 24/7 بدون بخار = حساسية + ربو مزمن.',
        'لا تقبل عمالة بدون تأمين صحي — شركة بدون تأمين = غير مرخصة من بلدي.',
    ],
    trustAnchors: [{ ...GOV.BALADI, role: 'ترخيص شركات التنظيف' },
        { entity: AMANA.JAZAN.entity, url: AMANA.JAZAN.url, role: 'اشتراطات أمانة جازان' },
    ],
        expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALMOHAIMED.name, quote: 'البخار في جازان = سلاح ذو حدين. يقتل العفن والعث — لكن الرطوبة المتبقية في 80% = عفن جديد. Dehumidifier بعد كل جلسة = الفرق بين التعقيم والتخريب.', source: 'نصائح هندسية — البخار في المناخ الاستوائي' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ تنظيف بالبخار مرخص', authority: 'بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'بخار 130°م (Dry Vapor)', use: 'Sporicidal + Protein Denaturation — يقتل عفن + عث + بكتيريا' },
        { name: 'Dehumidifier صناعي', use: 'يسحب الرطوبة المتبقية خلال 2-4 ساعات — إلزامي بعد كل جلسة بخار' },
        { name: 'Anti-Mold Treatment', use: 'يُطبّق بعد التجفيف — يمنع العفن 3-4 أسابيع' },
    ],
    hiddenObjections: [
        { fear: 'البخار يُعفّن — سمعت.', solution: 'البخار + Dehumidifier = تعقيم. البخار بدون = تخريب. المشكلة ليست البخار — المشكلة = عدم التجفيف في 80%.' },
    ],
    counterNarratives: [
        { myth: 'في جازان البخار خطر.', truth: 'البخار + Dehumidifier = أفضل أداة. بدون Dehumidifier = خطر. التكامل = الحل.' },
        { myth: 'المنظف العادي يكفي.', truth: 'المنظف العادي يزيل 40% من الأوساخ. HEPA + بخار = 99%+. الفرق = 59% غبار دقيق + بكتيريا + عث.' },
    ],
    relatedServices: [
        { slug: 'carpet-cleaning', context: 'سجاد — بخار يقتل العث', priority: 1 },
        { slug: 'sofa-cleaning', context: 'كنب — بخار يقتل عفن الحشو', priority: 2 },
        { slug: 'cleaning', context: 'تنظيف — ضمن البروتوكول', priority: 3 },
        { slug: 'bedbugs-control', context: 'بق — بخار يخترق الشقوق', priority: 4 },
        { slug: 'councils-cleaning', context: 'مجالس — فرشات بخار', priority: 5 },
    
        { slug: 'air-conditioner-cleaning', context: 'خدمة مكملة — باقة شاملة.', priority: 6 },
        { slug: 'pest-control', context: 'خدمة مكملة — باقة شاملة.', priority: 7 },
    ],
};
