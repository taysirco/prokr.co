import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS } from '../../trust-anchors';

export const override: PageOverride = {
    meta: { title: 'تنظيف كنب بعنيزة — CaCO₃ يُبيّض + Nafud يخدش + 48°م PVAc 70°م + 0°م تصلّب + جفاف مفرط (2026)', description: 'تنظيف كنب عنيزة. CaCO₃ 600ppm يُبيّض. Nafud يخدش. 48°م سطح 70°م = PVAc يسيل. 0°م = PVAc يتصلب. 10% = جلد يتشقق.', h1: 'تنظيف كنب بعنيزة — CaCO₃ + Nafud + حرارة مفرطة + جفاف', keywords: ['تنظيف كنب بعنيزة', 'تنظيف كنب عنيزة'] },
    content: { introduction: '5 تحديات: (1) CaCO₃ 600ppm يُبيّض الأقمشة الداكنة. Citric Acid + RO water. (2) Nafud 7 Mohs يخدش الجلد. HEPA أولاً. (3) 48°م سطحي → نوافذ مواجهة = 70-85°م → PVAc يسيل → مفاصل تنفك. (4) 0°م شتاءً = PVAc يتصلب = هشاشة. Conditioner. (5) 10% RH = جلد يفقد 40-60% رطوبة → يتشقق خلال 6-12 شهراً. Leather Conditioner كل 3 أشهر. الكنب القصيمي يعيش أصعب 46°م Delta في المملكة: من 0°م (شتاء) إلى 70°م (سطح صيف).', shortAnswer: 'CaCO₃ يُبيّض + Nafud يخدش + 70°م PVAc + 0°م تصلّب + 10% تشقق. 5 معالجات مختلفة.', heroSubtitle: 'أصعب 46°م Delta: CaCO₃ + Nafud + PVAc يسيل/يتصلب + جلد يتشقق' },
    pricing: [{ type: 'تنظيف + Descaling + Conditioner', unit: 'طقم', minPrice: 200, maxPrice: 400, time: '2-3 ساعات' }, { type: 'ربع سنوي (كل فصل)', unit: 'سنة', minPrice: 500, maxPrice: 1000, time: '4 زيارات' }],
    faq: [{ question: 'جلد يتشقق — كل سنة؟', answer: '10% RH = يفقد رطوبة. Leather Conditioner كل 3 أشهر = يمنع.' }, { question: 'مفاصل تنفك صيفاً؟', answer: 'سطح نوافذ 70°م = PVAc يسيل. ستائر عازلة + بعد عن النوافذ.' }],
    expertTips: ['RO water لا صنبور.', 'HEPA أولاً — Nafud.', 'Leather Conditioner كل 3 أشهر.', 'ستائر عازلة — PVAc.'],
    warnings: ['70°م سطحي = PVAc يسيل = مفصل ينفك.', '10% بدون Conditioner = جلد يتشقق.'],
    trustAnchors: [{ ...GOV.BALADI, role: 'ترخيص' }], expertReviewer: EXPERTS.ALMOHAIMED,
    expertCitations: [{ expert: EXPERTS.ALMOHAIMED.name, quote: 'كنب عنيزة: 46°م Delta = أصعب بيئة أثاث بالمملكة.', source: 'نصائح هندسية — الأثاث في القصيم' }],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH], verificationBadges: [{ badge: '✔️ مرخص', authority: 'بلدي', icon: 'shield-check' }],
    equipment: [{ name: 'Citric Acid + RO', use: 'CaCO₃' }, { name: 'HEPA', use: 'Nafud' }, { name: 'Leather Conditioner', use: '10% جفاف' }],
    hiddenObjections: [{ fear: 'منظف عادي.', solution: '5 تحديات مختلفة.' }], counterNarratives: [{ myth: 'الجو جاف = نظيف.', truth: 'جاف = CaCO₃ يترسب + جلد يتشقق.' }],
    relatedServices: [{ slug: 'carpet-cleaning', context: 'سجاد', priority: 1 }, { slug: 'furniture-cleaning', context: 'أثاث', priority: 2 }],
};
