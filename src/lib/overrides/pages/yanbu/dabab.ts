import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'دباب نقل بينبع — NaCl تآكل+VCI أمان+70-85% رطوبة — Anti-Corrosion+VCI! (2026)',
        description: 'دباب نقل ينبع. NaCl تآكل! VCI أمان. 70-85% رطوبة. Anti-Corrosion+VCI+تغليف مانع رطوبة.',
        h1: 'دباب نقل بينبع — NaCl تآكل+VCI!',
        keywords: ['دباب نقل ينبع', 'دباب نقل بينبع', 'خدمة دباب نقل ينبع'],
    },
    content: {
        introduction: 'دباب نقل بينبع = NaCl يخدش ويأكل! NaCl تآكل: أثناء النقل بدباب مكشوف = ملح البحر يتراكم على الأثاث ← صدأ إطارات + خدش أسطح. تغليف مفتوح = كارثة. VCI (Volatile Corrosion Inhibitor): أكياس VCI إلزامية لكل قطعة معدنية — تُطلق غاز يحمي من الصدأ أثناء النقل. 70-85% رطوبة: رطوبة أثناء النقل = عفن أقمشة. تغليف مانع رطوبة. SiO₂+NaCl: رمل على ملح = يخدش أثناء النقل. تغليف فقاعي كامل. مقارنة: بريدة = ΔT 45°م+Nafud بس لا صدأ+لا عفن. ينبع = صدأ+عفن+خدش = أعقد.',
        shortAnswer: 'على عكس [الدباب المكشوف بدون VCI+تغليف]، يعتمد بروتوكولنا في خدمة [الدباب] بمدينة [ينبع] على [VCI+Anti-Corrosion+تغليف مانع رطوبة+فقاعي]. ففي ظل [NaCl تآكل+70-85% عفن+SiO₂ خدش]، تتفاقم ظاهرة [صدأ+عفن+خدش أثناء النقل]. لذا؛ يتدخل فنيونا عبر [VCI ← تغليف ← مانع رطوبة ← فقاعي].',
        heroSubtitle: 'NaCl صدأ + 70-85% عفن + SiO₂ خدش — VCI+تغليف!',
    },
    pricing: [
        { type: 'دباب صغير', unit: 'رحلة', minPrice: 80, maxPrice: 170, time: '1-2h' },
        { type: 'دباب + تغليف VCI', unit: 'رحلة', minPrice: 120, maxPrice: 250, time: '2-3h' },
        { type: 'دباب كبير', unit: 'رحلة', minPrice: 150, maxPrice: 310, time: '2-3h' },
        { type: 'نقل مكشوف ← مغطى', unit: 'ترقية', minPrice: 40, maxPrice: 80, time: '+ 30 دقيقة' },
    ],
    faq: [
        { question: 'ليش دباب مكشوف خطير بينبع؟', answer: 'NaCl 41‰ = صدأ+خدش. 70-85% = عفن أقمشة. VCI+تغليف.' },
        { question: 'ما VCI بدباب ينبع؟', answer: 'أكياس تُطلق غاز يحمي المعدن من الصدأ. إلزامي ساحلي.' },
        { question: 'كم تكلفة دباب بينبع مقابل بريدة؟', answer: 'أغلى 20-30% — VCI+تغليف مانع رطوبة.' },
        { question: 'هل التغليف الفقاعي ضروري بينبع؟', answer: 'SiO₂+NaCl = Liquid Grinding. فقاعي يحمي.' },
        { question: 'هل الأثاث يتعفّن أثناء النقل بينبع؟', answer: '70-85% + نقل طويل = عفن أقمشة. مانع رطوبة.' },
    ],
    expertTips: [
        'VCI — كل قطعة معدنية.',
        'مغطى ← ليس مكشوف.',
        'تغليف فقاعي — SiO₂+NaCl.',
        'مانع رطوبة — 70-85%.',
        'Anti-Corrosion — إطارات.',
    ],
    warnings: [
        'دباب مكشوف + NaCl = صدأ+خدش — VCI+تغليف.',
        '70-85% + أقمشة مكشوفة = عفن — مانع رطوبة.',
        'SiO₂+NaCl + بدون فقاعي = خدش — كارثة.',
    ],
    trustAnchors: [
        { ...GOV.TGA, role: 'ترخيص النقل' },
        { ...GOV.BALADI, role: 'ترخيص شركات النقل' },
        { entity: AMANA.MADINAH.entity, url: AMANA.MADINAH.url, role: 'اشتراطات أمانة ينبع' },
    ],
    expertReviewer: EXPERTS.ALSHABNAN,
    expertCitations: [
        { expert: EXPERTS.ALZUWAYED.name, quote: 'دباب ينبع: NaCl تآكل. VCI إلزامي. مغطى فقط.', source: 'معايير النقل — ساحلي' },
    ],
    saudiRegulations: [REGULATIONS.TGA_LICENSE],
    verificationBadges: [{ badge: '✔️ نقل مرخص TGA', authority: 'TGA', icon: 'shield-check' }],
    equipment: [
        { name: 'VCI Bags', use: 'NaCl — حماية معدن' },
        { name: 'تغليف فقاعي', use: 'SiO₂+NaCl — خدش' },
        { name: 'مانع رطوبة', use: '70-85% — عفن' },
    ],
    hiddenObjections: [
        { fear: 'مكشوف أرخص.', solution: 'NaCl = صدأ. VCI أمان.' },
        { fear: 'مثل بريدة.', solution: 'صدأ+عفن = مختلف.' },
    ],
    consumerEducation: [
        { myth: 'مكشوف يكفي.', truth: 'NaCl = صدأ 48h.' },
        { myth: 'تغليف عادي.', truth: 'VCI+فقاعي+مانع رطوبة.' },
    ],
    relatedServices: [
        { slug: 'dyna', context: 'دينا', priority: 1 },
        { slug: 'furniture-moving', context: 'نقل', priority: 2 },
        { slug: 'furniture-storage', context: 'تخزين', priority: 3 },
        { slug: 'cleaning', context: 'تنظيف', priority: 4 },
        { slug: 'auto-cleaning', context: 'سيارات', priority: 5 },
        { slug: 'pest-control', context: 'حشرات', priority: 6 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 7 },
    ],
};
