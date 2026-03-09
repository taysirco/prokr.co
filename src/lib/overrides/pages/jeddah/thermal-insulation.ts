import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'عزل حراري بجدة — Heat Index 55°م + Latent Load رطوبة + تكثّف داخلي خطر (2026)',
        description: 'عزل حراري جدة. Heat Index 55°م. Latent Load 40%. تكثّف إذا عُزل خطأ. Closed-Cell + Vapor Barrier. من 55 ريال/م².',
        h1: 'عزل حراري بجدة — العزل الخاطئ يُنبت عفناً بدل أن يمنعه',
        keywords: ['عزل حراري بجدة', 'عزل حراري', 'تكثّف', 'Vapor Barrier', 'Heat Index'],
    },
    content: {
        introduction: 'العزل الحراري في جدة مسألة حياة أو عفن. في الرياض: اعزل وأنت مرتاح — الجفاف يحميك. في جدة: العزل الخاطئ أسوأ من عدم العزل. لماذا؟ نقطة الندى (Dew Point): حين يتقاطع الهواء الرطب (80%) مع سطح بارد (الجدار المكيّف)، يتكثّف الماء. بدون عزل: تكثّف خفيف على السطح. بعزل خاطئ (بدون Vapor Barrier): الرطوبة تتسلل داخل العزل ← تتكثّف بين العزل والجدار ← Stachybotrys ينبت في مكان لا تراه. Heat Index: الحرارة الفعلية + الرطوبة = 55-60°م إحساس حراري. المكيف يعمل أكثر لإزالة الرطوبة (Latent Load ≈ 40% من حمل التبريد). العزل الحراري يُقلل Sensible Load فقط. لإزالة Latent Load: تحتاج تهوية أو مجفف. الحل المتكامل: Closed-Cell SPF (لا يمتص رطوبة + يعمل كـ Vapor Barrier) + عزل خارجي ETICS (يمنع Thermal Bridge) + تهوية لإزالة الرطوبة الزائدة.',
        shortAnswer: 'على عكس [العزل الداخلي بدون Vapor Barrier الذي يُنبت عفناً مخفياً] ويُحوّل الحل مشكلة، يعتمد بروتوكولنا في [العزل الحراري] بـ[جدة] على [Closed-Cell SPF + ETICS خارجي + Vapor Barrier + تهوية]. ففي ظل [Heat Index 55°م + Latent Load 40% + Dew Point]، تتفاقم ظاهرة [تكثّف خفي + عفن مخبأ + حمل تبريد عالي]. لذا؛ يتدخل خبراؤنا عبر [يعزل Closed-Cell + يغلف ETICS + يحيِّد Vapor Barrier التكثّف + تُزيل التهوية الرطوبة].',
        heroSubtitle: 'في الرياض: اعزل واسترخِ. في جدة: اعزل خطأ = عفن.',
    },
    pricing: [
        { type: 'ETICS خارجي (Closed-Cell)', unit: 'م²', minPrice: 60, maxPrice: 100, time: '5-8 أيام' },
        { type: 'Closed-Cell SPF سطح + UV + Anti-Fungal', unit: 'م²', minPrice: 65, maxPrice: 95, time: '1-2 يوم' },
        { type: 'نظام كامل فيلا', unit: 'فيلا', minPrice: 30000, maxPrice: 60000, time: '3-5 أسابيع' },
    ],
    faq: [
        { question: 'العزل الخاطئ أسوأ من عدمه — فعلاً؟', answer: 'نعم. بدون عزل: تكثّف خفيف على السطح (مرئي). بعزل داخلي بدون Vapor Barrier: رطوبة تتسلل ← تتكثّف بين العزل والجدار ← عفن مخفي. لا تراه حتى يهاجم صحتك.' },
        { question: 'ليش التوفير أقل من الرياض؟', answer: 'Latent Load (رطوبة): 40% من حمل التبريد. العزل يُقلل Sensible Load فقط (60%). لإزالة الرطوبة: تهوية أو مجفف. التوفير الحراري: 15-20% (مقارنة بـ 30-40% في الرياض).' },
        { question: 'Closed-Cell يعمل كـ Vapor Barrier؟', answer: 'نعم — خلاياه المغلقة تمنع مرور الرطوبة. في جدة: ميزة مزدوجة: عزل حراري + حاجز رطوبة بطبقة واحدة. يُلغي حاجة فيلم Vapor Barrier منفصل.' },
        { question: 'ETICS ولا عزل داخلي؟', answer: 'ETICS خارجي: الحل الأمثل في جدة. يمنع التكثّف (نقطة الندى تبقى خارج الجدار). لا يأكل مساحة. يُعالج الجسور الحرارية. العزل الداخلي في جدة: خطر تكثّف.' },
        { question: 'تهوية مع عزل — مو متناقض؟', answer: 'العزل يمنع الحرارة. التهوية تُزيل الرطوبة (Latent Load). ليسا متناقضين — مكمّلين. بدون تهوية: الرطوبة محبوسة ← عفن.' },
    ],
    expertTips: [
        'ETICS خارجي = الحل الأمثل: يبقي نقطة الندى خارج الجدار.',
        'Closed-Cell = عزل + Vapor Barrier بطبقة واحدة — مثالي لجدة.',
        'لا تعزل داخلياً بدون Vapor Barrier — عفن مضمون في 80% رطوبة.',
        'تهوية + عزل = الثنائي الصحيح. أحدهما بدون الآخر = نتيجة ناقصة.',
        'Anti-Fungal على كل سطح مُعزل: Stachybotrys لا يحتاج تسرباً — الرطوبة الجوية كافية.',
    ],
    warnings: [
        'عزل داخلي بدون Vapor Barrier = عفن مخفي بين الجدار والعزل.',
        'العزل وحده يُقلل 15-20% (وليس 30-40% كالرياض) — Latent Load يحتاج تهوية.',
        'Open-Cell داخلياً في جدة = يمتص رطوبة ← عفن بين الجدار والعزل.',
    ],
    trustAnchors: [
        { ...GOV.SBC, role: 'SBC 601 — عزل حراري + رطوبة' },
        { ...GOV.MOENERGY, role: 'كفاءة طاقة' },
        { entity: AMANA.JEDDAH.entity, url: AMANA.JEDDAH.url, role: 'اشتراطات أمانة جدة' },
    ],
    expertReviewer: EXPERTS.ALMOHAIMED,
    expertCitations: [
        { expert: EXPERTS.ALJUND.name, quote: 'العزل الحراري في جدة عملية معقدة. العزل الخاطئ يُنبت عفناً بدل أن يوفر كهرباء. Closed-Cell خارجي + تهوية = المعادلة الصحيحة.', source: 'أخطاء في البناء — عزل الساحل' },
    ],
    saudiRegulations: [REGULATIONS.SBC_601],
    verificationBadges: [{ badge: '✔️ ETICS + Vapor Barrier', authority: 'حماية تكثّف', icon: 'shield-check' }],
    equipment: [
        { name: 'ETICS (Closed-Cell)', use: 'خارجي — يبقي Dew Point خارج الجدار' },
        { name: 'Closed-Cell SPF', use: 'عزل + Vapor Barrier بطبقة واحدة' },
        { name: 'Mechanical Ventilation', use: 'يُزيل Latent Load — الرطوبة الزائدة' },
    ],
        hiddenObjections: [
        { fear: 'العزل مكلف — مش متأكد يستاهل.', solution: 'عزل SBC 601 يوفر 30-40% كهرباء سنوياً. يسترد تكلفته خلال 2-3 سنوات.' },
    ],

    counterNarratives: [
        { myth: 'عزل داخلي أسهل.', truth: 'في جدة: أسهل ≠ أصح. تكثّف مخفي + عفن. ETICS أفضل.' },
        { myth: 'العزل يوفر 40%.', truth: 'في جدة: 15-20% (Sensible فقط). Latent Load يحتاج تهوية.' },
    ],
    relatedServices: [
        { slug: 'foam-insulation', context: 'Closed-Cell', priority: 1 },
        { slug: 'roof-insulation', context: 'سيول + مائي', priority: 2 },
        { slug: 'water-insulation', context: 'أساسات', priority: 3 },
        { slug: 'tank-insulation', context: 'خزان', priority: 4 },
        { slug: 'water-leak-detection', context: 'تسربات', priority: 5 },
    
        { slug: 'cleaning', context: 'خدمة مكملة — باقة شاملة.', priority: 6 },
        { slug: 'tanks-cleaning', context: 'تنظيف خزانات السطح مع العزل الحراري.', priority: 8 }
    ],
};
