import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف بالساعة بالخبر — عاملة ساحلية: NaCl إزالة + Anti-Fungal 85-95% + تجفيف إلزامي (2026)',
        description: 'تنظيف بالساعة الخبر. عاملة مُدرّبة على بروتوكول ساحلي: غسل NaCl بماء RO + Anti-Fungal + Anti-Corrosion + تجفيف Dehumidifier. لا ممسحة + ماء عادي.',
        h1: 'تنظيف بالساعة بالخبر — عاملة مُدرّبة: تعرف NaCl وعفن 85-95% وتجفيف',
        keywords: ['تنظيف بالساعة بالخبر', 'عاملة تنظيف الخبر', 'شركة تنظيف بالساعة بالخبر'],
    },
    content: {
        introduction: 'العاملة بالساعة في الخبر يجب أن تعرف 3 فروقات ساحلية. الفرق الأول — ماء الخبر ≠ ماء الرياض: ماء الخبر = NaCl ← إذا مسحت به = تترك ملح جديد على كل سطح. ماء RO/مُقطر = إلزامي للمسح. الفرق الثاني — 85-95% = تجفيف ≠ اختياري: الأسطح لا تجف طبيعياً. العاملة تمسح ← تجفف بـ Microfiber جاف ← Dehumidifier يعمل. بدون تجفيف = عفن خلال 48 ساعة. الفرق الثالث — Anti-Fungal ليس ترفاً: الحمام + المطبخ + الخزائن = عفن حتمي في 85-95%. Anti-Fungal = خطوة روتينية — ليس كيماوي خاص.',
        shortAnswer: 'على عكس [عاملة بممسحة وماء عادي] التي تترك NaCl وتُغذي العفن، يعتمد بروتوكولنا في خدمة [التنظيف بالساعة] بمدينة [الخبر] على [عاملة ساحلية: RO + Anti-Fungal + تجفيف]. ففي ظل [NaCl + 85-95%]، تتفاقم ظاهرة [ملح + عفن]. لذا؛ يتدخل خبراؤنا عبر [عاملة ساحلية مُدرّبة].',
        heroSubtitle: 'ماء RO + Anti-Fungal 85-95% + تجفيف إلزامي + Anti-Corrosion',
    },
    pricing: [
        { type: 'ساعة واحدة — عاملة ساحلية', unit: 'ساعة', minPrice: 30, maxPrice: 50, time: '1 ساعة' },
        { type: '4 ساعات (حد أدنى)', unit: 'حصة', minPrice: 100, maxPrice: 180, time: '4 ساعات' },
        { type: '8 ساعات — يوم كامل', unit: 'يوم', minPrice: 180, maxPrice: 300, time: '8 ساعات' },
        { type: 'عقد أسبوعي (4 زيارات/شهر)', unit: 'شهر', minPrice: 350, maxPrice: 700, time: '4 زيارات' },
    ],
    faq: [
        { question: 'لازم ماء RO — مو عادي؟', answer: 'ماء الخبر = NaCl. تمسح ← NaCl جديد ← يمتص رطوبة ← صدأ + عفن. كل مسحة = تلويث. RO = صفر NaCl. الفرق: نظيف فعلاً vs \"نظيف\" بالملح.' },
        { question: 'كل هذا لعاملة بالساعة؟', answer: 'في الرياض: ممسحة + ماء + منظف = يكفي. في الخبر: 3 خطوات إضافية (RO + Anti-Fungal + تجفيف). بدونها: التنظيف = 50% + تلويث.' },
        { question: 'الأدوات عندي أو عندكم؟', answer: 'عندنا = العاملة تأتي بـ RO + Anti-Fungal + Microfiber + Anti-Corrosion. لا تحتاج شراء شيء.' },
        { question: 'التجفيف بعد كل غرفة؟', answer: 'نعم — 85-95% = السطح يبقى رطباً. كل غرفة: مسح ← تجفيف Microfiber ← Dehumidifier (إذا متوفر). بدون تجفيف = تنظيف يُغذي العفن.' },
        { question: 'أقل مدة؟', answer: '4 ساعات = الحد الأدنى. بروتوكول ساحلي = خطوات إضافية = وقت أطول. 4 ساعات = شقة صغيرة كاملة.' },
    ],
    expertTips: [
        'اطلب عاملة مُدرّبة على البروتوكول الساحلي — ليس كل عاملات الشركة مُدرّبات.',
        'وفّر ماء RO أو مُقطر — أو تأكد أن العاملة تجلب معها.',
        'أخبر العاملة بأحياء الكورنيش — NaCl أعلى = تجفيف أكثر.',
        'Anti-Fungal على حمام + مطبخ + خزائن = الأولوية في كل زيارة.',
        'عقد أسبوعي = أفضل. NaCl يومي + عفن أسبوعي = أسبوعي يمنع التراكم.',
    ],
    warnings: [
        'عاملة بماء الخبر = NaCl جديد على كل سطح كل زيارة = تآكل تراكمي. RO = يمنع.',
        'تنظيف بدون تجفيف في 85-95% = عفن خلال 48 ساعة. التنظيف = تبليل = عفن.',
        'بدون Anti-Fungal شهري = عفن حمام + خزائن = رائحة + حساسية.',
    ],
    trustAnchors: [
        { ...GOV.HRSD, role: 'تنظيم العمالة المنزلية' },
        { entity: AMANA.SHARQIA.entity, url: AMANA.SHARQIA.url, role: 'اشتراطات النظافة بالشرقية' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALMISNID.name, quote: 'عاملة الخبر = ساحلية: RO بدلاً من ماء الشبكة + Anti-Fungal روتيني + تجفيف كل سطح. 3 خطوات إضافية = الفرق بين نظيف وملوّث.', source: 'جغرافيا المناخ — التنظيف الساحلي' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [
        { badge: '✔️ عمالة مرخصة', authority: 'HRSD + بلدي', icon: 'shield-check' },
        { badge: '✔️ تدريب ساحلي', authority: 'معتمد داخلياً', icon: 'badge-check' },
    ],
    equipment: [
        { name: 'ماء RO/مُقطر', use: 'مسح بدون NaCl — صفر أملاح' },
        { name: 'Anti-Fungal Spray', use: 'حمام + مطبخ + خزائن — روتيني في 85-95%' },
        { name: 'Microfiber جاف', use: 'تجفيف فوري بعد المسح — إلزامي' },
        { name: 'Anti-Corrosion Spray', use: 'صنابير + مقابض — يحمي من NaCl' },
    ],
    commonConcerns: [
        { concern: 'أنظف بنفسي.', solution: 'بماء الشبكة؟ = NaCl جديد. بدون تجفيف؟ = عفن. بدون Anti-Fungal؟ = حمام. 3 أخطاء شائعة.' },
        { concern: 'عاملة أرخص.', solution: 'أرخص = بدون RO + بدون تجفيف + بدون Anti-Fungal = 3 مشاكل كل زيارة.' },
    ],
    consumerEducation: [
        { myth: 'ممسحة وماء.', truth: 'ماء الخبر = NaCl. ممسحة = تُوزّع NaCl. بدون تجفيف = عفن. 3 أخطاء.' },
        { myth: 'مثل الرياض.', truth: 'الرياض: ماء + ممسحة = يكفي (15% = يجف). الخبر: RO + Anti-Fungal + تجفيف = إلزامي.' },
        { myth: 'شهري.', truth: 'NaCl يومي + عفن أسبوعي. شهري = 3 أسابيع تراكم. أسبوعي.' },
    ],
    relatedServices: [
        { slug: 'cleaning', context: 'تنظيف — بروتوكول ساحلي', priority: 1 },
        { slug: 'apartments-cleaning', context: 'شقق — شقة كاملة', priority: 2 },
        { slug: 'steam-cleaning', context: 'بخار — تعقيم', priority: 3 },
        { slug: 'carpet-cleaning', context: 'سجاد — NaCl + عث', priority: 4 },
        { slug: 'sofa-cleaning', context: 'كنب — NaCl + بخور', priority: 5 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف — عفن', priority: 6 },
        { slug: 'pest-control', context: 'حشرات — صراصير رطوبة', priority: 7 },
    ],
};
