import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'جلي رخام بالباحة — Laterite Fe₂O₃ Etching+ضباب Biofilm+عرعر — Oxalic+Anti-Biofilm! (2026)',
        description: 'جلي رخام الباحة. Laterite Fe₂O₃ Etching! ضباب Biofilm 200 يوم. عرعر لزج. Oxalic+Anti-Biofilm+جلي.',
        h1: 'جلي رخام بالباحة — Laterite+Biofilm+عرعر!',
        keywords: ['جلي رخام بالباحة', 'جلي بلاط الباحة', 'شركة جلي رخام بالباحة'],
    },
    content: {
        introduction: 'رخام الباحة = Laterite يحُفر+Biofilm ينمو! Laterite Fe₂O₃ Etching: طين بازلتي حمضي (أكسيد حديد) يحفر رخام CaCO₃ ← نقاط بنية. المبيّض يُثبّت = كارثة. Oxalic Acid يُذيب Fe₂O₃ بأمان. 200 يوم ضباب Biofilm: رخام خارجي = Biofilm (طبقة بكتيرية خضراء) أسرع نمو بالمملكة! 20-30% أسرع من خميس مشيط بسبب غابة. Anti-Biofilm+Sealant. عرعر لزج: حبوب لقاح تلتصق بالرخام = صفراء. Polish يُزيل. Dew Point 0-5°م شتاء: تكثّف على الرخام = ماء+عفن. Marine Sealant. مقارنة: بريدة = CaCO₃ Scale كلس+SiO₂ خدش = أبسط. الباحة = Laterite+Biofilm+عرعر = فريدة.',
        shortAnswer: 'على عكس [المبيّض+Descaler]، يعتمد بروتوكولنا في خدمة [جلي الرخام] بمدينة [الباحة] على [Oxalic ← Anti-Biofilm ← Sealant ← جلي]. ففي ظل [Laterite Etching+ضباب Biofilm+عرعر+Dew Point]، تتفاقم ظاهرة [حفر+بكتيريا+لزوجة+تكثّف]. لذا؛ يتدخل فريقنا عبر [Oxalic ← Anti-Biofilm ← Sealant ← جلي].',
        heroSubtitle: 'Laterite Etching + Biofilm 20-30% أسرع + عرعر — Oxalic!',
    },
    pricing: [
        { type: 'جلي رخام داخلي', unit: 'م²', minPrice: 20, maxPrice: 45, time: '1-2 يوم' },
        { type: '+ Anti-Biofilm خارجي', unit: 'م²', minPrice: 25, maxPrice: 55, time: '+ يوم' },
        { type: '+ Sealant', unit: 'م²', minPrice: 10, maxPrice: 25, time: '+ ساعات' },
        { type: 'ربع سنوي خارجي', unit: 'سنة', minPrice: 400, maxPrice: 800, time: '4 جلسات' },
    ],
    faq: [
        { question: 'ليش رخام الباحة يتحفر؟', answer: 'Laterite Fe₂O₃ حمض يحُفر CaCO₃. Oxalic يُذيب.' },
        { question: 'ليش Biofilm على رخام الباحة؟', answer: '200 يوم ضباب+غابة = 20-30% أسرع. Anti-Biofilm.' },
        { question: 'ليش المبيّض ممنوع للرخام بالباحة؟', answer: 'يُثبّت Fe₂O₃ = نقاط بنية دائمة. Oxalic فقط.' },
        { question: 'كم تكلفة رخام بالباحة مقابل بريدة؟', answer: 'أغلى 25-35% — Anti-Biofilm+Sealant. بريدة: Descaler.' },
        { question: 'ما Marine Sealant للرخام بالباحة؟', answer: 'Dew Point شتاء 0-5°م = تكثّف. Sealant يمنع عفن.' },
    ],
    expertTips: [
        'Oxalic — Laterite Fe₂O₃. لا مبيّض.',
        'Anti-Biofilm — 200 يوم ضباب+غابة.',
        'Sealant — Dew Point شتاء.',
        'خارجي ربع سنوي — Biofilm.',
        'Polish — عرعر لزج.',
    ],
    warnings: [
        'مبيّض + Laterite على رخام = نقاط بنية دائمة — Oxalic.',
        'رخام خارجي + ضباب بدون Anti-Biofilm = أخضر ← انزلاق YMYL.',
        'Dew Point + بدون Sealant = تكثّف ← إطار يعفّن.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص شركات الجلي' },
        { entity: AMANA.BAHA.entity, url: AMANA.BAHA.url, role: 'اشتراطات أمانة الباحة' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALMISNID.name, quote: 'رخام الباحة: Laterite Etching+Biofilm أسرع. Oxalic+Anti-Biofilm.', source: 'جغرافيا المناخ — رخام جبلي' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ جلي مرخص', authority: 'بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'Oxalic Acid', use: 'Laterite Fe₂O₃ — لا مبيّض' },
        { name: 'Anti-Biofilm', use: '200 يوم ضباب — 20-30% أسرع' },
        { name: 'Marine Sealant', use: 'Dew Point — شتاء' },
    ],
    hiddenObjections: [
        { fear: 'Descaler يكفي.', solution: 'لا Scale! Laterite. Oxalic.' },
        { fear: 'مثل بريدة.', solution: 'Laterite+Biofilm ≠ CaCO₃.' },
    ],
    counterNarratives: [
        { myth: 'مبيّض ينظّف.', truth: 'يُثبّت Laterite = أسوأ.' },
        { myth: 'سنوي.', truth: 'خارجي ربع سنوي. Biofilm.' },
    ],
    relatedServices: [
        { slug: 'cleaning', context: 'تنظيف', priority: 1 },
        { slug: 'glass-facades-cleaning', context: 'واجهات', priority: 2 },
        { slug: 'villas-cleaning', context: 'فلل', priority: 3 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 4 },
        { slug: 'pest-control', context: 'حشرات', priority: 5 },
        { slug: 'roof-insulation', context: 'أسطح', priority: 6 },
        { slug: 'water-insulation', context: 'مائي', priority: 7 },
    ],
};
