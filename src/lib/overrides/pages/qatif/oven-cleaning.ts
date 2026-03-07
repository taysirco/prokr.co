import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف أفران بالقطيف — كربنة رطبة واحية + NaCl أسماك + Biofilm واحي (2026)',
        description: 'تنظيف أفران القطيف. كربنة رطبة واحية لزجة. NaCl أسماك خليجية. Biofilm واحي. Alkaline + Anti-Biofilm + Acid Rinse.',
        h1: 'تنظيف أفران بالقطيف — كربنة واحية لزجة وملح أسماك وBiofilm',
        keywords: ['تنظيف أفران القطيف', 'تنظيف فرن بالقطيف', 'شركة تنظيف أفران بالقطيف'],
    },
    content: {
        introduction: 'الفرن في القطيف = ساحلي-واحي. الأول — كربنة رطبة واحية: 80-95% = كربنة لا تجف تماماً = لزجة. أصعب كشط. Alkaline. الثاني — NaCl أسماك: القطيف = صيد أسماك تاريخي. أسماك خليجية = NaCl عالي في الشحم ← بلورات ملحية. Acid Rinse. الثالث — Biofilm واحي: 80-95% = Biofilm على أسطح الفرن. Anti-Biofilm قبل Alkaline.',
        shortAnswer: 'على عكس [بخاخ] فوق كربنة لزجة+Biofilm، يعتمد بروتوكولنا في خدمة [تنظيف الأفران] بمدينة [القطيف] على [Anti-Biofilm ← Alkaline ← Acid Rinse]. ففي ظل [كربنة لزجة + NaCl أسماك + Biofilm]، تتفاقم ظاهرة [لزوجة + تصلب ملحي + طبقات]. لذا؛ يتدخل خبراؤنا عبر [بروتوكول فرن ساحلي-واحي].',
        heroSubtitle: 'كربنة واحية لزجة + NaCl أسماك + Biofilm واحي',
    },
    pricing: [
        { type: 'فرن عادي', unit: 'فرن', minPrice: 70, maxPrice: 150, time: '1-2 ساعة' },
        { type: 'عميق (Biofilm + لزجة)', unit: 'فرن', minPrice: 115, maxPrice: 230, time: '2-3 ساعات' },
        { type: 'فرن + شفاط + مطبخ', unit: 'باقة', minPrice: 190, maxPrice: 380, time: '3-5 ساعات' },
        { type: 'ربع سنوي', unit: 'سنة', minPrice: 350, maxPrice: 700, time: '4 زيارات' },
    ],
    faq: [
        { question: 'أسماك — فرق؟', answer: 'القطيف صيد تاريخي. أسماك = NaCl عالي في الشحم ← بلورات ملحية+كربنة = مُركّبة.' },
        { question: 'Biofilm فرن — واحي؟', answer: '80-95% = Biofilm. طبقة عضوية فوق الكربنة. Anti-Biofilm يكشف.' },
        { question: 'مقابل الجبيل — أبسط؟', answer: 'لا VOC. أبسط. لكن: أسماك+واحي فريد.' },
    ],
    expertTips: [
        'Anti-Biofilm أولاً — يكشف الكربنة.',
        'Alkaline — كربنة لزجة.',
        'Acid Rinse — بلورات NaCl أسماك.',
        'RO شطف — لا ترسبات.',
    ],
    warnings: [
        'Biofilm يحمي الكربنة = بخاخ لا يصل.',
        'أسماك NaCl × 6 أشهر = بلورات قاسية.',
        'كربنة لزجة = أصعب من جافة.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص التنظيف' },
        { entity: AMANA.SHARQIA.entity, url: AMANA.SHARQIA.url, role: 'اشتراطات الصحة بالشرقية' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALMOHAIMED.name, quote: 'فرن القطيف: كربنة واحية + NaCl أسماك + Biofilm. Anti-Biofilm ← Alkaline ← Acid Rinse.', source: 'نصائح هندسية — أفران الواحات الساحلية' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ تنظيف أفران مرخص', authority: 'منصة بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'Anti-Biofilm', use: '80-95% — يكشف الكربنة' },
        { name: 'Alkaline', use: 'كربنة واحية لزجة' },
        { name: 'Acid Rinse', use: 'NaCl أسماك — بلوري' },
    ],
    hiddenObjections: [
        { fear: 'مثل الخبر.', solution: 'واحي+أسماك. مختلف.' },
        { fear: 'بخاخ.', solution: 'Biofilm يحمي. Anti-Biofilm أولاً.' },
    ],
    counterNarratives: [
        { myth: 'مثل الرياض.', truth: '80-95% لزجة + Biofilm + أسماك.' },
        { myth: 'نصف سنوي.', truth: 'لزجة تتراكم. ربع سنوي.' },
    ],
    relatedServices: [
        { slug: 'restaurant-chimney-cleaning', context: 'مداخن', priority: 1 },
        { slug: 'cleaning', context: 'تنظيف', priority: 2 },
        { slug: 'pest-control', context: 'حشرات', priority: 3 },
        { slug: 'steam-cleaning', context: 'بخار', priority: 4 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 5 },
        { slug: 'hourly-cleaning', context: 'بالساعة', priority: 6 },
        { slug: 'glass-facades-cleaning', context: 'واجهات', priority: 7 },
    ],
};
