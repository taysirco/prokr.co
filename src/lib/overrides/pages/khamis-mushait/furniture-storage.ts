import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../gov-references';

export const override: PageOverride = {
    meta: {
        title: 'تخزين أثاث بخميس مشيط — Dehumidifier 24/7 إلزامي! 60-85% عفن+عث — أغلى تخزين (2026)',
        description: 'تخزين أثاث خميس مشيط. Dehumidifier 24/7! 60-85% عفن+عث. Anti-Fungal+Anti-Mite. أغلى تخزين بالمنطقة.',
        h1: 'تخزين أثاث بخميس مشيط — Dehumidifier إلزامي!',
        keywords: ['تخزين أثاث خميس مشيط', 'تخزين عفش بخميس مشيط', 'شركة تخزين أثاث خميس مشيط'],
    },
    content: {
        introduction: 'تخزين خميس مشيط = من أغلى التخزين بالمملكة! لأن 60-85% رطوبة + ضباب 200 يوم = Dehumidifier يعمل 24/7 (بدونه = عفن خلال أسبوع). Anti-Fungal رش دوري كل شهرين. Anti-Mite — عث يستعمر حشوات الأثاث المنجّد الرطبة. Silica Gel في كل صندوق. الأمطار الموسمية تزيد رطوبة المستودع — عزل مائي إلزامي. تكثّف على جدران المستودع شتاءً (0-5°م) = رطوبة إضافية. مقارنة: عنيزة = لا Dehumidifier + لا Anti-Fungal + لا Anti-Mite = أرخص 40-50%! الخلاصة: بدون هذه الاحتياطات = أثاث يعفن خلال أسابيع.',
        shortAnswer: 'على عكس [المستودع بدون تحكم بالرطوبة]، يعتمد بروتوكولنا في خدمة [تخزين الأثاث] بمدينة [خميس مشيط] على [Dehumidifier 24/7+Anti-Fungal+Anti-Mite+عزل مائي]. ففي ظل [60-85%+ضباب 200 يوم+أمطار+تكثّف شتوي]، تتفاقم ظاهرة [عفن+عث+انتفاخ+تلف]. لذا؛ يتدخل فريقنا عبر [تجفيف دائم ← تعقيم ← عزل ← Silica].',
        heroSubtitle: 'Dehumidifier 24/7 + Anti-Fungal/Mite — أغلى لكن ضروري!',
    },
    pricing: [
        { type: 'غرفة صغيرة (3×3)', unit: 'شهر', minPrice: 180, maxPrice: 380, time: 'شهري' },
        { type: 'غرفة كبيرة (4×5)', unit: 'شهر', minPrice: 320, maxPrice: 650, time: 'شهري' },
        { type: 'سنوي (خصم 15%)', unit: 'سنة', minPrice: 1900, maxPrice: 3800, time: 'سنوي' },
        { type: 'عزل مائي + إحكام', unit: 'إضافي', minPrice: 200, maxPrice: 400, time: 'لمرة واحدة' },
    ],
    faq: [
        { question: 'كم يكلف تخزين بخميس مقارنة بعنيزة؟', answer: 'أغلى 40-50%! Dehumidifier+Anti-Fungal+Anti-Mite = تكلفة إضافية. 180-650 مقابل 110-420.' },
        { question: 'هل Dehumidifier ضروري بالمستودع بخميس؟', answer: 'إلزامي! بدونه = عفن خلال أسبوع. 60-85% = لا خيار.' },
        { question: 'كيف أحمي الأثاث من العفن بالتخزين بخميس؟', answer: 'Dehumidifier 24/7 + Anti-Fungal كل شهرين + Silica Gel في كل صندوق.' },
        { question: 'هل المستودع يحتاج عزل مائي بخميس؟', answer: 'إلزامي! أمطار موسمية + تكثّف = رطوبة إضافية تُتلف الأثاث.' },
        { question: 'متى أفحص الأثاث المخزّن بخميس مشيط؟', answer: 'كل شهرين Anti-Fungal+Anti-Mite. فحص بصري شهري. لا تترك بدون Dehumidifier.' },
    ],
    expertTips: [
        'Dehumidifier 24/7 — بدونه عفن أسبوع.',
        'Anti-Fungal كل شهرين — ضباب+رطوبة.',
        'Anti-Mite — عث في حشوات رطبة.',
        'عزل مائي — أمطار+تكثّف.',
        'Silica Gel في كل صندوق — حماية إضافية.',
    ],
    warnings: [
        'مستودع بدون Dehumidifier + 60-85% = عفن أسود خلال أسبوع — خسارة كاملة.',
        'بدون عزل مائي + أمطار = تسرب يُتلف أثاث بآلاف الريالات.',
        'بدون Anti-Mite = عث يستعمر كل حشوة — رائحة+حساسية.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص المستودعات' },
        { entity: AMANA.ASIR.entity, url: AMANA.ASIR.url, role: 'اشتراطات أمانة عسير' },
    ],
    expertReviewer: EXPERTS.ALMOHAIMED,
    expertCitations: [
        { expert: EXPERTS.ALMOHAIMED.name, quote: 'تخزين خميس: Dehumidifier 24/7 إلزامي. 60-85% = عفن أسبوع بدونه.', source: 'نصائح هندسية — تخزين جبلي' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ مستودع مرخص', authority: 'بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'Dehumidifier صناعي 24/7', use: 'تحكم رطوبة — بدونه عفن أسبوع' },
        { name: 'Anti-Fungal+Anti-Mite', use: 'حماية من عفن وعث' },
        { name: 'عزل مائي PU', use: 'حماية من أمطار+تكثّف' },
    ],
    commonConcerns: [
        { concern: 'غالي.', solution: 'بدون Dehumidifier = خسارة أثاث 10000+ ريال. أرخص بكثير.' },
        { concern: 'مثل الباحة.', solution: 'متشابه. نفس الفيزياء الجبلية.' },
    ],
    consumerEducation: [
        { myth: 'مستودع عادي يكفي.', truth: '60-85% = عفن أسبوع. Dehumidifier إلزامي.' },
        { myth: 'تخزين خميس مثل عنيزة.', truth: 'أغلى 40-50%. كل أداة حماية مطلوبة.' },
    ],
    relatedServices: [
        { slug: 'furniture-moving', context: 'نقل عفش', priority: 1 },
        { slug: 'furniture-cleaning', context: 'تنظيف أثاث', priority: 2 },
        { slug: 'pest-control', context: 'حشرات — عث', priority: 3 },
        { slug: 'cleaning', context: 'تنظيف', priority: 4 },
        { slug: 'dabab', context: 'دباب', priority: 5 },
        { slug: 'carpet-cleaning', context: 'سجاد', priority: 6 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 7 },
    ],
};
