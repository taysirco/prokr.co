import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../gov-references';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف سجاد بحفر الباطن — SiO₂ عواصف Fiber Cutting + ΔT 54°م ألياف + 10-15% كهرباء ساكنة (2026)',
        description: 'تنظيف سجاد حفر الباطن. SiO₂ عواصف = Fiber Cutting. ΔT 54°م = ألياف تتمدد/تنكمش. 10-15% كهرباء ساكنة. لا عفن! استخلاص + HEPA + Anti-Static.',
        h1: 'تنظيف سجاد بحفر الباطن — رمل يقطع وحرارة تُرهق وجفاف يُكهرب',
        keywords: ['تنظيف سجاد حفر الباطن', 'غسيل سجاد حفر الباطن', 'شركة تنظيف سجاد حفر الباطن'],
    },
    content: {
        introduction: 'السجاد في حفر الباطن يواجه 3 تحديات قارية + ميزة. الأولى — SiO₂ عواصف Fiber Cutting: عاصفة واحدة = SiO₂ ناعم يخترق الألياف ← Fiber Cutting (قطع ميكروبي). أكثف من الرياض = قطع أسرع. HEPA شفط ← استخلاص. الثانية — ΔT 54°م ألياف: 52°م تمدد ← -2°م انكماش = ألياف Wool تتقلص. صوف خاصة. اختبار حرارة. الثالثة — 10-15% كهرباء ساكنة: SiO₂ جاف = شحنة كهروستاتيكية = يلتصق بالألياف. شفط عادي = ينقله. HEPA + Anti-Static = يُفرّغ ويحجز. الميزة — لا عفن!: 10-15% = لا Aspergillus في القاعدة. لا Anti-Fungal. أنظف قاعدة. التحدي = SiO₂ PM10 — ليس عفن.',
        shortAnswer: 'على عكس [شفط + شامبو] الذي ينقل SiO₂ ولا يُفرّغ شحنة، يعتمد بروتوكولنا في خدمة [تنظيف السجاد] بمدينة [حفر الباطن] على [HEPA + Anti-Static + استخلاص + اختبار حرارة]. ففي ظل [SiO₂ + ΔT 54°م + 10-15%]، تتفاقم ظاهرة [قطع + تقلص + كهرباء]. لذا؛ يتدخل خبراؤنا عبر [بروتوكول سجاد قاري].',
        heroSubtitle: 'SiO₂ Fiber Cutting + ΔT 54°م تقلص + كهرباء ساكنة + لا عفن',
    },
    pricing: [
        { type: 'سجادة (2×3 م) — قاري', unit: 'سجادة', minPrice: 50, maxPrice: 95, time: '20-35 دقيقة' },
        { type: 'موكيت غرفة (20 م²)', unit: 'غرفة', minPrice: 110, maxPrice: 220, time: '1-2 ساعة' },
        { type: 'شقة + HEPA + Anti-Static', unit: 'شقة', minPrice: 230, maxPrice: 450, time: '2-4 ساعات' },
        { type: 'ربع سنوي', unit: 'سنة', minPrice: 550, maxPrice: 1100, time: '4 زيارات' },
    ],
    faq: [
        { question: 'لا عفن — حقاً؟', answer: '10-15% = لا Aspergillus. لا Anti-Fungal = توفير. التحدي = SiO₂ PM10 + كهرباء ساكنة — ليس عفن.' },
        { question: 'كهرباء ساكنة — على السجاد؟', answer: '10-15% + SiO₂ جاف + صوف/نايلون = شحنة كهروستاتيكية عالية. تمشي = صدمة. SiO₂ يلتصق. Anti-Static = يُفرّغ.' },
        { question: 'ΔT 54°م — يتقلص؟', answer: 'صوف + 52°م+ماء ساخن = Shrinkage. غسل بدرجة مُختبرة. 10-15% = يجف فوراً (ميزة!).' },
        { question: 'تجفيف — في 10-15%؟', answer: 'ميزة! يجف في 1-2 ساعة (بدلاً من 6-12 في الشرقية). لا خطر عفن. أسرع تجفيف في المملكة.' },
        { question: 'ربع سنوي؟', answer: 'SiO₂ عواصف 2-4/شهر + كهرباء ساكنة = تراكم. ربع سنوي = قبل الإتلاف.' },
    ],
    expertTips: [
        'HEPA شفط أولاً — يحجز SiO₂ بدلاً من نقله.',
        'Anti-Static بعد كل غسل — يمنع SiO₂ من الالتصاق.',
        'اختبار حرارة قبل غسل صوف — ΔT 54°م = Shrinkage محتمل.',
        'تجفيف 1-2 ساعة — ميزة 10-15%! أسرع في المملكة.',
        'بعد عاصفة = HEPA فوري — SiO₂ يقطع كل ساعة.',
    ],
    warnings: [
        'SiO₂ عواصف × 6 أشهر = ألياف مقطوعة = سجاد تالف. ربع سنوي.',
        'كهرباء ساكنة + SiO₂ = يلتصق + صدمة. Anti-Static = حل.',
        'صوف + ماء ساخن في 52°م = Shrinkage. اختبار = يمنع.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص التنظيف' },
        { entity: AMANA.HAFR.entity, url: AMANA.HAFR.url, role: 'اشتراطات النظافة بحفر الباطن' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALMOHAIMED.name, quote: 'سجاد حفر الباطن: SiO₂ Fiber Cutting + ΔT 54°م تقلص + 10-15% كهرباء ساكنة. لا عفن (ميزة!). HEPA + Anti-Static + اختبار حرارة.', source: 'نصائح هندسية — سجاد المناخ القاري' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ تنظيف سجاد مرخص', authority: 'منصة بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'HEPA Vacuum', use: 'يحجز SiO₂ — لا ينقله' },
        { name: 'Anti-Static Treatment', use: 'يُفرّغ شحنة — SiO₂ لا يلتصق' },
        { name: 'Hot Water Extraction', use: 'يسحب SiO₂ من العمق — حرارة مُختبرة' },
    ],
    commonConcerns: [
        { concern: 'لا عفن = سهل.', solution: 'SiO₂ Cutting + كهرباء ساكنة + ΔT. 3 تحديات قارية ≠ سهل.' },
        { concern: 'شفط يكفي.', solution: 'شفط عادي = ينقل. HEPA = يحجز. فرق.' },
    ],
    consumerEducation: [
        { myth: 'مثل الرياض.', truth: 'ΔT 54°م > 35°م. -2°م. عواصف أكثف. مختلف.' },
        { myth: 'جاف = نظيف.', truth: 'جاف = كهرباء ساكنة = SiO₂ يلتصق أكثر.' },
        { myth: 'سنوي.', truth: 'عواصف 2-4/شهر. ربع سنوي.' },
    ],
    relatedServices: [
        { slug: 'sofa-cleaning', context: 'كنب — SiO₂+كهرباء', priority: 1 },
        { slug: 'steam-cleaning', context: 'بخار — تعقيم', priority: 2 },
        { slug: 'cleaning', context: 'تنظيف — SiO₂', priority: 3 },
        { slug: 'councils-cleaning', context: 'مجالس', priority: 4 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف — ΔT', priority: 5 },
        { slug: 'pest-control', context: 'حشرات — عقارب', priority: 6 },
        { slug: 'marble-polishing', context: 'رخام — SiO₂', priority: 7 },
    ],
};
