import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف مجالس بحفر الباطن — بخور يتبلمر + SiO₂ عواصف + 10-15% كهرباء + ΔT 54°م (2026)',
        description: 'تنظيف مجالس حفر الباطن. بخور بلمرة 52°م. SiO₂ عواصف يقطع. 10-15% كهرباء ساكنة. ΔT 54°م تقلص. لا عفن! Enzymatic + HEPA + Anti-Static.',
        h1: 'تنظيف مجالس بحفر الباطن — بخور يتبلمر والرمل يقطع والجفاف يُكهرب',
        keywords: ['تنظيف مجالس حفر الباطن', 'تنظيف مجلس حفر الباطن', 'شركة تنظيف مجالس حفر الباطن'],
    },
    content: {
        introduction: 'المجلس في حفر الباطن يتعرض لـ 4 تحديات قارية + ميزة. الأولى — بخور يتبلمر أسرع: 52°م (أعلى من 45°م) = بلمرة Olibanum أسرع وأقسى. Ester Bonds أقوى. Enzymatic تركيز أعلى. الثانية — SiO₂ عواصف Fiber Cutting: أكثف من الرياض = ألياف تتقطع أسرع. HEPA شفط. الثالثة — 10-15% كهرباء ساكنة: SiO₂ يلتصق بالأقمشة بشحنة = ممسحة تنقله. Anti-Static. الرابعة — ΔT 54°م: صوف المجلس يتمدد ← ينكمش = Fiber Fatigue. الميزة — لا عفن حشوة!: 10-15% = لا Aspergillus. لا Anti-Fungal. أنظف حشوة. لا عث (Der p 1 يحتاج 50%+).',
        shortAnswer: 'على عكس [شامبو + مسح] الذي لا يُكسر البوليمر ولا يُفرّغ الشحنة، يعتمد بروتوكولنا في خدمة [تنظيف المجالس] بمدينة [حفر الباطن] على [Enzymatic + HEPA + Anti-Static + اختبار حرارة]. ففي ظل [بخور + SiO₂ + 10-15% + ΔT]، تتفاقم ظاهرة [بلمرة + قطع + كهرباء + تقلص]. لذا؛ يتدخل خبراؤنا عبر [بروتوكول مجلس قاري].',
        heroSubtitle: 'بخور بلمرة 52°م + SiO₂ قطع + كهرباء ساكنة + لا عفن/عث',
    },
    pricing: [
        { type: 'مجلس — قاري', unit: 'مجلس', minPrice: 200, maxPrice: 380, time: '2-3 ساعات' },
        { type: 'مجلس + سجاد', unit: 'مجلس', minPrice: 290, maxPrice: 570, time: '3-4 ساعات' },
        { type: 'عميق + Enzymatic', unit: 'مجلس', minPrice: 340, maxPrice: 660, time: '3-5 ساعات' },
        { type: 'ربع سنوي', unit: 'سنة', minPrice: 620, maxPrice: 1240, time: '4 زيارات' },
    ],
    faq: [
        { question: 'بلمرة 52°م — أقسى من الرياض؟', answer: '52°م > 45°م = حرارة أعلى = بلمرة أسرع + Ester Bonds أقوى = أصعب إزالة 30%. Enzymatic تركيز أعلى + وقت أطول.' },
        { question: 'لا عفن ولا عث — ميزة كبيرة؟', answer: 'كبيرة! 10-15% = لا Aspergillus + لا Der p 1 (عث يحتاج 50%+). أنظف حشوة في المملكة. توفير Anti-Fungal + بخار عث.' },
        { question: 'تجفيف — سريع؟', answer: '10-15% = أسرع تجفيف: 30-60 دقيقة (بدلاً من 4-6 ساعات في الشرقية). ميزة قارية.' },
        { question: 'كهرباء ساكنة — على المجلس؟', answer: 'صوف/نايلون + 10-15% = شحنة. ضيف يلمس = صدمة. SiO₂ يلتصق. Anti-Static = حل.' },
        { question: 'ربع سنوي؟', answer: 'بخور تراكمي + SiO₂ عواصف + كهرباء. ربع سنوي = الحد.' },
    ],
    expertTips: [
        'Enzymatic تركيز أعلى — بلمرة 52°م أقسى من 45°م.',
        'HEPA شفط قبل كل شيء — SiO₂ عواصف.',
        'Anti-Static بعد التنظيف — يمنع SiO₂ من الالتصاق.',
        'لا بخار لعث — 10-15% = لا عث. توفير!',
        'تجفيف 30-60 دقيقة — ميزة 10-15%.',
    ],
    warnings: [
        'بوليمر 52°م أقسى 30% = إذا تأخرت = أصعب 2× إزالة.',
        'SiO₂ عواصف + كهرباء = يلتصق = Fiber Cutting.',
        'ΔT 54°م على صوف = Shrinkage محتمل. اختبار حرارة.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص التنظيف' },
        { entity: AMANA.HAFR.entity, url: AMANA.HAFR.url, role: 'اشتراطات النظافة بحفر الباطن' },
    ],
    expertReviewer: EXPERTS.ALMOHAIMED,
    expertCitations: [
        { expert: EXPERTS.ALMOHAIMED.name, quote: 'مجلس حفر الباطن: بلمرة 52°م أقسى + SiO₂ + كهرباء ساكنة. لا عفن ولا عث (ميزة!). Enzymatic أقوى + HEPA + Anti-Static.', source: 'نصائح هندسية — مجالس المناخ القاري' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ تنظيف مجالس مرخص', authority: 'منصة بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'Enzymatic (Lipase + Esterase)', use: 'بلمرة 52°م أقسى — تركيز أعلى' },
        { name: 'HEPA Vacuum', use: 'SiO₂ عواصف — يحجز' },
        { name: 'Anti-Static', use: 'كهرباء ساكنة — يُفرّغ' },
    ],
    hiddenObjections: [
        { fear: 'لا عفن = سهل.', solution: 'بلمرة 52°م أقسى + SiO₂ + كهرباء. 3 تحديات ≠ سهل.' },
        { fear: 'شامبو.', solution: 'لا يُكسر Ester Bonds 52°م. Enzymatic فقط.' },
    ],
    counterNarratives: [
        { myth: 'مثل الرياض.', truth: '52°م > 45°م. ΔT 54°م. -2°م. عواصف أكثف.' },
        { myth: 'نصف سنوي.', truth: 'بخور + SiO₂ + كهرباء. ربع سنوي.' },
        { myth: 'بخار للعث.', truth: 'لا عث! 10-15% = لا Der p 1. توفير بخار.' },
    ],
    relatedServices: [
        { slug: 'carpet-cleaning', context: 'سجاد — SiO₂', priority: 1 },
        { slug: 'sofa-cleaning', context: 'كنب — بخور', priority: 2 },
        { slug: 'cleaning', context: 'تنظيف — SiO₂', priority: 3 },
        { slug: 'steam-cleaning', context: 'بخار', priority: 4 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف — ΔT', priority: 5 },
        { slug: 'pest-control', context: 'حشرات', priority: 6 },
        { slug: 'marble-polishing', context: 'رخام', priority: 7 },
    ],
};
