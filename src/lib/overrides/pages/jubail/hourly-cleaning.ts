import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف بالساعة بالجبيل — عاملة 5 خطوات صناعية-ساحلية + Anti-Fungal + سخام (2026)',
        description: 'تنظيف بالساعة الجبيل. عاملة 5 خطوات: RO+Marine+Anti-Fungal+سخام+تجفيف. 85-98% عفن. NaCl+VOC. سخام SABIC. أعقد ساعة في المملكة.',
        h1: 'تنظيف بالساعة بالجبيل — عاملة 5 خطوات لا 3 — أعقد ساعة',
        keywords: ['تنظيف بالساعة الجبيل', 'عاملة تنظيف بالجبيل', 'شركة تنظيف بالساعة بالجبيل'],
    },
    content: {
        introduction: 'العاملة بالساعة في الجبيل تخطو 5 خطوات — أعقد في المملكة. الخطوة 1 — RO شطف: NaCl قبل الفرك. الخطوة 2 — Marine Degreaser: VOC+NaCl المُركّبة. الخطوة 3 — Anti-Fungal: 98% = عفن أسبوع. كل سطح. الخطوة 4 — Enzymatic سخام: بقع SABIC سوداء. الخطوة 5 — تجفيف: 98% = لا يجف. Dehumidifier أو تجفيف نشط. المقارنة: حفر الباطن = 3 خطوات (لا عفن + لا صدأ). الرياض = 2. الجبيل = 5 = أعقد = أغلى ساعة.',
        shortAnswer: 'على عكس [عاملة بممسحة] في 98%، يعتمد بروتوكولنا في خدمة [التنظيف بالساعة] بمدينة [الجبيل] على [عاملة 5 خطوات: RO ← Marine ← Anti-Fungal ← سخام ← تجفيف]. ففي ظل [NaCl+VOC + 85-98% + سخام]، تتفاقم ظاهرة [ترسبات + عفن + سخام + تكثّف]. لذا؛ يتدخل خبراؤنا عبر [عاملة صناعية-ساحلية].',
        heroSubtitle: '5 خطوات: RO ← Marine ← Anti-Fungal ← سخام ← تجفيف',
    },
    pricing: [
        { type: 'ساعة — عاملة صناعية-ساحلية', unit: 'ساعة', minPrice: 35, maxPrice: 55, time: '1 ساعة' },
        { type: '4 ساعات (حد أدنى)', unit: 'حصة', minPrice: 115, maxPrice: 190, time: '4 ساعات' },
        { type: '8 ساعات — يوم كامل', unit: 'يوم', minPrice: 195, maxPrice: 330, time: '8 ساعات' },
        { type: 'عقد أسبوعي', unit: 'شهر', minPrice: 370, maxPrice: 730, time: '4 زيارات' },
    ],
    faq: [
        { question: '5 خطوات — أكثر من أي مدينة؟', answer: 'الأكثر. حفر الباطن: 3. الخبر: 5. الجبيل = 5 + سخام SABIC = الأعقد. الرياض: 2.' },
        { question: 'أغلى ساعة — لماذا؟', answer: '5 خطوات = وقت أكثر = أغلى. 35-55/ساعة. الرياض: 20-35. حفر الباطن: 25-45.' },
        { question: 'عاملة مُدرّبة — فرق؟', answer: 'فرق كبير — 5 خطوات + مواد صناعية = تدريب. عاملة عادية = ممسحة = تنقل NaCl+VOC.' },
        { question: 'تجفيف — في كل ساعة؟', answer: '98% = لا يجف. تجفيف نشط بعد كل غسل. Dehumidifier في الغرفة.' },
    ],
    expertTips: [
        'RO أولاً — NaCl قبل الفرك.',
        'Marine ثانياً — VOC المُركّبة.',
        'Anti-Fungal ثالثاً — 98% = أسبوع.',
        'Enzymatic — سخام SABIC.',
        'تجفيف نشط — 98% = لا يجف.',
    ],
    warnings: [
        'ممسحة عادية + 98% = تنقل NaCl+VOC + لا تجف = عفن.',
        'بدون Anti-Fungal = عفن أسبوع.',
        'سخام + منديل = يطبّخ = بقعة دائمة.',
    ],
    trustAnchors: [
        { ...GOV.HRSD, role: 'تنظيم العمالة' },
        { entity: AMANA.SHARQIA.entity, url: AMANA.SHARQIA.url, role: 'اشتراطات النظافة بالشرقية' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALMISNID.name, quote: 'عاملة الجبيل = الأعقد: 5 خطوات صناعية-ساحلية. NaCl+VOC+98%+سخام. أغلى ساعة لكن: الأكثر فعالية.', source: 'جغرافيا المناخ — تنظيف صناعي' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [
        { badge: '✔️ عمالة مرخصة', authority: 'HRSD + بلدي', icon: 'shield-check' },
    ],
    equipment: [
        { name: 'RO + Marine', use: 'NaCl+VOC — خطوة 1+2' },
        { name: 'Anti-Fungal', use: '98% — خطوة 3' },
        { name: 'Enzymatic', use: 'سخام — خطوة 4' },
        { name: 'Dehumidifier', use: '98% — خطوة 5' },
    ],
    hiddenObjections: [
        { fear: 'أغلى.', solution: '5 خطوات = أعقد = أغلى. لكن: فعالية. عادية = تلويث.' },
        { fear: 'عاملة عادية.', solution: 'لا تعرف 5 خطوات. فرق تدريب.' },
    ],
    counterNarratives: [
        { myth: 'ممسحة.', truth: 'NaCl+VOC+سخام+98%. ممسحة = 0%.' },
        { myth: 'مثل الرياض.', truth: '5 خطوات vs 2. أعقد 2.5×.' },
    ],
    relatedServices: [
        { slug: 'cleaning', context: 'تنظيف', priority: 1 },
        { slug: 'apartments-cleaning', context: 'شقق', priority: 2 },
        { slug: 'carpet-cleaning', context: 'سجاد', priority: 3 },
        { slug: 'steam-cleaning', context: 'بخار', priority: 4 },
        { slug: 'sofa-cleaning', context: 'كنب', priority: 5 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 6 },
        { slug: 'pest-control', context: 'حشرات', priority: 7 },
    ],
};
