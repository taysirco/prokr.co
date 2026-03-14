import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف أثاث بعنيزة — SiO₂ خدش + CaCO₃ PVAc تصلب + ΔT 50°م تشقق — لا عفن! (2026)',
        description: 'تنظيف أثاث عنيزة. SiO₂ يخدش Veneer. CaCO₃ يُصلّب PVAc. ΔT 50°م يُشقّق الخشب. لا عفن! Microfiber + Softened + Humidifier شتوي.',
        h1: 'تنظيف أثاث بعنيزة — رمل يخدش وكلس يُصلّب — لا عفن!',
        keywords: ['تنظيف أثاث عنيزة', 'تنظيف عفش بعنيزة', 'شركة تنظيف أثاث عنيزة'],
    },
    content: {
        introduction: 'أثاث عنيزة يواجه ثلاثية صحراوية تُهدد الخشب والأقمشة. أولاً: SiO₂ من النفود بصلابة 7 Mohs — أصلب من Veneer (2-3 Mohs). أي فرك بقطعة قماش تحمل حبة رمل = خدش على الطاولة أو الدولاب. الحل: Microfiber ناعمة بعد شفط HEPA. ثانياً: CaCO₃ 550ppm في مياه التنظيف يترسب على مفاصل PVAc (غراء الخشب) = يُصلّبها ويُقلل مرونتها = فك مفاصل مع الوقت. الحل: Softened Water. ثالثاً: ΔT 50°م (تمدد 48°م وانكماش -2°م) = تشقق الخشب الطبيعي خلال 2-3 مواسم. الحل: Humidifier شتوي يحافظ على رطوبة 35-45%. الميزة: لا عفن لا عث — 15-25% رطوبة = صفر Aspergillus وصفر Dermatophagoides. هذا عكس خميس مشيط تماماً حيث الأثاث ينتفخ من الرطوبة! هنا: يجف ويتشقق.',
        shortAnswer: 'على عكس [التنظيف بقطعة قماش جافة تخدش الـ Veneer]، يعتمد بروتوكولنا في خدمة [تنظيف الأثاث] بمدينة [عنيزة] على [Microfiber + Softened Water + Humidifier شتوي]. ففي ظل [SiO₂ 7 Mohs + CaCO₃ 550ppm + ΔT 50°م]، تتفاقم ظاهرة [خدش + تصلب PVAc + تشقق]. لذا؛ يتدخل فريقنا عبر [شفط ← مسح ناعم ← ترطيب] لضمان أثاث سليم بدون خدش ولا تشقق.',
        heroSubtitle: 'SiO₂ خدش + CaCO₃ PVAc + ΔT تشقق — لا عفن!',
    },
    pricing: [
        { type: 'غرفة نوم', unit: 'غرفة', minPrice: 95, maxPrice: 200, time: '1-2 ساعة' },
        { type: 'بيت كامل (3-4 غرف)', unit: 'بيت', minPrice: 280, maxPrice: 600, time: '4-6 ساعات' },
        { type: 'تلميع خشب + Softened', unit: 'بيت', minPrice: 340, maxPrice: 700, time: '5-7 ساعات' },
        { type: 'ربع سنوي (4 زيارات)', unit: 'سنة', minPrice: 340, maxPrice: 680, time: '4 زيارات' },
    ],
    faq: [
        { question: 'كيف أنظف الأثاث بعنيزة بدون خدش؟', answer: 'شفط HEPA أولاً لإزالة SiO₂ ← ثم مسح Microfiber ناعمة مبللة بماء Softened. لا فرك أبداً.' },
        { question: 'ليش مفاصل الأثاث تنفك بعنيزة؟', answer: 'CaCO₃ 550ppm يترسب على PVAc (غراء الخشب) = يُصلّبه ويُفقده المرونة. Softened Water يمنع.' },
        { question: 'كم يكلف تنظيف أثاث بعنيزة مقارنة بخميس مشيط؟', answer: 'أرخص 25% — لا Anti-Fungal ولا Dehumidifier. المشكلة عكسية: هنا تشقق وهناك انتفاخ.' },
        { question: 'هل الأثاث يتشقق بعنيزة حقاً؟', answer: 'ΔT 50°م = تمدد/انكماش مستمر. خشب طبيعي بدون Humidifier شتوي = تشقق خلال 2-3 مواسم.' },
        { question: 'متى أفضل وقت لتنظيف الأثاث بعنيزة؟', answer: 'الربيع (مارس-أبريل) والخريف (أكتوبر). الصيف حار جداً. الشتاء جاف جداً = ΔT أعلى.' },
    ],
    expertTips: [
        'HEPA أولاً — SiO₂ يخدش لو فركت بأي قماش.',
        'Microfiber ناعمة — لا قطن ولا بوليستر خشن.',
        'Softened Water — CaCO₃ يُصلّب PVAc.',
        'Humidifier شتاءً — ΔT 50°م = تشقق خشب طبيعي.',
        'لا Anti-Fungal — 15-25% = صفر عفن. وفّر.',
    ],
    warnings: [
        'فرك + SiO₂ = خدش Veneer دائم — تغيير لوح كامل (500+ ريال).',
        'ماء صنبور + PVAc = تصلب مفاصل — أثاث ينفك خلال 1-2 سنة.',
        'بدون Humidifier شتاءً = تشقق خشب طبيعي — خصوصاً الزان والبلوط.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص شركات التنظيف' },
        { entity: AMANA.QASSIM.entity, url: AMANA.QASSIM.url, role: 'اشتراطات أمانة القصيم' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALMISNID.name, quote: 'أثاث عنيزة: SiO₂ يخدش + CaCO₃ يُصلّب PVAc + ΔT يُشقّق. عكس خميس (انتفاخ). لا عفن.', source: 'نصائح هندسية — تشطيبات قصيمية' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ شركة تنظيف مرخصة', authority: 'منصة بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'HEPA H13', use: 'شفط SiO₂ من أسطح الأثاث — 99.97%' },
        { name: 'Microfiber 300 GSM', use: 'مسح ناعم — لا يخدش Veneer' },
        { name: 'Softened Water', use: 'حماية PVAc من CaCO₃' },
    ],
    hiddenObjections: [
        { fear: 'مثل بريدة.', solution: 'CaCO₃ أقل 8%. نفس البروتوكول. تكلفة متقاربة.' },
        { fear: 'عفن من الغسل.', solution: '15-25% = تجفيف 20 دقيقة. صفر عفن.' },
    ],
    consumerEducation: [
        { myth: 'أثاث عنيزة ينتفخ مثل خميس.', truth: 'عكس تماماً! 15-25% = تشقق وجفاف. خميس 60-85% = انتفاخ.' },
        { myth: 'ماء صنبور يكفي للتنظيف.', truth: 'CaCO₃ 550ppm = تصلب PVAc. Softened فقط.' },
    ],
    relatedServices: [
        { slug: 'furniture-moving', context: 'نقل عفش', priority: 1 },
        { slug: 'furniture-storage', context: 'تخزين', priority: 2 },
        { slug: 'sofa-cleaning', context: 'كنب — بلمرة', priority: 3 },
        { slug: 'cleaning', context: 'تنظيف منازل', priority: 4 },
        { slug: 'carpet-cleaning', context: 'سجاد', priority: 5 },
        { slug: 'pest-control', context: 'حشرات', priority: 6 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 7 },
    ],
};
