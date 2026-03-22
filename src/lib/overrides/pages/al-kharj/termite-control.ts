import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../gov-references';

export const override: PageOverride = {
    meta: {
        title: 'مكافحة نمل أبيض بالخرج — ΔT 48°م تشققات أساسات+CaCO₃ رطوبة أرضية — Pre-Con! (2026)',
        description: 'مكافحة نمل أبيض الخرج. ΔT 48°م تشققات أساسات! CaCO₃ رطوبة أرضية. مزارع = خشب. Pre-Con+Termiticide+سد.',
        h1: 'مكافحة نمل أبيض بالخرج — تشققات ΔT — Pre-Con!',
        keywords: ['مكافحة نمل أبيض الخرج', 'مكافحة أرضة بالخرج', 'شركة مكافحة نمل أبيض الخرج'],
    },
    content: {
        introduction: 'نمل أبيض الخرج = تشققات حرارية وأرضية! ΔT 48°م تشققات أساسات: فارق حراري كبير = تشققات في الأساسات الخرسانية ← ممرات مثالية للنمل الأبيض من التربة. سد Silicone Caulk + حاجز كيميائي. CaCO₃ رطوبة أرضية: آبار جوفية ترتفع ← رطوبة تحت الأساسات = بيئة مناسبة للنمل رغم جفاف السطح! Pre-Construction Treatment للبيوت الجديدة. مزارع = خشب: مزارع ألبان تستخدم أسوار وحظائر خشبية = مصدر جذب للنمل في المنطقة. فحص أخشاب. 15-25% سطح = جاف = لا عث. لكن: تحت الأرض = رطوبة CaCO₃ = نمل ينشط تحت! مقارنة: خميس = نمل+رطوبة سطحية. الخرج = نمل+رطوبة أرضية+تشققات ΔT = أعقد تحت الأرض.',
        shortAnswer: 'على عكس [الرش السطحي بدون حاجز تحت-أرضي]، يعتمد بروتوكولنا في خدمة [مكافحة النمل الأبيض] بمدينة [الخرج] على [Pre-Con+Termiticide حاجز+سد تشققات+فحص أخشاب]. ففي ظل [ΔT تشققات+CaCO₃ رطوبة أرضية+مزارع خشب+15-25% سطح]، تتفاقم ظاهرة [ممرات+رطوبة تحت+جذب]. لذا؛ يتدخل فريقنا عبر [حاجز ← سد ← فحص ← حماية].',
        heroSubtitle: 'ΔT تشققات + CaCO₃ رطوبة أرضية + مزارع خشب — Pre-Con!',
    },
    pricing: [
        { type: 'فحص + رش سطحي', unit: 'بيت', minPrice: 200, maxPrice: 420, time: '2-3 ساعات' },
        { type: 'حاجز كيميائي (حقن)', unit: 'متر طولي', minPrice: 30, maxPrice: 65, time: '1-2 يوم' },
        { type: 'Pre-Construction', unit: 'م²', minPrice: 8, maxPrice: 18, time: 'قبل البناء' },
        { type: 'سنوي (فحص+حماية)', unit: 'سنة', minPrice: 500, maxPrice: 1000, time: '2 فحص+حماية' },
    ],
    faq: [
        { question: 'ليش نمل أبيض بالخرج رغم الجفاف؟', answer: 'السطح جاف لكن: CaCO₃ رطوبة أرضية تحت الأساسات = بيئة نمل تحت الأرض.' },
        { question: 'كيف يدخل النمل من التشققات بالخرج؟', answer: 'ΔT 48°م = تشققات أساسات = ممرات جاهزة. سد Silicone + حاجز كيميائي.' },
        { question: 'كم تكلفة مكافحة نمل أبيض بالخرج مقارنة بخميس؟', answer: 'متقاربة — لكن الخرج: حاجز تحت-أرضي أعمق (رطوبة أعمق).' },
        { question: 'هل Pre-Construction ضروري بالخرج؟', answer: 'CaCO₃ رطوبة أرضية = النمل تحت. Pre-Con أرخص 10× من العلاج بعد البناء.' },
        { question: 'هل مزارع الخرج تجذب النمل؟', answer: 'حظائر+أسوار خشبية = مصدر جذب في المنطقة. فحص أخشاب دوري.' },
    ],
    expertTips: [
        'Pre-Con — أرخص 10× من العلاج.',
        'سد تشققات ΔT — ممرات نمل.',
        'حاجز كيميائي عميق — رطوبة أرضية.',
        'فحص أخشاب مزارع — مصدر جذب.',
        'سطح جاف لا يعني أمان — تحت رطب!',
    ],
    warnings: [
        'ΔT تشققات + رطوبة أرضية = النمل يصل بدون أن تراه — YMYL.',
        'Pre-Con متأخر = علاج بعد البناء أغلى 10× — حقن+تكسير.',
        'مزارع خشبية قرب بيتك = مصدر جذب مستمر — فحص سنوي.',
    ],
    trustAnchors: [
        { ...GOV.SFDA, role: 'تسجيل المبيدات — نظام غد' },
        { ...GOV.BALADI, role: 'ترخيص شركات المكافحة' },
        { entity: AMANA.RIYADH.entity, url: AMANA.RIYADH.url, role: 'اشتراطات أمانة الرياض' },
    ],
    expertReviewer: EXPERTS.ALJUND,
    expertCitations: [
        { expert: EXPERTS.ALJUND.name, quote: 'نمل الخرج: تشققات ΔT+رطوبة CaCO₃ أرضية. Pre-Con. السطح جاف ≠ أمان.', source: 'أبحاث سموم — نمل صحراوي' },
    ],
    saudiRegulations: [REGULATIONS.GHAD_SYSTEM],
    verificationBadges: [{ badge: '✔️ مكافحة نمل مرخصة', authority: 'بلدي + SFDA', icon: 'shield-check' }],
    equipment: [
        { name: 'Termiticide حقن', use: 'حاجز كيميائي تحت-أرضي' },
        { name: 'Silicone Caulk', use: 'سد تشققات ΔT — ممرات' },
        { name: 'Monitoring Stations', use: 'مراقبة — كشف مبكر' },
    ],
    commonConcerns: [
        { concern: 'جاف = لا نمل.', solution: 'رطوبة CaCO₃ تحت الأرض.' },
        { concern: 'رش سطحي.', solution: 'النمل تحت. حاجز عميق.' },
    ],
    consumerEducation: [
        { myth: 'جاف = آمن.', truth: 'تحت الأرض رطب. CaCO₃.' },
        { myth: 'بعد البناء.', truth: 'Pre-Con أرخص 10×.' },
    ],
    relatedServices: [
        { slug: 'pest-control', context: 'حشرات', priority: 1 },
        { slug: 'pesticide-spraying', context: 'رش مبيدات', priority: 2 },
        { slug: 'water-insulation', context: 'عزل مائي', priority: 3 },
        { slug: 'foam-insulation', context: 'فوم', priority: 4 },
        { slug: 'cleaning', context: 'تنظيف', priority: 5 },
        { slug: 'bird-control', context: 'طيور', priority: 6 },
        { slug: 'bedbugs-control', context: 'بق', priority: 7 },
    ],
};
