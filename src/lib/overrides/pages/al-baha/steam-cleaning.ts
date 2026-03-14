import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف بالبخار بالباحة — 200 يوم ضباب+6-10h تجفيف+عفن بعد البخار — Dehumidifier إلزامي! (2026)',
        description: 'تنظيف بالبخار الباحة. 200 يوم ضباب! 6-10h تجفيف أبطأ بالمملكة! عفن بعد البخار. Dehumidifier+Anti-Fungal.',
        h1: 'تنظيف بالبخار بالباحة — 6-10h+عفن بعد!',
        keywords: ['تنظيف بالبخار بالباحة', 'تنظيف بخار الباحة', 'شركة تنظيف بالبخار بالباحة'],
    },
    content: {
        introduction: 'بخار الباحة = مشكلة أكبر! عفن بعد البخار: 200 يوم ضباب = 60-85% = البخار يُضيف رطوبة ← لو لم يُجفف فوراً = عفن Penicillium بعد البخار! Dehumidifier إلزامي. 6-10h تجفيف: أبطأ تجفيف بالمملكة. بدون Dehumidifier = البخار كارثة. Dehumidifier صناعي يُقلّل لـ 3-4h. العكس: بريدة = 10-20% = بخار يجف فوراً 15 دقيقة = ممتاز! الباحة = بخار يُسبب مشكلة إذا لم يُجفف. بخار 130°م: يقتل عث الرطوبة+بكتيريا+Aspergillus. لكن: يُضيف رطوبة! معادلة صعبة. مقارنة: بريدة = بخار مثالي (يقتل+يجف). الباحة = بخار يقتل لكن لا يجف!',
        shortAnswer: 'على عكس [البخار بدون Dehumidifier — الذي يُسبب عفن!]، يعتمد بروتوكولنا في خدمة [التنظيف بالبخار] بمدينة [الباحة] على [بخار 130°م ← Dehumidifier فوري ← Anti-Fungal]. ففي ظل [200 يوم ضباب+6-10h+60-85%]، تتفاقم ظاهرة [عفن بعد البخار]. لذا؛ يتدخل فريقنا عبر [بخار ← Dehumidifier فوري ← Anti-Fungal].',
        heroSubtitle: 'بخار بالباحة = يقتل لكن لا يجف! Dehumidifier إلزامي!',
    },
    pricing: [
        { type: 'بخار + Dehumidifier (شقة)', unit: 'شقة', minPrice: 250, maxPrice: 520, time: '3-5h + 3-4h تجفيف' },
        { type: 'بخار + Dehumidifier (فيلا)', unit: 'فيلا', minPrice: 400, maxPrice: 800, time: '5-8h + تجفيف' },
        { type: 'بخار فقط (بدون Dehumidifier)', unit: '', minPrice: 0, maxPrice: 0, time: 'غير متاح — YMYL' },
        { type: 'ربع سنوي', unit: 'سنة', minPrice: 600, maxPrice: 1200, time: '4 جلسات' },
    ],
    faq: [
        { question: 'ليش البخار بالباحة خطير بدون Dehumidifier؟', answer: '60-85%+بخار رطوبة إضافية = 6-10h = عفن بعد الجلسة!' },
        { question: 'ليش بخار بريدة ناجح وبالباحة لا؟', answer: 'بريدة: 10-20% = يجف 15 دقيقة. الباحة: 60-85% = 6-10h!' },
        { question: 'هل البخار يقتل عفن الباحة؟', answer: '130°م يقتل Aspergillus+عث. لكن: يُضيف رطوبة = Dehumidifier فوراً!' },
        { question: 'كم تكلفة بخار بالباحة مقارنة ببريدة؟', answer: 'أغلى 50-60%! Dehumidifier إلزامي. بريدة: بخار فقط.' },
        { question: 'هل تقدمون بخار بدون Dehumidifier بالباحة؟', answer: 'لا! YMYL. بخار بدون تجفيف = عفن. نرفض.' },
    ],
    expertTips: [
        'Dehumidifier فوري — بعد البخار مباشرة!',
        'بخار 130°م — يقتل كل شيء.',
        'Anti-Fungal — بعد التجفيف.',
        'لا بخار بدون Dehumidifier!',
        '3-4h مع Dehumidifier vs 6-10h بدون.',
    ],
    warnings: [
        'بخار بدون Dehumidifier = عفن أسوأ مما قبل — YMYL.',
        '6-10h تجفيف = أي بخار بدون تجفيف = كارثة صحية.',
        'بخار + أقمشة + 60-85% = عفن فوري ← حساسية YMYL.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص شركات التنظيف' },
        { entity: AMANA.BAHA.entity, url: AMANA.BAHA.url, role: 'اشتراطات أمانة الباحة' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALMISNID.name, quote: 'بخار الباحة: يقتل لكن 6-10h! Dehumidifier إلزامي. بدونه = عفن.', source: 'جغرافيا المناخ — بخار جبلي' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ تنظيف بخار مرخص', authority: 'بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'بخار 130°م', use: 'قتل — عث+Aspergillus+بكتيريا' },
        { name: 'Dehumidifier صناعي', use: '6-10h → 3-4h — إلزامي' },
        { name: 'Anti-Fungal', use: 'بعد تجفيف — وقاية' },
    ],
    hiddenObjections: [
        { fear: 'بخار يكفي.', solution: '6-10h = عفن بعد! Dehumidifier.' },
        { fear: 'مثل بريدة.', solution: '15 دقيقة vs 6-10h! عكس!' },
    ],
    consumerEducation: [
        { myth: 'بخار مثالي.', truth: 'بالباحة = مشكلة بدون Dehumidifier.' },
        { myth: 'تجفيف طبيعي.', truth: 'ضباب = لا شمس. Dehumidifier.' },
    ],
    relatedServices: [
        { slug: 'carpet-cleaning', context: 'سجاد', priority: 1 },
        { slug: 'sofa-cleaning', context: 'كنب', priority: 2 },
        { slug: 'cleaning', context: 'تنظيف', priority: 3 },
        { slug: 'furniture-cleaning', context: 'أثاث', priority: 4 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 5 },
        { slug: 'pest-control', context: 'حشرات', priority: 6 },
        { slug: 'apartments-cleaning', context: 'شقق', priority: 7 },
    ],
};
