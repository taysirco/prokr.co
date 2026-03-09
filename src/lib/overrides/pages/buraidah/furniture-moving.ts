import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'نقل عفش ببريدة — ΔT 45°م تشقق خشب+Nafud خدش+صمغ نخيل — تغليف حراري! (2026)',
        description: 'نقل عفش بريدة. ΔT 45°م يُشقّق خشب! Nafud SiO₂ يخدش. صمغ نخيل لزج. تغليف حراري+محكم+Microfiber.',
        h1: 'نقل عفش ببريدة — ΔT تشقق+Nafud خدش!',
        keywords: ['نقل عفش بريدة', 'نقل عفش ببريدة', 'شركة نقل عفش بريدة'],
    },
    content: {
        introduction: 'نقل عفش ببريدة يواجه حرارة ورمل ناعم! ΔT 45°م تشقق: نقل أثاث خشبي في شاحنة صيف 48°م = خشب يفقد رطوبته ← تشققات. تغليف حراري عاكس. Nafud SiO₂ خدش: رمل النفود الناعم 10-50 μm أخطر من العادي — يتسلل بين التغليف ← يخدش الأسطح اللامعة. تغليف محكم+Microfiber. صمغ نخيل: لو الأثاث قرب نخيل = صمغ لزج على الأسطح. تنظيف قبل النقل. CaCO₃ 600ppm: لا يأثر مباشرة على النقل. 10-20% = لا رطوبة = لا عفن أثناء النقل! ميزة. مقارنة: خميس = رطوبة+منحدرات+عفن. الخرج = NH₃. بريدة = حرارة+Nafud+نخيل = فريد.',
        shortAnswer: 'على عكس [النقل بدون تغليف حراري ومحكم]، يعتمد بروتوكولنا في خدمة [نقل العفش] بمدينة [بريدة] على [تغليف حراري+محكم+Microfiber+تنظيف نخيل]. ففي ظل [ΔT 45°م+Nafud خدش+صمغ نخيل+10-20%]، تتفاقم ظاهرة [تشقق+خدش ناعم+لزج]. لذا؛ يتدخل فريقنا عبر [تنظيف ← تغليف ← نقل ← فحص] — لا عفن!',
        heroSubtitle: 'ΔT تشقق + Nafud خدش ناعم + صمغ نخيل — تغليف حراري!',
    },
    pricing: [
        { type: 'شقة → شقة (داخل)', unit: 'نقلة', minPrice: 400, maxPrice: 800, time: '3-5 ساعات' },
        { type: 'فيلا → فيلا', unit: 'نقلة', minPrice: 800, maxPrice: 1600, time: '5-8 ساعات' },
        { type: '+ تغليف حراري', unit: 'إضافي', minPrice: 150, maxPrice: 300, time: '1-2 ساعة' },
        { type: 'بريدة ← عنيزة', unit: 'نقلة', minPrice: 500, maxPrice: 1000, time: '4-6 ساعات' },
    ],
    faq: [
        { question: 'كيف أحمي الأثاث من حرارة بريدة أثناء النقل؟', answer: 'تغليف حراري عاكس. بدونه = ΔT 45°م = تشقق في شاحنة حارة.' },
        { question: 'هل Nafud يخدش الأثاث أثناء النقل ببريدة؟', answer: 'Nafud ناعم 10-50 μm يتسلل. تغليف محكم+Microfiber. لا قطن.' },
        { question: 'كم تكلفة نقل عفش ببريدة مقارنة بخميس؟', answer: 'أرخص 15-20% — لا منحدرات لا رطوبة. لا عفن أثناء النقل.' },
        { question: 'هل صمغ النخيل يأثر على النقل ببريدة؟', answer: 'صمغ لزج يعلق على الأسطح. تنظيف قبل النقل. بعد = خدش.' },
        { question: 'هل العفش يتعفّن أثناء النقل ببريدة؟', answer: 'لا! 10-20% = جاف. ميزة كبيرة. خميس: عفن في الشاحنة.' },
    ],
    expertTips: [
        'تغليف حراري عاكس — ΔT 45°م.',
        'تغليف محكم — Nafud ناعم يتسلل.',
        'تنظيف صمغ نخيل أولاً — قبل التغليف.',
        'صباحاً بالصيف — حرارة أقل.',
        'لا عفن — ميزة جفاف 10-20%.',
    ],
    warnings: [
        'خشب في شاحنة 48°م بدون تغليف = تشقق — 3000+ إصلاح.',
        'Nafud ناعم + تغليف غير محكم = خدش أسطح لامعة.',
        'صمغ نخيل + نقل بدون تنظيف = لزج ينتشر.',
    ],
    trustAnchors: [
        { ...GOV.TGA, role: 'ترخيص النقل البري' },
        { ...GOV.BALADI, role: 'ترخيص النشاط' },
        { entity: AMANA.QASSIM.entity, url: AMANA.QASSIM.url, role: 'اشتراطات أمانة القصيم' },
    ],
    expertReviewer: EXPERTS.ALSHABNAN,
    expertCitations: [
        { expert: EXPERTS.ALZUWAYED.name, quote: 'نقل عفش بريدة: ΔT+Nafud+نخيل. تغليف حراري+محكم. لا عفن.', source: 'لوجستيات — القصيم' },
    ],
    saudiRegulations: [REGULATIONS.TGA_LICENSE],
    verificationBadges: [{ badge: '✔️ نقل مرخص TGA', authority: 'هيئة النقل', icon: 'shield-check' }],
    equipment: [
        { name: 'تغليف حراري عاكس', use: 'يحمي خشب من ΔT 45°م' },
        { name: 'تغليف محكم', use: 'Nafud ناعم — يتسلل' },
        { name: 'Microfiber', use: 'Nafud — لا خدش' },
    ],
    hiddenObjections: [
        { fear: 'تغليف عادي يكفي.', solution: 'Nafud 10 μm يتسلل. محكم.' },
        { fear: 'مثل الرياض.', solution: 'ΔT+Nafud+نخيل = فريد.' },
    ],
    counterNarratives: [
        { myth: 'نقل عادي.', truth: 'ΔT+Nafud = حراري+محكم.' },
        { myth: 'أي وقت.', truth: 'صباحاً صيفاً = أفضل.' },
    ],
    relatedServices: [
        { slug: 'furniture-storage', context: 'تخزين', priority: 1 },
        { slug: 'dyna', context: 'دينا', priority: 2 },
        { slug: 'dabab', context: 'دباب', priority: 3 },
        { slug: 'cleaning', context: 'تنظيف', priority: 4 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 5 },
        { slug: 'carpet-cleaning', context: 'سجاد', priority: 6 },
        { slug: 'pest-control', context: 'حشرات', priority: 7 },
    ],
};
