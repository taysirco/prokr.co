import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'رش مبيدات بالرياض — Deathstalker أطراف المدينة + هجرة شتوية + Fire Ant حدائق (2026)',
        description: 'رش مبيدات الرياض. عقرب Deathstalker + هجرة شتوية صراصير + Fire Ant. Fipronil + Gel + IGR. SFDA. من 200 ريال.',
        h1: 'رش مبيدات بالرياض — الشتاء يدفع العقارب لمنزلك',
        keywords: ['رش مبيدات بالرياض', 'مكافحة حشرات', 'عقرب أصفر', 'مكافحة صراصير', 'Fire Ant'],
    },
    content: {
        introduction: 'الرياض تواجه نشاطاً حشرياً 12 شهراً — يتبدل النوع لا يتوقف. صيفاً: النمل الحريقة (Fire Ant — Solenopsis invicta) يبني مستعمرات ضخمة في حدائق الفيلات. العقرب الأصفر (Deathstalker — Leiurus quinquestriatus) ينشط في أطراف المدينة (العمارية، ديراب، الشفا). السموم (رياح حارة) تدفع حشرات الصحراء للداخل. شتاءً: الأربعينية (أبرد 40 يوماً) تدفع الصراصير والعقارب للمنازل — هجرة شتوية جماعية. المنزل = مصدر الدفء الوحيد. التحدي: الحرارة تُبطل المبيدات. في 45-50°م: الأثر المتبقي (Residual Efficacy) ينخفض 30-50% مقارنة بالمدن المعتدلة. والعواصف الرملية تُغطي طبقة المبيد بالغبار = إلغاء الحماية. الحل: Fipronil (Chain-Kill يقتل المستعمرة من الداخل) + Gel Baits (مُكبسلة Microencapsulated تدوم أطول) + IGR (يكسر دورة الحياة) + حقن تربة محيطي (Fire Ant + نمل أبيض).',
        shortAnswer: 'على عكس [الرش السطحي بمبيدات تتبخر في 50°م] الذي يحمي أياماً فقط، يعتمد بروتوكولنا في [رش المبيدات] بـ[الرياض] على [Fipronil + Gel Baits Microencapsulated + IGR + حقن تربة]. ففي ظل [Deathstalker + هجرة شتوية + Fire Ant + 50°م + عواصف رملية]، تتفاقم ظاهرة [تبخر مبيد + غبار يُغطي + تسلل شتوي]. لذا؛ يتدخل خبراؤنا عبر [يثبط Fipronil المستعمرة ← تمتد Microencapsulation الأثر ← يكسر IGR الدورة].',
        heroSubtitle: 'صيفاً: Fire Ant في حديقتك. شتاءً: عقارب في مطبخك.',
    },
    pricing: [
        { type: 'رش شقة', unit: 'شقة', minPrice: 200, maxPrice: 400, time: '1-2 ساعة' },
        { type: 'رش فيلا + حديقة + سور', unit: 'فيلا', minPrice: 450, maxPrice: 850, time: '3-5 ساعات' },
        { type: 'حقن تربة محيطي', unit: 'فيلا', minPrice: 1500, maxPrice: 3000, time: 'يوم' },
        { type: 'عقد سنوي (6 زيارات)', unit: 'سنة', minPrice: 1500, maxPrice: 3000, time: '6 زيارات' },
    ],
    faq: [
        { question: 'عقرب Deathstalker فعلاً في الرياض؟', answer: 'نعم — في أطراف المدينة (العمارية، ديراب، الشفا). لدغته: ألم شديد + تسارع قلب + صعوبة تنفس. خطر على أطفال وكبار سن. مكافحة وقائية = حماية حياة.' },
        { question: 'كم يدوم المبيد في حرارة الرياض؟', answer: 'مبيد عادي: 3-5 أسابيع (vs 2-3 أشهر في معتدل). Microencapsulated: 8-12 أسبوعاً — كبسولات تُطلق المادة ببطء. الفرق: 3× عمر أطول.' },
        { question: 'ليش الحشرات تزيد في الشتاء مو الصيف؟', answer: 'الأربعينية: 2-8°م ليلاً. منزلك 22°م = مصدر الدفء. هجرة جماعية: صراصير + عقارب + فئران. الرش في أكتوبر = خط دفاع قبل الهجرة.' },
        { question: 'رش من السوق ما يكفي؟', answer: 'تركيز منخفض + لا Microencapsulation + لا Chain-Kill = حماية ساعات. Fipronil مهني: ينتقل للمستعمرة. Gel Baits: تستهدف البيض. الفرق: أسابيع-أشهر.' },
        { question: 'Fire Ant في الحديقة — خطر؟', answer: 'لدغات مؤلمة + ردود فعل تحسسية شديدة (Anaphylaxis في 1-2%). خطر على أطفال يلعبون. حقن تربة Fipronil: يقتل المستعمرة 5م تحت الأرض.' },
    ],
    expertTips: [
        'يثبط Fipronil الجهاز العصبي ← الحشرة تنقل السم للمستعمرة (Chain-Kill) ← إبادة من الداخل.',
        'Microencapsulation يُطيل الأثر 3× في 50°م — كبسولات تُطلق ببطء.',
        'يكسر IGR دورة الحياة: يمنع الكيتين ← لا انسلاخ ← لا تكاثر.',
        'ارش في أكتوبر قبل هجرة الأربعينية — خط دفاع جاهز.',
        'حقن تربة كل 3-5 سنوات: يحمي الأساس من نمل أبيض + Fire Ant.',
    ],
    warnings: [
        'Deathstalker في أطراف الرياض: خطر حياة على أطفال. مكافحة وقائية إلزامية.',
        'مبيد عادي في 50°م: 3-5 أسابيع فقط. Microencapsulated: 8-12 أسبوعاً.',
        'عاصفة رملية تُغطي طبقة المبيد بالغبار = إلغاء الحماية. أعد الرش.',
    ],
    trustAnchors: [
        { ...GOV.SFDA, role: 'مبيدات مسجلة — هيئة الغذاء والدواء' },
        { ...GOV.BALADI, role: 'ترخيص شركات مكافحة حشرات' },
        { entity: AMANA.RIYADH.entity, url: AMANA.RIYADH.url, role: 'اشتراطات أمانة الرياض' },
    ],
    expertReviewer: EXPERTS.ALKHODAIRY,
    expertCitations: [
        { expert: EXPERTS.ALKHODAIRY.name, quote: 'المبيدات في 50°م تفقد أثرها أسرع بكثير. Microencapsulation يُغلف المادة بكبسولات تُطلقها ببطء. بدونها: ماء مُلوّن يتبخر في ساعات.', source: 'تحذير من مبيدات غير مسجلة' },
    ],
    saudiRegulations: [REGULATIONS.GHAD_SYSTEM, REGULATIONS.BALADI_HEALTH],
    verificationBadges: [
        { badge: '✔️ SFDA مسجل', authority: 'نظام غد', icon: 'shield-check' },
        { badge: '✔️ مرخص بلدي', authority: 'وزارة البلديات', icon: 'badge-check' },
    ],
    equipment: [
        { name: 'Fipronil Professional', use: 'Chain-Kill — ينتقل عبر المستعمرة' },
        { name: 'Gel Baits Microencapsulated', use: 'تدوم 8-12 أسبوعاً في 50°م' },
        { name: 'IGR (Insect Growth Regulators)', use: 'يكسر الكيتين ← لا انسلاخ ← لا تكاثر' },
    ],
    hiddenObjections: [
        { fear: 'عقد سنوي غالي.', solution: 'لدغة عقرب = طوارئ 2,000-5,000. العقد يمنع 100%. كل ريال وقاية = 5 ريال علاج.' },
    ],
    consumerEducation: [
        { myth: 'حشرات الرياض موسمية.', truth: 'صيفاً: Fire Ant + عقارب خارج. شتاءً: هجرة للداخل. 12 شهر — يتبدل النوع.' },
        { myth: 'رش السوق يكفي.', truth: 'تركيز منخفض + لا Microencapsulation + تبخر في ساعات بـ 50°م. المهني: أسابيع-أشهر.' },
    ],
    relatedServices: [
        { slug: 'bird-control', context: 'فضلات تجذب حشرات', priority: 1 },
        { slug: 'sewage-unblocking', context: 'حشرات مجاري', priority: 2 },
        { slug: 'sewage-suction', context: 'بيارات = تكاثر', priority: 3 },
        { slug: 'water-leak-detection', context: 'رطوبة = حشرات', priority: 4 },
        { slug: 'bathroom-leak-detection', context: 'حمامات رطبة', priority: 5 },
        { slug: 'tank-leak-detection', context: 'خزان = بعوض', priority: 6 },
        { slug: 'roof-insulation', context: 'ثغرات = مدخل', priority: 7 },
    ],
};
