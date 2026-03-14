import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف مسابح ببريدة — CaCO₃ 600ppm Scale+Nafud SiO₂ عكر+ΔT — Descaler+فلتر! (2026)',
        description: 'تنظيف مسابح بريدة. CaCO₃ 600ppm Scale+عكر كلسي! Nafud SiO₂ عكر. ΔT 45°م. Descaler+فلتر+RO.',
        h1: 'تنظيف مسابح ببريدة — أعلى كلس+Nafud عكر!',
        keywords: ['تنظيف مسابح بريدة', 'تنظيف مسبح ببريدة', 'شركة تنظيف مسابح بريدة'],
    },
    content: {
        introduction: 'مسبح بريدة = كلس+رمل ناعم في الماء! CaCO₃ 600ppm Scale: أعلى كلس بالمملكة = Scale أسرع على البلاط والأنابيب. عكر كلسي يجعل الماء أبيض. Acid Wash + Descaler أسبوعي. Nafud SiO₂ عكر: رمل النفود الناعم يدخل المسبح ← عكر أحمر دقيق لا يترسب بسهولة. فلتر Sand Filter لا يكفي — يحتاج DE Filter. ΔT 45°م: صيف 48°م = مياه المسبح 35-40°م! كلور يتبخر أسرع. جرعة مضاعفة. 10-20% = لا تكثّف! لا طحالب شتاءً. مقارنة: خميس = عفن+طحالب+رطوبة. بريدة = كلس+Nafud لكن لا طحالب شتاءً = أبسط.',
        shortAnswer: 'على عكس [التنظيف بدون Descaler+DE Filter]، يعتمد بروتوكولنا في خدمة [تنظيف المسابح] بمدينة [بريدة] على [Descaler+Acid Wash+DE Filter+كلور مضاعف]. ففي ظل [CaCO₃ 600ppm Scale+Nafud عكر+ΔT تبخّر كلور+لا طحالب]، تتفاقم ظاهرة [Scale+عكر+تبخّر]. لذا؛ يتدخل فنيونا عبر [Descaler ← Acid ← DE ← كلور].',
        heroSubtitle: 'CaCO₃ 600ppm Scale + Nafud عكر + ΔT تبخّر — Descaler+DE!',
    },
    pricing: [
        { type: 'تنظيف مسبح صغير', unit: 'مسبح', minPrice: 200, maxPrice: 420, time: '2-4h' },
        { type: 'تنظيف + Acid Wash', unit: 'مسبح', minPrice: 350, maxPrice: 720, time: '4-6h' },
        { type: 'صيانة شهرية', unit: 'شهر', minPrice: 250, maxPrice: 520, time: '4 زيارات' },
        { type: 'عقد سنوي', unit: 'سنة', minPrice: 2000, maxPrice: 4200, time: '48 زيارة' },
    ],
    faq: [
        { question: 'ليش مسبح بريدة يتكلّس أسرع؟', answer: 'CaCO₃ 600ppm أعلى بالمملكة. Scale 2× أسرع. Descaler أسبوعي.' },
        { question: 'ليش الماء عكر أحمر ببريدة؟', answer: 'Nafud SiO₂ 10-50 μm ناعم لا يترسب. DE Filter يوقف. Sand لا يكفي.' },
        { question: 'كم تكلفة تنظيف مسبح ببريدة مقارنة بخميس؟', answer: 'متقاربة. لكن: لا طحالب شتاءً = اسبوعي أقل شتاءً.' },
        { question: 'ليش كلور يتبخر أسرع ببريدة؟', answer: 'ΔT 48°م = ماء 35-40°م. كلور يتبخر. جرعة مضاعفة+مساءً.' },
        { question: 'هل المسبح يتعفّن ببريدة؟', answer: 'لا! 10-20% = لا طحالب شتاءً. خميس: طحالب+عفن.' },
    ],
    expertTips: [
        'Descaler أسبوعي — 600ppm Scale.',
        'DE Filter — Nafud ناعم يمر Sand.',
        'كلور مساءً — ΔT يبخّر.',
        'Acid Wash ربع سنوي — Scale.',
        'لا طحالب شتاءً — ميزة.',
    ],
    warnings: [
        'CaCO₃ 600ppm × شهر = Scale صلب على البلاط — Acid Wash 1000+.',
        'Nafud + Sand Filter فقط = ماء عكر دائم — DE Filter إلزامي.',
        'ΔT × كلور صباحي = يتبخّر 50% — مساءً فقط.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص صيانة المسابح' },
        { ...GOV.MAEE, role: 'ترشيد المياه' },
        { entity: AMANA.QASSIM.entity, url: AMANA.QASSIM.url, role: 'اشتراطات أمانة القصيم' },
    ],
    expertReviewer: EXPERTS.ALMOHAIMED,
    expertCitations: [
        { expert: EXPERTS.ALMOHAIMED.name, quote: 'مسبح بريدة: 600ppm Scale+Nafud عكر. Descaler+DE Filter. لا طحالب.', source: 'نصائح هندسية — مسابح القصيم' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ صيانة مسابح مرخصة', authority: 'بلدي + مائي', icon: 'shield-check' }],
    equipment: [
        { name: 'DE Filter', use: 'Nafud 10-50 μm — يوقف عكر' },
        { name: 'Descaler مسابح', use: 'CaCO₃ 600ppm — أسبوعي' },
        { name: 'Acid Wash', use: 'Scale صلب — ربع سنوي' },
    ],
    commonConcerns: [
        { concern: 'Sand Filter يكفي.', solution: 'Nafud 10 μm يمر. DE.' },
        { concern: 'مثل الرياض.', solution: '600ppm > 300. Nafud فريد.' },
    ],
    consumerEducation: [
        { myth: 'Descaler شهري.', truth: '600ppm = أسبوعي. أسرع Scale.' },
        { myth: 'كلور عادي.', truth: 'ΔT = مضاعف+مساءً.' },
    ],
    relatedServices: [
        { slug: 'tanks-cleaning', context: 'خزانات', priority: 1 },
        { slug: 'water-leak-detection', context: 'تسرب', priority: 2 },
        { slug: 'cleaning', context: 'تنظيف', priority: 3 },
        { slug: 'pest-control', context: 'حشرات', priority: 4 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 5 },
        { slug: 'marble-polishing', context: 'رخام', priority: 6 },
        { slug: 'water-insulation', context: 'مائي', priority: 7 },
    ],
};
