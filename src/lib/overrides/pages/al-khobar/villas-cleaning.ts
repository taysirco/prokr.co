import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف فلل بالخبر — بروتوكول ساحلي 6 محاور: NaCl + عفن 85-95% + Sabkha + Biofilm + PVAc + بعوض (2026)',
        description: 'تنظيف فلل الخبر. 6 محاور ساحلية: NaCl كل سطح. 85-95% عفن حتمي. Sabkha تربة. Biofilm واجهات. PVAc أثاث. بعوض حديقة. بروتوكول ساحلي مُتكامل.',
        h1: 'تنظيف فلل بالخبر — 6 محاور ساحلية: ملح + عفن + تربة + غشاء + أثاث + حشرات',
        keywords: ['تنظيف فلل بالخبر', 'تنظيف فيلا الخبر', 'شركة تنظيف فلل بالخبر'],
    },
    content: {
        introduction: 'الفيلا في الخبر = أكبر مساحة تتعرض لأوسع طيف من التحديات الساحلية. 6 محاور مُتكاملة: المحور 1 — NaCl كل سطح: رذاذ بحري يترسب على بلاط + رخام + أجهزة + واجهات + سيارة + حديقة. Hygroscopic = يمتص رطوبة. RO غسل + Anti-Corrosion معادن. المحور 2 — 85-95% عفن حتمي: حمامات + مطابخ + خزائن + مكيف + سقف مُعلّق + مجلس + غرفة غسيل. Aspergillus في كل مكان مُغلق. Anti-Fungal + Dehumidifier. المحور 3 — Sabkha تربة: من الأحذية + من الحديقة + من المرآب. بقع ملحية + تآكل. RO + تجفيف. المحور 4 — Biofilm واجهات + حديقة: 85-95% + ضوء = طحالب Chlorophyta على الواجهات والممرات الخارجية. Anti-Biofilm ربع سنوي. المحور 5 — PVAc أثاث: 45°م + 85-95% = أسوأ مكان للأثاث. PVAc يلين + يمتص. Conditioner. المحور 6 — بعوض حديقة: مسبح + خزان + مياه راكدة = Culex ساحلي. Larvicide.',
        shortAnswer: 'على عكس [تنظيف عادي بعاملة واحدة] الذي لا يُغطي 6 محاور ساحلية، يعتمد بروتوكولنا في خدمة [تنظيف الفلل] بمدينة [الخبر] على [فريق ساحلي مُتخصص: RO + Anti-Fungal + Anti-Biofilm + Anti-Corrosion + Conditioner + Larvicide]. ففي ظل [NaCl + 85-95% + Sabkha + Biofilm + PVAc + بعوض]، تتفاقم ظاهرة [6 محاور]. لذا؛ يتدخل خبراؤنا عبر [بروتوكول فيلا ساحلي].',
        heroSubtitle: '6 محاور: NaCl + عفن 85-95% + Sabkha + Biofilm + PVAc + بعوض',
    },
    pricing: [
        { type: 'فيلا — بروتوكول ساحلي', unit: 'فيلا', minPrice: 550, maxPrice: 1200, time: '6-10 ساعات' },
        { type: 'فيلا + واجهات + حديقة', unit: 'فيلا', minPrice: 800, maxPrice: 1800, time: '8-14 ساعة' },
        { type: 'فيلا + مسبح + Anti-Biofilm', unit: 'فيلا', minPrice: 900, maxPrice: 2200, time: '10-16 ساعة' },
        { type: 'عقد شهري (4 أسبوعية)', unit: 'شهر', minPrice: 700, maxPrice: 1500, time: '4 زيارات' },
    ],
    faq: [
        { question: '6 محاور — كلها ضرورية؟', answer: 'نعم — الفيلا = أكبر سطح = كل المشاكل الساحلية في مكان واحد. تخطي محور = يعود. NaCl بدون Anti-Corrosion = صدأ. 85-95% بدون Anti-Fungal = عفن. كلها مُتصلة.' },
        { question: 'فريق كم شخص؟', answer: 'فيلا صغيرة: 3-4 أشخاص. فيلا كبيرة: 5-7. مُتخصصون: أحدهم داخلي (RO + Anti-Fungal) + آخر خارجي (واجهات + Anti-Biofilm) + ثالث أجهزة (Anti-Corrosion). تخصص = جودة.' },
        { question: 'أحياء الكورنيش — فرق كبير؟', answer: 'NaCl 3-5× أعلى + Biofilm أسرع + بعوض أكثر. أحياء داخلية: أقل — لكن 85-95% = عفن في كل مكان. الفرق = حدّة — ليس وجود.' },
        { question: 'أسبوعي — ما يكفي شهري؟', answer: 'NaCl يومي + عفن أسبوعي = أسبوعي يمنع التراكم. شهري = 3 أسابيع تراكم = أصعب 3× + تلف.' },
        { question: 'بعد البناء — متى أبدأ؟', answer: 'من اليوم الأول. NaCl من الساعة الأولى. 85-95% من الدقيقة الأولى. الحماية المبكرة = أرخص.' },
    ],
    expertTips: [
        'RO Water فقط لكل التنظيف — ماء الخبر = NaCl = تلويث. الأهم.',
        'Anti-Fungal على 7 نقاط: حمامات + مطبخ + خزائن + مكيف + سقف + مجلس + غسيل.',
        'Anti-Biofilm واجهات + ممرات ربع سنوي — يمنع طحالب.',
        'Anti-Corrosion كل المعادن: مفصلات + صنابير + أسرّة + مقابض + أسوار.',
        'Larvicide حديقة: مسبح + خزان + نوافير + أي ماء راكد.',
    ],
    warnings: [
        'فيلا بدون بروتوكول ساحلي = 6 محاور تلف × 12 شهراً = تكلفة ترميم 20,000-100,000 ريال. بروتوكول = 7,000-18,000/سنة.',
        '85-95% + 7 نقاط عفن = جراثيم Aspergillus في كل غرفة = حساسية عائلية مزمنة.',
        'NaCl على واجهات + أسوار + بوابات = Galvanic Corrosion = تغيير = عشرات آلاف. Anti-Corrosion = مئات.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص شركات التنظيف' },
        { entity: AMANA.SHARQIA.entity, url: AMANA.SHARQIA.url, role: 'اشتراطات الفلل بالشرقية' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALMISNID.name, quote: 'فيلا الخبر = أصعب وحدة سكنية في المملكة: 6 محاور ساحلية مُتكاملة. NaCl + 85-95% + Sabkha + Biofilm + PVAc + بعوض. بروتوكول ساحلي = 6 مُتخصصين × كل أسبوع.', source: 'جغرافيا المناخ — الفلل الساحلية' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [
        { badge: '✔️ تنظيف فلل مرخص', authority: 'منصة بلدي', icon: 'shield-check' },
        { badge: '✔️ بروتوكول ساحلي 6 محاور', authority: 'معتمد داخلياً', icon: 'badge-check' },
        { badge: '✔️ فريق مُتخصص', authority: 'تدريب ساحلي', icon: 'badge-check' },
    ],
    equipment: [
        { name: 'RO Water System', use: 'صفر NaCl — لكل التنظيف' },
        { name: 'Anti-Fungal Spray', use: '7 نقاط عفن — فعّال 3-4 أشهر' },
        { name: 'Anti-Biofilm Treatment', use: 'واجهات + ممرات — فعّال 3 أشهر' },
        { name: 'Anti-Corrosion + Conditioner', use: 'معادن + أثاث — فعّال 6 أشهر' },
        { name: 'BTI Larvicide', use: 'حديقة — يقتل يرقات بعوض' },
        { name: 'Dehumidifier', use: 'يُخفض 85-95% في الغرف المُغلقة' },
    ],
    hiddenObjections: [
        { fear: 'عاملة واحدة.', solution: '6 محاور = تحتاج فريق مُتخصص. عاملة واحدة = 1/6 محور. الباقي = بدون حماية.' },
        { fear: 'لسنة كاملة؟', solution: 'NaCl يومي + عفن أسبوعي + بعوض شهري. سنة = 50 أسبوع بدون حماية. أسبوعي = الأمثل.' },
    ],
    consumerEducation: [
        { myth: 'فيلا الخبر مثل الرياض.', truth: '6 محاور ساحلية لا توجد في الرياض. مختلفة جذرياً.' },
        { myth: 'تنظيف = ممسحة.', truth: '6 محاور = 6 أدوات + بروتوكول + فريق. ممسحة = 1/6.' },
        { myth: 'شهري.', truth: '6 محاور يومية/أسبوعية. شهري = 3 أسابيع × 6 محاور = 18 تراكم.' },
    ],
    relatedServices: [
        { slug: 'cleaning', context: 'تنظيف — ساحلي داخلي', priority: 1 },
        { slug: 'swimming-pool-cleaning', context: 'مسبح — NaCl', priority: 2 },
        { slug: 'glass-facades-cleaning', context: 'واجهات — NaCl + Biofilm', priority: 3 },
        { slug: 'carpet-cleaning', context: 'سجاد — NaCl + عث', priority: 4 },
        { slug: 'furniture-cleaning', context: 'أثاث — PVAc', priority: 5 },
        { slug: 'termite-control', context: 'نمل أبيض — Sabkha', priority: 6 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف — NaCl + عفن', priority: 7 },
    ],
};
