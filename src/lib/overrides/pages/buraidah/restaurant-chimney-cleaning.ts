import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف مداخن مطاعم ببريدة — CaCO₃ 600ppm كلس+ΔT 45°م دهون+Nafud — Descaler+Degreaser! (2026)',
        description: 'تنظيف مداخن مطاعم بريدة. CaCO₃ 600ppm كلس بخار! ΔT 45°م دهون. Nafud SiO₂. Descaler+Degreaser+فحص 998.',
        h1: 'تنظيف مداخن مطاعم ببريدة — كلس+دهون!',
        keywords: ['تنظيف مداخن مطاعم بريدة', 'تنظيف مدخنة ببريدة', 'شركة تنظيف مداخن بريدة'],
    },
    content: {
        introduction: 'مدخنة مطعم بريدة = كلس+دهون طبقة مزدوجة! CaCO₃ 600ppm كلس بخار: بخار الطبخ يحمل أعلى كلس بالمملكة ← يترسب داخل المدخنة = كلس+دهن طبقة مزدوجة أصلب. Descaler أولاً ← ثم Degreaser. ΔT 45°م دهون: صيف 48°م = دهون تتحلل أسرع ← رائحة أقوى ← خطر حريق أعلى. فحص شهري. Nafud SiO₂: رمل النفود يدخل المدخنة ← يختلط بالدهن = طبقة خشنة. HEPA. 10-20% = لا تكثّف في المدخنة! ميزة — خميس: تكثّف+عفن. مقارنة: خميس = رطوبة+تكثّف+عفن. بريدة = كلس+دهن مزدوج لكن لا تكثّف = أبسط عموماً. الدفاع المدني 998 يشترط فحص دوري.',
        shortAnswer: 'على عكس [Degreaser بدون Descaler]، يعتمد بروتوكولنا في خدمة [تنظيف المداخن] بمدينة [بريدة] على [Descaler أولاً+Degreaser+HEPA+فحص 998]. ففي ظل [CaCO₃ 600ppm كلس+ΔT دهون أسرع+Nafud خشونة+لا تكثّف]، تتفاقم ظاهرة [طبقة مزدوجة+رائحة+حريق]. لذا؛ يتدخل فريقنا عبر [Descaler ← Degreaser ← HEPA ← فحص] — لا تكثّف!',
        heroSubtitle: 'CaCO₃ 600ppm + ΔT دهون = طبقة مزدوجة — Descaler أولاً!',
    },
    pricing: [
        { type: 'مدخنة مطعم صغير', unit: 'مدخنة', minPrice: 200, maxPrice: 420, time: '2-4h' },
        { type: 'مدخنة كبيرة + Descaler', unit: 'مدخنة', minPrice: 350, maxPrice: 720, time: '4-6h' },
        { type: 'فحص 998 + تقرير', unit: 'فحص', minPrice: 150, maxPrice: 310, time: '1-2h' },
        { type: 'عقد ربع سنوي', unit: 'سنة', minPrice: 600, maxPrice: 1200, time: '4 زيارات' },
    ],
    faq: [
        { question: 'ليش مدخنة بريدة أصعب تنظيف؟', answer: 'CaCO₃ 600ppm بخار = كلس+دهن مزدوج. Descaler أولاً ← Degreaser.' },
        { question: 'ليش خطر حريق أعلى ببريدة صيفاً؟', answer: 'ΔT 48°م = دهون تتحلل أسرع = رائحة+اشتعال. فحص شهري صيفاً.' },
        { question: 'كم تكلفة تنظيف مدخنة ببريدة مقارنة بخميس؟', answer: 'Descaler إضافي +10%. لكن: لا تكثّف = أبسط عموماً.' },
        { question: 'هل الدفاع المدني 998 يفحص ببريدة؟', answer: 'نعم — فحص دوري إلزامي. تقرير مطلوب. غرامة بدونه.' },
        { question: 'هل المدخنة تتكثّف ببريدة؟', answer: 'لا! 10-20% = لا تكثّف. خميس: تكثّف+عفن يومي.' },
    ],
    expertTips: [
        'Descaler أولاً — كلس يغطي دهن.',
        'Degreaser ثانياً — بعد إذابة كلس.',
        'فحص 998 — إلزامي دوري.',
        'شهري صيفاً — ΔT يُسرّع تحلل.',
        'لا تكثّف — 10-20% ميزة.',
    ],
    warnings: [
        'كلس+دهن × 3 أشهر = طبقة صلبة ← خطر حريق — 998 غرامة.',
        'Degreaser بدون Descaler = كلس يبقى تحت ← طبقة مزدوجة دائمة.',
        'ΔT × صيف × بدون فحص = أعلى خطر اشتعال — YMYL.',
    ],
    trustAnchors: [
        { ...GOV.CIVILDEFENSE, role: 'فحص سلامة المداخن 998' },
        { ...GOV.BALADI, role: 'ترخيص المطاعم' },
        { entity: AMANA.QASSIM.entity, url: AMANA.QASSIM.url, role: 'اشتراطات أمانة القصيم' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALMOHAIMED.name, quote: 'مداخن بريدة: 600ppm كلس+دهن مزدوج. Descaler أولاً. فحص 998.', source: 'نصائح هندسية — مداخن القصيم' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ مداخن فحص 998', authority: 'الدفاع المدني + بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'Descaler صناعي', use: 'CaCO₃ 600ppm كلس مدخنة' },
        { name: 'Degreaser صناعي', use: 'دهون — بعد Descaler' },
        { name: 'كاميرا فحص', use: 'فحص 998 — تقرير' },
    ],
    commonConcerns: [
        { concern: 'Degreaser يكفي.', solution: '600ppm كلس يغطي. Descaler أولاً.' },
        { concern: 'سنوي يكفي.', solution: 'ΔT = شهري صيفاً. 998 دوري.' },
    ],
    consumerEducation: [
        { myth: 'Degreaser فقط.', truth: '600ppm = Descaler أولاً.' },
        { myth: 'فحص اختياري.', truth: '998 = إلزامي. غرامة.' },
    ],
    relatedServices: [
        { slug: 'oven-cleaning', context: 'أفران', priority: 1 },
        { slug: 'cleaning', context: 'تنظيف', priority: 2 },
        { slug: 'pest-control', context: 'حشرات', priority: 3 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 4 },
        { slug: 'steam-cleaning', context: 'بخار', priority: 5 },
        { slug: 'glass-facades-cleaning', context: 'واجهات', priority: 6 },
        { slug: 'marble-polishing', context: 'رخام', priority: 7 },
    ],
};
