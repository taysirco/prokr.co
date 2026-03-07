import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'جلي رخام بجازان — Biological Etching عفن حمض + Salt Crystallization + Moss على الخارجي (2026)',
        description: 'جلي رخام جازان. 80% رطوبة = عفن يُفرز حمض أوكساليك ← Etching كيميائي. ملح بحري يتبلور داخل المسام = Spalling. طحالب/أشنات على الرخام الخارجي. Anti-Fungal Sealer.',
        h1: 'جلي رخام بجازان — العفن يأكل والملح يُفجّر والأشنات تُغطّي',
        keywords: ['جلي رخام بجازان', 'جلي رخام جازان', 'شركة جلي رخام بجازان'],
    },
    content: {
        introduction: 'الرخام في جازان يتعرض لثلاث آليات تلف بيولوجية وكيميائية لا تحدث في المدن الجافة. الآلية الأولى — Biological Etching (عفن يأكل الرخام): 80% رطوبة = عفن ينمو مباشرة على سطح الرخام. Aspergillus niger يُفرز أحماض عضوية (Oxalic Acid) ← الحمض يُذيب CaCO₃ (الرخام) = Etching كيميائي بيولوجي. في تبوك: الإتشينج من ثلج. في جازان: الإتشينج من عفن — أبطأ لكن مستمر 24/7. الحل: Anti-Fungal Sealer (يمنع العفن من النمو على السطح). الآلية الثانية — Salt Crystallization Pressure: هواء البحر الأحمر يحمل NaCl + MgCl₂. يستقر على الرخام (مسامي) ← يمتص الرطوبة ← عند تشغيل المكيف (المنزل يجف لـ 50-60%): الملح يتبلور داخل المسام ← ضغط Crystallization ← يُفجّر المسام من الداخل (Sub-Surface Spalling). لا يُرى حتى يتقشر. الآلية الثالثة — أشنات/طحالب على الرخام الخارجي (Biological Growth): رخام المداخل والأدراج والحدائق: 80% + ضوء + رطوبة = طحالب + أشنات (Lichen) + Moss تنمو. الجذور تخترق المسام ← تُفتت. الحل: ضغط ماء + Biocide + Anti-Moss Sealer.',
        shortAnswer: 'على عكس [جلي ميكانيكي فقط] الذي يتجاهل العفن والملح والأشنات، يعتمد بروتوكولنا في خدمة [جلي الرخام] بمدينة [جازان] على [Anti-Fungal Sealer + Desalination + Biocide]. ففي ظل [عفن يأكل + ملح يُفجّر + أشنات تُغطّي]، الجلي الجازاني = كيميائي + بيولوجي.',
        heroSubtitle: '3 آليات بيولوجية: عفن يأكل + ملح يُفجّر + أشنات تُغطّي',
    },
    pricing: [
        { type: 'جلي رخام داخلي + Anti-Fungal Sealer', unit: 'م²', minPrice: 18, maxPrice: 35, time: '1-2 يوم' },
        { type: 'جلي + Desalination (أحياء ساحلية)', unit: 'م²', minPrice: 25, maxPrice: 45, time: '2-3 أيام' },
        { type: 'رخام خارجي — Biocide + Anti-Moss', unit: 'م²', minPrice: 15, maxPrice: 30, time: '1-2 يوم' },
    ],
    faq: [
        { question: 'الرخام فيه بقع صفراء — ليش؟', answer: 'Aspergillus niger يُفرز Oxalic Acid ← يُذيب CaCO₃ ← بقعة Etching. ليست وسخ — تآكل كيميائي. Diamond Pads تُزيل الطبقة المتآكلة ← Anti-Fungal Sealer يمنع التكرار.' },
        { question: 'الرخام يتقشر من الداخل — إيش السبب؟', answer: 'Salt Crystallization Pressure: ملح البحر يدخل المسام ← عند التجفيف (مكيف) يتبلور ← يتمدد ← يُفجّر المسام من الداخل. Desalination (كمّادات سحب ملح) ← ثم Sealer يمنع الملح من الدخول مجدداً.' },
        { question: 'طحالب خضراء على رخام المدخل — خطيرة؟', answer: 'نعم — الجذور تخترق المسام ← تُفتت الرخام. + الأشنات (Lichen) أسوأ — تُنتج أحماض. ضغط ماء يُزيل السطحي ← Biocide يقتل الجذور ← Anti-Moss Sealer يمنع العودة.' },
    ],
    expertTips: [
        'Anti-Fungal Sealer (ليس Sealer عادي) — Sealer عادي لا يمنع العفن. Anti-Fungal = يمنع النمو البيولوجي.',
        'Desalination كمّادات كل 6 أشهر — تسحب الملح من المسام قبل أن يتبلور.',
        'Biocide على الرخام الخارجي كل 3 أشهر — الطحالب تعود سريعاً في 80%.',
        'لا Acidic Cleaner على رخام جازان — السطح مُتآكل (Etched) بالعفن. الحمض يزيد.',
    ],
    warnings: [
        'Sealer عادي على رخام مُعفّن = يحبس العفن داخل المسام ← يستمر الـ Etching. Anti-Fungal Sealer = يقتل أولاً.',
        'رخام خارجي بدون Biocide في جازان = أشنات خلال أسابيع ← تفتت المسام.',
    ],
    trustAnchors: [{ ...GOV.BALADI, role: 'ترخيص شركات الجلي والتلميع' }],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALJUND.name, quote: 'رخام جازان يتعرض لـ Biological Etching — عفن يُفرز حمض يأكل CaCO₃. + Salt Crystallization يُفجّر المسام. + أشنات تُفتت الخارجي. بروتوكول بيولوجي-كيميائي = الحل.', source: 'موسوعة أخطاء في البناء — الأحجار الطبيعية في المناخ الاستوائي' },
    ],
    saudiRegulations: [REGULATIONS.SBC_601],
    verificationBadges: [{ badge: '✔️ جلي رخام مرخص', authority: 'بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'Diamond Pads متدرجة', use: 'تُزيل طبقة الـ Etching البيولوجية — تُعيد اللمعان' },
        { name: 'Anti-Fungal Sealer', use: 'يمنع العفن من النمو على الرخام — يحمي من Oxalic Acid Etching' },
        { name: 'Desalination Poultice', use: 'كمّادات تسحب NaCl/MgCl₂ من المسام — تمنع Salt Spalling' },
        { name: 'Biocide + Anti-Moss', use: 'يقتل طحالب/أشنات الرخام الخارجي + يمنع العودة' },
    ],
    hiddenObjections: [
        { fear: 'جلي يكفي بدون Sealer.', solution: 'بدون Anti-Fungal Sealer: العفن يعود خلال أسابيع ← Etching يعود. الجلي بدون Sealer = 25% من الحل.' },
    ],
    counterNarratives: [
        { myth: 'رخام لا يتأثر بالرطوبة.', truth: 'الرخام = CaCO₃ = مسامي. 80% رطوبة = عفن + ملح + طحالب. 3 آليات تتآكل من الداخل والخارج.' },
    ],
    relatedServices: [
        { slug: 'cleaning', context: 'تنظيف — المنزل كاملاً', priority: 1 },
        { slug: 'glass-facades-cleaning', context: 'واجهات — نفس ملح + طحالب', priority: 2 },
        { slug: 'villas-cleaning', context: 'فلل — رخام الفيلا', priority: 3 },
        { slug: 'swimming-pool-cleaning', context: 'مسابح — رخام حول المسبح', priority: 4 },
        { slug: 'steam-cleaning', context: 'بخار — تعقيم بعد الجلي', priority: 5 },
    ],
};
