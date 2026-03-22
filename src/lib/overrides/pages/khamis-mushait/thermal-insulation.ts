import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../gov-references';

export const override: PageOverride = {
    meta: {
        title: 'عزل حراري بخميس مشيط — برد 0°م+أمطار+ضباب = عزل مزدوج! Closed-Cell R-6.5 SBC 601 (2026)',
        description: 'عزل حراري خميس مشيط. برد 0°م شتاءً! أمطار+ضباب. عزل حراري+مائي مزدوج. Closed-Cell R-6.5. SBC 601.',
        h1: 'عزل حراري بخميس مشيط — برد ومطر — مزدوج!',
        keywords: ['عزل حراري خميس مشيط', 'عزل حراري بخميس مشيط', 'شركة عزل حراري خميس مشيط'],
    },
    content: {
        introduction: 'العزل الحراري بخميس مشيط يحتاج نهجاً مختلفاً! برد 0-5°م شتاءً: فقدان حراري كبير = فاتورة تدفئة عالية. يحتاج R-value عالي. R-6.5/inch = أعلى أداء. أمطار: العزل الحراري يتعرض لماء ← Open-Cell يمتص = كارثة حرارية (يفقد الـ R-value). Closed-Cell فقط = حراري+مائي. ضباب 200 يوم: تكثّف بيني (Interstitial Condensation) داخل الجدران ← يُتلف عزل Open-Cell من الداخل. Closed-Cell + Vapor Barrier يمنع. صيف معتدل: 28-34°م = لا يحتاج عزل تبريد قوي. الأولوية: تدفئة شتوية. مقارنة: عنيزة (47-50°م صيف) = تبريد هو الأولوية + Open-Cell يكفي (لا مطر). خميس = تدفئة الأولوية + Closed-Cell إلزامي = أغلى 40%.',
        shortAnswer: 'على عكس [عزل Open-Cell للتبريد فقط]، يعتمد بروتوكولنا في خدمة [العزل الحراري] بمدينة [خميس مشيط] على [Closed-Cell R-6.5+Vapor Barrier+عزل مائي مزدوج]. ففي ظل [برد 0°م+أمطار+ضباب تكثّف+صيف معتدل]، تتفاقم ظاهرة [فقدان حراري+تلف عزل بالماء+تكثّف بيني]. لذا؛ يتدخل فنيونا عبر [Closed-Cell ← Vapor ← مائي] لعزل مزدوج SBC 601.',
        heroSubtitle: 'برد 0°م + أمطار + ضباب — Closed-Cell مزدوج SBC 601!',
    },
    pricing: [
        { type: 'جدران (3 سم)', unit: 'م²', minPrice: 35, maxPrice: 75, time: '1-2 يوم (100 م²)' },
        { type: 'جدران+سقف (5 سم)', unit: 'م²', minPrice: 60, maxPrice: 125, time: '2-3 أيام' },
        { type: 'مزدوج (حراري+مائي)', unit: 'م²', minPrice: 75, maxPrice: 155, time: '3-4 أيام' },
        { type: 'فحص+إصلاح عزل', unit: 'خدمة', minPrice: 280, maxPrice: 580, time: '1 يوم' },
    ],
    faq: [
        { question: 'ليش Closed-Cell إلزامي بخميس وOpen-Cell يكفي بعنيزة؟', answer: 'أمطار+ضباب = Open-Cell يمتص ← يفقد R-value ← كارثة. عنيزة: لا مطر.' },
        { question: 'كم يوفر العزل الحراري بخميس كهرباء؟', answer: '30-45% تدفئة شتاءً. R-6.5/inch = أعلى أداء. SBC 601 يشترط.' },
        { question: 'هل خميس تحتاج عزل تبريد مثل عنيزة؟', answer: 'لا! صيف 28-34°م (معتدل). الأولوية = تدفئة شتوية 0-5°م.' },
        { question: 'كم تكلفة العزل الحراري بخميس مقارنة بعنيزة؟', answer: 'أغلى 40% — Closed-Cell مقابل Open-Cell + مزدوج. 35-155 مقابل 25-100.' },
        { question: 'ما هو التكثّف البيني؟', answer: 'رطوبة تتكثف داخل الجدار بين الداخلي والخارجي. Vapor Barrier يمنع. شائع بخميس.' },
    ],
    expertTips: [
        'Closed-Cell فقط — Open-Cell يمتص بخميس.',
        'R-6.5/inch — أعلى أداء حراري.',
        'Vapor Barrier — يمنع تكثّف بيني.',
        'مزدوج حراري+مائي — أمطار تُتلف.',
        'الأولوية تدفئة — صيف معتدل بخميس.',
    ],
    warnings: [
        'Open-Cell + أمطار = يمتص ← يفقد R-value ← لا عزل = فاتورة مضاعفة.',
        'بدون Vapor Barrier + 60-85% = تكثّف بيني = عفن خلف الجدران.',
        'عزل حراري فقط بدون مائي = العزل يتلف بأول مطر.',
    ],
    trustAnchors: [
        { ...GOV.MOENERGY, role: 'كفاءة الطاقة — SBC 601' },
        { ...GOV.BALADI, role: 'ترخيص مقاولي العزل' },
        { entity: AMANA.ASIR.entity, url: AMANA.ASIR.url, role: 'اشتراطات أمانة عسير' },
    ],
    expertReviewer: EXPERTS.ALMOHAIMED,
    expertCitations: [
        { expert: EXPERTS.ALJUND.name, quote: 'عزل خميس: Closed-Cell مزدوج. أمطار+ضباب. Open-Cell كارثة. تدفئة الأولوية.', source: 'موسوعة أخطاء — عزل جبلي' },
    ],
    saudiRegulations: [REGULATIONS.SBC_601],
    verificationBadges: [{ badge: '✔️ عزل مرخص SBC', authority: 'بلدي + كفاءة طاقة', icon: 'shield-check' }],
    equipment: [
        { name: 'Closed-Cell PU Foam', use: 'R-6.5/inch — لا يمتص ماء' },
        { name: 'Vapor Barrier', use: 'يمنع تكثّف بيني — 60-85%' },
        { name: 'PU مائي', use: 'عزل مائي مزدوج — أمطار' },
    ],
    commonConcerns: [
        { concern: 'Open-Cell أرخص.', solution: 'يمتص ← يفقد R-value. Closed-Cell أرخص طويلاً.' },
        { concern: 'مثل عنيزة.', solution: 'عكس! تدفئة مقابل تبريد. أمطار مقابل لا مطر.' },
    ],
    consumerEducation: [
        { myth: 'خميس حارة مثل عنيزة.', truth: '0-5°م شتاءً! تدفئة الأولوية.' },
        { myth: 'أي عزل يكفي.', truth: 'Closed-Cell فقط بخميس. أمطار+ضباب.' },
    ],
    relatedServices: [
        { slug: 'foam-insulation', context: 'عزل فوم', priority: 1 },
        { slug: 'roof-insulation', context: 'عزل أسطح', priority: 2 },
        { slug: 'water-insulation', context: 'عزل مائي', priority: 3 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 4 },
        { slug: 'water-leak-detection', context: 'تسرب', priority: 5 },
        { slug: 'tank-insulation', context: 'عزل خزان', priority: 6 },
        { slug: 'cleaning', context: 'تنظيف', priority: 7 },
    ],
};
