import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../gov-references';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف بالساعة بينبع — NaCl يومي+SOx+70-85% عفن — RO+Anti-Fungal+HEPA AC! (2026)',
        description: 'تنظيف بالساعة ينبع. NaCl يومي! SOx H₂SO₄. 70-85% عفن. RO+HEPA AC+Anti-Fungal+Dehumidifier.',
        h1: 'تنظيف بالساعة بينبع — ملح يومي+عفن!',
        keywords: ['تنظيف بالساعة ينبع', 'عاملة بالساعة بينبع', 'شركة تنظيف بالساعة ينبع'],
    },
    content: {
        introduction: 'عاملة بالساعة بينبع = 5 أدوات خاصة! NaCl يومي: ملح البحر يترسب على كل سطح يومياً. عاملة بماء صنبور = يُذيب ← يعود. RO Water. SOx YASREF: H₂SO₄ لزج على الأسطح. Microfiber مبلل RO. 70-85% عفن: زوايا الحمام والمطبخ تتعفّن أسبوعين! Anti-Fungal أسبوعي. SiO₂+NaCl: رمل على ملح = يخدش. Pre-Rinse. HEPA AC: SOx غازي. Activated Carbon. تجفيف: 70-85% = أسطح لا تجف بسرعة. Dehumidifier + مسح جاف. عاملة ينبع تحتاج 5 أدوات: RO+Microfiber+HEPA AC+Anti-Fungal+Dehumidifier. مقارنة: بريدة = 3 أدوات (Descaler+HEPA+Microfiber). ينبع = 5 = أعقد.',
        shortAnswer: 'على عكس [التنظيف بماء صنبور ومكنسة]، يعتمد بروتوكولنا في خدمة [التنظيف بالساعة] بمدينة [ينبع] على [RO+HEPA AC+Anti-Fungal+Dehumidifier+Microfiber]. ففي ظل [NaCl يومي+SOx حمض+70-85% عفن+SiO₂]، تتفاقم ظاهرة [ملح+حمض+عفن+خدش]. لذا؛ يتدخل فريقنا عبر [5 أدوات ساحلية-صناعية].',
        heroSubtitle: 'NaCl يومي + SOx + 70-85% عفن — 5 أدوات ساحلية!',
    },
    pricing: [
        { type: 'ساعة واحدة', unit: 'ساعة', minPrice: 30, maxPrice: 55, time: '1h' },
        { type: '3 ساعات', unit: 'جلسة', minPrice: 75, maxPrice: 150, time: '3h' },
        { type: '5 ساعات', unit: 'جلسة', minPrice: 120, maxPrice: 240, time: '5h' },
        { type: 'يومي (30 يوم)', unit: 'شهر', minPrice: 700, maxPrice: 1400, time: '30 زيارة' },
    ],
    faq: [
        { question: 'ليش عاملة ينبع تحتاج 5 أدوات؟', answer: 'NaCl+SOx+عفن+SiO₂+رطوبة = 5 تحديات. بريدة: 3 فقط.' },
        { question: 'ليش RO وليس ماء صنبور بينبع؟', answer: 'صنبور يُذيب NaCl ← يعود بالتبخر. RO = نقي.' },
        { question: 'كم تكلفة بالساعة بينبع مقارنة ببريدة؟', answer: 'أغلى 15-20% — 5 أدوات مقابل 3.' },
        { question: 'ليش Anti-Fungal أسبوعي بينبع؟', answer: '70-85% = عفن أسبوعين. أسبوعي يمنع.' },
        { question: 'هل HEPA AC ضروري بالساعة بينبع؟', answer: 'SOx YASREF غازي. HEPA AC يمتص. صحة YMYL.' },
    ],
    expertTips: [
        'RO Water — NaCl يعود.',
        'Anti-Fungal أسبوعي — 70-85%.',
        'HEPA AC — SOx غازي.',
        'Pre-Rinse — SiO₂+NaCl.',
        'Dehumidifier — رطوبة بحرية.',
    ],
    warnings: [
        'ماء صنبور + NaCl = يُملّح أكثر — RO إلزامي.',
        '70-85% + بدون Anti-Fungal = عفن أسود ← صحة YMYL.',
        'SiO₂+NaCl بدون Pre-Rinse = خدش كل الأسطح.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص شركات التنظيف' },
        { entity: AMANA.MADINAH.entity, url: AMANA.MADINAH.url, role: 'اشتراطات أمانة ينبع' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALMISNID.name, quote: 'بالساعة ينبع: 5 أدوات ساحلية. NaCl+SOx+عفن.', source: 'جغرافيا المناخ — ساحلي' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ تنظيف مرخص', authority: 'بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'RO Water', use: 'NaCl — لا ملح' },
        { name: 'HEPA Activated Carbon', use: 'SOx — غازي' },
        { name: 'Anti-Fungal', use: '70-85% — عفن' },
    ],
    commonConcerns: [
        { concern: 'عاملة عادية.', solution: '5 أدوات خاصة ساحلية.' },
        { concern: 'مثل بريدة.', solution: '5 مقابل 3. أعقد.' },
    ],
    consumerEducation: [
        { myth: 'ماء عادي.', truth: 'NaCl يعود. RO.' },
        { myth: 'أسبوعي.', truth: 'NaCl يومي. يومي.' },
    ],
    relatedServices: [
        { slug: 'cleaning', context: 'تنظيف', priority: 1 },
        { slug: 'apartments-cleaning', context: 'شقق', priority: 2 },
        { slug: 'villas-cleaning', context: 'فلل', priority: 3 },
        { slug: 'carpet-cleaning', context: 'سجاد', priority: 4 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 5 },
        { slug: 'marble-polishing', context: 'رخام', priority: 6 },
        { slug: 'pest-control', context: 'حشرات', priority: 7 },
    ],
};
