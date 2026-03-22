import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../gov-references';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف شقق بالظهران — NaCl+SiO₂ مزدوج + 75-85% عفن + Sabkha+رمل + أرامكو (2026)',
        description: 'تنظيف شقق الظهران. NaCl ملح + SiO₂ رمل = أوساخ مزدوجة. 75-85% عفن. Sabkha+رمل صحراوي. معايير أرامكو. RO + Anti-Fungal + HEPA + تجفيف.',
        h1: 'تنظيف شقق بالظهران — طبقتان ساحلية+صحراوية والرطوبة تُعفّن',
        keywords: ['تنظيف شقق بالظهران', 'تنظيف شقة الظهران', 'شركة تنظيف شقق بالظهران'],
    },
    content: {
        introduction: 'الشقة في الظهران تتسخ بطريقة مزدوجة فريدة. الطبقة الأولى — NaCl+SiO₂: رذاذ بحري (NaCl) + رمل صحراوي (SiO₂) يدخلان معاً ← NaCl يلتصق بالسطح + SiO₂ يخدش ← غسل بماء عادي = SiO₂ يخدش تحت NaCl الرطب. RO مُقطر + Microfiber ناعم = غسل بلا خدش وبلا ملح. الطبقة الثانية — 75-85% عفن: أقل من الخبر بـ 10-15% لكن: كافٍ لعفن Aspergillus خلال 3-4 أسابيع في الحمام والخزائن. Anti-Fungal + تهوية. الطبقة الثالثة — Sabkha+رمل: تربة الظهران = خليط Sabkha ملحية + رمل صحراوي. تدخل من الأحذية ← خليط يخدش ويتآكل. غسل + تجفيف فوري.',
        shortAnswer: 'على عكس [ممسحة ومنظف] الذي يخدش بـ SiO₂ تحت NaCl، يعتمد بروتوكولنا في خدمة [تنظيف الشقق] بمدينة [الظهران] على [RO + Microfiber + Anti-Fungal + تجفيف]. ففي ظل [NaCl+SiO₂ + 75-85% + Sabkha+رمل]، تتفاقم ظاهرة [خدش+تآكل + عفن]. لذا؛ يتدخل خبراؤنا عبر [بروتوكول مزدوج].',
        heroSubtitle: 'NaCl+SiO₂ مزدوج + 75-85% عفن + Sabkha+رمل مختلط',
    },
    pricing: [
        { type: 'شقة — بروتوكول مزدوج', unit: 'شقة', minPrice: 200, maxPrice: 400, time: '3-5 ساعات' },
        { type: 'شقة + Anti-Fungal عميق', unit: 'شقة', minPrice: 260, maxPrice: 470, time: '4-6 ساعات' },
        { type: 'بعد إخلاء — مكافحة عفن', unit: 'شقة', minPrice: 300, maxPrice: 600, time: '5-8 ساعات' },
        { type: 'عقد أسبوعي (4 زيارات/شهر)', unit: 'شهر', minPrice: 360, maxPrice: 720, time: '4 زيارات' },
    ],
    faq: [
        { question: 'SiO₂ تحت NaCl — ليش خطر؟', answer: 'NaCl رطب = يُلصق SiO₂ على السطح. المسح = SiO₂ يخدش تحت NaCl اللزج. مثل سنفرة مبللة. RO أولاً = يُذيب NaCl ← يرفع SiO₂ بلا خدش.' },
        { question: 'الظهران ≠ الخبر في الرطوبة؟', answer: 'الظهران 75-85% vs الخبر 85-95%. فرق 10-15% = عفن أبطأ (3-4 أسابيع vs أسبوعين). لكن: حتمي. Anti-Fungal كل 5 أشهر.' },
        { question: 'أحياء أرامكو — فرق؟', answer: 'مُجمّعات أرامكو = تصميم أفضل (تهوية + عزل). لكن: NaCl+SiO₂ يدخل من أي فتحة. الميزة: عفن أبطأ بسبب التهوية. العيب: نفس الأوساخ.' },
        { question: 'Sabkha+رمل — أسوأ من كل واحد؟', answer: 'Sabkha = NaCl تآكل. رمل = SiO₂ خدش. معاً = مثل NaCl+SiO₂ الجوي — لكن من الأحذية. نفس المبدأ المزدوج.' },
        { question: 'كم مرة؟', answer: 'أسبوعي = الأمثل. NaCl+SiO₂ يومي. عفن أسبوعي-شهري. أسبوعي = يمنع التراكم المزدوج.' },
    ],
    expertTips: [
        'RO أولاً لإذابة NaCl ← ثم Microfiber ناعم لرفع SiO₂ — الترتيب مهم.',
        'Anti-Fungal على حمام + مطبخ + خزائن كل 5 أشهر — 75-85% = حتمي.',
        'HEPA في غرف النوم — SiO₂ ناعم يدخل الرئة (PM10).',
        'تجفيف بعد التنظيف — 75-85% = أبطأ تجفيف من الرياض. Microfiber جاف.',
        'سجاد مدخل يُغسل أسبوعياً — يحجز Sabkha+رمل قبل الدخول.',
    ],
    warnings: [
        'SiO₂ تحت NaCl = Micro-Abrasion مُبلّل = خدوش على بلاط/رخام أسرع. ترتيب الغسل = حماية.',
        'عفن 75-85% في خزائن مُغلقة = جراثيم على الملابس = حساسية. Anti-Fungal + Silica Gel.',
        'Sabkha+رمل من الأحذية × سنة = بلاط مخدوش + تآكل. سجاد مدخل = أبسط حل.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص شركات التنظيف' },
        { entity: AMANA.SHARQIA.entity, url: AMANA.SHARQIA.url, role: 'اشتراطات النظافة بالشرقية' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALMISNID.name, quote: 'شقة الظهران = مزدوجة: NaCl+SiO₂ يتفاعلان — SiO₂ يخدش تحت NaCl الرطب. 75-85% عفن. بروتوكول: RO ← Microfiber ← Anti-Fungal ← تجفيف — ترتيب لا يُختصر.', source: 'جغرافيا المناخ — التنظيف المزدوج' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [
        { badge: '✔️ تنظيف شقق مرخص', authority: 'منصة بلدي', icon: 'shield-check' },
        { badge: '✔️ بروتوكول مزدوج', authority: 'معتمد داخلياً', icon: 'badge-check' },
    ],
    equipment: [
        { name: 'RO Water', use: 'يُذيب NaCl بدون إضافة أملاح — الخطوة الأولى' },
        { name: 'Microfiber ناعم', use: 'يرفع SiO₂ بلا خدش بعد إذابة NaCl' },
        { name: 'Anti-Fungal Spray', use: 'يمنع Aspergillus 75-85% — فعّال 5 أشهر' },
        { name: 'HEPA فلتر', use: 'يحجز SiO₂ < 10 ميكرون في غرف النوم' },
    ],
    commonConcerns: [
        { concern: 'مثل الخبر.', solution: 'الخبر = NaCl 90%. الظهران = NaCl+SiO₂ 60/40. المزيج = خدش+تآكل معاً.' },
        { concern: 'ممسحة عادية.', solution: 'ممسحة + SiO₂ تحت NaCl = خدش مُبلّل. أسوأ من جاف.' },
    ],
    consumerEducation: [
        { myth: 'الظهران مثل الخبر.', truth: 'SiO₂ إضافي = خدش مزدوج. 75-85% ≠ 85-95%. مختلف.' },
        { myth: 'ماء وصابون.', truth: 'ماء الظهران = NaCl. صابون + SiO₂ = خدش. 2 أخطاء.' },
        { myth: 'شهري.', truth: 'NaCl+SiO₂ يومي. أسبوعي = الحد.' },
    ],
    relatedServices: [
        { slug: 'cleaning', context: 'تنظيف — مزدوج', priority: 1 },
        { slug: 'carpet-cleaning', context: 'سجاد — SiO₂+NaCl', priority: 2 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف — مزدوج', priority: 3 },
        { slug: 'marble-polishing', context: 'رخام — خدش SiO₂', priority: 4 },
        { slug: 'steam-cleaning', context: 'بخار — تعقيم', priority: 5 },
        { slug: 'pest-control', context: 'حشرات — رطوبة', priority: 6 },
        { slug: 'villas-cleaning', context: 'فلل — مزدوج', priority: 7 },
    ],
};
