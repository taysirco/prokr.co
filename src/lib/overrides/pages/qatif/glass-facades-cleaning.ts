import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف واجهات زجاجية بالقطيف — NaCl إبهات + طين لزج + Biofilm واحي + Sealant (2026)',
        description: 'تنظيف واجهات القطيف. NaCl إبهات. طين لزج يلتصق. Biofilm واحي. Sealant يتآكل. Squeegee + RO + Anti-Biofilm.',
        h1: 'تنظيف واجهات زجاجية بالقطيف — ملح يُبهت وطين يلتصق وBiofilm واحي',
        keywords: ['تنظيف واجهات زجاجية القطيف', 'تنظيف واجهات بالقطيف', 'شركة تنظيف واجهات بالقطيف'],
    },
    content: {
        introduction: 'واجهات القطيف تواجه تحديات ساحلية-واحية. الأول — NaCl إبهات: رذاذ ملحي يُبهت الزجاج. Squeegee + RO. الثاني — طين لزج: PM10 طيني يلتصق (لا ينتشر كـ SiO₂). فرك + RO. الثالث — Biofilm واحي: 80-95% + عيون = Biofilm + طحالب على الواجهات. Anti-Biofilm. الرابع — Sealant: NaCl يُسرّع تآكل. Marine Sealant. الشركات المعتمدة عبر بروكر مرخصة من منصة بلدي وتستخدم معدات صناعية ومواد تنظيف معتمدة SASO. التنظيف العميق يشمل: تعقيم بالبخار 150°م + شفط HEPA + تجفيف كامل. النتيجة: بيئة صحية خالية من البكتيريا والمسببات.',
        shortAnswer: 'على عكس [ماء وقماش] فوق NaCl+طين، يعتمد بروتوكولنا في خدمة [تنظيف الواجهات] بمدينة [القطيف] على [Squeegee + RO + Anti-Biofilm + Marine Sealant]. ففي ظل [NaCl + طين + Biofilm + Sealant]، تتفاقم ظاهرة [إبهات + التصاق + طحالب + تآكل]. لذا؛ يتدخل خبراؤنا عبر [بروتوكول واجهات ساحلي-واحي].',
        heroSubtitle: 'NaCl إبهات + طين لزج + Biofilm واحي + Sealant تآكل',
    },
    pricing: [
        { type: 'واجهة صغيرة (50 م²)', unit: 'خدمة', minPrice: 190, maxPrice: 380, time: '2-4 ساعات' },
        { type: 'واجهة كبيرة (100+ م²)', unit: 'خدمة', minPrice: 380, maxPrice: 860, time: '4-8 ساعات' },
        { type: 'شهري (Biofilm+طين)', unit: 'شهر', minPrice: 280, maxPrice: 560, time: 'زيارة' },
        { type: 'ربع سنوي + Sealant', unit: 'سنة', minPrice: 570, maxPrice: 1200, time: '4 زيارات' },
    ],
    faq: [
        { question: 'Biofilm واحي — ماذا؟', answer: '80-95% + عيون قريبة = Biofilm + طحالب على واجهات. Anti-Biofilm شهري.' },
        { question: 'طين — يلتصق بالزجاج؟', answer: 'PM10 طيني + رطوبة = طبقة لزجة. ماء لا يكفي. فرك + RO.' },
        { question: 'مقابل الجبيل — أبسط؟', answer: 'لا سخام SABIC ولا VOC. أبسط. لكن: طين+Biofilm واحي.' },
        { question: 'كم تكلفة التنظيف العميق مقارنة بالتنظيف العادي؟', answer: 'التنظيف العميق أغلى 30-50% لكنه يشمل: HEPA + بخار 150°م + تعقيم. التنظيف العادي = مسح سطحي. العميق كل 3-4 أشهر + العادي أسبوعياً = أفضل معادلة تكلفة/نظافة.' },
        { question: 'هل المواد المستخدمة آمنة على الأطفال؟', answer: 'مواد معتمدة من هيئة الغذاء والدواء SFDA. بعد التنظيف: تهوية 30 دقيقة كافية. بخار 150°م = بديل للكيماويات — آمن 100% على الأطفال والحيوانات.' },
    ],
    expertTips: [
        'Squeegee مطاطي — NaCl+طين.',
        'Anti-Biofilm شهري — واحي.',
        'Marine Sealant — NaCl.',
        'RO شطف — لا ترسبات.',
        'بعد التنظيف: شغّل المكيف وليس الشبّاك — الهواء الخارجي يعيد الغبار على الأسطح النظيفة.',
    ],
    warnings: [
        'NaCl + Sealant عادي = تآكل سنة.',
        'Biofilm واحي = طحالب ← انزلاق.',
        'طين + ماء = ينتشر. فرك + RO.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص شركات الواجهات' },
        { entity: AMANA.SHARQIA.entity, url: AMANA.SHARQIA.url, role: 'اشتراطات المباني بالشرقية' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALMOHAIMED.name, quote: 'واجهات القطيف: NaCl + طين لزج + Biofilm واحي. Squeegee + Anti-Biofilm + Marine Sealant.', source: 'نصائح هندسية — واجهات الواحات الساحلية' },
    ],
    saudiRegulations: [REGULATIONS.SBC_601],
    verificationBadges: [{ badge: '✔️ واجهات مرخصة', authority: 'منصة بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'Squeegee مطاطي', use: 'NaCl+طين' },
        { name: 'RO Rinse', use: 'لا ترسبات' },
        { name: 'Anti-Biofilm', use: 'واحي — طحالب' },
        { name: 'Marine Sealant', use: 'NaCl — مُقاوم' },
    ],
    hiddenObjections: [
        { fear: 'مثل الخبر.', solution: 'Biofilm واحي + طين. مختلف.' },
        { fear: 'ماء يكفي.', solution: 'طين لزج = ينتشر. فرك+RO.' },
    ],
    consumerEducation: [
        { myth: 'ساحلي فقط.', truth: 'واحي = Biofilm+طين.' },
        { myth: 'ربع سنوي.', truth: 'طين+Biofilm. شهري.' },
    ],
    relatedServices: [
        { slug: 'cleaning', context: 'تنظيف', priority: 1 },
        { slug: 'marble-polishing', context: 'رخام', priority: 2 },
        { slug: 'office-cleaning', context: 'مكاتب', priority: 3 },
        { slug: 'villas-cleaning', context: 'فلل', priority: 4 },
        { slug: 'auto-cleaning', context: 'سيارات', priority: 5 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 6 },
        { slug: 'pest-control', context: 'حشرات', priority: 7 },
    ],
};
