import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف كنب بالظهران — NaCl+SiO₂ بقع مزدوجة + 75-85% عفن حشوة + عث + بخور (2026)',
        description: 'تنظيف كنب الظهران. NaCl يُصلّب + SiO₂ يخدش الألياف. 75-85% عفن حشوة. عث مُتسارع. بخور بلمرة. استخلاص + Anti-Fungal + بخار + Enzymatic + تجفيف.',
        h1: 'تنظيف كنب بالظهران — بقع مزدوجة: ملح يُصلّب ورمل يقطع الألياف',
        keywords: ['تنظيف كنب بالظهران', 'غسيل كنب الظهران', 'شركة تنظيف كنب بالظهران'],
    },
    content: {
        introduction: 'الكنب الظهراني يتعرض لأوساخ مزدوجة. الأولى — NaCl+SiO₂ بقع مزدوجة: NaCl يتبلور حول البقعة = يُصلّبها + SiO₂ يدخل بين الألياف = Fiber Cutting (يقطع). معاً = بقعة صلبة + ألياف مقطوعة. RO فوراً. الثانية — 75-85% عفن حشوة: أبطأ من الخبر (3-4 أسابيع vs أسبوعين) لكن: حتمي. Anti-Fungal + رفع. الثالثة — عث Der p 1: 75-85% = تكاثر مُتسارع. أبطأ من الخبر لكن: أسرع من الرياض. بخار 130°م. الرابعة — بخور Olibanum بلمرة في 45°م. Enzymatic.',
        shortAnswer: 'على عكس [بخاخ ومسح] الذي يخدش SiO₂ ولا يجفف، يعتمد بروتوكولنا في خدمة [تنظيف الكنب] بمدينة [الظهران] على [RO + استخلاص + بخار + Anti-Fungal + Enzymatic + تجفيف]. ففي ظل [NaCl+SiO₂ + 75-85% + عث + بخور]، تتفاقم ظاهرة [تصلب+قطع + عفن + حساسية]. لذا؛ يتدخل خبراؤنا عبر [بروتوكول كنب مزدوج].',
        heroSubtitle: 'NaCl تصلب + SiO₂ Fiber Cutting + 75-85% عفن + عث + بخور',
    },
    pricing: [
        { type: 'كنب (3-5 مقاعد)', unit: 'طقم', minPrice: 190, maxPrice: 370, time: '2-3 ساعات' },
        { type: '+ Anti-Fungal عميق', unit: 'طقم', minPrice: 240, maxPrice: 440, time: '3-4 ساعات' },
        { type: 'جلد + Conditioner', unit: 'طقم', minPrice: 210, maxPrice: 390, time: '2-3 ساعات' },
        { type: 'ربع سنوي', unit: 'سنة', minPrice: 630, maxPrice: 1250, time: '4 زيارات' },
    ],
    faq: [
        { question: 'SiO₂ يقطع الألياف — أسوأ من NaCl وحده؟', answer: 'NaCl = يُصلّب (الخبر). SiO₂ = يقطع (الرياض). الظهران = يُصلّب + يقطع = ألياف صلبة مقطوعة = أسرع تلف.' },
        { question: 'عفن حشوة — 75-85%؟', answer: '3-4 أسابيع = Aspergillus. أبطأ من الخبر بأسبوع. لكن: حتمي. Anti-Fungal + رفع 5 سم.' },
        { question: 'تجفيف — أسرع من الخبر؟', answer: '75-85% vs 85-95% = أسرع قليلاً. Turbo Dryer = 3-4 ساعات (بدلاً من 4-6 في الخبر). لكن: بدون تجفيف = 15-20 ساعة = عفن.' },
        { question: 'Conditioner جلد — 75-85%؟', answer: 'جلد + 75-85% = يمتص ← ينتفخ. + 45°م = ينكمش. دورة = تشقق. Conditioner كل 5-6 أشهر.' },
        { question: 'ربع سنوي؟', answer: 'مزدوج + عفن 3-4 أسابيع + عث مستمر + بخور تراكمي. ربع سنوي = قبل التأصّل.' },
    ],
    expertTips: [
        'RO فوراً على بقعة — يمنع NaCl+SiO₂ تصلب+خدش.',
        'بخار 130°م — يقتل عث + يُلين بوليمر بخور.',
        'Anti-Fungal من الأسفل — حشوة = الأكثر عفناً.',
        'Turbo Dryer 3-4 ساعات — بدونه = عفن.',
        'رفع 5-10 سم — يمنع رطوبة.',
    ],
    warnings: [
        'NaCl+SiO₂ × 6 أشهر = ألياف صلبة+مقطوعة = كنب تالف. ربع سنوي.',
        'عفن حشوة 75-85% = Aspergillus = حساسية.',
        'بخور + رطوبة = بوليمر يمتص = عفن فوقه.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص التنظيف' },
        { entity: AMANA.SHARQIA.entity, url: AMANA.SHARQIA.url, role: 'اشتراطات النظافة بالشرقية' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALMOHAIMED.name, quote: 'كنب الظهران = مزدوج: NaCl تصلب + SiO₂ Fiber Cutting + 75-85% عفن + عث + بخور. استخلاص + بخار + Anti-Fungal + Enzymatic + تجفيف.', source: 'نصائح هندسية — كنب مزدوج' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ تنظيف كنب مرخص', authority: 'منصة بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'RO Water', use: 'بقع بدون NaCl جديد' },
        { name: 'Hot Water Extraction', use: 'يسحب NaCl+SiO₂ من العمق' },
        { name: 'Dry Vapor 130°م', use: 'عث + بوليمر' },
        { name: 'Anti-Fungal + Turbo Dryer', use: 'حشوة + تجفيف' },
    ],
    hiddenObjections: [
        { fear: 'نظيف.', solution: 'عفن مخفي + عث ميكروبي + NaCl+SiO₂ ناعم + بوليمر شفاف.' },
        { fear: 'منظف محل.', solution: 'لا يقتل عث. لا يجفف. لا يُكسر بوليمر.' },
    ],
    counterNarratives: [
        { myth: 'مثل الخبر.', truth: 'SiO₂ إضافي = Fiber Cutting. أسوأ على الألياف.' },
        { myth: 'سنوي.', truth: 'مزدوج + عفن 3-4 أسابيع. ربع سنوي.' },
        { myth: 'بخور عطر.', truth: 'بلمرة 45°م + رطوبة = عفن فوق.' },
    ],
    relatedServices: [
        { slug: 'carpet-cleaning', context: 'سجاد — مزدوج', priority: 1 },
        { slug: 'councils-cleaning', context: 'مجالس — بخور', priority: 2 },
        { slug: 'steam-cleaning', context: 'بخار — عث', priority: 3 },
        { slug: 'cleaning', context: 'تنظيف — مزدوج', priority: 4 },
        { slug: 'furniture-cleaning', context: 'أثاث', priority: 5 },
        { slug: 'pest-control', context: 'حشرات', priority: 6 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 7 },
    ],
};
