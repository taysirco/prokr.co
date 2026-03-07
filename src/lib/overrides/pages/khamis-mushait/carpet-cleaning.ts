import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف سجاد بخميس مشيط — ضباب عفن Aspergillus + عث Dermatophagoides + تجفيف 6-10h — أعقد! (2026)',
        description: 'تنظيف سجاد خميس مشيط. ضباب عفن Aspergillus. عث Dermatophagoides. 60-85% تجفيف 6-10h. Anti-Fungal+Anti-Mite+Dehumidifier.',
        h1: 'تنظيف سجاد بخميس مشيط — عفن وعث وتجفيف بطيء',
        keywords: ['تنظيف سجاد خميس مشيط', 'غسيل سجاد بخميس مشيط', 'شركة تنظيف سجاد خميس مشيط'],
    },
    content: {
        introduction: 'سجاد خميس مشيط يواجه مثلث الخطر: عفن+عث+تجفيف بطيء! عفن Aspergillus: ضباب 200 يوم + 60-85% = عفن أسود بين ألياف السجاد خلال أسبوعين. يُسبب حساسية تنفسية حادة. Anti-Fungal كل غسلة. عث Dermatophagoides: يتكاثر في السجاد الرطب = حساسية جلدية+تنفسية عند 25% من السكان. Anti-Mite كل أسبوعين. تجفيف 6-10 ساعات: 60-85% = السجاد لا يجف بسرعة. بدون Dehumidifier = عفن جديد يتكوّن بعد الغسل! مقارنة: عنيزة = لا عفن + لا عث + تجفيف 30 دقيقة + أرخص 35%. خميس = كل الأسلحة مطلوبة = أغلى وأعقد. طلع أشجار يستقر على السجاد = طبقة لزجة تُغذي العفن. HEPA أولاً.',
        shortAnswer: 'على عكس [الغسل بدون Anti-Fungal ولا Dehumidifier]، يعتمد بروتوكولنا في خدمة [تنظيف السجاد] بمدينة [خميس مشيط] على [Anti-Fungal+Anti-Mite+Dehumidifier+HEPA]. ففي ظل [ضباب 200 يوم+60-85%+عفن+عث+تجفيف 6-10h]، تتفاقم ظاهرة [عفن ألياف+عث حشوة+عفن بعد الغسل]. لذا؛ يتدخل فريقنا عبر [شفط ← تعقيم ← ضد عث ← غسل ← تجفيف Dehumidifier].',
        heroSubtitle: 'عفن + عث + تجفيف 6-10h — Dehumidifier إلزامي!',
    },
    pricing: [
        { type: 'سجادة (3×4)', unit: 'سجادة', minPrice: 50, maxPrice: 100, time: '30-45 دقيقة + تجفيف 6-10h' },
        { type: 'موكيت غرفة', unit: 'غرفة', minPrice: 110, maxPrice: 230, time: '1-2h + تجفيف' },
        { type: '+ Anti-Fungal/Mite', unit: 'سجادة', minPrice: 70, maxPrice: 140, time: '45-60 دقيقة + تجفيف' },
        { type: 'ربع سنوي (4 زيارات)', unit: 'سنة', minPrice: 340, maxPrice: 680, time: '4 زيارات' },
    ],
    faq: [
        { question: 'كم يحتاج السجاد يجف بخميس مشيط؟', answer: '6-10 ساعات مع Dehumidifier! بدونه = 18-24 ساعة + عفن جديد. عنيزة: 30 دقيقة.' },
        { question: 'كيف أمنع عفن السجاد بخميس مشيط؟', answer: 'Anti-Fungal كل غسلة + HEPA يومي + Dehumidifier دائم. بدونها = عفن أسبوعين.' },
        { question: 'ليش السجاد يسبب حساسية بخميس مشيط؟', answer: 'عفن Aspergillus + عث Dermatophagoides = حساسية مزدوجة (تنفسية+جلدية). 25% من السكان.' },
        { question: 'كم تكلفة تنظيف سجاد بخميس مقارنة بعنيزة؟', answer: 'أغلى 35% — Anti-Fungal+Anti-Mite+Dehumidifier. 50-230 مقابل 35-170.' },
        { question: 'هل البخار يكفي بدون Anti-Fungal بخميس مشيط؟', answer: 'البخار يقتل ما على السطح لكن الجذور عميقة. Anti-Fungal يخترق الألياف. الاثنان معاً.' },
    ],
    expertTips: [
        'Anti-Fungal كل غسلة — عفن ألياف أسبوعين.',
        'Anti-Mite كل أسبوعين — عث في سجاد رطب.',
        'Dehumidifier بعد كل غسل — بدونه عفن جديد!',
        'HEPA يومي — طلع يُغذي العفن.',
        'لا تنشر السجاد بالخارج — ضباب = رطوبة إضافية.',
    ],
    warnings: [
        'غسل بدون Dehumidifier + 60-85% = عفن جديد خلال 72 ساعة — أسوأ مما قبل!',
        'عفن+عث في السجاد = حساسية مزدوجة عند 25% — خطر صحي YMYL.',
        'نشر سجاد بالخارج + ضباب = لا يجف + يمتص رطوبة إضافية.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص شركات التنظيف' },
        { entity: AMANA.ASIR.entity, url: AMANA.ASIR.url, role: 'اشتراطات أمانة عسير' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALMISNID.name, quote: 'سجاد خميس: عفن+عث+تجفيف 6-10h. أعقد سجاد بالمملكة. Dehumidifier إلزامي.', source: 'جغرافيا المناخ — عسير' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ تنظيف سجاد مرخص', authority: 'بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'Anti-Fungal صناعي', use: 'يقتل عفن Aspergillus في ألياف السجاد' },
        { name: 'Anti-Mite', use: 'يقتل عث Dermatophagoides — سجاد رطب' },
        { name: 'Dehumidifier صناعي', use: 'تجفيف 6-10h — بدونه عفن جديد' },
    ],
    hiddenObjections: [
        { fear: 'مثل عنيزة.', solution: 'عكس! عفن+عث+6-10h تجفيف مقابل 30 دقيقة. أغلى 35%.' },
        { fear: 'Dehumidifier مبالغة.', solution: 'بدونه = عفن جديد بعد الغسل = أسوأ.' },
    ],
    counterNarratives: [
        { myth: 'السجاد يجف بسرعة مثل عنيزة.', truth: '6-10h مقابل 30 دقيقة. 60-85% vs 15-25%.' },
        { myth: 'غسل عادي يكفي.', truth: 'بدون Anti-Fungal+Anti-Mite = عفن+عث. كارثة صحية.' },
    ],
    relatedServices: [
        { slug: 'councils-cleaning', context: 'مجالس — عفن', priority: 1 },
        { slug: 'sofa-cleaning', context: 'كنب — عث', priority: 2 },
        { slug: 'cleaning', context: 'تنظيف', priority: 3 },
        { slug: 'steam-cleaning', context: 'بخار', priority: 4 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف — عفن', priority: 5 },
        { slug: 'pest-control', context: 'حشرات', priority: 6 },
        { slug: 'marble-polishing', context: 'رخام', priority: 7 },
    ],
};
