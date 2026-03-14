import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف مداخن مطاعم بينبع — NaCl+دهن+SOx=طبقة صناعية+70-85% — Degreaser! (2026)',
        description: 'تنظيف مداخن مطاعم ينبع. NaCl+دهن+SOx=طبقة صناعية! 70-85%. Degreaser صناعي+HEPA+فلتر ساحلي.',
        h1: 'تنظيف مداخن مطاعم بينبع — ملح+دهن+حمض!',
        keywords: ['تنظيف مداخن مطاعم ينبع', 'تنظيف مدخنة بينبع', 'شركة تنظيف مداخن ينبع'],
    },
    content: {
        introduction: 'مدخنة مطعم بينبع = ثلاثي ملح+دهن+حمض! NaCl+دهن+SOx: ملح بحري+دهن مطبخ+أكاسيد YASREF = طبقة صناعية ثلاثية صلبة لا تُزال بدون Degreaser صناعي. 70-85%: رطوبة تُبقي الطبقة لزجة = خطر حريق أعلى! NaCl تآكل: ملح يأكل الفولاذ المقاوم (حتى Stainless). Anti-Corrosion. SOx+حرارة: حمض مُركّز بالحرارة داخل المدخنة. Chemical Wash. مقارنة: بريدة = CaCO₃+دهن. ينبع = NaCl+SOx+دهن = طبقة صناعية ثلاثية أصعب. الدفاع المدني يفتّش.',
        shortAnswer: 'على عكس [التنظيف بدون Degreaser صناعي]، يعتمد بروتوكولنا في خدمة [تنظيف المداخن] بمدينة [ينبع] على [Degreaser ثلاثي+Anti-Corrosion+Chemical Wash]. ففي ظل [NaCl+دهن+SOx+70-85%+حريق]، تتفاقم ظاهرة [طبقة صناعية+تآكل+حريق]. لذا؛ يتدخل فنيونا عبر [Degreaser ← Anti-Corrosion ← Chemical ← فحص].',
        heroSubtitle: 'NaCl+دهن+SOx = طبقة ثلاثية + حريق — Degreaser صناعي!',
    },
    pricing: [
        { type: 'مدخنة صغيرة', unit: 'مدخنة', minPrice: 250, maxPrice: 520, time: '2-3h' },
        { type: 'مدخنة + فلاتر', unit: 'مدخنة', minPrice: 400, maxPrice: 800, time: '3-5h' },
        { type: 'نظام كامل (مطعم)', unit: 'نظام', minPrice: 600, maxPrice: 1200, time: '5-8h' },
        { type: 'ربع سنوي (4 تنظيف)', unit: 'باقة', minPrice: 800, maxPrice: 1600, time: '4 زيارات' },
    ],
    faq: [
        { question: 'ما الطبقة الصناعية داخل مدخنة ينبع؟', answer: 'NaCl+دهن+SOx = ثلاثي صلب. Degreaser صناعي فقط.' },
        { question: 'ليش حريق مدخنة أخطر بينبع؟', answer: '70-85% يُبقي الدهن لزجاً+NaCl يُصلّب = اشتعال. الدفاع المدني.' },
        { question: 'هل NaCl يأكل Stainless Steel بينبع؟', answer: 'حتى Stainless يتآكل بـ NaCl 41‰. Anti-Corrosion Spray.' },
        { question: 'كم مرة تنظيف مدخنة بينبع؟', answer: 'ربع سنوي إلزامي. الدفاع المدني يفتّش.' },
        { question: 'كم تكلفة مدخنة بينبع مقابل بريدة؟', answer: 'أغلى 30-40% — طبقة ثلاثية+Anti-Corrosion.' },
    ],
    expertTips: [
        'Degreaser صناعي — ثلاثي NaCl+دهن+SOx.',
        'Anti-Corrosion — NaCl حتى Stainless.',
        'Chemical Wash — SOx+حرارة.',
        'ربع سنوي — الدفاع المدني.',
        'HEPA مطبخ — SOx+دهن غازي.',
    ],
    warnings: [
        'NaCl+دهن+SOx × 3 أشهر = حريق مدخنة — الدفاع المدني YMYL.',
        'NaCl + Stainless × سنة = تآكل — Anti-Corrosion.',
        '70-85% + دهن لزج = اشتعال أسرع — تنظيف ربع سنوي.',
    ],
    trustAnchors: [
        { ...GOV.CIVILDEFENSE, role: 'فحص مداخن — سلامة حريق' },
        { ...GOV.BALADI, role: 'ترخيص شركات التنظيف' },
        { ...GOV.SFDA, role: 'سلامة غذائية' },
        { entity: AMANA.MADINAH.entity, url: AMANA.MADINAH.url, role: 'اشتراطات أمانة ينبع' },
    ],
    expertReviewer: EXPERTS.ALMOHAIMED,
    expertCitations: [
        { expert: EXPERTS.ALMOHAIMED.name, quote: 'مدخنة ينبع: NaCl+دهن+SOx = ثلاثي. Anti-Corrosion حتى Stainless.', source: 'نصائح هندسية — مداخن ساحلية' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ تنظيف مداخن مرخص', authority: 'الدفاع المدني + بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'Degreaser صناعي ثلاثي', use: 'NaCl+دهن+SOx — صلب' },
        { name: 'Anti-Corrosion Spray', use: 'NaCl — Stainless' },
        { name: 'Chemical Wash', use: 'SOx+حرارة — حمض' },
    ],
    commonConcerns: [
        { concern: 'التنظيف العادي.', solution: 'طبقة ثلاثية. Degreaser صناعي.' },
        { concern: 'مثل بريدة.', solution: 'NaCl+SOx إضافي. ثلاثي.' },
    ],
    consumerEducation: [
        { myth: 'سنوي.', truth: 'ربع سنوي. الدفاع المدني.' },
        { myth: 'تنظيف عادي.', truth: 'ثلاثي = Degreaser صناعي.' },
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
