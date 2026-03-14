import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف مكيفات بالخبر — NaCl يُصدّئ Condenser + 85-95% عفن مبخر + Biofilm يقاوم الكلور + UV-C تعقيم (2026)',
        description: 'تنظيف مكيفات الخبر. NaCl رذاذ بحري يُصدّئ Condenser خلال 2-3 سنوات. 85-95% رطوبة = Aspergillus مبخر. Biofilm يحمي بكتيريا. Anti-Rust + Anti-Fungal + UV-C.',
        h1: 'تنظيف مكيفات بالخبر — الخليج يُصدّئ والرطوبة تُعفّن والبكتيريا تتحصّن',
        keywords: ['تنظيف مكيفات بالخبر', 'تنظيف مكيف الخبر', 'شركة تنظيف مكيفات بالخبر', 'صيانة مكيفات الخبر'],
    },
    content: {
        introduction: 'مكيف الخبر يواجه 3 تحديات ساحلية لا مثيل لها في المدن الداخلية. التحدي الأول — NaCl يُصدّئ Condenser: رذاذ بحري من الخليج العربي يحمل كلوريد صوديوم (NaCl) ← يترسب على زعانف الألمنيوم ← يُسبب Galvanic Corrosion (تآكل كهروكيميائي) ← زعانف تتآكل خلال 2-3 سنوات. كورنيش/أحياء البحر = أسرع. Anti-Rust Coating (إيبوكسي بحري) كل 12 شهراً يحمي. التحدي الثاني — 85-95% عفن مبخر: رطوبة الخبر الاستوائية = أعلى في المملكة. المبخر رطب دائماً ← Aspergillus niger/flavus ينمو خلال أسبوعين. جراثيمه = حساسية + ربو + ABPA (Allergic Bronchopulmonary Aspergillosis). Anti-Fungal Coil Coating كل 4 أشهر. التحدي الثالث — Biofilm يقاوم الكلور: البكتيريا تُشكّل Biofilm (غشاء حيوي) على المبخر والفلتر. Biofilm = حاجز Diffusion يحمي البكتيريا من التنظيف السطحي. UV-C 254nm (داخل الوحدة) يُكسر Biofilm + يقتل البكتيريا.',
        shortAnswer: 'على عكس [غسل بالماء فقط] الذي لا يمنع الصدأ ولا العفن، يعتمد بروتوكولنا في خدمة [تنظيف المكيفات] بمدينة [الخبر] على [Anti-Rust الزعانف + Anti-Fungal المبخر + UV-C Biofilm]. ففي ظل [NaCl ساحلي + 85-95% رطوبة + بكتيريا]، تتفاقم ظاهرة [تآكل + عفن + مقاومة]. لذا؛ يتدخل خبراؤنا عبر [بروتوكول ساحلي ثلاثي].',
        heroSubtitle: 'NaCl يُصدّئ Condenser + 85-95% عفن Aspergillus + Biofilm يقاوم',
    },
    pricing: [
        { type: 'تنظيف فلتر + Anti-Fungal (سبليت)', unit: 'مكيف', minPrice: 60, maxPrice: 120, time: '30-45 دقيقة' },
        { type: 'تنظيف عميق + Anti-Rust + UV-C', unit: 'مكيف', minPrice: 150, maxPrice: 300, time: '1-2 ساعة' },
        { type: 'تنظيف مركزي (دكت)', unit: 'وحدة', minPrice: 250, maxPrice: 500, time: '2-4 ساعات' },
        { type: 'عقد موسمي (4 زيارات + Anti-Rust)', unit: 'سنة', minPrice: 450, maxPrice: 900, time: '4 زيارات' },
    ],
    faq: [
        { question: 'NaCl يُصدّئ الألمنيوم — مو الحديد فقط؟', answer: 'Galvanic Corrosion: NaCl + رطوبة + ألمنيوم + نحاس (أنابيب) = خلية كهروكيميائية. الألمنيوم يتآكل (Anode) والنحاس يبقى (Cathode). زعانف تتفتت ← كفاءة أقل 30-50% ← استبدال Condenser 1,500-4,000 ريال.' },
        { question: 'كورنيش أسوأ؟', answer: '500 م من البحر = NaCl 3-5× أعلى. كورنيش/أحياء البحر (العزيزية، الشمالية) = صدأ أسرع. الأحياء الداخلية (الثقبة، الخبر الشمالية) = أبطأ لكنه يصل. Anti-Rust سنوي كلاهما.' },
        { question: '85-95% — أعلى من جدة؟', answer: 'جدة = 60-80% (مرتفعة). الخبر = 85-95% خاصة صيفاً (الخليج أضيق = رطوبة أعلى). الفرق 15-20% = الفرق بين \"عفن ممكن\" و\"عفن حتمي\". Anti-Fungal كل 4 أشهر (ليس 6).' },
        { question: 'UV-C — آمن؟', answer: 'UV-C 254nm يعمل داخل الوحدة = لا يصل الغرفة. يقتل بكتيريا + يُكسر Biofilm + يمنع إعادة التكوّن. يعمل 24/7 بتكلفة كهرباء 5-10 ريال/شهر. يُستبدل سنوياً.' },
        { question: 'كم مرة بالسنة؟', answer: 'Anti-Fungal: كل 4 أشهر (3×/سنة). Anti-Rust: سنوياً. UV-C: تركيب مرة + استبدال لمبة سنوياً. الفلتر: أسبوعي في الصيف.' },
    ],
    expertTips: [
        'Anti-Rust Coating (إيبوكسي بحري) على Condenser سنوياً — يحمي من NaCl Galvanic Corrosion. بدونه: زعانف تتآكل خلال 2-3 سنوات.',
        'Anti-Fungal كل 4 أشهر — 85-95% = أسرع من أي مدينة. 6 أشهر = أسبوعان نمو عفن بعد انتهاء الحماية.',
        'UV-C داخل المكيف — يُكسر Biofilm + يمنع إعادة تكوّنه. أفضل من التنظيف المتكرر.',
        'تشغيل المروحة 15 دقيقة بعد الإطفاء — يُجفف المبخر. في 85-95%: أبطأ تجفيفاً لكن يُقلل العفن.',
        'Condenser Unit بعيدة عن الحائط 30 سم — تدفق هواء أفضل = حرارة أقل + تجفيف NaCl.',
    ],
    warnings: [
        'Condenser بدون Anti-Rust في الخبر = زعانف تتآكل خلال 2-3 سنوات = كفاءة أقل 30-50% = استبدال 1,500-4,000 ريال. Anti-Rust = 100-200 ريال/سنة.',
        'عفن Aspergillus في 85-95% = جراثيم في الهواء = حساسية + ربو + ABPA (خطر على مناعة ضعيفة). Anti-Fungal = حماية صحية.',
        'Biofilm بدون UV-C = بكتيريا مُقاومة = رائحة + أمراض رغم \"التنظيف\". Biofilm لا يُزال بالماء.',
    ],
    trustAnchors: [
        { ...GOV.SCE, role: 'كفاءة الطاقة — مكيف نظيف = COP أعلى' },
        { entity: AMANA.SHARQIA.entity, url: AMANA.SHARQIA.url, role: 'اشتراطات الصحة والبيئة بالمنطقة الشرقية' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALJUND.name, quote: 'مكيف الخبر = مكيف ساحلي: NaCl Galvanic Corrosion يأكل الزعانف + 85-95% عفن حتمي + Biofilm يحمي البكتيريا. Anti-Rust + Anti-Fungal + UV-C = ثلاثية ساحلية — لا تشبه أي مدينة داخلية.', source: 'موسوعة أخطاء — مكيفات البيئات الساحلية' },
    ],
    saudiRegulations: [REGULATIONS.SBC_601],
    verificationBadges: [
        { badge: '✔️ صيانة مكيفات مرخصة', authority: 'منصة بلدي', icon: 'shield-check' },
        { badge: '✔️ بروتوكول ساحلي', authority: 'معتمد داخلياً', icon: 'badge-check' },
    ],
    equipment: [
        { name: 'Anti-Rust Coating (إيبوكسي بحري)', use: 'يحمي زعانف الألمنيوم من NaCl Galvanic Corrosion — فعّال 12 شهراً' },
        { name: 'Anti-Fungal Coil Coating', use: 'يمنع Aspergillus في مبخر 85-95% — فعّال 4 أشهر' },
        { name: 'UV-C 254nm (داخلي)', use: 'يُكسر Biofilm + يقتل بكتيريا 24/7 — لا يصل الغرفة' },
        { name: 'فلتر MERV 13+', use: 'يحجز جراثيم العفن + ملح NaCl الناعم' },
    ],
    hiddenObjections: [
        { fear: 'مكيف الرياض نفسه.', solution: 'الرياض = غبار SiO₂ + 15% رطوبة = لا صدأ ولا عفن. الخبر = NaCl + 85-95% = صدأ + عفن حتمي. مكيفان مختلفان تماماً.' },
        { fear: 'Anti-Rust غالي.', solution: '100-200 ريال/سنة vs استبدال Condenser 1,500-4,000 ريال vs مكيف جديد 3,000-8,000 ريال. Anti-Rust = 2-5% من الاستبدال.' },
    ],
    consumerEducation: [
        { myth: 'غسل بالماء يكفي.', truth: 'الماء يُزيل الأملاح مؤقتاً — لا يحمي من الصدأ. Anti-Rust Coating = حاجز دائم. الغسل بدون Coating = يتكرر الصدأ.' },
        { myth: 'العفن = رائحة فقط.', truth: 'Aspergillus = جراثيم في الهواء = حساسية + ربو + ABPA. رائحة = أقل المشاكل.' },
        { myth: 'مرة بالسنة.', truth: 'Anti-Fungal: كل 4 أشهر. Anti-Rust: سنوياً. فلتر: أسبوعي. مرة بالسنة = 8 أشهر بدون حماية.' },
    ],
    relatedServices: [
        { slug: 'cleaning', context: 'تنظيف — بروتوكول ساحلي', priority: 1 },
        { slug: 'office-cleaning', context: 'مكاتب — عفن مكيف المكتب', priority: 2 },
        { slug: 'carpet-cleaning', context: 'سجاد — عفن + ملح', priority: 3 },
        { slug: 'pest-control', context: 'حشرات — صراصير رطوبة', priority: 4 },
        { slug: 'steam-cleaning', context: 'بخار — تعقيم', priority: 5 },
        { slug: 'apartments-cleaning', context: 'شقق — ساحلي', priority: 6 },
        { slug: 'villas-cleaning', context: 'فلل — ساحلي', priority: 7 },
    ],
};
