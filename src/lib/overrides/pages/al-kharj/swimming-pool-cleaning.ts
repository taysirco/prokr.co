import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف مسابح بالخرج — CaCO₃ Scale+SiO₂ خدش بلاط+NH₃ — Descaler+RO! (2026)',
        description: 'تنظيف مسابح الخرج. CaCO₃ 450ppm Scale! SiO₂ خدش بلاط. NH₃ يتفاعل مع كلور. Descaler+RO+فحص Cl/NH₃.',
        h1: 'تنظيف مسابح بالخرج — CaCO₃ Scale — Descaler+RO!',
        keywords: ['تنظيف مسابح الخرج', 'تنظيف مسبح بالخرج', 'شركة تنظيف مسابح الخرج'],
    },
    content: {
        introduction: 'مسبح الخرج يواجه تحديات مياه وبيئية فريدة! CaCO₃ 450ppm Scale: آبار جوفية = كلس يتراكم على جدران المسبح+المضخة+الفلتر = Scale يُقلل الكفاءة ← Descaler دوري. SiO₂ خدش بلاط: رمل يدخل المسبح بالرياح ← يخدش البلاط ← يفقد اللمعان. فلتر رمل+شطف. NH₃ يتفاعل مع كلور: أمونيا المزارع تدخل المسبح ← تتفاعل مع الكلور ← Chloramines = رائحة كلور قوية + حساسية عيون! فحص NH₃/Cl نسبة إلزامي. ΔT 48°م: تبخّر سريع صيفاً = ماء ينخفض أسرع ← كلس يتركّز. تعبئة+توازن. 15-25% = تبخّر أسرع! مقارنة: خميس = طحالب+أمطار تخفف. الخرج = كلس+تبخّر+NH₃ = مختلف.',
        shortAnswer: 'على عكس [التنظيف بدون Descaler الذي يترك Scale]، يعتمد بروتوكولنا في خدمة [تنظيف المسابح] بمدينة [الخرج] على [Descaler+RO Fill+فحص Cl/NH₃+فلتر SiO₂]. ففي ظل [CaCO₃ Scale+SiO₂ خدش+NH₃ Chloramines+ΔT تبخّر]، تتفاقم ظاهرة [Scale+خدش+رائحة+تبخّر]. لذا؛ يتدخل فريقنا عبر [Descaler ← فحص ← RO ← فلتر] — لا طحالب!',
        heroSubtitle: 'CaCO₃ Scale + SiO₂ خدش + NH₃ Chloramines — Descaler+RO!',
    },
    pricing: [
        { type: 'تنظيف عادي', unit: 'مسبح', minPrice: 150, maxPrice: 320, time: '2-3 ساعات' },
        { type: 'تنظيف + Descaler Scale', unit: 'مسبح', minPrice: 250, maxPrice: 500, time: '3-5 ساعات' },
        { type: 'شهري (4 زيارات)', unit: 'شهر', minPrice: 400, maxPrice: 800, time: '4 زيارات' },
        { type: 'سنوي + Descaler', unit: 'سنة', minPrice: 1500, maxPrice: 3000, time: '12 زيارة' },
    ],
    faq: [
        { question: 'ليش Scale بمسبح الخرج أكثر من الرياض؟', answer: 'CaCO₃ 450ppm آبار + ΔT تبخّر = كلس يتركّز. Descaler دوري.' },
        { question: 'ليش رائحة كلور قوية بمسبح الخرج؟', answer: 'NH₃ مزارع + كلور = Chloramines = رائحة+حساسية. فحص نسبة.' },
        { question: 'كم تكلفة تنظيف مسبح بالخرج مقارنة بخميس؟', answer: 'متقاربة — لكن خميس: Algicide طحالب. الخرج: Descaler كلس = مختلف.' },
        { question: 'هل SiO₂ يخدش بلاط المسبح بالخرج؟', answer: 'رمل بالرياح يدخل ← يخدش البلاط. فلتر رمل+شطف. غطاء ليلي يقلل.' },
        { question: 'ليش المسبح يفقد ماء بسرعة بالخرج؟', answer: 'ΔT 48°م + 15-25% = تبخّر سريع. تعبئة متكررة + غطاء = يقلل 60%.' },
    ],
    expertTips: [
        'Descaler شهري — CaCO₃ Scale.',
        'فحص Cl/NH₃ — Chloramines رائحة.',
        'فلتر رمل — SiO₂ بلاط.',
        'غطاء ليلي — تبخّر ΔT 48°م.',
        'لا طحالب! — 15-25% ميزة.',
    ],
    warnings: [
        'CaCO₃ × 6 أشهر بدون Descaler = Scale صلب — مضخة تتلف.',
        'NH₃ + كلور = Chloramines — حساسية عيون YMYL.',
        'SiO₂ × سنة = بلاط مخدوش — يحتاج تجديد.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص صيانة المسابح' },
        { entity: AMANA.RIYADH.entity, url: AMANA.RIYADH.url, role: 'اشتراطات أمانة الرياض' },
    ],
    expertReviewer: EXPERTS.ALJUND,
    expertCitations: [
        { expert: EXPERTS.ALJUND.name, quote: 'مسبح الخرج: CaCO₃ Scale+NH₃ Chloramines. Descaler+فحص. لا طحالب!', source: 'موسوعة أخطاء — مسابح صحراوية' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ صيانة مسابح مرخصة', authority: 'بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'Descaler مسابح', use: 'CaCO₃ Scale — جدران+مضخة' },
        { name: 'RO Fill', use: 'تعبئة بدون كلس جديد' },
        { name: 'فلتر رمل', use: 'SiO₂ — يمنع خدش بلاط' },
    ],
    hiddenObjections: [
        { fear: 'كلور يكفي.', solution: 'NH₃ = Chloramines. فحص نسبة.' },
        { fear: 'مثل خميس.', solution: 'كلس مقابل طحالب. مختلف.' },
    ],
    counterNarratives: [
        { myth: 'تنظيف عادي.', truth: 'CaCO₃ = Descaler. NH₃ = فحص. مختلف.' },
        { myth: 'كل 3 أشهر.', truth: 'تبخّر+كلس = شهري.' },
    ],
    relatedServices: [
        { slug: 'tanks-cleaning', context: 'خزانات', priority: 1 },
        { slug: 'water-leak-detection', context: 'تسرب', priority: 2 },
        { slug: 'cleaning', context: 'تنظيف', priority: 3 },
        { slug: 'pest-control', context: 'حشرات', priority: 4 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 5 },
        { slug: 'marble-polishing', context: 'رخام', priority: 6 },
        { slug: 'glass-facades-cleaning', context: 'واجهات', priority: 7 },
    ],
};
