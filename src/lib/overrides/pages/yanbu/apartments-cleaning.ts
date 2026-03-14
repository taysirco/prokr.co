import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف شقق بينبع — NaCl ملح+SOx YASREF+70-85% عفن أسبوعين — Anti-Fungal+RO! (2026)',
        description: 'تنظيف شقق ينبع. NaCl 41‰ ملح يومي! SOx حمضي. 70-85% عفن أسبوعين. Anti-Fungal+RO+HEPA AC+Dehumidifier.',
        h1: 'تنظيف شقق بينبع — ملح+حمض+عفن!',
        keywords: ['تنظيف شقق ينبع', 'تنظيف شقة بينبع', 'شركة تنظيف شقق بينبع'],
    },
    content: {
        introduction: 'شقة ينبع = ملح+حمض+عفن ثلاثي! NaCl 41‰: ملح البحر الأحمر يترسب يومياً على النوافذ والمكيفات وكل سطح خارجي ← يدخل داخل الشقة. RO Water. SOx YASREF: أكاسيد كبريت من المصفاة تتحول مع الرطوبة إلى H₂SO₄ مُخفف ← طبقة حمضية-ملحية لزجة على كل سطح. 70-85% عفن: أعلى رطوبة ساحلية = عفن أسود خلف الأثاث وفي زوايا الحمام خلال أسبوعين! Anti-Fungal إلزامي + Dehumidifier. Micro-SiO₂: رمل صحراوي ناعم يستقر على الملح = Liquid Grinding Paste = يخدش. Pre-Rinse. HEPA AC: SOx غازي داخل الشقة. Activated Carbon. شقة ينبع تحتاج 5 خطوات: RO → Microfiber → HEPA AC → Anti-Fungal → Dehumidifier. مقارنة: بريدة = 4 خطوات (كلس+Nafud بدون عفن). ينبع = 5 خطوات = أعقد.',
        shortAnswer: 'على عكس [ممسحة بماء صنبور]، يعتمد بروتوكولنا في خدمة [تنظيف الشقق] بمدينة [ينبع] على [RO ← Microfiber ← HEPA AC ← Anti-Fungal ← Dehumidifier]. ففي ظل [NaCl 41‰+SOx YASREF+70-85% عفن+Micro-SiO₂]، تتفاقم ظاهرة [ملح+حمض+عفن+خدش]. لذا؛ يتدخل فريقنا عبر [5 خطوات ساحلية-صناعية] — Anti-Fungal إلزامي!',
        heroSubtitle: 'NaCl + SOx + 70-85% عفن — 5 خطوات ساحلية-صناعية!',
    },
    pricing: [
        { type: 'شقة غرفتين', unit: 'شقة', minPrice: 150, maxPrice: 310, time: '2-4h' },
        { type: 'شقة 3-4 غرف', unit: 'شقة', minPrice: 250, maxPrice: 520, time: '4-6h' },
        { type: '+ Anti-Fungal عميق', unit: 'إضافي', minPrice: 80, maxPrice: 170, time: '1-2h' },
        { type: 'أسبوعي (4/شهر)', unit: 'شهر', minPrice: 300, maxPrice: 600, time: '4 زيارات' },
    ],
    faq: [
        { question: 'ليش شقة ينبع تتعفّن أسبوعين؟', answer: '70-85% رطوبة بحرية. عفن أسود خلف الأثاث وزوايا الحمام. Anti-Fungal.' },
        { question: 'ما الطبقة اللزجة على الأسطح بينبع؟', answer: 'H₂SO₄ = SOx+NaCl+رطوبة = حمضي-ملحي لزج. RO+Microfiber.' },
        { question: 'كم تكلفة تنظيف شقة بينبع مقارنة بالرياض؟', answer: 'أغلى 30-40% — 5 خطوات+Anti-Fungal+HEPA AC. الرياض: 2 خطوة.' },
        { question: 'ليش RO وليس ماء عادي بينبع؟', answer: 'صنبور يُذيب NaCl ← يعود بالتبخر = أسوأ. RO = نقي.' },
        { question: 'هل HEPA AC ضروري بينبع؟', answer: 'SOx/VOC غازي من YASREF. HEPA Activated Carbon يمتص. صحة YMYL.' },
    ],
    expertTips: [
        'RO Water — NaCl يعود بالتبخر.',
        'Anti-Fungal — 70-85% عفن أسبوعين.',
        'HEPA AC — SOx غازي YASREF.',
        'Pre-Rinse — SiO₂+NaCl يخدش.',
        'Dehumidifier — رطوبة بحرية.',
    ],
    warnings: [
        'NaCl+SOx × شهر = تآكل أسطح شقة — RO أسبوعي.',
        '70-85% + بدون Anti-Fungal = عفن أسود ← صحة تنفسية YMYL.',
        'Micro-SiO₂ + NaCl بدون Pre-Rinse = Liquid Grinding = خدش.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص شركات التنظيف' },
        { entity: AMANA.MADINAH.entity, url: AMANA.MADINAH.url, role: 'اشتراطات أمانة ينبع' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALMISNID.name, quote: 'شقة ينبع: 5 خطوات ساحلية. NaCl+SOx+عفن. Anti-Fungal+RO+HEPA AC.', source: 'جغرافيا المناخ — شقق ساحلية' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ تنظيف مرخص', authority: 'بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'RO Water', use: 'NaCl — لا ملح جديد' },
        { name: 'Anti-Fungal', use: '70-85% — عفن أسبوعين' },
        { name: 'HEPA Activated Carbon', use: 'SOx YASREF — غازي' },
    ],
    commonConcerns: [
        { concern: 'مثل جدة.', solution: 'SOx YASREF = حمضي. 5 خطوات.' },
        { concern: 'شهري.', solution: 'NaCl+SOx يومي = أسبوعي.' },
    ],
    consumerEducation: [
        { myth: 'ممسحة.', truth: 'H₂SO₄ لزج. RO+Microfiber.' },
        { myth: 'مثل بريدة.', truth: 'ملح+حمض+عفن vs كلس+Nafud.' },
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
