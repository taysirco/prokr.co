import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف بالبخار بالجبيل — 85-98% أبطأ تجفيف + بخار يُحرر NaCl + يقتل عث + Dehumidifier (2026)',
        description: 'تنظيف بالبخار الجبيل. 85-98% أبطأ تجفيف 6-10 ساعات. بخار يُحرر NaCl. يقتل عث أقصى. يعقّم 98%. Dehumidifier بعد البخار إلزامي.',
        h1: 'تنظيف بالبخار بالجبيل — يُحرر الملح ويقتل العث لكن يحتاج تجفيف',
        keywords: ['تنظيف بالبخار الجبيل', 'تنظيف بخار بالجبيل', 'شركة تنظيف بالبخار بالجبيل'],
    },
    content: {
        introduction: 'البخار في الجبيل = ضروري لكن يحتاج تجفيف — عكس حفر الباطن. الفائدة 1 — يُحرر NaCl: بخار 130°م يُذيب بلورات NaCl = يُنظف. الفائدة 2 — يقتل عث أقصى: 85-98% = أقصى Der p 1. بخار 100°م = يقتل. ضروري. الفائدة 3 — يُحرر VOC: حرارة تُكسر VOC من الأسطح. الفائدة 4 — يُعقّم 98%: 98% = أقصى بكتيريا. بخار = تعقيم. التحدي — تجفيف 6-10 ساعات: 98% = أبطأ تجفيف بخار في المملكة! بدون Dehumidifier = عفن. حفر الباطن: 20-30 دقيقة (ميزة!). الجبيل: 6-10 ساعات (تحدي!).',
        shortAnswer: 'على عكس [بخار بدون تجفيف] في 98%، يعتمد بروتوكولنا في خدمة [التنظيف بالبخار] بمدينة [الجبيل] على [بخار 130°م + Dehumidifier بعد إلزامي]. ففي ظل [NaCl + 85-98% + عث + VOC]، تتفاقم ظاهرة [تحرير + تعقيم — لكن تجفيف]. لذا؛ يتدخل خبراؤنا عبر [بخار صناعي-ساحلي + Dehumidifier].',
        heroSubtitle: 'يُحرر NaCl + يقتل عث + يُعقّم — لكن 6-10 ساعات تجفيف',
    },
    pricing: [
        { type: 'غرفة + Dehumidifier', unit: 'غرفة', minPrice: 90, maxPrice: 180, time: '30 دقيقة + تجفيف' },
        { type: 'شقة + Dehumidifier', unit: 'شقة', minPrice: 260, maxPrice: 520, time: '3-4 ساعات + تجفيف' },
        { type: 'بيت/فيلا', unit: 'بيت', minPrice: 420, maxPrice: 840, time: '5-8 ساعات + تجفيف' },
        { type: 'ربع سنوي', unit: 'سنة', minPrice: 600, maxPrice: 1200, time: '4 زيارات' },
    ],
    faq: [
        { question: 'أبطأ تجفيف — كم؟', answer: '6-10 ساعات! حفر الباطن: 20-30 دقيقة. الرياض: 1-2 ساعة. الجبيل 98%: 6-10. Dehumidifier إلزامي.' },
        { question: 'بدون Dehumidifier — ماذا؟', answer: '98% + بخار = رطوبة 100% = عفن 12-24 ساعة. كارثة. Dehumidifier = يُنزل لـ 50-60%.' },
        { question: 'يقتل عث — ضروري هنا؟', answer: 'الأضرور في المملكة — 98% = أقصى عث. بخار = الأداة الأولى. Anti-Mite بعد.' },
        { question: 'ربع سنوي — ليش؟', answer: 'عث أقصى + NaCl يومي + عفن أسبوعي. ربع سنوي = الحد.' },
    ],
    expertTips: [
        'Dehumidifier بعد البخار فوراً — 98% = عفن.',
        'بخار يُحرر NaCl — ثم مسح RO.',
        'Anti-Mite بعد بخار — يمنع عودة.',
        'لا بخار + إغلاق — 98% + بخار = 100%. كارثة.',
    ],
    warnings: [
        'بخار بدون Dehumidifier في 98% = عفن 12-24 ساعة.',
        '98% + بخار + غرفة مُغلقة = 100% رطوبة.',
        'تجفيف 6-10 ساعات = يجب التخطيط.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص التنظيف' },
        { entity: AMANA.SHARQIA.entity, url: AMANA.SHARQIA.url, role: 'اشتراطات النظافة بالشرقية' },
    ],
    expertReviewer: EXPERTS.ALMOHAIMED,
    expertCitations: [
        { expert: EXPERTS.ALMOHAIMED.name, quote: 'بخار الجبيل: ضروري (NaCl+عث+تعقيم). لكن: 98% = 6-10 ساعات تجفيف. Dehumidifier = إلزامي. عكس حفر الباطن.', source: 'نصائح هندسية — بخار ساحلي-صناعي' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ بخار مرخص', authority: 'منصة بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'Dry Vapor 130°م', use: 'NaCl + عث + تعقيم' },
        { name: 'Dehumidifier', use: '98% → 50-60% — إلزامي' },
        { name: 'Anti-Mite', use: 'بعد البخار — عث أقصى' },
    ],
    hiddenObjections: [
        { fear: 'يبلل.', solution: '98% = يبلل أكثر. Dehumidifier = يحل.' },
        { fear: 'بدون Dehumidifier أوفر.', solution: 'عفن 24 ساعة = أغلى بكثير.' },
    ],
    counterNarratives: [
        { myth: 'يجف طبيعي.', truth: '98% = 6-10 ساعات بدون Dehumidifier.' },
        { myth: 'مثل حفر الباطن.', truth: '10-15% = 20 دقيقة. 98% = 6-10 ساعات. عكس!' },
    ],
    relatedServices: [
        { slug: 'carpet-cleaning', context: 'سجاد', priority: 1 },
        { slug: 'sofa-cleaning', context: 'كنب — عث', priority: 2 },
        { slug: 'councils-cleaning', context: 'مجالس', priority: 3 },
        { slug: 'cleaning', context: 'تنظيف', priority: 4 },
        { slug: 'marble-polishing', context: 'رخام', priority: 5 },
        { slug: 'pest-control', context: 'حشرات', priority: 6 },
        { slug: 'apartments-cleaning', context: 'شقق', priority: 7 },
    ],
};
