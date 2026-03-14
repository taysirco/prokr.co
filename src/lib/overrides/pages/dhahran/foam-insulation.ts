import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'عزل فوم بالظهران — 80% رطوبة + رمل خشن + حرارة أقصى (2026)',
        description: 'عزل فوم الظهران. رطوبة 80% (أقل من الخبر). رمل صحراوي خشن. 52°م. Closed-Cell 35+ كجم + Ceramic كشط. من 35 ريال/م².',
        h1: 'عزل فوم بالظهران — كثافة معتدلة مع حماية كشط صحراوية',
        keywords: ['عزل فوم ظهران', 'فوم عزل', 'حرارة صحراوية', 'رمل كاشط', 'Ceramic صحراوي'],
    },
    content: {
        introduction: 'فوم الظهران يحتاج حلاً صحراوياً: رطوبة 70-85% = Closed-Cell 35+ كجم/م³ يكفي (أقل من الخبر 38+ والجبيل 40+). الرمل الصحراوي الخشن يكشط أي حماية غير متخصصة. حرارة 52°م تتطلب فوم يتحمل الإجهاد. الميزة: ملح أقل = لا حاجة لـ Ceramic بحري — Ceramic صحراوي مقاوم كشط أرخص يكفي. النظام: Closed-Cell 35+ كجم + Ceramic مقاوم كشط + SBS موصى به كقاعدة.',
        shortAnswer: 'على عكس [فوم ساحلي 38-40 كجم]، يعتمد بروتوكولنا في [عزل الفوم] بمدينة [الظهران] على [Closed-Cell 35+ كجم + Ceramic مقاوم كشط]. ففي ظل [80% رطوبة + رمل خشن + 52°م]، تتفاقم ظاهرة [كشط + إجهاد]. لذا؛ يتدخل خبراؤنا عبر [كثافة أذكى + حماية كشط بتكلفة أقل].',
        heroSubtitle: 'كثافة مناسبة مع حماية كشط — فوم صحراوي اقتصادي',
    },
    pricing: [
        { type: 'فوم Closed-Cell 35+ كجم + Ceramic (3 سم)', unit: 'م²', minPrice: 35, maxPrice: 55, time: '1-2 يوم' },
        { type: 'فوم 5 سم + Ceramic مزدوج', unit: 'م²', minPrice: 50, maxPrice: 75, time: '2-3 أيام' },
        { type: 'SBS + فوم + Ceramic', unit: 'م²', minPrice: 65, maxPrice: 90, time: '3-4 أيام' },
        { type: 'تجديد Ceramic', unit: 'م²', minPrice: 12, maxPrice: 20, time: '1 يوم' },
    ],
    faq: [
        { question: 'ليش 35 وليس 38 مثل الخبر؟', answer: 'رطوبة الظهران 70-85% (الخبر 85-95%). 35 كجم يكفي لمنع اختراق الرطوبة. توفير في المادة بدون تنازل عن الأداء.' },
        { question: 'Ceramic صحراوي أرخص من Marine؟', answer: 'نعم — 20-30% أرخص. Ceramic Marine مُصمم لمقاومة الملح. الظهران لا تحتاجه = Ceramic مقاوم كشط فقط يكفي.' },
        { question: 'جاكيت ألمنيوم ممكن في الظهران؟', answer: 'ممكن (ملح أقل) لكنه لن يقاوم الرمل الخشن. Ceramic أفضل للكشط. إذا أصريت: ألمنيوم سميك 0.7mm+.' },
        { question: 'كم التوفير مقارنة بالخبر؟', answer: '15-25% أرخص: كثافة أقل + Ceramic أرخص + SS304 بدل SS316.' },
        { question: 'كم توفّر فاتورة الكهرباء؟', answer: 'عزل مطابق لكود SBC 601 يوفر 30-40% من فاتورة الكهرباء سنوياً. منزل 300 م²: توفير 1,500-2,500 ريال/سنة. العزل يسترد تكلفته خلال 2-3 سنوات.' },
    ],
    expertTips: [
        'Closed-Cell 35+ كجم/م³: يكفي في الظهران.',
        'Ceramic مقاوم كشط (ليس بحري): أذكى اقتصادياً.',
        'SBS تحت الفوم: مُوصى به لحماية من الخرسانة.',
        'ارش في الشتاء: 60-70% رطوبة = التصاق ممتاز.',
        'جدّد Ceramic كل 6 سنوات.',
    ],
    warnings: [
        'Open-Cell في 80% رطوبة: يمتص ماء ببطء ← يفشل خلال 3-5 سنوات.',
        'بدون Ceramic: الرمل الخشن يكشط الفوم خلال 2-3 سنوات.',
        'فوم أقل من 35 كجم: يتأثر بالحرارة + يمتص رطوبة.',
    ],
    trustAnchors: [
        { ...GOV.SBC, role: 'كود SBC 601' },
        { ...GOV.MOENERGY, role: 'كفاءة الطاقة' },
        { entity: AMANA.SHARQIA.entity, url: AMANA.SHARQIA.url, role: 'رقابة العزل' },
    ],
    expertReviewer: EXPERTS.ALJUND,
    expertCitations: [{ expert: EXPERTS.ALJUND.name, quote: 'الظهران تُثبت أن كل مدينة وصفتها المختلفة: 80% رطوبة = 35 كجم يكفي. الخبر 95% = 38. الجبيل 98% = 40+. استخدام الكثافة المناسبة = جودة + توفير.', source: 'مقابلة حصرية لتوثيق تحديات الظهران' }],
    saudiRegulations: [REGULATIONS.SBC_601],
    verificationBadges: [
        { badge: '✔️ فوم 35+ كجم/م³', authority: 'كثافة مناسبة', icon: 'shield-check' },
        { badge: '✔️ Ceramic مقاوم كشط', authority: 'حماية رمل', icon: 'badge-check' },
    ],
    equipment: [
        { name: 'Spray Rig (35+ kg/m³)', use: 'رش فوم مغلق بكثافة مناسبة للظهران' },
        { name: 'Desert Abrasion-Resistant Ceramic', use: 'سيراميك صحراوي يقاوم رمل خشن' },
        { name: 'Surface Moisture Meter', use: 'قياس رطوبة السطح قبل الرش' },
    ],
    hiddenObjections: [
        { fear: '35 كجم أقل من الخبر — هل يكفي؟', solution: '35 مُصمم لـ 80%. زيادة الكثافة بدون حاجة = تكلفة بدون فائدة.' },
        { fear: 'النظام أرخص = أقل جودة؟', solution: 'أقل تكلفة لأن الظروف أقل قسوة. نفس الجودة الهندسية.' },
    ],
    consumerEducation: [
        { myth: 'كل الشرقية = نفس الفوم.', truth: 'الجبيل 40+، الخبر 38+، الظهران 35+. كل مدينة حسب ظروفها.' },
        { myth: 'Ceramic عادي يكفي.', truth: 'ضد الملح ربما. ضد الرمل: لا. مقاوم كشط = إلزامي.' },
        { myth: 'أي شركة تنظيف/صيانة نتيجتها واحدة.', truth: 'الفرق بين شركة مرخصة ومُعتمدة وأخرى عشوائية = الفرق بين معالجة جذرية وإخفاء مؤقت. المعدات المتخصصة والبروتوكولات العلمية تحل المشكلة من جذرها — التنظيف العشوائي يُعيدها أسوأ خلال أسابيع.' },
    ],
    relatedServices: [
        { slug: 'roof-insulation', context: 'SBS تحت', priority: 1 },
        { slug: 'thermal-insulation', context: 'عزل حراري', priority: 2 },
        { slug: 'water-insulation', context: 'عزل أساسات', priority: 3 },
        { slug: 'tank-insulation', context: 'عزل خزان', priority: 4 },
        { slug: 'water-leak-detection', context: 'كشف تسربات', priority: 5 },
        { slug: 'bird-control', context: 'طيور', priority: 6 },
        { slug: 'cleaning', context: 'تنظيف شامل يُكمّل الخدمة الأساسية — بيئة نظيفة متكاملة.', priority: 5 },
    ],
};
