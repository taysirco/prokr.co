import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'عزل حراري ببريدة — ΔT 45°م أعلى فارق+CaCO₃ رطوبة أرضية+Nafud — Open-Cell! (2026)',
        description: 'عزل حراري بريدة. ΔT 45°م أعلى فارق! CaCO₃ 600ppm رطوبة أرضية. Nafud SiO₂. Open-Cell يكفي. SBC 601.',
        h1: 'عزل حراري ببريدة — ΔT 45°م — Open-Cell يكفي!',
        keywords: ['عزل حراري بريدة', 'عزل حراري ببريدة', 'شركة عزل حراري بريدة'],
    },
    content: {
        introduction: 'عزل حراري بريدة = أعلى فارق حراري بلا مطر! ΔT 45°م: صيف 48°م + شتاء 3°م = فارق 45°م! SBC 601 يشترط عزل. أعلى عائد RTI بالمملكة — توفير 35-45% كهرباء. Open-Cell R-3.7/inch يكفي — لا مطر = لا خطر. أرخص 40% من Closed-Cell. CaCO₃ 600ppm رطوبة أرضية: آبار جوفية كلسية ← رطوبة ترتفع عبر الأساسات. عزل أرضي Closed-Cell تحت فقط. Nafud SiO₂: لا يأثر على العزل المغطى. تنظيف قبل التطبيق. 10-20% = لا تكثّف بيني! لا Vapor Barrier! ميزة توفّر 15-20%. مقارنة: خميس = Closed-Cell+Vapor+مائي = أغلى 40-50%. بريدة = Open-Cell+أرضي Closed = أرخص وأبسط.',
        shortAnswer: 'على عكس [Closed-Cell الغالي بدون حاجة]، يعتمد بروتوكولنا في خدمة [العزل الحراري] بمدينة [بريدة] على [Open-Cell فوق+Closed-Cell أرضي+بدون Vapor]. ففي ظل [ΔT 45°م+لا مطر+CaCO₃ أرضية+10-20%]، تتفاقم ظاهرة [فقدان حراري+رطوبة أرضية]. لذا؛ يتدخل فنيونا عبر [Open-Cell جدران ← Closed-Cell تحت] = وفر 40%!',
        heroSubtitle: 'ΔT 45°م + لا مطر — Open-Cell يكفي! وفر 40%! SBC 601!',
    },
    pricing: [
        { type: 'جدران Open-Cell (3 سم)', unit: 'م²', minPrice: 20, maxPrice: 45, time: '1-3 أيام' },
        { type: 'سقف Open-Cell (5 سم)', unit: 'م²', minPrice: 30, maxPrice: 65, time: '1-2 يوم' },
        { type: 'أرضي Closed-Cell', unit: 'م²', minPrice: 40, maxPrice: 85, time: '1-2 يوم' },
        { type: 'فحص حراري + تقرير', unit: 'خدمة', minPrice: 200, maxPrice: 420, time: '1 يوم' },
    ],
    faq: [
        { question: 'ليش Open-Cell يكفي ببريدة وخميس Closed-Cell؟', answer: 'لا مطر = Open-Cell لا يتبلل. خميس: أمطار = كارثة. SBC 601.' },
        { question: 'كم يوفر عزل حراري ببريدة كهرباء؟', answer: '35-45% تبريد! ΔT 45°م أعلى فارق = أعلى عائد RTI بالمملكة.' },
        { question: 'كم تكلفة عزل حراري ببريدة مقارنة بخميس؟', answer: 'أرخص 40-50% — Open-Cell+لا Vapor+لا مائي. خميس: Closed+Vapor+مائي.' },
        { question: 'هل Vapor Barrier لازم ببريدة؟', answer: 'لا! 10-20% = لا تكثّف بيني. وفر 15-20% إضافي.' },
        { question: 'هل الرطوبة الأرضية تأثر ببريدة؟', answer: 'CaCO₃ 600ppm رطوبة أرضية. Closed-Cell تحت فقط. فوق: Open-Cell.' },
    ],
    expertTips: [
        'Open-Cell R-3.7 — يكفي بلا مطر.',
        'Closed-Cell أرضي — 600ppm رطوبة.',
        'لا Vapor Barrier — 10-20%.',
        'SBC 601 — إلزامي. غرامة.',
        'أرخص 40% من خميس.',
    ],
    warnings: [
        'بدون عزل + ΔT 45°م = فاتورة مضاعفة — SBC 601 غرامة.',
        'Closed-Cell فوق = مبالغة — لا مطر = أغلى بدون فائدة.',
        'بدون أرضي + CaCO₃ 600ppm = رطوبة ترتفع ← بلاط يتلف.',
    ],
    trustAnchors: [
        { ...GOV.MOENERGY, role: 'كفاءة الطاقة — SBC 601' },
        { ...GOV.SBC, role: 'كود البناء السعودي' },
        { entity: AMANA.QASSIM.entity, url: AMANA.QASSIM.url, role: 'اشتراطات أمانة القصيم' },
    ],
    expertReviewer: EXPERTS.ALMOHAIMED,
    expertCitations: [
        { expert: EXPERTS.ALMOHAIMED.name, quote: 'حراري بريدة: ΔT 45°م أعلى. Open-Cell يكفي. لا مطر. أرخص 40%.', source: 'نصائح هندسية — حراري القصيم' },
        { expert: EXPERTS.ALJUND.name, quote: 'CaCO₃ 600ppm أرضية: Closed-Cell تحت فقط. لا Vapor.', source: 'موسوعة أخطاء — عزل' },
    ],
    saudiRegulations: [REGULATIONS.SBC_601],
    verificationBadges: [{ badge: '✔️ عزل مطابق SBC 601', authority: 'كود البناء + كفاءة', icon: 'shield-check' }],
    equipment: [
        { name: 'Open-Cell PU Foam', use: 'R-3.7/inch — جدران+سقف' },
        { name: 'Closed-Cell PU Foam', use: 'أرضي — CaCO₃ 600ppm' },
        { name: 'كاميرا حرارية', use: 'فحص — تسرب حراري' },
    ],
    hiddenObjections: [
        { fear: 'Closed أفضل.', solution: 'لا مطر = Open 40% أرخص.' },
        { fear: 'مثل خميس.', solution: 'عكس! Open مقابل Closed. أرخص 50%.' },
    ],
    consumerEducation: [
        { myth: 'Closed ضروري.', truth: 'لا مطر = Open R-3.7 يكفي.' },
        { myth: 'Vapor لازم.', truth: '10-20% = لا تكثّف. وفر 15%.' },
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
