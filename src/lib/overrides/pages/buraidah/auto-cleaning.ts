import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف سيارات ببريدة — Nafud SiO₂ خدش+CaCO₃ 600ppm بقع+نخيل لزج — Pre-Rinse! (2026)',
        description: 'تنظيف سيارات بريدة. Nafud SiO₂ يخدش! CaCO₃ 600ppm بقع كلس. صمغ نخيل لزج. Pre-Rinse+RO+Clay Bar.',
        h1: 'تنظيف سيارات ببريدة — Nafud خدش+كلس+نخيل!',
        keywords: ['تنظيف سيارات بريدة', 'غسيل سيارات ببريدة', 'شركة تنظيف سيارات بريدة'],
    },
    content: {
        introduction: 'سيارة بريدة = 3 تحديات فريدة! Nafud SiO₂ خدش: رمل النفود الأحمر ناعم 10-50 μm = أخطر من الرمل الخشن لأنه يعلق في القماش ← لو مُسح مباشرة = خدوش دوائرية (Swirl Marks). Pre-Rinse بضغط إلزامي أولاً. CaCO₃ 600ppm بقع: أعلى كلس بالمملكة = لو غُسلت بماء صنبور = بقع كلس بيضاء خلال 10 دقائق! RO في الشطف النهائي إلزامي. صمغ نخيل: 8M نخلة = عسل تمور+صمغ نخيل يقع على السيارة = لزج جداً. Clay Bar أو Tar Remover. ΔT 45°م: صيف 48°م = Clear Coat يتلف أسرع. طلاء Ceramic Coating يحمي. 10-20% = تجفيف فوري! مقارنة: الخرج: NH₃. خميس: ضباب+طحالب. بريدة: Nafud+كلس+نخيل = فريد.',
        shortAnswer: 'على عكس [الغسل بماء صنبور بدون Pre-Rinse]، يعتمد بروتوكولنا في خدمة [تنظيف السيارات] بمدينة [بريدة] على [Pre-Rinse+RO+Clay Bar+Ceramic]. ففي ظل [Nafud SiO₂ خدش+CaCO₃ 600ppm+صمغ نخيل+ΔT 45°م]، تتفاقم ظاهرة [Swirl Marks+بقع+لزج+تلف Clear]. لذا؛ يتدخل فريقنا عبر [Pre-Rinse ← غسل ← Clay ← RO ← Ceramic].',
        heroSubtitle: 'Nafud خدش + CaCO₃ 600ppm بقع + صمغ نخيل — Pre-Rinse+RO!',
    },
    pricing: [
        { type: 'غسل عادي + RO', unit: 'سيارة', minPrice: 40, maxPrice: 80, time: '30-45 دقيقة' },
        { type: 'غسل + Clay Bar نخيل', unit: 'سيارة', minPrice: 70, maxPrice: 140, time: '1-1.5 ساعة' },
        { type: 'تلميع + Ceramic', unit: 'سيارة', minPrice: 200, maxPrice: 420, time: '3-5 ساعات' },
        { type: 'أسبوعي (4/شهر)', unit: 'شهر', minPrice: 120, maxPrice: 250, time: '4 غسلات' },
    ],
    faq: [
        { question: 'ليش خدوش دوائرية على سيارتي ببريدة؟', answer: 'Nafud SiO₂ 10-50 μm ناعم يعلق في القماش ← مسح = Swirl Marks. Pre-Rinse أولاً.' },
        { question: 'ليش بقع بيضاء بعد الغسل ببريدة؟', answer: 'CaCO₃ 600ppm أعلى بالمملكة. RO في الشطف = لا بقع. ماء صنبور = بقع 10 دقائق.' },
        { question: 'كيف أزيل صمغ النخيل من السيارة ببريدة؟', answer: 'Clay Bar أو Tar Remover. لا تحك = خدش. حل كيميائي ← Clay ← RO.' },
        { question: 'كم تكلفة غسيل سيارة ببريدة مقارنة بالرياض؟', answer: 'أغلى 15-20% — RO+Clay Bar. لكن: بدونهما = خدوش+بقع دائمة.' },
        { question: 'هل Ceramic Coating ضروري ببريدة؟', answer: 'ΔT+Nafud+صمغ = Clear Coat يتلف أسرع. Ceramic يحمي 2-5 سنوات.' },
    ],
    expertTips: [
        'Pre-Rinse ضغط — Nafud قبل المسح.',
        'RO Rinse — CaCO₃ 600ppm بقع.',
        'Clay Bar — صمغ نخيل لزج.',
        'Ceramic Coating — حماية ΔT+SiO₂.',
        'لا قطن أبداً — Nafud يعلق = خدش.',
    ],
    warnings: [
        'مسح بدون Pre-Rinse = Nafud يخدش ← Swirl Marks دائمة.',
        'ماء صنبور = CaCO₃ 600ppm بقع خلال 10 دقائق — RO إلزامي.',
        'صمغ نخيل + حك = خدش Clear Coat — Clay Bar كيميائي فقط.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص غسيل السيارات' },
        { entity: AMANA.QASSIM.entity, url: AMANA.QASSIM.url, role: 'اشتراطات أمانة القصيم' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALMISNID.name, quote: 'سيارات بريدة: Nafud ناعم يخدش. 600ppm أعلى كلس. Pre-Rinse+RO.', source: 'جغرافيا المناخ — القصيم' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ غسيل مرخص', authority: 'بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'Pre-Rinse ضغط عالي', use: 'يُزيل Nafud SiO₂ قبل المسح' },
        { name: 'RO Water', use: 'شطف بدون CaCO₃ 600ppm' },
        { name: 'Clay Bar', use: 'صمغ نخيل — كيميائي لا حك' },
    ],
    hiddenObjections: [
        { fear: 'غسل عادي يكفي.', solution: 'Nafud+600ppm+نخيل = خدش+بقع+لزج.' },
        { fear: 'مثل الرياض.', solution: '600ppm مقابل 300. Nafud أنعم. نخيل 8M.' },
    ],
    consumerEducation: [
        { myth: 'أي غسل.', truth: 'Pre-Rinse+RO+Clay Bar = 3 خطوات إلزامية.' },
        { myth: 'ماء عادي.', truth: '600ppm = بقع 10 دقائق. RO.' },
    ],
    relatedServices: [
        { slug: 'cleaning', context: 'تنظيف', priority: 1 },
        { slug: 'dabab', context: 'دباب', priority: 2 },
        { slug: 'dyna', context: 'دينا', priority: 3 },
        { slug: 'furniture-moving', context: 'نقل عفش', priority: 4 },
        { slug: 'pest-control', context: 'حشرات', priority: 5 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 6 },
        { slug: 'glass-facades-cleaning', context: 'واجهات', priority: 7 },
    ],
};
