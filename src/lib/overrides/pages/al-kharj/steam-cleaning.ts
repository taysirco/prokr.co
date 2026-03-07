import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف بالبخار بالخرج — NH₃ بخار يكسّر+CaCO₃ Steam Descale+SiO₂ — Steam 150°م! (2026)',
        description: 'تنظيف بخار الخرج. بخار 150°م يكسّر بلمرة حيوانية NH₃! Steam Descale CaCO₃. SiO₂ يرفع. تجفيف 15 دقيقة!',
        h1: 'تنظيف بالبخار بالخرج — بخار يكسّر NH₃!',
        keywords: ['تنظيف بالبخار الخرج', 'تنظيف بخار بالخرج', 'شركة تنظيف بالبخار الخرج'],
    },
    content: {
        introduction: 'البخار بالخرج = سلاح ضد البلمرة الحيوانية! بخار 150°م يكسّر بلمرة NH₃: حرارة البخار تُكسّر الروابط الحيوانية التي يُخلّفها NH₃ من مزارع الألبان ← يُحرّر الجزيئات ← HEPA يسحبها. أفضل من Enzymatic للأسطح الصلبة. Steam Descale: بخار يُلين CaCO₃ 450ppm = أسهل إزالة. أقل مواد كيميائية. SiO₂ يرفع: البخار يرفع حبيبات الرمل من الألياف ← HEPA يسحب ← لا خدش. تجفيف: 15-25% = 10-15 دقيقة! أسرع تجفيف بعد البخار بالمملكة. لا عفن لا عث. مقارنة: خميس = بخار+Anti-Fungal+Anti-Mite+4-8h تجفيف. الخرج = بخار يكسّر NH₃+10 دقيقة = أبسط 40%.',
        shortAnswer: 'على عكس [البخار بدون HEPA الذي لا يسحب NH₃ المُحرّر]، يعتمد بروتوكولنا في خدمة [التنظيف بالبخار] بمدينة [الخرج] على [Steam 150°م+HEPA+RO+Descale]. ففي ظل [NH₃ بلمرة+CaCO₃ 450ppm+SiO₂+15-25%]، تتفاقم ظاهرة [بلمرة+كلس+رمل]. لذا؛ يتدخل فريقنا عبر [بخار ← يكسّر ← HEPA يسحب ← 10 دقيقة] — ميزة: لا عفن!',
        heroSubtitle: 'بخار 150°م يكسّر NH₃ + Steam Descale — 10 دقيقة تجفيف!',
    },
    pricing: [
        { type: 'غرفة واحدة', unit: 'غرفة', minPrice: 70, maxPrice: 140, time: '30-60 دقيقة + 10 دقيقة' },
        { type: 'شقة كاملة', unit: 'شقة', minPrice: 200, maxPrice: 400, time: '2-3h + 15 دقيقة' },
        { type: 'فيلا', unit: 'فيلا', minPrice: 400, maxPrice: 800, time: '4-6h' },
        { type: 'شهري (4 زيارات)', unit: 'شهر', minPrice: 350, maxPrice: 700, time: '4 زيارات' },
    ],
    faq: [
        { question: 'ليش البخار أفضل من الشامبو بالخرج؟', answer: '150°م يكسّر بلمرة حيوانية NH₃. الشامبو لا يصل الروابط. + Steam Descale CaCO₃.' },
        { question: 'كم يستغرق التجفيف بعد البخار بالخرج؟', answer: '10-15 دقيقة! 15-25% = أسرع تجفيف بالمملكة. خميس: 4-8h.' },
        { question: 'كم تكلفة بخار بالخرج مقارنة بخميس؟', answer: 'أرخص 35-40%! لا Anti-Fungal+Anti-Mite+10 دقيقة تجفيف.' },
        { question: 'هل البخار يزيل كلس بالخرج؟', answer: 'Steam Descale يُلين CaCO₃ = أسهل إزالة. أقل مواد كيميائية.' },
        { question: 'هل البخار يسبب عفن بالخرج؟', answer: 'لا! 15-25% = يجف 10 دقيقة. لا عفن. خميس: 60-85% = عفن.' },
    ],
    expertTips: [
        'Steam 150°م — يكسّر بلمرة NH₃.',
        'HEPA مع البخار — يسحب جزيئات.',
        'Steam Descale — CaCO₃ بدون كيميائي.',
        'RO في البخار — لا كلس جديد.',
        '10 دقيقة تجفيف — ميزة!',
    ],
    warnings: [
        'بخار بدون HEPA = NH₃ يتحرّر في الهواء — حساسية تنفسية.',
        'بخار بماء صنبور = CaCO₃ يترسب بالبخار — RO إلزامي.',
        'بخار على جلد طبيعي = ضرر — اختبار أولاً.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص شركات التنظيف' },
        { entity: AMANA.RIYADH.entity, url: AMANA.RIYADH.url, role: 'اشتراطات أمانة الرياض' },
    ],
    expertReviewer: EXPERTS.ALMOHAIMED,
    expertCitations: [
        { expert: EXPERTS.ALMOHAIMED.name, quote: 'بخار الخرج: 150°م يكسّر بلمرة NH₃. أفعل من Enzymatic للأسطح الصلبة.', source: 'نصائح هندسية' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ تنظيف بخار مرخص', authority: 'بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'Steam 150°م', use: 'يكسّر بلمرة حيوانية NH₃' },
        { name: 'HEPA Extraction', use: 'يسحب SiO₂+NH₃ مُحرّر' },
        { name: 'RO Water Boiler', use: 'لا CaCO₃ في البخار' },
    ],
    hiddenObjections: [
        { fear: 'بخار يسبب عفن.', solution: '15-25% = 10 دقيقة. لا عفن.' },
        { fear: 'مثل الشامبو.', solution: '150°م يكسّر NH₃. الشامبو لا يصل.' },
    ],
    counterNarratives: [
        { myth: 'شامبو أفضل.', truth: '150°م يكسّر NH₃+يُلين CaCO₃.' },
        { myth: 'بخار يتلف.', truth: 'يتلف جلد طبيعي فقط. باقي: آمن.' },
    ],
    relatedServices: [
        { slug: 'carpet-cleaning', context: 'سجاد', priority: 1 },
        { slug: 'sofa-cleaning', context: 'كنب', priority: 2 },
        { slug: 'cleaning', context: 'تنظيف', priority: 3 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 4 },
        { slug: 'councils-cleaning', context: 'مجالس', priority: 5 },
        { slug: 'furniture-cleaning', context: 'أثاث', priority: 6 },
        { slug: 'marble-polishing', context: 'رخام', priority: 7 },
    ],
};
