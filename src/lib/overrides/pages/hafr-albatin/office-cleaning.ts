import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف مكاتب بحفر الباطن — SiO₂ PM10 مهني + ΔT 54°م أجهزة + كهرباء ساكنة (2026)',
        description: 'تنظيف مكاتب حفر الباطن. SiO₂ PM10 × 8 ساعات. ΔT 54°م Fatigue أجهزة. 10-15% كهرباء ساكنة. لا عفن مكتبي (ميزة!). HEPA + Anti-Static.',
        h1: 'تنظيف مكاتب بحفر الباطن — رمل مهني 8 ساعات وكهرباء ساكنة',
        keywords: ['تنظيف مكاتب حفر الباطن', 'تنظيف مكتب حفر الباطن', 'شركة تنظيف مكاتب حفر الباطن'],
    },
    content: {
        introduction: 'المكتب في حفر الباطن يواجه 3 تحديات قارية + ميزة. الأولى — SiO₂ PM10 مهني: 8 ساعات/يوم × SiO₂ < 10 ميكرون ← خطر تنفسي مهني. HEPA في كل غرفة. الثانية — كهرباء ساكنة: 10-15% + SiO₂ + إلكترونيات = SiO₂ يلتصق بالشاشات + لوحات المفاتيح بشحنة. + 7 Mohs يخدش الشاشات. Anti-Static + Microfiber ناعم جاف. الثالثة — ΔT 54°م: مكيف مكتبي يعمل Max ← كمبيوتر يسخن ← -2°م شتاء = Thermal Cycling أجهزة. الميزة — لا عفن مكتبي!: 10-15% = لا Aspergillus. لا Anti-Fungal. أنظف مكتب في المملكة بيئياً.',
        shortAnswer: 'على عكس [عاملة مبنى] بممسحة عادية، يعتمد بروتوكولنا في خدمة [تنظيف المكاتب] بمدينة [حفر الباطن] على [HEPA + Anti-Static + Microfiber جاف]. ففي ظل [SiO₂ PM10 + 10-15% + ΔT]، تتفاقم ظاهرة [تنفسي + كهرباء + Cycling]. لذا؛ يتدخل خبراؤنا عبر [بروتوكول مكتب قاري].',
        heroSubtitle: 'SiO₂ PM10 8 ساعات + كهرباء ساكنة + ΔT 54°م + لا عفن',
    },
    pricing: [
        { type: 'مكتب صغير (50 م²)', unit: 'خدمة', minPrice: 120, maxPrice: 240, time: '1-2 ساعة' },
        { type: 'مكتب كبير (100+ م²)', unit: 'خدمة', minPrice: 240, maxPrice: 470, time: '2-4 ساعات' },
        { type: 'عقد أسبوعي', unit: 'شهر', minPrice: 370, maxPrice: 730, time: '4 زيارات' },
    ],
    faq: [
        { question: 'PM10 — خطر حقيقي؟', answer: 'SiO₂ < 10 ميكرون × 8 ساعات/يوم × 5 أيام/أسبوع = تراكمي. HEPA = 99.97% حجز.' },
        { question: 'لا عفن — ميزة كبيرة للمكتب؟', answer: 'كبيرة — لا Sick Building Syndrome بسبب عفن. 10-15% = أنظف هواء.' },
        { question: 'كهرباء ساكنة — على الإلكترونيات؟', answer: 'SiO₂ يلتصق بشاشة + يخدش (7>5.5) + يدخل منافذ USB/لوحة. Anti-Static = يُفرّغ. Microfiber جاف = يمسح.' },
        { question: 'Thermal Cycling — أجهزة؟', answer: 'ΔT 54°م = كمبيوتر يسخن صيفاً ← يبرد شتاءً. Hard Drive يتأثر. UPS + تبريد.' },
        { question: 'أسبوعي — ليش؟', answer: 'PM10 يومي + كهرباء ساكنة + عواصف 2-4/شهر. أسبوعي = الحد.' },
    ],
    expertTips: [
        'HEPA في كل غرفة — PM10 × 8 ساعات = مهني.',
        'Anti-Static على شاشات + إلكترونيات — كهرباء ساكنة.',
        'Microfiber ناعم جاف — لا قماش + لا ماء على إلكترونيات.',
        'لا Anti-Fungal — توفير! 10-15% = لا عفن.',
        'فلتر مكيف المكتب شهري — SiO₂ يسده أسرع.',
    ],
    warnings: [
        'SiO₂ PM10 × 8 ساعات/يوم = خطر تنفسي مهني. HEPA = حماية.',
        'كهرباء ساكنة + SiO₂ 7 Mohs = يخدش شاشات = يتلف إلكترونيات.',
        'ΔT 54°م + مكيف Max = كمبريسور + أجهزة.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص تنظيف تجاري' },
        { entity: AMANA.HAFR.entity, url: AMANA.HAFR.url, role: 'اشتراطات المكاتب بحفر الباطن' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALJUND.name, quote: 'مكتب حفر الباطن: SiO₂ PM10 مهني + كهرباء ساكنة + ΔT. لا عفن (ميزة!). HEPA + Anti-Static + Microfiber.', source: 'موسوعة أخطاء — مكاتب قارية' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ تنظيف مكاتب مرخص', authority: 'منصة بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'HEPA Filter', use: 'PM10 — 99.97%' },
        { name: 'Anti-Static Spray', use: 'كهرباء ساكنة — إلكترونيات' },
        { name: 'Microfiber ناعم جاف', use: 'شاشات — بلا خدش' },
    ],
    hiddenObjections: [
        { fear: 'لا عفن = سهل.', solution: 'PM10 + كهرباء ساكنة + ΔT. 3 تحديات قارية.' },
        { fear: 'عاملة المبنى.', solution: 'بدون HEPA + بدون Anti-Static = 2 خطأ.' },
    ],
    counterNarratives: [
        { myth: 'مثل الرياض.', truth: 'ΔT 54°م > 35°م. SiO₂ أكثف. كهرباء ساكنة أعلى.' },
        { myth: 'مكيف يكفي.', truth: 'فلتر مكيف لا يحجز PM10 كـ HEPA. + المكيف نفسه SiO₂ فيه.' },
        { myth: 'شهري.', truth: 'PM10 يومي + عواصف. أسبوعي.' },
    ],
    relatedServices: [
        { slug: 'cleaning', context: 'تنظيف — SiO₂', priority: 1 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف — ΔT', priority: 2 },
        { slug: 'carpet-cleaning', context: 'موكيت — SiO₂', priority: 3 },
        { slug: 'glass-facades-cleaning', context: 'واجهات', priority: 4 },
        { slug: 'pest-control', context: 'حشرات', priority: 5 },
        { slug: 'steam-cleaning', context: 'بخار', priority: 6 },
        { slug: 'hourly-cleaning', context: 'بالساعة', priority: 7 },
    ],
};
