import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'مكافحة بق بالباحة — 60-85% تكاثر مضاعف+ضباب رطوبة+عرعر حشرات غابة — بخار+مبيد+HEPA! (2026)',
        description: 'مكافحة بق الباحة. 60-85% تكاثر مضاعف! ضباب 200 يوم. عث الرطوبة. بخار 56°م+مبيد+HEPA. Dehumidifier بعد.',
        h1: 'مكافحة بق بالباحة — تكاثر مضاعف+ضباب!',
        keywords: ['مكافحة بق بالباحة', 'مكافحة بق الفراش الباحة', 'شركة مكافحة بق الباحة'],
    },
    content: {
        introduction: 'بق الباحة = تكاثر مضاعف بالرطوبة! 60-85% تكاثر: رطوبة عالية = دورة حياة أقصر = مستعمرات أكبر (مثل ينبع). لكن: الباحة أبرد شتاءً = البق يختبئ أعمق. بخار 56°م يقتل. عث الرطوبة: 200 يوم ضباب = عث Dermatophagoides أكثر بالمراتب. Anti-Mite إلزامي. بعد البخار: 6-10h تجفيف = Dehumidifier إلزامي — بدونه البيئة تبقى رطبة = البق يعود! منتجعات الباحة: سياحة = نقل بق بالحقائب. فحص دوري للفنادق. مقارنة: بريدة = 10-20% = تكاثر أبطأ+تجفيف سريع. الباحة = تكاثر أسرع+تجفيف بطيء = أصعب.',
        shortAnswer: 'على عكس [المبيد بدون بخار+Dehumidifier]، يعتمد بروتوكولنا في خدمة [مكافحة البق] بمدينة [الباحة] على [بخار 56°م+مبيد+HEPA+Dehumidifier]. ففي ظل [60-85% تكاثر+200 يوم ضباب+عث+منتجعات]، تتفاقم ظاهرة [مستعمرات+عث+رطوبة+نقل]. لذا؛ يتدخل فنيونا عبر [بخار ← مبيد ← HEPA ← Dehumidifier].',
        heroSubtitle: '60-85% تكاثر + 200 يوم ضباب + عث — بخار+Dehumidifier!',
    },
    pricing: [
        { type: 'غرفة واحدة', unit: 'غرفة', minPrice: 150, maxPrice: 310, time: '1-2h' },
        { type: 'شقة (3 غرف)', unit: 'شقة', minPrice: 300, maxPrice: 620, time: '3-4h' },
        { type: 'منتجع (غرفة)', unit: 'غرفة', minPrice: 200, maxPrice: 420, time: '2h' },
        { type: '2-3 جلسات ضمان', unit: 'باقة', minPrice: 400, maxPrice: 800, time: '3 جلسات' },
    ],
    faq: [
        { question: 'ليش بق الباحة أكثر تكاثراً؟', answer: '60-85% = دورة حياة أقصر. مستعمرات أكبر.' },
        { question: 'ليش Dehumidifier بعد بخار البق بالباحة؟', answer: '6-10h تجفيف = بيئة رطبة يعود البق. Dehumidifier.' },
        { question: 'هل ManResorts نقل بق؟', answer: 'سياحة = حقائب = نقل. فحص دوري منتجعات.' },
        { question: 'كم تكلفة بق بالباحة مقابل بريدة؟', answer: 'أغلى 20-25% — Dehumidifier بعد. بريدة: تجفيف سريع.' },
        { question: 'كم جلسة بق بالباحة؟', answer: '2-3 جلسات. أسبوعين بين كل جلسة. ضمان شهرين.' },
    ],
    expertTips: [
        'بخار 56°م — يقتل بيض+بالغ.',
        'Dehumidifier بعد — 6-10h!',
        'Anti-Mite — عث ضبابي.',
        'HEPA — بيض في شقوق.',
        '2-3 جلسات — ضمان شهرين.',
    ],
    warnings: [
        '60-85% + بخار بدون Dehumidifier = بيئة رطبة = يعود YMYL.',
        'مبيد سطحي بدون بخار = بيض ينجو ← أسبوعين.',
        'منتجعات + سياحة = نقل مستمر ← فحص دوري.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص شركات المكافحة' },
        { entity: AMANA.BAHA.entity, url: AMANA.BAHA.url, role: 'اشتراطات أمانة الباحة' },
    ],
    expertReviewer: EXPERTS.ALKHODAIRY,
    expertCitations: [
        { expert: EXPERTS.ALKHODAIRY.name, quote: 'بق الباحة: 60-85% تكاثر+6-10h. بخار+Dehumidifier.', source: 'حشرات المملكة — بق جبلي' },
    ],
    saudiRegulations: [REGULATIONS.GHAD_SYSTEM],
    verificationBadges: [{ badge: '✔️ مكافحة بق مرخصة', authority: 'بلدي + SFDA', icon: 'shield-check' }],
    equipment: [
        { name: 'بخار 56°م', use: 'بيض+بالغ — فوري' },
        { name: 'Dehumidifier', use: '6-10h بعد بخار — إلزامي' },
        { name: 'HEPA فحص', use: 'بيض — شقوق' },
    ],
    hiddenObjections: [
        { fear: 'مبيد يكفي.', solution: 'بخار+Dehumidifier.' },
        { fear: 'مثل بريدة.', solution: '60-85%+6-10h ≠ 10-20%.' },
    ],
    consumerEducation: [
        { myth: 'مرة واحدة.', truth: '2-3 جلسات. بيض.' },
        { myth: 'بدون Dehumidifier.', truth: '6-10h = عودة.' },
    ],
    relatedServices: [
        { slug: 'pest-control', context: 'حشرات', priority: 1 },
        { slug: 'pesticide-spraying', context: 'رش', priority: 2 },
        { slug: 'cleaning', context: 'تنظيف', priority: 3 },
        { slug: 'sofa-cleaning', context: 'كنب', priority: 4 },
        { slug: 'carpet-cleaning', context: 'سجاد', priority: 5 },
        { slug: 'steam-cleaning', context: 'بخار', priority: 6 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 7 },
    ],
};
