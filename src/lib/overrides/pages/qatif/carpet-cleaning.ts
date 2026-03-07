import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف سجاد بالقطيف — NaCl Stiffening + 80-95% عفن واحي + طين لزج + غبار طلع (2026)',
        description: 'تنظيف سجاد القطيف. NaCl Stiffening. 80-95% عفن واحي قاعدة. طين لزج يلتصق. غبار طلع حساسية. RO + Anti-Fungal + Turbo Dry.',
        h1: 'تنظيف سجاد بالقطيف — ملح يُصلّب وعفن واحي وطين لزج وغبار نخيل',
        keywords: ['تنظيف سجاد القطيف', 'غسيل سجاد بالقطيف', 'شركة تنظيف سجاد بالقطيف'],
    },
    content: {
        introduction: 'السجاد في القطيف يتعرض لتلف ساحلي-واحي رباعي. الأول — NaCl Stiffening: ملح يُصلّب الألياف = هشاشة. RO شطف. الثاني — 80-95% عفن واحي قاعدة: عفن مزدوج (ساحلي+واحي) يصيب القاعدة. Anti-Fungal + Turbo Dry. الثالث — طين لزج: PM10 طيني يلتصق بالألياف (لا ينتشر كـ SiO₂) = صعب الشفط. HEPA + فرك. الرابع — غبار طلع: ألياف نخيل + طلع = حساسية تنفسية. بخار يُحرر. تجفيف: 80-95% = 4-8 ساعات. Turbo + Dehumidifier.',
        shortAnswer: 'على عكس [شامبو] فوق NaCl+طين، يعتمد بروتوكولنا في خدمة [تنظيف السجاد] بمدينة [القطيف] على [RO + Enzymatic + Anti-Fungal + Turbo]. ففي ظل [NaCl + 80-95% + طين + طلع]، تتفاقم ظاهرة [تصلب + عفن + التصاق + حساسية]. لذا؛ يتدخل خبراؤنا عبر [بروتوكول سجاد ساحلي-واحي].',
        heroSubtitle: 'NaCl تصلب + عفن واحي + طين لزج + غبار طلع + 4-8 ساعات تجفيف',
    },
    pricing: [
        { type: 'سجادة (2×3 م)', unit: 'سجادة', minPrice: 55, maxPrice: 105, time: '30-45 دقيقة' },
        { type: 'موكيت غرفة (20 م²)', unit: 'غرفة', minPrice: 115, maxPrice: 230, time: '2-3 ساعات' },
        { type: 'شقة + Turbo Dry', unit: 'شقة', minPrice: 240, maxPrice: 480, time: '4-6 ساعات' },
        { type: 'ربع سنوي', unit: 'سنة', minPrice: 570, maxPrice: 1140, time: '4 زيارات' },
    ],
    faq: [
        { question: 'طين — مختلف عن الظهران SiO₂؟', answer: 'مختلف تماماً — SiO₂ يخدش ألياف (7 Mohs). طين يلتصق (لزج). مشكلة التصاق ≠ قطع. HEPA + فرك.' },
        { question: 'عفن واحي — من أين؟', answer: 'عيون+ينابيع = رطوبة أرضية ← تصعد ← تصل قاعدة السجاد من الأسفل. عفن مزدوج (أعلى+أسفل).' },
        { question: 'غبار طلع — حساسية؟', answer: 'ملايين نخلة. موسم التلقيح = غبار طلع في كل سجادة. بخار 130°م يُحرر + يقتل.' },
        { question: 'تجفيف — 4-8 ساعات؟', answer: '80-95% = أبطأ من الرياض (1-2). أسرع من الجبيل (6-10). Turbo + Dehumidifier.' },
    ],
    expertTips: [
        'RO أولاً — NaCl قبل الفرك.',
        'HEPA + فرك طين — لزج يلتصق.',
        'Anti-Fungal قبل تجفيف — عفن واحي.',
        'بخار يُحرر طلع — حساسية.',
        'Turbo + Dehumidifier — 80-95%.',
    ],
    warnings: [
        'NaCl + طين + فرك بدون RO = خدش ملحي-طيني.',
        '80-95% + عفن واحي = قاعدة تالفة 3-6 أشهر.',
        'غبار طلع × موسم = حساسية شديدة.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص التنظيف' },
        { entity: AMANA.SHARQIA.entity, url: AMANA.SHARQIA.url, role: 'اشتراطات النظافة بالشرقية' },
    ],
    expertReviewer: EXPERTS.ALMOHAIMED,
    expertCitations: [
        { expert: EXPERTS.ALMOHAIMED.name, quote: 'سجاد القطيف: NaCl تصلب + عفن واحي مزدوج + طين لزج + غبار طلع. RO + Anti-Fungal + Turbo. ساحلي-واحي فريد.', source: 'نصائح هندسية — سجاد الواحات الساحلية' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ تنظيف سجاد مرخص', authority: 'منصة بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'RO Rinse', use: 'NaCl — يُزيل قبل الفرك' },
        { name: 'HEPA + فرك', use: 'طين لزج — يلتصق' },
        { name: 'Anti-Fungal مزدوج', use: 'واحي+ساحلي — أعلى+أسفل' },
        { name: 'Turbo + Dehumidifier', use: '80-95% — 4-8 ساعات' },
    ],
    hiddenObjections: [
        { fear: 'مثل الخبر.', solution: 'واحة = تربة طينية + نخيل + عفن واحي. مختلف.' },
        { fear: 'شامبو.', solution: 'NaCl+طين = ينزلق. RO+HEPA.' },
    ],
    counterNarratives: [
        { myth: 'ساحلي فقط.', truth: 'واحي = طين+نخيل+عيون. ثنائي.' },
        { myth: 'يجف طبيعي.', truth: '80-95%. Turbo.' },
    ],
    relatedServices: [
        { slug: 'sofa-cleaning', context: 'كنب — NaCl+طلع', priority: 1 },
        { slug: 'steam-cleaning', context: 'بخار — طلع', priority: 2 },
        { slug: 'cleaning', context: 'تنظيف', priority: 3 },
        { slug: 'councils-cleaning', context: 'مجالس', priority: 4 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 5 },
        { slug: 'pest-control', context: 'حشرات', priority: 6 },
        { slug: 'marble-polishing', context: 'رخام', priority: 7 },
    ],
};
