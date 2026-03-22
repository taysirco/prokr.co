import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../gov-references';

export const override: PageOverride = {
    meta: {
        title: 'عزل خزانات بالقطيف — رذاذ ملحي 35,000 ppm + فايبرقلاس بحري + SS316 (2026)',
        description: 'عزل خزانات القطيف. رذاذ بحري مباشر. فايبرقلاس بحري إلزامي. Marine Epoxy. SS316 عوّامة ووصلات. مظلة SS316. من 800 ريال.',
        h1: 'عزل خزانات بالقطيف — حماية بحرية شاملة للخزان',
        keywords: ['عزل خزانات القطيف', 'عزل خزان بحري', 'SS316', 'Marine Epoxy', 'فايبرقلاس'],
    },
    content: {
        introduction: 'خزانات القطيف = أصعب بيئة خزانات في الشرقية: رذاذ ملحي مباشر (35,000 ppm) يصل الخزان العلوي ← يأكل كل معدن غير SS316. الخزان الأرضي محاط بسبخات = هجوم كلوريدات من الخارج. الحرارة 48-50°م. الحل: فايبرقلاس بحري + Marine Epoxy داخلي وخارجي + SS316 لكل وصلة وعوّامة + مظلة SS316 (وليس ألمنيوم — يصدأ). تنظيف خارجي شهري بالماء النظيف لإزالة ترسبات الملح.',
        shortAnswer: 'على عكس [خزان عادي في رذاذ بحري = تآكل شامل]، يعتمد بروتوكولنا في [عزل الخزانات] بمدينة [القطيف] على [فايبرقلاس بحري + Marine Epoxy + SS316 كامل]. ففي ظل [35,000 ppm + سبخات + 50°م]، نُقدّم [حماية بحرية كاملة من كل الجهات].',
        heroSubtitle: 'حماية من 6 جهات — أعلى مواصفات خزانات في الشرقية',
    },
    pricing: [
        { type: 'Marine Epoxy داخلي + خارجي', unit: 'خزان', minPrice: 800, maxPrice: 1500, time: 'يوم' },
        { type: 'غلاف بحري + مظلة SS316 + إيبوكسي', unit: 'خزان', minPrice: 2000, maxPrice: 3500, time: '1-2 يوم' },
        { type: 'استبدال بفايبرقلاس بحري + SS316 كامل', unit: 'خزان', minPrice: 3000, maxPrice: 5500, time: '1-2 يوم' },
        { type: 'تنظيف ملحي خارجي + فحص تآكل', unit: 'خزان', minPrice: 100, maxPrice: 200, time: '1 ساعة' },
    ],
    faq: [
        { question: 'مظلة ألمنيوم ممكنة؟', answer: 'لا — ألمنيوم يتآكل في رذاذ 35,000 ppm خلال 3-5 سنوات. SS316 فقط. أو FRP (Fiberglass Reinforced Plastic).' },
        { question: 'تنظيف خارجي شهري — ضروري؟', answer: 'الملح يتراكم ← يتبلور ← يُفتّت السطح. غسيل بالماء النظيف مرة/شهر = يُمدّد العمر 30-40%.' },
        { question: 'Marine Epoxy داخلي وخارجي؟', answer: 'في القطيف: نعم. الداخل يحمي من كلوريدات الشبكة. الخارج يحمي من رذاذ البحر. هجوم من جهتين = حماية من جهتين.' },
        { question: 'كم توفّر فاتورة الكهرباء؟', answer: 'عزل مطابق لكود SBC 601 يوفر 30-40% من فاتورة الكهرباء سنوياً. منزل 300 م²: توفير 1,500-2,500 ريال/سنة. العزل يسترد تكلفته خلال 2-3 سنوات.' },
        { question: 'كم يدوم العزل؟', answer: 'فوم بولييوريثين: 15-25 سنة. SBS مائي: 10-15 سنة. صوف صخري: 20-30 سنة. العمر يعتمد على جودة التركيب + الحماية من الأشعة.' },
    ],
    expertTips: [
        'فايبرقلاس بحري: يصمد 18-25 سنة في رذاذ مباشر.',
        'Marine Epoxy داخلي + خارجي: حماية ثنائية.',
        'SS316 لكل وصلة بدون استثناء.',
        'غسيل خارجي شهري بماء نظيف.',
        'مظلة SS316 أو FRP: لا ألمنيوم.',
    ],
    warnings: [
        'ألمنيوم في رذاذ القطيف: يتآكل خلال 3-5 سنوات.',
        'بلاستيك عادي: يتقصّف في الرذاذ والحرارة.',
        'عوّامة نحاس: تتآكل في كلوريدات — SS316 فقط.',
    ],
    trustAnchors: [
        { ...GOV.NWC, role: 'معايير الخزانات' },
        { ...GOV.SASO, role: 'مواصفات بحرية' },
        { entity: AMANA.SHARQIA.entity, url: AMANA.SHARQIA.url, role: 'اشتراطات خزانات ساحلية' },
    ],
    expertReviewer: EXPERTS.ALMOHAIMED,
    expertCitations: [{ expert: EXPERTS.ALMOHAIMED.name, quote: 'خزان القطيف يُهاجم من كل جهة: رذاذ من أعلى + سبخات من أسفل + كلوريدات من جانب. الحماية يجب أن تكون 360°. فايبرقلاس بحري + Marine Epoxy = الأساس.', source: 'مقابلة حصرية لتوثيق تحديات القطيف' }],
    saudiRegulations: [REGULATIONS.NWC_REPORT, REGULATIONS.BALADI_HEALTH],
    verificationBadges: [
        { badge: '✔️ Marine Epoxy 360°', authority: 'حماية شاملة', icon: 'shield-check' },
        { badge: '✔️ SS316 Full Kit', authority: 'تسليح بحري', icon: 'badge-check' },
    ],
    equipment: [
        { name: 'Marine-Grade Fiberglass Tank', use: 'خزان مصمم لرذاذ بحري مباشر 18-25 سنة' },
        { name: 'Marine Epoxy (Interior + Exterior)', use: 'حماية مزدوجة من الداخل والخارج' },
        { name: 'SS316 Complete Fitting Set', use: 'عوّامة + وصلات + حنفيات بحرية' },
    ],
    commonConcerns: [
        { concern: 'كل هذا غالي.', solution: 'خزان عادي يُستبدل كل 5 سنوات = 3-4 مرات في 20 سنة = أغلى إجمالياً. بحري مرة واحدة = أرخص.' },
        { concern: 'مظلة SS316 مكلفة.', solution: 'FRP (فايبرقلاس) بديل أرخص ولا يصدأ. المهم: لا ألمنيوم ولا حديد.' },
    ],
    consumerEducation: [
        { myth: 'نفس خزان الخبر يكفي.', truth: 'الخبر أبعد من البحر = رذاذ أقل. القطيف: رذاذ مباشر. الفرق في السرعة والشدة.' },
        { myth: 'غلاف خارجي يكفي.', truth: 'الغلاف يحمي من الرذاذ. لكن مياه الشبكة أيضاً فيها كلوريدات (300-500 ppm). حماية من الداخل والخارج = شاملة.' },
        { myth: 'أي شركة تنظيف/صيانة نتيجتها واحدة.', truth: 'الفرق بين شركة مرخصة ومُعتمدة وأخرى عشوائية = الفرق بين معالجة جذرية وإخفاء مؤقت. المعدات المتخصصة والبروتوكولات العلمية تحل المشكلة من جذرها — التنظيف العشوائي يُعيدها أسوأ خلال أسابيع.' },
    ],
    relatedServices: [
        { slug: 'tank-leak-detection', context: 'فحص تسرب بحري', priority: 1 },
        { slug: 'roof-insulation', context: 'عزل سطح بحري', priority: 2 },
        { slug: 'water-leak-detection', context: 'خطوط مياه', priority: 3 },
        { slug: 'water-insulation', context: 'عزل أساسات', priority: 4 },
        { slug: 'foam-insulation', context: 'فوم بحري', priority: 5 },
        { slug: 'thermal-insulation', context: 'عزل حراري', priority: 6 },
        { slug: 'bathroom-leak-detection', context: 'حمامات', priority: 7 },
    ],
};
