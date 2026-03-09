import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'نقل عفش بينبع — NaCl صدأ+70-85% عفن+VCI+Marine-Grade — Anti-Corrosion! (2026)',
        description: 'نقل عفش ينبع. NaCl صدأ! 70-85% عفن خشب. VCI إلزامي. Marine-Grade تغليف. Anti-Corrosion+مانع رطوبة.',
        h1: 'نقل عفش بينبع — NaCl صدأ+عفن خشب!',
        keywords: ['نقل عفش ينبع', 'نقل أثاث بينبع', 'شركة نقل عفش ينبع'],
    },
    content: {
        introduction: 'نقل عفش ينبع = NaCl يصدئ ويُعفّن! NaCl صدأ: أثناء النقل الخارجي = ملح يتراكم على مفصلات+براغي+إطارات ← Pitting 48h! VCI أكياس لكل قطعة معدنية. 70-85% عفن خشب: أقمشة وخشب تتعفّن أثناء النقل+التخزين المؤقت. مانع رطوبة+Silica Gel. SiO₂+NaCl خدش: Liquid Grinding أثناء النقل = خدش. تغليف Marine-Grade فقاعي. Anti-Corrosion: رش كل القطع المعدنية قبل التغليف. فك+تركيب: مفصلات ملحية = عسيرة. Anti-Rust Lubricant. مقارنة: بريدة = ΔT+Nafud+خشب يتشقق بدون عفن+صدأ. ينبع = صدأ+عفن = أعقد.',
        shortAnswer: 'على عكس [النقل بتغليف عادي بدون VCI]، يعتمد بروتوكولنا في خدمة [نقل العفش] بمدينة [ينبع] على [VCI+Anti-Corrosion+Marine-Grade تغليف+مانع رطوبة]. ففي ظل [NaCl صدأ+70-85% عفن+SiO₂ خدش]، تتفاقم ظاهرة [Pitting+تعفّن+خدش]. لذا؛ يتدخل فنيونا عبر [Anti-Corrosion ← VCI ← Marine ← مانع رطوبة].',
        heroSubtitle: 'NaCl Pitting + 70-85% عفن + SiO₂ خدش — VCI+Marine!',
    },
    pricing: [
        { type: 'شقة (غرفتين)', unit: 'نقلة', minPrice: 600, maxPrice: 1200, time: '4-6h' },
        { type: 'شقة (3-4 غرف)', unit: 'نقلة', minPrice: 900, maxPrice: 1800, time: '6-8h' },
        { type: 'فيلا كاملة', unit: 'نقلة', minPrice: 1500, maxPrice: 3000, time: '8-12h' },
        { type: '+ VCI+Anti-Corrosion', unit: 'إضافي', minPrice: 200, maxPrice: 400, time: '+ 2h' },
    ],
    faq: [
        { question: 'ليش نقل ينبع أصعب من بريدة؟', answer: 'NaCl = صدأ+خدش. 70-85% = عفن. بريدة: لا صدأ+لا عفن.' },
        { question: 'ما VCI في نقل ينبع؟', answer: 'أكياس تحمي المعدن من NaCl صدأ أثناء النقل.' },
        { question: 'هل الخشب يتعفّن أثناء النقل بينبع؟', answer: '70-85% + نقل طويل = ممكن. مانع رطوبة+Silica Gel.' },
        { question: 'كم تكلفة نقل بينبع مقابل بريدة؟', answer: 'أغلى 25-35% — VCI+Anti-Corrosion+Marine-Grade.' },
        { question: 'ما Marine-Grade تغليف؟', answer: 'تغليف مقاوم ملح+رطوبة. أسمك. SiO₂+NaCl لا يخترق.' },
    ],
    expertTips: [
        'VCI — كل قطعة معدنية.',
        'Anti-Corrosion — قبل التغليف.',
        'Marine-Grade — ليس تغليف عادي.',
        'مانع رطوبة — 70-85%.',
        'Anti-Rust Lubricant — مفصلات.',
    ],
    warnings: [
        'تغليف عادي + NaCl = صدأ+خدش ← أثاث تالف.',
        '70-85% + خشب مغلّف بلاستيك = رطوبة محبوسة = عفن — تهوية.',
        'SiO₂+NaCl + بدون Marine-Grade = Liquid Grinding خدش.',
    ],
    trustAnchors: [
        { ...GOV.TGA, role: 'ترخيص النقل' },
        { ...GOV.BALADI, role: 'ترخيص شركات النقل' },
        { entity: AMANA.MADINAH.entity, url: AMANA.MADINAH.url, role: 'اشتراطات أمانة ينبع' },
    ],
    expertReviewer: EXPERTS.ALSHABNAN,
    expertCitations: [
        { expert: EXPERTS.ALZUWAYED.name, quote: 'نقل ينبع: VCI+Anti-Corrosion+Marine-Grade. NaCl Pitting.', source: 'معايير النقل — ساحلي' },
    ],
    saudiRegulations: [REGULATIONS.TGA_LICENSE],
    verificationBadges: [{ badge: '✔️ نقل مرخص TGA', authority: 'TGA', icon: 'shield-check' }],
    equipment: [
        { name: 'VCI Bags', use: 'NaCl — معدن' },
        { name: 'Marine-Grade تغليف', use: 'SiO₂+NaCl — سميك' },
        { name: 'Anti-Corrosion Spray', use: 'Pitting — قبل تغليف' },
    ],
    hiddenObjections: [
        { fear: 'تغليف عادي.', solution: 'NaCl = صدأ. Marine-Grade.' },
        { fear: 'مثل بريدة.', solution: 'صدأ+عفن = مختلف تماماً.' },
    ],
    counterNarratives: [
        { myth: 'أي شركة.', truth: 'VCI+Marine-Grade = متخصص ساحلي.' },
        { myth: 'تغليف بلاستيك.', truth: 'بلاستيك = رطوبة محبوسة = عفن.' },
    ],
    relatedServices: [
        { slug: 'furniture-storage', context: 'تخزين', priority: 1 },
        { slug: 'dabab', context: 'دباب', priority: 2 },
        { slug: 'dyna', context: 'دينا', priority: 3 },
        { slug: 'cleaning', context: 'تنظيف', priority: 4 },
        { slug: 'furniture-cleaning', context: 'أثاث', priority: 5 },
        { slug: 'pest-control', context: 'حشرات', priority: 6 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 7 },
    ],
};
