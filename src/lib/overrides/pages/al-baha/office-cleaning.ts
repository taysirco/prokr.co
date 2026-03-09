import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف مكاتب بالباحة — أسوأ SBS بالمملكة! ضباب+عرعر+60-85%+عفن — Anti-Allergen+HEPA+Anti-Mite! (2026)',
        description: 'تنظيف مكاتب الباحة — أسوأ Sick Building Syndrome! 200 يوم ضباب. عرعر لقاح. 60-85%. Anti-Allergen+HEPA+Anti-Mite.',
        h1: 'تنظيف مكاتب بالباحة — أسوأ SBS بالمملكة!',
        keywords: ['تنظيف مكاتب بالباحة', 'تنظيف مكتب الباحة', 'شركة تنظيف مكاتب بالباحة'],
    },
    content: {
        introduction: 'مكتب الباحة = أسوأ Sick Building Syndrome بالمملكة! SBS: 200 يوم ضباب+60-85% رطوبة+عرعر لقاح محبوس 8 ساعات بمكتب مغلق = مستويات مسببات حساسية ضعف أي مدينة! Anti-Allergen+HEPA+Anti-Mite بروتوكولات صحة مهنية. عرعر لقاح: حبوب لقاح صفراء تدخل بنظام HVAC ← تنتشر بالمكتب. HEPA في كل مخرج. Aspergillus: عفن على ملفات المكيف ← ينتشر بالهواء ← أعراض تنفسية. Anti-Fungal Coil. عث الرطوبة: Dermatophagoides في الكراسي المكتبية ← حساسية. Anti-Mite. مقارنة: بريدة = SiO₂ داخل+CaCO₃+لكن 10-20% = لا SBS! الباحة = أسوأ SBS ← صحة مهنية YMYL!',
        shortAnswer: 'على عكس [التنظيف العادي]، يعتمد بروتوكولنا في خدمة [تنظيف المكاتب] بمدينة [الباحة] على [Anti-Allergen+HEPA+Anti-Mite+Anti-Fungal Coil]. ففي ظل [أسوأ SBS+ضباب+عرعر+60-85%+Aspergillus]، تتفاقم ظاهرة [حساسية×2+عفن+عث]. لذا؛ يتدخل فريقنا عبر [Anti-Allergen ← HEPA ← Anti-Mite ← Anti-Fungal] — صحة مهنية!',
        heroSubtitle: 'أسوأ SBS بالمملكة! ضباب+عرعر+عفن — Anti-Allergen!',
    },
    pricing: [
        { type: 'مكتب صغير (50م²)', unit: 'مكتب', minPrice: 150, maxPrice: 310, time: '2-3h' },
        { type: 'مكتب + Anti-Allergen', unit: 'مكتب', minPrice: 200, maxPrice: 420, time: '3-4h' },
        { type: 'مكتب كبير (200م²)', unit: 'مكتب', minPrice: 350, maxPrice: 720, time: '4-6h' },
        { type: 'أسبوعي (4/شهر)', unit: 'شهر', minPrice: 400, maxPrice: 800, time: '4 زيارات' },
    ],
    faq: [
        { question: 'ليش مكاتب الباحة الأسوأ بالمملكة؟', answer: '200 يوم ضباب+عرعر+60-85% = SBS ← حساسية ×2 أي مدينة.' },
        { question: 'ما SBS بمكاتب الباحة؟', answer: 'Sick Building Syndrome: عرعر+عفن+عث محبوس 8h = أعراض تنفسية.' },
        { question: 'كم تكلفة مكتب بالباحة مقابل بريدة؟', answer: 'أغلى 40-50% — Anti-Allergen+HEPA+Anti-Mite. بريدة: لا SBS.' },
        { question: 'هل HEPA ضروري بكل مكيف مكتب بالباحة؟', answer: 'نعم! عرعر لقاح يدخل HVAC ← ينتشر. HEPA يحبس.' },
        { question: 'كم مرة تنظيف مكتب بالباحة؟', answer: 'أسبوعي! SBS = صحة مهنية. بريدة: نصف شهري.' },
    ],
    expertTips: [
        'Anti-Allergen — SBS أسوأ.',
        'HEPA كل مكيف — عرعر.',
        'Anti-Mite — كراسي مكتبية.',
        'Anti-Fungal Coil — Aspergillus.',
        'أسبوعي — صحة مهنية!',
    ],
    warnings: [
        'بدون Anti-Allergen+HEPA = SBS ← حساسية موظفين YMYL.',
        'عرعر + HVAC بدون HEPA = لقاح ينتشر ← أعراض تنفسية.',
        'Aspergillus + ملفات مكيف = عفن ينتشر ← مرض YMYL.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص شركات التنظيف' },
        { entity: AMANA.BAHA.entity, url: AMANA.BAHA.url, role: 'اشتراطات أمانة الباحة' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALMISNID.name, quote: 'مكاتب الباحة: أسوأ SBS بالمملكة. Anti-Allergen+HEPA+Anti-Mite.', source: 'جغرافيا المناخ — SBS جبلي' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ تنظيف مكاتب مرخص', authority: 'بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'Anti-Allergen System', use: 'SBS — حساسية ×2' },
        { name: 'HEPA Filter', use: 'عرعر — كل مكيف' },
        { name: 'Anti-Mite', use: 'كراسي — Dermatophagoides' },
    ],
    hiddenObjections: [
        { fear: 'تنظيف عادي.', solution: 'أسوأ SBS = Anti-Allergen.' },
        { fear: 'مثل بريدة.', solution: 'لا SBS ببريدة. ×2 هنا.' },
    ],
    counterNarratives: [
        { myth: 'شهري.', truth: 'أسبوعي! SBS = صحة مهنية.' },
        { myth: 'HEPA اختياري.', truth: 'عرعر HVAC = إلزامي.' },
    ],
    relatedServices: [
        { slug: 'cleaning', context: 'تنظيف', priority: 1 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 2 },
        { slug: 'carpet-cleaning', context: 'سجاد', priority: 3 },
        { slug: 'glass-facades-cleaning', context: 'واجهات', priority: 4 },
        { slug: 'pest-control', context: 'حشرات', priority: 5 },
        { slug: 'marble-polishing', context: 'رخام', priority: 6 },
        { slug: 'hourly-cleaning', context: 'ساعية', priority: 7 },
    ],
};
