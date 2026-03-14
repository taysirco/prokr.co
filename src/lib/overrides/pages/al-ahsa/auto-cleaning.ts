import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'غسيل سيارات بالأحساء — لقاح نخيل يخدش + CaSO₄ Water Spots + تربة عضوية + 48°م Clear Coat (2026)',
        description: 'غسيل سيارات الأحساء. لقاح 2.5M نخلة يلتصق ← يخدش بالقماش. CaSO₄ Water Spots. تربة عضوية لزجة. 48°م UV يُتلف Clear Coat. Touchless + Ceramic 9H.',
        h1: 'غسيل سيارات بالأحساء — لقاح يخدش وجبس يُبقّع وشمس تُتلف',
        keywords: ['غسيل سيارات بالأحساء', 'غسيل سيارة الاحساء', 'شركة غسيل سيارات بالأحساء', 'تنظيف سيارات الاحساء'],
    },
    content: {
        introduction: 'غسيل السيارة في الأحساء يختلف عن أي مدينة لأن الأوساخ واحية — ليست صحراوية عادية. المشكلة الأولى — لقاح يخدش: حبوب لقاح النخيل (30-50 ميكرون) ناعمة لكنها تلتصق بالرطوبة على السطح ← إسفنجة + لقاح لاصق = Micro-Swirls (خدوش دائرية). Touchless (ضغط ماء فقط) = يُزيل بدون خدش. المشكلة الثانية — CaSO₄ Water Spots: ماء الأحساء الجبسي يترك بقعاً بيضاء (Water Spots) على الزجاج والبودي عند الجفاف. Deionized Water بعد الغسل = صفر بقع. المشكلة الثالثة — تربة عضوية لزجة: الواحة = تربة غنية بالمادة العضوية تلتصق بالعتلات والجوانب. Enzymatic Pre-Wash يُفككها. المشكلة الرابعة — 48°م + UV 9+: Clear Coat يتأكسد (Photo-Oxidation) أسرع. Ceramic Coating 9H يحمي 2-3 سنوات.',
        shortAnswer: 'على عكس [غسيل بإسفنجة + ماء عادي] الذي يخدش باللقاح ويُبقّع بالجبس، يعتمد بروتوكولنا في خدمة [غسيل السيارات] بمدينة [الأحساء] على [Touchless + Deionized + Enzymatic + Ceramic 9H]. ففي ظل [لقاح + CaSO₄ + تربة عضوية + 48°م]، تتفاقم ظاهرة [خدش + بقع + لزوجة + أكسدة]. لذا؛ يتدخل خبراؤنا عبر [بروتوكول الواحة للسيارات].',
        heroSubtitle: 'لقاح يخدش + جبس يُبقّع + تربة تلتصق + شمس تُؤكسد',
    },
    pricing: [
        { type: 'غسيل خارجي Touchless + Deionized', unit: 'سيارة', minPrice: 40, maxPrice: 80, time: '20-30 دقيقة' },
        { type: 'غسيل شامل (خارجي + داخلي)', unit: 'سيارة', minPrice: 80, maxPrice: 160, time: '45-60 دقيقة' },
        { type: 'تلميع + Ceramic 9H', unit: 'سيارة', minPrice: 300, maxPrice: 800, time: '3-5 ساعات' },
        { type: 'اشتراك شهري (4 غسلات)', unit: 'شهر', minPrice: 130, maxPrice: 260, time: '4 زيارات' },
    ],
    faq: [
        { question: 'لقاح يخدش — مو ناعم؟', answer: 'اللقاح نفسه ناعم (لا يخدش وحده). لكنه لزج — يلتصق بالسطح. إسفنجة + لقاح ملتصق = تُسحب الحبة على Clear Coat ← Micro-Swirl. آلاف الحبب × مسحة واحدة = خدوش دائرية واضحة تحت الشمس.' },
        { question: 'Water Spots بعد الغسل — ماء المحطة؟', answer: 'نعم — ماء الأحساء = CaSO₄ 300-500 ppm. يتبخر ← يترك بقعاً بيضاء جبسية على البودي والزجاج. Deionized Water (ماء مُنقّى) = صفر أملاح = صفر بقع. أو: تجفيف فوري قبل التبخر.' },
        { question: 'Ceramic 9H — يستحق في الأحساء؟', answer: '48°م + UV 9+ = Photo-Oxidation مُسرّعة. Clear Coat بدون حماية = يتأكسد خلال 2-3 سنوات (يبهت + يتقشر). Ceramic 9H = 300-800 ريال × مرة كل 2-3 سنوات = أرخص من إعادة دهان 3,000-8,000 ريال.' },
        { question: 'التربة العضوية — أصعب من الرمل؟', answer: 'نعم — الرمل (SiO₂) جاف ينفض. التربة العضوية = رطبة + لزجة تلتصق بالجوانب والعتلات. ماء عادي يُزيل 60%. Enzymatic Pre-Wash = يُفكك الروابط العضوية ← 95% إزالة.' },
        { question: 'أسبوعي أو شهري؟', answer: 'في موسم التلقيح (فبراير-مايو): أسبوعي — اللقاح يلتصق يومياً. بقية السنة: كل أسبوعين. أقل حد: شهري. أقل = تراكم لقاح + CaSO₄ = أصعب إزالة.' },
    ],
    expertTips: [
        'Touchless فقط — لا إسفنجة ولا قماش. لقاح لاصق + إسفنجة = Micro-Swirls غسلة واحدة.',
        'Deionized Water Rinse بعد الغسل — يمنع CaSO₄ Water Spots. بدونه: بقع بيضاء تحتاج Polish لإزالتها.',
        'Ceramic 9H على كل سيارة في الأحساء — 48°م UV حماية إلزامية. Wax يتبخر في 2-4 أسابيع. Ceramic = 2-3 سنوات.',
        'غسيل في الصباح الباكر أو المغرب — 48°م ظهراً = الماء يتبخر فوراً = Water Spots حتى مع Deionized.',
        'Enzymatic Pre-Wash على العتلات والجوانب — تربة عضوية تلتصق هناك. Pre-Wash يُفكك ← ضغط الماء يُزيل.',
    ],
    warnings: [
        'إسفنجة + لقاح لاصق = Micro-Swirls أول غسلة. تحت الشمس: رسومات دائرية واضحة. Polish يُزيلها لكن يحتاج إزالة طبقة من Clear Coat.',
        'ماء الأحساء بدون Deionized = Water Spots بعد كل غسلة. بعد أشهر: بقع مُتصلبة تحتاج Clay Bar ← Polish ← Ceramic. 40 ريال/غسلة Deionized = أرخص.',
        'Clear Coat بدون Ceramic في 48°م = يبهت خلال 2-3 سنوات. إعادة طلاء كاملة = 3,000-8,000 ريال.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص مراكز الغسيل — البيئة والمياه' },
        { entity: AMANA.AHSA.entity, url: AMANA.AHSA.url, role: 'اشتراطات النظافة والبيئة بمحافظة الأحساء' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALZUWAYED.name, quote: 'سيارة الأحساء = أوساخ واحية: لقاح لاصق يخدش + CaSO₄ يُبقّع + تربة عضوية تلتصق. Touchless فقط + Deionized + Ceramic = بروتوكول الواحة للسيارات.', source: 'هيئة النقل — العناية بالمركبات في البيئات الزراعية' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [
        { badge: '✔️ غسيل سيارات مرخص', authority: 'منصة بلدي', icon: 'shield-check' },
    ],
    equipment: [
        { name: 'Touchless Pressure Washer', use: 'يُزيل لقاح + تربة بضغط الماء — صفر خدوش' },
        { name: 'Deionized Water Rinse', use: 'يمنع CaSO₄ Water Spots — ماء بصفر أملاح' },
        { name: 'Enzymatic Pre-Wash', use: 'يُفكك تربة عضوية لزجة من العتلات والجوانب' },
        { name: 'Ceramic Coating 9H', use: 'يحمي Clear Coat من UV 48°م — فعّال 2-3 سنوات' },
    ],
    commonConcerns: [
        { concern: 'غسلة 40 ريال أغلى من 15.', solution: '15 = إسفنجة + ماء عادي = خدوش + بقع. بعد سنة: Polish 200-500 ريال. Touchless + Deionized = أرخص إجمالياً.' },
        { concern: 'Ceramic غالي.', solution: '300-800 ريال ÷ 2-3 سنوات = 100-270 ريال/سنة. إعادة طلاء = 3,000-8,000 ريال. Ceramic = 4-10% من تكلفة الإصلاح.' },
    ],
    consumerEducation: [
        { myth: 'غبار الأحساء عادي.', truth: 'لقاح لاصق ≠ رمل SiO₂. تربة عضوية ≠ غبار معدني. CaSO₄ ≠ NaCl. 3 فروقات = 3 أدوات مختلفة.' },
        { myth: 'إسفنجة ناعمة ما تخدش.', truth: 'الإسفنجة لا تخدش — اللقاح اللاصق تحتها يخدش. أنعم إسفنجة + لقاح = خدوش. Touchless = صفر تلامس.' },
        { myth: 'ماء محطة يكفي.', truth: 'ماء الأحساء 300-500 ppm CaSO₄. كل غسلة = بقع. Deionized = صفر أملاح = صفر بقع.' },
    ],
    relatedServices: [
        { slug: 'cleaning', context: 'تنظيف — بروتوكول واحي للمنزل', priority: 1 },
        { slug: 'glass-facades-cleaning', context: 'واجهات — نفس CaSO₄ Water Spots', priority: 2 },
        { slug: 'furniture-moving', context: 'نقل — حماية السيارة أثناء النقل', priority: 3 },
        { slug: 'dyna', context: 'دينا — غسيل بعد التحميل', priority: 4 },
        { slug: 'dabab', context: 'دباب — نفس لقاح', priority: 5 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف — لقاح يسد فلتر السيارة أيضاً', priority: 6 },
        { slug: 'marble-polishing', context: 'رخام — CaSO₄ يتراكم على المرآب', priority: 7 },
    ],
};
