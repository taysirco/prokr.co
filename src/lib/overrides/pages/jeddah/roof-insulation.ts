import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'عزل أسطح بجدة — العزل المائي أولاً + SBS وليس APP + سيول نوفمبر + رطوبة 80% (2026)',
        description: 'عزل أسطح جدة. العزل المائي أهم من الحراري. SBS مرن. سيول نوفمبر-يناير. Closed-Cell فقط. من 30 ريال/م².',
        h1: 'عزل أسطح بجدة — المائي أولاً: السيول تختبر عزلك كل شتاء',
        keywords: ['عزل أسطح بجدة', 'عزل مائي', 'SBS', 'سيول جدة', 'عزل فوم'],
    },
    content: {
        introduction: 'عزل الأسطح في جدة يختلف جذرياً عن الرياض. في الرياض: الحراري أولاً (70% فاتورة = تبريد). في جدة: المائي أولاً. سيول نوفمبر-يناير تختبر كل سطح — 30-50 مم/ساعة (أمطار غزيرة مفاجئة). سطح بدون عزل مائي = فيضان داخلي. ثم الرطوبة: 60-90% رطوبة + أي شق في العزل = تسرب + Stachybotrys خلال 48 ساعة. اختيار المواد حاسم: SBS (Styrene-Butadiene-Styrene) وليس APP (Atactic Polypropylene). لماذا؟ SBS مرن يتحمل حركة المبنى والتفاوت الحراري. APP صلب ← يتشقق عند الحركة ← يفشل. والفوم: Closed-Cell فقط. Open-Cell يمتص الرطوبة كالإسفنج — في رطوبة 80%: يتشبع ← يفقد عزله ← يُنبت عفناً. الحل المتكامل: SBS طبقتين (عزل مائي) ← Closed-Cell SPF فوق (عزل حراري) ← Anti-Fungal Coating (مضاد فطري).',
        shortAnswer: 'على عكس [APP صلب يتشقق + Open-Cell يمتص الرطوبة] الذي يفشل أول سيلة، يعتمد بروتوكولنا في [عزل الأسطح] بـ[جدة] على [SBS طبقتين + Closed-Cell SPF + Anti-Fungal Coat]. ففي ظل [سيول 30-50 مم/ساعة + رطوبة 80% + Stachybotrys في 48 ساعة]، تتفاقم ظاهرة [فيضان + عفن + تشقق APP]. لذا؛ يتدخل خبراؤنا عبر [يحمي SBS من المطر ← يعزل Closed-Cell حرارياً ← يحيِّد Anti-Fungal العفن].',
        heroSubtitle: 'الرياض: الحراري أولاً. جدة: المائي أولاً. اختلاف جذري.',
    },
    pricing: [
        { type: 'SBS طبقتين (عزل مائي)', unit: 'م²', minPrice: 30, maxPrice: 50, time: '1-2 يوم' },
        { type: 'Closed-Cell SPF (5 سم) + UV', unit: 'م²', minPrice: 55, maxPrice: 85, time: '1-2 يوم' },
        { type: 'نظام كامل (SBS + SPF + Anti-Fungal)', unit: 'م²', minPrice: 75, maxPrice: 120, time: '3-4 أيام' },
    ],
    faq: [
        { question: 'ليش المائي أولاً مو الحراري مثل الرياض؟', answer: 'الرياض: أمطار نادرة. جدة: سيول 30-50 مم/ساعة. سطح بدون عزل مائي = فيضان داخلي. + رطوبة 80% = أي شق = عفن. المائي يحمي المبنى. الحراري يوفر كهرباء. الأولوية: حماية ثم توفير.' },
        { question: 'SBS ولا APP — إيش الفرق؟', answer: 'SBS: مرن (Elastomeric) — يتحمل حركة المبنى + تمدد حراري. APP: صلب (Plastomeric) — يتشقق عند الحركة. في جدة (سيول + حركة تربة طينية): SBS الخيار الوحيد المقبول.' },
        { question: 'Open-Cell فوم أرخص — ليش ما ينفع بجدة؟', answer: 'Open-Cell: خلايا متصلة كالإسفنج. رطوبة 80%: يمتص الماء من الجو ← يفقد عزله ← يُنبت عفناً. Closed-Cell: كل خلية مغلقة ← لا يمتص ← R-Value ضعف. في جدة: Closed-Cell فقط.' },
        { question: 'كم يوفر من فاتورة الكهرباء؟', answer: 'توفير أقل من الرياض (الرياض: 30-40%). جدة: 15-25% (Heat Index عالي لكن الرطوبة ترفع Latent Load لا يُعالجها العزل وحده). لكن العزل المائي يمنع أضراراً بعشرات الآلاف.' },
        { question: 'السيول تضرب جدة سنوياً — هل عزلي يتحمل؟', answer: 'SBS طبقتين + ميول صحيحة (2% minimum) + تصريف نظيف: يتحمل 50+ مم/ساعة. بدون ميول: الماء يتجمع ← ضغط هيدروستاتيكي ← يخترق أي عزل مع الوقت.' },
    ],
    expertTips: [
        'يحمي SBS طبقتين من سيول 50+ مم/ساعة — مرونته تتحمل حركة التربة الطينية.',
        'Closed-Cell فقط في جدة: Open-Cell يمتص رطوبة 80% ← يُنبت عفناً.',
        'ميول 2% minimum: بدون ميول = ماء راكد = ضغط هيدروستاتيكي = اختراق.',
        'Anti-Fungal Coating: يحيِّد Stachybotrys على السطح في رطوبة جدة.',
        'نظّف تصريف السطح قبل موسم السيول (أكتوبر): انسداد = فيضان.',
    ],
    warnings: [
        'APP في جدة = يتشقق بعد 2-3 سنوات — حركة تربة طينية تُحركه.',
        'Open-Cell في رطوبة 80% = إسفنج مشبع ← عفن + فقدان عزل.',
        'بدون ميول: ماء راكد يخترق أي عزل مع الوقت.',
    ],
    trustAnchors: [
        { ...GOV.SBC, role: 'كود SBC 602 — عزل مائي للأسطح' },
        { ...GOV.MOENERGY, role: 'كفاءة طاقة — شهادة' },
        { entity: AMANA.JEDDAH.entity, url: AMANA.JEDDAH.url, role: 'اشتراطات أمانة جدة' },
    ],
    expertReviewer: EXPERTS.ALJUND,
    expertCitations: [
        { expert: EXPERTS.ALJUND.name, quote: 'في جدة: العزل المائي أولاً. سيول + رطوبة + تربة طينية. APP يفشل — SBS الخيار. Open-Cell يمتص الرطوبة — Closed-Cell فقط. كل مادة لها مدينتها.', source: 'موسوعة أخطاء في البناء — عزل المناطق الساحلية' },
    ],
    saudiRegulations: [REGULATIONS.SBC_602],
    verificationBadges: [
        { badge: '✔️ SBS طبقتين', authority: 'مرن مائي', icon: 'shield-check' },
        { badge: '✔️ Closed-Cell', authority: 'لا يمتص', icon: 'badge-check' },
    ],
    equipment: [
        { name: 'SBS Modified Bitumen', use: 'عزل مائي مرن — يتحمل حركة + سيول 50+ مم' },
        { name: 'Closed-Cell SPF 35+ kg', use: 'عزل حراري — لا يمتص رطوبة 80%' },
        { name: 'Anti-Fungal Coating', use: 'يحيِّد Stachybotrys على السطح' },
    ],
    counterNarratives: [
        { myth: 'APP أرخص = أفضل.', truth: 'APP صلب = يتشقق في 2-3 سنوات. SBS أغلى 15% لكنه يدوم 3× أطول.' },
        { myth: 'العزل الحراري أهم.', truth: 'في جدة: المائي يمنع كوارث. الحراري يوفر 15-25%. الأولوية: المائي.' },
    ],
    relatedServices: [
        { slug: 'foam-insulation', context: 'Closed-Cell', priority: 1 },
        { slug: 'water-insulation', context: 'مائي', priority: 2 },
        { slug: 'thermal-insulation', context: 'حراري', priority: 3 },
        { slug: 'tank-insulation', context: 'خزان', priority: 4 },
        { slug: 'water-leak-detection', context: 'تسربات', priority: 5 },
        { slug: 'sewage-unblocking', context: 'مجاري', priority: 6 },
        { slug: 'pesticide-spraying', context: 'رطوبة + حشرات', priority: 7 },
    ],
};
