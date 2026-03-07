import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف مكاتب بخميس مشيط — Sick Building حقيقي! عفن+عث+ضباب — Anti-Fungal+HEPA (2026)',
        description: 'تنظيف مكاتب خميس مشيط. Sick Building حقيقي! عفن Aspergillus+عث+ضباب×8h. 60-85%. Anti-Fungal+Anti-Mite+HEPA.',
        h1: 'تنظيف مكاتب بخميس مشيط — Sick Building حقيقي!',
        keywords: ['تنظيف مكاتب خميس مشيط', 'تنظيف مكتب بخميس مشيط', 'شركة تنظيف مكاتب خميس مشيط'],
    },
    content: {
        introduction: 'مكتب خميس مشيط = Sick Building حقيقي! عفن Aspergillus: 60-85% + ضباب 200 يوم = عفن يستعمر جدران وسقف المكتب أسبوعين. حساسية تنفسية مزمنة. Anti-Fungal أسبوعي. عث Dermatophagoides: موكيت+كراسي رطبة = حساسية جلدية. Anti-Mite أسبوعين. ضباب × 8 ساعات عمل: تعرض مهني مستمر لرطوبة ضبابية = مشاكل تنفسية مهنية 20-30% من الموظفين. HEPA H13. تكثّف على نوافذ المكتب شتاءً = رطوبة إضافية. مقارنة: عنيزة = لا Sick Building + SiO₂ أجهزة + طلع + 3 خطوات + أرخص 30%. خميس = Sick Building + 5-6 خطوات = أغلى.',
        shortAnswer: 'على عكس [التنظيف بدون Anti-Fungal الذي يُسبب Sick Building]، يعتمد بروتوكولنا في خدمة [تنظيف المكاتب] بمدينة [خميس مشيط] على [Anti-Fungal+Anti-Mite+HEPA+Dehumidifier]. ففي ظل [60-85%+ضباب 200 يوم+عفن+عث+تكثّف]، تتفاقم ظاهرة [Sick Building+حساسية مهنية+إجازات]. لذا؛ يتدخل فريقنا عبر [تعقيم ← ضد عث ← شفط ← تجفيف] لبيئة عمل صحية.',
        heroSubtitle: 'Sick Building! عفن+عث+ضباب×8h — 5-6 خطوات!',
    },
    pricing: [
        { type: 'مكتب صغير (< 100 م²)', unit: 'خدمة', minPrice: 150, maxPrice: 310, time: '2-3h + تجفيف' },
        { type: 'مكتب كبير (100+ م²)', unit: 'خدمة', minPrice: 310, maxPrice: 630, time: '3-5h + تجفيف' },
        { type: 'أسبوعي (4 زيارات/شهر)', unit: 'شهر', minPrice: 430, maxPrice: 870, time: '4 زيارات' },
        { type: 'يومي (26 يوم/شهر)', unit: 'شهر', minPrice: 2100, maxPrice: 4200, time: '26 زيارة' },
    ],
    faq: [
        { question: 'كيف أمنع Sick Building بخميس مشيط؟', answer: 'Anti-Fungal أسبوعي + Anti-Mite أسبوعين + HEPA H13 + Dehumidifier. بدونها = Sick Building أسبوعين.' },
        { question: 'ليش موظفي خميس يمرضون أكثر من عنيزة؟', answer: 'عفن+عث+ضباب×8h = حساسية مهنية 20-30%. عنيزة: 15-25% = لا Sick Building.' },
        { question: 'كم تكلفة تنظيف مكتب بخميس مقارنة بعنيزة؟', answer: 'أغلى 30-40% — Anti-Fungal+Anti-Mite+HEPA+Dehumidifier. عنيزة: 3 خطوات.' },
        { question: 'هل الموكيت خطر بمكاتب خميس؟', answer: 'عث يتكاثر فيه = حساسية جلدية. Anti-Mite أسبوعين أو استبدال بـ LVT.' },
        { question: 'متى أفحص جودة الهواء بمكتب خميس؟', answer: 'كل 3 أشهر Aspergillus+Dermatophagoides. بداية الشتاء = أخطر فترة.' },
    ],
    expertTips: [
        'Anti-Fungal أسبوعي — عفن أسطح أسبوعين.',
        'Anti-Mite أسبوعين — موكيت+كراسي رطبة.',
        'HEPA H13 — ضباب×8h = حساسية مهنية.',
        'Dehumidifier — بدونه Sick Building أسبوعين.',
        'تهوية HVAC — ضباب يتسلل = رطوبة إضافية.',
    ],
    warnings: [
        'Sick Building + إهمال = إجازات مرضية مزمنة + دعاوى محتملة.',
        'عفن+عث = حساسية مزدوجة — خطر YMYL.',
        'ضباب×8h بدون HEPA = 20-30% من الموظفين يتأثرون.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص تنظيف تجاري' },
        { entity: AMANA.ASIR.entity, url: AMANA.ASIR.url, role: 'اشتراطات أمانة عسير' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALMISNID.name, quote: 'مكتب خميس: Sick Building حقيقي. ضباب+عفن+عث. HEPA+Anti-Fungal+Dehumidifier.', source: 'جغرافيا المناخ — عسير' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ تنظيف تجاري مرخص', authority: 'بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'Anti-Fungal', use: 'يقتل Aspergillus — Sick Building' },
        { name: 'Anti-Mite', use: 'يقتل عث — موكيت+كراسي' },
        { name: 'HEPA H13', use: 'حماية مهنية 99.97%' },
    ],
    hiddenObjections: [
        { fear: 'Sick Building مبالغة.', solution: '60-85%+ضباب = عفن أسبوعين. حقيقي.' },
        { fear: 'مثل الباحة.', solution: 'متشابه — خميس أقل غابات. نفس البروتوكول.' },
    ],
    counterNarratives: [
        { myth: 'مثل عنيزة.', truth: 'عنيزة: لا Sick Building. خميس: Sick Building حقيقي.' },
        { myth: 'HEPA ترف.', truth: 'ضباب×8h = حساسية مزمنة 20-30%. ضروري.' },
    ],
    relatedServices: [
        { slug: 'cleaning', context: 'تنظيف', priority: 1 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف — عفن', priority: 2 },
        { slug: 'carpet-cleaning', context: 'موكيت — عث', priority: 3 },
        { slug: 'glass-facades-cleaning', context: 'واجهات', priority: 4 },
        { slug: 'pest-control', context: 'حشرات', priority: 5 },
        { slug: 'steam-cleaning', context: 'بخار', priority: 6 },
        { slug: 'hourly-cleaning', context: 'بالساعة', priority: 7 },
    ],
};
