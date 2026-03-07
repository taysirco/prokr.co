import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف مكاتب بالباحة — Sick Building حقيقي! عفن+عث+ضباب+طلع غابات — أعقد! (2026)',
        description: 'تنظيف مكاتب الباحة. Sick Building حقيقي! عفن Aspergillus+عث+طلع عرعر×8h. 50-75%. Anti-Fungal+Anti-Mite+HEPA H13.',
        h1: 'تنظيف مكاتب بالباحة — Sick Building+غابات — أعقد مكتب!',
        keywords: ['تنظيف مكاتب الباحة', 'تنظيف مكتب بالباحة', 'شركة تنظيف مكاتب الباحة'],
    },
    content: {
        introduction: 'مكتب الباحة = Sick Building حقيقي — ليس نظرياً! عفن Aspergillus: 50-75% رطوبة + ضباب = عفن يستعمر جدران وسقف المكتب خلال أسبوعين. يُسبب حساسية تنفسية مزمنة للموظفين. Anti-Fungal أسبوعي. عث Dermatophagoides: يتكاثر في موكيت وكراسي المكتب الرطبة = حساسية جلدية. Anti-Mite كل أسبوعين. طلع عرعر × 8 ساعات: التعرض المهني المستمر = حساسية مهنية مزمنة عند 25-35% من الموظفين. HEPA H13 إلزامي. ضباب يدخل التهوية: رطوبة إضافية تُغذي العفن. إحكام نظام HVAC. مقارنة: عنيزة = لا Sick Building + 3 خطوات + أرخص 30%. الباحة = Sick Building حقيقي + 5-6 خطوات = أغلى 30-40% + إجازات مرضية أكثر.',
        shortAnswer: 'على عكس [التنظيف بدون Anti-Fungal الذي يُسبب Sick Building]، يعتمد بروتوكولنا في خدمة [تنظيف المكاتب] بمدينة [الباحة] على [Anti-Fungal+Anti-Mite+HEPA H13+Dehumidifier+إحكام HVAC]. ففي ظل [50-75%+غابات عرعر+ضباب 150+ يوم+عفن+عث]، تتفاقم ظاهرة [Sick Building+حساسية مهنية+إجازات مرضية]. لذا؛ يتدخل فريقنا عبر [تعقيم ← ضد عث ← شفط ← تجفيف ← إحكام] لبيئة عمل صحية.',
        heroSubtitle: 'Sick Building حقيقي! عفن+عث+طلع×8h — أعقد مكتب!',
    },
    pricing: [
        { type: 'مكتب صغير (< 100 م²)', unit: 'خدمة', minPrice: 160, maxPrice: 320, time: '2-3h + تجفيف' },
        { type: 'مكتب كبير (100+ م²)', unit: 'خدمة', minPrice: 320, maxPrice: 650, time: '3-5h + تجفيف' },
        { type: 'أسبوعي (4 زيارات)', unit: 'شهر', minPrice: 450, maxPrice: 900, time: '4 زيارات' },
        { type: 'يومي (26 يوم)', unit: 'شهر', minPrice: 2200, maxPrice: 4500, time: '26 زيارة' },
    ],
    faq: [
        { question: 'كيف أمنع Sick Building بالباحة؟', answer: 'Anti-Fungal أسبوعي + Anti-Mite كل أسبوعين + HEPA H13 + Dehumidifier. بدونها = Sick Building خلال أسبوعين.' },
        { question: 'ليش موظفي الباحة يمرضون أكثر من عنيزة؟', answer: 'عفن+عث+طلع×8h = حساسية مهنية مزمنة. عنيزة: 15-25% = لا Sick Building. الفرق = البيئة.' },
        { question: 'كم تكلفة تنظيف مكتب بالباحة مقارنة بعنيزة؟', answer: 'أغلى 30-40% — Anti-Fungal+Anti-Mite+HEPA+Dehumidifier. عنيزة: 3 خطوات + لا Sick Building.' },
        { question: 'هل الموكيت خطر بمكاتب الباحة؟', answer: 'عث يتكاثر في الموكيت الرطب = حساسية جلدية. Anti-Mite كل أسبوعين أو استبدال بـ LVT.' },
        { question: 'متى أفحص جودة الهواء بالمكتب بالباحة؟', answer: 'كل 3 أشهر فحص Aspergillus + Dermatophagoides. بداية الشتاء (ضباب يزداد) = أخطر فترة.' },
    ],
    expertTips: [
        'Anti-Fungal أسبوعي — عفن أسطح خلال أسبوعين.',
        'Anti-Mite كل أسبوعين — موكيت+كراسي رطبة.',
        'HEPA H13 — طلع عرعر×8h = حساسية مهنية.',
        'Dehumidifier — بدونه = Sick Building خلال أسبوعين.',
        'إحكام HVAC — ضباب يدخل التهوية = رطوبة إضافية.',
    ],
    warnings: [
        'Sick Building + 6 أشهر إهمال = إجازات مرضية مزمنة + دعاوى قانونية محتملة.',
        'عفن+عث+طلع = ثلاثي حساسية — خطر صحي YMYL شديد.',
        'بدون HEPA + طلع عرعر×8h = 25-35% من الموظفين يعانون حساسية مزمنة.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص تنظيف تجاري' },
        { entity: AMANA.BAHA.entity, url: AMANA.BAHA.url, role: 'اشتراطات أمانة الباحة' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALMISNID.name, quote: 'مكتب الباحة: Sick Building حقيقي. غابات+ضباب = عفن+عث+طلع. أعقد بيئة عمل بالمملكة.', source: 'جغرافيا المناخ — الباحة' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ تنظيف تجاري مرخص', authority: 'بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'Anti-Fungal صناعي', use: 'يقتل عفن Aspergillus — Sick Building' },
        { name: 'Anti-Mite', use: 'يقتل عث — موكيت+كراسي رطبة' },
        { name: 'HEPA H13', use: 'شفط طلع عرعر — حماية مهنية 99.97%' },
    ],
    hiddenObjections: [
        { fear: 'Sick Building مبالغة.', solution: '50-75%+غابات = عفن أسبوعين. حقيقي وموثق.' },
        { fear: 'مثل خميس.', solution: 'غابات = طلع+طحالب إضافي = أعقد قليلاً.' },
    ],
    counterNarratives: [
        { myth: 'المكتب مثل عنيزة.', truth: 'عنيزة: لا Sick Building. الباحة: Sick Building حقيقي.' },
        { myth: 'HEPA ترف.', truth: 'طلع عرعر×8h = حساسية مزمنة 25-35%. ضروري.' },
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
