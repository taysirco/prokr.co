import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'نقل أثاث بالخبر — NaCl يُصدّئ أثناء النقل + 85-95% تكثّف + Sabkha طرق + ثلاثية (2026)',
        description: 'نقل أثاث الخبر. NaCl يُصدّئ أثاث معدني أثناء النقل. 85-95% تكثّف على أجهزة. Sabkha طرق. نقل داخل ثلاثية (خبر/دمام/ظهران). تغليف بحري + Stretch + تتبع.',
        h1: 'نقل أثاث بالخبر — تغليف بحري: ملح يُصدّئ ورطوبة تُكثّف وطرق ملحية',
        keywords: ['نقل أثاث بالخبر', 'نقل عفش الخبر', 'شركة نقل أثاث بالخبر'],
    },
    content: {
        introduction: 'نقل الأثاث في الخبر مختلف لـ 4 أسباب ساحلية. الأول — NaCl يُصدّئ أثناء النقل: أثاث من بيت مُكيّف ← يخرج لهواء NaCl + 85-95% ← المعادن (مفصلات + أسرّة + طاولات) تبدأ بالصدأ خلال ساعات. تغليف Stretch Film + VCI = حماية. الثاني — 85-95% تكثّف: أجهزة باردة (ثلاجة + غسالة + تلفزيون) تخرج من 20°م ← 45°م + 85-95% = تكثّف على الدوائر. Silica Gel + Stretch. الثالث — Sabkha طرق: طرق خارجية + صناعية = رذاذ ملحي. حتى شاحنة مُغلقة = شقوق تسمح. الرابع — ثلاثية: الخبر ↔ الدمام ↔ الظهران = أكثر تنقلات بين 3 مدن. النقل الأكثر شيوعاً = بين ثلاثية. مسافات قصيرة لكن NaCl سريع.',
        shortAnswer: 'على عكس [نقل بدون تغليف بحري] الذي يُعرّض الأثاث لـ NaCl والتكثّف، يعتمد بروتوكولنا في خدمة [نقل الأثاث] بمدينة [الخبر] على [Stretch Film + VCI + Silica + تتبع]. ففي ظل [NaCl + 85-95% + Sabkha + ثلاثية]، تتفاقم ظاهرة [صدأ + تكثّف + ملح + مسافة]. لذا؛ يتدخل خبراؤنا عبر [نقل بحري مُغلّف].',
        heroSubtitle: 'NaCl صدأ + 85-95% تكثّف + Sabkha + ثلاثية خبر/دمام/ظهران',
    },
    pricing: [
        { type: 'نقل داخل الخبر (شقة)', unit: 'رحلة', minPrice: 350, maxPrice: 800, time: '3-6 ساعات' },
        { type: 'نقل ثلاثية (خبر ↔ دمام ↔ ظهران)', unit: 'رحلة', minPrice: 500, maxPrice: 1200, time: '4-8 ساعات' },
        { type: 'فك + تغليف بحري + نقل + تركيب', unit: 'باقة', minPrice: 800, maxPrice: 2000, time: '6-12 ساعة' },
        { type: 'نقل فيلا كاملة', unit: 'فيلا', minPrice: 1200, maxPrice: 3500, time: '8-16 ساعة' },
    ],
    faq: [
        { question: 'NaCl يصل الأثاث المُغلّف — كيف؟', answer: 'شاحنة ليست مُحكمة 100%. فتحات تهوية + أبواب = NaCl يدخل. Stretch Film على كل قطعة = حماية ثانية. + VCI داخل التغليف = حماية ثالثة.' },
        { question: 'ثلاثية — ليش مختلفة؟', answer: 'أكثر نقل في المملكة بين 3 مدن مُتصلة (20-40 كم). المسافة قصيرة = يعتقد الناس \"ما يحتاج تغليف\". لكن: NaCl + 85-95% = الضرر يبدأ في دقائق.' },
        { question: 'تكثّف — على الثلاجة؟', answer: 'الثلاجة من 20°م (داخل) ← 45°م + 85-95% (خارج) = تكثّف على الكمبريسور والدوائر. 30 دقيقة كافية لـ Short Circuit. Stretch + Silica = يحمي.' },
        { question: 'فك وتركيب — ليش مو بنفسي؟', answer: 'فني مُدرّب يعرف: Transit Bolts للغسالة + براغي حساسة + تغليف VCI للمعادن. بدون تدريب: براغي تضيع + تغليف بدون Silica + Transit Bolts = ضمان تلف.' },
        { question: 'تأمين؟', answer: 'تأمين يُغطي التلف أثناء النقل. في الخبر: NaCl + تكثّف = مخاطر إضافية. تأمين = ضمان مالي. اختر شركة بتأمين.' },
    ],
    expertTips: [
        'Stretch Film كل قطعة — حتى داخل شاحنة مُغلقة. NaCl يدخل من أي فتحة.',
        'VCI داخل تغليف المعادن — يحمي من الصدأ بدون تلامس. أفضل من الزيت.',
        'Silica Gel مع كل جهاز إلكتروني — يمتص تكثّف. كيس واحد = حماية.',
        'Transit Bolts للغسالة — حوض الغسالة يتحرك. بدون Transit Bolts = تلف محتمل.',
        'تتبع GPS — ثلاثية = طرق متعددة. التتبع = راحة بال.',
    ],
    warnings: [
        'أثاث معدني بدون Stretch في الخبر = قد يصل صادئاً. NaCl + 85-95% = أسرع صدأ في المملكة.',
        'ثلاجة/غسالة بدون Silica = تكثّف ← Short Circuit ← تلف 1,000-5,000 ريال. Silica = 5-10 ريال.',
        'نقل بدون Transit Bolts = ضمان تلف حوض الغسالة. 10 ريال Transit = يحمي 2,000 ريال غسالة.',
    ],
    trustAnchors: [
        { ...GOV.TGA, role: 'ترخيص نقل الأثاث' },
        { entity: AMANA.SHARQIA.entity, url: AMANA.SHARQIA.url, role: 'اشتراطات النقل بالشرقية' },
    ],
    expertReviewer: EXPERTS.ALSHABNAN,
    expertCitations: [
        { expert: EXPERTS.ALZUWAYED.name, quote: 'نقل أثاث الخبر = بحري: NaCl يصل في دقائق + 85-95% تكثّف + Sabkha + ثلاثية. Stretch + VCI + Silica + Transit = بروتوكول ساحلي لا يُختصر.', source: 'هيئة النقل — نقل الأثاث الساحلي' },
    ],
    saudiRegulations: [REGULATIONS.TGA_LICENSE],
    verificationBadges: [
        { badge: '✔️ نقل أثاث مرخص', authority: 'هيئة النقل', icon: 'shield-check' },
        { badge: '✔️ تغليف بحري', authority: 'معتمد داخلياً', icon: 'badge-check' },
    ],
    equipment: [
        { name: 'Stretch Film', use: 'يحمي كل قطعة من NaCl + رطوبة + خدش' },
        { name: 'VCI (مثبط تآكل بخاري)', use: 'يحمي المعادن بدون تلامس — داخل التغليف' },
        { name: 'Silica Gel', use: 'يمتص تكثّف 85-95% — يحمي الإلكترونيات' },
        { name: 'Transit Bolts', use: 'يُثبّت أجزاء متحركة (غسالات/معدات)' },
    ],
    hiddenObjections: [
        { fear: 'المسافة قصيرة.', solution: 'NaCl في دقائق. 85-95% تكثّف في دقائق. قصيرة ≠ آمنة.' },
        { fear: 'شاحنة مُغلقة.', solution: 'ليست مُحكمة 100%. فتحات = NaCl. Stretch = حماية ثانية.' },
    ],
    consumerEducation: [
        { myth: 'نقل الخبر مثل الرياض.', truth: 'NaCl + 85-95% + Sabkha = 3 تهديدات لا توجد في الرياض. مختلف.' },
        { myth: 'تغليف زيادة.', truth: 'التغليف = 50-100 ريال. صدأ + تكثّف = 500-5,000 ريال. 1-10%.' },
        { myth: 'ثلاثية = داخلي.', truth: 'بين مدن = طرق خارجية = Sabkha + NaCl أعلى. أصعب من داخل المدينة.' },
    ],
    relatedServices: [
        { slug: 'furniture-cleaning', context: 'أثاث — تنظيف بعد النقل', priority: 1 },
        { slug: 'furniture-storage', context: 'تخزين — حماية NaCl', priority: 2 },
        { slug: 'dabab', context: 'دباب — قطع خفيفة', priority: 3 },
        { slug: 'dyna', context: 'دينا — قطع ثقيلة', priority: 4 },
        { slug: 'cleaning', context: 'تنظيف — المنزل الجديد', priority: 5 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف — تركيب', priority: 6 },
        { slug: 'pest-control', context: 'حشرات — فحص', priority: 7 },
    ],
};
