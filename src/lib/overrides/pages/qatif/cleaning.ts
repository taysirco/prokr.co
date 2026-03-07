import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف منازل بالقطيف — بروتوكول ساحلي-واحي: RO + Anti-Fungal مزدوج + طين + نخيل (2026)',
        description: 'تنظيف منازل القطيف. NaCl+واحي. 80-95% عفن مزدوج. تربة طينية. نخيل ألياف. عيون رطوبة. RO ← Microfiber ← Anti-Fungal مزدوج ← Dehumidifier.',
        h1: 'تنظيف منازل بالقطيف — بروتوكول ساحلي-واحي: ملح وعيون وطين ونخيل',
        keywords: ['تنظيف منازل القطيف', 'تنظيف بيت بالقطيف', 'شركة تنظيف منازل بالقطيف'],
    },
    content: {
        introduction: 'منزل القطيف يتسخ بطريقة ساحلية-واحية فريدة. الخطوة 1 — RO شطف: NaCl + طين = طبقة لزجة ملحية. RO يُزيل. الخطوة 2 — Microfiber: طين لزج يلتصق. Microfiber رطب يرفع. الخطوة 3 — Anti-Fungal مزدوج: عفن ساحلي (Aspergillus من أعلى) + عفن واحي (Penicillium من أسفل/عيون) = مزدوج. Anti-Fungal أعلى+أسفل. الخطوة 4 — HEPA نخيل: غبار طلع + ألياف = حساسية. HEPA. الخطوة 5 — Dehumidifier: 80-95% + عيون قريبة = تكثّف. Dehumidifier. القطيف vs الجبيل: لا VOC ولا سخام SABIC = أبسط. لكن: واحة (طين+نخيل+عيون+عفن واحي) = فريد.',
        shortAnswer: 'على عكس [ممسحة] فوق NaCl+طين، يعتمد بروتوكولنا في خدمة [تنظيف المنازل] بمدينة [القطيف] على [RO ← Microfiber ← Anti-Fungal مزدوج ← HEPA ← Dehumidifier]. ففي ظل [NaCl + 80-95% + طين + نخيل + عيون]، تتفاقم ظاهرة [لزوجة + عفن مزدوج + طلع + تكثّف]. لذا؛ يتدخل خبراؤنا عبر [بروتوكول ساحلي-واحي].',
        heroSubtitle: 'RO ← Anti-Fungal مزدوج ← HEPA نخيل ← Dehumidifier عيون',
    },
    pricing: [
        { type: 'شقة — ساحلي-واحي', unit: 'شقة', minPrice: 190, maxPrice: 380, time: '3-5 ساعات' },
        { type: 'بيت/فيلا', unit: 'بيت', minPrice: 340, maxPrice: 680, time: '5-8 ساعات' },
        { type: 'بيت تاريخي (شقوق+عفن واحي)', unit: 'بيت', minPrice: 400, maxPrice: 800, time: '6-10 ساعات' },
        { type: 'عقد أسبوعي', unit: 'شهر', minPrice: 330, maxPrice: 660, time: '4 زيارات' },
    ],
    faq: [
        { question: 'عفن مزدوج — ماذا يعني؟', answer: 'ساحلي = عفن من أعلى (رذاذ+تكثّف). واحي = عفن من أسفل (عيون+رطوبة أرضية تصعد). مزدوج = Anti-Fungal أعلى+أسفل.' },
        { question: 'مقابل الخبر — فرق؟', answer: 'الخبر: ساحلي فقط. القطيف: ساحلي+واحي (عيون+نخيل+طين). عفن واحي إضافي.' },
        { question: 'مقابل الجبيل — أبسط؟', answer: 'لا VOC ولا سخام SABIC. لكن: واحة فريدة.' },
        { question: 'بيت تاريخي — أغلى؟', answer: 'شقوق+حجر قديم+عفن واحي عميق. أغلى 20-30%.' },
    ],
    expertTips: [
        'RO أولاً — NaCl+طين.',
        'Anti-Fungal مزدوج — أعلى+أسفل.',
        'HEPA نخيل — غبار طلع.',
        'Dehumidifier — عيون قريبة.',
        'فحص جدران سفلية — صعود رطوبة.',
    ],
    warnings: [
        'عفن واحي = يعيش في الجدار السفلي = تلف إنشائي.',
        'NaCl+طين بدون RO = طبقة لا تُزال.',
        'غبار طلع × موسم = حساسية.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص التنظيف' },
        { entity: AMANA.SHARQIA.entity, url: AMANA.SHARQIA.url, role: 'اشتراطات النظافة بالشرقية' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALMISNID.name, quote: 'منزل القطيف: NaCl+واحي عفن مزدوج + تربة طينية + نخيل + عيون. ساحلي-واحي فريد. Anti-Fungal مزدوج أعلى+أسفل.', source: 'جغرافيا المناخ — تنظيف الواحات الساحلية' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [
        { badge: '✔️ تنظيف مرخص', authority: 'منصة بلدي', icon: 'shield-check' },
        { badge: '✔️ بروتوكول ساحلي-واحي', authority: 'معتمد داخلياً', icon: 'badge-check' },
    ],
    equipment: [
        { name: 'RO Rinse', use: 'NaCl+طين — الخطوة 1' },
        { name: 'Microfiber رطب', use: 'طين لزج — الخطوة 2' },
        { name: 'Anti-Fungal مزدوج', use: 'واحي+ساحلي — الخطوة 3' },
        { name: 'HEPA', use: 'نخيل طلع — الخطوة 4' },
        { name: 'Dehumidifier', use: 'عيون — الخطوة 5' },
    ],
    hiddenObjections: [
        { fear: 'مثل الخبر.', solution: 'واحة = عفن واحي+طين+نخيل+عيون. مختلف.' },
        { fear: 'منظف عادي.', solution: 'NaCl+طين = ينزلق. RO+Microfiber.' },
    ],
    counterNarratives: [
        { myth: 'ساحلي فقط.', truth: 'واحي = طين+نخيل+عيون. ثنائي.' },
        { myth: 'شهري.', truth: 'عفن أسبوعي+NaCl يومي. أسبوعي.' },
    ],
    relatedServices: [
        { slug: 'apartments-cleaning', context: 'شقق', priority: 1 },
        { slug: 'carpet-cleaning', context: 'سجاد', priority: 2 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 3 },
        { slug: 'steam-cleaning', context: 'بخار', priority: 4 },
        { slug: 'pest-control', context: 'حشرات', priority: 5 },
        { slug: 'marble-polishing', context: 'رخام', priority: 6 },
        { slug: 'villas-cleaning', context: 'فلل', priority: 7 },
    ],
};
