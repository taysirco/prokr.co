import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'عزل أسطح بخميس مشيط — أمطار+ضباب+برد = عزل مائي+حراري مزدوج! SBC 601 (2026)',
        description: 'عزل أسطح خميس مشيط. أمطار غزيرة+ضباب+برد 0°م. عزل مائي+حراري. PU مائي+فوم Closed-Cell. SBC 601.',
        h1: 'عزل أسطح بخميس مشيط — أمطار+برد — مزدوج!',
        keywords: ['عزل أسطح خميس مشيط', 'عزل سطح بخميس مشيط', 'شركة عزل أسطح خميس مشيط'],
    },
    content: {
        introduction: 'سطح خميس مشيط يحتاج عزلاً مزدوجاً (مائي+حراري) — ليس أحادي! أمطار غزيرة: أمطار موسمية تتجمع على الأسطح ← تسرب لو العزل المائي ضعيف. PU مائي Polyurethane = أفضل عزل للأسطح الممطورة. ضباب 200 يوم: رطوبة تتسلل لطبقات العزل ← عفن يأكل العزل من الداخل. Closed-Cell فقط (لا يمتص الماء). برد 0-5°م شتاءً: فقدان حراري كبير من السقف. يحتاج R-value عالي. Closed-Cell PU R-6.5/inch. ميول السطح: خميس تحتاج ميول تصريف أعلى من المدن الصحراوية — أمطار أكثر. مقارنة: عنيزة = عزل حراري فقط + لا مائي (لا مطر) + Open-Cell يكفي = أرخص 40%. خميس = مزدوج + Closed-Cell = أغلى لكن ضروري.',
        shortAnswer: 'على عكس [العزل الحراري فقط بدون مائي]، يعتمد بروتوكولنا في خدمة [عزل الأسطح] بمدينة [خميس مشيط] على [PU مائي+Closed-Cell حراري+ميول تصريف]. ففي ظل [أمطار+ضباب+برد 0°م+تكثّف]، تتفاقم ظاهرة [تسرب+فقدان حراري+عفن عزل]. لذا؛ يتدخل فنيونا عبر [مائي ← حراري ← ميول ← فحص].',
        heroSubtitle: 'أمطار + برد + ضباب — عزل مزدوج SBC 601!',
    },
    pricing: [
        { type: 'عزل مائي PU', unit: 'م²', minPrice: 30, maxPrice: 65, time: '1 يوم (100 م²)' },
        { type: 'عزل مائي+حراري', unit: 'م²', minPrice: 60, maxPrice: 130, time: '2-3 أيام' },
        { type: 'إصلاح عزل قديم', unit: 'م²', minPrice: 25, maxPrice: 55, time: '1 يوم' },
        { type: 'فحص تسريب سقف', unit: 'خدمة', minPrice: 200, maxPrice: 420, time: '2-3 ساعات' },
    ],
    faq: [
        { question: 'ليش عزل خميس أغلى من عنيزة؟', answer: 'عنيزة: حراري فقط+Open-Cell = أرخص 40%. خميس: مائي+حراري+Closed-Cell = مزدوج.' },
        { question: 'هل Open-Cell يكفي لسطح خميس مشيط؟', answer: 'لا! Open-Cell يمتص ماء الأمطار = كارثة. Closed-Cell فقط = مقاوم للماء.' },
        { question: 'كم يوفر العزل المزدوج كهرباء بخميس؟', answer: '30-45% تدفئة شتاءً + حماية مائية = وفر مزدوج. SBC 601 يشترط.' },
        { question: 'كيف أعرف إن عزل السطح يحتاج تجديد بخميس؟', answer: 'فحص بعد كل موسم أمطار. بقع رطوبة في السقف = تسرب. تقشّر = عزل منتهي.' },
        { question: 'هل الميول مهمة بسطح خميس مشيط؟', answer: 'إلزامي! بدون ميول = تجمع مياه = ضغط على العزل. أعلى من عنيزة بسبب كمية الأمطار.' },
    ],
    expertTips: [
        'PU مائي — أفضل لأسطح ممطورة.',
        'Closed-Cell حراري — لا يمتص ماء. R-6.5/inch.',
        'ميول تصريف — أمطار غزيرة.',
        'فحص بعد أمطار — تسرب مبكر.',
        'لا Open-Cell — يمتص ماء خميس المطيرة.',
    ],
    warnings: [
        'Open-Cell + أمطار = العزل يمتص ماء ← يتعفّن ← تسريب أسوأ.',
        'بدون ميول + أمطار = تجمع مياه على السقف = ضغط يخرق العزل.',
        'عزل حراري بدون مائي = العزل يتلف بأول مطر.',
    ],
    trustAnchors: [
        { ...GOV.MOENERGY, role: 'كفاءة الطاقة — SBC 601' },
        { ...GOV.BALADI, role: 'ترخيص مقاولي العزل' },
        { entity: AMANA.ASIR.entity, url: AMANA.ASIR.url, role: 'اشتراطات أمانة عسير' },
    ],
    expertReviewer: EXPERTS.ALMOHAIMED,
    expertCitations: [
        { expert: EXPERTS.ALJUND.name, quote: 'سطح خميس: عزل مزدوج. أمطار+برد. Closed-Cell+PU مائي. Open-Cell كارثة.', source: 'موسوعة أخطاء — عزل جبلي' },
    ],
    saudiRegulations: [REGULATIONS.SBC_601],
    verificationBadges: [{ badge: '✔️ عزل مرخص SBC', authority: 'بلدي + كفاءة طاقة', icon: 'shield-check' }],
    equipment: [
        { name: 'PU مائي Polyurethane', use: 'عزل مائي — أفضل لأسطح ممطورة' },
        { name: 'Closed-Cell PU Foam', use: 'R-6.5/inch — عزل حراري لا يمتص ماء' },
        { name: 'جهاز رش ضغط عالي', use: 'تطبيق متساوي — سماكة دقيقة' },
    ],
    commonConcerns: [
        { concern: 'حراري يكفي مثل عنيزة.', solution: 'أمطار خميس = مائي إلزامي. عنيزة: لا مطر.' },
        { concern: 'غالي.', solution: 'تسرب مائي = تلف هيكلي 10000+. العزل أرخص.' },
    ],
    consumerEducation: [
        { myth: 'سطح خميس مثل عنيزة.', truth: 'أمطار+ضباب = مائي إلزامي. عنيزة: حراري فقط.' },
        { myth: 'Open-Cell يكفي أرخص.', truth: 'يمتص ماء = كارثة بخميس الممطورة.' },
    ],
    relatedServices: [
        { slug: 'water-insulation', context: 'عزل مائي', priority: 1 },
        { slug: 'thermal-insulation', context: 'عزل حراري', priority: 2 },
        { slug: 'foam-insulation', context: 'عزل فوم', priority: 3 },
        { slug: 'water-leak-detection', context: 'تسرب مياه', priority: 4 },
        { slug: 'tank-insulation', context: 'عزل خزانات', priority: 5 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 6 },
        { slug: 'cleaning', context: 'تنظيف', priority: 7 },
    ],
};
