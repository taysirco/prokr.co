import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'جلي رخام بعنيزة — SiO₂ Pitting 7 Mohs + CaCO₃ 550ppm Etching + Sealer 2-3 سنة! (2026)',
        description: 'جلي رخام عنيزة. SiO₂ Pitting. CaCO₃ 550ppm Etching. لا عفن يهاجم Sealer! Sealer يدوم 2-3 سنة. Diamond Pad + Impregnator.',
        h1: 'جلي رخام بعنيزة — رمل يحفر وكلس يُذيب — Sealer 2-3 سنة!',
        keywords: ['جلي رخام عنيزة', 'جلي رخام بعنيزة', 'شركة جلي رخام عنيزة'],
    },
    content: {
        introduction: 'رخام عنيزة يُهاجم من محورين لكن يُحمى بميزة ذهبية. المحور 1 — SiO₂ Pitting: رمل النفود بصلابة 7 Mohs يحفر سطح الرخام (3-4 Mohs) = حُفر مجهرية (Pitting) تمنع اللمعان. أي ممسحة تحمل رمل = خدش. يجب شفط HEPA ← ثم جلي Diamond Pad. المحور 2 — CaCO₃ Etching: ماء 550ppm عند التبخر يترك ترسبات كلسية بيضاء على الرخام = Etching حمضي يأكل الطبقة العلوية. Descaler مخفف + Impregnator Sealant. الميزة الذهبية — Sealer يدوم 2-3 سنة! لأن: لا عفن (15-25% رطوبة = صفر Aspergillus يأكل Sealer). في خميس مشيط: Sealer سنة واحدة فقط لأن العفن يُهاجمه. هنا: ضعف العمر = نصف التكلفة السنوية!',
        shortAnswer: 'على عكس [الجلي بدون HEPA الذي يُعمّق Pitting]، يعتمد بروتوكولنا في خدمة [جلي الرخام] بمدينة [عنيزة] على [HEPA ← Diamond Pad ← Impregnator]. ففي ظل [SiO₂ 7 Mohs + CaCO₃ 550ppm + 15-25% رطوبة]، تتفاقم ظاهرة [Pitting + Etching]. لذا؛ يتدخل فنيونا عبر [شفط ← جلي تدريجي ← حماية] مع ميزة Sealer 2-3 سنة!',
        heroSubtitle: 'SiO₂ Pitting + CaCO₃ Etching — Sealer 2-3 سنة!',
    },
    pricing: [
        { type: 'جلي (< 50 م²)', unit: 'م²', minPrice: 20, maxPrice: 40, time: '1-2 يوم' },
        { type: 'جلي (50-100 م²)', unit: 'م²', minPrice: 15, maxPrice: 30, time: '2-3 أيام' },
        { type: 'تلميع + Impregnator', unit: 'م²', minPrice: 25, maxPrice: 50, time: '2-3 أيام' },
        { type: 'صيانة سنوية', unit: 'سنة', minPrice: 350, maxPrice: 700, time: '2 زيارة' },
    ],
    faq: [
        { question: 'كم يدوم Sealer الرخام بعنيزة؟', answer: '2-3 سنة! لأن: صفر عفن يُهاجم Sealer. في خميس مشيط: سنة واحدة. هنا: ضعف العمر = نصف التكلفة.' },
        { question: 'كيف أمنع Pitting على الرخام؟', answer: 'شفط HEPA يومي — SiO₂ 7 Mohs يحفر رخام 3-4 Mohs. بدون شفط = حُفر مجهرية تمنع اللمعان.' },
        { question: 'ليش الرخام يتبقّع أبيض بعنيزة؟', answer: 'CaCO₃ 550ppm — ماء يتبخر = ترسبات كلسية. Descaler مخفف ← ثم Impregnator يحمي.' },
        { question: 'هل الرخام يحتاج Anti-Fungal بعنيزة؟', answer: 'لا! 15-25% = صفر عفن. هذا يحمي Sealer ويطيل عمره. وفّر 100% من Anti-Fungal.' },
        { question: 'متى أعيد جلي الرخام بعنيزة؟', answer: 'كل 2-3 سنة (مع Sealer). بدون Sealer = كل سنة. الجلي + Impregnator = أوفر على المدى الطويل.' },
    ],
    expertTips: [
        'HEPA يومي — SiO₂ يحفر الرخام كل يوم.',
        'Diamond Pad تدريجي (50→100→200→400) — لا تبدأ بخشن.',
        'Impregnator Sealer — يحمي 2-3 سنة (لا عفن!).',
        'Descaler مخفف — CaCO₃ Etching. لا تستخدم حمض مركّز.',
        'ماء RO للشطف — ماء صنبور يترك بقع كلسية.',
    ],
    warnings: [
        'ممسحة + SiO₂ = Pitting تراكمي — يزداد سنوياً. شفط HEPA يومي إلزامي.',
        'حمض مركّز على الرخام = Etching شديد يُذيب الطبقة — Descaler مخفف فقط.',
        'بدون Impregnator = CaCO₃ يتشرب بالرخام — بقع دائمة تحت السطح.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص شركات الجلي' },
        { entity: AMANA.QASSIM.entity, url: AMANA.QASSIM.url, role: 'اشتراطات أمانة القصيم' },
    ],
    expertReviewer: EXPERTS.ALMOHAIMED,
    expertCitations: [
        { expert: EXPERTS.ALMOHAIMED.name, quote: 'رخام عنيزة: SiO₂ Pitting + CaCO₃ Etching. Sealer 2-3 سنة — لأن صفر عفن. أطول عمر بالمملكة.', source: 'نصائح هندسية — تشطيبات' },
    ],
    saudiRegulations: [REGULATIONS.SBC_601],
    verificationBadges: [{ badge: '✔️ جلي مرخص', authority: 'منصة بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'Diamond Pad 50-400', use: 'جلي تدريجي — يُعيد لمعان الرخام' },
        { name: 'Impregnator Sealer', use: 'حماية — يدوم 2-3 سنة (لا عفن يُهاجمه)' },
        { name: 'Descaler مخفف', use: 'إذابة CaCO₃ Etching بدون تلف' },
    ],
    hiddenObjections: [
        { fear: 'أغلى من خميس.', solution: 'أرخص سنوياً! Sealer 2-3 سنة مقابل سنة. نصف التكلفة.' },
        { fear: 'Pitting لا يُصلح.', solution: 'Diamond Pad يُعيد السطح. HEPA يومي يمنع التكرار.' },
    ],
    counterNarratives: [
        { myth: 'الرخام يحتاج Sealer كل سنة.', truth: 'بعنيزة: 2-3 سنة — صفر عفن يحمي Sealer.' },
        { myth: 'خل يُنظف الرخام.', truth: 'حمض + CaCO₃ = Etching مزدوج. يُدمّر الرخام.' },
    ],
    relatedServices: [
        { slug: 'cleaning', context: 'تنظيف منازل', priority: 1 },
        { slug: 'villas-cleaning', context: 'فلل — رخام', priority: 2 },
        { slug: 'glass-facades-cleaning', context: 'واجهات — SiO₂', priority: 3 },
        { slug: 'steam-cleaning', context: 'بخار', priority: 4 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 5 },
        { slug: 'apartments-cleaning', context: 'شقق', priority: 6 },
        { slug: 'office-cleaning', context: 'مكاتب', priority: 7 },
    ],
};
