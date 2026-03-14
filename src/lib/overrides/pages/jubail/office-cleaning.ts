import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف مكاتب بالجبيل — VOC PM2.5 مهني + NaCl أجهزة + 85-98% عفن مكتبي + سخام (2026)',
        description: 'تنظيف مكاتب الجبيل. VOC PM2.5 مهني 8 ساعات. NaCl أجهزة Galvanic. 85-98% عفن مكتبي. سخام SABIC. HEPA AC + Marine + Anti-Fungal.',
        h1: 'تنظيف مكاتب بالجبيل — بتروكيماويات تتنفسها وملح يُصدئ أجهزتك',
        keywords: ['تنظيف مكاتب الجبيل', 'تنظيف مكتب بالجبيل', 'شركة تنظيف مكاتب بالجبيل'],
    },
    content: {
        introduction: 'المكتب في الجبيل = أخطر بيئة مكتبية في المملكة. الأول — VOC PM2.5 مهني: 8 ساعات × PM2.5 بتروكيماوي = خطر تنفسي مهني. HEPA Activated Carbon. الثاني — NaCl أجهزة: NaCl+VOC يترسب على إلكترونيات = Galvanic + Short Circuit. Marine Degreaser + Anti-Static. الثالث — 85-98% عفن مكتبي: عفن خلف أثاث المكتب + في المكيف + خلف الشاشات = Sick Building. Anti-Fungal. الرابع — سخام: بقع سوداء على أسطح المكتب + أوراق + شاشات. Enzymatic.',
        shortAnswer: 'على عكس [عاملة مبنى بممسحة]، يعتمد بروتوكولنا في خدمة [تنظيف المكاتب] بمدينة [الجبيل] على [HEPA AC + Marine + Anti-Fungal + Enzymatic]. ففي ظل [VOC PM2.5 + NaCl + 85-98% + سخام]، تتفاقم ظاهرة [تنفسي + Galvanic + عفن + تلوّث]. لذا؛ يتدخل خبراؤنا عبر [بروتوكول مكتب صناعي-ساحلي].',
        heroSubtitle: 'VOC PM2.5 × 8 ساعات + NaCl Galvanic + عفن مكتبي + سخام',
    },
    pricing: [
        { type: 'مكتب صغير (50 م²)', unit: 'خدمة', minPrice: 140, maxPrice: 280, time: '2-3 ساعات' },
        { type: 'مكتب كبير (100+ م²)', unit: 'خدمة', minPrice: 280, maxPrice: 560, time: '3-5 ساعات' },
        { type: 'عقد أسبوعي', unit: 'شهر', minPrice: 420, maxPrice: 840, time: '4 زيارات' },
    ],
    faq: [
        { question: 'VOC PM2.5 — أخطر من الرياض؟', answer: 'الأخطر — PM2.5 بتروكيماوي × 8 ساعات × 5 أيام. HEPA عادي لا يحجز VOC. Activated Carbon.' },
        { question: '98% عفن — Sick Building؟', answer: '98% = عفن مكيف + خلف أثاث + داخل أدراج = Sick Building Syndrome. صداع + حساسية + إرهاق.' },
        { question: 'سخام — على الأوراق؟', answer: 'SABIC سخام = طبقة سوداء رقيقة على كل سطح. أوراق + شاشات + لوحات. Enzymatic.' },
        { question: 'أسبوعي — ليش؟', answer: 'VOC+NaCl+سخام يومي + عفن أسبوعي. أسبوعي = يمنع Sick Building.' },
        { question: 'كم تكلفة التنظيف العميق مقارنة بالتنظيف العادي؟', answer: 'التنظيف العميق أغلى 30-50% لكنه يشمل: HEPA + بخار 150°م + تعقيم. التنظيف العادي = مسح سطحي. العميق كل 3-4 أشهر + العادي أسبوعياً = أفضل معادلة تكلفة/نظافة.' },
    ],
    expertTips: [
        'HEPA Activated Carbon — VOC PM2.5.',
        'Marine Degreaser إلكترونيات — NaCl+VOC.',
        'Anti-Fungal — 98% عفن مكتبي.',
        'Enzymatic سخام — لا منديل.',
        'Dehumidifier مكتبي — 50-60%.',
    ],
    warnings: [
        'VOC PM2.5 × 8 ساعات = خطر تنفسي مهني. HEPA AC.',
        'NaCl+VOC + إلكترونيات = Galvanic + Short Circuit.',
        '98% + مكيف = Aspergillus = Sick Building.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص تنظيف تجاري' },
        { entity: AMANA.SHARQIA.entity, url: AMANA.SHARQIA.url, role: 'اشتراطات المكاتب بالشرقية' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALJUND.name, quote: 'مكتب الجبيل = الأخطر: VOC PM2.5 + NaCl + 98% + سخام. HEPA AC + Marine + Anti-Fungal. Sick Building = حقيقي.', source: 'موسوعة أخطاء — مكاتب صناعية' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ تنظيف مكاتب مرخص', authority: 'منصة بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'HEPA Activated Carbon', use: 'VOC PM2.5' },
        { name: 'Marine Degreaser', use: 'NaCl+VOC إلكترونيات' },
        { name: 'Anti-Fungal', use: '98% عفن مكتبي' },
        { name: 'Enzymatic', use: 'سخام SABIC' },
    ],
    commonConcerns: [
        { concern: 'مثل الخبر.', solution: 'VOC PM2.5 + سخام SABIC + 98%. أخطر.' },
        { concern: 'عاملة المبنى.', solution: 'بدون HEPA AC + بدون Marine = 0%.' },
    ],
    consumerEducation: [
        { myth: 'ساحلي فقط.', truth: 'VOC + سخام = صناعي. رباعي.' },
        { myth: 'مكيف يكفي.', truth: 'فلتر لا يحجز VOC. HEPA AC.' },
    ],
    relatedServices: [
        { slug: 'cleaning', context: 'تنظيف', priority: 1 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف — VOC', priority: 2 },
        { slug: 'carpet-cleaning', context: 'موكيت — عفن', priority: 3 },
        { slug: 'glass-facades-cleaning', context: 'واجهات', priority: 4 },
        { slug: 'pest-control', context: 'حشرات', priority: 5 },
        { slug: 'steam-cleaning', context: 'بخار', priority: 6 },
        { slug: 'hourly-cleaning', context: 'بالساعة', priority: 7 },
    ],
};
