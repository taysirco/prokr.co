import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../gov-references';

export const override: PageOverride = {
    meta: {
        title: 'تخزين أثاث بعنيزة — ΔT 50°م تشقق + SiO₂ + تمور حشرات مستودع — لا Dehumidifier! أرخص! (2026)',
        description: 'تخزين أثاث عنيزة. ΔT 50°م تشقق. SiO₂ خدش. تمور حشرات. لا Dehumidifier! أرخص تخزين! عزل حراري + إحكام + مصائد.',
        h1: 'تخزين أثاث بعنيزة — أرخص تخزين — تمور حشرات!',
        keywords: ['تخزين أثاث عنيزة', 'تخزين عفش بعنيزة', 'شركة تخزين أثاث عنيزة'],
    },
    content: {
        introduction: 'تخزين عنيزة = من أرخص مدن المملكة! السبب: لا Dehumidifier (15-25% رطوبة = صفر عفن) ولا VCI (صفر NaCl = صفر صدأ) ولا Anti-Fungal = وفّر 30-40% مقارنة بخميس مشيط. لكن: ΔT 50°م يُشقّق الخشب = عزل حراري إلزامي (Sandwich Panel أو عازل PU). SiO₂ يخدش الأثاث المكشوف = تغليف Stretch Film. الفريد: قرب سوق التمور (أكبر بالعالم) = ذباب+نمل يدخل المستودعات ← إحكام فتحات + مصائد + طُعم محيطي. بريدة 30 كم = مستودعات مشتركة ممكنة. الخلاصة: أرخص تخزين → لكن يحتاج 3 احتياطات: عزل + تغليف + إحكام حشرات.',
        shortAnswer: 'على عكس [التخزين في مستودع غير معزول]، يعتمد بروتوكولنا في خدمة [تخزين الأثاث] بمدينة [عنيزة] على [عزل حراري + Stretch Film + إحكام حشرات]. ففي ظل [ΔT 50°م + SiO₂ + تمور حشرات + 15-25% رطوبة]، تتفاقم ظاهرة [تشقق + خدش + حشرات]. لذا؛ يتدخل فريقنا عبر [عزل ← تغليف ← إحكام ← مصائد] لضمان تخزين آمن بأقل تكلفة.',
        heroSubtitle: 'عزل + تغليف + إحكام — لا Dehumidifier = أرخص!',
    },
    pricing: [
        { type: 'غرفة صغيرة (3×3)', unit: 'شهر', minPrice: 110, maxPrice: 230, time: 'شهري' },
        { type: 'غرفة كبيرة (4×5)', unit: 'شهر', minPrice: 200, maxPrice: 420, time: 'شهري' },
        { type: 'سنوي (خصم 15%)', unit: 'سنة', minPrice: 1200, maxPrice: 2400, time: 'سنوي' },
        { type: '+ إحكام حشرات تمور', unit: 'إضافي', minPrice: 50, maxPrice: 100, time: 'لمرة واحدة' },
    ],
    faq: [
        { question: 'كم يكلف تخزين أثاث بعنيزة مقارنة بخميس مشيط؟', answer: 'أرخص 30-40% — لا Dehumidifier ولا Anti-Fungal ولا Silica Gel. 110-420 ريال/شهر مقابل 190-650.' },
        { question: 'كيف أحمي الأثاث من تشقق ΔT 50°م؟', answer: 'عزل حراري Sandwich Panel يُقلل ΔT داخل المستودع إلى 10-15°م. بدونه = خشب يتشقق خلال 2-3 مواسم.' },
        { question: 'ليش حشرات تدخل المستودع بعنيزة؟', answer: 'أكبر سوق تمور بالعالم = ذباب+نمل. مستودع قريب = إحكام فتحات + مصائد + طُعم محيطي.' },
        { question: 'هل المستودع يحتاج Dehumidifier بعنيزة؟', answer: 'لا! 15-25% رطوبة = صفر عفن. خميس مشيط: Dehumidifier إلزامي. هنا: وفّر 100-200 ريال/شهر.' },
        { question: 'متى أفضل وقت لتخزين بعنيزة؟', answer: 'تجنب أغسطس-أكتوبر (موسم تمور = حشرات أكثر). الشتاء أفضل — ΔT أقل + حشرات أقل.' },
    ],
    expertTips: [
        'عزل حراري Sandwich Panel — ΔT 50°م يُشقّق الخشب.',
        'Stretch Film — SiO₂ يخدش الأثاث المكشوف.',
        'إحكام فتحات + مصائد — تمور = حشرات مستودع.',
        'لا Dehumidifier — 15-25% = صفر عفن. وفّر.',
        'لا VCI — صفر NaCl = صفر صدأ. وفّر.',
    ],
    warnings: [
        'مستودع بدون عزل + ΔT 50°م = تشقق خشب طبيعي خلال 2-3 مواسم.',
        'مستودع مفتوح + سوق تمور = ذباب+نمل يستوطن الأثاث المنجّد.',
        'بدون Stretch Film + SiO₂ = خدش أسطح خشب وزجاج.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص المستودعات' },
        { entity: AMANA.QASSIM.entity, url: AMANA.QASSIM.url, role: 'اشتراطات أمانة القصيم' },
    ],
    expertReviewer: EXPERTS.ALMOHAIMED,
    expertCitations: [
        { expert: EXPERTS.ALMOHAIMED.name, quote: 'تخزين عنيزة: أرخص — لا Dehumidifier. لكن عزل حراري إلزامي + إحكام حشرات تمور.', source: 'نصائح هندسية — تخزين قصيمي' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ مستودع مرخص', authority: 'منصة بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'Sandwich Panel', use: 'عزل حراري — يُقلل ΔT من 50° إلى 10-15°' },
        { name: 'Stretch Film', use: 'تغليف — يحمي من SiO₂' },
        { name: 'مصائد + طُعم محيطي', use: 'حماية من حشرات سوق التمور' },
    ],
    commonConcerns: [
        { concern: 'غالي مثل خميس.', solution: 'أرخص 30-40%. لا Dehumidifier ولا Anti-Fungal.' },
        { concern: 'حشرات خطيرة.', solution: 'إحكام + مصائد = حماية 99%. ليست خطيرة — مزعجة فقط.' },
    ],
    consumerEducation: [
        { myth: 'المستودع يحتاج Dehumidifier.', truth: '15-25% = صفر عفن. لا حاجة.' },
        { myth: 'التخزين بعنيزة مثل أي مدينة.', truth: 'أرخص — لا Dehumidifier + لا VCI. لكن عزل + إحكام.' },
    ],
    relatedServices: [
        { slug: 'furniture-moving', context: 'نقل عفش', priority: 1 },
        { slug: 'furniture-cleaning', context: 'تنظيف أثاث', priority: 2 },
        { slug: 'pest-control', context: 'حشرات — تمور', priority: 3 },
        { slug: 'cleaning', context: 'تنظيف', priority: 4 },
        { slug: 'dyna', context: 'دينا', priority: 5 },
        { slug: 'dabab', context: 'دباب', priority: 6 },
        { slug: 'termite-control', context: 'نمل أبيض', priority: 7 },
    ],
};
