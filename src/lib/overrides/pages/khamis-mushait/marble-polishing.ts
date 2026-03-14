import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'جلي رخام بخميس مشيط — أمطار تآكل+60-85% عفن Mold Staining+تكثّف — Anti-Fungal! (2026)',
        description: 'جلي رخام خميس مشيط. أمطار تآكل حمضي. 60-85% عفن Mold Staining. تكثّف بقع. Anti-Fungal+Acid Polish+Impregnator.',
        h1: 'جلي رخام بخميس مشيط — أمطار وعفن وتكثّف',
        keywords: ['جلي رخام خميس مشيط', 'جلي رخام بخميس مشيط', 'شركة جلي رخام خميس مشيط'],
    },
    content: {
        introduction: 'رخام خميس مشيط يواجه تحديات جبلية فريدة لا تجدها في الصحراء! أولاً — أمطار حمضية خفيفة: أمطار تحمل أحماض من التربة الجبلية ← تُتآكل سطح الرخام (CaCO₃ + Acid = تآكل). Acid Polish يُعيد اللمعان. ثانياً — عفن Mold Staining: 60-85% + ضباب = عفن Aspergillus يستعمر مسام الرخام ← بقع سوداء/بنية لا تزول بالمسح. Anti-Fungal + Poultice استخلاص. ثالثاً — تكثّف: برد شتوي = تكثّف على الرخام البارد ← بقع رطوبة دائمية. تجفيف+Dehumidifier. رابعاً — لا SiO₂ Pitting: خميس ليست صحراء مكشوفة = لا رمل يحفر. المشكلة بيولوجية وكيميائية وليست ميكانيكية. مقارنة: عنيزة = SiO₂ Pitting + لا عفن. خميس = عفن+أمطار+تكثّف = أعقد 30%.',
        shortAnswer: 'على عكس [الجلي بدون Anti-Fungal الذي يترك بقع عفن]، يعتمد بروتوكولنا في خدمة [جلي الرخام] بمدينة [خميس مشيط] على [Anti-Fungal+Poultice+Acid Polish+Impregnator]. ففي ظل [أمطار حمضية+60-85% عفن+تكثّف شتوي+لا SiO₂]، تتفاقم ظاهرة [تآكل+Mold Staining+بقع رطوبة]. لذا؛ يتدخل فنيونا عبر [تعقيم ← استخلاص ← جلي ← حماية].',
        heroSubtitle: 'أمطار تآكل + عفن Mold Staining + تكثّف — لا SiO₂!',
    },
    pricing: [
        { type: 'غرفة (20 م²)', unit: 'غرفة', minPrice: 200, maxPrice: 420, time: '3-4 ساعات' },
        { type: '+ إزالة Mold Staining', unit: 'غرفة', minPrice: 260, maxPrice: 530, time: '4-5 ساعات' },
        { type: 'فيلا كاملة', unit: 'فيلا', minPrice: 800, maxPrice: 1700, time: '2-3 أيام' },
        { type: 'صيانة ربع سنوية', unit: 'سنة', minPrice: 500, maxPrice: 1050, time: '4 زيارات' },
    ],
    faq: [
        { question: 'ليش رخام خميس يتلف مختلف عن عنيزة؟', answer: 'عنيزة: SiO₂ Pitting (خدش ميكانيكي). خميس: عفن بيولوجي+تآكل كيميائي. مشاكل مختلفة = حلول مختلفة.' },
        { question: 'كيف أزيل بقع العفن من الرخام بخميس؟', answer: 'Anti-Fungal يقتل العفن + Poultice يستخلص البقعة من المسام. المسح العادي لا يكفي — البقعة عميقة.' },
        { question: 'كم تكلفة جلي رخام بخميس مقارنة بعنيزة؟', answer: 'أغلى 30% — Anti-Fungal+Poultice إضافي. عنيزة: Impregnator يكفي (لا عفن).' },
        { question: 'هل الأمطار تتآكل الرخام بخميس مشيط؟', answer: 'أحماض خفيفة من التربة الجبلية + CaCO₃ الرخام = تآكل سطحي. Acid Polish يُعيد اللمعان.' },
        { question: 'متى أجلي الرخام بخميس مشيط؟', answer: 'كل 3-4 أشهر — عفن+تكثّف = تلف أسرع. عنيزة: كل 6 أشهر. بعد كل موسم أمطار.' },
    ],
    expertTips: [
        'Anti-Fungal أولاً — عفن في المسام.',
        'Poultice — يستخلج Mold Staining عميقة.',
        'Acid Polish — يُعيد لمعان بعد تآكل أمطار.',
        'Impregnator — يحمي المسام من رطوبة+عفن.',
        'Dehumidifier — يمنع تكثّف على الرخام البارد شتاءً.',
    ],
    warnings: [
        'Mold Staining × 6 أشهر = بقعة دائمية لا تُزال — تغيير بلاطة (500+ ريال).',
        'أمطار حمضية + رخام بدون Impregnator = تآكل سطحي مستمر.',
        'تكثّف + رخام بارد = بقع رطوبة تحت الأثاث لا تُرى حتى تتعفّن.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص شركات الجلي' },
        { entity: AMANA.ASIR.entity, url: AMANA.ASIR.url, role: 'اشتراطات أمانة عسير' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALMISNID.name, quote: 'رخام خميس: عفن بيولوجي+تآكل كيميائي. مختلف عن SiO₂ الصحراوي. Anti-Fungal+Poultice.', source: 'نصائح هندسية — رخام جبلي' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ جلي مرخص', authority: 'بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'Anti-Fungal+Poultice', use: 'يقتل عفن ويستخلص Mold Staining' },
        { name: 'Acid Polish', use: 'يُعيد لمعان بعد تآكل أمطار حمضية' },
        { name: 'Impregnator', use: 'يحمي مسام الرخام من رطوبة+عفن' },
    ],
    hiddenObjections: [
        { fear: 'مثل عنيزة.', solution: 'مشاكل مختلفة تماماً. عنيزة: ميكانيكي. خميس: بيولوجي+كيميائي.' },
        { fear: 'جلي عادي يكفي.', solution: 'بدون Anti-Fungal = العفن يرجع. Poultice للبقع العميقة.' },
    ],
    consumerEducation: [
        { myth: 'الرخام يتخدش بخميس مثل عنيزة.', truth: 'لا SiO₂ صحراوي = لا خدش. المشكلة عفن+تآكل.' },
        { myth: 'Impregnator يكفي.', truth: 'Anti-Fungal أولاً — Impregnator لا يقتل العفن الموجود.' },
    ],
    relatedServices: [
        { slug: 'cleaning', context: 'تنظيف', priority: 1 },
        { slug: 'villas-cleaning', context: 'فلل', priority: 2 },
        { slug: 'glass-facades-cleaning', context: 'واجهات', priority: 3 },
        { slug: 'steam-cleaning', context: 'بخار', priority: 4 },
        { slug: 'carpet-cleaning', context: 'سجاد', priority: 5 },
        { slug: 'water-insulation', context: 'عزل مائي', priority: 6 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 7 },
    ],
};
