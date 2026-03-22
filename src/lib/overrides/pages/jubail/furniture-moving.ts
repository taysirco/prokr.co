import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../gov-references';

export const override: PageOverride = {
    meta: {
        title: 'نقل أثاث بالجبيل — NaCl+VOC تآكل ترانزيت + 85-98% تكثّف + SABIC مسارات (2026)',
        description: 'نقل أثاث الجبيل. NaCl+VOC تآكل ترانزيت. 85-98% تكثّف Short Circuit. SABIC مسارات صناعية. VCI + Silica + Stretch Marine + تصاريح.',
        h1: 'نقل أثاث بالجبيل — ملح+بتروكيماويات في الطريق وتكثّف يُعطّل',
        keywords: ['نقل أثاث الجبيل', 'نقل عفش بالجبيل', 'شركة نقل أثاث بالجبيل'],
    },
    content: {
        introduction: 'نقل أثاث الجبيل = أقسى نقل ساحلي-صناعي. الأول — NaCl+VOC ترانزيت: أثاء النقل = NaCl+VOC يهاجم الأثاث. VCI لمعادن + Stretch Marine لأسطح. الثاني — 85-98% تكثّف: أقصى تكثّف = Short Circuit إلكترونيات + صدأ. Silica Gel إلزامي. الثالث — PVAc: 98% = PVAc يمتص = مفاصل ضعيفة. حذر. الرابع — SABIC مسارات: طرق صناعية = تصاريح + معرفة مسارات.',
        shortAnswer: 'على عكس [نقل عادي] في 98% تكثّف، يعتمد بروتوكولنا في خدمة [نقل الأثاث] بمدينة [الجبيل] على [VCI + Silica + Stretch Marine + تصاريح]. ففي ظل [NaCl+VOC + 85-98% + SABIC]، تتفاقم ظاهرة [تآكل + تكثّف + تقييد]. لذا؛ يتدخل خبراؤنا عبر [نقل صناعي-ساحلي].',
        heroSubtitle: 'NaCl+VOC ترانزيت + 98% تكثّف + PVAc + SABIC مسارات',
    },
    pricing: [
        { type: 'نقل داخل الجبيل', unit: 'رحلة', minPrice: 350, maxPrice: 780, time: '3-5 ساعات' },
        { type: 'الجبيل ← الدمام (100 كم)', unit: 'رحلة', minPrice: 930, maxPrice: 2300, time: '4-7 ساعات' },
        { type: 'الجبيل ← الرياض (400 كم)', unit: 'رحلة', minPrice: 2200, maxPrice: 5500, time: '8-14 ساعة' },
        { type: 'فك + تغليف Marine + نقل + تركيب', unit: 'باقة', minPrice: 780, maxPrice: 2000, time: '5-10 ساعات' },
    ],
    faq: [
        { question: '98% تكثّف — أخطر نقل؟', answer: 'الأخطر. 98% = تكثّف فوري على إلكترونيات = Short Circuit. Silica Gel + VCI = إلزامي. لا بديل.' },
        { question: 'VCI — لماذا؟', answer: 'NaCl+VOC = Galvanic 2×. مفصلات أثاث = حديد. VCI = حماية أثناء النقل.' },
        { question: 'PVAc — خلال النقل؟', answer: '98% في الشاحنة = PVAc يمتص = ضعف. نقل سريع + Dehumidifier في الشاحنة.' },
        { question: 'Stretch Marine — فرق عن عادي؟', answer: 'Marine = مُقاوم NaCl+VOC. عادي = يتآكل. فرق حماية.' },
        { question: 'هل الشركة مرخصة من هيئة النقل TGA؟', answer: 'كل شركات بروكر مرخصة TGA + بيان حمولة لوجستي. الترخيص = تأمين على الأمتعة + حقوق عميل. بدون ترخيص = لا تأمين = لا تعويض.' },
    ],
    expertTips: [
        'Silica Gel في كل صندوق — 98% = تكثّف.',
        'VCI لمعادن — NaCl+VOC Galvanic.',
        'Stretch Marine — لا Stretch عادي.',
        'نقل صباحي — أقل حرارة = أقل تكثّف.',
        'صوّر كل قطعة أثاث قبل النقل — توثيق بصري يحمي حقك في التعويض لو حصل ضرر.',
    ],
    warnings: [
        '98% + إلكترونيات بدون Silica = Short Circuit.',
        'VCI بدون = مفصلات تصدأ أثناء النقل.',
        'PVAc + 98% + نقل بطيء = تفكك.',
    ],
    trustAnchors: [
        { ...GOV.TGA, role: 'ترخيص نقل الأثاث' },
        { entity: AMANA.SHARQIA.entity, url: AMANA.SHARQIA.url, role: 'اشتراطات النقل بالشرقية' },
    ],
    expertReviewer: EXPERTS.ALSHABNAN,
    expertCitations: [
        { expert: EXPERTS.ALZUWAYED.name, quote: 'نقل الجبيل = الأخطر ساحلي-صناعي: 98% تكثّف + NaCl+VOC. VCI + Silica + Stretch Marine = إلزامي.', source: 'هيئة النقل — النقل الصناعي-الساحلي' },
    ],
    saudiRegulations: [REGULATIONS.TGA_LICENSE],
    verificationBadges: [{ badge: '✔️ نقل مرخص', authority: 'هيئة النقل', icon: 'shield-check' }],
    equipment: [
        { name: 'Stretch Marine', use: 'NaCl+VOC — أسطح' },
        { name: 'VCI', use: 'Galvanic — معادن' },
        { name: 'Silica Gel', use: '98% — تكثّف' },
    ],
    commonConcerns: [
        { concern: 'مثل الخبر.', solution: 'VOC + 98% > 95% + SABIC. أخطر.' },
        { concern: 'غالي.', solution: 'VCI + Silica = 50-100. تلف = آلاف.' },
    ],
    consumerEducation: [
        { myth: 'شاحنة مُغلقة.', truth: '98% = تكثّف حتى مُغلقة. Silica.' },
        { myth: 'Stretch عادي.', truth: 'NaCl+VOC يتآكله. Marine.' },
    ],
    relatedServices: [
        { slug: 'furniture-cleaning', context: 'أثاث — بعد', priority: 1 },
        { slug: 'furniture-storage', context: 'تخزين — 98%', priority: 2 },
        { slug: 'dabab', context: 'دباب — خفيف', priority: 3 },
        { slug: 'dyna', context: 'دينا — ثقيل', priority: 4 },
        { slug: 'cleaning', context: 'تنظيف', priority: 5 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 6 },
        { slug: 'pest-control', context: 'حشرات', priority: 7 },
    ],
};
