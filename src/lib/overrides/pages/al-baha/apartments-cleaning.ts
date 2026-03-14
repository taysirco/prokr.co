import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف شقق بالباحة — 200 يوم ضباب+عرعر لزج+Laterite أحمر+عفن — Oxalic+HEPA! (2026)',
        description: 'تنظيف شقق الباحة. 200 يوم ضباب! عرعر لزج. Laterite Fe₂O₃. عفن أسبوعين. Oxalic+HEPA+Anti-Fungal+Dehumidifier.',
        h1: 'تنظيف شقق بالباحة — ضباب+عرعر+طين أحمر!',
        keywords: ['تنظيف شقق بالباحة', 'تنظيف شقة بالباحة', 'شركة تنظيف شقق بالباحة'],
    },
    content: {
        introduction: 'شقة الباحة = ضباب يدخل من النوافذ! 200 يوم ضباب: رطوبة 60-85% تتسلل داخل الشقة ← عفن Penicillium في زوايا الحمام والمطبخ أسبوعين! Anti-Fungal أسبوعي. عرعر لزج: حبوب لقاح صفراء من الغابة تدخل مع الضباب ← تلتصق بالأثاث والأسطح = طبقة لزجة صفراء. HEPA AC+مسح Microfiber. Laterite Fe₂O₃: طين بازلتي أحمر يدخل بالأحذية ← المبيّض يُثبّته! Oxalic Acid فقط. تجفيف 6-10h: أبطأ تجفيف بالمملكة! Dehumidifier إلزامي. مقارنة: بريدة = جاف 10-20% تجفيف 15 دقيقة+لا عفن+لا عرعر. الباحة = ضباب+عرعر+طين = أعقد.',
        shortAnswer: 'على عكس [المنظف العادي+المبيّض]، يعتمد بروتوكولنا في خدمة [تنظيف الشقق] بمدينة [الباحة] على [Oxalic ← HEPA ← Anti-Fungal ← Dehumidifier]. ففي ظل [200 يوم ضباب+عرعر لزج+Laterite+60-85% عفن]، تتفاقم ظاهرة [عفن+لقاح+طين+بطء تجفيف]. لذا؛ يتدخل فريقنا عبر [4 ركائز جبلية] — ربع سنوي+ضباب!',
        heroSubtitle: '200 يوم ضباب + عرعر + Laterite — 4 ركائز جبلية!',
    },
    pricing: [
        { type: 'شقة غرفتين', unit: 'شقة', minPrice: 150, maxPrice: 310, time: '2-4h + 6-10h تجفيف' },
        { type: 'شقة 3-4 غرف', unit: 'شقة', minPrice: 250, maxPrice: 520, time: '4-6h + تجفيف' },
        { type: 'بعد موسم ضباب — عميق', unit: 'شقة', minPrice: 300, maxPrice: 620, time: '5-7h' },
        { type: 'ربع سنوي (4+ضباب)', unit: 'سنة', minPrice: 500, maxPrice: 1000, time: '5 زيارات' },
    ],
    faq: [
        { question: 'ليش شقة الباحة تتعفّن أسرع بكثير؟', answer: '200 يوم ضباب = 60-85% = عفن أسبوعين. بريدة: 10-20% = لا عفن.' },
        { question: 'ليش المبيّض ممنوع بالباحة؟', answer: 'Laterite Fe₂O₃ + مبيّض = بقعة حمراء دائمة! Oxalic Acid فقط.' },
        { question: 'كم تجفيف شقة بالباحة؟', answer: '6-10 ساعات! أبطأ بالمملكة. Dehumidifier يُقلّل لـ 3-4h.' },
        { question: 'ما الطبقة الصفراء اللزجة بالباحة؟', answer: 'عرعر: حبوب لقاح + ضباب = لزجة. HEPA+Microfiber.' },
        { question: 'كم تكلفة شقة بالباحة مقارنة ببريدة؟', answer: 'أغلى 30-40% — Anti-Fungal+Dehumidifier+Oxalic.' },
    ],
    expertTips: [
        'Oxalic أولاً — Laterite. لا مبيّض!',
        'HEPA AC — عرعر لزج ضبابي.',
        'Anti-Fungal أسبوعي — 200 يوم ضباب.',
        'Dehumidifier — 6-10h تجفيف.',
        'بخار 130°م — عث الرطوبة.',
    ],
    warnings: [
        'مبيّض + Laterite = بقعة حمراء دائمة — Oxalic فقط.',
        '200 يوم ضباب بدون Anti-Fungal = عفن ← صحة YMYL.',
        'تجفيف بدون Dehumidifier = 6-10h = عفن يعود.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص شركات التنظيف' },
        { entity: AMANA.BAHA.entity, url: AMANA.BAHA.url, role: 'اشتراطات أمانة الباحة' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALMISNID.name, quote: 'شقة الباحة: 200 يوم ضباب. Oxalic+HEPA+Anti-Fungal. أبطأ تجفيف بالمملكة.', source: 'جغرافيا المناخ — شقق جبلية' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ تنظيف مرخص', authority: 'بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'Oxalic Acid', use: 'Laterite Fe₂O₃ — لا مبيّض' },
        { name: 'HEPA Filter', use: 'عرعر لزج — ضبابي' },
        { name: 'Dehumidifier', use: '6-10h — أبطأ تجفيف' },
    ],
    hiddenObjections: [
        { fear: 'منظف عادي.', solution: 'Laterite+عرعر+عفن = 4 ركائز.' },
        { fear: 'مثل بريدة.', solution: 'ضباب+عرعر ≠ كلس+Nafud.' },
    ],
    consumerEducation: [
        { myth: 'تجفيف سريع.', truth: '6-10h! Dehumidifier إلزامي.' },
        { myth: 'مبيّض يُنظّف.', truth: 'يُثبّت Laterite. Oxalic.' },
    ],
    relatedServices: [
        { slug: 'cleaning', context: 'تنظيف', priority: 1 },
        { slug: 'carpet-cleaning', context: 'سجاد', priority: 2 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 3 },
        { slug: 'steam-cleaning', context: 'بخار', priority: 4 },
        { slug: 'pest-control', context: 'حشرات', priority: 5 },
        { slug: 'marble-polishing', context: 'رخام', priority: 6 },
        { slug: 'villas-cleaning', context: 'فلل', priority: 7 },
    ],
};
