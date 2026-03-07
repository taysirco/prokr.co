import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف واجهات زجاجية بالباحة — ضباب Biofilm + أمطار طحالب + طلع عرعر — أعقد واجهات! (2026)',
        description: 'تنظيف واجهات الباحة. ضباب Biofilm أسرع. أمطار طحالب خضراء. طلع عرعر لزج. 50-75%. Anti-Biofilm+Algicide+HEPA.',
        h1: 'تنظيف واجهات بالباحة — ضباب وأمطار وطحالب — أعقد واجهات!',
        keywords: ['تنظيف واجهات الباحة', 'تنظيف واجهات بالباحة', 'شركة تنظيف واجهات الباحة'],
    },
    content: {
        introduction: 'واجهات الباحة الزجاجية = أعقد واجهات بالمملكة! لماذا؟ أولاً: ضباب 150+ يوم/سنة + 50-75% رطوبة = Biofilm (غشاء بيولوجي) يتكوّن على الزجاج خلال أسبوعين — أسرع مدينة بالمملكة! Anti-Biofilm إلزامي. ثانياً: أمطار موسمية تحمل طحالب خضراء من غابات عرعر ← تنمو على الواجهات الرطبة المظللة. Algicide متخصص. ثالثاً: طلع أشجار عرعر = طبقة لزجة بنية تلتصق بالزجاج الرطب ← تُغذي Biofilm وتُسرّع نموه. HEPA+شطف. مقارنة: عنيزة = لا Biofilm + لا طحالب + ربع سنوي يكفي. الباحة = Biofilm أسبوعين + طحالب + شهري إلزامي = أغلى 40-50%. الزجاج لا يُخدش (لا SiO₂ صحراوي كبير) لكن يتلوث بيولوجياً بسرعة خارقة.',
        shortAnswer: 'على عكس [التنظيف بالماء فقط بدون Anti-Biofilm]، يعتمد بروتوكولنا في خدمة [تنظيف الواجهات] بمدينة [الباحة] على [Anti-Biofilm+Algicide+HEPA+Marine Sealant]. ففي ظل [ضباب 150+ يوم + 50-75% + أمطار طحالب + طلع عرعر]، تتفاقم ظاهرة [Biofilm أسبوعين + طحالب خضراء + التصاق طلع]. لذا؛ يتدخل فريقنا عبر [قتل ← إزالة ← شفط ← حماية] لضمان واجهات شفافة.',
        heroSubtitle: 'ضباب Biofilm + أمطار طحالب + طلع عرعر — أعقد واجهات!',
    },
    pricing: [
        { type: 'واجهة صغيرة (< 50 م²)', unit: 'خدمة', minPrice: 200, maxPrice: 420, time: '3-4 ساعات' },
        { type: 'واجهة كبيرة (100+ م²)', unit: 'خدمة', minPrice: 420, maxPrice: 900, time: '5-8 ساعات' },
        { type: 'شهري (إلزامي بالباحة)', unit: 'شهر', minPrice: 160, maxPrice: 340, time: 'زيارة شهرية' },
        { type: 'سنوي (12 زيارة)', unit: 'سنة', minPrice: 1500, maxPrice: 3200, time: '12 زيارة' },
    ],
    faq: [
        { question: 'كم مرة تحتاج الواجهة تنظيف بالباحة؟', answer: 'شهرياً! Biofilm يتكوّن خلال أسبوعين. عنيزة: ربع سنوي. الباحة 3× أكثر.' },
        { question: 'كيف أمنع Biofilm على الواجهات بالباحة؟', answer: 'Anti-Biofilm بعد كل تنظيف + Marine Sealant يُبطئ النمو. بدونهما = Biofilm خلال أسبوعين.' },
        { question: 'ليش طحالب تنمو على الواجهات بالباحة؟', answer: 'أمطار تحمل أبواغ من غابات عرعر + رطوبة 50-75% + ظل = بيئة مثالية للطحالب الخضراء.' },
        { question: 'كم تكلفة تنظيف واجهات بالباحة مقارنة بعنيزة؟', answer: 'أغلى 40-50% — Anti-Biofilm+Algicide+Marine Sealant+شهري. عنيزة: لا Biofilm+ربع سنوي.' },
        { question: 'هل الزجاج يُخدش بالباحة مثل عنيزة؟', answer: 'لا! الباحة: لا SiO₂ صحراوي = لا Pitting. المشكلة بيولوجية (Biofilm+طحالب) وليست ميكانيكية.' },
    ],
    expertTips: [
        'Anti-Biofilm كل شهر — يتكوّن خلال أسبوعين.',
        'Algicide — طحالب خضراء من غابات عرعر.',
        'Marine Sealant — يُبطئ نمو Biofilm على الزجاج.',
        'HEPA — طلع عرعر لزج يُغذي Biofilm.',
        'شهري إلزامي — ربع سنوي لا يكفي بالباحة.',
    ],
    warnings: [
        'Biofilm × 3 أشهر إهمال = طبقة لا تُزال بالماء — يحتاج Acid Wash (500+ ريال).',
        'طحالب خضراء + ظل = تأكل Sealant الواجهة — تسرب مياه.',
        'طلع عرعر + Biofilm = طبقة مزدوجة تمنع الرؤية — خطر سلامة.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص شركات النظافة' },
        { entity: AMANA.BAHA.entity, url: AMANA.BAHA.url, role: 'اشتراطات واجهات — أمانة الباحة' },
    ],
    expertReviewer: EXPERTS.ALMOHAIMED,
    expertCitations: [
        { expert: EXPERTS.ALMOHAIMED.name, quote: 'واجهات الباحة: أسرع Biofilm بالمملكة. غابات+ضباب = أسبوعين. Anti-Biofilm+Algicide شهري.', source: 'نصائح هندسية — واجهات جبلية' },
    ],
    saudiRegulations: [REGULATIONS.SBC_601],
    verificationBadges: [{ badge: '✔️ واجهات مرخصة', authority: 'بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'Anti-Biofilm', use: 'يقتل غشاء بيولوجي — يتكوّن كل أسبوعين' },
        { name: 'Algicide', use: 'يقتل طحالب خضراء من غابات عرعر' },
        { name: 'Marine Sealant', use: 'يُبطئ نمو Biofilm على الزجاج' },
    ],
    hiddenObjections: [
        { fear: 'مثل خميس.', solution: 'غابات = طحالب إضافية + طلع. أعقد قليلاً.' },
        { fear: 'شهري غالي.', solution: 'ربع سنوي = Biofilm سميك = Acid Wash = أغلى 5×.' },
    ],
    counterNarratives: [
        { myth: 'الواجهات ما تحتاج Anti-Biofilm.', truth: 'ضباب+غابات = أسبوعين = أسرع Biofilm بالمملكة.' },
        { myth: 'مثل عنيزة.', truth: 'عنيزة: لا Biofilm + ربع سنوي. عكس!' },
    ],
    relatedServices: [
        { slug: 'cleaning', context: 'تنظيف', priority: 1 },
        { slug: 'marble-polishing', context: 'رخام', priority: 2 },
        { slug: 'office-cleaning', context: 'مكاتب', priority: 3 },
        { slug: 'villas-cleaning', context: 'فلل', priority: 4 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 5 },
        { slug: 'pest-control', context: 'حشرات غابات', priority: 6 },
        { slug: 'steam-cleaning', context: 'بخار', priority: 7 },
    ],
};
