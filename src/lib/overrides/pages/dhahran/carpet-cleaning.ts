import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../gov-references';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف سجاد بالظهران — NaCl+SiO₂ يقطع ويُصلّب + 75-85% عفن قاعدي + عث + رمل (2026)',
        description: 'تنظيف سجاد الظهران. NaCl+SiO₂ = يُصلّب الألياف + يقطعها. 75-85% عفن قاعدي. عث مُتسارع. رمل صحراوي. استخلاص ساخن + بخار + Anti-Fungal + تجفيف.',
        h1: 'تنظيف سجاد بالظهران — ملح يُصلّب ورمل يقطع ورطوبة تُعفّن',
        keywords: ['تنظيف سجاد بالظهران', 'غسيل سجاد الظهران', 'شركة تنظيف سجاد بالظهران'],
    },
    content: {
        introduction: 'السجاد الظهراني يتعرض لأوساخ مزدوجة لا توجد في مدينة أخرى. المزدوج — NaCl يُصلّب + SiO₂ يقطع: NaCl يتبلور في الألياف = تصلب (Fiber Stiffening). SiO₂ رمل ناعم يدخل بين الألياف = Fiber Cutting (قطع ميكروبي). معاً: ألياف متصلبة + مقطوعة = أسرع تلف. استخلاص ساخن 80°م يُذيب NaCl + يسحب SiO₂ من العمق. التحدي الثاني — 75-85% عفن قاعدي: قاعدة السجاد لا تجف في 75-85% ← Aspergillus خلال 3-4 أسابيع. Anti-Fungal + Turbo Dryer. التحدي الثالث — عث Der p 1: 75-85% = تكاثر مُتسارع (أسرع من الرياض، أبطأ من الخبر). بخار 130°م.',
        shortAnswer: 'على عكس [شفط + شامبو] الذي يُفرش SiO₂ ولا يُذيب NaCl، يعتمد بروتوكولنا في خدمة [تنظيف السجاد] بمدينة [الظهران] على [استخلاص 80°م + بخار + Anti-Fungal + Turbo تجفيف]. ففي ظل [NaCl+SiO₂ + 75-85% + عث]، تتفاقم ظاهرة [تصلب+قطع + عفن + حساسية]. لذا؛ يتدخل خبراؤنا عبر [بروتوكول سجاد مزدوج].',
        heroSubtitle: 'NaCl تصلب + SiO₂ قطع + 75-85% عفن قاعدي + عث',
    },
    pricing: [
        { type: 'سجادة (2×3 م) — مزدوج', unit: 'سجادة', minPrice: 55, maxPrice: 110, time: '30-45 دقيقة' },
        { type: 'موكيت غرفة (20 م²)', unit: 'غرفة', minPrice: 130, maxPrice: 260, time: '1-2 ساعة' },
        { type: 'شقة كاملة + Anti-Fungal', unit: 'شقة', minPrice: 270, maxPrice: 530, time: '3-5 ساعات' },
        { type: 'عقد ربع سنوي', unit: 'سنة', minPrice: 650, maxPrice: 1300, time: '4 زيارات' },
    ],
    faq: [
        { question: 'NaCl+SiO₂ — أسوأ من كل واحد؟', answer: 'NaCl يُصلّب + SiO₂ يقطع. ألياف صلبة + مقطوعة = تفتت. الخبر (NaCl) = تصلب. الرياض (SiO₂) = قطع. الظهران = كلاهما.' },
        { question: 'عفن قاعدي — حتى بدون سكب ماء؟', answer: '75-85% = الهواء يكفي. القاعدة لا تجف. 3-4 أسابيع = Aspergillus. Anti-Fungal + رفع.' },
        { question: 'بخار بعد الاستخلاص — ضروري؟', answer: 'الاستخلاص يُذيب NaCl + يسحب SiO₂. البخار يقتل عث 75-85% المُتسارع. تسلسل: استخلاص ← بخار ← Anti-Fungal ← تجفيف.' },
        { question: 'تجفيف — في 75-85%؟', answer: 'Turbo Dryer + Dehumidifier = 3-4 ساعات (أبطأ من الرياض، أسرع من الخبر). بدون: 18-24 ساعة = عفن.' },
        { question: 'ربع سنوي؟', answer: 'NaCl+SiO₂ شهري + عفن 3-4 أسابيع + عث مستمر. ربع سنوي = قبل التصلب+القطع+التأصّل.' },
    ],
    expertTips: [
        'استخلاص 80°م أولاً — يُذيب NaCl + يسحب SiO₂ من العمق.',
        'بخار 130°م ثانياً — يقتل عث + يُعقّم.',
        'Anti-Fungal على القاعدة — الأكثر عرضة.',
        'Turbo Dryer 3-4 ساعات — 75-85% = لا يجف بدون تجفيف.',
        'رفع السجاد 2-3 سم — يمنع رطوبة الأرض.',
    ],
    warnings: [
        'NaCl+SiO₂ × 6 أشهر = ألياف متصلبة + مقطوعة = سجاد تالف. ربع سنوي = يمنع.',
        'عفن قاعدي 75-85% = Aspergillus = حساسية + ربو. Anti-Fungal = حماية.',
        'غسيل بدون تجفيف = 18-24 ساعة رطب = عفن جديد. تنظيف بلا تجفيف = أسوأ.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص التنظيف' },
        { entity: AMANA.SHARQIA.entity, url: AMANA.SHARQIA.url, role: 'اشتراطات النظافة بالشرقية' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALMOHAIMED.name, quote: 'سجاد الظهران = مزدوج: NaCl يُصلّب + SiO₂ يقطع + 75-85% عفن. استخلاص + بخار + Anti-Fungal + تجفيف = بروتوكول مزدوج لا يُختصر.', source: 'نصائح هندسية — سجاد البيئة المزدوجة' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ تنظيف سجاد مرخص', authority: 'منصة بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'Hot Water Extraction 80°م', use: 'يُذيب NaCl + يسحب SiO₂ — ساخن إلزامي' },
        { name: 'Dry Vapor 130°م', use: 'يقتل عث + يُعقّم' },
        { name: 'Anti-Fungal', use: 'حماية قاعدة — فعّال 4-5 أشهر' },
        { name: 'Turbo Dryer + Dehumidifier', use: 'تجفيف 3-4 ساعات' },
    ],
    commonConcerns: [
        { concern: 'شفط يكفي.', solution: 'NaCl في العمق. SiO₂ بين الألياف. عفن في القاعدة. شفط = سطحي.' },
        { concern: 'مثل الخبر.', solution: 'الخبر = NaCl فقط. الظهران = NaCl+SiO₂ = تصلب+قطع. أسوأ على الألياف.' },
    ],
    consumerEducation: [
        { myth: 'غبار عادي.', truth: 'NaCl+SiO₂ ≠ غبار. يُصلّب+يقطع. مزدوج.' },
        { myth: 'يجف طبيعياً.', truth: '75-85% = 18-24 ساعة. Turbo = 3-4.' },
        { myth: 'مرة بالسنة.', truth: 'مزدوج شهري. ربع سنوي = الحد.' },
    ],
    relatedServices: [
        { slug: 'sofa-cleaning', context: 'كنب — مزدوج', priority: 1 },
        { slug: 'steam-cleaning', context: 'بخار — عث', priority: 2 },
        { slug: 'cleaning', context: 'تنظيف — مزدوج', priority: 3 },
        { slug: 'councils-cleaning', context: 'مجالس — سجاد', priority: 4 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف — مزدوج', priority: 5 },
        { slug: 'pest-control', context: 'حشرات — رطوبة', priority: 6 },
        { slug: 'marble-polishing', context: 'رخام — تحت السجاد', priority: 7 },
    ],
};
