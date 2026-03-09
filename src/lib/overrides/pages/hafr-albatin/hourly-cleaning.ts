import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف بالساعة بحفر الباطن — عاملة HEPA + Anti-Static + لا Anti-Fungal (ميزة!) (2026)',
        description: 'تنظيف بالساعة حفر الباطن. عاملة مُدرّبة: HEPA ← Anti-Static ← غسل. لا Anti-Fungal (10-15% = لا عفن = ميزة!). SiO₂ عواصف. ΔT 54°م.',
        h1: 'تنظيف بالساعة بحفر الباطن — عاملة قارية تخطو 3 خطوات — لا 5',
        keywords: ['تنظيف بالساعة حفر الباطن', 'عاملة تنظيف حفر الباطن', 'شركة تنظيف بالساعة حفر الباطن'],
    },
    content: {
        introduction: 'العاملة بالساعة في حفر الباطن تخطو 3 خطوات — ليس 5 كالشرقية. الخطوة 1 — HEPA شفط: SiO₂ عواصف = مكنسة عادية تنقله. HEPA = تحجز. الخطوة 2 — Anti-Static: 10-15% = كهرباء ساكنة = SiO₂ يلتصق. Anti-Static يُفرّغ. الخطوة 3 — غسل: ماء مُفلتر (CaCO₃ عسر) + مسح. لا Anti-Fungal!: 10-15% = لا عفن. توفير وقت 20-30%. لا Anti-Corrosion: لا NaCl = لا صدأ. توفير! النتيجة = أسرع + أرخص من الشرقية. لكن: SiO₂ أكثف = HEPA + Anti-Static حاسمان.',
        shortAnswer: 'على عكس [عاملة بممسحة] التي تنقل SiO₂ بكهرباء ساكنة، يعتمد بروتوكولنا في خدمة [التنظيف بالساعة] بمدينة [حفر الباطن] على [عاملة 3 خطوات: HEPA ← Anti-Static ← غسل]. ففي ظل [SiO₂ + 10-15%]، تتفاقم ظاهرة [نقل + التصاق]. لذا؛ يتدخل خبراؤنا عبر [عاملة قارية مُدرّبة].',
        heroSubtitle: '3 خطوات (لا 5): HEPA ← Anti-Static ← غسل + لا عفن + لا صدأ',
    },
    pricing: [
        { type: 'ساعة — عاملة قارية', unit: 'ساعة', minPrice: 25, maxPrice: 45, time: '1 ساعة' },
        { type: '4 ساعات (حد أدنى)', unit: 'حصة', minPrice: 85, maxPrice: 150, time: '4 ساعات' },
        { type: '8 ساعات — يوم كامل', unit: 'يوم', minPrice: 150, maxPrice: 260, time: '8 ساعات' },
        { type: 'عقد أسبوعي (4/شهر)', unit: 'شهر', minPrice: 290, maxPrice: 580, time: '4 زيارات' },
    ],
    faq: [
        { question: '3 خطوات — أقل من الشرقية؟', answer: 'نعم! الشرقية: 5 خطوات (RO ← Microfiber ← Anti-Fungal ← Anti-Corrosion ← تجفيف). حفر الباطن: 3 (لا عفن + لا صدأ = حذف 2). أسرع 20-30%.' },
        { question: 'أرخص — حقاً؟', answer: 'أقل خطوات = أقل وقت = أقل تكلفة. 25-45/ساعة (بدلاً من 30-50 في الشرقية).' },
        { question: 'HEPA + Anti-Static — ليش حاسمين؟', answer: 'بدونهما: ممسحة = تنقل SiO₂ بكهرباء ساكنة = تنظيف = تلويث.' },
        { question: 'ماء عسر — بقع؟', answer: 'CaCO₃ = بقع بيضاء. مُفلتر أو منظف مُعادل = حل.' },
        { question: 'أسبوعي — ليش؟', answer: 'عواصف 2-4/شهر + SiO₂ يومي + كهرباء ساكنة. أسبوعي = يمنع التراكم.' },
    ],
    expertTips: [
        'HEPA أولاً — لا مكنسة عادية. SiO₂ ينتشر.',
        'Anti-Static ثانياً — يُفرّغ شحنة.',
        'لا Anti-Fungal — توفير. 10-15% = لا عفن.',
        'لا Anti-Corrosion — لا NaCl = لا صدأ.',
        'ماء مُفلتر — CaCO₃ بقع.',
    ],
    warnings: [
        'مكنسة عادية = SiO₂ ينتشر في الهواء = PM10 = تنفسي.',
        'بدون Anti-Static = SiO₂ يلتصق = كل تنظيف = نقل.',
        'ماء عسر بدون فلتر = بقع CaCO₃ بيضاء.',
    ],
    trustAnchors: [
        { ...GOV.HRSD, role: 'تنظيم العمالة' },
        { entity: AMANA.HAFR.entity, url: AMANA.HAFR.url, role: 'اشتراطات النظافة بحفر الباطن' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALMISNID.name, quote: 'عاملة حفر الباطن: 3 خطوات (لا 5). لا عفن = توفير Anti-Fungal. لا NaCl = توفير Anti-Corrosion. HEPA + Anti-Static = الفرق.', source: 'جغرافيا المناخ — تنظيف قاري' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [
        { badge: '✔️ عمالة مرخصة', authority: 'HRSD + بلدي', icon: 'shield-check' },
        { badge: '✔️ تدريب قاري', authority: 'معتمد داخلياً', icon: 'badge-check' },
    ],
    equipment: [
        { name: 'HEPA Vacuum', use: 'الخطوة 1 — يحجز SiO₂' },
        { name: 'Anti-Static', use: 'الخطوة 2 — يُفرّغ شحنة' },
        { name: 'ماء مُفلتر', use: 'الخطوة 3 — لا CaCO₃' },
    ],
    hiddenObjections: [
        { fear: 'أبسط.', solution: '3 خطوات ≠ أبسط. HEPA + Anti-Static = حاسمان. بدونهما = تلويث.' },
        { fear: 'أنظف بنفسي.', solution: 'بمكنسة = SiO₂ PM10. بممسحة = كهرباء ساكنة. 2 خطأ.' },
    ],
    counterNarratives: [
        { myth: 'ممسحة.', truth: 'كهرباء ساكنة = تنقل. HEPA + Anti-Static.' },
        { myth: 'مثل الشرقية.', truth: 'لا عفن + لا صدأ = 3 خطوات. أسرع.' },
        { myth: 'شهري.', truth: 'عواصف 2-4/شهر. أسبوعي.' },
    ],
    relatedServices: [
        { slug: 'cleaning', context: 'تنظيف — SiO₂', priority: 1 },
        { slug: 'apartments-cleaning', context: 'شقق', priority: 2 },
        { slug: 'carpet-cleaning', context: 'سجاد', priority: 3 },
        { slug: 'steam-cleaning', context: 'بخار', priority: 4 },
        { slug: 'sofa-cleaning', context: 'كنب', priority: 5 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف — ΔT', priority: 6 },
        { slug: 'pest-control', context: 'حشرات', priority: 7 },
    ],
};
