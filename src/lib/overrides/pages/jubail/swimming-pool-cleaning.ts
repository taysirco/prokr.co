import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف مسابح بالجبيل — NaCl Chloride Demand + 85-98% طحالب أقصى + Biofilm + VOC (2026)',
        description: 'تنظيف مسابح الجبيل. NaCl Chloride Demand أقصى. 85-98% طحالب أقصى. Biofilm أسطح. VOC يتفاعل. Algaecide Marine + فحص يومي.',
        h1: 'تنظيف مسابح بالجبيل — ملح يستهلك الكلور وطحالب أقصى وBiofilm',
        keywords: ['تنظيف مسابح الجبيل', 'تنظيف مسبح بالجبيل', 'شركة تنظيف مسابح بالجبيل'],
    },
    content: {
        introduction: 'مسبح الجبيل = أصعب مسبح في المملكة. الأول — NaCl Chloride Demand: ملح من الهواء يدخل المسبح ← يستهلك الكلور ← Demand أقصى. كلور 2× أكثر. الثاني — 85-98% طحالب أقصى: أقصى رطوبة = أقصى طحالب. أسرع نمو في المملكة. Algaecide Marine أسبوعي. الثالث — Biofilm: 98% = Biofilm على بلاط+أنابيب+فلاتر. Anti-Biofilm. الرابع — VOC: بتروكيماويات تتفاعل مع كلور + pH. فحص يومي.',
        shortAnswer: 'على عكس [صيانة عادية] التي تتجاهل Chloride Demand و Biofilm، يعتمد بروتوكولنا في خدمة [تنظيف المسابح] بمدينة [الجبيل] على [كلور 2× + Algaecide Marine + Anti-Biofilm + فحص يومي]. ففي ظل [NaCl + 85-98% + Biofilm + VOC]، تتفاقم ظاهرة [Demand + طحالب + Biofilm + تفاعل]. لذا؛ يتدخل خبراؤنا عبر [بروتوكول مسبح صناعي-ساحلي].',
        heroSubtitle: 'NaCl Chloride Demand + طحالب أقصى + Biofilm + VOC تفاعل',
    },
    pricing: [
        { type: 'صيانة أسبوعية', unit: 'مسبح', minPrice: 130, maxPrice: 260, time: '1-2 ساعة' },
        { type: 'Anti-Biofilm + Algaecide', unit: 'مسبح', minPrice: 220, maxPrice: 440, time: '2-3 ساعات' },
        { type: 'عقد شهري (4 زيارات)', unit: 'شهر', minPrice: 440, maxPrice: 880, time: '4 زيارات' },
        { type: 'تجهيز صيف (كلور+Algaecide)', unit: 'مسبح', minPrice: 310, maxPrice: 620, time: '2-4 ساعات' },
    ],
    faq: [
        { question: 'Chloride Demand — ماذا يعني؟', answer: 'NaCl من الهواء ← يدخل المسبح ← يتفاعل مع الكلور ← يستهلكه. تحتاج كلور 2× أكثر من الرياض.' },
        { question: 'طحالب — أسرع من حفر الباطن؟', answer: 'الأسرع في المملكة — 98% + حرارة = مثالي. حفر الباطن 10-15%: لا طحالب تقريباً (ميزة!).' },
        { question: 'VOC + كلور — تفاعل؟', answer: 'VOC يتفاعل مع كلور = ينتج مركبات. فحص pH يومي + تعديل.' },
        { question: 'فحص يومي — صيفاً؟', answer: 'NaCl+الحرارة+طحالب+VOC = تغيرات سريعة. يومي صيفاً = ضروري.' },
        { question: 'هل أحتاج شهادة صحية بعد التنظيف؟', answer: 'للمباني التجارية والمطاعم: نعم إلزامي. الأمانة تشترط شهادة تنظيف كل 6 أشهر. المفتش يطلبها. شركات بروكر تصدر شهادة معتمدة.' },
    ],
    expertTips: [
        'كلور 2× — NaCl Chloride Demand.',
        'Algaecide Marine أسبوعي — طحالب أقصى.',
        'Anti-Biofilm شهري — 98% Biofilm أنابيب.',
        'فحص pH يومي صيفاً — VOC + NaCl.',
        'غطاء — يُقلل NaCl+VOC+طحالب.',
    ],
    warnings: [
        'NaCl Demand بدون كلور إضافي = طحالب 48 ساعة.',
        'Biofilm أنابيب = يحمي بكتيريا. Anti-Biofilm.',
        'VOC + كلور = مركبات. فحص pH يومي.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص المسابح' },
        { entity: AMANA.SHARQIA.entity, url: AMANA.SHARQIA.url, role: 'اشتراطات المسابح بالشرقية' },
    ],
    expertReviewer: EXPERTS.ALMOHAIMED,
    expertCitations: [
        { expert: EXPERTS.ALJUND.name, quote: 'مسبح الجبيل = الأصعب: NaCl Chloride Demand + 98% طحالب + Biofilm + VOC. كلور 2× + Algaecide Marine.', source: 'موسوعة أخطاء — مسابح صناعية-ساحلية' },
    ],
    saudiRegulations: [REGULATIONS.SBC_601],
    verificationBadges: [{ badge: '✔️ مسابح مرخصة', authority: 'منصة بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'كلور 2×', use: 'NaCl Demand — يستهلك' },
        { name: 'Algaecide Marine', use: '98% طحالب أقصى' },
        { name: 'Anti-Biofilm', use: '98% Biofilm — أنابيب' },
    ],
    hiddenObjections: [
        { fear: 'مثل الخبر.', solution: 'VOC + 98%>95% + سخام. أقسى.' },
        { fear: 'كلور عادي.', solution: 'NaCl Demand = يستهلك. 2×.' },
    ],
    counterNarratives: [
        { myth: 'مثل حفر الباطن.', truth: '98% طحالب vs 10-15% لا طحالب. عكس!' },
        { myth: 'كلور يكفي.', truth: 'NaCl Demand + VOC. لا يكفي.' },
    ],
    relatedServices: [
        { slug: 'tanks-cleaning', context: 'خزانات — NaCl', priority: 1 },
        { slug: 'pest-control', context: 'حشرات — بعوض', priority: 2 },
        { slug: 'villas-cleaning', context: 'فلل', priority: 3 },
        { slug: 'cleaning', context: 'تنظيف', priority: 4 },
        { slug: 'marble-polishing', context: 'رخام — حول', priority: 5 },
        { slug: 'glass-facades-cleaning', context: 'واجهات', priority: 6 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 7 },
    ],
};
