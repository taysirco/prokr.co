import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف واجهات زجاجية بالخبر — NaCl ملح بحري + 85-95% Biofilm + Sealant تآكل + Sabkha (2026)',
        description: 'تنظيف واجهات زجاجية الخبر. NaCl ملح يترسب بقع. 85-95% Biofilm عضوي. Sealant يتآكل بـ NaCl. Sabkha. Deionized + Squeegee + Anti-Biofilm + Marine Sealant.',
        h1: 'تنظيف واجهات زجاجية بالخبر — الملح يُبقّع والرطوبة تُبلفم والختم يتآكل',
        keywords: ['تنظيف واجهات زجاجية بالخبر', 'تنظيف واجهات الخبر', 'شركة تنظيف واجهات بالخبر'],
    },
    content: {
        introduction: 'واجهات الخبر الزجاجية تتعرض لـ 3 تحديات ساحلية. الأولى — NaCl بقع ملحية: رذاذ بحري يترسب على الزجاج ← يجف ← بقع بيضاء ملحية ← مع الشمس: تتصلب. الفرق عن CaSO₄ (الأحساء): NaCl يمتص رطوبة (Hygroscopic) = يبقى رطباً أطول = يتآكل الألمنيوم حوله. Deionized Rinse + Squeegee. الثانية — 85-95% Biofilm: رطوبة مُستمرة = Biofilm بكتيري/طحلبي ينمو على الزجاج ← طبقة خضراء شفافة تُبهت الشفافية. Anti-Biofilm ربع سنوي. الثالثة — Sealant تآكل: NaCl يتآكل مع السيليكون حول الزجاج ← ماء يتسلل ← بقع رطوبة بين الطبقات. Marine-Grade Sealant يقاوم NaCl.',
        shortAnswer: 'على عكس [ماء + قماش] الذي يترك NaCl ويُوزّع Biofilm، يعتمد بروتوكولنا في خدمة [تنظيف الواجهات] بمدينة [الخبر] على [Deionized + Anti-Biofilm + Marine Sealant]. ففي ظل [NaCl + 85-95% + تآكل ختم]، تتفاقم ظاهرة [بقع + طبقة + تسلل]. لذا؛ يتدخل خبراؤنا عبر [بروتوكول واجهات ساحلي].',
        heroSubtitle: 'NaCl بقع + 85-95% Biofilm + Sealant تآكل ساحلي',
    },
    pricing: [
        { type: 'واجهة صغيرة (50 م²)', unit: 'خدمة', minPrice: 220, maxPrice: 450, time: '2-3 ساعات' },
        { type: 'واجهة كبيرة (100+ م²)', unit: 'خدمة', minPrice: 450, maxPrice: 1000, time: '4-8 ساعات' },
        { type: 'Anti-Biofilm + إزالة NaCl متراكم', unit: 'خدمة', minPrice: 350, maxPrice: 700, time: '3-5 ساعات' },
        { type: 'عقد ربع سنوي (4 زيارات)', unit: 'سنة', minPrice: 700, maxPrice: 1600, time: '4 زيارات' },
    ],
    faq: [
        { question: 'NaCl أسوأ من CaSO₄ على الزجاج؟', answer: 'مختلف: CaSO₄ = Scale صلب (بقع بيضاء ثابتة). NaCl = Hygroscopic (يمتص رطوبة = يبقى رطباً = يتآكل الألمنيوم حوله). NaCl أخطر للإطار — CaSO₄ أصعب إزالة من الزجاج.' },
        { question: 'Biofilm — يختلف عن الأوساخ؟', answer: 'Biofilm = غشاء بكتيري/طحلبي حي = ينمو. الأوساخ = تراكم ميت. Biofilm يُعيد نموه بعد التنظيف السطحي. Anti-Biofilm = يقتله + يمنع إعادة النمو.' },
        { question: 'Marine Sealant — أغلى؟', answer: 'أغلى 50-100% من السيليكون العادي. لكن: يقاوم NaCl 8-10 سنوات vs 3-5 سنوات. في الخبر: يُوفّر استبدال.' },
        { question: 'كل 3 أشهر — السبب؟', answer: 'NaCl أسبوعي + Biofilm شهري. 3 أشهر = قبل أن يتصلب NaCl + يتأصل Biofilm. نصف سنوي = أصعب 3×.' },
        { question: 'الكورنيش — أسوأ؟', answer: '500 م = NaCl 3-5× أعلى + Biofilm أسرع. أحياء داخلية = أقل. لكن: 85-95% = Biofilm في كل مكان.' },
    ],
    expertTips: [
        'Deionized Rinse بعد كل غسل — ماء الخبر = NaCl ← بقع. Deionized = صفر أملاح.',
        'Anti-Biofilm كل ربع — يقتل الغشاء + يمنع إعادة النمو 3 أشهر.',
        'فحص Sealant سنوي — NaCl يتآكل أسرع. Marine-Grade = يقاوم.',
        'Squeegee — ليس قماش. NaCl على قماش = يخدش. Squeegee = حافة مطاطية نظيفة.',
        'تنظيف صباحي — 85-95% + شمس ظهراً = ماء يتبخر = NaCl يتصلب فوراً.',
    ],
    warnings: [
        'NaCl + ألمنيوم إطار + رطوبة = Galvanic Corrosion الإطار. تغيير إطار = 2,000-10,000 ريال/لوح.',
        'Biofilm 85-95% متأصل = لا يُزال بالماء ← كشط ← خدوش. Anti-Biofilm ربع سنوي = يمنع.',
        'Sealant متآكل = ماء بين طبقات الزجاج = بقع دائمة + عفن ← تغيير اللوح.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص شركات الواجهات' },
        { entity: AMANA.SHARQIA.entity, url: AMANA.SHARQIA.url, role: 'اشتراطات المباني بالشرقية' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALMOHAIMED.name, quote: 'واجهات الخبر = ساحلية: NaCl Hygroscopic + Biofilm 85-95% + Sealant تآكل. 3 تحديات مختلفة عن الأحساء. Deionized + Anti-Biofilm + Marine Sealant.', source: 'نصائح هندسية — واجهات ساحلية' },
    ],
    saudiRegulations: [REGULATIONS.SBC_601],
    verificationBadges: [
        { badge: '✔️ تنظيف واجهات مرخص', authority: 'منصة بلدي', icon: 'shield-check' },
    ],
    equipment: [
        { name: 'Deionized Water System', use: 'غسل بصفر أملاح — يمنع NaCl بقع' },
        { name: 'Anti-Biofilm Treatment', use: 'يقتل Biofilm + يمنع إعادة النمو — 3 أشهر' },
        { name: 'Marine-Grade Sealant', use: 'يقاوم NaCl — فعّال 8-10 سنوات' },
        { name: 'Squeegee مهني', use: 'يرفع NaCl بدون خدش' },
    ],
    hiddenObjections: [
        { fear: 'الواجهة ما تتسخ.', solution: 'NaCl شفاف + Biofilm شفاف. \"ما تتسخ\" = لا تُلاحظ. ربع سنوي يكشف.' },
        { fear: 'ماء وصابون.', solution: 'ماء الخبر = NaCl جديد. صابون لا يقتل Biofilm. 2 فشلات.' },
    ],
    consumerEducation: [
        { myth: 'واجهات الخبر مثل الأحساء.', truth: 'NaCl ≠ CaSO₄. Biofilm ≠ لقاح. Hygroscopic ≠ Scale. مختلف.' },
        { myth: 'المطر يغسل.', truth: 'المطر في الخبر = NaCl + أملاح بحرية = بقع إضافية.' },
        { myth: 'سنوي.', truth: 'NaCl أسبوعي + Biofilm شهري. سنوي = 11 شهراً. ربع سنوي.' },
    ],
    relatedServices: [
        { slug: 'cleaning', context: 'تنظيف — المبنى', priority: 1 },
        { slug: 'marble-polishing', context: 'رخام — NaCl الأرضيات', priority: 2 },
        { slug: 'office-cleaning', context: 'مكاتب — واجهات المكتب', priority: 3 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف — NaCl مشترك', priority: 4 },
        { slug: 'auto-cleaning', context: 'سيارات — نفس NaCl', priority: 5 },
        { slug: 'villas-cleaning', context: 'فلل — واجهات الفيلا', priority: 6 },
        { slug: 'steam-cleaning', context: 'بخار — تعقيم داخلي', priority: 7 },
    ],
};
