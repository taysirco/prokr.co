import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف سجاد بالخرج — NH₃ مزارع بلمرة حيوانية+CaCO₃ 450ppm خشونة+SiO₂ — AC! (2026)',
        description: 'تنظيف سجاد الخرج. NH₃ مزارع بلمرة حيوانية! CaCO₃ 450ppm خشونة. SiO₂ ألياف. HEPA AC+Descaler+RO+Microfiber.',
        h1: 'تنظيف سجاد بالخرج — NH₃ مزارع ألبان وكلس',
        keywords: ['تنظيف سجاد الخرج', 'غسيل سجاد بالخرج', 'شركة تنظيف سجاد الخرج'],
    },
    content: {
        introduction: 'سجاد الخرج يواجه تلوثاً زراعياً-حيوانياً فريداً! أولاً — NH₃ بلمرة حيوانية: أمونيا مزارع ألبان/دواجن تتراكم في ألياف السجاد ← تتفاعل مع الأوساخ ← بلمرة حيوانية (طبقة عضوية لزجة). الشامبو لا يصل — Enzymatic يكسّر + HEPA Activated Carbon يمتص. ثانياً — CaCO₃ 450ppm خشونة: غسل بماء صنبور = كلس يترسب في الألياف ← يُخشّن السجاد. RO Rinse إلزامي. ثالثاً — SiO₂: رمل صحراوي يخدش ألياف السجاد بالمشي ← تلف مبكر. HEPA يسحب أولاً. تجفيف: 15-25% = 20-40 دقيقة — ميزة! لا عفن لا عث! مقارنة: خميس = عفن+عث+4-8h تجفيف. الخرج = NH₃+كلس+لا عفن+20 دقيقة = أسهل 30%.',
        shortAnswer: 'على عكس [الشامبو العادي الذي لا يصل البلمرة الحيوانية]، يعتمد بروتوكولنا في خدمة [تنظيف السجاد] بمدينة [الخرج] على [Enzymatic+HEPA AC+RO+Microfiber]. ففي ظل [NH₃ بلمرة+CaCO₃ 450ppm+SiO₂+15-25%]، تتفاقم ظاهرة [بلمرة حيوانية+خشونة+خدش]. لذا؛ يتدخل فريقنا عبر [شفط ← إنزيم ← غسل RO ← تجفيف 20 دقيقة].',
        heroSubtitle: 'NH₃ بلمرة حيوانية + CaCO₃ خشونة — لا عفن! تجفيف سريع!',
    },
    pricing: [
        { type: 'سجادة عادية (3×4)', unit: 'سجادة', minPrice: 40, maxPrice: 80, time: '20-40 دقيقة + تجفيف' },
        { type: 'سجادة + AC NH₃ عميق', unit: 'سجادة', minPrice: 55, maxPrice: 110, time: '30-60 دقيقة' },
        { type: 'موكيت (م²)', unit: 'م²', minPrice: 6, maxPrice: 12, time: 'حسب المساحة' },
        { type: 'ربع سنوي (4 زيارات)', unit: 'سنة', minPrice: 130, maxPrice: 270, time: '4 زيارات' },
    ],
    faq: [
        { question: 'ليش سجاد الخرج له رائحة مزارع؟', answer: 'NH₃ أمونيا تتراكم في الألياف ← بلمرة حيوانية. الشامبو يُخفي — Enzymatic+AC يُزيل.' },
        { question: 'ليش السجاد يخشن بعد الغسل بالخرج؟', answer: 'CaCO₃ 450ppm في ماء الصنبور يترسب في الألياف = خشونة. RO Rinse = لا كلس = ناعم.' },
        { question: 'كم تكلفة تنظيف سجاد بالخرج مقارنة بخميس؟', answer: 'أرخص 30%! لا Anti-Fungal+لا Anti-Mite+تجفيف 20 دقيقة (خميس: 4-8h).' },
        { question: 'هل السجاد يتعفّن بالخرج مثل خميس؟', answer: 'لا! 15-25% = لا عفن لا عث. ميزة كبيرة. تجفيف 20-40 دقيقة.' },
        { question: 'كم مرة أنظف السجاد بالخرج؟', answer: 'ربع سنوي — NH₃ يتراكم. قرب مزرعة = كل شهرين. SiO₂ يومي = HEPA أسبوعي.' },
    ],
    expertTips: [
        'Enzymatic — يكسّر بلمرة حيوانية NH₃.',
        'HEPA AC — يسحب SiO₂ + يمتص NH₃.',
        'RO Rinse — CaCO₃ بدونه = خشونة.',
        'لا عفن! ميزة — تجفيف 20-40 دقيقة.',
        'قرب مزرعة = تنظيف أكثر — NH₃ أعلى.',
    ],
    warnings: [
        'NH₃ × 6 أشهر = بلمرة حيوانية لا تُزال — تغيير سجادة.',
        'CaCO₃ + ماء صنبور كل غسلة = سجاد خشن — RO إلزامي.',
        'SiO₂ + مشي بدون HEPA = خدش ألياف — تلف مبكر.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص شركات التنظيف' },
        { entity: AMANA.RIYADH.entity, url: AMANA.RIYADH.url, role: 'اشتراطات أمانة الرياض' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALMISNID.name, quote: 'سجاد الخرج: NH₃ بلمرة حيوانية. Enzymatic+AC. ميزة: لا عفن+تجفيف سريع.', source: 'نصائح هندسية — أقمشة زراعية' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ تنظيف سجاد مرخص', authority: 'بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'Enzymatic Cleaner', use: 'يكسّر بلمرة حيوانية NH₃' },
        { name: 'HEPA Activated Carbon', use: 'يمتص NH₃ + يسحب SiO₂' },
        { name: 'RO Water', use: 'شطف بدون CaCO₃ — لا خشونة' },
    ],
    hiddenObjections: [
        { fear: 'مثل الرياض.', solution: 'NH₃ مزارع+CaCO₃. الرياض: لا.' },
        { fear: 'شامبو يكفي.', solution: 'بلمرة حيوانية عميقة. Enzymatic.' },
    ],
    consumerEducation: [
        { myth: 'ماء صنبور يكفي.', truth: 'CaCO₃ 450ppm = خشونة. RO.' },
        { myth: 'مثل خميس.', truth: 'لا عفن+لا عث+20 دقيقة = أسهل 30%.' },
    ],
    relatedServices: [
        { slug: 'sofa-cleaning', context: 'كنب', priority: 1 },
        { slug: 'councils-cleaning', context: 'مجالس', priority: 2 },
        { slug: 'cleaning', context: 'تنظيف', priority: 3 },
        { slug: 'steam-cleaning', context: 'بخار', priority: 4 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 5 },
        { slug: 'pest-control', context: 'حشرات', priority: 6 },
        { slug: 'marble-polishing', context: 'رخام', priority: 7 },
    ],
};
