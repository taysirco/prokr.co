import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف خزانات بينبع — تحلية TDS<150 تآكل+NaCl 41‰+70-85% طحالب — Anti-Corrosion! (2026)',
        description: 'تنظيف خزانات ينبع. تحلية TDS<150 تآكل! NaCl 41‰. 70-85% طحالب. Anti-Corrosion+Anti-Algae+RO+NWC.',
        h1: 'تنظيف خزانات بينبع — تحلية تآكل+طحالب!',
        keywords: ['تنظيف خزانات ينبع', 'تنظيف خزان بينبع', 'شركة تنظيف خزانات ينبع'],
    },
    content: {
        introduction: 'خزان ينبع = مياه تحلية تأكل+ملح+طحالب! تحلية TDS<150 تآكل: مياه محلاة "جائعة كيميائياً" تمتص معادن من جدران الخزان ← تآكل داخلي 40% أسرع. Epoxy Food-Grade. NaCl 41‰: ملح بحري يدخل الخزان من فتحة غير محكمة ← يزيد ملوحة. إحكام. 70-85% طحالب: رطوبة + حرارة = طحالب خضراء داخل الخزان! Anti-Algae أسبوعي. عكس بريدة (10-20% = لا طحالب!). SOx: حمض يتفاعل مع معدن الخزان. Anti-Corrosion. تعقيم NWC: كلور 0.5-1 PPM. حرارة 45°م = بكتيريا تنشط = مضاعف. مقارنة: بريدة = CaCO₃ Scale بدون طحالب = أبسط. ينبع = تآكل+طحالب+ملح = أعقد.',
        shortAnswer: 'على عكس [التنظيف بدون Anti-Algae+Anti-Corrosion]، يعتمد بروتوكولنا في خدمة [تنظيف الخزانات] بمدينة [ينبع] على [Anti-Algae+Anti-Corrosion+Epoxy+تعقيم NWC]. ففي ظل [تحلية تآكل+NaCl+70-85% طحالب+SOx]، تتفاقم ظاهرة [تآكل+طحالب+ملح+بكتيريا]. لذا؛ يتدخل فنيونا عبر [Anti-Algae ← Anti-Corrosion ← Epoxy ← تعقيم].',
        heroSubtitle: 'تحلية تآكل + NaCl + 70-85% طحالب — Anti-Algae+Epoxy!',
    },
    pricing: [
        { type: 'خزان صغير (5 م³)', unit: 'خزان', minPrice: 180, maxPrice: 370, time: '2-3h' },
        { type: 'خزان + Anti-Algae', unit: 'خزان', minPrice: 230, maxPrice: 480, time: '3-4h' },
        { type: 'خزان كبير (15+ م³)', unit: 'خزان', minPrice: 350, maxPrice: 720, time: '4-6h' },
        { type: 'ربع سنوي', unit: 'سنة', minPrice: 500, maxPrice: 1000, time: '4 تنظيف' },
    ],
    faq: [
        { question: 'ليش خزان ينبع يتآكل أسرع؟', answer: 'تحلية TDS<150 "جائعة". تمتص معادن الجدار. 40% أسرع. Epoxy.' },
        { question: 'هل الخزان يتعفّن بينبع؟', answer: '70-85% = طحالب خضراء! عكس بريدة (لا طحالب). Anti-Algae أسبوعي.' },
        { question: 'هل NaCl يدخل الخزان بينبع؟', answer: 'فتحة غير محكمة = NaCl يزيد ملوحة. إحكام إلزامي.' },
        { question: 'كم تكلفة خزان بينبع مقابل بريدة؟', answer: 'أغلى 30-40% — Anti-Algae+Anti-Corrosion. بريدة: Descaler فقط.' },
        { question: 'كم كلور تعقيم بينبع؟', answer: 'NWC 0.5-1 PPM. حرارة 45°م = مضاعف. بكتيريا تنشط.' },
    ],
    expertTips: [
        'Anti-Algae أسبوعي — 70-85% طحالب.',
        'Epoxy Food-Grade — تحلية تآكل.',
        'إحكام غطاء — NaCl يدخل.',
        'تعقيم NWC مضاعف — حرارة.',
        'Anti-Corrosion — SOx حمض.',
    ],
    warnings: [
        'تحلية TDS<150 × سنة = تآكل داخلي — Epoxy إلزامي YMYL.',
        '70-85% + خزان مفتوح = طحالب أسبوع — Anti-Algae.',
        'NaCl + فتحة = ملوحة مياه شرب — إحكام YMYL.',
    ],
    trustAnchors: [
        { ...GOV.NWC, role: 'معايير تعقيم خزانات (كلور 0.5-1 PPM)' },
        { ...GOV.MOH, role: 'بروتوكولات التعقيم' },
        { ...GOV.BALADI, role: 'ترخيص شركات التنظيف' },
        { entity: AMANA.MADINAH.entity, url: AMANA.MADINAH.url, role: 'اشتراطات أمانة ينبع' },
    ],
    expertReviewer: EXPERTS.ALMOHAIMED,
    expertCitations: [
        { expert: EXPERTS.ALMOHAIMED.name, quote: 'خزان ينبع: تحلية تآكل+طحالب+NaCl. Anti-Algae+Epoxy+إحكام.', source: 'نصائح هندسية — خزانات ساحلية' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ تنظيف خزانات NWC', authority: 'NWC + بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'Anti-Algae', use: '70-85% — طحالب أسبوعي' },
        { name: 'Anti-Corrosion Coating', use: 'تحلية — تآكل' },
        { name: 'Epoxy Food-Grade', use: 'جدران — حماية' },
    ],
    hiddenObjections: [
        { fear: 'مثل بريدة.', solution: 'طحالب+تآكل vs Scale. مختلف.' },
        { fear: 'تعقيم يكفي.', solution: 'Anti-Algae+Anti-Corrosion إضافي.' },
    ],
    counterNarratives: [
        { myth: 'سنوي.', truth: '70-85% = ربع سنوي. طحالب.' },
        { myth: 'تحلية نظيفة.', truth: 'TDS<150 = تآكل. Epoxy.' },
    ],
    relatedServices: [
        { slug: 'tank-insulation', context: 'عزل خزان', priority: 1 },
        { slug: 'tank-leak-detection', context: 'تسرب خزان', priority: 2 },
        { slug: 'swimming-pool-cleaning', context: 'مسابح', priority: 3 },
        { slug: 'water-leak-detection', context: 'تسرب مياه', priority: 4 },
        { slug: 'cleaning', context: 'تنظيف', priority: 5 },
        { slug: 'pest-control', context: 'حشرات', priority: 6 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 7 },
    ],
};
