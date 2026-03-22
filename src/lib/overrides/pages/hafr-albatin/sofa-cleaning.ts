import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../gov-references';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف كنب بحفر الباطن — SiO₂ Fiber Cutting + 10-15% جلد يتشقق + بخور 52°م + لا عفن (2026)',
        description: 'تنظيف كنب حفر الباطن. SiO₂ Fiber Cutting أكثف. 10-15% جلد يتشقق. بخور 52°م بلمرة أقسى. لا عفن ولا عث (ميزة!). HEPA + Enzymatic + Conditioner.',
        h1: 'تنظيف كنب بحفر الباطن — رمل يقطع وجفاف يُشقق وبخور يتبلمر',
        keywords: ['تنظيف كنب حفر الباطن', 'غسيل كنب حفر الباطن', 'شركة تنظيف كنب حفر الباطن'],
    },
    content: {
        introduction: 'الكنب في حفر الباطن يتعرض لتلف قاري + ميزتين. الأولى — SiO₂ Fiber Cutting أكثف: أكثف عواصف = أكثف SiO₂ في الألياف = قطع أسرع. HEPA. الثانية — 10-15% جلد يتشقق: أجف = جلد يجف ← يتشقق أسرع من أي مدينة. Leather Conditioner كل 3-4 أشهر. الثالثة — بخور 52°م بلمرة: أقسى بلمرة (52°م > 45°م). Ester Bonds أقوى. Enzymatic أقوى. الميزة 1 — لا عفن حشوة!: 10-15% = لا Aspergillus. لا Anti-Fungal. لا تجفيف إلزامي. الميزة 2 — لا عث!: 10-15% < 50% = لا Der p 1. لا بخار لعث. توفير مزدوج!',
        shortAnswer: 'على عكس [بخاخ ومسح] الذي ينقل SiO₂ بكهرباء ساكنة، يعتمد بروتوكولنا في خدمة [تنظيف الكنب] بمدينة [حفر الباطن] على [HEPA + Enzymatic + Conditioner]. ففي ظل [SiO₂ + 10-15% + بخور 52°م]، تتفاقم ظاهرة [قطع + تشقق + بلمرة]. لذا؛ يتدخل خبراؤنا عبر [بروتوكول كنب قاري].',
        heroSubtitle: 'SiO₂ Cutting + جلد تشقق + بخور 52°م + لا عفن/عث',
    },
    pricing: [
        { type: 'كنب (3-5 مقاعد)', unit: 'طقم', minPrice: 170, maxPrice: 330, time: '2-3 ساعات' },
        { type: 'جلد + Conditioner', unit: 'طقم', minPrice: 190, maxPrice: 370, time: '2-3 ساعات' },
        { type: '+ Enzymatic بخور', unit: 'طقم', minPrice: 220, maxPrice: 410, time: '3-4 ساعات' },
        { type: 'نصف سنوي', unit: 'سنة', minPrice: 330, maxPrice: 650, time: '2 زيارات' },
    ],
    faq: [
        { question: 'لا عفن ولا عث — ميزة مزدوجة؟', answer: 'مزدوجة! لا Anti-Fungal + لا بخار عث = توفير 30-40%. أنظف حشوة في المملكة.' },
        { question: 'جلد — 10-15% أسوأ؟', answer: 'الأسوأ في المملكة على الجلد. Conditioner كل 3-4 أشهر (أكثر تكراراً). بدون = يتشقق.' },
        { question: 'تجفيف — لا يحتاج؟', answer: 'يجف في 30-60 دقيقة (ميزة!). لا Turbo Dryer. لا خطر عفن. أسرع في المملكة.' },
        { question: 'بلمرة 52°م — أقسى؟', answer: 'أقسى في المملكة. Enzymatic تركيز أعلى + وقت 30 دقيقة (بدلاً من 20).' },
        { question: 'نصف سنوي — ليش؟', answer: 'لا عفن ولا عث = أقل تكراراً. بخور + SiO₂ = نصف سنوي كافٍ (بدلاً من ربع سنوي في الشرقية).' },
    ],
    expertTips: [
        'HEPA أولاً — SiO₂ + كهرباء ساكنة.',
        'Leather Conditioner كل 3-4 أشهر — أجف بيئة.',
        'Enzymatic أقوى — بلمرة 52°م أقسى.',
        'لا Anti-Fungal ولا بخار عث — توفير!',
        'تجفيف 30-60 دقيقة — ميزة 10-15%.',
    ],
    warnings: [
        'SiO₂ أكثف × 6 أشهر = ألياف مقطوعة = كنب تالف.',
        'جلد + 10-15% × 6 أشهر = تشقق محتوم. Conditioner = وقاية.',
        'بوليمر 52°م × سنة = طبقة لا تُزال إلا بـ Enzymatic مهني.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص التنظيف' },
        { entity: AMANA.HAFR.entity, url: AMANA.HAFR.url, role: 'اشتراطات النظافة بحفر الباطن' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALMOHAIMED.name, quote: 'كنب حفر الباطن: SiO₂ Cutting + 10-15% جلد + بخور 52°م. لا عفن ولا عث (ميزتين!). HEPA + Enzymatic + Conditioner.', source: 'نصائح هندسية — كنب قاري' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ تنظيف كنب مرخص', authority: 'منصة بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'HEPA Vacuum', use: 'SiO₂ — يحجز' },
        { name: 'Enzymatic (Lipase + Esterase)', use: 'بلمرة 52°م — أقوى' },
        { name: 'Leather Conditioner', use: '10-15% — يمنع تشقق' },
    ],
    commonConcerns: [
        { concern: 'لا عفن = سهل.', solution: 'SiO₂ + جلد + بخور. 3 تحديات قارية.' },
        { concern: 'شامبو.', solution: 'لا يُكسر بوليمر 52°م. Enzymatic فقط.' },
    ],
    consumerEducation: [
        { myth: 'مثل الرياض.', truth: '52°م > 45°م. SiO₂ أكثف. 10-15% < 15%.' },
        { myth: 'سنوي.', truth: 'SiO₂ + بخور. نصف سنوي.' },
        { myth: 'بدون Conditioner.', truth: '10-15% = يتشقق. الأسوأ على الجلد.' },
    ],
    relatedServices: [
        { slug: 'carpet-cleaning', context: 'سجاد — SiO₂', priority: 1 },
        { slug: 'councils-cleaning', context: 'مجالس — بخور', priority: 2 },
        { slug: 'cleaning', context: 'تنظيف — SiO₂', priority: 3 },
        { slug: 'steam-cleaning', context: 'بخار', priority: 4 },
        { slug: 'furniture-cleaning', context: 'أثاث', priority: 5 },
        { slug: 'pest-control', context: 'حشرات', priority: 6 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف — ΔT', priority: 7 },
    ],
};
