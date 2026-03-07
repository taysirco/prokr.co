import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف مجالس بالباحة — بخور+ضباب بلمرة رطبة + غابات عرعر عفن+عث — أعقد مجلس! (2026)',
        description: 'تنظيف مجالس الباحة. بلمرة رطبة ضباب+بخور. غابات عرعر عفن+عث. 50-75%. Anti-Fungal+Anti-Mite+Dehumidifier. 4-8h تجفيف.',
        h1: 'تنظيف مجالس بالباحة — بخور رطب وغابات عفن — أعقد مجلس!',
        keywords: ['تنظيف مجالس الباحة', 'تنظيف مجلس بالباحة', 'شركة تنظيف مجالس الباحة'],
    },
    content: {
        introduction: 'مجلس الباحة = أعقد مجلس بالمملكة! لماذا؟ بلمرة رطبة مزدوجة: SiO₂ (قليل — ليست صحراء مكشوفة) + دهون بخور + ضباب 50-75% = طبقة بوليمرية رطبة تتغلغل عميقاً في ألياف القماش. في عنيزة: بلمرة جافة سطحية = Enzymatic يكفي. هنا: بلمرة رطبة عميقة = Enzymatic + بخار + استخلاص. غابات عرعر = عفن Aspergillus يستعمر أقمشة المجلس خلال 72 ساعة + عث Dermatophagoides يتكاثر في الحشوات. Anti-Fungal + Anti-Mite إلزامي. طلع أشجار عرعر = حساسية تنفسية عند 20-30% من الجالسين. HEPA. أخطر ما في الموضوع: تجفيف 4-8 ساعات! 50-75% رطوبة = الغسيل لا يجف بسرعة = لو لم تستخدم Dehumidifier = عفن جديد يتكوّن بعد التنظيف! مقارنة: عنيزة = 20 دقيقة + لا عفن + أرخص 30%.',
        shortAnswer: 'على عكس [الشامبو العادي الذي لا يصل البلمرة الرطبة]، يعتمد بروتوكولنا في خدمة [تنظيف المجالس] بمدينة [الباحة] على [Enzymatic+بخار+استخلاص+Anti-Fungal+Anti-Mite+Dehumidifier]. ففي ظل [ضباب 50-75%+غابات عرعر عفن+عث+بلمرة رطبة]، تتفاقم ظاهرة [خشونة عميقة+عفن+عث+تجفيف بطيء]. لذا؛ يتدخل فريقنا عبر [إنزيم ← بخار ← استخلاص ← تعقيم ← تجفيف Dehumidifier] لضمان مجلس نظيف وصحي.',
        heroSubtitle: 'بلمرة رطبة + غابات عفن+عث — Dehumidifier إلزامي!',
    },
    pricing: [
        { type: 'مجلس رجال', unit: 'مجلس', minPrice: 250, maxPrice: 500, time: '3-4h + تجفيف 4-8h' },
        { type: '+ Anti-Fungal/Mite', unit: 'مجلس', minPrice: 310, maxPrice: 620, time: '4-5h + تجفيف' },
        { type: 'مجلسين (رجال+نساء)', unit: 'باقة', minPrice: 450, maxPrice: 900, time: '6-8h + تجفيف' },
        { type: 'ربع سنوي (4 زيارات)', unit: 'سنة', minPrice: 750, maxPrice: 1500, time: '4 زيارات' },
    ],
    faq: [
        { question: 'كم يحتاج المجلس يجف بعد التنظيف بالباحة؟', answer: '4-8 ساعات مع Dehumidifier! بدونه = 12-24 ساعة + عفن جديد. عنيزة: 20 دقيقة. الفرق = 50-75% رطوبة.' },
        { question: 'كيف أمنع عفن المجلس بعد الغسل بالباحة؟', answer: 'Dehumidifier فوري بعد الغسل + Anti-Fungal. بدون Dehumidifier = الغسل يُسبب عفن جديد خلال 72 ساعة!' },
        { question: 'ليش المجلس يعفن بالباحة وما يعفن بعنيزة؟', answer: 'الباحة: 50-75% رطوبة + غابات = بيئة مثالية. عنيزة: 15-25% = صفر عفن. الفرق = البيئة.' },
        { question: 'هل الشامبو يكفي لمجلس الباحة؟', answer: 'لا! بلمرة رطبة عميقة = الشامبو يُنظف السطح فقط. Enzymatic+بخار 150°م+استخلاص = يصل العمق.' },
        { question: 'متى أنظف المجلس بالباحة؟', answer: 'كل 3 أشهر — الرطوبة تُسرّع تراكم العفن. عنيزة: كل 6 أشهر. مضاعف.' },
    ],
    expertTips: [
        'Enzymatic+بخار+استخلاص — بلمرة رطبة عميقة لا يكفيها شامبو.',
        'Anti-Fungal — غابات عرعر = عفن 72 ساعة.',
        'Anti-Mite — عث يتكاثر في الحشوات الرطبة.',
        'Dehumidifier فوري — بدونه = عفن جديد بعد الغسل!',
        'HEPA — طلع عرعر = حساسية 20-30%.',
    ],
    warnings: [
        'غسل بدون Dehumidifier + 50-75% = عفن جديد خلال 72 ساعة — أسوأ مما قبل!',
        'بلمرة رطبة × 6 أشهر إهمال = طبقة لا تُزال — تغيير قماش كامل (3000+ ريال).',
        'عفن+عث معاً = حساسية تنفسية+جلدية شديدة — خطر صحي YMYL.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص شركات التنظيف' },
        { entity: AMANA.BAHA.entity, url: AMANA.BAHA.url, role: 'اشتراطات أمانة الباحة' },
    ],
    expertReviewer: EXPERTS.ALMOHAIMED,
    expertCitations: [
        { expert: EXPERTS.ALMOHAIMED.name, quote: 'مجلس الباحة: أعقد بالمملكة. غابات عرعر+ضباب = عفن+عث+بلمرة رطبة. Dehumidifier إلزامي بعد كل غسل.', source: 'نصائح هندسية — أقمشة جبلية' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ تنظيف مرخص', authority: 'منصة بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'Enzymatic+بخار 150°م', use: 'يُكسِّر بلمرة رطبة عميقة — لا يكفي شامبو' },
        { name: 'Anti-Fungal+Anti-Mite', use: 'يقتل عفن Aspergillus وعث Dermatophagoides' },
        { name: 'Dehumidifier صناعي', use: 'تجفيف 4-8h — بدونه عفن جديد!' },
    ],
    hiddenObjections: [
        { fear: 'مثل خميس مشيط.', solution: 'غابات = رطوبة+طلع إضافي = أعقد قليلاً. تكلفة متقاربة.' },
        { fear: 'Dehumidifier غالي.', solution: 'بدونه = عفن جديد = أغلى 10×. التجفيف ضروري.' },
    ],
    counterNarratives: [
        { myth: 'المجلس يجف بسرعة مثل عنيزة.', truth: '4-8 ساعات مقابل 20 دقيقة. 50-75% vs 15-25%.' },
        { myth: 'لا عفن بالباحة.', truth: 'غابات عرعر+ضباب = أسرع عفن بالمملكة.' },
    ],
    relatedServices: [
        { slug: 'carpet-cleaning', context: 'سجاد — عفن', priority: 1 },
        { slug: 'sofa-cleaning', context: 'كنب — بلمرة', priority: 2 },
        { slug: 'cleaning', context: 'تنظيف', priority: 3 },
        { slug: 'steam-cleaning', context: 'بخار — عفن', priority: 4 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف — طلع', priority: 5 },
        { slug: 'pest-control', context: 'حشرات غابات', priority: 6 },
        { slug: 'marble-polishing', context: 'رخام', priority: 7 },
    ],
};
