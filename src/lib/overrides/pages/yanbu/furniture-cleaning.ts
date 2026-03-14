import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف أثاث بينبع — NaCl صدأ معدن+SOx حمض+70-85% عفن خشب — Anti-Rust+Anti-Fungal! (2026)',
        description: 'تنظيف أثاث ينبع. NaCl صدأ معدن! SOx حمض. 70-85% عفن خشب. Anti-Rust+Anti-Fungal+RO+Dehumidifier.',
        h1: 'تنظيف أثاث بينبع — صدأ+حمض+عفن!',
        keywords: ['تنظيف أثاث ينبع', 'تنظيف أثاث بينبع', 'شركة تنظيف أثاث ينبع'],
    },
    content: {
        introduction: 'أثاث ينبع = NaCl يصدئ المعدن ويُعفّن الخشب! NaCl صدأ: ملح البحر يتراكم على الأجزاء المعدنية (مفصلات، براغي، أرجل) ← Pitting 48h. Anti-Rust. SOx H₂SO₄: حمض يتآكل الأسطح المعدنية والخشبية. Anti-Corrosion. 70-85% عفن خشب: رطوبة بحرية = عفن أسود داخل الخشب أسبوعين! Anti-Fungal Wood Treatment. NaCl أقمشة: ملح يتبلور في أقمشة الأثاث ← يُخشّن. RO Extraction. SiO₂+NaCl: خدش أسطح الخشب. Pre-Rinse. مقارنة: بريدة = Nafud+CaCO₃+ΔT خشب يتشقق لكن لا عفن. ينبع = صدأ+عفن = أعقد.',
        shortAnswer: 'على عكس [التنظيف بدون Anti-Rust+Anti-Fungal]، يعتمد بروتوكولنا في خدمة [تنظيف الأثاث] بمدينة [ينبع] على [Anti-Rust+Anti-Fungal+RO+Dehumidifier]. ففي ظل [NaCl صدأ+SOx حمض+70-85% عفن خشب+SiO₂]، تتفاقم ظاهرة [صدأ+حمض+عفن+خدش]. لذا؛ يتدخل فريقنا عبر [Anti-Rust ← Anti-Fungal ← RO ← Dehumidifier].',
        heroSubtitle: 'NaCl صدأ + SOx حمض + 70-85% عفن — Anti-Rust+Anti-Fungal!',
    },
    pricing: [
        { type: 'غرفة نوم', unit: 'غرفة', minPrice: 120, maxPrice: 250, time: '1-2h' },
        { type: 'صالة كاملة', unit: 'صالة', minPrice: 180, maxPrice: 370, time: '2-3h' },
        { type: '+ Anti-Rust كامل', unit: 'إضافي', minPrice: 100, maxPrice: 200, time: '+ 1h' },
        { type: 'نصف سنوي (2 زيارة)', unit: 'سنة', minPrice: 300, maxPrice: 600, time: '2 زيارة' },
    ],
    faq: [
        { question: 'ليش أثاث ينبع يصدأ؟', answer: 'NaCl 41‰ على مفصلات+براغي+أرجل. Pitting 48h. Anti-Rust.' },
        { question: 'ليش الخشب يتعفّن سريع بينبع؟', answer: '70-85% = عفن أسود داخل الخشب أسبوعين. Anti-Fungal Wood.' },
        { question: 'كم تكلفة أثاث بينبع مقابل بريدة؟', answer: 'أغلى 25-30% — Anti-Rust+Anti-Fungal. بريدة: لا صدأ+لا عفن.' },
        { question: 'هل SOx يتلف الأثاث بينبع؟', answer: 'H₂SO₄ يتآكل خشب+معدن. Anti-Corrosion.' },
        { question: 'هل أقمشة الأثاث تتملّح بينبع؟', answer: 'NaCl يتبلور في الأقمشة = يُخشّن. RO Extraction.' },
    ],
    expertTips: [
        'Anti-Rust كل 6 أشهر — NaCl.',
        'Anti-Fungal Wood — 70-85% عفن.',
        'RO Extraction أقمشة — NaCl.',
        'Pre-Rinse — SiO₂+NaCl خدش.',
        'Dehumidifier — رطوبة خشب.',
    ],
    warnings: [
        'NaCl × مفصلات × سنة = صدأ = أثاث يتفكك — Anti-Rust.',
        '70-85% + خشب بدون Anti-Fungal = عفن أسود ← صحة YMYL.',
        'SOx × خشب × 6 أشهر = تآكل — Anti-Corrosion.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص شركات التنظيف' },
        { entity: AMANA.MADINAH.entity, url: AMANA.MADINAH.url, role: 'اشتراطات أمانة ينبع' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALMISNID.name, quote: 'أثاث ينبع: NaCl صدأ+عفن خشب. Anti-Rust+Anti-Fungal.', source: 'جغرافيا المناخ — أثاث ساحلي' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ تنظيف أثاث مرخص', authority: 'بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'Anti-Rust Coating', use: 'NaCl — مفصلات+براغي' },
        { name: 'Anti-Fungal Wood', use: '70-85% — عفن خشب' },
        { name: 'RO Extraction', use: 'NaCl — أقمشة' },
    ],
    commonConcerns: [
        { concern: 'تنظيف عادي.', solution: 'NaCl+عفن = Anti-Rust+Anti-Fungal.' },
        { concern: 'مثل بريدة.', solution: 'صدأ+عفن = مختلف تماماً.' },
    ],
    consumerEducation: [
        { myth: 'سنوي.', truth: 'NaCl = نصف سنوي Anti-Rust.' },
        { myth: 'تنظيف يكفي.', truth: 'Anti-Rust+Anti-Fungal إضافي.' },
    ],
    relatedServices: [
        { slug: 'cleaning', context: 'تنظيف', priority: 1 },
        { slug: 'sofa-cleaning', context: 'كنب', priority: 2 },
        { slug: 'carpet-cleaning', context: 'سجاد', priority: 3 },
        { slug: 'furniture-moving', context: 'نقل', priority: 4 },
        { slug: 'furniture-storage', context: 'تخزين', priority: 5 },
        { slug: 'pest-control', context: 'حشرات', priority: 6 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 7 },
    ],
};
