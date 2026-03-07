import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف بالساعة بالباحة — 5-6 خطوات! عفن+عث+ضباب+غابات — Dehumidifier! أعقد 40-50% (2026)',
        description: 'تنظيف بالساعة الباحة. 5-6 خطوات! Anti-Fungal+Anti-Mite+Dehumidifier+HEPA. 50-75%. أعقد 40-50% من عنيزة.',
        h1: 'تنظيف بالساعة بالباحة — 5-6 خطوات — أعقد وأغلى!',
        keywords: ['تنظيف بالساعة الباحة', 'عاملة تنظيف بالباحة', 'شركة تنظيف بالساعة الباحة'],
    },
    content: {
        introduction: 'العاملة بالباحة تحتاج 5-6 خطوات — أعقد بروتوكول بالمملكة! الخطوة 1: HEPA — شفط طلع عرعر+غبار ضبابي. الخطوة 2: مسح Anti-Fungal — 50-75% رطوبة = عفن Aspergillus على كل الأسطح. الخطوة 3: Anti-Mite — عث Dermatophagoides في المفروشات. الخطوة 4: مسح بماء+مطهر — تنظيف فعلي. الخطوة 5: Dehumidifier — بدونه = الأسطح لا تجف + عفن جديد! الخطوة 6 (موسمية): فحص دخول ضباب من النوافذ + إحكام. لماذا 5-6 خطوات؟ لأن: عفن (Anti-Fungal)، عث (Anti-Mite)، رطوبة (Dehumidifier)، طلع (HEPA)، ضباب (إحكام). مقارنة: عنيزة = 3 خطوات. خميس = 5 خطوات. الباحة = 5-6 خطوات = أغلى 40-50% + أبطأ تجفيف (4-8 ساعات مقابل 20 دقيقة بعنيزة!).',
        shortAnswer: 'على عكس [التنظيف بـ 3 خطوات في المدن الصحراوية]، يعتمد بروتوكولنا في خدمة [التنظيف بالساعة] بمدينة [الباحة] على [5-6 خطوات: HEPA ← Anti-Fungal ← Anti-Mite ← مسح ← Dehumidifier ← إحكام]. ففي ظل [50-75%+غابات عرعر+ضباب 150+ يوم+عفن+عث]، تتفاقم ظاهرة [عفن+عث+رطوبة+تجفيف بطيء]. لذا؛ تُنفّذ العاملة عبر [شفط ← تعقيم ← ضد عث ← مسح ← تجفيف ← إحكام].',
        heroSubtitle: '5-6 خطوات — عفن+عث+ضباب — أعقد+أغلى 40-50%!',
    },
    pricing: [
        { type: 'ساعة واحدة', unit: 'ساعة', minPrice: 28, maxPrice: 50, time: '1 ساعة' },
        { type: '4 ساعات', unit: 'حصة', minPrice: 100, maxPrice: 190, time: '4 ساعات + تجفيف' },
        { type: 'أسبوعي (4 زيارات/شهر)', unit: 'شهر', minPrice: 380, maxPrice: 700, time: '4 زيارات' },
        { type: 'يومي (26 يوم/شهر)', unit: 'شهر', minPrice: 1800, maxPrice: 3600, time: '26 زيارة' },
    ],
    faq: [
        { question: 'كم تكلفة عاملة بالساعة بالباحة مقارنة بعنيزة؟', answer: 'أغلى 40-50% — 28-50 ريال/ساعة مقابل 22-40. Anti-Fungal+Anti-Mite+Dehumidifier = خطوات إضافية.' },
        { question: 'ليش 5-6 خطوات بالباحة وعنيزة 3؟', answer: '50-75% + غابات = عفن+عث+ضباب. عنيزة: 15-25% = لا عفن + لا عث. البيئة تُحدد الخطوات.' },
        { question: 'كيف العاملة تمنع العفن بعد التنظيف؟', answer: 'Dehumidifier فوري — بدونه = الأسطح لا تجف + عفن جديد خلال 72 ساعة!' },
        { question: 'هل Anti-Mite ضروري كل زيارة بالباحة؟', answer: 'كل أسبوعين للمفروشات. أسبوعي للكنب والسجاد. عث Dermatophagoides يتكاثر في بيئة رطبة بسرعة.' },
        { question: 'متى أفضل وقت لطلب عاملة بالباحة؟', answer: 'ظهراً — ضباب صباحي يخف. بعد المطر = عاجل (طين+رطوبة). أسبوعي أفضل من كل أسبوعين.' },
    ],
    expertTips: [
        'HEPA أولاً — طلع عرعر يُغذي العفن لو بقي.',
        'Anti-Fungal كل زيارة — 50-75% = عفن أسطح.',
        'Anti-Mite كل أسبوعين — عث في مفروشات رطبة.',
        'Dehumidifier بعد كل تنظيف — بدونه عفن جديد!',
        'إحكام نوافذ — ضباب يدخل = رطوبة إضافية.',
    ],
    warnings: [
        'تنظيف بدون Dehumidifier + 50-75% = عفن جديد خلال 72 ساعة — أسوأ!',
        'بدون Anti-Fungal = عفن على كل الأسطح خلال أسبوع واحد.',
        'بدون Anti-Mite = عث يتكاثر في كل مفروشة — حساسية جلدية+تنفسية.',
    ],
    trustAnchors: [
        { ...GOV.HRSD, role: 'تنظيم العمالة المنزلية' },
        { entity: AMANA.BAHA.entity, url: AMANA.BAHA.url, role: 'اشتراطات أمانة الباحة' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALMISNID.name, quote: 'عاملة الباحة: 5-6 خطوات. أعقد مدينة. غابات+ضباب = عفن+عث. Dehumidifier إلزامي.', source: 'جغرافيا المناخ — الباحة' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ عمالة مرخصة', authority: 'HRSD + بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'HEPA H13', use: 'شفط طلع عرعر — 99.97%' },
        { name: 'Anti-Fungal+Anti-Mite', use: 'يقتل عفن Aspergillus وعث Dermatophagoides' },
        { name: 'Dehumidifier صناعي', use: 'تجفيف بعد كل تنظيف — بدونه عفن جديد' },
    ],
    hiddenObjections: [
        { fear: 'أغلى = مبالغة.', solution: '5-6 خطوات لأن البيئة أعقد. بدونها = عفن+عث = أغلى 10×.' },
        { fear: 'مثل خميس.', solution: 'غابات = طلع+رطوبة إضافي = خطوة سادسة.' },
    ],
    counterNarratives: [
        { myth: '3 خطوات تكفي مثل عنيزة.', truth: '50-75% + غابات = عفن+عث. 3 خطوات = كارثة صحية.' },
        { myth: 'Dehumidifier مبالغة.', truth: 'بدونه = عفن جديد 72 ساعة. ضروري.' },
    ],
    relatedServices: [
        { slug: 'cleaning', context: 'تنظيف', priority: 1 },
        { slug: 'carpet-cleaning', context: 'سجاد — عفن', priority: 2 },
        { slug: 'sofa-cleaning', context: 'كنب — عث', priority: 3 },
        { slug: 'steam-cleaning', context: 'بخار', priority: 4 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 5 },
        { slug: 'pest-control', context: 'حشرات', priority: 6 },
        { slug: 'apartments-cleaning', context: 'شقق', priority: 7 },
    ],
};
