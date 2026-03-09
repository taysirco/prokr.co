import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف بالبخار بعنيزة — يُذيب CaCO₃+بلمرة SiO₂ + أسرع تجفيف 20 دقيقة! — لا Dehumidifier! (2026)',
        description: 'تنظيف بالبخار عنيزة. يُذيب CaCO₃ 550ppm. يُكسِّر بلمرة SiO₂-بخور. أسرع تجفيف 20 دقيقة! لا Dehumidifier! لا عفن!',
        h1: 'تنظيف بالبخار بعنيزة — أسرع تجفيف — لا Dehumidifier!',
        keywords: ['تنظيف بالبخار عنيزة', 'تنظيف بخار بعنيزة', 'شركة تنظيف بالبخار عنيزة'],
    },
    content: {
        introduction: 'البخار في عنيزة = أقوى أداة + أسرع تجفيف بالمملكة! لماذا أقوى؟ لأن حرارة 150-180°م تُذيب CaCO₃ 550ppm الذي يترسب على كل شيء — من صنابير الحمام إلى أقمشة المجلس. وتُكسِّر بلمرة SiO₂+بخور التي تتراكم على الكنب والسجاد. لماذا أسرع تجفيف؟ 15-25% رطوبة = تجفيف 20-40 دقيقة فقط! مقابل: خميس مشيط 6-10 ساعات (60-85% رطوبة). الباحة 8-12 ساعة (غابات). هذا يعني: لا Dehumidifier بعد البخار (وفّر 100-200 ريال)، لا عفن بعد البخار (صفر Aspergillus)، يمكن استخدام الغرفة خلال ساعة! الفريد: بخار يقتل بيض حشرات موسم التمور (ذباب+نمل) التي تختبئ في أقمشة الكنب والسجاد.',
        shortAnswer: 'على عكس [التنظيف الكيميائي الذي يترك بقايا]، يعتمد بروتوكولنا في خدمة [التنظيف بالبخار] بمدينة [عنيزة] على [150-180°م بخار + Softened Water + Anti-Static]. ففي ظل [CaCO₃ 550ppm + بلمرة SiO₂ + 15-25% رطوبة + تمور حشرات]، تتفاقم ظاهرة [كلس + خشونة + بيض حشرات]. لذا؛ يتدخل فريقنا عبر [إذابة حرارية ← شفط ← تجفيف 20 دقيقة] بدون Dehumidifier!',
        heroSubtitle: 'يُذيب CaCO₃+بلمرة — تجفيف 20 دقيقة! لا Dehumidifier!',
    },
    pricing: [
        { type: 'كنبة (5 مقاعد)', unit: 'كنبة', minPrice: 80, maxPrice: 165, time: '30-45 دقيقة + 20 تجفيف' },
        { type: 'غرفة نوم (سجاد+فرشة)', unit: 'غرفة', minPrice: 95, maxPrice: 200, time: '45-60 دقيقة + 20 تجفيف' },
        { type: 'بيت كامل', unit: 'بيت', minPrice: 290, maxPrice: 600, time: '3-5 ساعات + 20 تجفيف' },
        { type: 'ربع سنوي (4 زيارات)', unit: 'سنة', minPrice: 350, maxPrice: 700, time: '4 زيارات' },
    ],
    faq: [
        { question: 'كم يحتاج التجفيف بعد البخار بعنيزة؟', answer: '20-40 دقيقة فقط! أسرع مدينة بالمملكة. خميس: 6-10 ساعات. الباحة: 8-12. 15-25% رطوبة = تبخر فوري.' },
        { question: 'كيف يُذيب البخار الكلس بعنيزة؟', answer: '150-180°م يُذيب CaCO₃ 550ppm ← يتحول لمحلول ← يُشفط. بدون Descaler كيميائي. أنظف وأسرع.' },
        { question: 'ليش البخار أفضل من الشامبو بعنيزة؟', answer: 'يُكسِّر بلمرة SiO₂+بخور التي لا يُذيبها الشامبو. + يقتل بيض حشرات تمور. + تجفيف 20 دقيقة بدون بقايا.' },
        { question: 'هل البخار يسبب عفن بعنيزة؟', answer: 'لا! 15-25% رطوبة = تجفيف 20 دقيقة = صفر عفن. لا Dehumidifier. عكس خميس (Dehumidifier إلزامي بعد البخار).' },
        { question: 'متى أفضل وقت للبخار بعنيزة؟', answer: 'بعد موسم التمور (نوفمبر) — يقتل بيض حشرات. وقبل الصيف (مايو) — يُذيب CaCO₃ المتراكم.' },
    ],
    expertTips: [
        '150-180°م — يُذيب CaCO₃+بلمرة ويقتل بيض حشرات.',
        'Softened Water في الجهاز — CaCO₃ يُتلف المرجل.',
        'لا Dehumidifier بعد — 15-25% = تجفيف 20 دقيقة.',
        'Anti-Static بعد — يمنع التصاق طلع النخيل.',
        'لا Anti-Fungal بعد — صفر عفن. وفّر.',
    ],
    warnings: [
        'ماء صنبور في جهاز البخار = CaCO₃ يُتلف المرجل خلال 3-6 أشهر. Softened فقط.',
        'بخار على خشب طبيعي مباشر = تشقق ΔT. أقمشة وسجاد فقط.',
        'بدون شفط بعد البخار = CaCO₃ يترسب مرة أخرى عند التبخر.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص شركات التنظيف' },
        { entity: AMANA.QASSIM.entity, url: AMANA.QASSIM.url, role: 'اشتراطات أمانة القصيم' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALMISNID.name, quote: 'بخار عنيزة: أسرع تجفيف بالمملكة. 15-25% = 20 دقيقة. لا Dehumidifier. لا عفن.', source: 'جغرافيا المناخ — القصيم' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ تنظيف بخار مرخص', authority: 'منصة بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'جهاز بخار 150-180°م', use: 'يُذيب CaCO₃+بلمرة ويقتل بيض حشرات' },
        { name: 'Softened Water', use: 'حماية المرجل من CaCO₃ 550ppm' },
        { name: 'شفاط رطوبة', use: 'يسحب المحلول بعد البخار — يمنع إعادة ترسب' },
    ],
    hiddenObjections: [
        { fear: 'عفن بعد البخار.', solution: '15-25% = 20 دقيقة تجفيف. صفر عفن. مستحيل.' },
        { fear: 'Dehumidifier مطلوب.', solution: 'لا! وفّر 100-200 ريال. عكس خميس.' },
    ],
    counterNarratives: [
        { myth: 'البخار يسبب عفن.', truth: '15-25% رطوبة = تجفيف 20 دقيقة. صفر عفن. أسرع مدينة.' },
        { myth: 'الشامبو أنظف من البخار.', truth: 'البخار يُكسِّر بلمرة SiO₂+بخور. الشامبو لا يخترقها.' },
    ],
    relatedServices: [
        { slug: 'sofa-cleaning', context: 'كنب — بلمرة', priority: 1 },
        { slug: 'carpet-cleaning', context: 'سجاد — SiO₂', priority: 2 },
        { slug: 'councils-cleaning', context: 'مجالس — بخور', priority: 3 },
        { slug: 'cleaning', context: 'تنظيف', priority: 4 },
        { slug: 'pest-control', context: 'حشرات — تمور', priority: 5 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 6 },
        { slug: 'marble-polishing', context: 'رخام', priority: 7 },
    ],
};
