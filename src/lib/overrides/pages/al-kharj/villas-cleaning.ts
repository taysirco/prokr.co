import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف فلل بالخرج — NH₃ مزارع 4 محاور+CaCO₃ كلس+SiO₂+فناء — AC+Descaler! (2026)',
        description: 'تنظيف فلل الخرج. NH₃ مزارع ألبان 4 محاور! CaCO₃ كلس. SiO₂ فناء. ΔT تشققات. HEPA AC+Descaler+RO. لا عفن!',
        h1: 'تنظيف فلل بالخرج — 4 محاور زراعية — أفنية!',
        keywords: ['تنظيف فلل الخرج', 'تنظيف فيلا بالخرج', 'شركة تنظيف فلل الخرج'],
    },
    content: {
        introduction: 'فيلا الخرج = 4 محاور زراعية + فناء! NH₃ مزارع: أمونيا تدخل من النوافذ والمكيفات ← تتراكم في الأقمشة والسجاد ← بلمرة حيوانية. HEPA AC يمتص + Enzymatic للأقمشة. CaCO₃ 450ppm كلس: آبار = كلس حمامات+مطبخ+مسبح. Descaler+RO. SiO₂ فناء: فيلات الخرج = أفنية واسعة = غبار رمل يتراكم يومياً ← يدخل البيت بالأحذية. Pre-Rinse فناء + Microfiber داخل. ΔT 48°م: تشققات جدران + خشب أثاث يجف. Oil Polish+سد. 15-25% = لا عفن! تجفيف 30-45 دقيقة! ميزة كبيرة. مقارنة: خميس = 7 محاور+عفن+عث+4-8h تجفيف = أغلى 40%. الخرج = 4 محاور+أفنية لكن لا عفن = أبسط وأرخص.',
        shortAnswer: 'على عكس [المعطر بدون AC والمسح بدون RO]، يعتمد بروتوكولنا في خدمة [تنظيف الفلل] بمدينة [الخرج] على [HEPA AC+Enzymatic+Descaler+RO+Pre-Rinse فناء]. ففي ظل [NH₃ مزارع+CaCO₃ كلس+SiO₂ فناء+ΔT تشقق]، تتفاقم ظاهرة [بلمرة+كلس+غبار+تشقق]. لذا؛ يتدخل فريقنا عبر [4 محاور+فناء] — ميزة: لا عفن! تجفيف 30 دقيقة!',
        heroSubtitle: '4 محاور + أفنية — NH₃+CaCO₃+SiO₂+ΔT — لا عفن!',
    },
    pricing: [
        { type: 'فيلا صغيرة (300 م²)', unit: 'فيلا', minPrice: 350, maxPrice: 700, time: '5-7h + 30 دقيقة' },
        { type: 'فيلا كبيرة (500+ م²)', unit: 'فيلا', minPrice: 600, maxPrice: 1200, time: '7-10h' },
        { type: '+ فناء Pre-Rinse', unit: 'إضافي', minPrice: 100, maxPrice: 200, time: '1-2h' },
        { type: 'أسبوعي (4/شهر)', unit: 'شهر', minPrice: 600, maxPrice: 1200, time: '4 زيارات' },
    ],
    faq: [
        { question: 'ليش فيلا الخرج تحتاج AC بالتنظيف؟', answer: 'NH₃ مزارع يتراكم في الأقمشة. HEPA AC يمتص. معطر = مؤقت.' },
        { question: 'كيف أمنع غبار الفناء من الدخول بالخرج؟', answer: 'Pre-Rinse فناء يومي + حاجز عند الباب + HEPA داخلي. أفنية الخرج واسعة.' },
        { question: 'كم تكلفة تنظيف فيلا بالخرج مقارنة بخميس؟', answer: 'أرخص 35-40%! 4 محاور مقابل 7. لا Anti-Fungal+Anti-Mite+30 دقيقة.' },
        { question: 'هل الفيلا تتعفّن بالخرج مثل خميس؟', answer: 'لا! 15-25% = لا عفن. تجفيف 30-45 دقيقة. ميزة كبيرة.' },
        { question: 'كم مرة تنظيف فيلا عميق بالخرج؟', answer: 'شهري. فناء: أسبوعي. قرب مزرعة = أسبوعي داخلي أيضاً.' },
    ],
    expertTips: [
        'HEPA AC — NH₃ مزارع يومي.',
        'Pre-Rinse فناء — SiO₂ يدخل.',
        'Descaler حمامات — CaCO₃ أسبوعي.',
        'Oil Polish خشب — ΔT تشقق.',
        'لا عفن! — 30 دقيقة تجفيف.',
    ],
    warnings: [
        'NH₃ × فيلا كبيرة = بلمرة في كل الأقمشة — 6 أشهر = لا تُزال.',
        'فناء بدون Pre-Rinse = SiO₂ يدخل البيت يومياً — خدش أسطح.',
        'CaCO₃ + 3 حمامات = كلس يتراكم أسرع — Descaler أسبوعي.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص شركات التنظيف' },
        { entity: AMANA.RIYADH.entity, url: AMANA.RIYADH.url, role: 'اشتراطات أمانة الرياض' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALMISNID.name, quote: 'فيلا الخرج: 4 محاور+أفنية. NH₃+CaCO₃+SiO₂+ΔT. ميزة: لا عفن.', source: 'جغرافيا المناخ' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ تنظيف فلل مرخص', authority: 'بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'HEPA AC', use: 'NH₃ — أقمشة' },
        { name: 'Descaler+RO', use: 'CaCO₃ — حمامات' },
        { name: 'Pre-Rinse ضغط', use: 'فناء — SiO₂' },
    ],
    hiddenObjections: [
        { fear: 'مثل الرياض.', solution: 'NH₃+CaCO₃+أفنية. الرياض: لا.' },
        { fear: 'مثل خميس.', solution: 'لا عفن+30 دقيقة = أرخص 40%.' },
    ],
    counterNarratives: [
        { myth: 'معطر يكفي.', truth: 'NH₃ بلمرة. AC يمتص.' },
        { myth: '4 محاور مبالغة.', truth: 'مزارع+آبار+رمل+حرارة = 4 حقيقي.' },
    ],
    relatedServices: [
        { slug: 'apartments-cleaning', context: 'شقق', priority: 1 },
        { slug: 'cleaning', context: 'تنظيف', priority: 2 },
        { slug: 'carpet-cleaning', context: 'سجاد', priority: 3 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 4 },
        { slug: 'pest-control', context: 'حشرات', priority: 5 },
        { slug: 'swimming-pool-cleaning', context: 'مسبح', priority: 6 },
        { slug: 'marble-polishing', context: 'رخام', priority: 7 },
    ],
};
