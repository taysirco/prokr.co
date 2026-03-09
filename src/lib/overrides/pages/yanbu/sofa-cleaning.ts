import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف كنب بينبع — NaCl تبلور+SOx حمض+70-85% عفن — Anti-Fungal+RO+Dehumidifier! (2026)',
        description: 'تنظيف كنب ينبع. NaCl يتبلور في الأقمشة! SOx حمض. 70-85% عفن خلف. Anti-Fungal+RO+Dehumidifier.',
        h1: 'تنظيف كنب بينبع — ملح يتبلور+عفن!',
        keywords: ['تنظيف كنب ينبع', 'تنظيف كنب بينبع', 'شركة تنظيف كنب ينبع'],
    },
    content: {
        introduction: 'كنب ينبع = NaCl يتبلور داخل الألياف! NaCl تبلور: ملح البحر يتبلور داخل تنجيد الكنب ← يُخشّن الملمس ← يُفتّت الألياف من الداخل. RO Extraction إلزامي. SOx H₂SO₄: طبقة حمضية لزجة تغيّر لون الكنب. pH Neutralizer. 70-85% عفن: رطوبة بحرية = عفن أسود خلف الكنب وتحت المساند أسبوعين! Anti-Fungal+Dehumidifier. تجفيف 4-6h. SiO₂+NaCl خدش: رمل على ملح = Liquid Grinding يخدش أقمشة ناعمة. HEPA أولاً. مقارنة: بريدة = Nafud يقطع+CaCO₃ يُخشّن لكن تجفيف 15 دقيقة+لا عفن = أرخص 30%. ينبع = ملح+حمض+عفن+4-6h = أعقد.',
        shortAnswer: 'على عكس [الشامبو بماء صنبور]، يعتمد بروتوكولنا في خدمة [تنظيف الكنب] بمدينة [ينبع] على [RO Extraction+Anti-Fungal+pH Neutralizer+Dehumidifier]. ففي ظل [NaCl تبلور+SOx حمض+70-85% عفن+SiO₂]، تتفاقم ظاهرة [تبلور+تغير لون+عفن]. لذا؛ يتدخل فريقنا عبر [HEPA ← RO ← Anti-Fungal ← Dehumidifier] — 4-6h!',
        heroSubtitle: 'NaCl تبلور + SOx حمض + 70-85% عفن — Anti-Fungal+RO!',
    },
    pricing: [
        { type: 'كنبة 3 مقاعد', unit: 'كنبة', minPrice: 60, maxPrice: 130, time: '30-45 دقيقة + 4h تجفيف' },
        { type: 'طقم (5 قطع)', unit: 'طقم', minPrice: 180, maxPrice: 370, time: '2-3h + تجفيف' },
        { type: '+ Anti-Fungal عميق', unit: 'إضافي', minPrice: 70, maxPrice: 150, time: '+ معالجة' },
        { type: 'شهري (4 زيارات)', unit: 'شهر', minPrice: 300, maxPrice: 600, time: '4 زيارات' },
    ],
    faq: [
        { question: 'ليش كنب ينبع يخشن؟', answer: 'NaCl يتبلور في الألياف. ماء صنبور = أسوأ. RO Extraction.' },
        { question: 'ليش عفن خلف الكنب بينبع؟', answer: '70-85% رطوبة. عفن أسود أسبوعين. Anti-Fungal+Dehumidifier.' },
        { question: 'كم تجفيف كنب بينبع؟', answer: '4-6h! بريدة: 15 دقيقة. Dehumidifier يُقلّل.' },
        { question: 'هل SOx يغيّر لون الكنب بينبع؟', answer: 'SOx+NaCl = H₂SO₄ يغيّر لون. pH Neutralizer.' },
        { question: 'كم تكلفة كنب بينبع مقابل بريدة؟', answer: 'أغلى 30-40% — Anti-Fungal+4-6h. بريدة: لا عفن.' },
    ],
    expertTips: [
        'RO Extraction — NaCl يتبلور!',
        'Anti-Fungal — 70-85% عفن.',
        'HEPA أولاً — SiO₂+NaCl.',
        'Dehumidifier — 4-6h تجفيف.',
        'pH Neutralizer — SOx حمض.',
    ],
    warnings: [
        'NaCl + ماء صنبور = يُملّح كنب أكثر — RO إلزامي.',
        '70-85% + كنب مبلول = عفن أسود ← صحة YMYL.',
        'SiO₂+NaCl بدون HEPA = يخدش أقمشة ناعمة.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص شركات التنظيف' },
        { entity: AMANA.MADINAH.entity, url: AMANA.MADINAH.url, role: 'اشتراطات أمانة ينبع' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALMISNID.name, quote: 'كنب ينبع: NaCl يتبلور+عفن أسبوعين. RO+Anti-Fungal.', source: 'جغرافيا المناخ — كنب ساحلي' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ تنظيف كنب مرخص', authority: 'بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'RO Extraction', use: 'NaCl — تبلور' },
        { name: 'Anti-Fungal', use: '70-85% — عفن' },
        { name: 'Dehumidifier', use: 'تجفيف 4-6h' },
    ],
    hiddenObjections: [
        { fear: 'شامبو يكفي.', solution: 'NaCl يتبلور. RO.' },
        { fear: 'مثل بريدة.', solution: 'عفن+4-6h vs 15 دقيقة.' },
    ],
    counterNarratives: [
        { myth: 'ماء عادي.', truth: 'NaCl يتبلور = يُملّح. RO.' },
        { myth: 'تجفيف سريع.', truth: '70-85% = 4-6h.' },
    ],
    relatedServices: [
        { slug: 'councils-cleaning', context: 'مجالس', priority: 1 },
        { slug: 'carpet-cleaning', context: 'سجاد', priority: 2 },
        { slug: 'cleaning', context: 'تنظيف', priority: 3 },
        { slug: 'steam-cleaning', context: 'بخار', priority: 4 },
        { slug: 'furniture-cleaning', context: 'أثاث', priority: 5 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 6 },
        { slug: 'pest-control', context: 'حشرات', priority: 7 },
    ],
};
