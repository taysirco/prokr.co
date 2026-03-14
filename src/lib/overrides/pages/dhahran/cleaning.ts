import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف منازل بالظهران — بروتوكول مزدوج: NaCl+SiO₂ إزالة + Anti-Fungal 75-85% + تجفيف (2026)',
        description: 'تنظيف منازل الظهران. NaCl+SiO₂ مزدوج يومياً. 75-85% عفن Aspergillus. Sabkha+رمل من الأحذية. RO ← Microfiber ← Anti-Fungal ← Anti-Corrosion ← تجفيف.',
        h1: 'تنظيف منازل بالظهران — بروتوكول مزدوج: 5 خطوات مُرتّبة',
        keywords: ['تنظيف منازل بالظهران', 'تنظيف بيت الظهران', 'شركة تنظيف منازل بالظهران'],
    },
    content: {
        introduction: 'المنزل في الظهران يتسخ بطريقة مزدوجة لا توجد في الخبر ولا الرياض. الخطوة 1 — RO لإذابة NaCl: ماء مُفلتر يُذيب الملح البحري بدون إضافة أملاح جديدة. الخطوة 2 — Microfiber ناعم لرفع SiO₂: بعد إذابة NaCl = SiO₂ يُرفع بلا خدش. الترتيب حاسم — عكسه = خدش مُبلّل (SiO₂ تحت NaCl اللزج). الخطوة 3 — Anti-Fungal: 75-85% = عفن Aspergillus في الحمام + المطبخ + الخزائن + زوايا النوافذ خلال 3-4 أسابيع. كل 5 أشهر. الخطوة 4 — Anti-Corrosion: NaCl يُصدّئ صنابير + مقابض + مفصلات. رش حماية. الخطوة 5 — تجفيف: 75-85% = الأسطح لا تجف بسرعة. Microfiber جاف + تهوية.',
        shortAnswer: 'على عكس [ممسحة بماء عادي] التي تخدش بـ SiO₂ وتُضيف NaCl، يعتمد بروتوكولنا في خدمة [تنظيف المنازل] بمدينة [الظهران] على [RO ← Microfiber ← Anti-Fungal ← Anti-Corrosion ← تجفيف]. ففي ظل [NaCl+SiO₂ + 75-85%]، تتفاقم ظاهرة [خدش+تآكل + عفن]. لذا؛ يتدخل خبراؤنا عبر [بروتوكول مزدوج].',
        heroSubtitle: 'RO ← Microfiber ← Anti-Fungal ← Anti-Corrosion ← تجفيف',
    },
    pricing: [
        { type: 'شقة — بروتوكول مزدوج', unit: 'شقة', minPrice: 210, maxPrice: 420, time: '3-5 ساعات' },
        { type: 'منزل/فيلا صغيرة', unit: 'منزل', minPrice: 370, maxPrice: 730, time: '5-8 ساعات' },
        { type: 'بعد إخلاء — مكافحة عفن', unit: 'وحدة', minPrice: 420, maxPrice: 830, time: '6-10 ساعات' },
        { type: 'عقد أسبوعي (4/شهر)', unit: 'شهر', minPrice: 370, maxPrice: 730, time: '4 زيارات' },
    ],
    faq: [
        { question: 'ترتيب الخطوات — مهم؟', answer: 'حاسم: RO أولاً = يُذيب NaCl. Microfiber ثانياً = يرفع SiO₂. عكسه = SiO₂ يخدش تحت NaCl = Micro-Abrasion مُبلّل = أسوأ من جاف.' },
        { question: 'الظهران بين الخبر والرياض؟', answer: 'الخبر = NaCl (ساحلي). الرياض = SiO₂ (صحراوي). الظهران = كلاهما (ساحلي-صحراوي). ليس متوسط — بل تفاعل.' },
        { question: '75-85% — عفن أبطأ؟', answer: 'أبطأ من الخبر (85-95%) بـ أسبوع-أسبوعين. لكن: حتمي. 3-4 أسابيع = Aspergillus. Anti-Fungal كل 5 أشهر.' },
        { question: 'أحياء أرامكو — فرق؟', answer: 'تهوية أفضل = عفن أبطأ. لكن: NaCl+SiO₂ = نفسه. + معايير أعلى = بروتوكول مُوثّق.' },
        { question: 'أسبوعي — ليش؟', answer: 'NaCl+SiO₂ يومي. أسبوعي = يمنع تراكم المزدوج. شهري = 3 أسابيع تراكم مزدوج = خدش+تآكل.' },
    ],
    expertTips: [
        'RO أولاً ← Microfiber ثانياً — ترتيب لا يتغير. العكس = خدش.',
        'Anti-Fungal 5 نقاط: حمام + مطبخ + خزائن + نوافذ + خلف ثلاجة.',
        'Anti-Corrosion Silicone على صنابير ومقابض — NaCl يُصدّئ في أسابيع.',
        'تجفيف Microfiber جاف بعد كل غرفة — 75-85% = بطيء.',
        'سجاد مدخل — يحجز Sabkha+رمل قبل الدخول. يُغسل أسبوعياً.',
    ],
    warnings: [
        'ممسحة بماء الظهران + SiO₂ = خدش مُبلّل + NaCl جديد = تلف مُزدوج كل تنظيف.',
        'عفن 75-85% بدون Anti-Fungal = جراثيم Aspergillus = حساسية مزمنة.',
        'NaCl على صنابير بدون Anti-Corrosion = صدأ خلال أشهر.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص شركات التنظيف' },
        { entity: AMANA.SHARQIA.entity, url: AMANA.SHARQIA.url, role: 'اشتراطات النظافة بالشرقية' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALMISNID.name, quote: 'منزل الظهران = مزدوج: NaCl+SiO₂. الترتيب حاسم: RO ← Microfiber ← Anti-Fungal ← Anti-Corrosion ← تجفيف. 5 خطوات لا تُعكس.', source: 'جغرافيا المناخ — التنظيف المزدوج' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [
        { badge: '✔️ تنظيف مرخص', authority: 'منصة بلدي', icon: 'shield-check' },
        { badge: '✔️ بروتوكول مزدوج', authority: 'معتمد داخلياً', icon: 'badge-check' },
    ],
    equipment: [
        { name: 'RO Water', use: 'يُذيب NaCl بدون إضافة أملاح — الخطوة 1' },
        { name: 'Microfiber ناعم', use: 'يرفع SiO₂ بلا خدش بعد RO — الخطوة 2' },
        { name: 'Anti-Fungal + Anti-Corrosion', use: 'حماية 75-85% + NaCl — الخطوات 3-4' },
    ],
    hiddenObjections: [
        { fear: 'منظف عادي.', solution: 'يُنظف — لا يحمي من مزدوج. NaCl يعود + SiO₂ يتراكم + عفن ينمو.' },
        { fear: 'مثل الخبر.', solution: 'الخبر = NaCl. الظهران = NaCl+SiO₂. SiO₂ = خدش إضافي. مختلف.' },
    ],
    consumerEducation: [
        { myth: 'ممسحة وماء.', truth: 'ماء الظهران = NaCl. ممسحة + SiO₂ = خدش. 2 أخطاء.' },
        { myth: 'الظهران مثل الرياض.', truth: 'NaCl إضافي = تآكل. 75-85% ≠ 15%. عفن حتمي.' },
        { myth: 'شهري.', truth: 'مزدوج يومي. أسبوعي = الحد.' },
    ],
    relatedServices: [
        { slug: 'apartments-cleaning', context: 'شقق — مزدوج', priority: 1 },
        { slug: 'carpet-cleaning', context: 'سجاد — NaCl+SiO₂', priority: 2 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف — مزدوج', priority: 3 },
        { slug: 'steam-cleaning', context: 'بخار — تعقيم', priority: 4 },
        { slug: 'pest-control', context: 'حشرات — رطوبة', priority: 5 },
        { slug: 'marble-polishing', context: 'رخام — SiO₂ خدش', priority: 6 },
        { slug: 'villas-cleaning', context: 'فلل — مزدوج', priority: 7 },
    ],
};
