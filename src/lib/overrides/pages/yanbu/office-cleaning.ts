import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف مكاتب بينبع — NaCl+SOx إلكترونيات+70-85% عفن سجاد — HEPA AC+Anti-Fungal! (2026)',
        description: 'تنظيف مكاتب ينبع. NaCl+SOx إلكترونيات! 70-85% عفن سجاد. HEPA AC+Anti-Fungal+RO+Dehumidifier.',
        h1: 'تنظيف مكاتب بينبع — ملح+حمض إلكترونيات+عفن!',
        keywords: ['تنظيف مكاتب ينبع', 'تنظيف مكتب بينبع', 'شركة تنظيف مكاتب ينبع'],
    },
    content: {
        introduction: 'مكتب ينبع = NaCl+SOx يُتلفان الإلكترونيات! NaCl إلكترونيات: ملح البحر يدخل المكتب ← يتراكم على لوحات الدوائر ← Short Circuit (دارة قصيرة). HEPA يمنع. SOx YASREF: أكاسيد كبريت + رطوبة = H₂SO₄ غازي ← يتآكل الموصلات النحاسية. HEPA Activated Carbon إلزامي. 70-85% عفن سجاد: سجاد المكتب يتعفّن تحته أسبوعين! Anti-Fungal+Dehumidifier. صحة موظفين YMYL. NaCl على أسطح: مكاتب الكتابة تُخشّن ← RO مسح. مقارنة: بريدة = Nafud يتراكم+CaCO₃ لكن لا عفن = أبسط. ينبع = ملح+حمض+عفن = أعقد بكثير.',
        shortAnswer: 'على عكس [التنظيف بدون HEPA AC]، يعتمد بروتوكولنا في خدمة [تنظيف المكاتب] بمدينة [ينبع] على [HEPA AC+Anti-Fungal+RO+Dehumidifier]. ففي ظل [NaCl إلكترونيات+SOx حمض+70-85% عفن+SiO₂]، تتفاقم ظاهرة [Short Circuit+تآكل+عفن]. لذا؛ يتدخل فريقنا عبر [HEPA AC ← RO ← Anti-Fungal ← Dehumidifier].',
        heroSubtitle: 'NaCl Short Circuit + SOx تآكل + عفن سجاد — HEPA AC!',
    },
    pricing: [
        { type: 'مكتب صغير (50 م²)', unit: 'زيارة', minPrice: 130, maxPrice: 270, time: '1-2h' },
        { type: 'مكتب كبير (200+ م²)', unit: 'زيارة', minPrice: 300, maxPrice: 620, time: '3-5h' },
        { type: '+ HEPA AC إلكترونيات', unit: 'إضافي', minPrice: 100, maxPrice: 200, time: '1h' },
        { type: 'يومي (30 يوم)', unit: 'شهر', minPrice: 1000, maxPrice: 2000, time: '30 زيارة' },
    ],
    faq: [
        { question: 'ليش إلكترونيات تتلف أسرع بمكتب ينبع؟', answer: 'NaCl = Short Circuit. SOx = تآكل موصلات. HEPA AC يمنع.' },
        { question: 'ليش سجاد المكتب يتعفّن بينبع؟', answer: '70-85% = عفن أسبوعين. Anti-Fungal+Dehumidifier.' },
        { question: 'كم تكلفة مكتب بينبع مقابل بريدة؟', answer: 'أغلى 30-40% — HEPA AC+Anti-Fungal. بريدة: HEPA+Descaler فقط.' },
        { question: 'هل HEPA AC ضروري بمكتب ينبع؟', answer: 'إلزامي! NaCl+SOx = Short Circuit+تآكل. إنتاجية YMYL.' },
        { question: 'كم مرة تنظيف مكتب بينبع؟', answer: 'يومي أو كل يومين! NaCl+SOx يومي. أسبوعي = تلف.' },
    ],
    expertTips: [
        'HEPA AC — NaCl+SOx إلكترونيات.',
        'Anti-Fungal سجاد — 70-85% عفن.',
        'RO مسح أسطح — NaCl يُخشّن.',
        'Dehumidifier — رطوبة بحرية.',
        'يومي — NaCl+SOx لا يتوقف.',
    ],
    warnings: [
        'NaCl + إلكترونيات × أسبوع = Short Circuit — HEPA إلزامي.',
        '70-85% + سجاد مكتب = عفن ← صحة موظفين YMYL.',
        'SOx + موصلات نحاسية = تآكل ← حاسوب يتلف 3000+.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص شركات التنظيف' },
        { entity: AMANA.MADINAH.entity, url: AMANA.MADINAH.url, role: 'اشتراطات أمانة ينبع' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALMISNID.name, quote: 'مكتب ينبع: NaCl Short Circuit. SOx تآكل. HEPA AC+Anti-Fungal.', source: 'جغرافيا المناخ — مكاتب ساحلية' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ تنظيف مكاتب مرخص', authority: 'بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'HEPA Activated Carbon', use: 'NaCl+SOx — إلكترونيات' },
        { name: 'Anti-Fungal', use: '70-85% — عفن سجاد' },
        { name: 'RO Water', use: 'NaCl — مسح أسطح' },
    ],
    commonConcerns: [
        { concern: 'مكنسة تكفي.', solution: 'NaCl+SOx = HEPA AC.' },
        { concern: 'مثل بريدة.', solution: 'ملح+حمض+عفن vs كلس+Nafud.' },
    ],
    consumerEducation: [
        { myth: 'أسبوعي.', truth: 'NaCl+SOx يومي.' },
        { myth: 'تنظيف عادي.', truth: 'HEPA AC+Anti-Fungal+RO.' },
    ],
    relatedServices: [
        { slug: 'cleaning', context: 'تنظيف', priority: 1 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 2 },
        { slug: 'carpet-cleaning', context: 'سجاد', priority: 3 },
        { slug: 'glass-facades-cleaning', context: 'واجهات', priority: 4 },
        { slug: 'marble-polishing', context: 'رخام', priority: 5 },
        { slug: 'pest-control', context: 'حشرات', priority: 6 },
        { slug: 'steam-cleaning', context: 'بخار', priority: 7 },
    ],
};
