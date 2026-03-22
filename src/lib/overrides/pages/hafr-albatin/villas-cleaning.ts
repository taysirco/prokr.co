import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../gov-references';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف فلل بحفر الباطن — بروتوكول قاري 5 محاور: SiO₂ + ΔT 54°م + UV + كهرباء + حشرات (2026)',
        description: 'تنظيف فلل حفر الباطن. 5 محاور قارية: SiO₂ عواصف. ΔT 54°م. UV قاري. كهرباء ساكنة. حشرات Deathstalker. لا عفن/عث (ميزتين!). HEPA + Anti-Static.',
        h1: 'تنظيف فلل بحفر الباطن — 5 محاور قارية + ميزتين + فريق مُتخصص',
        keywords: ['تنظيف فلل حفر الباطن', 'تنظيف فيلا حفر الباطن', 'شركة تنظيف فلل حفر الباطن'],
    },
    content: {
        introduction: 'الفيلا في حفر الباطن = أكبر مساحة قارية × 5 محاور + ميزتين. المحور 1 — SiO₂ عواصف كل سطح: أكثف عواصف = كل سطح مُغطى. HEPA ← Anti-Static ← غسل. المحور 2 — ΔT 54°م كل مادة: 52°م يمدد ← -2°م ينكمش = Micro-Cracks حول كل نافذة + باب + سيليكون + بلاط. ختم سنوي. المحور 3 — UV قاري: أصفى سماء = واجهات تتقصّف + ألوان تبهت + Sealant يتشقق. UV Film + UV Sealer. المحور 4 — كهرباء ساكنة: 10-15% = SiO₂ يلتصق بكل شيء. Anti-Static شامل. المحور 5 — حشرات Deathstalker: حافة الصحراء = عقارب + أفاعي + Fire Ant + هجرة شتوية -2°م. مكافحة دورية. الميزة 1 — لا عفن!: لا Anti-Fungal. الميزة 2 — لا عث!: لا بخار عث. توفير محورين كاملين عن الشرقية!',
        shortAnswer: 'على عكس [عاملة بممسحة] في بيئة قارية، يعتمد بروتوكولنا في خدمة [تنظيف الفلل] بمدينة [حفر الباطن] على [فريق 5 محاور: HEPA + Anti-Static + ختم ΔT + UV + مكافحة]. ففي ظل [SiO₂ + ΔT 54°م + UV + 10-15% + Deathstalker]، تتفاقم ظاهرة [5 محاور]. لذا؛ يتدخل خبراؤنا عبر [بروتوكول فيلا قاري].',
        heroSubtitle: '5 محاور + ميزتين: SiO₂+ΔT+UV+كهرباء+حشرات — لا عفن/عث',
    },
    pricing: [
        { type: 'فيلا — بروتوكول قاري', unit: 'فيلا', minPrice: 440, maxPrice: 950, time: '5-8 ساعات' },
        { type: 'فيلا + حديقة + واجهات', unit: 'فيلا', minPrice: 630, maxPrice: 1450, time: '7-12 ساعة' },
        { type: 'بعد عاصفة — طوارئ', unit: 'فيلا', minPrice: 530, maxPrice: 1100, time: '6-10 ساعات' },
        { type: 'عقد أسبوعي', unit: 'شهر', minPrice: 560, maxPrice: 1150, time: '4 زيارات' },
    ],
    faq: [
        { question: '5 محاور فقط — أقل من الشرقية (7)?', answer: 'نعم! لا عفن + لا عث = حذف محورين. 5 بدلاً من 7. أبسط + أقل تكلفة. لكن: ΔT 54°م + UV + Deathstalker = تحديات فريدة.' },
        { question: 'فريق — كم شخص؟', answer: 'فيلا صغيرة: 3-4. فيلا كبيرة: 5-6. أقل من الشرقية (5-8). أسرع (لا عفن/عث = وقت أقل).' },
        { question: 'أرخص من الشرقية؟', answer: 'نعم 10-20% — لا Dehumidifier + لا Anti-Fungal + لا بخار عث = توفير 3 أدوات.' },
        { question: 'أسبوعي — ليش؟', answer: 'SiO₂ عواصف 2-4/شهر + كهرباء ساكنة يومي. أسبوعي = يمنع التراكم.' },
        { question: 'حشرات — كل زيارة؟', answer: 'فحص كل زيارة. مكافحة حسب الحاجة. شتاء = هجرة = أهم.' },
    ],
    expertTips: [
        'HEPA + Anti-Static في كل غرفة — 5 محاور × كل زيارة.',
        'ختم ΔT سنوي — 52°م/-2°م = Micro-Cracks تتجدد.',
        'UV Film + UV Sealer — واجهات + حديقة.',
        'فحص حشرات شتاء — -2°م = هجرة Deathstalker.',
        'لا Anti-Fungal ولا بخار عث — توفير 30%!',
    ],
    warnings: [
        'فيلا بدون بروتوكول قاري = 5 محاور تلف × 12 شهر = ترميم.',
        'ΔT 54°م + Micro-Cracks + SiO₂ = يدخل أكثر فأكثر.',
        'Deathstalker في -2°م = يدخل من أي شقة. ختم + مكافحة.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص التنظيف' },
        { entity: AMANA.HAFR.entity, url: AMANA.HAFR.url, role: 'اشتراطات الفلل بحفر الباطن' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALMISNID.name, quote: 'فيلا حفر الباطن: 5 محاور قارية (SiO₂+ΔT+UV+كهرباء+حشرات). لا عفن ولا عث = ميزتين! أبسط من الشرقية لكن: ΔT 54°م + Deathstalker = فريد.', source: 'جغرافيا المناخ — فلل قارية' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [
        { badge: '✔️ تنظيف فلل مرخص', authority: 'منصة بلدي', icon: 'shield-check' },
        { badge: '✔️ بروتوكول قاري 5 محاور', authority: 'معتمد داخلياً', icon: 'badge-check' },
    ],
    equipment: [
        { name: 'HEPA Vacuum', use: 'يحجز SiO₂ — المحور 1' },
        { name: 'Anti-Static', use: 'يُفرّغ شحنة — المحور 4' },
        { name: 'سيليكون ختم ΔT', use: 'Micro-Cracks — المحور 2' },
        { name: 'UV Film + UV Sealer', use: 'واجهات — المحور 3' },
        { name: 'مكافحة حشرات', use: 'Deathstalker — المحور 5' },
    ],
    commonConcerns: [
        { concern: 'لا عفن = سهل.', solution: '5 محاور قارية: ΔT 54°م + Deathstalker + UV + SiO₂ + كهرباء ≠ سهل.' },
        { concern: 'فريق أصغر.', solution: 'أصغر (-2) لكن: مُدرّب على 5 محاور + حشرات. تخصص ≠ عدد.' },
    ],
    consumerEducation: [
        { myth: 'مثل الرياض.', truth: 'ΔT 54°م > 35°م. -2°م. Deathstalker. UV أعلى. عواصف أكثف.' },
        { myth: 'مثل الشرقية.', truth: 'لا عفن + لا عث = ميزتين. لكن: ΔT + UV + Deathstalker = فريد.' },
        { myth: 'شهري.', truth: 'عواصف 2-4/شهر + كهرباء ساكنة. أسبوعي.' },
    ],
    relatedServices: [
        { slug: 'cleaning', context: 'تنظيف — SiO₂', priority: 1 },
        { slug: 'swimming-pool-cleaning', context: 'مسبح — CaCO₃', priority: 2 },
        { slug: 'glass-facades-cleaning', context: 'واجهات — SiO₂+UV', priority: 3 },
        { slug: 'carpet-cleaning', context: 'سجاد — SiO₂', priority: 4 },
        { slug: 'furniture-cleaning', context: 'أثاث — ΔT', priority: 5 },
        { slug: 'pest-control', context: 'حشرات — Deathstalker', priority: 6 },
        { slug: 'termite-control', context: 'نمل أبيض', priority: 7 },
    ],
};
