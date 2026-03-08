import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'مكافحة النمل الأبيض بالقطيف — تربة طينية رطبة مثالية + نخيل غذاء + عيون + بيوت تاريخية (2026)',
        description: 'مكافحة نمل أبيض القطيف. تربة طينية 80-95% مثالية. نخيل غذاء. عيون رطوبة أرضية. بيوت تاريخية خشب. Bait + Barrier + فحص.',
        h1: 'مكافحة النمل الأبيض بالقطيف — تربة واحية مثالية ونخيل يُغذيه',
        keywords: ['مكافحة النمل الأبيض القطيف', 'مكافحة نمل بالقطيف', 'شركة مكافحة نمل بالقطيف'],
    },
    content: {
        introduction: 'النمل الأبيض في القطيف يجد بيئته المثالية. الأول — تربة طينية رطبة 80-95%: تربة واحية طينية + رطوبة عالية = أسرع حفر + أسرع نمو. الثاني — نخيل غذاء: ملايين نخلة = سعف + جذوع = غذاء وفير. أكبر مصدر غذاء في المملكة. الثالث — عيون: رطوبة أرضية مُضافة = تربة أكثر رطوبة = مثالية أكثر. الرابع — بيوت تاريخية: القطيف التاريخية = خشب قديم + تربة رطبة = الأكثر عرضة. الخامس — بعوض: مكافحة بعوض ≠ نمل أبيض.',
        shortAnswer: 'على عكس [رش سطحي] الذي لا يصل التربة الطينية العميقة، يعتمد بروتوكولنا في خدمة [مكافحة النمل الأبيض] بمدينة [القطيف] على [Bait + Barrier + فحص نخيل]. ففي ظل [تربة طينية + نخيل + عيون + بيوت تاريخية]، تتفاقم ظاهرة [مثالية + غذاء + رطوبة + خشب قديم]. لذا؛ يتدخل خبراؤنا عبر [بروتوكول نمل ساحلي-واحي].',
        heroSubtitle: 'تربة طينية مثالية + نخيل غذاء + عيون + بيوت تاريخية خشب',
    },
    pricing: [
        { type: 'فحص + تقييم', unit: 'زيارة', minPrice: 120, maxPrice: 250, time: '1-2 ساعة' },
        { type: 'Bait System', unit: 'منزل', minPrice: 680, maxPrice: 1800, time: 'تركيب + مراقبة' },
        { type: 'Barrier', unit: 'فيلا', minPrice: 1300, maxPrice: 3500, time: '1-2 يوم' },
        { type: 'بيت تاريخي (شامل)', unit: 'بيت', minPrice: 1500, maxPrice: 4000, time: '2-3 أيام' },
        { type: 'عقد سنوي', unit: 'سنة', minPrice: 850, maxPrice: 2100, time: '6 زيارات' },
    ],
    faq: [
        { question: 'نخيل — أخطر مصدر؟', answer: 'أخطر — ملايين نخلة = سعف+جذوع = أكبر مصدر غذاء. إزالة سعف ميت = وقاية.' },
        { question: 'بيوت تاريخية — أكثر عرضة؟', answer: 'الأكثر — خشب قديم + تربة رطبة + شقوق = مثالي للنمل. فحص دوري ضروري.' },
        { question: 'تربة طينية — أسوأ؟', answer: 'تربة طينية رطبة = مثالية. النمل يحفر أسرع في طين رطب من رمل جاف.' },
        { question: 'مقابل الجبيل — فرق؟', answer: 'مشابه — لكن نخيل القطيف أكثر + بيوت تاريخية. نفس الرطوبة تقريباً.' },
        { question: 'هل المبيدات آمنة على الأطفال والحيوانات؟', answer: 'مبيدات مسجلة في نظام غد — SFDA. إخلاء 2-4 ساعات بعد الرش. طيور وأسماك: أبِلغ الشركة مسبقاً لاستخدام مواد أخف. الأسطح آمنة بعد الجفاف (1-2 ساعة).' },
    ],
    expertTips: [
        'إزالة سعف ميت — أكبر مصدر غذاء.',
        'فحص بيوت تاريخية — خشب قديم.',
        'Barrier رطوبة — 80-95%.',
        'لا تخلط بعوض مع نمل — آليات مختلفة.',
        'عقد ربع سنوي أوفر 40% من جلسات منفصلة — ويمنع عودة الحشرات بعد 30-45 يوم.',
    ],
    warnings: [
        'تربة طينية + نخيل + 80-95% = أسرع مستعمرات.',
        'بيوت تاريخية بدون فحص = تلف إنشائي.',
        'سعف ميت = وليمة نمل أبيض.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص مكافحة آفات' },
        { ...GOV.WEQAA, role: 'تسجيل مبيدات' },
        { entity: AMANA.SHARQIA.entity, url: AMANA.SHARQIA.url, role: 'صحة عامة بالشرقية' },
    ],
    expertReviewer: EXPERTS.ALJUND,
    expertCitations: [
        { expert: EXPERTS.ALKHODAIRY.name, quote: 'نمل القطيف: تربة طينية مثالية + نخيل غذاء + عيون + بيوت تاريخية. أكبر خطر نمل في المملكة.', source: 'أبحاث حشرات — نمل الواحات الساحلية' },
    ],
    saudiRegulations: [REGULATIONS.GHAD_SYSTEM],
    verificationBadges: [{ badge: '✔️ مكافحة مرخصة', authority: 'بلدي + وقاء', icon: 'shield-check' }],
    equipment: [
        { name: 'Bait System', use: 'تربة طينية' },
        { name: 'Barrier', use: 'رطوبة 80-95%' },
        { name: 'فحص UV', use: 'خشب تاريخي — بيوت' },
    ],
    hiddenObjections: [
        { fear: 'بيت قديم = مستحيل.', solution: 'Bait + Barrier حتى بيوت تاريخية. الحل موجود.' },
        { fear: 'رش بعوض يكفي.', solution: 'آلية مختلفة.' },
    ],
    counterNarratives: [
        { myth: 'مثل حفر الباطن.', truth: '80-95% طين vs 10-15% رمل. أسرع 5×.' },
        { myth: 'Barrier عادي.', truth: 'تربة طينية رطبة = يتحلل. مُخصص.' },
    ],
    relatedServices: [
        { slug: 'pest-control', context: 'حشرات', priority: 1 },
        { slug: 'bedbugs-control', context: 'بق', priority: 2 },
        { slug: 'furniture-cleaning', context: 'أثاث — خشب', priority: 3 },
        { slug: 'villas-cleaning', context: 'فلل', priority: 4 },
        { slug: 'cleaning', context: 'تنظيف', priority: 5 },
        { slug: 'furniture-storage', context: 'تخزين', priority: 6 },
        { slug: 'steam-cleaning', context: 'بخار', priority: 7 },
    ],
};
