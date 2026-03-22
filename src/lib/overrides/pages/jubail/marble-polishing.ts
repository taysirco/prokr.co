import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../gov-references';

export const override: PageOverride = {
    meta: {
        title: 'جلي رخام بالجبيل — NaCl إبهات + VOC بقع + 85-98% عفن مسامي + Biofilm (2026)',
        description: 'جلي رخام الجبيل. NaCl إبهات ملحي. VOC بقع دهنية. 85-98% عفن مسامي أسبوع. Biofilm أقصى. تجفيف أبطأ. جلي + Marine + Anti-Fungal + Sealer.',
        h1: 'جلي رخام بالجبيل — ملح يُبهت وVOC يبقّع وعفن يغزو المسام',
        keywords: ['جلي رخام الجبيل', 'تلميع رخام بالجبيل', 'شركة جلي رخام بالجبيل'],
    },
    content: {
        introduction: 'الرخام في الجبيل يتعرض لإبهات صناعي-ساحلي فريد. الأول — NaCl إبهات: ملح يُبهت لمعان الرخام (مثل الخبر). الثاني — VOC بقع: بتروكيماويات تترك بقعاً دهنية في المسام. Marine Degreaser + Poultice. الثالث — 85-98% عفن مسامي: أسرع عفن في مسام الرخام. أسبوع. Anti-Fungal + Sealer. الرابع — Biofilm: 98% = Biofilm على رخام خارجي. طحالب. Anti-Biofilm. التجفيف: 98% = أبطأ تجفيف بعد الجلي = خطر عفن. Turbo Dry.',
        shortAnswer: 'على عكس [ملمّع سطحي] الذي لا يُعالج VOC ولا عفن 98%، يعتمد بروتوكولنا في خدمة [جلي الرخام] بمدينة [الجبيل] على [Marine ← جلي ← Anti-Fungal ← Sealer ← Turbo]. ففي ظل [NaCl+VOC + 85-98% + Biofilm]، تتفاقم ظاهرة [إبهات + بقع + عفن + طحالب]. لذا؛ يتدخل خبراؤنا عبر [بروتوكول رخام صناعي-ساحلي].',
        heroSubtitle: 'NaCl إبهات + VOC بقع + 98% عفن مسامي + Biofilm + أبطأ تجفيف',
    },
    pricing: [
        { type: 'جلي (10-30 م²)', unit: 'م²', minPrice: 25, maxPrice: 55, time: '2-4 ساعات' },
        { type: 'جلي + Sealer + Anti-Fungal', unit: 'م²', minPrice: 35, maxPrice: 65, time: '3-6 ساعات' },
        { type: 'فيلا (100+ م²)', unit: 'م²', minPrice: 20, maxPrice: 48, time: '8-14 ساعة' },
        { type: 'ربع سنوي', unit: 'سنة', minPrice: 550, maxPrice: 1100, time: '4 زيارات' },
    ],
    faq: [
        { question: 'VOC بقع — في المسام؟', answer: 'VOC = دهني. يدخل مسام الرخام (3-5 Mohs = مسامي). Poultice يسحب من العمق. Marine Degreaser سطحي.' },
        { question: '98% عفن مسامي — أسوأ؟', answer: 'الأسوأ في المملكة. مسام + 98% = عفن أسبوع في العمق. Sealer يسد المسام. Anti-Fungal يقتل.' },
        { question: 'تجفيف بعد جلي — أبطأ؟', answer: '98% = أبطأ تجفيف بعد جلي. بدون Turbo = عفن في المسام أثناء التجفيف. Turbo إلزامي.' },
        { question: 'Biofilm — رخام خارجي؟', answer: '98% = طحالب خضراء على رخام خارجي (مداخل+حدائق). Anti-Biofilm شهري.' },
        { question: 'كم تكلفة التنظيف العميق مقارنة بالتنظيف العادي؟', answer: 'التنظيف العميق أغلى 30-50% لكنه يشمل: HEPA + بخار 150°م + تعقيم. التنظيف العادي = مسح سطحي. العميق كل 3-4 أشهر + العادي أسبوعياً = أفضل معادلة تكلفة/نظافة.' },
    ],
    expertTips: [
        'Marine Degreaser قبل جلي — VOC في المسام.',
        'Sealer بعد كل جلي — 98% = عفن مسامي.',
        'Turbo Dry إلزامي — تجفيف 98% = عفن أثناء.',
        'Anti-Biofilm رخام خارجي — طحالب 98%.',
        'بعد التنظيف: شغّل المكيف وليس الشبّاك — الهواء الخارجي يعيد الغبار على الأسطح النظيفة.',
    ],
    warnings: [
        'VOC في المسام + جلي بدون Degreaser = يطبّخ البقعة.',
        '98% + جلي + تجفيف بطيء = عفن مسامي أثناء التجفيف.',
        'Biofilm + رخام خارجي = انزلاق + تلف.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص شركات الجلي' },
        { entity: AMANA.SHARQIA.entity, url: AMANA.SHARQIA.url, role: 'اشتراطات المباني بالشرقية' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALMOHAIMED.name, quote: 'رخام الجبيل: NaCl إبهات + VOC بقع مسامية + 98% عفن مسامي. Sealer + Anti-Fungal + Turbo Dry. Biofilm رخام خارجي.', source: 'نصائح هندسية — رخام صناعي-ساحلي' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ جلي مرخص', authority: 'منصة بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'Marine Degreaser', use: 'VOC — مسام' },
        { name: 'Diamond Pads', use: 'جلي 7-مراحل' },
        { name: 'Sealer', use: '98% — يسد المسام' },
        { name: 'Turbo Dry', use: '98% — تجفيف إلزامي' },
    ],
    commonConcerns: [
        { concern: 'مثل الخبر.', solution: 'VOC بقع إضافي + 98% > 95% + Biofilm. أقسى.' },
        { concern: 'ملمّع.', solution: 'فوق VOC + عفن مسامي. سطحي.' },
    ],
    consumerEducation: [
        { myth: 'ساحلي فقط.', truth: 'VOC بقع = صناعي. ثنائي.' },
        { myth: 'مرة.', truth: '98% عفن + NaCl إبهات. ربع سنوي.' },
    ],
    relatedServices: [
        { slug: 'cleaning', context: 'تنظيف', priority: 1 },
        { slug: 'glass-facades-cleaning', context: 'واجهات', priority: 2 },
        { slug: 'villas-cleaning', context: 'فلل', priority: 3 },
        { slug: 'apartments-cleaning', context: 'شقق', priority: 4 },
        { slug: 'steam-cleaning', context: 'بخار', priority: 5 },
        { slug: 'carpet-cleaning', context: 'سجاد', priority: 6 },
        { slug: 'pest-control', context: 'حشرات', priority: 7 },
    ],
};
