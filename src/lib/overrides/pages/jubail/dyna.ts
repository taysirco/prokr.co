import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'دينا نقل بالجبيل — NaCl+VOC ثقيل + 85-98% تكثّف + SABIC طرق صناعية (2026)',
        description: 'دينا نقل الجبيل. NaCl+VOC حمولات ثقيلة. 85-98% تكثّف Short Circuit. SABIC طرق صناعية. Tarpaulin Marine + VCI + GPS صناعي.',
        h1: 'دينا نقل بالجبيل — حمولات ثقيلة تحت ملح وبتروكيماويات وتكثّف',
        keywords: ['دينا نقل الجبيل', 'دينا نقل بالجبيل', 'شركة دينا نقل بالجبيل'],
    },
    content: {
        introduction: 'الدينا في الجبيل = نقل ثقيل في بيئة صناعية-ساحلية. الأول — NaCl+VOC: حمولات ثقيلة + NaCl+VOC = تآكل أسرع 2×. حديد بناء + معدات = Galvanic. Tarpaulin Marine. الثاني — 85-98% تكثّف: معدات كهربائية = Short Circuit. VCI + Silica Gel. الثالث — SABIC طرق: طرق المنطقة الصناعية = شاحنات ثقيلة + مواد كيميائية. تصاريح خاصة. الرابع — Biofilm أنبوب: أنابيب نقل = Biofilm 98%. تنظيف قبل النقل.',
        shortAnswer: 'على عكس [دينا مكشوفة] في بيئة NaCl+VOC، يعتمد بروتوكولنا في خدمة [الدينا] بمدينة [الجبيل] على [Tarpaulin Marine + VCI + تصاريح SABIC]. ففي ظل [NaCl+VOC + 85-98% + طرق صناعية]، تتفاقم ظاهرة [تآكل + تكثّف + تقييد]. لذا؛ يتدخل خبراؤنا عبر [دينا صناعية-ساحلية].',
        heroSubtitle: 'NaCl+VOC ثقيل + 98% تكثّف + SABIC طرق + أقل UV',
    },
    pricing: [
        { type: 'دينا داخل الجبيل', unit: 'رحلة', minPrice: 120, maxPrice: 290, time: '1-2 ساعة' },
        { type: 'الجبيل ↔ الدمام (100 كم)', unit: 'رحلة', minPrice: 370, maxPrice: 870, time: '2-3 ساعات' },
        { type: 'الجبيل ↔ الرياض (400 كم)', unit: 'رحلة', minPrice: 780, maxPrice: 1800, time: '5-7 ساعات' },
        { type: 'نقل + VCI + Tarpaulin Marine', unit: 'رحلة', minPrice: 180, maxPrice: 400, time: '1-3 ساعات' },
    ],
    faq: [
        { question: 'تصاريح SABIC — لازم؟', answer: 'طرق المنطقة الصناعية = تصاريح. بدون = مخالفة + تأخير. نتولى التصاريح.' },
        { question: 'VCI — على حديد؟', answer: 'VCI = أبخرة مُثبطة للتآكل. تحمي حديد من NaCl+VOC+98% تكثّف. 5-10 ريال/قطعة = يحمي آلاف.' },
        { question: 'NaCl+VOC — أسرع من الخبر؟', answer: 'أسرع 2× — VOC يُسرّع Galvanic. حديد بناء يصدأ خلال أسابيع بدون حماية.' },
        { question: 'طرق صناعية — مخاطر؟', answer: 'شاحنات كيميائية + تقاطعات + حمولات ثقيلة. سائق مُدرّب + GPS + تأمين.' },
        { question: 'هل الشركة مرخصة من هيئة النقل TGA؟', answer: 'كل شركات بروكر مرخصة TGA + بيان حمولة لوجستي. الترخيص = تأمين على الأمتعة + حقوق عميل. بدون ترخيص = لا تأمين = لا تعويض.' },
    ],
    expertTips: [
        'Tarpaulin Marine — NaCl+VOC. عادي لا يقاوم.',
        'VCI لكل حديد — 98% + NaCl+VOC = صدأ أسابيع.',
        'تصاريح SABIC مُسبقة — تأخير = تكلفة.',
        'Silica Gel لإلكترونيات — 98% Short Circuit.',
        'صوّر كل قطعة أثاث قبل النقل — توثيق بصري يحمي حقك في التعويض لو حصل ضرر.',
    ],
    warnings: [
        'حديد مكشوف + NaCl+VOC + 98% = صدأ أسابيع.',
        '98% + إلكترونيات = Short Circuit. VCI+Silica.',
        'طرق SABIC بدون تصريح = مخالفة + تأخير.',
    ],
    trustAnchors: [
        { ...GOV.TGA, role: 'ترخيص النقل الثقيل' },
        { entity: AMANA.SHARQIA.entity, url: AMANA.SHARQIA.url, role: 'اشتراطات النقل بالشرقية' },
    ],
    expertReviewer: EXPERTS.ALZUWAYED,
    expertCitations: [
        { expert: EXPERTS.ALZUWAYED.name, quote: 'دينا الجبيل = صناعية-ساحلية: NaCl+VOC + 98% + طرق SABIC. Tarpaulin Marine + VCI + تصاريح.', source: 'هيئة النقل — النقل الصناعي' },
    ],
    saudiRegulations: [REGULATIONS.TGA_LICENSE],
    verificationBadges: [{ badge: '✔️ نقل ثقيل مرخص', authority: 'هيئة النقل', icon: 'shield-check' }],
    equipment: [
        { name: 'Tarpaulin Marine', use: 'NaCl+VOC — مُقاوم' },
        { name: 'VCI', use: 'تآكل — حديد+معادن' },
        { name: 'Silica Gel', use: '98% — Short Circuit' },
    ],
    hiddenObjections: [
        { fear: 'مثل الخبر.', solution: 'VOC + طرق SABIC + 98%. مختلف.' },
        { fear: 'VCI غالي.', solution: '5-10 ريال = يحمي حديد آلاف.' },
    ],
    counterNarratives: [
        { myth: 'Tarpaulin عادي.', truth: 'NaCl+VOC يُتلفه. Marine.' },
        { myth: 'لا VCI.', truth: '98%+NaCl = صدأ أسابيع.' },
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
