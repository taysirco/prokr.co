import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'عزل فوم بمكة المكرمة — UV أشد 15% يُفتت خلال 18 شهراً + وديان 70°م + Closed-Cell فقط (2026)',
        description: 'عزل فوم مكة. UV أشد من الرياض 15%. Polymer Chain Scission أسرع. Closed-Cell 35+ كجم. UV Coat نفس اليوم إلزامي. SBC 601. من 55 ريال/م².',
        h1: 'عزل فوم بمكة — UV الأشد في الحجاز يُفتت فوم مكشوف خلال 18 شهراً',
        keywords: ['عزل فوم بمكة', 'Closed-Cell مكة', 'SPF', 'UV Coating', 'Polymer Chain Scission'],
    },
    content: {
        introduction: 'اختيار نوع الفوم في مكة مسألة حياة أو تفتت — والسبب: UV الأشد في الحجاز + وديان تحبس 70°م. أولاً: لماذا UV مكة أشد؟ القرب من خط الاستواء (21° شمالاً مقارنة بـ 24° للرياض) + ارتفاع أحياء مكة حتى 400م فوق سطح البحر = أشعة UV تصل بقوة أعلى 10-15%. البولي يوريثان (Polyurethane — مادة الفوم) حساس جداً لـ UV: الأشعة فوق البنفسجية تكسر السلاسل الجزيئية (Polymer Chain Scission) → المادة تتحول تدريجياً من رغوة صلبة عازلة إلى بودرة هشة بدون خصائص عزل. في الرياض: فوم مكشوف يصمد سنتين تقريباً قبل أن يفقد 50% من R-Value. في مكة (UV أشد 15%): 18 شهراً فقط. ثانياً: Closed-Cell فقط وليس Open-Cell. Open-Cell (خلايا مفتوحة): يمتص الرطوبة = فشل عند سيول الوديان. R-Value: 3.5/إنش فقط. Closed-Cell (خلايا مغلقة): لا يمتص. R-Value: 6.5/إنش (ضعف). + يعمل كحاجز مائي بطبقة واحدة. ثالثاً: الكثافة 35+ كجم/م³. في 70°م من وديان مكة: خلايا الفوم منخفض الكثافة تنضغط وتفقد سماكتها (Thermal Compression). 35+ كجم يتحمل الحرارة بدون انضغاط. رابعاً: UV Coating فوري — ليس اختيارياً. في UV مكة: كل ساعة فوم مكشوف = Chain Scission تراكمي. ارش UV Coat نفس يوم الرش — لا تنتظر الغد.',
        shortAnswer: 'على عكس [Open-Cell + بدون UV Coat في أشد UV بالحجاز] الذي يمتص سيول الوديان ويتفتت خلال 18 شهراً، يعتمد بروتوكولنا الهندسي في خدمة [عزل الفوم] بمدينة [مكة المكرمة] على استخدام [Closed-Cell SPF 35+ كجم + UV Protective Coating فوري + SBS تحته]. ففي ظل [UV أشد 15% + وديان 70°م + سيول مركّزة + Thermal Compression]، تتفاقم ظاهرة [تفتت Polymer Chain Scission + انضغاط حراري + امتصاص]. لذا؛ يتدخل خبراؤنا عبر [يغلف Closed-Cell 35+ بدون فواصل ← يحيِّد UV Coat سلاسل الجزيئات فوراً ← يحمي SBS من سيول].',
        heroSubtitle: 'الرياض: فوم مكشوف يصمد سنتين. مكة: 18 شهراً. الفارق = UV أقوى 15%.',
    },
    pricing: [
        { type: 'Closed-Cell 35+ كجم (5 سم) + UV Coat فوري', unit: 'م²', minPrice: 55, maxPrice: 85, time: '1-2 يوم' },
        { type: 'Closed-Cell + SBS تحته (نظام مزدوج)', unit: 'م²', minPrice: 80, maxPrice: 120, time: '2-3 أيام' },
        { type: 'تجديد UV Coating (كل 3-5 سنوات)', unit: 'م²', minPrice: 12, maxPrice: 20, time: '1 يوم' },
        { type: 'Ceramic Overcoat (حماية UV مضاعفة)', unit: 'م²', minPrice: 18, maxPrice: 30, time: '1 يوم' },
    ],
    faq: [
        { question: 'ليش الفوم ينتهي أسرع بمكة — 18 شهر بدل سنتين؟', answer: 'UV مكة أقوى 10-15% من الرياض (خط عرض أقرب + ارتفاع أعلى). Polymer Chain Scission: أشعة UV تكسر السلاسل الجزيئية للبولي يوريثان. كل زيادة 10% UV = تسارع التكسير 15-20%. 18 شهراً = الفوم يفقد 50% R-Value ← بودرة هشة بلا عزل.' },
        { question: 'Open-Cell ينفع يوفر — أرخص؟', answer: 'أرخص = فاشل في مكة. R-Value: 3.5/إنش (مقابل 6.5 لـ Closed-Cell = نصف الأداء). يمتص الرطوبة = يفشل عند أول سيل وادي. + ينضغط في 70°م. Open-Cell صُمم للمناخات المعتدلة — ليس لوديان مكة.' },
        { question: 'UV Coat فوراً — ليه مو بعد يومين؟', answer: 'في UV مكة الأشد: كل ساعة مكشوف = Chain Scission تراكمي غير قابل للعكس. يومان مكشوف = فقدان 2-3% من R-Value نهائياً. ارش UV Coat نفس اليوم — لا "الغد" ولا "نهاية الأسبوع".' },
        { question: '35+ كجم ولا 28 كجم — إيش الفرق العملي؟', answer: '28 كجم: خلايا أقل كثافة ← تنضغط في 70°م (Thermal Compression) ← تفقد 1-2 سم سماكة ← R-Value ينخفض 20-30%. 35+ كجم: خلايا كثيفة تتحمل الحرارة. في وديان مكة: 35+ هو الحد الأدنى المقبول — وليس رقماً اختيارياً.' },
        { question: 'كم التوفير الفعلي من عزل الفوم بمكة؟', answer: 'توفير 35-40% كهرباء. فيلا 300م²: فاتورة صيفية بدون عزل 3,000-5,000/شهر. بعد عزل: 1,800-3,250/شهر. توفير سنوي: 7,200-10,500 ريال. تكلفة عزل سطح 300م²: 16,500-25,500 ريال. يسترد خلال 2-3 سنوات.' },
    ],
    expertTips: [
        'يغلف Closed-Cell 35+ كجم السطح بدون فواصل — R-6.5/إنش يتحمل 70°م وديان مكة بلا انضغاط.',
        'يحيِّد UV Coating الأشعة فوراً — ارشه نفس يوم رش الفوم. كل ساعة تأخير = Chain Scission لا يُعكس.',
        'Ceramic Overcoat فوق UV Coat: حماية مضاعفة — يُطيل العمر لـ 15+ سنة في UV مكة.',
        'SBS تحت الفوم: حزام مائي ضد سيول الوديان — Open-Cell يمتص لكن Closed-Cell + SBS = حماية مزدوجة.',
        'جدّد UV Coat كل 3-5 سنوات: UV مكة أشد = تآكل الطلاء أسرع من الرياض.',
    ],
    warnings: [
        'فوم مكشوف بدون UV Coat في مكة = يتفتت خلال 18 شهراً. Polymer Chain Scission لا يُعكس — تحتاج إعادة رش.',
        'Open-Cell في مكة = فشل مزدوج: يمتص سيول + ينضغط في 70°م. Closed-Cell هو الخيار الوحيد.',
        '28 كجم في 70°م = ينضغط ← يفقد 20-30% R-Value. 35+ كجم = الحد الأدنى.',
    ],
    trustAnchors: [
        { ...GOV.SBC, role: 'SBC 601 — مكة المنطقة 1: R-Value minimum للسطح' },
        { entity: AMANA.MAKKAH.entity, url: AMANA.MAKKAH.url, role: 'اشتراطات العزل في العاصمة المقدسة', acronym: 'أمانة مكة' },
    ],
    expertReviewer: EXPERTS.ALJUND,
    expertCitations: [
        { expert: EXPERTS.ALJUND.name, quote: 'UV مكة أشد من أي مدينة في الحجاز. فوم مكشوف: 18 شهراً حداً أقصى. UV Coat ليس "طلاء تجميلي" — هو الفرق بين عزل يعيش 15 سنة وعزل ينتهي في سنة ونصف.', source: 'موسوعة أخطاء في البناء — عزل المناطق الحارة' },
        { expert: EXPERTS.ALMOHAIMED.name, quote: 'في وديان مكة المحصورة: 70°م على السطح. Closed-Cell 35+ كجم = الحد الأدنى. 28 كجم ينضغط ويفقد سماكته — ضرر تراكمي لا يُلاحظ إلا بعد انهيار العزل.', source: 'جودة التشطيبات — عزل المناخات القاسية' },
    ],
    saudiRegulations: [REGULATIONS.SBC_601],
    verificationBadges: [
        { badge: '✔️ Closed-Cell 35+ كجم', authority: 'يتحمل 70°م وديان', icon: 'shield-check' },
        { badge: '✔️ UV Coat فوري', authority: 'حماية Chain Scission', icon: 'badge-check' },
    ],
    equipment: [
        { name: 'SPF Closed-Cell 35+ kg/m³', use: 'R-Value 6.5/إنش — لا ينضغط في 70°م. حراري + مائي بطبقة واحدة. مقاوم سيول.' },
        { name: 'UV Protective Coating', use: 'يحيِّد Polymer Chain Scission — يُطيل عمر الفوم من 18 شهراً لـ 10-15 سنة.' },
        { name: 'Ceramic Overcoat', use: 'طبقة إضافية تعكس UV + حرارة — مثالية لـ UV مكة الأشد.' },
    ],
    hiddenObjections: [
        { fear: 'Closed-Cell أغلى 30-40% من Open-Cell', solution: 'Open-Cell يمتص + ينضغط + R-Value نصف = تحتاج ضعف السماكة + يفشل عند السيول. Closed-Cell: سماكة أقل + عمر أطول + لا سيول = أرخص على 10 سنوات بـ 40-60%.' },
        { fear: 'UV Coat تكلفة إضافية (12-20 ريال/م²)', solution: 'بدون Coat: فوم ينتهي في 18 شهراً ← إعادة رش كامل (55-85/م²). Coat: 12-20/م² مرة ← الفوم يعيش 10-15 سنة. الحساب: 12/م² × مرة أفضل من 85/م² × 7 مرات.' },
    ],
    counterNarratives: [
        { myth: 'UV Coat اختياري — تجميل', truth: 'في مكة: إلزامي. بدونه: 18 شهراً. معه: 10-15 سنة. ليس تجميلاً — هو حماية وجودية لاستثمارك في الفوم.' },
        { myth: 'Open-Cell أوفر بنصف السعر', truth: 'R-Value نصف ← تحتاج ضعف السماكة لنفس الأداء. + يمتص سيول + ينضغط في 70°م. التكلفة الحقيقية أعلى 2-3× من Closed-Cell على 10 سنوات.' },
        { myth: 'الفوم عزل سحري — ارش وانسى', truth: 'UV Coat يحتاج تجديد كل 3-5 سنوات. فحص سنوي للسماكة. إهمال = تفتت صامت يُلاحظ فقط عندما يرتفع الكهرباء.' },
    ],
    relatedServices: [
        { slug: 'roof-insulation', context: 'SPF + SBS + UV Coat = النظام الكامل', priority: 1 },
        { slug: 'thermal-insulation', context: 'عزل جدران ETICS — Thermal Bridge', priority: 2 },
        { slug: 'water-insulation', context: 'عزل مائي أساسات — سيول وديان', priority: 3 },
        { slug: 'tank-insulation', context: 'عزل خزان — 65°م + Legionella', priority: 4 },
        { slug: 'water-leak-detection', context: 'تسربات — الحرارة تُبخّر', priority: 5 },
        { slug: 'sewage-unblocking', context: 'مجاري — ضغط موسمي', priority: 6 },
        { slug: 'pesticide-spraying', context: 'حشرات — حرارة محبوسة', priority: 7 },
    ],
};
