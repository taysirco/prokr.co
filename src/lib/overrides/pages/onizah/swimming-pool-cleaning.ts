import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../gov-references';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف مسابح بعنيزة — CaCO₃ Scale+48°م طحالب+Nafud فلتر — Descaler+Algaecide! (2026)',
        description: 'تنظيف مسابح عنيزة. CaCO₃ Scale! 48°م طحالب. Nafud سد فلتر. Descaler+Algaecide+كلور يومي.',
        h1: 'تنظيف مسابح بعنيزة — Scale+طحالب+Nafud!',
        keywords: ['تنظيف مسابح بعنيزة', 'تنظيف مسبح عنيزة', 'شركة تنظيف مسابح بعنيزة'],
    },
    content: {
        introduction: 'مسبح عنيزة = CaCO₃ Scale يسد+48°م طحالب! CaCO₃ Scale 550ppm: ماء عسر يترسب كلس على جدران المسبح+أنابيب+مضخة ← يسد! Descaler ربع سنوي. 48°م طحالب: حرارة = كلور يتبخر 40% أسرع. Algaecide أسبوعي. Nafud SiO₂: رمل يسقط بالمسبح ← يسد الفلتر. Heavy-Duty Filter. سكر تمور: أغسطس-أكتوبر = طحالب تتغذى! مقارنة: الباحة = مطر+Biofilm ≠ Scale+طحالب.',
        shortAnswer: 'على عكس [الصيانة العادية]، يعتمد بروتوكولنا في خدمة [تنظيف المسابح] بمدينة [عنيزة] على [Descaler+Algaecide+Heavy-Duty+كلور يومي]. ففي ظل [CaCO₃+48°م+Nafud+تمور]، تتفاقم ظاهرة [ترسب+تكاثر+انسداد]. لذا؛ يتدخل فنيونا عبر [Descaler ← Algaecide ← فلتر ← كلور].',
        heroSubtitle: 'CaCO₃ Scale + 48°م طحالب + Nafud — Descaler+Algaecide!',
    },
    pricing: [
        { type: 'تنظيف + Descaler', unit: 'مسبح', minPrice: 200, maxPrice: 420, time: '2-4h' },
        { type: 'Algaecide أسبوعي', unit: 'شهر', minPrice: 150, maxPrice: 310, time: '4 زيارة' },
        { type: 'ربع سنوي', unit: 'سنة', minPrice: 600, maxPrice: 1200, time: '4 Descaler' },
        { type: 'عقد سنوي', unit: 'سنة', minPrice: 3000, maxPrice: 6000, time: '52+ زيارة' },
    ],
    faq: [
        { question: 'ليش Scale بمسبح عنيزة؟', answer: 'CaCO₃ 550ppm = كلس. Descaler ربع سنوي.' },
        { question: 'ليش كلور يتبخر أسرع بعنيزة؟', answer: '48°م = 40% أسرع. يومي.' },
        { question: 'ليش فلتر يسد أسرع بعنيزة؟', answer: 'Nafud SiO₂ = رمل. Heavy-Duty.' },
        { question: 'كم تكلفة مسبح بعنيزة مقابل الباحة؟', answer: 'أرخص 10% — لا Biofilm. لكن Scale.' },
        { question: 'هل التمور تأثر على المسبح؟', answer: 'سكر = طحالب أغسطس-أكتوبر. تنظيف أكثر.' },
    ],
    expertTips: [
        'Descaler ربع سنوي — Scale.',
        'كلور يومي — 48°م.',
        'Algaecide أسبوعي — طحالب.',
        'Heavy-Duty فلتر — Nafud.',
        'تنظيف إضافي — تمور.',
    ],
    warnings: [
        'Scale × 6 أشهر = مضخة تسد — YMYL.',
        '48°م + كلور ثابت = بكتيريا — YMYL.',
        'Nafud + فلتر عادي = يسد يومياً.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص مسابح' },
        { entity: AMANA.QASSIM.entity, url: AMANA.QASSIM.url, role: 'اشتراطات أمانة القصيم' },
    ],
    expertReviewer: EXPERTS.ALMOHAIMED,
    expertCitations: [
        { expert: EXPERTS.ALMOHAIMED.name, quote: 'مسبح عنيزة: Scale+48°م. Descaler+Algaecide+كلور يومي.', source: 'نصائح هندسية — مسابح القصيم' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ صيانة مسابح مرخصة', authority: 'بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'Descaler', use: 'CaCO₃ Scale — ربع سنوي' },
        { name: 'Algaecide', use: '48°م — أسبوعي' },
        { name: 'Heavy-Duty Filter', use: 'Nafud SiO₂' },
    ],
    commonConcerns: [
        { concern: 'ربع سنوي كافي.', solution: 'Scale+طحالب = أسبوعي+ربع.' },
        { concern: 'مثل الباحة.', solution: 'Scale ≠ Biofilm.' },
    ],
    consumerEducation: [
        { myth: 'كلور ثابت.', truth: '48°م = يومي.' },
        { myth: 'لا Scale.', truth: '550ppm = Scale.' },
    ],
    relatedServices: [
        { slug: 'tanks-cleaning', context: 'خزانات', priority: 1 },
        { slug: 'water-leak-detection', context: 'تسرب', priority: 2 },
        { slug: 'cleaning', context: 'تنظيف', priority: 3 },
        { slug: 'pest-control', context: 'حشرات', priority: 4 },
        { slug: 'marble-polishing', context: 'رخام', priority: 5 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 6 },
        { slug: 'water-insulation', context: 'مائي', priority: 7 },
    ],
};
