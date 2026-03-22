import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../gov-references';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف شقق بالخبر — NaCl ملح + 85-95% عفن + Sabkha تربة ملحية + صراصير رطوبة (2026)',
        description: 'تنظيف شقق الخبر. NaCl ملح بحري يترسب على كل سطح. 85-95% عفن حمام وخزانة. Sabkha تربة ملحية من الأحذية. صراصير رطوبة. Anti-Salt + Dehumidifier + Anti-Fungal.',
        h1: 'تنظيف شقق بالخبر — الملح يترسب والرطوبة تُعفّن والتربة الملحية تتسلل',
        keywords: ['تنظيف شقق بالخبر', 'تنظيف شقة الخبر', 'شركة تنظيف شقق بالخبر', 'تنظيف شقق الخبر'],
    },
    content: {
        introduction: 'الشقة في الخبر تتسخ بـ 3 طبقات ساحلية مختلفة عن أي مدينة داخلية. الطبقة الأولى — NaCl ملح بحري: رذاذ الخليج يدخل من النوافذ ← يترسب كطبقة ملحية ناعمة على كل سطح ← يمتص رطوبة ← يُسرّع تآكل المعادن (صنابير + مقابض + أجهزة). غسل بماء مُقطر + Anti-Corrosion Spray على المعادن. الطبقة الثانية — 85-95% عفن: أعلى رطوبة في المملكة ← عفن Aspergillus في الحمام + الخزائن + خلف الثلاجة + زوايا النوافذ. Anti-Fungal + Dehumidifier. في أحياء الكورنيش: أقوى (ميزة ←→ عيب). الطبقة الثالثة — Sabkha تربة ملحية: تربة الخبر = Sabkha (ملحية) ← تدخل من الأحذية ← تترك بقع بيضاء ملحية على البلاط. مختلفة عن CaSO₄ الأحساء — NaCl أكثر تآكلاً. غسل + تجفيف فوري.',
        shortAnswer: 'على عكس [ممسحة ومنظف عادي] الذي لا يزيل الملح ولا يمنع العفن، يعتمد بروتوكولنا في خدمة [تنظيف الشقق] بمدينة [الخبر] على [غسل NaCl + Anti-Fungal + Dehumidifier + Anti-Corrosion]. ففي ظل [ملح بحري + 85-95% + Sabkha]، تتفاقم ظاهرة [تآكل + عفن + بقع]. لذا؛ يتدخل خبراؤنا عبر [بروتوكول ساحلي].',
        heroSubtitle: 'NaCl يتآكل + 85-95% عفن حتمي + Sabkha ملحية',
    },
    pricing: [
        { type: 'شقة ساحلية — بروتوكول ملحي', unit: 'شقة', minPrice: 200, maxPrice: 400, time: '3-5 ساعات' },
        { type: 'شقة + Dehumidifier عميق', unit: 'شقة', minPrice: 250, maxPrice: 450, time: '4-6 ساعات' },
        { type: 'بعد إخلاء — مكافحة عفن شاملة', unit: 'شقة', minPrice: 300, maxPrice: 600, time: '5-8 ساعات' },
        { type: 'عقد أسبوعي (4 زيارات/شهر)', unit: 'شهر', minPrice: 350, maxPrice: 700, time: '4 زيارات' },
    ],
    faq: [
        { question: 'ليش الملح يترسب داخل الشقة؟', answer: 'NaCl من رذاذ الخليج يُحمل بالهواء ← يدخل من أي فتحة (نافذة + باب + شق). في الكورنيش: 500 م = تركيز عالٍ. في الثقبة: أقل لكنه يصل. يترسب ← يمتص رطوبة ← يُسرّع تآكل.' },
        { question: 'عفن الحمام — كل المدن نفسها؟', answer: 'لا — الرياض 15% = يجف. الخبر 85-95% = لا يجف أبداً. الحمام يبقى رطباً ← عفن Aspergillus خلال أسبوع. Anti-Fungal + مروحة شفاط قوية = إلزامي.' },
        { question: 'Sabkha — غبار عادي؟', answer: 'Sabkha = تربة ملحية بحرية (NaCl + MgCl₂ + CaSO₄). أكثر تآكلاً من غبار الرياض (SiO₂ معدني). تدخل بالأحذية ← تترك بقع بيضاء. غسل عادي يُوزّعها — غسل + تجفيف = يُزيلها.' },
        { question: 'أحياء الكورنيش أسوأ؟', answer: 'أقرب للبحر = NaCl أكثر + رطوبة أعلى = عفن أسرع + تآكل أسرع. أحياء داخلية (الثقبة، العقربية) = أقل. لكن: 85-95% = عفن في كل الأحياء.' },
        { question: 'كم مرة تنظيف؟', answer: 'أسبوعي = الأمثل (NaCl يومي + رطوبة دائمة). أقل: كل أسبوعين. شهري = بعد تراكم ملح + عفن = أصعب 3×.' },
    ],
    expertTips: [
        'غسل NaCl بماء مُقطر أو مُفلتر — ماء الخبر نفسه يحتوي NaCl. استخدم RO أو مُقطر.',
        'Anti-Corrosion Spray على صنابير + مقابض + أجهزة — يحمي المعادن من NaCl. رخيص (10-20 ريال) = يمنع صدأ.',
        'Dehumidifier في غرفة النوم والحمام — يُخفض 85-95% إلى 50-60% = يمنع عفن.',
        'Anti-Fungal على زوايا النوافذ + خلف الثلاجة + خزائن الحمام — المواقع الأكثر عُرضة.',
        'تجفيف فوري بعد التنظيف — 85-95% = الأسطح لا تجف طبيعياً. التجفيف = الخطوة الأهم.',
    ],
    warnings: [
        'NaCl + رطوبة 85-95% على معادن = Galvanic Corrosion مُسرّعة. صنبور حمام جديد يصدأ خلال 6-12 شهراً بدون حماية.',
        'عفن Aspergillus في 85-95% = جراثيم في الهواء 24/7 = حساسية مزمنة + ربو. الأطفال وكبار السن الأكثر عُرضة.',
        'تنظيف بدون تجفيف في 85-95% = تنظيف يبقى رطباً ← عفن خلال 48 ساعة. التنظيف بلا تجفيف = تغذية العفن.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص شركات التنظيف' },
        { entity: AMANA.SHARQIA.entity, url: AMANA.SHARQIA.url, role: 'اشتراطات النظافة بالمنطقة الشرقية' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALMISNID.name, quote: 'شقة الخبر = 3 طبقات ساحلية: NaCl يتآكل + 85-95% عفن حتمي + Sabkha ملحية. بروتوكول ساحلي = غسل + تجفيف + Anti-Fungal + Anti-Corrosion. لا يشبه أي مدينة داخلية.', source: 'جغرافيا المناخ — التنظيف الساحلي' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [
        { badge: '✔️ تنظيف شقق مرخص', authority: 'منصة بلدي', icon: 'shield-check' },
        { badge: '✔️ بروتوكول ساحلي', authority: 'معتمد داخلياً', icon: 'badge-check' },
    ],
    equipment: [
        { name: 'RO Water (ماء مُفلتر)', use: 'غسل بلا NaCl — ماء الخبر نفسه ملحي' },
        { name: 'Anti-Corrosion Spray', use: 'يحمي المعادن (صنابير/مقابض) من NaCl — فعّال 3-6 أشهر' },
        { name: 'Anti-Fungal Spray', use: 'يمنع Aspergillus في 85-95% — فعّال 3-4 أشهر' },
        { name: 'Dehumidifier', use: 'يُخفض رطوبة الغرفة من 85-95% إلى 50-60%' },
    ],
    commonConcerns: [
        { concern: 'منظف عادي يكفي.', solution: 'المنظف يُنظف — لا يحمي من NaCl ولا عفن ولا تآكل. 3 مشاكل بعد التنظيف = تعود. الحماية = الفرق.' },
        { concern: 'المكيف يُجفف.', solution: 'المكيف يُبرّد — لكن 85-95% = تكثّف. المبخر نفسه رطب = عفن. المكيف ≠ Dehumidifier.' },
    ],
    consumerEducation: [
        { myth: 'الخبر مثل الرياض.', truth: 'NaCl ≠ SiO₂. 85-95% ≠ 15%. Sabkha ≠ رمل. 3 فروقات = بروتوكول مختلف تماماً.' },
        { myth: 'عفن = نظافة ضعيفة.', truth: '85-95% = عفن حتمي حتى في أنظف شقة. العفن ≠ نظافة — بل رطوبة. Anti-Fungal = الحل.' },
        { myth: 'شهري يكفي.', truth: 'NaCl يومي + رطوبة 24/7 + Sabkha يومية. شهري = 3 أسابيع تراكم. أسبوعي = الأمثل.' },
    ],
    relatedServices: [
        { slug: 'cleaning', context: 'تنظيف — بروتوكول ساحلي', priority: 1 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف — عفن + NaCl', priority: 2 },
        { slug: 'carpet-cleaning', context: 'سجاد — ملح + عفن', priority: 3 },
        { slug: 'steam-cleaning', context: 'بخار — تعقيم', priority: 4 },
        { slug: 'pest-control', context: 'حشرات — صراصير رطوبة', priority: 5 },
        { slug: 'marble-polishing', context: 'رخام — NaCl', priority: 6 },
        { slug: 'sofa-cleaning', context: 'كنب — عفن + ملح', priority: 7 },
    ],
};
