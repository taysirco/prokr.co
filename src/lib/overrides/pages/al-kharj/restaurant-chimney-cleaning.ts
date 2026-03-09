import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف مداخن مطاعم بالخرج — كربنة حيوانية NH₃+دهون مزارع — Enzymatic+Alkaline! (2026)',
        description: 'تنظيف مداخن الخرج. كربنة حيوانية مزدوجة NH₃+دهون مزارع! CaCO₃ كلس بخار. ΔT 48°م إجهاد. Enzymatic+Alkaline.',
        h1: 'تنظيف مداخن مطاعم بالخرج — كربنة حيوانية!',
        keywords: ['تنظيف مداخن الخرج', 'تنظيف مداخن مطاعم بالخرج', 'شركة تنظيف مداخن الخرج'],
    },
    content: {
        introduction: 'مدخنة مطعم الخرج = كربنة حيوانية مزدوجة! الخرج عاصمة الألبان = مطاعم تستخدم منتجات مزارع محلية = دهون حيوانية أكثر. NH₃ + دهون حيوانية = كربنة حيوانية: أمونيا من الهواء تتفاعل مع دهون المدخنة ← طبقة كربنة أصعب 2× من الكربنة العادية. Enzymatic أولاً يكسّر الروابط الحيوانية ← Alkaline يُذيب. CaCO₃ كلس بخار: بخار المدخنة من ماء صنبور 450ppm = كلس داخلي يُضيّق. Descaler. ΔT 48°م: مدخنة ساخنة + هواء خارجي بارد شتاءً = إجهاد معدن. فحص Seal ومفاصل. 15-25% = لا Biofilm! كربنة جافة أسهل في التنظيف. مقارنة: خميس = Biofilm رطب. الخرج = كربنة حيوانية جافة = أسهل 20% لكن Enzymatic إلزامي.',
        shortAnswer: 'على عكس [Alkaline مباشر الذي لا يكسّر الروابط الحيوانية]، يعتمد بروتوكولنا في خدمة [تنظيف مداخن المطاعم] بمدينة [الخرج] على [Enzymatic ← Alkaline ← Descaler ← فحص ΔT]. ففي ظل [NH₃ كربنة حيوانية+دهون مزارع+CaCO₃ بخار+ΔT 48°م]، تتفاقم ظاهرة [كربنة مزدوجة+كلس+إجهاد]. لذا؛ يتدخل فريقنا عبر [بروتوكول كربنة حيوانية — إنزيم ← قلوي].',
        heroSubtitle: 'كربنة حيوانية NH₃ + دهون مزارع — Enzymatic → Alkaline!',
    },
    pricing: [
        { type: 'مدخنة مطعم صغير', unit: 'مدخنة', minPrice: 300, maxPrice: 600, time: '3-5 ساعات' },
        { type: 'مدخنة + Enzymatic عميق', unit: 'مدخنة', minPrice: 450, maxPrice: 900, time: '5-8 ساعات' },
        { type: 'مطعم كبير (2+ مدخنة)', unit: 'مطعم', minPrice: 700, maxPrice: 1400, time: '1-2 يوم' },
        { type: 'ربع سنوي (4 زيارات)', unit: 'سنة', minPrice: 1000, maxPrice: 2000, time: '4 زيارات' },
    ],
    faq: [
        { question: 'ليش كربنة مدخنة الخرج أصعب من الرياض؟', answer: 'NH₃ + دهون حيوانية = روابط أقوى 2×. Alkaline وحده لا يكفي. Enzymatic.' },
        { question: 'كم تكلفة تنظيف مدخنة بالخرج مقارنة بخميس؟', answer: 'متقاربة — لكن خميس: Biofilm. الخرج: كربنة حيوانية جافة = أسهل 20%.' },
        { question: 'هل Alkaline وحده يكفي لمدخنة الخرج؟', answer: 'لا! كربنة حيوانية = Enzymatic أولاً. ثم Alkaline. بدون = طبقة تبقى.' },
        { question: 'كم مرة تنظيف مدخنة بالخرج؟', answer: 'ربع سنوي — كربنة حيوانية تتراكم أسرع. NFPA يوصي بالمثل.' },
        { question: 'هل ΔT يأثر على المدخنة بالخرج؟', answer: 'ΔT 48°م = إجهاد معدن+Seal. فحص مفاصل نصف سنوي. تسريب = حريق.' },
    ],
    expertTips: [
        'Enzymatic أولاً — كربنة حيوانية.',
        'Alkaline ثانياً — يُذيب بعد Enzymatic.',
        'Descaler — كلس بخار CaCO₃.',
        'فحص Seal — ΔT 48°م إجهاد.',
        'لا Biofilm — ميزة جفاف!',
    ],
    warnings: [
        'كربنة حيوانية × 6 أشهر = طبقة صلبة — حفّ ميكانيكي = أغلى 3×.',
        'Alkaline بدون Enzymatic = كربنة تبقى — خطر حريق YMYL.',
        'ΔT + مفاصل تالفة = تسريب دهون ساخنة — حريق YMYL.',
    ],
    trustAnchors: [
        { ...GOV.SFDA, role: 'اشتراطات سلامة الغذاء' },
        { ...GOV.BALADI, role: 'ترخيص تنظيف المداخن' },
        { entity: AMANA.RIYADH.entity, url: AMANA.RIYADH.url, role: 'اشتراطات أمانة الرياض' },
    ],
    expertReviewer: EXPERTS.ALMOHAIMED,
    expertCitations: [
        { expert: EXPERTS.ALMOHAIMED.name, quote: 'مداخن الخرج: كربنة حيوانية NH₃. Enzymatic إلزامي. أسهل من Biofilm.', source: 'نصائح هندسية — مداخن زراعية' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ تنظيف مداخن مرخص', authority: 'بلدي + SFDA', icon: 'shield-check' }],
    equipment: [
        { name: 'Enzymatic Degreaser', use: 'يكسّر كربنة حيوانية NH₃' },
        { name: 'Alkaline Degreaser', use: 'يُذيب كربنة بعد Enzymatic' },
        { name: 'Descaler', use: 'كلس بخار — CaCO₃ 450ppm' },
    ],
    hiddenObjections: [
        { fear: 'Alkaline يكفي.', solution: 'كربنة حيوانية = Enzymatic أولاً.' },
        { fear: 'مثل الرياض.', solution: 'NH₃ = كربنة 2× أصعب.' },
    ],
    counterNarratives: [
        { myth: 'تنظيف عادي.', truth: 'كربنة حيوانية = Enzymatic ← Alkaline.' },
        { myth: 'سنوي.', truth: 'كربنة حيوانية أسرع = ربع سنوي.' },
    ],
    relatedServices: [
        { slug: 'oven-cleaning', context: 'أفران', priority: 1 },
        { slug: 'cleaning', context: 'تنظيف', priority: 2 },
        { slug: 'pest-control', context: 'حشرات', priority: 3 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 4 },
        { slug: 'glass-facades-cleaning', context: 'واجهات', priority: 5 },
        { slug: 'steam-cleaning', context: 'بخار', priority: 6 },
        { slug: 'marble-polishing', context: 'رخام', priority: 7 },
    ],
};
