import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../gov-references';

export const override: PageOverride = {
    meta: {
        title: 'تسليك مجاري بينبع — NaCl تآكل+70-85% Biofilm+تحلية+SOx — Hydro+Anti-Corrosion! (2026)',
        description: 'تسليك مجاري ينبع. NaCl تآكل أنابيب! 70-85% Biofilm. تحلية TDS<150. Hydro Jetting+Anti-Corrosion.',
        h1: 'تسليك مجاري بينبع — NaCl تآكل+Biofilm!',
        keywords: ['تسليك مجاري ينبع', 'تسليك مجاري بينبع', 'شركة تسليك مجاري ينبع'],
    },
    content: {
        introduction: 'مجاري ينبع = NaCl يأكل الأنابيب+Biofilm يسد! NaCl تآكل: ملح البحر يتآكل أنابيب المجاري المعدنية من الخارج ← نقاط ضعف ← تسرب. Anti-Corrosion+PPR بديل. 70-85% Biofilm: رطوبة = Biofilm بيولوجي (طبقة بكتيرية لزجة) يتراكم داخل المجاري أسرع ← يسد. Hydro Jetting+Anti-Bacterial. تحلية TDS<150: مياه محلاة لا تترك Scale مثل بريدة (CaCO₃). لكن: تتآكل الأنابيب. SOx: لا يأثر مباشرة. حرارة 45°م: تحلل عضوي = رائحة. تسليك صيفي. مقارنة: بريدة = CaCO₃ يسد+Nafud ترسيب. ينبع = NaCl تآكل+Biofilm لكن لا Scale = مختلف.',
        shortAnswer: 'على عكس [السبرنج بدون Anti-Corrosion]، يعتمد بروتوكولنا في خدمة [تسليك المجاري] بمدينة [ينبع] على [Hydro Jetting+Anti-Bacterial+Anti-Corrosion+فحص كاميرا]. ففي ظل [NaCl تآكل+70-85% Biofilm+تحلية+حرارة]، تتفاقم ظاهرة [تآكل+انسداد بيولوجي+رائحة]. لذا؛ يتدخل فنيونا عبر [Hydro ← Anti-Bacterial ← Anti-Corrosion ← كاميرا].',
        heroSubtitle: 'NaCl تآكل + 70-85% Biofilm — Hydro+Anti-Corrosion!',
    },
    pricing: [
        { type: 'تسليك نقطة', unit: 'نقطة', minPrice: 80, maxPrice: 170, time: '30-60 دقيقة' },
        { type: 'Hydro Jetting', unit: 'خدمة', minPrice: 250, maxPrice: 520, time: '2-3h' },
        { type: '+ Anti-Bacterial', unit: 'إضافي', minPrice: 80, maxPrice: 170, time: '+ 30 دقيقة' },
        { type: 'ربع سنوي', unit: 'سنة', minPrice: 400, maxPrice: 800, time: '4 تسليك' },
    ],
    faq: [
        { question: 'ليش مجاري ينبع تنسد بطريقة مختلفة؟', answer: 'لا Scale (تحلية). لكن: Biofilm بيولوجي 70-85% يسد. Hydro+Anti-Bacterial.' },
        { question: 'هل NaCl يأثر على المجاري بينبع؟', answer: 'يتآكل أنابيب من الخارج = تسرب. Anti-Corrosion+PPR.' },
        { question: 'ما Biofilm بمجاري ينبع؟', answer: 'طبقة بكتيرية لزجة. 70-85% = تتراكم أسرع. Hydro Jetting.' },
        { question: 'كم تكلفة تسليك بينبع مقابل بريدة؟', answer: 'متقاربة. لكن: Anti-Bacterial إضافي. بريدة: Descaler.' },
        { question: 'كم مرة تسليك بينبع؟', answer: 'ربع سنوي. Biofilm 70-85% أسرع من Scale بريدة.' },
    ],
    expertTips: [
        'Hydro Jetting — Biofilm لزج.',
        'Anti-Bacterial — 70-85%.',
        'Anti-Corrosion — NaCl خارجي.',
        'PPR بديل — تحلية+NaCl.',
        'تسليك صيفي — حرارة رائحة.',
    ],
    warnings: [
        'NaCl × أنابيب حديد × سنوات = تآكل+تسرب — PPR.',
        '70-85% + Biofilm × 3 أشهر = انسداد — Hydro ربع سنوي.',
        'صيف + بدون تسليك = H₂S + رائحة — YMYL.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص شركات التسليك' },
        { entity: AMANA.MADINAH.entity, url: AMANA.MADINAH.url, role: 'اشتراطات أمانة ينبع' },
    ],
    expertReviewer: EXPERTS.ALMOHAIMED,
    expertCitations: [
        { expert: EXPERTS.ALMOHAIMED.name, quote: 'مجاري ينبع: NaCl تآكل+Biofilm لا Scale. Hydro+Anti-Bacterial.', source: 'نصائح هندسية — مجاري ساحلية' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ تسليك مرخص', authority: 'بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'Hydro Jetting', use: 'Biofilm — ضغط يُزيل' },
        { name: 'Anti-Bacterial', use: '70-85% — يمنع عودة' },
        { name: 'Anti-Corrosion', use: 'NaCl — أنابيب خارجية' },
    ],
    commonConcerns: [
        { concern: 'سبرنج يكفي.', solution: 'Biofilm لزج. Hydro.' },
        { concern: 'مثل بريدة.', solution: 'Biofilm (لا Scale). مختلف.' },
    ],
    consumerEducation: [
        { myth: 'Descaler.', truth: 'لا Scale! Biofilm = Anti-Bacterial.' },
        { myth: 'نصف سنوي.', truth: '70-85% = ربع سنوي Biofilm.' },
    ],
    relatedServices: [
        { slug: 'sewage-suction', context: 'شفط', priority: 1 },
        { slug: 'water-leak-detection', context: 'تسرب', priority: 2 },
        { slug: 'bathroom-leak-detection', context: 'حمام', priority: 3 },
        { slug: 'tanks-cleaning', context: 'خزانات', priority: 4 },
        { slug: 'cleaning', context: 'تنظيف', priority: 5 },
        { slug: 'pest-control', context: 'حشرات', priority: 6 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 7 },
    ],
};
