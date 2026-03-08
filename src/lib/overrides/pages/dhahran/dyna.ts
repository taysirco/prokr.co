import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'دينا نقل بالظهران — NaCl+SiO₂ حمولات ثقيلة + 75-85% تكثّف + أرامكو تصاريح (2026)',
        description: 'دينا نقل الظهران. NaCl+SiO₂ على حمولات ثقيلة مكشوفة. 75-85% تكثّف معدات. أرامكو تصاريح SAPMT. Tarpaulin + VCI + Ratchet + Transit Bolts.',
        h1: 'دينا نقل بالظهران — حمولات ثقيلة مزدوجة: ملح+رمل+رطوبة',
        keywords: ['دينا نقل بالظهران', 'دينا نقل الظهران', 'شركة دينا نقل بالظهران'],
    },
    content: {
        introduction: 'الدينا في الظهران = نقل ثقيل في بيئة مزدوجة. السبب الأول — NaCl+SiO₂ على حمولة ثقيلة: معدات صناعية + مواد بناء + قطع أرامكو ← مكشوفة ← NaCl يتآكل + SiO₂ يخدش = تلف مُركّب. Tarpaulin + VCI. السبب الثاني — 75-85% تكثّف: معدات باردة تخرج لـ 45°م + 75-85% = تكثّف ← Short Circuit. VCI + Silica. السبب الثالث — أرامكو تصاريح: مواقع أرامكو = SAPMT + سلامة + فحص. نقل مُنظّم. السبب الرابع — طرق صناعية: الظهران ↔ الجبيل الصناعية / أبقيق = طرق ملحية+رملية. Tarpaulin إلزامي.',
        shortAnswer: 'على عكس [دينا مكشوفة] التي تُعرّض الحمولة لأوساخ مزدوجة، يعتمد بروتوكولنا في خدمة [الدينا] بمدينة [الظهران] على [Tarpaulin + VCI + تصاريح + Ratchet]. ففي ظل [NaCl+SiO₂ + 75-85% + أرامكو]، تتفاقم ظاهرة [تآكل+خدش + تكثّف + تنظيم]. لذا؛ يتدخل خبراؤنا عبر [دينا مزدوجة مُجهّزة].',
        heroSubtitle: 'NaCl+SiO₂ مزدوج + 75-85% تكثّف + أرامكو SAPMT',
    },
    pricing: [
        { type: 'دينا داخل الظهران', unit: 'رحلة', minPrice: 130, maxPrice: 310, time: '1-2 ساعة' },
        { type: 'الظهران ↔ الدمام/الخبر', unit: 'رحلة', minPrice: 190, maxPrice: 420, time: '1-2 ساعة' },
        { type: 'نقل صناعي (مواقع أرامكو)', unit: 'رحلة', minPrice: 270, maxPrice: 650, time: '2-4 ساعات' },
        { type: 'نقل مُنظّم + تصاريح', unit: 'رحلة', minPrice: 370, maxPrice: 850, time: '2-6 ساعات' },
    ],
    faq: [
        { question: 'NaCl+SiO₂ — على حديد بناء؟', answer: 'SiO₂ يخدش Coating ← NaCl يتآكل المكشوف. حديد تسليح = صدأ قبل البناء. Tarpaulin = 20-50 ريال vs آلاف.' },
        { question: 'VCI — للمعدات الصناعية؟', answer: 'Volatile Corrosion Inhibitor = بخاري يحمي بدون تلامس. مثالي لمعدات أرامكو الحساسة.' },
        { question: 'تصاريح SAPMT — متى؟', answer: 'مواقع أرامكو + المناطق الصناعية المُقيّدة. نُجهّز كل التصاريح مُسبقاً.' },
        { question: 'Transit Bolts — مطلوبة؟', answer: 'معدات بأجزاء متحركة + طرق صناعية = اهتزاز. Transit Bolts = تثبيت.' },
        { question: 'الظهران ↔ الجبيل الصناعية؟', answer: '90 كم ← ساعة. طريق ساحلي+صناعي = NaCl+SiO₂ مُكثّف. Tarpaulin + VCI إلزامي.' },
    ],
    expertTips: [
        'Tarpaulin مُحكم — NaCl+SiO₂ في دقائق.',
        'VCI للمعدات الصناعية — يحمي بدون تلامس.',
        'Transit Bolts — أجزاء متحركة + طرق = تلف.',
        'تصاريح مُسبقة — بدون تأخير.',
        'Ratchet — لا حبال. ثابت.',
    ],
    warnings: [
        'معدات أرامكو مكشوفة + NaCl+SiO₂ = تآكل+خدش = خسائر 10,000-100,000 ريال.',
        'حديد بناء + مزدوج = صدأ+خدش خلال ساعات.',
        'تكثّف + معدات إلكترونية = Short Circuit = تلف فوري.',
    ],
    trustAnchors: [
        { ...GOV.TGA, role: 'ترخيص النقل الثقيل' },
        { entity: AMANA.SHARQIA.entity, url: AMANA.SHARQIA.url, role: 'اشتراطات النقل بالشرقية' },
    ],
    expertReviewer: EXPERTS.ALSHABNAN,
    expertCitations: [
        { expert: EXPERTS.ALZUWAYED.name, quote: 'دينا الظهران = مزدوجة+صناعية: NaCl+SiO₂ + أرامكو. Tarpaulin + VCI + تصاريح + Ratchet = بروتوكول.', source: 'هيئة النقل — النقل الثقيل المزدوج' },
    ],
    saudiRegulations: [REGULATIONS.TGA_LICENSE],
    verificationBadges: [{ badge: '✔️ نقل ثقيل مرخص', authority: 'هيئة النقل', icon: 'shield-check' }],
    equipment: [
        { name: 'Tarpaulin', use: 'يحمي من NaCl+SiO₂' },
        { name: 'VCI', use: 'حماية بخارية للمعدات' },
        { name: 'Ratchet + Transit Bolts', use: 'ربط + تثبيت' },
    ],
    hiddenObjections: [
        { fear: 'أي دينا.', solution: 'بدون Tarpaulin+VCI = مزدوج يصل. 50-200 ريال = يحمي آلاف.' },
        { fear: 'قصيرة.', solution: 'NaCl+SiO₂ في دقائق. قصيرة ≠ آمنة.' },
    ],
    counterNarratives: [
        { myth: 'مثل الرياض.', truth: 'NaCl+SiO₂+رطوبة = 3 تهديدات. الرياض = SiO₂ فقط.' },
        { myth: 'غطاء صعب.', truth: 'Tarpaulin 5 دقائق. 20-50 ريال. يحمي آلاف.' },
        { myth: 'الدينا ما تتأثر.', truth: 'الحمولة تتأثر. الخسارة = الحمولة.' },
    ],
    relatedServices: [
        { slug: 'dabab', context: 'دباب — أخف', priority: 1 },
        { slug: 'furniture-moving', context: 'نقل عفش', priority: 2 },
        { slug: 'furniture-storage', context: 'تخزين', priority: 3 },
        { slug: 'auto-cleaning', context: 'غسيل', priority: 4 },
        { slug: 'cleaning', context: 'تنظيف', priority: 5 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 6 },
        { slug: 'pest-control', context: 'حشرات', priority: 7 },
    ],
};
