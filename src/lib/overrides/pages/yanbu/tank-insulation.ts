import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'عزل خزانات بينبع — تحلية TDS<150 تآكل+NaCl+70-85% طحالب — Epoxy Marine! (2026)',
        description: 'عزل خزانات ينبع. تحلية تآكل! NaCl. 70-85% طحالب. Epoxy Marine-Grade+Anti-Algae+Anti-Corrosion.',
        h1: 'عزل خزانات بينبع — تحلية تآكل+طحالب!',
        keywords: ['عزل خزانات ينبع', 'عزل خزان بينبع', 'شركة عزل خزانات ينبع'],
    },
    content: {
        introduction: 'خزان ينبع = تحلية تأكل+طحالب تنمو! تحلية TDS<150 تآكل: مياه محلاة "جائعة" تمتص معادن من جدران الخزان ← تآكل 40% أسرع. Epoxy Marine-Grade Food. NaCl 41‰: ملح يدخل الخزان ← يتآكل أنابيب+جسم. Anti-Corrosion خارجي. 70-85% طحالب: رطوبة = طحالب داخل الخزان! Anti-Algae Coating. عكس بريدة (10-20% = لا طحالب). SOx: لا يأثر على الخزان المغلق. مقارنة: بريدة = CaCO₃ 600ppm يتقشّر إسمنتي+لا طحالب. ينبع = تآكل+طحالب+NaCl = أعقد.',
        shortAnswer: 'على عكس [العزل الإسمنتي]، يعتمد بروتوكولنا في خدمة [عزل الخزانات] بمدينة [ينبع] على [Epoxy Marine+Anti-Algae+Anti-Corrosion]. ففي ظل [تحلية تآكل+NaCl+70-85% طحالب]، تتفاقم ظاهرة [تآكل+طحالب+صدأ]. لذا؛ يتدخل فنيونا عبر [Anti-Corrosion ← Epoxy Marine ← Anti-Algae ← إحكام].',
        heroSubtitle: 'تحلية تآكل + 70-85% طحالب + NaCl — Epoxy Marine!',
    },
    pricing: [
        { type: 'خزان أرضي (10 م³)', unit: 'خزان', minPrice: 600, maxPrice: 1200, time: '1-2 يوم' },
        { type: 'خزان + Anti-Algae', unit: 'خزان', minPrice: 700, maxPrice: 1400, time: '+ يوم' },
        { type: 'Anti-Corrosion خارجي', unit: 'خزان', minPrice: 200, maxPrice: 420, time: '+ يوم' },
        { type: 'فحص سنوي', unit: 'سنة', minPrice: 200, maxPrice: 420, time: '1-2h' },
    ],
    faq: [
        { question: 'ليش عزل خزان ينبع يتآكل أسرع؟', answer: 'تحلية TDS<150 "جائعة" تمتص معادن. 40% أسرع. Epoxy Marine.' },
        { question: 'هل خزان ينبع يُنتج طحالب؟', answer: '70-85% = طحالب! بريدة: لا طحالب. Anti-Algae Coating.' },
        { question: 'كم تكلفة عزل خزان بينبع مقابل بريدة؟', answer: 'أغلى 25-35% — Anti-Algae+Anti-Corrosion. بريدة: Epoxy فقط.' },
        { question: 'هل NaCl يأثر على الخزان بينبع؟', answer: 'ملح يصدئ جسم الخزان من خارج. Anti-Corrosion.' },
        { question: 'كم مرة فحص عزل خزان بينبع؟', answer: 'سنوياً. تحلية+NaCl = أسرع تآكل.' },
    ],
    expertTips: [
        'Epoxy Marine-Grade — تحلية.',
        'Anti-Algae Coating — 70-85%.',
        'Anti-Corrosion خارجي — NaCl.',
        'فحص سنوي — تآكل أسرع.',
        'إحكام غطاء — NaCl يدخل.',
    ],
    warnings: [
        'تحلية + عزل عادي = تآكل ← تلوث مياه شرب YMYL.',
        '70-85% + بدون Anti-Algae = طحالب ← مياه ملوثة.',
        'NaCl + جسم خزان بدون Anti-Corrosion = صدأ خارجي.',
    ],
    trustAnchors: [
        { ...GOV.SBC, role: 'كود البناء — عزل خزانات' },
        { ...GOV.NWC, role: 'معايير مياه الشرب' },
        { entity: AMANA.MADINAH.entity, url: AMANA.MADINAH.url, role: 'اشتراطات أمانة ينبع' },
    ],
    expertReviewer: EXPERTS.ALMOHAIMED,
    expertCitations: [
        { expert: EXPERTS.ALMOHAIMED.name, quote: 'خزان ينبع: تحلية تآكل+طحالب. Epoxy Marine+Anti-Algae.', source: 'نصائح هندسية — خزانات ساحلية' },
    ],
    saudiRegulations: [REGULATIONS.SBC_602],
    verificationBadges: [{ badge: '✔️ عزل خزان مطابق SBC', authority: 'كود البناء + NWC', icon: 'shield-check' }],
    equipment: [
        { name: 'Epoxy Marine-Grade', use: 'تحلية — مقاوم تآكل', },
        { name: 'Anti-Algae Coating', use: '70-85% — يمنع طحالب' },
        { name: 'Anti-Corrosion', use: 'NaCl — خارجي+أنابيب' },
    ],
    hiddenObjections: [
        { fear: 'Epoxy عادي.', solution: 'تحلية = Marine-Grade.' },
        { fear: 'مثل بريدة.', solution: 'طحالب+تآكل vs CaCO₃.' },
    ],
    counterNarratives: [
        { myth: 'فحص 5 سنوات.', truth: 'تحلية+NaCl = سنوي.' },
        { myth: 'لا طحالب.', truth: '70-85% = طحالب. Anti-Algae.' },
    ],
    relatedServices: [
        { slug: 'tanks-cleaning', context: 'تنظيف خزان', priority: 1 },
        { slug: 'tank-leak-detection', context: 'تسرب خزان', priority: 2 },
        { slug: 'water-insulation', context: 'مائي', priority: 3 },
        { slug: 'water-leak-detection', context: 'تسرب مياه', priority: 4 },
        { slug: 'roof-insulation', context: 'أسطح', priority: 5 },
        { slug: 'cleaning', context: 'تنظيف', priority: 6 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 7 },
    ],
};
