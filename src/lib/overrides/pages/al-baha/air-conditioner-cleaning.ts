import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف مكيفات بالباحة — ضباب Aspergillus+عرعر سد فلتر+Heat Pump شتاء — Anti-Fungal! (2026)',
        description: 'تنظيف مكيفات الباحة. ضباب Aspergillus Musty Coil! عرعر يسد فلتر. Heat Pump شتاء 0-5°م. Anti-Fungal+HEPA+تذويب.',
        h1: 'تنظيف مكيفات بالباحة — Aspergillus+عرعر+Heat Pump!',
        keywords: ['تنظيف مكيفات بالباحة', 'تنظيف مكيف بالباحة', 'شركة تنظيف مكيفات بالباحة'],
    },
    content: {
        introduction: 'مكيف الباحة = Aspergillus على المبخّر! Musty Coil Syndrome: 200 يوم ضباب = رطوبة 60-85% ← Aspergillus (عفن أسود) يستعمر المبخّر ← رائحة عفن كلما شغّلت المكيف = Musty Coil. Anti-Fungal Coil إلزامي. عرعر يسد فلتر: حبوب لقاح لزجة تلتصق بالفلتر ← يسد أسرع = أداء يقل 40%! HEPA Filter بديل. تنظيف فلتر شهري بدل ربع سنوي. Heat Pump شتاء 0-5°م: الباحة تصل الصفر شتاءً ← المكيف يعمل Heat Pump تدفئة ← الوحدة الخارجية تتجمد! تنظيف Outdoor Coil+تذويب Defrost إلزامي. مقارنة: بريدة = CaCO₃ Scale على المبخّر+لا عفن+لا Heat Pump = أبسط. الباحة = Aspergillus+عرعر+Heat Pump = أعقد بكثير.',
        shortAnswer: 'على عكس [الغسل العادي بدون Anti-Fungal]، يعتمد بروتوكولنا في خدمة [تنظيف المكيفات] بمدينة [الباحة] على [Anti-Fungal Coil+HEPA+تنظيف Outdoor+تذويب شتاء]. ففي ظل [Aspergillus Musty Coil+عرعر سد فلتر+Heat Pump 0-5°م]، تتفاقم ظاهرة [رائحة عفن+أداء -40%+تجمد]. لذا؛ يتدخل فنيونا عبر [Anti-Fungal ← HEPA ← Outdoor ← Defrost].',
        heroSubtitle: 'Aspergillus Musty Coil + عرعر سد + Heat Pump — Anti-Fungal!',
    },
    pricing: [
        { type: 'تنظيف سبلت + Anti-Fungal', unit: 'مكيف', minPrice: 100, maxPrice: 210, time: '30-60 دقيقة' },
        { type: '+ HEPA Filter تركيب', unit: 'مكيف', minPrice: 130, maxPrice: 270, time: '45-60 دقيقة' },
        { type: 'Heat Pump Outdoor تذويب', unit: 'مكيف', minPrice: 80, maxPrice: 170, time: '30 دقيقة' },
        { type: 'شهري (12 تنظيف)', unit: 'سنة', minPrice: 400, maxPrice: 800, time: '12 زيارة' },
    ],
    faq: [
        { question: 'ليش مكيف الباحة يطلع ريحة عفن؟', answer: 'Aspergillus Musty Coil 200 يوم ضباب. Anti-Fungal Coil يمنع.' },
        { question: 'ليش فلتر المكيف يسد أسرع بالباحة؟', answer: 'عرعر لزج يلتصق بالفلتر. HEPA بديل. تنظيف شهري.' },
        { question: 'ما Heat Pump مشكلة بالباحة؟', answer: 'شتاء 0-5°م = Outdoor Coil يتجمد. تذويب+تنظيف.' },
        { question: 'كم تكلفة مكيف بالباحة مقابل بريدة؟', answer: 'أغلى 40-50% — Anti-Fungal+HEPA+Heat Pump. بريدة: Descaler.' },
        { question: 'كم مرة تنظيف مكيف بالباحة؟', answer: 'شهري! عرعر+Aspergillus. بريدة: ربع سنوي.' },
    ],
    expertTips: [
        'Anti-Fungal Coil — Aspergillus Musty.',
        'HEPA Filter — عرعر لزج.',
        'Outdoor Coil شتاء — Heat Pump.',
        'تذويب Defrost — 0-5°م.',
        'شهري — عرعر+ضباب مستمر.',
    ],
    warnings: [
        'Aspergillus + مكيف × 3 أشهر = Musty Coil ← حساسية YMYL.',
        'عرعر + فلتر عادي × شهر = انسداد 40% ← استهلاك كهرباء.',
        'Heat Pump بدون تذويب = تجمد ← لا تدفئة شتاء 0°م.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص شركات التنظيف' },
        { entity: AMANA.BAHA.entity, url: AMANA.BAHA.url, role: 'اشتراطات أمانة الباحة' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALMISNID.name, quote: 'مكيف الباحة: Aspergillus+عرعر+Heat Pump. Anti-Fungal+HEPA+تذويب.', source: 'جغرافيا المناخ — مكيفات جبلية' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ تنظيف مكيفات مرخص', authority: 'بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'Anti-Fungal Coil', use: 'Aspergillus Musty Coil' },
        { name: 'HEPA Filter', use: 'عرعر — لزج يسد' },
        { name: 'Defrost Kit', use: 'Heat Pump — تذويب شتاء' },
    ],
    hiddenObjections: [
        { fear: 'تنظيف عادي.', solution: 'Aspergillus+عرعر+Heat Pump = 3 تحديات.' },
        { fear: 'مثل بريدة.', solution: 'عفن+عرعر+تجمد ≠ كلس.' },
    ],
    counterNarratives: [
        { myth: 'ربع سنوي.', truth: 'شهري! عرعر+Aspergillus.' },
        { myth: 'لا حاجة شتاء.', truth: 'Heat Pump = تنظيف+تذويب.' },
    ],
    relatedServices: [
        { slug: 'cleaning', context: 'تنظيف', priority: 1 },
        { slug: 'carpet-cleaning', context: 'سجاد', priority: 2 },
        { slug: 'apartments-cleaning', context: 'شقق', priority: 3 },
        { slug: 'villas-cleaning', context: 'فلل', priority: 4 },
        { slug: 'pest-control', context: 'حشرات', priority: 5 },
        { slug: 'marble-polishing', context: 'رخام', priority: 6 },
        { slug: 'glass-facades-cleaning', context: 'واجهات', priority: 7 },
    ],
};
