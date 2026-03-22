import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../gov-references';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف خزانات بالأحساء — CaSO₄ يترسب قاع + لقاح عضوي Biofilm + بعوض واحة Culex + عيون تلوث (2026)',
        description: 'تنظيف خزانات الأحساء. CaSO₄ يترسب في القاع = Scale. لقاح يُغذي Biofilm. بعوض Culex من واحة. عيون = مياه جوفية قريبة = تلوث. تنظيف + Citric + غطاء محكم.',
        h1: 'تنظيف خزانات بالأحساء — جبس يترسب ولقاح يُنشئ Biofilm وبعوض يتكاثر',
        keywords: ['تنظيف خزانات بالأحساء', 'تنظيف خزان الاحساء', 'شركة تنظيف خزانات بالأحساء'],
    },
    content: {
        introduction: 'الخزان في الأحساء يواجه 4 تحديات واحية. الأولى — CaSO₄ يترسب في القاع: ماء الأحساء الجبسي = CaSO₄ يترسب ببطء في قاع الخزان ← طبقة Scale بيضاء ← تُقلل سعة الخزان + بيئة لبكتيريا. Citric Acid تنظيف قاع كل 4-6 أشهر. الثانية — لقاح عضوي يُنشئ Biofilm: لقاح 2.5M نخلة يدخل عبر فتحات ← يستقر في الماء ← غذاء عضوي للبكتيريا ← Biofilm على جدران الخزان ← يحمي البكتيريا من الكلور. فرشاة ميكانيكية + Shock. الثالثة — بعوض Culex من واحة: 2.5M نخلة = كثافة حشرية ← فتحة خزان غير محكمة = بعوض يبيض داخل الخزان. غطاء محكم + شبكة Mesh < 1mm. الرابعة — عيون = مياه جوفية قريبة: خزانات أرضية في أحياء العيون = مياه جوفية ترتفع ← تتسلل للخزان عبر شقوق. فحص بعد كل ارتفاع.',
        shortAnswer: 'على عكس [تنظيف سنوي بدون Citric] الذي يتجاهل CaSO₄ والـ Biofilm، يعتمد بروتوكولنا في خدمة [تنظيف الخزانات] بمدينة [الأحساء] على [Citric قاع + فرشاة Biofilm + غطاء محكم + فحص عيون]. ففي ظل [CaSO₄ + لقاح + بعوض + عيون]، تتفاقم ظاهرة [ترسب + طبقة + تكاثر + تسلل]. لذا؛ يتدخل خبراؤنا عبر [بروتوكول خزان واحي].',
        heroSubtitle: 'CaSO₄ يترسب + لقاح Biofilm + بعوض واحة + عيون تتسلل',
    },
    pricing: [
        { type: 'تنظيف + تعقيم خزان', unit: 'خزان', minPrice: 130, maxPrice: 300, time: '2-3 ساعات' },
        { type: 'Citric قاع + فرشاة Biofilm', unit: 'خزان', minPrice: 200, maxPrice: 400, time: '3-4 ساعات' },
        { type: 'فحص عيون (تسلل جوفي)', unit: 'فحص', minPrice: 100, maxPrice: 200, time: '30-60 دقيقة' },
        { type: 'عقد نصف سنوي (2 زيارة + طوارئ)', unit: 'سنة', minPrice: 250, maxPrice: 500, time: '2+ طوارئ' },
    ],
    faq: [
        { question: 'CaSO₄ يترسب في الخزان — خطر؟', answer: 'Scale في القاع = يُقلل سعة + بيئة لبكتيريا (البكتيريا تختبئ تحت Scale = مقاومة للكلور). + Scale على المضخة = كفاءة أقل. Citric كل 4-6 أشهر = يُذيب ويمنع.' },
        { question: 'Biofilm — ليش مو بس كلور؟', answer: 'Biofilm = غشاء بكتيري عضوي يتكوّن من لقاح. يحمي البكتيريا داخله من الكلور (Diffusion Barrier). الكلور يقتل البكتيريا الحرة — ليس المحمية. فرشاة ميكانيكية تُزيل Biofilm ← ثم Shock يقتل.' },
        { question: 'عيون — المياه الجوفية تتسلل؟', answer: 'أحياء العيون = مستوى مياه جوفية قريب من السطح. خزان أرضي بشق = ماء جوفي (قد يحتوي بكتيريا + أملاح) يتسلل. فحص بعد كل ارتفاع مياه + عزل مائي.' },
        { question: 'بعوض في خزان الشرب — خطير؟', answer: 'Culex pipiens يرقات في ماء الشرب = مرفوض صحياً + West Nile Virus (نادر). غطاء محكم + شبكة < 1mm = حماية كاملة. 50-200 ريال = أفضل استثمار صحي.' },
        { question: 'كل 4-6 أشهر — أو سنوي؟', answer: 'CaSO₄ 300-500 ppm = ترسب مستمر. 4-6 أشهر = قبل أن يتراكم بشكل خطير. + Biofilm يتكون خلال أسابيع. سنوي = Scale سميك + Biofilm مُتأصل.' },
    ],
    expertTips: [
        'Citric على قاع الخزان كل 4-6 أشهر — يُذيب CaSO₄ Scale. HCl يتآكل.',
        'فرشاة ميكانيكية قبل Shock — يُزيل Biofilm ← Shock يقتل البكتيريا المكشوفة.',
        'غطاء محكم + Mesh < 1mm — يمنع بعوض واحة + لقاح + حشرات.',
        'فحص ماء بعد كل تعقيم — pH 6.5-8.5 + Free Chlorine 1-3 ppm + لا E. coli = آمن.',
        'خزان أرضي في العيون: عزل مائي خارجي — يمنع تسلل المياه الجوفية.',
    ],
    warnings: [
        'Biofilm في الخزان + كلور = بكتيريا محمية تتكاثر ← ماء ملوّث \"رغم الكلور\". الكلور ≠ كافٍ بدون فرشاة.',
        'CaSO₄ Scale على مضخة الخزان = كفاءة أقل ← ضغط مياه أقل ← عمر مضخة أقصر. Citric = يحمي.',
        'خزان أرضي في العيون بدون عزل = مياه جوفية ملوّثة تتسلل = ماء غير آمن حتى مع كلور.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص شركات تنظيف الخزانات' },
        { entity: AMANA.AHSA.entity, url: AMANA.AHSA.url, role: 'اشتراطات المياه بمحافظة الأحساء' },
    ],
    expertReviewer: EXPERTS.ALMOHAIMED,
    expertCitations: [
        { expert: EXPERTS.ALJUND.name, quote: 'خزان الأحساء = واحي: CaSO₄ يترسب (فريد!) + لقاح 2.5M يُنشئ Biofilm + بعوض واحة + عيون تتسلل. Citric + فرشاة + غطاء + عزل = بروتوكول خزان واحي.', source: 'موسوعة أخطاء — خزانات الواحات الزراعية' },
    ],
    saudiRegulations: [REGULATIONS.NWC_REPORT],
    verificationBadges: [
        { badge: '✔️ تنظيف خزانات مرخص', authority: 'بلدي + NWC', icon: 'shield-check' },
    ],
    equipment: [
        { name: 'Citric Acid (قاع)', use: 'يُذيب CaSO₄ Scale من قاع الخزان' },
        { name: 'فرشاة ميكانيكية', use: 'تُزيل Biofilm لقاحي من جدران الخزان' },
        { name: 'غطاء محكم + Mesh', use: 'يمنع بعوض + لقاح + حشرات واحة' },
        { name: 'فحص ماء', use: 'pH + Chlorine + E. coli = سلامة الماء' },
    ],
    commonConcerns: [
        { concern: 'الماء نظيف.', solution: 'CaSO₄ Scale لا يُرى (في القاع). Biofilm لا يُرى (شفاف). بعوض يرقات لا تُرى. \"نظيف\" = ظاهري.' },
        { concern: 'مرة بالسنة.', solution: 'CaSO₄ 300-500 ppm يومي = ترسب. لقاح يومي = Biofilm. سنوي = 9 أشهر تراكم. نصف سنوي = الحد.' },
    ],
    consumerEducation: [
        { myth: 'CaSO₄ آمن — ما يصدّئ.', truth: 'لا يُصدّئ = صحيح. لكن يترسب Scale = بكتيريا + مضخة + سعة. مشكلة مختلفة — ليست أقل.' },
        { myth: 'كلور يحمي.', truth: 'Biofilm يحمي البكتيريا من الكلور. الكلور يقتل البكتيريا الحرة فقط. فرشاة + Shock = الحل الكامل.' },
        { myth: 'خزان علوي آمن من العيون.', truth: 'من مياه جوفية = نعم. لكن: CaSO₄ + لقاح + بعوض = 3 من 4 تؤثر. ليس آمناً من كل شيء.' },
    ],
    relatedServices: [
        { slug: 'swimming-pool-cleaning', context: 'مسابح — نفس CaSO₄ + بعوض', priority: 1 },
        { slug: 'pest-control', context: 'حشرات — بعوض واحة', priority: 2 },
        { slug: 'water-insulation', context: 'عزل — حماية من مياه جوفية', priority: 3 },
        { slug: 'cleaning', context: 'تنظيف — تنظيف غرفة الخزان', priority: 4 },
        { slug: 'villas-cleaning', context: 'فلل — خزان الفيلا', priority: 5 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف — ماء من الخزان', priority: 6 },
        { slug: 'steam-cleaning', context: 'بخار — تعقيم حول الخزان', priority: 7 },
    ],
};
