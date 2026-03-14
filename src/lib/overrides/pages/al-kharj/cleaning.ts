import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف منازل بالخرج — NH₃ مزارع ألبان 4 محاور+CaCO₃+SiO₂ — Activated Carbon! (2026)',
        description: 'تنظيف منازل الخرج. 4 محاور زراعية: NH₃ مزارع+CaCO₃ 450ppm+SiO₂+ΔT 48°م. HEPA AC+Descaler+RO. لا عفن! تجفيف سريع.',
        h1: 'تنظيف منازل بالخرج — 4 محاور زراعية — لا عفن!',
        keywords: ['تنظيف منازل الخرج', 'تنظيف بيوت بالخرج', 'شركة تنظيف الخرج'],
    },
    content: {
        introduction: 'منزل الخرج يتسخ بطريقة زراعية-حيوانية فريدة — 4 محاور! المحور 1 — NH₃ أمونيا: مزارع ألبان/دواجن = رائحة تدخل من النوافذ والمكيف. HEPA Activated Carbon يمتص — المعطر يُخفي فقط! المحور 2 — CaCO₃ 450ppm: آبار جوفية = كلس على الحمامات والمطبخ والحنفيات. Descaler حمضي+RO. المحور 3 — SiO₂ صحراوي: غبار رمل ناعم يخدش الأسطح لو مُسح بقطن عادي. Microfiber فقط. المحور 4 — ΔT 48°م: تشققات حرارية في الجدران. لكن: 15-25% = لا عفن ولا عث! تجفيف 20-40 دقيقة! مقارنة: الرياض = لا NH₃ ولا CaCO₃. خميس = 7 محاور + عفن + عث. الخرج = 4 محاور + لا عفن = أبسط من خميس وأعقد من الرياض.',
        shortAnswer: 'على عكس [المعطر الذي يُخفي NH₃ بدون إزالة]، يعتمد بروتوكولنا في خدمة [تنظيف المنازل] بمدينة [الخرج] على [HEPA AC+Descaler+RO+Microfiber]. ففي ظل [NH₃ مزارع+CaCO₃ 450ppm+SiO₂+ΔT 48°م]، تتفاقم ظاهرة [رائحة+كلس+خدش+تشقق]. لذا؛ يتدخل فريقنا عبر [4 محاور زراعية متكاملة] — ميزة: لا عفن!',
        heroSubtitle: '4 محاور زراعية — NH₃+CaCO₃+SiO₂+ΔT — لا عفن! تجفيف سريع!',
    },
    pricing: [
        { type: 'شقة — زراعي', unit: 'شقة', minPrice: 160, maxPrice: 320, time: '3-4h + تجفيف 20-40 دقيقة' },
        { type: 'فيلا', unit: 'فيلا', minPrice: 350, maxPrice: 700, time: '5-8h' },
        { type: '+ AC رائحة عميق', unit: 'إضافي', minPrice: 80, maxPrice: 160, time: '1-2h' },
        { type: 'أسبوعي (4 زيارات/شهر)', unit: 'شهر', minPrice: 280, maxPrice: 560, time: '4 زيارات' },
    ],
    faq: [
        { question: 'ليش منزل الخرج له رائحة غريبة؟', answer: 'NH₃ من مزارع ألبان/دواجن. المعطر يُخفي مؤقتاً — AC يمتص الجزيئات ويُزيل.' },
        { question: 'كم تكلفة تنظيف منزل بالخرج مقارنة بخميس مشيط؟', answer: 'أرخص 30-40%! 4 محاور مقابل 7. لا Anti-Fungal+Anti-Mite+تجفيف 20 دقيقة.' },
        { question: 'هل الخرج فيها عفن مثل خميس مشيط؟', answer: 'لا! 15-25% = جاف. لا عفن لا عث. ميزة كبيرة = أرخص+أبسط.' },
        { question: 'ليش كلس على الحنفيات بالخرج؟', answer: 'CaCO₃ 450ppm من آبار. Descaler حمضي يُذيب. RO يمنع تراكم جديد.' },
        { question: 'كم مرة أنظف المنزل عميق بالخرج؟', answer: 'ربع سنوي. قرب مزرعة = شهري. NH₃ يتراكم في الأقمشة يومياً.' },
    ],
    expertTips: [
        'HEPA AC — يمتص NH₃ لا يُعطّر.',
        'Descaler — CaCO₃ 450ppm كلس.',
        'Microfiber — SiO₂ يخدش القطن.',
        'لا عفن! ميزة — تجفيف 20-40 دقيقة.',
        'قرب مزرعة = أسبوعي — NH₃ أعلى.',
    ],
    warnings: [
        'NH₃ + معطر × 6 أشهر = بلمرة حيوانية في أقمشة — لا تُزال بدون Enzymatic.',
        'CaCO₃ + ماء صنبور = كلس يتراكم — RO+Descaler إلزامي.',
        'SiO₂ + مسح بقطن = خدش أسطح لامعة — Microfiber فقط.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص شركات التنظيف' },
        { entity: AMANA.RIYADH.entity, url: AMANA.RIYADH.url, role: 'اشتراطات أمانة الرياض' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALMISNID.name, quote: 'منزل الخرج: 4 محاور زراعية. NH₃+CaCO₃+SiO₂+ΔT. ميزة: لا عفن.', source: 'جغرافيا المناخ — زراعي' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ تنظيف منازل مرخص', authority: 'بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'HEPA Activated Carbon', use: 'يمتص NH₃/H₂S — لا يُعطّر' },
        { name: 'Chemical Descaler', use: 'يُذيب CaCO₃ 450ppm' },
        { name: 'Microfiber + RO', use: 'SiO₂ بدون خدش + لا كلس' },
    ],
    hiddenObjections: [
        { fear: 'مثل الرياض.', solution: 'NH₃+CaCO₃. الرياض لا مزارع ولا آبار.' },
        { fear: 'غالي.', solution: 'أرخص 30% من خميس. 4 محاور مقابل 7.' },
    ],
    consumerEducation: [
        { myth: 'معطر يكفي.', truth: 'NH₃ يتراكم. AC يمتص = فرق حقيقي.' },
        { myth: 'مثل خميس.', truth: 'لا عفن+لا عث+20 دقيقة = أبسط 40%.' },
    ],
    relatedServices: [
        { slug: 'apartments-cleaning', context: 'شقق', priority: 1 },
        { slug: 'villas-cleaning', context: 'فلل', priority: 2 },
        { slug: 'carpet-cleaning', context: 'سجاد — NH₃', priority: 3 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 4 },
        { slug: 'pest-control', context: 'حشرات', priority: 5 },
        { slug: 'steam-cleaning', context: 'بخار', priority: 6 },
        { slug: 'hourly-cleaning', context: 'بالساعة', priority: 7 },
    ],
};
