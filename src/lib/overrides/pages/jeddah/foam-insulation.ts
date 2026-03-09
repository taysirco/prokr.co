import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'عزل فوم بجدة — Closed-Cell فقط + Open-Cell يمتص 80% رطوبة + Anti-Fungal إلزامي (2026)',
        description: 'عزل فوم جدة. Closed-Cell فقط. Open-Cell يمتص. R-Value 6.5. Anti-Fungal Coat. SBC 601. من 45 ريال/م².',
        h1: 'عزل فوم بجدة — Open-Cell يتحول لإسفنج في رطوبة 80%',
        keywords: ['عزل فوم بجدة', 'Closed-Cell', 'فوم بولي يوريثان', 'عزل رطوبة'],
    },
    content: {
        introduction: 'في جدة: نوع الفوم = نجاح أو فشل العزل. والفرق بين Riyadh و Jeddah: في الرياض يفشل Open-Cell بأول مطرة (نادرة). في جدة: يفشل من الهواء نفسه. رطوبة 80% = كمية ماء في الجو تكفي لتشبيع Open-Cell بدون مطرة واحدة. Open-Cell (مفتوح الخلايا): خلايا متصلة كالإسفنج ← يمتص الرطوبة من الجو ← يفقد R-Value ← عفن ينمو داخله. بعد 6-12 شهر في جدة: إسفنج مشبع بالماء + عفن. Closed-Cell (مغلق): كل خلية مختومة ← لا يمتص ← R-Value 6.5/إنش ← عزل حراري + مائي. لكن في جدة حتى Closed-Cell يحتاج إضافات: Anti-Fungal Coating (مضاد فطري) على السطح يمنع Stachybotrys من النمو فوق الفوم. UV Coating أقل أهمية من الرياض (UV أقل بسبب الرطوبة العالية = فلترة جوية أكثر) لكنه مطلوب. والكثافة: 40+ كجم في جدة (أعلى من 35 كجم الرياض) لمقاومة الرطوبة والملح البحري.',
        shortAnswer: 'على عكس [Open-Cell يمتص 80% رطوبة ويتحول لإسفنج عفن] الذي يفشل من الهواء بدون مطر، يعتمد بروتوكولنا في [عزل الفوم] بـ[جدة] على [Closed-Cell 40+ كجم + Anti-Fungal Coat + UV]. ففي ظل [80% رطوبة + ملح بحري + Stachybotrys]، تتفاقم ظاهرة [امتصاص + عفن + تآكل]. لذا؛ يتدخل خبراؤنا عبر [يغلف Closed-Cell بدون فواصل ← يحيِّد Anti-Fungal العفن ← يحمي UV السطح].',
        heroSubtitle: 'في الرياض: Open-Cell يفشل بالمطر. في جدة: يفشل من الهواء.',
    },
    pricing: [
        { type: 'Closed-Cell 40+ كجم (5 سم) + Anti-Fungal + UV', unit: 'م²', minPrice: 60, maxPrice: 95, time: '1-2 يوم' },
        { type: 'Closed-Cell + SBS تحته', unit: 'م²', minPrice: 80, maxPrice: 120, time: '2-3 أيام' },
        { type: 'تجديد Anti-Fungal Coating', unit: 'م²', minPrice: 12, maxPrice: 20, time: '1 يوم' },
    ],
    faq: [
        { question: 'Open-Cell يفشل من الهواء بدون مطر؟', answer: 'نعم. 80% رطوبة = 16-20 غ ماء/م³ هواء. خلايا Open-Cell المفتوحة تمتص هذا الماء من الجو. بعد أشهر: مشبع. R-Value ينخفض 50%+. عفن ينمو داخله.' },
        { question: 'ليش 40+ كجم وليس 35 مثل الرياض؟', answer: '35 كجم مقبول في الرياض الجاف. في جدة: الملح البحري + الرطوبة يهاجمان الخلايا الأضعف. 40+ كجم = خلايا أكثف ← مقاومة أعلى.' },
        { question: 'Anti-Fungal Coating ضروري؟', answer: 'في جدة: نعم إلزامي. Stachybotrys ينمو على أي سطح في 80% رطوبة — حتى سطح Closed-Cell. Anti-Fungal يمنع النمو. بدونه: عفن على الفوم = تلف تجميلي + صحي.' },
        { question: 'UV Coating أقل أهمية من الرياض؟', answer: 'الرياض: 10% رطوبة = UV يصل بقوة كاملة. جدة: 80% = جزيئات الماء تمتص 15-20% من UV. UV Coating مطلوب لكن أقل حرجاً من Anti-Fungal.' },
        { question: 'كم التوفير بجدة مقارنة بالرياض؟', answer: 'أقل: 15-25% (Latent Load من الرطوبة لا يُعالجها العزل). لكن منع أضرار السيول + العفن = التوفير الحقيقي (عشرات الآلاف).' },
    ],
    expertTips: [
        'Closed-Cell 40+ كجم: يقاوم ملح + رطوبة جدة. 35 كجم الرياض لا يكفي هنا.',
        'Anti-Fungal إلزامي: يحيِّد Stachybotrys الذي ينمو على أي سطح في 80%.',
        'SBS تحت الفوم: حزام أمان مائي مزدوج — ضروري لسيول جدة.',
        'في جدة: الفوم يعزل حرارياً. SBS يعزل مائياً. النظامان معاً = الحماية الكاملة.',
        'تجديد Anti-Fungal كل 3-5 سنوات.',
    ],
    warnings: [
        'Open-Cell في جدة: يتشبع من الهواء خلال أشهر ← إسفنج عفن.',
        '35 كجم في ملح بحري: خلايا أضعف تنفتح ← تفقد خصائص Closed-Cell.',
        'بدون Anti-Fungal: Stachybotrys على الفوم خلال أسابيع.',
    ],
    trustAnchors: [
        { ...GOV.SBC, role: 'SBC 601 — معامل التوصيل' },
        { entity: AMANA.JEDDAH.entity, url: AMANA.JEDDAH.url, role: 'اشتراطات أمانة جدة' },
    ],
    expertReviewer: EXPERTS.ALJUND,
    expertCitations: [
        { expert: EXPERTS.ALJUND.name, quote: 'Open-Cell في جدة = كارثة مؤجلة. يمتص الرطوبة من الجو بدون مطر. Closed-Cell 40+ كجم + Anti-Fungal = الخيار الوحيد.', source: 'أخطاء في البناء — عزل الساحل' },
    ],
    saudiRegulations: [REGULATIONS.SBC_601],
    verificationBadges: [
        { badge: '✔️ Closed-Cell 40+', authority: 'مقاوم رطوبة', icon: 'shield-check' },
    ],
    equipment: [
        { name: 'Closed-Cell SPF 40+ kg/m³', use: 'مغلق الخلايا — لا يمتص رطوبة 80%' },
        { name: 'Anti-Fungal Coating', use: 'يحيِّد Stachybotrys على السطح' },
        { name: 'SBS Modified Bitumen', use: 'حزام مائي تحت الفوم — سيول' },
    ],
        hiddenObjections: [
        { fear: 'العزل مكلف — مش متأكد يستاهل.', solution: 'عزل SBC 601 يوفر 30-40% كهرباء سنوياً. يسترد تكلفته خلال 2-3 سنوات.' },
    ],

    counterNarratives: [
        { myth: 'أي فوم يعزل.', truth: 'Open-Cell يفشل من الهواء في جدة. Closed-Cell 40+ = الوحيد المقبول.' },
        { myth: 'UV أهم من Anti-Fungal.', truth: 'في جدة: العفن أخطر من UV (الرطوبة تفلتر UV طبيعياً). Anti-Fungal = الأولوية.' },
    ],
    relatedServices: [
        { slug: 'roof-insulation', context: 'SBS تحت', priority: 1 },
        { slug: 'water-insulation', context: 'مائي', priority: 2 },
        { slug: 'thermal-insulation', context: 'حراري', priority: 3 },
        { slug: 'tank-insulation', context: 'خزان', priority: 4 },
        { slug: 'water-leak-detection', context: 'تسربات', priority: 5 },
    
        { slug: 'cleaning', context: 'خدمة مكملة — باقة شاملة.', priority: 6 },
        { slug: 'bathroom-leak-detection', context: 'كشف تسربات حمامات — الرطوبة تقلل فعالية العزل.', priority: 8 }
    ],
};
