import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف واجهات زجاجية بخميس مشيط — ضباب Biofilm + أمطار أحماض + 60-85% طحالب — أعقد! (2026)',
        description: 'تنظيف واجهات خميس مشيط. ضباب Biofilm أسبوعين. أمطار أحماض خفيفة. 60-85% طحالب. Anti-Biofilm+Algicide+Marine Sealant.',
        h1: 'تنظيف واجهات بخميس مشيط — ضباب وأمطار وطحالب',
        keywords: ['تنظيف واجهات خميس مشيط', 'تنظيف واجهات بخميس مشيط', 'شركة تنظيف واجهات خميس مشيط'],
    },
    content: {
        introduction: 'واجهات خميس مشيط الزجاجية تواجه تلوثاً بيولوجياً سريعاً! أولاً: ضباب 200 يوم + 60-85% = Biofilm (غشاء بيولوجي) يتكوّن خلال أسبوعين — من أسرع المدن. Anti-Biofilm إلزامي بعد كل تنظيف. ثانياً: أمطار موسمية تحمل أبواغ طحالب ← تنمو على الواجهات الرطبة المظللة كبقع خضراء. Algicide متخصص. ثالثاً: تكثّف شتوي — برد 0-5°م = تكثّف على الزجاج الخارجي ← يُغذي Biofilm. رابعاً: أمطار تحمل أحماض خفيفة من التربة الجبلية ← تآكل Sealant الواجهة ← تسرب مائي. فحص Sealant سنوي. مقارنة: عنيزة = لا Biofilm + ربع سنوي + SiO₂ Pitting فقط. خميس = Biofilm+طحالب+شهري = أغلى 35-45%.',
        shortAnswer: 'على عكس [التنظيف بالماء فقط بدون Anti-Biofilm]، يعتمد بروتوكولنا في خدمة [تنظيف الواجهات] بمدينة [خميس مشيط] على [Anti-Biofilm+Algicide+Marine Sealant+فحص تسريب]. ففي ظل [ضباب 200 يوم+60-85%+أمطار طحالب+تكثّف شتوي]، تتفاقم ظاهرة [Biofilm أسبوعين+طحالب+تآكل Sealant]. لذا؛ يتدخل فريقنا عبر [قتل ← إزالة ← حماية ← فحص].',
        heroSubtitle: 'ضباب Biofilm + أمطار طحالب + تكثّف — شهري إلزامي!',
    },
    pricing: [
        { type: 'واجهة صغيرة (< 50 م²)', unit: 'خدمة', minPrice: 190, maxPrice: 400, time: '3-4 ساعات' },
        { type: 'واجهة كبيرة (100+ م²)', unit: 'خدمة', minPrice: 400, maxPrice: 850, time: '5-8 ساعات' },
        { type: 'شهري (إلزامي)', unit: 'شهر', minPrice: 150, maxPrice: 320, time: 'زيارة شهرية' },
        { type: 'سنوي (12 زيارة)', unit: 'سنة', minPrice: 1400, maxPrice: 3000, time: '12 زيارة' },
    ],
    faq: [
        { question: 'كم مرة تحتاج الواجهة تنظيف بخميس مشيط؟', answer: 'شهرياً! Biofilm يتكوّن خلال أسبوعين. عنيزة: ربع سنوي. خميس 3× أكثر.' },
        { question: 'كيف أمنع Biofilm على الواجهات بخميس؟', answer: 'Anti-Biofilm بعد كل تنظيف + Marine Sealant يُبطئ النمو. بدونهما = Biofilm أسبوعين.' },
        { question: 'ليش طحالب على الواجهات بخميس مشيط؟', answer: 'أمطار تحمل أبواغ + 60-85% + ظل = بيئة مثالية للطحالب الخضراء.' },
        { question: 'كم تكلفة تنظيف واجهات بخميس مقارنة بعنيزة؟', answer: 'أغلى 35-45% — Anti-Biofilm+Algicide+شهري. عنيزة: لا Biofilm+ربع سنوي.' },
        { question: 'هل الأمطار تُتلف Sealant الواجهة بخميس؟', answer: 'أحماض خفيفة في الأمطار الجبلية تُتآكل Sealant ← تسرب مائي. فحص سنوي إلزامي.' },
    ],
    expertTips: [
        'Anti-Biofilm شهري — يتكوّن خلال أسبوعين.',
        'Algicide — طحالب خضراء من أمطار.',
        'Marine Sealant — يُبطئ Biofilm.',
        'فحص Sealant سنوي — أحماض أمطار تُتآكل.',
        'شهري إلزامي — ربع سنوي لا يكفي بخميس.',
    ],
    warnings: [
        'Biofilm × 3 أشهر = طبقة لا تُزال بالماء — Acid Wash (500+ ريال).',
        'طحالب + أمطار = تسرب مائي لو تآكل Sealant.',
        'تكثّف شتوي + Biofilm = طبقة مزدوجة تمنع الرؤية.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص شركات النظافة' },
        { entity: AMANA.ASIR.entity, url: AMANA.ASIR.url, role: 'اشتراطات أمانة عسير' },
    ],
    expertReviewer: EXPERTS.ALMOHAIMED,
    expertCitations: [
        { expert: EXPERTS.ALMOHAIMED.name, quote: 'واجهات خميس: Biofilm أسبوعين+طحالب. Anti-Biofilm+Algicide شهري. من أسرع المدن تلوثاً بيولوجياً.', source: 'نصائح هندسية — واجهات جبلية' },
    ],
    saudiRegulations: [REGULATIONS.SBC_601],
    verificationBadges: [{ badge: '✔️ واجهات مرخصة', authority: 'بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'Anti-Biofilm', use: 'يقتل غشاء بيولوجي — يتكوّن أسبوعين' },
        { name: 'Algicide', use: 'يقتل طحالب خضراء من أمطار' },
        { name: 'Marine Sealant', use: 'يُبطئ نمو Biofilm على الزجاج' },
    ],
    hiddenObjections: [
        { fear: 'مثل الباحة.', solution: 'متشابه — خميس أقل غابات لكن ضباب أكثر. تكلفة متقاربة.' },
        { fear: 'شهري غالي.', solution: 'ربع سنوي = Biofilm سميك = Acid Wash = أغلى 5×.' },
    ],
    counterNarratives: [
        { myth: 'الواجهات ما تحتاج Anti-Biofilm.', truth: 'ضباب 200 يوم = أسبوعين = أسرع Biofilm.' },
        { myth: 'مثل عنيزة.', truth: 'عنيزة: لا Biofilm+ربع سنوي. عكس!' },
    ],
    relatedServices: [
        { slug: 'cleaning', context: 'تنظيف', priority: 1 },
        { slug: 'marble-polishing', context: 'رخام', priority: 2 },
        { slug: 'office-cleaning', context: 'مكاتب', priority: 3 },
        { slug: 'villas-cleaning', context: 'فلل', priority: 4 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 5 },
        { slug: 'pest-control', context: 'حشرات', priority: 6 },
        { slug: 'steam-cleaning', context: 'بخار', priority: 7 },
    ],
};
