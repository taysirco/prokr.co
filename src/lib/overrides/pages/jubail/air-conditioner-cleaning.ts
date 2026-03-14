import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف مكيفات بالجبيل — NaCl+VOC صناعي + 85-98% عفن أقصى + SABIC + Biofilm (2026)',
        description: 'تنظيف مكيفات الجبيل. NaCl ساحلي + VOC بتروكيماوي = مزدوج صناعي. 85-98% عفن أقصى (أعلى في المملكة). SABIC منطقة صناعية. HEPA VOC + Anti-Fungal.',
        h1: 'تنظيف مكيفات بالجبيل — ملح ساحلي وأبخرة صناعية ورطوبة أقصى',
        keywords: ['تنظيف مكيفات بالجبيل', 'تنظيف مكيف الجبيل', 'شركة تنظيف مكيفات بالجبيل'],
    },
    content: {
        introduction: 'مكيف الجبيل يواجه أقسى بيئة تشغيل في المملكة. التحدي 1 — NaCl+VOC مزدوج صناعي: NaCl من الخليج (مثل الخبر) + VOC (مركبات عضوية متطايرة) من SABIC/بتروكيماويات = Galvanic Corrosion + ترسبات كيميائية على Evaporator. مزدوج لا يوجد في أي مدينة أخرى. التحدي 2 — 85-98% عفن أقصى: أعلى رطوبة مُسجّلة في المملكة. Aspergillus أسبوع واحد (أسرع من الخبر!). عفن + بكتيريا + فطريات = Sick Building. التحدي 3 — SABIC PM2.5: جزيئات بتروكيماوية < 2.5 ميكرون ← تدخل عبر المكيف ← HEPA Activated Carbon. التحدي 4 — تكثّف أقصى: 85-98% = أقصى تكثّف = أقصى صدأ + أقصى Biofilm في Drain Pan.',
        shortAnswer: 'على عكس [صيانة عادية] التي لا تُراعي VOC+NaCl، يعتمد بروتوكولنا في خدمة [تنظيف المكيفات] بمدينة [الجبيل] على [HEPA VOC + Anti-Fungal + Anti-Corrosion + Marine Clean]. ففي ظل [NaCl+VOC + 85-98% + SABIC]، تتفاقم ظاهرة [تآكل مزدوج + عفن أقصى + PM2.5]. لذا؛ يتدخل خبراؤنا عبر [بروتوكول مكيف صناعي-ساحلي].',
        heroSubtitle: 'NaCl+VOC مزدوج + 85-98% عفن أقصى + SABIC PM2.5',
    },
    pricing: [
        { type: 'سبليت — صناعي-ساحلي', unit: 'مكيف', minPrice: 75, maxPrice: 155, time: '30-45 دقيقة' },
        { type: 'عميق + HEPA VOC + Anti-Fungal', unit: 'مكيف', minPrice: 155, maxPrice: 310, time: '1-2 ساعة' },
        { type: 'مركزي (دكت) — SABIC', unit: 'وحدة', minPrice: 280, maxPrice: 560, time: '2-4 ساعات' },
        { type: 'عقد (6 زيارات/سنة)', unit: 'سنة', minPrice: 530, maxPrice: 1050, time: '6 زيارات' },
    ],
    faq: [
        { question: 'VOC — ماذا يعني عملياً؟', answer: 'VOC = مركبات عضوية متطايرة من SABIC. تدخل المكيف ← تترسب على Evaporator كطبقة دهنية. + NaCl = طبقة مُركّبة (دهن+ملح). منظف عادي لا يُزيلها. Marine Degreaser.' },
        { question: '85-98% أعلى — ماذا يختلف عن الخبر؟', answer: 'الخبر 85-95%. الجبيل 85-98%. فرق 3-5% = أسرع عفن + أسرع Biofilm + أسرع تكثّف. أقصى رطوبة في المملكة.' },
        { question: 'SABIC PM2.5 — خطر تنفسي؟', answer: 'PM2.5 بتروكيماوي < 2.5 ميكرون = يخترق الرئة. HEPA عادي لا يحجز VOC. HEPA Activated Carbon = يحجز جزيئات + يمتص VOC.' },
        { question: '6 مرات — أكثر من الخبر؟', answer: 'مماثل — لكن: VOC يُضيف طبقة إضافية + 85-98% عفن أسرع. 6 = الحد الأدنى.' },
        { question: 'Drain Pan — أسوأ؟', answer: '98% = أسوأ Drain Pan في المملكة. تكثّف أقصى = Biofilm + بعوض + صدأ. تنظيف كل زيارة.' },
    ],
    expertTips: [
        'HEPA Activated Carbon — يحجز PM2.5 + يمتص VOC. HEPA عادي لا يكفي.',
        'Marine Degreaser — يُزيل NaCl+VOC المُركّبة.',
        'Anti-Fungal كل زيارة — 85-98% = أسرع عفن في المملكة.',
        'Drain Pan + Larvicide — 98% = بعوض في Drain.',
        'Anti-Corrosion معدني — NaCl+VOC = أسرع Galvanic.',
    ],
    warnings: [
        'NaCl+VOC = أسرع Galvanic Corrosion في المملكة. Marine Degreaser + Anti-Corrosion.',
        '85-98% = عفن أسبوع. Aspergillus + بكتيريا = Sick Building.',
        'SABIC PM2.5 × 8+ ساعات = خطر تنفسي مهني. HEPA Activated Carbon.',
    ],
    trustAnchors: [
        { ...GOV.SCE, role: 'كفاءة الطاقة' },
        { entity: AMANA.SHARQIA.entity, url: AMANA.SHARQIA.url, role: 'اشتراطات صحة بالشرقية' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALJUND.name, quote: 'مكيف الجبيل = الأصعب في المملكة: NaCl+VOC مزدوج + 85-98% أقصى + SABIC PM2.5. HEPA Activated Carbon + Marine Degreaser + Anti-Fungal = بروتوكول صناعي-ساحلي.', source: 'موسوعة أخطاء — مكيفات البيئة الصناعية' },
    ],
    saudiRegulations: [REGULATIONS.SBC_601],
    verificationBadges: [
        { badge: '✔️ صيانة مكيفات مرخصة', authority: 'منصة بلدي', icon: 'shield-check' },
        { badge: '✔️ بروتوكول صناعي-ساحلي', authority: 'معتمد داخلياً', icon: 'badge-check' },
    ],
    equipment: [
        { name: 'HEPA Activated Carbon', use: 'PM2.5 + VOC — يحجز + يمتص' },
        { name: 'Marine Degreaser', use: 'NaCl+VOC المُركّبة — يُزيل' },
        { name: 'Anti-Fungal Industrial', use: '85-98% عفن أقصى — يقتل' },
        { name: 'BTI Larvicide', use: 'Drain Pan — بعوض' },
    ],
    hiddenObjections: [
        { fear: 'مثل الخبر.', solution: 'VOC إضافي + 85-98% > 85-95% + PM2.5 بتروكيماوي. مختلف.' },
        { fear: '6 كثير.', solution: '85-98% + VOC = عفن + ترسبات أسرع. 6 = الحد.' },
    ],
    consumerEducation: [
        { myth: 'ساحلي فقط.', truth: 'ساحلي + صناعي = مزدوج فريد. VOC ≠ NaCl فقط.' },
        { myth: 'فلتر يكفي.', truth: 'فلتر عادي لا يحجز VOC. Activated Carbon.' },
        { myth: 'مرتين.', truth: '98% + VOC. 6 = الحد.' },
    ],
    relatedServices: [
        { slug: 'cleaning', context: 'تنظيف — NaCl+VOC', priority: 1 },
        { slug: 'carpet-cleaning', context: 'سجاد — رطوبة', priority: 2 },
        { slug: 'villas-cleaning', context: 'فلل — شاملة', priority: 3 },
        { slug: 'apartments-cleaning', context: 'شقق — رطوبة', priority: 4 },
        { slug: 'pest-control', context: 'حشرات — بعوض', priority: 5 },
        { slug: 'steam-cleaning', context: 'بخار — تعقيم', priority: 6 },
        { slug: 'glass-facades-cleaning', context: 'واجهات — NaCl+VOC', priority: 7 },
    ],
};
