import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تخزين أثاث بالقطيف — 80-95% Dehumidifier + NaCl + عفن واحي + PVAc (2026)',
        description: 'تخزين أثاث القطيف. 80-95% Dehumidifier. NaCl تآكل. عفن واحي. PVAc. أغلى من حفر الباطن لكن أقل من الجبيل.',
        h1: 'تخزين أثاث بالقطيف — Dehumidifier ضروري لأن 80-95% لا ترحم',
        keywords: ['تخزين أثاث القطيف', 'تخزين عفش بالقطيف', 'شركة تخزين أثاث بالقطيف'],
    },
    content: {
        introduction: 'تخزين الأثاث في القطيف = ساحلي-واحي. الأول — Dehumidifier: 80-95% = بدون Dehumidifier = عفن + صدأ. Dehumidifier يُنزل إلى 50-60%. الثاني — NaCl: حتى في المستودع = NaCl يتسرب. VCI للمعادن. الثالث — عفن واحي: عيون قريبة = رطوبة أرضية إضافية. Anti-Fungal دوري. الرابع — PVAc: 80-95% = يمتص ← يلين. Dehumidifier = الحل. مقابل الجبيل: أقل تكلفة (لا VOC ولا سخام). مقابل حفر الباطن: أغلى (Dehumidifier).',
        shortAnswer: 'على عكس [مستودع عادي] بدون Dehumidifier في 80-95%، يعتمد بروتوكولنا في خدمة [تخزين الأثاث] بمدينة [القطيف] على [Dehumidifier + VCI + Anti-Fungal]. ففي ظل [80-95% + NaCl + عفن واحي]، تتفاقم ظاهرة [عفن + صدأ + تلين]. لذا؛ يتدخل خبراؤنا عبر [مستودع ساحلي-واحي].',
        heroSubtitle: 'Dehumidifier + VCI + Anti-Fungal — أقل من الجبيل أغلى من حفر الباطن',
    },
    pricing: [
        { type: 'غرفة صغيرة (10 م²)', unit: 'شهر', minPrice: 230, maxPrice: 470, time: 'شهري' },
        { type: 'غرفة كبيرة (20 م²)', unit: 'شهر', minPrice: 400, maxPrice: 800, time: 'شهري' },
        { type: 'تغليف + نقل + تخزين', unit: 'باقة', minPrice: 730, maxPrice: 1800, time: 'حسب' },
        { type: 'عقد سنوي (خصم 15%)', unit: 'سنة', minPrice: 2400, maxPrice: 4800, time: 'سنوي' },
    ],
    faq: [
        { question: 'مقابل الجبيل — أرخص؟', answer: 'أرخص 15-25%. لا VOC ولا سخام. لكن: Dehumidifier ضروري.' },
        { question: 'Dehumidifier — 24/7؟', answer: '80-95% = يحتاج Dehumidifier. ليس 24/7 مثل الجبيل (98%). لكن: معظم الوقت.' },
        { question: 'عفن واحي — في المستودع؟', answer: 'إذا المستودع قرب عيون = رطوبة أرضية. Anti-Fungal + Dehumidifier.' },
        { question: 'فحص — كل كم؟', answer: 'شهري — عفن + صدأ + PVAc. أكثر قرب عيون.' },
        { question: 'هل الشركة مرخصة من هيئة النقل TGA؟', answer: 'كل شركات بروكر مرخصة TGA + بيان حمولة لوجستي. الترخيص = تأمين على الأمتعة + حقوق عميل. بدون ترخيص = لا تأمين = لا تعويض.' },
    ],
    expertTips: [
        'Dehumidifier معظم الوقت — 80-95%.',
        'VCI شهري — NaCl.',
        'Anti-Fungal شهري — عفن واحي.',
        'ابتعد عن عيون — رطوبة أرضية.',
        'صوّر كل قطعة أثاث قبل النقل — توثيق بصري يحمي حقك في التعويض لو حصل ضرر.',
    ],
    warnings: [
        'مستودع بدون Dehumidifier + 80-95% = تلف 6-9 أشهر.',
        'قرب عيون = رطوبة أعلى = عفن أسرع.',
        'PVAc + 80-95% = مفاصل تنفك.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص مستودعات' },
        { entity: AMANA.SHARQIA.entity, url: AMANA.SHARQIA.url, role: 'اشتراطات التخزين بالشرقية' },
    ],
    expertReviewer: EXPERTS.ALMOHAIMED,
    expertCitations: [
        { expert: EXPERTS.ALMOHAIMED.name, quote: 'تخزين القطيف: 80-95% Dehumidifier + NaCl + عفن واحي. أقل من الجبيل. أغلى من حفر الباطن.', source: 'نصائح هندسية — تخزين الواحات الساحلية' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ مستودع مرخص', authority: 'منصة بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'Dehumidifier', use: '80-95% → 50-60%' },
        { name: 'VCI', use: 'NaCl — معادن' },
        { name: 'Anti-Fungal', use: 'عفن واحي — شهري' },
    ],
    hiddenObjections: [
        { fear: 'غالي.', solution: 'تلف بدون = أغلى. Dehumidifier ضروري.' },
        { fear: 'مثل الخبر.', solution: 'واحة = عيون. عفن واحي إضافي.' },
    ],
    consumerEducation: [
        { myth: 'أي مستودع.', truth: 'بدون Dehumidifier = تلف.' },
        { myth: 'ربع سنوي فحص.', truth: '80-95% + عيون. شهري.' },
    ],
    relatedServices: [
        { slug: 'furniture-moving', context: 'نقل', priority: 1 },
        { slug: 'furniture-cleaning', context: 'أثاث', priority: 2 },
        { slug: 'pest-control', context: 'حشرات', priority: 3 },
        { slug: 'cleaning', context: 'تنظيف', priority: 4 },
        { slug: 'dyna', context: 'دينا', priority: 5 },
        { slug: 'dabab', context: 'دباب', priority: 6 },
        { slug: 'termite-control', context: 'نمل أبيض', priority: 7 },
    ],
};
