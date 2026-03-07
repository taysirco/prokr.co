import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف أثاث بالقطيف — NaCl Galvanic + 80-95% عفن واحي داخلي + PVAc + طين (2026)',
        description: 'تنظيف أثاث القطيف. NaCl مفصلات Galvanic. 80-95% عفن واحي داخلي. PVAc يمتص. طين يلتصق. Marine Anti-Corrosion + Anti-Fungal + Dehumidifier.',
        h1: 'تنظيف أثاث بالقطيف — ملح يُصدئ وعفن واحي يغزو وطين يلتصق',
        keywords: ['تنظيف أثاث القطيف', 'تنظيف عفش بالقطيف', 'شركة تنظيف أثاث بالقطيف'],
    },
    content: {
        introduction: 'الأثاث في القطيف يتعرض لتلف ساحلي-واحي. الأول — NaCl Galvanic: ملح ساحلي = صدأ مفصلات. Anti-Corrosion. الثاني — 80-95% عفن واحي: خلف+داخل الأثاث = عفن مزدوج (ساحلي من أعلى + واحي من أسفل/عيون). Anti-Fungal. الثالث — PVAc: 80-95% = يمتص ← يلين ← مفاصل تضعف. Dehumidifier. الرابع — طين: تربة واحية = طين يلتصق بأرجل الأثاث + أسطح سفلية.',
        shortAnswer: 'على عكس [ملمّع سطحي] الذي لا يحمي من NaCl ولا عفن واحي، يعتمد بروتوكولنا في خدمة [تنظيف الأثاث] بمدينة [القطيف] على [Anti-Corrosion + Anti-Fungal مزدوج + Dehumidifier]. ففي ظل [NaCl + 80-95% + PVAc + طين]، تتفاقم ظاهرة [Galvanic + عفن مزدوج + تلين + التصاق]. لذا؛ يتدخل خبراؤنا عبر [بروتوكول أثاث ساحلي-واحي].',
        heroSubtitle: 'NaCl Galvanic + عفن واحي مزدوج + PVAc + طين لزج',
    },
    pricing: [
        { type: 'غرفة — ساحلي-واحي', unit: 'غرفة', minPrice: 140, maxPrice: 280, time: '2-3 ساعات' },
        { type: '+ Anti-Corrosion + Anti-Fungal', unit: 'غرفة', minPrice: 180, maxPrice: 360, time: '3-4 ساعات' },
        { type: 'بيت كامل', unit: 'بيت', minPrice: 380, maxPrice: 850, time: '5-8 ساعات' },
        { type: 'ربع سنوي', unit: 'سنة', minPrice: 440, maxPrice: 880, time: '4 زيارات' },
    ],
    faq: [
        { question: 'عفن واحي — من أين؟', answer: 'عيون = رطوبة أرضية ← تصعد ← تصل أسفل الأثاث. + ساحلي = مزدوج. إبعاد 5 سم.' },
        { question: 'PVAc — 80-95% خطير؟', answer: 'خطير — PVAc يمتص 80-95% = يلين. + NaCl يُضعف. مفاصل تنفك. Dehumidifier.' },
        { question: 'طين — يلتصق بالأثاث؟', answer: 'أرجل + أسطح سفلية. تربة واحية = طين. تنظيف منتظم.' },
        { question: 'ربع سنوي — يكفي؟', answer: 'NaCl+عفن+PVAc+طين. ربع سنوي = الحد.' },
    ],
    expertTips: [
        'Anti-Corrosion ربع سنوي — Galvanic.',
        'إبعاد 5 سم عن الجدار — عفن واحي.',
        'Dehumidifier — PVAc.',
        'تنظيف أسفل أثاث — طين.',
    ],
    warnings: [
        'NaCl + مفصلات = صدأ 6-12 شهر.',
        '80-95% + عفن واحي = تلف جدار + أثاث.',
        'PVAc + 80-95% = مفاصل تنفك سنة.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص التنظيف' },
        { entity: AMANA.SHARQIA.entity, url: AMANA.SHARQIA.url, role: 'اشتراطات النظافة بالشرقية' },
    ],
    expertReviewer: EXPERTS.ALMOHAIMED,
    expertCitations: [
        { expert: EXPERTS.ALMOHAIMED.name, quote: 'أثاث القطيف: NaCl+عفن واحي+PVAc+طين. ساحلي-واحي فريد. Anti-Corrosion + Anti-Fungal مزدوج + Dehumidifier.', source: 'نصائح هندسية — أثاث الواحات الساحلية' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ تنظيف أثاث مرخص', authority: 'منصة بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'Anti-Corrosion', use: 'NaCl — Galvanic مفصلات' },
        { name: 'Anti-Fungal مزدوج', use: 'واحي+ساحلي — أعلى+أسفل' },
        { name: 'Dehumidifier', use: 'PVAc — 80-95%' },
    ],
    hiddenObjections: [
        { fear: 'مثل الخبر.', solution: 'واحة = عفن واحي+طين. مختلف.' },
        { fear: 'ملمّع.', solution: 'NaCl+عفن 80-95%. سطحي.' },
    ],
    counterNarratives: [
        { myth: 'ساحلي فقط.', truth: 'واحي = طين+عيون+عفن.' },
        { myth: 'نصف سنوي.', truth: 'عفن+Galvanic. ربع سنوي.' },
    ],
    relatedServices: [
        { slug: 'furniture-moving', context: 'نقل', priority: 1 },
        { slug: 'furniture-storage', context: 'تخزين', priority: 2 },
        { slug: 'sofa-cleaning', context: 'كنب', priority: 3 },
        { slug: 'cleaning', context: 'تنظيف', priority: 4 },
        { slug: 'carpet-cleaning', context: 'سجاد', priority: 5 },
        { slug: 'pest-control', context: 'حشرات', priority: 6 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 7 },
    ],
};
