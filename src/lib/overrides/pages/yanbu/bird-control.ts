import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'مكافحة طيور بينبع — 70-85% حمام بحري+نوارس+NaCl فضلات — شبك+ألترا! (2026)',
        description: 'مكافحة طيور ينبع. 70-85% حمام بحري+نوارس ميناء! NaCl فضلات حمضية. شبك+أشواك+ألتراسونيك.',
        h1: 'مكافحة طيور بينبع — حمام بحري+نوارس!',
        keywords: ['مكافحة طيور ينبع', 'مكافحة حمام بينبع', 'شركة مكافحة طيور ينبع'],
    },
    content: {
        introduction: 'طيور ينبع = حمام بحري+نوارس+فضلات حمضية! حمام بحري: حمام ينبع أكبر حجماً (بحري) ← فضلات أكثر ← NaCl+ملح في الفضلات = حمضية أعلى ← تآكل أسطح أسرع. نوارس ميناء: ميناء ينبع يجذب نوارس ← تنتقل للمباني القريبة ← فضلات+ضوضاء. 70-85% رطوبة: فضلات+رطوبة = عفن+بكتيريا أسرع = خطر صحي. Biofilm: فضلات+رطوبة = Biofilm بيولوجي على الأسطح. NaCl فضلات: ملح+يوريك أسيد = حمض يأكل الرخام والطلاء. مقارنة: بريدة = حمام عادي+غبار نخيل. ينبع = بحري+نوارس+حمضي = أعقد.',
        shortAnswer: 'على عكس [الطرد بدون شبك]، يعتمد بروتوكولنا في خدمة [مكافحة الطيور] بمدينة [ينبع] على [شبك أستيل+أشواك+ألتراسونيك+Chemical Wash]. ففي ظل [حمام بحري+نوارس+NaCl فضلات+70-85% Biofilm]، تتفاقم ظاهرة [فضلات حمضية+تآكل+عفن]. لذا؛ يتدخل فنيونا عبر [شبك ← أشواك ← ألترا ← Chemical Wash].',
        heroSubtitle: 'حمام بحري + نوارس ميناء + NaCl فضلات — شبك+ألترا!',
    },
    pricing: [
        { type: 'شبك (م.ط)', unit: 'م.ط', minPrice: 25, maxPrice: 55, time: '1-2 يوم' },
        { type: 'أشواك ستيل', unit: 'م.ط', minPrice: 15, maxPrice: 35, time: '1 يوم' },
        { type: 'ألتراسونيك', unit: 'جهاز', minPrice: 200, maxPrice: 420, time: '1h تركيب' },
        { type: 'Chemical Wash فضلات', unit: 'خدمة', minPrice: 150, maxPrice: 310, time: '2-3h' },
    ],
    faq: [
        { question: 'ليش فضلات طيور ينبع أخطر؟', answer: 'بحري = NaCl+يوريك أسيد = حمض يأكل رخام+طلاء. Chemical Wash.' },
        { question: 'هل النوارس مشكلة بينبع؟', answer: 'ميناء ينبع = نوارس تنتقل للمباني. شبك+ألتراسونيك.' },
        { question: 'كم تكلفة مكافحة طيور بينبع مقابل بريدة؟', answer: 'أغلى 20-25% — Chemical Wash (حمضي)+نوارس.' },
        { question: 'هل الفضلات تسبب عفن بينبع؟', answer: '70-85%+فضلات = Biofilm+عفن+بكتيريا. Chemical Wash+Anti-Fungal.' },
        { question: 'كم يدوم الشبك بينبع؟', answer: '3-5 سنوات. NaCl يتآكل عادي = Stainless Steel 316 إلزامي.' },
    ],
    expertTips: [
        'شبك Stainless 316 — NaCl.',
        'Chemical Wash — فضلات حمضية.',
        'ألتراسونيك — نوارس.',
        'Anti-Fungal — 70-85% Biofilm.',
        '316 وليس 304 — ساحلي.',
    ],
    warnings: [
        'NaCl فضلات × رخام × 6 أشهر = تآكل — Chemical Wash YMYL.',
        '70-85%+فضلات = Biofilm+بكتيريا ← صحة YMYL.',
        'شبك 304 + NaCl = صدأ — 316 إلزامي ساحلي.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص مكافحة الطيور' },
        { entity: AMANA.MADINAH.entity, url: AMANA.MADINAH.url, role: 'اشتراطات أمانة ينبع' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALMISNID.name, quote: 'طيور ينبع: بحري+نوارس. NaCl حمضي. شبك 316.', source: 'جغرافيا المناخ — طيور ساحلية' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ مكافحة طيور مرخصة', authority: 'بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'شبك Stainless 316', use: 'NaCl — مقاوم صدأ' },
        { name: 'أشواك Stainless', use: 'حافة — حمام+نوارس' },
        { name: 'Ultrasonic Repeller', use: 'نوارس — صوت طارد' },
    ],
    hiddenObjections: [
        { fear: 'شبك عادي.', solution: 'NaCl = صدأ. 316 Stainless.' },
        { fear: 'مثل بريدة.', solution: 'بحري+نوارس = مختلف.' },
    ],
    consumerEducation: [
        { myth: 'طرد يكفي.', truth: 'شبك+أشواك+ألترا = ثلاثي.' },
        { myth: '304 يكفي.', truth: 'NaCl = 316 إلزامي.' },
    ],
    relatedServices: [
        { slug: 'pest-control', context: 'حشرات', priority: 1 },
        { slug: 'cleaning', context: 'تنظيف', priority: 2 },
        { slug: 'glass-facades-cleaning', context: 'واجهات', priority: 3 },
        { slug: 'roof-insulation', context: 'أسطح', priority: 4 },
        { slug: 'marble-polishing', context: 'رخام', priority: 5 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 6 },
        { slug: 'villas-cleaning', context: 'فلل', priority: 7 },
    ],
};
