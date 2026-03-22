import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../gov-references';

export const override: PageOverride = {
    meta: {
        title: 'عزل حراري بينبع — NaCl CUI+70-85% Vapor+SOx — Closed-Cell+Vapor+Marine! (2026)',
        description: 'عزل حراري ينبع. NaCl CUI! 70-85% Vapor Barrier إلزامي. SOx حمض. Closed-Cell+Vapor+Marine+SBC 601.',
        h1: 'عزل حراري بينبع — NaCl+Vapor+SOx!',
        keywords: ['عزل حراري ينبع', 'عزل حراري بينبع', 'شركة عزل حراري ينبع'],
    },
    content: {
        introduction: 'عزل حراري ينبع = عكس بريدة تماماً! NaCl CUI (Corrosion Under Insulation): ملح بحري يتسلل تحت العزل ← يتآكل السطح المعدني = أخطر من الحرارة نفسها! Anti-Corrosion Primer قبل العزل. 70-85% Vapor Barrier إلزامي: تكثّف بيني = عفن+تلف بنيوي. بريدة 10-20% = لا Vapor = أرخص 40%. ينبع = Vapor إلزامي. Closed-Cell R-6/inch فقط: Open-Cell يمتص 70-85% = كارثة. Open-Cell ببريدة = ممتاز. Open-Cell بينبع = كارثة. SOx H₂SO₄: YASREF حمض يهاجم أسطح. Marine Coating. حرارة 45°م: وفر 25-30% كهرباء. لكن: ΔT أقل من بريدة (45°م). SBC 601.',
        shortAnswer: 'على عكس [Open-Cell بدون Vapor — كما ببريدة]، يعتمد بروتوكولنا في خدمة [العزل الحراري] بمدينة [ينبع] على [Closed-Cell+Vapor Barrier+Anti-Corrosion+Marine Coating]. ففي ظل [NaCl CUI+70-85% تكثّف+SOx حمض]، تتفاقم ظاهرة [تآكل تحت+تكثّف+حمض]. لذا؛ يتدخل فنيونا عبر [Anti-Corrosion ← Closed ← Vapor ← Marine] = عكس بريدة!',
        heroSubtitle: 'NaCl CUI + 70-85% Vapor إلزامي — Closed-Cell+Marine! عكس بريدة!',
    },
    pricing: [
        { type: 'Closed-Cell جدران', unit: 'م²', minPrice: 40, maxPrice: 85, time: '1-3 أيام' },
        { type: 'Closed-Cell سقف', unit: 'م²', minPrice: 50, maxPrice: 100, time: '1-2 يوم' },
        { type: '+ Vapor Barrier', unit: 'م²', minPrice: 15, maxPrice: 30, time: '+ يوم' },
        { type: 'فحص حراري + تقرير', unit: 'خدمة', minPrice: 250, maxPrice: 520, time: '1 يوم' },
    ],
    faq: [
        { question: 'ليش Open-Cell كارثة بينبع؟', answer: 'يمتص 70-85% رطوبة = عفن+تلف. ببريدة لا مشكلة (10-20%).' },
        { question: 'ما CUI بينبع؟', answer: 'NaCl يتآكل تحت العزل. أخطر من الحرارة. Anti-Corrosion أولاً.' },
        { question: 'كم يوفر عزل حراري بينبع كهرباء؟', answer: '25-30%. أقل من بريدة (35-45%) لأن ΔT أقل. لكن إلزامي.' },
        { question: 'كم تكلفة حراري بينبع مقابل بريدة؟', answer: 'أغلى 40-50%! Closed+Vapor+Marine. بريدة: Open فقط.' },
        { question: 'ليش Vapor Barrier إلزامي بينبع؟', answer: '70-85% = تكثّف بيني. بريدة 10-20% = لا حاجة.' },
    ],
    expertTips: [
        'Closed-Cell R-6 — 70-85% لا Open.',
        'Vapor Barrier — تكثّف بيني إلزامي.',
        'Anti-Corrosion Primer — NaCl CUI.',
        'Marine Coating — SOx YASREF.',
        'SBC 601 — إلزامي. غرامة.',
    ],
    warnings: [
        'Open-Cell + 70-85% = يمتص = عفن ← تلف بنيوي YMYL.',
        'NaCl + بدون Anti-Corrosion = CUI ← صدأ تحت العزل.',
        'بدون Vapor + 70-85% = تكثّف بيني ← عفن.',
    ],
    trustAnchors: [
        { ...GOV.MOENERGY, role: 'كفاءة الطاقة — SBC 601' },
        { ...GOV.SBC, role: 'كود البناء السعودي' },
        { entity: AMANA.MADINAH.entity, url: AMANA.MADINAH.url, role: 'اشتراطات أمانة ينبع' },
    ],
    expertReviewer: EXPERTS.ALMOHAIMED,
    expertCitations: [
        { expert: EXPERTS.ALMOHAIMED.name, quote: 'حراري ينبع: عكس بريدة! Closed+Vapor+Anti-Corrosion. Open كارثة.', source: 'نصائح هندسية — حراري ساحلي' },
    ],
    saudiRegulations: [REGULATIONS.SBC_601],
    verificationBadges: [{ badge: '✔️ عزل مطابق SBC 601', authority: 'كود البناء + كفاءة', icon: 'shield-check' }],
    equipment: [
        { name: 'Closed-Cell PU Foam', use: 'R-6/inch — 70-85% مانع' },
        { name: 'Vapor Barrier', use: '70-85% — تكثّف بيني' },
        { name: 'Anti-Corrosion Primer', use: 'NaCl — CUI' },
    ],
    commonConcerns: [
        { concern: 'Open أرخص.', solution: '70-85% = يمتص = عفن. Closed.' },
        { concern: 'نفس بريدة.', solution: 'عكس! Closed+Vapor vs Open.' },
    ],
    consumerEducation: [
        { myth: 'Open يكفي.', truth: '70-85% = Closed. Open كارثة.' },
        { myth: 'لا Vapor.', truth: '70-85% = Vapor إلزامي.' },
    ],
    relatedServices: [
        { slug: 'roof-insulation', context: 'أسطح', priority: 1 },
        { slug: 'foam-insulation', context: 'فوم', priority: 2 },
        { slug: 'water-insulation', context: 'مائي', priority: 3 },
        { slug: 'tank-insulation', context: 'خزان', priority: 4 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 5 },
        { slug: 'water-leak-detection', context: 'تسرب', priority: 6 },
        { slug: 'cleaning', context: 'تنظيف', priority: 7 },
    ],
};
