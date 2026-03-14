import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'رش مبيدات بالباحة — 200 يوم ضباب يُخفف Residual+غابة حشرات+بعوض مطر — IGR+BTI+IPM Forest! (2026)',
        description: 'رش مبيدات الباحة. 200 يوم ضباب يُخفف Residual! غابة حشرات فريدة. بعوض مطر. IGR+BTI+IPM Forest+Anti-Mite.',
        h1: 'رش مبيدات بالباحة — ضباب يُخفف+غابة!',
        keywords: ['رش مبيدات بالباحة', 'رش حشرات الباحة', 'شركة رش مبيدات بالباحة'],
    },
    content: {
        introduction: 'رش الباحة = ضباب يُخفف Residual! 200 يوم ضباب: رطوبة 60-85% تُخفف الأثر الباقي للمبيد (Residual Effect) ← يتبخر أسرع = حماية أقصر! تكرار أكثر. مبيد مقاوم رطوبة. غابة حشرات: عرعر ← خنافس+نمل غابة فريدة = IPM Forest Transition. لا يكفي رش عام! بعوض مطر: ركود مياه أمطار جبلية = بعوض. BTI مخصص. عث الرطوبة: Dermatophagoides أكثر بالمملكة! Anti-Mite معالجة. مقارنة: بريدة = جاف 10-20% = Residual يدوم أطول+لا غابة+لا بعوض = أبسط. الباحة = ضباب يُخفف+غابة+بعوض+عث = أعقد.',
        shortAnswer: 'على عكس [الرش العام+Residual طويل]، يعتمد بروتوكولنا في خدمة [رش المبيدات] بمدينة [الباحة] على [مبيد مقاوم رطوبة+IGR+IPM Forest+BTI+Anti-Mite]. ففي ظل [ضباب يُخفف Residual+غابة+بعوض+عث]، تتفاقم ظاهرة [حماية أقصر+حشرات فريدة+تكاثر]. لذا؛ يتدخل فنيونا عبر [مقاوم رطوبة ← IGR ← IPM Forest ← BTI ← Anti-Mite].',
        heroSubtitle: 'ضباب يُخفف Residual + غابة + بعوض + عث — IPM Forest!',
    },
    pricing: [
        { type: 'شقة — رش شامل', unit: 'شقة', minPrice: 100, maxPrice: 210, time: '1-2h' },
        { type: '+ Anti-Mite + BTI', unit: 'خدمة', minPrice: 80, maxPrice: 170, time: '+ 1h' },
        { type: 'فيلا قريبة من الغابة', unit: 'فيلا', minPrice: 250, maxPrice: 520, time: '3-4h' },
        { type: 'شهري (12/سنة)', unit: 'سنة', minPrice: 600, maxPrice: 1200, time: '12 رشة' },
    ],
    faq: [
        { question: 'ليش المبيد لا يدوم بالباحة؟', answer: '60-85% ضباب يُخفف Residual = حماية أقصر. مقاوم رطوبة.' },
        { question: 'ما IPM Forest بالباحة؟', answer: 'خنافس+نمل من غابة العرعر. بروتوكول فريد.' },
        { question: 'ليش بعوض بالباحة أكثر؟', answer: 'ركود مياه أمطار جبلية = بعوض. BTI.' },
        { question: 'كم تكلفة رش بالباحة مقابل بريدة؟', answer: 'أغلى 30-35% — Residual أقصر+IPM+BTI+Anti-Mite.' },
        { question: 'كم مرة رش بالباحة؟', answer: 'شهري! Residual أقصر. بريدة: ربع سنوي.' },
    ],
    expertTips: [
        'مبيد مقاوم رطوبة — Residual أطول.',
        'IPM Forest — غابة حشرات.',
        'BTI — بعوض مطر.',
        'Anti-Mite — أكثر عث.',
        'شهري — ضباب يُخفف.',
    ],
    warnings: [
        'ضباب + مبيد عادي = Residual يتبخر ← لا حماية — مقاوم رطوبة.',
        'غابة + بدون IPM = حشرات فريدة — Forest Transition.',
        'ركود مطر + بدون BTI = بعوض ← أمراض YMYL.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص شركات الرش' },
        { entity: AMANA.BAHA.entity, url: AMANA.BAHA.url, role: 'اشتراطات أمانة الباحة' },
    ],
    expertReviewer: EXPERTS.ALKHODAIRY,
    expertCitations: [
        { expert: EXPERTS.ALKHODAIRY.name, quote: 'رش الباحة: ضباب يُخفف Residual. مقاوم رطوبة+IPM Forest.', source: 'حشرات المملكة — رش جبلي' },
    ],
    saudiRegulations: [REGULATIONS.GHAD_SYSTEM],
    verificationBadges: [{ badge: '✔️ رش مبيدات مرخص', authority: 'بلدي + SFDA', icon: 'shield-check' }],
    equipment: [
        { name: 'مبيد مقاوم رطوبة', use: 'Residual — ضباب' },
        { name: 'IPM Forest Kit', use: 'خنافس+نمل — غابة' },
        { name: 'BTI', use: 'بعوض — ركود مطر' },
    ],
    commonConcerns: [
        { concern: 'رش عام.', solution: 'IPM Forest+مقاوم. ليس عام.' },
        { concern: 'مثل بريدة.', solution: 'Residual أقصر+غابة.' },
    ],
    consumerEducation: [
        { myth: 'ربع سنوي.', truth: 'شهري! Residual أقصر.' },
        { myth: 'مبيد يكفي.', truth: 'مقاوم رطوبة مطلوب.' },
    ],
    relatedServices: [
        { slug: 'pest-control', context: 'حشرات', priority: 1 },
        { slug: 'bedbugs-control', context: 'بق', priority: 2 },
        { slug: 'termite-control', context: 'نمل أبيض', priority: 3 },
        { slug: 'bird-control', context: 'طيور', priority: 4 },
        { slug: 'cleaning', context: 'تنظيف', priority: 5 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 6 },
        { slug: 'tanks-cleaning', context: 'خزانات', priority: 7 },
    ],
};
