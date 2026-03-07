import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف واجهات زجاجية بالباحة — ضباب Biofilm+Dew Point+Laterite+عرعر — Anti-Biofilm+Marine Sealant! (2026)',
        description: 'تنظيف واجهات الباحة. ضباب 200 يوم Biofilm أسرع! Dew Point 0-5°م. Laterite بقع. عرعر لزج. Anti-Biofilm+Sealant.',
        h1: 'تنظيف واجهات بالباحة — Biofilm+Dew Point+Laterite!',
        keywords: ['تنظيف واجهات زجاجية بالباحة', 'تنظيف واجهات الباحة', 'شركة تنظيف واجهات بالباحة'],
    },
    content: {
        introduction: 'واجهات الباحة = Biofilm الأسرع نمواً بالمملكة! ضباب Biofilm: 200 يوم ضباب+قرب الغابة = Biofilm (طبقة بكتيرية خضراء) تنمو على الزجاج 20-30% أسرع من أي مدينة! Algae+Biofilm. Anti-Biofilm ربع سنوي. Dew Point 0-5°م: شتاء = تكثّف على الزجاج ← ماء بين الزجاج والإطار ← عفن إطار خشب. Marine Sealant. Laterite Fe₂O₃: طين أحمر ينتشر بالمطر على الواجهات ← بقع بنية. Oxalic Acid. عرعر لزج: حبوب لقاح صفراء تلتصق بالزجاج الرطب. قشط+Microfiber. مقارنة: بريدة = SiO₂ خدش+CaCO₃ بقع+لا Biofilm = أبسط. الباحة = Biofilm+Dew Point+طين+عرعر = فريدة.',
        shortAnswer: 'على عكس [المسح العادي]، يعتمد بروتوكولنا في خدمة [تنظيف الواجهات] بمدينة [الباحة] على [Anti-Biofilm+Marine Sealant+Oxalic+قشط عرعر]. ففي ظل [Biofilm 20-30% أسرع+Dew Point+Laterite+عرعر]، تتفاقم ظاهرة [طبقة خضراء+عفن إطار+بقع+لزوجة]. لذا؛ يتدخل فريقنا عبر [Anti-Biofilm ← Marine Sealant ← Oxalic ← قشط].',
        heroSubtitle: 'Biofilm 20-30% أسرع + Dew Point عفن إطار — Anti-Biofilm!',
    },
    pricing: [
        { type: 'واجهة صغيرة', unit: 'م²', minPrice: 15, maxPrice: 35, time: '1-2 يوم' },
        { type: '+ Anti-Biofilm+Sealant', unit: 'م²', minPrice: 20, maxPrice: 45, time: '+ يوم' },
        { type: 'واجهة كبيرة إدارية', unit: 'م²', minPrice: 20, maxPrice: 45, time: '2-4 أيام' },
        { type: 'ربع سنوي', unit: 'سنة', minPrice: 400, maxPrice: 800, time: '4 تنظيف' },
    ],
    faq: [
        { question: 'ليش واجهات الباحة تخضر أسرع؟', answer: '200 يوم ضباب+غابة = Biofilm 20-30% أسرع. Anti-Biofilm ربع سنوي.' },
        { question: 'هل الشتاء مشكلة للواجهات بالباحة؟', answer: 'Dew Point 0-5°م = تكثّف = عفن إطار. Marine Sealant.' },
        { question: 'ما البقع البنية على الواجهات بالباحة؟', answer: 'Laterite Fe₂O₃ طين بالمطر. Oxalic يُزيل.' },
        { question: 'كم تكلفة واجهات بالباحة مقابل بريدة؟', answer: 'أغلى 30-40% — Anti-Biofilm+Sealant. بريدة: SiO₂+Descaler.' },
        { question: 'كم مرة تنظيف واجهات بالباحة؟', answer: 'ربع سنوي. بريدة: نصف سنوي.' },
    ],
    expertTips: [
        'Anti-Biofilm — 20-30% أسرع.',
        'Marine Sealant — Dew Point شتاء.',
        'Oxalic — Laterite بقع.',
        'قشط عرعر — لزج.',
        'ربع سنوي — ضباب مستمر.',
    ],
    warnings: [
        'Biofilm + واجهة × 3 أشهر = خضراء ← مظهر — Anti-Biofilm.',
        'Dew Point + إطار خشب بدون Sealant = عفن ← تلف بنيوي.',
        'مبيّض + Laterite = بقعة بنية ← Oxalic.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'اشتراطات واجهات' },
        { entity: AMANA.BAHA.entity, url: AMANA.BAHA.url, role: 'اشتراطات واجهات — أمانة الباحة' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALMISNID.name, quote: 'واجهات الباحة: Biofilm الأسرع بالمملكة. Anti-Biofilm+Sealant.', source: 'جغرافيا المناخ — واجهات جبلية' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ تنظيف واجهات مرخص', authority: 'بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'Anti-Biofilm', use: '20-30% أسرع — ضباب+غابة' },
        { name: 'Marine Sealant', use: 'Dew Point — إطار خشب' },
        { name: 'Oxalic Acid', use: 'Laterite — بقع بنية' },
    ],
    hiddenObjections: [
        { fear: 'مسح يكفي.', solution: 'Biofilm = Anti-Biofilm.' },
        { fear: 'مثل بريدة.', solution: 'Biofilm+Dew Point ≠ SiO₂.' },
    ],
    counterNarratives: [
        { myth: 'نصف سنوي.', truth: 'ربع سنوي. Biofilm.' },
        { myth: 'ماء يكفي.', truth: 'Anti-Biofilm+Oxalic+Sealant.' },
    ],
    relatedServices: [
        { slug: 'marble-polishing', context: 'رخام', priority: 1 },
        { slug: 'cleaning', context: 'تنظيف', priority: 2 },
        { slug: 'villas-cleaning', context: 'فلل', priority: 3 },
        { slug: 'bird-control', context: 'طيور', priority: 4 },
        { slug: 'roof-insulation', context: 'أسطح', priority: 5 },
        { slug: 'water-insulation', context: 'مائي', priority: 6 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 7 },
    ],
};
