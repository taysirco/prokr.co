import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف شقق بخميس مشيط — ضباب عفن+عث+تكثّف+أمطار — 5-6 محاور! Dehumidifier! (2026)',
        description: 'تنظيف شقق خميس مشيط. ضباب 200 يوم عفن. عث مفروشات. 60-85% تكثّف. أمطار. Anti-Fungal+Anti-Mite+Dehumidifier.',
        h1: 'تنظيف شقق بخميس مشيط — ضباب وعفن وعث — أعقد!',
        keywords: ['تنظيف شقق خميس مشيط', 'تنظيف شقة بخميس مشيط', 'شركة تنظيف شقق خميس مشيط'],
    },
    content: {
        introduction: 'شقة خميس مشيط تواجه 5-6 محاور جبلية متزامنة لا تجدها في أي مدينة صحراوية! المحور 1 — عفن أسطح: ضباب 200 يوم/سنة + 60-85% رطوبة = عفن Aspergillus على جدران وأسقف وزوايا الحمامات خلال أسبوعين. Anti-Fungal كل زيارة. المحور 2 — عث مفروشات: عث Dermatophagoides يتكاثر في سجاد وفرش رطبة = حساسية جلدية+تنفسية. Anti-Mite كل أسبوعين. المحور 3 — تكثّف: 60-85% = نوافذ تتكثف ← ماء ينزل على الأرضيات ← بقع رطوبة. تجفيف+Dehumidifier. المحور 4 — أمطار: ماء يدخل من تشققات = رطوبة إضافية. فحص تسريب. المحور 5 — برد: 0-5°م = تجمد مواسير خارجية محتمل. فحص شتوي. مقارنة: عنيزة = 3 خطوات + لا عفن + تجفيف 20 دقيقة. خميس = 5-6 خطوات + عفن+عث + تجفيف 4-8 ساعات = أغلى 40%.',
        shortAnswer: 'على عكس [التنظيف بـ 3 خطوات في المدن الصحراوية]، يعتمد بروتوكولنا في خدمة [تنظيف الشقق] بمدينة [خميس مشيط] على [Anti-Fungal+Anti-Mite+Dehumidifier+فحص تسريب]. ففي ظل [ضباب 200 يوم+60-85%+عفن+عث+أمطار+برد]، تتفاقم ظاهرة [عفن أسطح+عث مفروشات+تكثّف+رطوبة]. لذا؛ يتدخل فريقنا عبر [تعقيم ← ضد عث ← تجفيف ← فحص] لضمان شقة صحية.',
        heroSubtitle: 'ضباب عفن + عث + تكثّف + أمطار — 5-6 محاور!',
    },
    pricing: [
        { type: 'شقة غرفتين', unit: 'شقة', minPrice: 180, maxPrice: 370, time: '3-4h + تجفيف 4-8h' },
        { type: 'شقة 3+ غرف', unit: 'شقة', minPrice: 270, maxPrice: 540, time: '4-6h + تجفيف' },
        { type: '+ Anti-Fungal/Mite عميق', unit: 'شقة', minPrice: 230, maxPrice: 460, time: '4-5h + تجفيف' },
        { type: 'أسبوعي (4 زيارات/شهر)', unit: 'شهر', minPrice: 350, maxPrice: 700, time: '4 زيارات' },
    ],
    faq: [
        { question: 'كم تكلفة تنظيف شقة بخميس مشيط مقارنة بعنيزة؟', answer: 'أغلى 40% — Anti-Fungal+Anti-Mite+Dehumidifier. 180-540 مقابل 135-400. 5-6 محاور مقابل 3.' },
        { question: 'كيف أمنع عفن جدران الشقة بخميس مشيط؟', answer: 'Anti-Fungal كل زيارة + Dehumidifier دائم + تهوية. بدونها = عفن خلال أسبوعين من الضباب.' },
        { question: 'ليش النوافذ تتكثف بخميس مشيط؟', answer: '60-85% رطوبة + برد خارجي = تكثّف على الزجاج ← ماء ينزل. Dehumidifier + عزل زجاج مزدوج.' },
        { question: 'هل العث مشكلة حقيقية بخميس مشيط؟', answer: 'Dermatophagoides يتكاثر في بيئة رطبة. سجاد+فرش = حساسية 20-30% من السكان. Anti-Mite كل أسبوعين.' },
        { question: 'متى أفضل وقت لتنظيف عميق بخميس مشيط؟', answer: 'بعد موسم الأمطار (مارس-أبريل) وقبل الشتاء (أكتوبر). عفن+رطوبة = تنظيف ربع سنوي إلزامي.' },
    ],
    expertTips: [
        'Anti-Fungal كل زيارة — ضباب 200 يوم = عفن مستمر.',
        'Anti-Mite كل أسبوعين — عث في مفروشات رطبة.',
        'Dehumidifier دائم — 60-85% = تكثّف مستمر.',
        'فحص تسريب — أمطار = رطوبة إضافية.',
        'تجفيف 4-8h بعد كل غسل — بدونه عفن جديد!',
    ],
    warnings: [
        'عفن أسطح + أسبوعين إهمال = Aspergillus أسود — حساسية تنفسية خطيرة YMYL.',
        'تكثّف نوافذ بدون Dehumidifier = بقع رطوبة على الجدران ← تقشّر دهان.',
        'عث + عفن معاً = حساسية مزدوجة — 20-30% من السكان يتأثرون.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص شركات التنظيف' },
        { entity: AMANA.ASIR.entity, url: AMANA.ASIR.url, role: 'اشتراطات أمانة عسير' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALMISNID.name, quote: 'شقق خميس مشيط: 5-6 محاور. ضباب+عفن+عث+تكثّف. Dehumidifier دائم إلزامي.', source: 'جغرافيا المناخ — عسير' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ شركة مرخصة', authority: 'بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'Anti-Fungal صناعي', use: 'يقتل عفن Aspergillus — ضباب 200 يوم' },
        { name: 'Anti-Mite', use: 'يقتل عث Dermatophagoides — مفروشات رطبة' },
        { name: 'Dehumidifier صناعي', use: 'تجفيف 4-8h + تحكم رطوبة 60-85%' },
    ],
    commonConcerns: [
        { concern: 'مثل عنيزة.', solution: '5-6 محاور مقابل 3. عفن+عث+تكثّف = مختلف تماماً.' },
        { concern: 'Dehumidifier غالي.', solution: 'بدونه = عفن+تكثّف = أغلى 10× على المدى الطويل.' },
    ],
    consumerEducation: [
        { myth: 'شقة خميس مثل عنيزة.', truth: '5-6 محاور مقابل 3. عفن+عث = أعقد وأغلى 40%.' },
        { myth: '3 خطوات تكفي.', truth: 'بدون Anti-Fungal+Anti-Mite = عفن+عث = كارثة صحية.' },
    ],
    relatedServices: [
        { slug: 'cleaning', context: 'تنظيف — عفن', priority: 1 },
        { slug: 'carpet-cleaning', context: 'سجاد — عث', priority: 2 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف — عفن', priority: 3 },
        { slug: 'steam-cleaning', context: 'بخار', priority: 4 },
        { slug: 'pest-control', context: 'حشرات', priority: 5 },
        { slug: 'marble-polishing', context: 'رخام', priority: 6 },
        { slug: 'villas-cleaning', context: 'فلل', priority: 7 },
    ],
};
