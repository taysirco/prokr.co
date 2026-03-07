import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف مكاتب بالخرج — NH₃ مزارع رائحة+CaCO₃ كلس+SiO₂ — AC+Descaler! (2026)',
        description: 'تنظيف مكاتب الخرج. NH₃ مزارع ألبان رائحة! CaCO₃ 450ppm كلس حمامات. SiO₂ خدش أثاث. HEPA AC+Descaler+Microfiber.',
        h1: 'تنظيف مكاتب بالخرج — NH₃ مزارع — لا عفن!',
        keywords: ['تنظيف مكاتب الخرج', 'تنظيف مكاتب بالخرج', 'شركة تنظيف مكاتب الخرج'],
    },
    content: {
        introduction: 'مكاتب الخرج تواجه بيئة زراعية! NH₃ رائحة مكاتب: مزارع ألبان/دواجن ← أمونيا تدخل المبنى من المكيف ← رائحة غير مهنية في بيئة العمل. HEPA Activated Carbon في المكيف+فلتر. CaCO₃ حمامات المكتب: 450ppm = كلس يتراكم ← عملاء يرون كلس = انطباع سيء. Descaler أسبوعي. SiO₂ أثاث مكتبي: غبار رمل يخدش المكاتب والطاولات الزجاجية ← Microfiber يومي. ΔT 48°م: مكيف يعمل بأقصى طاقة ← غبار أكثر من مرشح المكيف ← تنظيف فلتر شهري. 15-25% = لا عفن! بيئة عمل صحية = إنتاجية أعلى. مقارنة: خميس = عفن+عث = حساسية موظفين. الخرج = NH₃+كلس لكن لا عفن = أصح.',
        shortAnswer: 'على عكس [التنظيف العادي بدون AC الذي يترك NH₃]، يعتمد بروتوكولنا في خدمة [تنظيف المكاتب] بمدينة [الخرج] على [HEPA AC+Descaler+Microfiber+فلتر مكيف]. ففي ظل [NH₃ رائحة+CaCO₃ كلس+SiO₂ خدش+ΔT غبار مكيف]، تتفاقم ظاهرة [رائحة غير مهنية+كلس+خدش]. لذا؛ يتدخل فريقنا عبر [AC ← Descaler ← Microfiber ← فلتر] — ميزة: لا عفن!',
        heroSubtitle: 'NH₃ رائحة + CaCO₃ كلس + SiO₂ — لا عفن! بيئة عمل صحية!',
    },
    pricing: [
        { type: 'مكتب صغير (< 100 م²)', unit: 'مكتب', minPrice: 120, maxPrice: 250, time: '2-3 ساعات' },
        { type: 'مكتب كبير (100+ م²)', unit: 'مكتب', minPrice: 250, maxPrice: 500, time: '4-6 ساعات' },
        { type: 'يومي (5 أيام/أسبوع)', unit: 'شهر', minPrice: 700, maxPrice: 1200, time: '20 زيارة' },
        { type: '3 أيام/أسبوع', unit: 'شهر', minPrice: 420, maxPrice: 700, time: '12 زيارة' },
    ],
    faq: [
        { question: 'ليش مكتبنا بالخرج له رائحة غريبة؟', answer: 'NH₃ من مزارع. AC فلتر يمتص. معطر = مؤقت = غير مهني.' },
        { question: 'كيف أمنع كلس حمام المكتب بالخرج؟', answer: 'CaCO₃ 450ppm. Descaler أسبوعي يمنع التراكم. شهري = يتصلّب.' },
        { question: 'كم تكلفة تنظيف مكتب بالخرج مقارنة بخميس؟', answer: 'أرخص 25-30% — لا Anti-Fungal+Anti-Mite = أبسط وأسرع.' },
        { question: 'هل عفن بمكاتب الخرج؟', answer: 'لا! 15-25% = لا عفن. بيئة صحية. خميس: عفن = حساسية موظفين.' },
        { question: 'كم مرة تنظيف مكتب بالخرج؟', answer: 'يومي أفضل — NH₃+SiO₂ يومي. كحد أدنى: 3 أيام/أسبوع.' },
    ],
    expertTips: [
        'HEPA AC فلتر — NH₃ رائحة غير مهنية.',
        'Descaler أسبوعي — CaCO₃ حمام.',
        'Microfiber يومي — SiO₂ مكاتب.',
        'فلتر مكيف شهري — ΔT غبار أكثر.',
        'لا عفن! — بيئة عمل صحية.',
    ],
    warnings: [
        'NH₃ + مكيف بدون فلتر = رائحة غير مهنية — عملاء يلاحظون.',
        'CaCO₃ + حمام مكتب = انطباع سيء — Descaler أسبوعي.',
        'SiO₂ + مسح قطن = خدش مكاتب زجاجية — Microfiber.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص شركات التنظيف' },
        { entity: AMANA.RIYADH.entity, url: AMANA.RIYADH.url, role: 'اشتراطات أمانة الرياض' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALMISNID.name, quote: 'مكاتب الخرج: NH₃ رائحة غير مهنية. AC فلتر. ميزة: لا عفن = صحة موظفين.', source: 'جغرافيا المناخ — مكاتب' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ تنظيف مكاتب مرخص', authority: 'بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'HEPA AC Filter', use: 'NH₃ — رائحة غير مهنية' },
        { name: 'Descaler', use: 'CaCO₃ — حمام مكتب' },
        { name: 'Microfiber', use: 'SiO₂ — مكاتب زجاجية' },
    ],
    hiddenObjections: [
        { fear: 'معطر يكفي.', solution: 'NH₃ يتراكم. AC يمتص = فرق.' },
        { fear: 'يومي غالي.', solution: 'NH₃+SiO₂ يومي. رائحة = عملاء يخسرون.' },
    ],
    counterNarratives: [
        { myth: 'مرتين بالأسبوع.', truth: 'NH₃+SiO₂ يومي. يومي أو 3 أيام.' },
        { myth: 'مثل الرياض.', truth: 'NH₃+CaCO₃ = خطوات إضافية.' },
    ],
    relatedServices: [
        { slug: 'cleaning', context: 'تنظيف', priority: 1 },
        { slug: 'glass-facades-cleaning', context: 'واجهات', priority: 2 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 3 },
        { slug: 'marble-polishing', context: 'رخام', priority: 4 },
        { slug: 'carpet-cleaning', context: 'سجاد', priority: 5 },
        { slug: 'hourly-cleaning', context: 'بالساعة', priority: 6 },
        { slug: 'pest-control', context: 'حشرات', priority: 7 },
    ],
};
