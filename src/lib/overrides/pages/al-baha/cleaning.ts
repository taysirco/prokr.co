import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف منازل بالباحة — 200 يوم ضباب+عرعر+Laterite Fe₂O₃+عفن — Oxalic+HEPA+Anti-Fungal! (2026)',
        description: 'تنظيف منازل الباحة. 200 يوم ضباب! عرعر لزج. Laterite Fe₂O₃ أحمر. عفن Penicillium. Oxalic+HEPA+Anti-Fungal+بخار.',
        h1: 'تنظيف منازل بالباحة — ضباب+عرعر+طين أحمر+عفن!',
        keywords: ['تنظيف منازل بالباحة', 'تنظيف بيوت الباحة', 'شركة تنظيف منازل بالباحة'],
    },
    content: {
        introduction: 'منزل الباحة = 4 تحديات جبلية فريدة! 200 يوم ضباب: الباحة الأكثر ضباباً بالمملكة — رطوبة 60-85% = عفن Penicillium+Aspergillus في كل زاوية خلال أسبوعين! Anti-Fungal إلزامي + Dehumidifier. عرعر لزج: غابة العرعر (2200م+) ترسل حبوب لقاح صفراء لزجة تلتصق بالرطوبة ← تتحول لطبقة لزجة على كل سطح. HEPA يمتص. Laterite Fe₂O₃: طين بازلتي أحمر (أكسيد الحديد) — المبيّض يُثبّته بقعة دائمة! Oxalic Acid فقط. بخار 130°م: عث الرطوبة يتكاثر بالضباب. بخار يقتل. 4 ركائز: Oxalic → HEPA → Anti-Fungal → بخار. مقارنة: بريدة = CaCO₃+Nafud+جاف 10-20% = لا عفن! ضبّ الباحة = عفن+عرعر+طين = أعقد بكثير.',
        shortAnswer: 'على عكس [المنظف العادي+المبيّض]، يعتمد بروتوكولنا في خدمة [تنظيف المنازل] بمدينة [الباحة] على [Oxalic ← HEPA ← Anti-Fungal ← بخار 130°م]. ففي ظل [200 يوم ضباب+عرعر لزج+Laterite Fe₂O₃+60-85% عفن]، تتفاقم ظاهرة [عفن+لقاح+طين+عث]. لذا؛ يتدخل فريقنا عبر [4 ركائز جبلية] — ربع سنوي+بعد ضباب!',
        heroSubtitle: '200 يوم ضباب + عرعر لزج + Laterite أحمر — 4 ركائز جبلية!',
    },
    pricing: [
        { type: 'شقة جبلية', unit: 'شقة', minPrice: 200, maxPrice: 420, time: '3-5h' },
        { type: 'بعد موسم ضباب — عميق', unit: 'شقة', minPrice: 300, maxPrice: 620, time: '4-6h' },
        { type: 'فيلا جبلية', unit: 'فيلا', minPrice: 400, maxPrice: 800, time: '5-8h' },
        { type: 'ربع سنوي (4/سنة + ضباب)', unit: 'سنة', minPrice: 600, maxPrice: 1200, time: '5 زيارات' },
    ],
    faq: [
        { question: 'ليش الباحة أصعب تنظيف من بريدة؟', answer: '200 يوم ضباب = عفن+عرعر+طين. بريدة: جاف 10-20% = لا عفن!' },
        { question: 'ليش المبيّض ممنوع بالباحة؟', answer: 'Laterite Fe₂O₃ + مبيّض = بقعة حمراء دائمة! Oxalic Acid فقط.' },
        { question: 'كم تكلفة تنظيف بالباحة مقارنة ببريدة؟', answer: 'أغلى 30-40% — 4 ركائز+Dehumidifier. بريدة: 4 ركائز مختلفة.' },
        { question: 'ما عرعر اللزج بالباحة؟', answer: 'حبوب لقاح صفراء من غابة 2200م+. تلتصق بالضباب = طبقة لزجة. HEPA.' },
        { question: 'كم مرة تنظيف بالباحة؟', answer: 'ربع سنوي (4) + عميق بعد الضباب (أكتوبر) = 5. رغدان/المندق: شهري ضباب.' },
    ],
    expertTips: [
        'Oxalic أولاً — Laterite. لا مبيّض!',
        'HEPA ثانياً — عرعر لزج.',
        'Anti-Fungal — 200 يوم ضباب عفن.',
        'بخار 130°م — عث الرطوبة.',
        'Dehumidifier — 60-85% تجفيف 6-10h.',
    ],
    warnings: [
        'مبيّض + Laterite Fe₂O₃ = بقعة حمراء دائمة — Oxalic فقط.',
        '200 يوم ضباب بدون Anti-Fungal = عفن Penicillium ← صحة YMYL.',
        'عرعر + ضباب × شهر = طبقة لزجة ← حساسية YMYL.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص شركات التنظيف' },
        { entity: AMANA.BAHA.entity, url: AMANA.BAHA.url, role: 'اشتراطات أمانة الباحة' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALMISNID.name, quote: 'الباحة: 4 ركائز جبلية. Oxalic+HEPA+Anti-Fungal+بخار. 200 يوم ضباب.', source: 'جغرافيا المناخ — تنظيف جبلي' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ تنظيف مرخص', authority: 'بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'Oxalic Acid', use: 'Laterite Fe₂O₃ — لا مبيّض' },
        { name: 'HEPA Filter', use: 'عرعر لزج — حبوب لقاح' },
        { name: 'Anti-Fungal', use: '200 يوم ضباب — عفن' },
    ],
    hiddenObjections: [
        { fear: 'منظف عادي.', solution: 'Laterite+عرعر+عفن = 4 ركائز.' },
        { fear: 'مثل بريدة.', solution: 'ضباب+عرعر+طين ≠ كلس+Nafud.' },
    ],
    counterNarratives: [
        { myth: 'الباحة نظيفة.', truth: '200 يوم ضباب. 3 مصادر مختلفة.' },
        { myth: 'مبيّض يُنظّف.', truth: 'يُثبّت Laterite. Oxalic فقط.' },
    ],
    relatedServices: [
        { slug: 'apartments-cleaning', context: 'شقق', priority: 1 },
        { slug: 'carpet-cleaning', context: 'سجاد', priority: 2 },
        { slug: 'steam-cleaning', context: 'بخار', priority: 3 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 4 },
        { slug: 'pest-control', context: 'حشرات', priority: 5 },
        { slug: 'marble-polishing', context: 'رخام', priority: 6 },
        { slug: 'villas-cleaning', context: 'فلل', priority: 7 },
    ],
};
