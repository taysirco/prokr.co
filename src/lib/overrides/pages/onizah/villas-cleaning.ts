import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف فلل بعنيزة — 4 محاور: SiO₂+CaCO₃+طلع+Static + تمور حشرات — لا عفن! أرخص 40%! (2026)',
        description: 'تنظيف فلل عنيزة. 4 محاور: SiO₂+CaCO₃ 550ppm+طلع+Static. تمور حشرات. لا عفن! أرخص 40% من خميس. تجفيف 20 دقيقة!',
        h1: 'تنظيف فلل بعنيزة — 4 محاور + تمور — لا عفن! أرخص!',
        keywords: ['تنظيف فلل عنيزة', 'تنظيف فيلا بعنيزة', 'شركة تنظيف فلل عنيزة'],
    },
    content: {
        introduction: 'فيلا عنيزة = 4 محاور فقط — أبسط وأرخص من أي مدينة جبلية! المحور 1 — SiO₂: رمل النفود 7 Mohs يخدش كل شيء (بلاط، رخام، أثاث، زجاج). يجب شفط HEPA قبل أي مسح. المحور 2 — CaCO₃ 550ppm: ماء عسر يُرسّب كلس على صنابير وحمامات. Descaler حمضي كل شهرين. المحور 3 — طلع نخيل: 8 مليون نخلة قصيمية = طبقة صفراء لزجة على كل الأسطح. HEPA+Anti-Static. المحور 4 — كهرباء ساكنة: رطوبة 15-25% = Static يُلصق الغبار. Anti-Static. الإضافة الفريدة: فحص حشرات تمور كل زيارة — ذباب+نمل من أكبر سوق بالعالم. مقارنة: خميس = 6-7 محاور (عفن+عث+تكثّف+أمطار+ضباب+Biofilm). عنيزة: 4 محاور = أرخص 40% وأسرع (تجفيف 20 دقيقة مقابل 4-8 ساعات!).',
        shortAnswer: 'على عكس [التنظيف بـ 6-7 محاور في المدن الجبلية]، يعتمد بروتوكولنا في خدمة [تنظيف الفلل] بمدينة [عنيزة] على [4 محاور: HEPA+Descaler+Anti-Static+فحص تمور]. ففي ظل [SiO₂+CaCO₃ 550ppm+طلع+Static+تمور حشرات]، تتفاقم ظاهرة [خدش+كلس+التصاق+حشرات]. لذا؛ يتدخل فريقنا عبر [شفط ← إذابة ← رش ← فحص] لضمان فيلا نظيفة بأقل تكلفة.',
        heroSubtitle: '4 محاور + تمور — لا عفن = أبسط+أرخص 40%!',
    },
    pricing: [
        { type: 'فيلا صغيرة (300 م²)', unit: 'فيلا', minPrice: 300, maxPrice: 600, time: '5-7 ساعات' },
        { type: 'فيلا كبيرة (500+ م²)', unit: 'فيلا', minPrice: 480, maxPrice: 960, time: '7-10 ساعات' },
        { type: 'فيلا + حوش + فحص حشرات', unit: 'باقة', minPrice: 600, maxPrice: 1300, time: '8-12 ساعة' },
        { type: 'أسبوعي (4 زيارات/شهر)', unit: 'شهر', minPrice: 340, maxPrice: 680, time: '4 زيارات' },
    ],
    faq: [
        { question: 'كم تكلفة تنظيف فيلا بعنيزة مقارنة بخميس مشيط؟', answer: 'أرخص 40%! 4 محاور مقابل 6-7. لا Anti-Fungal ولا Anti-Mite ولا Dehumidifier. 300-960 ريال مقابل 450-1400.' },
        { question: 'كيف أحمي رخام الفيلا من SiO₂ بعنيزة؟', answer: 'شفط HEPA يومي — SiO₂ 7 Mohs يحفر رخام 3-4 Mohs. لا ممسحة بدون شفط. Impregnator كل 2-3 سنة.' },
        { question: 'ليش 4 محاور فقط بعنيزة وخميس 6-7؟', answer: 'لا عفن (15-25%) + لا عث + لا تكثّف + لا أمطار + لا ضباب + لا Biofilm = 4 محاور فقط. أبسط.' },
        { question: 'هل حشرات التمور تدخل الفيلا؟', answer: 'أغسطس-أكتوبر = ذباب+نمل. فحص مداخل + سد فجوات + مصائد. خصوصاً فلل قريبة من السوق أو المزارع.' },
        { question: 'متى أنظف الفيلا تنظيف عميق بعنيزة؟', answer: 'بعد عواصف الربيع (SiO₂) وبعد موسم التمور (نوفمبر). مرتين/سنة عميق + أسبوعي خفيف (3 خطوات).' },
    ],
    expertTips: [
        'HEPA قبل أي مسح — SiO₂ يخدش كل شيء.',
        'Descaler كل شهرين — CaCO₃ 550ppm حمامات.',
        'Anti-Static — طلع+Static في بيئة جافة.',
        'فحص مداخل — موسم تمور = حشرات.',
        'لا Anti-Fungal/Mite — 15-25% = صفر. وفّر 40%.',
    ],
    warnings: [
        'ممسحة بدون HEPA + SiO₂ = خدش رخام+بلاط = تكلفة إصلاح 5000+ ريال.',
        'CaCO₃ بدون Descaler = صنابير تتكلس + استحمام أصعب + مواسير تسد.',
        'فيلا بدون فحص مداخل + موسم تمور = ذباب+نمل في المطبخ والمجلس.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص شركات التنظيف' },
        { entity: AMANA.QASSIM.entity, url: AMANA.QASSIM.url, role: 'اشتراطات أمانة القصيم' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALMISNID.name, quote: 'فيلا عنيزة: 4 محاور. أبسط بالمملكة. لا عفن. تمور = حشرات فقط. أرخص 40% من الجبلية.', source: 'جغرافيا المناخ — القصيم' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ تنظيف فلل مرخص', authority: 'منصة بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'HEPA H13', use: 'شفط SiO₂+طلع — 99.97% — يحمي الأسطح' },
        { name: 'Descaler حمضي', use: 'إذابة CaCO₃ 550ppm من حمامات ومطبخ' },
        { name: 'Anti-Static Spray', use: 'منع التصاق طلع+غبار في بيئة جافة' },
    ],
    commonConcerns: [
        { concern: 'أقل من خميس = أقل جودة.', solution: '4 محاور لأن البيئة أبسط. لا عفن = لا حاجة لخطوات إضافية. الجودة نفسها.' },
        { concern: 'حشرات تمور خطيرة.', solution: 'فحص + مصائد = حماية 99%. مزعجة وليست خطيرة.' },
    ],
    consumerEducation: [
        { myth: 'الفيلا تحتاج 6-7 محاور مثل خميس.', truth: '4 محاور — لا عفن+عث+تكثّف+أمطار+ضباب+Biofilm. أبسط.' },
        { myth: 'أرخص = سيء.', truth: 'أبسط بيئة = تكلفة أقل طبيعياً. النتيجة نفسها.' },
    ],
    relatedServices: [
        { slug: 'apartments-cleaning', context: 'شقق — CaCO₃', priority: 1 },
        { slug: 'carpet-cleaning', context: 'سجاد — بلمرة', priority: 2 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف — طلع', priority: 3 },
        { slug: 'marble-polishing', context: 'رخام — Pitting', priority: 4 },
        { slug: 'swimming-pool-cleaning', context: 'مسبح — CaCO₃', priority: 5 },
        { slug: 'pest-control', context: 'حشرات — تمور', priority: 6 },
        { slug: 'steam-cleaning', context: 'بخار — CaCO₃', priority: 7 },
    ],
};
