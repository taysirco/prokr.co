import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف مجالس بعنيزة — بخور+SiO₂ بلمرة رملية + تمور لزجة بقع سكر — لا عفن! (2026)',
        description: 'تنظيف مجالس عنيزة. بلمرة رملية SiO₂+بخور. تمور = بقع سكر لزجة. CaCO₃ تصلب. لا عفن ولا عث! Enzymatic مزدوج + HEPA. تجفيف 20 دقيقة.',
        h1: 'تنظيف مجالس بعنيزة — بخور رملي وتمور لزجة — لا عفن!',
        keywords: ['تنظيف مجالس عنيزة', 'تنظيف مجلس بعنيزة', 'شركة تنظيف مجالس عنيزة'],
    },
    content: {
        introduction: 'مجلس عنيزة يواجه تحدّياً مزدوجاً لا تجده في أي مدينة أخرى: بلمرة رملية + تمور لزجة! البلمرة الرملية: SiO₂ من النفود يلتصق بأقمشة المجلس + دهون البخور = طبقة بوليمرية خشنة تتصلب مع الوقت. الشامبو العادي لا يُكسِّرها — يجب Enzymatic يُذيب البروتين. التمور اللزجة: ضيافة التمور في المجالس القصيمية (أكبر سوق بالعالم) = بقع سكر لزجة على أقمشة المجلس. لو جفّت = طبقة Caramelized صلبة. يجب Enzymatic يُكسِّر السكر. هنا الميزة: Enzymatic مزدوج واحد يُعالج البلمرة والسكر معاً! CaCO₃ 550ppm يُصلّب البقع — Softened Water. الميزة الذهبية: رطوبة 15-25% = صفر عفن وصفر عث = لا Anti-Fungal ولا Anti-Mite = أرخص 30% من مجالس خميس مشيط. تجفيف 20 دقيقة!',
        shortAnswer: 'على عكس [الشامبو العادي الذي لا يُكسِّر البلمرة الرملية]، يعتمد بروتوكولنا في خدمة [تنظيف المجالس] بمدينة [عنيزة] على [Enzymatic مزدوج (بلمرة+سكر) + HEPA + Softened]. ففي ظل [SiO₂ بلمرة + تمور لزجة + CaCO₃ 550ppm]، تتفاقم ظاهرة [خشونة + بقع سكر + تصلب]. لذا؛ يتدخل فريقنا عبر [Enzymatic يُكسِّر + HEPA يشفط + RO يشطف] لضمان مجلس ناعم بدون عفن.',
        heroSubtitle: 'بلمرة رملية + تمور لزجة — Enzymatic مزدوج! لا عفن!',
    },
    pricing: [
        { type: 'مجلس رجال (10-15 م)', unit: 'مجلس', minPrice: 155, maxPrice: 310, time: '2-3 ساعات' },
        { type: 'مجلس + إزالة بقع تمور', unit: 'مجلس', minPrice: 190, maxPrice: 380, time: '3-4 ساعات' },
        { type: 'مجلسين (رجال+نساء)', unit: 'باقة', minPrice: 280, maxPrice: 560, time: '4-6 ساعات' },
        { type: 'ربع سنوي (4 زيارات)', unit: 'سنة', minPrice: 460, maxPrice: 920, time: '4 زيارات' },
    ],
    faq: [
        { question: 'كيف أزيل بقع التمور اللزجة من المجلس؟', answer: 'Enzymatic يُكسِّر السكر بدون فرك. فرك = تنتشر البقعة. Enzymatic 15 دقيقة ← شطف RO.' },
        { question: 'كم يكلف تنظيف مجلس بعنيزة مقابل خميس مشيط؟', answer: 'أرخص 30% — لا Anti-Fungal ولا Anti-Mite ولا Dehumidifier. تجفيف 20 دقيقة مقابل 4-8 ساعات.' },
        { question: 'ليش الشامبو ما ينظف البخور من المجلس؟', answer: 'بلمرة رملية: SiO₂+دهون بخور = طبقة بوليمرية. الشامبو يُزيل الدهن فقط. Enzymatic يُكسِّر البروتين+السكر معاً.' },
        { question: 'هل البخار يكفي لتنظيف المجلس بعنيزة؟', answer: 'البخار يُذيب البلمرة لكن لا يُكسِّر سكر التمور. Enzymatic أولاً ← بخار ثانياً = أفضل نتيجة.' },
        { question: 'متى أنظف المجلس القصيمي؟', answer: 'بعد موسم التمور (نوفمبر) وقبل رمضان. بقع التمور + بخور رمضان = بلمرة مزدوجة لو تأخرت.' },
    ],
    expertTips: [
        'Enzymatic مزدوج — يُكسِّر بلمرة SiO₂+بخور وسكر التمور معاً.',
        'HEPA قبل الغسل — يشفط SiO₂ من ألياف القماش بدون خدش.',
        'Softened Water — CaCO₃ 550ppm يُصلّب البقع لو استخدمت ماء صنبور.',
        'لا Anti-Fungal — 15-25% رطوبة = صفر عفن. وفّر التكلفة.',
        'لا Anti-Mite — صفر عث في بيئة جافة. ميزة قصيمية.',
    ],
    warnings: [
        'شامبو عادي + بلمرة رملية = يُزيل الطبقة السطحية فقط — البلمرة تعود خلال أسبوع.',
        'فرك بقع التمور = تنتشر في ألياف القماش — Enzymatic بدون فرك فقط.',
        'ماء صنبور + CaCO₃ = بقع كلسية بيضاء على القماش الداكن لا تزول.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص شركات التنظيف' },
        { entity: AMANA.QASSIM.entity, url: AMANA.QASSIM.url, role: 'اشتراطات النظافة — أمانة القصيم' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALMISNID.name, quote: 'مجلس عنيزة: بلمرة SiO₂+بخور + تمور لزجة = Enzymatic مزدوج. لا عفن — ميزة ذهبية.', source: 'جغرافيا المناخ — أقمشة القصيم' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [
        { badge: '✔️ شركة تنظيف مرخصة', authority: 'منصة بلدي', icon: 'shield-check' },
    ],
    equipment: [
        { name: 'Enzymatic مزدوج', use: 'يُكسِّر بلمرة SiO₂+بخور وسكر التمور معاً' },
        { name: 'HEPA H13', use: 'شفط SiO₂+طلع من ألياف القماش — 99.97%' },
        { name: 'Softened Water', use: 'شطف بدون CaCO₃ — صفر بقع كلسية' },
    ],
    commonConcerns: [
        { concern: 'مثل بريدة بالضبط.', solution: 'بقع تمور أكثر — أكبر سوق. Enzymatic مزدوج ضروري.' },
        { concern: 'عفن بعد الغسل.', solution: '15-25% رطوبة = تجفيف 20 دقيقة. صفر عفن.' },
    ],
    consumerEducation: [
        { myth: 'شامبو ينظف المجلس.', truth: 'بلمرة SiO₂+بخور = طبقة بوليمرية. الشامبو لا يخترقها.' },
        { myth: 'المجلس يحتاج Anti-Mite.', truth: '15-25% رطوبة = صفر عث. لا حاجة.' },
    ],
    relatedServices: [
        { slug: 'carpet-cleaning', context: 'سجاد — بلمرة', priority: 1 },
        { slug: 'sofa-cleaning', context: 'كنب — تمور', priority: 2 },
        { slug: 'cleaning', context: 'تنظيف منازل', priority: 3 },
        { slug: 'steam-cleaning', context: 'بخار — يُذيب', priority: 4 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف — طلع', priority: 5 },
        { slug: 'pest-control', context: 'حشرات — تمور', priority: 6 },
        { slug: 'marble-polishing', context: 'رخام — Pitting', priority: 7 },
    ],
};
