import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف بالساعة بعنيزة — 3 خطوات فقط! SiO₂+CaCO₃+طلع — لا عفن! أرخص+أسرع (2026)',
        description: 'تنظيف بالساعة عنيزة. 3 خطوات فقط! HEPA+RO+Anti-Static. لا عفن لا عث. أرخص 40% من خميس. تمور = فحص حشرات.',
        h1: 'تنظيف بالساعة بعنيزة — 3 خطوات — أبسط وأرخص!',
        keywords: ['تنظيف بالساعة عنيزة', 'عاملة تنظيف بعنيزة', 'شركة تنظيف بالساعة عنيزة'],
    },
    content: {
        introduction: 'العاملة بعنيزة تحتاج 3 خطوات فقط — أبسط بروتوكول بالمملكة! الخطوة 1: شفط HEPA — يُزيل SiO₂+طلع من كل الأسطح. الخطوة 2: مسح RO — ماء منقّى بدون CaCO₃ (يمنع بقع كلسية). الخطوة 3: Anti-Static — يمنع التصاق طلع النخيل على الأسطح بعد التنظيف. لماذا 3 خطوات فقط؟ لأن: لا عفن (15-25% رطوبة = صفر Anti-Fungal)، لا عث (صفر Anti-Mite)، لا Biofilm (صفر Anti-Biofilm)، لا NaCl (صفر Anti-Rust). مقارنة: خميس مشيط = 5-6 خطوات (عفن+عث+Dehumidifier). عنيزة أرخص 40% وأسرع. الفريد: موسم التمور = فحص مداخل حشرات كل زيارة (30 ثانية إضافية). بريدة = نفس 3 خطوات.',
        shortAnswer: 'على عكس [التنظيف بـ 5-6 خطوات في المدن الجبلية]، يعتمد بروتوكولنا في خدمة [التنظيف بالساعة] بمدينة [عنيزة] على [3 خطوات: HEPA ← RO ← Anti-Static]. ففي ظل [SiO₂+CaCO₃ 550ppm+طلع+15-25% رطوبة]، تنعدم مشاكل [العفن+العث+Biofilm]. لذا؛ تُنفّذ العاملة عبر [شفط ← مسح ← رش] لضمان نظافة بأقل تكلفة ووقت.',
        heroSubtitle: '3 خطوات فقط — أبسط+أرخص — لا عفن ولا عث!',
    },
    pricing: [
        { type: 'ساعة واحدة', unit: 'ساعة', minPrice: 22, maxPrice: 40, time: '1 ساعة' },
        { type: '4 ساعات', unit: 'حصة', minPrice: 75, maxPrice: 140, time: '4 ساعات' },
        { type: 'أسبوعي (4 زيارات/شهر)', unit: 'شهر', minPrice: 250, maxPrice: 500, time: '4 زيارات' },
        { type: 'يومي (26 يوم/شهر)', unit: 'شهر', minPrice: 1300, maxPrice: 2600, time: '26 زيارة' },
    ],
    faq: [
        { question: 'كم تكلفة عاملة بالساعة بعنيزة مقارنة بخميس مشيط؟', answer: 'أرخص 40% — 22-40 ريال/ساعة مقابل 28-50. لا Anti-Fungal ولا Anti-Mite ولا Dehumidifier.' },
        { question: 'ليش 3 خطوات بس بعنيزة؟', answer: '15-25% رطوبة = صفر عفن+عث+Biofilm. لا حاجة لخطوات إضافية. خميس: 5-6 خطوات بسبب 60-85% رطوبة.' },
        { question: 'كيف العاملة تتعامل مع رمل النفود؟', answer: 'HEPA أولاً — شفط SiO₂ من كل الأسطح قبل مسح. بدونه = ممسحة تخدش البلاط والأثاث.' },
        { question: 'هل العاملة تفحص حشرات التمور؟', answer: 'كل زيارة: فحص مداخل 30 ثانية. موسم التمور (أغسطس-أكتوبر) = ذباب+نمل. سد فجوات عند الحاجة.' },
        { question: 'متى أفضل وقت لطلب عاملة بعنيزة؟', answer: 'الصباح الباكر — أقل SiO₂ في الهواء. بعد عاصفة = عاجل. أسبوعي أفضل من كل أسبوعين.' },
    ],
    expertTips: [
        'HEPA أولاً — لا تمسح أبداً قبل شفط SiO₂.',
        'ماء RO — CaCO₃ 550ppm يترك بقع كلسية.',
        'Anti-Static — يمنع التصاق طلع بعد التنظيف.',
        'فحص مداخل — موسم تمور = حشرات.',
        'لا Anti-Fungal/Mite — 15-25% = صفر. وفّر.',
    ],
    warnings: [
        'مسح بدون HEPA + SiO₂ = خدش أرضيات وأثاث — خسارة مالية.',
        'ماء صنبور بدون RO = بقع كلسية بيضاء على كل الأسطح.',
        'موسم تمور بدون فحص مداخل = ذباب+نمل يستوطن المطبخ.',
    ],
    trustAnchors: [
        { ...GOV.HRSD, role: 'تنظيم العمالة المنزلية' },
        { entity: AMANA.QASSIM.entity, url: AMANA.QASSIM.url, role: 'اشتراطات أمانة القصيم' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALMISNID.name, quote: 'عاملة عنيزة: 3 خطوات. أبسط مدينة. لا عفن. لا عث. موسم تمور = حشرات فقط.', source: 'جغرافيا المناخ — القصيم' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ عمالة مرخصة', authority: 'HRSD + بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'HEPA H13', use: 'شفط SiO₂+طلع — 99.97%' },
        { name: 'ماء RO منقّى', use: 'مسح بدون CaCO₃ — صفر بقع كلسية' },
        { name: 'Anti-Static Spray', use: 'منع التصاق طلع النخيل بعد التنظيف' },
    ],
    hiddenObjections: [
        { fear: 'أقل من خميس = أقل جودة.', solution: '3 خطوات لأن البيئة أبسط. لا عفن = لا حاجة لخطوات إضافية.' },
        { fear: 'حشرات تمور.', solution: 'فحص مداخل 30 ثانية كل زيارة. بسيط.' },
    ],
    counterNarratives: [
        { myth: 'عاملة عنيزة تحتاج 5-6 خطوات مثل خميس.', truth: '3 خطوات — لا عفن لا عث. 15-25% رطوبة.' },
        { myth: 'أرخص = أسوأ.', truth: 'أبسط بيئة = أقل تكلفة. الجودة نفسها.' },
    ],
    relatedServices: [
        { slug: 'cleaning', context: 'تنظيف منازل', priority: 1 },
        { slug: 'apartments-cleaning', context: 'شقق', priority: 2 },
        { slug: 'carpet-cleaning', context: 'سجاد', priority: 3 },
        { slug: 'steam-cleaning', context: 'بخار', priority: 4 },
        { slug: 'sofa-cleaning', context: 'كنب', priority: 5 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 6 },
        { slug: 'pest-control', context: 'حشرات', priority: 7 },
    ],
};
