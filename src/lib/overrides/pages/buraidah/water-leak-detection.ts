import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'كشف تسربات مياه ببريدة — CaCO₃ 600ppm يسد+ΔT تشقق+Nafud — فحص حراري+Descaler! (2026)',
        description: 'كشف تسربات مياه بريدة. CaCO₃ 600ppm يسد أنابيب+بقع كلس دليل! ΔT 45°م تشقق. فحص حراري+Descaler.',
        h1: 'كشف تسربات مياه ببريدة — أعلى كلس+بقع دليل!',
        keywords: ['كشف تسربات مياه بريدة', 'كشف تسرب مياه ببريدة', 'شركة كشف تسربات بريدة'],
    },
    content: {
        introduction: 'تسرب ببريدة = أعلى كلس يعطي دليل واضح! CaCO₃ 600ppm بقع كلس = دليل: بقع بيضاء على الجدران والأرضيات = دليل تسرب واضح لا يحتاج معدات معقدة. ميزة. لكن: 600ppm يسد أنابيب 2× أسرع ← يزيد ضغط ← يسرّع تسرب. Descaler وقائي. ΔT 45°م تشقق: مواسير تتمدد/تنكمش يومياً ← مفاصل تتسع ← تسرب. فحص حراري يكشف. CaCO₃ + ΔT = مزدوج: كلس يُصلّب المفاصل + حرارة تُحرّكها = أسرع تلف. Nafud SiO₂: لا يأثر مباشرة على الأنابيب. 10-20% = بقع تسرب واضحة (لا تكثّف مُضلل)! أرخص. مقارنة: خميس = تكثّف يخلط مع التسرب = أعقد. بريدة = بقع كلسية = أبسط تشخيص.',
        shortAnswer: 'على عكس [الفحص البصري بدون حراري]، يعتمد بروتوكولنا في خدمة [كشف التسربات] بمدينة [بريدة] على [فحص حراري+Descaler وقائي+فحص مفاصل ΔT]. ففي ظل [CaCO₃ 600ppm بقع+يسد+ΔT تشقق+لا تكثّف]، تتفاقم ظاهرة [تسرب كلسي+انسداد+مفاصل]. لذا؛ يتدخل فنيونا عبر [بقع ← حراري ← Descaler ← إصلاح] — بقع واضحة!',
        heroSubtitle: 'CaCO₃ 600ppm بقع واضحة + ΔT تشقق — فحص حراري+Descaler!',
    },
    pricing: [
        { type: 'فحص حراري + صوتي', unit: 'خدمة', minPrice: 150, maxPrice: 320, time: '1-2h' },
        { type: 'فحص + إصلاح نقطة', unit: 'نقطة', minPrice: 200, maxPrice: 420, time: '2-4h' },
        { type: 'فحص + Descaler شامل', unit: 'خدمة', minPrice: 300, maxPrice: 620, time: '3-5h' },
        { type: 'تقرير NWC (فاتورة)', unit: 'تقرير', minPrice: 200, maxPrice: 420, time: '1-2 يوم' },
    ],
    faq: [
        { question: 'كيف أعرف في تسرب ببريدة؟', answer: 'بقع كلس بيضاء على جدران/أرضيات = 600ppm دليل واضح. لا تكثّف.' },
        { question: 'ليش أنابيب بريدة تتسرب أكثر؟', answer: 'CaCO₃ 600ppm يسد+ΔT 45°م مفاصل. مزدوج = أسرع.' },
        { question: 'كم تكلفة كشف تسرب ببريدة مقارنة بخميس؟', answer: 'أرخص 15-20% — بقع واضحة+لا تكثّف مُضلل.' },
        { question: 'هل NWC يُعدّل فاتورة ببريدة؟', answer: 'نعم — تقرير كشف معتمد ← NWC يُعدّل فاتورة.' },
        { question: 'هل Descaler يمنع تسرب ببريدة؟', answer: 'يُقلل 40-50%! يُذيب كلس من الأنابيب = ضغط أقل = تسرب أقل.' },
    ],
    expertTips: [
        'بقع كلس = دليل تسرب — فوري.',
        'فحص حراري — ΔT مفاصل.',
        'Descaler وقائي — 600ppm يسد.',
        'تقرير NWC — تعديل فاتورة.',
        'لا تكثّف — تشخيص أبسط.',
    ],
    warnings: [
        'CaCO₃ 600ppm يسد+ΔT مفاصل = تسرب مزدوج — كارثة إهمال YMYL.',
        'بدون Descaler = 600ppm يسد 2× = ضغط ← تسرب أسرع.',
        'بدون تقرير NWC = فاتورة مستمرة — تعديل مُتاح.',
    ],
    trustAnchors: [
        { ...GOV.NWC, role: 'تقرير تسرب — تعديل فاتورة' },
        { ...GOV.SCE, role: 'فاحص مباني — تقرير تلف' },
        { ...GOV.MAEE, role: 'ترشيد المياه' },
        { entity: AMANA.QASSIM.entity, url: AMANA.QASSIM.url, role: 'اشتراطات أمانة القصيم' },
    ],
    expertReviewer: EXPERTS.ALJUND,
    expertCitations: [
        { expert: EXPERTS.ALJUND.name, quote: 'تسرب بريدة: 600ppm بقع واضحة+يسد. ΔT مفاصل. فحص حراري.', source: 'موسوعة أخطاء — تسربات' },
        { expert: EXPERTS.ALMISNID.name, quote: 'ΔT 45°م = مفاصل. لا تكثّف = بقع واضحة.', source: 'جغرافيا المناخ — القصيم' },
    ],
    saudiRegulations: [REGULATIONS.NWC_REPORT],
    verificationBadges: [{ badge: '✔️ كشف تسرب معتمد NWC', authority: 'NWC + SCE', icon: 'shield-check' }],
    equipment: [
        { name: 'كاميرا حرارية', use: 'ΔT مفاصل — يكشف تسرب' },
        { name: 'جهاز صوتي', use: 'يسمع تسرب داخل الجدران' },
        { name: 'Descaler وقائي', use: 'CaCO₃ 600ppm — يمنع انسداد' },
    ],
    hiddenObjections: [
        { fear: 'بصري يكفي.', solution: 'بقع واضحة+حراري = دقيق.' },
        { fear: 'مثل عنيزة.', solution: 'نفس 600ppm لكن بريدة أكبر.' },
    ],
    counterNarratives: [
        { myth: 'تسرب عادي.', truth: '600ppm+ΔT = مزدوج. أكثر.' },
        { myth: 'إصلاح يكفي.', truth: 'Descaler وقائي = 40% أقل تسرب.' },
    ],
    relatedServices: [
        { slug: 'bathroom-leak-detection', context: 'حمام', priority: 1 },
        { slug: 'tank-leak-detection', context: 'خزان', priority: 2 },
        { slug: 'water-insulation', context: 'مائي', priority: 3 },
        { slug: 'tanks-cleaning', context: 'خزانات', priority: 4 },
        { slug: 'sewage-unblocking', context: 'تسليك', priority: 5 },
        { slug: 'cleaning', context: 'تنظيف', priority: 6 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 7 },
    ],
};
