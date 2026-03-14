import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'عزل أسطح بينبع — NaCl ملح بحري+70-85% تكثّف+SOx — SBS+Vapor+Anti-Corrosion! (2026)',
        description: 'عزل أسطح ينبع. NaCl ملح! 70-85% تكثّف. SOx حمض. SBS Marine+Vapor Barrier+Anti-Corrosion+Closed-Cell.',
        h1: 'عزل أسطح بينبع — ملح+رطوبة+حمض!',
        keywords: ['عزل أسطح ينبع', 'عزل سطح بينبع', 'شركة عزل أسطح ينبع'],
    },
    content: {
        introduction: 'سطح ينبع = NaCl+رطوبة+SOx ثلاثي! NaCl ملح: ملح بحري يهاجم أغشية العزل العادية ← يتشقق SBS عادي. SBS Marine-Grade مقاوم ملح. 70-85% تكثّف: رطوبة = تكثّف تحت العزل ← عفن+تلف. Vapor Barrier+Closed-Cell. SOx H₂SO₄: YASREF حمض يهاجم أسطح الأغشية ← يتلف. UV+Chemical Resistant بدل عادي. NaCl + Fasteners: مسامير التثبيت تصدأ ← العزل يطير. Stainless 316 Fasteners. حرارة 45°م: تمدد حراري. مرونة SBS. مقارنة: بريدة = لا مطر = لا SBS! Open-Cell+لا Vapor = أرخص 60%. ينبع = SBS+Closed+Vapor+Marine = الأغلى لكن إلزامي.',
        shortAnswer: 'على عكس [SBS عادي بدون Marine+Vapor]، يعتمد بروتوكولنا في خدمة [عزل الأسطح] بمدينة [ينبع] على [SBS Marine+Closed-Cell+Vapor Barrier+316 Fasteners]. ففي ظل [NaCl ملح+70-85% تكثّف+SOx حمض+حرارة]، تتفاقم ظاهرة [تشقق+تكثّف+حمض+صدأ]. لذا؛ يتدخل فنيونا عبر [Anti-Corrosion ← Closed ← Vapor ← SBS Marine].',
        heroSubtitle: 'NaCl + 70-85% + SOx — SBS Marine+Vapor+Closed-Cell!',
    },
    pricing: [
        { type: 'Closed-Cell + Vapor', unit: 'م²', minPrice: 50, maxPrice: 100, time: '1-3 أيام' },
        { type: '+ SBS Marine', unit: 'م²', minPrice: 30, maxPrice: 65, time: '+ 1-2 يوم' },
        { type: '+ Anti-Corrosion', unit: 'م²', minPrice: 10, maxPrice: 25, time: '+ يوم' },
        { type: 'فحص سنوي', unit: 'خدمة', minPrice: 200, maxPrice: 420, time: '1 يوم' },
    ],
    faq: [
        { question: 'ليش SBS عادي لا يكفي بينبع؟', answer: 'NaCl يُتشقق غشاء عادي. Marine-Grade مقاوم ملح.' },
        { question: 'ليش Vapor Barrier إلزامي وبريدة لا؟', answer: '70-85% = تكثّف تحت العزل. بريدة 10-20% = لا حاجة.' },
        { question: 'كم تكلفة عزل سطح بينبع مقابل بريدة؟', answer: 'أغلى 60-70%! SBS+Closed+Vapor+Marine. بريدة: Open فقط.' },
        { question: 'هل SOx يتلف العزل بينبع؟', answer: 'H₂SO₄ يهاجم أغشية. UV+Chemical Resistant.' },
        { question: 'ليش مسامير 316 بينبع؟', answer: 'NaCl = 304 تصدأ. 316 Marine-Grade مقاوم.' },
    ],
    expertTips: [
        'SBS Marine-Grade — NaCl ملح.',
        'Vapor Barrier — 70-85% تكثّف.',
        'Closed-Cell — لا Open-Cell.',
        '316 Fasteners — NaCl صدأ.',
        'UV+Chemical — SOx YASREF.',
    ],
    warnings: [
        'SBS عادي + NaCl = يتشقق ← تسرب — Marine-Grade.',
        'بدون Vapor + 70-85% = تكثّف ← عفن تحت — YMYL.',
        '304 Fasteners + NaCl = صدأ ← عزل يطير — 316.',
    ],
    trustAnchors: [
        { ...GOV.MOENERGY, role: 'كفاءة الطاقة — SBC 601' },
        { ...GOV.SBC, role: 'كود البناء السعودي' },
        { entity: AMANA.MADINAH.entity, url: AMANA.MADINAH.url, role: 'اشتراطات أمانة ينبع' },
    ],
    expertReviewer: EXPERTS.ALMOHAIMED,
    expertCitations: [
        { expert: EXPERTS.ALMOHAIMED.name, quote: 'سطح ينبع: SBS Marine+Closed+Vapor. NaCl+SOx ثلاثي.', source: 'نصائح هندسية — أسطح ساحلية' },
    ],
    saudiRegulations: [REGULATIONS.SBC_601, REGULATIONS.SBC_602],
    verificationBadges: [{ badge: '✔️ عزل مطابق SBC', authority: 'كود البناء', icon: 'shield-check' }],
    equipment: [
        { name: 'SBS Marine-Grade', use: 'NaCl — مقاوم ملح' },
        { name: 'Closed-Cell + Vapor', use: '70-85% — تكثّف' },
        { name: '316 Fasteners', use: 'NaCl — مقاوم صدأ' },
    ],
    hiddenObjections: [
        { fear: 'SBS عادي.', solution: 'NaCl يُتشقق. Marine.' },
        { fear: 'مثل بريدة.', solution: 'عكس! أغلى 60%. إلزامي.' },
    ],
    consumerEducation: [
        { myth: 'Open-Cell.', truth: '70-85% = Closed. Open كارثة.' },
        { myth: 'لا Vapor.', truth: '70-85% = Vapor إلزامي.' },
    ],
    relatedServices: [
        { slug: 'thermal-insulation', context: 'حراري', priority: 1 },
        { slug: 'foam-insulation', context: 'فوم', priority: 2 },
        { slug: 'water-insulation', context: 'مائي', priority: 3 },
        { slug: 'tank-insulation', context: 'خزان', priority: 4 },
        { slug: 'water-leak-detection', context: 'تسرب', priority: 5 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 6 },
        { slug: 'cleaning', context: 'تنظيف', priority: 7 },
    ],
};
