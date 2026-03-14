import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف مجالس بالقطيف — بخور+NaCl بلمرة ملحية + 80-95% عفن+عث + طلع نخيل (2026)',
        description: 'تنظيف مجالس القطيف. بخور+NaCl بلمرة ملحية. 80-95% عفن+عث حشوة. طلع نخيل حساسية. تجفيف 4-8 ساعات. Enzymatic + Anti-Fungal + Anti-Mite + Turbo.',
        h1: 'تنظيف مجالس بالقطيف — بخور ملحي وعفن واحي وعث وطلع نخيل',
        keywords: ['تنظيف مجالس القطيف', 'تنظيف مجلس بالقطيف', 'شركة تنظيف مجالس بالقطيف'],
    },
    content: {
        introduction: 'المجلس في القطيف يتعرض لبيئة ساحلية-واحية على الأقمشة. الأول — بخور+NaCl بلمرة ملحية: Olibanum يتبلمر + NaCl يُصلّب = بلمرة ملحية فريدة. Enzymatic + RO. الثاني — 80-95% عفن حشوة: عفن مزدوج يصيب الحشوة. Anti-Fungal. الثالث — عث: 80-95% > 50% = عث. بخار + Anti-Mite. الرابع — طلع نخيل: يدخل المجلس = حساسية. HEPA. تجفيف: 80-95% = 4-8 ساعات. Turbo + Dehumidifier.',
        shortAnswer: 'على عكس [شامبو] الذي لا يُكسر بلمرة ملحية، يعتمد بروتوكولنا في خدمة [تنظيف المجالس] بمدينة [القطيف] على [Enzymatic + Anti-Fungal + Anti-Mite + Turbo]. ففي ظل [بخور+NaCl + 80-95% + عث + طلع]، تتفاقم ظاهرة [بلمرة + عفن + عث + حساسية]. لذا؛ يتدخل خبراؤنا عبر [بروتوكول مجلس ساحلي-واحي].',
        heroSubtitle: 'بخور+NaCl بلمرة + عفن+عث واحي + طلع نخيل + 4-8 ساعات',
    },
    pricing: [
        { type: 'مجلس — ساحلي-واحي', unit: 'مجلس', minPrice: 210, maxPrice: 410, time: '3-4 ساعات' },
        { type: 'مجلس + سجاد', unit: 'مجلس', minPrice: 300, maxPrice: 590, time: '4-6 ساعات' },
        { type: 'عميق (Enzymatic+بخار+عث)', unit: 'مجلس', minPrice: 340, maxPrice: 680, time: '4-6 ساعات' },
        { type: 'ربع سنوي', unit: 'سنة', minPrice: 630, maxPrice: 1260, time: '4 زيارات' },
    ],
    faq: [
        { question: 'بلمرة ملحية — فريدة؟', answer: 'بخور Ester + NaCl بلورات = Bonds ملحية. مختلفة عن الجبيل (VOC). أقل صعوبة لكن فريدة.' },
        { question: 'عث — مثل الخبر؟', answer: '80-95% = عث. مشابه للخبر. لكن: طلع نخيل إضافي = حساسية مُركّبة.' },
        { question: 'طلع في المجلس؟', answer: 'نوافذ مفتوحة + واحة = طلع على كل شيء. HEPA + بخار.' },
        { question: 'ربع سنوي — يكفي؟', answer: 'بخور+NaCl+عفن+عث+طلع. ربع سنوي = الحد.' },
        { question: 'كم تكلفة التنظيف العميق مقارنة بالتنظيف العادي؟', answer: 'التنظيف العميق أغلى 30-50% لكنه يشمل: HEPA + بخار 150°م + تعقيم. التنظيف العادي = مسح سطحي. العميق كل 3-4 أشهر + العادي أسبوعياً = أفضل معادلة تكلفة/نظافة.' },
    ],
    expertTips: [
        'Enzymatic — بلمرة ملحية بخور+NaCl.',
        'بخار 100°م + Anti-Mite — عث.',
        'Anti-Fungal — عفن مزدوج.',
        'HEPA طلع نخيل — حساسية.',
        'Turbo + Dehumidifier — 80-95%.',
    ],
    warnings: [
        'بلمرة ملحية × 6 أشهر = طبقة صعبة.',
        '80-95% + حشوة = عفن+عث مزمن.',
        'طلع + عث = حساسية مُركّبة.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص التنظيف' },
        { entity: AMANA.SHARQIA.entity, url: AMANA.SHARQIA.url, role: 'اشتراطات النظافة بالشرقية' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALMOHAIMED.name, quote: 'مجلس القطيف: بخور+NaCl بلمرة ملحية + 80-95% عفن+عث + طلع نخيل. Enzymatic + Anti-Mite + HEPA.', source: 'نصائح هندسية — مجالس الواحات الساحلية' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ تنظيف مجالس مرخص', authority: 'منصة بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'Enzymatic', use: 'بلمرة ملحية بخور+NaCl' },
        { name: 'بخار 100°م', use: 'عث + طلع' },
        { name: 'Anti-Fungal', use: '80-95% عفن مزدوج' },
        { name: 'HEPA', use: 'طلع نخيل حساسية' },
    ],
    hiddenObjections: [
        { fear: 'مثل الخبر.', solution: 'واحة = طلع+طين+عيون. مختلف.' },
        { fear: 'شامبو.', solution: 'بلمرة ملحية = Enzymatic.' },
    ],
    consumerEducation: [
        { myth: 'ساحلي فقط.', truth: 'واحي = طلع+طين+عيون.' },
        { myth: 'نصف سنوي.', truth: 'عفن+عث+بخور+طلع. ربع سنوي.' },
    ],
    relatedServices: [
        { slug: 'carpet-cleaning', context: 'سجاد', priority: 1 },
        { slug: 'sofa-cleaning', context: 'كنب', priority: 2 },
        { slug: 'cleaning', context: 'تنظيف', priority: 3 },
        { slug: 'steam-cleaning', context: 'بخار', priority: 4 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 5 },
        { slug: 'pest-control', context: 'حشرات', priority: 6 },
        { slug: 'marble-polishing', context: 'رخام', priority: 7 },
    ],
};
