import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف منازل بحفر الباطن — بروتوكول قاري: HEPA + Anti-Static + ختم ΔT + لا عفن (2026)',
        description: 'تنظيف منازل حفر الباطن. SiO₂ عواصف 2-4/شهر. ΔT 54°م شقوق. 10-15% كهرباء ساكنة. لا عفن = ميزة! HEPA ← Anti-Static ← ختم ← غسل.',
        h1: 'تنظيف منازل بحفر الباطن — بروتوكول قاري: 4 خطوات صحراوية',
        keywords: ['تنظيف منازل حفر الباطن', 'تنظيف بيت حفر الباطن', 'شركة تنظيف منازل حفر الباطن'],
    },
    content: {
        introduction: 'المنزل في حفر الباطن يتسخ بطريقة قارية مختلفة تماماً عن الشرقية. الخطوة 1 — HEPA شفط: SiO₂ عواصف يومي. المكنسة العادية = تنقله. HEPA = تحجزه (99.97%). الخطوة 2 — Anti-Static: 10-15% = SiO₂ يلتصق بكهرباء ساكنة. Anti-Static يُفرّغ الشحنة ← SiO₂ يُرفع. الخطوة 3 — ختم ΔT: 52°م/‑2°م = Micro-Cracks حول النوافذ = SiO₂ يدخل 30-50% أكثر. سيليكون يختم. الخطوة 4 — غسل: ماء حفر الباطن = عسر (CaCO₃). منظف مُعادل + غسل. الميزة — لا عفن!: 10-15% = صفر Aspergillus. لا Anti-Fungal. أنظف بيئة في المملكة. لكن: SiO₂ PM10.',
        shortAnswer: 'على عكس [ممسحة عادية] التي تنقل SiO₂ بكهرباء ساكنة، يعتمد بروتوكولنا في خدمة [تنظيف المنازل] بمدينة [حفر الباطن] على [HEPA ← Anti-Static ← ختم ← غسل]. ففي ظل [SiO₂ + ΔT 54°م + 10-15%]، تتفاقم ظاهرة [رمل + شقوق + كهرباء]. لذا؛ يتدخل خبراؤنا عبر [بروتوكول قاري].',
        heroSubtitle: 'HEPA ← Anti-Static ← ختم ΔT ← غسل + لا عفن (ميزة!)',
    },
    pricing: [
        { type: 'شقة — بروتوكول قاري', unit: 'شقة', minPrice: 180, maxPrice: 360, time: '2-4 ساعات' },
        { type: 'منزل/فيلا صغيرة', unit: 'منزل', minPrice: 320, maxPrice: 630, time: '4-6 ساعات' },
        { type: 'بعد عاصفة — طوارئ', unit: 'وحدة', minPrice: 230, maxPrice: 440, time: '3-5 ساعات' },
        { type: 'عقد أسبوعي', unit: 'شهر', minPrice: 310, maxPrice: 620, time: '4 زيارات' },
    ],
    faq: [
        { question: 'HEPA — ليش مو مكنسة عادية؟', answer: 'مكنسة = تنقل SiO₂ للهواء ← تستنشقه. HEPA = تحجز 99.97% من SiO₂ < 0.3 ميكرون. في حفر الباطن: SiO₂ أكثف = HEPA أهم.' },
        { question: 'كهرباء ساكنة — حقيقية؟', answer: '10-15% = أجف هواء في المملكة. SiO₂ + جفاف = شحنة. تمشي = صدمة. SiO₂ يلتصق. Anti-Static = يُفرّغ.' },
        { question: 'لا عفن — أنظف من الشرقية؟', answer: 'بيئياً: أنظف هواء (لا عفن). لكن: SiO₂ PM10 = تنفسي. تحدٍ مختلف — ليس أقل.' },
        { question: 'ماء عسر — فرق؟', answer: 'CaCO₃ = بقع بيضاء بعد الجفاف. منظف مُعادل أو ماء مُفلتر.' },
        { question: 'أسبوعي — ليش؟', answer: 'عواصف 2-4/شهر + SiO₂ يومي + كهرباء ساكنة. أسبوعي = يمنع التراكم.' },
    ],
    expertTips: [
        'HEPA أولاً — يحجز SiO₂ بدلاً من نقله.',
        'Anti-Static ثانياً — يُفرّغ شحنة ← SiO₂ يُرفع.',
        'ختم سيليكون ΔT سنوي — يمنع 30-50% SiO₂ إضافي.',
        '10-15% = يجف فوراً — غسل بلا خطر عفن (ميزة!).',
        'بعد عاصفة = HEPA فوري — التراكم يبدأ فوراً.',
    ],
    warnings: [
        'مكنسة بدون HEPA = SiO₂ PM10 في الهواء = تنفسي.',
        'ΔT شقوق بدون ختم = SiO₂ 30-50% إضافي.',
        'كهرباء ساكنة + SiO₂ = يلتصق بإلكترونيات + أسطح.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص التنظيف' },
        { entity: AMANA.HAFR.entity, url: AMANA.HAFR.url, role: 'اشتراطات النظافة بحفر الباطن' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALMISNID.name, quote: 'منزل حفر الباطن: HEPA ← Anti-Static ← ختم ΔT ← غسل. 4 خطوات قارية. لا عفن (ميزة!). التحدي = SiO₂ PM10.', source: 'جغرافيا المناخ — التنظيف القاري' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [
        { badge: '✔️ تنظيف مرخص', authority: 'منصة بلدي', icon: 'shield-check' },
        { badge: '✔️ بروتوكول قاري', authority: 'معتمد داخلياً', icon: 'badge-check' },
    ],
    equipment: [
        { name: 'HEPA Vacuum', use: 'يحجز SiO₂ 99.97% — الخطوة 1' },
        { name: 'Anti-Static Spray', use: 'يُفرّغ شحنة — الخطوة 2' },
        { name: 'سيليكون ختم', use: 'شقوق ΔT — الخطوة 3' },
    ],
    hiddenObjections: [
        { fear: 'لا عفن = سهل.', solution: 'SiO₂ PM10 + كهرباء ساكنة + ΔT شقوق = 3 تحديات.' },
        { fear: 'ممسحة.', solution: 'تنقل SiO₂ بكهرباء ساكنة. HEPA + Anti-Static = الحل.' },
    ],
    consumerEducation: [
        { myth: 'مثل الرياض.', truth: 'ΔT 54°م > 35°م. عواصف أكثف. -2°م شتاء.' },
        { myth: 'جاف = نظيف.', truth: 'جاف = كهرباء ساكنة = SiO₂ يلتصق.' },
        { myth: 'شهري.', truth: 'عواصف 2-4/شهر. أسبوعي.' },
    ],
    relatedServices: [
        { slug: 'apartments-cleaning', context: 'شقق — SiO₂', priority: 1 },
        { slug: 'carpet-cleaning', context: 'سجاد — SiO₂', priority: 2 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف — ΔT', priority: 3 },
        { slug: 'steam-cleaning', context: 'بخار — تعقيم', priority: 4 },
        { slug: 'pest-control', context: 'حشرات — عقارب', priority: 5 },
        { slug: 'marble-polishing', context: 'رخام — SiO₂', priority: 6 },
        { slug: 'villas-cleaning', context: 'فلل — عواصف', priority: 7 },
    ],
};
