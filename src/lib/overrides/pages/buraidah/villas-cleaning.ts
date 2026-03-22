import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../gov-references';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف فلل ببريدة — CaCO₃ 600ppm كلس كل حمام+نخيل 8M+Nafud — Descaler+HEPA! (2026)',
        description: 'تنظيف فلل بريدة. CaCO₃ 600ppm كلس كل حمام ومطبخ! نخيل 8M غبار. Nafud SiO₂. Descaler+HEPA+RO.',
        h1: 'تنظيف فلل ببريدة — أعلى كلس في كل زاوية!',
        keywords: ['تنظيف فلل بريدة', 'تنظيف فيلا ببريدة', 'شركة تنظيف فلل بريدة'],
    },
    content: {
        introduction: 'فيلا بريدة = أعلى كلس بالمملكة في كل حمام ومطبخ! CaCO₃ 600ppm: فيلا 3-5 حمامات × أعلى كلس = Descaler أسبوعي لكل حمام. مطبخ = كلس+دهن طبقة مزدوجة. RO شطف. نخيل 8M: فيلا محاطة بنخيل = حبوب لقاح+ألياف+غبار تمور يومياً. HEPA Pollen في كل طابق. Nafud SiO₂: رمل النفود الناعم يدخل من الفناء (حوش) ← يخدش أرضيات الرخام والبلاط. Pre-Rinse+Microfiber. ΔT 45°م: فيلا كبيرة = مساحات عزل أكبر. تجفيف 20-30 دقيقة. 10-20% = لا عفن! لا عث! تجفيف سريع. مقارنة: خميس = 7 محاور+عفن+عث+4-8h = أغلى 30-40%. بريدة = 4 محاور+لا عفن = أبسط.',
        shortAnswer: 'على عكس [التنظيف بماء صنبور بدون Descaler+HEPA]، يعتمد بروتوكولنا في خدمة [تنظيف الفلل] بمدينة [بريدة] على [Descaler أسبوعي+HEPA Pollen+Pre-Rinse+RO]. ففي ظل [CaCO₃ 600ppm+نخيل 8M+Nafud SiO₂+ΔT 45°م]، تتفاقم ظاهرة [كلس كل حمام+غبار نخيلي+خدش]. لذا؛ يتدخل فريقنا عبر [4 محاور قصيمية] — لا عفن! تجفيف سريع!',
        heroSubtitle: 'CaCO₃ 600ppm كل حمام + نخيل 8M + Nafud — لا عفن!',
    },
    pricing: [
        { type: 'فيلا صغيرة (300 م²)', unit: 'فيلا', minPrice: 350, maxPrice: 700, time: '5-7h + 25 دقيقة' },
        { type: 'فيلا كبيرة (500+ م²)', unit: 'فيلا', minPrice: 600, maxPrice: 1200, time: '8-10h' },
        { type: '+ Descaler عميق كل الحمامات', unit: 'إضافي', minPrice: 150, maxPrice: 300, time: '2-3h' },
        { type: 'أسبوعي (4/شهر)', unit: 'شهر', minPrice: 800, maxPrice: 1600, time: '4 زيارات' },
    ],
    faq: [
        { question: 'ليش فيلا بريدة تحتاج Descaler أسبوعي؟', answer: 'CaCO₃ 600ppm أعلى كلس. 3-5 حمامات. أسبوع = كلس صلب.' },
        { question: 'كيف النخيل يأثر على الفيلا ببريدة؟', answer: 'فيلا محاطة بنخيل = لقاح+ألياف+غبار تمور يومياً. HEPA كل طابق.' },
        { question: 'كم تكلفة تنظيف فيلا ببريدة مقارنة بخميس؟', answer: 'أرخص 30-40% — 4 محاور مقابل 7. لا Anti-Fungal+Anti-Mite.' },
        { question: 'هل الفيلا تتعفّن ببريدة؟', answer: 'لا! 10-20% = لا عفن. تجفيف 20-30 دقيقة. خميس: عفن أسبوعين.' },
        { question: 'هل Nafud يخدش رخام الفيلا ببريدة؟', answer: 'Nafud 10-50 μm من الحوش = يخدش. Pre-Rinse+Microfiber.' },
    ],
    expertTips: [
        'Descaler أسبوعي — 600ppm كل حمام.',
        'HEPA Pollen كل طابق — نخيل 8M.',
        'Pre-Rinse — Nafud من الحوش.',
        'RO Rinse — لا كلس جديد.',
        'لا عفن! — تجفيف 25 دقيقة.',
    ],
    warnings: [
        'CaCO₃ 600ppm × 3-5 حمامات × أسبوع = كلس صلب — 3000+ إصلاح.',
        'نخيل + فيلا بدون HEPA = حساسية تنفسية لكل الأسرة YMYL.',
        'Nafud + حوش + رخام = خدش تراكمي — Diamond Pad سنوي.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص شركات التنظيف' },
        { entity: AMANA.QASSIM.entity, url: AMANA.QASSIM.url, role: 'اشتراطات أمانة القصيم' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALMISNID.name, quote: 'فيلا بريدة: 4 محاور قصيمية. 600ppm+8M+Nafud. لا عفن. أبسط 30%.', source: 'جغرافيا المناخ — فلل القصيم' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ تنظيف فلل مرخص', authority: 'بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'Descaler صناعي', use: 'CaCO₃ 600ppm — كل حمام' },
        { name: 'HEPA Pollen', use: 'نخيل 8M — كل طابق' },
        { name: 'RO Water+Microfiber', use: 'لا كلس+لا خدش' },
    ],
    commonConcerns: [
        { concern: 'مثل الرياض.', solution: '600ppm > 300. 8M نخلة. Nafud.' },
        { concern: 'مثل خميس.', solution: '4 محاور مقابل 7 = أرخص 40%.' },
    ],
    consumerEducation: [
        { myth: 'تنظيف عادي.', truth: '4 محاور: Descaler+HEPA+Pre-Rinse+RO.' },
        { myth: 'Descaler شهري.', truth: '600ppm = أسبوعي. أسرع تكلّس.' },
    ],
    relatedServices: [
        { slug: 'apartments-cleaning', context: 'شقق', priority: 1 },
        { slug: 'cleaning', context: 'تنظيف', priority: 2 },
        { slug: 'carpet-cleaning', context: 'سجاد', priority: 3 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 4 },
        { slug: 'marble-polishing', context: 'رخام', priority: 5 },
        { slug: 'pest-control', context: 'حشرات', priority: 6 },
        { slug: 'sofa-cleaning', context: 'كنب', priority: 7 },
    ],
};
