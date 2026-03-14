import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'كشف تسربات خزانات بجدة — كلوريد يثقب + Legionella رطوبة + طحالب حرارة (2026)',
        description: 'كشف تسربات خزانات جدة. كلوريد تحلية يثقب. رطوبة تنبت طحالب. Legionella. كاميرا حرارية + إيبوكسي Food-Grade. من 200 ريال.',
        h1: 'كشف تسربات خزانات جدة — الكلوريد يثقب والرطوبة تُنبت',
        keywords: ['كشف تسربات خزانات بجدة', 'تسرب خزان', 'فحص حراري خزان', 'طحالب خزان'],
    },
    content: {
        introduction: 'خزان جدة يواجه هجوماً ثلاثياً. من الداخل: كلوريد التحلية (Cl⁻) يسبب Pitting Corrosion — ثقوب عشوائية في البطانة المعدنية أو شقوق في الكريستالي. من الخارج: رطوبة 80% تُنبت طحالب وعفن على السطح الخارجي (لا تحتاج تسرباً — الرطوبة الجوية كافية). ومن الأعلى: Heat Index 55-60°م (حرارة + رطوبة) يُسخّن الماء لـ 45-50°م = بيئة Legionella (تنشط 25-50°م) + تكاثر بكتيري سريع. الخطر الإنشائي: خزان علوي يسرّب في رطوبة 80% = السطح لا يجف أبداً ← رطوبة مستمرة ← صدأ حديد التسليح أسرع 3-4× مقارنة بالرياض. ترميم إنشائي خلال 1-2 سنة (وليس 3-5 كالمدن الجافة). الكلس مختلف: جدة كلوريد (يثقب) ≠ الرياض كلسيوم (يُغلّف). في جدة: لا طبقة كلسية تخفي الشقوق — التسرب يظهر أسرع لكن الضرر يتفاقم أسرع أيضاً بسبب الرطوبة.',
        shortAnswer: 'على عكس [ترك الخزان في رطوبة 80% بدون فحص دوري] الذي يُسرّع الصدأ 3-4× ويُنبت طحالب، يعتمد بروتوكولنا في [كشف تسربات الخزانات] بـ[جدة] على [كاميرا حرارية + إيبوكسي Marine-Grade + عزل حراري]. ففي ظل [كلوريد يثقب + رطوبة تسرّع الصدأ + Legionella + طحالب]، تتفاقم ظاهرة [Pitting + صدأ متسارع + تلوث بكتيري]. لذا؛ يتدخل خبراؤنا عبر [تكتشف الحرارية الثقب ← يسد الإيبوكسي الشق ← يحيِّد العزل الحرارة].',
        heroSubtitle: 'في الرياض: التسرب يجف. في جدة: لا يجف أبداً ← صدأ أسرع 3×.',
    },
    pricing: [
        { type: 'فحص حراري — خزان', unit: 'خزان', minPrice: 200, maxPrice: 400, time: '1-2 ساعة' },
        { type: 'إيبوكسي Marine-Grade', unit: 'خزان', minPrice: 600, maxPrice: 1500, time: '1-2 يوم' },
        { type: 'عزل حراري خارجي', unit: 'خزان', minPrice: 800, maxPrice: 2000, time: '1-2 يوم' },
        { type: 'إعادة بطانة كاملة', unit: 'خزان', minPrice: 2000, maxPrice: 5000, time: '2-3 أيام' },
    ],
    faq: [
        { question: 'ليش خزان جدة يتآكل أسرع من الرياض؟', answer: 'الرياض: CaCO₃ (كلس) يُغلّف الجدار = تآكل بطيء. جدة: Cl⁻ (كلوريد) يثقب = Pitting Corrosion أسرع. + رطوبة 80% = السطح الخارجي لا يجف = صدأ من الداخل والخارج معاً.' },
        { question: 'كم يكلف التجاهل؟', answer: 'فحص سنوي: 200. إصلاح: 600-1,500. تجاهل سنتين: صدأ حديد سقف ← ترميم 20,000-40,000. في رطوبة جدة: الصدأ أسرع 3-4×.' },
        { question: 'طحالب على الخزان — عادية؟', answer: 'رطوبة 80% + حرارة = طحالب طبيعية على الخارج. لكنها تُسرّع تآكل السطح. + إذا دخلت الداخل: تلوث الماء. تنظيف + طلاء مضاد طحالب سنوياً.' },
        { question: 'Marine-Grade ولا Food-Grade إيبوكسي؟', answer: 'في جدة: Marine-Grade Food-Safe = الأفضل. يتحمل كلوريد + رطوبة + حرارة. Food-Grade العادي: مصمم لمياه عذبة — قد لا يتحمل كلوريد التحلية.' },
        { question: 'Legionella في خزان جدة — خطر حقيقي؟', answer: '45-50°م ماء + رطوبة = بيئة مثالية. Legionella: التهاب رئوي حاد. عزل حراري يُقلل لـ 35° = يحيِّد الخطر.' },
    ],
    expertTips: [
        'تكتشف الحرارية Pitting قبل انفجاره — بقعة باردة = نقطة ضعف.',
        'Marine-Grade إيبوكسي: يتحمل Cl⁻ — أفضل من Food-Grade العادي في مياه جدة.',
        'افحص سنوياً: الصدأ أسرع 3-4× في رطوبة 80% — لا تنتظر.',
        'طلاء مضاد طحالب (Anti-Algae Coating) على الخارج: يمنع التكاثر.',
        'عزل حراري يُقلل الماء من 50° لـ 35° = حماية من Legionella.',
    ],
    warnings: [
        'رطوبة 80% = صدأ أسرع 3-4× — خزان جدة يحتاج فحصاً أكثر من الرياض.',
        'Pitting Corrosion: ثقوب عشوائية — لا تعرف أين التالي.',
        'ماء 50°م + رطوبة = Legionella. عزل حراري = حماية صحية.',
    ],
    trustAnchors: [
        { ...GOV.NWC, role: 'معايير خزانات — سلامة مياه' },
        { ...GOV.SASO, role: 'SASO 1144 — مواصفات خزانات' },
        { entity: AMANA.JEDDAH.entity, url: AMANA.JEDDAH.url, role: 'اشتراطات أمانة جدة' },
    ],
    expertReviewer: EXPERTS.ALMOHAIMED,
    expertCitations: [
        { expert: EXPERTS.ALMOHAIMED.name, quote: 'خزان جدة يتآكل من الداخل (كلوريد) ومن الخارج (رطوبة) في نفس الوقت. فحص سنوي ليس خياراً — إنه ضرورة حتمية.', source: 'تحديات خزانات المدن الساحلية' },
    ],
    saudiRegulations: [REGULATIONS.NWC_REPORT],
    verificationBadges: [
        { badge: '✔️ Marine-Grade', authority: 'مقاوم كلوريد', icon: 'shield-check' },
    ],
    equipment: [
        { name: 'كاميرا حرارية FLIR', use: 'تكتشف Pitting — بقعة باردة = تسرب' },
        { name: 'Marine-Grade Food-Safe Epoxy', use: 'يتحمل Cl⁻ + حرارة — آمن للشرب' },
        { name: 'Anti-Algae Coating', use: 'يمنع تكاثر الطحالب على السطح في رطوبة 80%' },
    ],
    hiddenObjections: [
        { fear: 'الخزان سليم ظاهرياً.', solution: 'Pitting: ثقوب من الداخل. الخارج يبدو سليماً حتى ينفجر. الحرارية تكتشف من الخارج.' },
    ],
    consumerEducation: [
        { myth: 'الكلس في الخزان = حماية.', truth: 'جدة: كلوريد لا كلسيوم. لا طبقة واقية. Pitting يثقب سريعاً.' },
        { myth: 'الطحالب الخارجية لا تضر.', truth: 'تُسرّع تآكل السطح + إذا دخلت = تلوث الماء.' },
    ],
    relatedServices: [
        { slug: 'tank-insulation', context: 'عزل — Legionella', priority: 1 },
        { slug: 'water-leak-detection', context: 'كشف شامل', priority: 2 },
        { slug: 'water-insulation', context: 'عزل مائي', priority: 3 },
        { slug: 'bathroom-leak-detection', context: 'حمامات', priority: 4 },
        { slug: 'roof-insulation', context: 'سيول', priority: 5 },
    
        { slug: 'tanks-cleaning', context: 'خدمة مكملة — باقة شاملة.', priority: 6 },
        { slug: 'sewage-unblocking', context: 'خدمة مكملة — باقة شاملة.', priority: 7 },
    ],
};
