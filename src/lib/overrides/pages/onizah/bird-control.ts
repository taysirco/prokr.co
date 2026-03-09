import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'مكافحة حمام بعنيزة — فضلات+SiO₂ Pitting+سوق التمور طعام+48°م — SS304+شبك+مصائد! (2026)',
        description: 'مكافحة حمام عنيزة. فضلات+SiO₂ Pitting! سوق التمور طعام. 48°م حمل. SS304 أشواك+شبك+مصائد.',
        h1: 'مكافحة حمام بعنيزة — تمور+SiO₂+فضلات!',
        keywords: ['مكافحة حمام بعنيزة', 'مكافحة طيور عنيزة', 'شركة مكافحة حمام بعنيزة'],
    },
    content: {
        introduction: 'حمام عنيزة = سوق التمور يجذب! سوق التمور: أكبر سوق تمور بالعالم ← طعام وفير = حمام كثيف أغسطس-أكتوبر. محلات+مستودعات+فلل قريبة = الأكثر تأثراً. فضلات+SiO₂ Pitting: فضلات الحمام الحمضية + SiO₂ من النفود = خليط يحفر الأسطح (Pitting)! أخطر من فضلات جافة عادية. 48°م: حرارة = فضلات تجف سريعاً ← بودرة تطير بالهواء ← مشاكل تنفسية. N95 عند التنظيف. SS304: لا حاجة لـ SS316 (بحري) — عنيزة جافة 10-20% = SS304 يكفي 15-20 سنة! أرخص. مقارنة: الباحة = SS316 إلزامي (80-90% رطوبة يصدئ أي شيء أقل). عنيزة = SS304 = أرخص.',
        shortAnswer: 'على عكس [الشركات التي تستخدم حديد عادي]، يعتمد بروتوكولنا في خدمة [مكافحة الحمام] بمدينة [عنيزة] على [SS304 أشواك+شبك+مصائد تمور]. ففي ظل [سوق التمور+SiO₂ Pitting+48°م]، تتفاقم ظاهرة [كثافة+تآكل+بودرة]. لذا؛ يتدخل فريقنا عبر [SS304 ← شبك ← مصائد ← تنظيف N95].',
        heroSubtitle: 'سوق التمور يجذب + SiO₂ Pitting + 48°م — SS304+مصائد!',
    },
    pricing: [
        { type: 'أشواك SS304', unit: 'م.ط', minPrice: 25, maxPrice: 50, time: '1-2h' },
        { type: 'شبك فتحات', unit: 'فتحة', minPrice: 40, maxPrice: 80, time: '30 دقيقة' },
        { type: 'فيلا كاملة', unit: 'فيلا', minPrice: 250, maxPrice: 520, time: '3-5h' },
        { type: 'محل قريب من السوق', unit: 'محل', minPrice: 150, maxPrice: 310, time: '1-2h' },
    ],
    faq: [
        { question: 'ليش حمام عنيزة أكثر؟', answer: 'سوق التمور = طعام وفير أغسطس-أكتوبر. أكبر سوق بالعالم = حمام كثيف.' },
        { question: 'ليش SS304 وليس SS316 بعنيزة؟', answer: '10-20% جاف = SS304 يكفي 15-20 سنة! الباحة: SS316 إلزامي. أرخص 30%.' },
        { question: 'ما SiO₂ Pitting بالفضلات بعنيزة؟', answer: 'فضلات حمضية + SiO₂ نفود = خليط يحفر. أخطر من فضلات عادية.' },
        { question: 'كم تكلفة مكافحة حمام بعنيزة مقابل الباحة؟', answer: 'أرخص 25-30% — SS304 vs SS316. لا رطوبة.' },
        { question: 'هل سوق التمور يحتاج مكافحة دائمة؟', answer: 'أغسطس-أكتوبر = ذروة. شبك+أشواك دائم + مصائد موسمية.' },
    ],
    expertTips: [
        'SS304 — جاف يكفي. أرخص.',
        'مصائد موسمية — تمور أغسطس-أكتوبر.',
        'N95 عند تنظيف — 48°م بودرة.',
        'SiO₂ Pitting — تنظيف pH Neutral.',
        'شبك مكيف — فضلات تسد.',
    ],
    warnings: [
        'فضلات+SiO₂ = Pitting يحفر سطح — تنظيف pH Neutral.',
        'بودرة فضلات 48°م = تنفسية — N95 YMYL.',
        'سوق التمور بدون شبك = حمام كثيف — مصائد+شبك.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص شركات المكافحة' },
        { entity: AMANA.QASSIM.entity, url: AMANA.QASSIM.url, role: 'اشتراطات أمانة القصيم' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALMISNID.name, quote: 'حمام عنيزة: سوق التمور+SiO₂ Pitting. SS304 يكفي — جاف.', source: 'جغرافيا المناخ — طيور القصيم' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ مكافحة طيور مرخصة', authority: 'بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'SS304 أشواك', use: 'جاف — 15-20 سنة' },
        { name: 'شبك فتحات', use: 'حمام — لا دخول' },
        { name: 'مصائد موسمية', use: 'تمور — أغسطس-أكتوبر' },
    ],
    hiddenObjections: [
        { fear: 'حديد عادي أرخص.', solution: 'يصدأ. SS304 15-20 سنة.' },
        { fear: 'مثل الباحة.', solution: 'جاف = SS304. رطب = SS316.' },
    ],
    counterNarratives: [
        { myth: 'حمام عادي.', truth: 'سوق التمور = كثيف.' },
        { myth: 'SS316 ضروري.', truth: '10-20% = SS304 يكفي.' },
    ],
    relatedServices: [
        { slug: 'pest-control', context: 'حشرات', priority: 1 },
        { slug: 'cleaning', context: 'تنظيف', priority: 2 },
        { slug: 'glass-facades-cleaning', context: 'واجهات', priority: 3 },
        { slug: 'marble-polishing', context: 'رخام', priority: 4 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 5 },
        { slug: 'roof-insulation', context: 'أسطح', priority: 6 },
        { slug: 'water-insulation', context: 'مائي', priority: 7 },
    ],
};
