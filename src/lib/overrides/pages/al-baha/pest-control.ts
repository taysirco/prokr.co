import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'مكافحة حشرات بالباحة — حشرات غابة+200 يوم ضباب صراصير+عث — IPM Forest+IGR! (2026)',
        description: 'مكافحة حشرات الباحة. حشرات غابة فريدة! 200 يوم ضباب صراصير. عث Dermatophagoides. IPM Forest+IGR+Anti-Mite.',
        h1: 'مكافحة حشرات بالباحة — غابة+ضباب+عث!',
        keywords: ['مكافحة حشرات بالباحة', 'مكافحة حشرات الباحة', 'شركة مكافحة حشرات بالباحة'],
    },
    content: {
        introduction: 'حشرات الباحة = غابة+ضباب! حشرات غابة فريدة: غابة العرعر تُنتج خنافس موسمية+نمل غابة (Forest Ants) ← تنتقل للمنازل القريبة. IPM Forest Transition بروتوكول فريد. 200 يوم ضباب صراصير: رطوبة 60-85% = صراصير ألمانية تتكاثر أسرع على العفن. IGR+Gel Bait. عث Dermatophagoides: أكثر عث بالمملكة! ضباب+رطوبة = عث مراتب+كراسي. Anti-Mite معالجة. بعوض جبلي: ركود مياه أمطار = بعوض. BTI. مقارنة: بريدة = جاف 10-20% = لا بعوض+صراصير أقل+لا غابة. الباحة = غابة+بعوض+صراصير+عث = أعقد.',
        shortAnswer: 'على عكس [الرش العام]، يعتمد بروتوكولنا في خدمة [مكافحة الحشرات] بمدينة [الباحة] على [IPM Forest+IGR+Anti-Mite+BTI]. ففي ظل [غابة+ضباب+صراصير+عث+بعوض]، تتفاقم ظاهرة [حشرات غابة+تكاثر+عث]. لذا؛ يتدخل فنيونا عبر [IPM Forest ← IGR ← Anti-Mite ← BTI].',
        heroSubtitle: 'حشرات غابة + ضباب صراصير + عث — IPM Forest!',
    },
    pricing: [
        { type: 'شقة — شاملة', unit: 'شقة', minPrice: 130, maxPrice: 270, time: '1-2h' },
        { type: '+ Anti-Mite', unit: 'خدمة', minPrice: 80, maxPrice: 170, time: '+ 1h' },
        { type: 'فيلا قريبة من الغابة', unit: 'فيلا', minPrice: 300, maxPrice: 620, time: '3-5h' },
        { type: 'شهري (12/سنة)', unit: 'سنة', minPrice: 600, maxPrice: 1200, time: '12 رشة' },
    ],
    faq: [
        { question: 'ما حشرات الغابة بالباحة؟', answer: 'خنافس موسمية+نمل غابة. IPM Forest Transition.' },
        { question: 'ليش صراصير الباحة أكثر؟', answer: '60-85% = عفن = طعام. صراصير ألمانية. IGR+Gel.' },
        { question: 'ما العث بالباحة؟', answer: 'Dermatophagoides: أكثر عث بالمملكة. مراتب+كراسي. Anti-Mite.' },
        { question: 'كم تكلفة مكافحة بالباحة مقابل بريدة؟', answer: 'أغلى 30-35% — IPM Forest+Anti-Mite+BTI.' },
        { question: 'كم مرة مكافحة بالباحة؟', answer: 'شهري! غابة+ضباب مستمر. بريدة: ربع سنوي.' },
    ],
    expertTips: [
        'IPM Forest — خنافس+نمل غابة.',
        'IGR — صراصير عفن.',
        'Anti-Mite — أكثر عث بالمملكة.',
        'BTI — بعوض ركود مطر.',
        'شهري — غابة+ضباب مستمر.',
    ],
    warnings: [
        'غابة + بدون IPM = خنافس+نمل يدخل — Forest Transition.',
        '60-85% + صراصير × شهر = مستعمرات — IGR+Gel.',
        'عث + مراتب × 3 أشهر = حساسية — Anti-Mite YMYL.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص شركات المكافحة' },
        { entity: AMANA.BAHA.entity, url: AMANA.BAHA.url, role: 'اشتراطات أمانة الباحة' },
    ],
    expertReviewer: EXPERTS.ALKHODAIRY,
    expertCitations: [
        { expert: EXPERTS.ALKHODAIRY.name, quote: 'حشرات الباحة: غابة+ضباب+عث. IPM Forest+Anti-Mite. أعقد.', source: 'حشرات المملكة — جبلي-غابة' },
    ],
    saudiRegulations: [REGULATIONS.GHAD_SYSTEM],
    verificationBadges: [{ badge: '✔️ مكافحة حشرات مرخصة', authority: 'بلدي + SFDA', icon: 'shield-check' }],
    equipment: [
        { name: 'IPM Forest Kit', use: 'خنافس+نمل غابة' },
        { name: 'IGR + Gel Bait', use: 'صراصير — عفن' },
        { name: 'Anti-Mite', use: 'Dermatophagoides — مراتب' },
    ],
    hiddenObjections: [
        { fear: 'رش عام.', solution: 'IPM Forest+IGR+Anti-Mite = ثلاثي.' },
        { fear: 'مثل بريدة.', solution: 'غابة+عث = مختلف.' },
    ],
    consumerEducation: [
        { myth: 'ربع سنوي.', truth: 'شهري! غابة مستمرة.' },
        { myth: 'لا حشرات بالجبل.', truth: 'غابة = حشرات فريدة!' },
    ],
    relatedServices: [
        { slug: 'pesticide-spraying', context: 'رش', priority: 1 },
        { slug: 'bedbugs-control', context: 'بق', priority: 2 },
        { slug: 'termite-control', context: 'نمل أبيض', priority: 3 },
        { slug: 'bird-control', context: 'طيور', priority: 4 },
        { slug: 'cleaning', context: 'تنظيف', priority: 5 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 6 },
        { slug: 'carpet-cleaning', context: 'سجاد', priority: 7 },
    ],
};
