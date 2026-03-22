import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../gov-references';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف شقق بالخرج — NH₃ مزارع ألبان+CaCO₃ 450ppm كلس+SiO₂ — Activated Carbon! (2026)',
        description: 'تنظيف شقق الخرج. NH₃ مزارع ألبان/دواجن رائحة+تآكل. CaCO₃ 450ppm كلس. SiO₂ خدش. HEPA Activated Carbon+Descaler.',
        h1: 'تنظيف شقق بالخرج — NH₃ مزارع ألبان وكلس آبار',
        keywords: ['تنظيف شقق الخرج', 'تنظيف شقة بالخرج', 'شركة تنظيف شقق الخرج'],
    },
    content: {
        introduction: 'شقة الخرج تواجه بيئة زراعية-حيوانية فريدة لا تجدها في الرياض! أولاً — NH₃ أمونيا: الخرج = عاصمة الألبان السعودية (الصافي+المراعي+نادك) + مزارع دواجن كبرى = NH₃ أمونيا + H₂S كبريتيد هيدروجين يدخلان الشقة من الهواء ← رائحة نفاذة تتراكم في الأقمشة والمفروشات. المعطر يُخفي لا يُزيل! HEPA Activated Carbon يمتص الجزيئات = يُزيل الرائحة. ثانياً — CaCO₃ 450ppm: آبار جوفية = ترسبات كلس على الحنفيات والحمامات. Descaler حمضي+RO. ثالثاً — SiO₂ صحراوي: ΔT 48°م = مكيف يشفط رمل ← خدش أسطح. Microfiber. تجفيف: 15-25% = سريع 20-40 دقيقة — ميزة الخرج! لا عفن ولا عث. مقارنة: الرياض = لا NH₃ لا CaCO₃. خميس مشيط = عفن+عث. الخرج = زراعي-حيواني فريد.',
        shortAnswer: 'على عكس [المعطر الذي يُخفي NH₃ بدون إزالة]، يعتمد بروتوكولنا في خدمة [تنظيف الشقق] بمدينة [الخرج] على [HEPA Activated Carbon+Descaler+RO+Microfiber]. ففي ظل [NH₃ مزارع ألبان+CaCO₃ 450ppm+SiO₂+ΔT 48°م]، تتفاقم ظاهرة [رائحة+كلس+خدش]. لذا؛ يتدخل فريقنا عبر [امتصاص ← إزالة ← حماية] — ميزة: لا عفن!',
        heroSubtitle: 'NH₃ مزارع ألبان + CaCO₃ كلس + SiO₂ — لا عفن! تجفيف سريع!',
    },
    pricing: [
        { type: 'شقة — زراعي-حيواني', unit: 'شقة', minPrice: 140, maxPrice: 280, time: '3-4 ساعات' },
        { type: 'شقة + AC رائحة عميق', unit: 'شقة', minPrice: 175, maxPrice: 350, time: '4-5 ساعات' },
        { type: 'قرب مزرعة (NH₃ أعلى)', unit: 'شقة', minPrice: 195, maxPrice: 390, time: '4-6 ساعات' },
        { type: 'أسبوعي (4 زيارات/شهر)', unit: 'شهر', minPrice: 230, maxPrice: 460, time: '4 زيارات' },
    ],
    faq: [
        { question: 'ليش شقة الخرج لها رائحة غريبة؟', answer: 'NH₃ أمونيا من مزارع ألبان/دواجن. تدخل من الهواء. المعطر يُخفي — Activated Carbon يمتص ويُزيل.' },
        { question: 'ليش كلس على الحنفيات بالخرج؟', answer: 'CaCO₃ 450ppm من آبار جوفية. أقل من بريدة (600) لكن: Scale حقيقي. Descaler حمضي.' },
        { question: 'كم تكلفة تنظيف شقة بالخرج مقارنة بالرياض؟', answer: 'أغلى 15-20% — NH₃ Activated Carbon + Descaler كلس = خطوات إضافية. الرياض: لا NH₃ لا كلس.' },
        { question: 'هل الخرج فيها عفن مثل خميس مشيط؟', answer: 'لا! 15-25% = جاف. لا عفن لا عث. تجفيف 20-40 دقيقة. ميزة كبيرة. أرخص 30% من خميس.' },
        { question: 'كم مرة أنظف شقة بالخرج؟', answer: 'أسبوعي لو قرب مزرعة (NH₃ يومي). نصف شهري لو بعيد. الكلس: Descaler كل شهر.' },
    ],
    expertTips: [
        'HEPA Activated Carbon — NH₃ يُمتص لا يُعطّر.',
        'Descaler حمضي — CaCO₃ 450ppm كلس.',
        'Microfiber فقط — SiO₂ يخدش القطن.',
        'قرب مزرعة = AC أعمق — NH₃ أعلى.',
        'لا عفن! ميزة — تجفيف 20-40 دقيقة.',
    ],
    warnings: [
        'NH₃ + معطر = يُخفي لا يُزيل — الجزيئات تتراكم في الأقمشة.',
        'CaCO₃ + ماء صنبور عادي = كلس يتراكم — Descaler+RO.',
        'قرب مزرعة بدون AC = رائحة مزمنة — حساسية تنفسية.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص التنظيف' },
        { entity: AMANA.RIYADH.entity, url: AMANA.RIYADH.url, role: 'اشتراطات أمانة الرياض' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALMISNID.name, quote: 'الخرج: NH₃ مزارع ألبان = رائحة تعود. Activated Carbon يمتص. معطر = مؤقت.', source: 'جغرافيا المناخ — زراعي-حيواني' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ تنظيف مرخص', authority: 'بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'HEPA Activated Carbon', use: 'يمتص NH₃/H₂S — لا يُعطّر' },
        { name: 'Chemical Descaler', use: 'CaCO₃ 450ppm كلس' },
        { name: 'RO Rinse + Microfiber', use: 'SiO₂ بدون خدش' },
    ],
    commonConcerns: [
        { concern: 'مثل الرياض.', solution: 'NH₃ مزارع. الرياض لا مزارع ألبان قريبة.' },
        { concern: 'معطر يكفي.', solution: 'يُخفي. NH₃ يتراكم. AC يمتص = فرق.' },
    ],
    consumerEducation: [
        { myth: 'معطر يكفي للرائحة.', truth: 'NH₃ يتراكم في الأقمشة. AC يمتص.' },
        { myth: 'شهري يكفي.', truth: 'NH₃ يومي من المزارع. أسبوعي لو قريب.' },
    ],
    relatedServices: [
        { slug: 'cleaning', context: 'تنظيف', priority: 1 },
        { slug: 'carpet-cleaning', context: 'سجاد — NH₃', priority: 2 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 3 },
        { slug: 'steam-cleaning', context: 'بخار', priority: 4 },
        { slug: 'pest-control', context: 'حشرات', priority: 5 },
        { slug: 'marble-polishing', context: 'رخام', priority: 6 },
        { slug: 'villas-cleaning', context: 'فلل', priority: 7 },
    ],
};
