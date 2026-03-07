import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'عزل فوم بينبع — NaCl تآكل+70-85% Vapor Barrier+SOx — Closed-Cell+Marine! (2026)',
        description: 'عزل فوم ينبع. NaCl تآكل! 70-85% Vapor Barrier إلزامي. SOx حمض. Closed-Cell+Marine Coating.',
        h1: 'عزل فوم بينبع — NaCl+رطوبة+حمض!',
        keywords: ['عزل فوم ينبع', 'عزل فوم بينبع', 'شركة عزل فوم ينبع'],
    },
    content: {
        introduction: 'عزل فوم ينبع = Closed-Cell + Vapor Barrier إلزامي! NaCl تآكل: ملح بحري يهاجم الأسطح المعدنية تحت العزل ← Corrosion Under Insulation (CUI). Anti-Corrosion قبل الفوم. 70-85% Vapor Barrier: أعلى رطوبة = تكثّف بيني بين العزل والجدار ← عفن+تلف. Vapor Barrier إلزامي (عكس بريدة 10-20% لا حاجة!). Closed-Cell R-6/inch فقط — Open-Cell يمتص رطوبة. SOx H₂SO₄: حمض YASREF يهاجم أسطح الفوم المكشوفة. Marine Coating حماية. مقارنة: بريدة = Open-Cell R-3.7 يكفي+لا Vapor+أرخص 40-50%. ينبع = Closed-Cell+Vapor+Marine = أغلى لكن إلزامي.',
        shortAnswer: 'على عكس [Open-Cell بدون Vapor Barrier]، يعتمد بروتوكولنا في خدمة [عزل الفوم] بمدينة [ينبع] على [Closed-Cell R-6+Vapor Barrier+Anti-Corrosion+Marine Coating]. ففي ظل [NaCl CUI+70-85% تكثّف بيني+SOx حمض]، تتفاقم ظاهرة [تآكل تحت+تكثّف+حمض]. لذا؛ يتدخل فنيونا عبر [Anti-Corrosion ← Closed-Cell ← Vapor ← Marine].',
        heroSubtitle: 'NaCl CUI + 70-85% Vapor إلزامي + SOx — Closed-Cell+Marine!',
    },
    pricing: [
        { type: 'Closed-Cell جدران', unit: 'م²', minPrice: 40, maxPrice: 85, time: '1-3 أيام' },
        { type: 'Closed-Cell سقف', unit: 'م²', minPrice: 50, maxPrice: 100, time: '1-2 يوم' },
        { type: '+ Vapor Barrier', unit: 'م²', minPrice: 15, maxPrice: 30, time: '+ يوم' },
        { type: '+ Marine Coating', unit: 'م²', minPrice: 10, maxPrice: 25, time: '+ يوم' },
    ],
    faq: [
        { question: 'ليش Open-Cell لا يكفي بينبع؟', answer: 'Open-Cell يمتص 70-85% رطوبة = عفن+تلف. Closed-Cell مانع.' },
        { question: 'ما CUI بينبع؟', answer: 'Corrosion Under Insulation. NaCl يصدئ تحت العزل. Anti-Corrosion أولاً.' },
        { question: 'ليش Vapor Barrier إلزامي وبريدة لا؟', answer: 'بريدة 10-20% = لا تكثّف. ينبع 70-85% = تكثّف بيني إلزامي.' },
        { question: 'كم تكلفة فوم بينبع مقابل بريدة؟', answer: 'أغلى 40-50%! Closed-Cell+Vapor+Marine. بريدة: Open-Cell.' },
        { question: 'هل SOx يتلف الفوم بينبع؟', answer: 'H₂SO₄ YASREF يهاجم سطح الفوم. Marine Coating يحمي.' },
    ],
    expertTips: [
        'Closed-Cell R-6 فقط — 70-85%.',
        'Vapor Barrier — تكثّف بيني إلزامي.',
        'Anti-Corrosion — NaCl CUI.',
        'Marine Coating — SOx حمض.',
        'لا Open-Cell — يمتص رطوبة.',
    ],
    warnings: [
        'Open-Cell + 70-85% = يمتص رطوبة ← عفن+تلف — Closed-Cell.',
        'NaCl + بدون Anti-Corrosion = CUI ← صدأ تحت العزل.',
        'بدون Vapor + 70-85% = تكثّف بيني ← عفن — YMYL.',
    ],
    trustAnchors: [
        { ...GOV.MOENERGY, role: 'كفاءة الطاقة — SBC 601' },
        { ...GOV.SBC, role: 'كود البناء السعودي' },
        { entity: AMANA.MADINAH.entity, url: AMANA.MADINAH.url, role: 'اشتراطات أمانة ينبع' },
    ],
    expertReviewer: EXPERTS.ALJUND,
    expertCitations: [
        { expert: EXPERTS.ALJUND.name, quote: 'فوم ينبع: Closed-Cell+Vapor+Anti-Corrosion. Open-Cell كارثة 70-85%.', source: 'موسوعة أخطاء — عزل ساحلي' },
    ],
    saudiRegulations: [REGULATIONS.SBC_601],
    verificationBadges: [{ badge: '✔️ عزل مطابق SBC 601', authority: 'كود البناء', icon: 'shield-check' }],
    equipment: [
        { name: 'Closed-Cell PU Foam', use: 'R-6/inch — مانع رطوبة' },
        { name: 'Vapor Barrier', use: '70-85% — تكثّف بيني' },
        { name: 'Anti-Corrosion Primer', use: 'NaCl — CUI' },
    ],
    hiddenObjections: [
        { fear: 'Open أرخص.', solution: '70-85% = يمتص = عفن. Closed.' },
        { fear: 'مثل بريدة.', solution: 'عكس! Closed+Vapor vs Open.' },
    ],
    counterNarratives: [
        { myth: 'Open يكفي.', truth: '70-85% = Closed. Open كارثة.' },
        { myth: 'لا Vapor.', truth: '70-85% = Vapor إلزامي.' },
    ],
    relatedServices: [
        { slug: 'roof-insulation', context: 'أسطح', priority: 1 },
        { slug: 'thermal-insulation', context: 'حراري', priority: 2 },
        { slug: 'water-insulation', context: 'مائي', priority: 3 },
        { slug: 'tank-insulation', context: 'خزان', priority: 4 },
        { slug: 'water-leak-detection', context: 'تسرب', priority: 5 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 6 },
        { slug: 'cleaning', context: 'تنظيف', priority: 7 },
    ],
};
