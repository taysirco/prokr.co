import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف مجالس بالظهران — بخور يتبلمر + NaCl+SiO₂ بقع + 75-85% عفن حشوة + عث (2026)',
        description: 'تنظيف مجالس الظهران. بخور Olibanum بلمرة 45°م. NaCl+SiO₂ بقع مزدوجة. 75-85% عفن حشوة. عث مُتسارع. Enzymatic + استخلاص + Anti-Fungal + تجفيف.',
        h1: 'تنظيف مجالس بالظهران — بخور يتبلمر وأوساخ مزدوجة والرطوبة تُعفّن',
        keywords: ['تنظيف مجالس بالظهران', 'تنظيف مجلس الظهران', 'شركة تنظيف مجالس بالظهران'],
    },
    content: {
        introduction: 'المجلس الظهراني يتعرض لـ 4 تلفيات مزدوجة. الأولى — بخور يتبلمر: 45°م كافية لبلمرة Olibanum (Ester Bonds). طبقة شفافة تراكمية. Enzymatic (Lipase + Esterase). الثانية — NaCl+SiO₂ بقع مزدوجة: قهوة بماء الظهران = NaCl يتبلور حول البقعة + SiO₂ من الغبار يخدش القماش حولها. RO فوراً + منظف. الثالثة — 75-85% عفن حشوة: أقل من الخبر لكن: مجلس أرضي + 75-85% = حشوة تمتص ← Aspergillus خلال 3-4 أسابيع. Anti-Fungal + رفع. الرابعة — عث: 75-85% = تكاثر مُتسارع Dermatophagoides. مجلس قليل الحركة = مصنع Der p 1. بخار 130°م.',
        shortAnswer: 'على عكس [شامبو + مسح] الذي لا يُكسر البوليمر ولا يُعالج المزدوج، يعتمد بروتوكولنا في خدمة [تنظيف المجالس] بمدينة [الظهران] على [Enzymatic + استخلاص + بخار + Anti-Fungal + تجفيف]. ففي ظل [بخور + NaCl+SiO₂ + 75-85% + عث]، تتفاقم ظاهرة [بلمرة + مزدوج + عفن + حساسية]. لذا؛ يتدخل خبراؤنا عبر [بروتوكول مجلس مزدوج].',
        heroSubtitle: 'بخور بلمرة + NaCl+SiO₂ مزدوج + 75-85% عفن حشوة + عث',
    },
    pricing: [
        { type: 'مجلس — مزدوج', unit: 'مجلس', minPrice: 230, maxPrice: 440, time: '2-4 ساعات' },
        { type: 'مجلس + سجاد', unit: 'مجلس', minPrice: 340, maxPrice: 670, time: '3-5 ساعات' },
        { type: 'مجلس + Anti-Fungal عميق', unit: 'مجلس', minPrice: 400, maxPrice: 730, time: '4-6 ساعات' },
        { type: 'عقد ربع سنوي', unit: 'سنة', minPrice: 720, maxPrice: 1450, time: '4 زيارات' },
    ],
    faq: [
        { question: 'NaCl+SiO₂ بقعة — أسوأ من NaCl وحده؟', answer: 'NaCl يُصلّب + SiO₂ يخدش القماش حول البقعة. الخبر: NaCl = يُصلّب فقط. الظهران: يُصلّب + يخدش = ألياف تالفة.' },
        { question: 'عفن حشوة — 75-85% يكفي؟', answer: '3-4 أسابيع (بدلاً من أسبوعين في الخبر). أبطأ لكن حتمي. Anti-Fungal كل 5 أشهر.' },
        { question: 'رفع المجلس — يساعد؟', answer: 'طبليات 5-10 سم = هواء تحت = يمنع رطوبة الأرض. أبسط + أكثر فعالية.' },
        { question: 'Enzymatic — لماذا قبل كل شيء؟', answer: 'Ester Bonds بخور = حماية فوق البقعة. Enzymatic يُكسرها ← المنظف يصل البقعة. بدون Enzymatic = تنظيف فوق بوليمر.' },
        { question: 'ربع سنوي؟', answer: 'بخور تراكمي + مزدوج شهري + عفن 3-4 أسابيع + عث مستمر. ربع سنوي = قبل التأصّل.' },
    ],
    expertTips: [
        'Enzymatic أولاً — يُكسر بوليمر بخور قبل أي منظف.',
        'بخار 130°م — يقتل عث + يُلين بوليمر قديم.',
        'Anti-Fungal على الحشوة من الأسفل — الأكثر عفناً.',
        'رفع 5-10 سم — يمنع رطوبة الأرض.',
        'RO فوري على بقع القهوة — يمنع NaCl+SiO₂ تصلب+خدش.',
    ],
    warnings: [
        'عفن حشوة 75-85% = جراثيم Aspergillus = ضيف يعاني حساسية.',
        'بخور مُتبلمر + مزدوج + رطوبة = لون متغير + رائحة + ألياف تالفة.',
        'NaCl+SiO₂ بقعة بدون RO فوري = بقعة دائمة + خدش دائم.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص التنظيف' },
        { entity: AMANA.SHARQIA.entity, url: AMANA.SHARQIA.url, role: 'اشتراطات النظافة بالشرقية' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALMOHAIMED.name, quote: 'مجلس الظهران = 4 مزدوجة: بخور بلمرة + NaCl+SiO₂ بقع + 75-85% عفن + عث. Enzymatic + استخلاص + بخار + Anti-Fungal = تسلسل.', source: 'نصائح هندسية — مجالس البيئة المزدوجة' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ تنظيف مجالس مرخص', authority: 'منصة بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'Enzymatic (Lipase + Esterase)', use: 'يُكسر بوليمر بخور' },
        { name: 'Hot Water Extraction', use: 'يُذيب NaCl + يسحب SiO₂' },
        { name: 'Dry Vapor 130°م', use: 'يقتل عث + يُلين بوليمر' },
        { name: 'Anti-Fungal', use: 'حشوة — فعّال 4-5 أشهر' },
    ],
    commonConcerns: [
        { concern: 'المجلس نظيف.', solution: 'بوليمر شفاف. عفن مخفي. عث ميكروبي. NaCl+SiO₂ لا يُرى. 4 مخفية.' },
        { concern: 'شامبو يكفي.', solution: 'لا يُكسر Ester Bonds. لا يقتل عث. لا يُعالج مزدوج. 3 فشلات.' },
    ],
    consumerEducation: [
        { myth: 'مثل الخبر.', truth: 'SiO₂ إضافي = خدش ألياف. 75-85% ≠ 85-95%. مختلف.' },
        { myth: 'نصف سنوي.', truth: 'مزدوج + بخور + عفن 3-4 أسابيع. ربع سنوي = الحد.' },
        { myth: 'منظف قوي.', truth: 'لا يُكسر Ester Bonds. Enzymatic = الوحيد الفعّال.' },
    ],
    relatedServices: [
        { slug: 'carpet-cleaning', context: 'سجاد — مزدوج', priority: 1 },
        { slug: 'sofa-cleaning', context: 'كنب — بخور + عث', priority: 2 },
        { slug: 'steam-cleaning', context: 'بخار — عث عميق', priority: 3 },
        { slug: 'cleaning', context: 'تنظيف — مزدوج', priority: 4 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف — مزدوج', priority: 5 },
        { slug: 'pest-control', context: 'حشرات — رطوبة', priority: 6 },
        { slug: 'apartments-cleaning', context: 'شقق — مزدوج', priority: 7 },
    ],
};
