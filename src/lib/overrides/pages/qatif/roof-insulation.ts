import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'عزل أسطح بالقطيف — رذاذ بحري مباشر + 98% رطوبة + سبخات ملحية (2026)',
        description: 'عزل أسطح القطيف. رذاذ ملحي مباشر 35,000 ppm. رطوبة 98%. سبخات. SBS Marine + Vapor Vents + Marine Ceramic + SS316 مسامير. من 55 ريال/م².',
        h1: 'عزل أسطح بالقطيف — أقسى بيئة ساحلية في الشرقية',
        keywords: ['عزل أسطح القطيف', 'عزل سطح بحري', 'رذاذ ملحي', 'SBS Marine', 'Vapor Vents'],
    },
    content: {
        introduction: 'أسطح القطيف تتعرض لأقسى هجوم في الشرقية: رذاذ بحري مباشر (35,000+ ppm كلوريد صوديوم) يصل الأسطح بدون حاجز. رطوبة 85-98% تُشبع كل شيء. الخرسانة تمتص الملح ← يتبلور ← يُفتّت السطح (Salt Crystallization Pressure). فقاعات (Blistering) مضمونة بدون Vapor Vents. الفرق عن الخبر: القطيف أقرب للبحر + سبخات تحت المباني = هجوم من أعلى (رذاذ) ومن أسفل (كبريتات). الحل: Marine SBS + Vapor Vents إلزامية + Marine Ceramic + كل مسمار وبرغي SS316.',
        shortAnswer: 'على عكس [عزل عادي في رذاذ بحري مباشر = فشل خلال سنة]، يعتمد بروتوكولنا في [عزل الأسطح] بمدينة [القطيف] على [Marine SBS + Vapor Vents + Marine Ceramic + SS316]. ففي ظل [35,000 ppm + 98% رطوبة + سبخات]، تتفاقم ظاهرة [تبلور ملحي + فقاعات]. لذا؛ يتدخل خبراؤنا عبر [حماية بحرية شاملة من أعلى وأسفل].',
        heroSubtitle: 'هجوم بحري من أعلى وأسفل — عزل Marine-Grade يصمد',
    },
    pricing: [
        { type: 'Marine SBS + Vapor Vents', unit: 'م²', minPrice: 55, maxPrice: 85, time: '5-7 أيام' },
        { type: 'Marine SBS + Marine Ceramic', unit: 'م²', minPrice: 65, maxPrice: 95, time: '6-8 أيام' },
        { type: 'عزل كامل فيلا (250-400 م²)', unit: 'فيلا', minPrice: 16000, maxPrice: 34000, time: '7-10 أيام' },
        { type: 'تجديد Marine Ceramic', unit: 'م²', minPrice: 18, maxPrice: 30, time: '1-2 يوم' },
    ],
    faq: [
        { question: 'ليش Marine SBS وليس SBS عادي؟', answer: 'SBS العادي يتآكل من كلوريد 35,000 ppm خلال 3-5 سنوات. Marine SBS: مُعالج بمضادات ملوحة (Anti-Salt Additives) = 10-15 سنة.' },
        { question: 'Vapor Vents ضرورية في القطيف؟', answer: 'أكثر ضرورة من أي مدينة : 98% رطوبة + 48-50°م = فقاعات خلال أيام بدون Vents. كل 20 م² = فتحة تهوية.' },
        { question: 'كل المسامير SS316 — مبالغة؟', answer: 'مسمار حديد عادي في رذاذ بحري: يصدأ خلال أشهر ← يُضعف التثبيت ← العزل ينفصل. SS316 = صيانة صفرية.' },
        { question: 'كم التوفير بالكهرباء؟', answer: '30-40% × 10-11 شهر تبريد. في القطيف الحارة الرطبة: حمل التكييف أعلى 20% من الرياض. التوفير أكبر.' },
        { question: 'كم توفّر فاتورة الكهرباء؟', answer: 'عزل مطابق لكود SBC 601 يوفر 30-40% من فاتورة الكهرباء سنوياً. منزل 300 م²: توفير 1,500-2,500 ريال/سنة. العزل يسترد تكلفته خلال 2-3 سنوات.' },
    ],
    expertTips: [
        'Marine SBS فقط: العادي يفشل في رذاذ 35,000 ppm.',
        'Vapor Vents كل 20 م²: أعلى كثافة في أي مدينة.',
        'كل مسمار/برغي = SS316: بدون استثناء.',
        'Marine Ceramic فوق العزل: يعكس الحرارة ويحمي من الملح.',
        'فحص سنوي: الملوحة المباشرة تحتاج مراقبة مستمرة.',
    ],
    warnings: [
        'عزل عادي في رذاذ بحري مباشر: يفشل خلال 1-3 سنوات.',
        'بدون Vapor Vents في 98%: فقاعات خلال أيام.',
        'مسمار حديد واحد: نقطة صدأ ← بقعة تسرب.',
    ],
    trustAnchors: [
        { ...GOV.SBC, role: 'كود SBC 602 للعزل المائي' },
        { ...GOV.MOENERGY, role: 'كود SBC 601 للعزل الحراري' },
        { entity: AMANA.SHARQIA.entity, url: AMANA.SHARQIA.url, role: 'رقابة العزل الساحلي' },
    ],
    expertReviewer: EXPERTS.ALMOHAIMED,
    expertCitations: [{ expert: EXPERTS.ALMOHAIMED.name, quote: 'القطيف أقسى بيئة عزل أسطح في الشرقية: رذاذ مباشر + 98% رطوبة + سبخات من تحت. كل تفصيلة يجب أن تكون Marine-Grade — حتى المسامير. تساهل واحد = فشل كامل.', source: 'مقابلة حصرية لتوثيق تحديات القطيف' }],
    saudiRegulations: [REGULATIONS.SBC_602, REGULATIONS.SBC_601],
    verificationBadges: [
        { badge: '✔️ Marine SBS + Vapor Vents', authority: 'عزل بحري', icon: 'shield-check' },
        { badge: '✔️ SS316 Hardware', authority: 'تثبيت بحري', icon: 'badge-check' },
    ],
    equipment: [
        { name: 'Marine SBS Modified Bitumen', use: 'عزل مائي مُعالج بمضادات ملوحة بحرية' },
        { name: 'Marine Ceramic Overcoat', use: 'طبقة حماية تعكس الحرارة وتمنع ترسبات الملح' },
        { name: 'SS316 Fasteners & Nails', use: 'مسامير وبراغي بحرية لا تصدأ في رذاذ 35,000 ppm' },
    ],
    hiddenObjections: [
        { fear: 'Marine SBS أغلى 20-30% من العادي.', solution: 'العادي يُستبدل كل 3-5 سنوات = أغلى إجمالياً. Marine 10-15 سنة = أرخص على مدى 15 سنة.' },
        { fear: 'SS316 hardware غالي.', solution: 'مسمار SS316: 1-2 ريال. مسمار عادي + صيانة صدأ + إعادة تثبيت = 10+ ريال. الحساب واضح.' },
    ],
    counterNarratives: [
        { myth: 'القطيف مثل الخبر — نفس العزل.', truth: 'القطيف أقرب للبحر + رذاذ مباشر + سبخات. الخبر بعيدة كم أو أكثر. Marine-Grade إلزامي في القطيف — ليس في كل الخبر.' },
        { myth: 'الـ Ceramic السطحي يكفي بدون SBS.', truth: 'Ceramic وحده لا يمنع تسرب المياه. هو طبقة حماية فوق العزل — وليس بديلاً عنه.' },
        { myth: 'أي شركة تنظيف/صيانة نتيجتها واحدة.', truth: 'الفرق بين شركة مرخصة ومُعتمدة وأخرى عشوائية = الفرق بين معالجة جذرية وإخفاء مؤقت. المعدات المتخصصة والبروتوكولات العلمية تحل المشكلة من جذرها — التنظيف العشوائي يُعيدها أسوأ خلال أسابيع.' },
    ],
    relatedServices: [
        { slug: 'foam-insulation', context: 'فوم بحري', priority: 1 },
        { slug: 'water-insulation', context: 'عزل أساسات سبخات', priority: 2 },
        { slug: 'thermal-insulation', context: 'عزل حراري', priority: 3 },
        { slug: 'tank-insulation', context: 'خزان بحري', priority: 4 },
        { slug: 'water-leak-detection', context: 'كشف تسربات', priority: 5 },
        { slug: 'bird-control', context: 'طيور بحرية', priority: 6 },
        { slug: 'sewage-unblocking', context: 'مجاري ساحلية', priority: 7 },
    ],
};
