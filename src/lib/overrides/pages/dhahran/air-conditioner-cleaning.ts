import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف مكيفات بالظهران — NaCl+SiO₂ مزدوج + 75-85% عفن مبخر + رمل يسد + أرامكو (2026)',
        description: 'تنظيف مكيفات الظهران. NaCl رذاذ + SiO₂ رمل = Micro-Abrasion + تآكل مزدوج. 75-85% Aspergillus. رمل يسد الفلتر. معايير أرامكو. Anti-Rust + Anti-Fungal + HEPA.',
        h1: 'تنظيف مكيفات بالظهران — ملح+رمل = تحدٍ مزدوج لا يوجد في مدينة أخرى',
        keywords: ['تنظيف مكيفات بالظهران', 'تنظيف مكيف الظهران', 'شركة تنظيف مكيفات بالظهران'],
    },
    content: {
        introduction: 'مكيف الظهران يواجه تحدياً مزدوجاً فريداً لا يوجد في الخبر ولا الرياض. التحدي المزدوج — NaCl + SiO₂: الظهران = ساحلية-داخلية — قريبة من الخليج (NaCl رذاذ بحري) + قريبة من الصحراء (SiO₂ رمل ناعم). المكيف يستقبل الاثنين: NaCl يُسبب Galvanic Corrosion للزعانف + SiO₂ يتراكم على الفلتر كسنفرة (Micro-Abrasion). معاً: الأسوأ من العالمين. Anti-Rust الزعانف + HEPA فلتر + تنظيف دوري. التحدي الثاني — 75-85% عفن مبخر: أقل من الخبر (85-95%) لكن أعلى من الأحساء (60-70%). في 75-85%: Aspergillus ينمو خلال 3-4 أسابيع (بدلاً من أسبوعين في الخبر). Anti-Fungal كل 5 أشهر. التحدي الثالث — سياق أرامكو: الظهران = مقر أرامكو ← مُجمّعات سكنية بمعايير عالية ← التنظيف يحتاج شهادات + بروتوكولات مُوثّقة.',
        shortAnswer: 'على عكس [غسل بالماء فقط] الذي لا يحمي من المزدوج، يعتمد بروتوكولنا في خدمة [تنظيف المكيفات] بمدينة [الظهران] على [Anti-Rust + HEPA + Anti-Fungal + بروتوكول مزدوج]. ففي ظل [NaCl+SiO₂ + 75-85% + معايير أرامكو]، تتفاقم ظاهرة [تآكل+انسداد + عفن]. لذا؛ يتدخل خبراؤنا عبر [بروتوكول ظهراني مزدوج].',
        heroSubtitle: 'NaCl+SiO₂ تآكل+انسداد مزدوج + 75-85% عفن + معايير أرامكو',
    },
    pricing: [
        { type: 'فلتر + Anti-Fungal (سبليت)', unit: 'مكيف', minPrice: 65, maxPrice: 130, time: '30-45 دقيقة' },
        { type: 'عميق + Anti-Rust + HEPA', unit: 'مكيف', minPrice: 160, maxPrice: 320, time: '1-2 ساعة' },
        { type: 'مركزي (دكت) — معايير أرامكو', unit: 'وحدة', minPrice: 280, maxPrice: 550, time: '2-4 ساعات' },
        { type: 'عقد موسمي (4 زيارات)', unit: 'سنة', minPrice: 500, maxPrice: 1000, time: '4 زيارات' },
    ],
    faq: [
        { question: 'NaCl+SiO₂ — ليش أسوأ من كل واحد لوحده؟', answer: 'SiO₂ يخدش Coating ← يكشف الألمنيوم ← NaCl يتآكله مباشرة. SiO₂ وحده = يسد. NaCl وحده = يتآكل. معاً = يسد + يتآكل + يخدش الحماية = ضرر مُركّب.' },
        { question: 'الظهران بين الخبر والأحساء — أي خطة؟', answer: 'الخبر = NaCl أكثر. الأحساء = CaSO₄ + لقاح. الظهران = NaCl + SiO₂ مزدوج — ليس مجموعهما بل تفاعلهما. خطة خاصة.' },
        { question: '75-85% — أقل من الخبر؟', answer: 'نعم — 10-15% أقل = عفن أبطأ (3-4 أسابيع بدلاً من أسبوعين). لكن: حتمي. Anti-Fungal كل 5 أشهر (بدلاً من 4 في الخبر).' },
        { question: 'معايير أرامكو — ماذا تعني؟', answer: 'بروتوكولات مُوثّقة + شهادات + تقارير. المُجمّعات السكنية (أحياء أرامكو) تحتاج مقاولين بمعايير. نحن مُجهّزون.' },
        { question: 'HEPA فلتر — لماذا؟', answer: 'SiO₂ ناعم (< 10 ميكرون) يمر من الفلتر العادي ← يدخل الغرفة ← PM10. HEPA = يحجز 99.97%. في الظهران: SiO₂ أكثر من الخبر.' },
    ],
    expertTips: [
        'Anti-Rust + HEPA = الثنائي الظهراني — NaCl يتآكل + SiO₂ يسد. حل مزدوج.',
        'Anti-Fungal كل 5 أشهر — 75-85% = أبطأ من الخبر لكن حتمي.',
        'فلتر HEPA لغرف النوم — SiO₂ < 10 ميكرون = يدخل الرئة.',
        'تنظيف Condenser خارجي شهري — SiO₂ يتراكم + NaCl يلصقه = طبقة سميكة.',
        'بروتوكول مُوثّق — تقرير بالصور لكل زيارة (معايير أرامكو).',
    ],
    warnings: [
        'NaCl+SiO₂ المزدوج = زعانف تتآكل 40-60% أسرع من NaCl وحده. SiO₂ يكشف ← NaCl يتآكل = تلف مُركّب.',
        'SiO₂ < 10 ميكرون بدون HEPA = يدخل الغرفة 24/7 = PM10 = أمراض تنفسية. HEPA = حماية.',
        'عفن 75-85% = أبطأ لكن حتمي. تجاهل = نفس النتيجة بعد 5 أشهر.',
    ],
    trustAnchors: [
        { ...GOV.SCE, role: 'كفاءة الطاقة' },
        { entity: AMANA.SHARQIA.entity, url: AMANA.SHARQIA.url, role: 'اشتراطات الصحة بالشرقية' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALJUND.name, quote: 'مكيف الظهران = مزدوج: NaCl+SiO₂ يتفاعلان — SiO₂ يخدش الحماية + NaCl يتآكل المكشوف. لا يُشبه الخبر (NaCl فقط) ولا الرياض (SiO₂ فقط). بروتوكول خاص.', source: 'موسوعة أخطاء — مكيفات البيئة المزدوجة' },
    ],
    saudiRegulations: [REGULATIONS.SBC_601],
    verificationBadges: [
        { badge: '✔️ صيانة مكيفات مرخصة', authority: 'منصة بلدي', icon: 'shield-check' },
        { badge: '✔️ بروتوكول مزدوج', authority: 'معتمد داخلياً', icon: 'badge-check' },
    ],
    equipment: [
        { name: 'Anti-Rust Coating (إيبوكسي)', use: 'يحمي زعانف الألمنيوم من NaCl بعد خدش SiO₂' },
        { name: 'HEPA Filter', use: 'يحجز SiO₂ < 10 ميكرون — 99.97% كفاءة' },
        { name: 'Anti-Fungal Coil Coating', use: 'يمنع Aspergillus 75-85% — فعّال 5 أشهر' },
    ],
    commonConcerns: [
        { concern: 'مثل الخبر.', solution: 'الخبر = NaCl. الظهران = NaCl+SiO₂ مزدوج. SiO₂ يخدش ← NaCl يتآكل = أسوأ.' },
        { concern: 'HEPA غالي.', solution: 'HEPA = 50-100 ريال/فلتر. أمراض تنفسية = آلاف. استثمار صحي.' },
    ],
    consumerEducation: [
        { myth: 'الظهران مثل الخبر.', truth: 'الخبر = NaCl 90%. الظهران = NaCl 60% + SiO₂ 40%. المزيج = أسوأ.' },
        { myth: 'غسل عادي.', truth: 'بدون Anti-Rust: SiO₂ يكشف + NaCl يتآكل. بدون HEPA: SiO₂ يدخل. بروتوكول مزدوج.' },
        { myth: 'مرة بالسنة.', truth: 'SiO₂ شهري + NaCl أسبوعي + عفن 5 أشهر. سنوي = متأخر.' },
    ],
    relatedServices: [
        { slug: 'cleaning', context: 'تنظيف — مزدوج', priority: 1 },
        { slug: 'office-cleaning', context: 'مكاتب — أرامكو', priority: 2 },
        { slug: 'carpet-cleaning', context: 'سجاد — SiO₂+NaCl', priority: 3 },
        { slug: 'villas-cleaning', context: 'فلل — مزدوج', priority: 4 },
        { slug: 'steam-cleaning', context: 'بخار — تعقيم', priority: 5 },
        { slug: 'apartments-cleaning', context: 'شقق — ساحلي-داخلي', priority: 6 },
        { slug: 'pest-control', context: 'حشرات — رطوبة', priority: 7 },
    ],
};
