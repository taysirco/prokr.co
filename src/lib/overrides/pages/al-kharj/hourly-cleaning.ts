import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف بالساعة بالخرج — NH₃ رائحة يومية+CaCO₃ كلس+SiO₂ — HEPA AC بالساعة! (2026)',
        description: 'تنظيف بالساعة الخرج. NH₃ رائحة يومية من مزارع! CaCO₃ كلس. SiO₂ خدش. HEPA AC+Descaler+Microfiber. لا عفن!',
        h1: 'تنظيف بالساعة بالخرج — NH₃ يومية — لا عفن!',
        keywords: ['تنظيف بالساعة الخرج', 'تنظيف بالساعة بالخرج', 'شركة تنظيف بالساعة الخرج'],
    },
    content: {
        introduction: 'تنظيف بالساعة بالخرج = تنظيف زراعي يومي! NH₃ رائحة يومية: أمونيا مزارع ألبان تدخل كل يوم ← تحتاج إزالة يومية. التنظيف بالساعة بالخرج لازم يشمل HEPA Activated Carbon لامتصاص NH₃ — لا مجرد مسح. CaCO₃ يومي: كلس يتراكم على الحنفيات يومياً ← مسح يومي بـ Descaler خفيف يمنع التراكم. لو أسبوعي: يتصلّب = أصعب. SiO₂ يومي: غبار رمل يدخل من النوافذ والأبواب ← مسح يومي بـ Microfiber. قطن = خدش. لكن: 15-25% = لا عفن! العمل أبسط — لا Anti-Fungal لا Anti-Mite لا Dehumidifier. مقارنة: خميس = بالساعة أغلى 40% (7 محاور). الخرج = 4 محاور = أرخص وأسرع.',
        shortAnswer: 'على عكس [المسح العادي بدون AC]، يعتمد بروتوكولنا في خدمة [التنظيف بالساعة] بمدينة [الخرج] على [HEPA AC+Descaler خفيف+Microfiber+RO]. ففي ظل [NH₃ يومي+CaCO₃ يومي+SiO₂ يومي+15-25%]، تتفاقم ظاهرة [رائحة+كلس+خدش يومي]. لذا؛ يتدخل فريقنا عبر [AC ← مسح ← Descaler ← Microfiber] — ميزة: لا عفن!',
        heroSubtitle: 'NH₃ يومية + CaCO₃ كلس + SiO₂ — لا عفن! أسرع!',
    },
    pricing: [
        { type: 'ساعة واحدة', unit: 'ساعة', minPrice: 35, maxPrice: 55, time: 'ساعة' },
        { type: '3 ساعات', unit: 'زيارة', minPrice: 90, maxPrice: 150, time: '3 ساعات' },
        { type: 'يومي (6 أيام/أسبوع)', unit: 'شهر', minPrice: 800, maxPrice: 1400, time: '24 زيارة' },
        { type: '3 أيام/أسبوع', unit: 'شهر', minPrice: 450, maxPrice: 750, time: '12 زيارة' },
    ],
    faq: [
        { question: 'ليش التنظيف بالساعة بالخرج لازم يشمل AC؟', answer: 'NH₃ يدخل يومياً من المزارع. بدون AC = الرائحة تتراكم في الأقمشة.' },
        { question: 'كم تكلفة تنظيف ساعة بالخرج مقارنة بخميس؟', answer: 'أرخص 30-40%! 4 محاور مقابل 7. لا Anti-Fungal+Anti-Mite.' },
        { question: 'هل الكلس يتراكم يومياً بالخرج؟', answer: 'CaCO₃ 450ppm = كلس يومي. مسح خفيف بـ Descaler يمنع التصلّب.' },
        { question: 'هل يحتاج عفن بالساعة بالخرج؟', answer: 'لا! 15-25% = لا عفن لا عث. ميزة = أرخص وأسرع من خميس.' },
        { question: 'كم ساعة يحتاج تنظيف يومي بالخرج؟', answer: '2-3 ساعات كافية لشقة. فيلا: 4-5 ساعات. أسرع من خميس (لا تجفيف).' },
    ],
    expertTips: [
        'HEPA AC يومي — NH₃ مزارع يدخل يومياً.',
        'Descaler خفيف يومي — CaCO₃ قبل التصلّب.',
        'Microfiber فقط — SiO₂ يخدش القطن.',
        'لا عفن! — لا Anti-Fungal = أسرع.',
        'قرب مزرعة = ساعة إضافية — NH₃ أعلى.',
    ],
    warnings: [
        'NH₃ يومي بدون AC = تراكم في الأقمشة ← بلمرة حيوانية.',
        'CaCO₃ يومي بدون Descaler = أسبوع يتصلّب ← أصعب 3×.',
        'SiO₂ + قطن يومياً = خدوش تراكمية على كل الأسطح.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص شركات التنظيف' },
        { ...GOV.HRSD, role: 'تنظيم العمالة المنزلية' },
        { entity: AMANA.RIYADH.entity, url: AMANA.RIYADH.url, role: 'اشتراطات أمانة الرياض' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALMISNID.name, quote: 'بالساعة الخرج: NH₃ يومي+CaCO₃+SiO₂. AC+Descaler+Microfiber. ميزة: لا عفن.', source: 'جغرافيا المناخ — يومي' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ تنظيف بالساعة مرخص', authority: 'بلدي + HRSD', icon: 'shield-check' }],
    equipment: [
        { name: 'HEPA Activated Carbon', use: 'NH₃ يومي — يمتص' },
        { name: 'Descaler خفيف', use: 'CaCO₃ يومي — يمنع تصلّب' },
        { name: 'Microfiber', use: 'SiO₂ — لا خدش' },
    ],
    hiddenObjections: [
        { fear: 'معطر يكفي.', solution: 'NH₃ يتراكم يومياً. AC يمتص.' },
        { fear: 'مثل الرياض.', solution: 'NH₃+CaCO₃ = خطوات إضافية.' },
    ],
    consumerEducation: [
        { myth: 'مسح عادي.', truth: 'NH₃+CaCO₃+SiO₂ = AC+Descaler+Microfiber.' },
        { myth: 'مرتين بالأسبوع.', truth: 'NH₃ يومي = يومي أفضل.' },
    ],
    relatedServices: [
        { slug: 'cleaning', context: 'تنظيف', priority: 1 },
        { slug: 'apartments-cleaning', context: 'شقق', priority: 2 },
        { slug: 'carpet-cleaning', context: 'سجاد', priority: 3 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 4 },
        { slug: 'sofa-cleaning', context: 'كنب', priority: 5 },
        { slug: 'steam-cleaning', context: 'بخار', priority: 6 },
        { slug: 'marble-polishing', context: 'رخام', priority: 7 },
    ],
};
