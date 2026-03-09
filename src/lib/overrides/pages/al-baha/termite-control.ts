import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'مكافحة نمل أبيض بالباحة — 200 يوم ضباب خشب رطب+غابة عرعر+مطر — Termidor+DPC+Anti-Humidity! (2026)',
        description: 'مكافحة نمل أبيض الباحة. 200 يوم ضباب خشب رطب! غابة عرعر سيللوز. مطر رطوبة. Termidor SC+DPC جبلي.',
        h1: 'مكافحة نمل أبيض بالباحة — خشب رطب+غابة!',
        keywords: ['مكافحة نمل أبيض بالباحة', 'مكافحة أرضة الباحة', 'شركة مكافحة نمل أبيض بالباحة'],
    },
    content: {
        introduction: 'نمل أبيض الباحة = خشب رطب جنة! 200 يوم ضباب: رطوبة 60-85% = خشب رطب = طعام سهل جداً ← مستعمرات ضخمة. أسوأ بيئة للنمل الأبيض بالمملكة (بعد جازان). غابة عرعر: أشجار عرعر = سيللوز وفير ← النمل يأتي من الغابة للمنازل القريبة! رغدان/المندق = الأخطر. أمطار: مطر = رطوبة أرضية ← أساسات رطبة = اختراق. DPC جبلي. PVAc خشب: خشب أبنية ينتفخ بالرطوبة = ضعيف ← سهل على النمل. Anti-Humidity. Termidor SC: يقتل المستعمرة 5-8 سنوات. مقارنة: بريدة = نخيل 8M سيللوز+ΔT+لكن جاف 10-20% = خشب صلب. الباحة = خشب رطب+غابة = أخطر.',
        shortAnswer: 'على عكس [الرش السطحي]، يعتمد بروتوكولنا في خدمة [مكافحة النمل الأبيض] بمدينة [الباحة] على [Termidor SC+حقن أساسات+DPC جبلي+Anti-Humidity]. ففي ظل [200 يوم ضباب+غابة عرعر+مطر+PVAc]، تتفاقم ظاهرة [خشب رطب+غابة قريبة+رطوبة أرضية]. لذا؛ يتدخل فنيونا عبر [Termidor ← حقن ← DPC ← Anti-Humidity].',
        heroSubtitle: 'خشب رطب + غابة عرعر + مطر — Termidor+DPC جبلي!',
    },
    pricing: [
        { type: 'فحص + شقة', unit: 'شقة', minPrice: 200, maxPrice: 420, time: '2-3h' },
        { type: 'فيلا (حقن أساسات)', unit: 'فيلا', minPrice: 500, maxPrice: 1000, time: '1-2 يوم' },
        { type: 'قريب من الغابة (رغدان)', unit: 'ترقية', minPrice: 200, maxPrice: 400, time: '+ معالجة' },
        { type: 'ضمان 5 سنوات', unit: 'باقة', minPrice: 800, maxPrice: 1600, time: 'فحص سنوي' },
    ],
    faq: [
        { question: 'ليش نمل أبيض الباحة الأخطر؟', answer: '200 يوم ضباب = خشب رطب = جنة. غابة عرعر = مصدر. الأسوأ بعد جازان.' },
        { question: 'هل الغابة مصدر نمل بالباحة؟', answer: 'عرعر سيللوز ← ينتقل للمنازل. رغدان/المندق الأخطر.' },
        { question: 'كم تكلفة نمل بالباحة مقابل بريدة؟', answer: 'أغلى 20-30% — Anti-Humidity+DPC جبلي. بريدة: خشب صلب.' },
        { question: 'هل المطر يزيد المشكلة بالباحة؟', answer: 'رطوبة أرضية = أساسات رطبة = اختراق. DPC.' },
        { question: 'كم يدوم Termidor بالباحة؟', answer: '5-8 سنوات. رطوبة = فحص سنوي.' },
    ],
    expertTips: [
        'Termidor SC — مستعمرة كاملة.',
        'DPC جبلي — رطوبة أرضية+مطر.',
        'Anti-Humidity — PVAc خشب.',
        'فحص رغدان — غابة قريبة.',
        'SBC قبل بناء — إلزامي.',
    ],
    warnings: [
        '200 يوم ضباب + خشب رطب = مستعمرة ضخمة — Termidor YMYL.',
        'غابة + بدون حاجز = نمل ينتقل ← هيكل.',
        'PVAc + رطوبة = خشب ضعيف ← سهل للنمل.',
    ],
    trustAnchors: [
        { ...GOV.SBC, role: 'كود البناء — معالجة قبل البناء' },
        { ...GOV.BALADI, role: 'ترخيص شركات المكافحة' },
        { entity: AMANA.BAHA.entity, url: AMANA.BAHA.url, role: 'اشتراطات أمانة الباحة' },
    ],
    expertReviewer: EXPERTS.ALJUND,
    expertCitations: [
        { expert: EXPERTS.ALJUND.name, quote: 'نمل الباحة: خشب رطب+غابة. الأخطر بعد جازان. Termidor+DPC.', source: 'موسوعة أخطاء — نمل أبيض جبلي' },
    ],
    saudiRegulations: [REGULATIONS.SBC_601, REGULATIONS.GHAD_SYSTEM],
    verificationBadges: [{ badge: '✔️ مكافحة نمل مرخصة', authority: 'بلدي + SBC', icon: 'shield-check' }],
    equipment: [
        { name: 'Termidor SC', use: 'مستعمرة — 5-8 سنوات' },
        { name: 'DPC جبلي', use: 'رطوبة أرضية+مطر' },
        { name: 'Anti-Humidity Sealing', use: 'PVAc — خشب' },
    ],
    hiddenObjections: [
        { fear: 'رش سطحي.', solution: 'مستعمرة تحت. Termidor.' },
        { fear: 'مثل بريدة.', solution: 'خشب رطب+غابة ≠ نخيل.' },
    ],
    counterNarratives: [
        { myth: 'مرة واحدة.', truth: 'فحص سنوي. رطوبة.' },
        { myth: 'لا نمل بالجبل.', truth: 'غابة عرعر = مصدر!' },
    ],
    relatedServices: [
        { slug: 'pest-control', context: 'حشرات', priority: 1 },
        { slug: 'pesticide-spraying', context: 'رش', priority: 2 },
        { slug: 'water-insulation', context: 'مائي', priority: 3 },
        { slug: 'roof-insulation', context: 'أسطح', priority: 4 },
        { slug: 'foam-insulation', context: 'فوم', priority: 5 },
        { slug: 'furniture-storage', context: 'تخزين', priority: 6 },
        { slug: 'cleaning', context: 'تنظيف', priority: 7 },
    ],
};
