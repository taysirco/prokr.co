import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف أفران بالباحة — رطوبة Bio-Creosote+ضباب+عرعر رطوبة مطبخ — NFPA 96! (2026)',
        description: 'تنظيف أفران الباحة. رطوبة Bio-Creosote! ضباب 200 يوم مطبخ رطب. 60-85%. NFPA 96+Anti-Fungal+Dehumidifier.',
        h1: 'تنظيف أفران بالباحة — Bio-Creosote+ضباب!',
        keywords: ['تنظيف أفران بالباحة', 'تنظيف فرن الباحة', 'شركة تنظيف أفران بالباحة'],
    },
    content: {
        introduction: 'فرن الباحة = Bio-Creosote! رطوبة Bio-Creosote: 200 يوم ضباب = 60-85% داخل المطبخ ← كربنة رطبة (Wet Carbonization) = Bio-Creosote — دهن لزج حمضي نقطة اشتعال أقل من الدهن الجاف! NFPA 96. خطر حريق أعلى. ضباب مطبخ: رطوبة تدخل المطبخ ← تُبطئ تبخر الشحوم ← تتراكم أكثر. تنظيف أكثر تكراراً. عرعر رطوبة: حبوب لقاح تدخل المطبخ = عضويات ← عفن على الشحوم = طبقة بيولوجية. Anti-Fungal. Dehumidifier: مطبخ الباحة يحتاج Dehumidifier أثناء الطبخ! مقارنة: بريدة = جاف+كربنة جافة عادية = Flash Point أعلى = أقل خطر.',
        shortAnswer: 'على عكس [التنظيف ربع السنوي]، يعتمد بروتوكولنا في خدمة [تنظيف الأفران] بمدينة [الباحة] على [NFPA 96+Anti-Fungal+Dehumidifier+تنظيف شهري]. ففي ظل [Bio-Creosote+ضباب+عرعر+60-85%]، تتفاقم ظاهرة [نقطة اشتعال أقل+تراكم أكثر+عفن]. لذا؛ يتدخل فنيونا عبر [NFPA 96 ← Anti-Fungal ← Dehumidifier ← شهري].',
        heroSubtitle: 'Bio-Creosote خطر أعلى + ضباب تراكم — NFPA 96 شهري!',
    },
    pricing: [
        { type: 'فرن منزلي', unit: 'فرن', minPrice: 80, maxPrice: 170, time: '1-2h' },
        { type: 'فرن + Hood', unit: 'فرن', minPrice: 120, maxPrice: 250, time: '2-3h' },
        { type: 'فرن تجاري NFPA', unit: 'فرن', minPrice: 200, maxPrice: 420, time: '3-4h' },
        { type: 'شهري (12/سنة)', unit: 'سنة', minPrice: 700, maxPrice: 1400, time: '12 تنظيف' },
    ],
    faq: [
        { question: 'ما Bio-Creosote بفرن الباحة؟', answer: 'كربنة رطبة = دهن لزج حمضي. نقطة اشتعال أقل = خطر أعلى!' },
        { question: 'ليش فرن الباحة أخطر من بريدة؟', answer: '60-85% = Bio-Creosote vs كربنة جافة. Flash Point أقل.' },
        { question: 'كم مرة تنظيف فرن بالباحة؟', answer: 'شهري تجاري! ربع سنوي منزلي. بريدة: ربع سنوي.' },
        { question: 'كم تكلفة فرن بالباحة مقابل بريدة؟', answer: 'أغلى 20-30% — Bio-Creosote أعقد.' },
        { question: 'هل Dehumidifier مهم بمطبخ الباحة؟', answer: '60-85% = شحوم لا تتبخر = تتراكم أكثر. Dehumidifier.' },
    ],
    expertTips: [
        'NFPA 96 — Bio-Creosote خطر.',
        'Anti-Fungal — عفن شحوم.',
        'Dehumidifier مطبخ — 60-85%.',
        'شهري تجاري — تراكم.',
        'لا تُهمل Hood — كربنة رطبة.',
    ],
    warnings: [
        'Bio-Creosote + بدون NFPA = حريق Flash Point أقل — YMYL.',
        'ضباب + شحوم × 3 أشهر = تراكم خطير ← حريق.',
        'عرعر + شحوم = عفن بيولوجي ← صحة طعام YMYL.',
    ],
    trustAnchors: [
        { ...GOV.CIVILDEFENSE, role: 'اشتراطات السلامة — NFPA 96' },
        { ...GOV.BALADI, role: 'ترخيص مطاعم' },
        { entity: AMANA.BAHA.entity, url: AMANA.BAHA.url, role: 'اشتراطات أمانة الباحة' },
    ],
    expertReviewer: EXPERTS.ALMOHAIMED,
    expertCitations: [
        { expert: EXPERTS.ALMOHAIMED.name, quote: 'فرن الباحة: Bio-Creosote. Flash Point أقل. NFPA 96 شهري.', source: 'نصائح هندسية — أفران جبلية' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ تنظيف NFPA 96', authority: 'الدفاع المدني', icon: 'shield-check' }],
    equipment: [
        { name: 'NFPA 96 Tools', use: 'Bio-Creosote — كربنة رطبة' },
        { name: 'Anti-Fungal', use: 'عفن شحوم — بيولوجي' },
        { name: 'Dehumidifier', use: '60-85% — مطبخ' },
    ],
    hiddenObjections: [
        { fear: 'ربع سنوي.', solution: 'Bio-Creosote = شهري.' },
        { fear: 'مثل بريدة.', solution: 'كربنة رطبة ≠ جافة.' },
    ],
    consumerEducation: [
        { myth: 'دهن عادي.', truth: 'Bio-Creosote = حمضي لزج.' },
        { myth: 'ربع سنوي.', truth: 'شهري تجاري. ضباب.' },
    ],
    relatedServices: [
        { slug: 'restaurant-chimney-cleaning', context: 'مداخن', priority: 1 },
        { slug: 'cleaning', context: 'تنظيف', priority: 2 },
        { slug: 'pest-control', context: 'حشرات', priority: 3 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 4 },
        { slug: 'marble-polishing', context: 'رخام', priority: 5 },
        { slug: 'glass-facades-cleaning', context: 'واجهات', priority: 6 },
        { slug: 'apartments-cleaning', context: 'شقق', priority: 7 },
    ],
};
