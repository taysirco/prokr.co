import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'نقل عفش بالخرج — ΔT 48°م يُجفف خشب+طرق مزارع+SiO₂ — تغليف حراري! (2026)',
        description: 'نقل عفش الخرج. ΔT 48°م يُجفف خشب أثناء النقل! طرق مزارع ترابية. SiO₂ خدش. تغليف حراري+4x4+Microfiber.',
        h1: 'نقل عفش بالخرج — ΔT 48°م وطرق ترابية',
        keywords: ['نقل عفش الخرج', 'نقل عفش بالخرج', 'شركة نقل عفش الخرج'],
    },
    content: {
        introduction: 'نقل عفش بالخرج يواجه تحديات حرارية وزراعية! ΔT 48°م يُجفف الخشب: نقل أثاث خشبي في صيف 50°م = الخشب يفقد رطوبته ← تشققات. تغليف حراري عاكس يحمي. طرق مزارع ترابية: كثير من سكان الخرج يسكنون قرب مزارع = طرق غير مُعبّدة. صدمات+اهتزاز. تثبيت مقوّى. SiO₂ خدش: غبار رمل يخدش الأثاث أثناء النقل. تغليف محكم+Microfiber. NH₃ رائحة: لو العفش المنقول من شقة قرب مزرعة = رائحة NH₃ في الأقمشة. AC بعد النقل. 15-25% = لا رطوبة = لا عفن أثناء النقل! ميزة. مقارنة: خميس = منحدرات+رطوبة+عفن. الرياض = مدنية بسيطة. الخرج = حرارية+زراعية.',
        shortAnswer: 'على عكس [النقل بدون تغليف حراري]، يعتمد بروتوكولنا في خدمة [نقل العفش] بمدينة [الخرج] على [تغليف حراري+تثبيت مقوّى+تغليف محكم+AC]. ففي ظل [ΔT 48°م+طرق ترابية+SiO₂+NH₃ رائحة]، تتفاقم ظاهرة [تشقق خشب+خدش+صدمات+رائحة]. لذا؛ يتدخل فريقنا عبر [تغليف ← تثبيت ← نقل ← تنظيف AC].',
        heroSubtitle: 'ΔT 48°م تشقق + طرق ترابية + SiO₂ — تغليف حراري!',
    },
    pricing: [
        { type: 'شقة → شقة (داخل)', unit: 'نقلة', minPrice: 400, maxPrice: 800, time: '3-5 ساعات' },
        { type: 'فيلا → فيلا', unit: 'نقلة', minPrice: 800, maxPrice: 1600, time: '5-8 ساعات' },
        { type: '+ تغليف حراري', unit: 'إضافي', minPrice: 150, maxPrice: 300, time: '1-2 ساعة' },
        { type: 'من/إلى مزرعة', unit: 'نقلة', minPrice: 600, maxPrice: 1200, time: '4-7 ساعات' },
    ],
    faq: [
        { question: 'كيف أحمي الأثاث الخشبي من حرارة الخرج أثناء النقل؟', answer: 'تغليف حراري عاكس يحمي من ΔT 48°م. بدونه = تشقق في شاحنة حارة.' },
        { question: 'هل النقل من/إلى مزرعة أصعب بالخرج؟', answer: 'طرق ترابية = صدمات. تثبيت مقوّى+شاحنة مناسبة.' },
        { question: 'كم تكلفة نقل عفش بالخرج مقارنة بالرياض؟', answer: 'متقاربة داخل المدينة. مزرعة: أغلى 30% (طريق+مسافة).' },
        { question: 'هل SiO₂ يخدش الأثاث أثناء النقل بالخرج؟', answer: 'غبار رمل يخدش. تغليف محكم يحمي. بدونه = خدوش على كل سطح لامع.' },
        { question: 'هل رائحة NH₃ تنتقل مع العفش بالخرج؟', answer: 'لو من شقة قرب مزرعة = NH₃ في الأقمشة. AC بعد النقل يُزيل.' },
    ],
    expertTips: [
        'تغليف حراري عاكس — ΔT 48°م.',
        'تثبيت مقوّى — طرق ترابية.',
        'تغليف محكم — SiO₂ خدش.',
        'صباحاً بالصيف — حرارة أقل.',
        'AC بعد النقل — NH₃ رائحة.',
    ],
    warnings: [
        'خشب في شاحنة 50°م بدون تغليف حراري = تشقق — 3000+ إصلاح.',
        'طريق ترابي + عفش بدون تثبيت = صدمات — كسر.',
        'SiO₂ + سطح لامع بدون تغليف = خدوش دائمة.',
    ],
    trustAnchors: [
        { ...GOV.TGA, role: 'ترخيص النقل البري' },
        { ...GOV.BALADI, role: 'ترخيص النشاط' },
        { entity: AMANA.RIYADH.entity, url: AMANA.RIYADH.url, role: 'اشتراطات أمانة الرياض' },
    ],
    expertReviewer: EXPERTS.ALSHABNAN,
    expertCitations: [
        { expert: EXPERTS.ALZUWAYED.name, quote: 'نقل عفش الخرج: ΔT 48°م يُشقّق الخشب. تغليف حراري. طرق ترابية: تثبيت.', source: 'لوجستيات — نقل زراعي' },
    ],
    saudiRegulations: [REGULATIONS.TGA_LICENSE],
    verificationBadges: [{ badge: '✔️ نقل مرخص TGA', authority: 'هيئة النقل', icon: 'shield-check' }],
    equipment: [
        { name: 'تغليف حراري عاكس', use: 'يحمي خشب من ΔT 48°م' },
        { name: 'تثبيت مقوّى', use: 'طرق ترابية — صدمات' },
        { name: 'تغليف محكم', use: 'SiO₂ — خدش أسطح لامعة' },
    ],
    hiddenObjections: [
        { fear: 'مثل الرياض.', solution: 'ΔT+طرق ترابية+SiO₂ = مختلف.' },
        { fear: 'تغليف حراري مبالغة.', solution: '50°م في الصهريج = تشقق خشب.' },
    ],
    counterNarratives: [
        { myth: 'نقل عادي يكفي.', truth: 'ΔT+ترابي = تغليف حراري+تثبيت.' },
        { myth: 'أي وقت.', truth: 'صيف ظهراً = أخطر. صباحاً أفضل.' },
    ],
    relatedServices: [
        { slug: 'furniture-storage', context: 'تخزين', priority: 1 },
        { slug: 'dyna', context: 'دينا', priority: 2 },
        { slug: 'dabab', context: 'دباب', priority: 3 },
        { slug: 'cleaning', context: 'تنظيف بعد نقل', priority: 4 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 5 },
        { slug: 'carpet-cleaning', context: 'سجاد', priority: 6 },
        { slug: 'pest-control', context: 'حشرات', priority: 7 },
    ],
};
