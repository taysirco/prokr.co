import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف واجهات زجاجية بالأحساء — CaSO₄ Water Spots + لقاح لاصق + 48°م UV Photo-Degradation (2026)',
        description: 'تنظيف واجهات زجاجية الأحساء. CaSO₄ يترسب Water Spots على الزجاج. لقاح 2.5M نخلة لاصق. UV 9+ Photo-Degradation مانع تسرب. Deionized + Squeegee + UV Sealant.',
        h1: 'تنظيف واجهات زجاجية بالأحساء — جبس يُبقّع ولقاح يلتصق وUV يُتلف الختم',
        keywords: ['تنظيف واجهات زجاجية بالأحساء', 'تنظيف واجهات زجاج الاحساء', 'شركة تنظيف واجهات بالأحساء'],
    },
    content: {
        introduction: 'الواجهات الزجاجية في الأحساء تتعرض لـ 3 تحديات واحية. التحدي الأول — CaSO₄ Water Spots: المطر + رذاذ ري + غسل بماء الأحساء = CaSO₄ يترسب على الزجاج ← بقع بيضاء تتصلب مع الشمس ← تتراكم ← تُضعف الشفافية. Deionized Water Rinse بعد الغسل + Citric ربع سنوي = صفر بقع. التحدي الثاني — لقاح لاصق: 2.5M نخلة = لقاح 30-50 ميكرون يلتصق بالزجاج (خاصة مع الرطوبة والندى). ممسحة + لقاح = خطوط لا تختفي. Squeegee مهني + Pure Water = نظافة مثالية. التحدي الثالث — UV 9+ = Photo-Degradation مانع التسرب: سيليكون Sealant حول الزجاج يتعرض لـ UV مُسرّع ← يتآكل ← ماء يتسلل ← بقع رطوبة بين الطبقات. فحص Sealant سنوي + UV-Resistant Sealant.',
        shortAnswer: 'على عكس [ماء + قماش] الذي يترك بقع CaSO₄ ويخدش بالقاح، يعتمد بروتوكولنا في خدمة [تنظيف الواجهات] بمدينة [الأحساء] على [Deionized + Squeegee + Citric + UV Sealant]. ففي ظل [CaSO₄ + لقاح 2.5M + UV 9+]، تتفاقم ظاهرة [بقع + التصاق + تآكل ختم]. لذا؛ يتدخل خبراؤنا عبر [بروتوكول واجهات واحي].',
        heroSubtitle: 'CaSO₄ يُبقّع + لقاح يلتصق + UV يُتلف الختم',
    },
    pricing: [
        { type: 'واجهة صغيرة (50 م²)', unit: 'خدمة', minPrice: 200, maxPrice: 400, time: '2-3 ساعات' },
        { type: 'واجهة كبيرة (100+ م²)', unit: 'خدمة', minPrice: 400, maxPrice: 900, time: '4-8 ساعات' },
        { type: 'Citric + إزالة Scale متراكم', unit: 'خدمة', minPrice: 300, maxPrice: 600, time: '3-5 ساعات' },
        { type: 'عقد ربع سنوي (4 زيارات)', unit: 'سنة', minPrice: 600, maxPrice: 1400, time: '4 زيارات' },
    ],
    faq: [
        { question: 'بقع بيضاء على الزجاج — ما تختفي؟', answer: 'CaSO₄ الجبسي يتصلب مع الشمس ← Scale على الزجاج. ماء + قماش = يُزيل الأتربة فوقه — لا الـ Scale نفسه. Citric Acid 3-5% يُذيبه كيميائياً ← الزجاج يعود شفافاً. كل 3 أشهر = يمنع التراكم.' },
        { question: 'اللقاح — ما أمسحه بقماش؟', answer: 'اللقاح لاصق (رطوبة الهواء تُنشّط اللصق). قماش + لقاح = يُفرشه = خطوط. Squeegee مهني (حافة مطاطية) + Pure Water (Deionized) = يرفعه دفعة واحدة بدون خطوط.' },
        { question: 'UV يُتلف الختم — كم سنة؟', answer: 'سيليكون عادي في UV 9+ = يتآكل خلال 3-5 سنوات (بدلاً من 8-10 في بيئة أقل UV). UV-Resistant Sealant = 8-10 سنوات حتى في الأحساء. فحص سنوي = يكشف التآكل مبكراً.' },
        { question: 'كل 3 أشهر — ضروري؟', answer: 'CaSO₄ يترسب أسبوعياً + لقاح يلتصق يومياً (4 أشهر). كل 3 أشهر = قبل أن يتصلب الـ Scale. نصف سنوي = Scale مُتصلب = يحتاج كشط + Citric أقوى + تكلفة أعلى.' },
        { question: 'ماء المطر يُنظف الزجاج؟', answer: 'في بيئة بدون CaSO₄: نعم — المطر يغسل. في الأحساء: المطر يحمل CaSO₄ من الغبار ← يجف على الزجاج ← بقع جديدة. المطر = مشكلة إضافية.' },
    ],
    expertTips: [
        'Deionized Water Rinse بعد كل غسل — يمنع CaSO₄ Water Spots. ماء الأحساء بعد الغسل = بقع بيضاء.',
        'Squeegee فقط — قماش + لقاح لاصق = خطوط على الزجاج. Squeegee = حافة مطاطية ترفع اللقاح دفعة واحدة.',
        'Citric 3-5% كل ربع — يُذيب CaSO₄ Scale قبل التصلب. HCl يتآكل الألمنيوم حول الزجاج.',
        'فحص Sealant سنوي — UV 9+ يُتلف في 3-5 سنوات. ماء بين الطبقات = بقع رطوبة دائمة.',
        'تنظيف في الصباح الباكر — 48°م ظهراً = الماء يتبخر فوراً = Water Spots حتى مع Deionized.',
    ],
    warnings: [
        'CaSO₄ Scale متراكم 6-12 شهراً = يحتاج Citric قوي + كشط ← خطر خدش الزجاج. ربع سنوي = يمنع.',
        'Sealant متآكل = ماء يتسلل بين الطبقات = رطوبة + عفن بين الزجاج ← تغيير اللوح بالكامل (1,000-5,000 ريال/لوح).',
        'لقاح متراكم + رطوبة = طبقة عضوية على الزجاج ← عفن سطحي = يُضعف الشفافية بشكل دائم.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص شركات تنظيف الواجهات' },
        { entity: AMANA.AHSA.entity, url: AMANA.AHSA.url, role: 'اشتراطات المباني بمحافظة الأحساء' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALMOHAIMED.name, quote: 'واجهات الأحساء = 3 تحديات واحية: CaSO₄ يُبقّع + لقاح يلتصق + UV يُتلف الختم. Deionized + Squeegee + Citric + UV Sealant = بروتوكول واجهات لا يشبه الساحلي ولا الصحراوي.', source: 'نصائح هندسية — واجهات الواحات' },
    ],
    saudiRegulations: [REGULATIONS.SBC_601],
    verificationBadges: [
        { badge: '✔️ تنظيف واجهات مرخص', authority: 'منصة بلدي', icon: 'shield-check' },
    ],
    equipment: [
        { name: 'Deionized Water System', use: 'ماء بصفر أملاح — يمنع CaSO₄ Water Spots' },
        { name: 'Squeegee مهني', use: 'يرفع لقاح لاصق دفعة واحدة بدون خطوط' },
        { name: 'Citric Acid 3-5%', use: 'يُذيب CaSO₄ Scale المتراكم على الزجاج' },
        { name: 'UV-Resistant Sealant', use: 'يستبدل ختم متآكل — فعّال 8-10 سنوات في UV 9+' },
    ],
    hiddenObjections: [
        { fear: 'ماء وقماش يكفي.', solution: 'ماء الأحساء = CaSO₄ يترسب. قماش = لقاح يُفرش. 2 فشلات. Deionized + Squeegee = الحل.' },
        { fear: 'الواجهة ما تتسخ.', solution: 'CaSO₄ أسبوعياً + لقاح يومياً. البقع تتراكم ببطء — \"ما تتسخ\" = لا تُلاحظ. ربع سنوي = يكشف.' },
    ],
    consumerEducation: [
        { myth: 'واجهات الأحساء مثل جدة.', truth: 'جدة = NaCl (صدأ). الأحساء = CaSO₄ (Scale بلا صدأ) + لقاح. مشكلتان مختلفتان = حلان مختلفان.' },
        { myth: 'المطر يغسل.', truth: 'المطر يحمل CaSO₄ في الأحساء = بقع إضافية بعد كل مطر. المطر = مشكلة — ليس حلاً.' },
        { myth: 'تنظيف سنوي يكفي.', truth: 'CaSO₄ أسبوعي + لقاح يومي. سنوي = 11 شهراً تراكم. ربع سنوي = الحد الأدنى.' },
    ],
    relatedServices: [
        { slug: 'cleaning', context: 'تنظيف — المبنى بالكامل', priority: 1 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف — نفس لقاح', priority: 2 },
        { slug: 'marble-polishing', context: 'رخام — CaSO₄ على الأرضيات', priority: 3 },
        { slug: 'office-cleaning', context: 'مكاتب — واجهات المكتب', priority: 4 },
        { slug: 'auto-cleaning', context: 'سيارات — نفس CaSO₄ + لقاح', priority: 5 },
        { slug: 'villas-cleaning', context: 'فلل — واجهات الفيلا', priority: 6 },
        { slug: 'steam-cleaning', context: 'بخار — تعقيم داخلي', priority: 7 },
    ],
};
