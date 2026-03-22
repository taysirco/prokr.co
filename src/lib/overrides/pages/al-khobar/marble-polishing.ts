import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../gov-references';

export const override: PageOverride = {
    meta: {
        title: 'جلي رخام بالخبر — NaCl يُبهت + 85-95% عفن مسامي + Sabkha بقع ملحية + Biofilm طحالب (2026)',
        description: 'جلي رخام الخبر. NaCl يُبهت اللمعان بطريقة مختلفة عن CaSO₄. 85-95% عفن في مسام الرخام. Sabkha بقع ملحية. Biofilm طحلبي. غسل + جلي + Sealer + Anti-Fungal.',
        h1: 'جلي رخام بالخبر — الملح يُبهت والرطوبة تُعفّن المسام والطحالب تنمو',
        keywords: ['جلي رخام بالخبر', 'تلميع رخام الخبر', 'شركة جلي رخام بالخبر'],
    },
    content: {
        introduction: 'الرخام في الخبر يتعرض لـ 3 آليات تلف ساحلية فريدة. الأولى — NaCl يُبهت بطريقة مختلفة: NaCl Hygroscopic = يمتص رطوبة 85-95% = يبقى رطباً = طبقة ملحية رطبة على الرخام ← تُبهت بالترطيب المستمر (بدلاً من Scale صلب). غسل بـ RO + جلي. الثانية — 85-95% عفن مسامي: رخام مسامي + 85-95% = عفن Aspergillus يخترق المسام (0.1-1 ميكرون) ← بقع عفنية من الداخل ← لا تُزال بالمسح. Anti-Fungal + Sealer يسد المسام. الثالثة — Biofilm طحلبي: 85-95% + ضوء = طحالب Chlorophyta على الرخام الخارجي (حدائق + مداخل) ← طبقة خضراء. Anti-Biofilm + Sealer.',
        shortAnswer: 'على عكس [ملمّع + ممسحة] الذي لا يُزيل NaCl الرطب ولا عفن المسام، يعتمد بروتوكولنا في خدمة [جلي الرخام] بمدينة [الخبر] على [RO + جلي + Sealer + Anti-Fungal]. ففي ظل [NaCl + 85-95% + Biofilm]، تتفاقم ظاهرة [إبهات + عفن + طحالب]. لذا؛ يتدخل خبراؤنا عبر [بروتوكول رخام ساحلي].',
        heroSubtitle: 'NaCl رطب + 85-95% عفن مسامي + Biofilm طحلبي',
    },
    pricing: [
        { type: 'جلي + تلميع (10-30 م²)', unit: 'م²', minPrice: 25, maxPrice: 55, time: '1-3 ساعات' },
        { type: 'جلي + Sealer + Anti-Fungal (30-50 م²)', unit: 'م²', minPrice: 35, maxPrice: 65, time: '3-5 ساعات' },
        { type: 'Anti-Biofilm خارجي (مداخل)', unit: 'م²', minPrice: 20, maxPrice: 40, time: '1-2 ساعة' },
        { type: 'جلي فيلا كاملة (100+ م²)', unit: 'م²', minPrice: 20, maxPrice: 50, time: '6-12 ساعة' },
    ],
    faq: [
        { question: 'NaCl على الرخام — مختلف عن CaSO₄؟', answer: 'CaSO₄ = Scale صلب (يتصلب ← يُبهت). NaCl = Hygroscopic (يمتص رطوبة ← يبقى رطباً ← يُبهت بالترطيب المستمر). الحل مختلف: CaSO₄ = Citric. NaCl = RO غسل + جلي.' },
        { question: 'عفن من داخل المسام — ممكن؟', answer: 'رخام = مسامي (0.1-1 ميكرون فتحات). 85-95% = رطوبة تتسلل ← Aspergillus ينمو داخل المسام ← بقع عفنية لا تُزال بالمسح. Anti-Fungal يقتل + Sealer يسد = حماية.' },
        { question: 'Biofilm — على الرخام الخارجي؟', answer: 'رخام مدخل + حديقة + 85-95% + ضوء = Biofilm طحلبي (طبقة خضراء رقيقة). ينمو ← يتأصل ← يتسلل للمسام. Anti-Biofilm ربع سنوي.' },
        { question: 'Sealer إلزامي؟', answer: 'في الخبر = نعم. Sealer يسد مسام الرخام ← يمنع NaCl + عفن + Biofilm من التسلل. 10-20 ريال/م² يحمي 1-2 سنة. بدونه: كل شيء يتسلل.' },
        { question: 'كل 3 أشهر؟', answer: 'NaCl أسبوعي + عفن شهري + Biofilm ربع سنوي. 3 أشهر = قبل التأصّل. نصف سنوي = أصعب.' },
    ],
    expertTips: [
        'غسل NaCl بماء RO قبل الجلي — جلي بدون غسل = NaCl يُطحن = Micro-Abrasion.',
        'Sealer بعد كل جلي — يسد المسام = يحمي من NaCl + عفن + Biofilm 1-2 سنة.',
        'Anti-Fungal قبل Sealer — يقتل عفن مسامي ← Sealer يختمه.',
        'Anti-Biofilm على رخام خارجي ربع سنوي — يمنع طحالب 85-95%.',
        'تجفيف فوري — 85-95% = الرخام لا يجف. NaCl يتبلور ببطء = بقع.',
    ],
    warnings: [
        'NaCl رطب على الرخام 6 أشهر = إبهات تدريجي + NaCl يتسلل للمسام = بقع دائمة. غسل + جلي ربع سنوي.',
        'عفن مسامي > 3 أشهر = بقع لا تُزال حتى بالجلي (اللون يتغير من الداخل). Anti-Fungal مبكر = يمنع.',
        'Biofilm متأصل = كشط = خدوش. Anti-Biofilm ربع سنوي = يمنع التأصّل.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص شركات الجلي' },
        { entity: AMANA.SHARQIA.entity, url: AMANA.SHARQIA.url, role: 'اشتراطات المباني بالشرقية' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALMOHAIMED.name, quote: 'رخام الخبر = 3 ساحلية: NaCl رطب يُبهت + 85-95% عفن مسامي + Biofilm طحلبي. RO + جلي + Anti-Fungal + Sealer + Anti-Biofilm = بروتوكول رخام ساحلي.', source: 'نصائح هندسية — رخام البيئات الساحلية' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [
        { badge: '✔️ جلي رخام مرخص', authority: 'منصة بلدي', icon: 'shield-check' },
    ],
    equipment: [
        { name: 'RO Water System', use: 'غسل NaCl بدون أملاح' },
        { name: 'Diamond Pads 7-مراحل', use: 'جلي تدريجي بعد غسل NaCl' },
        { name: 'Sealer (مانع تسرب)', use: 'يسد مسام — يحمي 1-2 سنة' },
        { name: 'Anti-Biofilm Treatment', use: 'يقتل طحالب 85-95%' },
    ],
    commonConcerns: [
        { concern: 'الرخام جديد.', solution: 'NaCl من اليوم الأول. 85-95% من الساعة الأولى. Sealer فوراً = حماية الاستثمار.' },
        { concern: 'ملمّع من المحل.', solution: 'الملمّع = طبقة فوق NaCl الرطب. يلمع مؤقتاً. NaCl تحته = يُبهت بسرعة. غسل + جلي = لمعان حقيقي.' },
    ],
    consumerEducation: [
        { myth: 'رخام الخبر مثل الأحساء.', truth: 'NaCl Hygroscopic ≠ CaSO₄ Scale. عفن مسامي ≠ Silt Staining. Biofilm ≠ لقاح. مختلف.' },
        { myth: 'يجف طبيعياً.', truth: '85-95% = لا يجف. NaCl يبقى رطباً = يُبهت أكثر.' },
        { myth: 'جلي مرة.', truth: 'NaCl أسبوعي + عفن شهري. جلي بدون Sealer = يُبهت خلال أشهر.' },
    ],
    relatedServices: [
        { slug: 'cleaning', context: 'تنظيف — ساحلي', priority: 1 },
        { slug: 'glass-facades-cleaning', context: 'واجهات — NaCl', priority: 2 },
        { slug: 'villas-cleaning', context: 'فلل — رخام', priority: 3 },
        { slug: 'carpet-cleaning', context: 'سجاد — حول الرخام', priority: 4 },
        { slug: 'apartments-cleaning', context: 'شقق — رخام', priority: 5 },
        { slug: 'steam-cleaning', context: 'بخار — تعقيم', priority: 6 },
        { slug: 'auto-cleaning', context: 'سيارات — NaCl المرآب', priority: 7 },
    ],
};
