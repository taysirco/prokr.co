import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف أفران بالباحة — كربنة رطبة + Biofilm غابات = أبطأ تنظيف! Anti-Biofilm أولاً (2026)',
        description: 'تنظيف أفران الباحة. كربنة رطبة+Biofilm غابات يحمي الكربنة! Anti-Biofilm أولاً ← Alkaline. أبطأ+أغلى من عنيزة.',
        h1: 'تنظيف أفران بالباحة — كربنة رطبة وBiofilm — أبطأ!',
        keywords: ['تنظيف أفران الباحة', 'تنظيف فرن بالباحة', 'شركة تنظيف أفران الباحة'],
    },
    content: {
        introduction: 'فرن الباحة = أعقد فرن بالمملكة! لماذا؟ كربنة رطبة: 50-75% رطوبة = الشحوم تتكربن في بيئة رطبة ← طبقة أسمك وأصعب إزالة. في عنيزة: كربنة جافة هشة = Alkaline مباشر. هنا: كربنة رطبة لزجة. Biofilm غابات: 50-75% + غابات عرعر = Biofilm (غشاء بيولوجي) ينمو فوق الكربنة الرطبة ← يحمي الكربنة ← Alkaline لا يصلها. يجب Anti-Biofilm أولاً ← يكشف الكربنة ← ثم Alkaline يُذيبها. هذا = خطوة إضافية + وقت إضافي + تكلفة إضافية مقارنة بعنيزة. مقارنة: عنيزة = كربنة جافة + لا Biofilm + Alkaline مباشر = 1-2 ساعة. الباحة = كربنة رطبة + Biofilm = Anti-Biofilm ← Alkaline = 2-3 ساعات = أغلى 25-30%.',
        shortAnswer: 'على عكس [استخدام Alkaline مباشر الذي لا يصل الكربنة المحمية]، يعتمد بروتوكولنا في خدمة [تنظيف الأفران] بمدينة [الباحة] على [Anti-Biofilm أولاً ← Alkaline ← شطف]. ففي ظل [50-75% رطوبة + غابات عرعر + كربنة رطبة + Biofilm يحمي الكربنة]، تتفاقم ظاهرة [طبقة مزدوجة: Biofilm فوق كربنة]. لذا؛ يتدخل فنيونا عبر [كشف ← إذابة ← شطف] لضمان فرن نظيف فعلاً.',
        heroSubtitle: 'كربنة رطبة + Biofilm يحميها — Anti-Biofilm أولاً!',
    },
    pricing: [
        { type: 'فرن عادي', unit: 'فرن', minPrice: 70, maxPrice: 150, time: '2-3 ساعات' },
        { type: 'فرن + Anti-Biofilm عميق', unit: 'فرن', minPrice: 90, maxPrice: 190, time: '2.5-3.5 ساعات' },
        { type: 'فرن + شفاط', unit: 'باقة', minPrice: 180, maxPrice: 370, time: '4-5 ساعات' },
        { type: 'نصف سنوي (2 زيارة)', unit: 'سنة', minPrice: 250, maxPrice: 500, time: '2 زيارة' },
    ],
    faq: [
        { question: 'ليش فرن الباحة أصعب تنظيف من عنيزة؟', answer: 'Biofilm يحمي الكربنة! Alkaline لا يصلها. Anti-Biofilm أولاً = خطوة إضافية. عنيزة: Alkaline مباشر.' },
        { question: 'كم مدة تنظيف فرن بالباحة؟', answer: '2-3 ساعات مقابل 1-2 بعنيزة. Anti-Biofilm (20 دقيقة نقع) + Alkaline (15 دقيقة) + شطف.' },
        { question: 'كيف يتكوّن Biofilm على الفرن بالباحة؟', answer: '50-75% رطوبة + غابات = بكتيريا تنمو فوق الكربنة ← غشاء بيولوجي يحميها. فريد بالمدن الجبلية الرطبة.' },
        { question: 'هل Alkaline يكفي بدون Anti-Biofilm بالباحة؟', answer: 'لا! Biofilm يمنع Alkaline من الوصول. يبدو نظيفاً لكن الكربنة تحت الغشاء. Anti-Biofilm أولاً.' },
        { question: 'متى أنظف الفرن بالباحة؟', answer: 'كل 3-4 أشهر — Biofilm ينمو أسرع. عنيزة: كل 6 أشهر. الرطوبة تُسرّع كل شيء.' },
    ],
    expertTips: [
        'Anti-Biofilm أولاً — يكشف الكربنة للـ Alkaline.',
        'Alkaline ثانياً — يُذيب الكربنة الرطبة بعد كشفها.',
        'لا سلك جلي — سطح الفرن حساس.',
        'كل 3-4 أشهر — Biofilm ينمو أسرع في 50-75%.',
        'تجفيف كامل — بدونه Biofilm يتكوّن مرة أخرى.',
    ],
    warnings: [
        'Alkaline بدون Anti-Biofilm = يبدو نظيفاً لكن الكربنة تحت الغشاء — تتراكم.',
        'كربنة رطبة × 6 أشهر = طبقة سميكة جداً تحتاج جلسة مزدوجة (أغلى 2×).',
        'Biofilm + كربنة = طبقة قابلة للاشتعال — خطر حريق لو سخنت.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص شركات التنظيف' },
        { entity: AMANA.BAHA.entity, url: AMANA.BAHA.url, role: 'اشتراطات أمانة الباحة' },
    ],
    expertReviewer: EXPERTS.ALMOHAIMED,
    expertCitations: [
        { expert: EXPERTS.ALMOHAIMED.name, quote: 'فرن الباحة: Biofilm يحمي الكربنة. Anti-Biofilm أولاً. أعقد من عنيزة. رطوبة تُسرّع كل شيء.', source: 'نصائح هندسية — مطابخ جبلية' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ تنظيف أفران مرخص', authority: 'بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'Anti-Biofilm', use: 'يكشف الكربنة بإزالة الغشاء البيولوجي' },
        { name: 'Alkaline Degreaser', use: 'يُذيب الكربنة الرطبة بعد كشفها' },
        { name: 'فرشاة ناعمة', use: 'تنظيف بدون خدش سطح الفرن' },
    ],
    hiddenObjections: [
        { fear: 'Alkaline يكفي.', solution: 'Biofilm يمنع الوصول. Anti-Biofilm أولاً = الفرق.' },
        { fear: 'مثل عنيزة.', solution: 'عنيزة: لا Biofilm = Alkaline مباشر. الباحة: خطوة إضافية.' },
    ],
    counterNarratives: [
        { myth: 'أي منظّف يكفي للفرن.', truth: 'Biofilm يحمي الكربنة. Anti-Biofilm فقط يكشفها.' },
        { myth: 'مرتين/سنة تكفي.', truth: '3-4 أشهر — Biofilm ينمو أسرع بسبب الرطوبة.' },
    ],
    relatedServices: [
        { slug: 'restaurant-chimney-cleaning', context: 'مداخن — Biofilm', priority: 1 },
        { slug: 'cleaning', context: 'تنظيف', priority: 2 },
        { slug: 'pest-control', context: 'حشرات', priority: 3 },
        { slug: 'steam-cleaning', context: 'بخار', priority: 4 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 5 },
        { slug: 'hourly-cleaning', context: 'بالساعة', priority: 6 },
        { slug: 'glass-facades-cleaning', context: 'واجهات', priority: 7 },
    ],
};
