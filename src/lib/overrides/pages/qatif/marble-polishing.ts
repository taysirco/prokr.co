import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'جلي رخام بالقطيف — NaCl إبهات + 80-95% عفن واحي مسامي + طين مسام + Biofilm (2026)',
        description: 'جلي رخام القطيف. NaCl إبهات. 80-95% عفن واحي مسامي. طين يسد المسام. Biofilm واحي. جلي + RO + Anti-Fungal + Sealer + Turbo.',
        h1: 'جلي رخام بالقطيف — ملح يُبهت وعفن واحي يغزو المسام وطين يسدها',
        keywords: ['جلي رخام القطيف', 'تلميع رخام بالقطيف', 'شركة جلي رخام بالقطيف'],
    },
    content: {
        introduction: 'الرخام في القطيف يتعرض لإبهات ساحلي-واحي. الأول — NaCl إبهات: ملح يُبهت اللمعان. الثاني — 80-95% عفن واحي مسامي: عفن مزدوج في المسام (ساحلي+واحي). Anti-Fungal + Sealer. الثالث — طين مسام: PM10 طيني يسد المسام ← يُغمّق اللون. RO + فرك. الرابع — Biofilm واحي: رخام خارجي (مداخل+حدائق) = طحالب. Anti-Biofilm. تجفيف: 80-95% = 4-8 ساعات. Turbo.',
        shortAnswer: 'على عكس [ملمّع سطحي]، يعتمد بروتوكولنا في خدمة [جلي الرخام] بمدينة [القطيف] على [RO ← جلي ← Anti-Fungal ← Sealer ← Turbo]. ففي ظل [NaCl + 80-95% + طين + Biofilm]، تتفاقم ظاهرة [إبهات + عفن مسامي + سد + طحالب]. لذا؛ يتدخل خبراؤنا عبر [بروتوكول رخام ساحلي-واحي].',
        heroSubtitle: 'NaCl إبهات + عفن واحي مسامي + طين يسد + Biofilm',
    },
    pricing: [
        { type: 'جلي (10-30 م²)', unit: 'م²', minPrice: 22, maxPrice: 50, time: '2-4 ساعات' },
        { type: 'جلي + Sealer + Anti-Fungal', unit: 'م²', minPrice: 32, maxPrice: 60, time: '3-6 ساعات' },
        { type: 'فيلا (100+ م²)', unit: 'م²', minPrice: 18, maxPrice: 44, time: '8-14 ساعة' },
        { type: 'ربع سنوي', unit: 'سنة', minPrice: 500, maxPrice: 1000, time: '4 زيارات' },
    ],
    faq: [
        { question: 'طين مسام — يُغمّق؟', answer: 'طين دقيق يدخل مسام الرخام (3-5 Mohs = مسامي) ← يُغمّق اللون. Poultice يسحب + Sealer يسد.' },
        { question: 'عفن واحي مسامي — من أين؟', answer: 'عيون+رطوبة أرضية ← تصعد ← تصل رخام الأرضي ← عفن من أسفل. + ساحلي = مزدوج.' },
        { question: 'Biofilm — رخام خارجي؟', answer: '80-95% + واحة = Biofilm + طحالب على رخام خارجي. Anti-Biofilm شهري.' },
        { question: 'Sealer — بعد كل جلي؟', answer: 'بعد كل جلي — 80-95% + طين = يسد ويعفن بدون Sealer.' },
        { question: 'كم تكلفة التنظيف العميق مقارنة بالتنظيف العادي؟', answer: 'التنظيف العميق أغلى 30-50% لكنه يشمل: HEPA + بخار 150°م + تعقيم. التنظيف العادي = مسح سطحي. العميق كل 3-4 أشهر + العادي أسبوعياً = أفضل معادلة تكلفة/نظافة.' },
    ],
    expertTips: [
        'RO أولاً — NaCl+طين قبل جلي.',
        'Sealer بعد جلي — 80-95% عفن مسامي.',
        'Anti-Biofilm رخام خارجي — طحالب واحي.',
        'Turbo — 80-95% تجفيف 4-8 ساعات.',
        'بعد التنظيف: شغّل المكيف وليس الشبّاك — الهواء الخارجي يعيد الغبار على الأسطح النظيفة.',
    ],
    warnings: [
        'طين في المسام + جلي بدون RO = يطبّخ.',
        '80-95% + جلي + بدون Turbo = عفن مسامي.',
        'Biofilm + رخام خارجي = انزلاق.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص شركات الجلي' },
        { entity: AMANA.SHARQIA.entity, url: AMANA.SHARQIA.url, role: 'اشتراطات المباني بالشرقية' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALMOHAIMED.name, quote: 'رخام القطيف: NaCl + عفن واحي مسامي + طين يسد + Biofilm. Sealer+Anti-Fungal+Turbo. ساحلي-واحي فريد.', source: 'نصائح هندسية — رخام الواحات الساحلية' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ جلي مرخص', authority: 'منصة بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'RO Rinse', use: 'NaCl+طين — قبل' },
        { name: 'Diamond Pads', use: 'جلي 7-مراحل' },
        { name: 'Sealer', use: '80-95%+طين — يسد' },
        { name: 'Anti-Biofilm', use: 'رخام خارجي واحي' },
    ],
    commonConcerns: [
        { concern: 'مثل الخبر.', solution: 'واحة = طين مسام+عفن واحي+Biofilm.' },
        { concern: 'مرة.', solution: '80-95%+NaCl+طين. ربع سنوي.' },
    ],
    consumerEducation: [
        { myth: 'ساحلي فقط.', truth: 'واحي = طين+عيون+Biofilm.' },
        { myth: 'ملمّع.', truth: 'طين+عفن مسامي. سطحي.' },
    ],
    relatedServices: [
        { slug: 'cleaning', context: 'تنظيف', priority: 1 },
        { slug: 'glass-facades-cleaning', context: 'واجهات', priority: 2 },
        { slug: 'villas-cleaning', context: 'فلل', priority: 3 },
        { slug: 'apartments-cleaning', context: 'شقق', priority: 4 },
        { slug: 'steam-cleaning', context: 'بخار', priority: 5 },
        { slug: 'carpet-cleaning', context: 'سجاد', priority: 6 },
        { slug: 'pest-control', context: 'حشرات', priority: 7 },
    ],
};
