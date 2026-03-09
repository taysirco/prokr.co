import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف شقق بحفر الباطن — SiO₂ عواصف + ΔT 54°م شقوق + 10-15% كهرباء ساكنة (2026)',
        description: 'تنظيف شقق حفر الباطن. SiO₂ عواصف يدخل كل شقة. ΔT 54°م شقوق تسلل. 10-15% كهرباء ساكنة. لا عفن = ميزة! غسل + شفط HEPA + موانع.',
        h1: 'تنظيف شقق بحفر الباطن — رمل يدخل وجفاف يُكهرب وبرد يُشقق',
        keywords: ['تنظيف شقق حفر الباطن', 'تنظيف شقة حفر الباطن', 'شركة تنظيف شقق حفر الباطن'],
    },
    content: {
        introduction: 'الشقة في حفر الباطن تتسخ بطريقة صحراوية فريدة. الأولى — SiO₂ عواصف: أقل من 24 ساعة بعد عاصفة = كل سطح مُغطى بطبقة SiO₂ ← يدخل من أي فتحة (نافذة + باب + شقوق). شفط HEPA + غسل. الثانية — ΔT 54°م شقوق: 52°م يمدد الجدران ← -2°م ينكمش = Micro-Cracks حول النوافذ والأبواب = SiO₂ يدخل أكثر. ختم شقوق. الثالثة — 10-15% كهرباء ساكنة: أجف مدينة = SiO₂ يلتصق بالأسطح بشحنة كهروستاتيكية. ممسحة عادية = تنقله — لا تزيله. Anti-Static + RH. الرابعة — لا عفن = ميزة!: 10-15% = لا Aspergillus. أنظف بيئة داخلية في المملكة. التحدي = SiO₂ PM10 — ليس عفن.',
        shortAnswer: 'على عكس [ممسحة بلا HEPA] التي تنقل SiO₂ ولا تزيله، يعتمد بروتوكولنا في خدمة [تنظيف الشقق] بمدينة [حفر الباطن] على [HEPA + Anti-Static + ختم شقوق + شفط]. ففي ظل [SiO₂ + ΔT 54°م + 10-15%]، تتفاقم ظاهرة [رمل + شقوق + كهرباء ساكنة]. لذا؛ يتدخل خبراؤنا عبر [بروتوكول صحراوي].',
        heroSubtitle: 'SiO₂ عواصف + ΔT 54°م شقوق + 10-15% كهرباء ساكنة + لا عفن',
    },
    pricing: [
        { type: 'شقة — بروتوكول SiO₂', unit: 'شقة', minPrice: 170, maxPrice: 340, time: '2-4 ساعات' },
        { type: 'بعد عاصفة — طوارئ', unit: 'شقة', minPrice: 220, maxPrice: 400, time: '3-5 ساعات' },
        { type: 'ختم شقوق + تنظيف', unit: 'شقة', minPrice: 260, maxPrice: 480, time: '4-6 ساعات' },
        { type: 'عقد أسبوعي', unit: 'شهر', minPrice: 310, maxPrice: 620, time: '4 زيارات' },
    ],
    faq: [
        { question: 'كهرباء ساكنة — ليش؟', answer: '10-15% = أجف هواء. SiO₂ جاف = شحنة كهروستاتيكية = يلتصق بالأسطح. ممسحة عادية = تُفرّقه. Anti-Static أو مسح رطب = يُفرّغ الشحنة ← يُزيل.' },
        { question: 'لا عفن — حقاً؟', answer: '10-15% = لا Aspergillus. لا Anti-Fungal. أنظف بيئة. التحدي = SiO₂ PM10 (تنفسي) — ليس عفن.' },
        { question: 'ΔT 54°م — شقوق حقيقية؟', answer: '52°م يمدد → -2°م ينكمش = Micro-Cracks. ليست ظاهرة — ولكن كافية لـ SiO₂ ناعم ← يدخل. ختم سنوي.' },
        { question: 'بعد عاصفة — فوراً؟', answer: 'نعم — SiO₂ يستقر + كهرباء ساكنة = يلتصق. كل يوم تأخير = أصعب 20%.' },
        { question: 'أسبوعي — ليش؟', answer: 'عواصف 2-4/شهر + SiO₂ يومي + كهرباء ساكنة. أسبوعي = يمنع التراكم الكهروستاتيكي.' },
    ],
    expertTips: [
        'HEPA شفط أولاً — يحجز SiO₂ بدلاً من نقله.',
        'Anti-Static على أسطح — يُفرّغ شحنة = SiO₂ لا يلتصق.',
        'ختم شقوق ΔT حول النوافذ — يمنع دخول.',
        'مسح رطب (10-15% = يجف فوراً) — يُفرّغ شحنة + لا خطر عفن.',
        'فلتر HEPA في غرف النوم — PM10 تنفسي.',
    ],
    warnings: [
        'SiO₂ PM10 × 8 ساعات نوم = خطر تنفسي. HEPA = حماية.',
        'كهرباء ساكنة + SiO₂ = يلتصق بإلكترونيات = Micro-Abrasion. Anti-Static.',
        'ΔT 54°م شقوق = SiO₂ إضافي 30-50%. ختم = يقلل.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص التنظيف' },
        { entity: AMANA.HAFR.entity, url: AMANA.HAFR.url, role: 'اشتراطات النظافة بحفر الباطن' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALMISNID.name, quote: 'شقة حفر الباطن: SiO₂ + كهرباء ساكنة = يلتصق. ΔT 54°م = شقوق. 10-15% = لا عفن (ميزة!). التحدي = PM10 تنفسي — ليس عفن.', source: 'جغرافيا المناخ — التنظيف الصحراوي القاري' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ تنظيف مرخص', authority: 'منصة بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'HEPA Vacuum', use: 'يحجز SiO₂ — لا ينقله' },
        { name: 'Anti-Static Spray', use: 'يُفرّغ كهرباء ساكنة — SiO₂ لا يلتصق' },
        { name: 'ختم سيليكون', use: 'شقوق ΔT حول النوافذ' },
    ],
    hiddenObjections: [
        { fear: 'لا عفن = سهل.', solution: 'SiO₂ PM10 = تنفسي. كهرباء ساكنة = يلتصق. ΔT = شقوق. 3 تحديات ≠ سهل.' },
        { fear: 'ممسحة.', solution: 'كهرباء ساكنة = تنقل ولا تزيل. HEPA + Anti-Static = الحل.' },
    ],
    counterNarratives: [
        { myth: 'مثل الرياض.', truth: 'ΔT 54°م > 35°م. -2°م شتاء. عواصف أكثر. مختلف.' },
        { myth: 'جاف = نظيف.', truth: 'جاف = SiO₂ يلتصق بكهرباء ساكنة. أصعب إزالة.' },
        { myth: 'شهري.', truth: 'عواصف 2-4/شهر + كهرباء ساكنة. أسبوعي.' },
    ],
    relatedServices: [
        { slug: 'cleaning', context: 'تنظيف — SiO₂', priority: 1 },
        { slug: 'carpet-cleaning', context: 'سجاد — SiO₂', priority: 2 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف — ΔT', priority: 3 },
        { slug: 'steam-cleaning', context: 'بخار — تعقيم', priority: 4 },
        { slug: 'pest-control', context: 'حشرات — هجرة', priority: 5 },
        { slug: 'marble-polishing', context: 'رخام — SiO₂', priority: 6 },
        { slug: 'villas-cleaning', context: 'فلل — عواصف', priority: 7 },
    ],
};
