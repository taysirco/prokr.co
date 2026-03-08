import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف خزانات بالقطيف — NaCl Demand + عيون تغذية + Biofilm واحي + طحالب (2026)',
        description: 'تنظيف خزانات القطيف. NaCl Chloride Demand. عيون تسرب معادن. Biofilm 80-95%. طحالب واحية. Anti-Biofilm + كلور 2× + Algaecide.',
        h1: 'تنظيف خزانات بالقطيف — ملح يستهلك الكلور وعيون تُغذي البكتيريا',
        keywords: ['تنظيف خزانات القطيف', 'تنظيف خزان بالقطيف', 'شركة تنظيف خزانات بالقطيف'],
    },
    content: {
        introduction: 'خزان القطيف = ساحلي-واحي فريد. الأول — NaCl Chloride Demand: ملح من الهواء+الماء يستهلك الكلور. 2×. الثاني — عيون تغذية: ماء أرضي من العيون = غني بمعادن+حديد ← يتسرب للخزان ← يُغذي بكتيريا+طحالب. فريد! الثالث — Biofilm واحي: 80-95% = Biofilm يحمي البكتيريا. Anti-Biofilm. الرابع — طحالب واحية: عيون+80-95% = طحالب أسرع. Algaecide. الميزة — لا CaCO₃ Scale: ماء أقل عسراً = لا Acid Wash.',
        shortAnswer: 'على عكس [غسل عادي] الذي لا يُراعي عيون+Biofilm، يعتمد بروتوكولنا في خدمة [تنظيف الخزانات] بمدينة [القطيف] على [Anti-Biofilm ← كلور 2× ← Algaecide]. ففي ظل [NaCl + عيون + Biofilm + طحالب]، تتفاقم ظاهرة [Demand + تغذية + حماية + نمو]. لذا؛ يتدخل خبراؤنا عبر [بروتوكول خزان ساحلي-واحي].',
        heroSubtitle: 'NaCl Demand + عيون تُغذي + Biofilm واحي — لا Scale (ميزة!)',
    },
    pricing: [
        { type: 'علوي (1-3 م³)', unit: 'خزان', minPrice: 120, maxPrice: 250, time: '1-2 ساعة' },
        { type: 'أرضي (5-10 م³)', unit: 'خزان', minPrice: 250, maxPrice: 500, time: '2-4 ساعات' },
        { type: 'Anti-Biofilm + Algaecide', unit: 'خزان', minPrice: 290, maxPrice: 580, time: '3-5 ساعات' },
        { type: 'ربع سنوي', unit: 'سنة', minPrice: 430, maxPrice: 860, time: '4 زيارات' },
    ],
    faq: [
        { question: 'عيون — تدخل الخزان؟', answer: 'ماء أرضي يتسرب ← حديد+كبريت+معادن ← يُغذي بكتيريا+طحالب في الخزان. فريد للقطيف.' },
        { question: 'Biofilm — يحمي هنا أيضاً؟', answer: '80-95% = Biofilm يمنع الكلور من الوصول. Anti-Biofilm أولاً ← ثم كلور.' },
        { question: 'لا Scale — مثل الجبيل؟', answer: 'نعم — لا CaCO₃. لكن: عيون تغذية = تحدي مختلف.' },
        { question: 'هل أحتاج شهادة صحية بعد التنظيف؟', answer: 'للمباني التجارية والمطاعم: نعم إلزامي. الأمانة تشترط شهادة تنظيف كل 6 أشهر. المفتش يطلبها. شركات بروكر تصدر شهادة معتمدة.' },
        { question: 'كم مرة في السنة؟', answer: 'كل 6 أشهر كحد أدنى (اشتراط الأمانة). في الصيف (45°م+): كل 4 أشهر — الحرارة تنمّي الطحالب أسرع.' },
    ],
    expertTips: [
        'Anti-Biofilm أولاً — يكشف جدار الخزان.',
        'كلور 2× — Demand.',
        'فحص تسرب عيون — معادن.',
        'غطاء محكم — NaCl هواء.',
        'عقد صيانة دوري (زيارتين/سنة) يوفر 20-30% من تكلفة الجلسات المنفصلة.',
    ],
    warnings: [
        'عيون + Biofilm = بكتيريا محمية+مُغذّاة.',
        'NaCl Demand بدون 2× = طحالب 48 ساعة.',
        'تسرب عيون بدون فحص = حديد+كبريت.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص خزانات' },
        { ...GOV.NWC, role: 'معايير مياه' },
        { entity: AMANA.SHARQIA.entity, url: AMANA.SHARQIA.url, role: 'اشتراطات المياه بالشرقية' },
    ],
    expertReviewer: EXPERTS.ALMOHAIMED,
    expertCitations: [
        { expert: EXPERTS.ALJUND.name, quote: 'خزان القطيف: عيون تُغذي+Biofilm يحمي+NaCl Demand. فريد. Anti-Biofilm ← كلور 2×.', source: 'موسوعة أخطاء — خزانات الواحات الساحلية' },
    ],
    saudiRegulations: [REGULATIONS.SBC_601],
    verificationBadges: [{ badge: '✔️ خزانات مرخصة', authority: 'بلدي + NWC', icon: 'shield-check' }],
    equipment: [
        { name: 'Anti-Biofilm', use: '80-95% — يكشف' },
        { name: 'كلور 2×', use: 'NaCl Demand' },
        { name: 'Algaecide', use: 'عيون — طحالب' },
    ],
    hiddenObjections: [
        { fear: 'لا Scale = سهل.', solution: 'عيون+Biofilm+Demand. 3 تحديات.' },
        { fear: 'كلور يكفي.', solution: 'Biofilm يحمي. Anti-Biofilm أولاً.' },
    ],
    counterNarratives: [
        { myth: 'مثل الخبر.', truth: 'عيون تغذية. فريد.' },
        { myth: 'مثل حفر الباطن.', truth: 'طحالب+Biofilm vs لا طحالب.' },
    ],
    relatedServices: [
        { slug: 'swimming-pool-cleaning', context: 'مسابح', priority: 1 },
        { slug: 'pest-control', context: 'حشرات', priority: 2 },
        { slug: 'cleaning', context: 'تنظيف', priority: 3 },
        { slug: 'villas-cleaning', context: 'فلل', priority: 4 },
        { slug: 'apartments-cleaning', context: 'شقق', priority: 5 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 6 },
        { slug: 'steam-cleaning', context: 'بخار', priority: 7 },
    ],
};
