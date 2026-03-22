import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../gov-references';

export const override: PageOverride = {
    meta: {
        title: 'مكافحة بق بعنيزة — 48°م تكاثر سريع+10-20% يجف=بخار مثالي+Nafud شقوق — بخار+مبيد! (2026)',
        description: 'مكافحة بق عنيزة. 48°م تكاثر سريع! 10-20% بخار مثالي. Nafud شقوق. بخار 56°م+مبيد+HEPA+شفط.',
        h1: 'مكافحة بق بعنيزة — حرارة+بخار مثالي!',
        keywords: ['مكافحة بق بعنيزة', 'مكافحة بق الفراش عنيزة', 'شركة مكافحة بق عنيزة'],
    },
    content: {
        introduction: 'بق عنيزة = 48°م يسرّع+10-20% يُجفف = بخار مثالي! 48°م تكاثر: حرارة شديدة تسرّع دورة حياة البق صيفاً ← مستعمرات أسرع. لكن: ميزة! بخار 56°م يقتل بسهولة في بيئة حارة أصلاً. 10-20% يجف: بعد البخار يجف فوراً! عكس الباحة (6-10h = عفن بعد). عنيزة = بيئة مثالية للبخار. Nafud شقوق: رمل SiO₂ يتراكم بشقوق الأثاث ← البق يختبئ بين حبات الرمل. HEPA شفط عميق. نخيل 8M: 8 مليون نخلة بالقصيم = مأوى. مقارنة: الباحة = 60-85%+6-10h = بخار كارثة! عنيزة = 10-20%+48°م = بخار مثالي!',
        shortAnswer: 'على عكس [المبيد فقط]، يعتمد بروتوكولنا في خدمة [مكافحة البق] بمدينة [عنيزة] على [بخار 56°م+مبيد+HEPA شفط+يجف فوراً]. ففي ظل [48°م+10-20%+Nafud شقوق+نخيل]، تتفاقم ظاهرة [تكاثر سريع+اختباء]. لكن ميزة: [بخار مثالي+يجف فوراً].',
        heroSubtitle: '48°م + 10-20% = بخار مثالي يقتل ويجف فوراً!',
    },
    pricing: [
        { type: 'غرفة واحدة', unit: 'غرفة', minPrice: 120, maxPrice: 250, time: '1-2h — يجف فوراً!' },
        { type: 'شقة (3 غرف)', unit: 'شقة', minPrice: 250, maxPrice: 520, time: '3-4h' },
        { type: 'فيلا', unit: 'فيلا', minPrice: 400, maxPrice: 800, time: '4-6h' },
        { type: '2-3 جلسات ضمان', unit: 'باقة', minPrice: 350, maxPrice: 700, time: '3 جلسات' },
    ],
    faq: [
        { question: 'ليش البخار المثالي بعنيزة؟', answer: '10-20% = يجف فوراً! بخار يقتل+لا عفن. عكس الباحة.' },
        { question: 'ليش 48°م تسرّع البق بعنيزة؟', answer: 'حرارة = دورة حياة أقصر. لكن: بخار 56°م يقتل.' },
        { question: 'ليش Nafud مشكلة للبق بعنيزة؟', answer: 'رمل بشقوق = مخبأ. HEPA شفط عميق.' },
        { question: 'كم تكلفة بق بعنيزة مقابل الباحة؟', answer: 'أرخص 20% — لا Dehumidifier! يجف فوراً.' },
        { question: 'كم جلسة بق بعنيزة؟', answer: '2-3 جلسات. أسبوعين بين كل جلسة. ضمان شهرين.' },
    ],
    expertTips: [
        'بخار 56°م — مثالي بعنيزة!',
        'HEPA شفط — Nafud شقوق.',
        'يجف فوراً — لا Dehumidifier!',
        '2-3 جلسات — بيض.',
        'مبيد — باقي Residual.',
    ],
    warnings: [
        '48°م × صيف = تكاثر سريع — بخار فوري.',
        'Nafud شقوق + مبيد سطحي = البق ينجو — HEPA.',
        'مبيد فقط بدون بخار = بيض ينجو — أسبوعين.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص شركات المكافحة' },
        { entity: AMANA.QASSIM.entity, url: AMANA.QASSIM.url, role: 'اشتراطات أمانة القصيم' },
    ],
    expertReviewer: EXPERTS.ALKHODAIRY,
    expertCitations: [
        { expert: EXPERTS.ALKHODAIRY.name, quote: 'بق عنيزة: 48°م+10-20% = بخار مثالي. HEPA Nafud.', source: 'حشرات المملكة — بق القصيم' },
    ],
    saudiRegulations: [REGULATIONS.GHAD_SYSTEM],
    verificationBadges: [{ badge: '✔️ مكافحة بق مرخصة', authority: 'بلدي + SFDA', icon: 'shield-check' }],
    equipment: [
        { name: 'بخار 56°م', use: 'بيض+بالغ — مثالي' },
        { name: 'HEPA شفط عميق', use: 'Nafud — شقوق' },
        { name: 'مبيد Residual', use: 'باقي — حماية' },
    ],
    commonConcerns: [
        { concern: 'مبيد يكفي.', solution: 'بخار مثالي بعنيزة! يجف فوراً.' },
        { concern: 'بخار = عفن.', solution: '10-20% = يجف 15 دقيقة!' },
    ],
    consumerEducation: [
        { myth: 'بخار خطر.', truth: 'بعنيزة = مثالي. 10-20%.' },
        { myth: 'مرة واحدة.', truth: '2-3 جلسات. بيض.' },
    ],
    relatedServices: [
        { slug: 'pest-control', context: 'حشرات', priority: 1 },
        { slug: 'pesticide-spraying', context: 'رش', priority: 2 },
        { slug: 'cleaning', context: 'تنظيف', priority: 3 },
        { slug: 'sofa-cleaning', context: 'كنب', priority: 4 },
        { slug: 'carpet-cleaning', context: 'سجاد', priority: 5 },
        { slug: 'steam-cleaning', context: 'بخار', priority: 6 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 7 },
    ],
};
