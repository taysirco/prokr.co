import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف خزانات ببريدة — CaCO₃ 600ppm Scale أعلى+Nafud ترسيب+ΔT — Descaler+RO! (2026)',
        description: 'تنظيف خزانات بريدة. CaCO₃ 600ppm Scale أعلى! Nafud SiO₂ ترسيب. ΔT 45°م. Descaler+تعقيم NWC+RO.',
        h1: 'تنظيف خزانات ببريدة — أعلى كلس Scale!',
        keywords: ['تنظيف خزانات بريدة', 'تنظيف خزان ببريدة', 'شركة تنظيف خزانات بريدة'],
    },
    content: {
        introduction: 'خزان بريدة = أعلى كلس في المملكة! CaCO₃ 600ppm Scale: أعلى تركيز كلس = Scale أسرع على جدران الخزان 2× من الرياض. Descaler صناعي كل 6 أشهر. كلس يُصفّر الماء ويُخشّنه. Nafud SiO₂ ترسيب: رمل النفود الناعم يدخل من فتحة غير محكمة ← يترسب في قاع الخزان. شفط أسفل + إحكام. ΔT 45°م: صيف = مياه الخزان 35-40°م = بكتيريا تنشط أسرع. تعقيم كلور مضاعف (NWC 0.5-1 PPM). 10-20% = لا طحالب! لا عفن! ميزة كبيرة. مقارنة: خميس = طحالب+عفن+Anti-Algae. بريدة = Scale+Nafud لكن لا طحالب = أبسط.',
        shortAnswer: 'على عكس [التنظيف بدون Descaler]، يعتمد بروتوكولنا في خدمة [تنظيف الخزانات] بمدينة [بريدة] على [Descaler+شفط Nafud+تعقيم NWC+إحكام]. ففي ظل [CaCO₃ 600ppm Scale+Nafud ترسيب+ΔT بكتيريا+لا طحالب]، تتفاقم ظاهرة [Scale+ترسيب+بكتيريا]. لذا؛ يتدخل فنيونا عبر [Descaler ← شفط ← تعقيم ← إحكام] — لا طحالب!',
        heroSubtitle: 'CaCO₃ 600ppm Scale أعلى + Nafud ترسيب — Descaler+تعقيم! لا طحالب!',
    },
    pricing: [
        { type: 'خزان صغير (5 م³)', unit: 'خزان', minPrice: 150, maxPrice: 310, time: '2-3h' },
        { type: 'خزان + Descaler عميق', unit: 'خزان', minPrice: 200, maxPrice: 420, time: '3-4h' },
        { type: 'خزان كبير (15+ م³)', unit: 'خزان', minPrice: 300, maxPrice: 620, time: '4-6h' },
        { type: 'عقد نصف سنوي', unit: 'سنة', minPrice: 300, maxPrice: 620, time: '2 تنظيف' },
    ],
    faq: [
        { question: 'ليش خزان بريدة يتكلّس أسرع؟', answer: 'CaCO₃ 600ppm أعلى بالمملكة. Scale 2× أسرع. Descaler كل 6 أشهر.' },
        { question: 'هل Nafud يدخل الخزان ببريدة؟', answer: 'فتحة غير محكمة = Nafud يترسب. إحكام + شفط.' },
        { question: 'كم تكلفة تنظيف خزان ببريدة مقارنة بخميس؟', answer: 'أرخص 15-20% — لا Anti-Algae+Anti-Fungal. Descaler+تعقيم فقط.' },
        { question: 'هل الخزان يتعفّن ببريدة؟', answer: 'لا! 10-20% = لا طحالب لا عفن. خميس: طحالب أسبوعية.' },
        { question: 'كم كلور تعقيم ببريدة؟', answer: 'NWC 0.5-1 PPM. صيف ΔT = مضاعف لأن بكتيريا تنشط.' },
    ],
    expertTips: [
        'Descaler كل 6 أشهر — 600ppm.',
        'إحكام غطاء — Nafud يدخل.',
        'تعقيم NWC — 0.5-1 PPM كلور.',
        'صيف: مضاعف — ΔT بكتيريا.',
        'لا طحالب! — 10-20% ميزة.',
    ],
    warnings: [
        'CaCO₃ 600ppm × سنة = Scale صلب — Descaler صناعي لازم.',
        'ΔT × صيف × بدون تعقيم = بكتيريا مياه شرب — YMYL.',
        'Nafud + فتحة مفتوحة = ترسيب قاع — إحكام إلزامي.',
    ],
    trustAnchors: [
        { ...GOV.NWC, role: 'معايير تعقيم خزانات (كلور 0.5-1 PPM)' },
        { ...GOV.MOH, role: 'بروتوكولات التعقيم' },
        { ...GOV.BALADI, role: 'ترخيص شركات التنظيف' },
        { entity: AMANA.QASSIM.entity, url: AMANA.QASSIM.url, role: 'اشتراطات أمانة القصيم' },
    ],
    expertReviewer: EXPERTS.ALMOHAIMED,
    expertCitations: [
        { expert: EXPERTS.ALMOHAIMED.name, quote: 'خزان بريدة: 600ppm Scale أعلى. Descaler 6 أشهر. لا طحالب.', source: 'نصائح هندسية — خزانات القصيم' },
        { expert: EXPERTS.ALMISNID.name, quote: 'ΔT 45°م = بكتيريا تنشط صيفاً. تعقيم مضاعف.', source: 'جغرافيا المناخ — القصيم' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ تنظيف خزانات NWC', authority: 'NWC + بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'Descaler صناعي', use: 'CaCO₃ 600ppm — Scale' },
        { name: 'شفط ترسيب', use: 'Nafud قاع — سحب' },
        { name: 'كلور NWC', use: 'تعقيم 0.5-1 PPM' },
    ],
    hiddenObjections: [
        { fear: 'تعقيم يكفي.', solution: '600ppm Scale = Descaler أولاً.' },
        { fear: 'مثل خميس.', solution: 'لا طحالب = أرخص 20%.' },
    ],
    consumerEducation: [
        { myth: 'سنوي يكفي.', truth: '600ppm = كل 6 أشهر. Scale.' },
        { myth: 'ماء يكفي.', truth: 'Scale = Descaler صناعي.' },
    ],
    relatedServices: [
        { slug: 'tank-insulation', context: 'عزل خزان', priority: 1 },
        { slug: 'tank-leak-detection', context: 'تسرب خزان', priority: 2 },
        { slug: 'swimming-pool-cleaning', context: 'مسابح', priority: 3 },
        { slug: 'water-leak-detection', context: 'تسرب مياه', priority: 4 },
        { slug: 'cleaning', context: 'تنظيف', priority: 5 },
        { slug: 'pest-control', context: 'حشرات', priority: 6 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 7 },
    ],
};
