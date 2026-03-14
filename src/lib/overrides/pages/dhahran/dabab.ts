import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'دباب نقل بالظهران — NaCl+SiO₂ حمولة مزدوجة + 75-85% تكثّف + طرق صناعية أرامكو (2026)',
        description: 'دباب نقل الظهران. NaCl+SiO₂ يتآكل+يخدش الحمولة. 75-85% تكثّف. طرق صناعية أرامكو. غطاء + EPE + Silica Gel + تتبع.',
        h1: 'دباب نقل بالظهران — حمولة مزدوجة: ملح يتآكل ورمل يخدش',
        keywords: ['دباب نقل بالظهران', 'دباب نقل الظهران', 'شركة دباب نقل بالظهران'],
    },
    content: {
        introduction: 'الدباب في الظهران يواجه أوساخ مزدوجة. الأولى — NaCl+SiO₂ على حمولة مكشوفة: رذاذ بحري (NaCl) + رمل صحراوي (SiO₂) يترسبان على أي حمولة مكشوفة. NaCl يتآكل + SiO₂ يخدش. معاً = تلف مُركّب. غطاء بلاستيكي مُحكم + EPE. الثانية — 75-85% تكثّف: أجهزة إلكترونية باردة في هواء رطب حار = تكثّف ← Short Circuit. Stretch Film + Silica Gel. الثالثة — طرق صناعية أرامكو: المنطقة الصناعية + مواقع أرامكو = طرق ملحية+رملية. رذاذ مُكثّف.',
        shortAnswer: 'على عكس [دباب مكشوف] الذي يُعرّض الحمولة لأوساخ مزدوجة، يعتمد بروتوكولنا في خدمة [الدباب] بمدينة [الظهران] على [غطاء + EPE + Silica + تتبع]. ففي ظل [NaCl+SiO₂ + 75-85% + طرق أرامكو]، تتفاقم ظاهرة [تآكل+خدش + تكثّف]. لذا؛ يتدخل خبراؤنا عبر [دباب مزدوج محمي].',
        heroSubtitle: 'NaCl+SiO₂ مزدوج + 75-85% تكثّف + طرق أرامكو صناعية',
    },
    pricing: [
        { type: 'نقل داخل الظهران', unit: 'رحلة', minPrice: 35, maxPrice: 80, time: '30-60 دقيقة' },
        { type: 'الظهران ↔ الدمام/الخبر', unit: 'رحلة', minPrice: 50, maxPrice: 120, time: '30-90 دقيقة' },
        { type: 'توصيل مناطق أرامكو', unit: 'رحلة', minPrice: 65, maxPrice: 140, time: '30-90 دقيقة' },
        { type: 'اشتراك شهري (8 رحلات)', unit: 'شهر', minPrice: 210, maxPrice: 520, time: '8 رحلات' },
    ],
    faq: [
        { question: 'NaCl+SiO₂ — كلاهما يصل؟', answer: 'نعم — الظهران ساحلي-صحراوي. NaCl من البحر + SiO₂ من الصحراء = كلاهما في الهواء. دقائق مكشوف = NaCl يلتصق + SiO₂ يخدش.' },
        { question: 'تكثّف — في 75-85%؟', answer: 'أقل من الخبر (85-95%) لكن: جهاز بارد 20°م ← 45°م + 75-85% = نقطة الندى ← تكثّف. Silica Gel = يمتص.' },
        { question: 'طرق أرامكو — تصاريح؟', answer: 'بعض مواقع أرامكو = تصاريح SAPMT. نحن مُجهّزون بتصاريح مُسبقة.' },
        { question: 'ثلاثية الظهران/الدمام/الخبر؟', answer: '15-30 كم بين المدن. مسافة قصيرة لكن: NaCl+SiO₂ يصل في دقائق.' },
        { question: 'سعر ثابت؟', answer: 'داخل المدينة: ثابت. بين ثلاثية: بالمسافة. اشتراك = أفضل إذا 3+/شهر.' },
    ],
    expertTips: [
        'غطاء مُحكم — حتى 5 دقائق. NaCl+SiO₂ لا ينتظر.',
        'EPE بين القطع — يمنع خدش SiO₂ بين القطع.',
        'Silica Gel للإلكترونيات — يمتص تكثّف 75-85%.',
        'تتبع GPS — ثلاثية = طرق متعددة.',
        'تصاريح أرامكو مُسبقة — بدون تأخير.',
    ],
    warnings: [
        'حمولة معدنية مكشوفة + NaCl+SiO₂ = تآكل+خدش = تلف مُركّب في دقائق.',
        'إلكترونيات + 75-85% = تكثّف ← Short Circuit. Silica = يمنع.',
        'طرق أرامكو = SiO₂ أكثر = خدش أسرع. غطاء إلزامي.',
    ],
    trustAnchors: [
        { ...GOV.TGA, role: 'ترخيص النقل' },
        { entity: AMANA.SHARQIA.entity, url: AMANA.SHARQIA.url, role: 'اشتراطات النقل بالشرقية' },
    ],
    expertReviewer: EXPERTS.ALSHABNAN,
    expertCitations: [
        { expert: EXPERTS.ALZUWAYED.name, quote: 'دباب الظهران = مزدوج: NaCl+SiO₂ يتآكل+يخدش. غطاء + EPE + Silica = بروتوكول مزدوج.', source: 'هيئة النقل — النقل في البيئة المزدوجة' },
    ],
    saudiRegulations: [REGULATIONS.TGA_LICENSE],
    verificationBadges: [{ badge: '✔️ نقل مرخص', authority: 'هيئة النقل', icon: 'shield-check' }],
    equipment: [
        { name: 'غطاء مُحكم', use: 'يحمي من NaCl+SiO₂ الجوي' },
        { name: 'EPE Foam', use: 'يمنع خدش SiO₂ بين القطع' },
        { name: 'Silica Gel', use: 'يمتص تكثّف 75-85%' },
        { name: 'GPS تتبع', use: 'ثلاثية = طرق متعددة' },
    ],
    hiddenObjections: [
        { fear: 'مسافة قصيرة.', solution: 'NaCl+SiO₂ في دقائق. قصيرة ≠ آمنة.' },
        { fear: 'أي دباب.', solution: 'بدون غطاء + EPE = مزدوج يصل. 10-20 ريال = يحمي آلاف.' },
    ],
    consumerEducation: [
        { myth: 'مثل الخبر.', truth: 'SiO₂ إضافي = خدش مزدوج. مختلف.' },
        { myth: 'غطاء ما يحتاج.', truth: 'NaCl+SiO₂ جوي. فتح = تلف.' },
        { myth: 'أي دباب نفسه.', truth: 'غطاء + EPE + Silica = الفرق.' },
    ],
    relatedServices: [
        { slug: 'dyna', context: 'دينا — حمولات أثقل', priority: 1 },
        { slug: 'furniture-moving', context: 'نقل عفش — أثاث', priority: 2 },
        { slug: 'auto-cleaning', context: 'غسيل — بعد النقل', priority: 3 },
        { slug: 'cleaning', context: 'تنظيف — مزدوج', priority: 4 },
        { slug: 'furniture-storage', context: 'تخزين — حماية', priority: 5 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف — تركيب', priority: 6 },
        { slug: 'pest-control', context: 'حشرات — فحص', priority: 7 },
    ],
};
