import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف مكاتب بتبوك — غبار حسمى يسد إلكترونيات + تكاثف صقيعي Short Circuit + ESD في 12% (2026)',
        description: 'تنظيف مكاتب تبوك. حسمى يسد فلاتر = Thermal Throttling. تكاثف -2°م على خوادم = Short Circuit. ESD أعلى في 12% رطوبة. ESD-Safe + HEPA + Deionized.',
        h1: 'تنظيف مكاتب بتبوك — حسمى يسد والصقيع يُكثّف والجفاف يُشرّر',
        keywords: ['تنظيف مكاتب بتبوك', 'تنظيف مكتب تبوك', 'شركة تنظيف مكاتب بتبوك'],
    },
    content: {
        introduction: 'المكتب التبوكي يواجه 3 تهديدات: (1) Thermal Throttling: حسمى يسد فلاتر الأجهزة ← المعالج يُبطئ نفسه. (2) تكاثف -2°م على إلكترونيات باردة (نافذة مفتوحة شتاءً) = Short Circuit. (3) ESD: 12% رطوبة = كهرباء ساكنة أعلى 3× من جدة ← شرارة تُتلف المعالج. الحل: ESD-Safe HEPA + Deionized شاشات + تهوية ميكانيكية (لا نوافذ شتاءً).',
        shortAnswer: 'بروتوكول تقني: ESD-Safe HEPA + Deionized + تحكم رطوبة. 3 تهديدات × 3 حلول.',
        heroSubtitle: 'Thermal Throttling + Short Circuit + ESD — المكتب التبوكي يحتاج بروتوكولاً تقنياً',
    },
    pricing: [
        { type: 'تنظيف مكتب — صغير (حتى 100 م²)', unit: 'مكتب', minPrice: 200, maxPrice: 400, time: '2-3 ساعات' },
        { type: 'تنظيف + ESD-Safe أجهزة', unit: 'مكتب', minPrice: 300, maxPrice: 600, time: '3-5 ساعات' },
        { type: 'عقد أسبوعي', unit: 'شهر', minPrice: 600, maxPrice: 1200, time: '4 زيارات' },
    ],
    faq: [
        { question: 'أجهزة بطيئة — ليش؟', answer: 'حسمى يسد الفلاتر = Thermal Throttling. تنظيف ESD-Safe كل 3 أشهر = يُعيد الأداء.' },
        { question: 'تكاثف على الشاشات شتاءً؟', answer: '-2°م خارج + 22°م داخل = تكاثف فوري عند فتح النافذة. لا نوافذ شتاءً + تهوية ميكانيكية.' },
        { question: 'ESD في تبوك أخطر؟', answer: '12% رطوبة = أعلى كهرباء ساكنة. سوار ESD مُؤرّض إلزامي قبل لمس الأجهزة.' },
    ],
    expertTips: [
        'ESD-Safe كل 3 أشهر — حسمى يسد المشعات خلال 3-4 أشهر.',
        'Deionized للشاشات — ماء صنبور = كلس ثلجي.',
        'لا نوافذ شتاءً — -2°م + 22°م = تكاثف على الإلكترونيات.',
        'غرفة خوادم: تحكم رطوبة 40-55% — < 30%: ESD. > 60%: تكاثف.',
    ],
    warnings: [
        'تنظيف أجهزة بدون ESD في 12% = شرارة = تلف معالج/ذاكرة.',
        'نافذة مفتوحة -2°م على مكتب 22°م = تكاثف = Short Circuit.',
    ],
    trustAnchors: [{ ...GOV.BALADI, role: 'ترخيص شركات التنظيف' },
        { entity: AMANA.TABUK.entity, url: AMANA.TABUK.url, role: 'اشتراطات أمانة تبوك' },
    ],
        expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALMOHAIMED.name, quote: 'المكتب التبوكي: Thermal Throttling + Short Circuit + ESD 3×. حسمى + -2°م + 12% = ثلاثي تقني فريد.', source: 'نصائح هندسية — بيئة العمل المكتبية' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ تنظيف مكاتب مرخص', authority: 'بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'HEPA + ESD-Safe Kit', use: 'يسحب حسمى من الأجهزة بدون شرارة' },
        { name: 'Deionized Water', use: 'شاشات بدون كلس ثلجي' },
        { name: 'سوار ESD مُؤرّض', use: 'يُفرّغ الكهرباء الساكنة في 12% رطوبة' },
    ],
    hiddenObjections: [
        { fear: 'عامل المبنى يكفي.', solution: 'بدون ESD: شرارة = تلف. بدون HEPA: Throttling. بدون Deionized: كلس.' },
    ],
    counterNarratives: [
        { myth: 'أجهزة حديثة ما تحتاج.', truth: 'حسمى 3 أشهر = Throttling حتى جديد.' },
    ],
    relatedServices: [
        { slug: 'cleaning', context: 'تنظيف — المبنى كاملاً', priority: 1 },
        { slug: 'hourly-cleaning', context: 'بالساعة — عاملة مُدرّبة', priority: 2 },
        { slug: 'glass-facades-cleaning', context: 'واجهات — واجهة المكتب', priority: 3 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف — فلتر مسدود', priority: 4 },
        { slug: 'carpet-cleaning', context: 'سجاد — موكيت المكتب', priority: 5 },
    ],
};
