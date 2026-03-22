import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../gov-references';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف كنب بالقطيف — بخور+NaCl بلمرة ملحية + 80-95% عفن+عث + طلع نخيل (2026)',
        description: 'تنظيف كنب القطيف. بخور+NaCl بلمرة ملحية. 80-95% عفن+عث. طلع نخيل حساسية. NaCl تصلب. Enzymatic + Anti-Fungal + Anti-Mite + Turbo.',
        h1: 'تنظيف كنب بالقطيف — بخور ملحي وعفن وعث وطلع نخيل',
        keywords: ['تنظيف كنب القطيف', 'غسيل كنب بالقطيف', 'شركة تنظيف كنب بالقطيف'],
    },
    content: {
        introduction: 'الكنب في القطيف = ساحلي-واحي على الأقمشة. الأول — بخور+NaCl بلمرة ملحية: Olibanum + NaCl = Bonds فريدة. Enzymatic. الثاني — 80-95% عفن+عث: عفن حشوة + عث Der p 1. Anti-Fungal + Anti-Mite. الثالث — طلع نخيل: يدخل الكنب = حساسية مُركّبة مع عث. بخار. الرابع — NaCl تصلب: ألياف = هشاشة. RO. تجفيف: 80-95% = 4-8 ساعات. Turbo.',
        shortAnswer: 'على عكس [شامبو] فوق بلمرة ملحية+عث، يعتمد بروتوكولنا في خدمة [تنظيف الكنب] بمدينة [القطيف] على [Enzymatic + Anti-Fungal + Anti-Mite + Turbo]. ففي ظل [بخور+NaCl + 80-95% + عث + طلع]، تتفاقم ظاهرة [بلمرة + عفن + عث + حساسية]. لذا؛ يتدخل خبراؤنا عبر [بروتوكول كنب ساحلي-واحي].',
        heroSubtitle: 'بخور+NaCl بلمرة + عفن+عث + طلع نخيل + 4-8 ساعات',
    },
    pricing: [
        { type: 'كنب (3-5 مقاعد)', unit: 'طقم', minPrice: 170, maxPrice: 340, time: '3-4 ساعات' },
        { type: '+ Anti-Mite + عفن', unit: 'طقم', minPrice: 220, maxPrice: 430, time: '3-5 ساعات' },
        { type: 'جلد + Conditioner', unit: 'طقم', minPrice: 190, maxPrice: 380, time: '2-3 ساعات' },
        { type: 'ربع سنوي', unit: 'سنة', minPrice: 520, maxPrice: 1050, time: '4 زيارات' },
    ],
    faq: [
        { question: 'بلمرة ملحية — فرق عن الجبيل؟', answer: 'الجبيل: بخور+VOC. القطيف: بخور+NaCl. أقل صعوبة لكن فريدة.' },
        { question: 'طلع+عث — مُركّبة؟', answer: 'نعم — طلع = أليرجين 1. عث = أليرجين 2. معاً = حساسية مُركّبة.' },
        { question: 'تجفيف — 4-8 ساعات؟', answer: '80-95%. أسرع من الجبيل (6-10). Turbo.' },
        { question: 'كم تكلفة التنظيف العميق مقارنة بالتنظيف العادي؟', answer: 'التنظيف العميق أغلى 30-50% لكنه يشمل: HEPA + بخار 150°م + تعقيم. التنظيف العادي = مسح سطحي. العميق كل 3-4 أشهر + العادي أسبوعياً = أفضل معادلة تكلفة/نظافة.' },
        { question: 'هل المواد المستخدمة آمنة على الأطفال؟', answer: 'مواد معتمدة من هيئة الغذاء والدواء SFDA. بعد التنظيف: تهوية 30 دقيقة كافية. بخار 150°م = بديل للكيماويات — آمن 100% على الأطفال والحيوانات.' },
    ],
    expertTips: [
        'Enzymatic — بلمرة ملحية.',
        'بخار 100°م — عث + طلع.',
        'Anti-Fungal — عفن حشوة.',
        'Turbo — 80-95% تجفيف.',
        'بعد التنظيف: شغّل المكيف وليس الشبّاك — الهواء الخارجي يعيد الغبار على الأسطح النظيفة.',
    ],
    warnings: [
        'بلمرة ملحية × 6 أشهر = طبقة صعبة.',
        '80-95% + حشوة = عفن+عث = حساسية مُركّبة.',
        'تجفيف بدون Turbo = عفن حشوة.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص التنظيف' },
        { entity: AMANA.SHARQIA.entity, url: AMANA.SHARQIA.url, role: 'اشتراطات النظافة بالشرقية' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALMOHAIMED.name, quote: 'كنب القطيف: بخور+NaCl بلمرة + عث+طلع = حساسية مُركّبة. Enzymatic+Anti-Mite+بخار.', source: 'نصائح هندسية — كنب الواحات الساحلية' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ تنظيف كنب مرخص', authority: 'منصة بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'Enzymatic', use: 'بلمرة ملحية' },
        { name: 'بخار 100°م', use: 'عث + طلع' },
        { name: 'Anti-Fungal', use: '80-95% عفن' },
        { name: 'Turbo', use: '80-95% تجفيف' },
    ],
    commonConcerns: [
        { concern: 'مثل الخبر.', solution: 'واحة = طلع. مختلف.' },
        { concern: 'شامبو.', solution: 'بلمرة ملحية = Enzymatic.' },
    ],
    consumerEducation: [
        { myth: 'بخار لعفن.', truth: 'بخار = عث+طلع+تعقيم.' },
        { myth: 'نصف سنوي.', truth: 'عفن+عث+بخور+طلع. ربع سنوي.' },
    ],
    relatedServices: [
        { slug: 'carpet-cleaning', context: 'سجاد', priority: 1 },
        { slug: 'councils-cleaning', context: 'مجالس', priority: 2 },
        { slug: 'cleaning', context: 'تنظيف', priority: 3 },
        { slug: 'steam-cleaning', context: 'بخار', priority: 4 },
        { slug: 'furniture-cleaning', context: 'أثاث', priority: 5 },
        { slug: 'pest-control', context: 'حشرات', priority: 6 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 7 },
    ],
};
