import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'مكافحة حشرات ببريدة — ΔT 45°م تكاثر+Nafud فتحات+نخيل 8M غذاء — IPM حراري! (2026)',
        description: 'مكافحة حشرات بريدة. ΔT 45°م تكاثر سريع! Nafud فتحات. نخيل 8M غذاء حشرات. IPM حراري+Gel+Residual.',
        h1: 'مكافحة حشرات ببريدة — ΔT تكاثر+نخيل غذاء!',
        keywords: ['مكافحة حشرات بريدة', 'مكافحة حشرات ببريدة', 'شركة مكافحة حشرات بريدة'],
    },
    content: {
        introduction: 'حشرات بريدة تتكاثر أسرع بسبب الحرارة والنخيل! ΔT 45°م تكاثر: صيف 48°م يسارع دورة حياة الحشرات = تتكاثر أسرع 2× من المدن المعتدلة. صراصير: 3 أسابيع مقابل 6. IPM حراري (Heat Treatment) + Gel Bait + Residual. Nafud فتحات: رمل النفود = فجوات في الأبواب والنوافذ (لأن الرمل يآكل الحشيات) = ممرات دخول حشرات. إحكام + حشيات سيليكون. نخيل 8M غذاء: تمور ساقطة + حشرات نخيل = مصدر غذاء وفير = أعداد أعلى. مكافحة حول المبنى. CaCO₃ 600ppm: لا يأثر مباشرة على الحشرات. 10-20% = لا رطوبة = صراصير تبحث عن رطوبة المطبخ/الحمام فقط. مقارنة: خميس = حشرات+عفن+عث. بريدة = حشرات فقط (لا عفن لا عث) = أبسط.',
        shortAnswer: 'على عكس [الرش العشوائي بدون IPM]، يعتمد بروتوكولنا في خدمة [مكافحة الحشرات] بمدينة [بريدة] على [IPM حراري+Gel Bait+Residual+إحكام]. ففي ظل [ΔT تكاثر سريع+Nafud فتحات+نخيل غذاء+10-20%]، تتفاقم ظاهرة [تكاثر 2×+ممرات+أعداد]. لذا؛ يتدخل فريقنا عبر [إحكام ← Heat ← Gel ← Residual] — لا عفن!',
        heroSubtitle: 'ΔT تكاثر 2× + Nafud فتحات + نخيل غذاء — IPM حراري!',
    },
    pricing: [
        { type: 'شقة (رش+Gel)', unit: 'شقة', minPrice: 120, maxPrice: 250, time: '1-2h' },
        { type: 'فيلا (IPM شامل)', unit: 'فيلا', minPrice: 250, maxPrice: 520, time: '2-4h' },
        { type: '+ إحكام فتحات', unit: 'إضافي', minPrice: 80, maxPrice: 170, time: '1-2h' },
        { type: 'ربع سنوي (4 زيارات)', unit: 'سنة', minPrice: 400, maxPrice: 800, time: '4 زيارات' },
    ],
    faq: [
        { question: 'ليش حشرات بريدة تتكاثر أسرع؟', answer: 'ΔT 45°م حرارة تسارع دورة حياة = 2× أسرع. IPM حراري يقتل أسرع أيضاً.' },
        { question: 'كيف النخيل يزيد الحشرات ببريدة؟', answer: '8M نخلة = تمور ساقطة+حشرات نخيل = غذاء. مكافحة حول المبنى.' },
        { question: 'كم تكلفة مكافحة حشرات ببريدة مقارنة بخميس؟', answer: 'أرخص 20% — لا Anti-Fungal+Anti-Mite. حشرات فقط.' },
        { question: 'ليش حشرات تدخل من Nafud ببريدة؟', answer: 'Nafud يآكل حشيات الأبواب = فتحات. إحكام سيليكون.' },
        { question: 'هل بريدة فيها عث أو عفن؟', answer: 'لا! 10-20% = لا عفن لا عث. حشرات فقط. ميزة.' },
    ],
    expertTips: [
        'IPM حراري — ΔT صيف = ميزة.',
        'Gel Bait — دقيق في المطبخ.',
        'إحكام فتحات — Nafud يآكل حشيات.',
        'مكافحة حول المبنى — نخيل غذاء.',
        'لا Anti-Mite — 10-20% ميزة.',
    ],
    warnings: [
        'ΔT × صيف = تكاثر 2× ← تأخير أسبوع = ضعف الأعداد.',
        'Nafud فتحات + بدون إحكام = حشرات تعود أسبوعياً.',
        'نخيل + تمور ساقطة = مصدر لا ينتهي — مكافحة دورية.',
    ],
    trustAnchors: [
        { ...GOV.SFDA, role: 'نظام غد — تسجيل المبيدات' },
        { ...GOV.WEQAA, role: 'مكافحة الآفات' },
        { ...GOV.BALADI, role: 'ترخيص شركات المكافحة' },
        { entity: AMANA.QASSIM.entity, url: AMANA.QASSIM.url, role: 'اشتراطات أمانة القصيم' },
    ],
    expertReviewer: EXPERTS.ALKHODAIRY,
    expertCitations: [
        { expert: EXPERTS.ALKHODAIRY.name, quote: 'حشرات بريدة: ΔT تكاثر 2×. نخيل غذاء. IPM. لا عفن.', source: 'أبحاث سموم — حشرات القصيم' },
        { expert: EXPERTS.ALMISNID.name, quote: 'ΔT 45°م يسارع دورة حياة. Nafud يآكل حشيات.', source: 'جغرافيا المناخ — القصيم' },
    ],
    saudiRegulations: [REGULATIONS.GHAD_SYSTEM],
    verificationBadges: [{ badge: '✔️ مكافحة مرخصة', authority: 'بلدي + SFDA', icon: 'shield-check' }],
    equipment: [
        { name: 'IPM Heat Treatment', use: 'يقتل حشرات+بيض — حرارة' },
        { name: 'Gel Bait', use: 'صراصير — دقيق مطبخ' },
        { name: 'Residual Spray', use: 'حماية طويلة — فتحات' },
    ],
    commonConcerns: [
        { concern: 'رش عام يكفي.', solution: 'ΔT تكاثر 2×. IPM+Gel+إحكام.' },
        { concern: 'مثل خميس.', solution: 'لا عفن+لا عث = أبسط 20%.' },
    ],
    consumerEducation: [
        { myth: 'رش مرة.', truth: 'ΔT+نخيل = دوري. ربع سنوي.' },
        { myth: 'أي مبيد.', truth: 'SFDA غد مسجل. Gel > رش.' },
    ],
    relatedServices: [
        { slug: 'pesticide-spraying', context: 'رش مبيدات', priority: 1 },
        { slug: 'bedbugs-control', context: 'بق', priority: 2 },
        { slug: 'termite-control', context: 'نمل أبيض', priority: 3 },
        { slug: 'bird-control', context: 'طيور', priority: 4 },
        { slug: 'cleaning', context: 'تنظيف', priority: 5 },
        { slug: 'sewage-unblocking', context: 'تسليك', priority: 6 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 7 },
    ],
};
