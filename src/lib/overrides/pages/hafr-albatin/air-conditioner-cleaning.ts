import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف مكيفات بحفر الباطن — ΔT 54°م Thermal Cycling + SiO₂ رمل يسد + 10-15% جفاف يُشقق (2026)',
        description: 'تنظيف مكيفات حفر الباطن. ΔT 54°م (52°م/-2°م) Thermal Cycling = تمدد/انكماش. SiO₂ عواصف تسد. 10-15% جفاف يُشقق. صيانة 6/سنة.',
        h1: 'تنظيف مكيفات بحفر الباطن — ΔT 54°م يكسر والرمل يسد والجفاف يُشقق',
        keywords: ['تنظيف مكيفات حفر الباطن', 'تنظيف مكيف حفر الباطن', 'شركة تنظيف مكيفات حفر الباطن'],
    },
    content: {
        introduction: 'مكيف حفر الباطن يعمل في أقسى ظروف المملكة. التحدي الأول — ΔT 54°م Thermal Cycling: 52°م صيفاً — المكيف يعمل بحمل أقصى 12-14 ساعة/يوم ← كمبريسور يتآكل. -2°م شتاءً — تجمد Condensation ← تمدد/انكماش = شقوق Evaporator. ΔT 54°م = أقصى تدوير حراري في المملكة. التحدي الثاني — SiO₂ عواصف: عاصفة رملية واحدة = فلتر مسدود 100%. رمل ناعم يدخل Condenser ← يسد ← ضغط ← كمبريسور يتعطّل. التحدي الثالث — 10-15% جفاف: أجف مدينة = Gaskets (جوانات) تجف ← تتشقق ← تسريب فريون. UV + حرارة = Plastic يتقصّف. التحدي الرابع — حمل أقصى: 52°م = المكيف يعمل Max 12-14 ساعة = استهلاك مُضاعف = صيانة مُضاعفة.',
        shortAnswer: 'على عكس [صيانة سنوية] التي لا تُراعي ΔT 54°م، يعتمد بروتوكولنا في خدمة [تنظيف المكيفات] بمدينة [حفر الباطن] على [صيانة 6/سنة + فلتر شهري + Thermal Check + Gasket]. ففي ظل [ΔT 54°م + SiO₂ + 10-15% + حمل أقصى]، تتفاقم ظاهرة [كسر + انسداد + تشقق]. لذا؛ يتدخل خبراؤنا عبر [بروتوكول صحراوي مُكثّف].',
        heroSubtitle: 'ΔT 54°م = المكيف الأصعب في المملكة + رمل + جفاف',
    },
    pricing: [
        { type: 'فلتر + غسل (سبليت)', unit: 'مكيف', minPrice: 55, maxPrice: 110, time: '20-30 دقيقة' },
        { type: 'عميق + Thermal Check + Gasket', unit: 'مكيف', minPrice: 140, maxPrice: 290, time: '1-2 ساعة' },
        { type: 'مركزي (دكت) — عواصف', unit: 'وحدة', minPrice: 260, maxPrice: 530, time: '2-4 ساعات' },
        { type: 'عقد سنوي (6 زيارات)', unit: 'سنة', minPrice: 470, maxPrice: 950, time: '6 زيارات' },
    ],
    faq: [
        { question: 'ΔT 54°م — ليش أصعب؟', answer: '52°م صيف + -2°م شتاء = 54°م فرق. كل مكون يتمدد صيفاً ← ينكمش شتاءً = Fatigue (إرهاق معادن). الرياض ΔT ~35°م. حفر الباطن = 1.5× أقصى.' },
        { question: 'فلتر — بعد كل عاصفة؟', answer: 'عاصفة واحدة = فلتر مسدود. بدون تنظيف: ضغط على Condenser ← كمبريسور ← تعطّل. فلتر شهري + بعد عاصفة.' },
        { question: 'Gaskets — ليش تتشقق؟', answer: '10-15% رطوبة = أجف مدينة. مطاط يجف ← يتصلب ← يتشقق ← فريون يتسرب. فحص + استبدال سنوي.' },
        { question: '6 زيارات/سنة — ليش؟', answer: '52°م × 5 أشهر + -2°م × 2 شهر + عواصف = 12 شهر ضغط. 6 = كل شهرين. الرياض: 4 كافٍ.' },
        { question: 'حمل أقصى — ماذا يعني؟', answer: '52°م = المكيف يعمل Max لمدة 12-14 ساعة. الأجزاء تستهلك 2× أسرع. فلتر يكثّف SiO₂ 2× أسرع.' },
    ],
    expertTips: [
        'فلتر بعد كل عاصفة رملية — انسداد فوري.',
        'Thermal Check قبل الصيف وبعد الشتاء — ΔT 54°م يُرهق.',
        'Gasket فحص سنوي — 10-15% يُشقق مطاط.',
        'UV Cover للوحدة الخارجية — حرارة + UV = Plastic يتقصّف.',
        '6 صيانات/سنة — ΔT 54°م يحتاج ضعف الرياض.',
    ],
    warnings: [
        'ΔT 54°م = أقصى Thermal Cycling = Fatigue = كسر مفاجئ إذا لم يُصان.',
        'عاصفة + فلتر مسدود + 52°م = كمبريسور يتعطّل = 2,000-5,000 ريال.',
        'Gasket جاف + 10-15% = فريون يتسرب = مكيف لا يُبرّد + غاز ضار.',
    ],
    trustAnchors: [
        { ...GOV.SCE, role: 'كفاءة الطاقة' },
        { entity: AMANA.HAFR.entity, url: AMANA.HAFR.url, role: 'اشتراطات صحة بحفر الباطن' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALJUND.name, quote: 'مكيف حفر الباطن = الأصعب: ΔT 54°م + SiO₂ + 10-15% + حمل أقصى. 6 صيانات/سنة = الحد الأدنى. الرياض: 4. فرق 50%.', source: 'موسوعة أخطاء — مكيفات المناخ القاري' },
    ],
    saudiRegulations: [REGULATIONS.SBC_601],
    verificationBadges: [
        { badge: '✔️ صيانة مكيفات مرخصة', authority: 'منصة بلدي', icon: 'shield-check' },
        { badge: '✔️ بروتوكول صحراوي', authority: 'معتمد داخلياً', icon: 'badge-check' },
    ],
    equipment: [
        { name: 'Thermal Inspection Camera', use: 'يكشف Fatigue و Micro-Cracks من ΔT 54°م' },
        { name: 'Compressed Air + HEPA', use: 'يُزيل SiO₂ من Condenser + Evaporator' },
        { name: 'UV-Resistant Cover', use: 'يحمي وحدة خارجية من UV + حرارة' },
        { name: 'Gasket Kit', use: 'استبدال جوانات جافة — يمنع تسريب' },
    ],
    hiddenObjections: [
        { fear: '6 مرات كثير.', solution: 'ΔT 54°م + 52°م × 5 أشهر + عواصف = 6 = الحد. 4 = يكسر. 2,000+ ريال إصلاح.' },
        { fear: 'مثل الرياض.', solution: 'الرياض ΔT ~35°م. حفر الباطن = 54°م = 1.5× أقصى.' },
    ],
    counterNarratives: [
        { myth: 'مرتين بالسنة.', truth: '52°م × 5 أشهر + عواصف + ΔT 54°م. مرتين = تعطّل.' },
        { myth: 'فلتر ربع سنوي.', truth: 'عاصفة واحدة = مسدود. شهري + بعد عاصفة.' },
        { myth: 'مكيف يتحمل.', truth: 'ΔT 54°م = لا مكيف يتحمل بدون صيانة.' },
    ],
    relatedServices: [
        { slug: 'cleaning', context: 'تنظيف — SiO₂', priority: 1 },
        { slug: 'carpet-cleaning', context: 'سجاد — رمل', priority: 2 },
        { slug: 'villas-cleaning', context: 'فلل — عواصف', priority: 3 },
        { slug: 'apartments-cleaning', context: 'شقق — SiO₂', priority: 4 },
        { slug: 'pest-control', context: 'حشرات — هجرة', priority: 5 },
        { slug: 'steam-cleaning', context: 'بخار — تعقيم', priority: 6 },
        { slug: 'thermal-insulation', context: 'عزل — ΔT 54°م', priority: 7 },
    ],
};
