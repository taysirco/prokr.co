import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../gov-references';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف سيارات بعنيزة — Nafud SiO₂ خدش Clear Coat+سكر تمور+لقاح لزج — No-Touch+Enzymatic! (2026)',
        description: 'تنظيف سيارات عنيزة. Nafud SiO₂ خدش Clear Coat! سكر تمور لزج. لقاح نخيل. No-Touch+Enzymatic+Pre-Rinse.',
        h1: 'تنظيف سيارات بعنيزة — Nafud خدش+تمور!',
        keywords: ['تنظيف سيارات بعنيزة', 'غسيل سيارة بعنيزة', 'شركة تنظيف سيارات بعنيزة'],
    },
    content: {
        introduction: 'سيارة عنيزة = Nafud يخدش+تمور تلصق! Nafud SiO₂ 7 Mohs: رمل النفود الصلب يستقر على السيارة ← أي إسفنج = خدوش حلقات (Swirl Marks) على Clear Coat! No-Touch Pre-Rinse ضغط أولاً. سكر تمور: أغسطس-أكتوبر = سوق التمور يُطلق سكر Glucose+Fructose بالهواء ← يلتصق بالطلاء = طبقة لزجة تجذب الذباب. Enzymatic Cleaner. لقاح النخيل: مارس-مايو = حبوب لقاح صفراء تلتصق بالطلاء الساخن (48°م) ← Van der Waals. محلول خاص. CaCO₃ 550ppm: ماء غسيل = بقع كلس بيضاء ← RO Water فقط. مقارنة: ينبع = NaCl ملح Pitting. عنيزة = Nafud SiO₂ خدش+تمور+لقاح = مختلف.',
        shortAnswer: 'على عكس [الإسفنج+ماء صنبور الذي يخدش+يكلس]، يعتمد بروتوكولنا في خدمة [تنظيف السيارات] بمدينة [عنيزة] على [Pre-Rinse ← No-Touch ← Enzymatic ← RO]. ففي ظل [Nafud SiO₂+سكر تمور+لقاح+CaCO₃]، تتفاقم ظاهرة [خدش+لزوجة+التصاق+كلس]. لذا؛ يتدخل فريقنا عبر [Pre-Rinse ← No-Touch ← Enzymatic ← RO].',
        heroSubtitle: 'Nafud خدش Clear Coat + سكر تمور + لقاح — No-Touch!',
    },
    pricing: [
        { type: 'غسيل No-Touch+RO', unit: 'سيارة', minPrice: 35, maxPrice: 70, time: '20-30 دقيقة' },
        { type: '+ Enzymatic (تمور)', unit: 'سيارة', minPrice: 50, maxPrice: 100, time: '30 دقيقة' },
        { type: '+ Wax حماية', unit: 'سيارة', minPrice: 55, maxPrice: 110, time: '30-45 دقيقة' },
        { type: 'أسبوعي (4/شهر)', unit: 'شهر', minPrice: 100, maxPrice: 200, time: '4 غسلات' },
    ],
    faq: [
        { question: 'ليش سيارة عنيزة تخدش بالإسفنج؟', answer: 'Nafud SiO₂ 7 Mohs. أصلب من Clear Coat. No-Touch+Pre-Rinse.' },
        { question: 'ما السكر اللزج على السيارة أغسطس-أكتوبر؟', answer: 'سوق التمور Glucose+Fructose. Enzymatic Cleaner.' },
        { question: 'ليش بقع بيضاء بعد الغسيل بعنيزة؟', answer: 'CaCO₃ 550ppm ماء عسر. RO Water فقط.' },
        { question: 'كم تكلفة غسيل بعنيزة مقارنة بينبع؟', answer: 'أرخص 10-15% — لا NaCl+يجف فوراً. ينبع: pH Foam.' },
        { question: 'كم مرة غسيل بعنيزة؟', answer: 'أسبوعي Nafud + يومي موسم تمور.' },
    ],
    expertTips: [
        'Pre-Rinse ضغط — Nafud 7 Mohs.',
        'No-Touch — لا إسفنج!',
        'Enzymatic — تمور سكر.',
        'RO Water — CaCO₃ بقع.',
        'Wax — حماية Clear Coat.',
    ],
    warnings: [
        'إسفنج + Nafud = خدوش حلقات دائمة — No-Touch.',
        'ماء صنبور 550ppm = بقع كلس بيضاء — RO.',
        'سكر تمور × أسبوع = ذباب+بقعة — Enzymatic.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص مغاسل السيارات' },
        { entity: AMANA.QASSIM.entity, url: AMANA.QASSIM.url, role: 'اشتراطات أمانة القصيم' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALMISNID.name, quote: 'سيارة عنيزة: Nafud+تمور+لقاح. No-Touch+Enzymatic+RO.', source: 'جغرافيا المناخ — سيارات القصيم' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ مغسلة مرخصة', authority: 'بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'Pre-Rinse ضغط', use: 'Nafud SiO₂ — إزالة قبل مسح' },
        { name: 'Enzymatic Cleaner', use: 'سكر تمور — تفكيك' },
        { name: 'RO Water', use: 'CaCO₃ — لا بقع' },
    ],
    commonConcerns: [
        { concern: 'إسفنج يكفي.', solution: 'Nafud = خدوش. No-Touch.' },
        { concern: 'ماء عادي.', solution: '550ppm = بقع. RO.' },
    ],
    consumerEducation: [
        { myth: 'شهري.', truth: 'أسبوعي Nafud. يومي تمور.' },
        { myth: 'أي ماء.', truth: 'RO فقط. 550ppm = كلس.' },
    ],
    relatedServices: [
        { slug: 'cleaning', context: 'تنظيف', priority: 1 },
        { slug: 'dabab', context: 'دباب', priority: 2 },
        { slug: 'dyna', context: 'دينا', priority: 3 },
        { slug: 'furniture-moving', context: 'نقل', priority: 4 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 5 },
        { slug: 'pest-control', context: 'حشرات', priority: 6 },
        { slug: 'glass-facades-cleaning', context: 'واجهات', priority: 7 },
    ],
};
