import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../gov-references';

export const override: PageOverride = {
    meta: {
        title: 'جلي رخام بالأحساء — CaSO₄ يُبهت اللمعان + لقاح Fiber Cutting + تربة Silt Staining (2026)',
        description: 'جلي رخام الأحساء. CaSO₄ يترسب طبقة مُبهتة على الرخام. لقاح 30 ميكرون يخدش ميكروبياً. تربة عضوية تتسلل للمسام. Citric + HEPA + Poultice + جلي 7-مراحل.',
        h1: 'جلي رخام بالأحساء — الجبس يُبهت واللقاح يخدش والتربة تتسلل',
        keywords: ['جلي رخام بالأحساء', 'تلميع رخام الاحساء', 'شركة جلي رخام بالأحساء'],
    },
    content: {
        introduction: 'الرخام في الأحساء يتعرض لـ 3 آليات تلف واحية. الأولى — CaSO₄ يُبهت اللمعان: ماء الأحساء الجبسي يترسب على الرخام ← طبقة Scale بيضاء شفافة ← تُبهت اللمعان بالتدريج. بعد أشهر: الرخام يبدو \"باهت\" مع أنه \"نظيف\". Citric Acid 3% يُذيب الـ Scale ← اللمعان يعود. الثانية — لقاح يخدش ميكروبياً: حبوب لقاح 30-50 ميكرون بين الحذاء والرخام ← مع المشي: Micro-Abrasion (خدوش ميكروبية). بعد 6 أشهر: لمعان يتلاشى في مسارات المشي. HEPA يومي + جلي تجديدي سنوي. الثالثة — تربة عضوية Silt Staining: تربة واحة تتسلل لمسام الرخام ← بقع بنية لا تُزال بالمسح. Poultice (لبخة) تسحبها من المسام خلال 12-24 ساعة.',
        shortAnswer: 'على عكس [ممسحة + ملمّع] الذي لا يُذيب الجبس ولا يسحب التربة، يعتمد بروتوكولنا في خدمة [جلي الرخام] بمدينة [الأحساء] على [Citric → HEPA → Poultice → جلي 7-مراحل]. ففي ظل [CaSO₄ + لقاح + تربة عضوية]، تتفاقم ظاهرة [إبهات + خدش + تبقّع]. لذا؛ يتدخل خبراؤنا عبر [بروتوكول رخام واحي].',
        heroSubtitle: 'CaSO₄ يُبهت + لقاح يخدش + تربة تتسلل للمسام',
    },
    pricing: [
        { type: 'جلي + تلميع (10-30 م²)', unit: 'م²', minPrice: 25, maxPrice: 50, time: '1-3 ساعات' },
        { type: 'جلي + Citric Scale (30-50 م²)', unit: 'م²', minPrice: 30, maxPrice: 55, time: '3-5 ساعات' },
        { type: 'Poultice بقع عميقة', unit: 'بقعة', minPrice: 50, maxPrice: 120, time: '12-24 ساعة' },
        { type: 'جلي فيلا كاملة (100+ م²)', unit: 'م²', minPrice: 20, maxPrice: 45, time: '6-12 ساعة' },
    ],
    faq: [
        { question: 'الرخام باهت مع أنه نظيف — ليش؟', answer: 'CaSO₄ Scale = طبقة شفافة لا تُرى بالعين — تُبهت اللمعان فقط. الرخام \"نظيف\" ظاهرياً لكن \"مُغطى\" كيميائياً. Citric 3% يُذيب الطبقة ← اللمعان يعود فوراً. فرق واضح.' },
        { question: 'اللقاح يخدش الرخام — الرخام صلب؟', answer: 'الرخام 3-4 Mohs = أقل من الكوارتز (7) لكن لقاح النخيل ليس صلباً كالكوارتز. Micro-Abrasion باللقاح = بطيئة (أشهر) لكن تراكمية. مسارات المشي = أوضح مكان. HEPA يومي = يمنع.' },
        { question: 'بقع بنية لا تختفي — ماء وصابون ما يكفي؟', answer: 'تربة عضوية تتسلل لمسام الرخام (0.1-1 ميكرون فتحات). المسح السطحي لا يصل. Poultice = عجينة تُوضع 12-24 ساعة ← تسحب التربة من المسام بالتناضح (Osmosis). البقعة تختفي من الداخل.' },
        { question: 'جلي 7 مراحل — ليش مو 3؟', answer: 'المرحلة 1-3: إزالة خدوش. 4-5: تنعيم. 6: تلميع. 7: حماية (Sealer). 3 مراحل = إزالة خدوش فقط. 7 = لمعان مرآة + حماية.' },
        { question: 'Sealer — يحمي من CaSO₄؟', answer: 'نعم — Sealer يسد مسام الرخام ← CaSO₄ يترسب على السطح فقط (لا يتسلل) ← يُزال بمسح عادي. + يمنع تربة من التسلل للمسام. فعّال 1-2 سنة.' },
    ],
    expertTips: [
        'Citric 3% قبل الجلي — يُذيب CaSO₄ Scale أولاً ← الجلي يعمل على رخام نظيف = نتيجة أفضل.',
        'HEPA يومي على الرخام — يشفط لقاح قبل أن تخطو عليه. الممسحة = تسحب اللقاح = Micro-Abrasion.',
        'Poultice على بقع التربة خلال أسبوع — تربة طازجة = سحب 12 ساعة. تربة قديمة (أشهر) = 24-48 ساعة أو أكثر.',
        'Sealer بعد كل جلي — يحمي 1-2 سنة من CaSO₄ + تربة. 10-20 ريال/م² = يُوفّر جلي كل سنة.',
        'لا تستخدم خل على الرخام — الخل حمضي يتفاعل مع CaCO₃ (الرخام نفسه) ← يُتلفه. Citric مُخفف = آمن.',
    ],
    warnings: [
        'CaSO₄ متراكم سنة+ = Scale سميك يحتاج كشط DF ← خدوش ← جلي إضافي. Citric ربع سنوي = يمنع.',
        'لقاح + مشي 6 أشهر = Micro-Abrasion في مسارات المشي ← لمعان يتلاشى ← جلي كامل (20-50 ريال/م²). HEPA يومي = أرخص.',
        'تربة في مسام الرخام > 3 أشهر = Silt Staining دائم ← لا يُزال حتى بـ Poultice. الوقت حرج.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص شركات الجلي والتلميع' },
        { entity: AMANA.AHSA.entity, url: AMANA.AHSA.url, role: 'اشتراطات المباني بمحافظة الأحساء' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALMOHAIMED.name, quote: 'رخام الأحساء = 3 آليات واحية: CaSO₄ يُبهت + لقاح يخدش ميكروبياً + تربة تتسلل. Citric + HEPA + Poultice + Sealer = بروتوكول يحمي الاستثمار — لأن الرخام غالي والبيئة عنيدة.', source: 'نصائح هندسية — رخام الواحات' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [
        { badge: '✔️ جلي رخام مرخص', authority: 'منصة بلدي', icon: 'shield-check' },
    ],
    equipment: [
        { name: 'Citric Acid 3%', use: 'يُذيب CaSO₄ Scale من الرخام — يعيد اللمعان' },
        { name: 'Poultice (لبخة)', use: 'تسحب تربة عضوية من مسام الرخام بالتناضح' },
        { name: 'Diamond Pads 7-مراحل', use: 'جلي تدريجي: خشن → ناعم → لمعان مرآة' },
        { name: 'Sealer (مانع تسرب)', use: 'يسد المسام — يحمي من CaSO₄ + تربة 1-2 سنة' },
    ],
    commonConcerns: [
        { concern: 'الرخام جديد.', solution: 'CaSO₄ يترسب من اليوم الأول. لقاح يخدش من أول مشي. Sealer من اليوم الأول = حماية الاستثمار.' },
        { concern: 'ملمّع من المحل يكفي.', solution: 'الملمّع = طبقة فوق الـ Scale. يلمع ثم يبهت بسرعة. Citric يُذيب الـ Scale ← لمعان حقيقي.' },
    ],
    consumerEducation: [
        { myth: 'الرخام يتحمل.', truth: 'الرخام 3-4 Mohs = ناعم نسبياً. CaSO₄ + لقاح + تربة = 3 هجمات يومية. يتحمل.. لكن يبهت.' },
        { myth: 'جلي مرة يكفي.', truth: 'CaSO₄ أسبوعي + لقاح يومي. جلي بدون Sealer = يبهت خلال أشهر. جلي + Sealer = 1-2 سنة.' },
        { myth: 'خل بديل Citric.', truth: 'الخل (Acetic Acid) يتفاعل مع CaCO₃ (الرخام) = يُتلفه. Citric مُخفف = آمن — يتفاعل مع CaSO₄ فقط.' },
    ],
    relatedServices: [
        { slug: 'cleaning', context: 'تنظيف — بروتوكول واحي', priority: 1 },
        { slug: 'glass-facades-cleaning', context: 'واجهات — نفس CaSO₄', priority: 2 },
        { slug: 'villas-cleaning', context: 'فلل — رخام الفيلا', priority: 3 },
        { slug: 'carpet-cleaning', context: 'سجاد — لقاح + تربة', priority: 4 },
        { slug: 'apartments-cleaning', context: 'شقق — رخام الشقة', priority: 5 },
        { slug: 'steam-cleaning', context: 'بخار — تعقيم حول الرخام', priority: 6 },
        { slug: 'auto-cleaning', context: 'سيارات — CaSO₄ على المرآب', priority: 7 },
    ],
};
