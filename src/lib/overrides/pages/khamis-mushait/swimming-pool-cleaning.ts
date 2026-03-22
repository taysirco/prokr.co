import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../gov-references';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف مسابح بخميس مشيط — أمطار+60-85% طحالب 2× + أوراق أشجار — Algicide! (2026)',
        description: 'تنظيف مسابح خميس مشيط. أمطار تُخفف الكلور! 60-85% طحالب 2×. أوراق أشجار. Algicide+فلتر+pH.',
        h1: 'تنظيف مسابح بخميس مشيط — أمطار وطحالب وأوراق',
        keywords: ['تنظيف مسابح خميس مشيط', 'تنظيف مسبح بخميس مشيط', 'شركة تنظيف مسابح خميس مشيط'],
    },
    content: {
        introduction: 'مسبح خميس مشيط يواجه تحديات بيولوجية مختلفة! أولاً: أمطار تُخفف الكلور! أمطار موسمية غزيرة ← تخفيف تركيز الكلور في المسبح ← طحالب تنمو بعد كل مطر. يحتاج ضبط pH+كلور فوري بعد المطر. ثانياً: 60-85% = طحالب تنمو 2× أسرع. في عنيزة (15-25%): الشمس تقتل الطحالب + كلور يكفي. في خميس: رطوبة+ظل ضبابي = طحالب أسرع. Algicide أسبوعي. ثالثاً: أشجار! خميس مدينة خضراء = أوراق وحطام تسقط في المسبح ← تتحلل ← تُغذي الطحالب. شبك تغطية+فلتر. رابعاً: تكثّف ضبابي — ضباب يحمل أبواغ وغبار للمسبح. مقارنة: عنيزة = شمس+كلور+لا أمطار+لا أشجار = أبسط. خميس = Algicide+pH ضبط+فلتر = أغلى 25%.',
        shortAnswer: 'على عكس [الكلور فقط بدون Algicide]، يعتمد بروتوكولنا في خدمة [تنظيف المسابح] بمدينة [خميس مشيط] على [Algicide+ضبط pH بعد مطر+فلتر+شبك]. ففي ظل [أمطار تُخفف كلور+60-85% طحالب 2×+أوراق+ضباب]، تتفاقم ظاهرة [طحالب سريعة+كلور ضعيف+حطام]. لذا؛ يتدخل فريقنا عبر [ضبط ← Algicide ← فلتر ← تغطية].',
        heroSubtitle: 'أمطار تُخفف كلور + طحالب 2× + أوراق — Algicide!',
    },
    pricing: [
        { type: 'تنظيف + ضبط كيميائي', unit: 'مسبح', minPrice: 180, maxPrice: 370, time: '2-3 ساعات' },
        { type: 'بعد مطر (طوارئ)', unit: 'مسبح', minPrice: 120, maxPrice: 250, time: '1-2 ساعة' },
        { type: 'أسبوعي (4 زيارات/شهر)', unit: 'شهر', minPrice: 400, maxPrice: 820, time: '4 زيارات' },
        { type: 'سنوي (صيانة كاملة)', unit: 'سنة', minPrice: 3500, maxPrice: 7500, time: '52 زيارة' },
    ],
    faq: [
        { question: 'ليش المسبح يخضرّ بعد المطر بخميس مشيط؟', answer: 'الأمطار تُخفف الكلور ← الطحالب تنمو فوراً. ضبط pH+كلور+Algicide بعد كل مطر.' },
        { question: 'كم مرة يحتاج المسبح صيانة بخميس مشيط؟', answer: 'أسبوعي! طحالب 2× + أوراق + أمطار. عنيزة: كل أسبوعين.' },
        { question: 'كيف أمنع أوراق الأشجار من المسبح بخميس؟', answer: 'شبك تغطية + فلتر قوي. خميس خضراء = أوراق مستمرة. تنظيف يومي.' },
        { question: 'كم تكلفة صيانة مسبح بخميس مقارنة بعنيزة؟', answer: 'أغلى 25% — Algicide+ضبط بعد مطر+فلتر. 180-820 مقابل 140-650.' },
        { question: 'هل الضباب يأثر على المسبح بخميس مشيط؟', answer: 'يحمل أبواغ طحالب وغبار. يُغذي الطحالب + يُعكّر الماء. Algicide أسبوعي.' },
    ],
    expertTips: [
        'Algicide أسبوعي — طحالب 2× بالرطوبة.',
        'ضبط pH+كلور بعد مطر — الأمطار تُخفف.',
        'شبك تغطية — أوراق أشجار.',
        'فلتر قوي — حطام+أبواغ.',
        'فحص بعد مطر — طوارئ كيميائية.',
    ],
    warnings: [
        'أمطار + بدون ضبط = كلور ضعيف = طحالب خلال 24 ساعة.',
        'أوراق متحللة + 48h = طحالب تتغذى = مسبح أخضر.',
        'طفل يسبح في ماء طحالب = عدوى جلدية — YMYL.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص صيانة مسابح' },
        { entity: AMANA.ASIR.entity, url: AMANA.ASIR.url, role: 'اشتراطات أمانة عسير' },
    ],
    expertReviewer: EXPERTS.ALMOHAIMED,
    expertCitations: [
        { expert: EXPERTS.ALMOHAIMED.name, quote: 'مسبح خميس: أمطار تُخفف كلور+طحالب 2×+أوراق. Algicide+ضبط بعد مطر.', source: 'موسوعة أخطاء — مسابح جبلية' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ صيانة مسابح مرخصة', authority: 'بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'Algicide', use: 'يقتل طحالب — 60-85% تكاثر سريع' },
        { name: 'جهاز pH+كلور', use: 'ضبط بعد مطر — الأمطار تُخفف' },
        { name: 'شبك تغطية', use: 'يمنع أوراق أشجار من الدخول' },
    ],
    commonConcerns: [
        { concern: 'كلور يكفي.', solution: 'أمطار تُخففه + طحالب 2×. Algicide إلزامي.' },
        { concern: 'مثل عنيزة.', solution: 'عنيزة: شمس+لا مطر+لا أشجار = أبسط.' },
    ],
    consumerEducation: [
        { myth: 'المسبح ما يحتاج Algicide.', truth: '60-85% = طحالب 2×. Algicide أسبوعي.' },
        { myth: 'كل أسبوعين يكفي.', truth: 'أمطار+طحالب+أوراق = أسبوعي إلزامي.' },
    ],
    relatedServices: [
        { slug: 'tanks-cleaning', context: 'خزانات', priority: 1 },
        { slug: 'pest-control', context: 'حشرات — بعوض', priority: 2 },
        { slug: 'cleaning', context: 'تنظيف', priority: 3 },
        { slug: 'water-insulation', context: 'عزل مائي', priority: 4 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 5 },
        { slug: 'glass-facades-cleaning', context: 'واجهات', priority: 6 },
        { slug: 'marble-polishing', context: 'رخام', priority: 7 },
    ],
};
