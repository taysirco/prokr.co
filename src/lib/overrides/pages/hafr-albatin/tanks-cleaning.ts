import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف خزانات بحفر الباطن — CaCO₃ Scale + SiO₂ قاع + تبخر 52°م + ΔT 54°م شقوق (2026)',
        description: 'تنظيف خزانات حفر الباطن. CaCO₃ Scale ماء عسر. SiO₂ قاع. تبخر تركيز. ΔT 54°م شقوق. لا Biofilm (ميزة!). Acid + كشط + ختم + كلور.',
        h1: 'تنظيف خزانات بحفر الباطن — ماء عسر يترسب وحرارة تُبخر وبرد يُشقق',
        keywords: ['تنظيف خزانات حفر الباطن', 'تنظيف خزان حفر الباطن', 'شركة تنظيف خزانات حفر الباطن'],
    },
    content: {
        introduction: 'خزان حفر الباطن يواجه تحديات قارية + ميزة. الأولى — CaCO₃ Scale: ماء عسر = ترسبات بيضاء على جدران. تُضيّق. Acid Wash. الثانية — SiO₂ قاع: غبار يدخل = يترسب في القاع. كشط. الثالثة — تبخر 52°م: أسرع تبخر = تركيز يرتفع أسرع = كلور يُستهلك. تعبئة + كلور. الرابعة — ΔT 54°م: خزان خارجي يتمدد ← ينكمش = Micro-Cracks = تسريب. فحص + ختم. الخامسة — -2°م تجمد: خزان علوي مكشوف = سطح يتجمد. عزل. الميزة — لا Biofilm!: 10-15% = لا Biofilm. لا Anti-Biofilm. لا Diffusion Barrier. أنظف جدران.',
        shortAnswer: 'على عكس [غسل عادي] الذي يتجاهل Scale + ΔT، يعتمد بروتوكولنا في خدمة [تنظيف الخزانات] بمدينة [حفر الباطن] على [Acid Wash + كشط SiO₂ + ختم ΔT + عزل -2°م]. ففي ظل [CaCO₃ + SiO₂ + تبخر + ΔT]، تتفاقم ظاهرة [Scale + ترسب + تركيز + تشقق]. لذا؛ يتدخل خبراؤنا عبر [بروتوكول خزان قاري].',
        heroSubtitle: 'CaCO₃ Scale + SiO₂ قاع + تبخر + ΔT 54°م + -2°م + لا Biofilm',
    },
    pricing: [
        { type: 'علوي (1-3 م³)', unit: 'خزان', minPrice: 130, maxPrice: 260, time: '1-2 ساعة' },
        { type: 'أرضي (5-10 م³)', unit: 'خزان', minPrice: 260, maxPrice: 520, time: '2-4 ساعات' },
        { type: 'Acid Wash (CaCO₃) + كشط SiO₂', unit: 'خزان', minPrice: 310, maxPrice: 620, time: '3-5 ساعات' },
        { type: 'نصف سنوي', unit: 'سنة', minPrice: 420, maxPrice: 840, time: '2 زيارات' },
    ],
    faq: [
        { question: 'CaCO₃ Scale — كثير؟', answer: 'ماء عسر = Scale. أقل من الأحساء. Acid Wash نصف سنوي كافٍ.' },
        { question: 'لا Biofilm — ميزة كبيرة؟', answer: 'كبيرة! لا Anti-Biofilm. لا Diffusion Barrier. كلور يعمل بكفاءة. أنظف جدران.' },
        { question: 'ΔT 54°م — خزان يتشقق؟', answer: 'خارجي = يتمدد ← ينكمش = Micro-Cracks. فحص + ختم سنوي.' },
        { question: '-2°م — تجمد؟', answer: 'خزان علوي مكشوف = سطح الماء يتجمد. أنابيب تتجمد. عزل + تسخين.' },
        { question: 'نصف سنوي — يكفي؟', answer: 'لا Biofilm = أنظف. لكن: CaCO₃ + SiO₂ = تراكم. نصف سنوي = الحد.' },
    ],
    expertTips: [
        'Acid Wash نصف سنوي — CaCO₃ Scale.',
        'كشط قاع SiO₂ — يحمي بكتيريا تحته.',
        'فحص ΔT سنوي — Micro-Cracks = تسريب.',
        'عزل خزان علوي — -2°م = تجمد.',
        'لا Anti-Biofilm — 10-15% = توفير!',
    ],
    warnings: [
        'CaCO₃ Scale يُضيّق = ضغط + أنابيب تسد.',
        'ΔT 54°م + خزان خارجي = Micro-Cracks = تسريب.',
        '-2°م + أنابيب مكشوفة = تجمد = انفجار.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص خزانات' },
        { ...GOV.NWC, role: 'معايير مياه' },
        { entity: AMANA.HAFR.entity, url: AMANA.HAFR.url, role: 'اشتراطات المياه بحفر الباطن' },
    ],
    expertReviewer: EXPERTS.ALJUND,
    expertCitations: [
        { expert: EXPERTS.ALJUND.name, quote: 'خزان حفر الباطن: CaCO₃ + SiO₂ + تبخر + ΔT + -2°م. لا Biofilm (ميزة!). Acid + كشط + ختم + عزل.', source: 'موسوعة أخطاء — خزانات قارية' },
    ],
    saudiRegulations: [REGULATIONS.SBC_601],
    verificationBadges: [{ badge: '✔️ خزانات مرخصة', authority: 'بلدي + NWC', icon: 'shield-check' }],
    equipment: [
        { name: 'Acid Wash', use: 'CaCO₃ Scale' },
        { name: 'كشط قاع', use: 'SiO₂ — يكشف بكتيريا' },
        { name: 'سيليكون ختم', use: 'ΔT 54°م Micro-Cracks' },
        { name: 'عزل حراري', use: '-2°م — تجمد' },
    ],
    hiddenObjections: [
        { fear: 'لا Biofilm = سهل.', solution: 'CaCO₃ + SiO₂ + ΔT + -2°م. 4 تحديات.' },
        { fear: 'كلور يكفي.', solution: 'تبخر = تركيز. CaCO₃ يحمي. SiO₂ يحمي. كلور وحده ≠ كافٍ.' },
    ],
    counterNarratives: [
        { myth: 'مثل الرياض.', truth: '-2°م = تجمد. ΔT 54°م > 35°م. CaCO₃ أكثر.' },
        { myth: 'سنوي.', truth: 'CaCO₃ + SiO₂ + تبخر. نصف سنوي.' },
        { myth: 'لا يتجمد.', truth: '-2°م = سطح + أنابيب. عزل.' },
    ],
    relatedServices: [
        { slug: 'swimming-pool-cleaning', context: 'مسابح — CaCO₃', priority: 1 },
        { slug: 'pest-control', context: 'حشرات', priority: 2 },
        { slug: 'cleaning', context: 'تنظيف', priority: 3 },
        { slug: 'villas-cleaning', context: 'فلل', priority: 4 },
        { slug: 'apartments-cleaning', context: 'شقق', priority: 5 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف — ΔT', priority: 6 },
        { slug: 'thermal-insulation', context: 'عزل — ΔT', priority: 7 },
    ],
};
