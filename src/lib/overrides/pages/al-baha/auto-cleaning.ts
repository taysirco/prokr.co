import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف سيارات بالباحة — Laterite Fe₂O₃ Red Mud+ضباب+عرعر — pH Foam+Pre-Rinse! (2026)',
        description: 'تنظيف سيارات الباحة. Laterite Red Mud يأكل الطلاء! ضباب 200 يوم. عرعر لزج. pH Foam+Pre-Rinse+No-Touch.',
        h1: 'تنظيف سيارات بالباحة — Red Mud+ضباب+عرعر!',
        keywords: ['تنظيف سيارات بالباحة', 'غسيل سيارة بالباحة', 'شركة تنظيف سيارات بالباحة'],
    },
    content: {
        introduction: 'سيارة الباحة = Red Mud يأكل الطلاء! Laterite Fe₂O₃ Red Mud: طين بازلتي أحمر (أكسيد حديد) يلتصق بالسيارة أثناء المطر ← لو جف = يحُك Clear Coat بالإسفنج = خدوش. pH-Balanced Foam يُذيب قبل المسح. Pre-Rinse ضغط إلزامي. ضباب: 200 يوم = رطوبة تُبقي الطين رطباً أطول = يخترق الشقوق. عرعر لزج: حبوب لقاح صفراء تلتصق بالطلاء الرطب ← طبقة لزجة. Microfiber مبلل. الأمطار: الباحة أكثر مطراً بالمملكة ← Laterite ينتشر أكثر. غسل بعد كل مطر. مقارنة: بريدة = Nafud SiO₂ يخدش لكن لا Red Mud+لا عرعر. الباحة = Red Mud+عرعر = فريد.',
        shortAnswer: 'على عكس [الإسفنج+ماء الذي يخدش Red Mud]، يعتمد بروتوكولنا في خدمة [تنظيف السيارات] بمدينة [الباحة] على [pH Foam+Pre-Rinse+No-Touch+Wax]. ففي ظل [Laterite Red Mud+200 يوم ضباب+عرعر لزج+أمطار]، تتفاقم ظاهرة [خدش+لزوجة+اختراق]. لذا؛ يتدخل فريقنا عبر [Pre-Rinse ← pH Foam ← No-Touch ← Wax].',
        heroSubtitle: 'Laterite Red Mud + 200 يوم ضباب + عرعر — pH Foam!',
    },
    pricing: [
        { type: 'غسيل pH Foam', unit: 'سيارة', minPrice: 35, maxPrice: 70, time: '20-30 دقيقة' },
        { type: '+ Wax حماية', unit: 'سيارة', minPrice: 55, maxPrice: 110, time: '30-45 دقيقة' },
        { type: 'بعد مطر — عميق', unit: 'سيارة', minPrice: 45, maxPrice: 90, time: '30 دقيقة' },
        { type: 'أسبوعي (4/شهر)', unit: 'شهر', minPrice: 120, maxPrice: 240, time: '4 غسلات' },
    ],
    faq: [
        { question: 'ليش سيارة الباحة يتلف طلاؤها أسرع؟', answer: 'Laterite Fe₂O₃ = Red Mud يحُك Clear Coat. pH Foam يُذيب قبل المسح.' },
        { question: 'ليش Pre-Rinse إلزامي بالباحة؟', answer: 'Red Mud جاف = خشن. إسفنج مباشر = خدوش. ضغط يُزيل أولاً.' },
        { question: 'كم تكلفة غسيل بالباحة مقارنة ببريدة؟', answer: 'أغلى 25-30% — pH Foam+Pre-Rinse. بريدة: No-Touch SiO₂ فقط.' },
        { question: 'هل العرعر يأثر على السيارة بالباحة؟', answer: 'لقاح لزج يلتصق بالطلاء الرطب. Microfiber مبلل.' },
        { question: 'كم مرة غسيل بالباحة؟', answer: 'بعد كل مطر + أسبوعي موسم ضباب. Red Mud+عرعر مستمر.' },
    ],
    expertTips: [
        'pH Foam — Laterite يُذيب.',
        'Pre-Rinse ضغط — Red Mud جاف.',
        'No-Touch — لا إسفنج!',
        'Wax — حماية Clear Coat.',
        'بعد كل مطر — Laterite.',
    ],
    warnings: [
        'إسفنج + Laterite جاف = خدوش حلقات دائمة — Pre-Rinse.',
        'مبيّض + Laterite = بقعة حمراء على الطلاء — pH Foam.',
        'عرعر + ضباب × أسبوع = طبقة لزجة — Microfiber.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص مغاسل السيارات' },
        { entity: AMANA.BAHA.entity, url: AMANA.BAHA.url, role: 'اشتراطات أمانة الباحة' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALMISNID.name, quote: 'سيارة الباحة: Laterite Red Mud+عرعر. pH Foam+Pre-Rinse. لا إسفنج!', source: 'جغرافيا المناخ — سيارات جبلية' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ مغسلة مرخصة', authority: 'بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'pH-Balanced Foam', use: 'Laterite — يُذيب Red Mud' },
        { name: 'Pre-Rinse ضغط', use: 'Red Mud جاف — قبل مسح' },
        { name: 'Wax Protection', use: 'Clear Coat — حماية' },
    ],
    hiddenObjections: [
        { fear: 'إسفنج يكفي.', solution: 'Laterite = خدوش. pH Foam+No-Touch.' },
        { fear: 'مثل بريدة.', solution: 'Red Mud+عرعر ≠ SiO₂.' },
    ],
    consumerEducation: [
        { myth: 'ماء يكفي.', truth: 'Red Mud يحتاج pH Foam.' },
        { myth: 'شهري.', truth: 'بعد كل مطر. أسبوعي ضباب.' },
    ],
    relatedServices: [
        { slug: 'cleaning', context: 'تنظيف', priority: 1 },
        { slug: 'furniture-moving', context: 'نقل', priority: 2 },
        { slug: 'dyna', context: 'دينا', priority: 3 },
        { slug: 'dabab', context: 'دباب', priority: 4 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 5 },
        { slug: 'pest-control', context: 'حشرات', priority: 6 },
        { slug: 'glass-facades-cleaning', context: 'واجهات', priority: 7 },
    ],
};
