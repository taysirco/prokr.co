import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف فلل بالجبيل — بروتوكول صناعي-ساحلي 7 محاور: NaCl+VOC+عفن+عث+بعوض+سخام+Biofilm (2026)',
        description: 'تنظيف فلل الجبيل. 7 محاور صناعية-ساحلية. NaCl+VOC. عفن 98%. عث أقصى. بعوض Aedes. سخام SABIC. Biofilm. أعقد فيلا في المملكة.',
        h1: 'تنظيف فلل بالجبيل — 7 محاور صناعية-ساحلية — أعقد فيلا في المملكة',
        keywords: ['تنظيف فلل الجبيل', 'تنظيف فيلا بالجبيل', 'شركة تنظيف فلل بالجبيل'],
    },
    content: {
        introduction: 'الفيلا في الجبيل = أعقد فيلا في المملكة — 7 محاور. المحور 1 — NaCl+VOC ترسبات: ملح+بتروكيماويات على كل سطح. Marine Degreaser. المحور 2 — 85-98% عفن: عفن أسبوع على كل سطح رطب. Anti-Fungal. المحور 3 — عث أقصى: حشوات + سجاد + ستائر. بخار + Anti-Mite. المحور 4 — بعوض Aedes: تصريف مكيفات + برك = بعوض ضنك. Larvicide. المحور 5 — سخام SABIC: طبقة سوداء على واجهات + أثاث + سيارات. Enzymatic. المحور 6 — Biofilm: 98% = Biofilm على حدائق + مسبح + واجهات. Anti-Biofilm. المحور 7 — تكثّف: 98% = Dehumidifier 24/7. Sick Building. المقارنة: حفر الباطن = 5 محاور (لا عفن + لا عث = ميزتين). الجبيل = 7 = أعقد.',
        shortAnswer: 'على عكس [فريق عادي] بـ 2-3 محاور، يعتمد بروتوكولنا في خدمة [تنظيف الفلل] بمدينة [الجبيل] على [فريق 7 محاور صناعي-ساحلي]. ففي ظل [NaCl+VOC + 85-98% + عث + بعوض + سخام + Biofilm + تكثّف]، تتفاقم ظاهرة [7-محاور]. لذا؛ يتدخل خبراؤنا عبر [بروتوكول فيلا صناعي-ساحلي 7 محاور].',
        heroSubtitle: '7 محاور: NaCl+VOC + عفن + عث + بعوض + سخام + Biofilm + تكثّف',
    },
    pricing: [
        { type: 'فيلا — بروتوكول صناعي-ساحلي', unit: 'فيلا', minPrice: 550, maxPrice: 1200, time: '6-10 ساعات' },
        { type: 'فيلا + حديقة + مسبح + واجهات', unit: 'فيلا', minPrice: 780, maxPrice: 1800, time: '8-14 ساعة' },
        { type: 'بعد إجازة (عفن 98%)', unit: 'فيلا', minPrice: 640, maxPrice: 1400, time: '8-12 ساعة' },
        { type: 'عقد أسبوعي', unit: 'شهر', minPrice: 680, maxPrice: 1400, time: '4 زيارات' },
    ],
    faq: [
        { question: '7 محاور — أكثر من أي مدينة؟', answer: 'الأكثر. حفر الباطن: 5 (لا عفن+عث). الخبر: 7 (بلا سخام). الجبيل: 7 كاملة + سخام = الأعقد.' },
        { question: 'فريق — كم شخص؟', answer: 'فيلا صغيرة: 5-6. فيلا كبيرة: 7-8. أكبر فريق في المملكة.' },
        { question: 'أغلى من حفر الباطن — كم؟', answer: 'أغلى 30-50%. محورين إضافيين (عفن+عث) + سخام + Dehumidifier.' },
        { question: 'أسبوعي — ليش؟', answer: '7 ملوثات يومية + عفن أسبوعي + بعوض. أسبوعي = يمنع التراكم.' },
        { question: 'كم تكلفة التنظيف العميق مقارنة بالتنظيف العادي؟', answer: 'التنظيف العميق أغلى 30-50% لكنه يشمل: HEPA + بخار 150°م + تعقيم. التنظيف العادي = مسح سطحي. العميق كل 3-4 أشهر + العادي أسبوعياً = أفضل معادلة تكلفة/نظافة.' },
    ],
    expertTips: [
        'Marine Degreaser — NaCl+VOC المحور 1.',
        'Anti-Fungal كل زيارة — 98% المحور 2.',
        'بخار + Anti-Mite — عث المحور 3.',
        'Larvicide تصريف مكيف — بعوض المحور 4.',
        'Enzymatic سخام — المحور 5.',
        'Anti-Biofilm حديقة+مسبح — المحور 6.',
        'Dehumidifier 24/7 — المحور 7.',
    ],
    warnings: [
        '7 محاور × 12 شهر = تلف شامل بدون بروتوكول.',
        'بعد إجازة 98% = عفن شامل + بعوض + Biofilm.',
        'Dehumidifier 24/7 = إلزامي. بدون = Sick Building.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص التنظيف' },
        { entity: AMANA.SHARQIA.entity, url: AMANA.SHARQIA.url, role: 'اشتراطات الفلل بالشرقية' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALMISNID.name, quote: 'فيلا الجبيل = الأعقد: 7 محاور صناعية-ساحلية. NaCl+VOC+عفن+عث+بعوض+سخام+Biofilm+تكثّف. أكبر فريق + أغلى عقد.', source: 'جغرافيا المناخ — فلل البيئة الصناعية' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [
        { badge: '✔️ تنظيف فلل مرخص', authority: 'منصة بلدي', icon: 'shield-check' },
        { badge: '✔️ بروتوكول 7 محاور صناعي-ساحلي', authority: 'معتمد داخلياً', icon: 'badge-check' },
    ],
    equipment: [
        { name: 'Marine Degreaser', use: 'NaCl+VOC — المحور 1' },
        { name: 'Anti-Fungal', use: '98% عفن — المحور 2' },
        { name: 'بخار + Anti-Mite', use: 'عث — المحور 3' },
        { name: 'BTI Larvicide', use: 'بعوض — المحور 4' },
        { name: 'Enzymatic', use: 'سخام — المحور 5' },
        { name: 'Anti-Biofilm', use: 'Biofilm — المحور 6' },
        { name: 'Dehumidifier', use: 'تكثّف — المحور 7' },
    ],
    commonConcerns: [
        { concern: 'مثل الخبر.', solution: 'سخام SABIC + 98%>95% + VOC. أعقد.' },
        { concern: 'غالي.', solution: '7 محاور = 7 أدوات+فريق. بدون = تلف أغلى.' },
    ],
    consumerEducation: [
        { myth: 'مثل حفر الباطن.', truth: '5 محاور vs 7. عفن+عث إضافي. أعقد 40%.' },
        { myth: 'شهري.', truth: '7 ملوثات يومية + عفن أسبوعي. أسبوعي.' },
        { myth: 'فريق صغير.', truth: '7 محاور = 5-8 أشخاص.' },
    ],
    relatedServices: [
        { slug: 'cleaning', context: 'تنظيف — NaCl+VOC', priority: 1 },
        { slug: 'swimming-pool-cleaning', context: 'مسبح — Demand', priority: 2 },
        { slug: 'glass-facades-cleaning', context: 'واجهات — سخام', priority: 3 },
        { slug: 'carpet-cleaning', context: 'سجاد — عفن', priority: 4 },
        { slug: 'furniture-cleaning', context: 'أثاث — Galvanic', priority: 5 },
        { slug: 'pest-control', context: 'حشرات — بعوض', priority: 6 },
        { slug: 'termite-control', context: 'نمل أبيض', priority: 7 },
    ],
};
