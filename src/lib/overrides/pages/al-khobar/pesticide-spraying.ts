import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'رش مبيدات بالخبر — بعوض خليجي + حشرات مطاعم + عفن رطوبة 95% (2026)',
        description: 'رش مبيدات الخبر. بعوض ضنك من الخليج. صراصير مطاعم الكورنيش. عفن 95% رطوبة. Marine-Formulated + Larvicide. نظام غد. من 200 ريال.',
        h1: 'رش مبيدات بالخبر — مكافحة بعوض الخليج وحشرات المطاعم',
        keywords: ['رش مبيدات خبر', 'مكافحة بعوض', 'مكافحة حشرات', 'مطاعم خبر', 'مبيدات معتمدة'],
    },
    content: {
        introduction: 'الخبر تجمع 4 مصادر حشرات: بعوض خليجي (Aedes aegypti) من تصريف المكيفات وبرك الكورنيش — ينقل حمى الضنك. صراصير ونمل حول آلاف المطاعم (الخبر من أكثر المدن مطاعم في الشرقية). رطوبة 95% تُنبت عفناً = مصدر غذاء لحشرات العفن. حشرات مخزن من الرطوبة (Silverfish, Carpet Beetles). التحدي: المبيد العادي لا يجف في 95% رطوبة = يفقد فعاليته. الحل: Marine-Formulated + BTI Larvicide لبرك البعوض + مكافحة عفن + مصائد صراصير مطاعم.',
        shortAnswer: 'على عكس [المبيد العادي] غير الفعّال في 95% رطوبة، يعتمد بروتوكولنا في [رش المبيدات] بمدينة [الخبر] على [Marine-Formulated + Larvicide + مكافحة عفن]. ففي ظل [بعوض + مطاعم + عفن رطوبة]، تتفاقم ظاهرة [تكاثر رباعي]. لذا؛ يتدخل خبراؤنا عبر [نظام متكامل يعمل في أقصى رطوبة].',
        heroSubtitle: 'مبيدات تعمل في 95% رطوبة — حماية من بعوض الخليج وحشرات المطاعم',
    },
    pricing: [
        { type: 'رش Marine-Formulated — شقة', unit: 'شقة', minPrice: 200, maxPrice: 400, time: '1-2 ساعة' },
        { type: 'رش Marine — فيلا كاملة', unit: 'فيلا', minPrice: 400, maxPrice: 800, time: '2-3 ساعات' },
        { type: 'مكافحة بعوض خارجي + Larvicide', unit: 'حوش', minPrice: 200, maxPrice: 350, time: '1 ساعة' },
        { type: 'عقد سنوي (6 زيارات)', unit: 'سنة', minPrice: 1500, maxPrice: 3000, time: '6 زيارات' },
    ],
    faq: [
        { question: 'بعوض الخبر ينقل الضنك فعلاً؟', answer: 'نعم. Aedes aegypti موجود في الشرقية. تصريف المكيفات + برك الكورنيش = نقاط تكاثر. حالات ضنك مُسجلة سنوياً.' },
        { question: 'المطاعم القريبة تزيد الحشرات؟', answer: 'نعم — دهون وبقايا طعام = جذب صراصير ونمل. إذا بيتك قرب مطاعم: مكافحة كل شهرين إلزامي.' },
        { question: 'العفن يجذب حشرات؟', answer: 'نعم. Booklice وSilverfish تتغذى عليه. القضاء على العفن = قطع مصدر الغذاء.' },
        { question: 'هل أحتاج مكافحة 12 شهراً؟', answer: 'نعم. رطوبة 85-95% + حرارة 25-50°م = بيئة مثالية 12 شهراً. 6 زيارات/سنة = الحد الأدنى.' },
        { question: 'هل المبيدات آمنة على الأطفال والحيوانات؟', answer: 'مبيدات مسجلة في نظام غد — SFDA. إخلاء 2-4 ساعات بعد الرش. طيور وأسماك: أبِلغ الشركة مسبقاً لاستخدام مواد أخف. الأسطح آمنة بعد الجفاف (1-2 ساعة).' },
    ],
    expertTips: [
        'أفرغ ماء تصريف المكيف كل 5 أيام: أخطر مصدر بعوض.',
        'جفّف أي رطوبة خلال 48 ساعة: العفن ينمو سريعاً.',
        'شبك على النوافذ: يمنع البعوض بدون إغلاق التهوية.',
        'نظّف خلف الأثاث دورياً: العفن يحب الظلام والرطوبة.',
        'إذا بجوار مطاعم: مكافحة كل شهرين.',
    ],
    warnings: [
        'بعوض الخبر: حمى الضنك خطر حقيقي.',
        'مبيد غير مسجل بغد: غير فعّال + مخالفة.',
        'ترك العفن: يجذب حشرات + يسبب حساسية.',
    ],
    trustAnchors: [
        { ...GOV.SFDA, role: 'نظام غد' },
        { ...GOV.BALADI, role: 'ترخيص شركات المكافحة' },
        { ...GOV.WEQAA, role: 'مكافحة النواقل' },
        { entity: AMANA.SHARQIA.entity, url: AMANA.SHARQIA.url, role: 'صحة وبيئة' },
    ],
    expertReviewer: EXPERTS.ALKHODAIRY,
    expertCitations: [{ expert: EXPERTS.ALKHODAIRY.name, quote: 'الخبر = مطاعم + رطوبة + بعوض. ثلاثية مثالية للحشرات. Marine-Formulated + مكافحة عفن + Larvicide = كل ما تحتاجه. بدون أي عنصر = فجوة تتكاثر فيها الحشرات.', source: 'مقابلة حصرية لتوثيق تحديات الخبر' }],
    saudiRegulations: [REGULATIONS.GHAD_SYSTEM, REGULATIONS.BALADI_HEALTH],
    verificationBadges: [
        { badge: '✔️ مسجلة في نظام غد', authority: 'SFDA', icon: 'shield-check' },
        { badge: '✔️ مرخصة من بلدي', authority: 'وزارة البلديات', icon: 'badge-check' },
    ],
    equipment: [
        { name: 'Marine-Formulated Insecticide', use: 'مبيد يعمل في 95% رطوبة — فعّال 45-60 يوماً' },
        { name: 'BTI Larvicide', use: 'أقراص بيولوجية تقتل يرقات بعوض الضنك' },
        { name: 'Anti-Mold Treatment', use: 'مبيد فطري يقتل العفن ويقطع غذاء الحشرات' },
    ],
    hiddenObjections: [
        { fear: '6 زيارات/سنة = كثير.', solution: '95% رطوبة + 12 شهر نشاط = لا مجال لفجوات. 6 = الحد الأدنى.' },
        { fear: 'Marine أغلى.', solution: 'يدوم 45-60 يوماً vs أسبوع للعادي. Marine أوفر فعلياً.' },
    ],
    consumerEducation: [
        { myth: 'البعوض موسمي.', truth: 'في الخبر 12 شهراً. الشتاء 20°م = لا يقتله.' },
        { myth: 'المكيف يكفي بدون مبيد.', truth: 'تصريف المكيف = برك بعوض! مكافحة + Larvicide = الحل.' },
        { myth: 'أي شركة تنظيف/صيانة نتيجتها واحدة.', truth: 'الفرق بين شركة مرخصة ومُعتمدة وأخرى عشوائية = الفرق بين معالجة جذرية وإخفاء مؤقت. المعدات المتخصصة والبروتوكولات العلمية تحل المشكلة من جذرها — التنظيف العشوائي يُعيدها أسوأ خلال أسابيع.' },
    ],
    relatedServices: [
        { slug: 'bird-control', context: 'فضلات طيور', priority: 1 },
        { slug: 'sewage-unblocking', context: 'مجاري', priority: 2 },
        { slug: 'sewage-suction', context: 'بيارات', priority: 3 },
        { slug: 'water-leak-detection', context: 'تسربات = رطوبة', priority: 4 },
        { slug: 'bathroom-leak-detection', context: 'حمامات = عفن', priority: 5 },
        { slug: 'thermal-insulation', context: 'منع تكثيف', priority: 6 },
        { slug: 'cleaning', context: 'تنظيف شامل يُكمّل الخدمة الأساسية — بيئة نظيفة متكاملة.', priority: 5 },
    ],
};
