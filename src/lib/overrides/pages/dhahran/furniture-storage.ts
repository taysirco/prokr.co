import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تخزين أثاث بالظهران — NaCl+SiO₂ مزدوج + 75-85% عفن + PVAc + Dehumidifier (2026)',
        description: 'تخزين أثاث الظهران. NaCl+SiO₂ مزدوج يدخل المستودع. 75-85% عفن. PVAc تفكك. مستودع مُحكم + Dehumidifier + VCI + Anti-Corrosion + فلتر SiO₂.',
        h1: 'تخزين أثاث بالظهران — مستودع مزدوج: مُحكم ملح+رمل وجاف ومُبرّد',
        keywords: ['تخزين أثاث بالظهران', 'تخزين عفش الظهران', 'شركة تخزين أثاث بالظهران'],
    },
    content: {
        introduction: 'تخزين الأثاث في الظهران يحتاج مستودع مزدوج. الشرط 1 — مُحكم ضد NaCl+SiO₂: NaCl من الهواء + SiO₂ من الصحراء = كلاهما يدخل. NaCl يُصدّئ + SiO₂ يخدش. ختم + فلاتر مزدوجة (NaCl + SiO₂). الشرط 2 — Dehumidifier: 75-85% = عفن خلال 3-4 أسابيع. Dehumidifier يُخفض ← 45-55%. الشرط 3 — VCI + Anti-Corrosion: معادن تحتاج حماية مزدوجة (NaCl تآكل + SiO₂ خدش Coating). الشرط 4 — مُبرّد: 45°م + 75-85% = PVAc يلين + يمتص = تفكك. < 35°م.',
        shortAnswer: 'على عكس [مستودع عادي] الذي لا يحمي من مزدوج، يعتمد بروتوكولنا في خدمة [تخزين الأثاث] بمدينة [الظهران] على [مُحكم مزدوج + Dehumidifier + VCI + مُبرّد]. ففي ظل [NaCl+SiO₂ + 75-85% + PVAc]، تتفاقم ظاهرة [صدأ+خدش + عفن + تفكك]. لذا؛ يتدخل خبراؤنا عبر [مستودع مزدوج].',
        heroSubtitle: 'مُحكم NaCl+SiO₂ + Dehumidifier 75-85% + VCI + مُبرّد',
    },
    pricing: [
        { type: 'غرفة صغيرة (10 م²)', unit: 'شهر', minPrice: 280, maxPrice: 560, time: 'شهري' },
        { type: 'غرفة كبيرة (20 م²)', unit: 'شهر', minPrice: 470, maxPrice: 940, time: 'شهري' },
        { type: 'تغليف مزدوج + نقل + تخزين', unit: 'باقة', minPrice: 940, maxPrice: 2350, time: 'حسب' },
        { type: 'عقد سنوي (خصم 15%)', unit: 'سنة', minPrice: 2800, maxPrice: 5600, time: 'سنوي' },
    ],
    faq: [
        { question: 'فلتر مزدوج — ليش؟', answer: 'NaCl = جزيئات ملحية. SiO₂ = جزيئات رملية. أحجام مختلفة = فلتر واحد لا يحجز كلاهما. فلتر مزدوج (HEPA + Salt Trap).' },
        { question: 'Dehumidifier — 75-85% أقل من الخبر؟', answer: 'أقل بـ 10-15% لكن: كافٍ لعفن. Dehumidifier يُخفض ← 45-55% = آمن. 24/7 لكن كهرباء أقل من الخبر.' },
        { question: 'PVAc — أبطأ؟', answer: '75-85% < 85-95% = أبطأ. لكن: 45°م = يلين. مُبرّد < 35°م = يحمي.' },
        { question: 'فحص — كل شهر؟', answer: 'حرارة + رطوبة + صدأ + عفن + سلامة تغليف. تقرير بالصور.' },
        { question: 'أرخص من الخبر؟', answer: 'أرخص قليلاً — 75-85% = كهرباء Dehumidifier أقل. لكن: SiO₂ = فلتر إضافي.' },
    ],
    expertTips: [
        'Dehumidifier 24/7 — الشرط الأول. 75-85% = كافٍ لعفن.',
        'فلتر مزدوج (HEPA + Salt Trap) — يحجز NaCl + SiO₂.',
        'VCI لكل معدن — حماية مزدوجة.',
        'فحص شهري — يكشف مبكراً.',
        'مُبرّد < 35°م — يوقف PVAc تلين.',
    ],
    warnings: [
        'مستودع بدون فلتر مزدوج = NaCl+SiO₂ يدخلان = صدأ+خدش.',
        'بدون Dehumidifier في 75-85% = عفن 3-4 أسابيع.',
        'بدون تبريد + 45°م + 75-85% = PVAc تفكك أشهر.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص مستودعات' },
        { entity: AMANA.SHARQIA.entity, url: AMANA.SHARQIA.url, role: 'اشتراطات التخزين بالشرقية' },
    ],
    expertReviewer: EXPERTS.ALMOHAIMED,
    expertCitations: [
        { expert: EXPERTS.ALMOHAIMED.name, quote: 'تخزين الظهران = مزدوج: NaCl+SiO₂ + 75-85% + PVAc. مستودع مُحكم مزدوج + Dehumidifier + VCI + مُبرّد.', source: 'نصائح هندسية — تخزين مزدوج' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ مستودع مرخص', authority: 'منصة بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'فلتر مزدوج (HEPA + Salt)', use: 'يحجز NaCl + SiO₂' },
        { name: 'Dehumidifier 24/7', use: 'يُخفض 75-85% ← 45-55%' },
        { name: 'VCI + Anti-Corrosion', use: 'يحمي معادن من مزدوج' },
        { name: 'تبريد < 35°م', use: 'PVAc حماية' },
    ],
    hiddenObjections: [
        { fear: 'عادي أرخص.', solution: 'عادي + مزدوج = تلف. أرخص بـ 200/شهر — أغلى بـ آلاف تلف.' },
        { fear: 'قصير.', solution: '3-4 أسابيع = عفن. ساعات = صدأ. قصير ≠ آمن.' },
    ],
    consumerEducation: [
        { myth: 'أي مستودع.', truth: 'بدون فلتر = مزدوج يدخل. بدون Dehumidifier = عفن. بدون تبريد = PVAc.' },
        { myth: 'مثل الخبر.', truth: 'SiO₂ إضافي = فلتر مزدوج. 75-85% < 85-95% = أقل كهرباء.' },
        { myth: 'بيت.', truth: 'غرفة مُغلقة + 75-85% = عفن. نفس المشكلة.' },
    ],
    relatedServices: [
        { slug: 'furniture-moving', context: 'نقل — للمستودع', priority: 1 },
        { slug: 'furniture-cleaning', context: 'أثاث — قبل', priority: 2 },
        { slug: 'pest-control', context: 'حشرات — فحص', priority: 3 },
        { slug: 'cleaning', context: 'تنظيف — بعد', priority: 4 },
        { slug: 'dyna', context: 'دينا', priority: 5 },
        { slug: 'dabab', context: 'دباب', priority: 6 },
        { slug: 'termite-control', context: 'نمل أبيض', priority: 7 },
    ],
};
