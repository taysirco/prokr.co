import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف أثاث بالباحة — PVAc Swelling+200 يوم ضباب+عرعر+Laterite — Anti-Humidity+Dehumidifier! (2026)',
        description: 'تنظيف أثاث الباحة. PVAc Swelling مفاصل! 200 يوم ضباب عفن. عرعر لزج. Anti-Humidity+Dehumidifier+Anti-Fungal.',
        h1: 'تنظيف أثاث بالباحة — PVAc Swelling+عفن!',
        keywords: ['تنظيف أثاث بالباحة', 'تنظيف موبيليا الباحة', 'شركة تنظيف أثاث بالباحة'],
    },
    content: {
        introduction: 'أثاث الباحة = PVAc ينتفخ+عفن داخلي! PVAc Swelling: غراء خشب الأثاث يمتص رطوبة 60-85% ← ينتفخ ← مفاصل تضعف ← أثاث يتفكك 3-5 سنوات! Anti-Humidity Sealing إلزامي. عكس بريدة: خشب يتشقق (جاف) = معاكس تماماً. 200 يوم ضباب عفن: رطوبة تتغلغل داخل الأدراج ← عفن Penicillium بين الملابس. Anti-Fungal+تهوية. عرعر لزج: حبوب لقاح تلتصق بالأسطح = طبقة صفراء. Microfiber مبلل. 6-10h تجفيف: بعد تنظيف رطب = Dehumidifier إلزامي. مقارنة: بريدة = CaCO₃+SiO₂ على الخشب+تشقق+تجفيف 15 دقيقة. الباحة = PVAc+عفن+عرعر+بطء = أعقد.',
        shortAnswer: 'على عكس [المنظف دون Anti-Humidity]، يعتمد بروتوكولنا في خدمة [تنظيف الأثاث] بمدينة [الباحة] على [Anti-Humidity ← Anti-Fungal ← Dehumidifier ← Microfiber]. ففي ظل [PVAc Swelling+200 يوم ضباب+عرعر+6-10h]، تتفاقم ظاهرة [انتفاخ+عفن+لزوجة+بطء]. لذا؛ يتدخل فريقنا عبر [Anti-Humidity ← Anti-Fungal ← Dehumidifier ← Microfiber].',
        heroSubtitle: 'PVAc ينتفخ + 200 يوم عفن + عرعر — Anti-Humidity!',
    },
    pricing: [
        { type: 'غرفة نوم', unit: 'غرفة', minPrice: 100, maxPrice: 210, time: '1-2h' },
        { type: 'غرفة + Anti-Humidity', unit: 'غرفة', minPrice: 150, maxPrice: 310, time: '2-3h' },
        { type: 'أثاث كامل (3 غرف)', unit: 'شقة', minPrice: 250, maxPrice: 520, time: '4-6h' },
        { type: 'ربع سنوي', unit: 'سنة', minPrice: 350, maxPrice: 700, time: '4 تنظيف' },
    ],
    faq: [
        { question: 'ليش أثاث الباحة يتفكك؟', answer: 'PVAc Swelling: غراء يمتص 60-85% = ينتفخ = مفاصل. Anti-Humidity.' },
        { question: 'ليش الأدراج تتعفّن بالباحة؟', answer: '200 يوم ضباب = رطوبة داخل الأدراج. Anti-Fungal+تهوية.' },
        { question: 'ليش خشب بريدة يتشقق وخشب الباحة ينتفخ؟', answer: 'بريدة 10-20% = جاف يتشقق. الباحة 60-85% = رطب ينتفخ. عكس!' },
        { question: 'كم تكلفة أثاث بالباحة مقابل بريدة؟', answer: 'أغلى 35-45% — Anti-Humidity+Dehumidifier. بريدة: ترطيب.' },
        { question: 'كم مرة تنظيف أثاث بالباحة؟', answer: 'ربع سنوي + Anti-Humidity سنوي.' },
    ],
    expertTips: [
        'Anti-Humidity — PVAc مفاصل.',
        'Anti-Fungal — أدراج عفن.',
        'Dehumidifier — 6-10h!',
        'Microfiber مبلل — عرعر.',
        'تهوية — ضباب داخلي.',
    ],
    warnings: [
        'PVAc + 60-85% × 3 سنوات = مفاصل تنتفخ ← تفكك.',
        '200 يوم ضباب + أدراج مغلقة = عفن ← ملابس YMYL.',
        'تنظيف رطب بدون Dehumidifier = 6-10h ← عفن يعود.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص شركات التنظيف' },
        { entity: AMANA.BAHA.entity, url: AMANA.BAHA.url, role: 'اشتراطات أمانة الباحة' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALMISNID.name, quote: 'أثاث الباحة: PVAc Swelling عكس بريدة. Anti-Humidity+Anti-Fungal.', source: 'جغرافيا المناخ — أثاث جبلي' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ تنظيف أثاث مرخص', authority: 'بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'Anti-Humidity Sealing', use: 'PVAc — مفاصل خشب' },
        { name: 'Anti-Fungal', use: '200 يوم ضباب — أدراج' },
        { name: 'Dehumidifier', use: '6-10h — تجفيف' },
    ],
    hiddenObjections: [
        { fear: 'منظف عادي.', solution: 'PVAc+عفن = Anti-Humidity.' },
        { fear: 'مثل بريدة.', solution: 'Swelling vs Cracking. عكس!' },
    ],
    counterNarratives: [
        { myth: 'خشب مقاوم.', truth: 'PVAc يمتص. Anti-Humidity.' },
        { myth: 'نصف سنوي.', truth: 'ربع سنوي. ضباب.' },
    ],
    relatedServices: [
        { slug: 'cleaning', context: 'تنظيف', priority: 1 },
        { slug: 'sofa-cleaning', context: 'كنب', priority: 2 },
        { slug: 'carpet-cleaning', context: 'سجاد', priority: 3 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 4 },
        { slug: 'pest-control', context: 'حشرات', priority: 5 },
        { slug: 'furniture-moving', context: 'نقل', priority: 6 },
        { slug: 'furniture-storage', context: 'تخزين', priority: 7 },
    ],
};
