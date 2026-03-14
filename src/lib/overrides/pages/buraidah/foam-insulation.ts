import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'عزل فوم ببريدة — ΔT 45°م+CaCO₃ 600ppm رطوبة أرضية+Nafud — Open-Cell+أرضي! (2026)',
        description: 'عزل فوم بريدة. ΔT 45°م فارق حراري! CaCO₃ 600ppm رطوبة أرضية. Nafud SiO₂. Open-Cell فوق+Closed-Cell أرضي.',
        h1: 'عزل فوم ببريدة — ΔT 45°م — Open-Cell يكفي!',
        keywords: ['عزل فوم بريدة', 'عزل فوم ببريدة', 'شركة عزل فوم بريدة'],
    },
    content: {
        introduction: 'فوم بريدة = حراري أولوية! ΔT 45°م: صيف 48°م + شتاء 3°م = فارق حراري كبير. Open-Cell R-3.7/inch يكفي لأنه لا مطر. أرخص 40% من Closed-Cell. CaCO₃ 600ppm رطوبة أرضية: أعلى كلس بالمملكة + آبار جوفية ترتفع = رطوبة كلسية تحت الأساسات. عزل أرضي Closed-Cell فقط تحت. Nafud SiO₂ لا يأثر على الفوم المغطى — يُنظف بعد التطبيق فقط. 10-20% = لا تكثّف بيني! ميزة: لا Vapor Barrier. مقارنة: خميس: Closed-Cell+Vapor+مائي = أغلى 40-50%. بريدة = Open-Cell+أرضي Closed فقط = أرخص! عنيزة = نفس البيئة تقريباً. SBC 601 إلزامي.',
        shortAnswer: 'على عكس [Closed-Cell الغالي بدون حاجة]، يعتمد بروتوكولنا في خدمة [عزل الفوم] بمدينة [بريدة] على [Open-Cell فوق+Closed-Cell أرضي+بدون Vapor]. ففي ظل [ΔT 45°م+لا مطر+CaCO₃ 600ppm أرضية+10-20%]، تتفاقم ظاهرة [فقدان حراري+رطوبة أرضية كلسية]. لذا؛ يتدخل فنيونا عبر [Open-Cell فوق ← Closed-Cell تحت] = وفر 40%.',
        heroSubtitle: 'ΔT 45°م + لا مطر — Open-Cell يكفي! أرخص 40%!',
    },
    pricing: [
        { type: 'جدران Open-Cell (3 سم)', unit: 'م²', minPrice: 20, maxPrice: 45, time: '1-2 يوم (100 م²)' },
        { type: 'سقف Open-Cell (5 سم)', unit: 'م²', minPrice: 30, maxPrice: 65, time: '1-2 يوم' },
        { type: 'أرضي Closed-Cell', unit: 'م²', minPrice: 40, maxPrice: 85, time: '1-2 يوم' },
        { type: 'فحص+إصلاح', unit: 'خدمة', minPrice: 200, maxPrice: 420, time: '1 يوم' },
    ],
    faq: [
        { question: 'ليش Open-Cell يكفي ببريدة وخميس تحتاج Closed-Cell؟', answer: 'لا مطر ببريدة = Open-Cell لا يتبلل. خميس: أمطار = كارثة.' },
        { question: 'كم يوفر عزل الفوم كهرباء ببريدة؟', answer: '35-45% تبريد! ΔT 45°م. SBC 601 يشترط. أعلى عائد.' },
        { question: 'كم تكلفة عزل فوم ببريدة مقارنة بخميس؟', answer: 'أرخص 40-50% — Open-Cell+لا Vapor. خميس: Closed+Vapor+مائي.' },
        { question: 'هل بريدة تحتاج Vapor Barrier؟', answer: 'لا! 10-20% = لا تكثّف بيني. ميزة كبيرة.' },
        { question: 'هل الرطوبة الأرضية تأثر ببريدة؟', answer: 'CaCO₃ 600ppm أعلى كلس. آبار ترتفع. Closed-Cell أرضي فقط.' },
    ],
    expertTips: [
        'Open-Cell R-3.7 — يكفي بلا مطر.',
        'Closed-Cell أرضي — CaCO₃ 600ppm رطوبة.',
        'لا Vapor Barrier — 10-20% ميزة!',
        'SBC 601 — إلزامي.',
        'أرخص 40% من خميس.',
    ],
    warnings: [
        'Closed-Cell فوق = مبالغة ببريدة — لا مطر = أغلى بدون فائدة.',
        'بدون عزل أرضي + CaCO₃ 600ppm = رطوبة ترتفع ← بلاط يتلف.',
        'بدون عزل + ΔT 45°م = فاتورة كهرباء مضاعفة — SBC 601.',
    ],
    trustAnchors: [
        { ...GOV.MOENERGY, role: 'كفاءة الطاقة — SBC 601' },
        { ...GOV.BALADI, role: 'ترخيص مقاولي العزل' },
        { entity: AMANA.QASSIM.entity, url: AMANA.QASSIM.url, role: 'اشتراطات أمانة القصيم' },
    ],
    expertReviewer: EXPERTS.ALJUND,
    expertCitations: [
        { expert: EXPERTS.ALJUND.name, quote: 'فوم بريدة: Open-Cell يكفي. لا مطر. 600ppm أرضي Closed. أرخص 40%.', source: 'موسوعة أخطاء — عزل القصيم' },
    ],
    saudiRegulations: [REGULATIONS.SBC_601],
    verificationBadges: [{ badge: '✔️ عزل مرخص SBC', authority: 'بلدي + كفاءة', icon: 'shield-check' }],
    equipment: [
        { name: 'Open-Cell PU Foam', use: 'R-3.7/inch — جدران+سقف' },
        { name: 'Closed-Cell PU Foam', use: 'أرضي — CaCO₃ 600ppm' },
        { name: 'جهاز رش ضغط عالي', use: 'تطبيق متساوي' },
    ],
    commonConcerns: [
        { concern: 'Closed أفضل.', solution: 'لا مطر = أغلى بدون فائدة. Open يكفي.' },
        { concern: 'مثل خميس.', solution: 'عكس! Open مقابل Closed. أرخص 40%.' },
    ],
    consumerEducation: [
        { myth: 'Closed ضروري.', truth: 'لا مطر = Open 40% أرخص.' },
        { myth: 'لا عزل أرضي.', truth: 'CaCO₃ 600ppm رطوبة أرضية = Closed تحت.' },
    ],
    relatedServices: [
        { slug: 'thermal-insulation', context: 'حراري', priority: 1 },
        { slug: 'roof-insulation', context: 'أسطح', priority: 2 },
        { slug: 'water-insulation', context: 'مائي', priority: 3 },
        { slug: 'tank-insulation', context: 'خزان', priority: 4 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 5 },
        { slug: 'water-leak-detection', context: 'تسرب', priority: 6 },
        { slug: 'cleaning', context: 'تنظيف', priority: 7 },
    ],
};
