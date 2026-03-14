import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'غسيل سيارات بالجبيل — NaCl+VOC ثنائي + 85-98% Water Spots + SABIC سخام (2026)',
        description: 'غسيل سيارات الجبيل. NaCl+VOC ثنائي Galvanic أسرع. 85-98% Water Spots أقصى. SABIC سخام كيميائي. Touchless Marine + Ceramic 9H + UV.',
        h1: 'غسيل سيارات بالجبيل — ملح+بتروكيماويات ورطوبة أقصى وسخام صناعي',
        keywords: ['غسيل سيارات الجبيل', 'غسيل سيارة بالجبيل', 'شركة غسيل سيارات بالجبيل'],
    },
    content: {
        introduction: 'غسيل سيارة الجبيل يواجه أقسى بيئة في المملكة. الأول — NaCl+VOC ثنائي: NaCl من الخليج + VOC من SABIC = Galvanic Corrosion أسرع 2× من الخبر. Clear Coat + Undercarriage = هجوم مزدوج. الثاني — 85-98% Water Spots: أقصى رطوبة = كل قطرة = Water Spot. تجفيف فوري + Spot-Free Rinse. الثالث — SABIC سخام: جزيئات كربونية صناعية تترسب كطبقة سوداء دهنية. منظف عادي = ينزلق. Marine Degreaser. الرابع — Biofilm: 98% = Biofilm على Undercarriage + إطارات. تكثف + طحالب.',
        shortAnswer: 'على عكس [إسفنجة+ماء] في بيئة NaCl+VOC، يعتمد بروتوكولنا في خدمة [غسيل السيارات] بمدينة [الجبيل] على [Touchless Marine + Ceramic 9H + Spot-Free + سخام]. ففي ظل [NaCl+VOC + 85-98% + سخام]، تتفاقم ظاهرة [Galvanic + Water Spots + دهن]. لذا؛ يتدخل خبراؤنا عبر [غسيل صناعي-ساحلي].',
        heroSubtitle: 'NaCl+VOC Galvanic + Water Spots أقصى + سخام SABIC',
    },
    pricing: [
        { type: 'غسيل Touchless Marine', unit: 'سيارة', minPrice: 45, maxPrice: 95, time: '20-30 دقيقة' },
        { type: 'شامل + Underbody + سخام', unit: 'سيارة', minPrice: 95, maxPrice: 190, time: '40-60 دقيقة' },
        { type: 'تلميع + Ceramic 9H Marine', unit: 'سيارة', minPrice: 420, maxPrice: 1050, time: '3-5 ساعات' },
        { type: 'أسبوعي (4/شهر)', unit: 'شهر', minPrice: 160, maxPrice: 330, time: '4 غسلات' },
    ],
    faq: [
        { question: 'VOC — يُتلف الطلاء؟', answer: 'VOC = طبقة دهنية كيميائية. + NaCl = مُركّبة. تُسرّع Galvanic 2× من الخبر (NaCl فقط). Ceramic 9H Marine = حاجز.' },
        { question: 'Water Spots — أسوأ من أي مدينة؟', answer: '85-98% = أقصى. كل قطرة ماء + NaCl+VOC = Water Spot أقسى. Spot-Free Rinse + تجفيف فوري.' },
        { question: 'سخام SABIC — ما هو؟', answer: 'جزيئات كربونية + VOC = طبقة سوداء دهنية. تلتصق بالطلاء + الزجاج. Marine Degreaser يُكسرها.' },
        { question: 'Underbody — أهم هنا؟', answer: 'أهم في المملكة — NaCl+VOC+Biofilm = ثلاثي على Undercarriage. غسل أسبوعي.' },
        { question: 'أسبوعي — ليش؟', answer: 'NaCl+VOC يومي + سخام يومي + Water Spots يومي + 98% Biofilm. أسبوعي = الحد.' },
    ],
    expertTips: [
        'Touchless Marine — NaCl+VOC+سخام = إسفنجة تخدش بالترسبات.',
        'Ceramic 9H Marine — مُقاوم NaCl+VOC. Wax لا يصمد.',
        'Spot-Free Rinse — 98% Water Spots.',
        'Underbody أسبوعي — NaCl+VOC+Biofilm ثلاثي.',
        'سخام بمنديل = يُخدش. Marine Degreaser أولاً.',
    ],
    warnings: [
        'NaCl+VOC بدون حماية = Galvanic Clear Coat 6-12 شهر.',
        '98% + سخام + NaCl = Water Spots أقسى في المملكة.',
        'Undercarriage بدون غسل = صدأ هيكلي بتروكيماوي.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص مراكز الغسيل' },
        { entity: AMANA.SHARQIA.entity, url: AMANA.SHARQIA.url, role: 'اشتراطات البيئة بالشرقية' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALZUWAYED.name, quote: 'سيارة الجبيل = الأصعب: NaCl+VOC Galvanic + سخام SABIC + 98% Water Spots. Touchless Marine + Ceramic 9H Marine + Underbody أسبوعي.', source: 'هيئة النقل — غسيل البيئة الصناعية' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ غسيل مرخص', authority: 'منصة بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'Touchless Marine Wash', use: 'NaCl+VOC+سخام — صفر تلامس' },
        { name: 'Ceramic 9H Marine', use: 'مُقاوم NaCl+VOC — 2-3 سنوات' },
        { name: 'Spot-Free Rinse', use: '98% — صفر Water Spots' },
        { name: 'Marine Degreaser', use: 'سخام SABIC — يُكسر' },
    ],
    commonConcerns: [
        { concern: 'مثل الخبر.', solution: 'VOC + سخام SABIC إضافي. Galvanic 2×. مختلف.' },
        { concern: 'Ceramic غالي.', solution: 'Galvanic 2× = إعادة طلاء أسرع = أغلى. Ceramic = وقاية.' },
    ],
    consumerEducation: [
        { myth: 'ساحلي فقط.', truth: 'ساحلي + صناعي = VOC + سخام. ثنائي.' },
        { myth: 'إسفنجة ناعمة.', truth: 'فوق NaCl+VOC+سخام = تخدش. Touchless.' },
        { myth: 'شهري.', truth: 'يومي × 3 ملوثات + 98%. أسبوعي.' },
    ],
    relatedServices: [
        { slug: 'cleaning', context: 'تنظيف — NaCl+VOC', priority: 1 },
        { slug: 'glass-facades-cleaning', context: 'واجهات — سخام', priority: 2 },
        { slug: 'dabab', context: 'دباب — نقل', priority: 3 },
        { slug: 'dyna', context: 'دينا — نقل', priority: 4 },
        { slug: 'marble-polishing', context: 'رخام — NaCl', priority: 5 },
        { slug: 'furniture-moving', context: 'نقل — حماية', priority: 6 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف — VOC', priority: 7 },
    ],
};
