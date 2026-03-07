import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'مكافحة نمل أبيض بعنيزة — نخيل 8M سيللوز+ΔT تشقق+CaCO₃ أنفاق — Termidor+SBC! (2026)',
        description: 'مكافحة نمل أبيض عنيزة. 8 مليون نخلة سيللوز! ΔT تشقق أساسات. CaCO₃ أنفاق. Termidor SC+حقن+SBC.',
        h1: 'مكافحة نمل أبيض بعنيزة — نخيل+ΔT+كلس!',
        keywords: ['مكافحة نمل أبيض بعنيزة', 'مكافحة أرضة عنيزة', 'شركة مكافحة نمل أبيض بعنيزة'],
    },
    content: {
        introduction: 'نمل أبيض عنيزة = 8M نخلة سيللوز! نخيل 8 مليون: القصيم أكبر منطقة نخيل بالمملكة ← سيللوز وفير = غذاء = مستعمرات ضخمة تنتقل للمنازل القريبة. مزارع الأندلس/الفيصلية الأخطر. ΔT تشقق أساسات: 48°م نهار ← 25°م ليل = فرق 23°م = خرسانة تتمدد وتنكمش ← تشققات شعرية = بوابة للنمل. Termidor SC يحقن. CaCO₃ أنفاق: ماء عسر يترسب CaCO₃ حول الأنابيب ← يشكّل أنفاق طبيعية يستخدمها النمل للوصول. Descaler. مقارنة: الباحة = خشب رطب+غابة = جنة ≠ نخيل+ΔT. عنيزة = نخيل+ΔT+كلس = مختلف.',
        shortAnswer: 'على عكس [الرش السطحي]، يعتمد بروتوكولنا في خدمة [مكافحة النمل الأبيض] بمدينة [عنيزة] على [Termidor SC+حقن أساسات+معالجة ΔT+Descaler]. ففي ظل [8M نخلة+ΔT تشقق+CaCO₃ أنفاق]، تتفاقم ظاهرة [غذاء+بوابات+أنفاق]. لذا؛ يتدخل فنيونا عبر [Termidor ← حقن ← ΔT Sealant ← Descaler].',
        heroSubtitle: '8 مليون نخلة سيللوز + ΔT تشقق أساسات — Termidor SC!',
    },
    pricing: [
        { type: 'فحص + شقة', unit: 'شقة', minPrice: 180, maxPrice: 370, time: '2-3h' },
        { type: 'فيلا (حقن أساسات)', unit: 'فيلا', minPrice: 450, maxPrice: 900, time: '1-2 يوم' },
        { type: 'قريب من مزارع', unit: 'ترقية', minPrice: 150, maxPrice: 300, time: '+ معالجة' },
        { type: 'ضمان 5 سنوات', unit: 'باقة', minPrice: 700, maxPrice: 1400, time: 'فحص سنوي' },
    ],
    faq: [
        { question: 'ليش نمل أبيض عنيزة كثير؟', answer: '8M نخلة = سيللوز وفير. مزارع قريبة = مستعمرات.' },
        { question: 'كيف النمل يدخل بيتي بعنيزة؟', answer: 'ΔT تشقق أساسات + CaCO₃ أنفاق = بوابات.' },
        { question: 'كم تكلفة نمل بعنيزة مقابل الباحة؟', answer: 'أرخص 10-15% — لا Anti-Humidity. نخيل vs غابة.' },
        { question: 'هل المزارع القريبة خطر أكثر بعنيزة؟', answer: 'مزارع الأندلس/الفيصلية = الأخطر. حقن ← حاجز.' },
        { question: 'كم يدوم Termidor بعنيزة؟', answer: '5-8 سنوات. فحص سنوي بسبب ΔT.' },
    ],
    expertTips: [
        'Termidor SC — مستعمرة كاملة.',
        'حقن أساسات — ΔT تشققات.',
        'Descaler — CaCO₃ أنفاق.',
        'SBC قبل بناء — إلزامي.',
        'فحص مزارع — الأندلس.',
    ],
    warnings: [
        '8M نخلة + منزل قريب = مستعمرة ← هيكل YMYL.',
        'ΔT × سنوات = تشققات ← بوابات — Sealant.',
        'CaCO₃ أنفاق طبيعية = وصول سهل.',
    ],
    trustAnchors: [
        { ...GOV.SBC, role: 'كود البناء — معالجة قبل بناء' },
        { ...GOV.BALADI, role: 'ترخيص شركات المكافحة' },
        { entity: AMANA.QASSIM.entity, url: AMANA.QASSIM.url, role: 'اشتراطات أمانة القصيم' },
    ],
    expertReviewer: EXPERTS.ALJUND,
    expertCitations: [
        { expert: EXPERTS.ALJUND.name, quote: 'نمل عنيزة: 8M نخلة+ΔT+CaCO₃. Termidor+حقن.', source: 'موسوعة أخطاء — نمل أبيض القصيم' },
    ],
    saudiRegulations: [REGULATIONS.SBC_601, REGULATIONS.GHAD_SYSTEM],
    verificationBadges: [{ badge: '✔️ مكافحة نمل مرخصة', authority: 'بلدي + SBC', icon: 'shield-check' }],
    equipment: [
        { name: 'Termidor SC', use: 'مستعمرة — 5-8 سنوات' },
        { name: 'حقن أساسات', use: 'ΔT — تشققات' },
        { name: 'Descaler', use: 'CaCO₃ — أنفاق' },
    ],
    hiddenObjections: [
        { fear: 'رش سطحي.', solution: 'مستعمرة تحت. Termidor.' },
        { fear: 'لا نمل بالقصيم.', solution: '8M نخلة = أكبر!' },
    ],
    counterNarratives: [
        { myth: 'مرة واحدة.', truth: 'فحص سنوي. ΔT.' },
        { myth: 'لا مزارع.', truth: '8M نخلة = سيللوز!' },
    ],
    relatedServices: [
        { slug: 'pest-control', context: 'حشرات', priority: 1 },
        { slug: 'pesticide-spraying', context: 'رش', priority: 2 },
        { slug: 'foam-insulation', context: 'فوم', priority: 3 },
        { slug: 'water-insulation', context: 'مائي', priority: 4 },
        { slug: 'roof-insulation', context: 'أسطح', priority: 5 },
        { slug: 'furniture-storage', context: 'تخزين', priority: 6 },
        { slug: 'cleaning', context: 'تنظيف', priority: 7 },
    ],
};
