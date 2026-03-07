import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف منازل بخميس مشيط — 6-7 محاور جبلية! عفن+عث+تكثّف+أمطار+برد+ضباب — أعقد! (2026)',
        description: 'تنظيف منازل خميس مشيط. 6-7 محاور! عفن Aspergillus+عث+تكثّف+أمطار+برد+ضباب. Anti-Fungal+Anti-Mite+Dehumidifier. أغلى 40%.',
        h1: 'تنظيف منازل بخميس مشيط — 6-7 محاور جبلية — أعقد!',
        keywords: ['تنظيف منازل خميس مشيط', 'تنظيف بيوت بخميس مشيط', 'شركة تنظيف خميس مشيط'],
    },
    content: {
        introduction: 'منزل خميس مشيط يواجه 6-7 محاور جبلية متزامنة — أعقد تنظيف بالمملكة! المحور 1 — عفن أسطح: ضباب 200 يوم + 60-85% = عفن Aspergillus على جدران وزوايا وحمامات. Anti-Fungal. المحور 2 — عث مفروشات: Dermatophagoides في سجاد وفرش رطبة. Anti-Mite. المحور 3 — تكثّف: نوافذ وأنابيب تتكثف = بقع رطوبة. تجفيف+Dehumidifier. المحور 4 — أمطار: ماء يدخل = رطوبة إضافية. فحص تسريب. المحور 5 — ضباب يتسلل: من نوافذ مفتوحة = رطوبة داخلية. إحكام. المحور 6 — برد: 0-5°م = تكثّف إضافي على أسطح باردة. المحور 7 (موسمي): حشرات رطبة. مقارنة: عنيزة = 4 محاور + لا عفن + تجفيف 20 دقيقة + أرخص 40%. خميس = أعقد = أغلى 40%.',
        shortAnswer: 'على عكس [التنظيف بـ 4 محاور في المدن الصحراوية]، يعتمد بروتوكولنا في خدمة [تنظيف المنازل] بمدينة [خميس مشيط] على [6-7 محاور: Anti-Fungal+Anti-Mite+Dehumidifier+فحص+إحكام+HEPA]. ففي ظل [ضباب+60-85%+عفن+عث+تكثّف+أمطار+برد]، تتفاقم ظاهرة [عفن+عث+رطوبة+تسريب]. لذا؛ يتدخل فريقنا عبر [7 محاور متكاملة].',
        heroSubtitle: '6-7 محاور جبلية — عفن+عث+تكثّف+أمطار — أعقد!',
    },
    pricing: [
        { type: 'شقة غرفتين', unit: 'شقة', minPrice: 200, maxPrice: 400, time: '4-5h + تجفيف 4-8h' },
        { type: 'فيلا صغيرة (300 م²)', unit: 'فيلا', minPrice: 450, maxPrice: 900, time: '7-10h + تجفيف' },
        { type: '+ Anti-Fungal/Mite شامل', unit: 'إضافي', minPrice: 120, maxPrice: 250, time: '2h' },
        { type: 'أسبوعي (4 زيارات/شهر)', unit: 'شهر', minPrice: 400, maxPrice: 800, time: '4 زيارات' },
    ],
    faq: [
        { question: 'كم تكلفة تنظيف منزل بخميس مقارنة بعنيزة؟', answer: 'أغلى 40% — 6-7 محاور مقابل 4. Anti-Fungal+Anti-Mite+Dehumidifier = تكلفة إضافية.' },
        { question: 'ليش 6-7 محاور بخميس و4 بعنيزة؟', answer: 'عنيزة: لا عفن+لا عث+لا تكثّف+لا أمطار+لا ضباب. خميس: كلها موجودة = 6-7 محاور.' },
        { question: 'كيف أمنع عفن المنزل بخميس مشيط؟', answer: 'Anti-Fungal كل زيارة + Dehumidifier دائم + تهوية. بدونها = عفن أسبوعين.' },
        { question: 'هل Dehumidifier ضروري بخميس مشيط؟', answer: 'إلزامي — 60-85% = تكثّف+عفن+عث. بدونه = كل المشاكل تتفاقم.' },
        { question: 'متى أنظف المنزل تنظيف عميق بخميس مشيط؟', answer: 'كل 3 أشهر — عفن+عث = تراكم أسرع. عنيزة: كل 6 أشهر. مضاعف.' },
    ],
    expertTips: [
        'Anti-Fungal كل زيارة — عفن أسطح أسبوعين.',
        'Anti-Mite كل أسبوعين — عث مفروشات رطبة.',
        'Dehumidifier دائم — 60-85% = تكثّف مستمر.',
        'فحص تسريب — أمطار = رطوبة إضافية.',
        'إحكام نوافذ — ضباب يتسلل = رطوبة داخلية.',
    ],
    warnings: [
        'بدون Anti-Fungal = عفن Aspergillus أسود خلال أسبوعين — حساسية تنفسية YMYL.',
        'بدون Dehumidifier = تكثّف+عفن+عث = ثلاثي خطر صحي.',
        '6 أشهر إهمال + 60-85% = عفن هيكلي — إصلاح 10000+ ريال.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص شركات التنظيف' },
        { entity: AMANA.ASIR.entity, url: AMANA.ASIR.url, role: 'اشتراطات أمانة عسير' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALMISNID.name, quote: 'منزل خميس: 6-7 محاور. أعقد تنظيف بالمملكة. عفن+عث+تكثّف. Dehumidifier إلزامي.', source: 'جغرافيا المناخ — عسير' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ تنظيف منازل مرخص', authority: 'بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'Anti-Fungal صناعي', use: 'يقتل عفن Aspergillus — ضباب 200 يوم' },
        { name: 'Anti-Mite', use: 'يقتل عث Dermatophagoides — مفروشات رطبة' },
        { name: 'Dehumidifier صناعي', use: 'تحكم رطوبة 60-85% + تجفيف' },
    ],
    hiddenObjections: [
        { fear: 'مثل عنيزة.', solution: '6-7 محاور مقابل 4. عفن+عث = مختلف تماماً.' },
        { fear: 'أغلى = مبالغة.', solution: 'البيئة أعقد = خطوات أكثر. بدونها = كارثة.' },
    ],
    counterNarratives: [
        { myth: '4 خطوات تكفي مثل عنيزة.', truth: 'بدون Anti-Fungal+Anti-Mite = عفن+عث. 6-7 إلزامي.' },
        { myth: 'Dehumidifier ترف.', truth: '60-85% = بدونه كل شيء يتعفّن.' },
    ],
    relatedServices: [
        { slug: 'apartments-cleaning', context: 'شقق — عفن', priority: 1 },
        { slug: 'villas-cleaning', context: 'فلل', priority: 2 },
        { slug: 'carpet-cleaning', context: 'سجاد — عث', priority: 3 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف — عفن', priority: 4 },
        { slug: 'pest-control', context: 'حشرات', priority: 5 },
        { slug: 'steam-cleaning', context: 'بخار', priority: 6 },
        { slug: 'hourly-cleaning', context: 'بالساعة', priority: 7 },
    ],
};
