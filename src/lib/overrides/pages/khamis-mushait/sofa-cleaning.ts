import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف كنب بخميس مشيط — عفن+عث+بلمرة رطبة — Dehumidifier! أعقد كنب (2026)',
        description: 'تنظيف كنب خميس مشيط. عفن Aspergillus+عث+بلمرة رطبة. 60-85%. Enzymatic+Anti-Fungal+Anti-Mite+Dehumidifier.',
        h1: 'تنظيف كنب بخميس مشيط — عفن وعث — أعقد!',
        keywords: ['تنظيف كنب خميس مشيط', 'غسيل كنب بخميس مشيط', 'شركة تنظيف كنب خميس مشيط'],
    },
    content: {
        introduction: 'كنب خميس مشيط يواجه ثلاثي الخطر! عفن Aspergillus: 60-85% + ضباب = عفن يستعمر أقمشة الكنب أسبوعين. Anti-Fungal كل غسلة. عث Dermatophagoides: يتكاثر في حشوات الكنب الرطبة = حساسية جلدية+تنفسية. Anti-Mite كل أسبوعين. بلمرة رطبة: بخور+دهون+60-85% = طبقة بوليمرية رطبة عميقة. الشامبو لا يصل — Enzymatic+بخار+استخلاص. تجفيف 4-8 ساعات: بدون Dehumidifier = عفن جديد بعد الغسل! مقارنة: عنيزة = لا عفن + لا عث + بلمرة جافة + تجفيف 20 دقيقة + أرخص 30%. خميس = ثلاثي خطر = أغلى+أعقد.',
        shortAnswer: 'على عكس [الشامبو العادي بدون Anti-Fungal]، يعتمد بروتوكولنا في خدمة [تنظيف الكنب] بمدينة [خميس مشيط] على [Enzymatic+Anti-Fungal+Anti-Mite+Dehumidifier]. ففي ظل [60-85%+ضباب+عفن+عث+بلمرة رطبة]، تتفاقم ظاهرة [عفن أقمشة+عث حشوات+خشونة عميقة]. لذا؛ يتدخل فريقنا عبر [إنزيم ← بخار ← تعقيم ← ضد عث ← تجفيف].',
        heroSubtitle: 'عفن + عث + بلمرة رطبة — Dehumidifier إلزامي!',
    },
    pricing: [
        { type: 'كنب عادي (3+2+1)', unit: 'طقم', minPrice: 170, maxPrice: 350, time: '2-3h + تجفيف 4-8h' },
        { type: '+ Anti-Fungal/Mite', unit: 'طقم', minPrice: 220, maxPrice: 450, time: '3-4h + تجفيف' },
        { type: 'كنب L-Shape كبير', unit: 'قطعة', minPrice: 130, maxPrice: 270, time: '1.5-2h + تجفيف' },
        { type: 'ربع سنوي (4 زيارات)', unit: 'سنة', minPrice: 550, maxPrice: 1100, time: '4 زيارات' },
    ],
    faq: [
        { question: 'كيف أمنع عفن الكنب بخميس مشيط؟', answer: 'Anti-Fungal كل غسلة + Dehumidifier دائم. بدونهما = عفن أسبوعين.' },
        { question: 'ليش الشامبو ما يكفي لكنب خميس؟', answer: 'بلمرة رطبة عميقة = الشامبو سطحي. Enzymatic+بخار 150°م+استخلاص = يصل العمق.' },
        { question: 'كم تكلفة تنظيف كنب بخميس مقارنة بعنيزة؟', answer: 'أغلى 30% — Anti-Fungal+Anti-Mite+Dehumidifier. 170-450 مقابل 130-350.' },
        { question: 'هل العث يسبب حساسية من الكنب بخميس؟', answer: 'Dermatophagoides في حشوات رطبة = حساسية جلدية+تنفسية. Anti-Mite كل أسبوعين.' },
        { question: 'كم يحتاج الكنب يجف بعد الغسل بخميس؟', answer: '4-8h مع Dehumidifier! بدونه = 12-24h + عفن جديد. عنيزة: 20 دقيقة.' },
    ],
    expertTips: [
        'Enzymatic+بخار — بلمرة رطبة عميقة.',
        'Anti-Fungal كل غسلة — عفن أقمشة أسبوعين.',
        'Anti-Mite أسبوعين — عث حشوات رطبة.',
        'Dehumidifier فوري — بدونه عفن جديد!',
        'لا تخلي الكنب رطب — عفن 72 ساعة.',
    ],
    warnings: [
        'غسل بدون Dehumidifier = عفن جديد 72 ساعة — أسوأ!',
        'عفن+عث = حساسية مزدوجة — YMYL.',
        'بلمرة رطبة × 6 أشهر = لا تُزال — تغيير تنجيد.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص شركات التنظيف' },
        { entity: AMANA.ASIR.entity, url: AMANA.ASIR.url, role: 'اشتراطات أمانة عسير' },
    ],
    expertReviewer: EXPERTS.ALMOHAIMED,
    expertCitations: [
        { expert: EXPERTS.ALMOHAIMED.name, quote: 'كنب خميس: ثلاثي خطر. عفن+عث+بلمرة رطبة. Dehumidifier+Anti-Fungal+Enzymatic.', source: 'نصائح هندسية — أقمشة جبلية' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ تنظيف مرخص', authority: 'بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'Enzymatic+بخار 150°م', use: 'يكسّر بلمرة رطبة عميقة' },
        { name: 'Anti-Fungal+Anti-Mite', use: 'يقتل عفن وعث' },
        { name: 'Dehumidifier', use: 'تجفيف 4-8h' },
    ],
    hiddenObjections: [
        { fear: 'شامبو يكفي.', solution: 'بلمرة رطبة = سطحي فقط. Enzymatic+بخار.' },
        { fear: 'مثل عنيزة.', solution: 'عكس! عفن+عث+4-8h مقابل 20 دقيقة.' },
    ],
    counterNarratives: [
        { myth: 'الكنب يجف بسرعة.', truth: '4-8h مقابل 20 دقيقة. 60-85% vs 15-25%.' },
        { myth: 'لا عفن.', truth: '60-85%+ضباب = عفن أسبوعين.' },
    ],
    relatedServices: [
        { slug: 'carpet-cleaning', context: 'سجاد — عفن', priority: 1 },
        { slug: 'councils-cleaning', context: 'مجالس', priority: 2 },
        { slug: 'cleaning', context: 'تنظيف', priority: 3 },
        { slug: 'steam-cleaning', context: 'بخار', priority: 4 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 5 },
        { slug: 'pest-control', context: 'حشرات', priority: 6 },
        { slug: 'furniture-cleaning', context: 'أثاث', priority: 7 },
    ],
};
