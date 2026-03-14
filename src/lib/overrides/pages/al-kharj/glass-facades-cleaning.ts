import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف واجهات زجاجية بالخرج — SiO₂ خدش+CaCO₃ بقع+NH₃ فضلات طيور — RO! (2026)',
        description: 'تنظيف واجهات الخرج. SiO₂ يخدش الزجاج! CaCO₃ 450ppm بقع بيضاء. NH₃ فضلات حمام مزارع. Pre-Rinse+RO+Microfiber.',
        h1: 'تنظيف واجهات زجاجية بالخرج — SiO₂ خدش — RO!',
        keywords: ['تنظيف واجهات الخرج', 'تنظيف واجهات زجاجية بالخرج', 'شركة تنظيف واجهات الخرج'],
    },
    content: {
        introduction: 'واجهات الخرج تواجه تحديات صحراوية-زراعية! SiO₂ خدش الزجاج: رمل صحراوي يتراكم على الواجهة ← لو مُسح بدون شطف أولي = خدوش تراكمية. Pre-Rinse بضغط أولاً ثم Microfiber. CaCO₃ 450ppm بقع: لو غُسلت بماء صنبور = بقع كلس بيضاء تتراكم على الزجاج. RO Rinse إلزامي = لا بقع. NH₃ فضلات حمام مزارع: الخرج = حمام مزارع 3-5× = فضلات على الواجهة أكثر. حمض يوريك pH 3-4 يآكل الطلاء. تنظيف دوري. ΔT 48°م: فارق حراري يُتعب Sealant بين الزجاج والإطار. فحص سنوي. 15-25% = تجفيف فوري! لا بقع ماء! مقارنة: خميس = طحالب+عفن+ضباب. الخرج = SiO₂+CaCO₃+حمام = مختلف.',
        shortAnswer: 'على عكس [المسح بماء صنبور الذي يترك بقع ويخدش]، يعتمد بروتوكولنا في خدمة [تنظيف الواجهات] بمدينة [الخرج] على [Pre-Rinse+RO+Microfiber+Descaler]. ففي ظل [SiO₂ خدش+CaCO₃ بقع+NH₃ فضلات+ΔT Sealant]، تتفاقم ظاهرة [خدش+بقع+تآكل]. لذا؛ يتدخل فريقنا عبر [شطف ← غسل ← RO ← فحص Sealant].',
        heroSubtitle: 'SiO₂ خدش + CaCO₃ بقع + فضلات حمام — Pre-Rinse+RO!',
    },
    pricing: [
        { type: 'واجهة صغيرة (< 50 م²)', unit: 'واجهة', minPrice: 150, maxPrice: 300, time: '2-3 ساعات' },
        { type: 'واجهة كبيرة (50+ م²)', unit: 'واجهة', minPrice: 300, maxPrice: 600, time: '4-6 ساعات' },
        { type: '+ إزالة فضلات حمام', unit: 'إضافي', minPrice: 80, maxPrice: 170, time: '1-2 ساعة' },
        { type: 'ربع سنوي (4 زيارات)', unit: 'سنة', minPrice: 450, maxPrice: 900, time: '4 زيارات' },
    ],
    faq: [
        { question: 'كيف أمنع خدش الواجهة بالخرج؟', answer: 'Pre-Rinse بضغط ← يُزيل SiO₂ أولاً ← ثم Microfiber. بدون شطف = خدوش.' },
        { question: 'ليش بقع بيضاء على الزجاج بعد الغسل بالخرج؟', answer: 'CaCO₃ 450ppm في ماء الصنبور. RO Rinse = لا بقع = شفاف.' },
        { question: 'كم تكلفة تنظيف واجهة بالخرج مقارنة بخميس؟', answer: 'متقاربة — لكن خميس: طحالب+Algicide. الخرج: SiO₂+RO = مختلف.' },
        { question: 'هل فضلات الحمام تآكل الواجهة بالخرج؟', answer: 'حمض يوريك pH 3-4 يآكل طلاء الإطار. تنظيف فوري خلال 48h. حمام 3-5×.' },
        { question: 'هل ΔT يأثر على الواجهة بالخرج؟', answer: 'Sealant يتمدد وينكمش ΔT 48°م = يتلف. فحص سنوي + تجديد.' },
    ],
    expertTips: [
        'Pre-Rinse أولاً — SiO₂ يخدش.',
        'RO Rinse — CaCO₃ بقع بيضاء.',
        'Microfiber — لا قطن.',
        'تنظيف فضلات 48h — حمض يآكل.',
        'فحص Sealant سنوي — ΔT 48°م.',
    ],
    warnings: [
        'مسح بدون Pre-Rinse = SiO₂ يخدش الزجاج — خدوش تراكمية دائمة.',
        'ماء صنبور بدون RO = CaCO₃ بقع بيضاء — مع الوقت لا تُزال.',
        'فضلات حمام > 48h + 15-25% = تجف = كشط = خدش إضافي.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص شركات التنظيف' },
        { entity: AMANA.RIYADH.entity, url: AMANA.RIYADH.url, role: 'اشتراطات أمانة الرياض' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALMISNID.name, quote: 'واجهات الخرج: SiO₂ يخدش+CaCO₃ بقع. Pre-Rinse+RO. حمام مزارع: فوري.', source: 'نصائح هندسية — واجهات صحراوية' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ تنظيف واجهات مرخص', authority: 'بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'Pre-Rinse ضغط', use: 'يُزيل SiO₂ قبل المسح — يمنع خدش' },
        { name: 'RO Water', use: 'شطف بدون CaCO₃ — لا بقع' },
        { name: 'Microfiber', use: 'لا خدش SiO₂ — لا قطن' },
    ],
    commonConcerns: [
        { concern: 'ماء صنبور يكفي.', solution: 'CaCO₃ 450ppm = بقع. RO.' },
        { concern: 'مثل الرياض.', solution: 'CaCO₃ أعلى + حمام مزارع 3-5×.' },
    ],
    consumerEducation: [
        { myth: 'أي مسح يكفي.', truth: 'SiO₂ بدون Pre-Rinse = خدش. RO = لا بقع.' },
        { myth: 'فضلات حمام عادية.', truth: 'pH 3-4 يآكل. حمام مزارع 3-5×.' },
    ],
    relatedServices: [
        { slug: 'cleaning', context: 'تنظيف', priority: 1 },
        { slug: 'marble-polishing', context: 'رخام', priority: 2 },
        { slug: 'bird-control', context: 'طيور — فضلات', priority: 3 },
        { slug: 'villas-cleaning', context: 'فلل', priority: 4 },
        { slug: 'office-cleaning', context: 'مكاتب', priority: 5 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 6 },
        { slug: 'roof-insulation', context: 'أسطح', priority: 7 },
    ],
};
