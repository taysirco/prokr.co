import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف بالبخار بالظهران — يُذيب NaCl+SiO₂ مزدوج + يقتل عث 75-85% — تجفيف إلزامي (2026)',
        description: 'تنظيف بالبخار الظهران. بخار 130°م يُذيب NaCl + يرفع SiO₂ + يقتل عث + يُكسر Biofilm. 75-85% تجفيف Dehumidifier إلزامي. Dry Vapor مزدوج.',
        h1: 'تنظيف بالبخار بالظهران — يُذيب المزدوج ويقتل العث — تجفيف إلزامي',
        keywords: ['تنظيف بالبخار بالظهران', 'تنظيف بخار الظهران', 'شركة تنظيف بالبخار بالظهران'],
    },
    content: {
        introduction: 'البخار في الظهران = أداة رباعية مزدوجة — مع تحذير. الأول — يُذيب NaCl: بخار 130°م يُعيد إذابة NaCl المتبلور ← يُمسح بـ RO. الثاني — يرفع SiO₂: بعد إذابة NaCl بالبخار = SiO₂ يُرفع بلا خدش ← يُمسح. البخار يحل مشكلة الترتيب المزدوج. الثالث — يقتل عث 75-85%: أبطأ تكاثراً من الخبر لكن: يتكاثر. بخار 130°م = Protein Denaturation. الرابع — يُكسر Biofilm: 75-85% = Biofilm أبطأ لكن ينمو. بخار يُكسره. التحذير — تجفيف إلزامي: 75-85% = البخار يتبخر أبطأ من الرياض (15%) لكن أسرع من الخبر (85-95%). Dehumidifier = يُسرّع. بدون تجفيف = عفن.',
        shortAnswer: 'على عكس [ممسحة بماء الظهران] التي تخدش بـ SiO₂ وتُضيف NaCl، يعتمد بروتوكولنا في خدمة [التنظيف بالبخار] بمدينة [الظهران] على [بخار 130°م رباعي + Dehumidifier]. ففي ظل [NaCl+SiO₂ + 75-85% + عث]، تتفاقم ظاهرة [مزدوج + حساسية + غشاء]. لذا؛ يتدخل خبراؤنا عبر [بخار مزدوج].',
        heroSubtitle: 'يُذيب NaCl + يرفع SiO₂ + يقتل عث + يُكسر Biofilm — تجفيف',
    },
    pricing: [
        { type: 'غرفة واحدة', unit: 'غرفة', minPrice: 85, maxPrice: 170, time: '30-60 دقيقة' },
        { type: 'شقة + Dehumidifier', unit: 'شقة', minPrice: 270, maxPrice: 530, time: '2-4 ساعات' },
        { type: 'عميق + Anti-Biofilm', unit: 'شقة', minPrice: 340, maxPrice: 630, time: '3-5 ساعات' },
        { type: 'ربع سنوي', unit: 'سنة', minPrice: 830, maxPrice: 1630, time: '4 زيارات' },
    ],
    faq: [
        { question: 'البخار يحل المزدوج — كيف؟', answer: '130°م يُذيب NaCl ← يُحرر SiO₂ ← يُمسح بلا خدش. بدون بخار: تحتاج RO ← Microfiber (ترتيب). البخار = يختصر الترتيب.' },
        { question: 'تجفيف — أسرع من الخبر؟', answer: '75-85% < 85-95% = أسرع قليلاً. Dehumidifier = 2-3 ساعات (بدلاً من 3-4 في الخبر). لكن: بدون تجفيف = 12-18 ساعة = عفن.' },
        { question: 'عث — 75-85% أبطأ؟', answer: 'أبطأ من الخبر — لكن أسرع كثيراً من الرياض. بخار 130°م = يقتل كل المراحل.' },
        { question: 'Biofilm — أبطأ نمو؟', answer: '4-6 أسابيع (بدلاً من 2-3 في الخبر). بخار يُكسره + Anti-Biofilm يمنع.' },
        { question: 'ربع سنوي؟', answer: 'عث 10-11/12 شهر + NaCl+SiO₂ يومي + Biofilm شهري. ربع سنوي = 4 جلسات مزدوجة.' },
    ],
    expertTips: [
        'بخار يحل ترتيب NaCl→SiO₂ — يُذيب NaCl ← SiO₂ يُرفع = خطوة واحدة.',
        'Dehumidifier بعد البخار — 75-85% = إلزامي. بدونه = عفن.',
        'Anti-Biofilm بعد بخار — يمنع نمو جديد.',
        'بخار على سجاد وكنب ربع سنوي— يقتل عث 75-85%.',
        'لا نوافذ — 75-85% خارجي = رطوبة إضافية. Dehumidifier مُغلق.',
    ],
    warnings: [
        'بخار بدون Dehumidifier = 12-18 ساعة رطب = عفن. أسوأ من عدم التنظيف.',
        'عث بدون بخار = Der p 1 متراكم = حساسية.',
        'NaCl+SiO₂ بدون بخار = يحتاج ترتيب RO→Microfiber = خطأ محتمل.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص التنظيف' },
        { entity: AMANA.SHARQIA.entity, url: AMANA.SHARQIA.url, role: 'اشتراطات النظافة بالشرقية' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALMOHAIMED.name, quote: 'بخار الظهران = مزدوج: يحل NaCl+SiO₂ في خطوة + يقتل عث + يُكسر Biofilm. 75-85% = تجفيف إلزامي لكن أسرع من الخبر.', source: 'نصائح هندسية — بخار مزدوج' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ بخار مرخص', authority: 'منصة بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'Dry Vapor 130°م', use: 'يُذيب NaCl + يرفع SiO₂ + يقتل عث' },
        { name: 'Dehumidifier', use: 'تجفيف — 2-3 ساعات' },
        { name: 'Anti-Biofilm', use: 'يمنع — 4 أشهر' },
    ],
    hiddenObjections: [
        { fear: 'يبلل.', solution: 'Dry Vapor 5%. + Dehumidifier = 2-3 ساعات.' },
        { fear: 'ممسحة أسهل.', solution: 'ممسحة = ترتيب + خطأ محتمل. بخار = خطوة واحدة.' },
    ],
    counterNarratives: [
        { myth: 'بخار = ماء.', truth: '130°م ≠ ماء. يقتل + يُذيب + يرفع.' },
        { myth: 'يجف.', truth: '75-85% = 12-18 ساعة بدون. Dehumidifier = 2-3.' },
        { myth: 'سنوي.', truth: 'مزدوج + عث + Biofilm. ربع سنوي.' },
    ],
    relatedServices: [
        { slug: 'carpet-cleaning', context: 'سجاد — مزدوج', priority: 1 },
        { slug: 'sofa-cleaning', context: 'كنب — عث', priority: 2 },
        { slug: 'councils-cleaning', context: 'مجالس', priority: 3 },
        { slug: 'cleaning', context: 'تنظيف — مزدوج', priority: 4 },
        { slug: 'marble-polishing', context: 'رخام', priority: 5 },
        { slug: 'pest-control', context: 'حشرات', priority: 6 },
        { slug: 'apartments-cleaning', context: 'شقق', priority: 7 },
    ],
};
