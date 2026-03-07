import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS } from '../../trust-anchors';

export const override: PageOverride = {
    meta: { title: 'مكافحة النمل الأبيض بجازان — رطوبة 80% = بيئة مثالية 12/12 + أسرع تكاثر + تربة رطبة = أنفاق لا تنهار (2026)', description: 'مكافحة نمل أبيض جازان. 80% رطوبة = بيئة مثالية = أسرع تكاثر وأطول أنفاق في المملكة. التربة رطبة = الأنفاق لا تنهار. المبيد يتحلل في 80%. Soil Treatment + Bait Stations.', h1: 'مكافحة النمل الأبيض بجازان — البيئة الاستوائية المثالية = أخطر إصابات', keywords: ['مكافحة نمل أبيض بجازان', 'مكافحة ارضة جازان', 'شركة مكافحة نمل ابيض بجازان'] },
    content: { introduction: 'جازان = أفضل بيئة للنمل الأبيض في المملكة. 3 أسباب: (1) رطوبة مثالية دائمة: النمل يحتاج 70-90% رطوبة — جازان توفرها طبيعياً 12/12. لا حاجة لحفر عميق (عكس الرياض/تبوك). المستعمرة تتوسع بسرعة. (2) تربة رطبة = أنفاق لا تنهار: في الرياض: الأنفاق تنهار في التربة الجافة. في جازان: التربة رطبة ← الأنفاق مستقرة ← تمتد أبعد. (3) المبيد الكيميائي يتحلل في 80%: الحاجز Pre-Construction يتحلل أسرع (الرطوبة تُسرّع التحلل البيولوجي). عمر: 3-5 سنوات (مقابل 5-8 في الرياض). الحل: Fipronil Cascading Kill + Bait Stations 12/12 + حقن تجديدي كل 3-5 سنوات.', shortAnswer: '80% = بيئة مثالية = أسرع تكاثر + أطول أنفاق + مبيد يتحلل أسرع. Fipronil + Bait Stations 12/12 + حقن تجديدي.', heroSubtitle: 'بيئة مثالية 12/12 = أسرع تكاثر + أطول أنفاق — أخطر مدينة' },
    pricing: [{ type: 'فحص + معالجة — شقة/منزل', unit: 'خدمة', minPrice: 500, maxPrice: 1000, time: '2-4 ساعات' }, { type: 'حقن تجديدي — فيلا', unit: 'خدمة', minPrice: 1000, maxPrice: 2500, time: '4-6 ساعات' }, { type: 'Bait Stations + مراقبة سنوية', unit: 'سنة', minPrice: 1200, maxPrice: 2500, time: '12 فحص' }],
    faq: [{ question: 'جازان أخطر من تبوك للنمل؟', answer: 'نعم — في تبوك: الجفاف والصقيع يبطئان النمل. في جازان: 80% = بيئة مثالية 12/12. أسرع تكاثر + أطول أنفاق + لا توقف موسمي.' }],
    expertTips: ['Bait Stations 12/12 — لا توقف موسمي.', 'حقن تجديدي كل 3-5 سنوات — المبيد يتحلل في 80%.', 'Fipronil حصراً — Cascading Kill.', 'فحص شهري في موسم الأمطار (يوليو-سبتمبر) — الأنفاق تتوسع أسرع.'],
    warnings: ['80% = بيئة مثالية = الإصابة تتوسع بسرعة. التأخير = كارثة.', 'حاجز 3+ سنوات في جازان = منتهي (التحلل البيولوجي).'],
    trustAnchors: [{ ...GOV.BALADI, role: 'ترخيص شركات مكافحة الآفات' }, { ...GOV.WEQAA, role: 'تسجيل المبيدات' }],
    expertReviewer: EXPERTS.ALJUND,
    expertCitations: [{ expert: EXPERTS.ALKHODAIRY.name, quote: 'جازان = أفضل بيئة للنمل الأبيض سعودياً. 80% رطوبة = بيئة مثالية 12/12 + التربة الرطبة = أنفاق لا تنهار + المبيد يتحلل أسرع. Bait Stations 12/12 = إلزامي.', source: 'أبحاث حشرات — النمل الأبيض في المناخ الاستوائي' }],
    saudiRegulations: [REGULATIONS.GHAD_SYSTEM],
    verificationBadges: [{ badge: '✔️ مكافحة مرخصة', authority: 'بلدي + وقاء', icon: 'shield-check' }],
    equipment: [{ name: 'Fipronil 0.06%', use: 'Cascading Kill — يقتل المستعمرة عبر التلامس' }, { name: 'Bait Stations', use: '12/12 مراقبة — لا توقف موسمي' }, { name: 'حقن ضغط عالي', use: 'تجديد الحاجز المُتحلل' }],
    hiddenObjections: [{ fear: 'ما شفت نمل.', solution: 'النمل تحت الأرض. 80% = أنفاق مستقرة = قد يصل دون أن تُلاحظ. Bait Stations = كشف مبكر.' }],
    counterNarratives: [{ myth: 'مرة واحدة تكفي.', truth: '80% يُحلل المبيد. + المستعمرة نشطة 12/12. مرة = حماية مؤقتة. Bait Stations 12/12 = حماية دائمة.' }],
    relatedServices: [{ slug: 'pest-control', context: 'حشرات — شاملة', priority: 1 }, { slug: 'water-leak-detection', context: 'تسربات — رطوبة تجذب', priority: 2 }, { slug: 'water-insulation', context: 'عزل — يمنع رطوبة', priority: 3 }],
};
