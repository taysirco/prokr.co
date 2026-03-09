import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف سيارات بالخرج — غبار مزارع+NH₃ رائحة+SiO₂ خدش+CaCO₃ بقع — RO+AC! (2026)',
        description: 'تنظيف سيارات الخرج. غبار مزارع ألبان/دواجن+NH₃ رائحة كبينة+SiO₂ خدش+CaCO₃ بقع. RO+Activated Carbon+Microfiber.',
        h1: 'تنظيف سيارات بالخرج — غبار مزارع ورائحة NH₃',
        keywords: ['تنظيف سيارات الخرج', 'غسيل سيارات بالخرج', 'شركة تنظيف سيارات الخرج'],
    },
    content: {
        introduction: 'سيارة الخرج تتسخ بطريقة زراعية فريدة! أولاً — غبار مزارع: الخرج محاطة بمزارع ألبان/دواجن كبرى = غبار عضوي (سماد+تبن+أعلاف) يلتصق بالسيارة أكثر من الغبار الصحراوي العادي. ماء عادي لا يكفي — فرشاة ناعمة+شامبو pH محايد. ثانياً — NH₃ رائحة كبينة: أمونيا من المزارع تدخل الكبينة أثناء القيادة ← تتراكم في المقاعد والسقف. المعطر يُخفي — Activated Carbon يمتص. ثالثاً — SiO₂ صحراوي: رمل يخدش الطلاء لو غُسل بدون شطف أولي. Pre-Rinse ← Microfiber ← Two-Bucket Method. رابعاً — CaCO₃ 450ppm: لو غُسلت بماء الصنبور = بقع بيضاء. RO Rinse أخير. تجفيف: 15-25% = سريع — ميزة! مقارنة: الرياض = لا NH₃ لا غبار مزارع. خميس = عفن بالكبينة! الخرج = زراعي فقط.',
        shortAnswer: 'على عكس [الغسل بماء صنبور يترك بقع CaCO₃]، يعتمد بروتوكولنا في خدمة [تنظيف السيارات] بمدينة [الخرج] على [Pre-Rinse+Microfiber+AC+RO]. ففي ظل [غبار مزارع+NH₃ رائحة+SiO₂ خدش+CaCO₃ بقع]، تتفاقم ظاهرة [التصاق+رائحة+خدش+بقع]. لذا؛ يتدخل فريقنا عبر [شطف ← غسل ← امتصاص ← شطف RO].',
        heroSubtitle: 'غبار مزارع + NH₃ رائحة + SiO₂ خدش + CaCO₃ بقع — RO!',
    },
    pricing: [
        { type: 'غسل خارجي + RO', unit: 'سيارة', minPrice: 35, maxPrice: 70, time: '30-45 دقيقة' },
        { type: 'شامل (خارج+داخل+AC)', unit: 'سيارة', minPrice: 70, maxPrice: 150, time: '1-2 ساعة' },
        { type: 'تفصيلي (Detailing)', unit: 'سيارة', minPrice: 200, maxPrice: 420, time: '4-6 ساعات' },
        { type: 'أسبوعي (4 غسلات/شهر)', unit: 'شهر', minPrice: 110, maxPrice: 220, time: '4 زيارات' },
    ],
    faq: [
        { question: 'ليش سيارة الخرج تتسخ أسرع من الرياض؟', answer: 'غبار مزارع عضوي (سماد+تبن) يلتصق أكثر من غبار صحراوي. + NH₃ يدخل الكبينة.' },
        { question: 'كيف أزيل رائحة NH₃ من كبينة السيارة؟', answer: 'Activated Carbon Filter يمتص الجزيئات. المعطر يُخفي مؤقتاً — AC يُزيل.' },
        { question: 'ليش بقع بيضاء بعد الغسل بالخرج؟', answer: 'CaCO₃ 450ppm في ماء الصنبور. RO Rinse أخير = لا بقع. ماء صنبور = بقع.' },
        { question: 'كم تكلفة غسل سيارة بالخرج مقارنة بالرياض؟', answer: 'متقارب — 35-150. لكن Pre-Rinse+RO يُفضّل = أفضل نتيجة بنفس السعر.' },
        { question: 'هل SiO₂ يخدش طلاء السيارة؟', answer: 'لو غسلت بدون شطف أولي = SiO₂ يخدش. Pre-Rinse ← Microfiber ← Two-Bucket.' },
    ],
    expertTips: [
        'Pre-Rinse أولاً — SiO₂ يخدش بدونه.',
        'RO Rinse أخير — CaCO₃ بقع بيضاء.',
        'Activated Carbon كبينة — NH₃ مزارع.',
        'Two-Bucket Method — غبار عضوي لزج.',
        'أسبوعي — غبار مزارع يومي.',
    ],
    warnings: [
        'غسل بدون Pre-Rinse = SiO₂ يخدش الطلاء — Swirl Marks.',
        'ماء صنبور بدون RO = CaCO₃ بقع بيضاء على سيارة سوداء.',
        'NH₃ + معطر = مؤقت — الرائحة تعود خلال يومين.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص مغاسل السيارات' },
        { entity: AMANA.RIYADH.entity, url: AMANA.RIYADH.url, role: 'اشتراطات أمانة الرياض' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALMISNID.name, quote: 'سيارة الخرج: غبار مزارع عضوي لزج + NH₃ كبينة. Pre-Rinse+RO+AC.', source: 'جغرافيا المناخ — زراعي' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ مغسلة مرخصة', authority: 'بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'Pre-Rinse ضغط', use: 'يُزيل SiO₂ قبل اللمس' },
        { name: 'Activated Carbon Filter', use: 'يمتص NH₃ من الكبينة' },
        { name: 'RO Water', use: 'شطف أخير بدون CaCO₃' },
    ],
    hiddenObjections: [
        { fear: 'مثل الرياض.', solution: 'غبار مزارع+NH₃. الرياض: غبار عادي فقط.' },
        { fear: 'RO مبالغة.', solution: 'CaCO₃ 450ppm = بقع على سيارة سوداء. RO يمنع.' },
    ],
    counterNarratives: [
        { myth: 'ماء صنبور يكفي.', truth: 'CaCO₃ 450ppm = بقع. RO.' },
        { myth: 'شهري يكفي.', truth: 'غبار مزارع يومي. أسبوعي.' },
    ],
    relatedServices: [
        { slug: 'cleaning', context: 'تنظيف', priority: 1 },
        { slug: 'dabab', context: 'دباب', priority: 2 },
        { slug: 'dyna', context: 'دينا', priority: 3 },
        { slug: 'furniture-moving', context: 'نقل عفش', priority: 4 },
        { slug: 'carpet-cleaning', context: 'سجاد', priority: 5 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 6 },
        { slug: 'pest-control', context: 'حشرات', priority: 7 },
    ],
};
