import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'عزل خزانات بجدة — كلوريد يثقب + رطوبة 80% تُصدّئ + Legionella + طحالب (2026)',
        description: 'عزل خزانات جدة. كلوريد + رطوبة + 50°م = صدأ مزدوج + Legionella + طحالب. Marine-Grade + عزل حراري. من 800 ريال.',
        h1: 'عزل خزانات جدة — صدأ من الداخل والخارج في نفس الوقت',
        keywords: ['عزل خزانات بجدة', 'عزل خزان', 'Marine-Grade', 'طحالب خزان'],
    },
    content: {
        introduction: 'خزان جدة يُهاجم من جميع الجهات. من الداخل: كلوريد التحلية (Cl⁻) يسبب Pitting Corrosion. من الخارج: رطوبة 80% تُصدّئ السطح (Atmospheric Corrosion) ← الخزان يتآكل من الاتجاهين معاً. من الأعلى: حرارة + رطوبة = Heat Index 55°م ← ماء الخزان 45-50°م ← Legionella (25-50°م) + تكاثر بكتيري + طحالب. الفرق عن الرياض: في الرياض السطح الخارجي جاف — يصدأ من الداخل فقط. في جدة: صدأ 2× (داخل + خارج). عمر الخزان أقل 30-40%. الحل: Marine-Grade Epoxy داخلي (يتحمل Cl⁻) + طلاء مضاد صدأ خارجي + Anti-Algae Coating + عزل حراري يُقلل حرارة الماء.',
        shortAnswer: 'على عكس [خزان بدون حماية يصدأ من الداخل والخارج] في رطوبة 80%، يعتمد بروتوكولنا في [عزل الخزانات] بـ[جدة] على [Marine-Grade Epoxy + Anti-Rust + Anti-Algae + عزل حراري]. ففي ظل [Cl⁻ + رطوبة خارجية + Legionella + طحالب]، تتفاقم ظاهرة [صدأ مزدوج + تلوث صحي]. لذا؛ يتدخل خبراؤنا عبر [يحيِّد Marine-Grade الكلوريد ← يحمي Anti-Rust الخارج ← يمنع Anti-Algae التكاثر ← يُبرّد العزل الماء].',
        heroSubtitle: 'في الرياض: صدأ من الداخل فقط. في جدة: من الداخل والخارج.',
    },
    pricing: [
        { type: 'Marine-Grade Epoxy داخلي', unit: 'خزان', minPrice: 700, maxPrice: 1500, time: '1-2 يوم' },
        { type: 'Anti-Rust + Anti-Algae خارجي', unit: 'خزان', minPrice: 400, maxPrice: 800, time: '1 يوم' },
        { type: 'عزل حراري خارجي', unit: 'خزان', minPrice: 800, maxPrice: 2000, time: '1-2 يوم' },
        { type: 'نظام كامل', unit: 'خزان', minPrice: 1800, maxPrice: 4000, time: '2-3 أيام' },
    ],
    faq: [
        { question: 'ليش خزان جدة أقصر عمراً؟', answer: 'صدأ مزدوج: Cl⁻ من الداخل + رطوبة 80% من الخارج. في الرياض (10% رطوبة): الخارج جاف = صدأ داخلي فقط. في جدة: 2× = عمر أقل 30-40%.' },
        { question: 'Marine-Grade ولا Food-Grade؟', answer: 'Food-Grade: مصمم لمياه عذبة. Marine-Grade Food-Safe: يتحمل Cl⁻ + رطوبة + حرارة. في مياه جدة المحلاة: Marine-Grade الوحيد المقبول.' },
        { question: 'طحالب خضراء على الخزان — عادية؟', answer: 'في 80% رطوبة: طبيعية. لكنها تُسرّع تآكل السطح + إذا دخلت: تلوث الماء. Anti-Algae Coating يمنعها.' },
        { question: 'Legionella في جدة أخطر؟', answer: 'حرارة + رطوبة = بيئة أمثل. الماء 45-50°م في الخزان = نشاط Legionella الأقصى. عزل حراري يُقلل لـ 35° = يحيِّد.' },
        { question: 'كم يكلف التجاهل؟', answer: 'حماية: 1,800-4,000 مرة. استبدال خزان: 4,000-8,000 كل 5-7 سنوات بدون حماية. مع حماية: 10-15 سنة.' },
    ],
    expertTips: [
        'Marine-Grade Food-Safe: الطلاء الوحيد الذي يتحمل Cl⁻ في مياه جدة.',
        'Anti-Rust خارجي: يحيِّد Atmospheric Corrosion من رطوبة 80%.',
        'Anti-Algae كل 2-3 سنوات: يمنع طحالب تُسرّع التآكل.',
        'عزل حراري: يُقلل ماء 50° لـ 35° = حماية Legionella.',
        'فحص سنوي داخل + خارج: صدأ مزدوج = اكتشاف مبكر أهم.',
    ],
    warnings: [
        'صدأ مزدوج (داخل + خارج): عمر خزان جدة أقل 30-40% من الرياض بدون حماية.',
        'Marine-Grade ≠ Food-Grade. الإيبوكسي العادي لا يتحمل Cl⁻.',
        'ماء 50°م = Legionella + بكتيريا. عزل حراري = حماية صحية.',
    ],
    trustAnchors: [
        { ...GOV.NWC, role: 'معايير خزانات' },
        { ...GOV.SASO, role: 'SASO 1144' },
        { entity: AMANA.JEDDAH.entity, url: AMANA.JEDDAH.url, role: 'اشتراطات أمانة جدة' },
    ],
    expertReviewer: EXPERTS.ALMOHAIMED,
    expertCitations: [
        { expert: EXPERTS.ALMOHAIMED.name, quote: 'خزان جدة يصدأ من الداخل والخارج في نفس الوقت. بدون حماية مزدوجة: عمره أقل 30-40% من الرياض.', source: 'صيانة خزانات ساحلية' },
    ],
    saudiRegulations: [REGULATIONS.NWC_REPORT],
    verificationBadges: [{ badge: '✔️ Marine-Grade', authority: 'مقاوم Cl⁻', icon: 'shield-check' }],
    equipment: [
        { name: 'Marine-Grade Food-Safe Epoxy', use: 'يتحمل Cl⁻ + حرارة — آمن للشرب' },
        { name: 'Anti-Rust Coating', use: 'يحيِّد Atmospheric Corrosion الخارجي' },
        { name: 'Anti-Algae Coating', use: 'يمنع طحالب في 80% رطوبة' },
    ],
        commonConcerns: [
        { concern: 'العزل مكلف — مش متأكد يستاهل.', solution: 'عزل SBC 601 يوفر 30-40% كهرباء سنوياً. يسترد تكلفته خلال 2-3 سنوات.' },
    ],

    consumerEducation: [
        { myth: 'Food-Grade العادي يكفي.', truth: 'لا يتحمل Cl⁻. Marine-Grade = الوحيد لجدة.' },
        { myth: 'الخزان الأرضي محمي.', truth: 'Cl⁻ في الماء + رطوبة تربة = يُهاجم أيضاً.' },
    ],
    relatedServices: [
        { slug: 'tank-leak-detection', context: 'فحص', priority: 1 },
        { slug: 'roof-insulation', context: 'سيول', priority: 2 },
        { slug: 'water-insulation', context: 'أساسات', priority: 3 },
        { slug: 'thermal-insulation', context: 'حراري', priority: 4 },
        { slug: 'water-leak-detection', context: 'تسربات', priority: 5 },
    
        { slug: 'foam-insulation', context: 'خدمة مكملة — باقة شاملة.', priority: 6 },
        { slug: 'cleaning', context: 'خدمة مكملة — باقة شاملة.', priority: 7 },
    ],
};
