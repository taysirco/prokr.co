import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'غسيل سيارات بتبوك — شمع يتجمد -2°م + يلين 44°م + حسمى يحفر + ثلج يُكلّس — Ceramic SiO₂ 9H (2026)',
        description: 'غسيل سيارات تبوك. شمع يتجمد -2°م ← يتشقق ← يتقشر. يلين 44°م. حسمى 6 Mohs يحفر Clear Coat. ثلج يُكلّس. Ceramic SiO₂ 9H = -10°م إلى 80°م = حماية 12/12.',
        h1: 'غسيل سيارات بتبوك — الشمع يتجمد والحسمى يحفر والثلج يُكلّس — Ceramic هو الحل',
        keywords: ['غسيل سيارات بتبوك', 'غسيل سيارات تبوك', 'شركة غسيل سيارات بتبوك'],
    },
    content: {
        introduction: 'السيارة في تبوك تتعرض لأقسى ظروف في المملكة — 46°م مدى + ثلوج حقيقية. مشكلة الشمع: في -2°م: الشمع (Carnauba) يتجمد ← يتشقق ← يتقشر. في 44°م: يلين ← يفقد سماكته. الشمع لا يعمل في تبوك. + حسمى 6 Mohs يحفر Clear Coat. + ثلج يُكلّس. الحل: Ceramic SiO₂ 9H — يعمل من -10°م إلى 80°م = يتحمل 46°م المدى. صلابة 9H = أصلب من حسمى 6. لا يتشقق ولا يلين.',
        shortAnswer: 'الشمع يتجمد -2°م ويلين 44°م = لا يعمل. Ceramic SiO₂ 9H (-10°م → 80°م) = الحماية الوحيدة في 46°م مدى + حسمى 6 Mohs + ثلج.',
        heroSubtitle: 'الشمع فشل — Ceramic SiO₂ 9H = -10°م إلى 80°م = حماية 12/12',
    },
    pricing: [
        { type: 'غسيل خارجي (Touchless + Deionized)', unit: 'سيارة', minPrice: 50, maxPrice: 100, time: '30-45 دقيقة' },
        { type: 'غسيل + تلميع Crystal', unit: 'سيارة', minPrice: 100, maxPrice: 200, time: '1-2 ساعة' },
        { type: 'Ceramic SiO₂ 9H (حماية 2-3 سنوات)', unit: 'سيارة', minPrice: 800, maxPrice: 2000, time: '6-10 ساعات' },
        { type: 'عقد غسيل شهري', unit: 'شهر', minPrice: 100, maxPrice: 200, time: '4 غسلات' },
    ],
    faq: [
        { question: 'الشمع يتقشر بعد أسبوعين — ليش؟', answer: '-2°م = Carnauba يتجمد ← يتشقق ← يتقشر. حتى لو لم يتقشر شتاءً: 44°م صيفاً = يلين ← يُمسح بأول غسلة. الشمع لا يعمل في 46°م مدى. Ceramic = لا يتجمد ولا يلين.' },
        { question: 'Ceramic 800-2,000 ريال — يستاهل؟', answer: '2-3 سنوات حماية × صفر شمع × صفر Polishing = وفر 1,500-3,000 ريال/سنة. + يحمي من حسمى 6 Mohs (Clear Coat إصلاح: 2,000-5,000 ريال). Ceramic = أرخص على 3 سنوات.' },
        { question: 'ثلج يكلس السيارة؟', answer: 'ثلج يذوب ← ماء يحمل أملاح ← يجف في 12% ← بقع كلسية. Ceramic Hydrophobic: الماء ينزلق ← لا يجف = لا كلس.' },
    ],
    expertTips: [
        'Ceramic SiO₂ 9H = الحل الوحيد في 46°م (-2°م → 44°م). الشمع لا يعمل.',
        'Touchless حصراً — إسفنجة على حسمى = خدوش = Clear Coat يتلف.',
        'Deionized للغسل — ماء صنبور = كلس ثلجي.',
        'لا تغسل في الصقيع — ماء يتجمد في الأقفال والمقابض.',
    ],
    warnings: [
        'إسفنجة على حسمى = خدوش دائمة في Clear Coat. Touchless حصراً.',
        'شمع في تبوك = أموال مهدرة. -2°م يُدمّره. Ceramic فقط.',
        'غسل في -2°م = ماء يتجمد في أقفال وأنابيب. غسل نهاراً 10 ص+.',
    ],
    trustAnchors: [{ ...GOV.BALADI, role: 'ترخيص غسيل السيارات' }],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALJUND.name, quote: 'سيارة تبوك في 46°م مدى: الشمع خيار فاشل. Ceramic SiO₂ 9H = يعمل -10°م → 80°م = الحل الوحيد. + Touchless + Deionized = بروتوكول تبوكي كامل.', source: 'موسوعة أخطاء — حماية دهان السيارات في مناخ الصقيع' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ غسيل سيارات مرخص', authority: 'بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'Touchless Pressure Washer', use: 'يغسل بدون لمس = صفر خدوش حسمى' },
        { name: 'Deionized Water', use: 'بدون كلس ثلجي — ماء نقي 100%' },
        { name: 'Ceramic SiO₂ 9H', use: 'يعمل -10°م → 80°م × 2-3 سنوات — أصلب من حسمى' },
    ],
    hiddenObjections: [
        { fear: 'Ceramic غالي.', solution: '800-2,000 ÷ 3 سنوات = 267-667 ريال/سنة. شمع: 100-200 × 6-8 مرات = 600-1,600 ريال/سنة. + Clear Coat إصلاح: 2,000-5,000. Ceramic = أرخص.' },
    ],
    counterNarratives: [
        { myth: 'الشمع يكفي.', truth: '-2°م = يتجمد. 44°م = يلين. 46°م مدى = 0% فعالية. Ceramic = 100%.' },
    ],
    relatedServices: [
        { slug: 'marble-polishing', context: 'رخام — نفس Mohs differential', priority: 1 },
        { slug: 'glass-facades-cleaning', context: 'واجهات — نفس كلس ثلجي', priority: 2 },
        { slug: 'cleaning', context: 'تنظيف — المرآب', priority: 3 },
        { slug: 'dyna', context: 'دينا — نقل الأجهزة', priority: 4 },
    ],
};
