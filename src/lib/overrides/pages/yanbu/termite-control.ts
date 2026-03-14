import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'مكافحة نمل أبيض بينبع — 70-85% رطوبة+NaCl أساسات+خشب ميناء — Termidor+VCI! (2026)',
        description: 'مكافحة نمل أبيض ينبع. 70-85% رطوبة! NaCl أساسات. خشب ميناء. Termidor SC+حقن+VCI+SBC.',
        h1: 'مكافحة نمل أبيض بينبع — رطوبة+ميناء+NaCl!',
        keywords: ['مكافحة نمل أبيض ينبع', 'مكافحة أرضة بينبع', 'شركة مكافحة نمل أبيض ينبع'],
    },
    content: {
        introduction: 'نمل أبيض ينبع = رطوبة+ميناء! 70-85% رطوبة: أعلى رطوبة = بيئة مثالية للنمل الأبيض — خشب رطب = طعام سهل = مستعمرات ضخمة. NaCl أساسات: ملح يتراكم حول الأساسات ← رطوبة ملحية تجذب النمل. حقن أساسات + DPC. خشب ميناء: صناديق شحن خشبية من الميناء = مصدر نمل أبيض مُستورد! فحص كل حمولة خشبية. حرارة 45°م: صيف = نشاط. Termidor SC (Fipronil) — يقتل المستعمرة كاملة 5-8 سنوات. مقارنة: بريدة = نخيل 8M سيللوز+ΔT. ينبع = رطوبة+ميناء+NaCl = مختلف.',
        shortAnswer: 'على عكس [الرش السطحي]، يعتمد بروتوكولنا في خدمة [مكافحة النمل الأبيض] بمدينة [ينبع] على [Termidor SC+حقن أساسات+فحص ميناء+DPC]. ففي ظل [70-85% رطوبة+NaCl أساسات+خشب ميناء+حرارة]، تتفاقم ظاهرة [خشب رطب+ميناء مُستورد+رطوبة ملحية]. لذا؛ يتدخل فنيونا عبر [Termidor ← حقن ← فحص خشب ← DPC] — SBC!',
        heroSubtitle: '70-85% رطوبة + NaCl أساسات + خشب ميناء — Termidor+حقن!',
    },
    pricing: [
        { type: 'فحص + شقة', unit: 'شقة', minPrice: 200, maxPrice: 420, time: '2-3h' },
        { type: 'فيلا (حقن أساسات)', unit: 'فيلا', minPrice: 500, maxPrice: 1000, time: '1-2 يوم' },
        { type: 'معالجة قبل بناء (SBC)', unit: 'م²', minPrice: 15, maxPrice: 35, time: '1-3 أيام' },
        { type: 'ضمان 5 سنوات', unit: 'باقة', minPrice: 800, maxPrice: 1600, time: 'فحص سنوي' },
    ],
    faq: [
        { question: 'ليش نمل أبيض ينبع خطير؟', answer: '70-85% = خشب رطب = طعام سهل. ميناء = نمل مُستورد.' },
        { question: 'كيف NaCl يجذب النمل بينبع؟', answer: 'ملح حول أساسات = رطوبة ملحية. حقن+DPC.' },
        { question: 'هل الميناء مصدر نمل بينبع؟', answer: 'صناديق شحن خشبية = نمل مُستورد! فحص كل حمولة.' },
        { question: 'كم يدوم Termidor بينبع؟', answer: '5-8 سنوات. رطوبة = فحص سنوي.' },
        { question: 'كم تكلفة مكافحة نمل بينبع مقابل بريدة؟', answer: 'متقاربة. ينبع: ميناء. بريدة: نخيل 8M.' },
    ],
    expertTips: [
        'Termidor SC — يقتل مستعمرة كاملة.',
        'حقن أساسات — NaCl رطوبة ملحية.',
        'فحص خشب ميناء — مُستورد.',
        'DPC — رطوبة أرضية.',
        'SBC قبل بناء — إلزامي.',
    ],
    warnings: [
        '70-85% + خشب رطب = مستعمرة ضخمة — هيكل YMYL.',
        'ميناء + خشب شحن = نمل مُستورد ← منزل قريب.',
        'بدون DPC + NaCl = رطوبة ملحية تجذب ← اختراق.',
    ],
    trustAnchors: [
        { ...GOV.SBC, role: 'كود البناء — معالجة قبل البناء' },
        { ...GOV.BALADI, role: 'ترخيص شركات المكافحة' },
        { entity: AMANA.MADINAH.entity, url: AMANA.MADINAH.url, role: 'اشتراطات أمانة ينبع' },
    ],
    expertReviewer: EXPERTS.ALJUND,
    expertCitations: [
        { expert: EXPERTS.ALJUND.name, quote: 'نمل أبيض ينبع: 70-85% رطوبة+ميناء+NaCl. Termidor+حقن+DPC.', source: 'موسوعة أخطاء — نمل أبيض ساحلي' },
    ],
    saudiRegulations: [REGULATIONS.SBC_601, REGULATIONS.GHAD_SYSTEM],
    verificationBadges: [{ badge: '✔️ مكافحة نمل أبيض مرخصة', authority: 'بلدي + SBC', icon: 'shield-check' }],
    equipment: [
        { name: 'Termidor SC (Fipronil)', use: 'يقتل مستعمرة — 5-8 سنوات' },
        { name: 'حقن أساسات', use: 'NaCl رطوبة ملحية — حاجز' },
        { name: 'DPC Membrane', use: 'رطوبة أرضية — أساسات' },
    ],
    hiddenObjections: [
        { fear: 'رش سطحي.', solution: 'مستعمرة تحت. Termidor+حقن.' },
        { fear: 'مثل بريدة.', solution: 'رطوبة+ميناء vs نخيل+ΔT.' },
    ],
    consumerEducation: [
        { myth: 'رش عام.', truth: 'Termidor+حقن = مستعمرة.' },
        { myth: 'مرة واحدة.', truth: 'فحص سنوي. رطوبة.' },
    ],
    relatedServices: [
        { slug: 'pest-control', context: 'حشرات', priority: 1 },
        { slug: 'pesticide-spraying', context: 'رش', priority: 2 },
        { slug: 'water-insulation', context: 'مائي', priority: 3 },
        { slug: 'roof-insulation', context: 'أسطح', priority: 4 },
        { slug: 'water-leak-detection', context: 'تسرب', priority: 5 },
        { slug: 'cleaning', context: 'تنظيف', priority: 6 },
        { slug: 'furniture-storage', context: 'تخزين', priority: 7 },
    ],
};
