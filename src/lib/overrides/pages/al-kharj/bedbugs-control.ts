import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../gov-references';

export const override: PageOverride = {
    meta: {
        title: 'مكافحة بق فراش بالخرج — ΔT 48°م تشققات+عمالة مزارع+15-25% جفاف = حرارة! (2026)',
        description: 'مكافحة بق فراش الخرج. ΔT 48°م تشققات يختبئ فيها! عمالة مزارع ألبان=نقل. 15-25% حرارة قاتلة. Steam+Residual.',
        h1: 'مكافحة بق فراش بالخرج — تشققات حرارية وعمالة مزارع',
        keywords: ['مكافحة بق فراش الخرج', 'بق فراش بالخرج', 'شركة مكافحة بق فراش الخرج'],
    },
    content: {
        introduction: 'بق الفراش في الخرج يتصرف بطريقة حرارية مختلفة! ΔT 48°م = تشققات حرارية: فارق حراري كبير = تشققات في الجدران والأثاث ← مخابئ مثالية للبق. التعامل صعب لأنها عميقة. Silicone Caulk لسد التشققات. عمالة مزارع ألبان/دواجن: الخرج عاصمة الألبان = عمالة كثيفة = سكن عمال مشترك ← انتقال بق بين المساكن. مصدر عدوى مستمر. 15-25% جفاف = ميزة! حرارة عالية صيفاً تقتل البق + لا رطوبة = تجفيف أسرع بعد المعالجة. Steam 60°م يقتل فوراً. مقارنة: خميس = رطوبة تحمي البق + عفن + بطيء. الخرج = حرارة تساعد + جفاف = أسرع لكن تشققات أعمق.',
        shortAnswer: 'على عكس [الرش السطحي بدون سد تشققات]، يعتمد بروتوكولنا في خدمة [مكافحة بق الفراش] بمدينة [الخرج] على [Steam 60°م+Residual+Silicone Caulk+فحص عمالة]. ففي ظل [ΔT 48°م تشققات+عمالة مزارع+15-25% جفاف]، تتفاقم ظاهرة [مخابئ عميقة+عدوى مستمرة]. لذا؛ يتدخل فريقنا عبر [بخار ← مبيد ← سد ← فحص].',
        heroSubtitle: 'ΔT تشققات عميقة + عمالة مزارع — Steam+سد!',
    },
    pricing: [
        { type: 'غرفة واحدة', unit: 'غرفة', minPrice: 120, maxPrice: 260, time: '1-2 ساعة' },
        { type: 'شقة كاملة', unit: 'شقة', minPrice: 280, maxPrice: 570, time: '3-4 ساعات' },
        { type: '+ سد تشققات', unit: 'إضافي', minPrice: 80, maxPrice: 170, time: '1-2 ساعة' },
        { type: 'متابعة (3 زيارات)', unit: 'باقة', minPrice: 400, maxPrice: 800, time: '3 زيارات' },
    ],
    faq: [
        { question: 'ليش بق الفراش يختبئ أعمق بالخرج؟', answer: 'ΔT 48°م = تشققات حرارية في الجدران+الأثاث = مخابئ عميقة. الرش السطحي لا يصل.' },
        { question: 'هل عمالة المزارع تنقل بق بالخرج؟', answer: 'سكن عمال مشترك = انتقال بين مساكن. فحص دوري لسكن العمال ضروري.' },
        { question: 'كم تكلفة مكافحة بق بالخرج مقارنة بخميس؟', answer: 'متقاربة — لكن خميس أبطأ (رطوبة). الخرج: حرارة تساعد = أسرع نتيجة.' },
        { question: 'هل الحرارة تقتل البق بالخرج؟', answer: 'Steam 60°م يقتل فوراً. + صيف 50°م = بيئة قاتلة. ميزة! لكن: تشققات تحمي.' },
        { question: 'كيف أمنع عودة بق الفراش بالخرج؟', answer: 'Silicone Caulk سد تشققات + فحص عمالة + Residual. بدون سد = يرجع.' },
    ],
    expertTips: [
        'Steam 60°م — يقتل البق فوراً.',
        'Silicone Caulk — سد تشققات ΔT.',
        'فحص سكن عمال — مصدر عدوى.',
        'Residual في تشققات — حماية طويلة.',
        'حرارة الصيف ميزة — تجفيف أسرع.',
    ],
    warnings: [
        'تشققات بدون سد = البق يختبئ ← يعود بعد أسبوع — دورة مستمرة.',
        'سكن عمال بدون فحص = مصدر عدوى مستمر — لا فائدة من المعالجة.',
        'رش سطحي بدون Steam = البق العميق يبقى — مقاومة.',
    ],
    trustAnchors: [
        { ...GOV.SFDA, role: 'تسجيل المبيدات — نظام غد' },
        { ...GOV.BALADI, role: 'ترخيص المكافحة' },
        { entity: AMANA.RIYADH.entity, url: AMANA.RIYADH.url, role: 'اشتراطات أمانة الرياض' },
    ],
    expertReviewer: EXPERTS.ALKHODAIRY,
    expertCitations: [
        { expert: EXPERTS.ALKHODAIRY.name, quote: 'بق الخرج: تشققات ΔT عميقة + عمالة مزارع. Steam+سد. الحرارة ميزة.', source: 'أبحاث سموم — بق صحراوي' },
    ],
    saudiRegulations: [REGULATIONS.GHAD_SYSTEM],
    verificationBadges: [{ badge: '✔️ مكافحة بق مرخصة', authority: 'بلدي + SFDA', icon: 'shield-check' }],
    equipment: [
        { name: 'Steam 60°م', use: 'يقتل البق + البيض فوراً' },
        { name: 'Residual Insecticide', use: 'حماية طويلة في التشققات' },
        { name: 'Silicone Caulk', use: 'سد تشققات ΔT — مخابئ' },
    ],
    commonConcerns: [
        { concern: 'مثل الرياض.', solution: 'تشققات ΔT أعمق + عمالة مزارع = مختلف.' },
        { concern: 'حرارة تكفي.', solution: 'تشققات تحمي البق من الحرارة. Steam+سد.' },
    ],
    consumerEducation: [
        { myth: 'رش عادي يكفي.', truth: 'تشققات عميقة = الرش لا يصل. Steam+Residual.' },
        { myth: 'مرة واحدة.', truth: 'عمالة مستمرة = عدوى مستمرة. متابعة.' },
    ],
    relatedServices: [
        { slug: 'pest-control', context: 'حشرات', priority: 1 },
        { slug: 'pesticide-spraying', context: 'رش مبيدات', priority: 2 },
        { slug: 'cleaning', context: 'تنظيف', priority: 3 },
        { slug: 'steam-cleaning', context: 'بخار', priority: 4 },
        { slug: 'carpet-cleaning', context: 'سجاد', priority: 5 },
        { slug: 'sofa-cleaning', context: 'كنب', priority: 6 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 7 },
    ],
};
