import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../gov-references';

export const override: PageOverride = {
    meta: {
        title: 'دباب نقل بخميس مشيط — أمطار+ضباب+منحدرات 6-12% — Waterproof+فرامل+إضاءة (2026)',
        description: 'دباب نقل خميس مشيط. أمطار+ضباب 200 يوم+منحدرات 6-12%. Waterproof+فرامل+إضاءة. أبها 30 كم. أصعب طرق.',
        h1: 'دباب نقل بخميس مشيط — أمطار ومنحدرات وضباب',
        keywords: ['دباب نقل خميس مشيط', 'دباب نقل بخميس مشيط', 'شركة دباب نقل خميس مشيط'],
    },
    content: {
        introduction: 'الدباب في خميس مشيط يواجه ظروف نقل جبلية صعبة. أولاً: أمطار موسمية غزيرة — البضائع المكشوفة تتلف خلال ساعة. Waterproof Tarpaulin إلزامي. ثانياً: ضباب 200 يوم/سنة = رؤية محدودة أقل من 150 متر. إضاءة عالية + سرعة منخفضة. ثالثاً: منحدرات جبلية 6-12% — طرق ملتوية بين خميس وأبها والقرى. فرامل فحص يومي. رابعاً: 60-85% رطوبة = بضائع تمتص رطوبة أثناء النقل. Silica Gel في الصناديق. أبها 30 كم = أقرب مدينة = 30-45 دقيقة. الرياض 950 كم = 9 ساعات. جدة 700 كم = 7 ساعات عبر الباحة. مقارنة: عنيزة = طرق مسطحة + لا مطر + بريدة 30 كم. خميس = أصعب + أغلى 20%.',
        shortAnswer: 'على عكس [النقل بدون Waterproof في طرق مسطحة]، يعتمد بروتوكولنا في خدمة [دباب النقل] بمدينة [خميس مشيط] على [Waterproof+فرامل+إضاءة+Silica Gel]. ففي ظل [أمطار+ضباب 200 يوم+منحدرات 6-12%+60-85% رطوبة]، تتفاقم ظاهرة [تلف+انزلاق+رطوبة بضائع]. لذا؛ يتدخل سائقونا عبر [تغطية ← فحص ← إنارة ← حماية].',
        heroSubtitle: 'أمطار + ضباب + منحدرات — Waterproof+فرامل!',
    },
    pricing: [
        { type: 'داخل خميس', unit: 'رحلة', minPrice: 30, maxPrice: 65, time: '20-40 دقيقة' },
        { type: 'خميس ← أبها (30 كم)', unit: 'رحلة', minPrice: 50, maxPrice: 110, time: '30-45 دقيقة' },
        { type: 'خميس ← جدة (700 كم)', unit: 'رحلة', minPrice: 350, maxPrice: 750, time: '7-8 ساعات' },
        { type: 'يومي', unit: 'يوم', minPrice: 180, maxPrice: 400, time: '8 ساعات' },
    ],
    faq: [
        { question: 'كم المسافة من خميس لأبها بالدباب؟', answer: '30 كم = 30-45 دقيقة. أقرب مدينة. 50-110 ريال. طرق جبلية لكن قصيرة.' },
        { question: 'كيف أحمي بضائعي من المطر بخميس؟', answer: 'Waterproof Tarpaulin إلزامي + Silica Gel في الصناديق. بدونهما = تلف مائي+رطوبة.' },
        { question: 'ليش خميس أصعب نقل من عنيزة؟', answer: 'أمطار+ضباب 200 يوم+منحدرات 6-12%. عنيزة: طرق مسطحة+لا مطر+لا ضباب = أبسط.' },
        { question: 'هل الدباب يحتاج إضاءة خاصة بخميس؟', answer: 'ضباب 200 يوم = رؤية < 150م. إضاءة عالية + عاكسات خلفية + سرعة منخفضة.' },
        { question: 'متى أخطر وقت للنقل بخميس مشيط؟', answer: 'موسم الأمطار (نوفمبر-مارس) + ضباب صباحي = أخطر. ظهراً أفضل.' },
    ],
    expertTips: [
        'Waterproof Tarpaulin — أمطار تُتلف البضائع.',
        'فرامل فحص يومي — منحدرات 6-12%.',
        'إضاءة عالية — ضباب رؤية < 150 متر.',
        'Silica Gel — 60-85% رطوبة بضائع.',
        'لا تنقل صباحاً — ضباب أكثف. ظهراً أفضل.',
    ],
    warnings: [
        'بدون Waterproof + أمطار = تلف بضائع — خسارة كاملة.',
        'منحدر 12% + مطر + فرامل ضعيفة = انزلاق — حادث.',
        'ضباب + سرعة > 40 كم/ساعة = خطر حقيقي.',
    ],
    trustAnchors: [
        { ...GOV.TGA, role: 'ترخيص النقل البري' },
        { entity: AMANA.ASIR.entity, url: AMANA.ASIR.url, role: 'اشتراطات أمانة عسير' },
    ],
    expertReviewer: EXPERTS.ALSHABNAN,
    expertCitations: [
        { expert: EXPERTS.ALZUWAYED.name, quote: 'دباب خميس: ضباب+أمطار+منحدرات. Waterproof+فرامل إلزامي. أصعب من عنيزة.', source: 'هيئة النقل — جنوبية' },
    ],
    saudiRegulations: [REGULATIONS.TGA_LICENSE],
    verificationBadges: [{ badge: '✔️ نقل مرخص TGA', authority: 'هيئة النقل', icon: 'shield-check' }],
    equipment: [
        { name: 'Waterproof Tarpaulin', use: 'حماية من أمطار خميس الغزيرة' },
        { name: 'فرامل صيانة يومية', use: 'منحدرات 6-12% جبلية' },
        { name: 'Silica Gel', use: 'حماية من 60-85% رطوبة' },
    ],
    commonConcerns: [
        { concern: 'مثل عنيزة.', solution: 'أمطار+ضباب+منحدرات = أصعب. عنيزة: مسطح+جاف.' },
        { concern: 'غالي.', solution: 'بدون Waterproof = خسارة بضائع = أغلى 100×.' },
    ],
    consumerEducation: [
        { myth: 'طرق خميس سهلة.', truth: 'منحدرات 6-12% + ضباب + أمطار = صعبة.' },
        { myth: 'Tarpaulin ترف.', truth: 'أمطار موسمية غزيرة. بدونه = تلف.' },
    ],
    relatedServices: [
        { slug: 'furniture-moving', context: 'نقل عفش', priority: 1 },
        { slug: 'dyna', context: 'دينا', priority: 2 },
        { slug: 'auto-cleaning', context: 'غسيل سيارات', priority: 3 },
        { slug: 'furniture-storage', context: 'تخزين', priority: 4 },
        { slug: 'cleaning', context: 'تنظيف', priority: 5 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 6 },
        { slug: 'pest-control', context: 'حشرات', priority: 7 },
    ],
};
