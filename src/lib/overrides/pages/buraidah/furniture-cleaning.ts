import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف أثاث ببريدة — Nafud يقطع+CaCO₃ 600ppm كلس خشب+نخيل — HEPA+RO! (2026)',
        description: 'تنظيف أثاث بريدة. Nafud SiO₂ يقطع أقمشة! CaCO₃ 600ppm كلس خشب. نخيل غبار. HEPA+RO+Oil Polish.',
        h1: 'تنظيف أثاث ببريدة — Nafud يقطع+أعلى كلس!',
        keywords: ['تنظيف أثاث بريدة', 'تنظيف أثاث ببريدة', 'شركة تنظيف أثاث بريدة'],
    },
    content: {
        introduction: 'أثاث بريدة يواجه Nafud أنعم وكلس أعلى! Nafud SiO₂ يقطع أقمشة: رمل النفود 10-50 μm يتغلغل في تنجيد الأثاث ← يقطع الألياف من الداخل. HEPA Extraction يسحب قبل القطع. CaCO₃ 600ppm كلس خشب: أعلى كلس بالمملكة = لو مُسح الأثاث الخشبي بماء صنبور = بقع كلس بيضاء أسرع وأوضح. RO Rinse+Oil Polish. نخيل 8M غبار: حبوب لقاح+ألياف+غبار تمور يتراكم على الأثاث يومياً. HEPA Pollen. ΔT 45°م: فارق حراري يُجفف الخشب ← تشققات. Oil Polish يحمي. تجفيف: 10-20% = 15-25 دقيقة! لا عفن لا عث. مقارنة: خميس = عفن+عث+4-8h = أغلى 30%. بريدة = Nafud+كلس+نخيل لكن لا عفن = أبسط.',
        shortAnswer: 'على عكس [المسح بماء صنبور بدون HEPA]، يعتمد بروتوكولنا في خدمة [تنظيف الأثاث] بمدينة [بريدة] على [HEPA Extraction+RO+Oil Polish+Pollen Filter]. ففي ظل [Nafud يقطع+CaCO₃ 600ppm+نخيل 8M+ΔT تشقق]، تتفاقم ظاهرة [قطع+كلس+غبار+تشقق]. لذا؛ يتدخل فريقنا عبر [HEPA ← غسل ← RO ← Oil Polish] — لا عفن!',
        heroSubtitle: 'Nafud يقطع + CaCO₃ 600ppm كلس + نخيل — HEPA+RO!',
    },
    pricing: [
        { type: 'غرفة نوم كاملة', unit: 'غرفة', minPrice: 130, maxPrice: 270, time: '2-3h + 20 دقيقة' },
        { type: 'صالة + HEPA عميق', unit: 'صالة', minPrice: 180, maxPrice: 360, time: '3-4h' },
        { type: 'خشب + Oil Polish', unit: 'إضافي', minPrice: 80, maxPrice: 170, time: '1-2h' },
        { type: 'ربع سنوي', unit: 'سنة', minPrice: 420, maxPrice: 850, time: '4 زيارات' },
    ],
    faq: [
        { question: 'ليش أثاث بريدة يتلف أسرع؟', answer: 'Nafud 10-50 μm يقطع ألياف. HEPA Extraction يسحب قبل القطع.' },
        { question: 'ليش بقع بيضاء على خشب الأثاث ببريدة؟', answer: 'CaCO₃ 600ppm أعلى كلس. بقع أسرع وأوضح. RO+Oil Polish.' },
        { question: 'كم تكلفة تنظيف أثاث ببريدة مقارنة بخميس؟', answer: 'أرخص 25-30% — لا Anti-Fungal+Anti-Mite+تجفيف 20 دقيقة.' },
        { question: 'هل الأثاث يتعفّن ببريدة؟', answer: 'لا! 10-20% = لا عفن. تجفيف 15-25 دقيقة.' },
        { question: 'كيف أحمي خشب الأثاث من ΔT ببريدة؟', answer: 'ΔT 45°م يُجفف. Oil Polish كل 3 أشهر. مكيف يحمي.' },
    ],
    expertTips: [
        'HEPA Extraction — Nafud يقطع.',
        'RO Rinse — CaCO₃ 600ppm بقع.',
        'HEPA Pollen — نخيل 8M غبار.',
        'Oil Polish — ΔT تشقق خشب.',
        'لا عفن! — تجفيف 20 دقيقة.',
    ],
    warnings: [
        'Nafud × 6 أشهر = ألياف مقطوعة — تغيير تنجيد.',
        'CaCO₃ 600ppm + ماء صنبور = بقع كلس بيضاء أسرع.',
        'ΔT × سنة بدون Oil Polish = تشققات خشب — 2000+.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص شركات التنظيف' },
        { entity: AMANA.QASSIM.entity, url: AMANA.QASSIM.url, role: 'اشتراطات أمانة القصيم' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALMISNID.name, quote: 'أثاث بريدة: Nafud يقطع+600ppm كلس. HEPA+RO. لا عفن.', source: 'جغرافيا المناخ — أثاث القصيم' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ تنظيف أثاث مرخص', authority: 'بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'HEPA Extraction', use: 'يسحب Nafud — يمنع قطع' },
        { name: 'RO Water', use: 'بدون CaCO₃ 600ppm — بقع' },
        { name: 'Oil Polish', use: 'يحمي خشب ΔT — تشقق' },
    ],
    hiddenObjections: [
        { fear: 'مكنسة تكفي.', solution: 'Nafud 10 μm يمر. HEPA.' },
        { fear: 'مثل خميس.', solution: 'لا عفن+20 دقيقة = أرخص 30%.' },
    ],
    counterNarratives: [
        { myth: 'مسح عادي.', truth: 'Nafud يقطع+600ppm يبقّع. HEPA+RO.' },
        { myth: 'ماء عادي.', truth: '600ppm = أعلى كلس. RO.' },
    ],
    relatedServices: [
        { slug: 'sofa-cleaning', context: 'كنب', priority: 1 },
        { slug: 'carpet-cleaning', context: 'سجاد', priority: 2 },
        { slug: 'cleaning', context: 'تنظيف', priority: 3 },
        { slug: 'marble-polishing', context: 'رخام', priority: 4 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 5 },
        { slug: 'steam-cleaning', context: 'بخار', priority: 6 },
        { slug: 'councils-cleaning', context: 'مجالس', priority: 7 },
    ],
};
