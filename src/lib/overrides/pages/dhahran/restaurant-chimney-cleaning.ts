import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف مداخن مطاعم بالظهران — كربنة مزدوجة NaCl+SiO₂ + 75-85% Biofilm + NFPA 96 (2026)',
        description: 'تنظيف مداخن الظهران. كربنة مزدوجة NaCl+SiO₂. 75-85% Biofilm. NFPA 96. Alkaline pH 13 + Anti-Biofilm + RO + ربع سنوي.',
        h1: 'تنظيف مداخن مطاعم بالظهران — كربنة مزدوجة أصعب والرطوبة تُغشّي',
        keywords: ['تنظيف مداخن مطاعم بالظهران', 'تنظيف مداخن الظهران', 'شركة تنظيف مداخن بالظهران'],
    },
    content: {
        introduction: 'مداخن مطاعم الظهران تواجه كربنة مزدوجة فريدة. الأولى — NaCl+SiO₂ كربنة: NaCl من مأكولات بحرية + SiO₂ من الهواء = كربنة مُركّبة (كربون + ملح + رمل). SiO₂ يُخشّن الكربنة = أصعب كشط. Alkaline pH 13 مع وقت أطول. الثانية — 75-85% Biofilm: أبطأ من الخبر لكن ينمو (4-6 أسابيع). Biofilm = طبقة عضوية رطبة ← قابلة للاشتعال عند الجفاف. Anti-Biofilm. الثالثة — NFPA 96: SiO₂ يُضيف خشونة = كربنة تتراكم أسرع ← تصل 6,000 ميكرون أسرع. + Biofilm يُضيف سُمكاً. فحص ميكرون ربع سنوي.',
        shortAnswer: 'على عكس [تنظيف بدون مراعاة مزدوج] الذي يتجاهل SiO₂ والبيوفيلم، يعتمد بروتوكولنا في خدمة [تنظيف المداخن] بمدينة [الظهران] على [Alkaline pH 13 + Anti-Biofilm + RO + ربع سنوي]. ففي ظل [NaCl+SiO₂ + 75-85% + NFPA]، تتفاقم ظاهرة [كربنة مُركّبة + غشاء + سُمك]. لذا؛ يتدخل خبراؤنا عبر [بروتوكول مدخنة مزدوج].',
        heroSubtitle: 'كربنة مزدوجة NaCl+SiO₂ + 75-85% Biofilm + NFPA 96',
    },
    pricing: [
        { type: 'مدخنة (Alkaline pH 13)', unit: 'مدخنة', minPrice: 290, maxPrice: 670, time: '2-4 ساعات' },
        { type: 'Anti-Biofilm + فلاتر', unit: 'خدمة', minPrice: 190, maxPrice: 370, time: '1-2 ساعة' },
        { type: 'عقد ربع سنوي', unit: 'سنة', minPrice: 940, maxPrice: 2300, time: '4+ زيارات' },
        { type: 'طوارئ', unit: 'خدمة', minPrice: 370, maxPrice: 780, time: '2-3 ساعات' },
    ],
    faq: [
        { question: 'SiO₂ يُخشّن — ماذا يعني؟', answer: 'SiO₂ يترسب في الكربنة = سطح خشن ← كربنة جديدة تلتصق أسرع ← تراكم أسرع. في الخبر: كربنة NaCl فقط = أملس نسبياً. الظهران: NaCl+SiO₂ = أخشن = أسرع.' },
        { question: 'NFPA — أسرع وصول؟', answer: '6,000 ميكرون بسبب: (1) SiO₂ يُسرّع التراكم + (2) Biofilm يُضيف 500-1,000 ميكرون. كلاهما = يصل NFPA أسرع من الخبر.' },
        { question: 'Biofilm أبطأ — يعني أمان؟', answer: '4-6 أسابيع ≠ لا ينمو. أبطأ ← لكن: يُضيف سُمكاً. Anti-Biofilm كل 4 أشهر.' },
        { question: 'RO أيضاً للمدخنة؟', answer: 'ماء الظهران = NaCl ← شطف = NaCl جديد = Biofilm جديد + كربنة أسرع. RO = صفر.' },
        { question: 'ربع سنوي؟', answer: 'SiO₂ يُسرّع + Biofilm يُضيف + NaCl يمنع Saponification. ربع سنوي = الحد.' },
    ],
    expertTips: [
        'Alkaline pH 13 × 30 دقيقة — كربنة مزدوجة تحتاج وقت أطول.',
        'Anti-Biofilm بعد كل تنظيف — يمنع 4 أشهر.',
        'RO شطف — يمنع NaCl جديد.',
        'فحص ميكرون — SiO₂ يُسرّع التراكم = يصل NFPA أسرع.',
        'Baffle فلاتر شهرياً — NaCl+SiO₂ يسدّان أسرع.',
    ],
    warnings: [
        'كربنة مزدوجة + Biofilm = 6,000 ميكرون أسرع = خطر اشتعال. ربع سنوي.',
        'SiO₂ يُخشّن = كربنة أسرع = فلتر مسدود أسرع = دخان.',
        'Biofilm جاف = قابل للاشتعال.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص مطاعم' },
        { ...GOV.CIVILDEFENSE, role: 'السلامة — NFPA 96' },
        { entity: AMANA.SHARQIA.entity, url: AMANA.SHARQIA.url, role: 'اشتراطات مطاعم الشرقية' },
    ],
    expertReviewer: EXPERTS.ALMOHAIMED,
    expertCitations: [
        { expert: EXPERTS.ALMOHAIMED.name, quote: 'مدخنة الظهران = مزدوجة: NaCl+SiO₂ كربنة مُركّبة + 75-85% Biofilm. SiO₂ يُخشّن ← يُسرّع التراكم. Alkaline pH 13 + Anti-Biofilm + RO.', source: 'نصائح هندسية — مداخن مزدوجة' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ مداخن مرخصة', authority: 'بلدي + دفاع مدني', icon: 'shield-check' }],
    equipment: [
        { name: 'Alkaline pH 13', use: 'كربنة مزدوجة — 30 دقيقة' },
        { name: 'Anti-Biofilm', use: 'يمنع — 4 أشهر' },
        { name: 'RO Water', use: 'صفر NaCl' },
        { name: 'مقياس ميكرون', use: 'يكشف SiO₂ المُسرّع' },
    ],
    hiddenObjections: [
        { fear: 'ربع سنوي مكلف.', solution: 'حريق = 50,000-200,000. عقد = 1-4%.' },
        { fear: 'نظيفة.', solution: 'SiO₂ يُخشّن داخلياً. مقياس ميكرون يكشف.' },
    ],
    consumerEducation: [
        { myth: 'مثل الخبر.', truth: 'SiO₂ يُخشّن = أسرع. كربنة مُركّبة ≠ NaCl فقط.' },
        { myth: 'نصف سنوي.', truth: 'SiO₂ يُسرّع + Biofilm يُضيف. ربع سنوي.' },
        { myth: 'ماء عادي.', truth: 'NaCl = Biofilm. RO fقط.' },
    ],
    relatedServices: [
        { slug: 'oven-cleaning', context: 'أفران — كربنة', priority: 1 },
        { slug: 'cleaning', context: 'تنظيف — مطعم', priority: 2 },
        { slug: 'pest-control', context: 'حشرات — شحوم', priority: 3 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 4 },
        { slug: 'steam-cleaning', context: 'بخار', priority: 5 },
        { slug: 'glass-facades-cleaning', context: 'واجهات', priority: 6 },
        { slug: 'office-cleaning', context: 'مكاتب', priority: 7 },
    ],
};
