import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../gov-references';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف مجالس بينبع — NaCl ملح+SOx حمض+70-85% عفن أقمشة — Anti-Fungal+RO! (2026)',
        description: 'تنظيف مجالس ينبع. NaCl ملح يتبلور! SOx حمض. 70-85% عفن أقمشة. Anti-Fungal+RO+HEPA+Dehumidifier.',
        h1: 'تنظيف مجالس بينبع — ملح+حمض+عفن!',
        keywords: ['تنظيف مجالس ينبع', 'تنظيف مجلس بينبع', 'شركة تنظيف مجالس ينبع'],
    },
    content: {
        introduction: 'مجلس ينبع = NaCl يُملّح الأقمشة! NaCl ملح: ملح البحر الأحمر يتبلور داخل أقمشة المجلس ← يُخشّن الملمس ← يُفتّت الألياف. RO Extraction. SOx H₂SO₄: طبقة حمضية لزجة تغيّر لون الأقمشة. pH Neutralizer+RO. 70-85% عفن أقمشة: رطوبة بحرية = عفن أسود خلف المساند وتحت المجلس أسبوعين! Anti-Fungal+Dehumidifier. تجفيف 4-6h. SiO₂+NaCl: رمل على ملح = Liquid Grinding يخدش أقمشة ناعمة. HEPA أولاً. مقارنة: بريدة = Nafud+CaCO₃+تجفيف 15 دقيقة+لا عفن. ينبع = ملح+حمض+عفن+4-6h = أعقد بكثير.',
        shortAnswer: 'على عكس [الشامبو بماء صنبور]، يعتمد بروتوكولنا في خدمة [تنظيف المجالس] بمدينة [ينبع] على [RO Extraction+Anti-Fungal+pH Neutralizer+Dehumidifier]. ففي ظل [NaCl تبلور+SOx حمض+70-85% عفن+SiO₂]، تتفاقم ظاهرة [تبلور+تغير لون+عفن+خدش]. لذا؛ يتدخل فريقنا عبر [HEPA ← RO ← Anti-Fungal ← Dehumidifier].',
        heroSubtitle: 'NaCl ملح + SOx حمض + 70-85% عفن — Anti-Fungal+RO!',
    },
    pricing: [
        { type: 'مجلس (6 مقاعد)', unit: 'مجلس', minPrice: 180, maxPrice: 370, time: '2-3h + 4-6h تجفيف' },
        { type: 'مجلس + Anti-Fungal', unit: 'مجلس', minPrice: 230, maxPrice: 480, time: '+ معالجة' },
        { type: '+ Dehumidifier تجفيف', unit: 'إضافي', minPrice: 60, maxPrice: 130, time: 'يُقلّل تجفيف' },
        { type: 'شهري (4 زيارات)', unit: 'شهر', minPrice: 350, maxPrice: 700, time: '4 زيارات' },
    ],
    faq: [
        { question: 'ليش مجلس ينبع يخشن بعد الغسل؟', answer: 'NaCl يتبلور في الألياف. ماء صنبور = يُملّح أكثر. RO Extraction.' },
        { question: 'ليش عفن تحت المجلس بينبع؟', answer: '70-85% رطوبة. عفن أسود أسبوعين. Anti-Fungal+Dehumidifier.' },
        { question: 'كم تكلفة مجالس بينبع مقابل بريدة؟', answer: 'أغلى 40% — Anti-Fungal+4-6h. بريدة: 15 دقيقة+لا عفن.' },
        { question: 'هل SOx يغيّر لون المجلس؟', answer: 'SOx+NaCl+رطوبة = H₂SO₄ يغيّر لون. pH Neutralizer.' },
        { question: 'كم تجفيف مجلس بينبع؟', answer: '4-6 ساعات! 70-85%. Dehumidifier يُقلّل لـ 2-3h.' },
    ],
    expertTips: [
        'RO Extraction — NaCl يتبلور.',
        'Anti-Fungal — 70-85% عفن أقمشة.',
        'HEPA أولاً — SiO₂+NaCl.',
        'pH Neutralizer — SOx حمض.',
        'Dehumidifier — 4-6h تجفيف.',
    ],
    warnings: [
        'NaCl + ماء صنبور = يُملّح أقمشة — RO إلزامي.',
        '70-85% + مجلس مبلول = عفن أسود ← صحة YMYL.',
        'SiO₂+NaCl بدون HEPA = يخدش أقمشة ناعمة.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص شركات التنظيف' },
        { entity: AMANA.MADINAH.entity, url: AMANA.MADINAH.url, role: 'اشتراطات أمانة ينبع' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALMISNID.name, quote: 'مجلس ينبع: NaCl يتبلور+عفن. RO+Anti-Fungal. 4-6h تجفيف.', source: 'جغرافيا المناخ — مجالس ساحلية' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ تنظيف مجالس مرخص', authority: 'بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'RO Extraction', use: 'NaCl — لا ملح جديد' },
        { name: 'Anti-Fungal', use: '70-85% — عفن أقمشة' },
        { name: 'Dehumidifier', use: 'تجفيف 4-6h — ساحلي' },
    ],
    commonConcerns: [
        { concern: 'شامبو يكفي.', solution: 'NaCl يتبلور+SOx حمض. RO.' },
        { concern: 'مثل بريدة.', solution: 'عفن+4-6h مقابل 15 دقيقة+لا عفن.' },
    ],
    consumerEducation: [
        { myth: 'ماء عادي.', truth: 'NaCl يتبلور = يُملّح. RO.' },
        { myth: 'تجفيف سريع.', truth: '70-85% = 4-6h. Dehumidifier.' },
    ],
    relatedServices: [
        { slug: 'sofa-cleaning', context: 'كنب', priority: 1 },
        { slug: 'carpet-cleaning', context: 'سجاد', priority: 2 },
        { slug: 'cleaning', context: 'تنظيف', priority: 3 },
        { slug: 'steam-cleaning', context: 'بخار', priority: 4 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 5 },
        { slug: 'pest-control', context: 'حشرات', priority: 6 },
        { slug: 'furniture-cleaning', context: 'أثاث', priority: 7 },
    ],
};
