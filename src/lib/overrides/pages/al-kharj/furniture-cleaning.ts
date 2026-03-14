import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف أثاث بالخرج — NH₃ بلمرة حيوانية+CaCO₃ كلس خشب+SiO₂ خدش — AC+Descaler! (2026)',
        description: 'تنظيف أثاث الخرج. NH₃ بلمرة حيوانية أقمشة! CaCO₃ كلس خشب. SiO₂ خدش. Enzymatic+AC+Descaler. تجفيف سريع.',
        h1: 'تنظيف أثاث بالخرج — NH₃ مزارع ألبان — لا عفن!',
        keywords: ['تنظيف أثاث الخرج', 'تنظيف أثاث بالخرج', 'شركة تنظيف أثاث الخرج'],
    },
    content: {
        introduction: 'أثاث الخرج يواجه تحديات زراعية فريدة! NH₃ بلمرة حيوانية بالأقمشة: أمونيا مزارع ألبان تتراكم في تنجيد الأثاث ← تتفاعل مع الأوساخ ← بلمرة حيوانية عميقة. الشامبو لا يصل — Enzymatic+بخار+HEPA AC. CaCO₃ كلس على الخشب: لو مُسح الأثاث الخشبي بماء صنبور = بقع كلس بيضاء. RO Rinse. SiO₂ خدش: رمل ناعم يخدش الأسطح اللامعة (طاولات+خزائن). Microfiber فقط. ΔT 48°م: فارق حراري يُجفف الخشب ← تشققات. Oil Polish يحمي. تجفيف: 15-25% = 20-40 دقيقة — ميزة! لا عفن لا عث. مقارنة: خميس = عفن+عث+4-8h تجفيف+Anti-Fungal+Anti-Mite = أغلى 30%. الخرج = NH₃+CaCO₃ لكن أبسط.',
        shortAnswer: 'على عكس [الشامبو بدون Enzymatic والمسح بماء صنبور]، يعتمد بروتوكولنا في خدمة [تنظيف الأثاث] بمدينة [الخرج] على [Enzymatic+AC+RO+Oil Polish+Microfiber]. ففي ظل [NH₃ بلمرة+CaCO₃ كلس+SiO₂ خدش+ΔT تشقق]، تتفاقم ظاهرة [رائحة+بقع+خدش+تشقق]. لذا؛ يتدخل فريقنا عبر [إنزيم ← بخار ← RO ← حماية] — ميزة: لا عفن!',
        heroSubtitle: 'NH₃ بلمرة + CaCO₃ كلس + SiO₂ خدش — لا عفن! تجفيف سريع!',
    },
    pricing: [
        { type: 'غرفة نوم كاملة', unit: 'غرفة', minPrice: 130, maxPrice: 260, time: '2-3h + تجفيف 30 دقيقة' },
        { type: 'صالة + AC عميق', unit: 'صالة', minPrice: 170, maxPrice: 340, time: '3-4h' },
        { type: 'خشب + Oil Polish', unit: 'إضافي', minPrice: 80, maxPrice: 160, time: '1-2h' },
        { type: 'ربع سنوي', unit: 'سنة', minPrice: 400, maxPrice: 800, time: '4 زيارات' },
    ],
    faq: [
        { question: 'ليش أثاث الخرج له رائحة مزارع؟', answer: 'NH₃ من مزارع ألبان. بلمرة حيوانية في التنجيد. Enzymatic+AC يُزيل.' },
        { question: 'ليش بقع بيضاء على خشب الأثاث بالخرج؟', answer: 'CaCO₃ 450ppm في ماء الصنبور. RO Rinse = لا بقع. + Oil Polish.' },
        { question: 'كم تكلفة تنظيف أثاث بالخرج مقارنة بخميس؟', answer: 'أرخص 25-30% — لا Anti-Fungal+Anti-Mite+تجفيف 30 دقيقة.' },
        { question: 'هل الأثاث يتعفّن بالخرج؟', answer: 'لا! 15-25% = لا عفن. ميزة كبيرة. خميس: عفن أسبوعين.' },
        { question: 'كيف أحمي خشب الأثاث من ΔT بالخرج؟', answer: 'ΔT 48°م يُجفف الخشب ← تشققات. Oil Polish كل 3 أشهر. مكيف = يحمي.' },
    ],
    expertTips: [
        'Enzymatic — بلمرة حيوانية NH₃.',
        'RO Rinse — CaCO₃ بقع خشب.',
        'Microfiber — SiO₂ خدش.',
        'Oil Polish — ΔT تشقق خشب.',
        'لا عفن! — تجفيف 20-40 دقيقة.',
    ],
    warnings: [
        'NH₃ × 6 أشهر = بلمرة حيوانية لا تُزال — تغيير تنجيد.',
        'CaCO₃ + ماء صنبور = بقع بيضاء تراكمية على خشب.',
        'ΔT × سنة بدون Oil Polish = تشققات خشب — إصلاح 2000+.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص شركات التنظيف' },
        { entity: AMANA.RIYADH.entity, url: AMANA.RIYADH.url, role: 'اشتراطات أمانة الرياض' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALMISNID.name, quote: 'أثاث الخرج: NH₃ بلمرة+CaCO₃ كلس. Enzymatic+RO. ميزة: لا عفن.', source: 'نصائح هندسية — أثاث زراعي' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ تنظيف أثاث مرخص', authority: 'بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'Enzymatic+بخار', use: 'يكسّر بلمرة حيوانية NH₃' },
        { name: 'RO Water+Microfiber', use: 'لا CaCO₃+لا خدش SiO₂' },
        { name: 'Oil Polish', use: 'يحمي خشب من ΔT تشقق' },
    ],
    commonConcerns: [
        { concern: 'مثل الرياض.', solution: 'NH₃ مزارع+CaCO₃ آبار. الرياض: لا.' },
        { concern: 'مثل خميس.', solution: 'لا عفن+20 دقيقة = أرخص 30%.' },
    ],
    consumerEducation: [
        { myth: 'شامبو يكفي.', truth: 'بلمرة حيوانية = Enzymatic.' },
        { myth: 'ماء صنبور للخشب.', truth: 'CaCO₃ بقع. RO.' },
    ],
    relatedServices: [
        { slug: 'sofa-cleaning', context: 'كنب', priority: 1 },
        { slug: 'carpet-cleaning', context: 'سجاد', priority: 2 },
        { slug: 'cleaning', context: 'تنظيف', priority: 3 },
        { slug: 'marble-polishing', context: 'رخام', priority: 4 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 5 },
        { slug: 'steam-cleaning', context: 'بخار', priority: 6 },
        { slug: 'councils-cleaning', context: 'مجالس', priority: 7 },
    ],
};
