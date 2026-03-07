import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف أفران ببريدة — CaCO₃ 600ppm كلس داخلي+Nafud SiO₂+ΔT — Descaler فرن! (2026)',
        description: 'تنظيف أفران بريدة. CaCO₃ 600ppm كلس داخل الفرن! Nafud SiO₂ يتسلل. ΔT 45°م. Descaler+Degreaser+HEPA.',
        h1: 'تنظيف أفران ببريدة — أعلى كلس داخل الفرن!',
        keywords: ['تنظيف أفران بريدة', 'تنظيف فرن ببريدة', 'شركة تنظيف أفران بريدة'],
    },
    content: {
        introduction: 'فرن بريدة = كلس داخلي فريد! CaCO₃ 600ppm كلس داخلي: ماء الطبخ والبخار يحمل أعلى كلس بالمملكة ← يترسب داخل الفرن = طبقة كلس+دهن مزدوجة صلبة جداً. Descaler أولاً ← ثم Degreaser. بدون Descaler = Degreaser وحده لا يخترق الكلس. Nafud SiO₂: رمل النفود الناعم يتسلل للمطبخ ← يتراكم في زوايا الفرن ← يحترق = رائحة. تنظيف زوايا HEPA. ΔT 45°م: صيف = فرن أساساً حار + بيئة 48°م = دهون تتحلل أسرع = رائحة أقوى. تنظيف أسبوعي صيفاً. 10-20% = لا عفن داخل الفرن! مقارنة: خميس = رطوبة+عفن داخل الفرن. بريدة = كلس+Nafud = مختلف.',
        shortAnswer: 'على عكس [Degreaser بدون Descaler الذي لا يخترق كلس]، يعتمد بروتوكولنا في خدمة [تنظيف الأفران] بمدينة [بريدة] على [Descaler أولاً+Degreaser ثانياً+HEPA زوايا]. ففي ظل [CaCO₃ 600ppm كلس+Nafud يتسلل+ΔT 45°م+لا عفن]، تتفاقم ظاهرة [كلس+دهن مزدوج+رائحة]. لذا؛ يتدخل فريقنا عبر [Descaler ← Degreaser ← HEPA ← شطف] — لا عفن!',
        heroSubtitle: 'CaCO₃ 600ppm كلس+دهن مزدوج — Descaler أولاً! لا عفن!',
    },
    pricing: [
        { type: 'فرن عادي', unit: 'فرن', minPrice: 60, maxPrice: 120, time: '1-2h' },
        { type: 'فرن + Descaler عميق', unit: 'فرن', minPrice: 80, maxPrice: 170, time: '2-3h' },
        { type: 'فرن تجاري', unit: 'فرن', minPrice: 150, maxPrice: 310, time: '3-5h' },
        { type: 'ربع سنوي (4 جلسات)', unit: 'سنة', minPrice: 200, maxPrice: 420, time: '4 زيارات' },
    ],
    faq: [
        { question: 'ليش فرن بريدة أصعب تنظيف من الرياض؟', answer: 'CaCO₃ 600ppm = كلس+دهن طبقة مزدوجة. Descaler أولاً. الرياض: 300ppm = دهن فقط.' },
        { question: 'ليش Degreaser وحده لا يكفي ببريدة؟', answer: '600ppm كلس يغطي الدهن. Degreaser لا يخترق كلس. Descaler أولاً ← ثم Degreaser.' },
        { question: 'كم تكلفة تنظيف فرن ببريدة مقارنة بخميس؟', answer: 'أغلى 10-15% — Descaler إضافي. لكن: لا عفن = أبسط عموماً.' },
        { question: 'هل Nafud يأثر على الفرن ببريدة؟', answer: 'يتراكم في زوايا ← يحترق = رائحة. HEPA زوايا.' },
        { question: 'هل الفرن يتعفّن ببريدة؟', answer: 'لا! 10-20% = لا عفن. خميس: عفن+رائحة عفن.' },
    ],
    expertTips: [
        'Descaler أولاً — كلس يغطي دهن.',
        'Degreaser ثانياً — بعد إذابة كلس.',
        'HEPA زوايا — Nafud يحترق.',
        'أسبوعي صيفاً — ΔT رائحة أقوى.',
        'لا عفن! — ميزة 10-20%.',
    ],
    warnings: [
        'CaCO₃ 600ppm × شهر = كلس+دهن صلب — يحتاج حمض.',
        'Degreaser بدون Descaler = لا يخترق — يبقى كلس تحت.',
        'Nafud في زوايا + حرارة = رائحة حرق — HEPA.',
    ],
    trustAnchors: [
        { ...GOV.CIVILDEFENSE, role: 'سلامة الأفران والمداخن' },
        { ...GOV.BALADI, role: 'ترخيص شركات التنظيف' },
        { entity: AMANA.QASSIM.entity, url: AMANA.QASSIM.url, role: 'اشتراطات أمانة القصيم' },
    ],
    expertReviewer: EXPERTS.ALMOHAIMED,
    expertCitations: [
        { expert: EXPERTS.ALMOHAIMED.name, quote: 'فرن بريدة: 600ppm كلس+دهن مزدوج. Descaler أولاً ← Degreaser.', source: 'نصائح هندسية — أفران القصيم' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ تنظيف أفران مرخص', authority: 'بلدي + 998', icon: 'shield-check' }],
    equipment: [
        { name: 'Descaler صناعي', use: 'CaCO₃ 600ppm — يذيب كلس أولاً' },
        { name: 'Degreaser صناعي', use: 'دهن — بعد Descaler' },
        { name: 'HEPA زوايا', use: 'Nafud محترق — رائحة' },
    ],
    hiddenObjections: [
        { fear: 'Degreaser يكفي.', solution: '600ppm كلس يغطي. Descaler أولاً.' },
        { fear: 'مثل خميس.', solution: 'لا عفن. لكن: كلس+دهن مزدوج.' },
    ],
    counterNarratives: [
        { myth: 'Degreaser فقط.', truth: '600ppm = Descaler أولاً.' },
        { myth: 'شهري يكفي.', truth: 'صيف ΔT = أسبوعي.' },
    ],
    relatedServices: [
        { slug: 'restaurant-chimney-cleaning', context: 'مداخن', priority: 1 },
        { slug: 'cleaning', context: 'تنظيف', priority: 2 },
        { slug: 'steam-cleaning', context: 'بخار', priority: 3 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 4 },
        { slug: 'pest-control', context: 'حشرات', priority: 5 },
        { slug: 'marble-polishing', context: 'رخام', priority: 6 },
        { slug: 'apartments-cleaning', context: 'شقق', priority: 7 },
    ],
};
