import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'غسيل سيارات بالقطيف — NaCl Galvanic + طين لزج + 80-95% Water Spots + غبار طلع (2026)',
        description: 'غسيل سيارات القطيف. NaCl Galvanic. طين لزج يلتصق. 80-95% Water Spots. غبار طلع نخيل. Touchless + RO + Spot-Free + Ceramic.',
        h1: 'غسيل سيارات بالقطيف — ملح ساحلي وطين واحي وغبار نخيل',
        keywords: ['غسيل سيارات القطيف', 'غسيل سيارة بالقطيف', 'شركة غسيل سيارات بالقطيف'],
    },
    content: {
        introduction: 'غسيل سيارة القطيف يواجه بيئة ساحلية-زراعية. الأول — NaCl Galvanic: رذاذ ملحي = Galvanic Corrosion. Ceramic 9H. الثاني — طين لزج: تربة واحية طينية ترتفع مع الماء ← تلتصق بالسيارة = طبقة لزجة (مختلف عن SiO₂ جاف). Touchless + RO. الثالث — 80-95% Water Spots: كل قطرة = Water Spot. Spot-Free Rinse. الرابع — غبار طلع نخيل: موسم = طبقة صفراء. منديل = يخدش (+ NaCl). Touchless.',
        shortAnswer: 'على عكس [إسفنجة+ماء] فوق NaCl+طين، يعتمد بروتوكولنا في خدمة [غسيل السيارات] بمدينة [القطيف] على [Touchless + RO + Spot-Free + Ceramic]. ففي ظل [NaCl + طين + 80-95% + غبار طلع]، تتفاقم ظاهرة [Galvanic + التصاق + Spots + خدش]. لذا؛ يتدخل خبراؤنا عبر [غسيل ساحلي-واحي].',
        heroSubtitle: 'NaCl Galvanic + طين لزج + Water Spots + غبار طلع نخيل',
    },
    pricing: [
        { type: 'Touchless + RO', unit: 'سيارة', minPrice: 40, maxPrice: 85, time: '20-30 دقيقة' },
        { type: 'شامل + Underbody', unit: 'سيارة', minPrice: 85, maxPrice: 170, time: '40-60 دقيقة' },
        { type: 'Ceramic 9H', unit: 'سيارة', minPrice: 380, maxPrice: 950, time: '3-5 ساعات' },
        { type: 'أسبوعي', unit: 'شهر', minPrice: 140, maxPrice: 290, time: '4 غسلات' },
    ],
    faq: [
        { question: 'طين — أسوأ من SiO₂؟', answer: 'مختلف — SiO₂ يخدش (7 Mohs). طين = يلتصق (لزج). طين+NaCl = طبقة لزجة ملحية صعبة. Touchless+RO.' },
        { question: 'غبار طلع — يخدش؟', answer: 'وحده لا. لكن: طلع + NaCl + طين = خليط يخدش. Touchless = صفر تلامس.' },
        { question: 'مقابل الجبيل — أسهل؟', answer: 'لا VOC ولا سخام SABIC. لكن: طين+نخيل فريد. أبسط قليلاً من الجبيل.' },
        { question: 'أسبوعي — ليش؟', answer: 'NaCl يومي + طين + غبار طلع + Water Spots. أسبوعي.' },
        { question: 'كم تكلفة التنظيف العميق مقارنة بالتنظيف العادي؟', answer: 'التنظيف العميق أغلى 30-50% لكنه يشمل: HEPA + بخار 150°م + تعقيم. التنظيف العادي = مسح سطحي. العميق كل 3-4 أشهر + العادي أسبوعياً = أفضل معادلة تكلفة/نظافة.' },
    ],
    expertTips: [
        'Touchless — NaCl+طين+طلع = يخدش بإسفنجة.',
        'RO شطف — لا Water Spots.',
        'Ceramic 9H — NaCl Galvanic حاجز.',
        'موسم تلقيح = غسل 2×/أسبوع.',
        'بعد التنظيف: شغّل المكيف وليس الشبّاك — الهواء الخارجي يعيد الغبار على الأسطح النظيفة.',
    ],
    warnings: [
        'NaCl + طين + إسفنجة = خدش مُركّب.',
        '80-95% Water Spots بدون Spot-Free = بقع دائمة.',
        'غبار طلع + NaCl = طبقة لزجة صفراء.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص مراكز الغسيل' },
        { entity: AMANA.SHARQIA.entity, url: AMANA.SHARQIA.url, role: 'اشتراطات البيئة بالشرقية' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALZUWAYED.name, quote: 'سيارة القطيف: NaCl+طين لزج+غبار طلع = Touchless إلزامي. Ceramic 9H يحمي من Galvanic.', source: 'هيئة النقل — غسيل الواحات الساحلية' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ غسيل مرخص', authority: 'منصة بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'Touchless Wash', use: 'NaCl+طين+طلع — صفر تلامس' },
        { name: 'RO Rinse', use: 'Water Spots — صفر ملح' },
        { name: 'Ceramic 9H', use: 'NaCl Galvanic — حاجز' },
    ],
    hiddenObjections: [
        { fear: 'مثل الخبر.', solution: 'طين واحي + غبار نخيل. مختلف.' },
        { fear: 'إسفنجة ناعمة.', solution: 'NaCl+طين+طلع = خليط. Touchless.' },
    ],
    consumerEducation: [
        { myth: 'ساحلي فقط.', truth: 'طين+نخيل = واحي. ثنائي.' },
        { myth: 'شهري.', truth: 'NaCl+طين+طلع يومي. أسبوعي.' },
    ],
    relatedServices: [
        { slug: 'cleaning', context: 'تنظيف', priority: 1 },
        { slug: 'dabab', context: 'دباب', priority: 2 },
        { slug: 'dyna', context: 'دينا', priority: 3 },
        { slug: 'glass-facades-cleaning', context: 'واجهات', priority: 4 },
        { slug: 'marble-polishing', context: 'رخام', priority: 5 },
        { slug: 'furniture-moving', context: 'نقل', priority: 6 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 7 },
    ],
};
