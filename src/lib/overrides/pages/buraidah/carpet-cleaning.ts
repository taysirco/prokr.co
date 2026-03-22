import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../gov-references';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف سجاد ببريدة — Nafud SiO₂ ناعم يقطع+CaCO₃ 600ppm خشونة+نخيل — HEPA! (2026)',
        description: 'تنظيف سجاد بريدة. Nafud SiO₂ ناعم يقطع ألياف! CaCO₃ 600ppm خشونة. حبوب نخيل. HEPA+RO+Pollen Filter.',
        h1: 'تنظيف سجاد ببريدة — Nafud يقطع+أعلى كلس!',
        keywords: ['تنظيف سجاد بريدة', 'غسيل سجاد ببريدة', 'شركة تنظيف سجاد بريدة'],
    },
    content: {
        introduction: 'سجاد بريدة = Nafud يقطع الألياف! Nafud SiO₂ ناعم 10-50 μm: رمل النفود أنعم وأخطر من الرمل العادي = يتغلغل بين ألياف السجاد ← كل مشي يقطع الألياف من الداخل. HEPA Extraction يسحب قبل أن يقطع. CaCO₃ 600ppm خشونة: لو غُسل بماء صنبور = أعلى كلس بالمملكة يترسب في الألياف ← يُخشّن السجاد حتى السجاد الناعم. RO Rinse إلزامي. حبوب نخيل 8M: حبوب لقاح (مارس-مايو) تتراكم في السجاد ← مسبب حساسية رقم 1 ببريدة. HEPA Pollen Filter. ΔT 45°م: تجفيف 15-20 دقيقة! 10-20% = لا عفن لا عث! ميزة كبيرة. مقارنة: خميس = عفن+عث+4-8h تجفيف+Anti-Fungal+Anti-Mite. بريدة = Nafud+كلس+نخيل لكن لا عفن = أبسط.',
        shortAnswer: 'على عكس [الشامبو بماء صنبور بدون HEPA]، يعتمد بروتوكولنا في خدمة [تنظيف السجاد] بمدينة [بريدة] على [HEPA Extraction+RO+Pollen Filter]. ففي ظل [Nafud يقطع+CaCO₃ 600ppm+نخيل 8M+10-20%]، تتفاقم ظاهرة [قطع ألياف+خشونة+حساسية]. لذا؛ يتدخل فريقنا عبر [HEPA سحب ← غسل ← RO ← تجفيف 15 دقيقة] — لا عفن!',
        heroSubtitle: 'Nafud يقطع ألياف + CaCO₃ 600ppm خشونة + نخيل — HEPA+RO!',
    },
    pricing: [
        { type: 'سجادة عادية (2×3)', unit: 'سجادة', minPrice: 30, maxPrice: 60, time: '30 دقيقة + 15 تجفيف' },
        { type: 'سجادة كبيرة (4×6)', unit: 'سجادة', minPrice: 60, maxPrice: 120, time: '45 دقيقة' },
        { type: 'موكيت (م²)', unit: 'م²', minPrice: 8, maxPrice: 18, time: 'حسب المساحة' },
        { type: 'شهري (4 HEPA)', unit: 'شهر', minPrice: 200, maxPrice: 400, time: '4 زيارات' },
    ],
    faq: [
        { question: 'ليش سجاد بريدة يتلف أسرع؟', answer: 'Nafud 10-50 μm ناعم يتغلغل ← يقطع الألياف من الداخل. HEPA يسحب قبل القطع.' },
        { question: 'ليش السجاد يخشن بعد الغسل ببريدة؟', answer: 'CaCO₃ 600ppm أعلى كلس بالمملكة. RO Rinse = لا كلس = ناعم.' },
        { question: 'كم تكلفة تنظيف سجاد ببريدة مقارنة بخميس؟', answer: 'أرخص 25-30% — لا Anti-Fungal+Anti-Mite+تجفيف 15 دقيقة.' },
        { question: 'هل السجاد يتعفّن ببريدة؟', answer: 'لا! 10-20% = لا عفن. تجفيف 15-20 دقيقة. أفضل بيئة تجفيف.' },
        { question: 'هل حبوب النخيل تأثر على السجاد ببريدة؟', answer: '8M نخلة = حبوب لقاح. حساسية تنفسية. HEPA Pollen = يُزيل. مارس-مايو أخطر.' },
    ],
    expertTips: [
        'HEPA Extraction — Nafud يقطع ألياف.',
        'RO Rinse — CaCO₃ 600ppm خشونة.',
        'HEPA Pollen — نخيل مارس-مايو.',
        'تجفيف 15 دقيقة — لا عفن!',
        'HEPA شهري — يمنع قطع تراكمي.',
    ],
    warnings: [
        'Nafud × 6 أشهر بدون HEPA = ألياف مقطوعة — سجاد تالف.',
        'CaCO₃ 600ppm + ماء صنبور = أعلى خشونة — RO إلزامي.',
        'نخيل × ربيع + سجاد بدون HEPA = حساسية تنفسية خطيرة.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص شركات التنظيف' },
        { entity: AMANA.QASSIM.entity, url: AMANA.QASSIM.url, role: 'اشتراطات أمانة القصيم' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALMISNID.name, quote: 'سجاد بريدة: Nafud يقطع ألياف. 600ppm خشونة. نخيل حساسية. HEPA+RO.', source: 'جغرافيا المناخ — القصيم' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ تنظيف سجاد مرخص', authority: 'بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'HEPA Extraction', use: 'يسحب Nafud — يمنع قطع ألياف' },
        { name: 'RO Water', use: 'شطف بدون CaCO₃ 600ppm' },
        { name: 'HEPA Pollen', use: 'حبوب لقاح نخيل 8M' },
    ],
    commonConcerns: [
        { concern: 'مكنسة عادية تكفي.', solution: 'Nafud 10 μm يمر. HEPA يوقف.' },
        { concern: 'مثل عنيزة.', solution: 'نفس 600ppm لكن بريدة: 8M نخلة = لقاح أعلى.' },
    ],
    consumerEducation: [
        { myth: 'شامبو يكفي.', truth: 'Nafud يقطع. HEPA أولاً.' },
        { myth: 'ماء عادي.', truth: '600ppm = أعلى خشونة. RO.' },
    ],
    relatedServices: [
        { slug: 'sofa-cleaning', context: 'كنب', priority: 1 },
        { slug: 'councils-cleaning', context: 'مجالس', priority: 2 },
        { slug: 'cleaning', context: 'تنظيف', priority: 3 },
        { slug: 'steam-cleaning', context: 'بخار', priority: 4 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 5 },
        { slug: 'furniture-cleaning', context: 'أثاث', priority: 6 },
        { slug: 'marble-polishing', context: 'رخام', priority: 7 },
    ],
};
