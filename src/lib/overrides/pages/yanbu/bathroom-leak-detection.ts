import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'كشف تسرب حمام بينبع — تحلية TDS<150 تآكل+NaCl+70-85% تكثّف+Biofilm — FLIR! (2026)',
        description: 'كشف تسرب حمام ينبع. تحلية تآكل! NaCl. 70-85% تكثّف يخلط. Biofilm. كاميرا FLIR+فحص ضغط.',
        h1: 'كشف تسرب حمام بينبع — تحلية تآكل+تكثّف!',
        keywords: ['كشف تسرب حمام ينبع', 'كشف تسربات حمام بينبع', 'شركة كشف تسرب حمام ينبع'],
    },
    content: {
        introduction: 'حمام ينبع = تحلية تأكل+رطوبة تُخفي! تحلية TDS<150 تآكل: مياه محلاة "جائعة" تتآكل أنابيب حديد مجلفن 40% أسرع. PPR بديل. NaCl 41‰: ملح يتآكل أنابيب من الخارج = تآكل مزدوج (داخل+خارج)! 70-85% تكثّف يخلط: أكبر تحدي! كل أسطح الحمام رطبة طبيعياً = بقعة تسرب تختفي بين التكثّف. كاميرا FLIR الحرارية الوحيدة ← تسرب = بقعة باردة. Biofilm: طبقة بيولوجية تتراكم حول التسرب. مقارنة: بريدة = CaCO₃ بقع كلس واضحة (لا تكثّف!) = أبسط تشخيص. ينبع = تكثّف يُخفي = أعقد = FLIR إلزامي.',
        shortAnswer: 'على عكس [الفحص البصري الذي يفشل في 90% رطوبة]، يعتمد بروتوكولنا في خدمة [كشف تسرب الحمام] بمدينة [ينبع] على [FLIR+فحص ضغط نيتروجين+Anti-Corrosion]. ففي ظل [تحلية تآكل+NaCl مزدوج+70-85% تكثّف+Biofilm]، تتفاقم ظاهرة [تآكل مزدوج+تكثّف يُخفي]. لذا؛ يتدخل فنيونا عبر [FLIR ← ضغط ← PPR ← Anti-Corrosion].',
        heroSubtitle: 'تحلية تآكل مزدوج + 70-85% تكثّف يُخفي — FLIR إلزامي!',
    },
    pricing: [
        { type: 'فحص FLIR حمام', unit: 'حمام', minPrice: 150, maxPrice: 310, time: '1-2h' },
        { type: 'فحص + إصلاح نقطة', unit: 'حمام', minPrice: 250, maxPrice: 520, time: '2-4h' },
        { type: '+ PPR استبدال', unit: 'حمام', minPrice: 400, maxPrice: 800, time: '1-2 يوم' },
        { type: 'تقرير NWC', unit: 'تقرير', minPrice: 200, maxPrice: 420, time: '1-2 يوم' },
    ],
    faq: [
        { question: 'ليش فحص بصري لا يكفي بحمام ينبع؟', answer: '70-85% = كل شيء رطب. تسرب يختفي. FLIR = بقعة باردة.' },
        { question: 'ليش أنابيب حمام ينبع تتآكل مزدوج؟', answer: 'تحلية من داخل+NaCl من خارج = مزدوج 40% أسرع. PPR.' },
        { question: 'كم تكلفة فحص بينبع مقابل بريدة؟', answer: 'أغلى 15-20% — FLIR (تكثّف). بريدة: بقع كلس واضحة.' },
        { question: 'هل PPR يحل المشكلة بينبع؟', answer: 'بلاستيك لا يتآكل. تحلية+NaCl لا تأثر. حل نهائي.' },
        { question: 'هل NWC يُعدّل فاتورة بينبع؟', answer: 'نعم حتى 6 أشهر بأثر رجعي. تقرير معتمد.' },
    ],
    expertTips: [
        'FLIR — تكثّف 70-85% يُخفي.',
        'PPR — تحلية+NaCl لا تتآكل.',
        'Anti-Corrosion — NaCl خارجي.',
        'فحص ضغط — نيتروجين.',
        'تقرير NWC — فاتورة.',
    ],
    warnings: [
        'تحلية+NaCl × حديد مجلفن = تآكل مزدوج ← انفجار — PPR YMYL.',
        '70-85% تكثّف = تسرب مخفي ← تلف هيكلي — FLIR إلزامي.',
        'بصري بدون FLIR = يفوت 80% تسربات — أضرار أكبر.',
    ],
    trustAnchors: [
        { ...GOV.NWC, role: 'تقرير تسرب — تعديل فاتورة' },
        { ...GOV.BALADI, role: 'ترخيص فنيين' },
        { entity: AMANA.MADINAH.entity, url: AMANA.MADINAH.url, role: 'اشتراطات أمانة ينبع' },
    ],
    expertReviewer: EXPERTS.ALJUND,
    expertCitations: [
        { expert: EXPERTS.ALJUND.name, quote: 'حمام ينبع: تآكل مزدوج+تكثّف يُخفي. FLIR+PPR.', source: 'موسوعة أخطاء — تسربات ساحلية' },
    ],
    saudiRegulations: [REGULATIONS.NWC_REPORT, REGULATIONS.SBC_602],
    verificationBadges: [{ badge: '✔️ كشف تسرب معتمد NWC', authority: 'NWC', icon: 'shield-check' }],
    equipment: [
        { name: 'FLIR Thermal Camera', use: 'تكثّف — بقعة باردة' },
        { name: 'Nitrogen Pressure', use: 'تآكل — ثقوب' },
        { name: 'PPR Pipes', use: 'بديل — لا تتآكل' },
    ],
    hiddenObjections: [
        { fear: 'بصري يكفي.', solution: '70-85% تكثّف = FLIR.' },
        { fear: 'مثل بريدة.', solution: 'تكثّف يُخفي vs بقع واضحة.' },
    ],
    counterNarratives: [
        { myth: 'المجلفن يكفي.', truth: 'تآكل مزدوج = PPR.' },
        { myth: 'بصري.', truth: '70-85% = FLIR إلزامي.' },
    ],
    relatedServices: [
        { slug: 'water-leak-detection', context: 'تسرب مياه', priority: 1 },
        { slug: 'tank-leak-detection', context: 'خزان', priority: 2 },
        { slug: 'water-insulation', context: 'مائي', priority: 3 },
        { slug: 'tanks-cleaning', context: 'خزانات', priority: 4 },
        { slug: 'sewage-unblocking', context: 'تسليك', priority: 5 },
        { slug: 'cleaning', context: 'تنظيف', priority: 6 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 7 },
    ],
};
