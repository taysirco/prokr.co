import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف مكاتب بعنيزة — SiO₂ أجهزة + طلع مهني + CaCO₃ + تمور حشرات — لا Sick Building! (2026)',
        description: 'تنظيف مكاتب عنيزة. SiO₂ يخدش أجهزة. طلع نخيل مهني. CaCO₃ صنابير. تمور حشرات. لا Sick Building! HEPA+Anti-Static.',
        h1: 'تنظيف مكاتب بعنيزة — رمل وطلع وتمور — لا Sick Building!',
        keywords: ['تنظيف مكاتب عنيزة', 'تنظيف مكتب بعنيزة', 'شركة تنظيف مكاتب عنيزة'],
    },
    content: {
        introduction: 'مكتب عنيزة يواجه 3 تحديات مهنية — لكن بدون أخطرها! SiO₂ من النفود يدخل من نظام التهوية ويستقر على شاشات وكيبوردات ← يخدش الأسطح الحساسة لو فركت بقطعة قماش. Anti-Static Cloth فقط. طلع 8 مليون نخلة × 8 ساعات عمل = حساسية تنفسية مهنية عند 15-20% من الموظفين. HEPA H13 يُزيل 99.97%. CaCO₃ 550ppm يترسب على صنابير ومغاسل المكتب. الفريد: موسم التمور = ذباب+نمل يدخل المكاتب القريبة من السوق. فحص مداخل كل زيارة. الميزة الذهبية: لا Sick Building! رطوبة 15-25% = صفر عفن = صفر عث = صفر Legionella = لا متلازمة مبنى مريض. عكس خميس مشيط تماماً حيث Sick Building حقيقي! أرخص 30% وأبسط.',
        shortAnswer: 'على عكس [التنظيف بقطعة قماش تخدش الشاشات]، يعتمد بروتوكولنا في خدمة [تنظيف المكاتب] بمدينة [عنيزة] على [Anti-Static Cloth + HEPA + Descaler + فحص مداخل]. ففي ظل [SiO₂ + طلع × 8h + CaCO₃ 550ppm + موسم تمور]، تتفاقم ظاهرة [خدش + حساسية + كلس + حشرات]. لذا؛ يتدخل فريقنا عبر [مسح ناعم ← شفط ← إذابة ← فحص] بدون Sick Building!',
        heroSubtitle: 'SiO₂ أجهزة + طلع × 8h + تمور — لا Sick Building!',
    },
    pricing: [
        { type: 'مكتب صغير (< 100 م²)', unit: 'خدمة', minPrice: 100, maxPrice: 210, time: '1-2 ساعة' },
        { type: 'مكتب كبير (100+ م²)', unit: 'خدمة', minPrice: 210, maxPrice: 430, time: '2-4 ساعات' },
        { type: 'أسبوعي (4 زيارات/شهر)', unit: 'شهر', minPrice: 290, maxPrice: 600, time: '4 زيارات' },
        { type: 'يومي (26 يوم/شهر)', unit: 'شهر', minPrice: 1500, maxPrice: 3000, time: '26 زيارة' },
    ],
    faq: [
        { question: 'كيف أنظف شاشات وأجهزة المكتب بعنيزة؟', answer: 'Anti-Static Cloth فقط. قطعة قماش عادية تحمل SiO₂ = خدش شاشة 200+ ريال. لا فرك.' },
        { question: 'كم تكلفة تنظيف مكتب بعنيزة مقابل خميس مشيط؟', answer: 'أرخص 30% — لا Anti-Fungal ولا Anti-Mite ولا Dehumidifier. لا Sick Building.' },
        { question: 'ليش بعض الموظفين يعطسون بعنيزة؟', answer: 'طلع 8 مليون نخلة × 8 ساعات = حساسية تنفسية. HEPA H13 يُزيل 99.97% من الطلع.' },
        { question: 'هل المكتب يحتاج Anti-Fungal بعنيزة؟', answer: 'لا! 15-25% = صفر عفن = لا Sick Building. عكس خميس (عفن+عث = Sick Building حقيقي).' },
        { question: 'متى أنظف المكتب من حشرات التمور؟', answer: 'أغسطس-أكتوبر = فحص مداخل كل زيارة. سد فجوات نوافذ + مصائد. خصوصاً مكاتب قريبة من السوق.' },
    ],
    expertTips: [
        'Anti-Static Cloth — SiO₂ يخدش شاشات وأجهزة.',
        'HEPA H13 — طلع نخيل = حساسية مهنية 8 ساعات.',
        'Descaler — CaCO₃ 550ppm على صنابير المكتب.',
        'فحص مداخل — موسم تمور = حشرات.',
        'لا Anti-Fungal — 15-25% = صفر Sick Building. وفّر.',
    ],
    warnings: [
        'قطعة قماش عادية + SiO₂ = خدش شاشة كمبيوتر (200+ ريال تغيير).',
        'طلع × 8 ساعات بدون HEPA = حساسية مهنية مزمنة — إجازات مرضية.',
        'موسم تمور + مكتب بدون فحص = ذباب أمام العملاء — سمعة.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص شركات التنظيف التجاري' },
        { entity: AMANA.QASSIM.entity, url: AMANA.QASSIM.url, role: 'اشتراطات أمانة القصيم' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALMISNID.name, quote: 'مكتب عنيزة: SiO₂ أجهزة + طلع مهني. لا Sick Building — ميزة. موسم تمور = فحص حشرات.', source: 'موسوعة أخطاء — بيئة عمل' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ تنظيف تجاري مرخص', authority: 'منصة بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'Anti-Static Cloth', use: 'مسح أجهزة بدون SiO₂ خدش' },
        { name: 'HEPA H13', use: 'شفط طلع — 99.97% حماية مهنية' },
        { name: 'Descaler حمضي', use: 'إذابة CaCO₃ من صنابير المكتب' },
    ],
    hiddenObjections: [
        { fear: 'Sick Building مثل خميس.', solution: '15-25% = صفر عفن+عث. لا Sick Building.' },
        { fear: 'حشرات تمور في المكتب.', solution: 'فحص مداخل + مصائد = حماية 99%.' },
    ],
    consumerEducation: [
        { myth: 'أي قطعة قماش تكفي للأجهزة.', truth: 'SiO₂ يخدش. Anti-Static Cloth فقط.' },
        { myth: 'المكتب يحتاج Anti-Mite.', truth: '15-25% = صفر عث. لا حاجة.' },
    ],
    relatedServices: [
        { slug: 'cleaning', context: 'تنظيف', priority: 1 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف — طلع', priority: 2 },
        { slug: 'carpet-cleaning', context: 'موكيت', priority: 3 },
        { slug: 'glass-facades-cleaning', context: 'واجهات', priority: 4 },
        { slug: 'pest-control', context: 'حشرات — تمور', priority: 5 },
        { slug: 'steam-cleaning', context: 'بخار', priority: 6 },
        { slug: 'hourly-cleaning', context: 'بالساعة', priority: 7 },
    ],
};
