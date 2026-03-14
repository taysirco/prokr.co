import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف فلل بخميس مشيط — 7-8 محاور جبلية! عفن+عث+تكثّف+أمطار+حديقة — أعقد فيلا (2026)',
        description: 'تنظيف فلل خميس مشيط. 7-8 محاور! عفن+عث+تكثّف+أمطار+حديقة+طحالب. Anti-Fungal+Anti-Mite+Dehumidifier.',
        h1: 'تنظيف فلل بخميس مشيط — 7-8 محاور — أعقد فيلا!',
        keywords: ['تنظيف فلل خميس مشيط', 'تنظيف فيلا بخميس مشيط', 'شركة تنظيف فلل خميس مشيط'],
    },
    content: {
        introduction: 'فيلا خميس مشيط = أعقد فيلا تنظيفاً بالمملكة! 7-8 محاور: المحور 1 — عفن: ضباب 200 يوم + 60-85% = عفن Aspergillus على جدران وحمامات. المحور 2 — عث: مفروشات رطبة. المحور 3 — تكثّف: نوافذ وأسطح باردة شتاءً. المحور 4 — أمطار: تسريبات إضافية من الخارج. المحور 5 — حديقة: أوراق وطين ولبلاب على الواجهة. المحور 6 — طحالب: على الممرات الخارجية الرطبة المظللة. المحور 7 — ضباب: غبار ضبابي يستقر على كل الأسطح. المحور 8 (موسمي): حشرات ورطوبة بعد أمطار. مقارنة: عنيزة = 5 محاور + لا عفن + لا عث + تجفيف 20 دقيقة + أرخص 40%. خميس = 7-8 محاور.',
        shortAnswer: 'على عكس [التنظيف بـ 5 محاور في المدن الصحراوية]، يعتمد بروتوكولنا في خدمة [تنظيف الفلل] بمدينة [خميس مشيط] على [7-8 محاور: Anti-Fungal+Anti-Mite+Dehumidifier+فحص+حديقة+طحالب+HEPA]. ففي ظل [ضباب+60-85%+عفن+عث+تكثّف+أمطار+حديقة+طحالب]، تتفاقم ظاهرة [7 مشاكل متزامنة]. لذا؛ يتدخل فريقنا عبر [7-8 محاور متكاملة].',
        heroSubtitle: '7-8 محاور جبلية — أعقد فيلا بالمملكة!',
    },
    pricing: [
        { type: 'فيلا صغيرة (300 م²)', unit: 'فيلا', minPrice: 500, maxPrice: 1000, time: '7-10h + تجفيف' },
        { type: 'فيلا كبيرة (500+ م²)', unit: 'فيلا', minPrice: 850, maxPrice: 1700, time: '10-14h + تجفيف' },
        { type: '7-8 محاور شامل', unit: 'فيلا', minPrice: 700, maxPrice: 1400, time: '8-12h + تجفيف' },
        { type: 'ربع سنوي (4 زيارات)', unit: 'سنة', minPrice: 1600, maxPrice: 3200, time: '4 زيارات' },
    ],
    faq: [
        { question: 'كم تكلفة تنظيف فيلا بخميس مقارنة بعنيزة؟', answer: 'أغلى 40% — 7-8 محاور مقابل 5. Anti-Fungal+Anti-Mite+Dehumidifier+حديقة+طحالب.' },
        { question: 'ليش 7-8 محاور بخميس و5 بعنيزة؟', answer: 'خميس: عفن+عث+تكثّف+أمطار+حديقة+طحالب+ضباب = كلها موجودة. عنيزة: لا عفن+لا عث+لا طحالب.' },
        { question: 'كيف أمنع عفن الفيلا بخميس مشيط؟', answer: 'Anti-Fungal كل زيارة + Dehumidifier دائم + تهوية. بدونها = عفن أسبوعين.' },
        { question: 'هل الحديقة تأثر على نظافة الفيلا بخميس؟', answer: 'أوراق+طين+لبلاب على الواجهة. أمطار تغسلها للداخل. تنظيف خارجي مهم.' },
        { question: 'متى أنظف الفيلا بخميس مشيط عميق؟', answer: 'ربع سنوي — 7-8 محاور = تراكم سريع. أسبوعي سطحي + كل 3 أشهر عميق.' },
    ],
    expertTips: [
        'Anti-Fungal كل زيارة — عفن أسبوعين.',
        'Anti-Mite أسبوعين — عث مفروشات.',
        'Dehumidifier دائم — 60-85% تكثّف.',
        'تنظيف حديقة — أوراق+طين+لبلاب.',
        'Algicide ممرات — طحالب خضراء.',
    ],
    warnings: [
        'عفن + عث + 6 أشهر = حساسية مزدوجة — خطر صحي.',
        'طحالب ممرات + أمطار = انزلاق — خطر سلامة.',
        'أمطار بدون فحص = تسريبات خفية — تلف هيكلي 10000+.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص شركات التنظيف' },
        { entity: AMANA.ASIR.entity, url: AMANA.ASIR.url, role: 'اشتراطات أمانة عسير' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALMISNID.name, quote: 'فيلا خميس: 7-8 محاور. أعقد فيلا بالمملكة. ضباب+عفن+عث+حديقة+طحالب.', source: 'جغرافيا المناخ — عسير' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ فلل مرخصة', authority: 'بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'Anti-Fungal+Anti-Mite', use: 'عفن+عث — ثنائي خطر' },
        { name: 'Dehumidifier صناعي', use: 'تجفيف+تحكم 60-85%' },
        { name: 'Algicide', use: 'طحالب ممرات خارجية' },
    ],
    commonConcerns: [
        { concern: 'مثل عنيزة.', solution: '7-8 محاور مقابل 5. عفن+عث = مختلف تماماً.' },
        { concern: 'أغلى = مبالغة.', solution: '7-8 محاور حقيقية. بدونها = كارثة.' },
    ],
    consumerEducation: [
        { myth: '5 محاور تكفي.', truth: 'عفن+عث+طحالب+حديقة = 7-8 إلزامي.' },
        { myth: 'فيلا خميس مثل عنيزة.', truth: 'أعقد 40%+أغلى.' },
    ],
    relatedServices: [
        { slug: 'cleaning', context: 'تنظيف', priority: 1 },
        { slug: 'apartments-cleaning', context: 'شقق', priority: 2 },
        { slug: 'carpet-cleaning', context: 'سجاد', priority: 3 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 4 },
        { slug: 'glass-facades-cleaning', context: 'واجهات', priority: 5 },
        { slug: 'marble-polishing', context: 'رخام', priority: 6 },
        { slug: 'pest-control', context: 'حشرات', priority: 7 },
    ],
};
