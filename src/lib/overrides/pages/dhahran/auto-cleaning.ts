import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'غسيل سيارات بالظهران — NaCl+SiO₂ تآكل+خدش مزدوج + 75-85% Water Spots + Sabkha+رمل (2026)',
        description: 'غسيل سيارات الظهران. NaCl+SiO₂ = Micro-Swirls+تآكل مزدوج. 75-85% Water Spots. Sabkha+رمل. أرامكو. Touchless + Deionized + Ceramic 9H + Underbody.',
        h1: 'غسيل سيارات بالظهران — ملح+رمل = أوساخ مزدوجة تخدش وتتآكل',
        keywords: ['غسيل سيارات بالظهران', 'غسيل سيارة الظهران', 'شركة غسيل سيارات بالظهران'],
    },
    content: {
        introduction: 'غسيل السيارة في الظهران يواجه المشكلة المزدوجة الأصعب. المشكلة المزدوجة — NaCl+SiO₂: رذاذ بحري (NaCl) يلتصق بالطلاء ← رمل صحراوي (SiO₂) يلتصق فوقه ← المسح = SiO₂ يخدش (Micro-Swirls) تحت NaCl الرطب = أوساخ تتآكل الطلاء وتخدشه معاً. الخبر = NaCl فقط (تآكل). الرياض = SiO₂ فقط (خدش). الظهران = كلاهما. Touchless = صفر تلامس. المشكلة الثانية — 75-85% Water Spots: رطوبة تُبطئ التجفيف ← NaCl+أملاح تتبلور أثناء التجفيف البطيء = Water Spots مُركّبة. Deionized Rinse + تجفيف Chamois فوري. المشكلة الثالثة — Sabkha+رمل: تربة مزدوجة من الطريق ← Undercarriage يستقبل NaCl (تآكل) + SiO₂ (خدش). Underbody Pressure Wash.',
        shortAnswer: 'على عكس [إسفنجة + ماء عادي] الذي يخدش بـ SiO₂ تحت NaCl، يعتمد بروتوكولنا في خدمة [غسيل السيارات] بمدينة [الظهران] على [Touchless + Deionized + Ceramic + Underbody]. ففي ظل [NaCl+SiO₂ + 75-85% + Sabkha+رمل]، تتفاقم ظاهرة [خدش+تآكل + بقع]. لذا؛ يتدخل خبراؤنا عبر [غسيل مزدوج].',
        heroSubtitle: 'NaCl+SiO₂ خدش+تآكل + 75-85% Water Spots + Underbody',
    },
    pricing: [
        { type: 'غسيل خارجي Touchless + Deionized', unit: 'سيارة', minPrice: 50, maxPrice: 100, time: '20-30 دقيقة' },
        { type: 'غسيل شامل + Underbody', unit: 'سيارة', minPrice: 100, maxPrice: 200, time: '45-60 دقيقة' },
        { type: 'تلميع + Ceramic 9H', unit: 'سيارة', minPrice: 400, maxPrice: 1000, time: '3-5 ساعات' },
        { type: 'اشتراك شهري (4 غسلات)', unit: 'شهر', minPrice: 170, maxPrice: 350, time: '4 زيارات' },
    ],
    faq: [
        { question: 'NaCl+SiO₂ — لماذا أسوأ من كل واحد؟', answer: 'SiO₂ وحده = يخدش. NaCl وحده = يتآكل. معاً = NaCl يُلصق SiO₂ ← المسح = خدش مُبلّل + تآكل = Clear Coat يتقشر أسرع 2-3×. Touchless = الحل الوحيد.' },
        { question: 'Ceramic 9H — ضروري في الظهران؟', answer: 'أكثر من أي مدينة: NaCl يتآكل Clear Coat + SiO₂ يخدشه + UV يُؤكسده = 3 هجمات. Ceramic 9H = حاجز ثلاثي. Wax لا يكفي (يذوب + NaCl يخترقه).' },
        { question: 'Water Spots — من الغسل؟', answer: 'ماء الظهران = NaCl+أملاح. يغسل ← يجف ببطء (75-85%) ← بقع مُركّبة. Deionized = صفر أملاح. + Chamois فوري.' },
        { question: 'Underbody — كل غسلة؟', answer: 'Sabkha+رمل من الطريق ← NaCl+SiO₂ تحت السيارة. كل غسلة = يُزيل قبل التآكل+الخدش.' },
        { question: 'سيارة أرامكو — فرق؟', answer: 'نفس البيئة المزدوجة. لكن: مواقف أرامكو قريبة من صحراء = SiO₂ أكثر. Ceramic + Underbody = حماية.' },
    ],
    expertTips: [
        'Touchless إلزامي — أي تلامس + NaCl+SiO₂ = Micro-Swirls فوري.',
        'Ceramic 9H أفضل استثمار — حماية ثلاثية (NaCl+SiO₂+UV) لـ 2-3 سنوات.',
        'Deionized Rinse + Chamois فوري — يمنع Water Spots 75-85%.',
        'Underbody كل غسلة — Sabkha+رمل تحت = أخطر من فوق.',
        'Anti-Rust Wax Undercarriage كل 6 أشهر — يحمي من NaCl المزدوج.',
    ],
    warnings: [
        'إسفنجة + NaCl+SiO₂ = Micro-Swirls أول غسلة. خدش مُبلّل = أعمق من جاف. Touchless only.',
        'Clear Coat بدون Ceramic في NaCl+SiO₂+UV = يتقشّر 1-2 سنة. إعادة = 3,000-8,000 ريال.',
        'Undercarriage بدون غسل 3 أشهر = NaCl+SiO₂ = صدأ+خدش = خطر هيكلي.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص مراكز الغسيل' },
        { entity: AMANA.SHARQIA.entity, url: AMANA.SHARQIA.url, role: 'اشتراطات البيئة بالشرقية' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALZUWAYED.name, quote: 'سيارة الظهران = مزدوجة: NaCl يتآكل + SiO₂ يخدش = أسوأ مزيج. Touchless + Ceramic + Underbody = بروتوكول مزدوج لا يُشبه أي مدينة.', source: 'هيئة النقل — غسيل البيئة المزدوجة' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ غسيل مرخص', authority: 'منصة بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'Touchless Wash', use: 'صفر تلامس — يمنع SiO₂ خدش تحت NaCl' },
        { name: 'Deionized Rinse', use: 'صفر أملاح — يمنع Water Spots' },
        { name: 'Ceramic 9H', use: 'حاجز ثلاثي (NaCl+SiO₂+UV) — 2-3 سنوات' },
        { name: 'Underbody Pressure Wash', use: 'يُزيل Sabkha+رمل من الشاسيه' },
    ],
    commonConcerns: [
        { concern: 'مثل الخبر.', solution: 'الخبر = NaCl فقط. الظهران = NaCl+SiO₂. SiO₂ يخدش Clear Coat ← NaCl يتآكل المكشوف. أسوأ.' },
        { concern: 'Ceramic غالي.', solution: '400-1,000 ÷ 2-3 سنوات vs إعادة طلاء 3,000-8,000. = 5-13%.' },
    ],
    consumerEducation: [
        { myth: 'غبار عادي.', truth: 'NaCl+SiO₂ ≠ غبار. يتآكل + يخدش. مزدوج.' },
        { myth: 'إسفنجة ناعمة.', truth: 'إسفنجة + SiO₂ تحت NaCl = أسوأ خدش. Touchless فقط.' },
        { myth: 'شهري.', truth: 'NaCl+SiO₂ يومي. أسبوعي = الأمثل.' },
    ],
    relatedServices: [
        { slug: 'cleaning', context: 'تنظيف — مزدوج', priority: 1 },
        { slug: 'glass-facades-cleaning', context: 'واجهات — NaCl+SiO₂', priority: 2 },
        { slug: 'dabab', context: 'دباب — نقل', priority: 3 },
        { slug: 'dyna', context: 'دينا — نقل', priority: 4 },
        { slug: 'furniture-moving', context: 'نقل — حماية', priority: 5 },
        { slug: 'marble-polishing', context: 'رخام — المرآب', priority: 6 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف — مزدوج', priority: 7 },
    ],
};
