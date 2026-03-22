import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../gov-references';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف بالبخار بخميس مشيط — بخار+Anti-Fungal+Anti-Mite = ثلاثي! تجفيف 4-8h (2026)',
        description: 'تنظيف بالبخار خميس مشيط. بخار 150°م+Anti-Fungal+Anti-Mite. 60-85% عفن+عث. تجفيف 4-8h Dehumidifier.',
        h1: 'تنظيف بالبخار بخميس مشيط — بخار+تعقيم+تجفيف',
        keywords: ['تنظيف بالبخار خميس مشيط', 'تنظيف بخار بخميس مشيط', 'شركة تنظيف بالبخار خميس مشيط'],
    },
    content: {
        introduction: 'البخار في خميس مشيط = أقوى سلاح لكن يحتاج ملحقات! البخار 150°م: يقتل بكتيريا+عث+بق على السطح. لكن بخميس: 60-85% = البخار يضيف رطوبة على بيئة رطبة أصلاً ← يحتاج Dehumidifier فوري بعد البخار. Anti-Fungal: البخار يقتل العفن على السطح لكن الجذور عميقة. Anti-Fungal يخترق المسام والألياف. البخار+Anti-Fungal معاً = ثنائي قاتل. Anti-Mite: العث داخل الحشوات لا يصله البخار السطحي. Anti-Mite بعد البخار يصل الحشوة. تجفيف 4-8 ساعات: البخار يُرطّب + 60-85% = السطح لا يجف. Dehumidifier إلزامي. مقارنة: عنيزة = بخار يكفي وحده + تجفيف 20 دقيقة + لا Dehumidifier + أرخص 25%. خميس = بخار + ملحقات.',
        shortAnswer: 'على عكس [البخار وحده بدون Anti-Fungal ولا Dehumidifier]، يعتمد بروتوكولنا في خدمة [التنظيف بالبخار] بمدينة [خميس مشيط] على [بخار 150°م+Anti-Fungal+Anti-Mite+Dehumidifier]. ففي ظل [60-85%+عفن عميق+عث حشوات+تجفيف بطيء]، تتفاقم ظاهرة [رطوبة إضافية+عفن يرجع+عث يبقى]. لذا؛ يتدخل فريقنا عبر [بخار ← تعقيم ← ضد عث ← تجفيف Dehumidifier].',
        heroSubtitle: 'بخار + Anti-Fungal + Anti-Mite + Dehumidifier — ثلاثي!',
    },
    pricing: [
        { type: 'غرفة', unit: 'غرفة', minPrice: 80, maxPrice: 170, time: '1-2h + تجفيف 4-8h' },
        { type: 'شقة كاملة', unit: 'شقة', minPrice: 250, maxPrice: 500, time: '3-5h + تجفيف' },
        { type: '+ Anti-Fungal/Mite', unit: 'إضافي', minPrice: 60, maxPrice: 130, time: '1h' },
        { type: 'ربع سنوي (4 زيارات)', unit: 'سنة', minPrice: 350, maxPrice: 700, time: '4 زيارات' },
    ],
    faq: [
        { question: 'هل البخار يكفي وحده بخميس مشيط؟', answer: 'لا! البخار يقتل السطح. لكن: عفن عميق يحتاج Anti-Fungal. عث حشوات يحتاج Anti-Mite. تجفيف يحتاج Dehumidifier.' },
        { question: 'ليش تجفيف بخميس أبطأ بعد البخار؟', answer: 'البخار يُرطّب + 60-85% أصلاً = لا يجف. 4-8h مع Dehumidifier. عنيزة: 20 دقيقة.' },
        { question: 'كم تكلفة بخار بخميس مقارنة بعنيزة؟', answer: 'أغلى 25% — Anti-Fungal+Anti-Mite+Dehumidifier. 80-500 مقابل 65-400.' },
        { question: 'هل البخار يقتل العفن بخميس مشيط؟', answer: 'يقتل السطح فقط. الجذور عميقة. Anti-Fungal+بخار = ثنائي يقتل السطح+العمق.' },
        { question: 'متى أفضل وقت للبخار بخميس مشيط؟', answer: 'صباحاً — يومان جفاف أفضل. ضباب مساءً يُبطئ. Dehumidifier يوم كامل.' },
    ],
    expertTips: [
        'بخار 150°م — يقتل سطحياً.',
        'Anti-Fungal بعد البخار — يقتل جذور العفن.',
        'Anti-Mite — يصل حشوات لا يصلها البخار.',
        'Dehumidifier فوري — بدونه عفن جديد!',
        'لا بخار بدون تجفيف — يزيد الرطوبة.',
    ],
    warnings: [
        'بخار بدون Dehumidifier + 60-85% = عفن جديد 72 ساعة — أسوأ!',
        'بخار سطحي بدون Anti-Fungal = العفن يرجع أسبوعين.',
        'عث داخل حشوات بدون Anti-Mite = حساسية مستمرة.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص شركات التنظيف' },
        { entity: AMANA.ASIR.entity, url: AMANA.ASIR.url, role: 'اشتراطات أمانة عسير' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALMISNID.name, quote: 'بخار خميس: يحتاج Anti-Fungal+Anti-Mite+Dehumidifier. البخار وحده لا يكفي بالرطوبة.', source: 'نصائح هندسية — تنظيف جبلي' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ تنظيف بخار مرخص', authority: 'بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'بخار 150°م', use: 'يقتل بكتيريا+عث+بق سطحياً' },
        { name: 'Anti-Fungal+Anti-Mite', use: 'يقتل عفن+عث عميقاً' },
        { name: 'Dehumidifier', use: 'تجفيف 4-8h — يمنع عفن جديد' },
    ],
    commonConcerns: [
        { concern: 'بخار يكفي.', solution: 'سطحي فقط. Anti-Fungal+Anti-Mite+Dehumidifier.' },
        { concern: 'مثل عنيزة.', solution: '4-8h تجفيف مقابل 20 دقيقة. مختلف تماماً.' },
    ],
    consumerEducation: [
        { myth: 'البخار يقتل كل شيء.', truth: 'سطحي. عفن عميق+عث حشوات = يحتاج ملحقات.' },
        { myth: 'يجف بسرعة.', truth: '4-8h + Dehumidifier. 60-85% = لا يجف بدونه.' },
    ],
    relatedServices: [
        { slug: 'carpet-cleaning', context: 'سجاد — بخار', priority: 1 },
        { slug: 'sofa-cleaning', context: 'كنب — بخار', priority: 2 },
        { slug: 'cleaning', context: 'تنظيف', priority: 3 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف — عفن', priority: 4 },
        { slug: 'councils-cleaning', context: 'مجالس', priority: 5 },
        { slug: 'pest-control', context: 'حشرات', priority: 6 },
        { slug: 'marble-polishing', context: 'رخام', priority: 7 },
    ],
};
