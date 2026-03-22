import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../gov-references';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف أفران بالخرج — NH₃ كربنة حيوانية+CaCO₃ كلس ماء+SiO₂ — Enzymatic AC! (2026)',
        description: 'تنظيف أفران الخرج. NH₃ كربنة حيوانية مزدوجة! CaCO₃ كلس ماء فرن. SiO₂ غبار. Enzymatic+AC+Descaler. تجفيف سريع.',
        h1: 'تنظيف أفران بالخرج — كربنة حيوانية — لا عفن!',
        keywords: ['تنظيف أفران الخرج', 'تنظيف فرن بالخرج', 'شركة تنظيف أفران الخرج'],
    },
    content: {
        introduction: 'فرن الخرج = كربنة حيوانية مزدوجة! NH₃ كربنة حيوانية: أمونيا مزارع تدخل المطبخ ← تتفاعل مع دهون الفرن ← كربنة حيوانية = طبقة أصعب من الكربنة العادية. Enzymatic يكسّر الروابط الحيوانية ثم Alkaline يُذيب الكربنة. CaCO₃ كلس ماء الفرن: لو الفرن يستخدم بخار (بعض الأفران الحديثة) = ماء صنبور 450ppm = كلس داخل الفرن. Descaler. SiO₂ غبار: يتراكم فوق الفرن وحوله. Microfiber. ΔT 48°م: فرن يعمل 250°م + مكيف = فارق أعلى = إجهاد Seal الفرن. فحص Seal سنوي. 15-25% = تجفيف سريع بعد التنظيف! لا عفن! مقارنة: خميس = Biofilm + كربنة رطبة. الخرج = كربنة حيوانية + جافة = أسهل 20% لكن Enzymatic إلزامي.',
        shortAnswer: 'على عكس [Alkaline مباشر الذي لا يصل الروابط الحيوانية]، يعتمد بروتوكولنا في خدمة [تنظيف الأفران] بمدينة [الخرج] على [Enzymatic ← Alkaline ← Descaler ← فحص Seal]. ففي ظل [NH₃ كربنة حيوانية+CaCO₃ كلس+SiO₂+ΔT]، تتفاقم ظاهرة [كربنة مزدوجة+كلس+إجهاد]. لذا؛ يتدخل فريقنا عبر [إنزيم ← قلوي ← مقياس ← فحص] — أسهل من خميس!',
        heroSubtitle: 'NH₃ كربنة حيوانية + CaCO₃ كلس — Enzymatic ← Alkaline!',
    },
    pricing: [
        { type: 'فرن واحد', unit: 'فرن', minPrice: 80, maxPrice: 170, time: '1-2 ساعة' },
        { type: 'فرن + Enzymatic عميق', unit: 'فرن', minPrice: 120, maxPrice: 250, time: '2-3 ساعات' },
        { type: 'مطبخ كامل', unit: 'مطبخ', minPrice: 200, maxPrice: 400, time: '3-5 ساعات' },
        { type: 'ربع سنوي', unit: 'سنة', minPrice: 260, maxPrice: 520, time: '4 زيارات' },
    ],
    faq: [
        { question: 'ليش كربنة فرن الخرج أصعب من الرياض؟', answer: 'NH₃ مزارع + دهون = كربنة حيوانية = روابط أقوى. Enzymatic يكسّر ثم Alkaline.' },
        { question: 'هل CaCO₃ يأثر على الفرن بالخرج؟', answer: 'أفران بخار = كلس داخلي. Descaler. أفران عادية: لا تأثير مباشر.' },
        { question: 'كم تكلفة تنظيف فرن بالخرج مقارنة بخميس؟', answer: 'أرخص 15-20% — لا Biofilm = كربنة جافة أسهل. لكن: Enzymatic إلزامي.' },
        { question: 'هل Alkaline وحده يكفي لفرن الخرج؟', answer: 'لا! روابط حيوانية NH₃ = Alkaline لا يصل. Enzymatic أولاً يكسّر ← ثم Alkaline.' },
        { question: 'كم مرة أنظف الفرن بالخرج؟', answer: 'ربع سنوي. استخدام مكثف = كل شهرين. كربنة حيوانية تتراكم أسرع من العادية.' },
    ],
    expertTips: [
        'Enzymatic أولاً — يكسّر روابط حيوانية.',
        'Alkaline ثانياً — يُذيب الكربنة.',
        'Descaler — كلس أفران بخار.',
        'فحص Seal — ΔT إجهاد.',
        'أسهل من خميس — لا Biofilm!',
    ],
    warnings: [
        'Alkaline بدون Enzymatic = كربنة حيوانية تبقى — تنظيف سطحي.',
        'كربنة حيوانية × 6 أشهر = طبقة صلبة — يحتاج حفّ ميكانيكي.',
        'Seal فرن + ΔT 48°م = يتلف — تسريب حراري = فاتورة أعلى.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص شركات التنظيف' },
        { entity: AMANA.RIYADH.entity, url: AMANA.RIYADH.url, role: 'اشتراطات أمانة الرياض' },
    ],
    expertReviewer: EXPERTS.ALMOHAIMED,
    expertCitations: [
        { expert: EXPERTS.ALMOHAIMED.name, quote: 'فرن الخرج: كربنة حيوانية NH₃. Enzymatic أولاً. أسهل من Biofilm خميس.', source: 'نصائح هندسية — أفران زراعية' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ تنظيف أفران مرخص', authority: 'بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'Enzymatic Cleaner', use: 'يكسّر روابط كربنة حيوانية' },
        { name: 'Alkaline Degreaser', use: 'يُذيب كربنة بعد Enzymatic' },
        { name: 'Descaler', use: 'كلس أفران بخار — CaCO₃' },
    ],
    commonConcerns: [
        { concern: 'Alkaline يكفي.', solution: 'كربنة حيوانية = Enzymatic أولاً.' },
        { concern: 'مثل الرياض.', solution: 'NH₃ = روابط حيوانية أقوى.' },
    ],
    consumerEducation: [
        { myth: 'تنظيف عادي.', truth: 'كربنة حيوانية = Enzymatic ← Alkaline.' },
        { myth: 'نصف سنوي.', truth: 'كربنة حيوانية أسرع = ربع سنوي.' },
    ],
    relatedServices: [
        { slug: 'restaurant-chimney-cleaning', context: 'مداخن', priority: 1 },
        { slug: 'cleaning', context: 'تنظيف', priority: 2 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 3 },
        { slug: 'steam-cleaning', context: 'بخار', priority: 4 },
        { slug: 'pest-control', context: 'حشرات', priority: 5 },
        { slug: 'carpet-cleaning', context: 'سجاد', priority: 6 },
        { slug: 'marble-polishing', context: 'رخام', priority: 7 },
    ],
};
