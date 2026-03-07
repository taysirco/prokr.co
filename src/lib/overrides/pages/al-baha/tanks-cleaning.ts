import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS } from '../../trust-anchors';

export const override: PageOverride = {
    meta: { title: 'تنظيف خزانات بالباحة — أمطار صيفية تملأ + ضباب يُنتج تكاثف + Laterite يترسب + 5°م (2026)', description: 'تنظيف خزانات الباحة. أمطار صيفية. ضباب تكاثف تحت الغطاء. Laterite رواسب. 5°م كلور بطيء. تعقيم نصف سنوي.', h1: 'تنظيف خزانات بالباحة — أمطار + ضباب + Laterite + برودة', keywords: ['تنظيف خزانات بالباحة', 'تنظيف خزان الباحة', 'شركة تنظيف خزانات بالباحة'] },
    content: { introduction: '4 تحديات: (1) أمطار صيفية = ماء مُلوّث يدخل خزانات مفتوحة. غطاء محكم. (2) ضباب 80% = تكاثف تحت الغطاء ← عفن. فتحة تهوية. (3) Laterite = رواسب حمراء في القاع = تلوين ماء. تنظيف قاع. (4) 5°م = كلور يعمل أبطأ 50%. جرعة أعلى شتاءً.', shortAnswer: 'أمطار + ضباب + Laterite + كلور بطيء. غطاء + فتحة + تنظيف قاع + كلور مُضاعف.', heroSubtitle: 'أمطار تملأ + ضباب يُعفّن + Laterite يترسب + 5°م يُبطئ الكلور' },
    pricing: [{ type: 'تنظيف + تعقيم', unit: 'خزان', minPrice: 130, maxPrice: 300, time: '2-3 ساعات' }, { type: 'عقد نصف سنوي', unit: 'سنة', minPrice: 220, maxPrice: 500, time: '2 زيارة' }],
    faq: [{ question: 'كلور بطيء — 5°م؟', answer: 'الكلور يعمل أبطأ 50% في ماء بارد. جرعة مُضاعفة أو وقت أطول.' }],
    expertTips: ['غطاء محكم + فتحة تهوية.', 'كلور مُضاعف شتاءً.', 'تنظيف رواسب Laterite.'],
    warnings: ['كلور عادي في 5°م = نصف فعالية.'],
    trustAnchors: [{ ...GOV.BALADI, role: 'ترخيص تنظيف الخزانات' }],
    expertReviewer: EXPERTS.ALJUND,
    expertCitations: [{ expert: EXPERTS.ALJUND.name, quote: 'خزان الباحة: 5°م = كلور بطيء. جرعة مُضاعفة أو وقت أطول.', source: 'موسوعة أخطاء' }],
    saudiRegulations: [REGULATIONS.NWC_REPORT], verificationBadges: [{ badge: '✔️ مرخص', authority: 'بلدي + NWC', icon: 'shield-check' }],
    equipment: [{ name: 'كلور مُركّز', use: '5°م = جرعة أعلى' }, { name: 'فرشاة قاع', use: 'Laterite' }],
    hiddenObjections: [{ fear: 'سنوي يكفي.', solution: 'ضباب + أمطار + Laterite + كلور بطيء = نصف سنوي.' }], counterNarratives: [{ myth: 'الخزان آمن.', truth: 'ضباب + أمطار + Laterite = 3 مصادر تلوث.' }],
    relatedServices: [{ slug: 'swimming-pool-cleaning', context: 'مسابح', priority: 1 }, { slug: 'pest-control', context: 'حشرات', priority: 2 }],
};
