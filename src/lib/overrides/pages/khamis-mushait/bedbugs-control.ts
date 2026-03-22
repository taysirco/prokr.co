import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../gov-references';

export const override: PageOverride = {
    meta: {
        title: 'مكافحة بق الفراش بخميس مشيط — 60-85% تكاثر سريع + ضباب رطوبة + عفن فرش — أخطر! (2026)',
        description: 'مكافحة بق الفراش خميس مشيط. 60-85% = تكاثر أسرع 2×. ضباب رطوبة. عفن فرش. بخار 90°م+مبيد SFDA+Dehumidifier.',
        h1: 'مكافحة بق الفراش بخميس مشيط — رطوبة تكاثر أسرع!',
        keywords: ['مكافحة بق الفراش خميس مشيط', 'بق فراش بخميس مشيط', 'شركة مكافحة بق خميس مشيط'],
    },
    content: {
        introduction: 'بق الفراش في خميس مشيط يتكاثر أسرع من أي مدينة صحراوية! لماذا؟ 60-85% رطوبة = بيئة مثالية لتكاثر بق الفراش. دورة حياة أسرع 2× مقارنة بـ 15-25% (عنيزة). الأنثى تضع 1-5 بيضات/يوم ← تفقس أسرع في بيئة رطبة. ضباب 200 يوم = رطوبة تتسلل للفرش والمراتب ← بيئة حضانة. عفن Aspergillus ينمو على الفرش الموبوءة ← مشكلة مزدوجة: بق + عفن. المعالجة تحتاج: بخار 90°م (يقتل بق+بيض) + مبيد SFDA (يقتل الهاربين) + Anti-Fungal (يقتل العفن) + Dehumidifier (يمنع التكرار). مقارنة: عنيزة = بخار+مبيد يكفي (لا عفن+لا رطوبة). خميس = 4 خطوات = أغلى 30%.',
        shortAnswer: 'على عكس [المبيد فقط الذي لا يقتل البيض ولا العفن]، يعتمد بروتوكولنا في خدمة [مكافحة بق الفراش] بمدينة [خميس مشيط] على [بخار 90°م+مبيد SFDA+Anti-Fungal+Dehumidifier]. ففي ظل [60-85%+ضباب+تكاثر 2×+عفن فرش]، تتفاقم ظاهرة [إصابة سريعة+عفن+رطوبة تمنع جفاف المبيد]. لذا؛ يتدخل فريقنا عبر [بخار ← مبيد ← تعقيم ← تجفيف].',
        heroSubtitle: '60-85% تكاثر 2× + ضباب + عفن فرش — 4 خطوات!',
    },
    pricing: [
        { type: 'غرفة نوم واحدة', unit: 'غرفة', minPrice: 150, maxPrice: 300, time: '2-3 ساعات' },
        { type: 'شقة كاملة', unit: 'شقة', minPrice: 350, maxPrice: 700, time: '4-6 ساعات' },
        { type: '+ Anti-Fungal فرش', unit: 'إضافي', minPrice: 80, maxPrice: 160, time: '1 ساعة' },
        { type: 'متابعة (3 زيارات)', unit: 'باقة', minPrice: 400, maxPrice: 800, time: '3 زيارات' },
    ],
    faq: [
        { question: 'ليش بق الفراش يتكاثر أسرع بخميس مشيط؟', answer: '60-85% رطوبة = دورة حياة أسرع 2×. البيض يفقس أسرع في بيئة رطبة. عنيزة: 15-25% = أبطأ.' },
        { question: 'كيف أعرف بق فراش من عفن بخميس مشيط؟', answer: 'بق = لدغات حمراء + بقع دم على الملاءة. عفن = بقع سوداء + رائحة رطوبة. غالباً معاً بخميس!' },
        { question: 'كم تكلفة مكافحة بق بخميس مقارنة بعنيزة؟', answer: 'أغلى 30% — بخار+مبيد+Anti-Fungal+Dehumidifier. عنيزة: بخار+مبيد فقط (لا عفن).' },
        { question: 'هل المبيد يكفي بدون بخار بخميس مشيط؟', answer: 'لا! المبيد لا يقتل البيض. بخار 90°م يقتل بيض+حشرة. والرطوبة تمنع جفاف المبيد = Dehumidifier.' },
        { question: 'متى أعرف إن المشكلة انتهت بخميس مشيط؟', answer: '3 زيارات متابعة (أسبوع+أسبوعين+شهر). بالرطوبة = تكاثر أسرع. زيارة واحدة لا تكفي.' },
    ],
    expertTips: [
        'بخار 90°م — يقتل بق+بيض. المبيد لا يقتل البيض.',
        'Anti-Fungal — عفن مع بق = مشكلة مزدوجة بالرطوبة.',
        'Dehumidifier — يمنع تكاثر ويُجفف المبيد.',
        'مبيد SFDA — مسجل في نظام غد فقط.',
        '3 زيارات متابعة — التكاثر أسرع 2× بالرطوبة.',
    ],
    warnings: [
        'مبيد بدون بخار = البيض يبقى = إصابة جديدة خلال أسبوعين.',
        'عفن+بق معاً = حساسية مزدوجة (جلدية+تنفسية) — خطر صحي حقيقي.',
        'بدون Dehumidifier = المبيد لا يجف = فعالية أقل + رطوبة تُسرّع التكاثر.',
    ],
    trustAnchors: [
        { ...GOV.SFDA, role: 'تسجيل المبيدات — نظام غد' },
        { ...GOV.BALADI, role: 'ترخيص شركات المكافحة' },
        { entity: AMANA.ASIR.entity, url: AMANA.ASIR.url, role: 'اشتراطات أمانة عسير' },
    ],
    expertReviewer: EXPERTS.ALKHODAIRY,
    expertCitations: [
        { expert: EXPERTS.ALKHODAIRY.name, quote: 'بق خميس: رطوبة تُسرّع التكاثر 2×. بخار+مبيد+Anti-Fungal. عفن معه = خطر مزدوج.', source: 'أبحاث سموم — حشرات الفراش' },
    ],
    saudiRegulations: [REGULATIONS.GHAD_SYSTEM],
    verificationBadges: [{ badge: '✔️ مكافحة مرخصة', authority: 'بلدي + SFDA', icon: 'shield-check' }],
    equipment: [
        { name: 'بخار 90°م', use: 'يقتل بق+بيض — المبيد لا يقتل البيض' },
        { name: 'مبيد SFDA مسجل', use: 'يقتل الهاربين بعد البخار — نظام غد' },
        { name: 'Anti-Fungal+Dehumidifier', use: 'يقتل عفن + يمنع تكاثر رطب' },
    ],
    commonConcerns: [
        { concern: 'مبيد يكفي.', solution: 'لا يقتل البيض. بخار 90°م إلزامي. + Dehumidifier بخميس.' },
        { concern: 'زيارة واحدة.', solution: '3 زيارات — تكاثر 2× بالرطوبة. واحدة لا تكفي.' },
    ],
    consumerEducation: [
        { myth: 'بق الفراش مثل عنيزة.', truth: 'تكاثر 2× + عفن مصاحب = أعقد وأغلى 30%.' },
        { myth: 'مبيد فقط يحل.', truth: 'لا يقتل البيض + الرطوبة تمنع جفافه. بخار+Dehumidifier.' },
    ],
    relatedServices: [
        { slug: 'pest-control', context: 'حشرات عام', priority: 1 },
        { slug: 'steam-cleaning', context: 'بخار — بق', priority: 2 },
        { slug: 'carpet-cleaning', context: 'سجاد — عث', priority: 3 },
        { slug: 'cleaning', context: 'تنظيف — عفن', priority: 4 },
        { slug: 'sofa-cleaning', context: 'كنب — بق', priority: 5 },
        { slug: 'pesticide-spraying', context: 'رش مبيدات', priority: 6 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 7 },
    ],
};
