import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف كنب بعنيزة — Nafud SiO₂ ألياف+CaCO₃ تصلب+ΔT تشقق خشب+لقاح — HEPA+Citric+ترطيب! (2026)',
        description: 'تنظيف كنب عنيزة. Nafud SiO₂ ألياف! CaCO₃ تصلب أقمشة. ΔT 48°م تشقق خشب. لقاح. HEPA+Citric+ترطيب خشب.',
        h1: 'تنظيف كنب بعنيزة — Nafud+كلس+تشقق!',
        keywords: ['تنظيف كنب بعنيزة', 'غسيل كنب عنيزة', 'شركة تنظيف كنب بعنيزة'],
    },
    content: {
        introduction: 'كنب عنيزة = Nafud يقصّ+كلس يصلّب+خشب يتشقق! Nafud SiO₂ 7 Mohs: رمل يتغلغل بأقمشة الكنب ← يقصّ ألياف بالجلوس! HEPA شفط أولاً. CaCO₃ 550ppm: ماء الغسيل يصلّب أقمشة ← كنب خشن! Citric+RO. ΔT تشقق خشب: جفاف 10-20%+48°م = إطار خشب الكنب يتشقق ← مفاصل تضعف! عكس الباحة (PVAc ينتفخ). ترطيب Oil Treatment. لقاح: مارس-مايو = حبوب لقاح تدخل بين الحشو. بخار 130°م. يجف فوراً: 15 دقيقة! ميزة. لكن: جفاف مستمر = خشب يتشقق. مقارنة: الباحة = PVAc Swelling (عكس!). عنيزة = ΔT Cracking = معكوس تماماً.',
        shortAnswer: 'على عكس [الفرك+ماء صنبور]، يعتمد بروتوكولنا في خدمة [تنظيف الكنب] بمدينة [عنيزة] على [HEPA ← Citric+RO ← Oil Treatment ← بخار]. ففي ظل [Nafud SiO₂+CaCO₃+ΔT تشقق+لقاح]، تتفاقم ظاهرة [قصّ+تصلب+تشقق+التصاق]. لذا؛ يتدخل فريقنا عبر [HEPA ← Citric ← Oil ← بخار] — يجف فوراً!',
        heroSubtitle: 'Nafud ألياف + CaCO₃ تصلب + ΔT تشقق خشب — يجف 15 دقيقة!',
    },
    pricing: [
        { type: 'كنبة 3 مقاعد', unit: 'قطعة', minPrice: 60, maxPrice: 120, time: '30 دقيقة' },
        { type: 'كنبة L-Shape', unit: 'قطعة', minPrice: 100, maxPrice: 200, time: '1h' },
        { type: '+ Oil Treatment خشب', unit: 'خدمة', minPrice: 50, maxPrice: 100, time: '+ 30 دقيقة' },
        { type: 'ربع سنوي', unit: 'سنة', minPrice: 200, maxPrice: 400, time: '4 تنظيف' },
    ],
    faq: [
        { question: 'ليش كنب عنيزة يتشقق؟', answer: '10-20%+48°م = جفاف. خشب إطار يتشقق. Oil Treatment.' },
        { question: 'ليش الباحة ينتفخ وعنيزة يتشقق؟', answer: 'الباحة: 60-85% PVAc Swelling. عنيزة: 10-20% ΔT Cracking. عكس!' },
        { question: 'ليش أقمشة الكنب تصير خشنة بعنيزة؟', answer: 'CaCO₃ 550ppm ماء عسر. Citric+RO Water.' },
        { question: 'كم تجفيف كنب بعنيزة مقابل الباحة؟', answer: '15 دقيقة! الباحة: 6-10h. عنيزة الأسرع.' },
        { question: 'ما لقاح بالكنب بعنيزة؟', answer: 'مارس-مايو لقاح نخيل بالحشو. بخار 130°م.' },
    ],
    expertTips: [
        'HEPA أولاً — Nafud ألياف.',
        'Citric+RO — CaCO₃ تصلب.',
        'Oil Treatment — ΔT تشقق خشب.',
        'بخار — لقاح حشو.',
        'يجف 15 دقيقة — لا تأخير.',
    ],
    warnings: [
        'Nafud + جلوس × 6 أشهر = ألياف مقطوعة — HEPA شهري.',
        'ماء صنبور + أقمشة = تصلب — Citric+RO.',
        '10-20% × سنة = خشب يتشقق — Oil Treatment.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص شركات التنظيف' },
        { entity: AMANA.QASSIM.entity, url: AMANA.QASSIM.url, role: 'اشتراطات أمانة القصيم' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALMISNID.name, quote: 'كنب عنيزة: ΔT تشقق عكس الباحة PVAc. HEPA+Oil.', source: 'جغرافيا المناخ — كنب القصيم' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ تنظيف كنب مرخص', authority: 'بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'HEPA شفط', use: 'Nafud SiO₂ — ألياف' },
        { name: 'Citric + RO', use: 'CaCO₃ — لا تصلب' },
        { name: 'Oil Treatment', use: 'ΔT — خشب تشقق' },
    ],
    commonConcerns: [
        { concern: 'منظف عادي.', solution: 'Nafud+كلس+ΔT = 3 ركائز.' },
        { concern: 'مثل الباحة.', solution: 'Cracking vs Swelling. عكس!' },
    ],
    consumerEducation: [
        { myth: 'تجفيف مشكلة.', truth: '15 دقيقة! 10-20%.' },
        { myth: 'خشب يستمر.', truth: 'ΔT = Oil Treatment.' },
    ],
    relatedServices: [
        { slug: 'carpet-cleaning', context: 'سجاد', priority: 1 },
        { slug: 'cleaning', context: 'تنظيف', priority: 2 },
        { slug: 'steam-cleaning', context: 'بخار', priority: 3 },
        { slug: 'councils-cleaning', context: 'مجالس', priority: 4 },
        { slug: 'furniture-cleaning', context: 'أثاث', priority: 5 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 6 },
        { slug: 'pest-control', context: 'حشرات', priority: 7 },
    ],
};
