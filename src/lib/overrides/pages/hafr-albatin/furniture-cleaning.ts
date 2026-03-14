import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف أثاث بحفر الباطن — ΔT 54°م PVAc + SiO₂ مفصلات + 10-15% يُشقق + UV (2026)',
        description: 'تنظيف أثاث حفر الباطن. ΔT 54°م PVAc يلين/يجف = تفكك. SiO₂ مفصلات. 10-15% يُشقق جلد+مطاط. UV يتقصّف. لا عفن! Conditioner + Anti-UV.',
        h1: 'تنظيف أثاث بحفر الباطن — حرارة تُفكك وجفاف يُشقق ورمل يخدش',
        keywords: ['تنظيف أثاث حفر الباطن', 'تنظيف عفش حفر الباطن', 'شركة تنظيف أثاث حفر الباطن'],
    },
    content: {
        introduction: 'الأثاث في حفر الباطن يتعرض لتلف قاري 4 محاور. الأولى — ΔT 54°م PVAc: 52°م يلين PVAc (حد أقصى) + -2°م يتصلب = أقصى Thermal Cycling على المفاصل. PVAc في 10-15% = لا يمتص رطوبة (ميزة!) لكن يلين بالحرارة. Conditioner. الثانية — SiO₂ مفصلات: SiO₂ يدخل المفصلة ← يخدش Coating ← في 10-15% لا صدأ NaCl (ميزة!) لكن خدش. الثالثة — 10-15% يُشقق: أجف = جلد يجف ← يتشقق. مطاط الأبواب يجف. Leather Conditioner + Gasket. الرابعة — UV: أثاث قريب من النافذة = UV يبهت الألوان + يتقصّف. UV Film على النوافذ.',
        shortAnswer: 'على عكس [ملمّع سطحي] الذي لا يحمي من ΔT 54°م، يعتمد بروتوكولنا في خدمة [تنظيف الأثاث] بمدينة [حفر الباطن] على [Conditioner + Anti-UV + HEPA + ختم]. ففي ظل [ΔT 54°م + SiO₂ + 10-15% + UV]، تتفاقم ظاهرة [تفكك + خدش + تشقق + تقصّف]. لذا؛ يتدخل خبراؤنا عبر [بروتوكول أثاث قاري].',
        heroSubtitle: 'ΔT 54°م PVAc + SiO₂ خدش + 10-15% تشقق + UV + لا عفن',
    },
    pricing: [
        { type: 'غرفة نوم — قاري', unit: 'غرفة', minPrice: 140, maxPrice: 270, time: '2-3 ساعات' },
        { type: '+ Conditioner + Anti-UV', unit: 'غرفة', minPrice: 180, maxPrice: 350, time: '2-4 ساعات' },
        { type: 'بيت كامل', unit: 'بيت', minPrice: 370, maxPrice: 820, time: '4-7 ساعات' },
        { type: 'نصف سنوي', unit: 'سنة', minPrice: 310, maxPrice: 630, time: '2 زيارات' },
    ],
    faq: [
        { question: 'PVAc — 52°م أسوأ؟', answer: '52°م = حد PVAc الأقصى. يلين ← -2°م = يتصلب. ΔT 54°م = أقصى Cycling. لكن: 10-15% = لا يمتص رطوبة (ميزة!). حرارة فقط.' },
        { question: 'لا صدأ — ميزة؟', answer: 'نعم! لا NaCl = لا صدأ مفصلات. SiO₂ يخدش فقط — بدون تآكل. أبسط حماية.' },
        { question: 'جلد — في 10-15%؟', answer: 'أصعب بيئة للجلد: يجف ← يتشقق. Leather Conditioner كل 3-4 أشهر (أكثر من أي مدينة).' },
        { question: 'UV Film — على النوافذ؟', answer: 'أصفى سماء = UV يدخل كاملاً. أثاث قريب = يبهت + يتقصّف. UV Film 70-80% حجب.' },
        { question: 'نصف سنوي — في ΔT 54°م؟', answer: 'Conditioner: كل 4-6 أشهر. Leather: كل 3-4 أشهر. نصف سنوي = الحد الأدنى.' },
    ],
    expertTips: [
        'Conditioner بعد كل صيف+شتاء — ΔT 54°م = أقصى Cycling.',
        'Leather Conditioner كل 3-4 أشهر — 10-15% = أشد جفاف.',
        'HEPA شفط — SiO₂ قبل المسح.',
        'UV Film نوافذ — يحمي أثاث من UV كامل.',
        'لا Anti-Corrosion — 10-15% = لا صدأ. توفير!',
    ],
    warnings: [
        'ΔT 54°م × PVAc = أقصى Cycling = مفاصل تنفك 1-2 سنة.',
        'جلد + 10-15% = يتشقق 3-6 أشهر بدون Conditioner.',
        'UV + أثاث نافذة = يبهت أسابيع.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص التنظيف' },
        { entity: AMANA.HAFR.entity, url: AMANA.HAFR.url, role: 'اشتراطات النظافة بحفر الباطن' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALMOHAIMED.name, quote: 'أثاث حفر الباطن: ΔT 54°م PVAc أقصى + 10-15% جلد يتشقق + SiO₂ مفصلات. لا صدأ ولا عفن (ميزتين!). Conditioner + Anti-UV.', source: 'نصائح هندسية — أثاث المناخ القاري' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ تنظيف أثاث مرخص', authority: 'منصة بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'Wood Conditioner', use: 'ΔT 54°م — يوازن' },
        { name: 'Leather Conditioner', use: '10-15% — يمنع تشقق' },
        { name: 'UV Film', use: 'نوافذ — يحجب 70-80%' },
        { name: 'HEPA Vacuum', use: 'SiO₂ — يحجز' },
    ],
    hiddenObjections: [
        { fear: 'لا رطوبة = سهل.', solution: 'ΔT 54°م + 10-15% تشقق + UV + SiO₂. 4 تحديات قارية.' },
        { fear: 'ملمّع.', solution: 'لا يحمي من ΔT ولا UV ولا جفاف. سطحي.' },
    ],
    consumerEducation: [
        { myth: 'مثل الرياض.', truth: 'ΔT 54°م > 35°م. UV أعلى. 10-15% < 15%. أقسى.' },
        { myth: 'سنوي.', truth: 'ΔT 54°م + جلد 3-4 أشهر. نصف سنوي.' },
        { myth: 'لا NaCl = سهل.', truth: 'صحيح (ميزة!). لكن: ΔT + UV + جفاف = 3 تحديات بديلة.' },
    ],
    relatedServices: [
        { slug: 'furniture-moving', context: 'نقل — حماية', priority: 1 },
        { slug: 'furniture-storage', context: 'تخزين — ΔT', priority: 2 },
        { slug: 'sofa-cleaning', context: 'كنب — جلد', priority: 3 },
        { slug: 'cleaning', context: 'تنظيف — SiO₂', priority: 4 },
        { slug: 'carpet-cleaning', context: 'سجاد', priority: 5 },
        { slug: 'pest-control', context: 'حشرات', priority: 6 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف — ΔT', priority: 7 },
    ],
};
