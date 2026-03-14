import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'مكافحة بق الفراش بينبع — 70-85% تكاثر+NaCl+SOx+حرارة — بخار حراري+مبيد! (2026)',
        description: 'مكافحة بق الفراش ينبع. 70-85% رطوبة تكاثر! NaCl+SOx. حرارة 45°م. بخار حراري 56°م+مبيد+HEPA.',
        h1: 'مكافحة بق الفراش بينبع — رطوبة تكاثر!',
        keywords: ['مكافحة بق الفراش ينبع', 'مكافحة بق بينبع', 'شركة مكافحة بق الفراش ينبع'],
    },
    content: {
        introduction: 'بق ينبع = رطوبة تُسرّع تكاثر! 70-85% تكاثر: بق الفراش يتكاثر أسرع في الرطوبة العالية — دورة حياة أقصر = مستعمرات أكبر. مقارنة ببريدة (10-20%): بريدة جافة = بيض يجف أبطأ. ينبع: بيض ينقف أسرع. حرارة 45°م: صيف = بق أنشط = لدغات أكثر. بخار حراري 56°م يقتل فوراً (بيض + بالغ). NaCl: ملح لا يأثر مباشرة. SOx: لا يأثر. التحدي الرئيسي: رطوبة + حرارة = تكاثر مضاعف. فنادق ينبع ساحلية + عمالة ميناء = مصادر. بخار 56°م + مبيد مُركّز + HEPA للبيض.',
        shortAnswer: 'على عكس [المبيد السطحي بدون بخار]، يعتمد بروتوكولنا في خدمة [مكافحة البق] بمدينة [ينبع] على [بخار حراري 56°م+مبيد مُركّز+HEPA+فحص دوري]. ففي ظل [70-85% تكاثر+حرارة 45°م+فنادق+ميناء]، تتفاقم ظاهرة [دورة حياة أقصر+مستعمرات أكبر]. لذا؛ يتدخل فنيونا عبر [بخار ← مبيد ← HEPA ← فحص].',
        heroSubtitle: '70-85% تكاثر + حرارة = مستعمرات أكبر — بخار 56°م+مبيد!',
    },
    pricing: [
        { type: 'شقة (غرفة واحدة)', unit: 'غرفة', minPrice: 150, maxPrice: 310, time: '1-2h' },
        { type: 'شقة (3 غرف)', unit: 'شقة', minPrice: 300, maxPrice: 620, time: '3-4h' },
        { type: 'فندق (غرفة)', unit: 'غرفة', minPrice: 200, maxPrice: 420, time: '1-2h' },
        { type: 'ضمان شهرين (3 زيارات)', unit: 'باقة', minPrice: 400, maxPrice: 800, time: '3 زيارات' },
    ],
    faq: [
        { question: 'ليش بق ينبع أكثر تكاثراً؟', answer: '70-85% رطوبة = بيض ينقف أسرع. حرارة 45°م = أنشط. مستعمرات أكبر.' },
        { question: 'من أين يأتي البق بينبع؟', answer: 'فنادق ساحلية+عمالة ميناء+سفر. ينتقل بالحقائب.' },
        { question: 'كم تكلفة مكافحة بق بينبع مقارنة ببريدة؟', answer: 'أغلى 15-20% — تكاثر أسرع = مستعمرات أكبر = مبيد أكثر.' },
        { question: 'هل البخار 56°م يقتل البق؟', answer: 'فوراً! يقتل بيض+يرقات+بالغ. أفضل طريقة.' },
        { question: 'كم جلسة مكافحة بق بينبع؟', answer: '2-3 جلسات (أسبوعين بين كل جلسة). ضمان شهرين.' },
    ],
    expertTips: [
        'بخار 56°م — يقتل البيض والبالغ.',
        'مبيد مُركّز — رطوبة تكاثر.',
        'HEPA — بيض دقيق في الشقوق.',
        'فحص دوري — فنادق+ميناء مصادر.',
        '2-3 جلسات — ضمان شهرين.',
    ],
    warnings: [
        '70-85%+حرارة = بق يتضاعف أسبوعين — مبيد فوري YMYL.',
        'مبيد سطحي بدون بخار = بيض ينجو ← يعود أسبوعين.',
        'فنادق+سفر = مصادر مستمرة — فحص دوري.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص شركات المكافحة' },
        { entity: AMANA.MADINAH.entity, url: AMANA.MADINAH.url, role: 'اشتراطات أمانة ينبع' },
    ],
    expertReviewer: EXPERTS.ALKHODAIRY,
    expertCitations: [
        { expert: EXPERTS.ALKHODAIRY.name, quote: 'بق ينبع: 70-85% تكاثر أسرع. بخار 56°م+مبيد مُركّز. 2-3 جلسات.', source: 'حشرات المملكة — بق ساحلي' },
    ],
    saudiRegulations: [REGULATIONS.GHAD_SYSTEM],
    verificationBadges: [{ badge: '✔️ مكافحة بق مرخصة', authority: 'بلدي + SFDA', icon: 'shield-check' }],
    equipment: [
        { name: 'بخار حراري 56°م', use: 'يقتل بيض+بالغ فوراً' },
        { name: 'مبيد مُركّز', use: 'مستعمرات أكبر — رطوبة' },
        { name: 'HEPA فحص', use: 'بيض دقيق — شقوق' },
    ],
    commonConcerns: [
        { concern: 'مبيد يكفي.', solution: 'بخار 56°م يقتل بيض. مبيد لا يصل.' },
        { concern: 'مثل بريدة.', solution: '70-85% = تكاثر أسرع.' },
    ],
    consumerEducation: [
        { myth: 'مرة واحدة.', truth: '2-3 جلسات. بيض أسبوعين.' },
        { myth: 'بخاخ منزلي.', truth: 'مُركّز + بخار 56°م.' },
    ],
    relatedServices: [
        { slug: 'pest-control', context: 'حشرات', priority: 1 },
        { slug: 'pesticide-spraying', context: 'رش مبيدات', priority: 2 },
        { slug: 'cleaning', context: 'تنظيف', priority: 3 },
        { slug: 'sofa-cleaning', context: 'كنب', priority: 4 },
        { slug: 'carpet-cleaning', context: 'سجاد', priority: 5 },
        { slug: 'furniture-cleaning', context: 'أثاث', priority: 6 },
        { slug: 'steam-cleaning', context: 'بخار', priority: 7 },
    ],
};
