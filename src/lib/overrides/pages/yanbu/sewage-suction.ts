import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../gov-references';

export const override: PageOverride = {
    meta: {
        title: 'شفط بيارات بينبع — تحلية TDS<150+NaCl+70-85% H₂S — شفط+تعقيم+تهوية! (2026)',
        description: 'شفط بيارات ينبع. تحلية TDS<150! NaCl 41‰. 70-85% H₂S أخطر. شفط+تعقيم+تهوية ساحلي.',
        h1: 'شفط بيارات بينبع — تحلية+NaCl+H₂S!',
        keywords: ['شفط بيارات ينبع', 'شفط بيارة بينبع', 'شركة شفط بيارات ينبع'],
    },
    content: {
        introduction: 'بيارات ينبع = رطوبة تُنتج H₂S أخطر! 70-85% H₂S: رطوبة = تحلل عضوي أسرع = H₂S (كبريتيد الهيدروجين) أعلى تركيز = سام! تهوية إلزامية. تحلية TDS<150: مياه محلاة تنتج حمأة مختلفة عن الجوفية. NaCl 41‰: ملح بحري يدخل مع مياه الأرض ← يزيد ملوحة البيارة = تآكل خرسانة أسرع. SOx: لا يأثر مباشرة. حرارة 45°م: صيف = تحلل أسرع = رائحة أقوى. شفط صيفي. مقارنة: بريدة = CaCO₃ كلس+ΔT رائحة لكن لا H₂S خطير. ينبع = H₂S+NaCl تآكل = أخطر.',
        shortAnswer: 'على عكس [الشفط بدون تهوية]، يعتمد بروتوكولنا في خدمة [شفط البيارات] بمدينة [ينبع] على [شفط+تهوية H₂S+تعقيم+Anti-Corrosion خرسانة]. ففي ظل [70-85% H₂S+NaCl تآكل+تحلية+حرارة]، تتفاقم ظاهرة [سُمّية+تآكل+رائحة]. لذا؛ يتدخل فنيونا عبر [تهوية ← شفط ← تعقيم ← Anti-Corrosion] — H₂S!',
        heroSubtitle: '70-85% H₂S سام + NaCl تآكل خرسانة — تهوية+شفط!',
    },
    pricing: [
        { type: 'شفط بيارة صغيرة', unit: 'خدمة', minPrice: 150, maxPrice: 310, time: '1-2h' },
        { type: 'شفط + تعقيم', unit: 'خدمة', minPrice: 200, maxPrice: 420, time: '2-3h' },
        { type: 'شفط كبير (20+ م³)', unit: 'خدمة', minPrice: 300, maxPrice: 620, time: '3-5h' },
        { type: 'عقد ربع سنوي', unit: 'سنة', minPrice: 500, maxPrice: 1000, time: '4 شفط' },
    ],
    faq: [
        { question: 'ليش بيارة ينبع أخطر؟', answer: '70-85% = H₂S أعلى = سام. تهوية إلزامية قبل الشفط.' },
        { question: 'هل NaCl يأثر على البيارة بينبع؟', answer: 'ملح يتآكل خرسانة أسرع. Anti-Corrosion Coating.' },
        { question: 'كم تكلفة شفط بينبع مقابل بريدة؟', answer: 'أغلى 15-20% — تهوية+Anti-Corrosion.' },
        { question: 'ليش الرائحة أقوى صيفاً بينبع؟', answer: '70-85%+حرارة 45°م = تحلل أسرع = H₂S+رائحة.' },
        { question: 'كم مرة شفط بينبع؟', answer: 'ربع سنوي. 70-85% = تحلل أسرع من بريدة.' },
    ],
    expertTips: [
        'تهوية — H₂S سام 70-85%.',
        'Anti-Corrosion — NaCl خرسانة.',
        'تعقيم — تحلية حمأة.',
        'صيفي — حرارة تحلل.',
        'ربع سنوي — رطوبة تسرّع.',
    ],
    warnings: [
        '70-85% + H₂S سام = خطر مميت بدون تهوية — YMYL.',
        'NaCl × خرسانة × سنوات = تآكل بيارة = انهيار.',
        'صيف + بدون شفط = H₂S + رائحة = جيران YMYL.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص شركات الشفط' },
        { entity: AMANA.MADINAH.entity, url: AMANA.MADINAH.url, role: 'اشتراطات أمانة ينبع' },
    ],
    expertReviewer: EXPERTS.ALMOHAIMED,
    expertCitations: [
        { expert: EXPERTS.ALMOHAIMED.name, quote: 'بيارة ينبع: H₂S 70-85% أخطر. NaCl تآكل. تهوية+Anti-Corrosion.', source: 'نصائح هندسية — بيارات ساحلية' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ شفط مرخص', authority: 'بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'تهوية صناعية', use: 'H₂S — سلامة إلزامية' },
        { name: 'شاحنة شفط', use: 'شفط حمأة — ساحلي' },
        { name: 'Anti-Corrosion', use: 'NaCl — خرسانة' },
    ],
    commonConcerns: [
        { concern: 'شفط عادي.', solution: 'H₂S 70-85% = تهوية.' },
        { concern: 'مثل بريدة.', solution: 'H₂S+NaCl = أخطر.' },
    ],
    consumerEducation: [
        { myth: 'نصف سنوي.', truth: '70-85% = ربع سنوي.' },
        { myth: 'شفط يكفي.', truth: 'تهوية+تعقيم+Anti-Corrosion.' },
    ],
    relatedServices: [
        { slug: 'sewage-unblocking', context: 'تسليك', priority: 1 },
        { slug: 'tanks-cleaning', context: 'خزانات', priority: 2 },
        { slug: 'water-leak-detection', context: 'تسرب', priority: 3 },
        { slug: 'bathroom-leak-detection', context: 'حمام', priority: 4 },
        { slug: 'cleaning', context: 'تنظيف', priority: 5 },
        { slug: 'pest-control', context: 'حشرات', priority: 6 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 7 },
    ],
};
