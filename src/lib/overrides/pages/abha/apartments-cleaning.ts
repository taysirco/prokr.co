// تنظيف شقق بأبها — Override (E-E-A-T)
import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف شقق بأبها — تنظيف شقق سياحية ومفروشة ضد عفن الإيجار الموسمي (2026)',
        description: 'تنظيف شقق بأبها. تعقيم فطري + HEPA + تجفيف. شقق أبها السياحية: تسليم/استلام سريع + ضيوف متعاقبون + عفن بين المواسم. بروتوكول فندقي. من 200 ريال.',
        h1: 'تنظيف شقق بأبها — بروتوكول فندقي للشقق السياحية والمفروشة',
        keywords: ['تنظيف شقق بأبها', 'شركة تنظيف شقق أبها', 'تنظيف شقة مفروشة أبها'],
    },
    content: {
        introduction: 'سوق الشقق في أبها = مزدوج بطبيعته: شقق سكنية دائمة + شقق سياحية مفروشة (الأكثر). السياحة الصيفية تجعل الشقق المفروشة سوقاً نشطاً 4-5 أشهر ← ضيوف كل 3-7 أيام ← تنظيف سريع بين كل ضيف. المشكلة: التنظيف السريع (مسح + ترتيب) لا يكفي في رطوبة 90%. بين الضيوف: الفراش والمفروشات تمتص رطوبة ← بق الفراش يتنقل مع الحقائب ← العفن يبدأ في الأماكن المخفية. بين المواسم (8 أشهر): الشقة المُغلقة في رطوبة 90% = عفن كامل. بروتوكول فندقي لشقق أبها: (أ) بين الضيوف (Turnover Cleaning): غيار شراشف ← HEPA شفط سريع ← Spot Check بق فراش ← مسح Damp (وليس Wet) ← تهوية 30 دقيقة. (ب) أسبوعي (Deep Cleaning): استخراج ساخن مفروشات ← تعقيم حمامات ← HEPA كامل ← تجفيف. (ج) قبل فتح الموسم (Pre-Season): بروتوكول فيلا كامل (HEPA + بخار + تعقيم فطري + تجفيف صناعي + كشط عفن + غسيل مكيف). + للملاك: تأمين الوديعة — تنظيف خروج شامل مع تقرير حالة يُثبت نظافة الشقة ← يحمي الوديعة.',
        shortAnswer: 'شقق أبها السياحية: ضيوف كل 3-7 أيام + 8 أشهر إغلاق = تنظيف Turnover + Deep Weekly + Pre-Season. HEPA + Damp Mop + تجفيف. بق فراش Spot Check كل تسليم. تقرير وديعة. من 200 ريال.',
        heroSubtitle: 'تنظيف شقق بأبها. سياحي. Turnover. بروتوكول فندقي.',
    },
    pricing: [
        { type: 'Turnover Cleaning (بين ضيوف)', unit: 'شقة', minPrice: 100, maxPrice: 200, time: '1-2 ساعة' },
        { type: 'Deep Cleaning أسبوعي', unit: 'شقة', minPrice: 200, maxPrice: 350, time: '2-3 ساعات' },
        { type: 'Pre-Season (إعادة تأهيل)', unit: 'شقة', minPrice: 350, maxPrice: 600, time: '4-6 ساعات' },
        { type: 'تنظيف خروج + تقرير وديعة', unit: 'شقة', minPrice: 250, maxPrice: 450, time: '3-4 ساعات' },
    ],
    faq: [
        { question: 'الشقة تُؤجر يومياً — كل كم أنظف عميق؟', answer: 'Turnover (مسح + HEPA + تهوية) = كل ضيف. Deep (استخراج ساخن + تعقيم) = أسبوعي. Pre-Season = قبل بداية الصيف. هذا الجدول يمنع تراكم العفن والبق ← تقييمات أعلى ← إشغال أعلى.' },
        { question: 'ضيف اشتكى من رائحة عفن — إيش أسوي؟', answer: 'فوري: (1) مزيل رطوبة + تهوية. (2) HEPA + بخار جاف. (3) تعقيم فطري. الجذري: فحص خلف الأثاث + الخزائن + الحمامات ← كشط عفن + دهان مضاد. + مزيل رطوبة دائم. الرائحة = أبواغ عفن = مراجعة سلبية + خطر صحي.' },
    ],
    expertTips: [
        'Spot Check بق فراش كل Turnover = كشف مبكر. تأخير = انتشار = مراجعة كارثية.',
        'مزيل رطوبة 24/7 في شقة أبها المفروشة = أهم جهاز بعد المكيف.',
        'Damp Mop (وليس Wet) = لا رطوبة إضافية ← لا عفن أرضي.',
        'Pre-Season قبل الصيف بأسبوعين = شقة جاهزة بلا مفاجآت.',
    ],
    warnings: [
        'شقة مُغلقة 8 أشهر بلا Dehumidifier = عفن في كل غرفة. Pre-Season ليس اختيارياً.',
        'تنظيف Turnover بدون Spot Check بق = نقل بق بين ضيوف ← مراجعات سلبية ← إغلاق.',
    ],
    trustAnchors: [{ ...GOV.BALADI, role: 'ترخيص الشقق المفروشة — اشتراطات نظافة' }],
    expertReviewer: { name: EXPERTS.ALMISNID.name, title: EXPERTS.ALMISNID.title, credential: EXPERTS.ALMISNID.credential, profileUrl: EXPERTS.ALMISNID.profileUrl },
    expertCitations: [{ expert: EXPERTS.ALMISNID.name, quote: 'شقق أبها المفروشة = أعلى خطر عفن في قطاع الإيجار السياحي السعودي. 8 أشهر إغلاق × رطوبة 90% = كارثة إذا لم يُدار بمزيل رطوبة + Pre-Season. المراجعات السلبية ("ريحة عفن") = موت الإشغال.', source: EXPERTS.ALMISNID.title, url: EXPERTS.ALMISNID.profileUrl }],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ بروتوكول فندقي', authority: 'Turnover+Deep+Pre-Season', icon: 'shield-check' }],
    equipment: [
        { name: 'HEPA + Damp Mop', use: 'Turnover سريع بين الضيوف — تنظيف بدون إضافة رطوبة.' },
        { name: 'بخار جاف + مزيل رطوبة', use: 'Deep Cleaning أسبوعي — تعقيم + تجفيف.' },
    ],
    hiddenObjections: [{ fear: 'العاملة تنظف بين كل ضيف — يكفي.', solution: '"تنظف" = مسح + ترتيب. لا HEPA (العث يبقى) ← لا Spot Check (البق ينتقل) ← لا تجفيف (الرطوبة تتراكم). تكلفة بروتوكول فندقي أعلى 50-100 ريال/Turnover ← تمنع مراجعة سلبية واحدة = تساوي عشرات الحجوزات.' }],
    counterNarratives: [{ myth: 'الشقة مفروشة حديثاً — ما تحتاج تنظيف عميق.', truth: 'المفروشات الجديدة تمتص رطوبة 90% من أول يوم. + كل ضيف يجلب عرقاً وخلايا جلدية وربما بق. "جديدة" لا تعني "محمية". البروتوكول يبدأ من اليوم الأول.' }],
    relatedServices: [
        { slug: 'abha-cleaning', context: 'تنظيف شامل Pre-Season.', priority: 1 },
        { slug: 'abha-sofa-cleaning', context: 'كنب مفروش — تنظيف دوري.', priority: 2 },
        { slug: 'abha-bedbugs-control', context: 'بق فراش — فحص + معالجة.', priority: 3 },
    ],
};
