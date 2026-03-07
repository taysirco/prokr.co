import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف مكيفات بخميس مشيط — ضباب 200 يوم عفن Evaporator + 60-85% تكثّف + بارد 0°م + أمطار (2026)',
        description: 'تنظيف مكيفات خميس مشيط. ضباب 200 يوم = عفن أسود Aspergillus على Evaporator. 60-85% تكثّف داخلي. بارد 0°م = Heat Pump. أمطار وحدة خارجية. Anti-Fungal+Drain+Defrost.',
        h1: 'تنظيف مكيفات بخميس مشيط — ضباب يُعفّن وبرد يُكثّف',
        keywords: ['تنظيف مكيفات خميس مشيط', 'تنظيف مكيف بخميس مشيط', 'شركة تنظيف مكيفات خميس مشيط'],
    },
    content: {
        introduction: 'مكيف خميس مشيط يعمل في بيئة جبلية عسيرية لا تُشبه أي مدينة صحراوية. أولاً — ضباب 200 يوم/سنة: رطوبة ضبابية مستمرة تدخل Evaporator ← عفن أسود Aspergillus يستعمر الزعانف والـ Drain Pan خلال أسبوعين. Anti-Fungal كل 3 أشهر إلزامي. ثانياً — 60-85% رطوبة = تكثّف داخلي: ماء يتكثف داخل المكيف حتى وهو مطفأ ← يُغرق Drain Pan ← تسريب مائي + رائحة عفن. تصريف وتنظيف Drain كل صيانة. ثالثاً — بارد 0-5°م شتاءً: المكيف يعمل في وضع التدفئة (Heat Pump) ← يحتاج فحص Defrost Cycle + كفاءة الضاغط في البرد. رابعاً — أمطار موسمية: ماء يدخل الوحدة الخارجية ← تآكل مكونات كهربائية. حماية مائية. مقارنة: عنيزة = لا عفن + لا تكثّف + لا Heat Pump = أرخص 30%. خميس = أعقد مكيف.',
        shortAnswer: 'على عكس [الصيانة الصحراوية بدون Anti-Fungal]، يعتمد بروتوكولنا في خدمة [تنظيف المكيفات] بمدينة [خميس مشيط] على [Anti-Fungal + تصريف Drain + فحص Heat Pump + حماية مائية]. ففي ظل [ضباب 200 يوم + 60-85% تكثّف + بارد 0°م + أمطار]، تتفاقم ظاهرة [عفن Aspergillus + تسريب + تجمد Defrost]. لذا؛ يتدخل فنيونا عبر [تعقيم ← تصريف ← فحص ← حماية] لضمان مكيف صحي وفعّال.',
        heroSubtitle: 'ضباب 200 يوم عفن + 60-85% تكثّف + بارد 0°م + أمطار',
    },
    pricing: [
        { type: 'سبليت — جبلي', unit: 'مكيف', minPrice: 60, maxPrice: 130, time: '30-45 دقيقة' },
        { type: 'عميق (Anti-Fungal + Drain)', unit: 'مكيف', minPrice: 110, maxPrice: 240, time: '1-2 ساعة' },
        { type: 'مركزي (دكت)', unit: 'وحدة', minPrice: 220, maxPrice: 450, time: '2-4 ساعات' },
        { type: 'عقد (4 زيارات/سنة)', unit: 'سنة', minPrice: 380, maxPrice: 760, time: '4 زيارات' },
    ],
    faq: [
        { question: 'كم مرة يحتاج المكيف صيانة بخميس مشيط سنوياً؟', answer: '4 مرات/سنة — ضباب 200 يوم = عفن كل 3 أشهر. عنيزة: 4 أيضاً لكن بسبب SiO₂ ليس عفن.' },
        { question: 'كيف يدخل العفن المكيف بخميس مشيط؟', answer: 'ضباب مستمر 200 يوم = رطوبة تدخل Evaporator ← Aspergillus يستعمر الزعانف. Anti-Fungal يقتله كل 3 أشهر.' },
        { question: 'ليش المكيف يسرّب ماء بخميس مشيط؟', answer: '60-85% = تكثّف داخلي حتى والمكيف مطفأ ← Drain Pan يمتلئ. تصريف + تنظيف كل صيانة.' },
        { question: 'هل المكيف يحتاج تدفئة بخميس مشيط؟', answer: '0-5°م شتاءً = Heat Pump ضروري. فحص Defrost Cycle — بدونه Evaporator يتجمد = كفاءة صفر.' },
        { question: 'كم الفرق بين خميس مشيط وعنيزة بصيانة المكيف؟', answer: 'أغلى 30% — Anti-Fungal+Drain+Heat Pump. عنيزة: لا عفن+لا تكثّف+لا Heat Pump = أبسط وأرخص.' },
    ],
    expertTips: [
        'Anti-Fungal كل 3 أشهر — ضباب 200 يوم = عفن مستمر.',
        'تصريف Drain Pan كل صيانة — 60-85% تكثّف.',
        'فحص Heat Pump + Defrost — 0°م شتاءً.',
        'حماية وحدة خارجية — أمطار تُتلف الكهربائيات.',
        'لا تطفئ المكيف بالكامل — Fan يُجفف التكثّف.',
    ],
    warnings: [
        'ضباب + Evaporator بدون Anti-Fungal = عفن أسود Aspergillus — حساسية تنفسية خطيرة.',
        'Drain Pan مسدود + 60-85% = تسريب مائي يُتلف سقف وجدران.',
        '0°م + بدون Defrost Cycle = Evaporator يتجمد — تلف ضاغط (2000+ ريال).',
    ],
    trustAnchors: [
        { ...GOV.SCE, role: 'اعتماد فنيي الصيانة' },
        { ...GOV.BALADI, role: 'ترخيص الصيانة' },
        { entity: AMANA.ASIR.entity, url: AMANA.ASIR.url, role: 'اشتراطات أمانة عسير' },
    ],
    expertReviewer: EXPERTS.ALJUND,
    expertCitations: [
        { expert: EXPERTS.ALJUND.name, quote: 'مكيف خميس مشيط: ضباب 200 يوم + 0°م. عفن Aspergillus + Heat Pump. جبلي فريد لا يُشبه الصحراء.', source: 'موسوعة أخطاء في البناء — مكيفات جبلية' },
    ],
    saudiRegulations: [REGULATIONS.SBC_601],
    verificationBadges: [
        { badge: '✔️ صيانة مكيفات مرخصة', authority: 'بلدي + SCE', icon: 'shield-check' },
    ],
    equipment: [
        { name: 'Anti-Fungal صناعي', use: 'يقتل عفن Aspergillus — ضباب 200 يوم' },
        { name: 'Drain Pan Cleaner', use: 'تصريف تكثّف 60-85% — يمنع تسريب' },
        { name: 'فاحص Heat Pump', use: 'فحص Defrost Cycle — 0°م شتاءً' },
    ],
    hiddenObjections: [
        { fear: 'مثل الرياض بالضبط.', solution: 'ضباب+عفن+برد+أمطار = مختلف تماماً. الرياض: SiO₂+حر.' },
        { fear: 'صيانة عادية تكفي.', solution: 'Anti-Fungal + Heat Pump + Drain = 3 خطوات إضافية.' },
    ],
    counterNarratives: [
        { myth: 'المكيف يحتاج صيانة مرتين/سنة.', truth: '4 مرات — ضباب 200 يوم = عفن كل 3 أشهر.' },
        { myth: 'لا حاجة لتدفئة بالسعودية.', truth: '0°م شتاءً = Heat Pump ضروري. خميس ليست الرياض.' },
    ],
    relatedServices: [
        { slug: 'cleaning', context: 'تنظيف — عفن', priority: 1 },
        { slug: 'carpet-cleaning', context: 'سجاد — عفن', priority: 2 },
        { slug: 'villas-cleaning', context: 'فلل — 6 محاور', priority: 3 },
        { slug: 'apartments-cleaning', context: 'شقق — ضباب', priority: 4 },
        { slug: 'pest-control', context: 'حشرات', priority: 5 },
        { slug: 'steam-cleaning', context: 'بخار — عفن', priority: 6 },
        { slug: 'marble-polishing', context: 'رخام', priority: 7 },
    ],
};
