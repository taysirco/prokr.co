import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'دباب نقل بعنيزة — SiO₂ + ΔT 50°م + نقل تمور تبريد — بريدة 30 كم! (2026)',
        description: 'دباب نقل عنيزة. SiO₂ يخدش البضائع. ΔT 50°م يُتلف الحساس. نقل تمور = تبريد 18°م. بريدة 30 كم فقط! لا NaCl = أرخص.',
        h1: 'دباب نقل بعنيزة — رمل وحرارة ونقل تمور',
        keywords: ['دباب نقل عنيزة', 'دباب نقل بعنيزة', 'شركة دباب نقل عنيزة'],
    },
    content: {
        introduction: 'الدباب في عنيزة يحمل مسؤولية مزدوجة لا تجدها في أي مدينة أخرى: نقل بضائع عادية + نقل تمور! التمور: عنيزة = أكبر سوق تمور بالعالم. نقل التمور يحتاج تبريد 18°م — بدونه تتخمر خلال ساعات تحت شمس 48°م. SiO₂ من النفود يخدش البضائع المكشوفة — Stretch Film إلزامي. ΔT 50°م (من -2° شتاءً إلى 48° صيفاً) يُجهد البطاريات والإلكترونيات — عزل حراري. الميزة الذهبية: لا NaCl ملح بحري = لا صدأ = لا VCI = أرخص من الساحل. بريدة 30 كم فقط = أقرب مدينة كبيرة = نقل سريع ورخيص.',
        shortAnswer: 'على عكس [النقل المكشوف الذي يعرض للخدش والحرارة]، يعتمد بروتوكولنا في خدمة [دباب النقل] بمدينة [عنيزة] على [Stretch Film + تبريد تمور 18°م + عزل حراري]. ففي ظل [SiO₂ + ΔT 50°م + موسم تمور + بريدة 30 كم]، تتفاقم ظاهرة [خدش + تلف + تخمر]. لذا؛ يتدخل سائقونا عبر [تغليف ← تبريد ← عزل] لضمان توصيل آمن.',
        heroSubtitle: 'SiO₂ + ΔT 50°م + نقل تمور تبريد — بريدة 30 كم!',
    },
    pricing: [
        { type: 'داخل عنيزة', unit: 'رحلة', minPrice: 25, maxPrice: 55, time: '30-60 دقيقة' },
        { type: 'عنيزة ← بريدة (30 كم)', unit: 'رحلة', minPrice: 35, maxPrice: 70, time: '30 دقيقة' },
        { type: 'نقل تمور مبرّد', unit: 'رحلة', minPrice: 50, maxPrice: 100, time: '30-60 دقيقة' },
        { type: 'يومي (موسم تمور)', unit: 'يوم', minPrice: 150, maxPrice: 350, time: '8 ساعات' },
    ],
    faq: [
        { question: 'كم المسافة من عنيزة لبريدة بالدباب؟', answer: '30 كم = 20-30 دقيقة. أقرب مدينة كبيرة. 35-70 ريال فقط.' },
        { question: 'كيف أنقل تمور بالدباب بدون تلف؟', answer: 'تبريد 18°م إلزامي. بدونه = تخمر خلال 3-4 ساعات تحت 48°م. صناديق معزولة.' },
        { question: 'ليش Stretch Film ضروري بعنيزة؟', answer: 'SiO₂ من النفود يخدش أي سطح مكشوف. Stretch Film يحمي 100%. بدونه = خدش لا يُصلح.' },
        { question: 'هل الدباب يحتاج VCI مثل جدة؟', answer: 'لا! صفر NaCl = صفر صدأ = لا VCI. وفّر 15-20% من تكلفة النقل مقارنة بالساحل.' },
        { question: 'متى موسم نقل التمور الأكثر طلباً؟', answer: 'أغسطس-أكتوبر = ذروة. أسعار أعلى 20-30%. احجز مبكراً.' },
    ],
    expertTips: [
        'Stretch Film — SiO₂ يخدش أي بضاعة مكشوفة.',
        'تبريد 18°م للتمور — بدونه تتخمر تحت 48°م.',
        'بريدة 30 كم — أقرب وأرخص مدينة كبيرة.',
        'لا VCI — صفر NaCl. وفّر التكلفة.',
        'عزل حراري — ΔT 50°م يُتلف الإلكترونيات.',
    ],
    warnings: [
        'تمور بدون تبريد 18°م + 48°م = تخمر خلال 3-4 ساعات — خسارة كاملة.',
        'بضائع مكشوفة + SiO₂ = خدش لا يُصلح — حتى الأثاث الخشبي.',
        'إلكترونيات بدون عزل + ΔT 50°م = تلف بطاريات — ضمان يسقط.',
    ],
    trustAnchors: [
        { ...GOV.TGA, role: 'ترخيص النقل البري' },
        { entity: AMANA.QASSIM.entity, url: AMANA.QASSIM.url, role: 'اشتراطات النقل — أمانة القصيم' },
    ],
    expertReviewer: EXPERTS.ALZUWAYED,
    expertCitations: [
        { expert: EXPERTS.ALZUWAYED.name, quote: 'دباب عنيزة: نقل تمور = تبريد إلزامي. بريدة 30 كم = أقرب. لا NaCl = أرخص.', source: 'هيئة النقل — القصيم' },
    ],
    saudiRegulations: [REGULATIONS.TGA_LICENSE],
    verificationBadges: [
        { badge: '✔️ نقل مرخص TGA', authority: 'هيئة النقل', icon: 'shield-check' },
    ],
    equipment: [
        { name: 'Stretch Film', use: 'حماية من SiO₂ — يمنع خدش البضائع' },
        { name: 'صندوق تبريد 18°م', use: 'نقل تمور — يمنع التخمر' },
        { name: 'عزل حراري', use: 'حماية إلكترونيات من ΔT 50°م' },
    ],
    hiddenObjections: [
        { fear: 'بعيد عن بريدة.', solution: '30 كم = 20-30 دقيقة فقط. أقرب مدينة كبيرة.' },
        { fear: 'VCI مطلوب.', solution: 'صفر NaCl = صفر صدأ = لا VCI. وفّر.' },
    ],
    counterNarratives: [
        { myth: 'التمور ما تحتاج تبريد.', truth: '48°م + 4 ساعات = تخمر. تبريد 18°م إلزامي.' },
        { myth: 'دباب عادي يكفي.', truth: 'SiO₂ يخدش. Stretch Film ضروري. + تبريد للتمور.' },
    ],
    relatedServices: [
        { slug: 'dyna', context: 'دينا — أطنان تمور', priority: 1 },
        { slug: 'furniture-moving', context: 'نقل عفش', priority: 2 },
        { slug: 'auto-cleaning', context: 'غسيل سيارات', priority: 3 },
        { slug: 'cleaning', context: 'تنظيف', priority: 4 },
        { slug: 'furniture-storage', context: 'تخزين', priority: 5 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 6 },
        { slug: 'pest-control', context: 'حشرات — تمور', priority: 7 },
    ],
};
