import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف مداخن مطاعم بالباحة — Bio-Creosote Flash Point أقل+ضباب+NFPA 96 — ربع سنوي! (2026)',
        description: 'تنظيف مداخن الباحة. Bio-Creosote! Flash Point أقل! ضباب 200 يوم. NFPA 96 ربع سنوي. Anti-Fungal+Dehumidifier.',
        h1: 'تنظيف مداخن بالباحة — Bio-Creosote خطر!',
        keywords: ['تنظيف مداخن مطاعم بالباحة', 'تنظيف شفاطات الباحة', 'شركة تنظيف مداخن بالباحة'],
    },
    content: {
        introduction: 'مدخنة الباحة = Bio-Creosote الأخطر! Bio-Creosote: 200 يوم ضباب+60-85% = كربنة رطبة داخل المدخنة ← Bio-Creosote — خليط دهن+أحماض+كربون لزج أكيد. Flash Point أقل بكثير من الدهن الجاف! حريق أخطر. NFPA 96: ربع سنوي بدل نصف سنوي (بريدة). ضباب مدخنة: رطوبة تدخل المدخنة من الخارج ← تتفاعل مع الشحوم ← تتسارع Bio-Creosote. Anti-Fungal: عفن بيولوجي يتكوّن على Bio-Creosote ← خطر صحي. مقارنة: بريدة = جاف 10-20% = كربنة جافة عادية = Flash Point أعلى = نصف سنوي. الباحة = Bio-Creosote = ربع سنوي إلزامي!',
        shortAnswer: 'على عكس [التنظيف نصف السنوي]، يعتمد بروتوكولنا في خدمة [تنظيف المداخن] بمدينة [الباحة] على [NFPA 96 ربع سنوي+Anti-Fungal+Dehumidifier]. ففي ظل [Bio-Creosote Flash Point أقل+ضباب+60-85%]، تتفاقم ظاهرة [لزوجة+حرائق+عفن]. لذا؛ يتدخل فنيونا عبر [NFPA 96 ← Anti-Fungal ← Dehumidifier ← ربع سنوي].',
        heroSubtitle: 'Bio-Creosote Flash Point أقل — NFPA 96 ربع سنوي!',
    },
    pricing: [
        { type: 'مدخنة صغيرة', unit: 'مدخنة', minPrice: 200, maxPrice: 420, time: '2-4h' },
        { type: 'مدخنة + Hood+Fan', unit: 'نظام', minPrice: 350, maxPrice: 720, time: '4-6h' },
        { type: 'مطعم كبير NFPA', unit: 'نظام', minPrice: 500, maxPrice: 1000, time: '6-8h' },
        { type: 'ربع سنوي (4/سنة)', unit: 'سنة', minPrice: 1200, maxPrice: 2400, time: '4 تنظيف' },
    ],
    faq: [
        { question: 'ما Bio-Creosote بمداخن الباحة؟', answer: 'كربنة رطبة = دهن+أحماض لزج. Flash Point أقل = حريق أخطر!' },
        { question: 'ليش ربع سنوي وبريدة نصف سنوي؟', answer: 'Bio-Creosote = أخطر+يتراكم أسرع. Flash Point أقل.' },
        { question: 'كم تكلفة مداخن بالباحة مقابل بريدة؟', answer: 'أغلى 30-40% — Bio-Creosote أعقد. ربع سنوي vs نصف.' },
        { question: 'هل الضباب يدخل المدخنة بالباحة؟', answer: 'رطوبة من الخارج ← تتفاعل = Bio-Creosote أسرع.' },
        { question: 'هل Bio-Creosote يسبب عفن؟', answer: 'نعم! عفن بيولوجي على الدهن. Anti-Fungal.' },
    ],
    expertTips: [
        'NFPA 96 ربع سنوي — Bio-Creosote.',
        'Anti-Fungal — عفن على دهن.',
        'Dehumidifier مطبخ — 60-85%.',
        'Hood+Fan — ليس مدخنة فقط.',
        'تفتيش NFPA — دفاع مدني.',
    ],
    warnings: [
        'Bio-Creosote + بدون NFPA ربع سنوي = حريق Flash Point أقل — YMYL.',
        'ضباب + مدخنة × 6 أشهر = Bio-Creosote خطير.',
        'عفن + Bio-Creosote = مواد سامة ← YMYL.',
    ],
    trustAnchors: [
        { ...GOV.CIVILDEFENSE, role: 'NFPA 96 — مداخن مطاعم' },
        { ...GOV.BALADI, role: 'ترخيص مطاعم' },
        { entity: AMANA.BAHA.entity, url: AMANA.BAHA.url, role: 'اشتراطات أمانة الباحة' },
    ],
    expertReviewer: EXPERTS.ALMOHAIMED,
    expertCitations: [
        { expert: EXPERTS.ALMOHAIMED.name, quote: 'مداخن الباحة: Bio-Creosote. Flash Point أقل. NFPA 96 ربع سنوي.', source: 'نصائح هندسية — مداخن جبلية' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ تنظيف NFPA 96', authority: 'الدفاع المدني', icon: 'shield-check' }],
    equipment: [
        { name: 'NFPA 96 Tools', use: 'Bio-Creosote — لزج حمضي' },
        { name: 'Anti-Fungal', use: 'عفن بيولوجي — خطر' },
        { name: 'Dehumidifier', use: '60-85% — مطبخ' },
    ],
    hiddenObjections: [
        { fear: 'نصف سنوي.', solution: 'Bio-Creosote = ربع سنوي.' },
        { fear: 'مثل بريدة.', solution: 'كربنة رطبة ≠ جافة.' },
    ],
    consumerEducation: [
        { myth: 'نصف سنوي.', truth: 'ربع سنوي. Bio-Creosote.' },
        { myth: 'دهن عادي.', truth: 'Bio = حمضي لزج.' },
    ],
    relatedServices: [
        { slug: 'oven-cleaning', context: 'أفران', priority: 1 },
        { slug: 'cleaning', context: 'تنظيف', priority: 2 },
        { slug: 'pest-control', context: 'حشرات', priority: 3 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 4 },
        { slug: 'marble-polishing', context: 'رخام', priority: 5 },
        { slug: 'glass-facades-cleaning', context: 'واجهات', priority: 6 },
        { slug: 'apartments-cleaning', context: 'شقق', priority: 7 },
    ],
};
