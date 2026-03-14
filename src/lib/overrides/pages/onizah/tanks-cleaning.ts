import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف خزانات بعنيزة — CaCO₃ 550ppm Scale + SiO₂ ترسب + تمور حشرات — لا Biofilm! (2026)',
        description: 'تنظيف خزانات عنيزة. CaCO₃ 550ppm Scale. SiO₂ ترسب. تمور حشرات فتحات. لا Biofilm! Descaler+ميكانيكي+كلور 1.3×.',
        h1: 'تنظيف خزانات بعنيزة — كلس وترسب وحشرات — لا Biofilm!',
        keywords: ['تنظيف خزانات عنيزة', 'تنظيف خزان بعنيزة', 'شركة تنظيف خزانات عنيزة'],
    },
    content: {
        introduction: 'خزان عنيزة يواجه تحديين كلاسيكيين + تحدٍ فريد — لكن بميزة ذهبية! التحدي الأول: CaCO₃ 550ppm — ماء عسر يُرسّب Scale (طبقة كلسية بيضاء صلبة) على جدران الخزان. يُقلل سعة التخزين وينمو عليه البكتيريا. Descaler حمضي يُذيب. التحدي الثاني: SiO₂ — رمل النفود يترسب كطمي في قاع الخزان. يُعكّر الماء ويسد المواسير. تنظيف ميكانيكي + شطف. التحدي الفريد: حشرات موسم التمور! ذباب+نمل يدخل فتحات الخزان العلوية ← يسقط في الماء ← تلوث. إحكام فتحات + شبك ناموسيات. الميزة الذهبية: لا Biofilm! 15-25% = صفر غشاء بيولوجي = كلور 100% فعّال من أول جرعة. في خميس والباحة: Biofilm يحمي البكتيريا = كلور مضاعف + Anti-Biofilm. هنا: كلور 1.3× يكفي = أرخص.',
        shortAnswer: 'على عكس [التنظيف بالماء فقط بدون Descaler]، يعتمد بروتوكولنا في خدمة [تنظيف الخزانات] بمدينة [عنيزة] على [Descaler + ميكانيكي + كلور 1.3× + إحكام حشرات]. ففي ظل [CaCO₃ 550ppm + SiO₂ + تمور حشرات + لا Biofilm]، تتفاقم ظاهرة [Scale + طمي + تلوث]. لذا؛ يتدخل فنيونا عبر [إذابة ← تنظيف ← تعقيم ← إحكام] لضمان ماء نقي.',
        heroSubtitle: 'CaCO₃ Scale + SiO₂ ترسب + تمور حشرات — لا Biofilm! كلور فعّال!',
    },
    pricing: [
        { type: 'علوي', unit: 'خزان', minPrice: 85, maxPrice: 180, time: '1-2 ساعة' },
        { type: 'أرضي', unit: 'خزان', minPrice: 180, maxPrice: 360, time: '2-3 ساعات' },
        { type: 'Descaler + ميكانيكي + إحكام', unit: 'خزان', minPrice: 210, maxPrice: 420, time: '3-4 ساعات' },
        { type: 'نصف سنوي (2 زيارة)', unit: 'سنة', minPrice: 260, maxPrice: 520, time: '2 زيارة' },
    ],
    faq: [
        { question: 'كم مرة أنظف الخزان بعنيزة سنوياً؟', answer: 'مرتين/سنة — CaCO₃ 550ppm يترسب كل 6 أشهر. بريدة: نفسه. خميس: 3 مرات (Biofilm).' },
        { question: 'كيف أمنع الكلس في الخزان بعنيزة؟', answer: 'Descaler حمضي كل 6 أشهر يُذيب CaCO₃. فلتر Softener على مدخل المياه = حل دائم (3000-5000 ريال).' },
        { question: 'ليش الماء يعكّر بعنيزة؟', answer: 'SiO₂ رمل النفود يترسب كطمي في قاع الخزان. تنظيف ميكانيكي + شطف 3 دورات.' },
        { question: 'هل الخزان يحتاج Anti-Biofilm بعنيزة؟', answer: 'لا! 15-25% = صفر Biofilm. كلور 1.3× فعّال من أول جرعة. وفّر 100% من Anti-Biofilm.' },
        { question: 'متى حشرات التمور تدخل الخزان؟', answer: 'أغسطس-أكتوبر = ذباب+نمل. فتحة خزان علوية مفتوحة = تلوث. إحكام + شبك ناموسيات إلزامي.' },
    ],
    expertTips: [
        'Descaler حمضي — CaCO₃ 550ppm Scale كل 6 أشهر.',
        'تنظيف ميكانيكي — SiO₂ طمي في القاع.',
        'كلور 1.3× — لا Biofilm = فعّال 100%.',
        'إحكام فتحات — تمور حشرات تدخل.',
        'لا Anti-Biofilm — 15-25% = صفر. وفّر.',
    ],
    warnings: [
        'CaCO₃ Scale بدون Descaler = انسداد مواسير خلال 1-2 سنة.',
        'فتحة خزان مفتوحة + موسم تمور = ذباب يسقط في الماء — تلوث صحي.',
        'SiO₂ طمي بدون تنظيف = تعكّر مستمر + ضغط منخفض.',
    ],
    trustAnchors: [
        { ...GOV.NWC, role: 'معايير مياه الشرب' },
        { ...GOV.BALADI, role: 'ترخيص شركات الخزانات' },
        { entity: AMANA.QASSIM.entity, url: AMANA.QASSIM.url, role: 'اشتراطات أمانة القصيم' },
    ],
    expertReviewer: EXPERTS.ALMOHAIMED,
    expertCitations: [
        { expert: EXPERTS.ALMOHAIMED.name, quote: 'خزان عنيزة: CaCO₃ 550ppm + SiO₂ طمي. لا Biofilm = كلور فعّال. حشرات تمور = إحكام.', source: 'نصائح هندسية — خزانات قصيمية' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [
        { badge: '✔️ خزانات مرخصة', authority: 'بلدي + NWC', icon: 'shield-check' },
    ],
    equipment: [
        { name: 'Descaler حمضي', use: 'إذابة CaCO₃ 550ppm Scale من جدران الخزان' },
        { name: 'تنظيف ميكانيكي', use: 'إزالة SiO₂ طمي من القاع' },
        { name: 'كلور 1.3× Demand', use: 'تعقيم — لا Biofilm = فعّال 100%' },
    ],
    hiddenObjections: [
        { fear: 'Anti-Biofilm مطلوب.', solution: '15-25% = صفر Biofilm. وفّر 100%.' },
        { fear: 'مثل بريدة.', solution: 'CaCO₃ 550 vs 600 = Scale أقل 8%. نفس البروتوكول.' },
    ],
    consumerEducation: [
        { myth: 'كلور عادي يكفي.', truth: 'CaCO₃ يستهلك جزء من الكلور = 1.3× Demand. ليس عادي.' },
        { myth: 'الخزان يحتاج تنظيف مرة/سنة.', truth: 'CaCO₃ 550ppm = مرتين/سنة. كل 6 أشهر.' },
    ],
    relatedServices: [
        { slug: 'swimming-pool-cleaning', context: 'مسابح — CaCO₃', priority: 1 },
        { slug: 'pest-control', context: 'حشرات — تمور', priority: 2 },
        { slug: 'cleaning', context: 'تنظيف', priority: 3 },
        { slug: 'villas-cleaning', context: 'فلل', priority: 4 },
        { slug: 'apartments-cleaning', context: 'شقق', priority: 5 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 6 },
        { slug: 'steam-cleaning', context: 'بخار', priority: 7 },
    ],
};
