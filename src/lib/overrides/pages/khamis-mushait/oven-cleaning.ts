import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف أفران بخميس مشيط — كربنة رطبة+Biofilm يحميها — Anti-Biofilm أولاً! أبطأ (2026)',
        description: 'تنظيف أفران خميس مشيط. كربنة رطبة+Biofilm يحمي الكربنة! Anti-Biofilm أولاً ← Alkaline. أبطأ+أغلى من عنيزة.',
        h1: 'تنظيف أفران بخميس مشيط — كربنة رطبة وBiofilm',
        keywords: ['تنظيف أفران خميس مشيط', 'تنظيف فرن بخميس مشيط', 'شركة تنظيف أفران خميس مشيط'],
    },
    content: {
        introduction: 'فرن خميس مشيط يحتاج خطوة إضافية لا تحتاجها عنيزة! كربنة رطبة: 60-85% = الشحوم تتكربن في بيئة رطبة ← طبقة أسمك وألصق. في عنيزة: كربنة جافة هشة = Alkaline مباشر. هنا: كربنة لزجة. Biofilm: 60-85% + ضباب = غشاء بيولوجي ينمو فوق الكربنة الرطبة ← يحمي الكربنة من Alkaline. يجب Anti-Biofilm أولاً (كشف الكربنة) ← ثم Alkaline يُذيبها. هذا = خطوة إضافية + 30-45 دقيقة إضافية + تكلفة أعلى. مقارنة: عنيزة = كربنة جافة + لا Biofilm + Alkaline مباشر + كرملة تمور = 1-2 ساعة. خميس = كربنة رطبة + Biofilm = Anti-Biofilm ← Alkaline = 2-3 ساعات = أغلى 25%.',
        shortAnswer: 'على عكس [Alkaline مباشر الذي لا يصل الكربنة المحمية بـ Biofilm]، يعتمد بروتوكولنا في خدمة [تنظيف الأفران] بمدينة [خميس مشيط] على [Anti-Biofilm ← Alkaline ← شطف]. ففي ظل [60-85%+ضباب+كربنة رطبة+Biofilm]، تتفاقم ظاهرة [طبقة مزدوجة: Biofilm فوق كربنة]. لذا؛ يتدخل فنيونا عبر [كشف ← إذابة ← شطف] لتنظيف حقيقي.',
        heroSubtitle: 'كربنة رطبة + Biofilm يحميها — Anti-Biofilm أولاً!',
    },
    pricing: [
        { type: 'فرن عادي', unit: 'فرن', minPrice: 65, maxPrice: 140, time: '2-3 ساعات' },
        { type: 'فرن + Anti-Biofilm عميق', unit: 'فرن', minPrice: 85, maxPrice: 180, time: '2.5-3.5 ساعات' },
        { type: 'فرن + شفاط', unit: 'باقة', minPrice: 170, maxPrice: 350, time: '4-5 ساعات' },
        { type: 'نصف سنوي (2 زيارة)', unit: 'سنة', minPrice: 230, maxPrice: 480, time: '2 زيارة' },
    ],
    faq: [
        { question: 'ليش فرن خميس أصعب من عنيزة؟', answer: 'Biofilm يحمي الكربنة! Alkaline لا يصلها. Anti-Biofilm أولاً = خطوة إضافية. عنيزة: Alkaline مباشر.' },
        { question: 'كم مدة تنظيف فرن بخميس مشيط؟', answer: '2-3 ساعات مقابل 1-2 بعنيزة. Anti-Biofilm (20 دقيقة) + Alkaline (15 دقيقة) + شطف.' },
        { question: 'هل Alkaline يكفي بدون Anti-Biofilm بخميس؟', answer: 'لا! Biofilm يمنع الوصول. يبدو نظيفاً لكن الكربنة تحت. Anti-Biofilm أولاً.' },
        { question: 'كم تكلفة تنظيف فرن بخميس مقارنة بعنيزة؟', answer: 'أغلى 25% — Anti-Biofilm خطوة إضافية. 65-180 مقابل 55-150.' },
        { question: 'متى أنظف الفرن بخميس مشيط؟', answer: 'كل 3-4 أشهر — Biofilm ينمو أسرع. عنيزة: كل 6 أشهر. الرطوبة تُسرّع.' },
    ],
    expertTips: [
        'Anti-Biofilm أولاً — يكشف الكربنة.',
        'Alkaline ثانياً — يُذيب الكربنة الرطبة.',
        'لا سلك جلي — سطح الفرن حساس.',
        'كل 3-4 أشهر — Biofilm ينمو أسرع بالرطوبة.',
        'تجفيف كامل — بدونه Biofilm يرجع.',
    ],
    warnings: [
        'Alkaline بدون Anti-Biofilm = نظيف ظاهرياً لكن كربنة كامنة — تتراكم.',
        'كربنة رطبة × 6 أشهر = سميكة جداً — جلسة مزدوجة.',
        'Biofilm + كربنة = طبقة قابلة للاشتعال — خطر حريق.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص شركات التنظيف' },
        { entity: AMANA.ASIR.entity, url: AMANA.ASIR.url, role: 'اشتراطات أمانة عسير' },
    ],
    expertReviewer: EXPERTS.ALMOHAIMED,
    expertCitations: [
        { expert: EXPERTS.ALMOHAIMED.name, quote: 'فرن خميس: Biofilm يحمي الكربنة. Anti-Biofilm أولاً. أعقد من عنيزة. رطوبة تُسرّع.', source: 'نصائح هندسية — مطابخ جبلية' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ تنظيف أفران مرخص', authority: 'بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'Anti-Biofilm', use: 'يكشف الكربنة بإزالة الغشاء' },
        { name: 'Alkaline Degreaser', use: 'يُذيب الكربنة الرطبة بعد كشفها' },
        { name: 'فرشاة ناعمة', use: 'تنظيف بدون خدش' },
    ],
    hiddenObjections: [
        { fear: 'Alkaline يكفي.', solution: 'Biofilm يمنع. Anti-Biofilm أولاً = الفرق.' },
        { fear: 'مثل الباحة.', solution: 'متشابه — نفس الفيزياء.' },
    ],
    counterNarratives: [
        { myth: 'أي منظّف يكفي.', truth: 'Biofilm يحمي الكربنة. Anti-Biofilm فقط يكشفها.' },
        { myth: 'مرتين/سنة.', truth: '3-4 أشهر — Biofilm أسرع بالرطوبة.' },
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
