import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف بالبخار بالخبر — يُذيب NaCl + يقتل عث 85-95% + يُكسر Biofilm — تجفيف إلزامي (2026)',
        description: 'تنظيف بالبخار الخبر. بخار 130°م يُذيب NaCl + يقتل عث مُتسارع + يُكسر Biofilm. 85-95% تجفيف Dehumidifier إلزامي بعد البخار. Dry Vapor ساحلي.',
        h1: 'تنظيف بالبخار بالخبر — يُذيب ويقتل ويُكسر — لكن: تجفيف إلزامي',
        keywords: ['تنظيف بالبخار بالخبر', 'تنظيف بخار الخبر', 'شركة تنظيف بالبخار بالخبر'],
    },
    content: {
        introduction: 'البخار في الخبر = أداة ثلاثية ساحلية — لكن مع تحذير. الاستخدام الأول — يُذيب NaCl: بخار 130°م يُعيد إذابة ترسبات NaCl من البلاط والأسطح ← يُمسح. أسهل من الكشط. أفضل من الماء العادي (الذي يُضيف NaCl). الاستخدام الثاني — يقتل عث 85-95% المُتسارع: أعلى رطوبة = أسرع تكاثر. بخار 130°م = Protein Denaturation فوري. يخترق 10-15 سم. الاستخدام الثالث — يُكسر Biofilm: 85-95% = Biofilm على كل سطح رطب. بخار = يُكسر الغشاء الحيوي. التحذير — تجفيف إلزامي: 85-95% = البخار لا يتبخر! Dry Vapor 5% ← لكن 5% + 85-95% = يبقى. Dehumidifier + مراوح فوراً. بدون تجفيف = بخار يتحول لعفن.',
        shortAnswer: 'على عكس [ممسحة بماء الخبر] التي تُضيف NaCl ولا تقتل عث، يعتمد بروتوكولنا في خدمة [التنظيف بالبخار] بمدينة [الخبر] على [بخار 130°م ثلاثي + Dehumidifier تجفيف]. ففي ظل [NaCl + 85-95% + Biofilm]، تتفاقم ظاهرة [ملح + عث + غشاء]. لذا؛ يتدخل خبراؤنا عبر [بخار ساحلي + تجفيف].',
        heroSubtitle: 'يُذيب NaCl + يقتل عث 85-95% + يُكسر Biofilm — تجفيف إلزامي',
    },
    pricing: [
        { type: 'بخار — غرفة واحدة', unit: 'غرفة', minPrice: 90, maxPrice: 180, time: '30-60 دقيقة' },
        { type: 'بخار — شقة + Dehumidifier', unit: 'شقة', minPrice: 280, maxPrice: 550, time: '2-4 ساعات' },
        { type: 'بخار عميق + Anti-Biofilm', unit: 'شقة', minPrice: 350, maxPrice: 650, time: '3-5 ساعات' },
        { type: 'عقد ربع سنوي (4 زيارات)', unit: 'سنة', minPrice: 850, maxPrice: 1700, time: '4 زيارات' },
    ],
    faq: [
        { question: 'Dry Vapor — مو جاف في 85-95%؟', answer: 'Dry Vapor = 5% رطوبة عند الخروج. لكن: 5% + 85-95% محيطي = لا يتبخر بسرعة. في الرياض (15%): يجف في 30 دقيقة. في الخبر: يحتاج Dehumidifier 2-3 ساعات.' },
        { question: 'بخار يُذيب NaCl — أفضل من ماء؟', answer: '130°م يُذيب NaCl المتبلور ← يُمسح. الماء يُذيبه أيضاً — لكن ماء الخبر = NaCl جديد. البخار = بدون إضافة NaCl.' },
        { question: 'Biofilm — البخار يكفي؟', answer: 'بخار يُكسر Biofilm ← Anti-Biofilm يقتل البقايا ← يمنع إعادة النمو. البخار وحده = يُكسر مؤقتاً. البخار + Anti-Biofilm = دائم.' },
        { question: 'بدون تجفيف — ماذا يحدث؟', answer: '85-95% + بخار = أسطح رطبة 12-24 ساعة = عفن Aspergillus خلال 48 ساعة. البخار بدون تجفيف = تنظيف يُسبب عفناً. Dehumidifier = إلزامي.' },
        { question: 'كل 3 أشهر؟', answer: 'عث 12/12 + NaCl يومي + Biofilm شهري. ربع سنوي = يقتل عث + يُذيب NaCl + يُكسر Biofilm دفعة واحدة.' },
    ],
    expertTips: [
        'Dehumidifier فوراً بعد البخار — الأهم في الخبر. بدونه = عفن.',
        'بخار على NaCl قبل المسح — يُذيبه ← مسح RO يرفعه.',
        'Anti-Biofilm بعد بخار — يمنع إعادة تكوّن الغشاء 3 أشهر.',
        'بخار على السجاد والكنب كل 3 أشهر — يقتل عث 85-95% المُتسارع.',
        'لا تفتح النوافذ للتجفيف — 85-95% خارجي = يدخل رطوبة إضافية. Dehumidifier مُغلق.',
    ],
    warnings: [
        'بخار بدون Dehumidifier في 85-95% = أسطح رطبة 24 ساعة = عفن Aspergillus = أسوأ من عدم التنظيف.',
        'عث بدون بخار = Der p 1 متراكم 12/12 = حساسية مزمنة + ربو.',
        'NaCl بدون بخار = يتبلور = خشونة أسطح + تآكل معادن.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص شركات التنظيف' },
        { entity: AMANA.SHARQIA.entity, url: AMANA.SHARQIA.url, role: 'اشتراطات النظافة بالشرقية' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALMOHAIMED.name, quote: 'بخار الخبر = ثلاثي ساحلي: يُذيب NaCl + يقتل عث + يُكسر Biofilm. لكن: 85-95% = تجفيف Dehumidifier إلزامي. بخار بدون تجفيف في الخبر = وصفة عفن.', source: 'نصائح هندسية — البخار الساحلي' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ بخار مرخص', authority: 'منصة بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'Dry Vapor 130°م', use: 'يُذيب NaCl + يقتل عث + يُكسر Biofilm' },
        { name: 'Dehumidifier', use: 'تجفيف بعد البخار — إلزامي في 85-95%' },
        { name: 'Anti-Biofilm Treatment', use: 'يمنع إعادة تكوّن الغشاء — 3 أشهر' },
    ],
    hiddenObjections: [
        { fear: 'البخار يبلل.', solution: 'Dry Vapor = 5%. لكن في 85-95%: يحتاج تجفيف. Dehumidifier = الفرق.' },
        { fear: 'ممسحة أسهل.', solution: 'ممسحة بماء الخبر = NaCl جديد. لا تقتل عث. لا تُكسر Biofilm. 3 فشلات.' },
    ],
    consumerEducation: [
        { myth: 'بخار = ماء.', truth: '130°م = ليس ماء. يقتل + يُذيب + يُكسر. لكن: يحتاج تجفيف في 85-95%.' },
        { myth: 'يجف طبيعياً.', truth: '85-95% = لا يجف. 24 ساعة رطب = عفن. Dehumidifier = الحل.' },
        { myth: 'مرة بالسنة.', truth: 'عث 12/12 + NaCl يومي + Biofilm شهري. ربع سنوي.' },
    ],
    relatedServices: [
        { slug: 'carpet-cleaning', context: 'سجاد — بخار عميق', priority: 1 },
        { slug: 'sofa-cleaning', context: 'كنب — بخار + Enzymatic', priority: 2 },
        { slug: 'councils-cleaning', context: 'مجالس — بخار 10-15 سم', priority: 3 },
        { slug: 'cleaning', context: 'تنظيف — بخار ضمن بروتوكول', priority: 4 },
        { slug: 'marble-polishing', context: 'رخام — بخار يُلين NaCl', priority: 5 },
        { slug: 'pest-control', context: 'حشرات — بخار + مكافحة', priority: 6 },
        { slug: 'apartments-cleaning', context: 'شقق — بخار ساحلي', priority: 7 },
    ],
};
