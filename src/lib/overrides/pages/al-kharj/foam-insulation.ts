import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'عزل فوم بالخرج — ΔT 48°م أعلى فارق+CaCO₃ رطوبة أرضية+SiO₂ — Open-Cell يكفي! (2026)',
        description: 'عزل فوم الخرج. ΔT 48°م أعلى فارق حراري! CaCO₃ 450ppm رطوبة أرضية. SiO₂. Open-Cell R-3.7 يكفي. لا مطر! SBC 601.',
        h1: 'عزل فوم بالخرج — ΔT 48°م — Open-Cell يكفي!',
        keywords: ['عزل فوم الخرج', 'عزل فوم بالخرج', 'شركة عزل فوم الخرج'],
    },
    content: {
        introduction: 'عزل الفوم بالخرج يحتاج تبريد لا تدفئة! ΔT 48°م = أعلى فارق حراري: صيف 50°م + شتاء 2°م = فارق 48°م! يحتاج R-value عالي. لكن: Open-Cell R-3.7/inch يكفي لأنه لا يوجد مطر يتلفه (مثل خميس). أرخص 40% من Closed-Cell. CaCO₃ رطوبة أرضية: آبار جوفية ترتفع = رطوبة أرضية تحت الأساسات. عزل أرضي Closed-Cell (فقط تحت = لا فوق). SiO₂ لا يأثر على الفوم — يُنظف بعد التطبيق فقط. 15-25% = لا تكثّف بيني! ميزة: لا يحتاج Vapor Barrier (خميس تحتاج). التبريد هو الأولوية: خميس = تدفئة. الخرج = تبريد. مقارنة: خميس = Closed-Cell+Vapor Barrier+مائي = أغلى 40%. الخرج = Open-Cell يكفي = أرخص!',
        shortAnswer: 'على عكس [Closed-Cell الغالي بدون حاجة]، يعتمد بروتوكولنا في خدمة [عزل الفوم] بمدينة [الخرج] على [Open-Cell R-3.7 فوق+Closed-Cell أرضي+بدون Vapor]. ففي ظل [ΔT 48°م+لا مطر+CaCO₃ رطوبة أرضية+15-25%]، تتفاقم ظاهرة [فقدان حراري تبريد+رطوبة أرضية]. لذا؛ يتدخل فنيونا عبر [Open-Cell فوق ← Closed-Cell تحت] = وفر 40%.',
        heroSubtitle: 'ΔT 48°م + لا مطر — Open-Cell يكفي! أرخص 40%!',
    },
    pricing: [
        { type: 'جدران Open-Cell (3 سم)', unit: 'م²', minPrice: 20, maxPrice: 45, time: '1-2 يوم (100 م²)' },
        { type: 'سقف Open-Cell (5 سم)', unit: 'م²', minPrice: 30, maxPrice: 65, time: '1-2 يوم' },
        { type: 'أرضي Closed-Cell', unit: 'م²', minPrice: 40, maxPrice: 85, time: '1-2 يوم' },
        { type: 'فحص+إصلاح', unit: 'خدمة', minPrice: 200, maxPrice: 420, time: '1 يوم' },
    ],
    faq: [
        { question: 'ليش Open-Cell يكفي بالخرج وخميس تحتاج Closed-Cell؟', answer: 'لا مطر بالخرج = Open-Cell لا يتبلل. خميس: أمطار = يمتص = كارثة.' },
        { question: 'كم يوفر عزل الفوم كهرباء بالخرج؟', answer: '35-50% تبريد صيفاً! ΔT 48°م = أعلى وفر. SBC 601 يشترط.' },
        { question: 'كم تكلفة عزل فوم بالخرج مقارنة بخميس؟', answer: 'أرخص 40% — Open-Cell R-3.7 مقابل Closed-Cell R-6.5 + لا Vapor Barrier.' },
        { question: 'هل الخرج تحتاج Vapor Barrier؟', answer: 'لا! 15-25% = لا تكثّف بيني. ميزة كبيرة. خميس: 60-85% = إلزامي.' },
        { question: 'هل الرطوبة الأرضية تأثر على الفوم بالخرج؟', answer: 'CaCO₃ آبار ترتفع تحت الأساسات. Closed-Cell أرضي فقط = يحمي. فوق: Open-Cell.' },
    ],
    expertTips: [
        'Open-Cell R-3.7 — يكفي بلا مطر.',
        'Closed-Cell أرضي فقط — CaCO₃ رطوبة.',
        'لا Vapor Barrier — 15-25% ميزة!',
        'تبريد الأولوية — ΔT 48°م صيفاً.',
        'أرخص 40% من خميس — Open-Cell!',
    ],
    warnings: [
        'Closed-Cell فوق = مبالغة بالخرج — لا مطر = Open-Cell أرخص ويكفي.',
        'بدون عزل أرضي + CaCO₃ = رطوبة ترتفع ← بلاط يتلف.',
        'بدون عزل + ΔT 48°م = فاتورة كهرباء مضاعفة.',
    ],
    trustAnchors: [
        { ...GOV.MOENERGY, role: 'كفاءة الطاقة — SBC 601' },
        { ...GOV.BALADI, role: 'ترخيص مقاولي العزل' },
        { entity: AMANA.RIYADH.entity, url: AMANA.RIYADH.url, role: 'اشتراطات أمانة الرياض' },
    ],
    expertReviewer: EXPERTS.ALJUND,
    expertCitations: [
        { expert: EXPERTS.ALJUND.name, quote: 'فوم الخرج: Open-Cell يكفي فوق. لا مطر. Closed-Cell تحت فقط. أرخص 40%.', source: 'موسوعة أخطاء — عزل صحراوي' },
    ],
    saudiRegulations: [REGULATIONS.SBC_601],
    verificationBadges: [{ badge: '✔️ عزل مرخص SBC', authority: 'بلدي + كفاءة طاقة', icon: 'shield-check' }],
    equipment: [
        { name: 'Open-Cell PU Foam', use: 'R-3.7/inch — جدران+سقف — أرخص' },
        { name: 'Closed-Cell PU Foam', use: 'أرضي فقط — CaCO₃ رطوبة' },
        { name: 'جهاز رش ضغط عالي', use: 'تطبيق متساوي' },
    ],
    commonConcerns: [
        { concern: 'Closed-Cell أفضل.', solution: 'لا مطر = أغلى بدون فائدة. Open-Cell يكفي.' },
        { concern: 'مثل خميس.', solution: 'عكس! تبريد مقابل تدفئة. أرخص 40%.' },
    ],
    consumerEducation: [
        { myth: 'Closed-Cell ضروري.', truth: 'لا مطر = Open-Cell 40% أرخص ويكفي.' },
        { myth: 'لا يحتاج عزل أرضي.', truth: 'CaCO₃ رطوبة أرضية = Closed-Cell تحت.' },
    ],
    relatedServices: [
        { slug: 'thermal-insulation', context: 'عزل حراري', priority: 1 },
        { slug: 'roof-insulation', context: 'عزل أسطح', priority: 2 },
        { slug: 'water-insulation', context: 'عزل مائي', priority: 3 },
        { slug: 'tank-insulation', context: 'عزل خزان', priority: 4 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 5 },
        { slug: 'water-leak-detection', context: 'تسرب', priority: 6 },
        { slug: 'cleaning', context: 'تنظيف', priority: 7 },
    ],
};
