import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../gov-references';

export const override: PageOverride = {
    meta: {
        title: 'نقل أثاث بالقطيف — NaCl ترانزيت + 80-95% تكثّف + طين طرق + أزقة تاريخية (2026)',
        description: 'نقل أثاث القطيف. NaCl ترانزيت. 80-95% تكثّف. طين طرق زراعية. أزقة تاريخية ضيقة. VCI + Silica + فريق أزقة.',
        h1: 'نقل أثاث بالقطيف — ملح وتكثّف وطين وأزقة تاريخ',
        keywords: ['نقل أثاث القطيف', 'نقل عفش بالقطيف', 'شركة نقل أثاث بالقطيف'],
    },
    content: {
        introduction: 'نقل أثاث القطيف = ساحلي-واحي + طابع تاريخي. الأول — NaCl ترانزيت: أثناء النقل = رذاذ ملحي. VCI لمعادن. الثاني — 80-95% تكثّف: إلكترونيات = Short Circuit. Silica Gel. الثالث — طين: طرق زراعية = طين. حماية. الرابع — أزقة تاريخية: ميزة+تحدي. ميزة: نعرف كل زقاق. تحدي: شاحنة كبيرة لا تدخل = فك+نقل يدوي. كل شركات بروكر مرخصة من هيئة النقل TGA مع تأمين شامل على الأمتعة. البروتوكول: فك احترافي ← تغليف بابل + كرتون مقوى ← تحميل منظم بأحزمة تثبيت ← نقل بسيارات مجهزة ← تركيب في الموقع الجديد.',
        shortAnswer: 'على عكس [نقل عادي] بدون حماية NaCl ولا Silica، يعتمد بروتوكولنا في خدمة [نقل الأثاث] بمدينة [القطيف] على [VCI + Silica + فريق أزقة]. ففي ظل [NaCl + 80-95% + طين + أزقة]، تتفاقم ظاهرة [تآكل + تكثّف + التصاق + ضيق]. لذا؛ يتدخل خبراؤنا عبر [نقل ساحلي-واحي + فريق أزقة].',
        heroSubtitle: 'NaCl ترانزيت + 80-95% تكثّف + طين + أزقة تاريخية',
    },
    pricing: [
        { type: 'نقل داخل القطيف', unit: 'رحلة', minPrice: 320, maxPrice: 700, time: '3-5 ساعات' },
        { type: 'القطيف ← الدمام (30 كم)', unit: 'رحلة', minPrice: 750, maxPrice: 1800, time: '3-5 ساعات' },
        { type: 'القطيف ← الرياض (400 كم)', unit: 'رحلة', minPrice: 2000, maxPrice: 5000, time: '8-14 ساعة' },
        { type: 'أزقة تاريخية (يدوي)', unit: 'خدمة', minPrice: 400, maxPrice: 900, time: '4-7 ساعات' },
    ],
    faq: [
        { question: 'أزقة تاريخية — كيف؟', answer: 'فك ← نقل يدوي عبر أزقة ← دينا صغيرة خارج الحي ← نقل. فريق مُتخصص يعرف الأزقة.' },
        { question: 'يدوي أغلى — كم؟', answer: 'أغلى 25-40% بسبب اليدوي. لكن: لا بديل في الأزقة التاريخية.' },
        { question: 'VCI — ضروري؟', answer: 'NaCl + 80-95% = صدأ. VCI = 5-10 ريال/قطعة. بدون = صدأ.' },
        { question: 'Silica — لإلكترونيات فقط؟', answer: 'لإلكترونيات أساساً. + أجهزة حساسة. 80-95% = تكثّف.' },
        { question: 'هل الشركة مرخصة من هيئة النقل TGA؟', answer: 'كل شركات بروكر مرخصة TGA + بيان حمولة لوجستي. الترخيص = تأمين على الأمتعة + حقوق عميل. بدون ترخيص = لا تأمين = لا تعويض.' },
    ],
    expertTips: [
        'فريق أزقة — يعرف كل ممر.',
        'VCI لمعادن — NaCl.',
        'Silica لإلكترونيات — 80-95%.',
        'نقل صباحي — أقل حرارة+رطوبة.',
        'صوّر كل قطعة أثاث قبل النقل — توثيق بصري يحمي حقك في التعويض لو حصل ضرر.',
    ],
    warnings: [
        'أزقة + شاحنة كبيرة = لا تدخل. يدوي.',
        '80-95% + إلكترونيات بدون Silica = Short Circuit.',
        'NaCl + حديد بدون VCI = صدأ أثناء النقل.',
    ],
    trustAnchors: [
        { ...GOV.TGA, role: 'ترخيص نقل الأثاث' },
        { entity: AMANA.SHARQIA.entity, url: AMANA.SHARQIA.url, role: 'اشتراطات النقل بالشرقية' },
    ],
    expertReviewer: EXPERTS.ALSHABNAN,
    expertCitations: [
        { expert: EXPERTS.ALZUWAYED.name, quote: 'نقل القطيف: أزقة تاريخية = فريق يدوي مُتخصص. NaCl+80-95%. VCI+Silica+معرفة الأزقة.', source: 'هيئة النقل — النقل في المدن التاريخية' },
    ],
    saudiRegulations: [REGULATIONS.TGA_LICENSE],
    verificationBadges: [{ badge: '✔️ نقل مرخص', authority: 'هيئة النقل', icon: 'shield-check' }],
    equipment: [
        { name: 'VCI', use: 'NaCl — حديد' },
        { name: 'Silica Gel', use: '80-95% — إلكترونيات' },
        { name: 'Stretch', use: 'NaCl+طين — حاجز' },
    ],
    commonConcerns: [
        { concern: 'أزقة = مستحيل.', solution: 'فريق يدوي يعرف كل زقاق.' },
        { concern: 'غالي.', solution: 'يدوي = 25-40% إضافي. بدون = لا بديل.' },
    ],
    consumerEducation: [
        { myth: 'شاحنة كبيرة.', truth: 'أزقة = يدوي + دينا صغيرة.' },
        { myth: 'لا VCI.', truth: 'NaCl + 80-95%. صدأ.' },
    ],
    relatedServices: [
        { slug: 'furniture-cleaning', context: 'أثاث — بعد', priority: 1 },
        { slug: 'furniture-storage', context: 'تخزين', priority: 2 },
        { slug: 'dabab', context: 'دباب — أزقة', priority: 3 },
        { slug: 'dyna', context: 'دينا', priority: 4 },
        { slug: 'cleaning', context: 'تنظيف', priority: 5 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 6 },
        { slug: 'pest-control', context: 'حشرات', priority: 7 },
    ],
};
