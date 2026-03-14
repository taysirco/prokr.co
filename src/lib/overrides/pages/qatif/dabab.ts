import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'دباب نقل بالقطيف — NaCl تآكل + 80-95% تكثّف + طين لزج + أزقة تاريخية (2026)',
        description: 'دباب نقل القطيف. NaCl تآكل. 80-95% تكثّف. طين لزج يلتصق. أزقة تاريخية ضيقة. Stretch + Silica Gel + VCI.',
        h1: 'دباب نقل بالقطيف — ملح وتكثّف وطين وأزقة التاريخ',
        keywords: ['دباب نقل القطيف', 'دباب نقل بالقطيف', 'شركة دباب نقل بالقطيف'],
    },
    content: {
        introduction: 'الدباب في القطيف يواجه تحديات ساحلية-واحية + تاريخية. الأول — NaCl تآكل: حمولة مكشوفة + رذاذ ملحي = تآكل. Stretch. الثاني — 80-95% تكثّف: إلكترونيات = Short Circuit. Silica Gel. الثالث — طين لزج: تربة واحية ← طرق ← إطارات ← حمولة. الرابع — أزقة تاريخية: القطيف التاريخية = أزقة ضيقة = دباب مثالي (لا شاحنة). + ميزة!',
        shortAnswer: 'على عكس [دباب مكشوف] في NaCl+طين، يعتمد بروتوكولنا في خدمة [الدباب] بمدينة [القطيف] على [Stretch + Silica Gel + VCI]. ففي ظل [NaCl + 80-95% + طين + أزقة]، تتفاقم ظاهرة [تآكل + تكثّف + التصاق]. لذا؛ يتدخل خبراؤنا عبر [دباب ساحلي-واحي + أزقة].',
        heroSubtitle: 'NaCl تآكل + 80-95% تكثّف + طين لزج + أزقة تاريخية (ميزة!)',
    },
    pricing: [
        { type: 'نقل داخل القطيف', unit: 'رحلة', minPrice: 30, maxPrice: 70, time: '30-60 دقيقة' },
        { type: '+ Stretch + Silica Gel', unit: 'رحلة', minPrice: 45, maxPrice: 100, time: '30-60 دقيقة' },
        { type: 'أزقة تاريخية', unit: 'رحلة', minPrice: 40, maxPrice: 90, time: '45-75 دقيقة' },
    ],
    faq: [
        { question: 'أزقة — ميزة؟', answer: 'ميزة! أزقة ضيقة = شاحنة لا تدخل. دباب = المثالي. نعرف كل زقاق.' },
        { question: '80-95% تكثّف — خطير؟', answer: 'إلكترونيات = Short Circuit. Silica Gel. أقل خطراً من الجبيل 98% لكن حقيقي.' },
        { question: 'طين — يلوّث؟', answer: 'تربة واحية ← إطارات ← رذاذ ← حمولة. تنظيف بعد. لا يُتلف.' },
        { question: 'هل الشركة مرخصة من هيئة النقل TGA؟', answer: 'كل شركات بروكر مرخصة TGA + بيان حمولة لوجستي. الترخيص = تأمين على الأمتعة + حقوق عميل. بدون ترخيص = لا تأمين = لا تعويض.' },
        { question: 'كم يوم قبل أحجز؟', answer: 'الأفضل 3-7 أيام مقدماً. في مواسم الذروة (نهاية العقود/إجازات): 10-14 يوم. الحجز المبكر = سعر أفضل + موعد مناسب.' },
    ],
    expertTips: [
        'Silica Gel لإلكترونيات — 80-95% تكثّف.',
        'VCI لحديد — NaCl.',
        'أزقة تاريخية = دباب فقط.',
        'تنظيف حمولة بعد نقل — طين.',
        'صوّر كل قطعة أثاث قبل النقل — توثيق بصري يحمي حقك في التعويض لو حصل ضرر.',
    ],
    warnings: [
        '80-95% + إلكترونيات = Silica Gel.',
        'NaCl + حديد مكشوف = صدأ.',
        'أزقة ← ابتعد عن جدران قديمة = حجر هش.',
    ],
    trustAnchors: [
        { ...GOV.TGA, role: 'ترخيص النقل' },
        { entity: AMANA.SHARQIA.entity, url: AMANA.SHARQIA.url, role: 'اشتراطات النقل بالشرقية' },
    ],
    expertReviewer: EXPERTS.ALSHABNAN,
    expertCitations: [
        { expert: EXPERTS.ALZUWAYED.name, quote: 'دباب القطيف: أزقة تاريخية = ميزة فريدة. NaCl+80-95%+طين. Silica Gel + VCI.', source: 'هيئة النقل — النقل في الواحات' },
    ],
    saudiRegulations: [REGULATIONS.TGA_LICENSE],
    verificationBadges: [{ badge: '✔️ نقل مرخص', authority: 'هيئة النقل', icon: 'shield-check' }],
    equipment: [
        { name: 'Stretch', use: 'NaCl+طين — حاجز' },
        { name: 'Silica Gel', use: '80-95% — تكثّف' },
        { name: 'VCI', use: 'NaCl — حديد' },
    ],
    commonConcerns: [
        { concern: 'مسافة قصيرة.', solution: '80-95% تكثّف = دقائق. Silica.' },
        { concern: 'مثل الخبر.', solution: 'أزقة تاريخية + طين. مختلف.' },
    ],
    consumerEducation: [
        { myth: 'شاحنة.', truth: 'أزقة = دباب فقط.' },
        { myth: 'لا Silica.', truth: '80-95% = Short Circuit.' },
    ],
    relatedServices: [
        { slug: 'dyna', context: 'دينا — أثقل', priority: 1 },
        { slug: 'furniture-moving', context: 'نقل عفش', priority: 2 },
        { slug: 'auto-cleaning', context: 'غسيل', priority: 3 },
        { slug: 'cleaning', context: 'تنظيف', priority: 4 },
        { slug: 'furniture-storage', context: 'تخزين', priority: 5 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 6 },
        { slug: 'pest-control', context: 'حشرات', priority: 7 },
    ],
};
