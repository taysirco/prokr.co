import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف مكاتب بالخبر — NaCl يُصدّئ الأجهزة + 85-95% عفن مكتبي + Biofilm شاشات + تكثّف (2026)',
        description: 'تنظيف مكاتب الخبر. NaCl يُصدّئ أجهزة الحاسب. 85-95% عفن زوايا + خزائن. Biofilm على شاشات. تكثّف أجهزة. RO + Anti-Corrosion + Anti-Fungal + Dehumidifier.',
        h1: 'تنظيف مكاتب بالخبر — الملح يُصدّئ والرطوبة تُعفّن والشاشات تُبلفم',
        keywords: ['تنظيف مكاتب بالخبر', 'تنظيف مكتب الخبر', 'شركة تنظيف مكاتب بالخبر'],
    },
    content: {
        introduction: 'المكتب في الخبر يواجه 3 تحديات ساحلية تؤثر على الإنتاجية. الأولى — NaCl يُصدّئ الأجهزة: رذاذ بحري يترسب على أجهزة الحاسب والطابعات ← NaCl Hygroscopic يمتص رطوبة ← Galvanic Corrosion على الدوائر ← Short Circuit أو أداء ضعيف. Anti-Corrosion + فلتر NaCl. الثانية — 85-95% عفن مكتبي: أعلى رطوبة = عفن في زوايا النوافذ + خزائن ملفات + خلف الأرفف + سقف مُعلّق. Anti-Fungal + Dehumidifier. الثالثة — Biofilm على شاشات: 85-95% + NaCl على الشاشات = Biofilm بكتيري (غشاء لزج). المسح بالماء يُوزّعه. Anti-Biofilm + Microfiber جاف.',
        shortAnswer: 'على عكس [ممسحة + منظف] الذي يُوزّع NaCl ويُغذي العفن، يعتمد بروتوكولنا في خدمة [تنظيف المكاتب] بمدينة [الخبر] على [RO + Anti-Corrosion + Anti-Fungal + Anti-Biofilm]. ففي ظل [NaCl + 85-95% + Biofilm]، تتفاقم ظاهرة [صدأ + عفن + غشاء]. لذا؛ يتدخل خبراؤنا عبر [بروتوكول مكتب ساحلي].',
        heroSubtitle: 'NaCl صدأ أجهزة + 85-95% عفن مكتبي + Biofilm شاشات',
    },
    pricing: [
        { type: 'مكتب صغير (50 م²)', unit: 'خدمة', minPrice: 140, maxPrice: 280, time: '1-2 ساعة' },
        { type: 'مكتب كبير (100+ م²)', unit: 'خدمة', minPrice: 280, maxPrice: 550, time: '2-4 ساعات' },
        { type: 'Anti-Corrosion أجهزة', unit: 'جهاز', minPrice: 25, maxPrice: 50, time: '10-15 دقيقة' },
        { type: 'عقد أسبوعي (4 زيارات/شهر)', unit: 'شهر', minPrice: 450, maxPrice: 900, time: '4 زيارات' },
    ],
    faq: [
        { question: 'NaCl يُصدّئ الحاسب — حقاً؟', answer: 'Galvanic Corrosion: NaCl + رطوبة + معادن مختلفة (نحاس + ألمنيوم) = تآكل. في 85-95%: أسرع 3-5× من الرياض. حاسب بدون حماية = مشاكل خلال أشهر.' },
        { question: 'عفن في المكتب — مو بس البيت؟', answer: '85-95% = عفن في كل مكان. زوايا نوافذ المكتب + خزائن ملفات مُغلقة + سقف مُعلّق = مواقع مثالية. الموظفون يستنشقون جراثيم 8 ساعات.' },
        { question: 'Biofilm على الشاشات — مش بس أوساخ؟', answer: 'Biofilm = غشاء بكتيري حي. NaCl + رطوبة على الشاشة = بيئة نمو. المسح بقماش رطب = يُفرشها فقط. Anti-Biofilm = يقتلها. Microfiber جاف = يرفعها.' },
        { question: 'Dehumidifier في المكتب — كبير؟', answer: 'مكتبي 20-40 م² = Dehumidifier محمول صغير. يُخفض 85-95% ← 55-65% = يمنع عفن + يحمي أجهزة. 500-1,500 ريال جهاز + 20-40 ريال/شهر كهرباء.' },
        { question: 'كم مرة بالأسبوع؟', answer: 'أرضيات: يومي (RO + تجفيف). أجهزة: شهري (Anti-Corrosion). شاشات: أسبوعي. عقد أسبوعي = يُغطي أرضيات + شاشات.' },
    ],
    expertTips: [
        'RO Water فقط لمسح الأرضيات والمكاتب — ماء الخبر = NaCl = تلويث كل سطح.',
        'Anti-Corrosion Spray شهري على أجهزة الحاسب — يحمي من NaCl + 85-95%.',
        'Anti-Biofilm على الشاشات أسبوعياً — يمنع غشاء بكتيري.',
        'Dehumidifier في كل مكتب — يُقلل عفن + يُحسّن أداء الأجهزة.',
        'فتح خزائن الملفات 15 دقيقة يومياً — يمنع عفن الداخل المُغلق.',
    ],
    warnings: [
        'NaCl على دوائر حاسب + 85-95% = Galvanic Corrosion = Short Circuit = تلف 2,000-10,000 ريال. Anti-Corrosion = 25-50 ريال.',
        'عفن مكتبي 85-95% = جراثيم 8 ساعات/يوم = حساسية + ربو مهني. Anti-Fungal = حماية صحية.',
        'مسح شاشات بماء الخبر = NaCl + Biofilm = أسوأ. Microfiber جاف + Anti-Biofilm = الحل.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص التنظيف التجاري' },
        { entity: AMANA.SHARQIA.entity, url: AMANA.SHARQIA.url, role: 'اشتراطات المكاتب بالشرقية' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALJUND.name, quote: 'مكتب الخبر = ساحلي: NaCl Galvanic Corrosion على الأجهزة + عفن 85-95% في الزوايا + Biofilm شاشات. RO + Anti-Corrosion + Anti-Fungal + Anti-Biofilm = بروتوكول إنتاجية.', source: 'موسوعة أخطاء — بيئات العمل الساحلية' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [
        { badge: '✔️ تنظيف مكاتب مرخص', authority: 'منصة بلدي', icon: 'shield-check' },
    ],
    equipment: [
        { name: 'RO Water System', use: 'مسح بصفر NaCl' },
        { name: 'Anti-Corrosion Spray', use: 'يحمي أجهزة الحاسب من Galvanic Corrosion' },
        { name: 'Anti-Fungal Spray', use: 'يمنع عفن زوايا + خزائن' },
        { name: 'Anti-Biofilm + Microfiber', use: 'ينظف شاشات بدون NaCl ولا Biofilm' },
    ],
    hiddenObjections: [
        { fear: 'المكتب نظيف.', solution: 'NaCl لا يُرى. عفن في الزوايا المخفية. Biofilm شفاف. \"نظيف\" = ظاهري.' },
        { fear: 'عاملة المبنى تكفي.', solution: 'بماء الخبر = NaCl. بدون Anti-Biofilm = Biofilm. بدون Anti-Fungal = عفن. 3 أخطاء.' },
    ],
    consumerEducation: [
        { myth: 'مكتب الخبر مثل الرياض.', truth: 'NaCl + 85-95% + Biofilm = 3 تحديات لا توجد في الرياض.' },
        { myth: 'تكييف يكفي.', truth: 'المكيف نفسه = عفن Evaporator + NaCl Condenser. جزء من المشكلة.' },
        { myth: 'شهري.', truth: 'NaCl يومي + Biofilm أسبوعي + عفن مستمر. أسبوعي = الأمثل.' },
    ],
    relatedServices: [
        { slug: 'cleaning', context: 'تنظيف — ساحلي', priority: 1 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف — عفن + NaCl', priority: 2 },
        { slug: 'carpet-cleaning', context: 'موكيت — NaCl + عث', priority: 3 },
        { slug: 'glass-facades-cleaning', context: 'واجهات — NaCl', priority: 4 },
        { slug: 'pest-control', context: 'حشرات — صراصير رطوبة', priority: 5 },
        { slug: 'steam-cleaning', context: 'بخار — تعقيم', priority: 6 },
        { slug: 'hourly-cleaning', context: 'بالساعة — يومي', priority: 7 },
    ],
};
