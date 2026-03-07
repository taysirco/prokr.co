import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'عزل خزانات بخميس مشيط — أمطار تلوث+60-85% طحالب+ضباب — Closed-Cell+UV! (2026)',
        description: 'عزل خزانات خميس مشيط. أمطار تلوث! 60-85% طحالب. ضباب أبواغ. Closed-Cell+UV+إحكام غطاء.',
        h1: 'عزل خزانات بخميس مشيط — أمطار تلوث — Closed-Cell!',
        keywords: ['عزل خزانات خميس مشيط', 'عزل خزان بخميس مشيط', 'شركة عزل خزانات خميس مشيط'],
    },
    content: {
        introduction: 'خزان خميس مشيط يحتاج عزلاً أقوى من الصحراء! أمطار تلوث: ماء مطر يتسرب للخزان لو الغطاء غير محكم ← تلوث الماء. إحكام غطاء Anti-Leak. 60-85% = طحالب: رطوبة تدخل الخزان ← طحالب تنمو على الجدران الداخلية 2× أسرع. عزل Closed-Cell PU Foam غذائي = يمنع رطوبة + يحمي من تآكل. ضباب: يحمل أبواغ بكتيريا وطحالب ← تدخل من فتحات الخزان ← تلوث. فلتر تهوية. برد 0-5°م: مياه باردة جداً شتاءً ← يحتاج حماية من تجمد في مواسير خارجية. مقارنة: عنيزة = لا أمطار + لا طحالب + لا ضباب = عزل أساسي يكفي. خميس = عزل مقوّى+إحكام.',
        shortAnswer: 'على عكس [العزل الأساسي بدون إحكام]، يعتمد بروتوكولنا في خدمة [عزل الخزانات] بمدينة [خميس مشيط] على [Closed-Cell PU+إحكام غطاء+فلتر تهوية+حماية تجمد]. ففي ظل [أمطار تلوث+60-85% طحالب+ضباب أبواغ+برد 0°م]، تتفاقم ظاهرة [تلوث+طحالب+أبواغ+تجمد]. لذا؛ يتدخل فنيونا عبر [عزل ← إحكام ← فلتر ← حماية].',
        heroSubtitle: 'أمطار تلوث + طحالب 2× + ضباب — Closed-Cell+إحكام!',
    },
    pricing: [
        { type: 'خزان أرضي (< 10 م³)', unit: 'خزان', minPrice: 300, maxPrice: 650, time: '1 يوم' },
        { type: 'خزان علوي', unit: 'خزان', minPrice: 200, maxPrice: 420, time: '4-6 ساعات' },
        { type: '+ إحكام غطاء+فلتر', unit: 'إضافي', minPrice: 120, maxPrice: 250, time: '2 ساعة' },
        { type: 'فحص + إصلاح عزل', unit: 'خدمة', minPrice: 180, maxPrice: 380, time: '3-4 ساعات' },
    ],
    faq: [
        { question: 'ليش خزان خميس يحتاج عزل أقوى من عنيزة؟', answer: 'أمطار تلوث+طحالب 2×+ضباب أبواغ. عنيزة: لا مطر+لا طحالب = عزل أساسي.' },
        { question: 'كيف الأمطار تلوث الخزان بخميس مشيط؟', answer: 'ماء مطر يدخل من غطاء غير محكم ← يحمل تلوث. إحكام Anti-Leak إلزامي.' },
        { question: 'هل الطحالب تنمو في الخزان بخميس مشيط؟', answer: '60-85% = طحالب 2× أسرع على الجدران. Closed-Cell + تنظيف كل 3 أشهر.' },
        { question: 'كم تكلفة عزل خزان بخميس مقارنة بعنيزة؟', answer: 'أغلى 20-30% — Closed-Cell+إحكام+فلتر. 200-650 مقابل 160-500.' },
        { question: 'هل البرد يأثر على الخزان بخميس مشيط؟', answer: '0-5°م = مواسير خارجية قد تتجمد. عزل مواسير شتوي إلزامي.' },
    ],
    expertTips: [
        'Closed-Cell PU — لا يمتص رطوبة 60-85%.',
        'إحكام غطاء — أمطار تلوث.',
        'فلتر تهوية — ضباب يحمل أبواغ.',
        'تنظيف كل 3 أشهر — طحالب 2×.',
        'عزل مواسير — برد 0°م تجمد.',
    ],
    warnings: [
        'غطاء غير محكم + أمطار = تلوث ماء شرب — خطر صحي YMYL.',
        'طحالب × 6 أشهر = طبقة سميكة تغيّر طعم ولون الماء.',
        'مواسير غير معزولة + 0°م = تجمد + انفجار.',
    ],
    trustAnchors: [
        { ...GOV.NWC, role: 'معايير خزانات مياه الشرب' },
        { ...GOV.BALADI, role: 'ترخيص مقاولي العزل' },
        { entity: AMANA.ASIR.entity, url: AMANA.ASIR.url, role: 'اشتراطات أمانة عسير' },
    ],
    expertReviewer: EXPERTS.ALJUND,
    expertCitations: [
        { expert: EXPERTS.ALJUND.name, quote: 'خزان خميس: أمطار+طحالب+ضباب. Closed-Cell+إحكام. أقوى من عزل الصحراء.', source: 'موسوعة أخطاء — خزانات جبلية' },
    ],
    saudiRegulations: [REGULATIONS.NWC_REPORT],
    verificationBadges: [{ badge: '✔️ عزل خزان مرخص', authority: 'بلدي + NWC', icon: 'shield-check' }],
    equipment: [
        { name: 'Closed-Cell PU غذائي', use: 'لا يمتص رطوبة — آمن لمياه الشرب' },
        { name: 'إحكام Anti-Leak', use: 'يمنع دخول أمطار وضباب' },
        { name: 'فلتر تهوية', use: 'يمنع أبواغ ضبابية من الدخول' },
    ],
    hiddenObjections: [
        { fear: 'عزل عادي يكفي.', solution: 'أمطار+طحالب = Closed-Cell+إحكام.' },
        { fear: 'مثل عنيزة.', solution: 'عنيزة: لا مطر+لا طحالب = أبسط.' },
    ],
    counterNarratives: [
        { myth: 'الخزان لا يحتاج إحكام.', truth: 'أمطار خميس = تلوث. إحكام إلزامي.' },
        { myth: 'Open-Cell أرخص.', truth: 'يمتص رطوبة 60-85% = يتعفّن.' },
    ],
    relatedServices: [
        { slug: 'tanks-cleaning', context: 'تنظيف خزانات', priority: 1 },
        { slug: 'tank-leak-detection', context: 'تسرب خزان', priority: 2 },
        { slug: 'water-insulation', context: 'عزل مائي', priority: 3 },
        { slug: 'water-leak-detection', context: 'تسرب مياه', priority: 4 },
        { slug: 'foam-insulation', context: 'عزل فوم', priority: 5 },
        { slug: 'cleaning', context: 'تنظيف', priority: 6 },
        { slug: 'pest-control', context: 'حشرات', priority: 7 },
    ],
};
