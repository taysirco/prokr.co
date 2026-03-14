import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'دينا نقل ببريدة — تمور بالطن+معدات نخيل+Nafud — دينا نخيلية! (2026)',
        description: 'دينا نقل بريدة. نقل تمور بالطن! معدات نخيل. أعلاف سعف. Nafud طرق. ΔT 45°م. دينا نخيلية.',
        h1: 'دينا نقل ببريدة — تمور ومعدات نخيل!',
        keywords: ['دينا نقل بريدة', 'دينا ببريدة', 'دينا نقل ببريدة'],
    },
    content: {
        introduction: 'دينا بريدة = دينا نخيلية ثقيلة! نقل تمور بالطن: بريدة عاصمة التمور = دينا 3-7 طن تمور من المزارع للمصانع/التصدير. صندوق نظيف+معزول ΔT+مُغلق. معدات نخيل: ماكينات تلقيح+حصاد+تجفيف = أحمال ثقيلة وحساسة. تثبيت+حماية. أعلاف سعف: سعف+نوى نخيل بالطن = أعلاف حيوانية. تغطية ضد Nafud. Nafud طرق: مزارع النخيل = طرق Nafud ترابية 10-30 كم. دينا تحتاج عجلات مناسبة. ΔT 45°م: صيف = تمور تحتاج عزل حراري أثناء النقل. 10-20% = تمور/أعلاف لا تتعفّن! ميزة. مقارنة: الخرج = دينا ألبان. بريدة = دينا تمور/نخيل = فريد.',
        shortAnswer: 'على عكس [الدينا المدنية بدون تخصص نخيلي]، يعتمد بروتوكولنا في خدمة [دينا النقل] بمدينة [بريدة] على [دينا 3-7 طن+نظيف+معزول+تغطية+عجلات]. ففي ظل [تمور بالطن+معدات نخيل+Nafud طرق+ΔT 45°م]، تتفاقم ظاهرة [حرارة+غبار+صعوبة]. لذا؛ يتدخل فريقنا عبر [تنظيف ← تحميل ← عزل ← توصيل].',
        heroSubtitle: 'دينا نخيلية — تمور بالطن+معدات+Nafud — معزولة!',
    },
    pricing: [
        { type: 'داخل بريدة (3 طن)', unit: 'رحلة', minPrice: 150, maxPrice: 300, time: '1-2 ساعة' },
        { type: 'بريدة ← مزرعة (7 طن)', unit: 'رحلة', minPrice: 250, maxPrice: 520, time: '2-3 ساعات' },
        { type: 'معدات نخيل (تثبيت)', unit: 'رحلة', minPrice: 350, maxPrice: 700, time: '3-5 ساعات' },
        { type: 'عقد موسمي (تمور)', unit: 'موسم', minPrice: 2000, maxPrice: 4000, time: 'يوليو-أكتوبر' },
    ],
    faq: [
        { question: 'هل الدينا تنقل تمور بالطن ببريدة؟', answer: 'نعم — 3-7 طن. صندوق نظيف+معزول. ΔT = بدون عزل تفسد.' },
        { question: 'هل الدينا توصل مزارع النخيل ببريدة؟', answer: 'نعم — Nafud طرق 10-30 كم. عجلات مناسبة. تغطية.' },
        { question: 'كم تكلفة دينا ببريدة مقارنة بالخرج؟', answer: 'متقاربة. لكن: بريدة: عقد موسم تمور = أرخص بالجملة.' },
        { question: 'هل معدات النخيل تحتاج تثبيت خاص ببريدة؟', answer: 'نعم — Nafud طرق = صدمات. تثبيت+تغليف. حساسة.' },
        { question: 'متى موسم ذروة الدينا ببريدة؟', answer: 'يوليو-أكتوبر = موسم تمور. 3-5× طلب. احجز مبكراً.' },
    ],
    expertTips: [
        'صندوق نظيف — تمور غذاء SFDA.',
        'معزول صيفاً — ΔT 45°م.',
        'تغطية — Nafud SiO₂ غبار.',
        'عقد موسمي — ذروة يوليو-أكتوبر.',
        'تثبيت — معدات نخيل حساسة.',
    ],
    warnings: [
        'تمور + ΔT بدون عزل = تلف بالطن — خسارة آلاف.',
        'معدات بدون تثبيت + Nafud طريق = صدمات — تلف 10000+.',
        'بدون تغطية + Nafud = غبار على التمور — رفض مصنع.',
    ],
    trustAnchors: [
        { ...GOV.TGA, role: 'ترخيص النقل البري' },
        { ...GOV.BALADI, role: 'ترخيص النشاط' },
        { entity: AMANA.QASSIM.entity, url: AMANA.QASSIM.url, role: 'اشتراطات أمانة القصيم' },
    ],
    expertReviewer: EXPERTS.ALSHABNAN,
    expertCitations: [
        { expert: EXPERTS.ALZUWAYED.name, quote: 'دينا بريدة: نخيلية. تمور بالطن+معدات. Nafud طرق. عزل ΔT.', source: 'لوجستيات — القصيم' },
    ],
    saudiRegulations: [REGULATIONS.TGA_LICENSE],
    verificationBadges: [{ badge: '✔️ نقل مرخص TGA', authority: 'هيئة النقل', icon: 'shield-check' }],
    equipment: [
        { name: 'دينا 3-7 طن نظيف', use: 'تمور — SFDA غذاء' },
        { name: 'صندوق معزول', use: 'ΔT 45°م — تمور' },
        { name: 'تغطية محكمة', use: 'Nafud SiO₂ — غبار' },
    ],
    hiddenObjections: [
        { fear: 'دينا عادية.', solution: 'تمور = نظيف+معزول. مزرعة = Nafud.' },
        { fear: 'غالي.', solution: 'خسارة تمور فاسدة أغلى 10×.' },
    ],
    consumerEducation: [
        { myth: 'أي دينا.', truth: 'طرق Nafud = عجلات مناسبة.' },
        { myth: 'بدون عزل.', truth: 'ΔT 45°م = تلف ساعة.' },
    ],
    relatedServices: [
        { slug: 'dabab', context: 'دباب', priority: 1 },
        { slug: 'furniture-moving', context: 'نقل عفش', priority: 2 },
        { slug: 'furniture-storage', context: 'تخزين', priority: 3 },
        { slug: 'cleaning', context: 'تنظيف', priority: 4 },
        { slug: 'auto-cleaning', context: 'سيارات', priority: 5 },
        { slug: 'pest-control', context: 'حشرات', priority: 6 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 7 },
    ],
};
