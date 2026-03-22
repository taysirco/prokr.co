import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../gov-references';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف فلل بالقطيف — بروتوكول ساحلي-واحي 6 محاور: NaCl+عفن مزدوج+عث+بعوض+طين+نخيل (2026)',
        description: 'تنظيف فلل القطيف. 6 محاور ساحلية-واحية. NaCl. عفن مزدوج. عث. بعوض عيون. طين. نخيل طلع. واحة ساحلية فريدة.',
        h1: 'تنظيف فلل بالقطيف — 6 محاور ساحلية-واحية — واحة على الخليج',
        keywords: ['تنظيف فلل القطيف', 'تنظيف فيلا بالقطيف', 'شركة تنظيف فلل بالقطيف'],
    },
    content: {
        introduction: 'الفيلا في القطيف = ساحلية-واحية — 6 محاور. المحور 1 — NaCl ترسبات: ملح ساحلي + طين واحي = طبقة لزجة ملحية. RO + Microfiber. المحور 2 — عفن مزدوج: ساحلي (من أعلى) + واحي (من أسفل/عيون) = Anti-Fungal أعلى+أسفل. المحور 3 — عث: 80-95% = عث. بخار + Anti-Mite. المحور 4 — بعوض عيون: عيون+ينابيع = نقاط تكاثر بعوض. Larvicide BTI. المحور 5 — طين: تربة واحية = طين على أرضيات+حدائق. HEPA + تنظيف. المحور 6 — نخيل طلع: ألياف+غبار طلع = حساسية. HEPA. المقارنة: الجبيل = 7 محاور (VOC+سخام). القطيف = 6 (واحي). حفر الباطن = 5 (لا عفن+عث).',
        shortAnswer: 'على عكس [فريق عادي] بـ 2-3 محاور، يعتمد بروتوكولنا في خدمة [تنظيف الفلل] بمدينة [القطيف] على [فريق 6 محاور ساحلي-واحي]. ففي ظل [NaCl + عفن مزدوج + عث + بعوض + طين + نخيل]، تتفاقم ظاهرة [6 محاور]. لذا؛ يتدخل خبراؤنا عبر [بروتوكول فيلا ساحلي-واحي 6 محاور].',
        heroSubtitle: '6 محاور: NaCl + عفن مزدوج + عث + بعوض عيون + طين + نخيل طلع',
    },
    pricing: [
        { type: 'فيلا — ساحلي-واحي', unit: 'فيلا', minPrice: 480, maxPrice: 1050, time: '6-10 ساعات' },
        { type: 'فيلا + حديقة واحية + مسبح', unit: 'فيلا', minPrice: 680, maxPrice: 1600, time: '8-14 ساعة' },
        { type: 'بعد إجازة (عفن مزدوج 80-95%)', unit: 'فيلا', minPrice: 550, maxPrice: 1200, time: '8-12 ساعة' },
        { type: 'عقد أسبوعي', unit: 'شهر', minPrice: 580, maxPrice: 1200, time: '4 زيارات' },
    ],
    faq: [
        { question: '6 محاور — أقل من الجبيل؟', answer: 'أقل — الجبيل: 7 (VOC+سخام). القطيف: 6. حفر الباطن: 5. لكن: واحي فريد.' },
        { question: 'حديقة واحية — فرق؟', answer: 'حديقة القطيف = نخيل+عيون+تربة طينية = بعوض+طحالب+طين. أعقد من حديقة الخبر.' },
        { question: 'فريق — كم شخص؟', answer: 'فيلا صغيرة: 4-5. كبيرة مع حديقة: 6-7.' },
        { question: 'أسبوعي — ليش؟', answer: '6 ملوثات + عفن أسبوعي + بعوض. أسبوعي.' },
        { question: 'كم تكلفة التنظيف العميق مقارنة بالتنظيف العادي؟', answer: 'التنظيف العميق أغلى 30-50% لكنه يشمل: HEPA + بخار 150°م + تعقيم. التنظيف العادي = مسح سطحي. العميق كل 3-4 أشهر + العادي أسبوعياً = أفضل معادلة تكلفة/نظافة.' },
    ],
    expertTips: [
        'RO + Microfiber — NaCl+طين المحور 1.',
        'Anti-Fungal مزدوج — أعلى+أسفل المحور 2.',
        'بخار + Anti-Mite — عث المحور 3.',
        'BTI Larvicide عيون — بعوض المحور 4.',
        'HEPA — طين+طلع المحور 5+6.',
        'Dehumidifier — 80-95%.',
    ],
    warnings: [
        '6 محاور × 12 شهر = تلف شامل بدون بروتوكول.',
        'بعد إجازة = عفن مزدوج + بعوض + طحالب.',
        'حديقة واحية بدون Larvicide = بعوض.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص التنظيف' },
        { entity: AMANA.SHARQIA.entity, url: AMANA.SHARQIA.url, role: 'اشتراطات الفلل بالشرقية' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALMISNID.name, quote: 'فيلا القطيف: 6 محاور ساحلية-واحية. NaCl+عفن مزدوج+عث+بعوض عيون+طين+نخيل. واحة على الخليج = فريد.', source: 'جغرافيا المناخ — فلل الواحات الساحلية' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [
        { badge: '✔️ تنظيف فلل مرخص', authority: 'منصة بلدي', icon: 'shield-check' },
        { badge: '✔️ بروتوكول 6 محاور ساحلي-واحي', authority: 'معتمد داخلياً', icon: 'badge-check' },
    ],
    equipment: [
        { name: 'RO + Microfiber', use: 'NaCl+طين — المحور 1' },
        { name: 'Anti-Fungal مزدوج', use: 'واحي+ساحلي — المحور 2' },
        { name: 'بخار + Anti-Mite', use: 'عث — المحور 3' },
        { name: 'BTI Larvicide', use: 'بعوض عيون — المحور 4' },
        { name: 'HEPA', use: 'طين+طلع — المحور 5+6' },
        { name: 'Dehumidifier', use: '80-95% — تكثّف' },
    ],
    commonConcerns: [
        { concern: 'مثل الخبر.', solution: 'واحة = 6 محاور. عفن مزدوج+طين+نخيل+عيون.' },
        { concern: 'غالي.', solution: '6 محاور = 6 أدوات. بدون = تلف أغلى.' },
    ],
    consumerEducation: [
        { myth: 'ساحلي فقط.', truth: 'واحي = طين+نخيل+عيون+عفن واحي. ثنائي.' },
        { myth: 'شهري.', truth: '6 ملوثات + عفن أسبوعي. أسبوعي.' },
        { myth: 'مثل حفر الباطن.', truth: '6 محاور vs 5. عفن+عث إضافي.' },
    ],
    relatedServices: [
        { slug: 'cleaning', context: 'تنظيف', priority: 1 },
        { slug: 'swimming-pool-cleaning', context: 'مسبح', priority: 2 },
        { slug: 'glass-facades-cleaning', context: 'واجهات', priority: 3 },
        { slug: 'carpet-cleaning', context: 'سجاد', priority: 4 },
        { slug: 'furniture-cleaning', context: 'أثاث', priority: 5 },
        { slug: 'pest-control', context: 'حشرات', priority: 6 },
        { slug: 'termite-control', context: 'نمل أبيض', priority: 7 },
    ],
};
