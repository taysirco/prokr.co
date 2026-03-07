import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف مكيفات بالقطيف — NaCl ساحلي + 80-95% عفن واحي + تربة طينية PM10 + نخيل (2026)',
        description: 'تنظيف مكيفات القطيف. NaCl ساحلي Galvanic. 80-95% عفن واحي. تربة طينية PM10. نخيل ألياف. عيون ينابيع تكثّف. RO + Anti-Fungal + HEPA.',
        h1: 'تنظيف مكيفات بالقطيف — ملح ساحلي وعفن واحي وتربة طينية وألياف نخيل',
        keywords: ['تنظيف مكيفات القطيف', 'تنظيف مكيف بالقطيف', 'شركة تنظيف مكيفات بالقطيف'],
    },
    content: {
        introduction: 'مكيف القطيف يواجه بيئة ساحلية-زراعية فريدة. التحدي 1 — NaCl ساحلي: رذاذ ملحي من الخليج = Galvanic Corrosion على Evaporator + معادن. RO + Anti-Corrosion. التحدي 2 — 80-95% عفن واحي: القطيف واحة = عيون+ينابيع+نخيل = رطوبة أرضية مُضافة. Aspergillus أسبوع-10 أيام. Anti-Fungal + Dehumidifier. التحدي 3 — تربة طينية PM10: واحة = تربة رطبة طينية. رياح = PM10 طيني يسد فلاتر (مختلف عن SiO₂). HEPA. التحدي 4 — نخيل ألياف: ملايين نخلة = ألياف وغبار طلع يسد فلاتر. تنظيف فلتر شهري.',
        shortAnswer: 'على عكس [صيانة عادية] التي لا تُراعي الواحة+NaCl، يعتمد بروتوكولنا في خدمة [تنظيف المكيفات] بمدينة [القطيف] على [RO + Anti-Fungal + HEPA + Anti-Corrosion]. ففي ظل [NaCl + 80-95% + تربة طينية + نخيل]، تتفاقم ظاهرة [Galvanic + عفن واحي + PM10 + ألياف]. لذا؛ يتدخل خبراؤنا عبر [بروتوكول مكيف ساحلي-واحي].',
        heroSubtitle: 'NaCl Galvanic + عفن واحي 80-95% + تربة طينية + ألياف نخيل',
    },
    pricing: [
        { type: 'سبليت — ساحلي-واحي', unit: 'مكيف', minPrice: 65, maxPrice: 140, time: '30-45 دقيقة' },
        { type: 'عميق + HEPA + Anti-Fungal', unit: 'مكيف', minPrice: 135, maxPrice: 280, time: '1-2 ساعة' },
        { type: 'مركزي (دكت)', unit: 'وحدة', minPrice: 250, maxPrice: 500, time: '2-4 ساعات' },
        { type: 'عقد (4 زيارات/سنة)', unit: 'سنة', minPrice: 430, maxPrice: 870, time: '4 زيارات' },
    ],
    faq: [
        { question: 'واحي — ماذا يعني للمكيف؟', answer: 'واحة = عيون+ينابيع+نخيل = رطوبة أرضية مُضافة فوق الرطوبة الساحلية. عفن أسرع + PM10 طيني + ألياف نخيل.' },
        { question: '80-95% — مقابل الجبيل 85-98%؟', answer: 'أقل قليلاً من الجبيل. لكن: واحة = رطوبة أرضية = عفن واحي مختلف (من التربة). ليس أقل خطراً.' },
        { question: 'تربة طينية — مختلفة عن SiO₂؟', answer: 'مختلف تماماً — SiO₂ يخدش (7 Mohs). طين = يسد (لزج+ناعم). مشكلة انسداد ≠ خدش. HEPA يحجز.' },
        { question: 'نخيل — يسد المكيف؟', answer: 'ألياف + غبار طلع = يسد الفلاتر أسرع. موسم التلقيح = أسوأ. تنظيف فلتر شهري (أو أكثر في الموسم).' },
        { question: '4 مرات — يكفي؟', answer: 'NaCl+عفن واحي+طين+نخيل. 4 = الحد. 6 أفضل قرب العيون.' },
    ],
    expertTips: [
        'RO شطف — NaCl قبل الفرك.',
        'Anti-Fungal كل زيارة — عفن واحي 80-95%.',
        'HEPA — PM10 طيني يسد.',
        'فلتر شهري — ألياف نخيل.',
        'Anti-Corrosion — NaCl Galvanic.',
    ],
    warnings: [
        'NaCl + رطوبة واحية = Galvanic أسرع من الرياض 4×.',
        '80-95% + عيون قريبة = عفن واحي أسرع.',
        'تربة طينية + نخيل = انسداد فلتر سريع.',
    ],
    trustAnchors: [
        { ...GOV.SCE, role: 'كفاءة الطاقة' },
        { entity: AMANA.SHARQIA.entity, url: AMANA.SHARQIA.url, role: 'اشتراطات الصحة بالشرقية' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALJUND.name, quote: 'مكيف القطيف: NaCl ساحلي + عفن واحي + PM10 طيني + ألياف نخيل. بيئة ساحلية-زراعية فريدة. RO + Anti-Fungal + HEPA.', source: 'موسوعة أخطاء — مكيفات الواحات الساحلية' },
    ],
    saudiRegulations: [REGULATIONS.SBC_601],
    verificationBadges: [
        { badge: '✔️ صيانة مكيفات مرخصة', authority: 'منصة بلدي', icon: 'shield-check' },
        { badge: '✔️ بروتوكول ساحلي-واحي', authority: 'معتمد داخلياً', icon: 'badge-check' },
    ],
    equipment: [
        { name: 'RO Rinse', use: 'NaCl — يُزيل قبل الفرك' },
        { name: 'Anti-Fungal', use: '80-95% — عفن واحي' },
        { name: 'HEPA', use: 'PM10 طيني — يحجز' },
        { name: 'Anti-Corrosion', use: 'NaCl — Galvanic' },
    ],
    hiddenObjections: [
        { fear: 'مثل الخبر.', solution: 'واحة = تربة طينية + نخيل + عيون. عفن مختلف.' },
        { fear: 'مثل الجبيل.', solution: 'لا VOC ولا سخام SABIC. لكن: واحة.' },
    ],
    counterNarratives: [
        { myth: 'ساحلي فقط.', truth: 'ساحلي + واحي = ثنائي فريد.' },
        { myth: 'مثل الظهران.', truth: 'لا SiO₂ خدش. طين = سد. مختلف.' },
        { myth: 'مرتين.', truth: 'NaCl+واحي+طين+نخيل. 4+.' },
    ],
    relatedServices: [
        { slug: 'cleaning', context: 'تنظيف — NaCl+واحي', priority: 1 },
        { slug: 'carpet-cleaning', context: 'سجاد — عفن', priority: 2 },
        { slug: 'villas-cleaning', context: 'فلل', priority: 3 },
        { slug: 'apartments-cleaning', context: 'شقق', priority: 4 },
        { slug: 'pest-control', context: 'حشرات — بعوض', priority: 5 },
        { slug: 'steam-cleaning', context: 'بخار', priority: 6 },
        { slug: 'glass-facades-cleaning', context: 'واجهات — NaCl', priority: 7 },
    ],
};
