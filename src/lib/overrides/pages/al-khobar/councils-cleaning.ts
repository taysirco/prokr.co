import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف مجالس بالخبر — بخور يتبلمر + NaCl يُصلّب + 85-95% عفن حشوة + عث (2026)',
        description: 'تنظيف مجالس الخبر. بخور Olibanum يتبلمر 45°م. NaCl يُصلّب بقع القهوة. 85-95% عفن حشوة. عث مُتسارع. Enzymatic + Anti-Fungal + تجفيف.',
        h1: 'تنظيف مجالس بالخبر — البخور يتبلمر والملح يُصلّب والرطوبة تُعفّن',
        keywords: ['تنظيف مجالس بالخبر', 'تنظيف مجلس الخبر', 'شركة تنظيف مجالس بالخبر'],
    },
    content: {
        introduction: 'المجلس في الخبر يتعرض لـ 4 تلفيات ساحلية. الأولى — بخور يتبلمر: 45°م كافية لبلمرة Olibanum (Ester Bonds) على الأقمشة ← طبقة شفافة تراكمية. Enzymatic (Lipase + Esterase). الثانية — NaCl يُصلّب البقع: قهوة/شاي بماء الخبر = NaCl يتبلور حول البقعة عند الجفاف = يُثبتها. ماء RO + منظف فوراً. الثالثة — 85-95% عفن حشوة: مجلس أرضي + 85-95% = عفن في الحشوة الداخلية = رائحة + جراثيم. Anti-Fungal + تهوية. الرابعة — عث مُتسارع: 85-95% = أسرع تكاثر لـ Dermatophagoides. مجلس قليل الحركة = مصنع Der p 1. بخار 130°م.',
        shortAnswer: 'على عكس [شامبو + مسح] الذي لا يخترق البوليمر ولا يجفف الحشوة، يعتمد بروتوكولنا في خدمة [تنظيف المجالس] بمدينة [الخبر] على [Enzymatic بخور + بخار عث + Anti-Fungal حشوة + تجفيف]. ففي ظل [بخور + NaCl + 85-95% + عث]، تتفاقم ظاهرة [بلمرة + تصلب + عفن + حساسية]. لذا؛ يتدخل خبراؤنا عبر [بروتوكول مجلس ساحلي].',
        heroSubtitle: 'بخور يتبلمر + NaCl يُثبّت + 85-95% عفن حشوة + عث مُتسارع',
    },
    pricing: [
        { type: 'مجلس — ساحلي', unit: 'مجلس', minPrice: 220, maxPrice: 420, time: '2-4 ساعات' },
        { type: 'مجلس + سجاد المجلس', unit: 'مجلس', minPrice: 320, maxPrice: 650, time: '3-5 ساعات' },
        { type: 'مجلس + Anti-Fungal عميق', unit: 'مجلس', minPrice: 380, maxPrice: 700, time: '4-6 ساعات' },
        { type: 'عقد ربع سنوي (4 زيارات)', unit: 'سنة', minPrice: 700, maxPrice: 1400, time: '4 زيارات' },
    ],
    faq: [
        { question: 'عفن في حشوة المجلس — مو بشارة؟', answer: '85-95% = الحشوة (فوم/قطن) تمتص رطوبة ← لا تجف ← عفن Aspergillus في العمق. لا تُشمّها ← لكن جراثيمها تخرج. Anti-Fungal + تهوية + رفع عن الأرض = يحمي.' },
        { question: 'NaCl في القهوة — مو بس CaSO₄؟', answer: 'ماء الخبر = NaCl (ملح بحري). يختلف عن CaSO₄ (الأحساء): NaCl Hygroscopic أكثر = يمتص رطوبة = البقعة تبقى رطبة أطول = عفن حولها. NaCl = تآكل + رطوبة. CaSO₄ = Scale.' },
        { question: 'بخور الخبر أخف من نجران — يتبلمر؟', answer: '45°م كافية للبلمرة. أقل من 48°م (أحساء/نجران) = أبطأ قليلاً. لكن: بخور × أشهر = تراكم. + 85-95% = البوليمر يمتص رطوبة = طبقة رطبة = عفن فوقها.' },
        { question: 'مجلس أرضي — رفعه يساعد؟', answer: 'نعم — طبليات 5-10 سم = هواء تحت المجلس = يمنع رطوبة الأرض من عفن القاعدة. أبسط حل + أكثر فعالية. + تهوية الغرفة.' },
        { question: 'كل 3 أشهر — ضروري؟', answer: '85-95% = عفن حشوة خلال أسابيع + بوليمر كل بخور + عث مستمر. ربع سنوي = قبل التأصّل. نصف سنوي = حشوة مُتعفنة + قماش مُتبلمر.' },
    ],
    expertTips: [
        'Enzymatic قبل أي منظف على بقع بخور — المنظف العادي يُضيف طبقة فوق البوليمر.',
        'Anti-Fungal على الحشوة من الأسفل — الجزء الذي لا يُرى = الأكثر عفناً.',
        'رفع المجلس 5-10 سم — يمنع رطوبة الأرض. أبسط + أكثر فعالية.',
        'بخار 130°م على الأقمشة — يقتل عث + يُلين بوليمر قديم = Enzymatic أسهل.',
        'تجفيف Turbo بعد كل تنظيف — 85-95% = المجلس يبقى رطباً 24+ ساعة بدون تجفيف.',
    ],
    warnings: [
        'عفن حشوة 85-95% = جراثيم Aspergillus = ضيف يعاني حساسية = أسوأ من غرفة مفتوحة. المجلس المُغلق = مكثّف.',
        'بخور مُتبلمر + رطوبة = البوليمر يمتص رطوبة = طبقة عفن فوق طبقة بوليمر = لون متغير + رائحة.',
        'NaCl في بقعة قهوة + رطوبة = البقعة لا تجف = بيئة بكتيرية دائمة. منظف فوري + تجفيف.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص شركات التنظيف' },
        { entity: AMANA.SHARQIA.entity, url: AMANA.SHARQIA.url, role: 'اشتراطات النظافة بالشرقية' },
    ],
    expertReviewer: EXPERTS.ALMOHAIMED,
    expertCitations: [
        { expert: EXPERTS.ALMOHAIMED.name, quote: 'مجلس الخبر = 4 ساحلية: بخور يتبلمر + NaCl يُصلّب + 85-95% عفن حشوة + عث. Enzymatic + Anti-Fungal + بخار + تجفيف = بروتوكول.', source: 'نصائح هندسية — مجالس البيئات الساحلية' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [
        { badge: '✔️ تنظيف مجالس مرخص', authority: 'منصة بلدي', icon: 'shield-check' },
    ],
    equipment: [
        { name: 'Enzymatic (Lipase + Esterase)', use: 'يُكسر بوليمر بخور — الوحيد الفعّال' },
        { name: 'Dry Vapor 130°م', use: 'يقتل عث + يُلين بوليمر + يُعقّم' },
        { name: 'Anti-Fungal Treatment', use: 'حماية حشوة من 85-95% — فعّال 3-4 أشهر' },
        { name: 'Turbo Dryer', use: 'تجفيف سريع بعد التنظيف' },
    ],
    hiddenObjections: [
        { fear: 'المجلس نظيف.', solution: 'البوليمر شفاف. عفن الحشوة مخفي. العث ميكروبي. NaCl لا يُرى. 4 مخفية.' },
        { fear: 'تنظيف يتلف.', solution: 'العكس: بوليمر يُصلّب + عفن يُحلل + NaCl يتآكل. ترك = التلف. التنظيف = الحماية.' },
    ],
    counterNarratives: [
        { myth: 'شامبو يكفي.', truth: 'لا يُكسر Ester Bonds. لا يقتل عث. لا يُعالج عفن حشوة. 3 فشلات.' },
        { myth: 'مجلس الخبر مثل الرياض.', truth: '85-95% ≠ 15%. NaCl ≠ SiO₂. عفن حشوة ≠ غبار. مختلف.' },
        { myth: 'نصف سنوي.', truth: '85-95% = عفن أسابيع. ربع سنوي = الحد.' },
    ],
    relatedServices: [
        { slug: 'carpet-cleaning', context: 'سجاد — سجاد المجلس', priority: 1 },
        { slug: 'sofa-cleaning', context: 'كنب — نفس بوليمر + عث', priority: 2 },
        { slug: 'steam-cleaning', context: 'بخار — يقتل عث عميق', priority: 3 },
        { slug: 'cleaning', context: 'تنظيف — ساحلي', priority: 4 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف — عفن مشترك', priority: 5 },
        { slug: 'pest-control', context: 'حشرات — صراصير', priority: 6 },
        { slug: 'apartments-cleaning', context: 'شقق — ساحلي', priority: 7 },
    ],
};
