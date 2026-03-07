import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'غسيل سيارات بعنيزة — SiO₂ 7 Mohs خدش + CaCO₃ 550ppm Spots + تمور لزجة — Touchless! (2026)',
        description: 'غسيل سيارات عنيزة. SiO₂ 7 Mohs يخدش Clear Coat. CaCO₃ 550ppm Water Spots. تمور لزجة = بقع سكر. Touchless + Softened + Enzymatic. لا ملح بحري!',
        h1: 'غسيل سيارات بعنيزة — رمل نفود وكلس وتمور لزجة',
        keywords: ['غسيل سيارات عنيزة', 'غسيل سيارة بعنيزة', 'شركة غسيل سيارات عنيزة'],
    },
    content: {
        introduction: 'سيارة عنيزة تواجه ثلاثية فريدة لا تجدها في أي مدينة أخرى. أولاً: SiO₂ من صحراء النفود بصلابة 7 Mohs — أصلب من Clear Coat (2-4 Mohs). أي إسفنجة تحمل حبة رمل واحدة = Swirl Mark دائم. الحل: Touchless (بدون لمس) بضغط ماء 1500-2000 PSI. ثانياً: CaCO₃ بتركيز 550ppm — ماء الصنبور يترك Water Spots بيضاء على الزجاج والطلاء. الحل: Softened Water (ماء منزوع الكلس). ثالثاً — وهذا الفريد!: تمور لزجة. عنيزة = أكبر سوق تمور بالعالم. بقع سكر لزجة تسقط على السيارات من الشاحنات والأسواق. لو جفّت تحت شمس 48°م = طبقة Caramelized صلبة. الحل: Enzymatic يُكسِّر السكر. الميزة: لا NaCl ملح بحري = لا صدأ Undercarriage = أرخص من جدة والدمام.',
        shortAnswer: 'على عكس [الغسيل بإسفنجة التي تخدش Clear Coat]، يعتمد بروتوكولنا في خدمة [غسيل السيارات] بمدينة [عنيزة] على [Touchless 2000 PSI + Softened Water + Enzymatic تمور]. ففي ظل [SiO₂ 7 Mohs + CaCO₃ 550ppm + تمور لزجة + 48°م]، تتفاقم ظاهرة [Swirl Marks + Water Spots + Caramelized Sugar]. لذا؛ يتدخل فريقنا عبر [ضغط بدون لمس ← ماء منقّى ← إنزيم سكّري] لضمان طلاء بدون خدش.',
        heroSubtitle: 'SiO₂ خدش + CaCO₃ Spots + تمور لزجة — Touchless!',
    },
    pricing: [
        { type: 'Touchless خارجي', unit: 'سيارة', minPrice: 30, maxPrice: 65, time: '20-30 دقيقة' },
        { type: 'شامل + Enzymatic تمور', unit: 'سيارة', minPrice: 45, maxPrice: 90, time: '30-45 دقيقة' },
        { type: 'تفصيلي (داخل+خارج+تمور)', unit: 'سيارة', minPrice: 80, maxPrice: 160, time: '1-2 ساعة' },
        { type: 'أسبوعي (4 غسلات/شهر)', unit: 'شهر', minPrice: 100, maxPrice: 210, time: '4 غسلات' },
    ],
    faq: [
        { question: 'كيف أتجنب خدش طلاء السيارة بعنيزة؟', answer: 'SiO₂ 7 Mohs أصلب من Clear Coat (2-4). أي إسفنجة = خدش. Touchless بضغط 1500-2000 PSI بدون لمس.' },
        { question: 'ليش الزجاج يتبقّع بسرعة بعنيزة؟', answer: 'CaCO₃ 550ppm — ماء عسر. Softened Water لا يترك Spots. ماء صنبور = بقع بيضاء خلال ساعة.' },
        { question: 'كم تكلفة إزالة بقع التمور اللزجة؟', answer: '15-25 ريال إضافية للـ Enzymatic. بدونه = فرك = خدش. التمور تتكرمل تحت شمس 48°م = طبقة صلبة.' },
        { question: 'هل السيارة بعنيزة تصدأ مثل جدة؟', answer: 'لا! صفر NaCl ملح بحري = صفر صدأ Undercarriage. وفّر Anti-Rust = أرخص 15-20% من الساحل.' },
        { question: 'متى أفضل وقت لغسل السيارة بعنيزة؟', answer: 'الصباح الباكر أو المغرب. الظهيرة 48°م = الصابون يجف على الطلاء = بقع.' },
    ],
    expertTips: [
        'Touchless فقط — SiO₂ يخدش أي إسفنجة. بدون لمس!',
        'Softened Water — CaCO₃ 550ppm يبقّع الزجاج.',
        'Enzymatic للتمور — يُكسِّر السكر بدون فرك.',
        'لا تغسل الظهيرة — 48°م = الصابون يجف = بقع.',
        'لا Anti-Rust — صفر NaCl. وفّر التكلفة.',
    ],
    warnings: [
        'إسفنجة + SiO₂ = Swirl Marks دائمة على Clear Coat — لا تُصلَح إلا بـ Polish (300+ ريال).',
        'ماء صنبور + شمس = Water Spots كلسية تتشرب بالطلاء — Softened Water فقط.',
        'تمور لزجة + 48°م + يوم واحد = Caramelized Sugar لا يزول إلا بـ Enzymatic.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص مراكز الغسيل' },
        { entity: AMANA.QASSIM.entity, url: AMANA.QASSIM.url, role: 'اشتراطات أمانة القصيم' },
    ],
    expertReviewer: EXPERTS.ALZUWAYED,
    expertCitations: [
        { expert: EXPERTS.ALZUWAYED.name, quote: 'سيارات عنيزة: SiO₂ يخدش. تمور تلزّق. Touchless+Enzymatic = الحل. لا NaCl = لا صدأ.', source: 'هيئة النقل — قصيم' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [
        { badge: '✔️ مركز غسيل مرخص', authority: 'منصة بلدي', icon: 'shield-check' },
    ],
    equipment: [
        { name: 'Touchless 2000 PSI', use: 'غسل بضغط بدون لمس — يحمي Clear Coat من SiO₂' },
        { name: 'Softened Water', use: 'ماء منزوع CaCO₃ — صفر Water Spots' },
        { name: 'Enzymatic Sugar Breaker', use: 'يُكسِّر سكر التمور بدون فرك — يحمي الطلاء' },
    ],
    hiddenObjections: [
        { fear: 'مثل بريدة بالضبط.', solution: 'تمور لزجة = Enzymatic إضافي. بريدة سوق أصغر.' },
        { fear: 'Touchless ما ينظف كويس.', solution: '2000 PSI يزيل كل شيء. أنظف من إسفنجة + بدون خدش.' },
    ],
    counterNarratives: [
        { myth: 'إسفنجة ناعمة ما تخدش.', truth: 'حبة SiO₂ واحدة في الإسفنجة = Swirl Mark. 7 Mohs > Clear Coat.' },
        { myth: 'ماء صنبور يكفي.', truth: 'CaCO₃ 550ppm = Water Spots. Softened فقط.' },
    ],
    relatedServices: [
        { slug: 'dabab', context: 'دباب — نقل تمور', priority: 1 },
        { slug: 'dyna', context: 'دينا — نقل', priority: 2 },
        { slug: 'cleaning', context: 'تنظيف منازل', priority: 3 },
        { slug: 'glass-facades-cleaning', context: 'واجهات — CaCO₃', priority: 4 },
        { slug: 'marble-polishing', context: 'رخام — Pitting', priority: 5 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف — SiO₂', priority: 6 },
        { slug: 'pest-control', context: 'حشرات — تمور', priority: 7 },
    ],
};
