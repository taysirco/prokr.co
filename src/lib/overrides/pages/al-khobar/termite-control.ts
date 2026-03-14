import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'مكافحة النمل الأبيض بالخبر — Sabkha تسهّل + 85-95% عش رطب + NaCl يُضعف Post-Construction (2026)',
        description: 'مكافحة نمل أبيض الخبر. Sabkha تربة ملحية تسهّل الحفر. 85-95% عش رطب دائماً. NaCl يُضعف الحاجز الكيميائي. Bait + Barrier + مراقبة.',
        h1: 'مكافحة النمل الأبيض بالخبر — Sabkha تسهّل والرطوبة تُنعش والملح يُضعف',
        keywords: ['مكافحة النمل الأبيض بالخبر', 'مكافحة نمل ابيض الخبر', 'شركة مكافحة نمل الخبر'],
    },
    content: {
        introduction: 'النمل الأبيض في الخبر يسلك سلوكاً مختلفاً لـ 3 أسباب ساحلية. الأول — Sabkha تسهّل الحفر: Sabkha = تربة ملحية رطبة = ليّنة. النمل الأبيض الجوفي (Subterranean) يحفر أسهل وأسرع. مستعمرات أكبر. الثاني — 85-95% عش رطب دائماً: النمل الأبيض يحتاج رطوبة عالية. في الرياض (15%): يبحث عن مصادر ماء. في الخبر (85-95%): الرطوبة في كل مكان = لا يحتاج ماء = يتوسع حيثما يريد. الثالث — NaCl يُضعف Post-Construction Barrier: الحاجز الكيميائي في التربة يتفاعل مع NaCl ← يتحلل أسرع. الحاجز يدوم 5 سنوات في الرياض ← 3-4 سنوات في الخبر. مراقبة أمتن.',
        shortAnswer: 'على عكس [رش سطحي بدون مراقبة] الذي لا يُغطي Sabkha ولا Chloride Degradation، يعتمد بروتوكولنا في خدمة [مكافحة النمل الأبيض] بمدينة [الخبر] على [Bait System + Barrier مُعزز + مراقبة ربع سنوية]. ففي ظل [Sabkha + 85-95% + NaCl]، تتفاقم ظاهرة [حفر + توسع + ضعف حاجز]. لذا؛ يتدخل خبراؤنا عبر [بروتوكول ساحلي مُتكامل].',
        heroSubtitle: 'Sabkha تسهّل + 85-95% رطوبة دائمة + NaCl يُضعف Barrier',
    },
    pricing: [
        { type: 'فحص + تقييم', unit: 'زيارة', minPrice: 150, maxPrice: 300, time: '1-2 ساعة' },
        { type: 'Bait System (محطات)', unit: 'شقة/منزل', minPrice: 800, maxPrice: 2000, time: 'تركيب + مراقبة' },
        { type: 'Post-Construction Barrier (مُعزز)', unit: 'فيلا', minPrice: 1500, maxPrice: 4000, time: '1-2 يوم' },
        { type: 'عقد سنوي (مراقبة ربع سنوية)', unit: 'سنة', minPrice: 600, maxPrice: 1500, time: '4 زيارات' },
    ],
    faq: [
        { question: 'Sabkha تسهّل — كم أسرع؟', answer: 'Sabkha = رطبة + ليّنة. في تربة صخرية: النمل يحفر 1-2 م/شهر. في Sabkha: 3-5 م/شهر. مستعمرة تصل المبنى أسرع.' },
        { question: '85-95% = لا يحتاج ماء؟', answer: 'في الرياض: يحفر نحو الأنابيب (مصادر ماء). في الخبر: الرطوبة في الهواء + التربة = يتوسع في كل اتجاه. مستعمرة أكبر + أوسع.' },
        { question: 'Barrier يضعف — كم أسرع؟', answer: 'NaCl + رطوبة = تحلل أسرع. 5 سنوات (الرياض) ← 3-4 سنوات (الخبر). مراقبة ربع سنوية = يكشف اختراق قبل الضرر.' },
        { question: 'Bait أم Barrier — أيهما أنسب؟', answer: 'Bait = Cascading Kill (Trophallaxis): النمل يأخذ الطُعم ← يُطعم المستعمرة ← يموت الجميع. Barrier = يحمي المبنى. الأمثل: كلاهما. Bait يقتل + Barrier يحمي.' },
        { question: 'أحياء أسوأ؟', answer: 'أحياء الكورنيش (Sabkha أقرب + رطوبة أعلى) = أسرع. أحياء داخلية (الثقبة) = أبطأ. لكن: 85-95% = كل الأحياء مُعرّضة.' },
    ],
    expertTips: [
        'Bait + Barrier معاً — Bait يقتل المستعمرة. Barrier يحمي المبنى. لا أحدهما يكفي.',
        'مراقبة ربع سنوية — Sabkha 85-95% = حفر سريع + توسع سريع. ربع سنوي يكشف مبكراً.',
        'Barrier مُعزز (Imidacloprid/Fipronil) — يقاوم NaCl أطول من البيريثرويد.',
        'Cascading Kill مبدأ — Trophallaxis = النمل يُطعم بعضه. الطُعم يصل الملكة = المستعمرة تموت.',
        'فحص بعد الأمطار — المطر + Sabkha = حفر أسهل = نشاط أعلى.',
    ],
    warnings: [
        'Sabkha + 85-95% = مستعمرة تصل المبنى أسرع من أي مدينة. بلا مراقبة: ضرر إنشائي خلال سنة.',
        'Barrier بدون مراقبة في NaCl = يتحلل بصمت. 3-4 سنوات ← اختراق بدون علم.',
        'رش سطحي ≠ مكافحة. لا يصل المستعمرة الجوفية. أنبوب النمل يعود خلال أيام.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص مكافحة آفات' },
        { ...GOV.WEQAA, role: 'تسجيل مبيدات' },
        { entity: AMANA.SHARQIA.entity, url: AMANA.SHARQIA.url, role: 'صحة عامة بالشرقية' },
    ],
    expertReviewer: EXPERTS.ALJUND,
    expertCitations: [
        { expert: EXPERTS.ALKHODAIRY.name, quote: 'نمل أبيض الخبر = ساحلي: Sabkha ليّنة + 85-95% رطوبة مُطلقة + NaCl يُضعف Barrier. Bait + Barrier مُعزز + مراقبة ربع سنوية = بروتوكول ساحلي.', source: 'أبحاث حشرات — نمل أبيض Sabkha' },
    ],
    saudiRegulations: [REGULATIONS.GHAD_SYSTEM],
    verificationBadges: [
        { badge: '✔️ مكافحة مرخصة', authority: 'بلدي + وقاء', icon: 'shield-check' },
        { badge: '✔️ مبيدات مُسجّلة', authority: 'نظام غاد', icon: 'badge-check' },
    ],
    equipment: [
        { name: 'Bait System (Trophallaxis)', use: 'Cascading Kill — يقتل المستعمرة من الداخل' },
        { name: 'Barrier مُعزز (Imidacloprid)', use: 'يحمي المبنى — يقاوم NaCl 4-5 سنوات' },
        { name: 'محطات مراقبة', use: 'يكشف نشاط ربع سنوي' },
    ],
    commonConcerns: [
        { concern: 'ما عندي نمل.', solution: 'Sabkha 85-95% = المستعمرة تأتي — ليس إن كانت بل متى. الوقاية = أرخص 10×.' },
        { concern: 'Bait بطيء.', solution: 'Cascading Kill: 2-4 أشهر للمستعمرة الكاملة. بطيء = يقتل الملكة. سريع = يقتل الجنود فقط.' },
    ],
    consumerEducation: [
        { myth: 'الخبر مثل الرياض.', truth: 'Sabkha ≠ صخرية. 85-95% ≠ 15%. NaCl Barrier = 3-4 ≠ 5 سنوات.' },
        { myth: 'رش سطحي.', truth: 'سطحي ≠ جوفي. المستعمرة تحت الأرض. الرش لا يصلها.' },
        { myth: 'مرة واحدة.', truth: 'Sabkha + 85-95% = مستعمرات جديدة مستمرة. مراقبة دائمة.' },
    ],
    relatedServices: [
        { slug: 'pest-control', context: 'حشرات — مكافحة شاملة', priority: 1 },
        { slug: 'bedbugs-control', context: 'بق — مكافحة', priority: 2 },
        { slug: 'furniture-cleaning', context: 'أثاث — خشب', priority: 3 },
        { slug: 'villas-cleaning', context: 'فلل — فحص', priority: 4 },
        { slug: 'cleaning', context: 'تنظيف — بعد مكافحة', priority: 5 },
        { slug: 'furniture-storage', context: 'تخزين — حماية', priority: 6 },
        { slug: 'steam-cleaning', context: 'بخار — تعقيم', priority: 7 },
    ],
};
