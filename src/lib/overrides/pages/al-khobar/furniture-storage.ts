import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تخزين أثاث بالخبر — NaCl يُصدّئ المخزّن + 85-95% عفن + PVAc تفكك + تكثّف أجهزة (2026)',
        description: 'تخزين أثاث الخبر. NaCl يترسب داخل المستودع. 85-95% عفن حتمي على أثاث مخزّن. PVAc يتفكك. تكثّف أجهزة. مستودع مُكيّف + Dehumidifier + VCI + Anti-Fungal.',
        h1: 'تخزين أثاث بالخبر — مستودع ساحلي: مُحكم + جاف + Anti-Corrosion',
        keywords: ['تخزين أثاث بالخبر', 'تخزين عفش الخبر', 'شركة تخزين أثاث بالخبر'],
    },
    content: {
        introduction: 'تخزين الأثاث في الخبر يحتاج مستودع ساحلي — ليس مجرد غرفة. الشرط الأول — محكم ضد NaCl: مستودع بدون إحكام = NaCl يدخل ← يُصدّئ كل معدن مخزّن خلال أسابيع. ختم كامل + فلاتر على فتحات التهوية. الشرط الثاني — Dehumidifier 24/7: 85-95% = عفن على كل سطح خلال أسبوعين. مستودع بدون Dehumidifier في الخبر = مستودع عفن. Dehumidifier يُخفض ← 40-50% = آمن. الشرط الثالث — Anti-Corrosion + VCI: المعادن تحتاج حماية مُضاعفة في التخزين الطويل. VCI داخل التغليف + Anti-Corrosion على المكشوف. الشرط الرابع — تبريد مُعتدل: 45°م + 85-95% = PVAc أسوأ مكان (يلين + يمتص رطوبة). مُبرّد < 35°م = آمن.',
        shortAnswer: 'على عكس [مستودع عادي بدون Dehumidifier] الذي يُعفّن ويُصدّئ، يعتمد بروتوكولنا في خدمة [تخزين الأثاث] بمدينة [الخبر] على [مُحكم + Dehumidifier + VCI + مُبرّد]. ففي ظل [NaCl + 85-95% + PVAc]، تتفاقم ظاهرة [صدأ + عفن + تفكك]. لذا؛ يتدخل خبراؤنا عبر [مستودع ساحلي مُتحكّم].',
        heroSubtitle: 'مُحكم NaCl + Dehumidifier 85-95% + VCI + مُبرّد PVAc',
    },
    pricing: [
        { type: 'تخزين — غرفة صغيرة (10 م²)', unit: 'شهر', minPrice: 300, maxPrice: 600, time: 'شهري' },
        { type: 'تخزين — غرفة كبيرة (20 م²)', unit: 'شهر', minPrice: 500, maxPrice: 1000, time: 'شهري' },
        { type: 'تغليف بحري + نقل + تخزين', unit: 'باقة', minPrice: 1000, maxPrice: 2500, time: 'حسب الحجم' },
        { type: 'عقد سنوي (خصم 15%)', unit: 'سنة', minPrice: 3000, maxPrice: 6000, time: 'سنوي' },
    ],
    faq: [
        { question: 'Dehumidifier 24/7 — ضروري؟', answer: '85-95% = أعلى رطوبة في المملكة. بدون Dehumidifier: عفن خلال أسبوعين. كل مستودع بدون Dehumidifier في الخبر = مستودع تلف.' },
        { question: 'NaCl يدخل المستودع — كيف؟', answer: 'فتحات تهوية + شقوق + أبواب تُفتح = NaCl من الهواء. ختم + فلاتر = يُقلل 90%+. VCI داخل تغليف = حماية إضافية.' },
        { question: 'PVAc في الخبر — أسوأ من الأحساء؟', answer: 'الأحساء 48°م + 30-40% = حرارة عالية + جفاف. الخبر 45°م + 85-95% = حرارة + رطوبة = PVAc يلين + يمتص ← أسوأ مزيج. مُبرّد + Dehumidifier.' },
        { question: 'فحص شهري — ماذا يشمل؟', answer: 'حرارة (< 35°م) + رطوبة (40-50%) + فحص صدأ + فحص عفن + سلامة تغليف. تقرير بالصور.' },
        { question: 'أرخص من الأحساء؟', answer: 'أغلى — Dehumidifier 24/7 = كهرباء أعلى. إحكام NaCl = تكلفة أعلى. لكن: الخسارة بدون حماية = أعلى بكثير.' },
    ],
    expertTips: [
        'Dehumidifier 24/7 = الشرط رقم 1. بدونه: كل شيء آخر لا يكفي.',
        'VCI داخل تغليف كل قطعة معدنية — Anti-Corrosion + VCI = حماية مُزدوجة.',
        'فحص شهري — 85-95% = العفن ينمو بسرعة. شهري = يكشف مبكراً.',
        'تغليف Stretch Film + EPE — يعزل NaCl + يحمي من خدش + يعزل تكثّف.',
        'اختر مستودع مُكيّف + Dehumidifier — ليس كل مستودعات الخبر مُجهّزة.',
    ],
    warnings: [
        'مستودع بدون Dehumidifier في 85-95% = عفن على كل سطح خلال أسبوعين. أثاث أخضر/أسود = تالف.',
        'NaCl بدون إحكام = صدأ على كل معدن مخزّن. مفصلات + أسرّة + طاولات = تالفة.',
        'PVAc في 45°م + 85-95% بدون تبريد = مفاصل تنفك خلال أشهر. أثاث مُفكّك.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص مستودعات' },
        { entity: AMANA.SHARQIA.entity, url: AMANA.SHARQIA.url, role: 'اشتراطات التخزين بالشرقية' },
    ],
    expertReviewer: EXPERTS.ALMOHAIMED,
    expertCitations: [
        { expert: EXPERTS.ALMOHAIMED.name, quote: 'تخزين الخبر = أصعب في المملكة: NaCl + 85-95% + PVAc. Dehumidifier 24/7 + إحكام + VCI + تبريد = المستودع الساحلي الوحيد الآمن.', source: 'نصائح هندسية — تخزين الأثاث الساحلي' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [
        { badge: '✔️ مستودع مرخص', authority: 'منصة بلدي', icon: 'shield-check' },
        { badge: '✔️ تحكّم مناخي', authority: 'معتمد داخلياً', icon: 'badge-check' },
    ],
    equipment: [
        { name: 'Dehumidifier مركزي (24/7)', use: 'يُخفض 85-95% إلى 40-50% — الشرط الأول' },
        { name: 'ختم + فلاتر NaCl', use: 'يمنع ملح بحري من الدخول' },
        { name: 'VCI + Anti-Corrosion', use: 'حماية مُزدوجة للمعادن المخزّنة' },
        { name: 'تبريد < 35°م', use: 'يحمي PVAc من التلين + الامتصاص' },
    ],
    hiddenObjections: [
        { fear: 'مستودع عادي أرخص.', solution: 'عادي في 85-95% = عفن + صدأ = تالف. أرخص بـ 200-300/شهر — أغلى بـ 10,000-50,000 في التلف.' },
        { fear: 'تخزين قصير.', solution: 'أسبوعان كافية لعفن في 85-95%. صدأ يبدأ في ساعات. قصير ≠ آمن.' },
    ],
    consumerEducation: [
        { myth: 'أي مستودع.', truth: 'بدون Dehumidifier = عفن. بدون إحكام = صدأ. بدون تبريد = تفكك. 3 = تلف.' },
        { myth: 'مثل الأحساء.', truth: '85-95% ≠ 30-40%. NaCl ≠ CaSO₄. أسوأ بيئة تخزين في المملكة.' },
        { myth: 'البيت أفضل.', truth: 'غرفة مُغلقة بدون Dehumidifier في 85-95% = عفن. نفس المشكلة.' },
    ],
    relatedServices: [
        { slug: 'furniture-moving', context: 'نقل — من البيت للمستودع', priority: 1 },
        { slug: 'furniture-cleaning', context: 'أثاث — تنظيف قبل التخزين', priority: 2 },
        { slug: 'pest-control', context: 'حشرات — فحص مستودع', priority: 3 },
        { slug: 'cleaning', context: 'تنظيف — المكان بعد التخزين', priority: 4 },
        { slug: 'dyna', context: 'دينا — نقل ثقيل', priority: 5 },
        { slug: 'dabab', context: 'دباب — نقل خفيف', priority: 6 },
        { slug: 'termite-control', context: 'نمل أبيض — حماية', priority: 7 },
    ],
};
