import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف أثاث بالباحة — ضباب عفن PVAc + غابات عث + انتفاخ رطب 50-75% — أعقد! (2026)',
        description: 'تنظيف أثاث الباحة. ضباب عفن يأكل PVAc. غابات عث حشوات. انتفاخ رطب 50-75%. Anti-Fungal+Anti-Mite+Dehumidifier. عكس عنيزة!',
        h1: 'تنظيف أثاث بالباحة — عفن وعث وانتفاخ — عكس عنيزة!',
        keywords: ['تنظيف أثاث الباحة', 'تنظيف عفش بالباحة', 'شركة تنظيف أثاث الباحة'],
    },
    content: {
        introduction: 'أثاث الباحة = عكس عنيزة تماماً! عنيزة: تشقق وجفاف (15-25%). الباحة: انتفاخ ورطوبة (50-75%)! ضباب 150+ يوم = عفن Aspergillus يستعمر أسطح الخشب وداخل مفاصل PVAc ← يأكل الغراء ← مفاصل تنفك. Anti-Fungal كل شهرين. غابات عرعر = عث Dermatophagoides يتكاثر في حشوات الأثاث المنجّد ← حساسية جلدية وتنفسية. Anti-Mite إلزامي. انتفاخ الخشب: 50-75% رطوبة = خشب يمتص الرطوبة ← ينتفخ ← أبواب لا تُغلق + أدراج لا تنسحب. Dehumidifier دائم في الغرف. طلع عرعر يستقر على الأثاث = طبقة لزجة تُغذي العفن. HEPA أولاً. مقارنة: عنيزة = لا عفن + لا عث + تجفيف 20 دقيقة + أرخص 35%. الباحة = أعقد أثاث بالمملكة.',
        shortAnswer: 'على عكس [التنظيف بالماء فقط الذي يزيد الانتفاخ]، يعتمد بروتوكولنا في خدمة [تنظيف الأثاث] بمدينة [الباحة] على [Anti-Fungal+Anti-Mite+Dehumidifier+HEPA]. ففي ظل [ضباب 50-75%+غابات عرعر+عفن PVAc+عث حشوات]، تتفاقم ظاهرة [انتفاخ+عفن+عث+حساسية]. لذا؛ يتدخل فريقنا عبر [شفط ← تعقيم ← ضد عث ← تجفيف] لضمان أثاث سليم وصحي.',
        heroSubtitle: 'عفن PVAc + عث حشوات + انتفاخ — Dehumidifier دائم!',
    },
    pricing: [
        { type: 'غرفة نوم', unit: 'غرفة', minPrice: 150, maxPrice: 300, time: '2-3h + تجفيف 4-8h' },
        { type: 'بيت كامل', unit: 'بيت', minPrice: 430, maxPrice: 860, time: '5-8h + تجفيف' },
        { type: '+ Anti-Fungal/Mite عميق', unit: 'بيت', minPrice: 530, maxPrice: 1060, time: '6-9h + تجفيف' },
        { type: 'ربع سنوي (4 زيارات)', unit: 'سنة', minPrice: 550, maxPrice: 1100, time: '4 زيارات' },
    ],
    faq: [
        { question: 'ليش أثاث الباحة ينتفخ وعنيزة يتشقق؟', answer: 'الباحة: 50-75% = خشب يمتص رطوبة = انتفاخ. عنيزة: 15-25% = خشب يفقد رطوبة = تشقق. عكس تماماً.' },
        { question: 'كيف أمنع عفن الأثاث بالباحة؟', answer: 'Anti-Fungal كل شهرين + Dehumidifier دائم في الغرف. بدونهما = عفن PVAc خلال 72 ساعة.' },
        { question: 'كم تكلفة تنظيف أثاث بالباحة مقارنة بعنيزة؟', answer: 'أغلى 35% — Anti-Fungal+Anti-Mite+Dehumidifier+تجفيف 4-8h. عنيزة: لا عفن+20 دقيقة.' },
        { question: 'هل العث يأثر على الأثاث المنجّد بالباحة؟', answer: 'عث Dermatophagoides يتكاثر في حشوات رطبة = حساسية جلدية+تنفسية. Anti-Mite كل 3 أشهر.' },
        { question: 'متى أنظف الأثاث بالباحة؟', answer: 'كل 3 أشهر — رطوبة تُسرّع عفن+عث. عنيزة: كل 6 أشهر. مضاعف.' },
    ],
    expertTips: [
        'Anti-Fungal كل شهرين — عفن يأكل PVAc.',
        'Anti-Mite كل 3 أشهر — عث في الحشوات الرطبة.',
        'Dehumidifier دائم — 50-75% = انتفاخ خشب.',
        'HEPA أولاً — طلع عرعر يُغذي العفن.',
        'لا تغسل بماء كثير — يزيد الانتفاخ!',
    ],
    warnings: [
        'عفن PVAc + 6 أشهر إهمال = مفاصل تنفك — إصلاح 1000+ ريال.',
        'بدون Dehumidifier = أبواب لا تُغلق + أدراج لا تنسحب خلال موسم واحد.',
        'عفن+عث معاً = حساسية مزدوجة (جلدية+تنفسية) — خطر صحي شديد.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص شركات التنظيف' },
        { entity: AMANA.BAHA.entity, url: AMANA.BAHA.url, role: 'اشتراطات أمانة الباحة' },
    ],
    expertReviewer: EXPERTS.ALMOHAIMED,
    expertCitations: [
        { expert: EXPERTS.ALMOHAIMED.name, quote: 'أثاث الباحة: عكس عنيزة. انتفاخ+عفن+عث. Dehumidifier دائم. Anti-Fungal+Anti-Mite. أعقد أثاث.', source: 'نصائح هندسية — خشب جبلي' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ تنظيف مرخص', authority: 'بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'Anti-Fungal', use: 'يقتل عفن Aspergillus — يحمي PVAc' },
        { name: 'Anti-Mite', use: 'يقتل عث Dermatophagoides — حشوات رطبة' },
        { name: 'Dehumidifier صناعي', use: 'تجفيف 4-8h + منع انتفاخ مستمر' },
    ],
    hiddenObjections: [
        { fear: 'مثل خميس.', solution: 'غابات = رطوبة+طلع أكثر = أعقد قليلاً.' },
        { fear: 'Dehumidifier مبالغة.', solution: 'بدونه = انتفاخ+عفن = تكلفة 10×.' },
    ],
    counterNarratives: [
        { myth: 'أثاث الباحة مثل عنيزة.', truth: 'عكس! انتفاخ+عفن+عث vs تشقق+جفاف.' },
        { myth: 'لا عفن في الأثاث.', truth: 'غابات+ضباب = أسرع عفن PVAc بالمملكة.' },
    ],
    relatedServices: [
        { slug: 'furniture-moving', context: 'نقل عفش', priority: 1 },
        { slug: 'furniture-storage', context: 'تخزين — رطوبة', priority: 2 },
        { slug: 'sofa-cleaning', context: 'كنب — عفن', priority: 3 },
        { slug: 'cleaning', context: 'تنظيف', priority: 4 },
        { slug: 'carpet-cleaning', context: 'سجاد', priority: 5 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف — عفن', priority: 6 },
        { slug: 'pest-control', context: 'حشرات غابات', priority: 7 },
    ],
};
