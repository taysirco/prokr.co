import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف كنب بالخبر — NaCl يُصلّب + 85-95% عفن حشوة + عث مُتسارع + بخور بلمرة (2026)',
        description: 'تنظيف كنب الخبر. NaCl يُصلّب البقع. 85-95% عفن حشوة حتمي. عث Dermatophagoides مُتسارع. بخور Olibanum بلمرة. استخلاص + Anti-Fungal + بخار + Enzymatic.',
        h1: 'تنظيف كنب بالخبر — الملح يُصلّب والرطوبة تُعفّن الحشوة والعث يتكاثر',
        keywords: ['تنظيف كنب بالخبر', 'غسيل كنب الخبر', 'شركة تنظيف كنب بالخبر'],
    },
    content: {
        introduction: 'الكنب في الخبر يتعرض لـ 4 آليات تلف ساحلية. الأولى — NaCl يُصلّب البقع: أي سائل يُسكب = NaCl من الماء يتبلور حول البقعة ← يُثبتها. NaCl Hygroscopic = البقعة تبقى رطبة أطول = عفن حولها. RO + منظف فوراً. الثانية — 85-95% عفن حشوة حتمي: أعلى رطوبة في المملكة = الحشوة (فوم/قطن) تمتص ← Aspergillus في العمق ← رائحة + جراثيم. Anti-Fungal + تجفيف + رفع. الثالثة — عث Der p 1 مُتسارع: 85-95% = الأمثل لـ Dermatophagoides ← تكاثر أسرع من أي مدينة. بخار 130°م. الرابعة — بخور Olibanum بلمرة: 45°م كافية ← Ester Bonds ← طبقة شفافة. Enzymatic.',
        shortAnswer: 'على عكس [بخاخ ومسح] الذي لا يجفف الحشوة ولا يقتل العث، يعتمد بروتوكولنا في خدمة [تنظيف الكنب] بمدينة [الخبر] على [RO + Anti-Fungal + بخار + Enzymatic + تجفيف]. ففي ظل [NaCl + 85-95% + عث + بخور]، تتفاقم ظاهرة [تصلب + عفن + حساسية + بلمرة]. لذا؛ يتدخل خبراؤنا عبر [بروتوكول كنب ساحلي].',
        heroSubtitle: 'NaCl يُصلّب + 85-95% عفن حشوة + عث أسرع + بخور بلمرة',
    },
    pricing: [
        { type: 'كنب (3-5 مقاعد) — ساحلي', unit: 'طقم', minPrice: 200, maxPrice: 380, time: '2-3 ساعات' },
        { type: 'كنب + Anti-Fungal عميق', unit: 'طقم', minPrice: 250, maxPrice: 450, time: '3-4 ساعات' },
        { type: 'كنب جلد + Conditioner', unit: 'طقم', minPrice: 220, maxPrice: 400, time: '2-3 ساعات' },
        { type: 'عقد ربع سنوي (4 زيارات)', unit: 'سنة', minPrice: 650, maxPrice: 1300, time: '4 زيارات' },
    ],
    faq: [
        { question: 'عفن حشوة — حتى كنب جديد؟', answer: '85-95% = أي حشوة تمتص رطوبة خلال أسبوعين. جديد أو قديم = الرطوبة هي العامل. Anti-Fungal + رفع 5 سم + تهوية.' },
        { question: 'NaCl يُصلّب — مختلف عن CaSO₄؟', answer: 'CaSO₄ = Scale صلب يحتاج Citric. NaCl = يتبلور + Hygroscopic = يبقى رطباً = عفن حول البقعة. NaCl أخطر صحياً (عفن) — CaSO₄ أصعب إزالة. RO + تجفيف = الحل.' },
        { question: 'عث 85-95% — أسرع من أين؟', answer: '55-75% = الأمثل للعث. 85-95% = فوق الأمثل لكن يتكاثر. الفرق: في الخبر لا توجد فترة جفاف تُبطئه. عث 12/12 شهر = تراكم.' },
        { question: 'تجفيف — كيف؟', answer: 'Turbo Dryer + Dehumidifier = 2-3 ساعات. بدون: الكنب يبقى رطباً 24+ ساعة في 85-95% = عفن. التجفيف = الخطوة الأهم.' },
        { question: 'Conditioner جلد — ليش؟', answer: '85-95% = الجلد يمتص ← ينتفخ ← يتشقق. Conditioner يوازن الرطوبة. كل 4-6 أشهر.' },
    ],
    expertTips: [
        'Anti-Fungal على الحشوة من الأسفل — الأكثر عفناً.',
        'بخار 130°م ← يقتل عث + يُلين بوليمر بخور ← Enzymatic أسهل.',
        'رفع الكنب 5-10 سم — يمنع رطوبة الأرض.',
        'Turbo Dryer فوراً بعد التنظيف — 85-95% = بدون تجفيف = عفن.',
        'RO فقط لتنظيف البقع — ماء الخبر = NaCl = بقعة أسوأ.',
    ],
    warnings: [
        'عفن حشوة 85-95% = جراثيم Aspergillus = حساسية + ربو. أخطر من الأحساء (85-95% > 60-70%).',
        'بخور + رطوبة = بوليمر يمتص رطوبة = طبقة عفن فوق. قماش يتغير لوناً.',
        'NaCl بقعة + رطوبة = بقعة لا تجف = بيئة بكتيرية مُستمرة. RO + تجفيف فوري.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص شركات التنظيف' },
        { entity: AMANA.SHARQIA.entity, url: AMANA.SHARQIA.url, role: 'اشتراطات النظافة بالشرقية' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALMOHAIMED.name, quote: 'كنب الخبر = أسوأ بيئة في المملكة: NaCl + 85-95% + عث 12/12 + بخور. RO + Anti-Fungal + بخار + Enzymatic + تجفيف = 5 خطوات لا تُختصر.', source: 'نصائح هندسية — أثاث ساحلي' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ تنظيف كنب مرخص', authority: 'منصة بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'RO Water', use: 'تنظيف بصفر NaCl' },
        { name: 'Anti-Fungal Treatment', use: 'حشوة — فعّال 3-4 أشهر' },
        { name: 'Dry Vapor 130°م', use: 'يقتل عث + يُلين بوليمر' },
        { name: 'Turbo Dryer + Dehumidifier', use: 'تجفيف 2-3 ساعات — إلزامي' },
    ],
    hiddenObjections: [
        { fear: 'الكنب نظيف.', solution: 'عفن حشوة مخفي. عث ميكروبي. NaCl لا يُرى. بوليمر شفاف. 4 مخفية.' },
        { fear: 'منظف محل.', solution: 'لا يقتل عث. لا يُعالج عفن. لا يجفف. 3 فشلات.' },
    ],
    counterNarratives: [
        { myth: 'مثل الرياض.', truth: '85-95% ≠ 15%. NaCl ≠ SiO₂. عفن حتمي ≠ اختياري.' },
        { myth: 'مرة بالسنة.', truth: 'عفن أسابيع + عث 12/12. سنوي = 11 شهراً. ربع سنوي.' },
        { myth: 'بخور = عطر.', truth: 'في 45°م: بلمرة. في 85-95%: يمتص رطوبة = عفن فوق.' },
    ],
    relatedServices: [
        { slug: 'carpet-cleaning', context: 'سجاد — NaCl + عث', priority: 1 },
        { slug: 'councils-cleaning', context: 'مجالس — بخور + عث', priority: 2 },
        { slug: 'steam-cleaning', context: 'بخار — يقتل عث', priority: 3 },
        { slug: 'cleaning', context: 'تنظيف — ساحلي', priority: 4 },
        { slug: 'furniture-cleaning', context: 'أثاث — NaCl', priority: 5 },
        { slug: 'pest-control', context: 'حشرات — صراصير', priority: 6 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف — عفن', priority: 7 },
    ],
};
