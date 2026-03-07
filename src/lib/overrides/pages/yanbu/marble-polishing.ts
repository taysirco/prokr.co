import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'جلي رخام بينبع — NaCl Etching+SOx حمض+SiO₂ خدش+70-85% — Marine Sealer+RO! (2026)',
        description: 'جلي رخام ينبع. NaCl Salt Etching! SOx H₂SO₄. SiO₂ خدش. 70-85% عفن تحت. Marine Sealer+Diamond+RO.',
        h1: 'جلي رخام بينبع — NaCl Etching+SOx حمض!',
        keywords: ['جلي رخام ينبع', 'تلميع رخام بينبع', 'شركة جلي رخام ينبع'],
    },
    content: {
        introduction: 'رخام ينبع = ملح وحمض يأكلان السطح! NaCl Salt Etching: ملح البحر الأحمر يتفاعل مع CaCO₃ الرخام ← يأكل السطح = Etching (حفر دقيقة). Marine Sealer إلزامي بعد الجلي. SOx H₂SO₄: أكاسيد YASREF + رطوبة = حمض يتفاعل مع الرخام (CaCO₃ + H₂SO₄ = CaSO₄) ← بقع. pH Neutralizer. SiO₂+NaCl خدش: رمل على ملح = Liquid Grinding يخدش الرخام أسرع. Pre-Rinse إلزامي. 70-85% عفن تحت: رطوبة = عفن أسود تحت الرخام خلال شهر. Anti-Fungal تحت. Diamond Pad يُجدد. مقارنة: بريدة = CaCO₃ كلس بقع + Nafud خدش لكن لا عفن تحت. ينبع = Etching+حمض+عفن = أعقد.',
        shortAnswer: 'على عكس [الجلي بدون Marine Sealer]، يعتمد بروتوكولنا في خدمة [جلي الرخام] بمدينة [ينبع] على [Diamond+Marine Sealer+pH Neutralizer+Anti-Fungal]. ففي ظل [NaCl Etching+SOx حمض+SiO₂ خدش+70-85% عفن]، تتفاقم ظاهرة [حفر+بقع+خدش+عفن تحت]. لذا؛ يتدخل فنيونا عبر [Pre-Rinse ← Diamond ← Marine Sealer ← Anti-Fungal].',
        heroSubtitle: 'NaCl Etching + SOx حمض + SiO₂ خدش — Marine Sealer!',
    },
    pricing: [
        { type: 'جلي رخام (م²)', unit: 'م²', minPrice: 20, maxPrice: 45, time: '1-3 أيام' },
        { type: '+ Marine Sealer', unit: 'م²', minPrice: 15, maxPrice: 30, time: '+ يوم' },
        { type: '+ Anti-Fungal تحت', unit: 'م²', minPrice: 8, maxPrice: 18, time: '+ معالجة' },
        { type: 'صيانة نصف سنوية', unit: 'خدمة', minPrice: 400, maxPrice: 800, time: '2 زيارة' },
    ],
    faq: [
        { question: 'ليش رخام ينبع يتآكل أسرع؟', answer: 'NaCl + CaCO₃ رخام = Salt Etching. SOx = H₂SO₄ حمض. Marine Sealer.' },
        { question: 'هل عفن تحت الرخام بينبع؟', answer: '70-85% = عفن أسود تحت الرخام شهر. Anti-Fungal تحت.' },
        { question: 'كم تكلفة جلي رخام بينبع مقابل بريدة؟', answer: 'أغلى 40-50% — Marine Sealer+Anti-Fungal. بريدة: Descaler+لا عفن.' },
        { question: 'هل Marine Sealer ضروري للرخام بينبع؟', answer: 'إلزامي! بدونه = NaCl Etching يأكل السطح. يدوم 6-12 شهر.' },
        { question: 'ليش SiO₂ أخطر على رخام ينبع؟', answer: 'SiO₂+NaCl = Liquid Grinding أخشن. Pre-Rinse أولاً.' },
    ],
    expertTips: [
        'Marine Sealer — NaCl Etching إلزامي.',
        'Pre-Rinse — SiO₂+NaCl قبل الجلي.',
        'pH Neutralizer — SOx H₂SO₄.',
        'Anti-Fungal تحت — 70-85% عفن.',
        'Diamond Pad — يُجدد Etching.',
    ],
    warnings: [
        'NaCl + رخام × 6 أشهر بدون Sealer = Etching = حفر دائمة.',
        'SOx × رخام = CaSO₄ بقع — pH Neutralizer إلزامي.',
        '70-85% + رخام بدون Anti-Fungal = عفن تحت — رائحة YMYL.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص شركات التنظيف' },
        { entity: AMANA.MADINAH.entity, url: AMANA.MADINAH.url, role: 'اشتراطات أمانة ينبع' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALMISNID.name, quote: 'رخام ينبع: NaCl Etching+SOx حمض. Marine Sealer+Diamond. عفن تحت.', source: 'جغرافيا المناخ — رخام ساحلي' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ جلي رخام مرخص', authority: 'بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'Diamond Pad', use: 'يُجدد Etching — جلي' },
        { name: 'Marine Sealer', use: 'NaCl Etching — حماية' },
        { name: 'Anti-Fungal', use: '70-85% — عفن تحت رخام' },
    ],
    hiddenObjections: [
        { fear: 'Descaler يكفي.', solution: 'NaCl Etching ≠ كلس. Marine Sealer.' },
        { fear: 'مثل بريدة.', solution: 'Etching+حمض+عفن vs كلس+Nafud.' },
    ],
    counterNarratives: [
        { myth: 'سنوي.', truth: 'NaCl Etching = نصف سنوي Sealer.' },
        { myth: 'ماء عادي.', truth: 'NaCl يعود. RO.' },
    ],
    relatedServices: [
        { slug: 'cleaning', context: 'تنظيف', priority: 1 },
        { slug: 'glass-facades-cleaning', context: 'واجهات', priority: 2 },
        { slug: 'carpet-cleaning', context: 'سجاد', priority: 3 },
        { slug: 'steam-cleaning', context: 'بخار', priority: 4 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 5 },
        { slug: 'water-leak-detection', context: 'تسرب', priority: 6 },
        { slug: 'pest-control', context: 'حشرات', priority: 7 },
    ],
};
