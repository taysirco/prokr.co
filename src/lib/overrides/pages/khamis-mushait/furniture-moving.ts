import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'نقل عفش بخميس مشيط — أمطار+ضباب+منحدرات+رطوبة — تغليف مائي+Dehumidifier مستودع (2026)',
        description: 'نقل عفش خميس مشيط. أمطار+ضباب+منحدرات 6-12%+60-85%. تغليف مائي Stretch Wrap+Dehumidifier مستودع. أبها 30 كم.',
        h1: 'نقل عفش بخميس مشيط — مطر وضباب ومنحدرات',
        keywords: ['نقل عفش خميس مشيط', 'نقل اثاث بخميس مشيط', 'شركة نقل عفش خميس مشيط'],
    },
    content: {
        introduction: 'نقل العفش في خميس مشيط يواجه 4 تحديات جبلية لا تجدها في المدن الصحراوية. أولاً — أمطار: العفش المكشوف يتلف. تغليف Stretch Wrap مائي + شاحنة مغلقة (ليست مكشوفة). ثانياً — ضباب 200 يوم: رؤية محدودة = سرعة منخفضة = وقت نقل أطول. ثالثاً — منحدرات 6-12%: أثاث ثقيل على منحدر = خطر انزلاق. تثبيت Ratchet Straps + سائق خبرة جبلية. رابعاً — 60-85% رطوبة: الشاحنة المغلقة تحبس رطوبة = عفن يصيب العفش أثناء التخزين المؤقت. Silica Gel + Dehumidifier مؤقت. مقارنة: عنيزة = شاحنة مكشوفة تكفي + طرق مسطحة + لا رطوبة = أرخص 20-25%. خميس = شاحنة مغلقة + تغليف مائي = أغلى.',
        shortAnswer: 'على عكس [النقل بشاحنة مكشوفة في طرق مسطحة]، يعتمد بروتوكولنا في خدمة [نقل العفش] بمدينة [خميس مشيط] على [شاحنة مغلقة+Stretch Wrap+Ratchet+Silica Gel]. ففي ظل [أمطار+ضباب 200 يوم+منحدرات 6-12%+60-85%]، تتفاقم ظاهرة [تلف مائي+انزلاق+عفن مؤقت]. لذا؛ يتدخل فريقنا عبر [تغليف ← تثبيت ← نقل مغلق ← حماية رطوبة].',
        heroSubtitle: 'أمطار + ضباب + منحدرات — شاحنة مغلقة+Stretch Wrap!',
    },
    pricing: [
        { type: 'شقة → شقة (داخل خميس)', unit: 'رحلة', minPrice: 400, maxPrice: 850, time: '4-6 ساعات' },
        { type: 'خميس → أبها (30 كم)', unit: 'رحلة', minPrice: 550, maxPrice: 1100, time: '5-7 ساعات' },
        { type: 'خميس → جدة (700 كم)', unit: 'رحلة', minPrice: 2500, maxPrice: 5000, time: '1-2 يوم' },
        { type: 'فك+تغليف+نقل+تركيب', unit: 'شامل', minPrice: 600, maxPrice: 1300, time: '6-10 ساعات' },
    ],
    faq: [
        { question: 'ليش نقل عفش بخميس أغلى من عنيزة؟', answer: 'شاحنة مغلقة (مكشوفة لا تصلح)+Stretch Wrap مائي+Silica Gel+سائق جبلي = أغلى 20-25%.' },
        { question: 'كيف أحمي العفش من المطر بخميس مشيط؟', answer: 'Stretch Wrap مائي كل قطعة + شاحنة مغلقة. بدونهما = تلف مائي خلال ساعة.' },
        { question: 'هل المنحدرات خطرة على نقل العفش بخميس؟', answer: '6-12% + أثاث ثقيل = انزلاق. Ratchet Straps + سائق خبرة جبلية. لا عمال بدون تدريب.' },
        { question: 'كم المدة من خميس لجدة بالشاحنة؟', answer: '700 كم = 7-8 ساعات + فك+تركيب = 1-2 يوم. طرق جبلية عبر الباحة.' },
        { question: 'هل العفش يتعفّن أثناء النقل بخميس؟', answer: '60-85% + شاحنة مغلقة = رطوبة محبوسة. Silica Gel + Dehumidifier مؤقت. لا تترك أكثر من 24 ساعة.' },
    ],
    expertTips: [
        'شاحنة مغلقة — أمطار تُتلف العفش المكشوف.',
        'Stretch Wrap كل قطعة — حماية مائية فردية.',
        'Ratchet Straps — منحدرات 6-12% = انزلاق.',
        'Silica Gel في الشاحنة — 60-85% = عفن مؤقت.',
        'لا تترك العفش في الشاحنة > 24h — عفن يبدأ.',
    ],
    warnings: [
        'شاحنة مكشوفة + أمطار = تلف عفش كامل — خسارة آلاف.',
        'منحدر 12% + عفش ثقيل + بدون تثبيت = انزلاق — حادث.',
        'عفش في شاحنة مغلقة > 48h + 60-85% = عفن — Silica Gel إلزامي.',
    ],
    trustAnchors: [
        { ...GOV.TGA, role: 'ترخيص النقل' },
        { ...GOV.BALADI, role: 'ترخيص شركات النقل' },
        { entity: AMANA.ASIR.entity, url: AMANA.ASIR.url, role: 'اشتراطات أمانة عسير' },
    ],
    expertReviewer: EXPERTS.ALSHABNAN,
    expertCitations: [
        { expert: EXPERTS.ALZUWAYED.name, quote: 'نقل خميس: شاحنة مغلقة+Stretch Wrap إلزامي. أمطار+منحدرات. لا مكشوفة.', source: 'هيئة النقل — جنوبية' },
    ],
    saudiRegulations: [REGULATIONS.TGA_LICENSE],
    verificationBadges: [{ badge: '✔️ نقل مرخص TGA', authority: 'هيئة النقل', icon: 'shield-check' }],
    equipment: [
        { name: 'Stretch Wrap مائي', use: 'تغليف كل قطعة — حماية أمطار' },
        { name: 'شاحنة مغلقة', use: 'حماية من أمطار+ضباب (لا مكشوفة)' },
        { name: 'Ratchet Straps', use: 'تثبيت — منحدرات 6-12%' },
    ],
    hiddenObjections: [
        { fear: 'مكشوفة أرخص.', solution: 'مطر = خسارة عفش = أغلى 100×. مغلقة أرخص فعلياً.' },
        { fear: 'مثل الباحة.', solution: 'متشابه. خميس ← أبها 30 كم أسهل قليلاً.' },
    ],
    consumerEducation: [
        { myth: 'شاحنة مكشوفة تكفي بخميس.', truth: 'أمطار+ضباب = تلف مائي. مغلقة فقط.' },
        { myth: 'نقل خميس مثل عنيزة.', truth: 'أمطار+منحدرات+رطوبة = أعقد وأغلى 20-25%.' },
    ],
    relatedServices: [
        { slug: 'furniture-storage', context: 'تخزين — رطوبة', priority: 1 },
        { slug: 'furniture-cleaning', context: 'تنظيف أثاث', priority: 2 },
        { slug: 'dabab', context: 'دباب', priority: 3 },
        { slug: 'dyna', context: 'دينا', priority: 4 },
        { slug: 'cleaning', context: 'تنظيف', priority: 5 },
        { slug: 'carpet-cleaning', context: 'سجاد', priority: 6 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 7 },
    ],
};
