import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'غسيل سيارات بخميس مشيط — ضباب Fog Spots + أمطار طين + عفن مقصورة 60-85% — أعقد! (2026)',
        description: 'غسيل سيارات خميس مشيط. ضباب Fog Spots. أمطار طين أحمر. 60-85% عفن مقصورة. برد تكثّف. Anti-Fog+Anti-Fungal+تجفيف.',
        h1: 'غسيل سيارات بخميس مشيط — ضباب ومطر وعفن مقصورة',
        keywords: ['غسيل سيارات خميس مشيط', 'غسيل سيارة بخميس مشيط', 'شركة غسيل سيارات خميس مشيط'],
    },
    content: {
        introduction: 'سيارة خميس مشيط تواجه بيئة غسيل جبلية مُعقّدة. أولاً: ضباب 200 يوم/سنة يترك Fog Spots (بقع ضبابية) على الزجاج والطلاء — Anti-Fog Coating بعد كل غسلة. ثانياً: أمطار موسمية غزيرة تُغطي السيارة بطين أحمر عسيري يلتصق بـ Undercarriage. غسل ضغط عالي فوري بعد كل مطر. ثالثاً: 60-85% رطوبة = عفن مقصورة Stachybotrys يتكوّن تحت المقاعد وفي فتحات التهوية خلال 48-72 ساعة. Anti-Fungal للمقصورة إلزامي. رابعاً: برد 0-5°م شتاءً = تكثّف على الزجاج الداخلي ← رطوبة إضافية. Dehumidifier سيارة. مقارنة: عنيزة = لا عفن + Touchless فقط + تجفيف 20 دقيقة. خميس = عفن مقصورة + Anti-Fog + تجفيف ساعة+ = أغلى 25-35%.',
        shortAnswer: 'على عكس [الغسيل الخارجي فقط بدون معالجة المقصورة]، يعتمد بروتوكولنا في خدمة [غسيل السيارات] بمدينة [خميس مشيط] على [Anti-Fog+Anti-Fungal مقصورة+غسل طين+تجفيف]. ففي ظل [ضباب 200 يوم+أمطار طين+60-85%+برد 0°م]، تتفاقم ظاهرة [Fog Spots+طين+عفن مقصورة+تكثّف]. لذا؛ يتدخل فريقنا عبر [طلاء ← غسل ← تعقيم ← تجفيف].',
        heroSubtitle: 'ضباب + أمطار طين + عفن مقصورة — أعقد!',
    },
    pricing: [
        { type: 'خارجي + Anti-Fog', unit: 'سيارة', minPrice: 35, maxPrice: 70, time: '25-35 دقيقة' },
        { type: 'شامل + Anti-Fungal مقصورة', unit: 'سيارة', minPrice: 65, maxPrice: 130, time: '40-60 دقيقة' },
        { type: 'بعد مطر (طين عسيري)', unit: 'سيارة', minPrice: 40, maxPrice: 85, time: '30-40 دقيقة' },
        { type: 'أسبوعي (4 غسلات/شهر)', unit: 'شهر', minPrice: 110, maxPrice: 230, time: '4 غسلات' },
    ],
    faq: [
        { question: 'كيف أمنع عفن مقصورة السيارة بخميس مشيط؟', answer: 'Anti-Fungal كل شهرين + تجفيف كامل بعد كل غسلة. 60-85% = عفن خلال 48-72 ساعة بدون معالجة.' },
        { question: 'ليش الزجاج يتبقّع بخميس مشيط حتى بدون مطر؟', answer: 'ضباب 200 يوم = Fog Spots. رذاذ ناعم يترك بقع عند التبخر. Anti-Fog Coating يمنع.' },
        { question: 'كم تكلفة غسيل سيارة بخميس مقارنة بعنيزة؟', answer: 'أغلى 25-35% — Anti-Fungal مقصورة + تجفيف أطول. عنيزة: لا عفن + 20 دقيقة.' },
        { question: 'هل طين الأمطار يأثر على السيارة؟', answer: 'طين أحمر عسيري لزج يلتصق بـ Undercarriage. لو جف = صعب الإزالة + يحبس رطوبة = صدأ.' },
        { question: 'متى أفضل وقت لغسل السيارة بخميس مشيط؟', answer: 'بعد المطر فوراً (طين). وكل أسبوعين Anti-Fungal مقصورة. ظهراً — ضباب صباحي يخف.' },
    ],
    expertTips: [
        'Anti-Fog Coating — ضباب 200 يوم = Fog Spots مستمرة.',
        'Anti-Fungal مقصورة كل شهرين — 60-85% = عفن 48 ساعة.',
        'غسل ضغط عالي بعد مطر — طين يلتصق ويحبس رطوبة.',
        'تجفيف كامل + Dehumidifier سيارة — تكثّف بارد.',
        'لا تنتظر جفاف الطين — أصعب 10× بعد الجفاف.',
    ],
    warnings: [
        'مقصورة بدون Anti-Fungal + 60-85% = عفن أسود — رائحة + حساسية تنفسية.',
        'طين عسيري جاف على Undercarriage = صدأ متسارع — غسل فوري بعد المطر.',
        'ضباب + بدون Anti-Fog = Fog Spots تحتاج Polish لو تراكمت (200+ ريال).',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص مراكز الغسيل' },
        { entity: AMANA.ASIR.entity, url: AMANA.ASIR.url, role: 'اشتراطات أمانة عسير' },
    ],
    expertReviewer: EXPERTS.ALZUWAYED,
    expertCitations: [
        { expert: EXPERTS.ALZUWAYED.name, quote: 'سيارة خميس: ضباب+أمطار+عفن مقصورة. أعقد من الصحراء. Anti-Fungal إلزامي للمقصورة.', source: 'هيئة النقل — جنوبية' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ مركز غسيل مرخص', authority: 'بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'Anti-Fog Coating', use: 'حماية زجاج من Fog Spots — ضباب 200 يوم' },
        { name: 'Anti-Fungal مقصورة', use: 'يقتل عفن Stachybotrys — 60-85%' },
        { name: 'غسل ضغط عالي 2500 PSI', use: 'إزالة طين عسيري من Undercarriage' },
    ],
    hiddenObjections: [
        { fear: 'مثل الباحة.', solution: 'متشابه — خميس أقل غابات. ضباب أكثر. تكلفة متقاربة.' },
        { fear: 'غسيل خارجي يكفي.', solution: 'عفن المقصورة داخلي. Anti-Fungal إلزامي.' },
    ],
    counterNarratives: [
        { myth: 'المقصورة ما تحتاج تنظيف.', truth: '60-85% = عفن 48 ساعة تحت المقاعد. رائحة+حساسية.' },
        { myth: 'خميس مثل عنيزة.', truth: 'عكس — عفن+ضباب+أمطار. أغلى 25-35%.' },
    ],
    relatedServices: [
        { slug: 'dabab', context: 'دباب — أمطار', priority: 1 },
        { slug: 'cleaning', context: 'تنظيف', priority: 2 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف — عفن', priority: 3 },
        { slug: 'pest-control', context: 'حشرات', priority: 4 },
        { slug: 'carpet-cleaning', context: 'سجاد', priority: 5 },
        { slug: 'furniture-moving', context: 'نقل', priority: 6 },
        { slug: 'glass-facades-cleaning', context: 'واجهات — ضباب', priority: 7 },
    ],
};
