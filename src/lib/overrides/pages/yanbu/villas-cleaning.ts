import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف فلل بينبع — NaCl صدأ+SOx حمض+70-85% عفن حديقة+بعوض — Zone-Based ساحلي! (2026)',
        description: 'تنظيف فلل ينبع. NaCl صدأ واجهة! SOx حمض. 70-85% عفن+بعوض حديقة. Zone-Based ساحلي.',
        h1: 'تنظيف فلل بينبع — صدأ+حمض+عفن+بعوض!',
        keywords: ['تنظيف فلل ينبع', 'تنظيف فيلا بينبع', 'شركة تنظيف فلل ينبع'],
    },
    content: {
        introduction: 'فيلا ينبع = 4 مناطق مختلفة! Zone-Based ساحلي: واجهة (NaCl صدأ + Anti-Rust) + حديقة (عفن+بعوض BTI) + خارجي (Biofilm ملحي+SiO₂) + داخل (Anti-Fungal+RO+HEPA AC+Dehumidifier). NaCl صدأ واجهة: ملح يأكل حديد الواجهة ← Pitting 48h. Anti-Rust كل 6 أشهر. SOx حمض: H₂SO₄ على الواجهات والأسطح. Chemical Wash. 70-85% عفن حديقة: رطوبة = عفن أسود حول المسبح وفي أحواض الزرع. بعوض BTI: ركود مياه الحديقة = بعوض. BTI (Bacillus thuringiensis). Biofilm: طبقة بيولوجية ملحية على الأسطح الخارجية. مقارنة: بريدة = 4 محاور (كلس+Nafud+نخيل+ΔT) بدون عفن+بعوض = أرخص 30-40%. ينبع = Zone-Based+عفن+بعوض = أعقد.',
        shortAnswer: 'على عكس [التنظيف العادي المُوحّد]، يعتمد بروتوكولنا في خدمة [تنظيف الفلل] بمدينة [ينبع] على [Zone-Based ساحلي: واجهة+حديقة+خارجي+داخلي]. ففي ظل [NaCl صدأ+SOx حمض+70-85% عفن+بعوض+Biofilm]، تتفاقم ظاهرة [صدأ+حمض+عفن+بعوض]. لذا؛ يتدخل فريقنا عبر [Anti-Rust ← BTI ← Anti-Fungal ← RO ← HEPA AC].',
        heroSubtitle: 'Zone-Based ساحلي — صدأ+حمض+عفن+بعوض — 4 مناطق!',
    },
    pricing: [
        { type: 'فيلا Zone-Based', unit: 'فيلا', minPrice: 550, maxPrice: 1100, time: '6-8h' },
        { type: '+ Anti-Rust واجهة', unit: 'إضافي', minPrice: 150, maxPrice: 300, time: '+ 2h' },
        { type: '+ BTI حديقة', unit: 'إضافي', minPrice: 100, maxPrice: 200, time: '+ 1h' },
        { type: 'أسبوعي (4/شهر)', unit: 'شهر', minPrice: 800, maxPrice: 1600, time: '4 زيارات' },
    ],
    faq: [
        { question: 'ما Zone-Based ساحلي؟', answer: '4 مناطق: واجهة (صدأ) + حديقة (عفن+بعوض) + خارجي (Biofilm) + داخل (عفن+SOx).' },
        { question: 'ليش واجهة الفيلا تصدأ بينبع؟', answer: 'NaCl Pitting 48h. حديد واجهة = صدأ. Anti-Rust كل 6 أشهر.' },
        { question: 'ليش بعوض في حديقة فيلا ينبع؟', answer: '70-85% + ركود مياه. BTI بيولوجي آمن يقتل يرقات.' },
        { question: 'كم تكلفة فيلا بينبع مقابل بريدة؟', answer: 'أغلى 30-40% — Zone-Based+عفن+بعوض. بريدة: لا عفن+لا بعوض.' },
        { question: 'هل Biofilm خطير بينبع؟', answer: 'طبقة بيولوجية ملحية زلقة. خطر انزلاق. Chemical Wash.' },
    ],
    expertTips: [
        'Zone-Based — 4 مناطق مختلفة.',
        'Anti-Rust واجهة — NaCl Pitting.',
        'BTI حديقة — بعوض بيولوجي.',
        'Anti-Fungal داخل — 70-85%.',
        'HEPA AC — SOx YASREF.',
    ],
    warnings: [
        'NaCl × واجهة × سنة = صدأ هيكلي — Anti-Rust إلزامي YMYL.',
        '70-85% + حديقة = بعوض ← أمراض YMYL.',
        'Biofilm + أرضيات خارجية = انزلاق — Chemical Wash.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص شركات التنظيف' },
        { entity: AMANA.MADINAH.entity, url: AMANA.MADINAH.url, role: 'اشتراطات أمانة ينبع' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALMISNID.name, quote: 'فيلا ينبع: Zone-Based ساحلي. صدأ+عفن+بعوض. 4 مناطق.', source: 'جغرافيا المناخ — فلل ساحلية' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ تنظيف فلل مرخص', authority: 'بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'Anti-Rust Coating', use: 'NaCl — واجهة' },
        { name: 'BTI Granules', use: 'بعوض — حديقة بيولوجي' },
        { name: 'Anti-Fungal+Dehumidifier', use: '70-85% — داخل' },
    ],
    hiddenObjections: [
        { fear: 'تنظيف مُوحّد.', solution: '4 مناطق مختلفة. Zone-Based.' },
        { fear: 'مثل بريدة.', solution: 'صدأ+بعوض+عفن = مختلف.' },
    ],
    counterNarratives: [
        { myth: 'تنظيف شامل.', truth: 'Zone-Based = 4 مناطق.' },
        { myth: 'شهري.', truth: 'NaCl+SOx يومي = أسبوعي.' },
    ],
    relatedServices: [
        { slug: 'apartments-cleaning', context: 'شقق', priority: 1 },
        { slug: 'cleaning', context: 'تنظيف', priority: 2 },
        { slug: 'swimming-pool-cleaning', context: 'مسابح', priority: 3 },
        { slug: 'pest-control', context: 'حشرات', priority: 4 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 5 },
        { slug: 'carpet-cleaning', context: 'سجاد', priority: 6 },
        { slug: 'marble-polishing', context: 'رخام', priority: 7 },
    ],
};
