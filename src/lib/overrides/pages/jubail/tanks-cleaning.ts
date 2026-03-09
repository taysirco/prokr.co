import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف خزانات بالجبيل — NaCl+VOC ترسبات + Biofilm أقصى + Chloride Demand + طحالب (2026)',
        description: 'تنظيف خزانات الجبيل. NaCl+VOC ترسبات. Biofilm 98% أقصى. Chloride Demand. طحالب أسرع. Marine Scrub + Anti-Biofilm + كلور 2×.',
        h1: 'تنظيف خزانات بالجبيل — ملح يُترسب وBiofilm يحمي بكتيريا وطحالب أقصى',
        keywords: ['تنظيف خزانات الجبيل', 'تنظيف خزان بالجبيل', 'شركة تنظيف خزانات بالجبيل'],
    },
    content: {
        introduction: 'خزان الجبيل = أصعب خزان في المملكة والعكس الكامل لحفر الباطن. الأول — NaCl+VOC ترسبات: ملح+بتروكيماويات في الماء ← ترسبات مُركّبة على الجدران. Marine Scrub. الثاني — Biofilm أقصى 98%: أقصى Biofilm في المملكة. جدران الخزان = طبقة عضوية تحمي البكتيريا. Anti-Biofilm قبل كلور. الثالث — Chloride Demand: NaCl من الهواء+الماء يستهلك الكلور. 2× كلور. الرابع — طحالب: 98% + حرارة = طحالب أسرع. حفر الباطن: لا طحالب (ميزة!). الخامس — لا CaCO₃ ميزة!: ماء أقل عسراً من حفر الباطن = Scale أقل.',
        shortAnswer: 'على عكس [غسل عادي] الذي لا يُزيل Biofilm 98%، يعتمد بروتوكولنا في خدمة [تنظيف الخزانات] بمدينة [الجبيل] على [Anti-Biofilm ← Marine Scrub ← كلور 2× ← Algaecide]. ففي ظل [NaCl+VOC + Biofilm + طحالب + Demand]، تتفاقم ظاهرة [ترسبات + حماية + طحالب]. لذا؛ يتدخل خبراؤنا عبر [بروتوكول خزان صناعي-ساحلي].',
        heroSubtitle: 'NaCl+VOC + Biofilm أقصى + Chloride Demand + طحالب — لا Scale (ميزة!)',
    },
    pricing: [
        { type: 'علوي (1-3 م³)', unit: 'خزان', minPrice: 140, maxPrice: 280, time: '1-2 ساعة' },
        { type: 'أرضي (5-10 م³)', unit: 'خزان', minPrice: 280, maxPrice: 560, time: '2-4 ساعات' },
        { type: 'Anti-Biofilm + Marine Scrub', unit: 'خزان', minPrice: 320, maxPrice: 640, time: '3-5 ساعات' },
        { type: 'ربع سنوي', unit: 'سنة', minPrice: 480, maxPrice: 960, time: '4 زيارات' },
    ],
    faq: [
        { question: 'Biofilm — يحمي بكتيريا؟', answer: '98% = Biofilm = Diffusion Barrier = الكلور لا يصل البكتيريا تحته. Anti-Biofilm يُكسر ← ثم كلور. الترتيب حاسم!' },
        { question: 'Chloride Demand — أخطر هنا؟', answer: 'الأخطر. NaCl هواء + NaCl ماء = يستهلك الكلور أسرع. 2× كلور + فحص أسبوعي.' },
        { question: 'طحالب — في خزان مُغلق؟', answer: '98% + أي ضوء = طحالب. غطاء محكم + Algaecide. حفر الباطن: لا طحالب!' },
        { question: 'لا Scale — ميزة؟', answer: 'ميزة! ماء أقل عسراً من حفر الباطن = لا CaCO₃ Scale. لا Acid Wash. لكن: Biofilm أسوأ.' },
        { question: 'هل أحتاج شهادة صحية بعد التنظيف؟', answer: 'للمباني التجارية والمطاعم: نعم إلزامي. الأمانة تشترط شهادة تنظيف كل 6 أشهر. المفتش يطلبها. شركات بروكر تصدر شهادة معتمدة.' },
    ],
    expertTips: [
        'Anti-Biofilm أولاً — يكشف الجدار.',
        'كلور 2× — NaCl Chloride Demand.',
        'غطاء محكم — طحالب + NaCl هواء.',
        'Marine Scrub — NaCl+VOC ترسبات.',
        'فحص أسبوعي — Demand يتغير.',
    ],
    warnings: [
        'Biofilm بدون Anti-Biofilm = كلور لا يصل = بكتيريا محمية.',
        'NaCl Demand بدون كلور 2× = طحالب 48 ساعة.',
        'NaCl+VOC ترسبات = تُضيّق + تلوّث.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص خزانات' },
        { ...GOV.NWC, role: 'معايير مياه' },
        { entity: AMANA.SHARQIA.entity, url: AMANA.SHARQIA.url, role: 'اشتراطات المياه بالشرقية' },
    ],
    expertReviewer: EXPERTS.ALMOHAIMED,
    expertCitations: [
        { expert: EXPERTS.ALJUND.name, quote: 'خزان الجبيل: Biofilm أقصى + NaCl Demand + طحالب. Anti-Biofilm ← كلور 2× = الترتيب الحاسم. لا Scale (ميزة!).', source: 'موسوعة أخطاء — خزانات صناعية-ساحلية' },
    ],
    saudiRegulations: [REGULATIONS.SBC_601],
    verificationBadges: [{ badge: '✔️ خزانات مرخصة', authority: 'بلدي + NWC', icon: 'shield-check' }],
    equipment: [
        { name: 'Anti-Biofilm', use: '98% — يكشف الجدار' },
        { name: 'Marine Scrub', use: 'NaCl+VOC ترسبات' },
        { name: 'كلور 2×', use: 'NaCl Demand' },
        { name: 'Algaecide', use: '98% طحالب' },
    ],
    hiddenObjections: [
        { fear: 'لا Scale = سهل.', solution: 'Biofilm أقصى + Demand + طحالب. 3 تحديات.' },
        { fear: 'كلور يكفي.', solution: 'Biofilm يحمي. Anti-Biofilm أولاً.' },
    ],
    counterNarratives: [
        { myth: 'مثل حفر الباطن.', truth: 'Biofilm+طحالب+Demand. عكس (لا Scale vs Scale).' },
        { myth: 'شاور = يُنظف.', truth: 'Biofilm = Diffusion Barrier. Anti-Biofilm.' },
    ],
    relatedServices: [
        { slug: 'swimming-pool-cleaning', context: 'مسابح — Demand', priority: 1 },
        { slug: 'pest-control', context: 'حشرات — بعوض', priority: 2 },
        { slug: 'cleaning', context: 'تنظيف', priority: 3 },
        { slug: 'villas-cleaning', context: 'فلل', priority: 4 },
        { slug: 'apartments-cleaning', context: 'شقق', priority: 5 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 6 },
        { slug: 'steam-cleaning', context: 'بخار', priority: 7 },
    ],
};
