import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS } from '../../trust-anchors';

export const override: PageOverride = {
    meta: { title: 'تنظيف بالبخار بالباحة — عفن ضباب موسمي + عث غابة + Laterite = ثلاثي البخار (2026)', description: 'تنظيف بالبخار الباحة. بخار يقتل عفن ضباب + عث غابة عرعر + يُذيب Laterite سطحي. Dehumidifier في موسم الضباب. يجف طبيعياً باقي السنة.', h1: 'تنظيف بالبخار بالباحة — يقتل عفن ضباب + عث غابة', keywords: ['تنظيف بالبخار بالباحة', 'تنظيف بخار الباحة', 'شركة تنظيف بالبخار بالباحة'] },
    content: { introduction: 'البخار في الباحة = أداة موسمية مزدوجة. في الضباب (يوليو-أكتوبر): يقتل عفن Penicillium + لكن Dehumidifier بعده (80% لا تُجفف — مثل جازان). باقي السنة (40-60%): يجف طبيعياً (مثل الرياض). + يقتل عث غابة العرعر. + يُذيب Laterite سطحي.', shortAnswer: 'في الضباب: بخار + Dehumidifier. باقي السنة: يجف طبيعياً. يقتل عفن + عث + Laterite.', heroSubtitle: 'موسمي مزدوج: ضباب = Dehumidifier — باقي السنة = يجف طبيعياً' },
    pricing: [{ type: 'بخار — غرفة', unit: 'غرفة', minPrice: 80, maxPrice: 160, time: '30-60 دقيقة' }, { type: 'بخار — شقة كاملة', unit: 'شقة', minPrice: 250, maxPrice: 500, time: '2-3 ساعات' }],
    faq: [{ question: 'Dehumidifier — متى يلزم؟', answer: 'يوليو-أكتوبر (ضباب 80%): يلزم — مثل جازان. نوفمبر-يونيو (40-60%): لا يلزم — يجف طبيعياً.' }],
    expertTips: ['Dehumidifier فقط في موسم الضباب.', 'بخار بعد كل موسم ضباب — عفن + عث.', 'Laterite السطحي: بخار يُذيبه.'],
    warnings: ['بخار في ضباب 80% بدون Dehumidifier = عفن أسوأ.'],
    trustAnchors: [{ ...GOV.BALADI, role: 'ترخيص شركات التنظيف' }],
    expertReviewer: EXPERTS.ALMOHAIMED,
    expertCitations: [{ expert: EXPERTS.ALMOHAIMED.name, quote: 'بخار الباحة: موسمي مزدوج. ضباب = Dehumidifier. باقي = طبيعي.', source: 'نصائح هندسية — البخار في البيئات الجبلية' }],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH], verificationBadges: [{ badge: '✔️ بخار مرخص', authority: 'بلدي', icon: 'shield-check' }],
    equipment: [{ name: 'بخار 130°م', use: 'يقتل عفن + عث + يُذيب Laterite' }, { name: 'Dehumidifier', use: 'فقط في موسم الضباب (يوليو-أكتوبر)' }],
    hiddenObjections: [{ fear: 'البخار يبلل.', solution: '40-60% عادي = يجف. 80% ضباب = Dehumidifier.' }],
    counterNarratives: [{ myth: 'كل السنة واحد.', truth: 'موسمي مزدوج. ضباب ≠ باقي السنة.' }],
    relatedServices: [{ slug: 'carpet-cleaning', context: 'سجاد — عفن + عث', priority: 1 }, { slug: 'sofa-cleaning', context: 'كنب — ضباب', priority: 2 }, { slug: 'cleaning', context: 'تنظيف — المنزل', priority: 3 }],
};
