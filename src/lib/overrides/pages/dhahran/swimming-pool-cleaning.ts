import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف مسابح بالظهران — NaCl+SiO₂ Chloride+Abrasion + 75-85% طحالب + تبخر + بعوض (2026)',
        description: 'تنظيف مسابح الظهران. NaCl Chloride Demand + SiO₂ يخدش البلاط. 75-85% طحالب. تبخر تركيز. بعوض. CYA + Algaecide + Larvicide.',
        h1: 'تنظيف مسابح بالظهران — مزدوج: ملح يُضعف الكلور ورمل يخدش البلاط',
        keywords: ['تنظيف مسابح بالظهران', 'تنظيف مسبح الظهران', 'شركة تنظيف مسابح بالظهران'],
    },
    content: {
        introduction: 'مسبح الظهران يواجه مشكلة مزدوجة فريدة. الأولى — NaCl Chloride Demand: مثل الخبر — ماء NaCl يُضعف الكلور. + SiO₂ يترسب على بلاط المسبح ← يخدشه بالمشي. Chlorine + فرشاة Nylon (لا فرشاة حديدية + SiO₂). الثانية — 75-85% طحالب: أبطأ من الخبر (85-95%) لكن: طحالب Chlorophyta تنمو. Algaecide + Shock أسبوعي. الثالثة — تبخر + NaCl = تركيز: مثل الخبر لكن أبطأ قليلاً. تعبئة + تعديل. الرابعة — بعوض Culex: أقل كثافة من الخبر (أبعد عن الساحل) لكن: يوجد. BTI Larvicide. لا CaSO₄ Scale (ميزة عن الأحساء!).',
        shortAnswer: 'على عكس [صيانة عادية] التي تتجاهل Chloride+SiO₂ المزدوج، يعتمد بروتوكولنا في خدمة [تنظيف المسابح] بمدينة [الظهران] على [Chloride Demand + Algaecide + CYA + Nylon + Larvicide]. ففي ظل [NaCl+SiO₂ + 75-85% + تبخر]، تتفاقم ظاهرة [كلور ضعيف+خدش + طحالب]. لذا؛ يتدخل خبراؤنا عبر [بروتوكول مسبح مزدوج].',
        heroSubtitle: 'NaCl Chloride Demand + SiO₂ خدش بلاط + 75-85% طحالب',
    },
    pricing: [
        { type: 'صيانة أسبوعية', unit: 'مسبح', minPrice: 130, maxPrice: 260, time: '1-2 ساعة' },
        { type: 'إزالة طحالب + Shock', unit: 'مسبح', minPrice: 240, maxPrice: 480, time: '2-3 ساعات' },
        { type: 'عقد شهري', unit: 'شهر', minPrice: 430, maxPrice: 860, time: '4 زيارات' },
        { type: 'عقد + Larvicide', unit: 'شهر', minPrice: 530, maxPrice: 1050, time: '4+ زيارات' },
    ],
    faq: [
        { question: 'SiO₂ يخدش بلاط المسبح — كيف؟', answer: 'SiO₂ يترسب على البلاط + يمشي الناس فوقه = خدش. فرشاة حديدية + SiO₂ = أسوأ. Nylon فقط.' },
        { question: 'Chloride Demand — مثل الخبر؟', answer: 'مماثل — 20-30% كلور أكثر. لكن: SiO₂ إضافي يُخشّن البلاط = مكان لطحالب.' },
        { question: 'لا Scale — ميزة؟', answer: 'نعم — لا CaSO₄ (ميزة عن الأحساء). لا تنظيف Scale. لكن: Chloride Demand + SiO₂ = تحديات أخرى.' },
        { question: 'طحالب — أبطأ؟', answer: '75-85% < 85-95% = أبطأ. لكن: 45°م + ضوء = ينمو. Algaecide + Shock أسبوعي.' },
        { question: 'أسبوعي — إلزامي؟', answer: 'Chloride Demand + SiO₂ + طحالب = أسبوعي. شهري = مسبح أخضر + بلاط مخدوش.' },
    ],
    expertTips: [
        'كلور 20-30% أكثر — Chloride Demand.',
        'فرشاة Nylon فقط — حديدية + SiO₂ = خدش مُركّب.',
        'CYA 40-60 ppm — يحمي كلور من UV.',
        'Algaecide + Shock أسبوعي — طحالب 75-85%.',
        'غطاء — يُقلل SiO₂ + تبخر + طحالب.',
    ],
    warnings: [
        'SiO₂ + فرشاة حديدية = خدش مُركّب على البلاط. Nylon فقط.',
        'Chloride Demand + طحالب = مسبح أخضر خلال 48 ساعة إذا انخفض الكلور.',
        'تبخر + NaCl = تركيز يرتفع. فحص أسبوعي.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص المسابح' },
        { entity: AMANA.SHARQIA.entity, url: AMANA.SHARQIA.url, role: 'اشتراطات المسابح بالشرقية' },
    ],
    expertReviewer: EXPERTS.ALMOHAIMED,
    expertCitations: [
        { expert: EXPERTS.ALJUND.name, quote: 'مسبح الظهران = مزدوج: Chloride Demand + SiO₂ خدش بلاط + 75-85% طحالب. لا Scale = ميزة! Nylon + كلور + Algaecide.', source: 'موسوعة أخطاء — مسابح مزدوجة' },
    ],
    saudiRegulations: [REGULATIONS.SBC_601],
    verificationBadges: [{ badge: '✔️ صيانة مسابح مرخصة', authority: 'منصة بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'Chlorine (كمية أعلى)', use: 'Chloride Demand' },
        { name: 'فرشاة Nylon', use: 'لا خدش SiO₂ على البلاط' },
        { name: 'Algaecide + CYA', use: 'طحالب + UV حماية' },
        { name: 'BTI Larvicide', use: 'بعوض' },
    ],
    hiddenObjections: [
        { fear: 'لا Scale = سهل.', solution: 'لا Scale = ميزة! لكن: Chloride + SiO₂ + طحالب = 3 أخرى.' },
        { fear: 'فرشاة عادية.', solution: 'حديدية + SiO₂ = مُركّب. Nylon.' },
    ],
    consumerEducation: [
        { myth: 'مثل الخبر.', truth: 'SiO₂ إضافي = خدش بلاط. مختلف.' },
        { myth: 'شهري.', truth: 'Chloride + طحالب + SiO₂. أسبوعي.' },
        { myth: 'كلور عادي.', truth: '20-30% أكثر.' },
    ],
    relatedServices: [
        { slug: 'pest-control', context: 'حشرات — بعوض', priority: 1 },
        { slug: 'tanks-cleaning', context: 'خزانات — NaCl', priority: 2 },
        { slug: 'villas-cleaning', context: 'فلل — مسبح', priority: 3 },
        { slug: 'cleaning', context: 'تنظيف — مزدوج', priority: 4 },
        { slug: 'marble-polishing', context: 'رخام — حول', priority: 5 },
        { slug: 'glass-facades-cleaning', context: 'واجهات', priority: 6 },
        { slug: 'steam-cleaning', context: 'بخار — تبديل', priority: 7 },
    ],
};
