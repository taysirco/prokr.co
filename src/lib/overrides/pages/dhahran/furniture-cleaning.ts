import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../gov-references';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف أثاث بالظهران — NaCl+SiO₂ مفصلات + 75-85% عفن داخلي + PVAc مزدوج (2026)',
        description: 'تنظيف أثاث الظهران. NaCl يُصدّئ + SiO₂ يخدش المفصلات. 75-85% عفن خزائن. PVAc حرارة+رطوبة. بخور بلمرة. Anti-Corrosion + Anti-Fungal + Conditioner.',
        h1: 'تنظيف أثاث بالظهران — ملح يُصدّئ ورمل يخدش والرطوبة تُعفّن',
        keywords: ['تنظيف أثاث بالظهران', 'تنظيف عفش الظهران', 'شركة تنظيف أثاث بالظهران'],
    },
    content: {
        introduction: 'الأثاث في الظهران يتعرض لتلف مزدوج. الأولى — NaCl+SiO₂ مفصلات: NaCl يتآكل + SiO₂ يخدش الطلاء = Coating يتقشر ← صدأ أسرع. Anti-Corrosion Silicone. الثانية — 75-85% عفن داخلي: أدراج مُغلقة + خزائن = رطوبة محبوسة = Aspergillus 3-4 أسابيع. Silica Gel + Anti-Fungal + تهوية. الثالثة — PVAc مزدوج: 45°م يلين + 75-85% يمتص رطوبة = مفاصل ضعيفة. أبطأ من الخبر لكن: حتمي. Conditioner. الرابعة — بخور Olibanum بلمرة على أقمشة الأثاث. Enzymatic.',
        shortAnswer: 'على عكس [ملمّع ومسح] الذي لا يحمي من المزدوج، يعتمد بروتوكولنا في خدمة [تنظيف الأثاث] بمدينة [الظهران] على [Anti-Corrosion + Anti-Fungal + Conditioner + Enzymatic]. ففي ظل [NaCl+SiO₂ + 75-85% + PVAc]، تتفاقم ظاهرة [صدأ+خدش + عفن + تفكك]. لذا؛ يتدخل خبراؤنا عبر [بروتوكول أثاث مزدوج].',
        heroSubtitle: 'NaCl+SiO₂ صدأ+خدش + 75-85% عفن + PVAc مزدوج',
    },
    pricing: [
        { type: 'غرفة نوم', unit: 'غرفة', minPrice: 160, maxPrice: 310, time: '2-3 ساعات' },
        { type: '+ Anti-Fungal + Anti-Corrosion', unit: 'غرفة', minPrice: 210, maxPrice: 400, time: '3-4 ساعات' },
        { type: 'بيت كامل', unit: 'بيت', minPrice: 420, maxPrice: 940, time: '5-8 ساعات' },
        { type: 'عقد نصف سنوي', unit: 'سنة', minPrice: 370, maxPrice: 730, time: '2 زيارات' },
    ],
    faq: [
        { question: 'SiO₂ يخدش المفصلات — كيف؟', answer: 'SiO₂ ناعم يترسب على Coating المفصلة ← حركة المفصلة = يخدش Coating ← NaCl يدخل المكشوف = صدأ. Anti-Corrosion = يحمي.' },
        { question: 'عفن خزانة مُغلقة — 75-85% يكفي؟', answer: '75-85% = كافٍ. الخزانة المُغلقة تحبس الرطوبة ← 3-4 أسابيع = Aspergillus. Silica Gel + فتح يومي.' },
        { question: 'PVAc — أبطأ من الخبر؟', answer: '75-85% < 85-95% = PVAc يمتص أقل = أبطأ. لكن: 45°م = يلين. مزدوج (حرارة+رطوبة) = تفكك حتمي. Conditioner كل 6 أشهر.' },
        { question: 'Conditioner خشب — ليش؟', answer: '75-85% = انتفاخ. 45°م = انكماش. دورة = شقوق. Conditioner = يوازن.' },
        { question: 'نصف سنوي — يكفي؟', answer: 'Anti-Corrosion: كل 6 أشهر. Anti-Fungal: كل 5 أشهر. Conditioner: كل 6 أشهر. نصف سنوي = الحد الأدنى.' },
    ],
    expertTips: [
        'Anti-Corrosion Silicone على كل مفصلة — SiO₂ يخدش + NaCl يتآكل.',
        'Silica Gel في كل درج وخزانة — يمتص 75-85% المحبوسة.',
        'فتح أبواب الخزائن 15 دقيقة يومياً — أبسط حل.',
        'Conditioner كل 6 أشهر — يوازن انتفاخ/انكماش.',
        'Enzymatic على أقمشة — يُكسر بوليمر بخور.',
    ],
    warnings: [
        'مفصلات + NaCl+SiO₂ = صدأ مُركّب أسرع. Anti-Corrosion = يمنع.',
        'عفن خزانة 75-85% = جراثيم على الملابس = حساسية.',
        'PVAc مزدوج = مفاصل تنفك 1-2 سنة. Conditioner = 50-100 ريال.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص التنظيف' },
        { entity: AMANA.SHARQIA.entity, url: AMANA.SHARQIA.url, role: 'اشتراطات النظافة بالشرقية' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALMOHAIMED.name, quote: 'أثاث الظهران = مزدوج: NaCl+SiO₂ مفصلات + 75-85% عفن + PVAc (حرارة+رطوبة). Anti-Corrosion + Anti-Fungal + Conditioner = حماية مزدوجة.', source: 'نصائح هندسية — أثاث البيئة المزدوجة' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ تنظيف أثاث مرخص', authority: 'منصة بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'Anti-Corrosion Silicone', use: 'يحمي مفصلات من NaCl+SiO₂' },
        { name: 'Anti-Fungal + Silica Gel', use: 'يمنع عفن خزائن 75-85%' },
        { name: 'Wood Conditioner', use: 'يوازن رطوبة — يمنع PVAc مزدوج' },
        { name: 'Enzymatic', use: 'يُكسر بوليمر بخور' },
    ],
    commonConcerns: [
        { concern: 'أثاث جديد.', solution: 'NaCl+SiO₂ من اليوم الأول. حماية مبكرة = أرخص.' },
        { concern: 'ملمّع يكفي.', solution: 'سطحي. لا يحمي مفصلات ولا يمنع عفن داخلي.' },
    ],
    consumerEducation: [
        { myth: 'مثل الرياض.', truth: 'NaCl إضافي = صدأ. 75-85% = عفن. مختلف.' },
        { myth: 'خشب يتحمل.', truth: '75-85% + 45°م = انتفاخ/انكماش. دورة = شقوق.' },
        { myth: 'سنوي.', truth: 'مزدوج + عفن 3-4 أسابيع. نصف سنوي = الحد.' },
    ],
    relatedServices: [
        { slug: 'furniture-moving', context: 'نقل — حماية', priority: 1 },
        { slug: 'furniture-storage', context: 'تخزين — NaCl+SiO₂', priority: 2 },
        { slug: 'sofa-cleaning', context: 'كنب — عث + بخور', priority: 3 },
        { slug: 'cleaning', context: 'تنظيف — مزدوج', priority: 4 },
        { slug: 'carpet-cleaning', context: 'سجاد — حول الأثاث', priority: 5 },
        { slug: 'pest-control', context: 'حشرات — رطوبة', priority: 6 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف — مزدوج', priority: 7 },
    ],
};
