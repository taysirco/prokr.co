import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف أثاث بخميس مشيط — عفن PVAc+عث+انتفاخ 60-85% — Dehumidifier! عكس عنيزة (2026)',
        description: 'تنظيف أثاث خميس مشيط. عفن Aspergillus يأكل PVAc. عث حشوات. انتفاخ رطب 60-85%. Anti-Fungal+Anti-Mite+Dehumidifier.',
        h1: 'تنظيف أثاث بخميس مشيط — عفن وعث وانتفاخ',
        keywords: ['تنظيف أثاث خميس مشيط', 'تنظيف عفش بخميس مشيط', 'شركة تنظيف أثاث خميس مشيط'],
    },
    content: {
        introduction: 'أثاث خميس مشيط = عكس عنيزة! عنيزة: تشقق+جفاف (15-25%). خميس: انتفاخ+رطوبة (60-85%)! عفن Aspergillus: ضباب 200 يوم = عفن يستعمر أسطح الخشب ومفاصل PVAc ← يأكل الغراء ← مفاصل تنفك. Anti-Fungal كل شهرين. عث Dermatophagoides: يتكاثر في حشوات أثاث منجّد رطب = حساسية جلدية+تنفسية. Anti-Mite. انتفاخ خشب: 60-85% = خشب يمتص رطوبة ← ينتفخ ← أبواب لا تُغلق + أدراج لا تنسحب. Dehumidifier دائم. تكثّف على أسطح خشبية باردة شتاءً = رطوبة إضافية. مقارنة: عنيزة = لا عفن + لا عث + تجفيف 20 دقيقة + أرخص 35%. خميس = أعقد أثاث بالمنطقة.',
        shortAnswer: 'على عكس [التنظيف بالماء فقط الذي يزيد الانتفاخ]، يعتمد بروتوكولنا في خدمة [تنظيف الأثاث] بمدينة [خميس مشيط] على [Anti-Fungal+Anti-Mite+Dehumidifier+تنظيف جاف]. ففي ظل [60-85%+ضباب 200 يوم+عفن PVAc+عث+انتفاخ]، تتفاقم ظاهرة [مفاصل تنفك+حساسية+أبواب لا تغلق]. لذا؛ يتدخل فريقنا عبر [تعقيم ← ضد عث ← تجفيف ← حماية].',
        heroSubtitle: 'عفن PVAc + عث + انتفاخ — Dehumidifier دائم!',
    },
    pricing: [
        { type: 'غرفة نوم', unit: 'غرفة', minPrice: 140, maxPrice: 280, time: '2-3h + تجفيف 4-8h' },
        { type: 'بيت كامل', unit: 'بيت', minPrice: 400, maxPrice: 800, time: '5-8h + تجفيف' },
        { type: '+ Anti-Fungal/Mite عميق', unit: 'بيت', minPrice: 500, maxPrice: 1000, time: '6-9h + تجفيف' },
        { type: 'ربع سنوي (4 زيارات)', unit: 'سنة', minPrice: 520, maxPrice: 1050, time: '4 زيارات' },
    ],
    faq: [
        { question: 'ليش أثاث خميس ينتفخ وعنيزة يتشقق؟', answer: 'خميس: 60-85% = خشب يمتص رطوبة = انتفاخ. عنيزة: 15-25% = خشب يفقد رطوبة = تشقق. عكس.' },
        { question: 'كيف أمنع عفن الأثاث بخميس مشيط؟', answer: 'Anti-Fungal كل شهرين + Dehumidifier دائم. بدونهما = عفن PVAc خلال أسابيع.' },
        { question: 'كم تكلفة تنظيف أثاث بخميس مقارنة بعنيزة؟', answer: 'أغلى 35% — Anti-Fungal+Anti-Mite+Dehumidifier+تجفيف 4-8h. عنيزة: لا عفن+20 دقيقة.' },
        { question: 'هل العث يأثر على الأثاث المنجّد بخميس؟', answer: 'Dermatophagoides يتكاثر في حشوات رطبة = حساسية جلدية+تنفسية. Anti-Mite كل 3 أشهر.' },
        { question: 'متى أنظف الأثاث بخميس مشيط؟', answer: 'كل 3 أشهر — رطوبة تُسرّع عفن+عث. عنيزة: كل 6 أشهر. مضاعف.' },
    ],
    expertTips: [
        'Anti-Fungal كل شهرين — عفن يأكل PVAc.',
        'Anti-Mite كل 3 أشهر — عث حشوات رطبة.',
        'Dehumidifier دائم — 60-85% = انتفاخ خشب.',
        'تنظيف جاف قدر الإمكان — ماء يزيد الانتفاخ.',
        'لا تغسل بماء كثير — يُفاقم المشكلة!',
    ],
    warnings: [
        'عفن PVAc + 6 أشهر = مفاصل تنفك — إصلاح 1000+ ريال.',
        'بدون Dehumidifier = أبواب لا تغلق + أدراج لا تنسحب خلال موسم.',
        'عفن+عث = حساسية مزدوجة — خطر صحي YMYL.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص شركات التنظيف' },
        { entity: AMANA.ASIR.entity, url: AMANA.ASIR.url, role: 'اشتراطات أمانة عسير' },
    ],
    expertReviewer: EXPERTS.ALMOHAIMED,
    expertCitations: [
        { expert: EXPERTS.ALMOHAIMED.name, quote: 'أثاث خميس: عكس عنيزة. انتفاخ+عفن+عث. Dehumidifier دائم. Anti-Fungal+Anti-Mite.', source: 'نصائح هندسية — خشب جبلي' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ تنظيف مرخص', authority: 'بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'Anti-Fungal', use: 'يقتل عفن Aspergillus — يحمي PVAc' },
        { name: 'Anti-Mite', use: 'يقتل عث — حشوات رطبة' },
        { name: 'Dehumidifier صناعي', use: 'تجفيف + منع انتفاخ مستمر' },
    ],
    hiddenObjections: [
        { fear: 'مثل الباحة.', solution: 'متشابه — خميس أقل غابات. نفس البروتوكول.' },
        { fear: 'Dehumidifier مبالغة.', solution: 'بدونه = انتفاخ+عفن = تكلفة 10×.' },
    ],
    counterNarratives: [
        { myth: 'أثاث خميس مثل عنيزة.', truth: 'عكس! انتفاخ+عفن+عث vs تشقق+جفاف.' },
        { myth: 'لا عفن بخميس.', truth: '60-85%+ضباب = أسرع عفن PVAc.' },
    ],
    relatedServices: [
        { slug: 'furniture-moving', context: 'نقل', priority: 1 },
        { slug: 'furniture-storage', context: 'تخزين — رطوبة', priority: 2 },
        { slug: 'sofa-cleaning', context: 'كنب — عفن', priority: 3 },
        { slug: 'cleaning', context: 'تنظيف', priority: 4 },
        { slug: 'carpet-cleaning', context: 'سجاد', priority: 5 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 6 },
        { slug: 'pest-control', context: 'حشرات', priority: 7 },
    ],
};
