import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف شقق بعنيزة — SiO₂+CaCO₃ 550ppm+طلع+تمور حشرات — لا عفن! تجفيف سريع (2026)',
        description: 'تنظيف شقق عنيزة. SiO₂ خدش أرضيات. CaCO₃ 550ppm كلس حمامات. طلع نخيل. تمور = حشرات موسمية. لا عفن! HEPA + Descaler + RO. تجفيف 20 دقيقة.',
        h1: 'تنظيف شقق بعنيزة — رمل وكلس وطلع — لا عفن!',
        keywords: ['تنظيف شقق عنيزة', 'تنظيف شقة بعنيزة', 'شركة تنظيف شقق عنيزة'],
    },
    content: {
        introduction: 'شقة عنيزة تواجه معادلة صحراوية-زراعية فريدة. SiO₂ من نفود القصيم بصلابة 7 Mohs يخدش البلاط والسيراميك لو استخدمت ممسحة جافة — يجب شفط HEPA أولاً ثم مسح بماء RO. CaCO₃ بتركيز 550ppm يترسب على صنابير الحمام وجدران الدش كطبقة بيضاء صلبة — Descaler حمضي كل شهرين. طلع 8 مليون نخلة يدخل من النوافذ ويستقر على الأسطح كطبقة صفراء لزجة — Anti-Static يمنع التصاقه. الفريد في عنيزة: موسم التمور (أغسطس-أكتوبر) في أكبر سوق بالعالم = ذباب ونمل يدخل الشقق ← فحص مداخل وسد فجوات. الميزة الذهبية: رطوبة 15-25% = صفر عفن وصفر عث = لا حاجة لـ Anti-Fungal ولا Anti-Mite = أرخص 25% من شقق خميس مشيط وأسرع تجفيف (20-40 دقيقة مقابل 4-8 ساعات!).',
        shortAnswer: 'على عكس [التنظيف العادي بممسحة جافة التي تخدش البلاط]، يعتمد بروتوكولنا في خدمة [تنظيف الشقق] بمدينة [عنيزة] على [HEPA شفط + RO مسح + Descaler + Anti-Static]. ففي ظل [SiO₂ 7 Mohs + CaCO₃ 550ppm + طلع نخيل + موسم تمور]، تتفاقم ظاهرة [خدش + ترسب + التصاق + حشرات]. لذا؛ يتدخل فريقنا عبر [شفط ← مسح ← إذابة ← فحص مداخل] لضمان شقة نظيفة بدون خدش.',
        heroSubtitle: 'SiO₂+CaCO₃+طلع+تمور — لا عفن! تجفيف 20 دقيقة!',
    },
    pricing: [
        { type: 'شقة غرفتين', unit: 'شقة', minPrice: 135, maxPrice: 270, time: '3-4 ساعات' },
        { type: 'شقة 3+ غرف', unit: 'شقة', minPrice: 200, maxPrice: 400, time: '4-6 ساعات' },
        { type: 'شقة + فحص حشرات تمور', unit: 'شقة', minPrice: 170, maxPrice: 340, time: '4-5 ساعات' },
        { type: 'أسبوعي (4 زيارات/شهر)', unit: 'شهر', minPrice: 225, maxPrice: 450, time: '4 زيارات' },
    ],
    faq: [
        { question: 'كم تكلفة تنظيف شقة بعنيزة مقارنة بخميس مشيط؟', answer: 'أرخص 25% — لا عفن ولا عث = لا Anti-Fungal ولا Anti-Mite ولا Dehumidifier. تجفيف 20 دقيقة مقابل 4-8 ساعات.' },
        { question: 'كيف أتجنب خدش بلاط الشقة أثناء التنظيف؟', answer: 'SiO₂ 7 Mohs أصلب من السيراميك. ممسحة جافة = خدش. الحل: شفط HEPA أولاً ← مسح بماء RO بممسحة Microfiber ناعمة.' },
        { question: 'ليش الصنابير تتكلس بسرعة بعنيزة؟', answer: 'CaCO₃ 550ppm — ماء عسر. كل شهرين Descaler حمضي على الصنابير والدش. بدونه = طبقة بيضاء صلبة لا تزول بالماء.' },
        { question: 'هل موسم التمور يأثر على نظافة الشقة؟', answer: 'أغسطس-أكتوبر = ذباب+نمل من أكبر سوق تمور بالعالم. فحص مداخل + سد فجوات + مصائد. خصوصاً الشقق القريبة من السوق.' },
        { question: 'متى أفضل وقت لتنظيف عميق بعنيزة؟', answer: 'بعد موسم الغبار (أبريل-يونيو) وبعد موسم التمور (نوفمبر). مرتين/سنة عميق + أسبوعي خفيف.' },
    ],
    expertTips: [
        'شفط HEPA قبل أي مسح — SiO₂ يخدش البلاط لو فركت بممسحة.',
        'Descaler كل شهرين — CaCO₃ 550ppm يُصلّب على الصنابير.',
        'ماء RO للمسح — ماء الصنبور يترك بقع كلسية.',
        'Anti-Static على الأسطح — يمنع التصاق طلع النخيل.',
        'فحص مداخل موسم التمور — سد فجوات النوافذ والأبواب.',
    ],
    warnings: [
        'ممسحة جافة + SiO₂ = خدش بلاط لا يُصلح — تغيير بلاطة كاملة (200+ ريال).',
        'CaCO₃ بدون Descaler = كلس يسد مخارج المياه خلال 6-12 شهر.',
        'موسم التمور بدون فحص مداخل = ذباب+نمل يستوطن المطبخ.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص شركات التنظيف' },
        { entity: AMANA.QASSIM.entity, url: AMANA.QASSIM.url, role: 'اشتراطات النظافة — أمانة القصيم' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALMISNID.name, quote: 'شقق عنيزة: بيئة صحراوية-زراعية. SiO₂+CaCO₃+طلع. لا عفن — ميزة ذهبية. موسم التمور = حشرات.', source: 'جغرافيا المناخ — القصيم' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [
        { badge: '✔️ شركة مرخصة من بلدي', authority: 'منصة بلدي', icon: 'shield-check' },
    ],
    equipment: [
        { name: 'شفاط HEPA H13', use: 'شفط SiO₂+طلع — 99.97% جزيئات' },
        { name: 'Descaler حمضي', use: 'إذابة CaCO₃ 550ppm من صنابير وحمامات' },
        { name: 'ماء RO منقّى', use: 'مسح بدون بقع كلسية' },
    ],
    hiddenObjections: [
        { fear: 'مثل بريدة بالضبط.', solution: 'CaCO₃ أقل 8% + موسم تمور = حشرات إضافية. بروتوكول مختلف.' },
        { fear: 'عفن من الغسيل.', solution: 'رطوبة 15-25% = تجفيف 20 دقيقة. صفر عفن.' },
    ],
    counterNarratives: [
        { myth: 'الشقة تحتاج Anti-Fungal مثل خميس مشيط.', truth: '15-25% رطوبة = صفر عفن. لا حاجة. وفّر 25%.' },
        { myth: 'ممسحة عادية تكفي.', truth: 'SiO₂ 7 Mohs = خدش. HEPA أولاً.' },
    ],
    relatedServices: [
        { slug: 'cleaning', context: 'تنظيف منازل', priority: 1 },
        { slug: 'carpet-cleaning', context: 'سجاد — SiO₂', priority: 2 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف — طلع', priority: 3 },
        { slug: 'steam-cleaning', context: 'بخار — CaCO₃', priority: 4 },
        { slug: 'pest-control', context: 'حشرات — تمور', priority: 5 },
        { slug: 'marble-polishing', context: 'رخام — Pitting', priority: 6 },
        { slug: 'villas-cleaning', context: 'فلل — 4 محاور', priority: 7 },
    ],
};
