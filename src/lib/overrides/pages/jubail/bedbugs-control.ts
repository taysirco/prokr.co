import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../gov-references';

export const override: PageOverride = {
    meta: {
        title: 'مكافحة بق الفراش بالجبيل — 85-98% يُخبئ + سكن عمالة SABIC + بعوض مُركّب (2026)',
        description: 'مكافحة بق فراش الجبيل. 85-98% يختبئ 21+ يوماً. سكن عمالة SABIC = انتقال. بعوض+بق = مُركّب. حراري 55°م + IGR + فحص دوري.',
        h1: 'مكافحة بق الفراش بالجبيل — رطوبة تُخبئه وسكن عمالة يُنقله',
        keywords: ['مكافحة بق الفراش الجبيل', 'مكافحة بق بالجبيل', 'شركة مكافحة بق بالجبيل'],
    },
    content: {
        introduction: 'بق الفراش في الجبيل يتأثر بعوامل صناعية-ساحلية. الأول — 85-98% يُخبئ: أقصى رطوبة = البق يعيش 14-21 يوماً بدون تغذية (أطول فترة في المملكة). يختبئ أطول = مستعمرة أكبر عند الاكتشاف. الثاني — سكن عمالة SABIC: آلاف عمال المصانع في سكن مشترك (8-12/غرفة). تنقل بين مصانع ومدن = أكبر خطر انتقال. الثالث — بعوض+بق: المكافحة تستهدف بعوض ← لكن بق = آلية مختلفة. عميل يظن أن رش البعوض يشمل البق = خطأ شائع.',
        shortAnswer: 'على عكس [رش بعوض] الذي لا يصل البق، يعتمد بروتوكولنا في خدمة [مكافحة البق] بمدينة [الجبيل] على [حراري 55°م + IGR + 3 جلسات + فحص سكن]. ففي ظل [85-98% + سكن عمالة + بعوض مُركّب]، تتفاقم ظاهرة [اختباء + انتقال + خلط]. لذا؛ يتدخل خبراؤنا عبر [بروتوكول بق صناعي].',
        heroSubtitle: '85-98% اختباء أطول + سكن عمالة SABIC + بعوض مُركّب',
    },
    pricing: [
        { type: 'فحص + معالجة غرفة', unit: 'غرفة', minPrice: 190, maxPrice: 380, time: '2-3 ساعات' },
        { type: 'شقة (حراري + IGR)', unit: 'شقة', minPrice: 480, maxPrice: 1100, time: '4-8 ساعات' },
        { type: '3 جلسات × أسبوعين', unit: 'باقة', minPrice: 770, maxPrice: 1700, time: '3 جلسات' },
        { type: 'فحص سكن عمالة (دوري)', unit: 'زيارة', minPrice: 100, maxPrice: 200, time: '30-60 دقيقة' },
    ],
    faq: [
        { question: '85-98% — يختبئ أطول؟', answer: 'أطول في المملكة — 14-21 يوماً بدون تغذية. في حفر الباطن 10-15%: 5-7 أيام. رطوبة = حياة أطول = مستعمرة أكبر عند الاكتشاف.' },
        { question: 'سكن عمالة — أخطر؟', answer: 'أخطر مصدر في المملكة — آلاف عمال × 8-12/غرفة × تنقل بين مصانع ومدن. فحص دوري = وقاية أرخص 10×.' },
        { question: 'رش بعوض = يشمل بق؟', answer: 'لا! آلية مختلفة. بعوض = Larvicide+رش طائر. بق = حراري+IGR+معالجة مستهدفة. خطأ شائع في الجبيل.' },
        { question: 'حراري في 98%؟', answer: '98% + حراري 55°م = بخار يُساعد الحرارة في الوصول للشقوق. الرطوبة تُعزز الحراري (ميزة!).' },
        { question: '3 جلسات — ليش؟', answer: 'بيض يفقس كل 6-10 أيام. 3 جلسات × أسبوعين = كل الأجيال.' },
    ],
    expertTips: [
        'فحص سكن عمالة دوري — أكبر مصدر.',
        'حراري + 98% رطوبة = يُعزز — ميزة!',
        'لا تخلط رش بعوض مع بق — آليات مختلفة.',
        'أغطية Anti-Bedbug — أبسط وقاية.',
        '85-98% = اكتشاف أصعب. فحص UV.',
    ],
    warnings: [
        '85-98% = يختبئ 21 يوماً = مستعمرة كبيرة. فحص مبكر.',
        'سكن عمالة بدون فحص = انتقال بين المدن.',
        'رش بعوض ≠ بق. خطأ شائع = إصابة مستمرة.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص مكافحة آفات' },
        { ...GOV.WEQAA, role: 'تسجيل مبيدات' },
        { entity: AMANA.SHARQIA.entity, url: AMANA.SHARQIA.url, role: 'صحة عامة بالشرقية' },
    ],
    expertReviewer: EXPERTS.ALKHODAIRY,
    expertCitations: [
        { expert: EXPERTS.ALKHODAIRY.name, quote: 'بق الجبيل: 85-98% = يختبئ أطول. سكن عمالة SABIC = أكبر مصدر. بعوض ≠ بق. حراري+IGR+فحص.', source: 'أبحاث حشرات — بق البيئة الصناعية' },
    ],
    saudiRegulations: [REGULATIONS.GHAD_SYSTEM],
    verificationBadges: [
        { badge: '✔️ مكافحة مرخصة', authority: 'بلدي + وقاء', icon: 'shield-check' },
    ],
    equipment: [
        { name: 'معالجة حرارية 55°م', use: '+ 98% رطوبة = يُعزز' },
        { name: 'IGR', use: 'يمنع بيض من التطور' },
        { name: 'فحص UV', use: 'يكشف بيض + فضلات' },
    ],
    commonConcerns: [
        { concern: 'رش البعوض يكفي.', solution: 'آلية مختلفة. بعوض = Larvicide. بق = حراري+IGR.' },
        { concern: 'ما فيه بق.', solution: '85-98% = يختبئ 21 يوماً. يوجد — لا يُرى.' },
    ],
    consumerEducation: [
        { myth: 'البعوض الأهم.', truth: 'بعوض = ضنك خطير. لكن: بق = مستقل. كلاهما.' },
        { myth: 'بخاخ.', truth: 'Knockdown Resistance + 98% = لا يجف. حراري.' },
        { myth: 'نظافة.', truth: 'بق = دم — ليس أوساخ.' },
    ],
    relatedServices: [
        { slug: 'pest-control', context: 'حشرات — بعوض', priority: 1 },
        { slug: 'steam-cleaning', context: 'بخار — تعقيم', priority: 2 },
        { slug: 'carpet-cleaning', context: 'سجاد — بعد', priority: 3 },
        { slug: 'sofa-cleaning', context: 'كنب — فحص', priority: 4 },
        { slug: 'cleaning', context: 'تنظيف — بعد', priority: 5 },
        { slug: 'furniture-moving', context: 'نقل — فحص', priority: 6 },
        { slug: 'termite-control', context: 'نمل أبيض', priority: 7 },
    ],
};
