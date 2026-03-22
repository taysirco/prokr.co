import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../gov-references';

export const override: PageOverride = {
    meta: {
        title: 'عزل حراري بالقطيف — 98% رطوبة = ممنوع داخلي + ETICS بحري + SS316 (2026)',
        description: 'عزل حراري القطيف. 98% رطوبة = عزل داخلي ممنوع. ETICS بحري خارجي فقط. SS316 hardware. Marine finish. 10-11 شهر تبريد. من 55 ريال/م².',
        h1: 'عزل حراري بالقطيف — ETICS بحري خارجي فقط',
        keywords: ['عزل حراري القطيف', 'ETICS بحري', 'عزل خارجي', 'SS316', 'توفير كهرباء'],
    },
    content: {
        introduction: 'العزل الحراري في القطيف يلتزم بقاعدة صارمة: العزل الداخلي ممنوع تماماً. رطوبة 98% = تكثيف خلف العزل ← عفن أسود (Stachybotrys) خلال أسبوع. ETICS (External Thermal Insulation Composite System) خارجي هو الخيار الوحيد. لكنه يحتاج تعديلات بحرية: Marine-grade adhesive (الملح يُضعف اللاصق العادي) + SS316 anchors (مسامير حديد تصدأ) + Marine finish coat (تقاوم الملح وUV). التحدي الإضافي: 10-11 شهر حاجة تبريد (ليس 9 مثل الرياض) = توفير أعلى بنسبة 15-20%.',
        shortAnswer: 'على عكس [عزل داخلي في 98% = عفن مضمون]، يعتمد بروتوكولنا في [العزل الحراري] بمدينة [القطيف] على [ETICS بحري خارجي + Marine adhesive + SS316 anchors]. ففي ظل [98% رطوبة + رذاذ 35,000 ppm + 10-11 شهر حر]، تتفاقم ظاهرة [تكثيف + تآكل]. لذا؛ يتدخل خبراؤنا عبر [ETICS بحري خارجي بمواصفات ساحلية].',
        heroSubtitle: 'العزل الداخلي ممنوع — ETICS بحري يوفر 35-45% كهرباء',
    },
    pricing: [
        { type: 'ETICS بحري (5 سم) + Marine finish', unit: 'م²', minPrice: 60, maxPrice: 95, time: '5-7 أيام' },
        { type: 'نوافذ PVC Marine Double-Glazed', unit: 'نافذة', minPrice: 400, maxPrice: 700, time: '1-2 ساعة' },
        { type: 'عزل كامل فيلا (ETICS + نوافذ)', unit: 'فيلا', minPrice: 22000, maxPrice: 45000, time: '2-3 أسابيع' },
        { type: 'تجديد Marine finish', unit: 'م²', minPrice: 15, maxPrice: 25, time: '1-2 يوم' },
    ],
    faq: [
        { question: 'لماذا العزل الداخلي ممنوع في القطيف؟', answer: '98% رطوبة = الهواء مُشبع. العزل الداخلي يحبس الرطوبة بين الجدار والعزل ← تكثيف ← عفن أسود خلال أسبوع. في الرياض (15%): العزل الداخلي ممكن. في القطيف: مستحيل.' },
        { question: 'Marine adhesive ضروري؟', answer: 'اللاصق العادي يتأثر بكلوريد 35,000 ppm ← يفقد التصاقه خلال 2-3 سنوات. Marine adhesive مُقاوم ← 10-15 سنة.' },
        { question: 'كم التوفير؟', answer: '35-45% × 10-11 شهر تبريد. فيلا: 800-2,000 ريال/شهر توفير. يسترد خلال 2-3 سنوات.' },
        { question: 'نوافذ PVC ولا ألمنيوم؟', answer: 'PVC: لا يصدأ أبداً. ألمنيوم: يتآكل في رذاذ القطيف خلال 5-8 سنوات. PVC أغلى 20-30% لكنه يدوم 3× أطول.' },
        { question: 'كم توفّر فاتورة الكهرباء؟', answer: 'عزل مطابق لكود SBC 601 يوفر 30-40% من فاتورة الكهرباء سنوياً. منزل 300 م²: توفير 1,500-2,500 ريال/سنة. العزل يسترد تكلفته خلال 2-3 سنوات.' },
    ],
    expertTips: [
        'عزل داخلي = ممنوع في 98% رطوبة.',
        'ETICS بحري خارجي فقط: Marine adhesive + SS316.',
        'PVC نوافذ: لا ألمنيوم في رذاذ بحري.',
        'Marine finish يُجدّد كل 5-7 سنوات.',
        'مزيل رطوبة (Dehumidifier) داخلي: يُكمّل العزل.',
    ],
    warnings: [
        'عزل داخلي في 98%: عفن أسود خلال أسبوع.',
        'لاصق عادي في ملوحة 35,000: ينفصل خلال 2-3 سنوات.',
        'ألمنيوم نوافذ في رذاذ مباشر: يتآكل.',
    ],
    trustAnchors: [
        { ...GOV.SBC, role: 'كود SBC 601' },
        { ...GOV.MOENERGY, role: 'كفاءة الطاقة' },
        { entity: AMANA.SHARQIA.entity, url: AMANA.SHARQIA.url, role: 'رقابة العزل' },
    ],
    expertReviewer: EXPERTS.ALMOHAIMED,
    expertCitations: [{ expert: EXPERTS.ALMOHAIMED.name, quote: 'القطيف 98% رطوبة = العزل الداخلي ممنوع بالمطلق. ETICS خارجي بمواد بحرية = الطريقة الوحيدة. كل مكوّن يجب أن يقاوم 35,000 ppm — من اللاصق للمسمار للدهان النهائي.', source: 'مقابلة حصرية لتوثيق تحديات القطيف' }],
    saudiRegulations: [REGULATIONS.SBC_601],
    verificationBadges: [
        { badge: '✔️ ETICS بحري معتمد', authority: 'عزل خارجي', icon: 'shield-check' },
        { badge: '✔️ فحص FLIR بعد العزل', authority: 'كفاءة حرارية', icon: 'badge-check' },
    ],
    equipment: [
        { name: 'Marine ETICS System', use: 'نظام عزل خارجي بلاصق ومثبتات ودهان بحري' },
        { name: 'Marine-Grade PVC Windows', use: 'نوافذ لا تصدأ في رذاذ 35,000 ppm' },
        { name: 'SS316 Mechanical Anchors', use: 'مثبتات بحرية لعزل ETICS' },
    ],
    commonConcerns: [
        { concern: 'ETICS بحري أغلى 30-40% من عادي.', solution: 'العادي ينفصل خلال 2-3 سنوات = إعادة كل مرة. البحري 10-15 سنة. أرخص 3-5× إجمالياً.' },
        { concern: 'PVC نوافذ أغلى.', solution: 'ألمنيوم يُستبدل كل 5-8 سنوات = أغلى على المدى الطويل. PVC مرة واحدة.' },
    ],
    consumerEducation: [
        { myth: 'يمكن عزل داخلي مع شفّاط.', truth: 'الشفّاط يُقلل الرطوبة 10-20%. من 98% إلى 78-88% = لا زال عفن مضمون. الحل الوحيد: خارجي.' },
        { myth: 'كل الشرقية = نفس ETICS.', truth: 'الظهران (80%): ETICS عادي يكفي. الخبر (95%): Marine أفضل. القطيف (98%): Marine إلزامي.' },
        { myth: 'أي شركة تنظيف/صيانة نتيجتها واحدة.', truth: 'الفرق بين شركة مرخصة ومُعتمدة وأخرى عشوائية = الفرق بين معالجة جذرية وإخفاء مؤقت. المعدات المتخصصة والبروتوكولات العلمية تحل المشكلة من جذرها — التنظيف العشوائي يُعيدها أسوأ خلال أسابيع.' },
    ],
    relatedServices: [
        { slug: 'roof-insulation', context: 'عزل سطح بحري', priority: 1 },
        { slug: 'foam-insulation', context: 'فوم Marine', priority: 2 },
        { slug: 'water-insulation', context: 'عزل أساسات', priority: 3 },
        { slug: 'tank-insulation', context: 'خزان بحري', priority: 4 },
        { slug: 'water-leak-detection', context: 'كشف تسربات', priority: 5 },
        { slug: 'bathroom-leak-detection', context: 'حمامات', priority: 6 },
        { slug: 'pesticide-spraying', context: 'حشرات رطوبة', priority: 7 },
    ],
};
