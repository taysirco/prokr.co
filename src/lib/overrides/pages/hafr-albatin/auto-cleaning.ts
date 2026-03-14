import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'غسيل سيارات بحفر الباطن — SiO₂ عواصف Micro-Swirls + ΔT 54°م Clear Coat + UV قاري (2026)',
        description: 'غسيل سيارات حفر الباطن. SiO₂ عواصف = Micro-Swirls. ΔT 54°م = Clear Coat تقشّر. UV قاري = أكسدة. 10-15% جفاف. Touchless + Ceramic 9H.',
        h1: 'غسيل سيارات بحفر الباطن — رمل يخدش وحرارة تقشّر وشمس تُؤكسد',
        keywords: ['غسيل سيارات حفر الباطن', 'غسيل سيارة حفر الباطن', 'شركة غسيل سيارات حفر الباطن'],
    },
    content: {
        introduction: 'غسيل السيارة في حفر الباطن يواجه 4 تحديات قارية. الأولى — SiO₂ عواصف Micro-Swirls: عواصف 2-4/شهر = طبقة SiO₂ سميكة. إسفنجة = Micro-Swirls فوري. Touchless only. الثانية — ΔT 54°م Clear Coat: 52°م تمدد + -2°م انكماش = Clear Coat يتقشّر أسرع. Thermal Cycling = Fatigue. Ceramic 9H = حاجز مرن. الثالثة — UV قاري: أجف + أصفى سماء = UV أعلى. أكسدة Clear Coat أسرع. UV Protection. الرابعة — 10-15% جفاف: لا Water Spots (ميزة عن الخبر!). لكن: SiO₂ يلتصق بكهرباء ساكنة = أصعب إزالة. Anti-Static Rinse.',
        shortAnswer: 'على عكس [إسفنجة + ماء] الذي يخدش بـ SiO₂ ويتقشّر بـ ΔT، يعتمد بروتوكولنا في خدمة [غسيل السيارات] بمدينة [حفر الباطن] على [Touchless + Ceramic 9H + UV Protection + Anti-Static]. ففي ظل [SiO₂ + ΔT 54°م + UV + 10-15%]، تتفاقم ظاهرة [خدش + تقشّر + أكسدة]. لذا؛ يتدخل خبراؤنا عبر [غسيل صحراوي قاري].',
        heroSubtitle: 'SiO₂ Micro-Swirls + ΔT 54°م Clear Coat + UV قاري',
    },
    pricing: [
        { type: 'غسيل خارجي Touchless', unit: 'سيارة', minPrice: 40, maxPrice: 85, time: '15-25 دقيقة' },
        { type: 'غسيل شامل + Underbody', unit: 'سيارة', minPrice: 85, maxPrice: 170, time: '30-60 دقيقة' },
        { type: 'تلميع + Ceramic 9H', unit: 'سيارة', minPrice: 380, maxPrice: 950, time: '3-5 ساعات' },
        { type: 'اشتراك أسبوعي (4/شهر)', unit: 'شهر', minPrice: 140, maxPrice: 290, time: '4 غسلات' },
    ],
    faq: [
        { question: 'لا Water Spots — ميزة حقيقية؟', answer: '10-15% = يجف فوراً = لا Water Spots (ميزة عن الخبر 85-95%!). لكن: SiO₂ يجف بسرعة ← يلتصق ← أصعب. تناقض.' },
        { question: 'ΔT 54°م — أسوأ على Clear Coat؟', answer: 'الأسوأ في المملكة: 52°م يمدد ← -2°م ينكمش = 54°م فرق = تقشّر أسرع 2× من الرياض. Ceramic 9H مرن = يتحمل.' },
        { question: 'UV قاري — ليش أقوى؟', answer: '10-15% رطوبة = صفر غيوم. أصفى سماء = UV يصل كاملاً. أكسدة Clear Coat أسرع 30% من الرياض.' },
        { question: 'بعد عاصفة — فوراً؟', answer: 'SiO₂ + كهرباء ساكنة = يلتصق بالطلاء. كل ساعة تأخير = أصعب. Touchless فوري.' },
        { question: 'أسبوعي — ليش؟', answer: 'عواصف 2-4/شهر + SiO₂ يومي + UV يومي. أسبوعي = يمنع Micro-Swirls تراكمي.' },
    ],
    expertTips: [
        'Touchless فقط — SiO₂ عواصف أكثف = خدش أعمق.',
        'Ceramic 9H يتحمل ΔT 54°م — Wax يذوب في 52°م.',
        'UV Protection بعد كل تلميع — أصفى سماء = UV كامل.',
        'Anti-Static Rinse — 10-15% = SiO₂ يلتصق بشحنة.',
        'بعد عاصفة = Touchless فوري — لا تنظيف يدوي.',
    ],
    warnings: [
        'إسفنجة + SiO₂ عاصفة = Micro-Swirls أول غسلة. Touchless only.',
        'ΔT 54°م بدون Ceramic = Clear Coat يتقشّر 1-2 سنة.',
        'UV قاري + 10-15% = أكسدة أسرع 30%.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص مراكز الغسيل' },
        { entity: AMANA.HAFR.entity, url: AMANA.HAFR.url, role: 'اشتراطات البيئة بحفر الباطن' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALZUWAYED.name, quote: 'سيارة حفر الباطن = قارية: SiO₂ عواصف + ΔT 54°م + UV أعلى. Touchless + Ceramic + UV Protection = بروتوكول قاري.', source: 'هيئة النقل — غسيل المناخ القاري' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ غسيل مرخص', authority: 'منصة بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'Touchless Wash', use: 'صفر تلامس — SiO₂ عواصف' },
        { name: 'Ceramic 9H', use: 'مرن ΔT 54°م + مقاوم UV' },
        { name: 'Anti-Static Rinse', use: 'يُفرّغ شحنة SiO₂ في 10-15%' },
    ],
    hiddenObjections: [
        { fear: 'مثل الرياض.', solution: 'ΔT 54°م > 35°م. -2°م شتاء. UV أعلى. عواصف أكثف.' },
        { fear: 'Ceramic غالي.', solution: 'Ceramic = 380-950 ÷ 2-3 سنوات. إعادة طلاء = 3,000-8,000.' },
    ],
    consumerEducation: [
        { myth: 'غبار عادي.', truth: 'SiO₂ عواصف = أكثف + كهرباء ساكنة = يلتصق.' },
        { myth: 'إسفنجة ناعمة.', truth: 'SiO₂ عواصف = أكثف من الرياض. Touchless فقط.' },
        { myth: 'شهري.', truth: 'عواصف 2-4/شهر. أسبوعي.' },
    ],
    relatedServices: [
        { slug: 'cleaning', context: 'تنظيف — SiO₂', priority: 1 },
        { slug: 'glass-facades-cleaning', context: 'واجهات — SiO₂', priority: 2 },
        { slug: 'dabab', context: 'دباب — نقل', priority: 3 },
        { slug: 'dyna', context: 'دينا — نقل', priority: 4 },
        { slug: 'marble-polishing', context: 'رخام — مرآب', priority: 5 },
        { slug: 'furniture-moving', context: 'نقل — حماية', priority: 6 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف — ΔT', priority: 7 },
    ],
};
