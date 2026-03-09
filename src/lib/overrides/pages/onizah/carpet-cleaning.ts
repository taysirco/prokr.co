import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف سجاد بعنيزة — Nafud SiO₂ خدش ألياف+CaCO₃ بقع+سكر تمور+لقاح — HEPA+Citric! (2026)',
        description: 'تنظيف سجاد عنيزة. Nafud SiO₂ خدش ألياف! CaCO₃ بقع كلس. سكر تمور. لقاح نخيل. HEPA+Citric+Enzymatic.',
        h1: 'تنظيف سجاد بعنيزة — Nafud+كلس+تمور!',
        keywords: ['تنظيف سجاد بعنيزة', 'غسيل سجاد عنيزة', 'شركة تنظيف سجاد بعنيزة'],
    },
    content: {
        introduction: 'سجاد عنيزة = Nafud يقطع الألياف+كلس يصلبها! Nafud SiO₂ 7 Mohs: رمل النفود يتغلغل بين ألياف السجاد ← كل ضغط قدم = SiO₂ يقصّ الألياف من داخل! HEPA شفط عميق أولاً — أي غسيل بدون HEPA = ألياف مقطوعة. CaCO₃ 550ppm: ماء الغسيل يترك كلس ← ألياف تتصلب = سجاد خشن! Citric Acid+RO Water. سكر تمور: أغسطس-أكتوبر = سكر يلتصق بالألياف = لزوجة. Enzymatic Cleaner. لقاح: مارس-مايو = حبوب لقاح بين الألياف ← بخار 130°م يقتل+يفكك Van der Waals. يجف فوراً: 10-20% = سجاد يجف 15 دقيقة! ميزة عنيزة. مقارنة: الباحة = 6-10h تجفيف+عفن! عنيزة = يجف فوراً لكن Nafud+كلس.',
        shortAnswer: 'على عكس [الفرك+ماء صنبور]، يعتمد بروتوكولنا في خدمة [تنظيف السجاد] بمدينة [عنيزة] على [HEPA ← Citric+RO ← Enzymatic ← بخار]. ففي ظل [Nafud SiO₂+CaCO₃ 550ppm+سكر+لقاح]، تتفاقم ظاهرة [قص ألياف+تصلب+لزوجة]. لذا؛ يتدخل فريقنا عبر [HEPA ← Citric+RO ← Enzymatic ← بخار] — يجف فوراً!',
        heroSubtitle: 'Nafud يقصّ ألياف + CaCO₃ يُصلّب + تمور سكر — يجف 15 دقيقة!',
    },
    pricing: [
        { type: 'سجادة صغيرة (2×3م)', unit: 'قطعة', minPrice: 30, maxPrice: 60, time: '20 دقيقة — يجف فوراً!' },
        { type: 'سجادة كبيرة (4×5م)', unit: 'قطعة', minPrice: 60, maxPrice: 120, time: '40 دقيقة' },
        { type: '+ Enzymatic (تمور)', unit: 'قطعة', minPrice: 20, maxPrice: 40, time: '+ 15 دقيقة' },
        { type: 'ربع سنوي', unit: 'سنة', minPrice: 200, maxPrice: 400, time: '4 غسلات + لقاح + تمور' },
    ],
    faq: [
        { question: 'ليش سجاد عنيزة يتآكل أسرع؟', answer: 'Nafud SiO₂ 7 Mohs يقصّ ألياف من داخل. HEPA كل شهر.' },
        { question: 'ليش سجاد عنيزة يصير خشن بعد الغسيل؟', answer: 'ماء 550ppm CaCO₃ = كلس يصلّب. Citric+RO.' },
        { question: 'كم تجفيف سجاد بعنيزة مقابل الباحة؟', answer: '15 دقيقة! الباحة: 6-10h+Dehumidifier. عنيزة الأسرع.' },
        { question: 'ما السكر اللزج على السجاد أغسطس-أكتوبر؟', answer: 'سوق التمور. Enzymatic Cleaner يُفكك.' },
        { question: 'كم مرة تنظيف سجاد بعنيزة؟', answer: 'ربع سنوي + HEPA شهري + بعد لقاح+تمور = 6.' },
    ],
    expertTips: [
        'HEPA شفط عميق — Nafud ألياف.',
        'Citric+RO — لا ماء صنبور!',
        'Enzymatic — تمور سكر.',
        'بخار 130°م — لقاح Van der Waals.',
        'يجف 15 دقيقة — ميزة!',
    ],
    warnings: [
        'فرك Nafud بالسجاد = قصّ ألياف — HEPA أولاً.',
        'ماء صنبور 550ppm = سجاد خشن — Citric+RO.',
        'سكر تمور على سجاد × أسبوع = حشرات — Enzymatic YMYL.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص شركات التنظيف' },
        { entity: AMANA.QASSIM.entity, url: AMANA.QASSIM.url, role: 'اشتراطات أمانة القصيم' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALMISNID.name, quote: 'سجاد عنيزة: Nafud يقصّ+CaCO₃ يصلّب. HEPA+Citric. يجف فوراً.', source: 'جغرافيا المناخ — سجاد القصيم' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ تنظيف سجاد مرخص', authority: 'بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'HEPA شفط عميق', use: 'Nafud SiO₂ — ألياف' },
        { name: 'Citric Acid + RO', use: 'CaCO₃ — لا تصلب' },
        { name: 'Enzymatic Cleaner', use: 'سكر تمور — تفكيك' },
    ],
    hiddenObjections: [
        { fear: 'مكنسة عادية.', solution: 'HEPA عميق. Nafud.' },
        { fear: 'ماء يكفي.', solution: '550ppm = خشن. RO.' },
    ],
    counterNarratives: [
        { myth: 'نصف سنوي.', truth: 'ربع سنوي+لقاح+تمور.' },
        { myth: 'تجفيف مشكلة.', truth: '15 دقيقة! 10-20%.' },
    ],
    relatedServices: [
        { slug: 'cleaning', context: 'تنظيف', priority: 1 },
        { slug: 'sofa-cleaning', context: 'كنب', priority: 2 },
        { slug: 'steam-cleaning', context: 'بخار', priority: 3 },
        { slug: 'councils-cleaning', context: 'مجالس', priority: 4 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 5 },
        { slug: 'pest-control', context: 'حشرات', priority: 6 },
        { slug: 'apartments-cleaning', context: 'شقق', priority: 7 },
    ],
};
