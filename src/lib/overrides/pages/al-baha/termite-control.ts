import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS } from '../../trust-anchors';

export const override: PageOverride = {
    meta: { title: 'مكافحة نمل أبيض بالباحة — غابة عرعر سليلوز + ضباب رطوبة + أبنية حجرية تراثية + 5°م تبطئ (2026)', description: 'مكافحة نمل أبيض الباحة. غابة عرعر = سليلوز وفير. ضباب 80% = رطوبة تربة. أبنية حجرية (ذي عين) = شقوق. 5°م تُبطئ لا تقتل. Fipronil + Bait.', h1: 'مكافحة نمل أبيض بالباحة — غابة سليلوز + ضباب + حجر + برودة', keywords: ['مكافحة نمل أبيض بالباحة', 'مكافحة ارضة الباحة', 'شركة مكافحة نمل ابيض بالباحة'] },
    content: { introduction: 'الباحة = بيئة نمل أبيض فريدة: (1) غابة العرعر = سليلوز وفير (جذوع + أوراق + جذور). المستعمرات كبيرة. (2) ضباب 80% = رطوبة تربة عالية 3-4 أشهر = نشاط مُسرّع موسمياً. (3) أبنية حجرية تراثية (ذي عين + قرى بلجرشي) = شقوق بين الأحجار = مداخل. حقن + سد الشقوق. (4) 5°م شتاءً: النمل يتباطأ لكن لا يموت (ليس -2°م كتبوك). يعود بقوة في الربيع.', shortAnswer: 'غابة سليلوز + ضباب رطوبة + حجر شقوق + 5°م تبطئ. Fipronil + Bait + سد.', heroSubtitle: 'غابة تُغذي + ضباب يُنشّط + حجر يُسهّل — والبرودة لا تقتل' },
    pricing: [{ type: 'فحص + معالجة', unit: 'خدمة', minPrice: 450, maxPrice: 900, time: '2-4 ساعات' }, { type: 'مبنى حجري تراثي', unit: 'خدمة', minPrice: 700, maxPrice: 1800, time: '4-8 ساعات' }, { type: 'Bait Stations سنوية', unit: 'سنة', minPrice: 900, maxPrice: 2000, time: '12 فحص' }],
    faq: [{ question: '5°م يقتل النمل؟', answer: 'لا — يتباطأ. يعيش حتى 5°م. يعود بقوة في الربيع. Bait Stations = مراقبة مستمرة.' }, { question: 'قرى حجرية — كيف؟', answer: 'شقوق بين الأحجار = مداخل. سد + حقن Fipronil. الحجر أصلب من الطين لكن الشقوق = مداخل.' }],
    expertTips: ['Bait Stations سنوية — 5°م لا تقتل.', 'فحص ربيعي (مارس) = بعد البرودة ← نشاط.', 'سد شقوق الأبنية الحجرية.'],
    warnings: ['غابة عرعر = سليلوز لا ينتهي. بدون Bait Stations = مستعمرات كبيرة.'],
    trustAnchors: [{ ...GOV.BALADI, role: 'ترخيص شركات مكافحة الآفات' }, { ...GOV.WEQAA, role: 'تسجيل المبيدات' }],
    expertReviewer: EXPERTS.ALKHODAIRY,
    expertCitations: [{ expert: EXPERTS.ALKHODAIRY.name, quote: 'الباحة: غابة عرعر = سليلوز + ضباب = رطوبة. 5°م تُبطئ لا تقتل. Bait Stations سنوية.', source: 'أبحاث حشرات — النمل الأبيض في الغابات الجبلية' }],
    saudiRegulations: [REGULATIONS.GHAD_SYSTEM],
    verificationBadges: [{ badge: '✔️ مكافحة مرخصة', authority: 'بلدي + وقاء', icon: 'shield-check' }],
    equipment: [{ name: 'Fipronil 0.06%', use: 'Cascading Kill' }, { name: 'Bait Stations', use: 'مراقبة سنوية' }, { name: 'سد شقوق', use: 'أبنية حجرية' }],
    hiddenObjections: [{ fear: 'الشتاء يكفي.', solution: '5°م ≠ -2°م. لا يقتل = يعود.' }],
    counterNarratives: [{ myth: 'الباحة باردة = لا نمل.', truth: 'غابة + ضباب = بيئة مثالية 8 أشهر.' }],
    relatedServices: [{ slug: 'pest-control', context: 'حشرات', priority: 1 }, { slug: 'water-insulation', context: 'عزل', priority: 2 }],
};
