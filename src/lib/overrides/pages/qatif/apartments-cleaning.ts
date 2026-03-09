import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف شقق بالقطيف — NaCl+واحي عفن مزدوج + تربة طينية + نخيل + عيون (2026)',
        description: 'تنظيف شقق القطيف. NaCl+واحي عفن مزدوج. تربة طينية لزجة. نخيل ألياف. عيون رطوبة أرضية. RO + Anti-Fungal + Dehumidifier.',
        h1: 'تنظيف شقق بالقطيف — ملح ساحلي وعفن واحي وتربة طينية وألياف نخيل',
        keywords: ['تنظيف شقق القطيف', 'تنظيف شقة بالقطيف', 'شركة تنظيف شقق بالقطيف'],
    },
    content: {
        introduction: 'الشقة في القطيف تتسخ بطريقة ساحلية-زراعية فريدة. الأول — NaCl+عفن واحي مزدوج: ملح ساحلي + رطوبة واحية (عيون+ينابيع+نخيل) = مصدران مختلفان للعفن. ساحلي = Aspergillus على أسطح. واحي = Penicillium من التربة ← يصعد عبر الجدران. Anti-Fungal مزدوج. الثاني — تربة طينية لزجة: PM10 طيني يلتصق بالأسطح (لا ينتشر كـ SiO₂). + NaCl = طبقة لزجة ملحية. الثالث — نخيل: ألياف + غبار طلع = حساسية. HEPA. الرابع — عيون: شقق قرب عيون = رطوبة أرضية ← صعود رطوبة في الجدران ← عفن واحي من الأسفل.',
        shortAnswer: 'على عكس [تنظيف عادي] الذي لا يُراعي عفن واحي+NaCl، يعتمد بروتوكولنا في خدمة [تنظيف الشقق] بمدينة [القطيف] على [RO + Anti-Fungal مزدوج + HEPA + Dehumidifier]. ففي ظل [NaCl + 80-95% + تربة طينية + نخيل + عيون]، تتفاقم ظاهرة [عفن مزدوج + لزوجة + ألياف + صعود]. لذا؛ يتدخل خبراؤنا عبر [بروتوكول شقة ساحلية-واحية].',
        heroSubtitle: 'NaCl + عفن واحي مزدوج + تربة طينية + نخيل + عيون',
    },
    pricing: [
        { type: 'شقة — بروتوكول ساحلي-واحي', unit: 'شقة', minPrice: 180, maxPrice: 370, time: '3-5 ساعات' },
        { type: 'عميق (Anti-Fungal مزدوج)', unit: 'شقة', minPrice: 250, maxPrice: 490, time: '4-6 ساعات' },
        { type: 'بعد إجازة (عفن 80-95%)', unit: 'شقة', minPrice: 280, maxPrice: 550, time: '5-7 ساعات' },
        { type: 'عقد أسبوعي', unit: 'شهر', minPrice: 310, maxPrice: 630, time: '4 زيارات' },
    ],
    faq: [
        { question: 'عفن واحي — ماذا يعني؟', answer: 'عيون وينابيع = رطوبة أرضية ← تصعد في الجدران ← عفن من الأسفل (Penicillium). مختلف عن عفن ساحلي (Aspergillus من الأعلى). مزدوج!' },
        { question: '80-95% — أقل من الجبيل؟', answer: 'أقل (الجبيل 85-98%). لكن: واحة = رطوبة أرضية مُضافة = عفن واحي. ليس أقل خطراً — مختلف.' },
        { question: 'تربة طينية — مختلفة عن الظهران؟', answer: 'الظهران: SiO₂ يخدش (7 Mohs). القطيف: طين يلتصق (لزج). مشكلة التصاق ≠ خدش.' },
        { question: 'نخيل — في الشقة؟', answer: 'ألياف + غبار طلع يدخل من النوافذ + المكيف. موسم التلقيح = أسوأ. HEPA غرف النوم.' },
        { question: 'أسبوعي — ليش؟', answer: 'NaCl يومي + عفن واحي أسبوعي + طين + نخيل. أسبوعي = يمنع التراكم.' },
    ],
    expertTips: [
        'Anti-Fungal مزدوج — واحي (أسفل) + ساحلي (أعلى).',
        'RO شطف — NaCl+طين.',
        'HEPA غرف نوم — غبار طلع نخيل.',
        'Dehumidifier — قرب عيون = أعلى رطوبة.',
        'فحص جدران سفلية — صعود رطوبة واحية.',
    ],
    warnings: [
        'عفن واحي = يصعد من الأرض ← حساسية + تلف جدار سفلي.',
        'NaCl + طين لزج = طبقة صعبة الإزالة 3 أشهر.',
        'غبار طلع نخيل × موسم = حساسية تنفسية.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص التنظيف' },
        { entity: AMANA.SHARQIA.entity, url: AMANA.SHARQIA.url, role: 'اشتراطات النظافة بالشرقية' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALMISNID.name, quote: 'شقة القطيف: NaCl ساحلي + عفن واحي مزدوج (أعلى+أسفل) + تربة طينية + نخيل. ساحلي-زراعي فريد. Anti-Fungal مزدوج + RO + HEPA.', source: 'جغرافيا المناخ — تنظيف الواحات الساحلية' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ تنظيف مرخص', authority: 'منصة بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'RO Rinse', use: 'NaCl + طين — يُزيل' },
        { name: 'Anti-Fungal مزدوج', use: 'واحي+ساحلي — أعلى+أسفل' },
        { name: 'HEPA', use: 'نخيل غبار طلع — حساسية' },
        { name: 'Dehumidifier', use: '80-95% + عيون — يخفض' },
    ],
    hiddenObjections: [
        { fear: 'مثل الخبر.', solution: 'واحة = تربة+نخيل+عيون+عفن واحي. مختلف.' },
        { fear: 'مثل الأحساء.', solution: 'NaCl ساحلي إضافي. الأحساء: واحة داخلية.' },
    ],
    counterNarratives: [
        { myth: 'ساحلي فقط.', truth: 'ساحلي+واحي = ثنائي فريد.' },
        { myth: 'شهري.', truth: 'عفن واحي+NaCl+طين+نخيل. أسبوعي.' },
    ],
    relatedServices: [
        { slug: 'cleaning', context: 'تنظيف — NaCl+واحي', priority: 1 },
        { slug: 'carpet-cleaning', context: 'سجاد — عفن', priority: 2 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف — فلتر', priority: 3 },
        { slug: 'steam-cleaning', context: 'بخار — تعقيم', priority: 4 },
        { slug: 'pest-control', context: 'حشرات — بعوض', priority: 5 },
        { slug: 'marble-polishing', context: 'رخام — NaCl', priority: 6 },
        { slug: 'villas-cleaning', context: 'فلل', priority: 7 },
    ],
};
