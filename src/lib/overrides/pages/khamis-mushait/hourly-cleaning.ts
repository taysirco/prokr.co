import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف بالساعة بخميس مشيط — 5-6 خطوات! عفن+عث+تكثّف+ضباب — Dehumidifier! أغلى 40% (2026)',
        description: 'تنظيف بالساعة خميس مشيط. 5-6 خطوات! Anti-Fungal+Anti-Mite+Dehumidifier+HEPA. 60-85%. أغلى 40% من عنيزة.',
        h1: 'تنظيف بالساعة بخميس مشيط — 5-6 خطوات — أعقد!',
        keywords: ['تنظيف بالساعة خميس مشيط', 'عاملة تنظيف بخميس مشيط', 'شركة تنظيف بالساعة خميس مشيط'],
    },
    content: {
        introduction: 'العاملة بخميس مشيط تحتاج 5-6 خطوات — من أعقد البروتوكولات! الخطوة 1: HEPA — شفط غبار ضبابي. الخطوة 2: Anti-Fungal — 60-85% + ضباب 200 يوم = عفن Aspergillus على كل الأسطح. الخطوة 3: Anti-Mite — عث Dermatophagoides في مفروشات رطبة. الخطوة 4: مسح بماء+مطهر — تنظيف فعلي. الخطوة 5: Dehumidifier — بدونه = الأسطح لا تجف + عفن جديد! الخطوة 6 (شتوية): تجفيف تكثّف على النوافذ الباردة. مقارنة: عنيزة = 3 خطوات + تجفيف 20 دقيقة + أرخص 40%. خميس = 5-6 خطوات + تجفيف 4-8 ساعات = أعقد وأغلى.',
        shortAnswer: 'على عكس [التنظيف بـ 3 خطوات في المدن الصحراوية]، يعتمد بروتوكولنا في خدمة [التنظيف بالساعة] بمدينة [خميس مشيط] على [5-6 خطوات: HEPA←Anti-Fungal←Anti-Mite←مسح←Dehumidifier←تجفيف تكثّف]. ففي ظل [60-85%+ضباب 200 يوم+عفن+عث+تكثّف]، تتفاقم ظاهرة [عفن+عث+رطوبة+تجفيف بطيء]. لذا؛ تُنفّذ العاملة عبر [6 خطوات متكاملة].',
        heroSubtitle: '5-6 خطوات — عفن+عث+ضباب — أعقد+أغلى 40%!',
    },
    pricing: [
        { type: 'ساعة واحدة', unit: 'ساعة', minPrice: 28, maxPrice: 50, time: '1 ساعة' },
        { type: '4 ساعات', unit: 'حصة', minPrice: 100, maxPrice: 190, time: '4h + تجفيف' },
        { type: 'أسبوعي (4 زيارات/شهر)', unit: 'شهر', minPrice: 370, maxPrice: 680, time: '4 زيارات' },
        { type: 'يومي (26 يوم/شهر)', unit: 'شهر', minPrice: 1750, maxPrice: 3500, time: '26 زيارة' },
    ],
    faq: [
        { question: 'كم تكلفة عاملة بالساعة بخميس مقارنة بعنيزة؟', answer: 'أغلى 40% — 28-50 ريال/ساعة مقابل 22-40. Anti-Fungal+Anti-Mite+Dehumidifier = خطوات إضافية.' },
        { question: 'ليش 5-6 خطوات بخميس وعنيزة 3؟', answer: '60-85% + ضباب = عفن+عث+تكثّف. عنيزة: 15-25% = لا عفن+عث. البيئة تحدد الخطوات.' },
        { question: 'كيف العاملة تمنع العفن بعد التنظيف بخميس؟', answer: 'Dehumidifier فوري — بدونه = أسطح لا تجف + عفن جديد 72 ساعة!' },
        { question: 'هل Anti-Mite ضروري كل زيارة بخميس مشيط؟', answer: 'كل أسبوعين مفروشات. أسبوعي كنب+سجاد. عث Dermatophagoides يتكاثر بسرعة بالرطوبة.' },
        { question: 'متى أفضل وقت لطلب عاملة بخميس؟', answer: 'ظهراً — ضباب صباحي يخف. بعد المطر = عاجل. أسبوعي أفضل من كل أسبوعين.' },
    ],
    expertTips: [
        'HEPA أولاً — غبار ضبابي يُغذي العفن.',
        'Anti-Fungal كل زيارة — 60-85% = عفن أسطح.',
        'Anti-Mite كل أسبوعين — عث مفروشات رطبة.',
        'Dehumidifier بعد كل تنظيف — بدونه عفن جديد!',
        'تجفيف تكثّف نوافذ — شتاءً 0-5°م.',
    ],
    warnings: [
        'تنظيف بدون Dehumidifier + 60-85% = عفن جديد 72 ساعة — أسوأ!',
        'بدون Anti-Fungal = عفن Aspergillus على كل الأسطح أسبوعين.',
        'بدون Anti-Mite = عث يتكاثر في كل مفروشة — حساسية.',
    ],
    trustAnchors: [
        { ...GOV.HRSD, role: 'تنظيم العمالة المنزلية' },
        { entity: AMANA.ASIR.entity, url: AMANA.ASIR.url, role: 'اشتراطات أمانة عسير' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALMISNID.name, quote: 'عاملة خميس: 5-6 خطوات. ضباب+عفن+عث. Dehumidifier إلزامي بعد كل تنظيف.', source: 'جغرافيا المناخ — عسير' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ عمالة مرخصة', authority: 'HRSD + بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'HEPA H13', use: 'شفط غبار ضبابي — 99.97%' },
        { name: 'Anti-Fungal+Anti-Mite', use: 'يقتل عفن وعث' },
        { name: 'Dehumidifier صناعي', use: 'تجفيف بعد كل تنظيف' },
    ],
    hiddenObjections: [
        { fear: 'أغلى = مبالغة.', solution: '5-6 خطوات لأن البيئة أعقد. بدونها = عفن+عث.' },
        { fear: 'مثل الباحة.', solution: 'متشابه — خميس أقل غابات. تكلفة متقاربة.' },
    ],
    consumerEducation: [
        { myth: '3 خطوات تكفي مثل عنيزة.', truth: '60-85% + ضباب = عفن+عث. 3 خطوات = كارثة.' },
        { myth: 'Dehumidifier مبالغة.', truth: 'بدونه = عفن جديد 72 ساعة. ضروري.' },
    ],
    relatedServices: [
        { slug: 'cleaning', context: 'تنظيف', priority: 1 },
        { slug: 'carpet-cleaning', context: 'سجاد — عفن', priority: 2 },
        { slug: 'sofa-cleaning', context: 'كنب — عث', priority: 3 },
        { slug: 'steam-cleaning', context: 'بخار', priority: 4 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 5 },
        { slug: 'pest-control', context: 'حشرات', priority: 6 },
        { slug: 'apartments-cleaning', context: 'شقق', priority: 7 },
    ],
};
