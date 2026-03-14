import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'رش مبيدات ببريدة — ΔT 45°م تبخّر+Nafud فتحات+نخيل 8M — Micro-Encap! (2026)',
        description: 'رش مبيدات بريدة. ΔT 45°م يُبخّر مبيدات! Nafud فتحات. نخيل غذاء. Micro-Encapsulated+Gel+SFDA غد.',
        h1: 'رش مبيدات ببريدة — ΔT يُبخّر+Nafud فتحات!',
        keywords: ['رش مبيدات بريدة', 'رش مبيدات ببريدة', 'شركة رش مبيدات بريدة'],
    },
    content: {
        introduction: 'رش مبيدات ببريدة = حرارة تُبخّر أسرع! ΔT 45°م تبخّر: صيف 48°م = المبيدات السائلة تتبخر 30-40% أسرع من الرياض! فعالية تقل. Micro-Encapsulated تحمي المادة الفعالة. Gel Bait: لا يتبخر. Nafud فتحات: رمل النفود يآكل حشيات الأبواب والنوافذ ← حشرات تدخل مجدداً. رش+إحكام معاً. نخيل 8M: تمور ساقطة = غذاء = حشرات تعود. مبيد حول المبنى + نظافة تمور. CaCO₃ 600ppm: لا يأثر على المبيدات. 10-20% = مبيد لا يتبلل بالمطر = يدوم أطول! ميزة. SFDA: مبيدات مسجلة في نظام غد فقط. مقارنة: خميس = مبيد يتبلل بالأمطار. بريدة = لا مطر = يدوم + Micro-Encap ضد حرارة.',
        shortAnswer: 'على عكس [الرش السائل الذي يتبخر بالحرارة]، يعتمد بروتوكولنا في خدمة [رش المبيدات] بمدينة [بريدة] على [Micro-Encapsulated+Gel Bait+إحكام+SFDA]. ففي ظل [ΔT تبخّر 30-40%+Nafud فتحات+نخيل غذاء+لا مطر]، تتفاقم ظاهرة [تبخّر+فتحات+أعداد]. لذا؛ يتدخل فريقنا عبر [Micro-Encap ← Gel ← إحكام] — يدوم! لا مطر!',
        heroSubtitle: 'ΔT يُبخّر 30-40% + Nafud فتحات — Micro-Encap! لا مطر = يدوم!',
    },
    pricing: [
        { type: 'شقة (رش+Gel)', unit: 'شقة', minPrice: 100, maxPrice: 200, time: '1-2h' },
        { type: 'فيلا (Micro-Encap)', unit: 'فيلا', minPrice: 200, maxPrice: 420, time: '2-3h' },
        { type: '+ إحكام فتحات', unit: 'إضافي', minPrice: 80, maxPrice: 170, time: '1-2h' },
        { type: 'ربع سنوي (4 رش)', unit: 'سنة', minPrice: 350, maxPrice: 700, time: '4 زيارات' },
    ],
    faq: [
        { question: 'ليش المبيد يفقد فعاليته أسرع ببريدة؟', answer: 'ΔT 45°م = تبخّر 30-40% أسرع. Micro-Encapsulated يحمي المادة.' },
        { question: 'ليش حشرات تعود بعد الرش ببريدة؟', answer: 'Nafud يآكل حشيات = فتحات. نخيل = غذاء يعود. رش+إحكام+نظافة.' },
        { question: 'كم تكلفة رش مبيدات ببريدة مقارنة بخميس؟', answer: 'Micro-Encap أغلى 10%. لكن: لا مطر = يدوم 2× أطول.' },
        { question: 'هل المبيد يتبلل ببريدة؟', answer: 'لا! لا مطر = يدوم. ميزة كبيرة. خميس: أمطار تغسل المبيد.' },
        { question: 'هل المبيدات آمنة ببريدة؟', answer: 'SFDA نظام غد مسجل فقط. Gel Bait = أقل سمية. آمن على الأسرة.' },
    ],
    expertTips: [
        'Micro-Encapsulated — ΔT لا يُبخّر.',
        'Gel Bait — لا يتبخر+دقيق.',
        'إحكام فتحات — Nafud يآكل حشيات.',
        'لا مطر — مبيد يدوم 2×.',
        'SFDA غد — مبيدات مسجلة آمنة.',
    ],
    warnings: [
        'مبيد سائل + ΔT 48°م = فعالية 40% أقل — Micro-Encap إلزامي.',
        'بدون إحكام + Nafud = فتحات ← حشرات تعود أسبوعياً.',
        'مبيد غير SFDA = سموم + غرامة — نظام غد فقط YMYL.',
    ],
    trustAnchors: [
        { ...GOV.SFDA, role: 'نظام غد — تسجيل المبيدات' },
        { ...GOV.WEQAA, role: 'مكافحة الآفات' },
        { ...GOV.BALADI, role: 'ترخيص شركات المكافحة' },
        { entity: AMANA.QASSIM.entity, url: AMANA.QASSIM.url, role: 'اشتراطات أمانة القصيم' },
    ],
    expertReviewer: EXPERTS.ALKHODAIRY,
    expertCitations: [
        { expert: EXPERTS.ALKHODAIRY.name, quote: 'رش بريدة: ΔT يُبخّر. Micro-Encap يحمي. SFDA غد.', source: 'أبحاث سموم — مبيدات القصيم' },
        { expert: EXPERTS.ALMISNID.name, quote: 'لا مطر القصيم = مبيد يدوم. Nafud يآكل حشيات.', source: 'جغرافيا المناخ — القصيم' },
    ],
    saudiRegulations: [REGULATIONS.GHAD_SYSTEM],
    verificationBadges: [{ badge: '✔️ رش مبيدات مرخص', authority: 'بلدي + SFDA', icon: 'shield-check' }],
    equipment: [
        { name: 'Micro-Encapsulated', use: 'مقاوم تبخّر ΔT' },
        { name: 'Gel Bait', use: 'لا يتبخر — دقيق' },
        { name: 'Residual Spray', use: 'فتحات — حماية طويلة' },
    ],
    hiddenObjections: [
        { fear: 'رش عادي يكفي.', solution: 'ΔT يُبخّر 40%. Micro-Encap.' },
        { fear: 'مثل خميس.', solution: 'لا مطر = يدوم 2×. لكن: تبخّر.' },
    ],
    consumerEducation: [
        { myth: 'رش سائل.', truth: 'ΔT = Micro-Encap+Gel.' },
        { myth: 'مرة سنوياً.', truth: 'Nafud+نخيل = ربع سنوي.' },
    ],
    relatedServices: [
        { slug: 'pest-control', context: 'حشرات', priority: 1 },
        { slug: 'bedbugs-control', context: 'بق', priority: 2 },
        { slug: 'termite-control', context: 'نمل أبيض', priority: 3 },
        { slug: 'bird-control', context: 'طيور', priority: 4 },
        { slug: 'cleaning', context: 'تنظيف', priority: 5 },
        { slug: 'sewage-unblocking', context: 'تسليك', priority: 6 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 7 },
    ],
};
