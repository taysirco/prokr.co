import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../gov-references';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف أفران بحفر الباطن — كربنة جافة صلبة 52°م + SiO₂ يُخشّن + 10-15% لا Biofilm (ميزة!) (2026)',
        description: 'تنظيف أفران حفر الباطن. كربنة جافة أصلب (52°م + 10-15%). SiO₂ يُخشّن الكربنة. لا Biofilm (ميزة!). Alkaline pH 12+ وقت أطول.',
        h1: 'تنظيف أفران بحفر الباطن — كربنة جافة أصلب ورمل يُخشّن',
        keywords: ['تنظيف أفران حفر الباطن', 'تنظيف فرن حفر الباطن', 'شركة تنظيف أفران حفر الباطن'],
    },
    content: {
        introduction: 'الفرن في حفر الباطن يواجه كربنة قارية + ميزة. الأولى — كربنة جافة أصلب: 52°م + 10-15% = أجف = كربنة تجف أسرع = أصلب. صلبة > الرياض > الشرقية. أصعب كشط. Alkaline pH 12+ وقت أطول. الثانية — SiO₂ يُخشّن: SiO₂ يدخل المطبخ ← يترسب على الشحوم ← يُخشّن الكربنة = صلبة+خشنة. الثالثة — لا NaCl: لا مأكولات بحرية NaCl = لا تصلب ملحي (ميزة!) = كربنة عادية + SiO₂ فقط. الميزة — لا Biofilm!: 10-15% = لا Biofilm شحمي. لا Anti-Biofilm. أنظف. توفير!',
        shortAnswer: 'على عكس [بخاخ عادي] الذي لا يُعالج كربنة صلبة قارية، يعتمد بروتوكولنا في خدمة [تنظيف الأفران] بمدينة [حفر الباطن] على [Alkaline pH 12+ طويل + HEPA]. ففي ظل [كربنة 52°م + SiO₂ + 10-15%]، تتفاقم ظاهرة [صلابة + خشونة]. لذا؛ يتدخل خبراؤنا عبر [بروتوكول فرن قاري].',
        heroSubtitle: 'كربنة جافة أصلب + SiO₂ خشونة + لا Biofilm + لا NaCl',
    },
    pricing: [
        { type: 'فرن عادي', unit: 'فرن', minPrice: 75, maxPrice: 155, time: '1-2 ساعة' },
        { type: 'عميق (كربنة صلبة)', unit: 'فرن', minPrice: 120, maxPrice: 240, time: '2-3 ساعات' },
        { type: 'فرن + شفاط + مطبخ', unit: 'باقة', minPrice: 190, maxPrice: 380, time: '3-5 ساعات' },
        { type: 'ربع سنوي', unit: 'سنة', minPrice: 350, maxPrice: 700, time: '4 زيارات' },
    ],
    faq: [
        { question: 'كربنة أصلب — أصعب؟', answer: '52°م + 10-15% = تجف فوراً = أصلب كربنة في المملكة. الشرقية: رطبة+لزجة. الرياض: جافة. حفر الباطن: أجف+أحر = أصلب.' },
        { question: 'لا Biofilm — ميزة حقيقية؟', answer: 'كبيرة! 10-15% = لا Biofilm شحمي. لا Anti-Biofilm = توفير. لا طبقة عضوية.' },
        { question: 'لا NaCl — فرق؟', answer: 'فرق — لا تصلب ملحي. كربنة عادية+SiO₂ فقط. أبسط من الظهران. لكن: أصلب من الشرقية.' },
        { question: 'Alkaline — وقت أطول؟', answer: 'كربنة صلبة = 25-30 دقيقة (بدلاً من 15-20 في الشرقية). + خشونة SiO₂ = يحتاج Mechanical أيضاً.' },
        { question: 'ربع سنوي؟', answer: 'كربنة صلبة تتراكم أسرع (تجف فوراً). ربع سنوي = قبل التصلب العميق.' },
    ],
    expertTips: [
        'Alkaline pH 12+ × 30 دقيقة — كربنة صلبة تحتاج وقت.',
        'HEPA شفط قبل — SiO₂ على المطبخ.',
        'لا Anti-Biofilm — 10-15% = توفير!',
        'Mechanical بعد Alkaline — خشونة SiO₂ يحتاج.',
        'ماء مُفلتر — CaCO₃ بقع.',
    ],
    warnings: [
        'كربنة صلبة 6 أشهر = تحتاج Mechanical. ربع سنوي = أسهل.',
        'SiO₂ يُخشّن ← كربنة جديدة تلتصق أسرع.',
        'بخاخ pH 9-10 = لا يُعالج كربنة 52°م صلبة.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص التنظيف' },
        { entity: AMANA.HAFR.entity, url: AMANA.HAFR.url, role: 'اشتراطات الصحة بحفر الباطن' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALMOHAIMED.name, quote: 'فرن حفر الباطن: كربنة أصلب (52°م + 10-15%) + SiO₂ خشونة. لا Biofilm ولا NaCl (ميزتين!). Alkaline أطول.', source: 'نصائح هندسية — أفران قارية' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ تنظيف أفران مرخص', authority: 'منصة بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'Alkaline pH 12+', use: 'كربنة صلبة — 30 دقيقة' },
        { name: 'Mechanical Scraper', use: 'خشونة SiO₂' },
        { name: 'ماء مُفلتر', use: 'لا CaCO₃' },
    ],
    commonConcerns: [
        { concern: 'لا Biofilm = سهل.', solution: 'كربنة أصلب + SiO₂ خشونة. 2 تحديات.' },
        { concern: 'بخاخ.', solution: 'pH 9-10 لا يعمل على كربنة 52°م.' },
    ],
    consumerEducation: [
        { myth: 'مثل الرياض.', truth: '52°م > 45°م. أصلب كربنة.' },
        { myth: 'مثل الشرقية.', truth: 'لا NaCl + لا Biofilm. أصلب لكن أبسط.' },
        { myth: 'نصف سنوي.', truth: 'كربنة تجف فوراً. ربع سنوي.' },
    ],
    relatedServices: [
        { slug: 'restaurant-chimney-cleaning', context: 'مداخن — كربنة', priority: 1 },
        { slug: 'cleaning', context: 'تنظيف — مطبخ', priority: 2 },
        { slug: 'pest-control', context: 'حشرات — عقارب', priority: 3 },
        { slug: 'steam-cleaning', context: 'بخار', priority: 4 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف — ΔT', priority: 5 },
        { slug: 'hourly-cleaning', context: 'بالساعة', priority: 6 },
        { slug: 'glass-facades-cleaning', context: 'واجهات', priority: 7 },
    ],
};
