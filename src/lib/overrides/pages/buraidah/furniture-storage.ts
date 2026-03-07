import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تخزين عفش ببريدة — ΔT 45°م تشقق+Nafud SiO₂ خدش+CaCO₃ — مكيف+محكم! (2026)',
        description: 'تخزين عفش بريدة. ΔT 45°م يشقق خشب! Nafud SiO₂ يخدش. CaCO₃ 600ppm. مستودع مكيف+محكم+Oil Polish.',
        h1: 'تخزين عفش ببريدة — ΔT تشقق+Nafud خدش!',
        keywords: ['تخزين عفش بريدة', 'تخزين أثاث ببريدة', 'شركة تخزين عفش بريدة'],
    },
    content: {
        introduction: 'تخزين عفش بريدة = حرارة ورمل ناعم! ΔT 45°م تشقق: مستودع غير مكيف = صيف 55°م داخل المستودع + شتاء 0°م = فارق 55°م! خشب يتشقق ← تلف. مستودع مكيف 18-22°م ثابت. Nafud SiO₂ خدش: رمل النفود الناعم 10-50 μm يتسلل من أي فتحة ← يتراكم على الأثاث ← يخدش الأسطح اللامعة. مستودع محكم + تغليف. CaCO₃ 600ppm: لا يأثر مباشرة على التخزين. 10-20% = لا عفن! لا عث! ميزة كبيرة — خميس: مستودع يتعفّن + عث يتلف الأقمشة = Anti-Fungal+Anti-Mite. لا نخيل داخل المستودع المحكم. مقارنة: خميس = مكيف+مانع عفن+مانع عث = أغلى 30%. بريدة = مكيف+محكم فقط = أبسط.',
        shortAnswer: 'على عكس [المستودع غير المكيف الذي يُشقّق الخشب]، يعتمد بروتوكولنا في خدمة [تخزين العفش] بمدينة [بريدة] على [مستودع مكيف 18-22°م+محكم Nafud+تغليف]. ففي ظل [ΔT 45°م+Nafud خدش+10-20% لا عفن]، تتفاقم ظاهرة [تشقق+خدش]. لذا؛ يتدخل فريقنا عبر [مكيف ← محكم ← تغليف] — ميزة: لا عفن!',
        heroSubtitle: 'ΔT 45°م تشقق + Nafud خدش — مكيف+محكم! لا عفن!',
    },
    pricing: [
        { type: 'غرفة تخزين صغيرة', unit: 'شهر', minPrice: 200, maxPrice: 420, time: 'شهري' },
        { type: 'غرفة كبيرة مكيفة', unit: 'شهر', minPrice: 350, maxPrice: 720, time: 'شهري' },
        { type: '+ تغليف محكم', unit: 'إضافي', minPrice: 100, maxPrice: 200, time: 'مرة' },
        { type: 'سنوي (خصم 20%)', unit: 'سنة', minPrice: 3000, maxPrice: 6500, time: 'سنوي' },
    ],
    faq: [
        { question: 'ليش الأثاث يتشقق في مستودعات بريدة؟', answer: 'ΔT 45°م = مستودع غير مكيف 55°م صيفاً + 0°م شتاءً. مكيف 18-22°م يمنع.' },
        { question: 'هل Nafud يخدش الأثاث في المستودع ببريدة؟', answer: 'Nafud 10-50 μm يتسلل من أي فتحة. مستودع محكم+تغليف = لا خدش.' },
        { question: 'كم تكلفة تخزين عفش ببريدة مقارنة بخميس؟', answer: 'أرخص 25-30% — لا Anti-Fungal+Anti-Mite. مكيف+محكم فقط.' },
        { question: 'هل العفش يتعفّن في مستودع ببريدة؟', answer: 'لا! 10-20% = لا عفن. ميزة. خميس: عفن+عث.' },
        { question: 'كم أقصى مدة تخزين ببريدة؟', answer: 'سنوات! لا عفن. فحص ربع سنوي+Oil Polish يحمي. مكيف ثابت.' },
    ],
    expertTips: [
        'مكيف 18-22°م — ΔT 45°م تشقق.',
        'محكم — Nafud SiO₂ يتسلل.',
        'تغليف — حماية خدش.',
        'Oil Polish خشب — قبل التخزين.',
        'لا عفن! — 10-20% ميزة.',
    ],
    warnings: [
        'مستودع غير مكيف + ΔT 45°م = خشب يتشقق خلال 3 أشهر.',
        'Nafud + فتحة صغيرة = خدش تراكمي — محكم إلزامي.',
        'بدون تغليف = أسطح لامعة تُخدش — تلميع 2000+.',
    ],
    trustAnchors: [
        { ...GOV.TGA, role: 'ترخيص التخزين' },
        { entity: AMANA.QASSIM.entity, url: AMANA.QASSIM.url, role: 'اشتراطات أمانة القصيم' },
    ],
    expertReviewer: EXPERTS.ALMOHAIMED,
    expertCitations: [
        { expert: EXPERTS.ALMOHAIMED.name, quote: 'تخزين بريدة: مكيف+محكم. ΔT+Nafud. لا عفن. أبسط.', source: 'نصائح هندسية — تخزين القصيم' },
    ],
    saudiRegulations: [REGULATIONS.TGA_LICENSE],
    verificationBadges: [{ badge: '✔️ تخزين مرخص', authority: 'بلدي + TGA', icon: 'shield-check' }],
    equipment: [
        { name: 'تكييف ثابت 18-22°م', use: 'يمنع تشقق ΔT' },
        { name: 'إحكام Nafud', use: 'يمنع SiO₂ — محكم' },
        { name: 'تغليف Microfiber', use: 'يحمي خدش — أسطح لامعة' },
    ],
    hiddenObjections: [
        { fear: 'مستودع عادي.', solution: 'ΔT+Nafud = مكيف+محكم.' },
        { fear: 'مثل خميس.', solution: 'لا عفن = أرخص 30%.' },
    ],
    counterNarratives: [
        { myth: 'أي مستودع.', truth: 'ΔT 45°م = مكيف. Nafud = محكم.' },
        { myth: 'مثل الرياض.', truth: 'Nafud أنعم. 600ppm. نخيل.' },
    ],
    relatedServices: [
        { slug: 'furniture-moving', context: 'نقل عفش', priority: 1 },
        { slug: 'dyna', context: 'دينا', priority: 2 },
        { slug: 'dabab', context: 'دباب', priority: 3 },
        { slug: 'cleaning', context: 'تنظيف', priority: 4 },
        { slug: 'pest-control', context: 'حشرات', priority: 5 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 6 },
        { slug: 'termite-control', context: 'نمل أبيض', priority: 7 },
    ],
};
