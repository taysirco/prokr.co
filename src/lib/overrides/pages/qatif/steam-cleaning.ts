import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف بالبخار بالقطيف — يُحرر NaCl + يقتل عث + يُعقّم + تجفيف 4-8 ساعات (2026)',
        description: 'تنظيف بالبخار القطيف. يُحرر NaCl+طين. يقتل عث 80-95%. يُعقّم. يُحرر طلع. تجفيف 4-8 ساعات. Dehumidifier بعد.',
        h1: 'تنظيف بالبخار بالقطيف — يُحرر الملح والطين ويقتل العث',
        keywords: ['تنظيف بالبخار القطيف', 'تنظيف بخار بالقطيف', 'شركة تنظيف بالبخار بالقطيف'],
    },
    content: {
        introduction: 'البخار في القطيف = ضروري لـ 4 أسباب — مع تحدي تجفيف. الفائدة 1 — يُحرر NaCl+طين: بخار يُذيب ملح + يُحرر طين. الفائدة 2 — يقتل عث: 80-95% = عث. بخار 100°م = يقتل. الفائدة 3 — يُعقّم: 80-95% = بكتيريا. بخار = تعقيم. الفائدة 4 — يُحرر طلع: حرارة تُحرر غبار طلع من الأقمشة. التحدي — تجفيف 4-8 ساعات: 80-95% = أبطأ من الرياض. أسرع من الجبيل. Dehumidifier.',
        shortAnswer: 'على عكس [بخار بدون تجفيف]، يعتمد بروتوكولنا في خدمة [التنظيف بالبخار] بمدينة [القطيف] على [بخار 130°م + Dehumidifier بعد]. ففي ظل [NaCl + 80-95% + عث + طلع]، يحقق البخار [تحرير + قتل + تعقيم — لكن تجفيف]. لذا؛ يتدخل خبراؤنا عبر [بخار ساحلي-واحي + Dehumidifier].',
        heroSubtitle: 'يُحرر NaCl+طين + يقتل عث + يُعقّم — 4-8 ساعات تجفيف',
    },
    pricing: [
        { type: 'غرفة + Dehumidifier', unit: 'غرفة', minPrice: 80, maxPrice: 160, time: '30 دقيقة + تجفيف' },
        { type: 'شقة + Dehumidifier', unit: 'شقة', minPrice: 230, maxPrice: 460, time: '3-4 ساعات + تجفيف' },
        { type: 'بيت/فيلا', unit: 'بيت', minPrice: 380, maxPrice: 760, time: '5-8 ساعات + تجفيف' },
        { type: 'ربع سنوي', unit: 'سنة', minPrice: 540, maxPrice: 1080, time: '4 زيارات' },
    ],
    faq: [
        { question: 'تجفيف — 4-8 ساعات؟', answer: '80-95% = أبطأ من الرياض (1-2). أسرع من الجبيل (6-10). Dehumidifier.' },
        { question: 'يقتل عث — ضروري هنا؟', answer: '80-95% = عث. ضروري. بخار = الأداة الأولى. Anti-Mite بعد.' },
        { question: 'طلع — يُحرره البخار؟', answer: 'حرارة تُحرر طلع من الألياف ← HEPA يلتقط. مزدوج.' },
    ],
    expertTips: [
        'Dehumidifier بعد البخار — 80-95%.',
        'بخار يُحرر NaCl+طين — ثم RO.',
        'Anti-Mite بعد بخار — يمنع عودة.',
        'HEPA بعد بخار — يلتقط طلع.',
    ],
    warnings: [
        'بخار بدون Dehumidifier = عفن 24-48 ساعة.',
        '80-95% + بخار + غرفة مُغلقة = 100%. كارثة.',
        'تجفيف 4-8 ساعات = تخطيط.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص التنظيف' },
        { entity: AMANA.SHARQIA.entity, url: AMANA.SHARQIA.url, role: 'اشتراطات النظافة بالشرقية' },
    ],
    expertReviewer: EXPERTS.ALMOHAIMED,
    expertCitations: [
        { expert: EXPERTS.ALMOHAIMED.name, quote: 'بخار القطيف: يُحرر NaCl+طين + يقتل عث + يُحرر طلع. 4-8 ساعات. Dehumidifier.', source: 'نصائح هندسية — بخار الواحات الساحلية' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ بخار مرخص', authority: 'منصة بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'Dry Vapor 130°م', use: 'NaCl+طين+عث+تعقيم' },
        { name: 'Dehumidifier', use: '80-95% → 50-60%' },
        { name: 'Anti-Mite', use: 'بعد بخار — عث' },
    ],
    hiddenObjections: [
        { fear: 'يبلل.', solution: '80-95% = يبلل. Dehumidifier.' },
        { fear: 'بدون Dehumidifier.', solution: 'عفن 24-48 ساعة.' },
    ],
    counterNarratives: [
        { myth: 'يجف طبيعي.', truth: '80-95% = 4-8 ساعات.' },
        { myth: 'مثل حفر الباطن.', truth: '10-15% = 20 دقيقة. 80-95% = 4-8.' },
    ],
    relatedServices: [
        { slug: 'carpet-cleaning', context: 'سجاد', priority: 1 },
        { slug: 'sofa-cleaning', context: 'كنب', priority: 2 },
        { slug: 'councils-cleaning', context: 'مجالس', priority: 3 },
        { slug: 'cleaning', context: 'تنظيف', priority: 4 },
        { slug: 'marble-polishing', context: 'رخام', priority: 5 },
        { slug: 'pest-control', context: 'حشرات', priority: 6 },
        { slug: 'apartments-cleaning', context: 'شقق', priority: 7 },
    ],
};
