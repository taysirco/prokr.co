import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف مكاتب بالظهران — NaCl+SiO₂ أجهزة + 75-85% عفن + أرامكو معايير (2026)',
        description: 'تنظيف مكاتب الظهران. NaCl+SiO₂ يتآكل أجهزة+يخدش شاشات. 75-85% عفن. معايير أرامكو. RO + Anti-Corrosion + Anti-Fungal + HEPA.',
        h1: 'تنظيف مكاتب بالظهران — مزدوج يتآكل الأجهزة والرطوبة تُعفّن',
        keywords: ['تنظيف مكاتب بالظهران', 'تنظيف مكتب الظهران', 'شركة تنظيف مكاتب بالظهران'],
    },
    content: {
        introduction: 'المكتب الظهراني يواجه المزدوج + أرامكو. الأولى — NaCl+SiO₂ على الأجهزة: NaCl يُسبب Galvanic Corrosion + SiO₂ يخدش الشاشات (7>5.5 Mohs). مزدوج = أسوأ على الإلكترونيات. Anti-Corrosion + Microfiber ناعم (لا قماش). الثانية — 75-85% عفن مكتبي: زوايا + خزائن + سقف + مكيف = عفن 3-4 أسابيع. Anti-Fungal. الثالثة — معايير أرامكو: مكاتب أرامكو = بروتوكولات مُوثّقة + تقارير + ISO. الرابعة — SiO₂ PM10: بدون HEPA = SiO₂ < 10 ميكرون يدخل الرئة 8 ساعات/يوم. HEPA فلتر.',
        shortAnswer: 'على عكس [منظف + ممسحة] الذي يخدش بـ SiO₂ ويترك NaCl، يعتمد بروتوكولنا في خدمة [تنظيف المكاتب] بمدينة [الظهران] على [RO + Anti-Corrosion + HEPA + Anti-Fungal + بروتوكول]. ففي ظل [NaCl+SiO₂ + 75-85% + أرامكو]، تتفاقم ظاهرة [تآكل+خدش + عفن + PM10]. لذا؛ يتدخل خبراؤنا عبر [بروتوكول مكتب مزدوج].',
        heroSubtitle: 'NaCl+SiO₂ أجهزة + 75-85% عفن + PM10 + أرامكو',
    },
    pricing: [
        { type: 'مكتب صغير (50 م²)', unit: 'خدمة', minPrice: 140, maxPrice: 270, time: '1-2 ساعة' },
        { type: 'مكتب كبير (100+ م²)', unit: 'خدمة', minPrice: 270, maxPrice: 530, time: '2-4 ساعات' },
        { type: 'أرامكو — بروتوكول مُوثّق', unit: 'خدمة', minPrice: 370, maxPrice: 730, time: '3-5 ساعات' },
        { type: 'عقد أسبوعي', unit: 'شهر', minPrice: 420, maxPrice: 850, time: '4 زيارات' },
    ],
    faq: [
        { question: 'SiO₂ يخدش الشاشات — حقاً؟', answer: 'SiO₂ = 7 Mohs. شاشة زجاج = 5.5. يخدشها. قماش + SiO₂ = مثل سنفرة. Microfiber ناعم جاف = الأمان.' },
        { question: 'معايير أرامكو — ماذا يعني عملياً؟', answer: 'تقرير بالصور + قياسات (RH%, PM10, عفن) + تسلسل مُوثّق. ISO-compatible.' },
        { question: 'HEPA — لكل مكتب؟', answer: 'SiO₂ < 10 ميكرون = PM10 = يدخل الرئة. HEPA = 99.97% حجز. يحمي صحة الموظفين.' },
        { question: 'عفن أبطأ من الخبر؟', answer: '75-85% = أبطأ (3-4 أسابيع vs أسبوعين). لكن: حتمي. Anti-Fungal كل 5 أشهر.' },
        { question: 'أسبوعي — للمكاتب؟', answer: 'NaCl+SiO₂ يومي. HEPA أسبوعي. Anti-Corrosion شهري. أسبوعي = الأمثل.' },
    ],
    expertTips: [
        'Microfiber ناعم جاف على الشاشات — لا قماش + لا ماء + لا منظف.',
        'Anti-Corrosion شهري — يحمي أجهزة من NaCl+SiO₂.',
        'HEPA في كل غرفة — يحمي من SiO₂ PM10.',
        'Anti-Fungal 5 نقاط — زوايا + خزائن + مكيف + سقف + خلف أرفف.',
        'تقرير بالصور — معايير أرامكو.',
    ],
    warnings: [
        'SiO₂ يخدش الشاشات + NaCl يتآكل الدوائر = أجهزة أقصر عمراً. Anti-Corrosion + Microfiber.',
        'SiO₂ PM10 × 8 ساعات/يوم = خطر تنفسي مهني. HEPA = حماية.',
        'عفن 75-85% = جراثيم 8 ساعات = حساسية + ربو مهني.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص تنظيف تجاري' },
        { entity: AMANA.SHARQIA.entity, url: AMANA.SHARQIA.url, role: 'اشتراطات المكاتب بالشرقية' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALJUND.name, quote: 'مكتب الظهران = مزدوج + أرامكو: NaCl+SiO₂ أجهزة + 75-85% عفن + PM10. RO + Anti-Corrosion + HEPA + Anti-Fungal + بروتوكول ISO.', source: 'موسوعة أخطاء — مكاتب مزدوجة' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [
        { badge: '✔️ تنظيف مكاتب مرخص', authority: 'منصة بلدي', icon: 'shield-check' },
        { badge: '✔️ بروتوكول أرامكو', authority: 'معايير مُوثّقة', icon: 'badge-check' },
    ],
    equipment: [
        { name: 'RO Water + Anti-Corrosion', use: 'حماية أجهزة من مزدوج' },
        { name: 'HEPA Filter', use: 'يحجز SiO₂ PM10' },
        { name: 'Microfiber ناعم جاف', use: 'شاشات بلا خدش' },
        { name: 'Anti-Fungal', use: '5 نقاط عفن — 5 أشهر' },
    ],
    hiddenObjections: [
        { fear: 'المكتب نظيف.', solution: 'NaCl شفاف + SiO₂ ناعم + عفن مخفي. \"نظيف\" = لا تُلاحظ.' },
        { fear: 'عاملة المبنى.', solution: 'بدون ترتيب + بدون HEPA + بدون Anti-Corrosion = 3 أخطاء.' },
    ],
    counterNarratives: [
        { myth: 'مثل الرياض.', truth: 'NaCl إضافي = تآكل. 75-85% = عفن. مختلف.' },
        { myth: 'مكيف يكفي.', truth: 'المكيف نفسه = عفن + NaCl+SiO₂. جزء من المشكلة.' },
        { myth: 'شهري.', truth: 'مزدوج يومي + PM10 مستمر. أسبوعي.' },
    ],
    relatedServices: [
        { slug: 'cleaning', context: 'تنظيف — مزدوج', priority: 1 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف — مزدوج', priority: 2 },
        { slug: 'carpet-cleaning', context: 'موكيت — SiO₂+NaCl', priority: 3 },
        { slug: 'glass-facades-cleaning', context: 'واجهات — مزدوج', priority: 4 },
        { slug: 'pest-control', context: 'حشرات — رطوبة', priority: 5 },
        { slug: 'steam-cleaning', context: 'بخار — تعقيم', priority: 6 },
        { slug: 'hourly-cleaning', context: 'بالساعة — يومي', priority: 7 },
    ],
};
