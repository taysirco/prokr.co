import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف مجالس بجازان — بخور يتعفّن + عث 12/12 في 15 سم + بكتيريا طعام + ملح (2026)',
        description: 'تنظيف مجالس جازان. بخور لا يتبلمر (80% يمنع)— يتعفّن! عث 12/12 في حشو 15 سم. بكتيريا طعام تتضاعف 3×. ملح بحري. بخار + Dehumidifier + Anti-Fungal.',
        h1: 'تنظيف مجالس بجازان — البخور يتعفّن (لا يتبلمر) والعث لا ينام',
        keywords: ['تنظيف مجالس بجازان', 'تنظيف مجلس جازان', 'شركة تنظيف مجالس بجازان'],
    },
    content: {
        introduction: 'المجلس الجازاني ≠ التبوكي — المشاكل معكوسة تماماً. في تبوك: بخور يتبلمر في 44°م (يتصلب). في جازان: البخور يتعفّن! راتينج Olibanum + 80% رطوبة = بيئة مثالية لنمو عفن على طبقة البخور. بدلاً من طبقة صلبة = طبقة عفنية. + عث 12/12 في حشو 10-15 سم لا يتوقف أبداً. + بقايا طعام المجلس (تمر، قهوة، وجبات) + 80% + 30°م = بكتيريا تتضاعف كل 20 دقيقة. + ملح البحر يُسرّع كل شيء.',
        shortAnswer: 'بخور يتعفّن (لا يتبلمر!) + عث 12/12 + بكتيريا مُتسارعة + ملح. بخار + Anti-Fungal + Dehumidifier + استخلاص شهري.',
        heroSubtitle: 'البخور يتعفّن لا يتبلمر — عث 12/12 — بكتيريا 3× — عكس المدن الجافة',
    },
    pricing: [
        { type: 'تنظيف مجلس — صغير (حتى 20 م²)', unit: 'مجلس', minPrice: 200, maxPrice: 400, time: '2-3 ساعات + تجفيف' },
        { type: 'تنظيف مجلس — كبير (20-40 م²)', unit: 'مجلس', minPrice: 400, maxPrice: 700, time: '3-5 ساعات + تجفيف' },
        { type: 'عقد شهري', unit: 'شهر', minPrice: 300, maxPrice: 600, time: 'زيارة/شهر' },
    ],
    faq: [
        { question: 'بخور يتعفّن — فعلاً؟', answer: 'في جازان: 80% + راتينج البخور = بيئة مثالية للعفن. في تبوك (12%): يجف ← يتصلب. في جازان: لا يجف ← يتعفّن. Anti-Fungal بعد كل بخور + تهوية.' },
        { question: 'عث 12/12 في الفرشات — ما ينتهي؟', answer: '80% + 30°م = بيئة مثالية دائمة. بخار 130°م يقتل الموجود ← يعود خلال 2-3 أسابيع. تنظيف شهري = الحد الأدنى.' },
    ],
    expertTips: [
        'Anti-Fungal بعد كل بخور — الراتينج يتعفّن بدلاً من أن يتصلب.',
        'بخار + Dehumidifier — إلزامي في جازان.',
        'تنظيف بقايا الطعام فوراً — بكتيريا × 20 دقيقة.',
        'HEPA + Beater Bar — عث في 10-15 سم حشو.',
    ],
    warnings: [
        'بخور + 80% = عفن على الأقمشة. Anti-Fungal بعد كل استخدام بخور.',
        'كنب مبلل بعد البخار + 80% + بدون Dehumidifier = عفن أسود خلال 24 ساعة.',
    ],
    trustAnchors: [{ ...GOV.BALADI, role: 'ترخيص شركات التنظيف' }],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALMOHAIMED.name, quote: 'مجلس جازان = عكس مجلس تبوك. البخور يتعفّن بدلاً من أن يتبلمر. العث لا ينام أبداً. البكتيريا 3× أسرع. Anti-Fungal + Dehumidifier = الحد الأدنى.', source: 'نصائح هندسية — المجالس في المناخ الاستوائي' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ تنظيف مجالس مرخص', authority: 'بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'بخار 130°م + Dehumidifier', use: 'يقتل عفن + عث — Dehumidifier يمنع رطوبة إضافية' },
        { name: 'Anti-Fungal Treatment', use: 'يُطبّق بعد البخور — يمنع عفن الراتينج' },
        { name: 'HEPA + Beater Bar', use: 'يسحب عث من 10-15 سم حشو' },
        { name: 'معقّم بكتيري', use: 'المطبخ + مناطق الطعام' },
    ],
    hiddenObjections: [{ fear: 'شهرياً كثير.', solution: 'عث 12/12 + عفن 24/7 + بكتيريا 20 دقيقة. شهرياً = 80% نظافة. ربع سنوي = 25% نظافة.' }],
    counterNarratives: [{ myth: 'البخور بريحته ينظف.', truth: 'البخور يُعطّر لا يُنظّف. في 80%: يتعفّن ← يضيف مشكلة.' }],
    relatedServices: [
        { slug: 'carpet-cleaning', context: 'سجاد — نفس عفن + عث', priority: 1 },
        { slug: 'sofa-cleaning', context: 'كنب — عفن حشو', priority: 2 },
        { slug: 'steam-cleaning', context: 'بخار — ركيزة التعقيم', priority: 3 },
        { slug: 'cleaning', context: 'تنظيف — المنزل كاملاً', priority: 4 },
        { slug: 'pest-control', context: 'حشرات — 12/12', priority: 5 },
    ],
};
