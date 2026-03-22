import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../gov-references';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف فلل بالظهران — بروتوكول مزدوج 7 محاور: NaCl+SiO₂ + عفن 75-85% + Sabkha + Biofilm + PVAc + حشرات + أرامكو (2026)',
        description: 'تنظيف فلل الظهران. 7 محاور مزدوجة: NaCl+SiO₂. 75-85% عفن. Sabkha+رمل. Biofilm. PVAc. حشرات. أرامكو. فريق مُتخصص + بروتوكول مزدوج.',
        h1: 'تنظيف فلل بالظهران — 7 محاور مزدوجة: فريق مُتخصص + بروتوكول',
        keywords: ['تنظيف فلل بالظهران', 'تنظيف فيلا الظهران', 'شركة تنظيف فلل بالظهران'],
    },
    content: {
        introduction: 'الفيلا في الظهران = أكبر مساحة تتعرض لأوسع طيف مزدوج. 7 محاور: المحور 1 — NaCl+SiO₂ كل سطح: مزدوج يومي. RO ← Microfiber (ترتيب حاسم). المحور 2 — 75-85% عفن: حمامات + مطابخ + خزائن + مكيف + سقف + مجلس + غسيل. Aspergillus 3-4 أسابيع. Anti-Fungal. المحور 3 — Sabkha+رمل: تربة مزدوجة من أحذية + حديقة. RO + تجفيف. المحور 4 — Biofilm واجهات: 75-85% + ضوء = طحالب أبطأ من الخبر لكن تنمو. Anti-Biofilm. المحور 5 — PVAc أثاث: 45°م + 75-85% = أبطأ من الخبر لكن حتمي. Conditioner. المحور 6 — حشرات: نمل أبيض (Sabkha) + بعوض. Bait + Larvicide. المحور 7 — أرامكو: فلل مُجمّعات = معايير أعلى + تقارير + بروتوكول مُوثّق.',
        shortAnswer: 'على عكس [عاملة واحدة بممسحة] التي لا تُغطي 7 محاور مزدوجة، يعتمد بروتوكولنا في خدمة [تنظيف الفلل] بمدينة [الظهران] على [فريق مزدوج 7 محاور: RO ← Microfiber ← Anti-Fungal ← Anti-Biofilm ← Anti-Corrosion ← Conditioner ← Larvicide]. ففي ظل [NaCl+SiO₂ + 75-85% + Sabkha + أرامكو]، تتفاقم ظاهرة [7 محاور]. لذا؛ يتدخل خبراؤنا عبر [بروتوكول فيلا مزدوج].',
        heroSubtitle: '7 محاور: NaCl+SiO₂ + عفن + Sabkha + Biofilm + PVAc + حشرات + أرامكو',
    },
    pricing: [
        { type: 'فيلا — بروتوكول مزدوج', unit: 'فيلا', minPrice: 530, maxPrice: 1150, time: '6-10 ساعات' },
        { type: 'فيلا + واجهات + حديقة', unit: 'فيلا', minPrice: 780, maxPrice: 1750, time: '8-14 ساعة' },
        { type: 'فيلا أرامكو — بروتوكول مُوثّق', unit: 'فيلا', minPrice: 940, maxPrice: 2350, time: '10-16 ساعة' },
        { type: 'عقد أسبوعي', unit: 'شهر', minPrice: 680, maxPrice: 1450, time: '4 زيارات' },
    ],
    faq: [
        { question: '7 محاور — أكثر من الخبر؟', answer: 'الخبر = 6 محاور (ساحلي). الظهران = 7 (مزدوج + أرامكو). SiO₂ = محور إضافي (خدش). أرامكو = معايير إضافية.' },
        { question: 'فريق — كم شخص؟', answer: 'فيلا صغيرة: 3-4. فيلا كبيرة: 5-7. فيلا أرامكو: 5-8 + مُشرف بروتوكول. تخصص = جودة.' },
        { question: 'أرامكو — فرق كبير؟', answer: 'تقرير بالصور + قياسات (RH%, PM10, عفن) + تسلسل مُوثّق. + تصاريح دخول المُجمّع.' },
        { question: 'أسبوعي — ليش؟', answer: 'NaCl+SiO₂ يومي + عفن أسبوعي = أسبوعي يمنع التراكم المزدوج.' },
        { question: 'ترتيب RO→Microfiber — في كل غرفة؟', answer: 'نعم — الترتيب حاسم. عكسه = SiO₂ يخدش تحت NaCl = Micro-Abrasion مُبلّل. كل سطح × كل غرفة.' },
    ],
    expertTips: [
        'ترتيب RO → Microfiber — العكس = خدش. كل غرفة.',
        'Anti-Fungal 7 نقاط — حمام + مطبخ + خزائن + مكيف + سقف + مجلس + غسيل.',
        'Anti-Biofilm واجهات ربع سنوي — أبطأ من الخبر لكن ينمو.',
        'Anti-Corrosion كل المعادن — NaCl+SiO₂ مزدوج يتآكل+يخدش.',
        'HEPA في غرف النوم — SiO₂ PM10.',
    ],
    warnings: [
        'فيلا بدون بروتوكول مزدوج = 7 محاور تلف × 12 شهراً = ترميم 20,000-100,000 ريال.',
        '75-85% + 7 نقاط عفن = Aspergillus في كل غرفة = حساسية عائلية.',
        'NaCl+SiO₂ على واجهات + أسوار = Galvanic + خدش = تغيير = آلاف. Anti-Corrosion = مئات.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص التنظيف' },
        { entity: AMANA.SHARQIA.entity, url: AMANA.SHARQIA.url, role: 'اشتراطات الفلل بالشرقية' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALMISNID.name, quote: 'فيلا الظهران = أصعب وحدة مزدوجة: 7 محاور. NaCl+SiO₂ + 75-85% + Sabkha + Biofilm + PVAc + حشرات + أرامكو. فريق مُتخصص × كل أسبوع.', source: 'جغرافيا المناخ — الفلل المزدوجة' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [
        { badge: '✔️ تنظيف فلل مرخص', authority: 'منصة بلدي', icon: 'shield-check' },
        { badge: '✔️ بروتوكول مزدوج 7 محاور', authority: 'معتمد داخلياً', icon: 'badge-check' },
        { badge: '✔️ بروتوكول أرامكو', authority: 'معايير مُوثّقة', icon: 'badge-check' },
    ],
    equipment: [
        { name: 'RO Water + Microfiber', use: 'ترتيب مزدوج — يُذيب NaCl ← يرفع SiO₂' },
        { name: 'Anti-Fungal', use: '7 نقاط عفن — 5 أشهر' },
        { name: 'Anti-Biofilm', use: 'واجهات — 4 أشهر' },
        { name: 'Anti-Corrosion + Conditioner', use: 'معادن + أثاث — مزدوج' },
        { name: 'HEPA + Dehumidifier', use: 'SiO₂ PM10 + 75-85%' },
        { name: 'BTI Larvicide', use: 'بعوض حديقة' },
    ],
    commonConcerns: [
        { concern: 'عاملة واحدة.', solution: '7 محاور = فريق مُتخصص. واحدة = 1/7.' },
        { concern: 'لسنة كاملة؟', solution: 'NaCl+SiO₂ يومي + عفن أسبوعي. أسبوعي = الأمثل.' },
    ],
    consumerEducation: [
        { myth: 'مثل الخبر.', truth: 'SiO₂ إضافي + أرامكو = 7 بدلاً من 6. مختلف.' },
        { myth: 'تنظيف = ممسحة.', truth: '7 محاور = 7 أدوات + فريق + ترتيب.' },
        { myth: 'شهري.', truth: '7 محاور يومية/أسبوعية. شهري = 3 أسابيع × 7 = 21 تراكم.' },
    ],
    relatedServices: [
        { slug: 'cleaning', context: 'تنظيف — مزدوج', priority: 1 },
        { slug: 'swimming-pool-cleaning', context: 'مسبح', priority: 2 },
        { slug: 'glass-facades-cleaning', context: 'واجهات', priority: 3 },
        { slug: 'carpet-cleaning', context: 'سجاد', priority: 4 },
        { slug: 'furniture-cleaning', context: 'أثاث', priority: 5 },
        { slug: 'termite-control', context: 'نمل أبيض', priority: 6 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 7 },
    ],
};
