import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../gov-references';

export const override: PageOverride = {
    meta: {
        title: 'عزل خزانات ببريدة — CaCO₃ 600ppm تآكل أعلى+ΔT 45°م إجهاد+Nafud — Epoxy+فحص! (2026)',
        description: 'عزل خزانات بريدة. CaCO₃ 600ppm تآكل أعلى! ΔT 45°م إجهاد حراري. Nafud SiO₂. Epoxy+فحص دوري.',
        h1: 'عزل خزانات ببريدة — أعلى كلس تآكل!',
        keywords: ['عزل خزانات بريدة', 'عزل خزان ببريدة', 'شركة عزل خزانات بريدة'],
    },
    content: {
        introduction: 'خزان بريدة = أعلى كلس يأكل العزل! CaCO₃ 600ppm تآكل: أعلى كلس بالمملكة يتراكم على جدران الخزان ← يتسلل تحت العزل ← يرفعه ← يتقشّر. Epoxy Food-Grade فقط (لا إسمنتي). فحص سنوي. ΔT 45°م إجهاد: سطح 70°م+ صيف ← خزان يتمدد/ينكمش يومياً = إجهاد عزل. عزل مرن Epoxy. خزان أرضي أفضل. Nafud SiO₂: لا يأثر على الخزان المغلق. لكن: فتحة غير محكمة = Nafud يدخل. إحكام. 10-20% = لا تكثّف داخل الخزان! لا طحالب! ميزة — خميس: طحالب+عفن. مقارنة: خميس = Epoxy+Anti-Algae+Anti-Fungal. بريدة = Epoxy فقط = أبسط.',
        shortAnswer: 'على عكس [العزل الإسمنتي الذي يتقشّر بالكلس]، يعتمد بروتوكولنا في خدمة [عزل الخزانات] بمدينة [بريدة] على [Epoxy Food-Grade مرن+فحص سنوي+إحكام]. ففي ظل [CaCO₃ 600ppm تآكل+ΔT إجهاد+لا طحالب]، تتفاقم ظاهرة [تقشّر+إجهاد حراري]. لذا؛ يتدخل فنيونا عبر [Epoxy مرن ← فحص ← إحكام] — لا طحالب!',
        heroSubtitle: 'CaCO₃ 600ppm تآكل + ΔT إجهاد — Epoxy مرن! لا طحالب!',
    },
    pricing: [
        { type: 'خزان أرضي (10 م³)', unit: 'خزان', minPrice: 500, maxPrice: 1000, time: '1-2 يوم' },
        { type: 'خزان سطح مكشوف', unit: 'خزان', minPrice: 600, maxPrice: 1200, time: '1-2 يوم' },
        { type: 'فحص + إعادة عزل', unit: 'خدمة', minPrice: 350, maxPrice: 720, time: '1 يوم' },
        { type: 'فحص سنوي', unit: 'سنة', minPrice: 150, maxPrice: 320, time: '1-2h' },
    ],
    faq: [
        { question: 'ليش عزل خزان بريدة يتقشّر؟', answer: 'CaCO₃ 600ppm يتراكم تحت العزل ← يرفعه. Epoxy فقط. لا إسمنتي.' },
        { question: 'هل الخزان يحتاج Anti-Algae ببريدة؟', answer: 'لا! 10-20% = لا طحالب. خميس: طحالب أسبوعية. ميزة.' },
        { question: 'كم تكلفة عزل خزان ببريدة مقارنة بخميس؟', answer: 'أرخص 20-25% — لا Anti-Algae+Anti-Fungal. Epoxy فقط.' },
        { question: 'هل ΔT يأثر على الخزان ببريدة؟', answer: 'ΔT 45°م = إجهاد حراري. خزان أرضي أفضل. عزل مرن.' },
        { question: 'كم مرة فحص عزل خزان ببريدة؟', answer: 'سنوياً — 600ppm يتسلل. فحص يكشف تقشّر مبكراً.' },
    ],
    expertTips: [
        'Epoxy Food-Grade — لا إسمنتي.',
        'فحص سنوي — 600ppm تقشّر.',
        'خزان أرضي — ΔT أقل إجهاد.',
        'إحكام غطاء — Nafud يدخل.',
        'لا Anti-Algae — 10-20% ميزة.',
    ],
    warnings: [
        'إسمنتي + CaCO₃ 600ppm = تقشّر خلال سنة — Epoxy فقط.',
        'ΔT × خزان سطح = إجهاد مضاعف — أرضي أفضل 3×.',
        'بدون فحص سنوي = 600ppm يتسلل ← تلوث ماء YMYL.',
    ],
    trustAnchors: [
        { ...GOV.SBC, role: 'كود البناء — عزل خزانات' },
        { ...GOV.NWC, role: 'معايير مياه الشرب' },
        { entity: AMANA.QASSIM.entity, url: AMANA.QASSIM.url, role: 'اشتراطات أمانة القصيم' },
    ],
    expertReviewer: EXPERTS.ALMOHAIMED,
    expertCitations: [
        { expert: EXPERTS.ALMOHAIMED.name, quote: 'خزان بريدة: 600ppm يتقشّر إسمنتي. Epoxy فقط. لا طحالب.', source: 'نصائح هندسية — خزانات القصيم' },
    ],
    saudiRegulations: [REGULATIONS.SBC_602],
    verificationBadges: [{ badge: '✔️ عزل خزان مطابق SBC', authority: 'كود البناء + NWC', icon: 'shield-check' }],
    equipment: [
        { name: 'Epoxy Food-Grade', use: 'مقاوم CaCO₃ 600ppm' },
        { name: 'فاحص سماكة', use: 'فحص تقشّر — سنوي' },
        { name: 'إحكام غطاء', use: 'Nafud — يمنع دخول' },
    ],
    commonConcerns: [
        { concern: 'إسمنتي أرخص.', solution: '600ppm يتقشّر سنة. Epoxy يدوم 10+.' },
        { concern: 'مثل خميس.', solution: 'لا طحالب = أرخص 25%.' },
    ],
    consumerEducation: [
        { myth: 'إسمنتي يكفي.', truth: '600ppm = تقشّر سنة. Epoxy.' },
        { myth: 'فحص 5 سنوات.', truth: '600ppm = سنوي. يتسلل.' },
    ],
    relatedServices: [
        { slug: 'tanks-cleaning', context: 'تنظيف خزانات', priority: 1 },
        { slug: 'tank-leak-detection', context: 'تسرب خزان', priority: 2 },
        { slug: 'water-insulation', context: 'مائي', priority: 3 },
        { slug: 'water-leak-detection', context: 'تسرب مياه', priority: 4 },
        { slug: 'roof-insulation', context: 'أسطح', priority: 5 },
        { slug: 'cleaning', context: 'تنظيف', priority: 6 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 7 },
    ],
};
