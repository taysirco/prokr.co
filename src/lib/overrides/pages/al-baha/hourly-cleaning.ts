import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف بالساعة بالباحة — 200 يوم ضباب+عرعر+Laterite+6-10h — 4 ركائز جبلية! (2026)',
        description: 'تنظيف بالساعة الباحة. 200 يوم ضباب! عرعر لزج. Laterite Fe₂O₃. 6-10h تجفيف. 4 ركائز+Dehumidifier.',
        h1: 'تنظيف بالساعة بالباحة — 4 ركائز جبلية!',
        keywords: ['تنظيف بالساعة بالباحة', 'تنظيف ساعة الباحة', 'خدمة تنظيف بالساعة بالباحة'],
    },
    content: {
        introduction: 'تنظيف بالساعة بالباحة = 4 ركائز حتى بالساعة! 200 يوم ضباب: كل عاملة ساعية يجب أن تعرف: (1) Oxalic لـ Laterite Fe₂O₃ — المبيّض ممنوع! (2) HEPA AC لعرعر لزج. (3) Anti-Fungal لعفن الضباب. (4) Dehumidifier بعد أي غسيل رطب. العاملة الساعية بالباحة: تحتاج تدريب 4 ركائز — عاملة بدون تدريب تستخدم مبيّض = كارثة Laterite! 6-10h تجفيف: حتى المسح بالماء يحتاج وقت. Dehumidifier متوفر. مقارنة: بريدة = تدريب مختلف (CaCO₃+SiO₂). الباحة = Laterite+عرعر = تدريب فريد.',
        shortAnswer: 'على عكس [العاملة بدون تدريب جبلي]، يعتمد بروتوكولنا في خدمة [التنظيف بالساعة] بمدينة [الباحة] على [4 ركائز: Oxalic+HEPA+Anti-Fungal+Dehumidifier]. ففي ظل [Laterite+عرعر+ضباب+6-10h]، تتفاقم ظاهرة [بقع+لزوجة+عفن+بطء]. لذا؛ يتدخل فريقنا بـ [عاملة مُدرّبة 4 ركائز جبلية].',
        heroSubtitle: 'عاملة ساعية مُدرّبة 4 ركائز جبلية — لا مبيّض!',
    },
    pricing: [
        { type: 'ساعة واحدة', unit: 'ساعة', minPrice: 30, maxPrice: 60, time: '1h' },
        { type: '3 ساعات', unit: 'جلسة', minPrice: 80, maxPrice: 170, time: '3h' },
        { type: '6 ساعات', unit: 'جلسة', minPrice: 150, maxPrice: 310, time: '6h' },
        { type: 'أسبوعي (4/شهر)', unit: 'شهر', minPrice: 250, maxPrice: 520, time: '4 زيارات' },
    ],
    faq: [
        { question: 'ليش العاملة بالباحة تحتاج تدريب خاص؟', answer: '4 ركائز: Oxalic+HEPA+Anti-Fungal+Dehumidifier. مبيّض ممنوع!' },
        { question: 'ليش المبيّض ممنوع للعاملة بالباحة؟', answer: 'Laterite Fe₂O₃ + مبيّض = بقعة حمراء. Oxalic فقط.' },
        { question: 'كم تكلفة ساعية بالباحة مقابل بريدة؟', answer: 'أغلى 20-25% — تدريب 4 ركائز.' },
        { question: 'هل العاملة تجلب Dehumidifier؟', answer: 'نعم! 6-10h بدونه = عفن بعد المسح.' },
        { question: 'كم مرة ساعية بالباحة؟', answer: 'أسبوعي. ضباب+عرعر مستمر.' },
    ],
    expertTips: [
        'تدريب 4 ركائز — إلزامي.',
        'Oxalic فقط — لا مبيّض!',
        'HEPA AC — عرعر.',
        'Anti-Fungal — ضباب عفن.',
        'Dehumidifier — 6-10h.',
    ],
    warnings: [
        'عاملة غير مُدرّبة + مبيّض = Laterite بقعة — كارثة.',
        'مسح رطب بدون Dehumidifier = 6-10h = عفن.',
        'عرعر بدون HEPA = لزج يتراكم.',
    ],
    trustAnchors: [
        { ...GOV.HRSD, role: 'ترخيص العمالة الساعية' },
        { ...GOV.BALADI, role: 'ترخيص شركات التنظيف' },
        { entity: AMANA.BAHA.entity, url: AMANA.BAHA.url, role: 'اشتراطات أمانة الباحة' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALMISNID.name, quote: 'ساعية الباحة: تدريب 4 ركائز إلزامي. لا مبيّض!', source: 'جغرافيا المناخ — ساعية جبلية' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ عمالة ساعية مرخصة', authority: 'HRSD + بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'Oxalic Acid', use: 'Laterite — لا مبيّض' },
        { name: 'Dehumidifier محمول', use: '6-10h — تجفيف' },
        { name: 'Anti-Fungal', use: '200 يوم ضباب — عفن' },
    ],
    hiddenObjections: [
        { fear: 'ساعية عادية.', solution: '4 ركائز = تدريب خاص.' },
        { fear: 'مثل بريدة.', solution: 'Laterite+عرعر ≠ كلس.' },
    ],
    counterNarratives: [
        { myth: 'أي عاملة.', truth: 'مُدرّبة 4 ركائز.' },
        { myth: 'مبيّض ينظّف.', truth: 'يُثبّت Laterite = كارثة.' },
    ],
    relatedServices: [
        { slug: 'cleaning', context: 'تنظيف', priority: 1 },
        { slug: 'apartments-cleaning', context: 'شقق', priority: 2 },
        { slug: 'carpet-cleaning', context: 'سجاد', priority: 3 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 4 },
        { slug: 'pest-control', context: 'حشرات', priority: 5 },
        { slug: 'office-cleaning', context: 'مكاتب', priority: 6 },
        { slug: 'villas-cleaning', context: 'فلل', priority: 7 },
    ],
};
