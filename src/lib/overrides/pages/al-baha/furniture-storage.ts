import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تخزين أثاث بالباحة — أغلى تخزين! Dehumidifier+Anti-Fungal دائم + غابات رطوبة 50-75% (2026)',
        description: 'تخزين أثاث الباحة. أغلى تخزين بالمملكة! Dehumidifier+Anti-Fungal+Anti-Mite دائم. 50-75% رطوبة. غابات عرعر.',
        h1: 'تخزين أثاث بالباحة — أغلى تخزين — رطوبة وغابات!',
        keywords: ['تخزين أثاث الباحة', 'تخزين عفش بالباحة', 'شركة تخزين أثاث الباحة'],
    },
    content: {
        introduction: 'تخزين الباحة = أغلى تخزين بالمملكة! لماذا؟ لأن 50-75% رطوبة + غابات عرعر = Dehumidifier يعمل 24/7 (بدونه = عفن خلال أسبوع). Anti-Fungal رش دوري كل شهرين. Anti-Mite — عث يستعمر حشوات الأثاث المنجد في بيئة رطبة. Silica Gel في كل صندوق مغلق. مقارنة: عنيزة = لا Dehumidifier + لا Anti-Fungal + لا Anti-Mite = أرخص 40-50%! الأمطار الموسمية تزيد رطوبة المستودع — عزل مائي إلزامي. الضباب 150+ يوم يتسلل من فتحات التهوية — إحكام + مرشحات. الخلاصة: أغلى تخزين لكن بدون هذه الاحتياطات = أثاث يعفن خلال أسابيع = خسارة أكبر بكثير.',
        shortAnswer: 'على عكس [المستودع بدون تحكم بالرطوبة]، يعتمد بروتوكولنا في خدمة [تخزين الأثاث] بمدينة [الباحة] على [Dehumidifier 24/7+Anti-Fungal+Anti-Mite+عزل مائي]. ففي ظل [50-75% رطوبة+غابات عرعر+أمطار+ضباب 150+ يوم]، تتفاقم ظاهرة [عفن+عث+انتفاخ+تلف]. لذا؛ يتدخل فريقنا عبر [تجفيف دائم ← تعقيم ← عزل ← إحكام] لضمان أثاث سليم.',
        heroSubtitle: 'Dehumidifier 24/7 + Anti-Fungal/Mite — أغلى لكن ضروري!',
    },
    pricing: [
        { type: 'غرفة صغيرة (3×3)', unit: 'شهر', minPrice: 190, maxPrice: 400, time: 'شهري' },
        { type: 'غرفة كبيرة (4×5)', unit: 'شهر', minPrice: 340, maxPrice: 680, time: 'شهري' },
        { type: 'سنوي (خصم 15%)', unit: 'سنة', minPrice: 2000, maxPrice: 4000, time: 'سنوي' },
        { type: 'عزل مائي + إحكام', unit: 'إضافي', minPrice: 200, maxPrice: 400, time: 'لمرة واحدة' },
    ],
    faq: [
        { question: 'كم يكلف تخزين بالباحة مقارنة بعنيزة؟', answer: 'أغلى 40-50%! 190-680 ريال/شهر مقابل 110-420. Dehumidifier+Anti-Fungal+Anti-Mite = تكلفة إضافية.' },
        { question: 'كيف أحمي الأثاث من العفن بالمستودع بالباحة؟', answer: 'Dehumidifier 24/7 + Anti-Fungal كل شهرين + Silica Gel. بدونها = عفن خلال أسبوع واحد.' },
        { question: 'ليش الباحة أغلى مدينة تخزين؟', answer: '50-75% + غابات + أمطار + ضباب = كل أداة حماية مطلوبة. عنيزة: لا شيء مطلوب.' },
        { question: 'هل المستودع يحتاج عزل مائي بالباحة؟', answer: 'إلزامي! أمطار موسمية + ضباب يتسرب = رطوبة إضافية تُتلف الأثاث.' },
        { question: 'متى أسحب الأثاث من المستودع بالباحة؟', answer: 'أي وقت — Dehumidifier يحمي دائماً. فحص Anti-Fungal قبل السحب. لا تترك بدون Dehumidifier.' },
    ],
    expertTips: [
        'Dehumidifier 24/7 — بدونه عفن خلال أسبوع.',
        'Anti-Fungal كل شهرين — غابات عرعر = عفن سريع.',
        'Anti-Mite — عث في حشوات رطبة.',
        'عزل مائي — أمطار+ضباب يتسلل.',
        'Silica Gel في كل صندوق — حماية إضافية.',
    ],
    warnings: [
        'مستودع بدون Dehumidifier + 50-75% = عفن أسود على كل الأثاث خلال أسبوع واحد.',
        'بدون عزل مائي + أمطار = تسرب يُتلف أثاث قيمته آلاف الريالات.',
        'بدون Anti-Mite = عث يستعمر كل حشوة — رائحة + حساسية عند الاستخدام.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص المستودعات' },
        { entity: AMANA.BAHA.entity, url: AMANA.BAHA.url, role: 'اشتراطات أمانة الباحة' },
    ],
    expertReviewer: EXPERTS.ALMOHAIMED,
    expertCitations: [
        { expert: EXPERTS.ALMOHAIMED.name, quote: 'تخزين الباحة: أغلى لكن ضروري. Dehumidifier 24/7 + Anti-Fungal. بدونه = خسارة كاملة.', source: 'نصائح هندسية — تخزين جبلي' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ مستودع مرخص', authority: 'بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'Dehumidifier صناعي 24/7', use: 'تحكم رطوبة — بدونه عفن أسبوع' },
        { name: 'Anti-Fungal+Anti-Mite', use: 'حماية من عفن Aspergillus وعث Dermatophagoides' },
        { name: 'عزل مائي PU', use: 'حماية من أمطار+ضباب الباحة' },
    ],
    hiddenObjections: [
        { fear: 'غالي جداً.', solution: 'بدون Dehumidifier = عفن = خسارة أثاث 10000+ ريال. أرخص بكثير.' },
        { fear: 'مثل خميس.', solution: 'غابات أكثر = رطوبة أعلى قليلاً. تكلفة متقاربة.' },
    ],
    counterNarratives: [
        { myth: 'مستودع عادي يكفي بالباحة.', truth: '50-75% = عفن أسبوع. Dehumidifier إلزامي.' },
        { myth: 'تخزين الباحة مثل عنيزة.', truth: 'أغلى 40-50%. كل أداة حماية مطلوبة.' },
    ],
    relatedServices: [
        { slug: 'furniture-moving', context: 'نقل عفش', priority: 1 },
        { slug: 'furniture-cleaning', context: 'تنظيف أثاث', priority: 2 },
        { slug: 'pest-control', context: 'حشرات — عث', priority: 3 },
        { slug: 'cleaning', context: 'تنظيف', priority: 4 },
        { slug: 'dabab', context: 'دباب', priority: 5 },
        { slug: 'carpet-cleaning', context: 'سجاد', priority: 6 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 7 },
    ],
};
