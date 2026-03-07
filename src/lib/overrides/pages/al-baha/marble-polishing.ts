import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS } from '../../trust-anchors';

export const override: PageOverride = {
    meta: { title: 'جلي رخام بالباحة — Laterite Fe₂O₃ يصبغ المسام + ضباب Lichen يأكل + 5°م Frost Micro-Cracking (2026)', description: 'جلي رخام الباحة. Laterite يصبغ مسام الرخام. ضباب 80% = Lichen/طحالب. 5°م = Frost Micro-Cracking. Oxalic + Biocide + Sealer.', h1: 'جلي رخام بالباحة — Laterite يصبغ + ضباب يُنبت + برودة تُشقّق', keywords: ['جلي رخام بالباحة', 'جلي رخام الباحة', 'شركة جلي رخام بالباحة'] },
    content: { introduction: '3 آليات جبلية: (1) Laterite Fe₂O₃ يصبغ مسام الرخام ← بقعة حمراء-برتقالية. Poultice Oxalic Acid يسحبها. مبيّض = يُثبّت! (2) ضباب 80% = Lichen + طحالب خضراء على الرخام الخارجي. Biocide + Anti-Moss كل موسم. (3) 5°م شتاءً: ماء في المسام يتجمد ← يتمدد 9% ← Frost Micro-Cracking. Impregnating Sealer يمنع الماء من الدخول.', shortAnswer: 'Laterite يصبغ + Lichen ينمو + Frost يُشقّق. Oxalic + Biocide + Sealer.', heroSubtitle: '3 آليات جبلية: Laterite + ضباب Lichen + Frost Cracking' },
    pricing: [{ type: 'جلي + Sealer', unit: 'م²', minPrice: 15, maxPrice: 30, time: '1-2 يوم' }, { type: 'إزالة Laterite (Poultice)', unit: 'م²', minPrice: 20, maxPrice: 40, time: '2-3 أيام' }, { type: 'خارجي (Biocide + Sealer)', unit: 'م²', minPrice: 25, maxPrice: 45, time: '2-3 أيام' }],
    faq: [{ question: 'Lichen — طحالب على الرخام؟', answer: '80% ضباب × 3-4 أشهر = بيئة مثالية لـ Lichen (نصف طحلب نصف فطر). يأكل CaCO₃. Biocide يقتلها.' }],
    expertTips: ['Oxalic Acid Poultice لـ Laterite — لا مبيّض.', 'Biocide كل موسم ضباب — Lichen.', 'Impregnating Sealer — يمنع Frost Cracking.'],
    warnings: ['مبيّض على Laterite في رخام = بقعة دائمة.', 'رخام خارجي بدون Sealer = Frost Cracking كل شتاء.'],
    trustAnchors: [{ ...GOV.BALADI, role: 'ترخيص شركات الجلي' }],
    expertReviewer: EXPERTS.ALJUND,
    expertCitations: [{ expert: EXPERTS.ALJUND.name, quote: 'رخام الباحة: 3 آليات جبلية. Laterite أخطر — Oxalic فقط.', source: 'موسوعة أخطاء — الرخام في البيئات الجبلية' }],
    saudiRegulations: [REGULATIONS.SBC_601], verificationBadges: [{ badge: '✔️ جلي رخام مرخص', authority: 'بلدي', icon: 'shield-check' }],
    equipment: [{ name: 'Oxalic Acid Poultice', use: 'يسحب Fe₂O₃ من المسام' }, { name: 'Biocide Anti-Moss', use: 'يقتل Lichen ضباب' }, { name: 'Impregnating Sealer', use: 'يمنع ماء = يمنع Frost' }],
    hiddenObjections: [{ fear: 'رخام لا يتأثر.', solution: '3 Mohs + Fe₂O₃ + Lichen + Frost = يتأثر.' }],
    counterNarratives: [{ myth: 'الجو لطيف.', truth: 'ضباب + 5°م = Lichen + Frost.' }],
    relatedServices: [{ slug: 'glass-facades-cleaning', context: 'واجهات — ضباب', priority: 1 }, { slug: 'cleaning', context: 'تنظيف — المبنى', priority: 2 }],
};
