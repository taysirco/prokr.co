import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'دينا نقل بينبع — NaCl تآكل حمولة+VCI+70-85% مانع رطوبة — Anti-Corrosion! (2026)',
        description: 'دينا نقل ينبع. NaCl تآكل! VCI أجهزة. 70-85% مانع رطوبة. Anti-Corrosion+تغليف صناعي ساحلي.',
        h1: 'دينا نقل بينبع — NaCl تآكل+VCI!',
        keywords: ['دينا نقل ينبع', 'دينا نقل بينبع', 'خدمة دينا نقل ينبع'],
    },
    content: {
        introduction: 'دينا بينبع = NaCl يأكل الحمولة! NaCl تآكل: نقل أجهزة/معدات بدينا مكشوفة = ملح يتراكم ← صدأ+تآكل خلال 48h. VCI أكياس + تغليف صناعي. 70-85% رطوبة: أجهزة إلكترونية تتلف بالرطوبة أثناء النقل. مانع رطوبة+Silica Gel. SiO₂+NaCl: خدش أثناء النقل. تغليف فقاعي. حمولات خاصة: ينبع صناعية = نقل معدات من/إلى YASREF+المصفاة. Anti-Corrosion صناعي. مقارنة: بريدة = ΔT حرارة+Nafud لكن لا صدأ. ينبع = صدأ+رطوبة = أعقد.',
        shortAnswer: 'على عكس [الدينا المكشوفة بدون VCI]، يعتمد بروتوكولنا في خدمة [الدينا] بمدينة [ينبع] على [VCI+Anti-Corrosion+تغليف صناعي+مانع رطوبة]. ففي ظل [NaCl تآكل+70-85% رطوبة+SiO₂ خدش+حمولات صناعية]، تتفاقم ظاهرة [صدأ+تلف+خدش]. لذا؛ يتدخل فنيونا عبر [VCI ← تغليف ← Anti-Corrosion ← مانع رطوبة].',
        heroSubtitle: 'NaCl تآكل + 70-85% أجهزة + حمولات صناعية — VCI!',
    },
    pricing: [
        { type: 'دينا صغيرة', unit: 'رحلة', minPrice: 150, maxPrice: 310, time: '2-3h' },
        { type: 'دينا + تغليف VCI', unit: 'رحلة', minPrice: 200, maxPrice: 420, time: '3-4h' },
        { type: 'دينا كبيرة', unit: 'رحلة', minPrice: 300, maxPrice: 620, time: '3-5h' },
        { type: 'نقل صناعي YASREF', unit: 'رحلة', minPrice: 400, maxPrice: 800, time: '4-6h' },
    ],
    faq: [
        { question: 'ليش دينا مكشوفة خطيرة بينبع؟', answer: 'NaCl 41‰ = صدأ 48h! VCI+تغليف إلزامي.' },
        { question: 'هل الأجهزة تتلف أثناء النقل بينبع؟', answer: '70-85% رطوبة = تلف إلكترونيات. Silica Gel+مانع رطوبة.' },
        { question: 'كم تكلفة دينا بينبع مقابل بريدة؟', answer: 'أغلى 25-30% — VCI+Anti-Corrosion صناعي.' },
        { question: 'هل ينبع تحتاج نقل صناعي خاص؟', answer: 'YASREF+المصفاة = معدات خاصة. Anti-Corrosion صناعي.' },
        { question: 'ما VCI في دينا ينبع؟', answer: 'أكياس تُطلق غاز يحمي معدن من NaCl أثناء النقل.' },
    ],
    expertTips: [
        'VCI — كل قطعة معدنية.',
        'مغطى — ليس مكشوف NaCl.',
        'Silica Gel — إلكترونيات.',
        'Anti-Corrosion — معدات صناعية.',
        'تغليف فقاعي — SiO₂+NaCl.',
    ],
    warnings: [
        'دينا مكشوفة + NaCl = صدأ حمولة 48h — VCI.',
        '70-85% + إلكترونيات مكشوفة = تلف — Silica Gel YMYL.',
        'SiO₂+NaCl + بدون تغليف = خدش — فقاعي.',
    ],
    trustAnchors: [
        { ...GOV.TGA, role: 'ترخيص النقل' },
        { entity: AMANA.MADINAH.entity, url: AMANA.MADINAH.url, role: 'اشتراطات أمانة ينبع' },
    ],
    expertReviewer: EXPERTS.ALSHABNAN,
    expertCitations: [
        { expert: EXPERTS.ALZUWAYED.name, quote: 'دينا ينبع: NaCl تآكل. VCI+Anti-Corrosion. مغطى فقط.', source: 'معايير النقل — ساحلي-صناعي' },
    ],
    saudiRegulations: [REGULATIONS.TGA_LICENSE],
    verificationBadges: [{ badge: '✔️ نقل مرخص TGA', authority: 'TGA', icon: 'shield-check' }],
    equipment: [
        { name: 'VCI Bags', use: 'NaCl — حماية معدن' },
        { name: 'Silica Gel', use: '70-85% — إلكترونيات' },
        { name: 'Anti-Corrosion', use: 'معدات صناعية YASREF' },
    ],
    commonConcerns: [
        { concern: 'مكشوف أرخص.', solution: 'NaCl = صدأ 48h. VCI.' },
        { concern: 'مثل بريدة.', solution: 'صدأ+رطوبة = مختلف.' },
    ],
    consumerEducation: [
        { myth: 'أي دينا.', truth: 'ساحلي = VCI+Anti-Corrosion.' },
        { myth: 'تغليف عادي.', truth: 'VCI+فقاعي+Silica Gel.' },
    ],
    relatedServices: [
        { slug: 'dabab', context: 'دباب', priority: 1 },
        { slug: 'furniture-moving', context: 'نقل', priority: 2 },
        { slug: 'furniture-storage', context: 'تخزين', priority: 3 },
        { slug: 'cleaning', context: 'تنظيف', priority: 4 },
        { slug: 'auto-cleaning', context: 'سيارات', priority: 5 },
        { slug: 'pest-control', context: 'حشرات', priority: 6 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 7 },
    ],
};
