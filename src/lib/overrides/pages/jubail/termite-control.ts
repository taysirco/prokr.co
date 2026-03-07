import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'مكافحة النمل الأبيض بالجبيل — 85-98% تربة مثالية + SABIC خشب صناعي + Biofilm + بعوض (2026)',
        description: 'مكافحة نمل أبيض الجبيل. 85-98% تربة رطبة مثالية. SABIC خشب صناعي يُمدّ. Biofilm يحمي. بعوض مُركّب. Bait + Barrier Marine + Anti-Biofilm.',
        h1: 'مكافحة النمل الأبيض بالجبيل — رطوبة مثالية وصناعة تُمدّه',
        keywords: ['مكافحة النمل الأبيض الجبيل', 'مكافحة نمل بالجبيل', 'شركة مكافحة نمل بالجبيل'],
    },
    content: {
        introduction: 'النمل الأبيض في الجبيل = الأسرع نمواً في المملكة بسبب 4 عوامل. الأول — 85-98% تربة رطبة مثالية: أعلى رطوبة تربة = أسرع حفر + أسرع نمو. عكس حفر الباطن (10-15% = أبطأ). الثاني — SABIC خشب صناعي: المنطقة الصناعية = كميات خشب (بناء سقائل + صناديق + منصات نقل). خشب مهمل = مصدر غذاء مثالي. الثالث — Biofilm: 98% = Biofilm يحمي أنفاق النمل. Barrier لا يصل. Anti-Biofilm. الرابع — بعوض مُركّب: مكافحة بعوض ≠ مكافحة نمل. خطأ شائع.',
        shortAnswer: 'على عكس [رش سطحي] الذي لا يصل أنفاق Biofilm، يعتمد بروتوكولنا في خدمة [مكافحة النمل الأبيض] بمدينة [الجبيل] على [Bait + Barrier Marine + Anti-Biofilm]. ففي ظل [85-98% + خشب صناعي + Biofilm]، تتفاقم ظاهرة [نمو أسرع + غذاء + حماية]. لذا؛ يتدخل خبراؤنا عبر [بروتوكول نمل صناعي-ساحلي].',
        heroSubtitle: '85-98% مثالية + خشب SABIC + Biofilm + بعوض مُركّب',
    },
    pricing: [
        { type: 'فحص + تقييم', unit: 'زيارة', minPrice: 130, maxPrice: 270, time: '1-2 ساعة' },
        { type: 'Bait System Marine', unit: 'منزل', minPrice: 730, maxPrice: 1900, time: 'تركيب + مراقبة' },
        { type: 'Barrier Marine', unit: 'فيلا', minPrice: 1400, maxPrice: 3800, time: '1-2 يوم' },
        { type: 'عقد سنوي مُركّب', unit: 'سنة', minPrice: 930, maxPrice: 2300, time: '6 زيارات' },
    ],
    faq: [
        { question: '85-98% — أسرع نمو؟', answer: 'الأسرع في المملكة — النمل يحتاج رطوبة. 98% = مثالي. حفر الباطن 10-15%: أبطأ. الجبيل 98%: أسرع. عكس كامل.' },
        { question: 'خشب SABIC — يُمدّ؟', answer: 'سقائل + صناديق + منصات = خشب مهمل حول المنطقة الصناعية = مصدر غذاء. إزالة خشب = وقاية.' },
        { question: 'Biofilm — يحمي النمل؟', answer: '98% = Biofilm على أنفاق. Barrier لا يخترق. Anti-Biofilm ← عندها Barrier يصل.' },
        { question: 'Barrier Marine — فرق؟', answer: 'Marine = مُقاوم NaCl+رطوبة. عادي = يتحلل في 98%. Marine يدوم 3×.' },
    ],
    expertTips: [
        'Anti-Biofilm قبل Barrier — 98% Biofilm أنفاق.',
        'إزالة خشب صناعي — مصدر غذاء SABIC.',
        'Barrier Marine — يقاوم 98%+NaCl. عادي يتحلل.',
        'لا تخلط بعوض مع نمل — آليات مختلفة.',
    ],
    warnings: [
        '85-98% + خشب صناعي = أسرع مستعمرات في المملكة.',
        'Barrier عادي في 98% = يتحلل أسرع. Marine.',
        'Biofilm أنفاق = Barrier لا يصل بدون Anti-Biofilm.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص مكافحة آفات' },
        { ...GOV.WEQAA, role: 'تسجيل مبيدات' },
        { entity: AMANA.SHARQIA.entity, url: AMANA.SHARQIA.url, role: 'صحة عامة بالشرقية' },
    ],
    expertReviewer: EXPERTS.ALKHODAIRY,
    expertCitations: [
        { expert: EXPERTS.ALKHODAIRY.name, quote: 'نمل أبيض الجبيل: 85-98% مثالي = أسرع نمو. خشب SABIC = غذاء. Biofilm = حماية. Barrier Marine + Anti-Biofilm.', source: 'أبحاث حشرات — نمل التربة الرطبة الصناعية' },
    ],
    saudiRegulations: [REGULATIONS.GHAD_SYSTEM],
    verificationBadges: [
        { badge: '✔️ مكافحة مرخصة', authority: 'بلدي + وقاء', icon: 'shield-check' },
    ],
    equipment: [
        { name: 'Bait System Marine', use: 'يقاوم 98%+NaCl' },
        { name: 'Barrier Marine', use: 'يدوم 3× في 98%' },
        { name: 'Anti-Biofilm', use: '98% — يكشف أنفاق' },
    ],
    hiddenObjections: [
        { fear: 'جاف أسوأ.', solution: 'عكس! 98% = أسرع نمو. 10-15% = أبطأ.' },
        { fear: 'رش بعوض يكفي.', solution: 'بعوض ≠ نمل أبيض. آليات مختلفة.' },
    ],
    counterNarratives: [
        { myth: 'مثل حفر الباطن.', truth: '98% vs 10-15%. أسرع vs أبطأ. عكس كامل.' },
        { myth: 'Barrier عادي.', truth: '98%+NaCl يتحلل. Marine يدوم 3×.' },
    ],
    relatedServices: [
        { slug: 'pest-control', context: 'حشرات — بعوض', priority: 1 },
        { slug: 'bedbugs-control', context: 'بق', priority: 2 },
        { slug: 'furniture-cleaning', context: 'أثاث — خشب', priority: 3 },
        { slug: 'villas-cleaning', context: 'فلل', priority: 4 },
        { slug: 'cleaning', context: 'تنظيف', priority: 5 },
        { slug: 'furniture-storage', context: 'تخزين', priority: 6 },
        { slug: 'steam-cleaning', context: 'بخار', priority: 7 },
    ],
};
