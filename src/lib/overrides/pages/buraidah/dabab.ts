import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'دباب نقل ببريدة — نقل تمور+أعلاف نخيل+Nafud طرق — دباب نخيلي! (2026)',
        description: 'دباب نقل بريدة. نقل تمور+أعلاف نخيل+منتجات مزارع. Nafud طرق ترابية. ΔT 45°م. دباب نخيلي متخصص.',
        h1: 'دباب نقل ببريدة — دباب نخيلي ومزارع تمور!',
        keywords: ['دباب نقل بريدة', 'دباب ببريدة', 'دباب نقل ببريدة'],
    },
    content: {
        introduction: 'دباب بريدة = دباب نخيلي! نقل تمور: بريدة عاصمة التمور = نقل تمور من المزارع للأسواق والمصانع يومياً. صندوق نظيف+معزول ΔT. أعلاف نخيل: سعف+نوى = أعلاف حيوانية. نقل من مزرعة لمزرعة. تغطية ضد Nafud. Nafud طرق: مزارع النخيل على أطراف المدينة = طرق Nafud ترابية. دباب عجلات كبيرة. CaCO₃ 600ppm لا يأثر مباشرة على النقل. ΔT 45°م: صيف 48°م = تمور تحتاج تبريد أثناء النقل. صندوق معزول+ثلج. 10-20% = تمور لا تتعفّن في النقل! ميزة. مقارنة: الخرج = دباب ألبان. بريدة = دباب تمور/نخيل = مختلف.',
        shortAnswer: 'على عكس [الدباب العادي بدون صندوق نظيف]، يعتمد بروتوكولنا في خدمة [دباب النقل] بمدينة [بريدة] على [صندوق نظيف+معزول+تغطية+عجلات كبيرة]. ففي ظل [تمور+أعلاف نخيل+Nafud طرق+ΔT 45°م]، تتفاقم ظاهرة [تلوث+حرارة+غبار]. لذا؛ يتدخل فريقنا عبر [تنظيف ← تحميل ← عزل ← توصيل].',
        heroSubtitle: 'دباب نخيلي — تمور+أعلاف+Nafud طرق — صندوق معزول!',
    },
    pricing: [
        { type: 'داخل بريدة', unit: 'رحلة', minPrice: 50, maxPrice: 100, time: '30-60 دقيقة' },
        { type: 'بريدة ← مزرعة', unit: 'رحلة', minPrice: 80, maxPrice: 170, time: '1-2 ساعة' },
        { type: '+ صندوق معزول (تمور)', unit: 'إضافي', minPrice: 30, maxPrice: 60, time: 'نفس' },
        { type: 'عقد شهري (مزارع)', unit: 'شهر', minPrice: 400, maxPrice: 800, time: '10-15 رحلة' },
    ],
    faq: [
        { question: 'هل الدباب ينقل تمور ببريدة؟', answer: 'نعم — صندوق نظيف+معزول. ΔT 48°م = بدون عزل تتلف. SFDA آمن.' },
        { question: 'هل الدباب يوصل مزارع النخيل ببريدة؟', answer: 'نعم — Nafud طرق ترابية. عجلات كبيرة. تغطية ضد غبار.' },
        { question: 'كم تكلفة دباب ببريدة مقارنة بالخرج؟', answer: 'متقاربة. لكن: بريدة تمور+نخيل. الخرج: ألبان. مختلف.' },
        { question: 'هل الأعلاف تتعفّن في النقل ببريدة؟', answer: 'لا! 10-20% = جاف. ميزة. لكن: تغطية ضد Nafud إلزامية.' },
        { question: 'متى أفضل وقت نقل تمور ببريدة؟', answer: 'صباحاً بالصيف (ΔT أقل). موسم تمور: يوليو-أكتوبر = ذروة.' },
    ],
    expertTips: [
        'صندوق نظيف — تمور غذاء.',
        'معزول صيفاً — ΔT 45°م.',
        'تغطية — Nafud SiO₂ غبار.',
        'عجلات كبيرة — طرق نخيل.',
        'جفاف ميزة — أعلاف لا تتعفّن.',
    ],
    warnings: [
        'تمور + ΔT بدون عزل = تلف خلال ساعة — خسارة.',
        'Nafud + حمولة مكشوفة = غبار على كل شيء.',
        'طريق نخيل + دباب عادي = يعلق — عجلات كبيرة.',
    ],
    trustAnchors: [
        { ...GOV.TGA, role: 'ترخيص النقل' },
        { ...GOV.BALADI, role: 'ترخيص النشاط' },
        { entity: AMANA.QASSIM.entity, url: AMANA.QASSIM.url, role: 'اشتراطات أمانة القصيم' },
    ],
    expertReviewer: EXPERTS.ALSHABNAN,
    expertCitations: [
        { expert: EXPERTS.ALZUWAYED.name, quote: 'دباب بريدة: نخيلي. تمور+أعلاف. صندوق نظيف+معزول. Nafud طرق.', source: 'لوجستيات — القصيم' },
    ],
    saudiRegulations: [REGULATIONS.TGA_LICENSE],
    verificationBadges: [{ badge: '✔️ نقل مرخص TGA', authority: 'هيئة النقل', icon: 'shield-check' }],
    equipment: [
        { name: 'صندوق نظيف+معزول', use: 'تمور — ΔT+نظافة' },
        { name: 'تغطية محكمة', use: 'يمنع Nafud — غبار' },
        { name: 'عجلات كبيرة', use: 'طرق نخيل ترابية' },
    ],
    commonConcerns: [
        { concern: 'دباب عادي.', solution: 'تمور = نظيف+معزول. Nafud = تغطية.' },
        { concern: 'مثل الخرج.', solution: 'تمور مقابل ألبان. مختلف.' },
    ],
    consumerEducation: [
        { myth: 'أي دباب.', truth: 'طرق Nafud = عجلات كبيرة.' },
        { myth: 'بدون عزل.', truth: 'ΔT 45°م = تمور تتلف ساعة.' },
    ],
    relatedServices: [
        { slug: 'dyna', context: 'دينا', priority: 1 },
        { slug: 'furniture-moving', context: 'نقل عفش', priority: 2 },
        { slug: 'furniture-storage', context: 'تخزين', priority: 3 },
        { slug: 'cleaning', context: 'تنظيف', priority: 4 },
        { slug: 'auto-cleaning', context: 'سيارات', priority: 5 },
        { slug: 'pest-control', context: 'حشرات', priority: 6 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 7 },
    ],
};
