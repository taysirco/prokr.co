import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف مكيفات بعنيزة — SiO₂ نفود + CaCO₃ 550ppm + طلع نخيل + ΔT 50°م + تمور ذباب (2026)',
        description: 'تنظيف مكيفات عنيزة. SiO₂ نفود 7 Mohs يخدش Fins. CaCO₃ 550ppm يُرسّب Scale. طلع نخيل يسد فلتر. ΔT 50°م يُجهد Compressor. موسم التمور = ذباب مكيف! HEPA + Descaler + فلتر حشرات + فحص FeD.',
        h1: 'تنظيف مكيفات بعنيزة — رمل نفود وكلس وطلع — لا عفن!',
        keywords: ['تنظيف مكيفات عنيزة', 'تنظيف مكيف بعنيزة', 'شركة تنظيف مكيفات عنيزة'],
    },
    content: {
        introduction: 'مكيف عنيزة يواجه 5 تحديات قصيمية متزامنة لا تجدها في أي مدينة ساحلية أو جبلية. أولاً: SiO₂ من صحراء النفود بصلابة 7 Mohs يخدش زعانف Aluminium ويُقلل CFM بنسبة 15-25%. ثانياً: CaCO₃ بتركيز 550ppm (أقل من بريدة 600 لكن Scale حقيقي!) يترسب داخل Drain Pan ويرفع فاتورة الكهرباء. ثالثاً: طلع 8 مليون نخلة قصيمية يسد فلاتر MERV بطبقة صفراء لزجة. رابعاً: ΔT 50°م (من -2°م شتاءً إلى 48°م صيفاً) يُجهد Compressor. خامساً — وهذا الفريد!: موسم التمور (أغسطس-أكتوبر) في أكبر سوق تمور بالعالم = ذباب وحشرات تدخل المكيف من فتحات التهوية ← تحتاج فلتر حشرات متخصص. الميزة الذهبية: لا عفن — رطوبة 15-25% = صفر Aspergillus. هذا يعني لا Anti-Fungal ولا Dehumidifier = أرخص 20-30% من المدن الجبلية.',
        shortAnswer: 'على عكس [الصيانة العادية التي تتجاهل SiO₂ وتمور]، يعتمد بروتوكولنا في خدمة [تنظيف المكيفات] بمدينة [عنيزة] على [HEPA + Descaler حمضي + فلتر حشرات + فحص FeD]. ففي ظل [رمل نفود 7 Mohs + CaCO₃ 550ppm + طلع 8M نخلة + ΔT 50°م + موسم تمور]، تتفاقم ظاهرة [خدش Fins + Scale + انسداد + إجهاد Compressor + ذباب مكيف]. لذا؛ يتدخل فنيونا عبر [شفط HEPA + إذابة Descaler + تركيب فلتر حشرات] لضمان كفاءة تبريد مستقرة.',
        heroSubtitle: 'SiO₂ نفود + CaCO₃ 550ppm + طلع + موسم تمور — لا عفن!',
    },
    pricing: [
        { type: 'سبليت — غسيل قصيمي', unit: 'مكيف', minPrice: 50, maxPrice: 110, time: '30-45 دقيقة' },
        { type: 'عميق (Descaler + فلتر حشرات)', unit: 'مكيف', minPrice: 90, maxPrice: 200, time: '1-2 ساعة' },
        { type: 'مركزي (دكت + Coil)', unit: 'وحدة', minPrice: 190, maxPrice: 400, time: '2-4 ساعات' },
        { type: 'عقد سنوي (4 زيارات)', unit: 'سنة', minPrice: 340, maxPrice: 680, time: '4 زيارات' },
    ],
    faq: [
        { question: 'كم مرة يحتاج المكيف تنظيف بعنيزة سنوياً؟', answer: '4 مرات/سنة — SiO₂+طلع يسد الفلتر كل 3 أشهر. بريدة: نفس التوصية. الرياض: 2-3 مرات.' },
        { question: 'كيف يؤثر موسم التمور على المكيف؟', answer: 'أغسطس-أكتوبر = ذباب+حشرات من أكبر سوق تمور بالعالم. تدخل فتحات التهوية ← فلتر حشرات متخصص.' },
        { question: 'ليش فاتورة الكهرباء ترتفع صيف عنيزة؟', answer: 'CaCO₃ 550ppm يُرسّب Scale على Evaporator = كفاءة تنخفض 30-40%. Descaler حمضي يُذيب. وفّر 15-25% من الفاتورة.' },
        { question: 'هل ممسحة عادية تكفي لتنظيف المكيف؟', answer: 'لا! SiO₂ 7 Mohs = أصلب من الألومنيوم. ممسحة عادية = خدش Fins. يجب شفط HEPA ثم غسل بماء RO بدون فرك.' },
        { question: 'كم فرق عنيزة عن بريدة في تنظيف المكيف؟', answer: 'CaCO₃ 550 vs 600 = Scale أقل 8%. لكن موسم تمور = ذباب أكثر ← فلتر حشرات إضافي. التكلفة متقاربة.' },
    ],
    expertTips: [
        'شفط HEPA قبل أي غسيل — SiO₂ يخدش لو فركت.',
        'Descaler حمضي ربع سنوي — CaCO₃ 550ppm يترسب كل 90 يوم.',
        'فلتر حشرات على فتحة التهوية — موسم التمور ذباب حقيقي.',
        'فحص FeD (Fin Density) — ΔT 50°م يُشوّه الزعانف.',
        'لا تستخدم Anti-Fungal — 15-25% رطوبة = صفر عفن. وفّر التكلفة.',
    ],
    warnings: [
        'SiO₂ + إسفنجة فرك = خدش Fins لا يُصلح ← تغيير Coil كامل (800+ ريال).',
        'CaCO₃ 550ppm بدون Descaler = Scale يرفع فاتورة كهرباء 30-40% سنوياً.',
        'موسم التمور (أغسطس-أكتوبر) بدون فلتر حشرات = ذباب يتراكم على Evaporator ← رائحة.',
    ],
    trustAnchors: [
        { ...GOV.SCE, role: 'اعتماد فنيي الصيانة' },
        { ...GOV.BALADI, role: 'ترخيص شركات الصيانة' },
        { entity: AMANA.QASSIM.entity, url: AMANA.QASSIM.url, role: 'اشتراطات الأمانة البلدية' },
    ],
    expertReviewer: EXPERTS.ALJUND,
    expertCitations: [
        { expert: EXPERTS.ALJUND.name, quote: 'مكيف عنيزة: SiO₂ نفود+CaCO₃+طلع نخيل. موسم التمور = ذباب يدخل المكيف. فلتر حشرات ضروري.', source: 'موسوعة أخطاء في البناء — فصل التكييف القصيمي' },
    ],
    saudiRegulations: [REGULATIONS.SBC_601],
    verificationBadges: [
        { badge: '✔️ صيانة مرخصة من بلدي', authority: 'منصة بلدي', icon: 'shield-check' },
        { badge: '✔️ فني معتمد SCE', authority: 'هيئة المهندسين', icon: 'shield-check' },
    ],
    equipment: [
        { name: 'شفاط HEPA H13', use: 'شفط SiO₂+طلع بدون خدش — 99.97% جزيئات ≥0.3μm' },
        { name: 'Descaler حمضي pH 2.5', use: 'إذابة CaCO₃ 550ppm من Evaporator+Drain' },
        { name: 'فلتر حشرات شبكي', use: 'حماية فتحة التهوية من ذباب موسم التمور' },
    ],
    hiddenObjections: [
        { fear: 'مثل بريدة بالضبط — ليش أدفع؟', solution: 'CaCO₃ أقل 8% لكن موسم تمور = فلتر حشرات إضافي. التكلفة متقاربة لكن البروتوكول مختلف.' },
        { fear: 'الذباب طبيعي ولا يأثر.', solution: 'يدخل المكيف من فتحات التهوية ← يتراكم على Evaporator الرطب ← رائحة + انسداد.' },
    ],
    counterNarratives: [
        { myth: 'المكيف يحتاج صيانة مرتين بالسنة فقط.', truth: '4 مرات — SiO₂+طلع يسد كل 90 يوم. مرتين = 40% فقدان كفاءة.' },
        { myth: 'ذباب التمور لا يصل المكيف.', truth: 'يدخل من فتحات التهوية الخارجية ← يتراكم على Evaporator الرطب.' },
    ],
    relatedServices: [
        { slug: 'cleaning', context: 'تنظيف منازل — SiO₂+طلع', priority: 1 },
        { slug: 'carpet-cleaning', context: 'سجاد — SiO₂ Electrostatic', priority: 2 },
        { slug: 'villas-cleaning', context: 'فلل — 4 محاور قصيمية', priority: 3 },
        { slug: 'apartments-cleaning', context: 'شقق — CaCO₃ حمامات', priority: 4 },
        { slug: 'pest-control', context: 'حشرات — موسم تمور', priority: 5 },
        { slug: 'steam-cleaning', context: 'بخار — يُذيب CaCO₃', priority: 6 },
        { slug: 'marble-polishing', context: 'رخام — SiO₂ Pitting', priority: 7 },
    ],
};
