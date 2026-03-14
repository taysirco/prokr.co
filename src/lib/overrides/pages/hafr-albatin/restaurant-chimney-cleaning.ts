import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف مداخن مطاعم بحفر الباطن — كربنة جافة أصلب + SiO₂ + ΔT 54°م + لا Biofilm (2026)',
        description: 'تنظيف مداخن حفر الباطن. كربنة جافة أصلب 52°م. SiO₂ يُخشّن. ΔT 54°م يُشقق ductwork. لا Biofilm (ميزة!). NFPA 96. Alkaline + Mechanical.',
        h1: 'تنظيف مداخن مطاعم بحفر الباطن — كربنة أصلب وحرارة تُشقق المجاري',
        keywords: ['تنظيف مداخن مطاعم حفر الباطن', 'تنظيف مداخن حفر الباطن', 'شركة تنظيف مداخن حفر الباطن'],
    },
    content: {
        introduction: 'مداخن حفر الباطن تواجه كربنة قارية + ΔT + ميزة. الأولى — كربنة جافة أصلب: أصلب كربنة في المملكة (52°م + 10-15%). تحتاج Alkaline pH 13 + Mechanical. الثانية — SiO₂ يُخشّن: يدخل من الخارج ← يترسب على الكربنة ← خشونة ← كربنة جديدة تلتصق أسرع. الثالثة — ΔT 54°م Ductwork: Ductwork يتمدد ← ينكمش = Micro-Cracks ← كربنة تدخل = خطر. الميزة — لا Biofilm!: 10-15% = لا Biofilm. لا Anti-Biofilm. أقل سمكاً = أبطأ وصول NFPA.',
        shortAnswer: 'على عكس [تنظيف بدون Mechanical] الذي لا يصل كربنة صلبة، يعتمد بروتوكولنا في خدمة [تنظيف المداخن] بمدينة [حفر الباطن] على [Alkaline pH 13 + Mechanical + فحص ΔT]. ففي ظل [كربنة صلبة + SiO₂ + ΔT]، تتفاقم ظاهرة [صلابة + خشونة + تشقق]. لذا؛ يتدخل خبراؤنا عبر [بروتوكول مدخنة قاري].',
        heroSubtitle: 'كربنة أصلب + SiO₂ خشونة + ΔT 54°م Ductwork + لا Biofilm',
    },
    pricing: [
        { type: 'مدخنة (Alkaline + Mechanical)', unit: 'مدخنة', minPrice: 270, maxPrice: 630, time: '2-4 ساعات' },
        { type: 'فحص ΔT Ductwork', unit: 'فحص', minPrice: 140, maxPrice: 290, time: '1-2 ساعة' },
        { type: 'عقد ربع سنوي', unit: 'سنة', minPrice: 870, maxPrice: 2100, time: '4 زيارات' },
        { type: 'طوارئ', unit: 'خدمة', minPrice: 340, maxPrice: 730, time: '2-3 ساعات' },
    ],
    faq: [
        { question: 'كربنة أصلب — أصعب تنظيف؟', answer: 'الأصعب في المملكة. 52°م + 10-15% = تجف فوراً = صلبة. Alkaline + Mechanical (ليس Alkaline فقط).' },
        { question: 'لا Biofilm — أبطأ NFPA؟', answer: 'نعم! لا Biofilm = لا سمك إضافي = أبطأ وصول 6,000 ميكرون. ميزة قارية. ربع سنوي كافٍ (بدلاً من أقل في الشرقية).' },
        { question: 'ΔT Ductwork — خطر؟', answer: 'Micro-Cracks = كربنة تتسرب ← خطر اشتعال في مكان غير مُراقب. فحص ΔT سنوي.' },
        { question: 'SiO₂ في المدخنة — من أين؟', answer: 'من الهواء الخارجي ← يدخل من فتحات ← يترسب على كربنة ← يُخشّن ← تلتصق أسرع.' },
        { question: 'ربع سنوي — يكفي؟', answer: 'لا Biofilm = أبطأ. كربنة صلبة = أبطأ نمو لكن أصعب إزالة. ربع سنوي = مثالي.' },
    ],
    expertTips: [
        'Alkaline pH 13 + Mechanical — كربنة صلبة لا تستجيب لكيميائي فقط.',
        'فحص ΔT Ductwork سنوي — يكشف Micro-Cracks.',
        'لا Anti-Biofilm — 10-15% = توفير!',
        'Baffle فلاتر شهري — SiO₂ يسد.',
        'مقياس ميكرون — كربنة صلبة أبطأ لكن أصعب.',
    ],
    warnings: [
        'كربنة صلبة + Micro-Cracks = تسرب ← اشتعال. ربع سنوي + فحص.',
        'SiO₂ يُخشّن ← تراكم أسرع. فلاتر شهري.',
        'Alkaline فقط بدون Mechanical = لا يعمل على كربنة 52°م.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص مطاعم' },
        { ...GOV.CIVILDEFENSE, role: 'السلامة — NFPA 96' },
        { entity: AMANA.HAFR.entity, url: AMANA.HAFR.url, role: 'اشتراطات مطاعم حفر الباطن' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALMOHAIMED.name, quote: 'مدخنة حفر الباطن: كربنة أصلب (52°م+10-15%) + SiO₂ خشونة + ΔT Ductwork. لا Biofilm (ميزة!). Alkaline + Mechanical.', source: 'نصائح هندسية — مداخن قارية' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ مداخن مرخصة', authority: 'بلدي + دفاع مدني', icon: 'shield-check' }],
    equipment: [
        { name: 'Alkaline pH 13', use: 'كربنة صلبة — 30 دقيقة' },
        { name: 'Mechanical Scraper', use: 'خشونة SiO₂ + صلابة' },
        { name: 'Thermal Camera', use: 'ΔT Ductwork Micro-Cracks' },
        { name: 'مقياس ميكرون', use: 'كربنة صلبة = قياس NFPA' },
    ],
    commonConcerns: [
        { concern: 'لا Biofilm = أسهل.', solution: 'كربنة أصلب + SiO₂ + ΔT. 3 تحديات قارية.' },
        { concern: 'ربع سنوي مكلف.', solution: 'حريق = 50,000-200,000. عقد = 1-4%.' },
    ],
    consumerEducation: [
        { myth: 'مثل الرياض.', truth: '52°م أحر = أصلب. ΔT 54°م > 35°م.' },
        { myth: 'كيميائي يكفي.', truth: 'كربنة صلبة = Mechanical إلزامي.' },
        { myth: 'نصف سنوي.', truth: 'SiO₂ يُخشّن = تراكم أسرع. ربع سنوي.' },
    ],
    relatedServices: [
        { slug: 'oven-cleaning', context: 'أفران — كربنة', priority: 1 },
        { slug: 'cleaning', context: 'تنظيف — مطعم', priority: 2 },
        { slug: 'pest-control', context: 'حشرات', priority: 3 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف — ΔT', priority: 4 },
        { slug: 'steam-cleaning', context: 'بخار', priority: 5 },
        { slug: 'office-cleaning', context: 'مكاتب', priority: 6 },
        { slug: 'glass-facades-cleaning', context: 'واجهات', priority: 7 },
    ],
};
