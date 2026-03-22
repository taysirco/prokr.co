import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../gov-references';

export const override: PageOverride = {
    meta: {
        title: 'عزل فوم بالرياض — SPF Closed-Cell يوفر 35-40% + UV يفتت Open-Cell + 60°م تفاوت يومي (2026)',
        description: 'عزل فوم الرياض. Closed-Cell R-Value 6.5/إنش. Open-Cell يمتص مطر. UV يفتت مكشوف. 60°م تفاوت. SBC 601 إلزامي. توفير 35-40%. من 40 ريال/م².',
        h1: 'عزل فوم بالرياض — Closed-Cell الخيار الوحيد المقبول',
        keywords: ['عزل فوم بالرياض', 'فوم بولي يوريثان', 'SPF', 'Closed-Cell', 'توفير كهرباء'],
    },
    content: {
        introduction: 'في الرياض: نوع الفوم يحدد نجاح أو فشل العزل. النوعان مختلفان جذرياً. Open-Cell (مفتوح الخلايا): R-Value 3.5/إنش فقط. يمتص الماء كالإسفنجة — أول مطرة (ولو نادرة في الرياض) تُفسد عزله. ناعم — لا يتحمل ضغط الرياح أو المشي على السطح. Closed-Cell (مغلق الخلايا): R-Value 6.5/إنش (ضعف تقريباً). لا يمتص ماء — عزل مائي + حراري بطبقة واحدة. صلب — يتحمل حركة على السطح. لكن حتى Closed-Cell يفشل بدون UV Coating. الأشعة فوق البنفسجية (UV) في الرياض أشد من المدن الساحلية (رطوبة 10-15% = أقل فلترة جوية). UV يكسر البوابات الجزيئية (Polymer Chain Scission) في البولي يوريثان ← اصفرار ← تقشّر ← تفتت. بدون UV Coat: سنتان فقط. والكثافة مهمة: 35+ كجم/م³ لتحمّل التفاوت 60°م (75°→15°) بدون انضغاط حراري. 30 كجم الرخيصة: تفقد 10-15% سمكها مع التمدد/الانكماش = تفقد عزلها.',
        shortAnswer: 'على عكس [Open-Cell رخيص يمتص الماء ويعزل نصف العزل] الذي يُهدر الاستثمار بأول مطرة، يعتمد بروتوكولنا الهندسي في خدمة [عزل الفوم] بمدينة [الرياض] على استخدام [Closed-Cell 35+ كجم + UV Coating + Ceramic]. ففي ظل [75°م سطح + UV أشد من الساحل + 60°م تفاوت يومي]، تتفاقم ظاهرة [تفتت UV + انضغاط حراري + امتصاص مطر]. لذا؛ يتدخل خبراؤنا عبر [يغلف Closed-Cell بدون فواصل ← يحيِّد UV Coat الأشعة ← تُعاير الكثافة 35+ لـ 60°م] لمعالجة المشكلة من جذورها، مع شهادة SBC 601.',
        heroSubtitle: 'Open-Cell = نصف العزل + يمتص الماء. Closed-Cell = ضعف العزل + يطرد الماء.',
    },
    pricing: [
        { type: 'Closed-Cell 35+ كجم (3 سم) + UV Coat', unit: 'م²', minPrice: 40, maxPrice: 65, time: '1-2 يوم' },
        { type: 'Closed-Cell 35+ (5 سم) + UV + Ceramic', unit: 'م²', minPrice: 55, maxPrice: 85, time: '1-2 يوم' },
        { type: 'نظام كامل (Closed-Cell + UV + SBS)', unit: 'م²', minPrice: 70, maxPrice: 105, time: '2-3 أيام' },
        { type: 'تجديد UV Coat', unit: 'م²', minPrice: 10, maxPrice: 18, time: '1 يوم' },
    ],
    faq: [
        { question: 'Closed-Cell ولا Open-Cell — إيش الفرق الحقيقي؟', answer: 'Closed-Cell: كل خلية مغلقة ← لا يمتص ماء ← R-Value 6.5/إنش ← صلب. Open-Cell: خلايا متصلة كالإسفنج ← يمتص ماء ← R-Value 3.5/إنش فقط ← ناعم. في الرياض: Closed-Cell هو الخيار الوحيد المقبول.' },
        { question: 'كم التوفير في فاتورة الكهرباء؟', answer: '35-40% تبريد × 8 أشهر = 10,000-14,000 ريال/سنة لفيلا 300م². يسترد خلال سنتين. أعلى ROI في السعودية بسبب طول موسم الحر.' },
        { question: 'ليش UV في الرياض أشد من جدة رغم إن جدة أحر شعورياً؟', answer: 'جدة رطوبة 70-80% = الجزيئات المائية تمتص جزءاً من UV. الرياض 10-15% = هواء جاف نظيف = UV يصل السطح بكامل قوته. 15-20% UV إضافي مقارنة بالساحل.' },
        { question: 'منافسين يرشون 30 كجم — ليش أنتم 35+؟', answer: '30 كجم في تفاوت 60°م: الانضغاط الحراري يُفقده 10-15% سمكه ← يفقد R-Value ← يفقد توفيره. 35+ كجم يقاوم الانضغاط. فرق 5-10 ريال/م² لكن يحافظ على الأداء 15+ سنة.' },
        { question: 'SBC 601 — 5 سم إلزامي؟', answer: 'SBC 601 يشترط R-Value محدد وليس سمكاً بالضبط. لكن عملياً: 5 سم Closed-Cell (R-32.5) يُلبّي متطلبات المنطقة 1 (الرياض). 3 سم (R-19.5) قد لا يكفي.' },
    ],
    expertTips: [
        'يغلف Closed-Cell السطح بدون فواصل — R-Value 6.5/إنش = ضعف Open-Cell = ضعف التوفير.',
        'يحيِّد UV Coating الأشعة — يمنع Polymer Chain Scission ويُمدّد العمر من سنتين إلى 15+.',
        'كثافة 35+ كجم/م³: تقاوم الانضغاط في 60°م. 30 كجم تفقد سمكها = تفقد عزلها.',
        'ارش في الشتاء (15-25°م): أفضل التصاق. صيفاً (50°م): تفاعل سريع غير متساوٍ.',
        'Ceramic Overcoat فوق UV = حماية مزدوجة: يعكس 80% حرارة + يحمي من UV.',
    ],
    warnings: [
        'Open-Cell على سطح في الرياض: يمتص أول مطرة ← يفقد عزله ← استبدال كامل.',
        'فوم مكشوف بدون UV: يتفتت خلال سنتين — تتبخر 35-40% من التوفير.',
        '30 كجم في 60°م تفاوت: ينضغط ← يفقد سمكه ← يفقد 15-20% من R-Value.',
    ],
    trustAnchors: [
        { ...GOV.SBC, role: 'كود SBC 601 — سمك الفوم ومعامل التوصيل الإلزامي' },
        { ...GOV.MOENERGY, role: 'كفاءة الطاقة — شهادة مطابقة' },
        { entity: AMANA.RIYADH.entity, url: AMANA.RIYADH.url, role: 'اشتراطات أمانة الرياض' },
    ],
    expertReviewer: EXPERTS.ALJUND,
    expertCitations: [
        { expert: EXPERTS.ALJUND.name, quote: 'فوم SPF بدون UV Coating في مناخ الرياض = عزل مؤقت. سنتان ثم يتفتت. UV Coat ليس اختيارياً — هو شرط بقاء الفوم.', source: 'موسوعة أخطاء في البناء — الفصل الخامس: عيوب العزل' },
    ],
    saudiRegulations: [REGULATIONS.SBC_601],
    verificationBadges: [
        { badge: '✔️ Closed-Cell 35+ كجم', authority: 'مقاوم حرارة + ماء', icon: 'shield-check' },
        { badge: '✔️ SBC 601', authority: 'كود البناء', icon: 'badge-check' },
    ],
    equipment: [
        { name: 'SPF Closed-Cell (35+ kg/m³)', use: 'فوم مغلق الخلايا — R-Value 6.5/إنش — عزل حراري + مائي بطبقة واحدة بدون فواصل' },
        { name: 'UV Protective Coating', use: 'يحيِّد Polymer Chain Scission — يمنع تفتت الفوم تحت أشعة الرياض المباشرة' },
        { name: 'Ceramic Overcoat', use: 'يعكس 80% حرارة شمسية + يحمي UV Coat + حماية إضافية' },
    ],
    commonConcerns: [
        { concern: 'Closed-Cell أغلى 30% من Open-Cell.', solution: 'Open-Cell يفشل بأول مطرة = خسارة كاملة. Closed-Cell: 15+ سنة. التكلفة الفعلية: Closed-Cell أرخص 3× على مدى 15 سنة.' },
    ],
    consumerEducation: [
        { myth: 'أي فوم يعزل بنفس الكفاءة.', truth: 'Open-Cell R-3.5. Closed-Cell R-6.5. ضعف الكفاءة. Open-Cell يمتص ماء = يفقد R-Value. الاسم فوم — الأداء مختلف جذرياً.' },
        { myth: 'UV Coat اختياري.', truth: 'في الرياض: إلزامي. 10+ ساعات شمس × رطوبة 10% = UV أشد 20%. بدون Coat: الفوم ينتهي في سنتين.' },
    ],
    relatedServices: [
        { slug: 'roof-insulation', context: 'SBS تحت الفوم', priority: 1 },
        { slug: 'thermal-insulation', context: 'عزل حراري شامل', priority: 2 },
        { slug: 'water-insulation', context: 'عزل مائي', priority: 3 },
        { slug: 'tank-insulation', context: 'خزان السطح', priority: 4 },
        { slug: 'water-leak-detection', context: 'تسربات', priority: 5 },
        { slug: 'sewage-unblocking', context: 'كلس يسد', priority: 6 },
        { slug: 'pesticide-spraying', context: 'حشرات', priority: 7 },
    ],
};
