import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'غسيل سيارات بحائل — كوارتز نفود يخدش Clear Coat + كلس يُحفر + UV يُبهت + صقيع يُشقّق الشمع (2026)',
        description: 'غسيل سيارات حائل. كوارتز نفود 7 Mohs يخدش Clear Coat 2-4H = Swirl Marks. كلس 600 ppm يُحفر. UV 11+ يُبهت. صقيع 0°م يُشقّق الشمع. Touchless + RO + Ceramic 9H.',
        h1: 'غسيل سيارات بحائل — الرمل يخدش والكلس يُحفر والUV يُبهت والصقيع يُشقّق',
        keywords: ['غسيل سيارات بحائل', 'مغسلة سيارات حائل', 'غسيل سيارات حائل', 'تلميع سيارات حائل'],
    },
    content: {
        introduction: 'السيارة في حائل تتعرض لأربعة أعداء — الرابع فريد لحائل ولا يحدث في مدن أخرى. العدو الأول — خدوش كوارتز دوارية (Swirl Marks): رمل النفود الكبير = كوارتز (صلابة 7 Mohs). Clear Coat = صلابة 2-4H. فرك بإسفنجة على سطح رملي = 100+ خدش دوري/غسلة. عواصف 75+ كم/س تُقذف رمل عالي السرعة = خدوش حتى بدون لمس. الحل: Touchless Wash (Snow Foam + ضغط عالي — بدون فرك). العدو الثاني — ترسيب كلسي يُحفر (CaCO₃ Etching): ماء المغسلة (400-600 ppm) يجف على الطلاء تحت شمس 48°م = Etching كيميائي ← حفر في Clear Coat. بقع دائمة. الحل: ماء RO (TDS < 20 ppm) + تجفيف فوري. العدو الثالث — بهتان بالأشعة فوق البنفسجية (UV Clear Coat Degradation): UV 11+ يُكسّر سلاسل البوليمر ← Clear Coat يتشقق ← Oxidation. الحل: Ceramic Coating SiO₂ 9H. العدو الرابع — خطر فريد: شقوق الشمع في الصقيع (Wax Cold Cracking): شمع السيارة (Carnauba أو Polymer Sealant) يتصلب في 0-5°م ← يتشقق ← الماء يتسلل تحته ← يرفعه ← ينفصل. في حائل: الشمع الذي يُوضع صيفاً يتشقق في الشتاء الأول. الحل: Ceramic Coating (لا يتشقق بالبرد — طبقة SiO₂ صلبة مُلتحمة كيميائياً بالطلاء).',
        shortAnswer: 'على عكس [مغسلة عادية بإسفنجة وماء صنبور + شمع] التي تخدش وتُبقّع وتترك الشمع يتشقق في الصقيع، يعتمد بروتوكولنا في خدمة [غسيل السيارات] بمدينة [حائل] على [Touchless + RO + Ceramic Coating 9H (يتحمل 0°م و48°م ولا يتشقق)]. ففي ظل [4 أعداء: كوارتز + كلس + UV + صقيع]، Ceramic = الحل الوحيد الذي يعمل 12 شهراً.',
        heroSubtitle: '4 أعداء × 4 فصول — الشمع يتشقق في الصقيع لكن Ceramic لا يتشقق',
    },
    pricing: [
        { type: 'غسيل خارجي — Touchless + RO', unit: 'سيارة', minPrice: 30, maxPrice: 60, time: '15-30 دقيقة' },
        { type: 'غسيل داخلي + خارجي شامل', unit: 'سيارة', minPrice: 60, maxPrice: 120, time: '30-60 دقيقة' },
        { type: 'تفصيل كامل (Detailing + Paint Correction)', unit: 'سيارة', minPrice: 300, maxPrice: 800, time: '3-6 ساعات' },
        { type: 'Ceramic Coating 9H (يدوم 2-5 سنوات)', unit: 'سيارة', minPrice: 500, maxPrice: 1500, time: '4-8 ساعات' },
    ],
    faq: [
        { question: 'Swirl Marks بعد كل غسلة — ليش؟', answer: '100+ خدش/غسلة بالإسفنجة. كوارتز نفود 7 Mohs ينسحب عبر Clear Coat 2-4H = خدوش دوارية. + عواصف 75 كم/س = خدوش بدون لمس. Touchless Wash (Snow Foam + ضغط — بدون فرك) = صفر خدوش إضافية.' },
        { question: 'الشمع تشقق في الشتاء — ليش؟', answer: '100% Cold Cracking. Carnauba Wax يتصلب عند 0-5°م ← يتشقق ← ماء يتسلل ← ينفصل. Polymer Sealant: يتحمل أكثر لكنه أيضاً يجمد. Ceramic Coating SiO₂: طبقة صلبة مُلتحمة كيميائياً ← لا تتشقّق في البرد ولا تلين في الحرارة = يعمل في 0°م و48°م.' },
        { question: 'Ceramic أغلى من الشمع — يستاهل في حائل؟', answer: '100% يستاهل — أكثر من أي مدينة. الشمع: يدوم 3-4 أشهر ← يتشقق في أول شتاء = 3-4 طبقات/سنة × 100-200 ريال = 400-800 ريال/سنة + يتشقق كل شتاء. Ceramic: 500-1,500 ريال × يدوم 2-5 سنوات = 100-750 ريال/سنة + لا يتشقق أبداً. أرخص + أفضل.' },
        { question: 'بقع بيضاء على الطلاء ما تروح — إيش؟', answer: '600 ppm CaCO₃ مُترسبة. تحت شمس 48°م: Etching كيميائي ← حفر في Clear Coat ← لا يُزال بالمسح. Paint Correction (تصحيح بالبولش) يُزيل الطبقة المحفورة ← ثم RO حصراً + Ceramic = حماية.' },
        { question: 'كم مرة أغسل في حائل؟', answer: '2-3 مرات/أسبوع Touchless + RO. بعد كل عاصفة: فوراً (الرمل المُلتصق يتحول لورق صنفري). كل 3-6 أشهر: Detailing. كل 2-3 سنوات: تجديد Ceramic. في الرياض: مرة/أسبوع تكفي (أقل رمل + لا صقيع).' },
    ],
    expertTips: [
        'Touchless Wash حصراً — أي لمسة بإسفنجة على رمل = Swirl Marks. Snow Foam ← ضغط ← Waffle MF = صفر خدوش.',
        'RO حصراً (TDS < 20 ppm) — 600 ppm + شمس 48°م = Etching. RO = صفر كلس = صفر حفر.',
        'Ceramic Coating 9H = أفضل استثمار في حائل — يعمل في 0°م و48°م بدون تشقق (الشمع يفشل شتاءً). يدوم 2-5 سنوات.',
        'لا تغسل في شمس الظهيرة (12-3 م) — الماء يجف قبل المسح = Etching. صباحاً أو مساءً.',
        'بعد كل عاصفة 75+ كم/س: شطف RO فوراً — الرمل المُلتصق بالرطوبة = ورق صنفري. كل ساعة تأخير = خدوش إضافية.',
    ],
    warnings: [
        'إسفنجة + ماء صنبور في حائل = أسوأ مزيج: 100+ خدش + كلس يُحفر. Touchless + RO = الخيار الآمن.',
        'شمع في حائل = يتشقق أول شتاء (0-5°م). Ceramic = لا يتشقق. استثمار أولي أعلى = حماية 2-5 سنوات بدون تشقق.',
        'غسل في شمس 48°م + ماء صنبور = Etching كيميائي خلال دقائق ← حفر دائمة. ظل + RO فقط.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص مغاسل السيارات — اشتراطات بيئية وصحية' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALMOHAIMED.name, quote: 'حائل = المدينة الوحيدة التي يتشقق فيها شمع السيارة بالصقيع. Ceramic Coating SiO₂ 9H = الحل الوحيد الذي يعمل في 0°م و48°م بدون تشقق. + Touchless + RO = الثلاثي الذي يحمي الطلاء.', source: 'نصائح هندسية — حماية طلاء السيارات في المناخ القاري' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [
        { badge: '✔️ مغسلة مرخصة', authority: 'منصة بلدي', icon: 'shield-check' },
    ],
    equipment: [
        { name: 'Touchless Wash (Snow Foam + ضغط عالي)', use: 'بدون لمس = صفر Swirl Marks — Snow Foam يُذيب ← ضغط يشطف' },
        { name: 'ماء RO (TDS < 20 ppm)', use: 'يغسل بدون ترسيب كلس ← يمنع Etching في شمس 48°م' },
        { name: 'Ceramic Coating SiO₂ 9H', use: 'طبقة صلبة لا تتشقق في 0°م ولا تلين في 48°م — يعمل 12 شهراً × 2-5 سنوات' },
        { name: 'Waffle Weave Microfiber', use: 'يمتص الماء بدون سحب الرمل — تجفيف آمن بدون خدوش' },
    ],
    hiddenObjections: [
        { fear: 'مغسلة بـ 15 ريال أرخص.', solution: '15 ريال × 100+ خدش/غسلة × 100 غسلة = 10,000 خدش/سنة. بعد سنتين: Paint Correction 300-800 ريال أو إعادة طلاء 5,000-15,000 ريال. الأرخص = الأغلى.' },
        { fear: 'شمع بـ 100 ريال بدلاً من Ceramic بـ 1,500.', solution: 'شمع: يتشقق أول شتاء (0°م) = 3-4 مرات/سنة × 100 = 400 ريال/سنة + يتشقق دائماً. Ceramic: 1,500 × 3 سنوات = 500 ريال/سنة + لا يتشقق. Ceramic أرخص بالسنة.' },
    ],
    counterNarratives: [
        { myth: 'أي مغسلة نتيجتها واحدة.', truth: 'إسفنجة + ماء صنبور = 100+ خدش + كلس. Touchless + RO = صفر خدوش + صفر كلس. الفرق مرئي بعد 3-4 أشهر.' },
        { myth: 'الشمع = حماية.', truth: 'في حائل: الشمع = حماية 3-4 أشهر ← يتشقق في 0°م. Ceramic = حماية 2-5 سنوات بدون تشقق. "حماية" مؤقتة تتلف ≠ حماية.' },
        { myth: 'الطلاء قوي — ما يتأثر.', truth: 'Clear Coat 2-4H < كوارتز 7 Mohs. كل حبة رمل = خدش حتمي. "قوي" = وهم ضد كوارتز النفود.' },
    ],
    relatedServices: [
        { slug: 'glass-facades-cleaning', context: 'واجهات — نفس كوارتز + كلس + UV', priority: 1 },
        { slug: 'marble-polishing', context: 'رخام — نفس Mohs differential', priority: 2 },
        { slug: 'cleaning', context: 'تنظيف — المنزل + السيارة', priority: 3 },
        { slug: 'furniture-moving', context: 'نقل — غسيل بعد النقل', priority: 4 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف — فلتر مكيف السيارة مسدود بالنفود', priority: 5 },
        { slug: 'bird-control', context: 'طيور — فضلات حمام pH 3.5 تأكل الطلاء', priority: 6 },
        { slug: 'pest-control', context: 'حشرات — حشرات زراعية على السيارة', priority: 7 },
    ],
};
