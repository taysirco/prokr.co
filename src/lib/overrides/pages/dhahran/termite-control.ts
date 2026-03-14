import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'مكافحة النمل الأبيض بالظهران — Sabkha+رمل تسهّل + 75-85% رطوبة + NaCl يُضعف Barrier (2026)',
        description: 'مكافحة نمل أبيض الظهران. Sabkha+رمل تسهّل الحفر. 75-85% رطوبة دائمة. NaCl يُضعف Barrier. أرامكو مُجمّعات. Bait + Barrier مُعزز + مراقبة.',
        h1: 'مكافحة النمل الأبيض بالظهران — تربة مزدوجة تسهّل ورطوبة دائمة',
        keywords: ['مكافحة النمل الأبيض بالظهران', 'مكافحة نمل ابيض الظهران', 'شركة مكافحة نمل الظهران'],
    },
    content: {
        introduction: 'النمل الأبيض في الظهران يستفيد من تربة مزدوجة. الأول — Sabkha+رمل تسهّل: تربة الظهران = خليط Sabkha (ملحية رطبة) + رمل (SiO₂ ناعم) = ليّنة وسهلة الحفر. مستعمرات تصل المبنى أسرع. الثاني — 75-85% رطوبة: كافية لعش رطب دائماً. لا يحتاج مصادر ماء. يتوسع حيثما يريد. أبطأ قليلاً من الخبر (85-95%) لكن: كافٍ. الثالث — NaCl يُضعف Barrier: مثل الخبر — الحاجز الكيميائي يتحلل أسرع (3-4 سنوات بدلاً من 5). مراقبة أمتن. الرابع — أرامكو مُجمّعات: فلل أرامكو + حدائق واسعة = مساحة أكبر للمستعمرات.',
        shortAnswer: 'على عكس [رش سطحي] الذي لا يصل المستعمرة الجوفية، يعتمد بروتوكولنا في خدمة [مكافحة النمل الأبيض] بمدينة [الظهران] على [Bait + Barrier مُعزز + مراقبة ربع سنوية]. ففي ظل [Sabkha+رمل + 75-85% + NaCl]، تتفاقم ظاهرة [حفر + توسع + ضعف]. لذا؛ يتدخل خبراؤنا عبر [بروتوكول ظهراني مُتكامل].',
        heroSubtitle: 'Sabkha+رمل تسهّل + 75-85% رطوبة + NaCl Barrier + أرامكو',
    },
    pricing: [
        { type: 'فحص + تقييم', unit: 'زيارة', minPrice: 140, maxPrice: 290, time: '1-2 ساعة' },
        { type: 'Bait System', unit: 'منزل', minPrice: 780, maxPrice: 1950, time: 'تركيب + مراقبة' },
        { type: 'Barrier مُعزز', unit: 'فيلا', minPrice: 1450, maxPrice: 3900, time: '1-2 يوم' },
        { type: 'عقد سنوي (مراقبة ربع سنوية)', unit: 'سنة', minPrice: 580, maxPrice: 1450, time: '4 زيارات' },
    ],
    faq: [
        { question: 'Sabkha+رمل — أسهل حفر من الخبر؟', answer: 'مماثل — كلاهما Sabkha. لكن: الظهران = رمل SiO₂ إضافي = أخف. قد تكون أسهل في بعض المواقع.' },
        { question: '75-85% — أبطأ توسع؟', answer: 'قليلاً — لكن: 75-85% = كافٍ لعش رطب دائماً. لا فترة جفاف تُبطئ. يتوسع 10-11/12 شهر.' },
        { question: 'Barrier + NaCl — 3-4 سنوات؟', answer: 'مثل الخبر. NaCl يتحلل Barrier أسرع. Imidacloprid/Fipronil يقاوم أطول.' },
        { question: 'مُجمّعات أرامكو — خطر أعلى؟', answer: 'حدائق واسعة + تربة ليّنة = مساحة مثالية. فحص + Bait محيط الحديقة.' },
        { question: 'Bait vs Barrier?', answer: 'كلاهما. Bait = Cascading Kill (Trophallaxis) يقتل المستعمرة. Barrier = يحمي المبنى. معاً = الأمثل.' },
    ],
    expertTips: [
        'Bait + Barrier معاً — يقتل + يحمي.',
        'مراقبة ربع سنوية — Sabkha ليّنة = حفر سريع.',
        'Barrier مُعزز (Imidacloprid) — يقاوم NaCl أطول.',
        'فحص بعد أمطار — Sabkha+مطر = أسهل.',
        'أرامكو مُجمّعات — Bait محيط الحديقة.',
    ],
    warnings: [
        'Sabkha+رمل + 75-85% = مستعمرة تصل أسرع. بلا مراقبة: ضرر إنشائي.',
        'Barrier بدون مراقبة في NaCl = 3-4 سنوات فقط.',
        'رش سطحي ≠ مكافحة. المستعمرة تحت.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص مكافحة آفات' },
        { ...GOV.WEQAA, role: 'تسجيل مبيدات' },
        { entity: AMANA.SHARQIA.entity, url: AMANA.SHARQIA.url, role: 'صحة عامة بالشرقية' },
    ],
    expertReviewer: EXPERTS.ALJUND,
    expertCitations: [
        { expert: EXPERTS.ALKHODAIRY.name, quote: 'نمل أبيض الظهران = تربة مزدوجة: Sabkha+SiO₂ + 75-85% + NaCl Barrier. Bait + Barrier مُعزز + مراقبة = بروتوكول مزدوج.', source: 'أبحاث حشرات — نمل أبيض التربة المزدوجة' },
    ],
    saudiRegulations: [REGULATIONS.GHAD_SYSTEM],
    verificationBadges: [
        { badge: '✔️ مكافحة مرخصة', authority: 'بلدي + وقاء', icon: 'shield-check' },
        { badge: '✔️ مبيدات مُسجّلة', authority: 'نظام غاد', icon: 'badge-check' },
    ],
    equipment: [
        { name: 'Bait System (Trophallaxis)', use: 'Cascading Kill — المستعمرة' },
        { name: 'Barrier مُعزز (Imidacloprid)', use: 'يحمي المبنى — يقاوم NaCl' },
        { name: 'محطات مراقبة', use: 'ربع سنوي — يكشف نشاط' },
    ],
    commonConcerns: [
        { concern: 'ما عندي.', solution: 'Sabkha + 75-85% = متى — ليس إن. الوقاية = أرخص 10×.' },
        { concern: 'Bait بطيء.', solution: 'Cascading Kill = 2-4 أشهر. يقتل الملكة.' },
    ],
    consumerEducation: [
        { myth: 'مثل الرياض.', truth: 'Sabkha ≠ صخرية. 75-85% ≠ 15%. NaCl Barrier.' },
        { myth: 'رش.', truth: 'سطحي ≠ جوفي. لا يصل.' },
        { myth: 'مرة.', truth: 'مستعمرات جديدة مستمرة. مراقبة.' },
    ],
    relatedServices: [
        { slug: 'pest-control', context: 'حشرات — شاملة', priority: 1 },
        { slug: 'bedbugs-control', context: 'بق', priority: 2 },
        { slug: 'furniture-cleaning', context: 'أثاث — خشب', priority: 3 },
        { slug: 'villas-cleaning', context: 'فلل', priority: 4 },
        { slug: 'cleaning', context: 'تنظيف', priority: 5 },
        { slug: 'furniture-storage', context: 'تخزين', priority: 6 },
        { slug: 'steam-cleaning', context: 'بخار', priority: 7 },
    ],
};
