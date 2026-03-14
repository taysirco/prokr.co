import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف كنب بجازان — عفن داخل الحشو 24/7 + عث 12/12 + ملح يُتلف الجلد + رطوبة تُعفّن الإسفنج (2026)',
        description: 'تنظيف كنب جازان. 80% رطوبة = عفن Aspergillus داخل الحشو 24/7. عث لا يتوقف. ملح بحري يُتلف الجلد (Pitting). الإسفنج يتحلل. استخلاص + Dehumidifier + Anti-Mold.',
        h1: 'تنظيف كنب بجازان — الرطوبة تُعفّن الحشو والملح يُتلف الجلد',
        keywords: ['تنظيف كنب بجازان', 'تنظيف كنب جازان', 'شركة تنظيف كنب بجازان'],
    },
    content: {
        introduction: 'الكنب في جازان يتدهور من الداخل للخارج (عكس الرياض/تبوك). المشكلة الأولى — عفن داخل الحشو (Internal Mold Colonization): 80% رطوبة = الرطوبة تخترق الأقمشة ← تصل الإسفنج الداخلي ← Aspergillus ينمو داخل الحشو. لا تراه — تشمّه (رائحة عفن). الحشو يتحلل تدريجياً (Foam Degradation). الحل: استخلاص عميق + تجفيف ≤ 4 ساعات بـ Dehumidifier + Anti-Mold. المشكلة الثانية — الجلد يتعفّن (ليس يجف — يتعفّن): في تبوك (12% RH): الجلد يجف ← يتشقق. في جازان (80% RH): الجلد يمتص الرطوبة ← عفن سطحي (Green Mold) + رائحة + Pitting من Chloride البحر (ملح يأكل الجلد). الحل: Anti-Fungal Leather Conditioner (مُركّب ضد فطريات + ترطيب) — عكس Conditioner تبوك (ترطيب فقط). المشكلة الثالثة — عث 12/12 في الأقمشة: نفس السجاد — بيئة مثالية دائمة. بخار 130°م شهرياً. المشكلة الرابعة — ملح البحر يُتلف المعدن: إطار الكنب المعدني: Chloride + 80% = Pitting Corrosion. الحديد يصدأ من الداخل. فحص الإطار سنوياً.',
        shortAnswer: 'عفن داخل الحشو + جلد يتعفّن (ليس يجف!) + عث 12/12 + ملح يأكل المعدن. استخلاص عميق + Dehumidifier + Anti-Fungal Conditioner + بخار = الحل.',
        heroSubtitle: 'عفن من الداخل + جلد يتعفّن + عث 12/12 + ملح — عكس كل مدينة أخرى',
    },
    pricing: [
        { type: 'تنظيف كنب — 3-5 مقاعد', unit: 'طقم', minPrice: 200, maxPrice: 400, time: '2-3 ساعات' },
        { type: 'تنظيف جلد + Anti-Fungal Conditioning', unit: 'طقم', minPrice: 250, maxPrice: 500, time: '2-3 ساعات' },
        { type: 'عقد شهري (استوائي)', unit: 'شهر', minPrice: 250, maxPrice: 500, time: 'زيارة' },
    ],
    faq: [
        { question: 'رائحة عفن من الكنب — مع إنه يبدو نظيف؟', answer: 'العفن داخل الحشو — لا يُرى. 80% رطوبة تخترق الأقمشة ← تصل الإسفنج ← Aspergillus ينمو. الرائحة = دليل. استخلاص عميق + Anti-Mold + تجفيف ≤ 4 ساعات.' },
        { question: 'جلد الكنب أخضر — عفن؟', answer: '100% — Green Mold على الجلد. 80% رطوبة = الجلد يبقى رطباً ← العفن ينمو على السطح. + Chloride يأكل الجلد (Pitting). Anti-Fungal Conditioner يقتل + يحمي.' },
        { question: 'Conditioner جازان ≠ Conditioner تبوك؟', answer: 'تبوك: Conditioner يُرطّب (12% جفاف). جازان: Anti-Fungal Conditioner يقتل فطريات + يحمي من 80%. تركيبة مُختلفة تماماً. استخدام Conditioner تبوك في جازان = يُغذي العفن.' },
        { question: 'كم تكلفة التنظيف العميق مقارنة بالتنظيف العادي؟', answer: 'التنظيف العميق أغلى 30-50% لكنه يشمل: HEPA + بخار 150°م + تعقيم. التنظيف العادي = مسح سطحي. العميق كل 3-4 أشهر + العادي أسبوعياً = أفضل معادلة تكلفة/نظافة.' },
        { question: 'هل المواد المستخدمة آمنة على الأطفال؟', answer: 'مواد معتمدة من هيئة الغذاء والدواء SFDA. بعد التنظيف: تهوية 30 دقيقة كافية. بخار 150°م = بديل للكيماويات — آمن 100% على الأطفال والحيوانات.' },
    ],
    expertTips: [
        'Anti-Fungal Conditioner حصراً — Conditioner عادي يُغذي العفن في 80%.',
        'Dehumidifier بعد كل غسلة — كنب مبلل + 80% = عفن خلال 24 ساعة.',
        'فحص الإطار المعدني سنوياً — Chloride + 80% = Pitting Corrosion.',
        'بخار 130°م شهرياً — عث 12/12.',
        'في أحياء الشاطئ: Anti-Salt Treatment إضافي — Chloride أعلى.',
    ],
    warnings: [
        'Conditioner عادي (بدون Anti-Fungal) في جازان = يُغذي العفن = أسوأ.',
        'كنب مبلل بعد الغسل + 80% + بدون Dehumidifier = عفن أسود خلال 24 ساعة.',
        'رائحة عفن من الكنب = العفن وصل الحشو = تنظيف فوري أو استبدال الحشو.',
    ],
    trustAnchors: [{ ...GOV.BALADI, role: 'ترخيص شركات التنظيف' },
        { entity: AMANA.JAZAN.entity, url: AMANA.JAZAN.url, role: 'اشتراطات أمانة جازان' },
    ],
        expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALMOHAIMED.name, quote: 'كنب جازان يتعفّن من الداخل — 80% رطوبة تخترق الأقمشة للحشو. الجلد يتعفّن (عكس تبوك حيث يجف). Anti-Fungal Conditioner = مُختلف تماماً عن Conditioner المدن الجافة.', source: 'نصائح هندسية — صيانة الأقمشة في المناخ الاستوائي' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ تنظيف كنب مرخص', authority: 'بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'استخلاص عميق (Hot Water)', use: 'يصل الحشو الداخلي — يسحب العفن + يقتل بالحرارة' },
        { name: 'Dehumidifier صناعي', use: 'تجفيف ≤ 4 ساعات — يمنع عفن جديد' },
        { name: 'Anti-Fungal Leather Conditioner', use: 'يقتل Green Mold + يحمي الجلد من 80% — مُختلف عن Conditioner الجاف' },
        { name: 'بخار 130°م', use: 'يقتل عث 12/12 — شهرياً' },
    ],
    hiddenObjections: [
        { fear: 'أنظف بنفسي.', solution: 'بدون Dehumidifier: كنب مبلل + 80% = عفن أسود. + بدون Anti-Fungal: العفن يعود فوراً. + بدون استخلاص عميق: الحشو بقي مُعفّن.' },
    ],
    consumerEducation: [
        { myth: 'الكنب يجف طبيعياً.', truth: 'في 80% رطوبة: لا يجف. يبقى رطباً ← عفن. Dehumidifier = الحل الوحيد.' },
        { myth: 'Conditioner عادي يكفي.', truth: 'Conditioner جاف = يُرطّب. في 80%: يُغذي العفن. Anti-Fungal = يقتل + يحمي.' },
    ],
    relatedServices: [
        { slug: 'carpet-cleaning', context: 'سجاد — نفس عفن 24/7', priority: 1 },
        { slug: 'steam-cleaning', context: 'بخار — عث 12/12', priority: 2 },
        { slug: 'furniture-cleaning', context: 'أثاث — عفن الخشب', priority: 3 },
        { slug: 'cleaning', context: 'تنظيف — المنزل كاملاً', priority: 4 },
        { slug: 'councils-cleaning', context: 'مجالس — فرشات + بخور', priority: 5 },
        { slug: 'pest-control', context: 'حشرات — عث ← حساسية', priority: 6 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف — مصدر رطوبة', priority: 7 },
    ],
};
