import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف كنب بالخرج — NH₃ بلمرة حيوانية+CaCO₃ خشونة — Enzymatic+AC+RO! (2026)',
        description: 'تنظيف كنب الخرج. NH₃ بلمرة حيوانية أقمشة! CaCO₃ خشونة. SiO₂ خدش. Enzymatic+AC+RO. تجفيف 20 دقيقة!',
        h1: 'تنظيف كنب بالخرج — NH₃ مزارع — لا عفن!',
        keywords: ['تنظيف كنب الخرج', 'تنظيف كنب بالخرج', 'شركة تنظيف كنب الخرج'],
    },
    content: {
        introduction: 'كنب الخرج = بلمرة حيوانية في الأقمشة! NH₃ بلمرة حيوانية: أمونيا مزارع ألبان/دواجن تتراكم في أقمشة الكنب يومياً ← تتفاعل مع العرق والزيوت الطبيعية ← بلمرة حيوانية (طبقة عضوية لزجة عميقة). الشامبو العادي لا يصل — Enzymatic يكسّر + HEPA Activated Carbon يمتص الرائحة. CaCO₃ 450ppm خشونة: لو غُسل الكنب بماء صنبور = كلس يترسب في الألياف ← يُخشّن الأقمشة. RO Rinse إلزامي. SiO₂ خدش: رمل يخدش الجلد والخشب حول الكنب. Microfiber. تجفيف: 15-25% = 20-30 دقيقة! لا عفن لا عث! مقارنة: خميس = عفن+عث+4-8h تجفيف+Anti-Fungal+Anti-Mite = أغلى 30%. الخرج = بلمرة حيوانية+كلس لكن لا عفن = أسرع وأرخص.',
        shortAnswer: 'على عكس [الشامبو بدون Enzymatic الذي لا يكسّر البلمرة]، يعتمد بروتوكولنا في خدمة [تنظيف الكنب] بمدينة [الخرج] على [Enzymatic+AC+RO+Microfiber]. ففي ظل [NH₃ بلمرة+CaCO₃ خشونة+SiO₂ خدش+15-25%]، تتفاقم ظاهرة [رائحة عميقة+خشونة+خدش]. لذا؛ يتدخل فريقنا عبر [إنزيم ← بخار ← AC ← RO ← 20 دقيقة تجفيف] — ميزة: لا عفن!',
        heroSubtitle: 'NH₃ بلمرة حيوانية + CaCO₃ خشونة — تجفيف 20 دقيقة!',
    },
    pricing: [
        { type: 'كنبة 3 مقاعد', unit: 'كنبة', minPrice: 50, maxPrice: 100, time: '30-60 دقيقة' },
        { type: 'طقم كامل (5-7 مقاعد)', unit: 'طقم', minPrice: 120, maxPrice: 240, time: '1.5-3h' },
        { type: '+ Enzymatic NH₃ عميق', unit: 'إضافي', minPrice: 40, maxPrice: 80, time: '30 دقيقة' },
        { type: 'ربع سنوي (4 زيارات)', unit: 'سنة', minPrice: 380, maxPrice: 760, time: '4 زيارات' },
    ],
    faq: [
        { question: 'ليش كنب الخرج له رائحة مزارع؟', answer: 'NH₃ يتراكم يومياً. بلمرة حيوانية في الأقمشة. Enzymatic+AC يكسّر ويمتص.' },
        { question: 'ليش الكنب يخشن بعد الغسل بالخرج؟', answer: 'CaCO₃ 450ppm يترسب في الألياف. RO Rinse = لا كلس = ناعم.' },
        { question: 'كم تكلفة تنظيف كنب بالخرج مقارنة بخميس؟', answer: 'أرخص 30%! لا Anti-Fungal+Anti-Mite+20 دقيقة تجفيف.' },
        { question: 'هل الكنب يتعفّن بالخرج؟', answer: 'لا! 15-25% = لا عفن. تجفيف 20-30 دقيقة. خميس: 4-8h.' },
        { question: 'كم مرة أنظف الكنب بالخرج؟', answer: 'ربع سنوي. قرب مزرعة = كل شهرين. NH₃ يومي.' },
    ],
    expertTips: [
        'Enzymatic — بلمرة حيوانية NH₃.',
        'AC — يمتص لا يُعطّر.',
        'RO Rinse — CaCO₃ خشونة.',
        'Microfiber — SiO₂ خدش خشب.',
        'لا عفن! — 20 دقيقة تجفيف.',
    ],
    warnings: [
        'NH₃ × 6 أشهر = بلمرة لا تُزال — تغيير تنجيد.',
        'CaCO₃ + ماء صنبور = خشونة تراكمية — RO.',
        'SiO₂ + مسح قطن = خدش جلد الكنب.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص شركات التنظيف' },
        { entity: AMANA.RIYADH.entity, url: AMANA.RIYADH.url, role: 'اشتراطات أمانة الرياض' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALMISNID.name, quote: 'كنب الخرج: بلمرة حيوانية NH₃. Enzymatic+AC. ميزة: لا عفن+20 دقيقة.', source: 'نصائح هندسية' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ تنظيف كنب مرخص', authority: 'بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'Enzymatic Cleaner', use: 'يكسّر بلمرة حيوانية' },
        { name: 'HEPA AC', use: 'يمتص NH₃ — رائحة' },
        { name: 'RO Water', use: 'لا CaCO₃ — لا خشونة' },
    ],
    hiddenObjections: [
        { fear: 'شامبو يكفي.', solution: 'بلمرة حيوانية = Enzymatic.' },
        { fear: 'مثل خميس.', solution: 'لا عفن+20 دقيقة = أرخص 30%.' },
    ],
    consumerEducation: [
        { myth: 'معطر.', truth: 'AC يمتص NH₃ لا يُعطّر.' },
        { myth: 'ماء صنبور.', truth: 'CaCO₃ = خشونة. RO.' },
    ],
    relatedServices: [
        { slug: 'carpet-cleaning', context: 'سجاد', priority: 1 },
        { slug: 'councils-cleaning', context: 'مجالس', priority: 2 },
        { slug: 'furniture-cleaning', context: 'أثاث', priority: 3 },
        { slug: 'cleaning', context: 'تنظيف', priority: 4 },
        { slug: 'steam-cleaning', context: 'بخار', priority: 5 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 6 },
        { slug: 'marble-polishing', context: 'رخام', priority: 7 },
    ],
};
