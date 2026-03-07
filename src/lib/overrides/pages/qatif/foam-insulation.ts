import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'عزل فوم بالقطيف — 98% رطوبة + رذاذ 35,000 ppm + Marine-Formulated (2026)',
        description: 'عزل فوم القطيف. 98% رطوبة. Marine-Formulated Closed-Cell 40+ كجم/م³. SS316 hardware. أعلى كثافة فوم في الشرقية. من 50 ريال/م².',
        h1: 'عزل فوم بالقطيف — أعلى كثافة مطلوبة في الشرقية',
        keywords: ['عزل فوم القطيف', 'فوم بحري', 'Marine-Formulated', 'Closed-Cell', '40+ كجم'],
    },
    content: {
        introduction: 'فوم القطيف يحتاج أعلى مواصفات في الشرقية: 98% رطوبة = أي فوم أقل من 40 كجم/م³ يمتص الرطوبة. Marine-Formulated إلزامي (رذاذ ملحي 35,000 ppm يتآكل الفوم العادي). الجبيل تحتاج 40+ كجم (سبخة). الخبر 38+ (رمل ساحلي). القطيف 40+ وMarine: الأصعب. كل hardware (مسامير، قطاعات تثبيت، براغي) = SS316. الحل: Marine-Formulated Closed-Cell 40+ كجم + Marine Ceramic + SS316.',
        shortAnswer: 'على عكس [فوم عادي 30 كجم في 98% رطوبة = إسفنجة]، يعتمد بروتوكولنا في [عزل الفوم] بمدينة [القطيف] على [Marine-Formulated 40+ كجم + Marine Ceramic + SS316]. ففي ظل [98% رطوبة + 35,000 ppm ملوحة + رذاذ مباشر]، تتفاقم ظاهرة [امتصاص + تآكل]. لذا؛ يتدخل خبراؤنا عبر [أعلى كثافة + حماية بحرية].',
        heroSubtitle: 'Marine-Formulated 40+ كجم — الفوم الوحيد الذي يصمد في القطيف',
    },
    pricing: [
        { type: 'Marine-Formulated 40+ كجم (3 سم)', unit: 'م²', minPrice: 50, maxPrice: 75, time: '2-4 أيام' },
        { type: 'Marine 40+ كجم (5 سم) + Ceramic', unit: 'م²', minPrice: 65, maxPrice: 95, time: '3-5 أيام' },
        { type: 'SBS Marine + فوم + Ceramic', unit: 'م²', minPrice: 85, maxPrice: 120, time: '5-7 أيام' },
        { type: 'تجديد Ceramic', unit: 'م²', minPrice: 18, maxPrice: 30, time: '1 يوم' },
    ],
    faq: [
        { question: 'Marine-Formulated vs عادي — فرق حقيقي؟', answer: 'نعم كبير: Marine يحتوي Anti-Salt Additives تمنع الكلوريدات من اختراق خلايا الفوم. العادي: الملح يخترق ← يُذيب الفوم من الداخل. في القطيف: فرق بين 10 سنوات و3 سنوات.' },
        { question: '40 كجم/م³ ضروري؟', answer: '98% رطوبة = أعلى ضغط اختراق. 35 كجم ينجح في الظهران (80%). 38 في الخبر (95%). 40+ في القطيف/الجبيل (98%). كل 5% رطوبة إضافية = 2-3 كجم كثافة إضافية.' },
        { question: 'كم التوفير؟', answer: '35-45% × 10-11 شهر تبريد. في القطيف: حمل تكييف أعلى 20-25% من الرياض بسبب الرطوبة. التوفير أكبر بنسبة مماثلة.' },
    ],
    expertTips: [
        'Marine-Formulated فقط: العادي يتآكل في رذاذ القطيف.',
        '40+ كجم/م³: حد أدنى لـ 98% رطوبة.',
        'ارش في شتاء يناير-فبراير: أقل رطوبة = التصاق أفضل.',
        'Marine Ceramic حماية أساسية.',
        'SS316 لكل قطعة hardware.',
    ],
    warnings: [
        'فوم عادي في 98% رطوبة: إسفنجة خلال سنة.',
        'أقل من 40 كجم: يمتص رطوبة ← عفن ← فشل.',
        'مسامير حديد: تصدأ ← بقع صدأ تخترق العزل.',
    ],
    trustAnchors: [
        { ...GOV.SBC, role: 'كود SBC 601' },
        { ...GOV.MOENERGY, role: 'كفاءة الطاقة' },
        { entity: AMANA.SHARQIA.entity, url: AMANA.SHARQIA.url, role: 'رقابة العزل' },
    ],
    expertReviewer: EXPERTS.ALJUND,
    expertCitations: [{ expert: EXPERTS.ALJUND.name, quote: 'القطيف تحتاج أعلى كثافة فوم في الشرقية: 40+ كجم Marine-Formulated. أي تنازل = فشل. الفوم العادي يتحول إسفنجة ملحية رطبة خلال 1-2 سنة.', source: 'مقابلة حصرية لتوثيق تحديات القطيف' }],
    saudiRegulations: [REGULATIONS.SBC_601],
    verificationBadges: [
        { badge: '✔️ Marine-Formulated 40+', authority: 'فوم بحري', icon: 'shield-check' },
        { badge: '✔️ SS316 Hardware', authority: 'تثبيت بحري', icon: 'badge-check' },
    ],
    equipment: [
        { name: 'Marine-Formulated Spray Rig (40+ kg/m³)', use: 'رش فوم بحري عالي الكثافة مع مضادات ملوحة' },
        { name: 'Marine Ceramic Overcoat', use: 'حماية الفوم من الرذاذ الملحي والأشعة فوق البنفسجية' },
        { name: 'SS316 Fastener Kit', use: 'مسامير وقطاعات تثبيت بحرية' },
    ],
    hiddenObjections: [
        { fear: 'Marine-Formulated أغلى 25-35%.', solution: 'يدوم 10+ سنوات vs عادي 2-3 = أرخص إجمالياً 3-4×.' },
        { fear: '40 كجم أغلى من 35.', solution: '35 يفشل في 98% = خسارة كاملة. 40+ = 10+ سنوات. لا يوجد خيار أرخص يعمل.' },
    ],
    counterNarratives: [
        { myth: 'الفوم العادي يكفي في كل الشرقية.', truth: 'الظهران 80%: 35 كجم عادي يكفي. الخبر 95%: 38 كجم. القطيف 98%: 40+ Marine. ليست منطقة واحدة.' },
        { myth: 'Ceramic بدون فوم يكفي.', truth: 'Ceramic حماية سطحية فقط — لا عزل حراري. الفوم = العزل الحقيقي. Ceramic فوقه = الحماية.' },
        { myth: 'أي شركة تنظيف/صيانة نتيجتها واحدة.', truth: 'الفرق بين شركة مرخصة ومُعتمدة وأخرى عشوائية = الفرق بين معالجة جذرية وإخفاء مؤقت. المعدات المتخصصة والبروتوكولات العلمية تحل المشكلة من جذرها — التنظيف العشوائي يُعيدها أسوأ خلال أسابيع.' },
    ],
    relatedServices: [
        { slug: 'roof-insulation', context: 'SBS تحت', priority: 1 },
        { slug: 'thermal-insulation', context: 'عزل حراري', priority: 2 },
        { slug: 'water-insulation', context: 'عزل أساسات سبخات', priority: 3 },
        { slug: 'tank-insulation', context: 'خزان بحري', priority: 4 },
        { slug: 'water-leak-detection', context: 'كشف تسربات', priority: 5 },
        { slug: 'bird-control', context: 'طيور بحرية', priority: 6 },
        { slug: 'sewage-unblocking', context: 'مجاري', priority: 7 },
    ],
};
