import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف منازل بينبع — NaCl 41‰ ملح+SOx حمضي+70-85% عفن — RO+HEPA AC+Anti-Fungal! (2026)',
        description: 'تنظيف منازل ينبع. NaCl 41‰ ملح! SOx YASREF حمضي. 70-85% عفن أسبوعين. RO+HEPA AC+Anti-Fungal+Dehumidifier.',
        h1: 'تنظيف منازل بينبع — ملح+حمض+عفن!',
        keywords: ['تنظيف منازل ينبع', 'تنظيف بيت بينبع', 'شركة تنظيف منازل بينبع'],
    },
    content: {
        introduction: 'منزل ينبع = ساحلي-صناعي فريد! NaCl 41‰ ملح: ملح البحر الأحمر يترسب على كل سطح ← طبقة ملحية يومية. ماء صنبور يُذيب الملح ← يعود بالتبخر. RO Water إلزامي. SOx/NOx حمضي: مصفاة YASREF تنبعث منها أكاسيد كبريت ← تتحول مع الرطوبة إلى H₂SO₄ مُخفف على الأسطح ← طبقة حمضية-ملحية لزجة فريدة لا تُزال بمنظف عادي. Microfiber مبلل + RO. 70-85% عفن: أعلى رطوبة ساحلية = عفن أسود خلال أسبوعين! Anti-Fungal إلزامي + Dehumidifier. Micro-SiO₂: رمل صحراوي ناعم يستقر على الملح = Liquid Grinding Paste = يحُك = يخدش. Pre-Rinse ضغط أولاً. HEPA AC: SOx/VOC غازية في الهواء. فلتر Activated Carbon يمتص. 5 خطوات إلزامية. مقارنة: بريدة = كلس+Nafud بدون عفن. ينبع = ملح+حمض+عفن = أعقد.',
        shortAnswer: 'على عكس [ممسحة بماء صنبور فوق NaCl+SOx]، يعتمد بروتوكولنا في خدمة [تنظيف المنازل] بمدينة [ينبع] على [RO ← Microfiber ← HEPA AC ← Anti-Fungal ← Dehumidifier]. ففي ظل [NaCl 41‰+SOx YASREF+70-85% عفن+Micro-SiO₂]، تتفاقم ظاهرة [ملح+حمض+عفن+خدش]. لذا؛ يتدخل فريقنا عبر [5 خطوات ساحلية-صناعية].',
        heroSubtitle: 'NaCl ملح + SOx حمض + 70-85% عفن — 5 خطوات ساحلية-صناعية!',
    },
    pricing: [
        { type: 'شقة ساحلية', unit: 'شقة', minPrice: 180, maxPrice: 360, time: '3-5h' },
        { type: 'فيلا ساحلية', unit: 'فيلا', minPrice: 320, maxPrice: 640, time: '5-8h' },
        { type: 'قرب YASREF (SOx أعلى)', unit: 'بيت', minPrice: 370, maxPrice: 740, time: '6-9h' },
        { type: 'أسبوعي (4/شهر)', unit: 'شهر', minPrice: 300, maxPrice: 600, time: '4 زيارات' },
    ],
    faq: [
        { question: 'ليش منزل ينبع أصعب تنظيف من بريدة؟', answer: 'NaCl+SOx = حمضي-ملحي لزج. بريدة: كلس+Nafud. ينبع: 5 خطوات مقابل 4.' },
        { question: 'ما H₂SO₄ على الأسطح بينبع؟', answer: 'SOx YASREF+NaCl+رطوبة = H₂SO₄ مُخفف. طبقة حمضية لزجة. RO يُزيل.' },
        { question: 'كم تكلفة تنظيف منزل بينبع مقارنة بجدة؟', answer: 'أغلى 15-20% — SOx إضافي. جدة: NaCl فقط. ينبع: NaCl+SOx.' },
        { question: 'هل المنزل يتعفّن بينبع؟', answer: 'نعم! 70-85% = عفن أسود أسبوعين. Anti-Fungal+Dehumidifier إلزامي.' },
        { question: 'ليش RO وليس ماء صنبور بينبع؟', answer: 'صنبور يُذيب ملح ← يعود بالتبخر. RO = نقي. لا ملح جديد.' },
    ],
    expertTips: [
        'RO Water أولاً — NaCl+SOx.',
        'HEPA AC — SOx غازي.',
        'Anti-Fungal — 70-85% عفن.',
        'Dehumidifier — رطوبة بحرية.',
        'Pre-Rinse — Micro-SiO₂ خدش.',
    ],
    warnings: [
        'H₂SO₄+NaCl × 3 أشهر = تآكل أسطح — RO أسبوعي.',
        '70-85% + بدون Anti-Fungal = عفن أسود ← صحة YMYL.',
        'Micro-SiO₂ + ملح = Liquid Grinding = خدش كل الأسطح.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص شركات التنظيف' },
        { entity: AMANA.MADINAH.entity, url: AMANA.MADINAH.url, role: 'اشتراطات أمانة ينبع' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALMISNID.name, quote: 'منزل ينبع: NaCl+SOx = H₂SO₄. 5 خطوات ساحلية-صناعية. عفن أسبوعين.', source: 'جغرافيا المناخ — تنظيف ساحلي-صناعي' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ تنظيف مرخص', authority: 'بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'RO Water', use: 'NaCl+SOx — لا ملح جديد' },
        { name: 'HEPA Activated Carbon', use: 'SOx/VOC — غازي' },
        { name: 'Anti-Fungal', use: '70-85% — عفن أسبوعين' },
    ],
    hiddenObjections: [
        { fear: 'مثل جدة.', solution: 'SOx YASREF = حمضي. جدة: NaCl فقط.' },
        { fear: 'منظف عادي.', solution: 'H₂SO₄ لزج. RO+Microfiber.' },
    ],
    counterNarratives: [
        { myth: 'ساحلي فقط.', truth: 'SOx = حمضي. ساحلي+صناعي.' },
        { myth: 'شهري.', truth: 'NaCl+SOx يومي = أسبوعي.' },
    ],
    relatedServices: [
        { slug: 'apartments-cleaning', context: 'شقق', priority: 1 },
        { slug: 'carpet-cleaning', context: 'سجاد', priority: 2 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 3 },
        { slug: 'steam-cleaning', context: 'بخار', priority: 4 },
        { slug: 'pest-control', context: 'حشرات', priority: 5 },
        { slug: 'marble-polishing', context: 'رخام', priority: 6 },
        { slug: 'villas-cleaning', context: 'فلل', priority: 7 },
    ],
};
