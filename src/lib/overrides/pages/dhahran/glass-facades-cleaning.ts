import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف واجهات زجاجية بالظهران — NaCl+SiO₂ مزدوج + 75-85% Biofilm + Sealant (2026)',
        description: 'تنظيف واجهات الظهران. NaCl بقع + SiO₂ خدش = مزدوج. 75-85% Biofilm. Sealant تآكل. Deionized + Anti-Biofilm + Marine Sealant + Squeegee.',
        h1: 'تنظيف واجهات زجاجية بالظهران — ملح يُبقّع ورمل يخدش وBiofilm ينمو',
        keywords: ['تنظيف واجهات زجاجية بالظهران', 'تنظيف واجهات الظهران', 'شركة تنظيف واجهات بالظهران'],
    },
    content: {
        introduction: 'واجهات الظهران الزجاجية تواجه مشكلة مزدوجة فريدة. المزدوج — NaCl بقع + SiO₂ خدش: NaCl يترسب بقع ملحية + SiO₂ يترسب كطبقة رملية. المسح = SiO₂ يخدش الزجاج تحت NaCl الرطب. Squeegee (مطاطي) بدلاً من قماش. Deionized غسل ← Squeegee = NaCl يُذاب + SiO₂ يُرفع بلا خدش. التحدي الثاني — 75-85% Biofilm: أبطأ من الخبر لكن: ينمو. غشاء بكتيري/طحلبي كل 4-6 أسابيع. Anti-Biofilm كل 4 أشهر. التحدي الثالث — Sealant: NaCl يتآكل + SiO₂ يخدش = Sealant يتآكل+يتقشر أسرع. Marine-Grade يقاوم.',
        shortAnswer: 'على عكس [قماش + ماء] الذي يخدش بـ SiO₂ ويترك NaCl، يعتمد بروتوكولنا في خدمة [تنظيف الواجهات] بمدينة [الظهران] على [Deionized + Squeegee + Anti-Biofilm + Marine Sealant]. ففي ظل [NaCl+SiO₂ + 75-85% + Sealant]، تتفاقم ظاهرة [بقع+خدش + غشاء + تآكل]. لذا؛ يتدخل خبراؤنا عبر [بروتوكول واجهات مزدوج].',
        heroSubtitle: 'NaCl+SiO₂ بقع+خدش + 75-85% Biofilm + Sealant مزدوج',
    },
    pricing: [
        { type: 'واجهة صغيرة (50 م²)', unit: 'خدمة', minPrice: 210, maxPrice: 420, time: '2-3 ساعات' },
        { type: 'واجهة كبيرة (100+ م²)', unit: 'خدمة', minPrice: 420, maxPrice: 940, time: '4-8 ساعات' },
        { type: 'Anti-Biofilm + إزالة مزدوج', unit: 'خدمة', minPrice: 330, maxPrice: 670, time: '3-5 ساعات' },
        { type: 'عقد ربع سنوي', unit: 'سنة', minPrice: 670, maxPrice: 1500, time: '4 زيارات' },
    ],
    faq: [
        { question: 'SiO₂ يخدش الزجاج — حقاً؟', answer: 'SiO₂ = 7 Mohs. زجاج = 5.5-6 Mohs. SiO₂ يخدش الزجاج فعلاً. تحت NaCl الرطب = خدش مُبلّل أعمق. Squeegee مطاطي = الحل.' },
        { question: 'Biofilm أبطأ من الخبر؟', answer: '75-85% < 85-95% = أبطأ (4-6 أسابيع بدلاً من 2-3). لكن: ينمو حتماً. Anti-Biofilm كل 4 أشهر.' },
        { question: 'Marine Sealant — ضروري؟', answer: 'NaCl يتآكل + SiO₂ يخدش = Sealant عادي يفشل أسرع (3-4 سنوات بدلاً من 5-7). Marine = 7-10 سنوات.' },
        { question: 'صباحي أفضل؟', answer: 'نعم — 75-85% + شمس = ماء يتبخر = NaCl+SiO₂ يتصلبان. صباحي = أبرد + أقل تبخر.' },
        { question: 'ربع سنوي — ليش؟', answer: 'NaCl أسبوعي + SiO₂ أسبوعي + Biofilm شهري. ربع سنوي = قبل التصلب المزدوج + التأصّل.' },
    ],
    expertTips: [
        'Deionized غسل ← Squeegee — لا قماش. SiO₂ يخدش.',
        'Anti-Biofilm كل 4 أشهر — أبطأ من الخبر لكن ينمو.',
        'Marine Sealant — يقاوم NaCl+SiO₂ أطول.',
        'صباحي — أقل تبخر = أسهل إزالة.',
        'فحص Sealant سنوي — مزدوج يُسرّع التآكل.',
    ],
    warnings: [
        'SiO₂ + NaCl مبلل = خدوش في الزجاج. 7 Mohs > 5.5 Mohs. Squeegee only.',
        'Biofilm 75-85% متأصل = كشط = خدوش فوق خدوش SiO₂. Anti-Biofilm = يمنع.',
        'Sealant مزدوج التآكل = ماء بين طبقات = بقع دائمة. Marine = يقاوم.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص شركات الواجهات' },
        { entity: AMANA.SHARQIA.entity, url: AMANA.SHARQIA.url, role: 'اشتراطات المباني بالشرقية' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALMOHAIMED.name, quote: 'واجهات الظهران = مزدوج: NaCl بقع + SiO₂ خدش + 75-85% Biofilm. Deionized + Squeegee + Anti-Biofilm + Marine Sealant = بروتوكول مزدوج.', source: 'نصائح هندسية — واجهات مزدوجة' },
    ],
    saudiRegulations: [REGULATIONS.SBC_601],
    verificationBadges: [{ badge: '✔️ واجهات مرخصة', authority: 'منصة بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'Deionized Water', use: 'صفر أملاح — يُذيب NaCl' },
        { name: 'Squeegee مطاطي', use: 'يرفع SiO₂ بلا خدش' },
        { name: 'Anti-Biofilm', use: 'يمنع غشاء — 4 أشهر' },
        { name: 'Marine Sealant', use: 'يقاوم NaCl+SiO₂ — 7-10 سنوات' },
    ],
    hiddenObjections: [
        { fear: 'نظيفة.', solution: 'NaCl شفاف + Biofilm شفاف + SiO₂ ناعم. \"نظيفة\" = لا تُلاحظ. ربع سنوي يكشف.' },
        { fear: 'ماء وقماش.', solution: 'ماء = NaCl جديد. قماش + SiO₂ = خدش. 2 أخطاء.' },
    ],
    consumerEducation: [
        { myth: 'مثل الخبر.', truth: 'SiO₂ خدش 7 Mohs > زجاج 5.5 = فرق حرج.' },
        { myth: 'المطر.', truth: 'مطر الظهران = NaCl + SiO₂ = بقع+خدوش إضافية.' },
        { myth: 'سنوي.', truth: 'مزدوج أسبوعي + Biofilm شهري. ربع سنوي.' },
    ],
    relatedServices: [
        { slug: 'cleaning', context: 'تنظيف — مزدوج', priority: 1 },
        { slug: 'marble-polishing', context: 'رخام — NaCl+SiO₂', priority: 2 },
        { slug: 'office-cleaning', context: 'مكاتب — واجهات', priority: 3 },
        { slug: 'villas-cleaning', context: 'فلل — واجهات', priority: 4 },
        { slug: 'auto-cleaning', context: 'سيارات — NaCl+SiO₂', priority: 5 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف — مزدوج', priority: 6 },
        { slug: 'steam-cleaning', context: 'بخار — تعقيم', priority: 7 },
    ],
};
