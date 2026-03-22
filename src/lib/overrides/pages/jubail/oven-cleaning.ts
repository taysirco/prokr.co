import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../gov-references';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف أفران بالجبيل — كربنة رطبة لزجة 98% + NaCl تصلب ملحي + Biofilm (2026)',
        description: 'تنظيف أفران الجبيل. كربنة رطبة لزجة (98%) أصعب كشط. NaCl تصلب ملحي. Biofilm 98%. VOC مستمر. Alkaline Marine + Anti-Biofilm.',
        h1: 'تنظيف أفران بالجبيل — كربنة لزجة لا تجف وملح يُصلّب وBiofilm يغطي',
        keywords: ['تنظيف أفران الجبيل', 'تنظيف فرن بالجبيل', 'شركة تنظيف أفران بالجبيل'],
    },
    content: {
        introduction: 'الفرن في الجبيل = عكس حفر الباطن تماماً. الأول — كربنة رطبة لزجة: 98% = الكربنة لا تجف = لزجة = تمتص أكثر = أسمك. أصعب كشط (لزجة > صلبة). Alkaline + Degreaser. الثاني — NaCl تصلب ملحي: ملح من أسماك + NaCl الهواء = بلورات ملحية. الثالث — Biofilm 98%: Biofilm شحمي على كل سطح = طبقة إضافية. Anti-Biofilm قبل Alkaline. الرابع — VOC مستمر: بتروكيماويات في الهواء ← تدخل المطبخ ← تترسب.',
        shortAnswer: 'على عكس [بخاخ] الذي لا يُعالج كربنة لزجة ولا Biofilm 98%، يعتمد بروتوكولنا في خدمة [تنظيف الأفران] بمدينة [الجبيل] على [Anti-Biofilm ← Alkaline Marine ← Degreaser]. ففي ظل [كربنة لزجة + NaCl + Biofilm + VOC]، تتفاقم ظاهرة [لزوجة + تصلب + طبقات]. لذا؛ يتدخل خبراؤنا عبر [بروتوكول فرن صناعي-ساحلي].',
        heroSubtitle: 'كربنة لزجة 98% + NaCl تصلب + Biofilm + VOC',
    },
    pricing: [
        { type: 'فرن عادي', unit: 'فرن', minPrice: 80, maxPrice: 170, time: '1-2 ساعة' },
        { type: 'عميق (Biofilm + لزجة)', unit: 'فرن', minPrice: 130, maxPrice: 260, time: '2-3 ساعات' },
        { type: 'فرن + شفاط + مطبخ', unit: 'باقة', minPrice: 210, maxPrice: 420, time: '3-5 ساعات' },
        { type: 'ربع سنوي', unit: 'سنة', minPrice: 390, maxPrice: 780, time: '4 زيارات' },
    ],
    faq: [
        { question: 'لزجة > صلبة — أصعب؟', answer: 'أصعب كشط — لزجة = Scraper ينزلق. حفر الباطن: صلبة = يُكسر. الجبيل: لزجة = يحتاج Alkaline + Degreaser + صبر.' },
        { question: 'Biofilm فرن — حقيقي؟', answer: '98% = Biofilm على كل سطح — حتى داخل الفرن. طبقة عضوية إضافية. Anti-Biofilm قبل الكربنة.' },
        { question: 'NaCl — في الفرن؟', answer: 'أسماك خليجية + NaCl هوائي = بلورات ملحية + كربنة = مُركّبة. Acid Rinse.' },
        { question: 'ربع سنوي — مثل حفر الباطن؟', answer: 'نعم — لكن لأسباب مختلفة! حفر الباطن: تجف فوراً. الجبيل: تتراكم لزجة. نفس التكرار — سبب مختلف.' },
        { question: 'كم تكلفة التنظيف العميق مقارنة بالتنظيف العادي؟', answer: 'التنظيف العميق أغلى 30-50% لكنه يشمل: HEPA + بخار 150°م + تعقيم. التنظيف العادي = مسح سطحي. العميق كل 3-4 أشهر + العادي أسبوعياً = أفضل معادلة تكلفة/نظافة.' },
    ],
    expertTips: [
        'Anti-Biofilm أولاً — يكشف الكربنة تحت.',
        'Alkaline + Marine Degreaser — لزجة + VOC.',
        'Acid Rinse — بلورات NaCl ملحية.',
        'ماء RO — لا ترسبات شطف.',
        'بعد التنظيف: شغّل المكيف وليس الشبّاك — الهواء الخارجي يعيد الغبار على الأسطح النظيفة.',
    ],
    warnings: [
        'كربنة لزجة × 6 أشهر = طبقات × Biofilm = لا تُزال بسهولة.',
        'Biofilm يحمي الكربنة = بخاخ لا يصل. Anti-Biofilm أولاً.',
        'NaCl بلوري + كربنة = مُركّبة أقسى.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص التنظيف' },
        { entity: AMANA.SHARQIA.entity, url: AMANA.SHARQIA.url, role: 'اشتراطات الصحة بالشرقية' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALMOHAIMED.name, quote: 'فرن الجبيل: كربنة لزجة 98% + NaCl + Biofilm. عكس حفر الباطن الصلبة. Anti-Biofilm ← Alkaline Marine.', source: 'نصائح هندسية — أفران ساحلية-صناعية' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ تنظيف أفران مرخص', authority: 'منصة بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'Anti-Biofilm', use: '98% Biofilm — يكشف الكربنة' },
        { name: 'Alkaline Marine', use: 'كربنة لزجة + VOC' },
        { name: 'Acid Rinse', use: 'NaCl بلوري — ملحي' },
    ],
    commonConcerns: [
        { concern: 'مثل حفر الباطن.', solution: 'لزجة ≠ صلبة. 98% ≠ 10-15%. Biofilm ≠ لا Biofilm. عكس.' },
        { concern: 'بخاخ.', solution: 'Biofilm يحمي. لا يصل. Anti-Biofilm أولاً.' },
    ],
    consumerEducation: [
        { myth: 'مثل الرياض.', truth: '98% لزجة + Biofilm + NaCl. رياض جافة.' },
        { myth: 'نصف سنوي.', truth: 'لزجة تتراكم أسرع. ربع سنوي.' },
    ],
    relatedServices: [
        { slug: 'restaurant-chimney-cleaning', context: 'مداخن — كربنة', priority: 1 },
        { slug: 'cleaning', context: 'تنظيف — مطبخ', priority: 2 },
        { slug: 'pest-control', context: 'حشرات — بعوض', priority: 3 },
        { slug: 'steam-cleaning', context: 'بخار', priority: 4 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 5 },
        { slug: 'hourly-cleaning', context: 'بالساعة', priority: 6 },
        { slug: 'glass-facades-cleaning', context: 'واجهات', priority: 7 },
    ],
};
