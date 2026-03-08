import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف واجهات زجاجية بالجبيل — NaCl+VOC إبهات + سخام SABIC + Biofilm أقصى + Sealant (2026)',
        description: 'تنظيف واجهات الجبيل. NaCl+VOC إبهات مزدوج. سخام SABIC طبقة سوداء. Biofilm أقصى 98%. Sealant يتآكل. Squeegee + Marine + Anti-Biofilm.',
        h1: 'تنظيف واجهات زجاجية بالجبيل — ملح يُبهت وسخام يُسوّد وBiofilm يغطي',
        keywords: ['تنظيف واجهات زجاجية الجبيل', 'تنظيف واجهات بالجبيل', 'شركة تنظيف واجهات بالجبيل'],
    },
    content: {
        introduction: 'واجهات الجبيل الزجاجية تواجه 4 تحديات صناعية-ساحلية. الأولى — NaCl+VOC إبهات: NaCl يُبهت + VOC يُضيف طبقة دهنية = إبهات مزدوج. Squeegee + Marine Degreaser. الثانية — سخام SABIC: طبقة سوداء كربونية تلتصق بالزجاج. Enzymatic. الثالثة — Biofilm أقصى: 98% = أقصى Biofilm. طحالب + بكتيريا على الواجهة. Anti-Biofilm. الرابعة — Sealant يتآكل: NaCl+VOC يُسرّع تآكل Sealant 2×. Marine Sealant.',
        shortAnswer: 'على عكس [ماء وقماش] الذي لا يُزيل VOC ولا سخام، يعتمد بروتوكولنا في خدمة [تنظيف الواجهات] بمدينة [الجبيل] على [Squeegee + Marine + Enzymatic + Anti-Biofilm]. ففي ظل [NaCl+VOC + سخام + Biofilm + Sealant]، تتفاقم ظاهرة [إبهات + سخام + طحالب + تآكل]. لذا؛ يتدخل خبراؤنا عبر [بروتوكول واجهات صناعي-ساحلي].',
        heroSubtitle: 'NaCl+VOC إبهات + سخام SABIC + Biofilm أقصى + Sealant',
    },
    pricing: [
        { type: 'واجهة صغيرة (50 م²)', unit: 'خدمة', minPrice: 210, maxPrice: 420, time: '2-4 ساعات' },
        { type: 'واجهة كبيرة (100+ م²)', unit: 'خدمة', minPrice: 420, maxPrice: 950, time: '4-8 ساعات' },
        { type: 'شهري (سخام+Biofilm)', unit: 'شهر', minPrice: 310, maxPrice: 620, time: 'زيارة' },
        { type: 'ربع سنوي + Sealant', unit: 'سنة', minPrice: 630, maxPrice: 1350, time: '4 زيارات' },
    ],
    faq: [
        { question: 'سخام — على الزجاج؟', answer: 'SABIC سخام = طبقة سوداء دهنية كربونية. تلتصق بالزجاج. ماء = لا يعمل. Enzymatic يُكسر الكربون.' },
        { question: 'Biofilm أقصى — أسوأ من الخبر؟', answer: '98% > 95% = Biofilm أسرع + أسمك. طحالب خضراء على الواجهة. Anti-Biofilm شهري.' },
        { question: 'Sealant — يتآكل؟', answer: 'NaCl+VOC = أسرع تآكل Sealant 2×. Marine Sealant يقاوم. عادي = يفشل سريعاً.' },
        { question: 'شهري — ليش؟', answer: 'سخام يومي + Biofilm أسبوعي + NaCl+VOC يومي. شهري = يمنع التراكم.' },
        { question: 'كم تكلفة التنظيف العميق مقارنة بالتنظيف العادي؟', answer: 'التنظيف العميق أغلى 30-50% لكنه يشمل: HEPA + بخار 150°م + تعقيم. التنظيف العادي = مسح سطحي. العميق كل 3-4 أشهر + العادي أسبوعياً = أفضل معادلة تكلفة/نظافة.' },
    ],
    expertTips: [
        'Squeegee مطاطي — NaCl+سخام = يخدش بقماش.',
        'Enzymatic لسخام — Marine Degreaser لـ VOC.',
        'Anti-Biofilm شهري — 98% = أسرع Biofilm.',
        'Marine Sealant — NaCl+VOC 2× تآكل.',
        'بعد التنظيف: شغّل المكيف وليس الشبّاك — الهواء الخارجي يعيد الغبار على الأسطح النظيفة.',
    ],
    warnings: [
        'سخام + ماء = يطبّخ. Enzymatic أولاً.',
        'NaCl+VOC + Sealant عادي = تآكل سنة.',
        'Biofilm 98% = طحالب ← حشرات ← تلف.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص شركات الواجهات' },
        { entity: AMANA.SHARQIA.entity, url: AMANA.SHARQIA.url, role: 'اشتراطات المباني بالشرقية' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALMOHAIMED.name, quote: 'واجهات الجبيل: NaCl+VOC إبهات + سخام SABIC + Biofilm أقصى. Squeegee + Marine + Enzymatic + Anti-Biofilm + Marine Sealant.', source: 'نصائح هندسية — واجهات صناعية' },
    ],
    saudiRegulations: [REGULATIONS.SBC_601],
    verificationBadges: [{ badge: '✔️ واجهات مرخصة', authority: 'منصة بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'Squeegee مطاطي', use: 'NaCl+سخام — بلا خدش' },
        { name: 'Marine Degreaser', use: 'VOC — إبهات' },
        { name: 'Enzymatic', use: 'سخام SABIC — كربون' },
        { name: 'Anti-Biofilm', use: '98% — طحالب' },
        { name: 'Marine Sealant', use: 'NaCl+VOC — مُقاوم' },
    ],
    hiddenObjections: [
        { fear: 'مثل الخبر.', solution: 'VOC + سخام SABIC + 98% Biofilm. أقسى.' },
        { fear: 'ماء يكفي.', solution: 'سخام = لا يُزال بماء. VOC = ينزلق.' },
    ],
    counterNarratives: [
        { myth: 'ساحلي فقط.', truth: 'سخام + VOC = صناعي. ثلاثي.' },
        { myth: 'ربع سنوي.', truth: 'سخام+Biofilm. شهري.' },
    ],
    relatedServices: [
        { slug: 'cleaning', context: 'تنظيف — NaCl+VOC', priority: 1 },
        { slug: 'marble-polishing', context: 'رخام — NaCl', priority: 2 },
        { slug: 'office-cleaning', context: 'مكاتب — واجهات', priority: 3 },
        { slug: 'villas-cleaning', context: 'فلل — واجهات', priority: 4 },
        { slug: 'auto-cleaning', context: 'سيارات — سخام', priority: 5 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف — VOC', priority: 6 },
        { slug: 'pest-control', context: 'حشرات', priority: 7 },
    ],
};
