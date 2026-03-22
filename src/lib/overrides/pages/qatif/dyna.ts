import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../gov-references';

export const override: PageOverride = {
    meta: {
        title: 'دينا نقل بالقطيف — NaCl حمولات ثقيلة + 80-95% تكثّف + طين طرق + أزقة (2026)',
        description: 'دينا نقل القطيف. NaCl حمولات ثقيلة. 80-95% تكثّف. طين طرق زراعية. أزقة ضيقة. VCI + Silica + Tarpaulin.',
        h1: 'دينا نقل بالقطيف — حمولات ثقيلة تحت ملح وتكثّف وطين',
        keywords: ['دينا نقل القطيف', 'دينا نقل بالقطيف', 'شركة دينا نقل بالقطيف'],
    },
    content: {
        introduction: 'الدينا في القطيف = نقل ثقيل ساحلي-واحي. الأول — NaCl: حمولات ثقيلة + رذاذ ساحلي = تآكل حديد. VCI. الثاني — 80-95% تكثّف: معدات كهربائية = Short Circuit. Silica Gel. الثالث — طين طرق: طرق زراعية قرب واحات = طين لزج. Tarpaulin + تنظيف. الرابع — أزقة: المنطقة التاريخية = ضيقة = دينا صغيرة فقط. كل شركات بروكر مرخصة من هيئة النقل TGA مع تأمين شامل على الأمتعة. البروتوكول: فك احترافي ← تغليف بابل + كرتون مقوى ← تحميل منظم بأحزمة تثبيت ← نقل بسيارات مجهزة ← تركيب في الموقع الجديد.',
        shortAnswer: 'على عكس [دينا مكشوفة] في NaCl+طين، يعتمد بروتوكولنا في خدمة [الدينا] بمدينة [القطيف] على [VCI + Silica + Tarpaulin]. ففي ظل [NaCl + 80-95% + طين + أزقة]، تتفاقم ظاهرة [تآكل + تكثّف + التصاق]. لذا؛ يتدخل خبراؤنا عبر [دينا ساحلية-واحية].',
        heroSubtitle: 'NaCl ثقيل + 80-95% تكثّف + طين زراعي + أزقة',
    },
    pricing: [
        { type: 'دينا داخل القطيف', unit: 'رحلة', minPrice: 110, maxPrice: 260, time: '1-2 ساعة' },
        { type: 'القطيف ← الدمام (30 كم)', unit: 'رحلة', minPrice: 280, maxPrice: 620, time: '1-2 ساعة' },
        { type: 'القطيف ← الرياض (400 كم)', unit: 'رحلة', minPrice: 720, maxPrice: 1700, time: '5-7 ساعات' },
        { type: '+ VCI + Silica + Tarpaulin', unit: 'رحلة', minPrice: 160, maxPrice: 350, time: '1-3 ساعات' },
    ],
    faq: [
        { question: 'أزقة — دينا تدخل؟', answer: 'دينا صغيرة فقط. المنطقة التاريخية = أزقة ضيقة. نختار الحجم المناسب.' },
        { question: 'VCI — ضروري؟', answer: 'NaCl + 80-95% = صدأ حديد. VCI = 5-10 ريال/قطعة = يحمي آلاف.' },
        { question: 'طين — يلوّث أكثر؟', answer: 'طرق زراعية = طين. Tarpaulin يحمي. تنظيف بعد.' },
        { question: 'هل الشركة مرخصة من هيئة النقل TGA؟', answer: 'كل شركات بروكر مرخصة TGA + بيان حمولة لوجستي. الترخيص = تأمين على الأمتعة + حقوق عميل. بدون ترخيص = لا تأمين = لا تعويض.' },
        { question: 'كم يوم قبل أحجز؟', answer: 'الأفضل 3-7 أيام مقدماً. في مواسم الذروة (نهاية العقود/إجازات): 10-14 يوم. الحجز المبكر = سعر أفضل + موعد مناسب.' },
    ],
    expertTips: [
        'VCI لكل حديد — NaCl + 80-95%.',
        'Silica لإلكترونيات — Short Circuit.',
        'دينا صغيرة لأزقة — تاريخية.',
        'Tarpaulin — طين زراعي.',
        'صوّر كل قطعة أثاث قبل النقل — توثيق بصري يحمي حقك في التعويض لو حصل ضرر.',
    ],
    warnings: [
        'حديد مكشوف + NaCl + 80-95% = صدأ شهر.',
        '80-95% + إلكترونيات = Silica إلزامي.',
        'أزقة + دينا كبيرة = لا تدخل.',
    ],
    trustAnchors: [
        { ...GOV.TGA, role: 'ترخيص النقل الثقيل' },
        { entity: AMANA.SHARQIA.entity, url: AMANA.SHARQIA.url, role: 'اشتراطات النقل بالشرقية' },
    ],
    expertReviewer: EXPERTS.ALSHABNAN,
    expertCitations: [
        { expert: EXPERTS.ALZUWAYED.name, quote: 'دينا القطيف: NaCl+80-95%+طين. أزقة تاريخية = دينا صغيرة. VCI + Silica.', source: 'هيئة النقل — النقل الواحي' },
    ],
    saudiRegulations: [REGULATIONS.TGA_LICENSE],
    verificationBadges: [{ badge: '✔️ نقل مرخص', authority: 'هيئة النقل', icon: 'shield-check' }],
    equipment: [
        { name: 'Tarpaulin', use: 'طين — حاجز' },
        { name: 'VCI', use: 'NaCl — حديد' },
        { name: 'Silica Gel', use: '80-95% — تكثّف' },
    ],
    commonConcerns: [
        { concern: 'مثل الخبر.', solution: 'أزقة + طين زراعي. مختلف.' },
        { concern: 'VCI غالي.', solution: '5-10 ريال = يحمي آلاف.' },
    ],
    consumerEducation: [
        { myth: 'Tarpaulin عادي.', truth: 'طين + NaCl = أسرع تلف.' },
        { myth: 'لا VCI.', truth: 'NaCl + 80-95% = صدأ شهر.' },
    ],
    relatedServices: [
        { slug: 'dabab', context: 'دباب — أخف', priority: 1 },
        { slug: 'furniture-moving', context: 'نقل عفش', priority: 2 },
        { slug: 'furniture-storage', context: 'تخزين', priority: 3 },
        { slug: 'auto-cleaning', context: 'غسيل', priority: 4 },
        { slug: 'cleaning', context: 'تنظيف', priority: 5 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 6 },
        { slug: 'pest-control', context: 'حشرات', priority: 7 },
    ],
};
