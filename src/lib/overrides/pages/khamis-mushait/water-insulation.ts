import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'عزل مائي بخميس مشيط — أمطار غزيرة+ضباب+تكثّف = أشد حاجة بالمملكة! PU+Membrane (2026)',
        description: 'عزل مائي خميس مشيط. أمطار غزيرة+ضباب 200 يوم+تكثّف. أشد حاجة! PU Liquid Membrane+Crystalline.',
        h1: 'عزل مائي بخميس مشيط — أمطار غزيرة — أشد حاجة!',
        keywords: ['عزل مائي خميس مشيط', 'عزل مائي بخميس مشيط', 'شركة عزل مائي خميس مشيط'],
    },
    content: {
        introduction: 'خميس مشيط = أشد المدن حاجة للعزل المائي بالمملكة! لماذا؟ أمطار غزيرة: أمطار موسمية تتساقط مباشرة على الأسطح والجدران ← بدون عزل = تسرب مباشر. PU Liquid Membrane = أقوى عزل للأسطح الممطورة. ضباب 200 يوم: رطوبة تتسلل من كل فتحة ← تتكثف داخل الجدران ← بقع رطوبة + عفن. Crystalline يُعالج من الداخل. تكثّف شتوي: 0-5°م = تكثّف على الأسطح الباردة ← ماء يتجمع ← تسرب داخلي. Vapor Barrier. ميول تصريف: أمطار كثيرة تحتاج ميول أعلى من عنيزة. بدونها = تجمع مياه على السطح. مقارنة: عنيزة = لا أمطار + لا تكثّف + عزل مائي اختياري. خميس = عزل مائي إلزامي = أغلى 50% لكن ضروري.',
        shortAnswer: 'على عكس [عدم العزل المائي في المدن الجافة]، يعتمد بروتوكولنا في خدمة [العزل المائي] بمدينة [خميس مشيط] على [PU Membrane+Crystalline+Vapor Barrier+ميول]. ففي ظل [أمطار غزيرة+ضباب 200 يوم+تكثّف 0°م+60-85%]، تتفاقم ظاهرة [تسرب+رطوبة+عفن+تلف هيكلي]. لذا؛ يتدخل فنيونا عبر [خارجي ← داخلي ← Vapor ← ميول] لحماية شاملة.',
        heroSubtitle: 'أمطار + ضباب + تكثّف — عزل مائي إلزامي!',
    },
    pricing: [
        { type: 'سطح PU Membrane', unit: 'م²', minPrice: 30, maxPrice: 65, time: '1 يوم (100 م²)' },
        { type: 'جدران Crystalline', unit: 'م²', minPrice: 25, maxPrice: 55, time: '1-2 يوم' },
        { type: 'شامل (سطح+جدران+حمامات)', unit: 'م²', minPrice: 50, maxPrice: 110, time: '2-4 أيام' },
        { type: 'فحص+إصلاح تسرب', unit: 'خدمة', minPrice: 200, maxPrice: 420, time: '3-4 ساعات' },
    ],
    faq: [
        { question: 'ليش العزل المائي إلزامي بخميس وليس بعنيزة؟', answer: 'خميس: أمطار غزيرة+ضباب+تكثّف = ماء من كل مكان. عنيزة: لا أمطار = اختياري.' },
        { question: 'ما أفضل عزل مائي لخميس مشيط؟', answer: 'PU Liquid Membrane للأسطح (مرن) + Crystalline للجدران (يعالج من الداخل).' },
        { question: 'كم تكلفة عزل مائي بخميس مقارنة بعنيزة؟', answer: 'أغلى 50% — لأنه إلزامي وشامل (سطح+جدران+حمامات). عنيزة: سطح فقط أحياناً.' },
        { question: 'هل الضباب يحتاج عزل مائي؟', answer: 'نعم! ضباب يتسلل ← يتكثف داخلياً ← رطوبة ← عفن. Crystalline + Vapor Barrier.' },
        { question: 'متى أفحص العزل المائي بخميس مشيط؟', answer: 'بعد كل موسم أمطار + سنوياً. بقع رطوبة = فحص فوري. تقشّر = عزل منتهي.' },
    ],
    expertTips: [
        'PU Membrane للأسطح — مرن ومقاوم أمطار.',
        'Crystalline للجدران — يعالج من الداخل.',
        'Vapor Barrier — يمنع تكثّف بيني.',
        'ميول تصريف — أمطار تتجمع بدونها.',
        'فحص بعد أمطار — كشف مبكر.',
    ],
    warnings: [
        'بدون عزل مائي + أمطار = تسرب مباشر خلال أول موسم — تلف 10000+.',
        'ضباب + لا Vapor = تكثّف بيني = عفن خلف الجدران — لا يُرى.',
        'سطح بدون ميول + أمطار = تجمع مياه = ضغط يخرق أي عزل.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص مقاولي العزل' },
        { ...GOV.MOENERGY, role: 'معايير البناء SBC' },
        { entity: AMANA.ASIR.entity, url: AMANA.ASIR.url, role: 'اشتراطات أمانة عسير' },
    ],
    expertReviewer: EXPERTS.ALJUND,
    expertCitations: [
        { expert: EXPERTS.ALJUND.name, quote: 'عزل مائي خميس: إلزامي. أشد حاجة بالمملكة. PU+Crystalline. عنيزة: اختياري.', source: 'موسوعة أخطاء — عزل جبلي' },
    ],
    saudiRegulations: [REGULATIONS.SBC_601],
    verificationBadges: [{ badge: '✔️ عزل مائي مرخص', authority: 'بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'PU Liquid Membrane', use: 'عزل أسطح — مرن ومقاوم أمطار' },
        { name: 'Crystalline', use: 'عزل جدران من الداخل — يتفاعل مع الرطوبة' },
        { name: 'Vapor Barrier', use: 'يمنع تكثّف ضبابي بيني' },
    ],
    hiddenObjections: [
        { fear: 'اختياري مثل عنيزة.', solution: 'أمطار+ضباب = إلزامي. بدونه = تسرب.' },
        { fear: 'غالي.', solution: 'تسرب = تلف هيكلي 10000+. العزل أرخص 20×.' },
    ],
    consumerEducation: [
        { myth: 'العزل المائي ترف بالسعودية.', truth: 'خميس: أمطار+ضباب = إلزامي 100%.' },
        { myth: 'دهان مائي يكفي.', truth: 'PU Membrane + Crystalline. الدهان لا يكفي لأمطار غزيرة.' },
    ],
    relatedServices: [
        { slug: 'roof-insulation', context: 'عزل أسطح', priority: 1 },
        { slug: 'foam-insulation', context: 'عزل فوم', priority: 2 },
        { slug: 'thermal-insulation', context: 'عزل حراري', priority: 3 },
        { slug: 'water-leak-detection', context: 'تسرب مياه', priority: 4 },
        { slug: 'bathroom-leak-detection', context: 'تسرب حمام', priority: 5 },
        { slug: 'tank-insulation', context: 'عزل خزان', priority: 6 },
        { slug: 'cleaning', context: 'تنظيف', priority: 7 },
    ],
};
