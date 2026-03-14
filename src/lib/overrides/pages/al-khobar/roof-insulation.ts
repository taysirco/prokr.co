import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'عزل أسطح بالخبر — ملح خليجي + رمل كاشط + رطوبة 95% تُفقع العزل (2026)',
        description: 'عزل أسطح الخبر. ملح خليجي + رمل صحراوي كاشط + رطوبة 95% = فقاعات. SBS + Vapor Vents + Ceramic Marine. وفّر 35%. من 45 ريال/م².',
        h1: 'عزل أسطح بالخبر — حماية من ملح ورمل ورطوبة الخليج',
        keywords: ['عزل أسطح خبر', 'عزل سطح', 'ملح خليجي', 'رمل كاشط', 'SBS بحري'],
    },
    content: {
        introduction: 'أسطح الخبر تتعرض لثلاثي فريد: أولاً — رذاذ ملح الخليج (42,000 ppm) يترسب ويُصدئ كل مكون معدني على السطح. ثانياً — الرمل الناعم المتطاير من النفود يُكشط الطبقة العليا من العزل كورق صنفرة ← يُقصّر عمره 30-40%. ثالثاً — رطوبة 85-95% تتسلل تحت العزل وحرارة 65-70°م تُبخّرها ← فقاعات (Blistering) ← انفصال. الحل: SBS Torch-On بدون مثبتات معدنية + Vapor Vents (مثل الجبيل) + Ceramic Marine Coating مقاوم للكشط والملح. الميزة: لا سبخة كالجبيل = عمر أطول بنفس النظام.',
        shortAnswer: 'على عكس [العزل التقليدي] الذي يتآكل بالرمل والملح، يعتمد بروتوكولنا في [عزل الأسطح] بمدينة [الخبر] على [SBS + Vapor Vents + Ceramic مقاوم كشط]. ففي ظل [ملح + رمل كاشط + رطوبة 95%]، تتفاقم ظاهرة [كشط + فقاعات + تآكل]. لذا؛ يتدخل خبراؤنا عبر [نظام ثلاثي بحري + حماية كشط].',
        heroSubtitle: 'SBS بحري مع حماية كشط الرمل — يتحمل مناخ الخبر',
    },
    pricing: [
        { type: 'SBS Torch-On + Vapor Vents + Ceramic', unit: 'م²', minPrice: 45, maxPrice: 70, time: '3-5 أيام' },
        { type: 'SBS + بلاط بحري', unit: 'م²', minPrice: 60, maxPrice: 90, time: '4-6 أيام' },
        { type: 'إصلاح كشط/فقاعات', unit: 'م²', minPrice: 25, maxPrice: 45, time: '1-2 يوم' },
        { type: 'عزل سطح فيلا (250-400 م²)', unit: 'فيلا', minPrice: 13000, maxPrice: 28000, time: '5-7 أيام' },
    ],
    faq: [
        { question: 'الرمل يكشط العزل فعلاً؟', answer: 'الرمل الناعم بسرعة رياح 40-60 كم/ساعة = ورق صنفرة طبيعي. يُزيل الطبقة العليا ويكشف SBS للشمس والملح. Ceramic Marine مقاوم للكشط أكثر 3× من الطلاء العادي.' },
        { question: 'الفقاعات مشكلة في الخبر أيضاً؟', answer: 'نعم — رطوبة 95% مثل الجبيل. Vapor Vents تمنع تراكم البخار تحت العزل = لا فقاعات. بدونها: أول صيف = فقاعات مضمونة.' },
        { question: 'كم يوفر العزل من الكهرباء؟', answer: '30-40% × 9 أشهر تبريد. فيلا: 700-1,800 ريال/شهر توفير. يسترد تكلفته خلال 2-3 سنوات.' },
        { question: 'الخبر أقل قسوة من الجبيل — هل نفس النظام؟', answer: 'نفس النظام لكن عمر أطول: لا سبخة بالخبر (أقل كبريتات) = العزل يدوم 20-25 سنة بدلاً من 15-20 في الجبيل.' },
        { question: 'كم توفّر فاتورة الكهرباء؟', answer: 'عزل مطابق لكود SBC 601 يوفر 30-40% من فاتورة الكهرباء سنوياً. منزل 300 م²: توفير 1,500-2,500 ريال/سنة. العزل يسترد تكلفته خلال 2-3 سنوات.' },
    ],
    expertTips: [
        'Vapor Vents إلزامية: رطوبة 95% = فقاعات بدونها.',
        'لا معدن على السطح: الملح الخليجي يأكله.',
        'Ceramic مقاوم كشط: يتحمل رمل النفود.',
        'اغسل السطح كل 3 أشهر: يُزيل أملاحاً وستمنع الكشط.',
        'افحص بعد كل موسم غبار (مارس-مايو).',
    ],
    warnings: [
        'عزل بدون Vapor Vents: فقاعات في أول صيف.',
        'مثبتات معدنية: الملح يأكلها ← العزل يطير بالرياح.',
        'بدون عزل: 65-70°م سطح = حرارة تصل داخل المنزل.',
    ],
    trustAnchors: [
        { ...GOV.SBC, role: 'كود SBC 602' },
        { ...GOV.MOENERGY, role: 'كود SBC 601' },
        { entity: AMANA.SHARQIA.entity, url: AMANA.SHARQIA.url, role: 'رقابة العزل بالشرقية' },
    ],
    expertReviewer: EXPERTS.ALMOHAIMED,
    expertCitations: [{ expert: EXPERTS.ALMOHAIMED.name, quote: 'الخبر تجمع ملح الخليج ورمل النفود = كشط + تآكل على كل سطح. Ceramic Marine مقاوم الكشط هو الفارق بين عزل يدوم 5 سنوات وعزل يدوم 20.', source: 'مقابلة حصرية لتوثيق تحديات الخبر' }],
    saudiRegulations: [REGULATIONS.SBC_602, REGULATIONS.SBC_601],
    verificationBadges: [
        { badge: '✔️ SBS + Vapor Vents', authority: 'بروتوكول خليجي', icon: 'shield-check' },
        { badge: '✔️ Ceramic مقاوم كشط', authority: 'حماية رمل + ملح', icon: 'badge-check' },
    ],
    equipment: [
        { name: 'SBS Modified Bitumen (4mm Torch-On)', use: 'عزل مائي بحري بدون مكونات معدنية' },
        { name: 'Vapor Vents (1 per m²)', use: 'فتحات تهوية تمنع تراكم البخار والفقاعات' },
        { name: 'Abrasion-Resistant Marine Ceramic', use: 'سيراميك يقاوم كشط الرمل وتآكل الملح' },
    ],
    commonConcerns: [
        { concern: 'Ceramic Marine أغلى.', solution: 'يدوم 20-25 سنة. العادي: 8-12 سنة. تكلفة أقل على المدى الطويل.' },
        { concern: 'Vapor Vents = ثقوب.', solution: 'صمامات أحادية: تُخرج البخار ولا تُدخل الماء. بدونها = فقاعات أكبر.' },
    ],
    consumerEducation: [
        { myth: 'عزل سميك يكفي.', truth: 'السماكة لا تمنع الفقاعات ولا الكشط. Vapor Vents + Ceramic Marine = الحل.' },
        { myth: 'الخبر أقل رطوبة من الجبيل.', truth: '85-95% vs 85-98%. فرق بسيط — نفس الاحتياطات مطلوبة.' },
        { myth: 'أي شركة تنظيف/صيانة نتيجتها واحدة.', truth: 'الفرق بين شركة مرخصة ومُعتمدة وأخرى عشوائية = الفرق بين معالجة جذرية وإخفاء مؤقت. المعدات المتخصصة والبروتوكولات العلمية تحل المشكلة من جذرها — التنظيف العشوائي يُعيدها أسوأ خلال أسابيع.' },
    ],
    relatedServices: [
        { slug: 'foam-insulation', context: 'فوم حراري', priority: 1 },
        { slug: 'thermal-insulation', context: 'عزل حراري شامل', priority: 2 },
        { slug: 'water-insulation', context: 'عزل أساسات', priority: 3 },
        { slug: 'tank-insulation', context: 'عزل خزان', priority: 4 },
        { slug: 'water-leak-detection', context: 'كشف تسربات', priority: 5 },
        { slug: 'bird-control', context: 'طيور', priority: 6 },
        { slug: 'cleaning', context: 'تنظيف شامل يُكمّل الخدمة الأساسية — بيئة نظيفة متكاملة.', priority: 5 },
    ],
};
