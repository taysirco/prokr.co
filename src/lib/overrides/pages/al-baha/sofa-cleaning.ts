import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS } from '../../trust-anchors';

export const override: PageOverride = {
    meta: { title: 'تنظيف كنب بالباحة — Laterite Fe₂O₃ يصبغ + ضباب يُعفّن الحشو + برودة تُصلّب PVAc (2026)', description: 'تنظيف كنب الباحة. Laterite يصبغ الأقمشة. ضباب 80% يُعفّن الحشو 3-4 أشهر. 5°م شتاءً يُصلّب PVAc. Oxalic Acid + Anti-Fungal + Conditioner.', h1: 'تنظيف كنب بالباحة — Laterite يصبغ + ضباب يُعفّن + برودة تُصلّب', keywords: ['تنظيف كنب بالباحة', 'تنظيف كنب الباحة', 'شركة تنظيف كنب بالباحة'] },
    content: { introduction: '3 تحديات: (1) Laterite Fe₂O₃ يصبغ الأقمشة — بقعة حمراء من الأحذية/الأطفال. Oxalic Acid. (2) ضباب 80% يُعفّن الحشو: 3-4 أشهر رطوبة مرتفعة = Penicillium في الحشو. Anti-Fungal بعد كل موسم + Dehumidifier. (3) 5°م شتاءً: PVAc يتصلب ← المفاصل تصبح هشة (ليس كتبوك -2°م لكن 5°م كافية لـ PVAc). في الباحة: عكس جازان — المشكلة = برودة + ضباب (ليس حرارة + رطوبة).', shortAnswer: 'Laterite يصبغ + ضباب يُعفّن + برودة تُصلّب. Oxalic Acid + Anti-Fungal + Conditioner.', heroSubtitle: 'تربة حمراء + ضباب عفن + برودة شتاء' },
    pricing: [{ type: 'تنظيف + Oxalic Acid + Anti-Fungal', unit: 'طقم', minPrice: 200, maxPrice: 400, time: '2-3 ساعات' }, { type: 'عقد نصف سنوي (بعد ضباب + بعد شتاء)', unit: 'سنة', minPrice: 350, maxPrice: 700, time: '2 زيارات' }],
    faq: [{ question: 'ضباب يعفّن الكنب؟', answer: '80% × 3-4 أشهر = Penicillium في الحشو. Dehumidifier أثناء الموسم + Anti-Fungal بعده.' }],
    expertTips: ['Oxalic Acid لبقع Laterite.', 'Anti-Fungal بعد كل موسم ضباب.', 'Dehumidifier يوليو-أكتوبر.', 'فحص PVAc بعد الشتاء.'],
    warnings: ['مبيّض على Laterite = يُثبّت = بقعة دائمة.', 'ضباب بدون Dehumidifier = عفن حشو.'],
    trustAnchors: [{ ...GOV.BALADI, role: 'ترخيص شركات التنظيف' }],
    expertReviewer: EXPERTS.ALMOHAIMED,
    expertCitations: [{ expert: EXPERTS.ALMOHAIMED.name, quote: 'كنب الباحة: Laterite + ضباب + برودة = 3 فصول مختلفة. Oxalic Acid + Anti-Fungal + Conditioner.', source: 'نصائح هندسية — الأثاث في البيئات الجبلية' }],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH], verificationBadges: [{ badge: '✔️ تنظيف كنب مرخص', authority: 'بلدي', icon: 'shield-check' }],
    equipment: [{ name: 'Oxalic Acid', use: 'يَختزل Fe₂O₃ من الأقمشة' }, { name: 'Anti-Fungal', use: 'بعد موسم الضباب' }, { name: 'Dehumidifier', use: 'أثناء الضباب' }],
    hiddenObjections: [{ fear: 'الباحة معتدلة.', solution: 'ضباب 80% × 3-4 أشهر = عفن. + 5°م = PVAc.' }],
    counterNarratives: [{ myth: 'الجو لطيف.', truth: 'لطيف للإنسان. ضباب + Laterite + 5°م = تحديات للأثاث.' }],
    relatedServices: [{ slug: 'carpet-cleaning', context: 'سجاد — Laterite', priority: 1 }, { slug: 'furniture-cleaning', context: 'أثاث — PVAc', priority: 2 }, { slug: 'steam-cleaning', context: 'بخار — عفن', priority: 3 }],
};
