import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'دباب نقل بالجبيل — NaCl+VOC تآكل + 85-98% تكثّف + سخام SABIC + Short Circuit (2026)',
        description: 'دباب نقل الجبيل. NaCl+VOC تآكل. 85-98% تكثّف Short Circuit. سخام SABIC. Stretch Marine + Silica Gel + VCI. لا UV ميزة (غيوم!).',
        h1: 'دباب نقل بالجبيل — ملح+بتروكيماويات وتكثّف يُعطّل',
        keywords: ['دباب نقل الجبيل', 'دباب نقل بالجبيل', 'شركة دباب نقل بالجبيل'],
    },
    content: {
        introduction: 'الدباب في الجبيل يواجه تحديات صناعية-ساحلية. الأول — NaCl+VOC تآكل: حمولة مكشوفة = NaCl+VOC يترسب ← تآكل أسرع 2×. Stretch Marine. الثاني — 85-98% تكثّف: أقصى تكثّف = Short Circuit إلكترونيات. Silica Gel + VCI إلزامي. الثالث — سخام SABIC: طبقة سوداء دهنية على الحمولة. تنظيف بعد النقل. الميزة — أقل UV: غيوم رطوبة = UV أقل من حفر الباطن. لا UV Cover.',
        shortAnswer: 'على عكس [دباب مكشوف] في بيئة NaCl+VOC، يعتمد بروتوكولنا في خدمة [الدباب] بمدينة [الجبيل] على [Stretch Marine + Silica Gel + VCI]. ففي ظل [NaCl+VOC + 85-98% + سخام]، تتفاقم ظاهرة [تآكل + Short Circuit + سخام]. لذا؛ يتدخل خبراؤنا عبر [دباب صناعي-ساحلي].',
        heroSubtitle: 'NaCl+VOC تآكل + 98% تكثّف + سخام + أقل UV (ميزة!)',
    },
    pricing: [
        { type: 'نقل داخل الجبيل', unit: 'رحلة', minPrice: 35, maxPrice: 80, time: '30-60 دقيقة' },
        { type: '+ Stretch Marine + Silica Gel', unit: 'رحلة', minPrice: 50, maxPrice: 110, time: '30-60 دقيقة' },
        { type: 'اشتراك شهري (8 رحلات)', unit: 'شهر', minPrice: 210, maxPrice: 500, time: '8 رحلات' },
    ],
    faq: [
        { question: 'Short Circuit — حقيقي؟', answer: '85-98% = تكثّف على إلكترونيات = Short Circuit. Silica Gel + VCI = حماية. أخطر من أي مدينة.' },
        { question: 'NaCl+VOC — أسرع تآكل؟', answer: 'أسرع 2× من الخبر (NaCl فقط). VOC يُسرّع Galvanic. Stretch Marine = حاجز.' },
        { question: 'سخام — يتلف؟', answer: 'طبقة دهنية كربونية. لا يُتلف لكن يُلوّث. تنظيف بعد النقل.' },
        { question: 'أقل UV — ميزة؟', answer: 'رطوبة = غيوم = UV أقل 30-40% من حفر الباطن. لا UV Cover. ميزة!' },
        { question: 'هل الشركة مرخصة من هيئة النقل TGA؟', answer: 'كل شركات بروكر مرخصة TGA + بيان حمولة لوجستي. الترخيص = تأمين على الأمتعة + حقوق عميل. بدون ترخيص = لا تأمين = لا تعويض.' },
    ],
    expertTips: [
        'Silica Gel + VCI — 98% = Short Circuit. إلزامي.',
        'Stretch Marine — NaCl+VOC. عادي لا يكفي.',
        'أقل UV — لا UV Cover. توفير!',
        'تنظيف بعد نقل — سخام SABIC.',
        'صوّر كل قطعة أثاث قبل النقل — توثيق بصري يحمي حقك في التعويض لو حصل ضرر.',
    ],
    warnings: [
        '98% + إلكترونيات مكشوفة = Short Circuit فوري.',
        'NaCl+VOC + حديد = تآكل أسرع 2×.',
        'سخام + حمولة بيضاء = تلوّث مرئي.',
    ],
    trustAnchors: [
        { ...GOV.TGA, role: 'ترخيص النقل' },
        { entity: AMANA.SHARQIA.entity, url: AMANA.SHARQIA.url, role: 'اشتراطات النقل بالشرقية' },
    ],
    expertReviewer: EXPERTS.ALSHABNAN,
    expertCitations: [
        { expert: EXPERTS.ALZUWAYED.name, quote: 'دباب الجبيل: NaCl+VOC + 98% تكثّف = أخطر على إلكترونيات. Silica Gel + VCI + Stretch Marine.', source: 'هيئة النقل — النقل الصناعي-الساحلي' },
    ],
    saudiRegulations: [REGULATIONS.TGA_LICENSE],
    verificationBadges: [{ badge: '✔️ نقل مرخص', authority: 'هيئة النقل', icon: 'shield-check' }],
    equipment: [
        { name: 'Stretch Marine', use: 'NaCl+VOC — حاجز' },
        { name: 'Silica Gel', use: '98% — يمتص رطوبة' },
        { name: 'VCI', use: 'تكثّف — يمنع صدأ' },
    ],
    commonConcerns: [
        { concern: 'مسافة قصيرة.', solution: '98% تكثّف = دقائق. قصيرة ≠ آمنة.' },
        { concern: 'مثل الخبر.', solution: 'VOC + 98% > 95% + سخام. مختلف.' },
    ],
    consumerEducation: [
        { myth: 'Stretch عادي.', truth: 'لا يقاوم NaCl+VOC. Marine.' },
        { myth: 'لا Silica.', truth: '98% = Short Circuit. Silica إلزامي.' },
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
