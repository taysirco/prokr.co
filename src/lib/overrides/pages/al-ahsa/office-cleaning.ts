import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف مكاتب بالأحساء — لقاح يسد الأجهزة + CaSO₄ على الشاشات + تربة لزجة على الأرضيات (2026)',
        description: 'تنظيف مكاتب الأحساء. لقاح يسد فلاتر أجهزة الحاسب = Thermal Throttling. CaSO₄ بقع على الشاشات. تربة عضوية لزجة. HEPA + Compressed Air + Citric + Enzymatic.',
        h1: 'تنظيف مكاتب بالأحساء — اللقاح يخنق الأجهزة والجبس يُبقّع والتربة تلتصق',
        keywords: ['تنظيف مكاتب بالأحساء', 'تنظيف مكتب الاحساء', 'شركة تنظيف مكاتب بالأحساء'],
    },
    content: {
        introduction: 'المكتب في الأحساء يواجه 3 تحديات واحية تؤثر على الإنتاجية. الأولى — لقاح يسد الأجهزة: لقاح 30-50 ميكرون يدخل فلاتر الحاسب والطابعات ← يسد ← Thermal Throttling (الحاسب يبطئ نفسه لتبريد) = إنتاجية أقل 15-25%. HEPA مكتبي + Compressed Air تنظيف أجهزة شهري. الثانية — CaSO₄ على الشاشات: تنظيف الشاشة بماء الأحساء ← CaSO₄ يترسب ← بقع بيضاء ← شاشة غير واضحة. Deionized Water + Microfiber = صفر بقع. الثالثة — تربة عضوية لزجة: تربة الواحة تدخل من الأحذية ← تلتصق بالأرضيات (خاصة Vinyl والموكيت). Enzymatic Pre-Treatment ← ثم مسح.',
        shortAnswer: 'على عكس [ممسحة + منظف عادي] الذي يتجاهل الأجهزة ويُبقّع الشاشات، يعتمد بروتوكولنا في خدمة [تنظيف المكاتب] بمدينة [الأحساء] على [HEPA + Compressed Air + Deionized + Enzymatic]. ففي ظل [لقاح 2.5M + CaSO₄ + تربة عضوية]، تتفاقم ظاهرة [اختناق + بقع + لزوجة]. لذا؛ يتدخل خبراؤنا عبر [بروتوكول مكتب واحي].',
        heroSubtitle: 'لقاح يُبطئ الأجهزة + جبس يُبقّع الشاشات + تربة لزجة',
    },
    pricing: [
        { type: 'مكتب صغير (50 م²)', unit: 'خدمة', minPrice: 120, maxPrice: 250, time: '1-2 ساعة' },
        { type: 'مكتب كبير (100+ م²)', unit: 'خدمة', minPrice: 250, maxPrice: 500, time: '2-4 ساعات' },
        { type: 'تنظيف أجهزة (Compressed Air)', unit: 'جهاز', minPrice: 20, maxPrice: 40, time: '10-15 دقيقة' },
        { type: 'عقد أسبوعي (4 زيارات/شهر)', unit: 'شهر', minPrice: 400, maxPrice: 800, time: '4 زيارات' },
    ],
    faq: [
        { question: 'الأجهزة تبطئ — من اللقاح؟', answer: 'نعم — لقاح 30-50 ميكرون يسد فتحات التهوية والفلاتر ← المعالج يسخن ← Thermal Throttling = ينخفض الأداء 15-25%. تنظيف Compressed Air شهري = يُعيد الأداء.' },
        { question: 'الشاشة فيها بقع بيضاء — العاملة غسلتها بالماء؟', answer: 'ماء الأحساء 300-500 ppm CaSO₄. يجف ← بقع بيضاء على الشاشة. Deionized Water + Microfiber = صفر بقع. لا تستخدم ماء الأحساء على الشاشات أبداً.' },
        { question: 'الأرضيات لزجة — ليش؟', answer: 'تربة واحة عضوية = رطبة + لزجة (بكتيريا + فطريات + سكريات). تلتصق بالحذاء ← تلتصق بالأرضية. منظف عادي يُزيل السطحي. Enzymatic = يُفكك الروابط العضوية = تنظيف كامل.' },
        { question: 'HEPA مكتبي — ما هو؟', answer: 'فلتر HEPA محمول يعمل 24/7 في المكتب = يشفط لقاح من الهواء قبل أن يصل الأجهزة. يُقلل لقاح الهواء 80-95%. يحتاج تغيير فلتر كل 3-6 أشهر.' },
        { question: 'كم مرة بالأسبوع؟', answer: 'أرضيات: يومي أو كل يومين. أجهزة: شهري. شاشات: أسبوعي. عقد أسبوعي = 4 زيارات/شهر = يُغطي أرضيات + شاشات. أجهزة = زيارة منفصلة شهرية.' },
    ],
    expertTips: [
        'HEPA محمول في كل مكتب — يعمل 24/7 ← يُقلل لقاح الهواء 80-95% ← أجهزة تبقى نظيفة أطول.',
        'Deionized Water فقط للشاشات — أي ماء آخر = CaSO₄ بقع. حتى ماء الفلتر = يحتوي CaSO₄.',
        'Compressed Air شهري لكل حاسب — 10 دقائق/جهاز = يمنع Thermal Throttling ← إنتاجية أعلى.',
        'Enzymatic على الأرضيات قبل المسح — التربة العضوية تلتصق. المسح بدون Enzymatic = ينقلها ولا يُزيلها.',
        'ممسحة Microfiber رطبة (ليست مبللة) — مبللة = CaSO₄ يترسب. رطبة قليلاً = تلتقط بدون ترسيب.',
    ],
    warnings: [
        'لقاح في أجهزة 6 أشهر = Thermal Throttling دائم + خطر Short Circuit (لقاح عضوي + رطوبة = Hygroscopic). إنتاجية أقل + خطر تلف.',
        'CaSO₄ على شاشة LCD = بقع لا تُزال بالمسح العادي ← تحتاج Citric مُخفف ← خطر تلف الطلاء. Deionized من البداية = وقاية.',
        'تربة عضوية متراكمة أسابيع = طبقة لزجة ← حشرات (نمل + صراصير) تنجذب ← إصابة مكتب.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص شركات التنظيف التجاري' },
        { entity: AMANA.AHSA.entity, url: AMANA.AHSA.url, role: 'اشتراطات المكاتب والمنشآت بمحافظة الأحساء' },
    ],
    expertReviewer: EXPERTS.ALJUND,
    expertCitations: [
        { expert: EXPERTS.ALJUND.name, quote: 'المكتب الأحسائي = تحدٍ واحي: لقاح يخنق الأجهزة + CaSO₄ يُبقّع الشاشات + تربة تلتصق بالأرضيات. HEPA 24/7 + Deionized + Enzymatic = بروتوكول إنتاجية — ليس فقط نظافة.', source: 'موسوعة أخطاء — بيئات العمل في المناطق الزراعية' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [
        { badge: '✔️ تنظيف مكاتب مرخص', authority: 'منصة بلدي', icon: 'shield-check' },
    ],
    equipment: [
        { name: 'HEPA محمول (24/7)', use: 'يشفط لقاح من هواء المكتب — يحمي الأجهزة' },
        { name: 'Compressed Air', use: 'ينظف فلاتر وفتحات الأجهزة — يمنع Thermal Throttling' },
        { name: 'Deionized Water + Microfiber', use: 'ينظف الشاشات بلا CaSO₄ بقع' },
        { name: 'Enzymatic Floor Cleaner', use: 'يُفكك تربة عضوية لزجة — تنظيف كامل' },
    ],
    hiddenObjections: [
        { fear: 'الأجهزة حديثة — تتحمل.', solution: 'الفلتر يسد — حديث أو قديم. Throttling يحدث لأي معالج. 15-25% أبطأ = ساعات ضائعة يومياً.' },
        { fear: 'عاملة المبنى تكفي.', solution: 'عاملة المبنى = ممسحة + ماء أحساء. CaSO₄ على الشاشات + لقاح يُفرش + تربة تنتقل. 3 أخطاء في كل زيارة.' },
    ],
    counterNarratives: [
        { myth: 'مكتب نظيف.', truth: 'اللقاح لا يُرى. CaSO₄ شفاف. التربة تحت الموكيت. \"نظيف\" = ظاهري. الأجهزة تعاني بصمت.' },
        { myth: 'ماء فلتر يكفي.', truth: 'ماء الفلتر يُقلل الكلور — لا يُزيل CaSO₄. 200-300 ppm = بقع. Deionized فقط.' },
        { myth: 'تنظيف شهري يكفي.', truth: 'لقاح يومي + تربة يومية = أسبوعي أرضيات + شهري أجهزة. شهري أرضيات = 3 أسابيع تراكم.' },
    ],
    relatedServices: [
        { slug: 'cleaning', context: 'تنظيف — بروتوكول واحي', priority: 1 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف — لقاح يسد فلتر المكتب', priority: 2 },
        { slug: 'carpet-cleaning', context: 'موكيت — لقاح + تربة', priority: 3 },
        { slug: 'glass-facades-cleaning', context: 'واجهات — CaSO₄', priority: 4 },
        { slug: 'pest-control', context: 'حشرات — تربة تجذب', priority: 5 },
        { slug: 'steam-cleaning', context: 'بخار — تعقيم عميق', priority: 6 },
        { slug: 'hourly-cleaning', context: 'بالساعة — يومي', priority: 7 },
    ],
};
