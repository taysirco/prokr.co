import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف مجالس بخميس مشيط — بلمرة رطبة عميقة + عفن+عث — Dehumidifier! أعقد مجلس (2026)',
        description: 'تنظيف مجالس خميس مشيط. بلمرة رطبة عميقة. عفن Aspergillus. عث Dermatophagoides. 60-85%. تجفيف 4-8h. Enzymatic+بخار+استخلاص.',
        h1: 'تنظيف مجالس بخميس مشيط — بلمرة رطبة وعفن — أعقد!',
        keywords: ['تنظيف مجالس خميس مشيط', 'تنظيف مجلس بخميس مشيط', 'شركة تنظيف مجالس خميس مشيط'],
    },
    content: {
        introduction: 'مجلس خميس مشيط = من أعقد المجالس بالمملكة! بلمرة رطبة عميقة: بخور + دهون ضيافة + 60-85% = طبقة بوليمرية رطبة تتغلغل عميقاً في ألياف القماش. الشامبو لا يصلها — Enzymatic+بخار+استخلاص فقط. عفن Aspergillus: ضباب 200 يوم + رطوبة = عفن يستعمر أقمشة المجلس خلال أسبوعين. Anti-Fungal كل غسلة. عث Dermatophagoides: يتكاثر في حشوات المجلس الرطبة = حساسية جلدية+تنفسية. Anti-Mite. تجفيف 4-8 ساعات: بدون Dehumidifier = عفن جديد بعد الغسل! مقارنة: عنيزة = بلمرة جافة + لا عفن + تجفيف 20 دقيقة + أرخص 30%. خميس = بلمرة رطبة + عفن + عث = أعقد+أغلى.',
        shortAnswer: 'على عكس [الشامبو العادي الذي لا يصل البلمرة الرطبة]، يعتمد بروتوكولنا في خدمة [تنظيف المجالس] بمدينة [خميس مشيط] على [Enzymatic+بخار+استخلاص+Anti-Fungal+Anti-Mite+Dehumidifier]. ففي ظل [60-85%+ضباب+بلمرة رطبة+عفن+عث]، تتفاقم ظاهرة [خشونة عميقة+عفن+عث+تجفيف بطيء]. لذا؛ يتدخل فريقنا عبر [إنزيم ← بخار ← استخلاص ← تعقيم ← تجفيف].',
        heroSubtitle: 'بلمرة رطبة + عفن + عث — Dehumidifier إلزامي!',
    },
    pricing: [
        { type: 'مجلس رجال', unit: 'مجلس', minPrice: 230, maxPrice: 470, time: '3-4h + تجفيف 4-8h' },
        { type: '+ Anti-Fungal/Mite', unit: 'مجلس', minPrice: 290, maxPrice: 580, time: '4-5h + تجفيف' },
        { type: 'مجلسين (رجال+نساء)', unit: 'باقة', minPrice: 420, maxPrice: 850, time: '6-8h + تجفيف' },
        { type: 'ربع سنوي (4 زيارات)', unit: 'سنة', minPrice: 700, maxPrice: 1400, time: '4 زيارات' },
    ],
    faq: [
        { question: 'كم يحتاج المجلس يجف بعد التنظيف بخميس مشيط؟', answer: '4-8 ساعات مع Dehumidifier! بدونه = 12-24 ساعة + عفن جديد. عنيزة: 20 دقيقة.' },
        { question: 'ليش الشامبو ما يكفي لمجلس خميس مشيط؟', answer: 'بلمرة رطبة عميقة = الشامبو يُنظف السطح فقط. Enzymatic+بخار 150°م+استخلاص = يصل العمق.' },
        { question: 'كيف أمنع عفن المجلس بعد الغسل بخميس مشيط؟', answer: 'Dehumidifier فوري بعد الغسل + Anti-Fungal. بدون Dehumidifier = عفن جديد 72 ساعة!' },
        { question: 'كم تكلفة تنظيف مجلس بخميس مقارنة بعنيزة؟', answer: 'أغلى 30% — Anti-Fungal+Anti-Mite+Dehumidifier. 230-580 مقابل 180-450.' },
        { question: 'متى أنظف المجلس بخميس مشيط؟', answer: 'كل 3 أشهر — عفن+عث = تراكم أسرع. عنيزة: كل 6 أشهر. مضاعف.' },
    ],
    expertTips: [
        'Enzymatic+بخار+استخلاص — بلمرة رطبة عميقة.',
        'Anti-Fungal كل غسلة — عفن أسبوعين.',
        'Anti-Mite — عث في حشوات رطبة.',
        'Dehumidifier فوري — بدونه عفن جديد!',
        'ربع سنوي — عفن+عث = تراكم أسرع.',
    ],
    warnings: [
        'غسل بدون Dehumidifier + 60-85% = عفن جديد 72 ساعة — أسوأ مما قبل!',
        'بلمرة رطبة × 6 أشهر = طبقة لا تُزال — تغيير قماش كامل (3000+ ريال).',
        'عفن+عث = حساسية مزدوجة — خطر YMYL.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص شركات التنظيف' },
        { entity: AMANA.ASIR.entity, url: AMANA.ASIR.url, role: 'اشتراطات أمانة عسير' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALMISNID.name, quote: 'مجلس خميس: بلمرة رطبة عميقة. عفن+عث. Dehumidifier إلزامي. من أعقد المجالس.', source: 'نصائح هندسية — أقمشة جبلية' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ تنظيف مرخص', authority: 'بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'Enzymatic+بخار 150°م', use: 'يُكسِّر بلمرة رطبة عميقة' },
        { name: 'Anti-Fungal+Anti-Mite', use: 'يقتل عفن Aspergillus وعث Dermatophagoides' },
        { name: 'Dehumidifier صناعي', use: 'تجفيف 4-8h — بدونه عفن جديد!' },
    ],
    hiddenObjections: [
        { fear: 'شامبو يكفي.', solution: 'بلمرة رطبة عميقة = شامبو سطحي فقط. Enzymatic+بخار.' },
        { fear: 'مثل الباحة.', solution: 'متشابه — خميس أقل غابات. نفس البروتوكول.' },
    ],
    counterNarratives: [
        { myth: 'المجلس يجف بسرعة مثل عنيزة.', truth: '4-8h مقابل 20 دقيقة. 60-85% vs 15-25%.' },
        { myth: 'لا عفن بخميس.', truth: 'ضباب 200 يوم + 60-85% = أسرع عفن.' },
    ],
    relatedServices: [
        { slug: 'carpet-cleaning', context: 'سجاد — عفن', priority: 1 },
        { slug: 'sofa-cleaning', context: 'كنب', priority: 2 },
        { slug: 'cleaning', context: 'تنظيف', priority: 3 },
        { slug: 'steam-cleaning', context: 'بخار', priority: 4 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 5 },
        { slug: 'pest-control', context: 'حشرات', priority: 6 },
        { slug: 'marble-polishing', context: 'رخام', priority: 7 },
    ],
};
