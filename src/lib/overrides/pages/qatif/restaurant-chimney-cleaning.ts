import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف مداخن مطاعم بالقطيف — كربنة واحية لزجة + Biofilm + NaCl أسماك + NFPA (2026)',
        description: 'تنظيف مداخن القطيف. كربنة واحية لزجة. Biofilm 80-95%. NaCl أسماك. NFPA. Anti-Biofilm + Alkaline + Scraper.',
        h1: 'تنظيف مداخن مطاعم بالقطيف — كربنة واحية وBiofilm وأسماك خليجية',
        keywords: ['تنظيف مداخن مطاعم القطيف', 'تنظيف مداخن بالقطيف', 'شركة تنظيف مداخن بالقطيف'],
    },
    content: {
        introduction: 'مداخن القطيف = ساحلية-واحية + أسماك. الأول — كربنة واحية لزجة: 80-95% = لا تجف تماماً = لزجة = أسمك. الثاني — Biofilm: 80-95% = Biofilm يحمي الكربنة = يُسرّع NFPA. الثالث — NaCl أسماك: القطيف = صيد. مطاعم أسماك = NaCl عالي = بلورات ملحية+شحم. الرابع — مطاعم أسماك تاريخية: تراث صيد = مطاعم أسماك أكثر = مداخن أسماك أكثر.',
        shortAnswer: 'على عكس [تنظيف سطحي] فوق Biofilm+كربنة لزجة، يعتمد بروتوكولنا في خدمة [تنظيف المداخن] بمدينة [القطيف] على [Anti-Biofilm ← Alkaline ← Scraper ← مقياس]. ففي ظل [كربنة لزجة + Biofilm + NaCl أسماك]، تتفاقم ظاهرة [لزوجة + حماية + NFPA]. لذا؛ يتدخل خبراؤنا عبر [بروتوكول مدخنة ساحلي-واحي].',
        heroSubtitle: 'كربنة واحية + Biofilm يُسرّع NFPA + NaCl أسماك',
    },
    pricing: [
        { type: 'مدخنة (Anti-Biofilm + Alkaline)', unit: 'مدخنة', minPrice: 260, maxPrice: 620, time: '3-5 ساعات' },
        { type: 'فحص ميكرون', unit: 'فحص', minPrice: 130, maxPrice: 280, time: '1-2 ساعة' },
        { type: 'ربع سنوي', unit: 'سنة', minPrice: 840, maxPrice: 2100, time: '4 زيارات' },
        { type: 'طوارئ', unit: 'خدمة', minPrice: 330, maxPrice: 700, time: '2-4 ساعات' },
    ],
    faq: [
        { question: 'مطاعم أسماك — أكثر؟', answer: 'القطيف = تراث صيد. مطاعم أسماك أكثر = مداخن أسماك أكثر. NaCl أعلى.' },
        { question: 'Biofilm — يُسرّع NFPA؟', answer: '80-95% Biofilm = طبقة قابلة للاشتعال = أسرع NFPA 6,000 ميكرون.' },
        { question: 'مقابل الجبيل — فرق؟', answer: 'الجبيل: VOC إضافي. القطيف: أسماك. Biofilm مشابه لكن بدون VOC.' },
        { question: 'كم تكلفة التنظيف العميق مقارنة بالتنظيف العادي؟', answer: 'التنظيف العميق أغلى 30-50% لكنه يشمل: HEPA + بخار 150°م + تعقيم. التنظيف العادي = مسح سطحي. العميق كل 3-4 أشهر + العادي أسبوعياً = أفضل معادلة تكلفة/نظافة.' },
        { question: 'هل المواد المستخدمة آمنة على الأطفال؟', answer: 'مواد معتمدة من هيئة الغذاء والدواء SFDA. بعد التنظيف: تهوية 30 دقيقة كافية. بخار 150°م = بديل للكيماويات — آمن 100% على الأطفال والحيوانات.' },
    ],
    expertTips: [
        'Anti-Biofilm أولاً — يكشف الكربنة.',
        'مقياس ميكرون — Biofilm يُسرّع.',
        'مطاعم أسماك = كل شهرين.',
        'Baffle فلاتر أسبوعي.',
        'بعد التنظيف: شغّل المكيف وليس الشبّاك — الهواء الخارجي يعيد الغبار على الأسطح النظيفة.',
    ],
    warnings: [
        'Biofilm + كربنة = أسرع NFPA.',
        'مطعم أسماك = NaCl أعلى = أقسى.',
        'Anti-Biofilm قبل Alkaline — حاسم.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص مطاعم' },
        { ...GOV.CIVILDEFENSE, role: 'السلامة — NFPA 96' },
        { entity: AMANA.SHARQIA.entity, url: AMANA.SHARQIA.url, role: 'اشتراطات مطاعم بالشرقية' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALMOHAIMED.name, quote: 'مدخنة القطيف: Biofilm + كربنة واحية + NaCl أسماك. مطاعم أسماك = كل شهرين.', source: 'نصائح هندسية — مداخن الواحات الساحلية' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ مداخن مرخصة', authority: 'بلدي + دفاع مدني', icon: 'shield-check' }],
    equipment: [
        { name: 'Anti-Biofilm', use: '80-95% — يكشف' },
        { name: 'Alkaline', use: 'كربنة واحية لزجة' },
        { name: 'مقياس ميكرون', use: 'NFPA' },
    ],
    hiddenObjections: [
        { fear: 'مثل الخبر.', solution: 'واحي+أسماك. مختلف.' },
        { fear: 'ربع سنوي.', solution: 'مطاعم أسماك = شهرين.' },
    ],
    consumerEducation: [
        { myth: 'كيميائي يكفي.', truth: 'Biofilm يحمي.' },
        { myth: 'مثل الرياض.', truth: '80-95% Biofilm + أسماك.' },
    ],
    relatedServices: [
        { slug: 'oven-cleaning', context: 'أفران', priority: 1 },
        { slug: 'cleaning', context: 'تنظيف', priority: 2 },
        { slug: 'pest-control', context: 'حشرات', priority: 3 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 4 },
        { slug: 'steam-cleaning', context: 'بخار', priority: 5 },
        { slug: 'office-cleaning', context: 'مكاتب', priority: 6 },
        { slug: 'glass-facades-cleaning', context: 'واجهات', priority: 7 },
    ],
};
