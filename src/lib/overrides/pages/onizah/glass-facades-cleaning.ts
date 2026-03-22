import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../gov-references';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف واجهات زجاجية بعنيزة — SiO₂ Pitting + CaCO₃ 550ppm + تمور لزجة محلات — لا Biofilm! (2026)',
        description: 'تنظيف واجهات عنيزة. SiO₂ Pitting زجاج. CaCO₃ 550ppm بقع. تمور لزجة على واجهات محلات. لا Biofilm! pH neutral + Descaler.',
        h1: 'تنظيف واجهات زجاجية بعنيزة — رمل يحفر وتمور تلزّق',
        keywords: ['تنظيف واجهات عنيزة', 'تنظيف واجهات بعنيزة', 'شركة تنظيف واجهات عنيزة'],
    },
    content: {
        introduction: 'واجهات عنيزة الزجاجية تواجه ثلاثي هجوم فريد. أولاً: SiO₂ من النفود بصلابة 7 Mohs يُحدث Pitting (حُفر مجهرية) على سطح الزجاج (6.5 Mohs) — أي فرك بقطعة قماش تحمل رمل = خدوش دائرية لا تُزال. يجب شطف بماء أولاً ثم مسح بـ Microfiber بدون ضغط. ثانياً: CaCO₃ 550ppm يترك بقع كلسية بيضاء على الواجهات بعد كل غسلة — Descaler حمضي أو ماء Softened يمنعها. ثالثاً — وهذا الفريد!: واجهات محلات سوق التمور تتلطخ ببقايا تمور لزجة من أيدي الزبائن والشاحنات. السكر يتكرمل تحت شمس 48°م = طبقة صلبة على الزجاج. Enzymatic يُكسِّر السكر. الميزة الذهبية: لا Biofilm — رطوبة 15-25% = لا طحالب ولا فطريات على الواجهات. عكس جدة والباحة تماماً!',
        shortAnswer: 'على عكس [الفرك بقطعة قماش جافة الذي يُحدث Pitting]، يعتمد بروتوكولنا في خدمة [تنظيف الواجهات] بمدينة [عنيزة] على [pH Neutral + Descaler + Enzymatic تمور]. ففي ظل [SiO₂ 7 Mohs + CaCO₃ 550ppm + تمور لزجة + 48°م]، تتفاقم ظاهرة [Pitting + بقع كلسية + Caramelized Sugar]. لذا؛ يتدخل فريقنا عبر [شطف ← مسح ناعم ← إذابة ← إنزيم] لضمان واجهات شفافة بدون خدش.',
        heroSubtitle: 'SiO₂ Pitting + CaCO₃ بقع + تمور لزجة — لا Biofilm!',
    },
    pricing: [
        { type: 'واجهة صغيرة (< 50 م²)', unit: 'خدمة', minPrice: 130, maxPrice: 270, time: '2-3 ساعات' },
        { type: 'واجهة كبيرة (100+ م²)', unit: 'خدمة', minPrice: 280, maxPrice: 650, time: '4-8 ساعات' },
        { type: 'محل سوق تمور + Enzymatic', unit: 'خدمة', minPrice: 170, maxPrice: 340, time: '2-4 ساعات' },
        { type: 'ربع سنوي (4 زيارات)', unit: 'سنة', minPrice: 400, maxPrice: 800, time: '4 زيارات' },
    ],
    faq: [
        { question: 'كيف أنظف واجهة زجاجية بعنيزة بدون خدش؟', answer: 'شطف ماء أولاً لإزالة SiO₂ ← ثم Microfiber بدون ضغط. لا فرك أبداً! SiO₂ 7 Mohs > زجاج 6.5.' },
        { question: 'ليش الواجهات تبقّع بعد الغسل بعنيزة؟', answer: 'CaCO₃ 550ppm — ماء الصنبور يترك بقع كلسية. Softened Water أو Descaler بعد الغسل.' },
        { question: 'كم تكلفة تنظيف واجهة محل تمور؟', answer: '170-340 ريال — Enzymatic يُزيل سكر التمور. بدونه = فرك = خدش الزجاج.' },
        { question: 'هل الواجهات تحتاج Anti-Biofilm بعنيزة؟', answer: 'لا! 15-25% رطوبة = صفر Biofilm. وفّر 100% من تكلفة Anti-Biofilm. عكس جدة والباحة.' },
        { question: 'متى أنظف الواجهات بعنيزة؟', answer: 'بعد عواصف الربيع (SiO₂) وبعد موسم التمور (سكر). ربع سنوي مثالي. لا حاجة شهري.' },
    ],
    expertTips: [
        'شطف ماء أولاً — SiO₂ يخدش لو فركت مباشرة.',
        'Descaler بعد كل غسلة — CaCO₃ 550ppm يبقّع.',
        'Enzymatic لمحلات التمور — يُكسِّر السكر بدون فرك.',
        'لا Anti-Biofilm — 15-25% = صفر. وفّر.',
        'Marine Sealant لا حاجة — لا رطوبة بحرية.',
    ],
    warnings: [
        'فرك + SiO₂ = Pitting دائم في الزجاج — تغيير لوح كامل (1000+ ريال).',
        'ماء صنبور + شمس = Water Spots كلسية تتشرب بالزجاج — Softened فقط.',
        'تمور لزجة + 48°م + أسبوع = Caramelized Sugar لا يزول إلا بـ Enzymatic.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص شركات النظافة' },
        { entity: AMANA.QASSIM.entity, url: AMANA.QASSIM.url, role: 'اشتراطات واجهات — أمانة القصيم' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALMISNID.name, quote: 'واجهات عنيزة: SiO₂ Pitting + تمور لزجة = فريد. لا Biofilm — ميزة. pH Neutral+Enzymatic.', source: 'نصائح هندسية — واجهات قصيمية' },
    ],
    saudiRegulations: [REGULATIONS.SBC_601],
    verificationBadges: [{ badge: '✔️ شركة واجهات مرخصة', authority: 'منصة بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'pH Neutral Cleaner', use: 'تنظيف زجاج — لا يتفاعل مع SiO₂ أو CaCO₃' },
        { name: 'Descaler حمضي', use: 'إذابة بقع CaCO₃ الكلسية' },
        { name: 'Enzymatic Sugar Breaker', use: 'إزالة تمور لزجة بدون فرك' },
    ],
    commonConcerns: [
        { concern: 'مثل أي مدينة.', solution: 'تمور لزجة = فريد عنيزة. Enzymatic إضافي.' },
        { concern: 'Biofilm مثل الباحة.', solution: 'صفر — 15-25% رطوبة. وفّر 100%.' },
    ],
    consumerEducation: [
        { myth: 'الماء والصابون يكفي للواجهات.', truth: 'SiO₂ Pitting + CaCO₃ Spots. يحتاج أدوات متخصصة.' },
        { myth: 'الواجهات تحتاج تنظيف شهري.', truth: 'ربع سنوي يكفي — لا Biofilm = لا تراكم.' },
    ],
    relatedServices: [
        { slug: 'cleaning', context: 'تنظيف عام', priority: 1 },
        { slug: 'marble-polishing', context: 'رخام — SiO₂', priority: 2 },
        { slug: 'office-cleaning', context: 'مكاتب', priority: 3 },
        { slug: 'villas-cleaning', context: 'فلل', priority: 4 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 5 },
        { slug: 'pest-control', context: 'حشرات — تمور', priority: 6 },
        { slug: 'apartments-cleaning', context: 'شقق', priority: 7 },
    ],
};
