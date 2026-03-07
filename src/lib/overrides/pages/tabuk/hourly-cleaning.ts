import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف بالساعة بتبوك — عاملة مُدرّبة على بروتوكول HEPA-أولاً + تكاثف + سخام + كلس ثلجي (2026)',
        description: 'تنظيف بالساعة تبوك. عاملة مُدرّبة: HEPA أولاً (حسمى 6 Mohs). بخار تكاثف صقيعي. Alkaline سخام مدافئ. ستريك كلس ثلجي. جدول فصلي.',
        h1: 'تنظيف بالساعة بتبوك — عاملة تعرف الفرق بين -2°م و44°م',
        keywords: ['تنظيف بالساعة بتبوك', 'عاملة بالساعة تبوك', 'شركة تنظيف بالساعة بتبوك'],
    },
    content: {
        introduction: 'التنظيف بالساعة في تبوك ≠ أي مدينة أخرى — العاملة تحتاج تدريباً على بروتوكول مناخي فريد. HEPA-أولاً: حجر حسمى 6 Mohs يخدش. Color-Coded: ستريك (كلس) ≠ Alkaline (سخام). جدول فصلي: شتاء = تكاثف + سخام. صيف = HEPA + كلس. العاملة العادية: ممسحة مبللة = تخدش + تُبقّع + تتجاهل التكاثف والسخام.',
        shortAnswer: 'عاملة مُدرّبة على البروتوكول التبوكي الرباعي (HEPA + بخار + Alkaline + ستريك) بترتيب وجدول فصلي. ففي ظل [حسمى + تكاثف + سخام + كلس ثلجي]، التدريب = الفرق.',
        heroSubtitle: 'ليست أي عاملة — مُدرّبة على 4 أنواع تلوث تبوكية × 4 فصول',
    },
    pricing: [
        { type: 'تنظيف بالساعة — عاملة مُدرّبة', unit: 'ساعة', minPrice: 35, maxPrice: 55, time: 'ساعة' },
        { type: 'زيارة نصف يوم (4 ساعات)', unit: 'زيارة', minPrice: 130, maxPrice: 200, time: '4 ساعات' },
        { type: 'زيارة يوم كامل (8 ساعات)', unit: 'زيارة', minPrice: 250, maxPrice: 400, time: '8 ساعات' },
        { type: 'عقد أسبوعي (زيارة/أسبوع)', unit: 'شهر', minPrice: 450, maxPrice: 700, time: '4 زيارات' },
    ],
    faq: [
        { question: 'الفرق بين عاملتكم وعاملة عادية؟', answer: '4 فروقات: (1) HEPA-أولاً (حسمى 6 Mohs يخدش). (2) Color-Coded (ستريك ≠ Alkaline). (3) جدول فصلي (شتاء = تكاثف/صيف = HEPA). (4) تعرف نقاط التكاثف الصقيعي.' },
        { question: 'كم ساعة لشقة 3 غرف؟', answer: '4 ساعات للبروتوكول الكامل. فيلا: 6-8 ساعات.' },
    ],
    expertTips: [
        'HEPA أولاً — حسمى 6 Mohs. العاملة المُدرّبة لا تمسح قبل HEPA.',
        'ستريك + Alkaline لا يُخلطان — حمض + قاعدة = تحييد.',
        'زيارة أسبوعية = أفضل من شهرية — الغبار يتراكم يومياً.',
        'في الشتاء: فحص نقاط التكاثف في كل زيارة.',
    ],
    warnings: [
        'عاملة غير مُدرّبة + ممسحة على حسمى = خدوش يومية.',
        'ماء صنبور على الأسطح اللامعة = كلس ثلجي جديد. ماء مُنقّى فقط.',
    ],
    trustAnchors: [
        { ...GOV.HRSD, role: 'تنظيم العمالة المنزلية' },
        { ...GOV.BALADI, role: 'ترخيص شركات التنظيف' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALMOHAIMED.name, quote: 'عاملة تبوك تحتاج تدريباً خاصاً: HEPA-أولاً + Color-Coded + جدول فصلي. العاملة غير المُدرّبة تُتلف أكثر مما تُنظف.', source: 'نصائح هندسية — بروتوكولات التنظيف المنزلي' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ عاملات مُدرّبات', authority: 'HRSD + بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'HEPA صناعي محمول', use: 'يسحب حسمى قبل المسح — يمنع الخدش' },
        { name: 'مايكروفايبر Color-Coded', use: 'أحمر/أزرق/أخضر/أصفر = منع تلوث متبادل' },
        { name: 'ستريك + Alkaline (منفصلان)', use: 'ستريك للكلس + Alkaline للسخام — لا يُخلطان' },
        { name: 'ماء مُنقّى (TDS < 20 ppm)', use: 'للأسطح اللامعة — يمنع كلس ثلجي جديد' },
    ],
    hiddenObjections: [
        { fear: 'عاملة عادية أرخص.', solution: 'أرخص/ساعة = أغلى/سنة. خدوش حسمى: جلي 1,500-3,000 ريال. كلس صنبور: 200-500 ريال. 10-15 ريال/ساعة إضافية × 200 ساعة/سنة = أرخص من جلسة جلي.' },
    ],
    counterNarratives: [
        { myth: 'أي عاملة نتيجتها واحدة.', truth: 'ممسحة على حسمى = خدش. HEPA أولاً = حماية. الفرق = التدريب.' },
    ],
    relatedServices: [
        { slug: 'cleaning', context: 'تنظيف — البروتوكول الرباعي بفريق', priority: 1 },
        { slug: 'apartments-cleaning', context: 'شقق — تنظيف عميق', priority: 2 },
        { slug: 'steam-cleaning', context: 'بخار — تعقيم عميق', priority: 3 },
        { slug: 'sofa-cleaning', context: 'كنب — تنظيف + Conditioning', priority: 4 },
        { slug: 'carpet-cleaning', context: 'سجاد — HEPA + Encapsulation', priority: 5 },
        { slug: 'office-cleaning', context: 'مكاتب — عاملة مُدرّبة ESD-Safe', priority: 6 },
        { slug: 'villas-cleaning', context: 'فلل — Zone-Based', priority: 7 },
    ],
};
