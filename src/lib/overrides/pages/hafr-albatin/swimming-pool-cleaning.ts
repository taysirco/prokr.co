import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../gov-references';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف مسابح بحفر الباطن — SiO₂ يخدش + تبخر 52°م أسرع + ΔT 54°م بلاط + لا طحالب (2026)',
        description: 'تنظيف مسابح حفر الباطن. SiO₂ يخدش بلاط. تبخر 52°م أسرع. ΔT 54°م بلاط يتشقق. CaCO₃ Scale. لا طحالب (ميزة!). فلتر + تعبئة + CYA.',
        h1: 'تنظيف مسابح بحفر الباطن — رمل يخدش وحرارة تُبخر وبرد يُشقق',
        keywords: ['تنظيف مسابح حفر الباطن', 'تنظيف مسبح حفر الباطن', 'شركة تنظيف مسابح حفر الباطن'],
    },
    content: {
        introduction: 'مسبح حفر الباطن يواجه تحديات قارية + ميزات. الأولى — SiO₂ يخدش: عواصف = SiO₂ يترسب على البلاط. مشي = خدش. فرشاة Nylon. الثانية — تبخر 52°م أسرع: أسرع تبخر = تعبئة أكثر + تركيز كيميائي أسرع. تعبئة أسبوعية. الثالثة — ΔT 54°م: بلاط يتمدد ← ينكمش = Micro-Cracks. Flexible Grout. الرابعة — CaCO₃ Scale: ماء عسر = ترسبات بيضاء. Acid Wash دوري. الميزة — لا طحالب!: 10-15% = تبخر أسرع = طحالب لا تنمو بنفس القوة. Algaecide أقل. الميزة 2 — لا بعوض خطير: أقل من الشرقية.',
        shortAnswer: 'على عكس [صيانة عادية] التي تتجاهل SiO₂+ΔT، يعتمد بروتوكولنا في خدمة [تنظيف المسابح] بمدينة [حفر الباطن] على [فلتر SiO₂ + تعبئة + CYA + Flexible Grout]. ففي ظل [SiO₂ + تبخر + ΔT + CaCO₃]، تتفاقم ظاهرة [خدش + تركيز + تشقق + Scale]. لذا؛ يتدخل خبراؤنا عبر [بروتوكول مسبح قاري].',
        heroSubtitle: 'SiO₂ خدش + تبخر 52°م + ΔT 54°م + CaCO₃ + لا طحالب',
    },
    pricing: [
        { type: 'صيانة أسبوعية', unit: 'مسبح', minPrice: 110, maxPrice: 220, time: '1-2 ساعة' },
        { type: 'Acid Wash (CaCO₃)', unit: 'مسبح', minPrice: 240, maxPrice: 480, time: '2-3 ساعات' },
        { type: 'عقد شهري', unit: 'شهر', minPrice: 380, maxPrice: 760, time: '4 زيارات' },
        { type: 'تجهيز شتاء (ΔT)', unit: 'مسبح', minPrice: 290, maxPrice: 580, time: '2-4 ساعات' },
    ],
    faq: [
        { question: 'CaCO₃ Scale — مثل الأحساء؟', answer: 'ماء عسر = Scale. لكن أقل من الأحساء. Acid Wash ربع سنوي = كافٍ.' },
        { question: 'تبخر — كم أسرع؟', answer: '52°م + 10-15% = أسرع تبخر في المملكة. يخسر 5-10 سم/أسبوع صيفاً. تعبئة أسبوعية.' },
        { question: 'ΔT — بلاط يتشقق؟', answer: '52°م ← -2°م = 54°م Cycling. بلاط مسبح يتمدد ← ينكمش ← Micro-Cracks. Flexible Grout يتحمل.' },
        { question: 'لا طحالب — ميزة؟', answer: 'ميزة! 10-15% + تبخر = طحالب أقل كثيراً. Algaecide أقل. لكن: CYA للـ UV (أصفى سماء).' },
        { question: 'شتاء — -2°م؟', answer: 'تجميد سطح ممكن! تجهيز شتاء: تخفيض مستوى + سخان + غطاء عازل.' },
    ],
    expertTips: [
        'فرشاة Nylon — SiO₂ + حديدية = خدش مُركّب.',
        'تعبئة أسبوعية — تبخر 52°م أسرع.',
        'CYA 40-60 ppm — UV أعلى = كلور يتحلل أسرع.',
        'Flexible Grout — ΔT 54°م.',
        'غطاء — يُقلل SiO₂ + تبخر + UV.',
    ],
    warnings: [
        'SiO₂ + فرشاة حديدية = خدش مُركّب. Nylon فقط.',
        'تبخر + تركيز = pH يتغير أسرع. فحص يومي صيفاً.',
        'ΔT 54°م + بلاط = تشقق. Flexible Grout.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص المسابح' },
        { entity: AMANA.HAFR.entity, url: AMANA.HAFR.url, role: 'اشتراطات المسابح بحفر الباطن' },
    ],
    expertReviewer: EXPERTS.ALMOHAIMED,
    expertCitations: [
        { expert: EXPERTS.ALJUND.name, quote: 'مسبح حفر الباطن: SiO₂ + تبخر أسرع + ΔT 54°م + CaCO₃. قاري. لا طحالب (ميزة!). تجهيز شتاء -2°م.', source: 'موسوعة أخطاء — مسابح قارية' },
    ],
    saudiRegulations: [REGULATIONS.SBC_601],
    verificationBadges: [{ badge: '✔️ صيانة مسابح مرخصة', authority: 'منصة بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'فرشاة Nylon', use: 'SiO₂ — بلا خدش مُركّب' },
        { name: 'Acid Wash', use: 'CaCO₃ Scale — ربع سنوي' },
        { name: 'CYA', use: 'UV أعلى — حماية كلور' },
        { name: 'Flexible Grout', use: 'ΔT 54°م — بلاط' },
    ],
    commonConcerns: [
        { concern: 'لا طحالب = سهل.', solution: 'تبخر + ΔT + CaCO₃ + SiO₂. 4 تحديات.' },
        { concern: 'مثل الرياض.', solution: 'ΔT 54°م > 35°م. -2°م = تجميد.' },
    ],
    consumerEducation: [
        { myth: 'لا يتجمد.', truth: '-2°م = سطح يتجمد. تجهيز شتاء.' },
        { myth: 'شهري.', truth: 'تبخر 52°م = تعبئة أسبوعية.' },
        { myth: 'فرشاة عادية.', truth: 'SiO₂ + حديدية = خدش. Nylon.' },
    ],
    relatedServices: [
        { slug: 'tanks-cleaning', context: 'خزانات — CaCO₃', priority: 1 },
        { slug: 'pest-control', context: 'حشرات', priority: 2 },
        { slug: 'villas-cleaning', context: 'فلل — مسبح', priority: 3 },
        { slug: 'cleaning', context: 'تنظيف', priority: 4 },
        { slug: 'marble-polishing', context: 'رخام — حول', priority: 5 },
        { slug: 'glass-facades-cleaning', context: 'واجهات', priority: 6 },
        { slug: 'thermal-insulation', context: 'عزل — ΔT', priority: 7 },
    ],
};
