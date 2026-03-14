import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف مكيفات بينبع — NaCl صدأ زعانف+SOx حمض+70-85% عفن بخاخ — Zinc Coating! (2026)',
        description: 'تنظيف مكيفات ينبع. NaCl يصدئ زعانف ألمنيوم! SOx حمض. 70-85% عفن بخاخ. Zinc Coating+Anti-Fungal+RO.',
        h1: 'تنظيف مكيفات بينبع — NaCl صدأ+SOx حمض+عفن!',
        keywords: ['تنظيف مكيفات ينبع', 'تنظيف مكيف بينبع', 'شركة تنظيف مكيفات ينبع'],
    },
    content: {
        introduction: 'مكيف ينبع = NaCl يأكل الزعانف! NaCl صدأ: ملح البحر الأحمر 41‰ يدخل الوحدة الخارجية ← يتراكم على زعانف الألمنيوم ← Pitting Corrosion ← يقل أداء المكيف 30-40% خلال سنة! Zinc Coating إلزامي للوحدات خلال 3 كم من الساحل. SOx حمض: YASREF أكاسيد تدخل مع الهواء ← H₂SO₄ يتفاعل مع المعدن ← تآكل مسّرع. Anti-Corrosion Spray. 70-85% عفن: رطوبة بحرية = عفن أسود داخل البخاخ والفلتر خلال أسبوعين! Anti-Fungal Coil + فلتر HEPA. عفن بخاخ = رائحة + حساسية YMYL. مقارنة: بريدة = CaCO₃ كلس + Nafud بدون عفن = أبسط. ينبع = صدأ+حمض+عفن = أعقد بكثير.',
        shortAnswer: 'على عكس [الغسل بماء صنبور بدون Zinc Coating]، يعتمد بروتوكولنا في خدمة [تنظيف المكيفات] بمدينة [ينبع] على [Zinc Coating+Anti-Fungal Coil+Anti-Corrosion+RO]. ففي ظل [NaCl Pitting+SOx حمض+70-85% عفن بخاخ]، تتفاقم ظاهرة [صدأ زعانف+تآكل+عفن]. لذا؛ يتدخل فنيونا عبر [Zinc ← Anti-Fungal ← Anti-Corrosion ← RO] — مكيف ساحلي!',
        heroSubtitle: 'NaCl صدأ + SOx حمض + 70-85% عفن بخاخ — Zinc Coating!',
    },
    pricing: [
        { type: 'تنظيف سبلت عادي', unit: 'مكيف', minPrice: 80, maxPrice: 170, time: '30-45 دقيقة' },
        { type: 'تنظيف + Anti-Fungal', unit: 'مكيف', minPrice: 120, maxPrice: 250, time: '45-60 دقيقة' },
        { type: '+ Zinc Coating خارجي', unit: 'مكيف', minPrice: 150, maxPrice: 310, time: '1-2h' },
        { type: 'عقد ربع سنوي (4 تنظيف)', unit: 'مكيف', minPrice: 350, maxPrice: 700, time: '4 زيارات' },
    ],
    faq: [
        { question: 'ليش مكيف ينبع يفقد أداء أسرع؟', answer: 'NaCl Pitting = زعانف تصدأ ← أداء يقل 30-40% سنة. Zinc Coating يحمي.' },
        { question: 'ليش عفن داخل المكيف بينبع؟', answer: '70-85% رطوبة = عفن أسود داخل البخاخ أسبوعين. Anti-Fungal Coil.' },
        { question: 'كم تكلفة تنظيف مكيف بينبع مقارنة ببريدة؟', answer: 'أغلى 40-50% — Zinc+Anti-Fungal+Anti-Corrosion. بريدة: Descaler فقط.' },
        { question: 'هل Zinc Coating ضروري بينبع؟', answer: 'إلزامي خلال 3 كم من الساحل. بدونه = صدأ سنة. بريدة: لا حاجة.' },
        { question: 'هل SOx يتلف المكيف بينبع؟', answer: 'SOx YASREF + رطوبة = H₂SO₄ يتآكل معدن. Anti-Corrosion Spray.' },
    ],
    expertTips: [
        'Zinc Coating — NaCl Pitting إلزامي.',
        'Anti-Fungal Coil — 70-85% عفن.',
        'Anti-Corrosion — SOx YASREF.',
        'RO غسل — NaCl لا يعود.',
        'ربع سنوي — ساحلي-صناعي.',
    ],
    warnings: [
        'NaCl Pitting × سنة = فقدان 30-40% أداء — Zinc إلزامي.',
        '70-85% + عفن بخاخ = حساسية تنفسية لكل الأسرة — YMYL.',
        'SOx + زعانف × 6 أشهر = تآكل — Anti-Corrosion إلزامي.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص شركات التنظيف' },
        { entity: AMANA.MADINAH.entity, url: AMANA.MADINAH.url, role: 'اشتراطات أمانة ينبع' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALMISNID.name, quote: 'مكيف ينبع: NaCl Pitting+SOx حمض+عفن. Zinc+Anti-Fungal. ساحلي-صناعي.', source: 'جغرافيا المناخ — مكيفات ساحلية' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ تنظيف مكيفات مرخص', authority: 'بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'Zinc Coating', use: 'NaCl Pitting — زعانف خارجية' },
        { name: 'Anti-Fungal Coil', use: '70-85% — عفن بخاخ' },
        { name: 'Anti-Corrosion Spray', use: 'SOx — حمض' },
    ],
    commonConcerns: [
        { concern: 'تنظيف عادي.', solution: 'NaCl+SOx+عفن = 3 معالجات خاصة.' },
        { concern: 'مثل بريدة.', solution: 'صدأ+حمض+عفن vs كلس. مختلف.' },
    ],
    consumerEducation: [
        { myth: 'سنوي.', truth: 'NaCl+SOx = ربع سنوي.' },
        { myth: 'ماء عادي.', truth: 'NaCl يعود. RO.' },
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
