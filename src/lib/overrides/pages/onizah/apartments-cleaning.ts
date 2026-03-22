import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../gov-references';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف شقق بعنيزة — Nafud SiO₂+CaCO₃ 550ppm+سكر تمور+لقاح — HEPA+Citric+Enzymatic! (2026)',
        description: 'تنظيف شقق عنيزة. Nafud SiO₂ خدش! CaCO₃ 550ppm كلس. سكر تمور. لقاح مارس-مايو. HEPA+Citric+Enzymatic.',
        h1: 'تنظيف شقق بعنيزة — Nafud+كلس+تمور!',
        keywords: ['تنظيف شقق بعنيزة', 'تنظيف شقة بعنيزة', 'شركة تنظيف شقق بعنيزة'],
    },
    content: {
        introduction: 'شقة عنيزة = Nafud يخدش+كلس يتراكم! Nafud SiO₂ 7 Mohs: رمل يدخل النوافذ ← يستقر على الأرضيات ← أي فرك بمسّاحة = خدوش على البلاط! HEPA أولاً. CaCO₃ 550ppm: كلس أبيض في المطبخ والحمام كل أسبوع ← Citric Acid. لا ماء صنبور! سوق التمور: أغسطس-أكتوبر = سكر لزج ينتقل بالهواء ← يلتصق بنوافذ الشقة. Enzymatic. لقاح: مارس-مايو = حبوب لقاح تدخل المكيف ← تنتشر بالشقة. HEPA AC. يجف فوراً: 10-20% = الشقة تجف خلال 15 دقيقة بعد المسح! ميزة كبيرة. مقابل ينبع: 6-10h! مقارنة: الباحة = عفن+6-10h+عرعر. عنيزة = Nafud+كلس+تمور+لقاح لكن يجف فوراً!',
        shortAnswer: 'على عكس [الفرك+ماء صنبور]، يعتمد بروتوكولنا في خدمة [تنظيف الشقق] بمدينة [عنيزة] على [HEPA ← Citric ← Enzymatic ← HEPA AC]. ففي ظل [Nafud SiO₂+CaCO₃ 550ppm+سكر تمور+لقاح]، تتفاقم ظاهرة [خدش+كلس+لزوجة+التصاق]. لذا؛ يتدخل فريقنا عبر [4 ركائز قصيمية] — يجف فوراً!',
        heroSubtitle: 'Nafud خدش + CaCO₃ كلس + تمور سكر + يجف فوراً 15 دقيقة!',
    },
    pricing: [
        { type: 'شقة غرفتين', unit: 'شقة', minPrice: 130, maxPrice: 270, time: '2-3h — يجف فوراً!' },
        { type: 'شقة 3-4 غرف', unit: 'شقة', minPrice: 200, maxPrice: 420, time: '3-5h' },
        { type: 'بعد تمور (أكتوبر)', unit: 'شقة', minPrice: 180, maxPrice: 370, time: '3-4h — Enzymatic' },
        { type: 'ربع سنوي', unit: 'سنة', minPrice: 400, maxPrice: 800, time: '6 زيارات' },
    ],
    faq: [
        { question: 'ليش شقة عنيزة تخدش بالمسّاحة؟', answer: 'Nafud SiO₂ 7 Mohs — رمل صلب. HEPA أولاً.' },
        { question: 'ليش كلس الحمام لا يروح بالماء بعنيزة؟', answer: 'CaCO₃ 550ppm = كلس صلب. Citric Acid. لا ماء صنبور!' },
        { question: 'ما السكر اللزج أغسطس-أكتوبر بعنيزة؟', answer: 'سوق التمور. Glucose+Fructose. Enzymatic Cleaner.' },
        { question: 'كم تجفيف شقة بعنيزة مقابل الباحة؟', answer: '15 دقيقة! الباحة: 6-10h. عنيزة الأسرع.' },
        { question: 'كم مرة تنظيف شقة بعنيزة؟', answer: 'ربع سنوي + لقاح + تمور = 6/سنة.' },
    ],
    expertTips: [
        'HEPA أولاً — Nafud 7 Mohs.',
        'Citric — CaCO₃ 550ppm.',
        'Enzymatic — تمور سكر.',
        'HEPA AC — لقاح مارس-مايو.',
        'يجف 15 دقيقة — ميزة!',
    ],
    warnings: [
        'فرك Nafud = خدوش بلاط — HEPA أولاً.',
        'ماء صنبور = كلس جديد — Citric+RO.',
        'سكر تمور × 3 أسابيع = حشرات — Enzymatic YMYL.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص شركات التنظيف' },
        { entity: AMANA.QASSIM.entity, url: AMANA.QASSIM.url, role: 'اشتراطات أمانة القصيم' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALMISNID.name, quote: 'شقة عنيزة: Nafud+CaCO₃+تمور. HEPA+Citric+Enzymatic. يجف فوراً.', source: 'جغرافيا المناخ — شقق القصيم' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ تنظيف مرخص', authority: 'بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'HEPA Filter', use: 'Nafud SiO₂ — شفط' },
        { name: 'Citric Acid', use: 'CaCO₃ 550ppm — إذابة' },
        { name: 'Enzymatic Cleaner', use: 'سكر تمور — تفكيك' },
    ],
    commonConcerns: [
        { concern: 'جاف = نظيف.', solution: 'Nafud+كلس+تمور = 4 تحديات.' },
        { concern: 'ماء يكفي.', solution: '550ppm = كلس. Citric.' },
    ],
    consumerEducation: [
        { myth: 'سنوي.', truth: 'ربع سنوي+لقاح+تمور = 6.' },
        { myth: 'جاف نظيف.', truth: 'Nafud+CaCO₃+سكر.' },
    ],
    relatedServices: [
        { slug: 'cleaning', context: 'تنظيف', priority: 1 },
        { slug: 'carpet-cleaning', context: 'سجاد', priority: 2 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 3 },
        { slug: 'steam-cleaning', context: 'بخار', priority: 4 },
        { slug: 'pest-control', context: 'حشرات', priority: 5 },
        { slug: 'marble-polishing', context: 'رخام', priority: 6 },
        { slug: 'villas-cleaning', context: 'فلل', priority: 7 },
    ],
};
