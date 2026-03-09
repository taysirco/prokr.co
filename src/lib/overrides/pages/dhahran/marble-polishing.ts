import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'جلي رخام بالظهران — NaCl+SiO₂ خدش مزدوج + 75-85% عفن مسامي + Biofilm (2026)',
        description: 'جلي رخام الظهران. SiO₂ يخدش الرخام (7>5 Mohs) + NaCl يُبهت. 75-85% عفن مسامي. Biofilm. RO ← جلي ← Sealer ← Anti-Fungal.',
        h1: 'جلي رخام بالظهران — رمل يخدش (7 Mohs) وملح يُبهت ورطوبة تُعفّن المسام',
        keywords: ['جلي رخام بالظهران', 'تلميع رخام الظهران', 'شركة جلي رخام بالظهران'],
    },
    content: {
        introduction: 'الرخام الظهراني يتعرض لخدش مزدوج لا يوجد في مدينة أخرى. المزدوج — SiO₂ 7 Mohs يخدش رخام 3-5 Mohs: SiO₂ رمل صحراوي = 7 على مقياس Mohs. رخام = 3-5 Mohs. SiO₂ يخدش الرخام فعلياً (= زجاج). + NaCl يُبهت بترطيب مستمر (Hygroscopic). معاً = خدش + إبهات = أسوأ مزيج. RO غسل ← جلي تدريجي. المشكلة الثانية — 75-85% عفن مسامي: مسام الرخام + 75-85% = Aspergillus يخترق = بقع داخلية. Anti-Fungal ← Sealer. المشكلة الثالثة — Biofilm: 75-85% + ضوء على رخام خارجي = طحالب Chlorophyta أبطأ من الخبر لكن تنمو. Anti-Biofilm.',
        shortAnswer: 'على عكس [ملمّع سطحي] الذي لا يُزيل SiO₂ ولا NaCl، يعتمد بروتوكولنا في خدمة [جلي الرخام] بمدينة [الظهران] على [RO ← جلي ← Anti-Fungal ← Sealer]. ففي ظل [SiO₂ 7 Mohs + NaCl + 75-85%]، تتفاقم ظاهرة [خدش + إبهات + عفن]. لذا؛ يتدخل خبراؤنا عبر [بروتوكول رخام مزدوج].',
        heroSubtitle: 'SiO₂ 7>3 Mohs خدش + NaCl إبهات + 75-85% عفن مسامي',
    },
    pricing: [
        { type: 'جلي + تلميع (10-30 م²)', unit: 'م²', minPrice: 25, maxPrice: 55, time: '1-3 ساعات' },
        { type: 'جلي + Sealer + Anti-Fungal', unit: 'م²', minPrice: 35, maxPrice: 65, time: '3-5 ساعات' },
        { type: 'Anti-Biofilm خارجي', unit: 'م²', minPrice: 18, maxPrice: 35, time: '1-2 ساعة' },
        { type: 'فيلا كاملة (100+ م²)', unit: 'م²', minPrice: 20, maxPrice: 45, time: '6-12 ساعة' },
    ],
    faq: [
        { question: 'SiO₂ 7 Mohs — أصعب من الخبر؟', answer: 'الخبر = NaCl (إبهات فقط). الظهران = NaCl + SiO₂ (إبهات + خدش). SiO₂ 7 > رخام 3-5 = خدش فعلي. أسوأ على الرخام.' },
        { question: 'غسل RO قبل الجلي — حاسم؟', answer: 'بدون RO = SiO₂ يُطحن تحت NaCl الرطب = Micro-Abrasion أعمق. RO يُذيب NaCl ← SiO₂ يُرفع ← ثم جلي.' },
        { question: 'عفن مسامي — 75-85% يكفي؟', answer: '3-4 أسابيع = Aspergillus يخترق مسام الرخام. Anti-Fungal يقتل ← Sealer يختم.' },
        { question: 'Sealer — إلزامي؟', answer: 'في الظهران = حتمي. SiO₂ يخدش (يفتح مسام) + NaCl يدخل + عفن ينمو. Sealer يسد مسام جديدة + يحمي.' },
        { question: 'ربع سنوي؟', answer: 'SiO₂ يخدش أسبوعياً + NaCl أسبوعياً + عفن شهرياً. ربع سنوي = الحد.' },
    ],
    expertTips: [
        'RO أولاً ← ثم Microfiber لرفع SiO₂ ← ثم جلي — ترتيب حاسم.',
        'Sealer بعد كل جلي — SiO₂ يخدش = يفتح مسام جديدة = Sealer يسدها.',
        'Anti-Fungal قبل Sealer — يقتل عفن داخلي ← Sealer يختمه.',
        'Anti-Biofilm رخام خارجي — أبطأ من الخبر لكن ينمو.',
        'تجفيف فوري — 75-85% + NaCl = بقع إذا جف ببطء.',
    ],
    warnings: [
        'SiO₂ 7 Mohs + NaCl رطب = خدش+إبهات مزدوج أسرع من أي مدينة. ربع سنوي = يمنع.',
        'عفن مسامي > 3 أشهر = بقع لا تُزال حتى بالجلي. Anti-Fungal مبكر.',
        'جلي بدون RO = SiO₂ يُطحن = خدوش عميقة.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص شركات الجلي' },
        { entity: AMANA.SHARQIA.entity, url: AMANA.SHARQIA.url, role: 'اشتراطات المباني بالشرقية' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALMOHAIMED.name, quote: 'رخام الظهران = أصعب في المملكة: SiO₂ 7 Mohs خدش + NaCl إبهات + 75-85% عفن مسامي. RO ← جلي ← Anti-Fungal ← Sealer = بروتوكول مزدوج.', source: 'نصائح هندسية — رخام مزدوج' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ جلي مرخص', authority: 'منصة بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'RO Water', use: 'يُذيب NaCl قبل الجلي — يمنع خدش مُبلّل' },
        { name: 'Diamond Pads 7-مراحل', use: 'جلي تدريجي بعد RO' },
        { name: 'Sealer', use: 'يسد مسام — يحمي من SiO₂+NaCl+عفن' },
        { name: 'Anti-Biofilm', use: 'رخام خارجي — 4 أشهر' },
    ],
    hiddenObjections: [
        { fear: 'رخام جديد.', solution: 'SiO₂ من اليوم الأول = خدش. Sealer فوراً = حماية الاستثمار.' },
        { fear: 'ملمّع محل.', solution: 'طبقة فوق SiO₂ + NaCl. يلمع مؤقتاً. تحته = خدش+إبهات. غسل+جلي = حقيقي.' },
    ],
    counterNarratives: [
        { myth: 'مثل الخبر.', truth: 'SiO₂ 7 Mohs = خدش حقيقي. الخبر = NaCl إبهات فقط. مختلف.' },
        { myth: 'يجف.', truth: '75-85% = بطيء. NaCl يتبلور + SiO₂ يتصلب.' },
        { myth: 'جلي مرة.', truth: 'SiO₂ أسبوعي + NaCl أسبوعي. ربع سنوي.' },
    ],
    relatedServices: [
        { slug: 'cleaning', context: 'تنظيف — مزدوج', priority: 1 },
        { slug: 'glass-facades-cleaning', context: 'واجهات — SiO₂+NaCl', priority: 2 },
        { slug: 'villas-cleaning', context: 'فلل — رخام', priority: 3 },
        { slug: 'apartments-cleaning', context: 'شقق — رخام', priority: 4 },
        { slug: 'steam-cleaning', context: 'بخار — تعقيم', priority: 5 },
        { slug: 'carpet-cleaning', context: 'سجاد — حول', priority: 6 },
        { slug: 'auto-cleaning', context: 'سيارات — مرآب', priority: 7 },
    ],
};
