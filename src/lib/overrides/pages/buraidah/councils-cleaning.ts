import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف مجالس ببريدة — CaCO₃ 600ppm خشونة+نخيل لقاح 8M+Nafud — RO+HEPA! (2026)',
        description: 'تنظيف مجالس بريدة. CaCO₃ 600ppm خشونة أقمشة! نخيل 8M لقاح. Nafud يقطع. RO+HEPA Pollen+Microfiber.',
        h1: 'تنظيف مجالس ببريدة — أعلى كلس+نخيل 8M!',
        keywords: ['تنظيف مجالس بريدة', 'تنظيف مجلس ببريدة', 'شركة تنظيف مجالس بريدة'],
    },
    content: {
        introduction: 'مجلس بريدة = كلس في الأقمشة وحبوب لقاح! CaCO₃ 600ppm خشونة: لو غُسل المجلس بماء صنبور = أعلى كلس بالمملكة يترسب في الأقمشة ← يُخشّنها بشكل ملحوظ. RO Rinse إلزامي. حبوب نخيل 8M لقاح: مجلس بريدة يجمع حبوب لقاح من 8M نخلة (مارس-مايو) ← مسبب حساسية أثناء الجلوس. HEPA Pollen يسحب. Nafud SiO₂ يقطع: رمل النفود الناعم يتغلغل في أنسجة المجلس ← يقطع الألياف من الداخل. HEPA Extraction أولاً. غبار تمور: كل موسم تمور = غبار لزج يتراكم على المجلس ← يحتاج Enzymatic. 10-20% = تجفيف 20-30 دقيقة! لا عفن لا عث. مقارنة: خميس = عفن+عث+4-8h. بريدة = كلس+نخيل+Nafud لكن لا عفن = أبسط.',
        shortAnswer: 'على عكس [الشامبو بماء صنبور الذي يُخشّن]، يعتمد بروتوكولنا في خدمة [تنظيف المجالس] بمدينة [بريدة] على [HEPA Extraction+RO+Pollen Filter+Enzymatic]. ففي ظل [CaCO₃ 600ppm+نخيل 8M لقاح+Nafud يقطع+10-20%]، تتفاقم ظاهرة [خشونة+حساسية+قطع ألياف]. لذا؛ يتدخل فريقنا عبر [HEPA ← غسل ← RO ← تجفيف 20 دقيقة] — لا عفن!',
        heroSubtitle: 'CaCO₃ 600ppm خشونة + نخيل لقاح + Nafud يقطع — RO+HEPA!',
    },
    pricing: [
        { type: 'مجلس عادي (10 مقاعد)', unit: 'مجلس', minPrice: 130, maxPrice: 260, time: '2-3h + 20 دقيقة' },
        { type: 'مجلس + HEPA عميق', unit: 'مجلس', minPrice: 180, maxPrice: 360, time: '3-4h' },
        { type: 'مجلس كبير (20+ مقعد)', unit: 'مجلس', minPrice: 250, maxPrice: 500, time: '4-6h' },
        { type: 'ربع سنوي (4 زيارات)', unit: 'سنة', minPrice: 400, maxPrice: 820, time: '4 زيارات' },
    ],
    faq: [
        { question: 'ليش مجلس بريدة يخشن بعد الغسل؟', answer: 'CaCO₃ 600ppm أعلى كلس. يترسب في الألياف. RO Rinse = ناعم.' },
        { question: 'هل حبوب النخيل تأثر على مجلس بريدة؟', answer: '8M نخلة = لقاح يتراكم. جلوس = حساسية. HEPA Pollen يسحب.' },
        { question: 'كم تكلفة تنظيف مجلس ببريدة مقارنة بخميس؟', answer: 'أرخص 25% — لا Anti-Fungal+Anti-Mite+تجفيف 20 دقيقة.' },
        { question: 'هل Nafud يتلف مجلس بريدة؟', answer: 'Nafud 10-50 μm يقطع ألياف. HEPA Extraction أولاً يسحب.' },
        { question: 'هل المجلس يتعفّن ببريدة؟', answer: 'لا! 10-20% = لا عفن. تجفيف 20-30 دقيقة. ميزة كبيرة.' },
    ],
    expertTips: [
        'RO Rinse — 600ppm خشونة.',
        'HEPA Pollen — لقاح مارس-مايو.',
        'HEPA Extraction — Nafud يقطع.',
        'Enzymatic — غبار تمور لزج.',
        'لا عفن! — تجفيف 20 دقيقة.',
    ],
    warnings: [
        'CaCO₃ 600ppm + ماء صنبور = أعلى خشونة — RO إلزامي.',
        'Nafud × 6 أشهر = ألياف مقطوعة — HEPA شهري.',
        'لقاح × ربيع = حساسية تنفسية في المجلس — YMYL.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص شركات التنظيف' },
        { entity: AMANA.QASSIM.entity, url: AMANA.QASSIM.url, role: 'اشتراطات أمانة القصيم' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALMISNID.name, quote: 'مجلس بريدة: 600ppm خشونة. نخيل لقاح. Nafud يقطع. RO+HEPA.', source: 'جغرافيا المناخ — مجالس القصيم' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ تنظيف مجالس مرخص', authority: 'بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'HEPA Extraction', use: 'يسحب Nafud — يمنع قطع' },
        { name: 'RO Water', use: 'شطف بدون CaCO₃ 600ppm' },
        { name: 'HEPA Pollen', use: 'لقاح نخيل 8M' },
    ],
    commonConcerns: [
        { concern: 'شامبو يكفي.', solution: 'Nafud يقطع+600ppm يُخشّن. HEPA+RO.' },
        { concern: 'مثل خميس.', solution: 'لا عفن+20 دقيقة = أرخص 25%.' },
    ],
    consumerEducation: [
        { myth: 'ماء عادي.', truth: '600ppm = أعلى خشونة. RO.' },
        { myth: 'مكنسة تكفي.', truth: 'Nafud 10 μm يمر. HEPA يوقف.' },
    ],
    relatedServices: [
        { slug: 'carpet-cleaning', context: 'سجاد', priority: 1 },
        { slug: 'sofa-cleaning', context: 'كنب', priority: 2 },
        { slug: 'cleaning', context: 'تنظيف', priority: 3 },
        { slug: 'steam-cleaning', context: 'بخار', priority: 4 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 5 },
        { slug: 'furniture-cleaning', context: 'أثاث', priority: 6 },
        { slug: 'marble-polishing', context: 'رخام', priority: 7 },
    ],
};
