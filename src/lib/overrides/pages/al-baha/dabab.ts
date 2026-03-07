import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'دباب نقل بالباحة — أمطار+ضباب+منحدرات غابية — أصعب طرق! Waterproof+فرامل (2026)',
        description: 'دباب نقل الباحة. أمطار+ضباب+منحدرات غابات عرعر. أصعب طرق بالمملكة! Waterproof+فرامل+تأمين. الطائف 200 كم.',
        h1: 'دباب نقل بالباحة — غابات ومطر ومنحدرات — أصعب!',
        keywords: ['دباب نقل الباحة', 'دباب نقل بالباحة', 'شركة دباب نقل الباحة'],
    },
    content: {
        introduction: 'الدباب في الباحة يواجه أصعب ظروف نقل بالمملكة! أولاً: أمطار موسمية غزيرة — البضائع المكشوفة تتلف. Waterproof Tarpaulin إلزامي. ثانياً: ضباب 150+ يوم/سنة = رؤية محدودة أقل من 100 متر. إضاءة عالية + سرعة منخفضة. ثالثاً: منحدرات غابات عرعر — طرق جبلية ملتوية بانحدار 8-15%. فرامل فحص يومي + سلاسل إطارات شتاءً. رابعاً: رطوبة 50-75% = عفن يصيب البضائع المخزنة مؤقتاً. Silica Gel في الصناديق. الطائف 200 كم = أقرب مدينة رئيسية = 2-3 ساعات بطرق جبلية. مقارنة: عنيزة = طرق مسطحة + لا مطر + بريدة 30 كم. الباحة = أصعب وأغلى 25-30%.',
        shortAnswer: 'على عكس [النقل بدون Waterproof في طرق مسطحة]، يعتمد بروتوكولنا في خدمة [دباب النقل] بمدينة [الباحة] على [Waterproof+فرامل+إضاءة+Silica Gel]. ففي ظل [أمطار+ضباب 150+ يوم+منحدرات 8-15%+50-75% رطوبة]، تتفاقم ظاهرة [تلف+انزلاق+عفن مؤقت]. لذا؛ يتدخل سائقونا عبر [تغطية ← فحص ← إنارة ← حماية] لضمان توصيل آمن.',
        heroSubtitle: 'أمطار + ضباب + منحدرات غابية — أصعب طرق!',
    },
    pricing: [
        { type: 'داخل الباحة', unit: 'رحلة', minPrice: 35, maxPrice: 80, time: '30-60 دقيقة' },
        { type: 'الباحة ← الطائف (200 كم)', unit: 'رحلة', minPrice: 100, maxPrice: 220, time: '2-3 ساعات' },
        { type: 'الباحة ← أبها (300 كم)', unit: 'رحلة', minPrice: 150, maxPrice: 350, time: '3-4 ساعات' },
        { type: 'يومي (موسم أمطار)', unit: 'يوم', minPrice: 200, maxPrice: 450, time: '8 ساعات' },
    ],
    faq: [
        { question: 'كم المسافة من الباحة للطائف بالدباب؟', answer: '200 كم = 2-3 ساعات طرق جبلية. أقرب مدينة رئيسية. 100-220 ريال.' },
        { question: 'كيف أحمي البضائع من المطر بالباحة؟', answer: 'Waterproof Tarpaulin إلزامي + Silica Gel في الصناديق. بدونه = تلف مائي خلال ساعة.' },
        { question: 'ليش الباحة أصعب نقل بالمملكة؟', answer: 'أمطار+ضباب 150+ يوم+منحدرات 8-15%+غابات = كل التحديات معاً. لا مدينة أخرى تجمعها.' },
        { question: 'هل الدباب يحتاج سلاسل إطارات بالباحة؟', answer: 'شتاءً في المنحدرات: نعم. المطر+منحدر = انزلاق. فرامل فحص يومي إلزامي.' },
        { question: 'متى أخطر وقت للنقل بالباحة؟', answer: 'موسم الأمطار (نوفمبر-مارس) + ضباب صباحي = أخطر. ظهراً أفضل — ضباب يخف.' },
    ],
    expertTips: [
        'Waterproof Tarpaulin — أمطار تُتلف البضائع.',
        'فرامل فحص يومي — منحدرات 8-15%.',
        'إضاءة عالية — ضباب رؤية < 100 متر.',
        'Silica Gel — 50-75% رطوبة = عفن مؤقت.',
        'سلاسل إطارات شتاءً — مطر+منحدر = انزلاق.',
    ],
    warnings: [
        'بدون Waterproof + أمطار = تلف بضائع خلال ساعة — خسارة كاملة.',
        'منحدر 15% + مطر + فرامل ضعيفة = انزلاق — حادث.',
        'ضباب + سرعة عالية + رؤية < 100م = خطر حقيقي.',
    ],
    trustAnchors: [
        { ...GOV.TGA, role: 'ترخيص النقل البري' },
        { entity: AMANA.BAHA.entity, url: AMANA.BAHA.url, role: 'اشتراطات أمانة الباحة' },
    ],
    expertReviewer: EXPERTS.ALZUWAYED,
    expertCitations: [
        { expert: EXPERTS.ALZUWAYED.name, quote: 'دباب الباحة: أصعب طرق بالمملكة. غابات+منحدرات+ضباب+أمطار. Waterproof+فرامل إلزامي.', source: 'هيئة النقل — جنوبية' },
    ],
    saudiRegulations: [REGULATIONS.TGA_LICENSE],
    verificationBadges: [{ badge: '✔️ نقل مرخص TGA', authority: 'هيئة النقل', icon: 'shield-check' }],
    equipment: [
        { name: 'Waterproof Tarpaulin', use: 'حماية من أمطار الباحة الغزيرة' },
        { name: 'فرامل صيانة يومية', use: 'منحدرات 8-15% جبلية غابية' },
        { name: 'Silica Gel', use: 'حماية مؤقتة من 50-75% رطوبة' },
    ],
    hiddenObjections: [
        { fear: 'مثل خميس مشيط.', solution: 'غابات أكثر = طرق أضيق + طين إضافي. أصعب قليلاً.' },
        { fear: 'Waterproof غالي.', solution: 'بدونه = خسارة بضائع = أغلى 100×.' },
    ],
    counterNarratives: [
        { myth: 'الباحة طرق سهلة.', truth: 'منحدرات 8-15% + ضباب + أمطار = أصعب طرق.' },
        { myth: 'لا مطر بالباحة.', truth: 'أمطار موسمية غزيرة نوفمبر-مارس.' },
    ],
    relatedServices: [
        { slug: 'furniture-moving', context: 'نقل عفش', priority: 1 },
        { slug: 'auto-cleaning', context: 'غسيل سيارات', priority: 2 },
        { slug: 'cleaning', context: 'تنظيف', priority: 3 },
        { slug: 'furniture-storage', context: 'تخزين — رطوبة', priority: 4 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 5 },
        { slug: 'pest-control', context: 'حشرات غابات', priority: 6 },
        { slug: 'carpet-cleaning', context: 'سجاد', priority: 7 },
    ],
};
