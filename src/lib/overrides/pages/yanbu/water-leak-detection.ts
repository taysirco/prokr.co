import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'كشف تسربات مياه بينبع — تحلية تآكل+NaCl مزدوج+70-85% تكثّف — FLIR+ضغط! (2026)',
        description: 'كشف تسربات مياه ينبع. تحلية تآكل مزدوج! NaCl. 70-85% تكثّف يُخفي. FLIR+فحص ضغط+PPR+NWC.',
        h1: 'كشف تسربات مياه بينبع — تآكل مزدوج+تكثّف!',
        keywords: ['كشف تسربات مياه ينبع', 'كشف تسربات بينبع', 'شركة كشف تسربات مياه ينبع'],
    },
    content: {
        introduction: 'تسربات ينبع = تآكل مزدوج+تكثّف يُخفي! تحلية TDS<150: مياه محلاة "جائعة" تتآكل أنابيب حديد مجلفن من داخل 40% أسرع. NaCl 41‰: ملح يتآكل الأنابيب من خارج = تآكل مزدوج! PPR بديل نهائي. 70-85% تكثّف: أكبر تحدي تشخيصي! كل الأسطح رطبة طبيعياً ← بقعة تسرب تختفي. FLIR الحرارية = بقعة باردة = الحل الوحيد. عكس بريدة: بقع CaCO₃ بيضاء = دليل واضح! ينبع: لا بقع = FLIR إلزامي. تقرير NWC يُعدّل فاتورة حتى 6 أشهر.',
        shortAnswer: 'على عكس [الفحص البصري الذي يفشل في 70-85%]، يعتمد بروتوكولنا في خدمة [كشف التسربات] بمدينة [ينبع] على [FLIR+فحص ضغط+Acoustic+PPR]. ففي ظل [تآكل مزدوج+70-85% تكثّف+NaCl]، تتفاقم ظاهرة [تآكل+إخفاء+صدأ]. لذا؛ يتدخل فنيونا عبر [FLIR ← Acoustic ← ضغط ← PPR].',
        heroSubtitle: 'تآكل مزدوج + 70-85% تكثّف يُخفي — FLIR إلزامي!',
    },
    pricing: [
        { type: 'فحص FLIR+Acoustic', unit: 'خدمة', minPrice: 200, maxPrice: 420, time: '1-3h' },
        { type: 'فحص + إصلاح نقطة', unit: 'خدمة', minPrice: 300, maxPrice: 620, time: '2-5h' },
        { type: '+ PPR استبدال', unit: 'شقة', minPrice: 800, maxPrice: 1600, time: '2-3 أيام' },
        { type: 'تقرير NWC معتمد', unit: 'تقرير', minPrice: 200, maxPrice: 420, time: '1-2 يوم' },
    ],
    faq: [
        { question: 'ليش فحص بصري لا يكفي بينبع؟', answer: '70-85% = كل شيء رطب. تسرب يختفي. FLIR = بقعة باردة.' },
        { question: 'ما تآكل مزدوج بينبع؟', answer: 'تحلية من داخل+NaCl من خارج = 40% أسرع. PPR حل نهائي.' },
        { question: 'كم تكلفة كشف بينبع مقابل بريدة؟', answer: 'أغلى 20-25% — FLIR إلزامي. بريدة: بقع CaCO₃ واضحة.' },
        { question: 'هل PPR يحل تسربات ينبع نهائياً؟', answer: 'بلاستيك لا يتآكل. تحلية+NaCl لا تأثر.' },
        { question: 'هل NWC يُعدّل فاتورة بينبع؟', answer: 'نعم حتى 6 أشهر بأثر رجعي. تقرير معتمد.' },
    ],
    expertTips: [
        'FLIR — تكثّف 70-85% يُخفي.',
        'PPR — تآكل مزدوج حل نهائي.',
        'Acoustic — تسرب مخفي تحت أرض.',
        'ضغط نيتروجين — ثقوب تآكل.',
        'تقرير NWC — تعديل فاتورة.',
    ],
    warnings: [
        'تآكل مزدوج × سنة = انفجار أنبوب — PPR YMYL.',
        '70-85% تكثّف = تسرب مخفي ← 40% فاتورة مياه ضائعة.',
        'بصري بدون FLIR = يفوت 80% تسربات ينبع.',
    ],
    trustAnchors: [
        { ...GOV.NWC, role: 'تقرير تسرب — تعديل فاتورة 6 أشهر' },
        { ...GOV.BALADI, role: 'ترخيص فنيين' },
        { entity: AMANA.MADINAH.entity, url: AMANA.MADINAH.url, role: 'اشتراطات أمانة ينبع' },
    ],
    expertReviewer: EXPERTS.ALJUND,
    expertCitations: [
        { expert: EXPERTS.ALJUND.name, quote: 'تسربات ينبع: تآكل مزدوج+تكثّف 70-85%. FLIR+PPR.', source: 'موسوعة أخطاء — تسربات ساحلية' },
    ],
    saudiRegulations: [REGULATIONS.NWC_REPORT, REGULATIONS.SBC_602],
    verificationBadges: [{ badge: '✔️ كشف تسرب معتمد NWC', authority: 'NWC', icon: 'shield-check' }],
    equipment: [
        { name: 'FLIR Thermal Camera', use: 'تكثّف — بقعة باردة' },
        { name: 'Acoustic Leak Detector', use: 'تحت أرض — صوت' },
        { name: 'PPR Pipes', use: 'بديل — لا تتآكل' },
    ],
    commonConcerns: [
        { concern: 'بصري يكفي.', solution: '70-85% = FLIR إلزامي.' },
        { concern: 'حديد مجلفن.', solution: 'تآكل مزدوج. PPR.' },
    ],
    consumerEducation: [
        { myth: 'بصري.', truth: '70-85% تكثّف = FLIR.' },
        { myth: 'المجلفن يكفي.', truth: 'تآكل مزدوج = PPR.' },
    ],
    relatedServices: [
        { slug: 'bathroom-leak-detection', context: 'حمام', priority: 1 },
        { slug: 'tank-leak-detection', context: 'خزان', priority: 2 },
        { slug: 'water-insulation', context: 'مائي', priority: 3 },
        { slug: 'tanks-cleaning', context: 'خزانات', priority: 4 },
        { slug: 'sewage-unblocking', context: 'تسليك', priority: 5 },
        { slug: 'cleaning', context: 'تنظيف', priority: 6 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 7 },
    ],
};
