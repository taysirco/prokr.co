import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../gov-references';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف منازل بعنيزة — Nafud SiO₂ 7 Mohs+CaCO₃ 550ppm+سوق التمور+لقاح — HEPA+Citric+Enzymatic! (2026)',
        description: 'تنظيف منازل عنيزة. Nafud SiO₂ خدش! CaCO₃ 550ppm كلس. سوق التمور سكر لزج. لقاح مارس-مايو. HEPA+Citric+Enzymatic.',
        h1: 'تنظيف منازل بعنيزة — Nafud+كلس+تمور+لقاح!',
        keywords: ['تنظيف منازل بعنيزة', 'تنظيف بيوت عنيزة', 'شركة تنظيف منازل بعنيزة'],
    },
    content: {
        introduction: 'منزل عنيزة = 4 تحديات قصيمية فريدة! Nafud SiO₂ 7 Mohs: رمل النفود الصلب (7 درجات بمقياس Mohs) ← أي فرك بدون شفط = خدوش دائمة على السيراميك والرخام! HEPA أولاً إلزامي. CaCO₃ 550ppm: ماء عنيزة عسر جداً ← كلس أبيض في الحمام والمطبخ يتراكم أسبوعياً. Citric Acid يُذيب. لا تستخدم ماء الصنبور للشطف! سوق التمور: أكبر سوق تمور بالعالم ← سكر لزج (Glucose+Fructose) ينتقل عبر الهواء أغسطس-أكتوبر ← طبقة لزجة على الأسطح. Enzymatic Cleaner يُفكك. لقاح النخيل: مارس-مايو = حبوب لقاح Van der Waals تلتصق بالأسطح ← لا تُمسح بالماء! بخار 130°م يقتل. يجف فوراً: 10-20% رطوبة = أسرع تجفيف بالمملكة! ميزة. مقارنة: ينبع = NaCl ملح+SOx+70-85% عفن! عنيزة = Nafud+كلس+تمور+لقاح = مختلف تماماً.',
        shortAnswer: 'على عكس [المنظف العادي+فرك]، يعتمد بروتوكولنا في خدمة [تنظيف المنازل] بمدينة [عنيزة] على [HEPA ← Citric ← Enzymatic ← بخار 130°م]. ففي ظل [Nafud SiO₂+CaCO₃ 550ppm+سوق التمور+لقاح]، تتفاقم ظاهرة [خدش+كلس+لزوجة+التصاق]. لذا؛ يتدخل فريقنا عبر [4 ركائز قصيمية] — ربع سنوي+لقاح+تمور!',
        heroSubtitle: 'Nafud 7 Mohs + CaCO₃ 550ppm + سوق التمور + لقاح — 4 ركائز!',
    },
    pricing: [
        { type: 'شقة', unit: 'شقة', minPrice: 180, maxPrice: 370, time: '3-5h — يجف فوراً!' },
        { type: 'فيلا', unit: 'فيلا', minPrice: 350, maxPrice: 720, time: '5-8h' },
        { type: 'بعد موسم تمور (أكتوبر)', unit: 'خدمة', minPrice: 250, maxPrice: 520, time: '4-6h — Enzymatic' },
        { type: 'ربع سنوي (4+لقاح+تمور)', unit: 'سنة', minPrice: 500, maxPrice: 1000, time: '6 زيارات' },
    ],
    faq: [
        { question: 'ليش HEPA أولاً بعنيزة؟', answer: 'Nafud SiO₂ 7 Mohs. أي فرك بدون شفط = خدوش دائمة!' },
        { question: 'ليش لا أستخدم ماء الصنبور للتنظيف بعنيزة؟', answer: 'CaCO₃ 550ppm = كلس جديد فوق كلس! Citric+RO أو تقطير.' },
        { question: 'ما الطبقة اللزجة أغسطس-أكتوبر بعنيزة؟', answer: 'سوق التمور سكر Glucose+Fructose. Enzymatic Cleaner.' },
        { question: 'كم تكلفة تنظيف بعنيزة مقارنة بينبع؟', answer: 'أرخص 10-15% — يجف فوراً+لا عفن! ينبع: NaCl+عفن.' },
        { question: 'كم مرة تنظيف بعنيزة؟', answer: 'ربع سنوي + لقاح (مارس-مايو) + تمور (أكتوبر) = 6/سنة.' },
    ],
    expertTips: [
        'HEPA أولاً — Nafud 7 Mohs خدوش.',
        'Citric Acid — CaCO₃ 550ppm.',
        'Enzymatic — سوق التمور سكر.',
        'بخار 130°م — لقاح Van der Waals.',
        'لا ماء صنبور — كلس جديد!',
    ],
    warnings: [
        'فرك Nafud SiO₂ = خدوش حلقات دائمة — HEPA أولاً.',
        'ماء صنبور (550ppm) = كلس فوق كلس — RO أو Citric.',
        'سوق التمور × شهر = طبقة سكر ← حشرات YMYL.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص شركات التنظيف' },
        { entity: AMANA.QASSIM.entity, url: AMANA.QASSIM.url, role: 'اشتراطات أمانة القصيم' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALMISNID.name, quote: 'عنيزة: 4 ركائز قصيمية. Nafud+CaCO₃+تمور+لقاح. يجف فوراً.', source: 'جغرافيا المناخ — القصيم' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ تنظيف مرخص', authority: 'بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'HEPA Filter', use: 'Nafud SiO₂ — شفط قبل فرك' },
        { name: 'Citric Acid', use: 'CaCO₃ 550ppm — حمام+مطبخ' },
        { name: 'Enzymatic Cleaner', use: 'سوق التمور — سكر Glucose' },
    ],
    commonConcerns: [
        { concern: 'جاف = نظيف.', solution: 'CaCO₃+Nafud+تمور+لقاح = 4 تحديات.' },
        { concern: 'مثل ينبع.', solution: 'Nafud+كلس ≠ NaCl+SOx.' },
    ],
    consumerEducation: [
        { myth: 'ماء يكفي.', truth: '550ppm = كلس جديد. Citric.' },
        { myth: 'سنوي.', truth: 'ربع سنوي+لقاح+تمور = 6.' },
    ],
    relatedServices: [
        { slug: 'apartments-cleaning', context: 'شقق', priority: 1 },
        { slug: 'carpet-cleaning', context: 'سجاد', priority: 2 },
        { slug: 'steam-cleaning', context: 'بخار', priority: 3 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 4 },
        { slug: 'pest-control', context: 'حشرات', priority: 5 },
        { slug: 'marble-polishing', context: 'رخام', priority: 6 },
        { slug: 'villas-cleaning', context: 'فلل', priority: 7 },
    ],
};
