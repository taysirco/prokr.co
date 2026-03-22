import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../gov-references';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف واجهات زجاجية ببريدة — Nafud SiO₂ خدش+CaCO₃ 600ppm بقع+نخيل — Pure Water! (2026)',
        description: 'تنظيف واجهات زجاجية بريدة. Nafud SiO₂ يخدش! CaCO₃ 600ppm بقع كلس. صمغ نخيل. Pure Water+Microfiber.',
        h1: 'تنظيف واجهات زجاجية ببريدة — Nafud خدش+600ppm!',
        keywords: ['تنظيف واجهات زجاجية بريدة', 'تنظيف واجهات ببريدة', 'شركة تنظيف واجهات بريدة'],
    },
    content: {
        introduction: 'واجهات بريدة = Nafud يخدش وكلس يبقّع! Nafud SiO₂ خدش: رمل النفود الأحمر 10-50 μm ناعم = يتراكم على الزجاج ← لو مُسح مباشرة = خدوش دقيقة تتراكم ← زجاج يفقد شفافيته. Pre-Rinse بضغط إلزامي أولاً ← Microfiber فقط. CaCO₃ 600ppm بقع: أعلى كلس بالمملكة = ماء صنبور يترك بقع بيضاء على الزجاج خلال دقائق. Pure Water (RO+DI) إلزامي في الشطف. صمغ نخيل: 8M نخلة = صمغ+غبار تمور يتراكم على الواجهات ← طبقة لزجة. Chemical Remover. ΔT 45°م: تمدد/انكماش يومي = سيليكون المفاصل يتلف أسرع. فحص مفاصل. 10-20% = لا تكثّف على الزجاج! مقارنة: خميس = عفن+تكثّف. بريدة = خدش+كلس+نخيل = مختلف.',
        shortAnswer: 'على عكس [المسح بماء صنبور وقماش قطن]، يعتمد بروتوكولنا في خدمة [تنظيف الواجهات] بمدينة [بريدة] على [Pre-Rinse+Pure Water+Microfiber+Chemical Remover]. ففي ظل [Nafud خدش+CaCO₃ 600ppm+صمغ نخيل+ΔT 45°م]، تتفاقم ظاهرة [خدش+بقع+لزج+تلف مفاصل]. لذا؛ يتدخل فريقنا عبر [Pre-Rinse ← Chemical ← Pure Water ← Microfiber].',
        heroSubtitle: 'Nafud خدش + CaCO₃ 600ppm بقع + صمغ نخيل — Pure Water!',
    },
    pricing: [
        { type: 'فيلا (واجهة)', unit: 'م²', minPrice: 5, maxPrice: 12, time: '2-4 ساعات' },
        { type: 'تجاري (برج)', unit: 'م²', minPrice: 8, maxPrice: 18, time: 'حسب الارتفاع' },
        { type: '+ إزالة صمغ نخيل', unit: 'إضافي', minPrice: 50, maxPrice: 100, time: '1h' },
        { type: 'شهري (4 زيارات)', unit: 'شهر', minPrice: 300, maxPrice: 620, time: '4 زيارات' },
    ],
    faq: [
        { question: 'ليش واجهات بريدة تُخدش بسهولة؟', answer: 'Nafud SiO₂ 10-50 μm ناعم يعلق ← مسح = خدش. Pre-Rinse أولاً.' },
        { question: 'ليش بقع بيضاء على الواجهات ببريدة؟', answer: 'CaCO₃ 600ppm أعلى كلس. ماء صنبور = بقع دقائق. Pure Water.' },
        { question: 'كم تكلفة تنظيف واجهات ببريدة مقارنة بخميس؟', answer: 'متقاربة. لكن: خميس: Anti-Fungal. بريدة: Pre-Rinse+Chemical نخيل.' },
        { question: 'كيف أزيل صمغ النخيل من الواجهة ببريدة؟', answer: 'Chemical Remover. لا تحك = خدش. كيميائي ← Pure Water ← Microfiber.' },
        { question: 'هل الواجهات تتكثّف ببريدة؟', answer: 'لا! 10-20% = لا تكثّف على الزجاج. ميزة. خميس: تكثّف يومي.' },
    ],
    expertTips: [
        'Pre-Rinse ضغط — Nafud قبل المسح.',
        'Pure Water — CaCO₃ 600ppm بقع.',
        'Microfiber فقط — Nafud يخدش بقطن.',
        'Chemical Remover — صمغ نخيل.',
        'فحص مفاصل — ΔT 45°م.',
    ],
    warnings: [
        'مسح بدون Pre-Rinse = Nafud يخدش زجاج ← شفافية تقل تدريجياً.',
        'ماء صنبور = CaCO₃ 600ppm بقع كلس — Pure Water إلزامي.',
        'صمغ نخيل + حك = خدش زجاج — Chemical فقط.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص شركات التنظيف' },
        { entity: AMANA.QASSIM.entity, url: AMANA.QASSIM.url, role: 'اشتراطات أمانة القصيم' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALMISNID.name, quote: 'واجهات بريدة: Nafud يخدش+600ppm بقع. Pre-Rinse+Pure Water.', source: 'جغرافيا المناخ — واجهات القصيم' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ تنظيف واجهات مرخص', authority: 'بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'Pre-Rinse ضغط', use: 'يُزيل Nafud قبل المسح' },
        { name: 'Pure Water RO+DI', use: 'بدون CaCO₃ 600ppm' },
        { name: 'Chemical Remover', use: 'صمغ نخيل — لا حك' },
    ],
    commonConcerns: [
        { concern: 'ماء عادي يكفي.', solution: '600ppm = بقع فوراً. Pure Water.' },
        { concern: 'مثل الرياض.', solution: 'Nafud أنعم + 600ppm أعلى + نخيل.' },
    ],
    consumerEducation: [
        { myth: 'قطن وماء.', truth: 'Nafud يعلق بالقطن = خدش. Microfiber.' },
        { myth: 'ماء صنبور.', truth: '600ppm = بقع كلس. Pure Water.' },
    ],
    relatedServices: [
        { slug: 'cleaning', context: 'تنظيف', priority: 1 },
        { slug: 'marble-polishing', context: 'رخام', priority: 2 },
        { slug: 'bird-control', context: 'طيور', priority: 3 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 4 },
        { slug: 'roof-insulation', context: 'أسطح', priority: 5 },
        { slug: 'water-leak-detection', context: 'تسرب', priority: 6 },
        { slug: 'pest-control', context: 'حشرات', priority: 7 },
    ],
};
