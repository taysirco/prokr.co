import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف سجاد بينبع — NaCl ملح+SOx حمض+70-85% عفن+SiO₂ خدش — RO+Anti-Fungal! (2026)',
        description: 'تنظيف سجاد ينبع. NaCl ملح يتراكم! SOx H₂SO₄ حمض. 70-85% عفن. SiO₂ خدش ألياف. RO+Anti-Fungal+HEPA.',
        h1: 'تنظيف سجاد بينبع — ملح+حمض+عفن+خدش!',
        keywords: ['تنظيف سجاد ينبع', 'تنظيف سجادة بينبع', 'شركة تنظيف سجاد ينبع'],
    },
    content: {
        introduction: 'سجاد ينبع = ملح يتبلور في الألياف! NaCl ملح: ملح البحر الأحمر يدخل البيت ← يتبلور داخل ألياف السجاد ← يُخشّن الملمس ← يُفتّت الألياف. RO Extraction إلزامي. SOx H₂SO₄: طبقة حمضية-ملحية لزجة تتراكم على السجاد ← تغيّر لون الألياف. RO+pH Neutralizer. 70-85% عفن: أعلى رطوبة = سجاد يتعفّن تحته خلال أسبوعين! Anti-Fungal + تجفيف 4-8h (مقابل 15 دقيقة ببريدة!). Dehumidifier إلزامي. SiO₂ خدش: رمل على ملح = خشن أكثر = يقطع ألياف من الداخل. HEPA Extraction أولاً. مقارنة: بريدة = Nafud+CaCO₃ لكن تجفيف 15 دقيقة. ينبع = 4-8h تجفيف + Anti-Fungal + Anti-Mold = أغلى 40%.',
        shortAnswer: 'على عكس [الشامبو بماء صنبور الذي يُملّح]، يعتمد بروتوكولنا في خدمة [تنظيف السجاد] بمدينة [ينبع] على [RO Extraction+Anti-Fungal+pH Neutralizer+Dehumidifier]. ففي ظل [NaCl تبلور+SOx حمض+70-85% عفن+SiO₂ خدش]، تتفاقم ظاهرة [تبلور+تغير لون+عفن+قطع]. لذا؛ يتدخل فريقنا عبر [HEPA ← RO ← Anti-Fungal ← Dehumidifier] — 4-8h تجفيف!',
        heroSubtitle: 'NaCl تبلور + SOx حمض + 70-85% عفن — RO+Anti-Fungal!',
    },
    pricing: [
        { type: 'سجادة (م²)', unit: 'م²', minPrice: 8, maxPrice: 18, time: 'حسب المساحة + 4-8h تجفيف' },
        { type: 'سجادة + Anti-Fungal', unit: 'م²', minPrice: 12, maxPrice: 25, time: '+ معالجة' },
        { type: 'موكيت غرفة', unit: 'غرفة', minPrice: 100, maxPrice: 220, time: '2-3h + تجفيف' },
        { type: 'شهري (4 زيارات)', unit: 'شهر', minPrice: 250, maxPrice: 500, time: '4 زيارات' },
    ],
    faq: [
        { question: 'ليش سجاد ينبع يتعفّن أسرع بكثير؟', answer: '70-85% رطوبة بحرية. عفن تحت السجاد أسبوعين. Anti-Fungal+Dehumidifier.' },
        { question: 'ليش السجاد يخشن بينبع؟', answer: 'NaCl يتبلور داخل الألياف = بلورات تُفتّت. RO Extraction.' },
        { question: 'كم تكلفة سجاد بينبع مقابل بريدة؟', answer: 'أغلى 40% — Anti-Fungal+4-8h تجفيف. بريدة: 15 دقيقة+لا عفن.' },
        { question: 'ليش SiO₂ أخطر على سجاد ينبع؟', answer: 'SiO₂ يستقر على NaCl = أخشن. يقطع ألياف أسرع. HEPA أولاً.' },
        { question: 'كم يستغرق تجفيف السجاد بينبع؟', answer: '4-8 ساعات! 70-85%. Dehumidifier يُقلّل لـ 2-3h.' },
    ],
    expertTips: [
        'HEPA أولاً — SiO₂+NaCl قبل الغسل.',
        'RO Extraction — NaCl يتبلور.',
        'Anti-Fungal — 70-85% عفن.',
        'Dehumidifier — 4-8h تجفيف.',
        'pH Neutralizer — SOx حمض.',
    ],
    warnings: [
        'NaCl + ماء صنبور = يُملّح أكثر — RO إلزامي.',
        '70-85% + سجاد مبلول = عفن أسود — 4-8h تجفيف+Dehumidifier.',
        'SiO₂+NaCl بدون HEPA = قطع ألياف — سجاد يتلف.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص شركات التنظيف' },
        { entity: AMANA.MADINAH.entity, url: AMANA.MADINAH.url, role: 'اشتراطات أمانة ينبع' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALMISNID.name, quote: 'سجاد ينبع: NaCl يتبلور+70-85% عفن. RO+Anti-Fungal. 4-8h تجفيف.', source: 'جغرافيا المناخ — سجاد ساحلي' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ تنظيف سجاد مرخص', authority: 'بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'RO Extraction', use: 'NaCl — لا ملح جديد' },
        { name: 'Anti-Fungal', use: '70-85% — عفن أسبوعين' },
        { name: 'Dehumidifier', use: 'تجفيف 4-8h — رطوبة' },
    ],
    hiddenObjections: [
        { fear: 'مثل بريدة.', solution: 'عفن+4-8h vs 15 دقيقة. مختلف.' },
        { fear: 'شامبو يكفي.', solution: 'NaCl يتبلور+SOx حمض. RO.' },
    ],
    counterNarratives: [
        { myth: 'ماء عادي.', truth: 'NaCl يتبلور = أخشن. RO.' },
        { myth: 'تجفيف سريع.', truth: '70-85% = 4-8h. Dehumidifier.' },
    ],
    relatedServices: [
        { slug: 'cleaning', context: 'تنظيف', priority: 1 },
        { slug: 'sofa-cleaning', context: 'كنب', priority: 2 },
        { slug: 'councils-cleaning', context: 'مجالس', priority: 3 },
        { slug: 'steam-cleaning', context: 'بخار', priority: 4 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 5 },
        { slug: 'pest-control', context: 'حشرات', priority: 6 },
        { slug: 'apartments-cleaning', context: 'شقق', priority: 7 },
    ],
};
