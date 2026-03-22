import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../gov-references';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف خزانات بالخرج — CaCO₃ 450ppm Scale+SiO₂ رواسب+NH₃ — Descaler+Scrub! (2026)',
        description: 'تنظيف خزانات الخرج. CaCO₃ 450ppm Scale جدران! SiO₂ رواسب قاع. NH₃ طعم. Descaler+Scrub+تعقيم. NWC.',
        h1: 'تنظيف خزانات بالخرج — CaCO₃ Scale — Descaler!',
        keywords: ['تنظيف خزانات الخرج', 'تنظيف خزان بالخرج', 'شركة تنظيف خزانات الخرج'],
    },
    content: {
        introduction: 'خزان الخرج = Scale وكلس! CaCO₃ 450ppm Scale: كلس يتراكم على جدران الخزان ← طبقة بيضاء صلبة = Scale. يُقلل سعة الخزان. Descaler حمضي متخصص + Scrub. SiO₂ رواسب قاع: رمل ناعم يترسب في قاع الخزان ← طبقة رملية ← يدخل الأنابيب. شفط+تنظيف قاع. NH₃ طعم: لو الخزان قرب مزرعة = أمونيا ممكن تدخل ← طعم غريب. فلتر HEPA. ΔT 48°م: خزان علوي = ماء ساخن صيفاً = بكتيريا أسرع. تعقيم مقوّى. 15-25% = لا طحالب! لا عفن داخل الخزان! ميزة كبيرة — خميس: طحالب = Algicide. مقارنة: خميس = طحالب+Biofilm. الخرج = كلس+رمل = مختلف. NWC تقرير معتمد.',
        shortAnswer: 'على عكس [التنظيف بدون Descaler الذي يترك Scale]، يعتمد بروتوكولنا في خدمة [تنظيف الخزانات] بمدينة [الخرج] على [Descaler+Scrub+شفط SiO₂+تعقيم مقوّى]. ففي ظل [CaCO₃ Scale+SiO₂ رواسب+NH₃ طعم+ΔT بكتيريا]، تتفاقم ظاهرة [Scale+رمل+طعم+بكتيريا]. لذا؛ يتدخل فريقنا عبر [Descaler ← Scrub ← شفط ← تعقيم] — ميزة: لا طحالب!',
        heroSubtitle: 'CaCO₃ Scale + SiO₂ رواسب + NH₃ طعم — Descaler+تعقيم!',
    },
    pricing: [
        { type: 'خزان صغير (1-5 م³)', unit: 'خزان', minPrice: 150, maxPrice: 320, time: '2-3 ساعات' },
        { type: 'خزان كبير (5-20 م³)', unit: 'خزان', minPrice: 300, maxPrice: 620, time: '3-5 ساعات' },
        { type: '+ Descaler Scale', unit: 'إضافي', minPrice: 80, maxPrice: 170, time: '1-2 ساعة' },
        { type: 'نصف سنوي (عقد)', unit: 'سنة', minPrice: 400, maxPrice: 800, time: '2 تنظيف/سنة' },
    ],
    faq: [
        { question: 'ليش خزان الخرج يكون فيه طبقة بيضاء؟', answer: 'CaCO₃ 450ppm Scale. كلس يتراكم على الجدران. Descaler يُذيب.' },
        { question: 'هل رمل بقاع الخزان بالخرج طبيعي؟', answer: 'SiO₂ يترسب من الأنابيب. طبيعي لكن: يحتاج شفط. يدخل المضخة.' },
        { question: 'كم تكلفة تنظيف خزان بالخرج مقارنة بخميس؟', answer: 'متقاربة — الخرج: Descaler. خميس: Algicide. مختلف لكن نفس السعر.' },
        { question: 'هل خزان الخرج فيه طحالب؟', answer: 'لا! 15-25% = لا طحالب. ميزة. خميس: طحالب خضراء.' },
        { question: 'كم مرة أنظف الخزان بالخرج؟', answer: 'نصف سنوي (كل 6 أشهر). Descaler كل تنظيف. ΔT صيفاً = تعقيم أقوى.' },
    ],
    expertTips: [
        'Descaler — CaCO₃ Scale جدران.',
        'شفط قاع — SiO₂ رواسب.',
        'تعقيم مقوّى صيفاً — ΔT بكتيريا.',
        'فلتر HEPA — NH₃ قرب مزرعة.',
        'لا طحالب! — لا Algicide.',
    ],
    warnings: [
        'Scale × سنة = سعة خزان تقل 15-20% — فاتورة ماء أعلى.',
        'SiO₂ قاع × سنة = يدخل المضخة — تلف 1000+.',
        'ΔT صيفاً بدون تعقيم مقوّى = بكتيريا — YMYL صحة.',
    ],
    trustAnchors: [
        { ...GOV.NWC, role: 'تقرير خزان معتمد' },
        { ...GOV.BALADI, role: 'ترخيص تنظيف الخزانات' },
        { entity: AMANA.RIYADH.entity, url: AMANA.RIYADH.url, role: 'اشتراطات أمانة الرياض' },
    ],
    expertReviewer: EXPERTS.ALMOHAIMED,
    expertCitations: [
        { expert: EXPERTS.ALMOHAIMED.name, quote: 'خزان الخرج: CaCO₃ Scale+SiO₂ قاع. Descaler+شفط. لا طحالب.', source: 'موسوعة أخطاء — خزانات' },
    ],
    saudiRegulations: [REGULATIONS.NWC_REPORT],
    verificationBadges: [{ badge: '✔️ تنظيف خزانات مرخص', authority: 'بلدي + NWC', icon: 'shield-check' }],
    equipment: [
        { name: 'Descaler حمضي', use: 'يُذيب CaCO₃ Scale' },
        { name: 'Scrub صناعي', use: 'يُزيل Scale الصلب' },
        { name: 'شفط قاع', use: 'SiO₂ رواسب رملية' },
    ],
    commonConcerns: [
        { concern: 'تنظيف عادي.', solution: 'CaCO₃ Scale = Descaler إلزامي.' },
        { concern: 'مثل خميس.', solution: 'كلس مقابل طحالب = مختلف.' },
    ],
    consumerEducation: [
        { myth: 'ماء يكفي.', truth: 'CaCO₃ Scale صلب. Descaler.' },
        { myth: 'سنوي.', truth: 'كلس+رمل = نصف سنوي.' },
    ],
    relatedServices: [
        { slug: 'tank-insulation', context: 'عزل خزان', priority: 1 },
        { slug: 'tank-leak-detection', context: 'تسرب', priority: 2 },
        { slug: 'water-leak-detection', context: 'تسرب مياه', priority: 3 },
        { slug: 'swimming-pool-cleaning', context: 'مسبح', priority: 4 },
        { slug: 'cleaning', context: 'تنظيف', priority: 5 },
        { slug: 'pest-control', context: 'حشرات', priority: 6 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 7 },
    ],
};
