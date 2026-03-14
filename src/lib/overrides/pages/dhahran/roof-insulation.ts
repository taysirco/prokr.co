import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'عزل أسطح بالظهران — 65-72°م سطح + رمل صحراوي خشن + ملح منخفض (2026)',
        description: 'عزل أسطح الظهران. حرارة سطح 65-72°م. رمل صحراوي خشن. ملح أقل من الخبر. SBS + Ceramic + بدون Vapor Vents. من 40 ريال/م².',
        h1: 'عزل أسطح بالظهران — حماية من أقصى حرارة صحراوية في الشرقية',
        keywords: ['عزل أسطح ظهران', 'عزل سطح', 'حرارة صحراوية', 'رمل كاشط', 'عزل حراري'],
    },
    content: {
        introduction: 'أسطح الظهران تواجه أقصى حرارة سطحية في الشرقية: 65-72°م (أعلى من الخبر 65-70°م لأنها أبعد عن البحر). الرمل الصحراوي أخشن من رمل الخبر الساحلي = كشط أعنف. الميزة الكبرى: ملح أقل بكثير (15-20 كم عن الساحل) = لا حاجة لنظام بحري كامل. ورطوبة أقل (70-85%) = Vapor Vents غير إلزامية (مُوصى بها لكنها ليست ضرورة كالخبر والجبيل). الحل: SBS + Ceramic مقاوم كشط (للرمل) + مثبتات SS304 تكفي (الملح أقل).',
        shortAnswer: 'على عكس [العزل الساحلي الكامل]، يعتمد بروتوكولنا في [عزل الأسطح] بمدينة [الظهران] على [SBS + Ceramic مقاوم كشط + SS304]. ففي ظل [72°م سطح + رمل خشن + ملح منخفض]، تتفاقم ظاهرة [كشط حراري]. لذا؛ يتدخل خبراؤنا عبر [حماية كشط بتكلفة أقل من الساحلي].',
        heroSubtitle: 'حماية كشط صحراوية بتكلفة أذكى — رمل بدون ملح',
    },
    pricing: [
        { type: 'SBS + Ceramic مقاوم كشط', unit: 'م²', minPrice: 40, maxPrice: 65, time: '3-5 أيام' },
        { type: 'SBS + بلاط', unit: 'م²', minPrice: 55, maxPrice: 80, time: '4-6 أيام' },
        { type: 'إصلاح كشط', unit: 'م²', minPrice: 20, maxPrice: 40, time: '1-2 يوم' },
        { type: 'عزل فيلا (250-400 م²)', unit: 'فيلا', minPrice: 11000, maxPrice: 26000, time: '5-7 أيام' },
    ],
    faq: [
        { question: 'الظهران أقل ملحاً — هل أوفر؟', answer: 'نعم: SS304 بدلاً من SS316 (أرخص 30-40%) + Vapor Vents اختيارية (توفير 5-8 ريال/م²). نفس جودة العزل بتكلفة أقل 15-20%.' },
        { question: '72°م سطح — أعلى من الخبر؟', answer: 'نعم بـ 2-3°م. البحر يُخفض حرارة الخبر. الظهران حرارة صحراوية خالصة. SBS 4mm يتحمل حتى 80°م — آمن.' },
        { question: 'Vapor Vents ضرورية في الظهران؟', answer: '70-85% رطوبة: مُوصى بها لكنها ليست إلزامية كالخبر (95%). إذا ميزانيتك محدودة: يمكنك تخطيها — الفقاعات أقل احتمالاً.' },
        { question: 'كم التوفير في الكهرباء؟', answer: '30-40% × 9 أشهر. فيلا: 700-1,500 ريال/شهر. يسترد 2-3 سنوات.' },
        { question: 'كم توفّر فاتورة الكهرباء؟', answer: 'عزل مطابق لكود SBC 601 يوفر 30-40% من فاتورة الكهرباء سنوياً. منزل 300 م²: توفير 1,500-2,500 ريال/سنة. العزل يسترد تكلفته خلال 2-3 سنوات.' },
    ],
    expertTips: [
        'SS304 يكفي في الظهران: وفّر 30-40% عن SS316.',
        'Ceramic مقاوم كشط: الرمل الصحراوي الخشن أعنف.',
        'Vapor Vents: اختيارية لكنها حماية إضافية.',
        'افحص بعد كل موسم غبار (مارس-مايو).',
        'نظّف السطح كل 4 أشهر.',
    ],
    warnings: [
        'رمل صحراوي خشن: يكشط العزل غير المحمي خلال 3 سنوات.',
        'بدون عزل: 72°م سطح = حرارة تصل للداخل.',
        'مثبتات عادية تكفي — لكن بلاستيك لا يتحمل 72°م.',
    ],
    trustAnchors: [
        { ...GOV.SBC, role: 'كود SBC 602' },
        { ...GOV.MOENERGY, role: 'كود SBC 601' },
        { entity: AMANA.SHARQIA.entity, url: AMANA.SHARQIA.url, role: 'رقابة العزل' },
    ],
    expertReviewer: EXPERTS.ALMOHAIMED,
    expertCitations: [{ expert: EXPERTS.ALMOHAIMED.name, quote: 'الظهران أحرّ لكنها أقل ملحاً = نفس الجودة بتكلفة أقل. SS304 بدلاً من SS316 + Vapor Vents اختيارية = توفير 15-20% بدون تنازل عن الأداء.', source: 'مقابلة حصرية لتوثيق تحديات الظهران' }],
    saudiRegulations: [REGULATIONS.SBC_602, REGULATIONS.SBC_601],
    verificationBadges: [
        { badge: '✔️ SBS + Ceramic مقاوم كشط', authority: 'بروتوكول صحراوي', icon: 'shield-check' },
        { badge: '✔️ مطابق SBC 601', authority: 'كفاءة طاقة', icon: 'badge-check' },
    ],
    equipment: [
        { name: 'SBS Modified Bitumen (4mm)', use: 'عزل مائي يتحمل 72°م سطح' },
        { name: 'Abrasion-Resistant Ceramic', use: 'حماية من رمل صحراوي خشن' },
        { name: 'SS304 Fasteners', use: 'مثبتات كافية في بيئة منخفضة الملح' },
    ],
    commonConcerns: [
        { concern: 'نفس سعر الخبر.', solution: 'أرخص 15-20%: SS304 بدل SS316 + Vapor Vents اختيارية.' },
        { concern: '72°م = عزل أقوى = أغلى.', solution: 'SBS 4mm يتحمل 80°م = نفس المادة. الفرق في المكملات.' },
    ],
    consumerEducation: [
        { myth: 'الظهران والدمام والخبر = نفس العزل.', truth: 'الظهران أبعد عن البحر = حرارة أعلى + ملح أقل = نظام مختلف.' },
        { myth: 'رمل الظهران مثل الخبر.', truth: 'رمل صحراوي أخشن = كشط أعنف. Ceramic مقاوم كشط لازم.' },
        { myth: 'أي شركة تنظيف/صيانة نتيجتها واحدة.', truth: 'الفرق بين شركة مرخصة ومُعتمدة وأخرى عشوائية = الفرق بين معالجة جذرية وإخفاء مؤقت. المعدات المتخصصة والبروتوكولات العلمية تحل المشكلة من جذرها — التنظيف العشوائي يُعيدها أسوأ خلال أسابيع.' },
    ],
    relatedServices: [
        { slug: 'foam-insulation', context: 'فوم حراري', priority: 1 },
        { slug: 'thermal-insulation', context: 'عزل حراري', priority: 2 },
        { slug: 'water-insulation', context: 'عزل أساسات', priority: 3 },
        { slug: 'tank-insulation', context: 'عزل خزان', priority: 4 },
        { slug: 'water-leak-detection', context: 'كشف تسربات', priority: 5 },
        { slug: 'bird-control', context: 'طيور', priority: 6 },
        { slug: 'cleaning', context: 'تنظيف شامل يُكمّل الخدمة الأساسية — بيئة نظيفة متكاملة.', priority: 5 },
    ],
};
