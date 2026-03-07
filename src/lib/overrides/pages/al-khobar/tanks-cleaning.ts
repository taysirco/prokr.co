import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف خزانات بالخبر — NaCl ماء ملحي + 85-95% Biofilm جدران + بعوض Culex + تآكل (2026)',
        description: 'تنظيف خزانات الخبر. ماء NaCl ملحي طبيعياً. 85-95% Biofilm بكتيري على الجدران. بعوض Culex ساحلي. تآكل معدني. RO + Anti-Biofilm + Larvicide + Anti-Corrosion.',
        h1: 'تنظيف خزانات بالخبر — ماء ملحي طبيعياً + Biofilm جدران + بعوض ساحلي',
        keywords: ['تنظيف خزانات بالخبر', 'تنظيف خزان الخبر', 'شركة تنظيف خزانات بالخبر'],
    },
    content: {
        introduction: 'خزان الخبر يختلف عن أي مدينة بـ 4 تحديات. الأولى — ماء NaCl طبيعي: ماء الخبر ملحي ← يُقلل فعالية الكلور (Chloride Demand) ← يحتاج كلور أكثر + فحص بقايا أدق. لا CaSO₄ Scale (ميزة عن الأحساء). الثانية — 85-95% Biofilm جدران: رطوبة عالية داخل وخارج الخزان = Biofilm بكتيري على الجدران الداخلية. Biofilm يحمي البكتيريا من الكلور (Diffusion Barrier). Anti-Biofilm + كشط + تعقيم. الثالثة — بعوض Culex ساحلي: كثافة أعلى في المنطقة الساحلية. أي فتحة = يدخل ← يضع بيض ← يرقات. إحكام + BTI Larvicide. الرابعة — تآكل معدني: NaCl + رطوبة = خزانات حديدية تتآكل أسرع. Anti-Corrosion + طلاء إيبوكسي.',
        shortAnswer: 'على عكس [غسل وكلور عادي] الذي لا يُعالج Biofilm ولا Chloride Demand، يعتمد بروتوكولنا في خدمة [تنظيف الخزانات] بمدينة [الخبر] على [Anti-Biofilm + كلور أعلى + Larvicide + Anti-Corrosion]. ففي ظل [NaCl + 85-95% + بعوض + تآكل]، تتفاقم ظاهرة [كلور ضعيف + غشاء + يرقات + صدأ]. لذا؛ يتدخل خبراؤنا عبر [بروتوكول خزان ساحلي].',
        heroSubtitle: 'NaCl Chloride Demand + 85-95% Biofilm + Culex ساحلي + تآكل',
    },
    pricing: [
        { type: 'خزان علوي (1-3 م³)', unit: 'خزان', minPrice: 150, maxPrice: 300, time: '1-2 ساعة' },
        { type: 'خزان أرضي (5-10 م³)', unit: 'خزان', minPrice: 300, maxPrice: 600, time: '2-4 ساعات' },
        { type: 'Anti-Biofilm + Anti-Corrosion + إحكام', unit: 'خزان', minPrice: 350, maxPrice: 700, time: '3-5 ساعات' },
        { type: 'عقد نصف سنوي (2 زيارة)', unit: 'سنة', minPrice: 500, maxPrice: 1000, time: '2 زيارات' },
    ],
    faq: [
        { question: 'ماء ملحي — الخزان يزيده؟', answer: 'الخزان لا يزيده — لكن: التبخر يُركّز NaCl = Chloride Demand أعلى = كلور أقل فعالية. فحص بقايا كلور (Free Chlorine) كل أسبوع.' },
        { question: 'Biofilm — داخل الماء؟', answer: 'على جدران الخزان — فوق خط الماء وتحته. 85-95% = حتى خارج الماء (تكثّف). Biofilm = Diffusion Barrier يحمي البكتيريا من الكلور. كشط + Anti-Biofilm.' },
        { question: 'لا Scale — ميزة كبيرة؟', answer: 'في الأحساء: CaSO₄ Scale = مشكلة رئيسية. الخبر: لا Scale = ميزة! لكن: Chloride Demand + Biofilm = مشاكل أخرى. أسهل تنظيفاً — أصعب تعقيماً.' },
        { question: 'إحكام — ضد بعوض فقط؟', answer: 'بعوض + NaCl بيئي + أوساخ + حشرات. إحكام = يمنع كل ملوّث خارجي. فتحة 1 مم = تكفي لبعوض Culex.' },
        { question: 'كل 6 أشهر — السبب؟', answer: 'Biofilm 85-95% ينمو بسرعة — لكن كلور يومي يُبطئه. نصف سنوي = يُزيل المتراكم. شهري = ممتاز. سنوي = متأخر.' },
    ],
    expertTips: [
        'كلور أعلى 20-30% — Chloride Demand ماء الخبر = يحتاج تعويض.',
        'فحص Free Chlorine أسبوعي — NaCl يُضعف = الفحص يكشف.',
        'Anti-Biofilm مع كل تنظيف — يُكسر Diffusion Barrier.',
        'إحكام كل فتحة — شبك ناعم + غطاء مُحكم = صفر بعوض.',
        'إيبوكسي غذائي لخزانات حديدية — يحمي من NaCl تآكل.',
    ],
    warnings: [
        'Biofilm + NaCl = بكتيريا محمية + كلور ضعيف = ماء ملوّث حتى مع \"كلور\". Anti-Biofilm يكشفها.',
        'خزان حديدي + NaCl + 85-95% = صدأ ← حديد في الماء ← لون + طعم + خطر صحي. إيبوكسي = يمنع.',
        'فتحة مفتوحة = بعوض Culex ← يرقات ← ماء ملوّث + لسعات. إحكام + BTI.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص تنظيف خزانات' },
        { ...GOV.NWC, role: 'معايير مياه الشرب' },
        { entity: AMANA.SHARQIA.entity, url: AMANA.SHARQIA.url, role: 'اشتراطات المياه بالشرقية' },
    ],
    expertReviewer: EXPERTS.ALMOHAIMED,
    expertCitations: [
        { expert: EXPERTS.ALJUND.name, quote: 'خزان الخبر = ساحلي: NaCl Chloride Demand + Biofilm 85-95% + بعوض Culex + تآكل. لا Scale (ميزة!) — لكن Chloride Demand = تعقيم أصعب.', source: 'موسوعة أخطاء — خزانات المياه الساحلية' },
    ],
    saudiRegulations: [REGULATIONS.SBC_601],
    verificationBadges: [
        { badge: '✔️ تنظيف خزانات مرخص', authority: 'بلدي + NWC', icon: 'shield-check' },
    ],
    equipment: [
        { name: 'Chlorine (كمية أعلى)', use: 'يُعوّض Chloride Demand ماء الخبر' },
        { name: 'Anti-Biofilm Treatment', use: 'يُكسر Diffusion Barrier — يكشف البكتيريا للكلور' },
        { name: 'BTI Larvicide', use: 'يقتل يرقات بعوض Culex' },
        { name: 'إيبوكسي غذائي', use: 'يحمي خزانات حديدية من NaCl تآكل' },
    ],
    hiddenObjections: [
        { fear: 'الماء نظيف.', solution: 'Biofilm شفاف. Free Chlorine منخفض. فحص = يكشف.' },
        { fear: 'كلور يكفي.', solution: 'Chloride Demand = الكلور يُستهلك أسرع. Biofilm = يحمي بكتيريا. كلور وحده ≠ كافٍ.' },
    ],
    counterNarratives: [
        { myth: 'خزان الخبر مثل الأحساء.', truth: 'NaCl ≠ CaSO₄. لا Scale = ميزة. Chloride Demand = تحدٍ مختلف.' },
        { myth: 'سنوي.', truth: 'Biofilm 85-95% + Chloride Demand. نصف سنوي = الحد.' },
        { myth: 'كلور عادي.', truth: '20-30% أكثر. Free Chlorine فحص أسبوعي.' },
    ],
    relatedServices: [
        { slug: 'swimming-pool-cleaning', context: 'مسابح — نفس Chloride Demand', priority: 1 },
        { slug: 'pest-control', context: 'حشرات — بعوض', priority: 2 },
        { slug: 'cleaning', context: 'تنظيف — ساحلي', priority: 3 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف — NaCl', priority: 4 },
        { slug: 'villas-cleaning', context: 'فلل — خزان الفيلا', priority: 5 },
        { slug: 'apartments-cleaning', context: 'شقق — خزان المبنى', priority: 6 },
        { slug: 'steam-cleaning', context: 'بخار — تعقيم', priority: 7 },
    ],
};
