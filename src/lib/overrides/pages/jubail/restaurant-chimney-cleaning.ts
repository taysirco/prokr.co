import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../gov-references';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف مداخن مطاعم بالجبيل — كربنة لزجة + Biofilm أقصى + NaCl أسماك + NFPA أسرع (2026)',
        description: 'تنظيف مداخن الجبيل. كربنة لزجة 98%. Biofilm أقصى يُسرّع NFPA. NaCl أسماك. VOC يُضاف. Alkaline Marine + Anti-Biofilm + Scraper.',
        h1: 'تنظيف مداخن مطاعم بالجبيل — كربنة لزجة وBiofilm يُسرّع الاشتعال',
        keywords: ['تنظيف مداخن مطاعم الجبيل', 'تنظيف مداخن بالجبيل', 'شركة تنظيف مداخن بالجبيل'],
    },
    content: {
        introduction: 'مداخن الجبيل = الأخطر في المملكة بسبب Biofilm. الأول — كربنة لزجة 98%: لا تجف = لزجة = أسمك = أسرع وصول NFPA 6,000 ميكرون. الثاني — Biofilm أقصى: 98% = Biofilm شحمي = طبقة إضافية فوق الكربنة = يُسرّع NFPA. أخطر عامل. الثالث — NaCl أسماك: مطاعم خليجية = أسماك = NaCl شحم = تصلب ملحي+كربنة. الرابع — VOC: بتروكيماويات في الهواء ← تدخل المدخنة ← طبقة إضافية.',
        shortAnswer: 'على عكس [تنظيف سطحي] الذي لا يصل Biofilm تحت الكربنة، يعتمد بروتوكولنا في خدمة [تنظيف المداخن] بمدينة [الجبيل] على [Anti-Biofilm ← Alkaline Marine ← Scraper ← مقياس]. ففي ظل [كربنة لزجة + Biofilm + NaCl + VOC]، تتفاقم ظاهرة [لزوجة + طبقات + NFPA أسرع]. لذا؛ يتدخل خبراؤنا عبر [بروتوكول مدخنة صناعي-ساحلي].',
        heroSubtitle: 'كربنة لزجة + Biofilm أسرع NFPA + NaCl أسماك + VOC',
    },
    pricing: [
        { type: 'مدخنة (Anti-Biofilm + Alkaline)', unit: 'مدخنة', minPrice: 290, maxPrice: 680, time: '3-5 ساعات' },
        { type: 'فحص ميكرون + Biofilm', unit: 'فحص', minPrice: 150, maxPrice: 310, time: '1-2 ساعة' },
        { type: 'ربع سنوي', unit: 'سنة', minPrice: 930, maxPrice: 2300, time: '4 زيارات' },
        { type: 'طوارئ', unit: 'خدمة', minPrice: 370, maxPrice: 780, time: '2-4 ساعات' },
    ],
    faq: [
        { question: 'Biofilm — يُسرّع NFPA؟', answer: 'نعم! Biofilm = طبقة عضوية قابلة للاشتعال = يُضاف فوق الكربنة = أسرع وصول 6,000 ميكرون. أخطر عامل في الجبيل.' },
        { question: 'لزجة — أسوأ من صلبة؟', answer: 'مختلفة — لزجة = أسمك أسرع (لا تجف = تمتص أكثر). صلبة (حفر الباطن) = أصعب كشط لكن أبطأ نمو.' },
        { question: 'NaCl أسماك — فرق؟', answer: 'أسماك خليجية = NaCl عالي في الشحم ← يتصلّب ← يُركّب مع الكربنة = أقسى.' },
        { question: 'ربع سنوي — مثل حفر الباطن؟', answer: 'نفس التكرار لكن: Biofilm يُسرّع. ربع سنوي = الحد الأقصى. شهرين أفضل لمطاعم أسماك.' },
        { question: 'كم تكلفة التنظيف العميق مقارنة بالتنظيف العادي؟', answer: 'التنظيف العميق أغلى 30-50% لكنه يشمل: HEPA + بخار 150°م + تعقيم. التنظيف العادي = مسح سطحي. العميق كل 3-4 أشهر + العادي أسبوعياً = أفضل معادلة تكلفة/نظافة.' },
    ],
    expertTips: [
        'Anti-Biofilm أولاً — يكشف الكربنة.',
        'Alkaline Marine — لزجة + VOC.',
        'مقياس ميكرون شهري — Biofilm يُسرّع.',
        'Baffle فلاتر أسبوعي —  98% Biofilm يسد.',
        'بعد التنظيف: شغّل المكيف وليس الشبّاك — الهواء الخارجي يعيد الغبار على الأسطح النظيفة.',
    ],
    warnings: [
        'Biofilm + كربنة لزجة = أسرع NFPA في المملكة.',
        'Anti-Biofilm قبل Alkaline — بدونه = لا يصل.',
        'مطعم أسماك خليجي = NaCl أعلى = أقسى.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص مطاعم' },
        { ...GOV.CIVILDEFENSE, role: 'السلامة — NFPA 96' },
        { entity: AMANA.SHARQIA.entity, url: AMANA.SHARQIA.url, role: 'اشتراطات مطاعم بالشرقية' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALMOHAIMED.name, quote: 'مدخنة الجبيل: Biofilm يُسرّع NFPA + كربنة لزجة + NaCl أسماك. Anti-Biofilm ← Alkaline Marine = الترتيب الحاسم.', source: 'نصائح هندسية — مداخن ساحلية-صناعية' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ مداخن مرخصة', authority: 'بلدي + دفاع مدني', icon: 'shield-check' }],
    equipment: [
        { name: 'Anti-Biofilm', use: '98% Biofilm — يكشف الكربنة' },
        { name: 'Alkaline Marine', use: 'كربنة لزجة + VOC' },
        { name: 'Scraper', use: 'NaCl بلوري' },
        { name: 'مقياس ميكرون', use: 'NFPA — Biofilm يُسرّع' },
    ],
    commonConcerns: [
        { concern: 'مثل حفر الباطن.', solution: 'Biofilm أقصى + لزجة ≠ صلبة. NFPA أسرع.' },
        { concern: 'ربع سنوي كافٍ.', solution: 'مطاعم أسماك: شهرين. Biofilm يُسرّع.' },
    ],
    consumerEducation: [
        { myth: 'كيميائي يكفي.', truth: 'Biofilm يحمي الكربنة. Anti-Biofilm أولاً.' },
        { myth: 'مثل الرياض.', truth: 'Biofilm + NaCl + لزجة. مختلف.' },
    ],
    relatedServices: [
        { slug: 'oven-cleaning', context: 'أفران — كربنة', priority: 1 },
        { slug: 'cleaning', context: 'تنظيف — مطعم', priority: 2 },
        { slug: 'pest-control', context: 'حشرات — بعوض', priority: 3 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 4 },
        { slug: 'steam-cleaning', context: 'بخار', priority: 5 },
        { slug: 'office-cleaning', context: 'مكاتب', priority: 6 },
        { slug: 'glass-facades-cleaning', context: 'واجهات', priority: 7 },
    ],
};
