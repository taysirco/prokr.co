import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../gov-references';

export const override: PageOverride = {
    meta: {
        title: 'تخزين أثاث بالجبيل — 85-98% Dehumidifier 24/7 + NaCl+VOC + عفن + صدأ + Biofilm (2026)',
        description: 'تخزين أثاث الجبيل. 85-98% Dehumidifier 24/7 إلزامي. NaCl+VOC تآكل. عفن أسبوع. صدأ Galvanic. PVAc. أغلى تخزين لكن ضروري.',
        h1: 'تخزين أثاث بالجبيل — Dehumidifier 24/7 لأن 98% لا ترحم',
        keywords: ['تخزين أثاث الجبيل', 'تخزين عفش بالجبيل', 'شركة تخزين أثاث بالجبيل'],
    },
    content: {
        introduction: 'تخزين الأثاث في الجبيل = أصعب وأغلى تخزين في المملكة. التحدي 1 — Dehumidifier 24/7: 85-98% = بدون Dehumidifier = عفن أسبوع + صدأ شهر + PVAc تفكك. Dehumidifier يُنزل إلى 50-60%. 24/7. التحدي 2 — NaCl+VOC: حتى في المستودع المُغلق = NaCl+VOC يتسرب. VCI لمعادن + Anti-Corrosion. التحدي 3 — عفن كل شيء: 98% = عفن على خشب + قماش + جلد + حتى بلاستيك. Anti-Fungal دوري. التحدي 4 — PVAc يمتص: 98% = PVAc يمتص ← يلين ← مفاصل تنفك. Dehumidifier = الحل الوحيد.',
        shortAnswer: 'على عكس [مستودع عادي] بدون Dehumidifier في 98%، يعتمد بروتوكولنا في خدمة [تخزين الأثاث] بمدينة [الجبيل] على [Dehumidifier 24/7 + VCI + Anti-Fungal دوري]. ففي ظل [85-98% + NaCl+VOC]، تتفاقم ظاهرة [عفن + صدأ + تفكك]. لذا؛ يتدخل خبراؤنا عبر [مستودع صناعي-ساحلي].',
        heroSubtitle: 'Dehumidifier 24/7 + VCI + Anti-Fungal + أغلى لكن ضروري',
    },
    pricing: [
        { type: 'غرفة صغيرة (10 م²)', unit: 'شهر', minPrice: 280, maxPrice: 560, time: 'شهري' },
        { type: 'غرفة كبيرة (20 م²)', unit: 'شهر', minPrice: 470, maxPrice: 940, time: 'شهري' },
        { type: 'تغليف Marine + نقل + تخزين', unit: 'باقة', minPrice: 870, maxPrice: 2200, time: 'حسب' },
        { type: 'عقد سنوي (خصم 15%)', unit: 'سنة', minPrice: 2900, maxPrice: 5800, time: 'سنوي' },
    ],
    faq: [
        { question: 'أغلى — لماذا؟', answer: 'Dehumidifier 24/7 = كهرباء 30-50% إضافية. VCI شهري. Anti-Fungal شهري. لكن: بدون = تلف كامل 3-6 أشهر.' },
        { question: 'Dehumidifier — 24/7 حقاً؟', answer: '98% = بدون 24/7 = رطوبة ترتفع لـ 98% في ساعات. عفن أسبوع. 24/7 = الحل الوحيد.' },
        { question: 'فحص — كل كم؟', answer: 'شهري — عفن + صدأ + PVAc + Biofilm. أكثر من أي مدينة.' },
        { question: 'مقابل حفر الباطن — فرق كم؟', answer: 'حفر الباطن: لا Dehumidifier = أرخص 30-50%. الجبيل = أغلى تخزين في المملكة.' },
        { question: 'VCI — كل شهر؟', answer: '98% + NaCl+VOC = VCI يُستهلك أسرع. كل شهر = التجديد.' },
    ],
    expertTips: [
        'Dehumidifier 24/7 — الحل الوحيد في 98%.',
        'VCI شهري — NaCl+VOC يُستهلك VCI أسرع.',
        'Anti-Fungal شهري — 98% = عفن مستمر.',
        'تغليف Marine — حتى في المستودع.',
        'فحص شهري — أكثر تكراراً في المملكة.',
    ],
    warnings: [
        'مستودع بدون Dehumidifier + 98% = تلف كامل 3-6 أشهر.',
        'NaCl+VOC في مستودع مُغلق = يتسرب. VCI.',
        'PVAc + 98% = مفاصل تنفك. Dehumidifier = الحل.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص مستودعات' },
        { entity: AMANA.SHARQIA.entity, url: AMANA.SHARQIA.url, role: 'اشتراطات التخزين بالشرقية' },
    ],
    expertReviewer: EXPERTS.ALMOHAIMED,
    expertCitations: [
        { expert: EXPERTS.ALMOHAIMED.name, quote: 'تخزين الجبيل = الأغلى والأصعب: 98% Dehumidifier 24/7 + NaCl+VOC + عفن+صدأ. بدون = تلف كامل.', source: 'نصائح هندسية — تخزين البيئة الصناعية' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ مستودع مرخص', authority: 'منصة بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'Dehumidifier 24/7', use: '98% → 50-60%' },
        { name: 'VCI شهري', use: 'NaCl+VOC — معادن' },
        { name: 'Anti-Fungal شهري', use: '98% — عفن' },
        { name: 'تغليف Marine', use: 'حماية إضافية' },
    ],
    commonConcerns: [
        { concern: 'غالي.', solution: 'تلف بدون Dehumidifier = أغلى بكثير. 98% لا ترحم.' },
        { concern: 'بيت أرخص.', solution: 'بيت = 98% + عفن. مستودع = Dehumidifier 24/7.' },
    ],
    consumerEducation: [
        { myth: 'أي مستودع.', truth: 'بدون Dehumidifier 24/7 = تلف.' },
        { myth: 'مثل الرياض.', truth: 'الرياض 15%: لا Dehumidifier. الجبيل 98%: 24/7.' },
        { myth: 'ربع سنوي فحص.', truth: '98% + NaCl+VOC. شهري.' },
    ],
    relatedServices: [
        { slug: 'furniture-moving', context: 'نقل — للمستودع', priority: 1 },
        { slug: 'furniture-cleaning', context: 'أثاث — قبل', priority: 2 },
        { slug: 'pest-control', context: 'حشرات — بعوض', priority: 3 },
        { slug: 'cleaning', context: 'تنظيف', priority: 4 },
        { slug: 'dyna', context: 'دينا', priority: 5 },
        { slug: 'dabab', context: 'دباب', priority: 6 },
        { slug: 'termite-control', context: 'نمل أبيض', priority: 7 },
    ],
};
