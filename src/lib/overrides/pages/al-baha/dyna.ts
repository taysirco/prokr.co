import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'دينا نقل بالباحة — طرق جبلية وعرة+ضباب رؤية+مطر Laterite — Mountain-Spec+مغلقة! (2026)',
        description: 'دينا نقل الباحة. طرق جبلية وعرة! ضباب 200 يوم. مطر Laterite. Mountain-Spec+مغلقة+All-Terrain.',
        h1: 'دينا نقل بالباحة — جبلي+ضباب+مطر!',
        keywords: ['دينا نقل بالباحة', 'دينا نقل الباحة', 'خدمة دينا نقل بالباحة'],
    },
    content: {
        introduction: 'دينا الباحة = جبلي أخطر! طرق جبلية: منحدرات+منعطفات = حمولة دينا ثقيلة تتحرك. Mountain-Spec تثبيت مزدوج. ضباب: 200 يوم = قيادة بطيئة. دينا أكبر = أخطر بالضباب. مطر: طرق Laterite = انزلاق. All-Terrain+Chains صيفي. PVAc: أثاث رطب+اهتزاز جبلي = كسر. Anti-Humidity+تغليف حماية. مغلقة: مطر+ضباب = حمولة تتبلل. مغلقة 100% إلزامي. مقارنة: بريدة = طرق صحراوية+جاف = أبسط بكثير.',
        shortAnswer: 'على عكس [الدينا المكشوفة بطرق مستوية]، يعتمد بروتوكولنا في خدمة [الدينا] بمدينة [الباحة] على [Mountain-Spec مزدوج+مغلقة+Anti-Humidity+All-Terrain]. ففي ظل [طرق جبلية+ضباب+مطر+PVAc]، تتفاقم ظاهرة [انزلاق+رؤية+تبلل+كسر]. لذا؛ يتدخل فريقنا عبر [Mountain-Spec ← مغلقة ← Anti-Humidity ← All-Terrain].',
        heroSubtitle: 'طرق جبلية + ضباب + مطر — Mountain-Spec مزدوج!',
    },
    pricing: [
        { type: 'دينا صغيرة', unit: 'رحلة', minPrice: 200, maxPrice: 420, time: '3-4h' },
        { type: 'دينا + تغليف مغلق', unit: 'رحلة', minPrice: 250, maxPrice: 520, time: '3-5h' },
        { type: 'دينا كبيرة', unit: 'رحلة', minPrice: 350, maxPrice: 720, time: '4-6h' },
        { type: 'نقل جبلي رغدان', unit: 'ترقية', minPrice: 100, maxPrice: 200, time: '+ 2h' },
    ],
    faq: [
        { question: 'ليش دينا الباحة أخطر؟', answer: 'حمولة ثقيلة+منحدرات+ضباب = Mountain-Spec مزدوج.' },
        { question: 'هل المطر مشكلة للدينا بالباحة؟', answer: 'Laterite = انزلاق. مكشوفة = تبلل. مغلقة+All-Terrain.' },
        { question: 'كم تكلفة دينا بالباحة مقابل بريدة؟', answer: 'أغلى 20-30% — Mountain-Spec+مغلقة. طرق أصعب.' },
        { question: 'هل الضباب يأخّر الدينا؟', answer: '200 يوم = قيادة بطيئة. دينا كبيرة = أبطأ.' },
        { question: 'ليش Anti-Humidity بالدينا بالباحة؟', answer: 'PVAc+اهتزاز = كسر. Anti-Humidity يحمي مفاصل.' },
    ],
    expertTips: [
        'Mountain-Spec مزدوج — دينا ثقيلة.',
        'مغلقة — مطر+ضباب.',
        'All-Terrain — Laterite.',
        'Anti-Humidity — PVAc أثاث.',
        'صباحي — ضباب أقل.',
    ],
    warnings: [
        'دينا ثقيلة + منحدرات + تثبيت عادي = كارثة.',
        'مكشوفة + مطر = حمولة تتبلل = عفن.',
        'Laterite + إطارات عادية = انزلاق — All-Terrain.',
    ],
    trustAnchors: [
        { ...GOV.TGA, role: 'ترخيص النقل' },
        { entity: AMANA.BAHA.entity, url: AMANA.BAHA.url, role: 'اشتراطات أمانة الباحة' },
    ],
    expertReviewer: EXPERTS.ALZUWAYED,
    expertCitations: [
        { expert: EXPERTS.ALZUWAYED.name, quote: 'دينا الباحة: Mountain-Spec مزدوج+مغلقة. جبلي الأخطر.', source: 'معايير النقل — جبلي' },
    ],
    saudiRegulations: [REGULATIONS.TGA_LICENSE],
    verificationBadges: [{ badge: '✔️ نقل مرخص TGA', authority: 'TGA', icon: 'shield-check' }],
    equipment: [
        { name: 'Mountain-Spec مزدوج', use: 'منحدرات — حمولة ثقيلة' },
        { name: 'شاحنة مغلقة', use: 'مطر+ضباب — حماية' },
        { name: 'All-Terrain', use: 'Laterite — انزلاق' },
    ],
    hiddenObjections: [
        { fear: 'مكشوفة أرخص.', solution: 'مطر = تبلل. مغلقة.' },
        { fear: 'مثل بريدة.', solution: 'جبلي ≠ مستوي.' },
    ],
    counterNarratives: [
        { myth: 'أي دينا.', truth: 'Mountain-Spec+مغلقة.' },
        { myth: 'طرق عادية.', truth: 'منحدرات+Laterite.' },
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
