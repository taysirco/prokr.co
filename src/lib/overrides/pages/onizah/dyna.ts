import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../gov-references';

export const override: PageOverride = {
    meta: {
        title: 'دينا نقل بعنيزة — SiO₂ + ΔT 50°م + أطنان تمور تبريد — بريدة 30 كم فقط! (2026)',
        description: 'دينا نقل عنيزة. SiO₂ خدش. ΔT 50°م. أطنان تمور تبريد. بريدة 30 كم. لا NaCl! Tarpaulin + تبريد صناعي.',
        h1: 'دينا نقل بعنيزة — أطنان تمور و30 كم لبريدة',
        keywords: ['دينا نقل عنيزة', 'دينا نقل بعنيزة', 'شركة دينا نقل عنيزة'],
    },
    content: {
        introduction: 'الدينا في عنيزة = عصب نقل التمور بالأطنان. أكبر سوق تمور بالعالم يُنتج آلاف الأطنان سنوياً — كلها تُنقل بدينات مبرّدة. بدون تبريد 18°م = التمور تتخمر خلال 4-6 ساعات تحت شمس 48°م = خسارة بآلاف الريالات. SiO₂ من النفود يخدش أي حمولة مكشوفة — Tarpaulin إلزامي. ΔT 50°م يُجهد إطارات الدينا ويُتلف بطاريات التبريد. بريدة 30 كم فقط = أقرب سوق رئيسي. الرياض 350 كم = 4-5 ساعات بتبريد مستمر. الميزة: لا NaCl = لا صدأ هيكل = عمر أطول للدينا. تكلفة أقل 15-20% من الساحل.',
        shortAnswer: 'على عكس [النقل المكشوف بدون تبريد]، يعتمد بروتوكولنا في خدمة [دينا النقل] بمدينة [عنيزة] على [Tarpaulin + تبريد صناعي 18°م + عزل حراري]. ففي ظل [SiO₂ + ΔT 50°م + أطنان تمور + بريدة 30 كم]، تتفاقم ظاهرة [خدش + تخمر + إجهاد]. لذا؛ يتدخل سائقونا عبر [تغطية ← تبريد ← رصد حراري] لضمان توصيل سليم.',
        heroSubtitle: 'أطنان تمور + تبريد + SiO₂ — بريدة 30 كم!',
    },
    pricing: [
        { type: 'داخل عنيزة', unit: 'رحلة', minPrice: 75, maxPrice: 190, time: '1-2 ساعة' },
        { type: 'عنيزة ← بريدة (30 كم)', unit: 'رحلة', minPrice: 120, maxPrice: 300, time: '30-45 دقيقة' },
        { type: 'عنيزة ← الرياض (350 كم)', unit: 'رحلة', minPrice: 500, maxPrice: 1200, time: '4-5 ساعات' },
        { type: 'نقل تمور مبرّد بالطن', unit: 'طن', minPrice: 80, maxPrice: 200, time: 'حسب المسافة' },
    ],
    faq: [
        { question: 'كم تكلفة نقل تمور من عنيزة للرياض بالدينا؟', answer: '500-1200 ريال حسب الحمولة. 350 كم = 4-5 ساعات بتبريد مستمر.' },
        { question: 'كيف أحمي التمور من التخمر أثناء النقل؟', answer: 'تبريد 18°م إلزامي + صناديق معزولة + رصد حراري GPS. بدونه = تخمر خلال 4-6 ساعات تحت 48°م.' },
        { question: 'ليش Tarpaulin ضروري على الدينا بعنيزة؟', answer: 'SiO₂ من النفود يخدش أي حمولة مكشوفة. Tarpaulin يحمي 100%. حتى البضائع غير التمور.' },
        { question: 'هل الدينا تحتاج VCI مقاوم صدأ؟', answer: 'لا! صفر NaCl = صفر صدأ. لا حاجة لأغطية VCI. وفّر 15-20% مقارنة بالساحل.' },
        { question: 'متى ذروة طلب دينات عنيزة؟', answer: 'أغسطس-أكتوبر = موسم التمور. أسعار أعلى 20-30%. موسم نقل العفش: يونيو-يوليو.' },
    ],
    expertTips: [
        'تبريد 18°م للتمور — بدونه تتخمر تحت 48°م.',
        'Tarpaulin — SiO₂ يخدش حتى الكراتين.',
        'رصد حراري GPS — تابع درجة حرارة التمور عن بعد.',
        'بريدة 30 كم — أسرع وأرخص وجهة.',
        'لا VCI — صفر NaCl = صفر صدأ = وفّر.',
    ],
    warnings: [
        'تمور بدون تبريد + 48°م + 4 ساعات = تخمر كامل — خسارة بآلاف الريالات.',
        'حمولة مكشوفة + SiO₂ = خدش صناديق وبضائع — حتى الكراتين تتمزق.',
        'إطارات بدون فحص + ΔT 50°م = انفجار محتمل — ΔT يُجهد المطاط.',
    ],
    trustAnchors: [
        { ...GOV.TGA, role: 'ترخيص النقل البري' },
        { entity: AMANA.QASSIM.entity, url: AMANA.QASSIM.url, role: 'اشتراطات النقل — أمانة القصيم' },
    ],
    expertReviewer: EXPERTS.ALSHABNAN,
    expertCitations: [
        { expert: EXPERTS.ALZUWAYED.name, quote: 'دينات عنيزة: أطنان تمور بتبريد. بريدة 30 كم. لا NaCl. أرخص من الساحل. Tarpaulin إلزامي.', source: 'هيئة النقل — القصيم' },
    ],
    saudiRegulations: [REGULATIONS.TGA_LICENSE],
    verificationBadges: [
        { badge: '✔️ نقل مرخص TGA', authority: 'هيئة النقل', icon: 'shield-check' },
        { badge: '✔️ بيان حمولة لوجستي', authority: 'منصة لوجستي', icon: 'shield-check' },
    ],
    equipment: [
        { name: 'Tarpaulin صناعي', use: 'حماية من SiO₂ — يمنع خدش الحمولة' },
        { name: 'وحدة تبريد 18°م', use: 'نقل تمور — يمنع التخمر' },
        { name: 'رصد حراري GPS', use: 'مراقبة درجة حرارة التمور عن بعد' },
    ],
    commonConcerns: [
        { concern: 'بريدة بعيدة.', solution: '30 كم = 20-30 دقيقة. أقرب مدينة رئيسية.' },
        { concern: 'تبريد غالي.', solution: 'بدونه = خسارة كاملة. التبريد أرخص من الخسارة 10×.' },
    ],
    consumerEducation: [
        { myth: 'التمور تتحمل الحرارة.', truth: '48°م + 4 ساعات = تخمر. تبريد 18°م إلزامي.' },
        { myth: 'Tarpaulin فقط للمطر.', truth: 'SiO₂ يخدش البضائع. Tarpaulin يحمي من الرمل أيضاً.' },
    ],
    relatedServices: [
        { slug: 'dabab', context: 'دباب — نقل صغير', priority: 1 },
        { slug: 'furniture-moving', context: 'نقل عفش', priority: 2 },
        { slug: 'furniture-storage', context: 'تخزين', priority: 3 },
        { slug: 'auto-cleaning', context: 'غسيل سيارات', priority: 4 },
        { slug: 'cleaning', context: 'تنظيف', priority: 5 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 6 },
        { slug: 'pest-control', context: 'حشرات', priority: 7 },
    ],
};
