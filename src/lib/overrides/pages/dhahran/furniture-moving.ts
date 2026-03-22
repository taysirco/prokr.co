import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../gov-references';

export const override: PageOverride = {
    meta: {
        title: 'نقل أثاث بالظهران — NaCl+SiO₂ تآكل+خدش أثناء النقل + 75-85% تكثّف + ثلاثية (2026)',
        description: 'نقل أثاث الظهران. NaCl+SiO₂ مزدوج أثناء النقل. 75-85% تكثّف أجهزة. ثلاثية (ظهران/دمام/خبر). أرامكو. Stretch + VCI + Silica + EPE.',
        h1: 'نقل أثاث بالظهران — مزدوج أثناء النقل: ملح يتآكل ورمل يخدش',
        keywords: ['نقل أثاث بالظهران', 'نقل عفش الظهران', 'شركة نقل أثاث بالظهران'],
    },
    content: {
        introduction: 'نقل الأثاث في الظهران يواجه 4 تحديات مزدوجة. الأولى — NaCl+SiO₂ أثناء النقل: أثاث يخرج من بيت مُكيّف ← يدخل هواء NaCl+SiO₂ ← NaCl يتآكل بينما SiO₂ يخدش. Stretch Film + EPE. الثانية — 75-85% تكثّف: أجهزة 20°م ← 45°م + 75-85% = تكثّف. Silica Gel. الثالثة — ثلاثية: الظهران ↔ الدمام ↔ الخبر = أكثر نقلات. 15-30 كم = قصيرة لكن NaCl+SiO₂ في دقائق. الرابعة — أرامكو: مُجمّعات = معايير + تصاريح + مواعيد. بروتوكول مُنظّم.',
        shortAnswer: 'على عكس [نقل بدون تغليف] الذي يُعرّض لمزدوج، يعتمد بروتوكولنا في خدمة [نقل الأثاث] بمدينة [الظهران] على [Stretch + VCI + Silica + EPE + تتبع]. ففي ظل [NaCl+SiO₂ + 75-85% + ثلاثية]، تتفاقم ظاهرة [تآكل+خدش + تكثّف]. لذا؛ يتدخل خبراؤنا عبر [نقل مزدوج مُغلّف].',
        heroSubtitle: 'NaCl+SiO₂ مزدوج + 75-85% تكثّف + ثلاثية + أرامكو',
    },
    pricing: [
        { type: 'نقل داخل الظهران', unit: 'رحلة', minPrice: 370, maxPrice: 830, time: '3-6 ساعات' },
        { type: 'ثلاثية (ظهران ↔ دمام ↔ خبر)', unit: 'رحلة', minPrice: 520, maxPrice: 1250, time: '4-8 ساعات' },
        { type: 'فك + تغليف مزدوج + نقل + تركيب', unit: 'باقة', minPrice: 830, maxPrice: 2100, time: '6-12 ساعة' },
        { type: 'نقل فيلا أرامكو', unit: 'فيلا', minPrice: 1250, maxPrice: 3700, time: '8-16 ساعة' },
    ],
    faq: [
        { question: 'NaCl+SiO₂ — أسوأ من NaCl فقط؟', answer: 'نعم — SiO₂ يخدش Coating ← NaCl يتآكل المكشوف. في الخبر = NaCl فقط. في الظهران = مزدوج.' },
        { question: 'ثلاثية — ليش احتياط؟', answer: '15-30 كم = \"قصيرة\". لكن: NaCl+SiO₂ في دقائق + 75-85% تكثّف في دقائق. قصيرة ≠ آمنة.' },
        { question: 'أرامكو — تصاريح؟', answer: 'مُجمّعات أرامكو = أوقات دخول + تصاريح. نُنسّق مُسبقاً.' },
        { question: 'تكثّف — على الثلاجة؟', answer: '20°م ← 45°م + 75-85% = تكثّف على الكمبريسور. 30 دقيقة = Short Circuit محتمل. Stretch + Silica.' },
        { question: 'Transit Bolts — المغسلة؟', answer: 'حوض الغسالة يتحرك. بدون Transit = تلف محتمل. 10 ريال = يحمي 2,000.' },
    ],
    expertTips: [
        'Stretch Film كل قطعة — يحمي من NaCl+SiO₂ الجوي.',
        'VCI داخل تغليف المعادن — Anti-Corrosion بدون تلامس.',
        'Silica Gel مع كل إلكتروني — يمتص تكثّف 75-85%.',
        'EPE بين القطع — يمنع خدش SiO₂ بين القطع.',
        'Transit Bolts + تتبع GPS — ثلاثية = طرق متعددة.',
    ],
    warnings: [
        'أثاث معدني بدون Stretch + NaCl+SiO₂ = صدأ+خدش في ساعات.',
        'ثلاجة بدون Silica + 75-85% = تكثّف ← Short Circuit.',
        'نقل بدون EPE + SiO₂ بين القطع = خدوش متبادلة.',
    ],
    trustAnchors: [
        { ...GOV.TGA, role: 'ترخيص نقل الأثاث' },
        { entity: AMANA.SHARQIA.entity, url: AMANA.SHARQIA.url, role: 'اشتراطات النقل بالشرقية' },
    ],
    expertReviewer: EXPERTS.ALSHABNAN,
    expertCitations: [
        { expert: EXPERTS.ALZUWAYED.name, quote: 'نقل أثاث الظهران = مزدوج: NaCl+SiO₂ يتآكل+يخدش + 75-85% تكثّف + ثلاثية + أرامكو. Stretch + VCI + Silica + EPE = بروتوكول مزدوج.', source: 'هيئة النقل — النقل المزدوج' },
    ],
    saudiRegulations: [REGULATIONS.TGA_LICENSE],
    verificationBadges: [
        { badge: '✔️ نقل مرخص', authority: 'هيئة النقل', icon: 'shield-check' },
        { badge: '✔️ تغليف مزدوج', authority: 'معتمد داخلياً', icon: 'badge-check' },
    ],
    equipment: [
        { name: 'Stretch Film', use: 'يحمي من NaCl+SiO₂ + خدش' },
        { name: 'VCI', use: 'Anti-Corrosion بخاري للمعادن' },
        { name: 'Silica Gel', use: 'يمتص تكثّف 75-85%' },
        { name: 'EPE Foam', use: 'يمنع خدش SiO₂ بين القطع' },
    ],
    commonConcerns: [
        { concern: 'قصيرة.', solution: 'NaCl+SiO₂ في دقائق. 75-85% تكثّف في دقائق. قصيرة ≠ آمنة.' },
        { concern: 'شاحنة مُغلقة.', solution: 'ليست 100% مُحكمة. NaCl+SiO₂ يدخل. Stretch = حماية ثانية.' },
    ],
    consumerEducation: [
        { myth: 'مثل الخبر.', truth: 'SiO₂ إضافي = خدش. EPE = خطوة إضافية. مختلف.' },
        { myth: 'تغليف زيادة.', truth: 'تغليف = 50-150 ريال. صدأ+خدش+تكثّف = 500-5,000.' },
        { myth: 'ثلاثية = داخلي.', truth: 'بين مدن = طرق ملحية+رملية = NaCl+SiO₂ أعلى.' },
    ],
    relatedServices: [
        { slug: 'furniture-cleaning', context: 'أثاث — تنظيف بعد النقل', priority: 1 },
        { slug: 'furniture-storage', context: 'تخزين — حماية', priority: 2 },
        { slug: 'dabab', context: 'دباب — خفيف', priority: 3 },
        { slug: 'dyna', context: 'دينا — ثقيل', priority: 4 },
        { slug: 'cleaning', context: 'تنظيف — المنزل الجديد', priority: 5 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف — تركيب', priority: 6 },
        { slug: 'pest-control', context: 'حشرات — فحص', priority: 7 },
    ],
};
