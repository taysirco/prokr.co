import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف سجاد بالباحة — 200 يوم ضباب عفن+عرعر لزج+Laterite+6-10h تجفيف — Anti-Fungal+Dehumidifier! (2026)',
        description: 'تنظيف سجاد الباحة. 200 يوم ضباب عفن! عرعر لزج. Laterite أحمر. 6-10h تجفيف. Anti-Fungal+Dehumidifier+Oxalic.',
        h1: 'تنظيف سجاد بالباحة — ضباب عفن+عرعر لزج!',
        keywords: ['تنظيف سجاد بالباحة', 'غسيل سجاد الباحة', 'شركة تنظيف سجاد بالباحة'],
    },
    content: {
        introduction: 'سجاد الباحة = عفن داخل الألياف! 200 يوم ضباب عفن: رطوبة 60-85% تتغلغل في ألياف السجاد ← عفن Penicillium بين الألياف أسبوعين! Anti-Fungal Carpet Treatment إلزامي. عرعر لزج: حبوب لقاح تلتصق بألياف السجاد = طبقة لزجة صفراء. Extraction مائي+HEPA. Laterite Fe₂O₃: طين أحمر يدخل بالأحذية ← الإسفنج يُثبّته! Oxalic Acid Pre-Treatment. 6-10h تجفيف: أبطأ مكان بالمملكة! Dehumidifier صناعي إلزامي — بدونه السجاد يتعفّن بعد الغسيل! مقارنة: بريدة = CaCO₃ كلس+Nafud SiO₂+تجفيف 15 دقيقة! الباحة = عفن+عرعر+طين+6-10h = أعقد.',
        shortAnswer: 'على عكس [الغسل دون Dehumidifier+Anti-Fungal]، يعتمد بروتوكولنا في خدمة [تنظيف السجاد] بمدينة [الباحة] على [Oxalic ← Extraction ← Anti-Fungal ← Dehumidifier]. ففي ظل [200 يوم ضباب+عرعر+Laterite+6-10h]، تتفاقم ظاهرة [عفن+لزوجة+طين+بطء]. لذا؛ يتدخل فريقنا عبر [4 ركائز سجاد جبلي].',
        heroSubtitle: '200 يوم ضباب عفن + 6-10h أبطأ تجفيف — Dehumidifier!',
    },
    pricing: [
        { type: 'سجادة صغيرة (2×3م)', unit: 'قطعة', minPrice: 40, maxPrice: 85, time: '30 دقيقة + 6-10h' },
        { type: 'سجادة كبيرة (4×5م)', unit: 'قطعة', minPrice: 80, maxPrice: 170, time: '1h + تجفيف' },
        { type: '+ Dehumidifier', unit: 'خدمة', minPrice: 50, maxPrice: 100, time: 'يُقلّل لـ 3-4h' },
        { type: 'ربع سنوي (4/سنة)', unit: 'سنة', minPrice: 250, maxPrice: 500, time: '4 غسلات' },
    ],
    faq: [
        { question: 'ليش سجاد الباحة يتعفّن بعد الغسيل؟', answer: '6-10h تجفيف + 60-85% = عفن يعود. Dehumidifier يُقلّل لـ 3-4h.' },
        { question: 'ليش المبيّض ممنوع لسجاد الباحة؟', answer: 'Laterite Fe₂O₃ + مبيّض = بقعة حمراء دائمة. Oxalic.' },
        { question: 'ما الطبقة الصفراء على سجاد الباحة؟', answer: 'عرعر لزج. Extraction مائي يُزيل. HEPA يمنع عودة.' },
        { question: 'كم تكلفة سجاد بالباحة مقارنة ببريدة؟', answer: 'أغلى 40-50% — Dehumidifier+Anti-Fungal. بريدة: تجفيف 15 دقيقة!' },
        { question: 'كم مرة تنظيف سجاد بالباحة؟', answer: 'ربع سنوي. رغدان/المندق: شهري ضباب.' },
    ],
    expertTips: [
        'Dehumidifier إلزامي — 6-10h!',
        'Oxalic Pre-Treatment — Laterite.',
        'Anti-Fungal — 200 يوم عفن.',
        'Extraction — عرعر لزج.',
        'HEPA المكيف — عرعر مستمر.',
    ],
    warnings: [
        'غسيل بدون Dehumidifier = سجاد رطب 6-10h = عفن يعود ← صحة YMYL.',
        'مبيّض + Laterite = بقعة حمراء دائمة — Oxalic.',
        '200 يوم ضباب بدون Anti-Fungal = عفن مستمر ← حساسية.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص شركات التنظيف' },
        { entity: AMANA.BAHA.entity, url: AMANA.BAHA.url, role: 'اشتراطات أمانة الباحة' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALMISNID.name, quote: 'سجاد الباحة: 6-10h أبطأ تجفيف. Dehumidifier+Anti-Fungal إلزامي.', source: 'جغرافيا المناخ — سجاد جبلي' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ تنظيف سجاد مرخص', authority: 'بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'Dehumidifier صناعي', use: '6-10h → 3-4h — إلزامي' },
        { name: 'Oxalic Acid', use: 'Laterite Fe₂O₃ — لا مبيّض' },
        { name: 'Anti-Fungal Treatment', use: '200 يوم ضباب — عفن' },
    ],
    hiddenObjections: [
        { fear: 'تجفيف طبيعي.', solution: '6-10h = عفن. Dehumidifier.' },
        { fear: 'مثل بريدة.', solution: '15 دقيقة vs 6-10h!' },
    ],
    counterNarratives: [
        { myth: 'تجفيف شمس.', truth: 'ضباب = لا شمس. Dehumidifier.' },
        { myth: 'نصف سنوي.', truth: 'ربع سنوي. رغدان شهري.' },
    ],
    relatedServices: [
        { slug: 'cleaning', context: 'تنظيف', priority: 1 },
        { slug: 'sofa-cleaning', context: 'كنب', priority: 2 },
        { slug: 'steam-cleaning', context: 'بخار', priority: 3 },
        { slug: 'furniture-cleaning', context: 'أثاث', priority: 4 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 5 },
        { slug: 'pest-control', context: 'حشرات', priority: 6 },
        { slug: 'apartments-cleaning', context: 'شقق', priority: 7 },
    ],
};
