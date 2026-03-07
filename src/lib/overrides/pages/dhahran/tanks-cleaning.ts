import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف خزانات بالظهران — NaCl Chloride Demand + SiO₂ ترسب + 75-85% Biofilm + بعوض (2026)',
        description: 'تنظيف خزانات الظهران. NaCl Chloride Demand. SiO₂ يترسب قاع. 75-85% Biofilm. بعوض. لا Scale. Anti-Biofilm + كلور أعلى + Larvicide.',
        h1: 'تنظيف خزانات بالظهران — مزدوج: ملح يُضعف ورمل يترسب',
        keywords: ['تنظيف خزانات بالظهران', 'تنظيف خزان الظهران', 'شركة تنظيف خزانات بالظهران'],
    },
    content: {
        introduction: 'خزان الظهران يواجه مشكلة مزدوجة. الأولى — NaCl Chloride Demand: مثل الخبر — يُضعف الكلور. 20-30% أكثر. + SiO₂ يترسب في القاع = طبقة رملية تحمي بكتيريا تحتها. كشط قاع ضروري. الثانية — 75-85% Biofilm: أبطأ من الخبر لكن: ينمو على جدران الخزان. Biofilm = Diffusion Barrier. Anti-Biofilm + كشط. الثالثة — بعوض: أقل من الخبر لكن: يوجد. إحكام + BTI. الرابعة — لا CaSO₄ Scale (ميزة!): أسهل من الأحساء. السادسة — تآكل: NaCl + 75-85% = خزانات حديدية تتآكل. إيبوكسي.',
        shortAnswer: 'على عكس [غسل + كلور عادي] الذي يتجاهل SiO₂ القاع وBiofilm، يعتمد بروتوكولنا في خدمة [تنظيف الخزانات] بمدينة [الظهران] على [كشط SiO₂ + Anti-Biofilm + كلور أعلى + إحكام]. ففي ظل [NaCl+SiO₂ + 75-85% + بعوض]، تتفاقم ظاهرة [كلور ضعيف+رمل + غشاء + يرقات]. لذا؛ يتدخل خبراؤنا عبر [بروتوكول خزان مزدوج].',
        heroSubtitle: 'NaCl Chloride Demand + SiO₂ قاع + 75-85% Biofilm + لا Scale',
    },
    pricing: [
        { type: 'علوي (1-3 م³)', unit: 'خزان', minPrice: 145, maxPrice: 290, time: '1-2 ساعة' },
        { type: 'أرضي (5-10 م³)', unit: 'خزان', minPrice: 290, maxPrice: 580, time: '2-4 ساعات' },
        { type: 'Anti-Biofilm + كشط SiO₂ + إحكام', unit: 'خزان', minPrice: 340, maxPrice: 680, time: '3-5 ساعات' },
        { type: 'نصف سنوي', unit: 'سنة', minPrice: 480, maxPrice: 960, time: '2 زيارات' },
    ],
    faq: [
        { question: 'SiO₂ في القاع — خطر؟', answer: 'SiO₂ يترسب ← يشكل طبقة ← بكتيريا تعيش تحتها محمية من الكلور. كشط = يكشفها ← كلور يقتلها.' },
        { question: 'Chloride Demand — مثل الخبر؟', answer: 'مماثل. 20-30% كلور أكثر. فحص Free Chlorine أسبوعي.' },
        { question: 'لا Scale — ميزة حقيقية؟', answer: 'نعم — الأحساء = CaSO₄ Scale = تنظيف أصعب. الظهران = لا Scale = أسهل. لكن: Chloride + SiO₂ = تحديات أخرى.' },
        { question: 'Biofilm — أبطأ؟', answer: '75-85% = أبطأ (4-6 أسابيع). لكن: Diffusion Barrier يحمي بكتيريا. Anti-Biofilm كل 6 أشهر.' },
        { question: 'نصف سنوي — يكفي؟', answer: 'Biofilm أبطأ + كلور يومي = نصف سنوي كافٍ. ربع سنوي = ممتاز.' },
    ],
    expertTips: [
        'كشط قاع SiO₂ — يكشف بكتيريا محمية.',
        'كلور 20-30% أكثر — Chloride Demand.',
        'فحص Free Chlorine أسبوعي — يكشف الضعف.',
        'إحكام — بعوض + SiO₂ + أوساخ.',
        'إيبوكسي غذائي — NaCl تآكل حديد.',
    ],
    warnings: [
        'SiO₂ قاع = بكتيريا محمية حتى مع كلور. كشط = يكشفها.',
        'Chloride Demand = كلور يُستهلك أسرع = ماء ملوّث في صمت.',
        'NaCl + حديد = صدأ = لون + طعم. إيبوكسي = يمنع.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص خزانات' },
        { ...GOV.NWC, role: 'معايير مياه' },
        { entity: AMANA.SHARQIA.entity, url: AMANA.SHARQIA.url, role: 'اشتراطات المياه بالشرقية' },
    ],
    expertReviewer: EXPERTS.ALMOHAIMED,
    expertCitations: [
        { expert: EXPERTS.ALJUND.name, quote: 'خزان الظهران = مزدوج: Chloride Demand + SiO₂ قاع يحمي بكتيريا + 75-85% Biofilm. لا Scale = ميزة! كشط + Anti-Biofilm + كلور.', source: 'موسوعة أخطاء — خزانات مزدوجة' },
    ],
    saudiRegulations: [REGULATIONS.SBC_601],
    verificationBadges: [{ badge: '✔️ خزانات مرخصة', authority: 'بلدي + NWC', icon: 'shield-check' }],
    equipment: [
        { name: 'كشط قاع SiO₂', use: 'يكشف بكتيريا محمية' },
        { name: 'Anti-Biofilm', use: 'يُكسر Diffusion Barrier' },
        { name: 'Chlorine أعلى', use: 'Chloride Demand' },
        { name: 'إيبوكسي غذائي', use: 'حديد — NaCl تآكل' },
    ],
    hiddenObjections: [
        { fear: 'ماء نظيف.', solution: 'SiO₂ قاع + Biofilm + Chloride = \"نظيف\" ≠ آمن. فحص.' },
        { fear: 'كلور يكفي.', solution: 'Chloride Demand + SiO₂ يحمي = كلور وحده ≠ كافٍ.' },
    ],
    counterNarratives: [
        { myth: 'مثل الأحساء.', truth: 'لا Scale = ميزة! NaCl+SiO₂ = مختلف.' },
        { myth: 'سنوي.', truth: 'Biofilm + Chloride. نصف سنوي.' },
        { myth: 'كلور عادي.', truth: '20-30% أكثر.' },
    ],
    relatedServices: [
        { slug: 'swimming-pool-cleaning', context: 'مسابح — Chloride', priority: 1 },
        { slug: 'pest-control', context: 'حشرات — بعوض', priority: 2 },
        { slug: 'cleaning', context: 'تنظيف', priority: 3 },
        { slug: 'villas-cleaning', context: 'فلل', priority: 4 },
        { slug: 'apartments-cleaning', context: 'شقق', priority: 5 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 6 },
        { slug: 'steam-cleaning', context: 'بخار', priority: 7 },
    ],
};
