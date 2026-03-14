import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف واجهات زجاجية بحفر الباطن — SiO₂ عواصف 7>5.5 Mohs + ΔT 54°م Sealant + UV قاري (2026)',
        description: 'تنظيف واجهات حفر الباطن. SiO₂ عواصف يخدش 7>5.5. ΔT 54°م Sealant يتشقق. UV تقصّف. 10-15% لا Biofilm (ميزة!). Squeegee + Sealant + UV Film.',
        h1: 'تنظيف واجهات زجاجية بحفر الباطن — عواصف تخدش وحرارة تُشقق وUV يُتلف',
        keywords: ['تنظيف واجهات زجاجية حفر الباطن', 'تنظيف واجهات حفر الباطن', 'شركة تنظيف واجهات حفر الباطن'],
    },
    content: {
        introduction: 'واجهات حفر الباطن الزجاجية تواجه 3 تحديات + ميزة. الأولى — SiO₂ عواصف 7>5.5: SiO₂ = 7 Mohs يخدش زجاج = 5.5 Mohs. عاصفة واحدة = SiO₂ يترسب. مسح = خدش. Squeegee مطاطي only. أكثف من أي مدينة. الثانية — ΔT 54°م Sealant: 52°م يمدد ← -2°م ينكمش = Sealant يتشقق. أقصى Cycling. Flexible Sealant. الثالثة — UV قاري: أصفى سماء = UV يُعجّل تقصّف Sealant + بهتان طبقات. UV Film. الميزة — لا Biofilm!: 10-15% = لا Biofilm. لا Anti-Biofilm. توفير! لا طحالب. لا غشاء. أنظف واجهات في المملكة بيئياً.',
        shortAnswer: 'على عكس [قماش + ماء] الذي يخدش بـ SiO₂ 7 Mohs، يعتمد بروتوكولنا في خدمة [تنظيف الواجهات] بمدينة [حفر الباطن] على [Squeegee + Flexible Sealant + UV Film]. ففي ظل [SiO₂ + ΔT 54°م + UV]، تتفاقم ظاهرة [خدش + تشقق + تقصّف]. لذا؛ يتدخل خبراؤنا عبر [بروتوكول واجهات قاري].',
        heroSubtitle: 'SiO₂ 7>5.5 خدش + ΔT 54°م Sealant + UV قاري + لا Biofilm',
    },
    pricing: [
        { type: 'واجهة صغيرة (50 م²)', unit: 'خدمة', minPrice: 190, maxPrice: 370, time: '2-3 ساعات' },
        { type: 'واجهة كبيرة (100+ م²)', unit: 'خدمة', minPrice: 370, maxPrice: 830, time: '4-8 ساعات' },
        { type: 'بعد عاصفة — طوارئ', unit: 'خدمة', minPrice: 250, maxPrice: 530, time: '3-5 ساعات' },
        { type: 'ربع سنوي', unit: 'سنة', minPrice: 560, maxPrice: 1200, time: '4 زيارات' },
    ],
    faq: [
        { question: 'SiO₂ 7 Mohs — أكثف هنا؟', answer: 'أكثف عواصف = أكثف SiO₂ = أكثف خدش. حفر الباطن = أعلى كثافة SiO₂ في المملكة. Squeegee only.' },
        { question: 'لا Biofilm — ميزة كبيرة؟', answer: 'كبيرة! لا Anti-Biofilm = توفير. لا طحالب = أنظف. مقابل الشرقية: Biofilm كل 2-6 أسابيع.' },
        { question: 'ΔT Sealant — أسوأ؟', answer: 'أسوأ في المملكة: ΔT 54°م = أقصى Cycling. Sealant عادي يفشل 1-2 سنة (بدلاً من 5). Flexible only.' },
        { question: 'UV — على Sealant؟', answer: 'UV + ΔT = مُركّب. يُسرّع تشقق 2×. UV Film + Flexible Sealant = حل مزدوج.' },
        { question: 'صباحي أفضل؟', answer: 'أفضل — أقل UV + أقل حرارة = Sealant مرن + أقل تبخر.' },
    ],
    expertTips: [
        'Squeegee مطاطي فقط — SiO₂ 7 Mohs أكثف = خدش أعمق.',
        'Flexible Sealant — ΔT 54°م = أقصى. عادي = يفشل.',
        'UV Film — يحمي Sealant + زجاج من UV قاري.',
        'لا Anti-Biofilm — 10-15% = توفير!',
        'بعد عاصفة = فوري — SiO₂ + حرارة = يتصلب.',
    ],
    warnings: [
        'SiO₂ أكثف + قماش = خدوش في الزجاج أول تنظيف. Squeegee.',
        'ΔT 54°م + Sealant عادي = تشقق 1-2 سنة = ماء بين طبقات.',
        'UV + حرارة 52°م + SiO₂ = مُركّب ثلاثي على Sealant.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص شركات الواجهات' },
        { entity: AMANA.HAFR.entity, url: AMANA.HAFR.url, role: 'اشتراطات المباني بحفر الباطن' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALMOHAIMED.name, quote: 'واجهات حفر الباطن: SiO₂ أكثف + ΔT 54°م أقصى + UV أعلى. لا Biofilm (ميزة!). Squeegee + Flexible + UV Film.', source: 'نصائح هندسية — واجهات قارية' },
    ],
    saudiRegulations: [REGULATIONS.SBC_601],
    verificationBadges: [{ badge: '✔️ واجهات مرخصة', authority: 'منصة بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'Squeegee مطاطي', use: 'SiO₂ 7 Mohs — بلا خدش' },
        { name: 'Flexible Sealant', use: 'ΔT 54°م — يتحمل Cycling' },
        { name: 'UV Film', use: 'UV قاري — يحمي Sealant + زجاج' },
    ],
    hiddenObjections: [
        { fear: 'لا Biofilm = سهل.', solution: 'SiO₂ أكثف + ΔT أقصى + UV أعلى. 3 تحديات ≠ سهل.' },
        { fear: 'ماء وقماش.', solution: 'قماش + SiO₂ أكثف = خدش أعمق.' },
    ],
    consumerEducation: [
        { myth: 'مثل الرياض.', truth: 'ΔT 54°م > 35°م. SiO₂ أكثف. UV أعلى.' },
        { myth: 'سنوي.', truth: 'SiO₂ عواصف 2-4/شهر. ربع سنوي.' },
        { myth: 'Sealant عادي.', truth: 'ΔT 54°م = يفشل 1-2 سنة. Flexible.' },
    ],
    relatedServices: [
        { slug: 'cleaning', context: 'تنظيف — SiO₂', priority: 1 },
        { slug: 'marble-polishing', context: 'رخام — SiO₂', priority: 2 },
        { slug: 'office-cleaning', context: 'مكاتب — واجهات', priority: 3 },
        { slug: 'villas-cleaning', context: 'فلل — واجهات', priority: 4 },
        { slug: 'auto-cleaning', context: 'سيارات — SiO₂', priority: 5 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف — ΔT', priority: 6 },
        { slug: 'thermal-insulation', context: 'عزل حراري — ΔT', priority: 7 },
    ],
};
