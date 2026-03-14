import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف منازل بالخبر — بروتوكول ساحلي: NaCl إزالة + Anti-Fungal 85-95% + Anti-Corrosion + تجفيف (2026)',
        description: 'تنظيف منازل الخبر. NaCl ملح بحري يترسب يومياً. 85-95% عفن Aspergillus حتمي. Sabkha ملحية. صراصير رطوبة. غسل + Anti-Fungal + Anti-Corrosion + Dehumidifier.',
        h1: 'تنظيف منازل بالخبر — بروتوكول ساحلي: 4 خطوات ضد الملح والعفن',
        keywords: ['تنظيف منازل بالخبر', 'تنظيف بيت الخبر', 'شركة تنظيف منازل بالخبر'],
    },
    content: {
        introduction: 'المنزل في الخبر يتسخ بـ 3 طبقات ساحلية مختلفة. الخطوة الأولى — غسل NaCl: ملح بحري يترسب على كل سطح يومياً (نوافذ + بلاط + أثاث + أجهزة). لا يُرى بالعين — لكنه يمتص رطوبة ← يُسبب تآكل معادن. غسل بماء RO/مُقطر + تجفيف. الخطوة الثانية — Anti-Fungal: 85-95% = عفن Aspergillus في الحمام + المطبخ + الخزائن + زوايا النوافذ + خلف الثلاجة. Anti-Fungal كل 3-4 أشهر. الخطوة الثالثة — Anti-Corrosion: رش حماية على المعادن (صنابير + مقابض + أجهزة + مفصلات). يمنع NaCl + رطوبة من تآكل. الخطوة الرابعة — تجفيف: 85-95% = الأسطح لا تجف طبيعياً. Dehumidifier + مراوح بعد التنظيف. بدون تجفيف = تنظيف يُغذي العفن.',
        shortAnswer: 'على عكس [ممسحة ومنظف] الذي لا يمنع عفن ولا تآكل، يعتمد بروتوكولنا في خدمة [تنظيف المنازل] بمدينة [الخبر] على [غسل NaCl + Anti-Fungal + Anti-Corrosion + تجفيف]. ففي ظل [NaCl + 85-95% + Sabkha]، تتفاقم ظاهرة [تآكل + عفن + ملح]. لذا؛ يتدخل خبراؤنا عبر [بروتوكول ساحلي مُرتّب].',
        heroSubtitle: 'NaCl يُزال + Anti-Fungal 85-95% + Anti-Corrosion معادن + تجفيف',
    },
    pricing: [
        { type: 'شقة ساحلية — بروتوكول كامل', unit: 'شقة', minPrice: 200, maxPrice: 400, time: '3-5 ساعات' },
        { type: 'منزل/فيلا صغيرة', unit: 'منزل', minPrice: 350, maxPrice: 700, time: '5-8 ساعات' },
        { type: 'بعد إخلاء — مكافحة عفن عميقة', unit: 'وحدة', minPrice: 400, maxPrice: 800, time: '6-10 ساعات' },
        { type: 'عقد أسبوعي (4 زيارات/شهر)', unit: 'شهر', minPrice: 350, maxPrice: 700, time: '4 زيارات' },
    ],
    faq: [
        { question: 'NaCl لا يُرى — ليش أزيله؟', answer: 'NaCl = Hygroscopic (يمتص رطوبة). يترسب ← يمتص 85-95% ← يُسبب تآكل معادن + عفن أسرع + أسطح رطبة دائماً. إزالته = يُقلل رطوبة فعلية على الأسطح.' },
        { question: 'عفن كل الأحياء — أو الكورنيش فقط؟', answer: '85-95% = كل الأحياء. الكورنيش = أسرع (NaCl أكثر). الثقبة/العقربية = أبطأ. لكن: 85-95% = عفن حتمي في كل الأحياء. الفرق = أسابيع — ليس أشهر.' },
        { question: 'Anti-Corrosion — كل الأسطح؟', answer: 'المعادن فقط: صنابير + مقابض أبواب + مفصلات + أجهزة مكشوفة. البلاط والرخام لا يتآكلان بـ NaCl — لكن يترسب عليهما (غسل عادي يكفي).' },
        { question: 'تجفيف إلزامي — ما المكيف يكفي؟', answer: 'المكيف يُبرّد — لا يُجفف. 85-95% = المكيف نفسه ينتج تكثّف. Dehumidifier = يسحب الرطوبة فعلياً. + مراوح أرضية = تيار يُسرّع التجفيف.' },
        { question: 'كم مرة تنظيف — أسبوعي؟', answer: 'أسبوعي = الأمثل. كل أسبوعين = مقبول. شهري = بعد تراكم ملح + عفن = أصعب. أسبوعي = يمنع التراكم = أسهل كل مرة.' },
    ],
    expertTips: [
        'غسل NaCl بماء RO/مُقطر — ماء الخبر نفسه يحتوي NaCl. استخدم ماء مُفلتر.',
        'Anti-Fungal على 5 نقاط: حمام + مطبخ + خزائن + زوايا نوافذ + خلف ثلاجة.',
        'Anti-Corrosion Spray على صنابير بعد كل تنظيف — 10-20 ريال = يحمي صنبور 200-500 ريال.',
        'تجفيف Dehumidifier 2-3 ساعات بعد التنظيف — يمنع عفن جديد.',
        'فتح نوافذ في الصباح الباكر (6-7 AM) — رطوبة أقل = تهوية فعّالة.',
    ],
    warnings: [
        'NaCl + 85-95% على صنابير = صدأ خلال 6-12 شهراً. Anti-Corrosion = يمنع.',
        'تنظيف بدون تجفيف في 85-95% = الأسطح تبقى رطبة 24 ساعة+ = عفن. التنظيف بلا تجفيف = تغذية العفن.',
        'عفن Aspergillus = جراثيم 24/7 في الهواء = حساسية + ربو مزمن. Anti-Fungal = حماية صحية.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص شركات التنظيف' },
        { entity: AMANA.SHARQIA.entity, url: AMANA.SHARQIA.url, role: 'اشتراطات النظافة بالشرقية' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALMISNID.name, quote: 'منزل الخبر = ساحلي: NaCl يومي + 85-95% عفن حتمي + Sabkha. بروتوكول ساحلي = غسل + Anti-Fungal + Anti-Corrosion + تجفيف. 4 خطوات لا تُختصر.', source: 'جغرافيا المناخ — التنظيف الساحلي' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [
        { badge: '✔️ تنظيف منازل مرخص', authority: 'منصة بلدي', icon: 'shield-check' },
        { badge: '✔️ بروتوكول ساحلي', authority: 'معتمد داخلياً', icon: 'badge-check' },
    ],
    equipment: [
        { name: 'RO Water System', use: 'غسل بلا NaCl — ماء مُفلتر' },
        { name: 'Anti-Fungal Spray', use: 'يمنع Aspergillus — فعّال 3-4 أشهر' },
        { name: 'Anti-Corrosion Spray', use: 'يحمي المعادن من NaCl — فعّال 3-6 أشهر' },
        { name: 'Dehumidifier + مراوح', use: 'تجفيف بعد التنظيف — إلزامي في 85-95%' },
    ],
    commonConcerns: [
        { concern: 'منظف عادي يكفي.', solution: 'يُنظف — لا يحمي. NaCl يعود غداً. عفن يعود بعد أسبوع. تآكل يستمر. الحماية = الفرق.' },
        { concern: 'المكيف يُجفف.', solution: 'المكيف يُبرّد + يُكثّف. لا يسحب رطوبة. Dehumidifier = يسحب. مختلفان.' },
    ],
    consumerEducation: [
        { myth: 'الخبر مثل الرياض.', truth: 'NaCl ≠ SiO₂. 85-95% ≠ 15%. عفن ≠ غبار. 3 فروقات جذرية.' },
        { myth: 'ممسحة مبللة تكفي.', truth: 'ممسحة بماء الخبر = NaCl جديد. + لا تجفيف = عفن. 2 خطأين.' },
        { myth: 'شهري.', truth: 'NaCl يومي + عفن أسبوعي. شهري = 3 أسابيع تراكم.' },
    ],
    relatedServices: [
        { slug: 'apartments-cleaning', context: 'شقق — ساحلي', priority: 1 },
        { slug: 'carpet-cleaning', context: 'سجاد — NaCl + عث', priority: 2 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف — NaCl + عفن', priority: 3 },
        { slug: 'steam-cleaning', context: 'بخار — تعقيم', priority: 4 },
        { slug: 'pest-control', context: 'حشرات — صراصير رطوبة', priority: 5 },
        { slug: 'marble-polishing', context: 'رخام — NaCl', priority: 6 },
        { slug: 'villas-cleaning', context: 'فلل — ساحلي', priority: 7 },
    ],
};
