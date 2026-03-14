import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'كشف تسرب خزان بينبع — تحلية تآكل+NaCl مزدوج+70-85% تكثّف — FLIR Marine! (2026)',
        description: 'كشف تسرب خزان ينبع. تحلية تآكل! NaCl مزدوج. 70-85% تكثّف يُخفي. FLIR+فحص ضغط+Epoxy Marine.',
        h1: 'كشف تسرب خزان بينبع — تآكل مزدوج+تكثّف!',
        keywords: ['كشف تسرب خزان ينبع', 'كشف تسربات خزان بينبع', 'شركة كشف تسرب خزان ينبع'],
    },
    content: {
        introduction: 'خزان ينبع = تآكل مزدوج+تكثّف يُخفي! تحلية TDS<150: "جائعة" تتآكل من داخل. NaCl 41‰: ملح يتآكل من خارج = تآكل مزدوج! 70-85% تكثّف يُخفي: كل السطوح حول الخزان رطبة ← تسرب يختفي بين التكثّف. FLIR الحرارية = بقعة باردة. عكس بريدة: بريدة = بقع CaCO₃ كلس بيضاء = دليل واضح لا يحتاج FLIR. ينبع = تكثّف يُخفي = FLIR إلزامي. Epoxy Marine-Grade للإصلاح.',
        shortAnswer: 'على عكس [الفحص البصري الذي يفشل في تكثّف 70-85%]، يعتمد بروتوكولنا في خدمة [كشف تسرب الخزان] بمدينة [ينبع] على [FLIR+فحص ضغط+Epoxy Marine]. ففي ظل [تآكل مزدوج+70-85% تكثّف+NaCl]، تتفاقم ظاهرة [تآكل+إخفاء+صدأ]. لذا؛ يتدخل فنيونا عبر [FLIR ← ضغط ← Epoxy Marine ← Anti-Corrosion].',
        heroSubtitle: 'تآكل مزدوج + 70-85% تكثّف يُخفي — FLIR+Epoxy Marine!',
    },
    pricing: [
        { type: 'فحص FLIR+ضغط', unit: 'خزان', minPrice: 200, maxPrice: 420, time: '1-2h' },
        { type: 'فحص + Epoxy إصلاح', unit: 'خزان', minPrice: 350, maxPrice: 720, time: '2-4h' },
        { type: 'فحص + إعادة عزل Marine', unit: 'خزان', minPrice: 600, maxPrice: 1200, time: '1-2 يوم' },
        { type: 'فحص سنوي', unit: 'سنة', minPrice: 180, maxPrice: 370, time: '1-2h' },
    ],
    faq: [
        { question: 'كيف أكتشف تسرب خزان بينبع؟', answer: '70-85% تكثّف = بصري يفشل. FLIR بقعة باردة.' },
        { question: 'ليش تآكل مزدوج بخزان ينبع؟', answer: 'تحلية من داخل+NaCl من خارج = مزدوج. Epoxy Marine+Anti-Corrosion.' },
        { question: 'كم تكلفة فحص بينبع مقابل بريدة؟', answer: 'أغلى 20-25% — FLIR (تكثّف). بريدة: بقع كلس واضحة.' },
        { question: 'هل Epoxy عادي يكفي بينبع؟', answer: 'تحلية = Marine-Grade. عادي يتآكل أسرع.' },
        { question: 'كم مرة فحص خزان بينبع؟', answer: 'سنوياً. تآكل مزدوج = أسرع من بريدة.' },
    ],
    expertTips: [
        'FLIR — تكثّف 70-85% يُخفي.',
        'Epoxy Marine — تحلية تآكل.',
        'Anti-Corrosion خارجي — NaCl.',
        'فحص سنوي — مزدوج أسرع.',
        'ضغط نيتروجين — ثقوب تآكل.',
    ],
    warnings: [
        'تآكل مزدوج × سنة = تسرب مياه شرب — YMYL.',
        '70-85% تكثّف = تسرب مخفي ← تلف هيكل — FLIR.',
        'Epoxy عادي + تحلية = يتآكل — Marine-Grade.',
    ],
    trustAnchors: [
        { ...GOV.NWC, role: 'تقرير تسرب — تعديل فاتورة' },
        { ...GOV.BALADI, role: 'ترخيص فنيي العزل' },
        { entity: AMANA.MADINAH.entity, url: AMANA.MADINAH.url, role: 'اشتراطات أمانة ينبع' },
    ],
    expertReviewer: EXPERTS.ALMOHAIMED,
    expertCitations: [
        { expert: EXPERTS.ALMOHAIMED.name, quote: 'خزان ينبع: تآكل مزدوج+تكثّف. FLIR+Epoxy Marine.', source: 'نصائح هندسية — خزانات ساحلية' },
    ],
    saudiRegulations: [REGULATIONS.NWC_REPORT],
    verificationBadges: [{ badge: '✔️ كشف تسرب خزان مرخص', authority: 'NWC + بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'FLIR Marine-Grade', use: 'تكثّف — بقعة باردة' },
        { name: 'Nitrogen Pressure', use: 'ثقوب تآكل — كشف' },
        { name: 'Epoxy Marine', use: 'تحلية — إصلاح' },
    ],
    hiddenObjections: [
        { fear: 'بصري يكفي.', solution: '70-85% تكثّف = FLIR.' },
        { fear: 'مثل بريدة.', solution: 'تكثّف يُخفي vs بقع واضحة.' },
    ],
    consumerEducation: [
        { myth: 'فحص 5 سنوات.', truth: 'مزدوج = سنوي.' },
        { myth: 'Epoxy عادي.', truth: 'تحلية = Marine-Grade.' },
    ],
    relatedServices: [
        { slug: 'tank-insulation', context: 'عزل خزان', priority: 1 },
        { slug: 'tanks-cleaning', context: 'تنظيف خزان', priority: 2 },
        { slug: 'water-leak-detection', context: 'تسرب مياه', priority: 3 },
        { slug: 'water-insulation', context: 'مائي', priority: 4 },
        { slug: 'bathroom-leak-detection', context: 'حمام', priority: 5 },
        { slug: 'cleaning', context: 'تنظيف', priority: 6 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 7 },
    ],
};
