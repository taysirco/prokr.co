import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../gov-references';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف أفران بالظهران — كربنة + NaCl+SiO₂ شحوم مزدوجة + 75-85% Biofilm (2026)',
        description: 'تنظيف أفران الظهران. كربنة + NaCl مأكولات بحرية + SiO₂ يُخشّن الكربنة. 75-85% Biofilm شحمي. Alkaline pH 12+ + Anti-Biofilm + RO.',
        h1: 'تنظيف أفران بالظهران — كربنة + شحوم مزدوجة: ملح بحري يُصلّب',
        keywords: ['تنظيف أفران بالظهران', 'تنظيف فرن الظهران', 'شركة تنظيف أفران بالظهران'],
    },
    content: {
        introduction: 'الفرن الظهراني يواجه كربنة مزدوجة. الأولى — NaCl من مأكولات بحرية: مثل الخبر — مأكولات بحرية = NaCl عالي يمتزج بالشحوم ← يُصلّب. + SiO₂ يُخشّن الكربنة = طبقة مُركّبة. الثانية — 75-85% Biofilm شحمي: رطوبة + شحوم = Biofilm بكتيري/فطري. أبطأ من الخبر (85-95%) لكن: ينمو. Anti-Biofilm. الثالثة — كربنة شبه رطبة: 75-85% = بين الرياض (جافة) والخبر (رطبة). لزجة-شبه جافة = أصعب كشط.',
        shortAnswer: 'على عكس [بخاخ عادي] الذي لا يُعالج NaCl+SiO₂ الشحمي، يعتمد بروتوكولنا في خدمة [تنظيف الأفران] بمدينة [الظهران] على [Alkaline pH 12+ + Anti-Biofilm + RO]. ففي ظل [NaCl+SiO₂ بحري + 75-85%]، تتفاقم ظاهرة [تصلب مزدوج + Biofilm]. لذا؛ يتدخل خبراؤنا عبر [بروتوكول فرن مزدوج].',
        heroSubtitle: 'كربنة + NaCl+SiO₂ مزدوج + 75-85% Biofilm شحمي',
    },
    pricing: [
        { type: 'فرن عادي — مزدوج', unit: 'فرن', minPrice: 85, maxPrice: 175, time: '1-2 ساعة' },
        { type: 'عميق + Anti-Biofilm', unit: 'فرن', minPrice: 140, maxPrice: 270, time: '2-3 ساعات' },
        { type: 'فرن + شفاط + مطبخ', unit: 'باقة', minPrice: 210, maxPrice: 420, time: '3-5 ساعات' },
        { type: 'ربع سنوي', unit: 'سنة', minPrice: 400, maxPrice: 780, time: '4 زيارات' },
    ],
    faq: [
        { question: 'SiO₂ في الفرن — من أين؟', answer: 'SiO₂ يدخل المطبخ من الهواء ← يترسب على الشحوم ← يُخشّن الكربنة = طبقة مُركّبة (كربون + NaCl + SiO₂). أصعب إزالة.' },
        { question: 'Biofilm 75-85% — أبطأ؟', answer: 'أبطأ من الخبر (4-6 أسابيع بدلاً من 2-3). لكن: ينمو. Anti-Biofilm كل 4 أشهر.' },
        { question: 'كربنة شبه رطبة — ماذا يعني؟', answer: 'الرياض = كربنة جافة صلبة. الخبر = كربنة رطبة لزجة. الظهران = بينهما. أصعب كشط من الخبر — أصعب إذابة من الرياض.' },
        { question: 'RO — للفرن؟', answer: 'ماء الظهران = NaCl ← شطف = NaCl جديد = Biofilm جديد. RO = صفر.' },
        { question: 'ربع سنوي؟', answer: 'Biofilm 4-6 أسابيع + كربنة مزدوجة. ربع سنوي = الحد.' },
    ],
    expertTips: [
        'Alkaline pH 12+ × 20 دقيقة — NaCl+SiO₂ الشحمي يحتاج وقت.',
        'Anti-Biofilm بعد كل تنظيف — يمنع 4 أشهر.',
        'RO شطف — يمنع NaCl جديد.',
        'تجفيف — 75-85% = لا يجف. مروحة 20 دقيقة.',
        'فتحات تهوية — NaCl+SiO₂ يسدّان.',
    ],
    warnings: [
        'كربنة مزدوجة (NaCl+SiO₂) + Biofilm = طبقة مُركّبة = خطر اشتعال + رائحة.',
        'شطف بماء الظهران = NaCl = Biofilm. RO فقط.',
        'كربنة 6 أشهر مزدوجة = صعبة الإزالة 3× من عادية.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص التنظيف' },
        { entity: AMANA.SHARQIA.entity, url: AMANA.SHARQIA.url, role: 'اشتراطات الصحة بالشرقية' },
    ],
    expertReviewer: EXPERTS.ALMOHAIMED,
    expertCitations: [
        { expert: EXPERTS.ALMOHAIMED.name, quote: 'فرن الظهران = مزدوج: NaCl+SiO₂ بحري + 75-85% Biofilm + كربنة شبه رطبة. Alkaline + Anti-Biofilm + RO.', source: 'نصائح هندسية — أفران مزدوجة' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ تنظيف أفران مرخص', authority: 'منصة بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'Alkaline pH 12+', use: 'يُذيب كربنة + NaCl+SiO₂ شحمي' },
        { name: 'Anti-Biofilm', use: 'يقتل + يمنع — 4 أشهر' },
        { name: 'RO Water', use: 'صفر NaCl = صفر Biofilm جديد' },
    ],
    commonConcerns: [
        { concern: 'بخاخ يكفي.', solution: 'pH 9-10 لا يُذيب NaCl+SiO₂. لا يقتل Biofilm.' },
        { concern: 'أنظف بنفسي.', solution: 'بماء الظهران = NaCl. بدون Anti-Biofilm = يعود.' },
    ],
    consumerEducation: [
        { myth: 'فرن عادي.', truth: 'NaCl+SiO₂ + 75-85% = مزدوج. مختلف.' },
        { myth: 'مثل الخبر.', truth: 'SiO₂ إضافي يُخشّن. 75-85% = أبطأ. كربنة شبه رطبة = أصعب.' },
        { myth: 'نصف سنوي.', truth: 'Biofilm 4-6 أسابيع. ربع سنوي.' },
    ],
    relatedServices: [
        { slug: 'restaurant-chimney-cleaning', context: 'مداخن — كربنة', priority: 1 },
        { slug: 'cleaning', context: 'تنظيف — مطبخ', priority: 2 },
        { slug: 'pest-control', context: 'حشرات — شحوم', priority: 3 },
        { slug: 'steam-cleaning', context: 'بخار — تعقيم', priority: 4 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف — شحوم', priority: 5 },
        { slug: 'glass-facades-cleaning', context: 'واجهات', priority: 6 },
        { slug: 'hourly-cleaning', context: 'بالساعة', priority: 7 },
    ],
};
