import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../gov-references';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف مسابح بالقطيف — NaCl Chloride Demand + عيون تغذية + 80-95% طحالب واحية + Biofilm (2026)',
        description: 'تنظيف مسابح القطيف. NaCl Chloride Demand. عيون تغذية. 80-95% طحالب واحية. Biofilm. Algaecide + Anti-Biofilm + كلور 2×.',
        h1: 'تنظيف مسابح بالقطيف — ملح يستهلك الكلور وعيون تُغذي الطحالب',
        keywords: ['تنظيف مسابح القطيف', 'تنظيف مسبح بالقطيف', 'شركة تنظيف مسابح بالقطيف'],
    },
    content: {
        introduction: 'مسبح القطيف = ساحلي-واحي فريد. الأول — NaCl Chloride Demand: ملح هوائي يستهلك الكلور. كلور 2×. الثاني — عيون تغذية: واحة = عيون قريبة = ماء أرضي غني بمعادن ← يدخل المسبح ← يُغذي طحالب. فريد! الثالث — 80-95% طحالب واحية: رطوبة + معادن عيون = أسرع طحالب. Algaecide. الرابع — Biofilm: 80-95% = Biofilm على بلاط+أنابيب. Anti-Biofilm. الميزة — ماء أقل عسراً من حفر الباطن = لا CaCO₃ Scale.',
        shortAnswer: 'على عكس [صيانة عادية] التي تتجاهل عيون+Demand، يعتمد بروتوكولنا في خدمة [تنظيف المسابح] بمدينة [القطيف] على [كلور 2× + Algaecide + Anti-Biofilm]. ففي ظل [NaCl + عيون + 80-95% + Biofilm]، تتفاقم ظاهرة [Demand + تغذية + طحالب + Biofilm]. لذا؛ يتدخل خبراؤنا عبر [بروتوكول مسبح ساحلي-واحي].',
        heroSubtitle: 'NaCl Demand + عيون تُغذي طحالب + Biofilm — لا Scale (ميزة!)',
    },
    pricing: [
        { type: 'صيانة أسبوعية', unit: 'مسبح', minPrice: 120, maxPrice: 240, time: '1-2 ساعة' },
        { type: 'Anti-Biofilm + Algaecide', unit: 'مسبح', minPrice: 200, maxPrice: 400, time: '2-3 ساعات' },
        { type: 'عقد شهري (4 زيارات)', unit: 'شهر', minPrice: 400, maxPrice: 800, time: '4 زيارات' },
    ],
    faq: [
        { question: 'عيون تُغذي — كيف؟', answer: 'ماء أرضي غني بمعادن + حديد + كبريت ← يتسرب ← يُغذي طحالب. فريد للقطيف!' },
        { question: 'مقابل الجبيل — فرق؟', answer: 'الجبيل: VOC + كلور تفاعل. القطيف: عيون تغذية. ميزة: لا VOC.' },
        { question: 'لا Scale — ميزة؟', answer: 'ميزة! ماء أقل عسراً = لا CaCO₃. لكن: عيون+طحالب.' },
        { question: 'هل أحتاج شهادة صحية بعد التنظيف؟', answer: 'للمباني التجارية والمطاعم: نعم إلزامي. الأمانة تشترط شهادة تنظيف كل 6 أشهر. المفتش يطلبها. شركات بروكر تصدر شهادة معتمدة.' },
        { question: 'كم مرة في السنة؟', answer: 'كل 6 أشهر كحد أدنى (اشتراط الأمانة). في الصيف (45°م+): كل 4 أشهر — الحرارة تنمّي الطحالب أسرع.' },
    ],
    expertTips: [
        'كلور 2× — NaCl Demand.',
        'Algaecide — عيون تُغذي طحالب.',
        'Anti-Biofilm شهري — 80-95%.',
        'غطاء — يُقلل NaCl+عيون.',
        'عقد صيانة دوري (زيارتين/سنة) يوفر 20-30% من تكلفة الجلسات المنفصلة.',
    ],
    warnings: [
        'عيون + NaCl Demand = طحالب 48 ساعة.',
        'Biofilm أنابيب = بكتيريا محمية.',
        'فحص أسبوعي صيفاً — تغيرات سريعة.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص المسابح' },
        { entity: AMANA.SHARQIA.entity, url: AMANA.SHARQIA.url, role: 'اشتراطات المسابح بالشرقية' },
    ],
    expertReviewer: EXPERTS.ALMOHAIMED,
    expertCitations: [
        { expert: EXPERTS.ALJUND.name, quote: 'مسبح القطيف: عيون تُغذي الطحالب + NaCl Demand + Biofilm. كلور 2× + Algaecide.', source: 'موسوعة أخطاء — مسابح الواحات الساحلية' },
    ],
    saudiRegulations: [REGULATIONS.SBC_601],
    verificationBadges: [{ badge: '✔️ مسابح مرخصة', authority: 'منصة بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'كلور 2×', use: 'NaCl Demand' },
        { name: 'Algaecide', use: 'عيون — طحالب واحية' },
        { name: 'Anti-Biofilm', use: '80-95% — أنابيب' },
    ],
    commonConcerns: [
        { concern: 'مثل الخبر.', solution: 'عيون تُغذي. فريد.' },
        { concern: 'كلور يكفي.', solution: 'NaCl Demand + عيون. 2×.' },
    ],
    consumerEducation: [
        { myth: 'ساحلي فقط.', truth: 'عيون = تغذية طحالب واحية.' },
        { myth: 'مثل حفر الباطن.', truth: 'طحالب أسرع 10× بسبب عيون+80-95%.' },
    ],
    relatedServices: [
        { slug: 'tanks-cleaning', context: 'خزانات', priority: 1 },
        { slug: 'pest-control', context: 'حشرات', priority: 2 },
        { slug: 'villas-cleaning', context: 'فلل', priority: 3 },
        { slug: 'cleaning', context: 'تنظيف', priority: 4 },
        { slug: 'marble-polishing', context: 'رخام', priority: 5 },
        { slug: 'glass-facades-cleaning', context: 'واجهات', priority: 6 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 7 },
    ],
};
