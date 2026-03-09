import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف أفران بعنيزة — كربنة جافة + تمور كرملة سكر فريد — لا Biofilm! أبسط! (2026)',
        description: 'تنظيف أفران عنيزة. كربنة جافة. تمور = كرملة سكر فريدة. لا Biofilm! Alkaline مباشر. أبسط من خميس والباحة.',
        h1: 'تنظيف أفران بعنيزة — كربنة جافة وتمور كرملة',
        keywords: ['تنظيف أفران عنيزة', 'تنظيف فرن بعنيزة', 'شركة تنظيف أفران عنيزة'],
    },
    content: {
        introduction: 'فرن عنيزة = أبسط فرن بالمملكة + تحدٍ فريد! الأبسط: كربنة جافة (15-25% رطوبة = الشحوم تتكربن جافة بدون Biofilm). في خميس مشيط والباحة: كربنة رطبة + Biofilm يحمي الكربنة = خطوة إضافية (Anti-Biofilm أولاً). هنا: Alkaline مباشر يُذيب الكربنة = أسرع+أرخص. التحدي الفريد — كرملة التمور!: ضيافة التمور القصيمية = سكر تمور يسقط في الفرن. تحت حرارة 200°م+ = Caramelized Sugar = طبقة سوداء صلبة مختلفة عن الكربنة العادية. Alkaline لا يُكسِّرها — يجب Enzymatic يُكسِّر السكر أولاً ← ثم Alkaline للكربنة. SiO₂ يدخل فتحات التهوية = خشونة على أسطح الفرن الداخلية. فرشاة ناعمة بعد شطف.',
        shortAnswer: 'على عكس [الفرك بسلك الجلي الذي يخدش]، يعتمد بروتوكولنا في خدمة [تنظيف الأفران] بمدينة [عنيزة] على [Enzymatic تمور ← Alkaline ← شطف]. ففي ظل [كربنة جافة + كرملة تمور + SiO₂ + لا Biofilm]، تتفاقم ظاهرة [طبقة سوداء مزدوجة]. لذا؛ يتدخل فنيونا عبر [إنزيم ← قلوي ← فرشاة ناعمة] لضمان فرن نظيف بدون خدش.',
        heroSubtitle: 'كربنة جافة + كرملة تمور — Enzymatic+Alkaline! لا Biofilm!',
    },
    pricing: [
        { type: 'فرن عادي', unit: 'فرن', minPrice: 55, maxPrice: 120, time: '1-2 ساعة' },
        { type: 'فرن + إزالة كرملة تمور', unit: 'فرن', minPrice: 70, maxPrice: 150, time: '1.5-2.5 ساعة' },
        { type: 'فرن + شفاط', unit: 'باقة', minPrice: 140, maxPrice: 290, time: '3-4 ساعات' },
        { type: 'نصف سنوي (زيارتين)', unit: 'سنة', minPrice: 200, maxPrice: 400, time: '2 زيارة' },
    ],
    faq: [
        { question: 'كيف أنظف فرن من بقايا تمور متكرملة؟', answer: 'Enzymatic يُكسِّر السكر المتكرمل (15 دقيقة نقع) ← ثم Alkaline للكربنة العادية. لا فرك بسلك!' },
        { question: 'ليش فرن عنيزة أبسط من خميس مشيط؟', answer: 'لا Biofilm — 15-25% رطوبة = Alkaline مباشر. خميس: Anti-Biofilm أولاً ← ثم Alkaline = خطوة إضافية+تكلفة.' },
        { question: 'كم المدة لتنظيف فرن بعنيزة؟', answer: '1-2 ساعة بدون تمور. 1.5-2.5 ساعة مع كرملة تمور. أسرع من خميس (2-3 ساعات بسبب Biofilm).' },
        { question: 'هل سلك الجلي يصلح لتنظيف الفرن؟', answer: 'لا! SiO₂ في السلك + سطح الفرن = خدش لا يُصلح. فرشاة ناعمة + Alkaline فقط.' },
        { question: 'متى أنظف الفرن بعنيزة؟', answer: 'بعد موسم التمور (نوفمبر) — كرملة متراكمة. وقبل رمضان — استخدام مكثف. نصف سنوي مثالي.' },
    ],
    expertTips: [
        'Enzymatic أولاً — يُكسِّر كرملة التمور التي لا يُذيبها Alkaline.',
        'Alkaline ثانياً — يُذيب الكربنة الجافة مباشرة (لا Biofilm!).',
        'فرشاة ناعمة — SiO₂ في السلك يخدش.',
        'لا Anti-Biofilm — 15-25% = صفر Biofilm. وفّر.',
        'نصف سنوي — بعد تمور + قبل رمضان.',
    ],
    warnings: [
        'سلك جلي + SiO₂ = خدش سطح الفرن الداخلي — طبقة غير لاصقة تتلف.',
        'كرملة تمور + Alkaline فقط = لا يُزيلها — Enzymatic إلزامي أولاً.',
        'فرن مهمل 6+ أشهر بدون تنظيف = كربنة سميكة تحتاج جلسة مزدوجة.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص شركات التنظيف' },
        { entity: AMANA.QASSIM.entity, url: AMANA.QASSIM.url, role: 'اشتراطات أمانة القصيم' },
    ],
    expertReviewer: EXPERTS.ALMOHAIMED,
    expertCitations: [
        { expert: EXPERTS.ALMOHAIMED.name, quote: 'فرن عنيزة: كربنة جافة + كرملة تمور = فريد. Enzymatic+Alkaline. لا Biofilm = أبسط.', source: 'نصائح هندسية — مطابخ قصيمية' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ تنظيف أفران مرخص', authority: 'منصة بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'Enzymatic Sugar Breaker', use: 'يُكسِّر كرملة التمور — لا يُذيبها Alkaline' },
        { name: 'Alkaline Degreaser', use: 'يُذيب الكربنة الجافة مباشرة (لا Biofilm!)' },
        { name: 'فرشاة ناعمة', use: 'تنظيف بدون خدش — SiO₂ في السلك يخدش' },
    ],
    hiddenObjections: [
        { fear: 'مثل خميس.', solution: 'أبسط — لا Biofilm = خطوة أقل.' },
        { fear: 'Alkaline يكفي.', solution: 'كرملة تمور مختلفة — Enzymatic أولاً.' },
    ],
    counterNarratives: [
        { myth: 'سلك جلي أسرع.', truth: 'يخدش سطح الفرن. Alkaline+Enzymatic أبطأ لكن بدون خدش.' },
        { myth: 'الفرن ما يحتاج Enzymatic.', truth: 'كرملة تمور ≠ كربنة عادية. Alkaline لا يُكسِّر السكر.' },
    ],
    relatedServices: [
        { slug: 'restaurant-chimney-cleaning', context: 'مداخن — كربنة', priority: 1 },
        { slug: 'cleaning', context: 'تنظيف', priority: 2 },
        { slug: 'pest-control', context: 'حشرات — تمور', priority: 3 },
        { slug: 'steam-cleaning', context: 'بخار', priority: 4 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 5 },
        { slug: 'hourly-cleaning', context: 'بالساعة', priority: 6 },
        { slug: 'glass-facades-cleaning', context: 'واجهات', priority: 7 },
    ],
};
