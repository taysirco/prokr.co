import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'عزل فوم بالخبر — رطوبة 95% تخترق المفتوح + رمل يكشط الحماية (2026)',
        description: 'عزل فوم الخبر. رطوبة 95% تخترق Open-Cell. رمل يكشط الجاكيت. ملح يأكل الألمنيوم. Closed-Cell 38+ كجم + Ceramic مقاوم كشط. من 40 ريال/م².',
        h1: 'عزل فوم بالخبر — Closed-Cell مع حماية كشط بحرية',
        keywords: ['عزل فوم خبر', 'فوم عزل', 'رطوبة خليجية', 'رمل كاشط', 'Ceramic بحري'],
    },
    content: {
        introduction: 'الفوم في الخبر يعاني من ثلاثية: رطوبة 85-95% تخترق Open-Cell ← يفقد العزل + عفن. رذاذ ملح الخليج يأكل جاكيت الألمنيوم خلال سنتين. الرمل المتطاير يكشط أي حماية غير مقاومة للكشط خلال مواسم الغبار (مارس-مايو). الحل: Closed-Cell بكثافة 38+ كجم/م³ (أقل قليلاً من الجبيل لأنه لا سبخة) + Ceramic Marine مقاوم الكشط بدلاً من جاكيت ألمنيوم. SBS تحت الفوم لمنع الرطوبة من الخرسانة.',
        shortAnswer: 'على عكس [الفوم المفتوح + ألمنيوم] الذي يفشل كلياً، يعتمد بروتوكولنا في [عزل الفوم] بمدينة [الخبر] على [Closed-Cell 38+ كجم + Ceramic مقاوم كشط]. ففي ظل [رطوبة 95% + ملح + رمل كاشط]، تتفاقم ظاهرة [امتصاص + تآكل + كشط]. لذا؛ يتدخل خبراؤنا عبر [فوم عالي الكثافة + حماية بحرية مقاومة كشط].',
        heroSubtitle: 'فوم 38+ كجم + سيراميك مقاوم كشط — حماية بحرية للخبر',
    },
    pricing: [
        { type: 'فوم Closed-Cell 38+ كجم + Ceramic (3 سم)', unit: 'م²', minPrice: 40, maxPrice: 60, time: '1-2 يوم' },
        { type: 'فوم 5 سم + Ceramic مزدوج', unit: 'م²', minPrice: 55, maxPrice: 80, time: '2-3 أيام' },
        { type: 'SBS + فوم + Ceramic (نظام ثلاثي)', unit: 'م²', minPrice: 70, maxPrice: 100, time: '3-4 أيام' },
        { type: 'تجديد Ceramic Marine', unit: 'م²', minPrice: 15, maxPrice: 25, time: '1 يوم' },
    ],
    faq: [
        { question: 'ليش 38 وليس 40 مثل الجبيل؟', answer: '38 كجم/م³ يكفي لرطوبة 95% (الخبر). 40+ للـ 98% (الجبيل). الخبر لا فيها سبخة = ضغط رطوبة أقل قليلاً = كثافة أقل تكفي.' },
        { question: 'الرمل يكشط Ceramic أيضاً؟', answer: 'Ceramic Marine مُصمم لمقاومة الكشط (abrasion-resistant). يتحمل 5-7 سنوات في رمل الخبر. العادي: 2-3 سنوات. التجديد كل 5 سنوات = حماية مستمرة.' },
        { question: 'هل SBS تحت الفوم ضروري؟', answer: 'في الخبر: مُوصى به بشدة. رطوبة 95% تتسلل من الخرسانة. SBS يفصل الفوم تماماً. بدونه: خطر امتصاص رطوبة من الأسفل.' },
        { question: 'كم التوفير في الكهرباء؟', answer: '30-40% × 9 أشهر تبريد. فيلا: 600-1,500 ريال/شهر.' },
        { question: 'كم توفّر فاتورة الكهرباء؟', answer: 'عزل مطابق لكود SBC 601 يوفر 30-40% من فاتورة الكهرباء سنوياً. منزل 300 م²: توفير 1,500-2,500 ريال/سنة. العزل يسترد تكلفته خلال 2-3 سنوات.' },
    ],
    expertTips: [
        'Closed-Cell 38+ كجم/م³ فقط: أقل = رطوبة 95% تخترقه.',
        'Ceramic Marine مقاوم كشط: بديل جاكيت الألمنيوم.',
        'ارش في الشتاء: رطوبة 60% = التصاق مثالي.',
        'جفّف السطح تماماً قبل الرش.',
        'جدّد Ceramic كل 5 سنوات.',
    ],
    warnings: [
        'Open-Cell في 95% رطوبة: يتحول لإسفنجة ← عفن.',
        'جاكيت ألمنيوم: ملح الخليج يأكله + رمل يكشطه = فشل مزدوج.',
        'رش في رطوبة أعلى من 80%: التصاق ضعيف.',
    ],
    trustAnchors: [
        { ...GOV.SBC, role: 'كود SBC 601' },
        { ...GOV.MOENERGY, role: 'كفاءة الطاقة' },
        { entity: AMANA.SHARQIA.entity, url: AMANA.SHARQIA.url, role: 'رقابة العزل بالشرقية' },
    ],
    expertReviewer: EXPERTS.ALJUND,
    expertCitations: [{ expert: EXPERTS.ALJUND.name, quote: 'الفرق بين الخبر والجبيل: كلاهما يحتاج фоم عالي الكثافة، لكن الخبر 38 كجم يكفي بينما الجبيل تحتاج 40+. الرمل الكاشط هو التحدي الإضافي في الخبر — Ceramic مقاوم الكشط = إلزامي.', source: 'مقابلة حصرية لتوثيق تحديات الخبر' }],
    saudiRegulations: [REGULATIONS.SBC_601],
    verificationBadges: [
        { badge: '✔️ فوم 38+ كجم/م³', authority: 'كثافة معتمدة', icon: 'shield-check' },
        { badge: '✔️ Ceramic مقاوم كشط', authority: 'حماية رمل', icon: 'badge-check' },
    ],
    equipment: [
        { name: 'High-Density Spray Rig (38+ kg/m³)', use: 'رش فوم مغلق يقاوم رطوبة 95%' },
        { name: 'Abrasion-Resistant Ceramic Coating', use: 'سيراميك يتحمل كشط رمل النفود' },
        { name: 'Surface Moisture Meter', use: 'قياس رطوبة السطح قبل الرش' },
    ],
    hiddenObjections: [
        { fear: '38 كجم أغلى من 30.', solution: '30 يفشل في 95% رطوبة = خسارة كاملة. 38 يعمل 10+ سنوات.' },
        { fear: 'النظام الثلاثي مكلف.', solution: 'يوفر 30-40% كهرباء × 9 أشهر = يسترد خلال 2-3 سنوات.' },
    ],
    consumerEducation: [
        { myth: 'الخبر أسهل من الجبيل فأي فوم يعمل.', truth: 'أسهل قليلاً (لا سبخة) لكن 95% رطوبة + رمل كاشط = لا تساهل.' },
        { myth: 'Ceramic عادي يكفي.', truth: 'العادي يتكشط بالرمل خلال سنتين. Marine مقاوم كشط = 5-7 سنوات.' },
        { myth: 'أي شركة تنظيف/صيانة نتيجتها واحدة.', truth: 'الفرق بين شركة مرخصة ومُعتمدة وأخرى عشوائية = الفرق بين معالجة جذرية وإخفاء مؤقت. المعدات المتخصصة والبروتوكولات العلمية تحل المشكلة من جذرها — التنظيف العشوائي يُعيدها أسوأ خلال أسابيع.' },
    ],
    relatedServices: [
        { slug: 'roof-insulation', context: 'SBS تحت الفوم', priority: 1 },
        { slug: 'thermal-insulation', context: 'عزل حراري شامل', priority: 2 },
        { slug: 'water-insulation', context: 'عزل أساسات', priority: 3 },
        { slug: 'tank-insulation', context: 'عزل خزان', priority: 4 },
        { slug: 'water-leak-detection', context: 'كشف تسربات', priority: 5 },
        { slug: 'bird-control', context: 'طيور تنقر الفوم', priority: 6 },
        { slug: 'cleaning', context: 'تنظيف شامل يُكمّل الخدمة الأساسية — بيئة نظيفة متكاملة.', priority: 5 },
    ],
};
