import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف سجاد بالجبيل — NaCl+VOC Fiber Stiffening + 85-98% عفن قاعدة + سخام SABIC (2026)',
        description: 'تنظيف سجاد الجبيل. NaCl+VOC Fiber Stiffening مزدوج. 85-98% عفن قاعدة أسرع. سخام SABIC يترسب. تجفيف 6-10 ساعات. RO + Enzymatic + Turbo Dry.',
        h1: 'تنظيف سجاد بالجبيل — ملح يُصلّب وبتروكيماويات تُلوّث وعفن أقصى',
        keywords: ['تنظيف سجاد الجبيل', 'غسيل سجاد بالجبيل', 'شركة تنظيف سجاد بالجبيل'],
    },
    content: {
        introduction: 'السجاد في الجبيل يتعرض لتلف صناعي-ساحلي ثلاثي. الأول — NaCl+VOC Fiber Stiffening: NaCl يُصلّب الألياف (مثل الخبر) + VOC يُضيف طبقة دهنية = ألياف صلبة+دهنية. RO + Marine Degreaser. الثاني — 85-98% عفن قاعدة: أقصى رطوبة = عفن قاعدة أسبوع. Aspergillus + Penicillium = حساسية تنفسية. Anti-Fungal + تجفيف إلزامي. الثالث — سخام SABIC: جزيئات كربونية تترسب على السجاد = بقع سوداء لا تُزال بشامبو. Enzymatic. التجفيف: 85-98% = 6-10 ساعات (أبطأ في المملكة!). Turbo Dryer + Dehumidifier إلزامي.',
        shortAnswer: 'على عكس [شامبو+مسح] الذي لا يُزيل VOC ولا يُجفف في 98%، يعتمد بروتوكولنا في خدمة [تنظيف السجاد] بمدينة [الجبيل] على [RO + Enzymatic + Anti-Fungal + Turbo Dry]. ففي ظل [NaCl+VOC + 85-98% + سخام]، تتفاقم ظاهرة [تصلب + عفن + سخام]. لذا؛ يتدخل خبراؤنا عبر [بروتوكول سجاد صناعي-ساحلي].',
        heroSubtitle: 'NaCl+VOC تصلب + 85-98% عفن أقصى + سخام SABIC + تجفيف أبطأ',
    },
    pricing: [
        { type: 'سجادة (2×3 م)', unit: 'سجادة', minPrice: 60, maxPrice: 115, time: '30-45 دقيقة' },
        { type: 'موكيت غرفة (20 م²)', unit: 'غرفة', minPrice: 130, maxPrice: 260, time: '2-3 ساعات' },
        { type: 'شقة + Turbo Dry', unit: 'شقة', minPrice: 270, maxPrice: 530, time: '4-6 ساعات' },
        { type: 'ربع سنوي', unit: 'سنة', minPrice: 640, maxPrice: 1280, time: '4 زيارات' },
    ],
    faq: [
        { question: 'تجفيف 6-10 ساعات — أبطأ؟', answer: 'أبطأ في المملكة — 85-98% = لا يجف طبيعياً. بدون Turbo Dryer = عفن خلال 24 ساعة. Turbo + Dehumidifier إلزامي.' },
        { question: 'VOC — يُضيف ماذا؟', answer: 'طبقة دهنية على الألياف. + NaCl = ألياف صلبة+دهنية. شامبو = ينزلق. Marine Degreaser + RO = يُكسر.' },
        { question: 'سخام — بقع سوداء؟', answer: 'جزيئات كربونية SABIC تدخل من الهواء ← تترسب على السجاد = بقع سوداء. Enzymatic يُكسر الكربون.' },
        { question: 'عفن قاعدة — أسبوع؟', answer: '85-98% = أسرع عفن في المملكة. القاعدة (backing) = أول ضحية. Anti-Fungal + تجفيف كامل.' },
        { question: 'ربع سنوي — ليش؟', answer: 'NaCl+VOC يومي + سخام يومي + عفن أسبوعي. ربع سنوي = قبل التصلب العميق.' },
    ],
    expertTips: [
        'RO أولاً — يُزيل NaCl قبل الفرك.',
        'Marine Degreaser — يُكسر VOC الدهنية.',
        'Turbo Dryer + Dehumidifier — 98% = إلزامي.  6-10 ساعات.',
        'Anti-Fungal قبل التجفيف — يمنع عفن أثناء الـ 6-10.',
        'Enzymatic لسخام — شامبو لا يعمل.',
    ],
    warnings: [
        'بدون Turbo Dryer = عفن قاعدة 24 ساعة في 98%.',
        'NaCl+VOC × 6 أشهر = ألياف صلبة+دهنية = سجاد تالف.',
        'سخام SABIC = بقع دائمة إذا تأخرت. Enzymatic مبكر.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص التنظيف' },
        { entity: AMANA.SHARQIA.entity, url: AMANA.SHARQIA.url, role: 'اشتراطات النظافة بالشرقية' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALMOHAIMED.name, quote: 'سجاد الجبيل: NaCl+VOC تصلب مزدوج + 85-98% عفن أقصى + سخام SABIC. تجفيف أبطأ في المملكة. RO + Enzymatic + Turbo Dry.', source: 'نصائح هندسية — سجاد البيئة الصناعية' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ تنظيف سجاد مرخص', authority: 'منصة بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'RO Rinse', use: 'NaCl — يُزيل قبل الفرك' },
        { name: 'Marine Degreaser', use: 'VOC — يُكسر الدهنية' },
        { name: 'Enzymatic', use: 'سخام SABIC — يُكسر الكربون' },
        { name: 'Turbo Dryer + Dehumidifier', use: '98% — تجفيف إلزامي' },
    ],
    hiddenObjections: [
        { fear: 'مثل الخبر.', solution: 'VOC + سخام SABIC إضافي. 98% > 95%. مختلف.' },
        { fear: 'شامبو.', solution: 'NaCl+VOC = ينزلق. سخام = لا يعمل. Marine+Enzymatic.' },
    ],
    counterNarratives: [
        { myth: 'ساحلي فقط.', truth: 'ساحلي + صناعي = VOC + سخام. ثلاثي.' },
        { myth: 'يجف طبيعي.', truth: '98% = 6-10 ساعات. بدون Turbo = عفن.' },
        { myth: 'نصف سنوي.', truth: 'NaCl+VOC+سخام يومي. ربع سنوي.' },
    ],
    relatedServices: [
        { slug: 'sofa-cleaning', context: 'كنب — NaCl+VOC', priority: 1 },
        { slug: 'steam-cleaning', context: 'بخار — تعقيم', priority: 2 },
        { slug: 'cleaning', context: 'تنظيف — صناعي', priority: 3 },
        { slug: 'councils-cleaning', context: 'مجالس', priority: 4 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف — VOC', priority: 5 },
        { slug: 'pest-control', context: 'حشرات — بعوض', priority: 6 },
        { slug: 'marble-polishing', context: 'رخام — NaCl', priority: 7 },
    ],
};
