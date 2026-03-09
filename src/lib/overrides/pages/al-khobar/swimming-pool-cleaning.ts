import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف مسابح بالخبر — NaCl طبيعي + 85-95% طحالب + تبخر + بعوض ساحلي + Biofilm (2026)',
        description: 'تنظيف مسابح الخبر. ماء الخبر NaCl طبيعي. 85-95% طحالب Chlorophyta أسرع. تبخر مُسرّع. بعوض Culex ساحلي. Biofilm جدران. CYA + Algaecide + Larvicide.',
        h1: 'تنظيف مسابح بالخبر — ماء ملحي طبيعياً وطحالب أسرع وبعوض ساحلي',
        keywords: ['تنظيف مسابح بالخبر', 'تنظيف مسبح الخبر', 'شركة تنظيف مسابح بالخبر'],
    },
    content: {
        introduction: 'المسبح في الخبر يتميز عن الأحساء بـ 4 اختلافات ساحلية. الأولى — ماء NaCl طبيعي: ماء الخبر ملحي ← يُقلل تأثير الكلور (Chloride Demand أعلى) ← يحتاج كلور أكثر. لكن: لا CaSO₄ Scale (ميزة!). الثانية — 85-95% طحالب أسرع: أعلى رطوبة = طحالب Chlorophyta تنمو أسرع حتى مع كلور. Algaecide + Shock أسبوعي. الثالثة — تبخر + NaCl = تركيز: التبخر يُركّز NaCl في المسبح ← يُقلل كفاءة الكلور أكثر. تعبئة + تعديل أسبوعي. الرابعة — بعوض Culex ساحلي: كثافة أعلى في المنطقة الساحلية. BTI Larvicide.',
        shortAnswer: 'على عكس [صيانة بدون مراعاة NaCl] التي تُقلل كفاءة الكلور، يعتمد بروتوكولنا في خدمة [تنظيف المسابح] بمدينة [الخبر] على [Chloride Demand + Algaecide + CYA + Larvicide]. ففي ظل [NaCl طبيعي + 85-95% + تبخر + بعوض]، تتفاقم ظاهرة [كلور ضعيف + طحالب + تركيز + تكاثر]. لذا؛ يتدخل خبراؤنا عبر [بروتوكول مسبح ساحلي].',
        heroSubtitle: 'NaCl يُضعف الكلور + 85-95% طحالب + تبخر تركيز + بعوض ساحلي',
    },
    pricing: [
        { type: 'صيانة أسبوعية', unit: 'مسبح', minPrice: 130, maxPrice: 270, time: '1-2 ساعة' },
        { type: 'إزالة طحالب + Shock', unit: 'مسبح', minPrice: 250, maxPrice: 500, time: '2-3 ساعات' },
        { type: 'عقد شهري (4 أسبوعية)', unit: 'شهر', minPrice: 450, maxPrice: 900, time: '4 زيارات' },
        { type: 'عقد + Larvicide', unit: 'شهر', minPrice: 550, maxPrice: 1100, time: '4+ زيارات' },
    ],
    faq: [
        { question: 'NaCl يُضعف الكلور — كيف؟', answer: 'Chloride (Cl⁻) في الماء يتنافس مع Hypochlorite (ClO⁻) الكلور. ماء الخبر = NaCl عالي = Chloride Demand أعلى = تحتاج 20-30% كلور أكثر من ماء الرياض.' },
        { question: 'لا CaSO₄ — ميزة؟', answer: 'نعم — لا Scale على البلاط أو المضخة (ميزة عن الأحساء). لكن: NaCl يُضعف الكلور = طحالب + بكتيريا. مشكلة مختلفة — ليست أقل.' },
        { question: 'طحالب 85-95% — أسرع؟', answer: 'رطوبة + حرارة + ضوء = 3 عوامل مثالية للطحالب. 85-95% = لا فترة جفاف تُبطئها. طحالب 12/12 شهر. Algaecide + Shock أسبوعي.' },
        { question: 'CYA — مهم في الخبر؟', answer: 'UV 8-9 + NaCl يُضعف الكلور = الكلور يتحلل + يُستهلك من جهتين. CYA يحمي من UV = الكلور يدوم أطول ← يُعوّض Chloride Demand.' },
        { question: 'Biofilm جدران المسبح؟', answer: '85-95% + حافة المسبح (خط الماء) = Biofilm ينمو. يحمي البكتيريا من الكلور. فرشاة أسبوعية + Shock = يُزيل.' },
    ],
    expertTips: [
        'كلور 20-30% أكثر — Chloride Demand ماء الخبر = يحتاج تعويض.',
        'Algaecide + Shock أسبوعي — طحالب 85-95% لا تنتظر.',
        'فرشاة خط الماء أسبوعياً — Biofilm ينمو على الحافة.',
        'CYA 40-60 ppm — يحمي الكلور من UV ← يُعوّض Chloride Demand.',
        'غطاء المسبح = يُقلل تبخر + NaCl بيئي + طحالب ← كل شيء أفضل.',
    ],
    warnings: [
        'NaCl يُضعف الكلور + 85-95% طحالب = مسبح أخضر خلال 48 ساعة إذا انخفض الكلور.',
        'تبخر + NaCl = تركيز Chloride يرتفع ← كلور أقل فعالية ← فحص أسبوعي إلزامي.',
        'Biofilm على جدران = بكتيريا محمية حتى مع كلور. فرشاة = الحل.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص صيانة المسابح' },
        { entity: AMANA.SHARQIA.entity, url: AMANA.SHARQIA.url, role: 'اشتراطات المسابح بالشرقية' },
    ],
    expertReviewer: EXPERTS.ALMOHAIMED,
    expertCitations: [
        { expert: EXPERTS.ALJUND.name, quote: 'مسبح الخبر = ساحلي: NaCl يُضعف الكلور (Chloride Demand) + 85-95% طحالب 12/12 + بعوض ساحلي. لا CaSO₄ = ميزة! لكن: Chloride Demand = تحدٍ مختلف.', source: 'موسوعة أخطاء — مسابح ساحلية' },
    ],
    saudiRegulations: [REGULATIONS.SBC_601],
    verificationBadges: [{ badge: '✔️ صيانة مسابح مرخصة', authority: 'منصة بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'Chlorine (كمية أعلى)', use: 'يُعوّض Chloride Demand ماء الخبر' },
        { name: 'Algaecide + Shock', use: 'يمنع طحالب 85-95%' },
        { name: 'CYA Stabilizer', use: 'يحمي الكلور من UV — يدوم أطول' },
        { name: 'BTI Larvicide', use: 'يقتل يرقات بعوض ساحلي حول المسبح' },
    ],
    hiddenObjections: [
        { fear: 'لا Scale = لا مشكلة.', solution: 'لا Scale = ميزة! لكن: Chloride Demand + طحالب + Biofilm = 3 مشاكل أخرى.' },
        { fear: 'كلور زيادة = غالي.', solution: '20-30% أكثر = 50-100 ريال/شهر. مسبح أخضر = 300-500 ريال Shock + يوم بدون سباحة.' },
    ],
    counterNarratives: [
        { myth: 'مسبح الخبر مثل الأحساء.', truth: 'NaCl ≠ CaSO₄. لا Scale = ميزة. لكن Chloride Demand = تحدٍ مختلف. مختلف.' },
        { myth: 'كلور عادي يكفي.', truth: 'Chloride Demand = 20-30% أكثر. عادي = تحت المطلوب = طحالب.' },
        { myth: 'شهري.', truth: 'طحالب 85-95% + Chloride Demand = أسبوعي إلزامي.' },
    ],
    relatedServices: [
        { slug: 'pest-control', context: 'حشرات — بعوض ساحلي', priority: 1 },
        { slug: 'tanks-cleaning', context: 'خزانات — NaCl + بعوض', priority: 2 },
        { slug: 'villas-cleaning', context: 'فلل — مسبح', priority: 3 },
        { slug: 'cleaning', context: 'تنظيف — حول المسبح', priority: 4 },
        { slug: 'marble-polishing', context: 'رخام — أرضية', priority: 5 },
        { slug: 'glass-facades-cleaning', context: 'واجهات — NaCl', priority: 6 },
        { slug: 'steam-cleaning', context: 'بخار — غرفة تبديل', priority: 7 },
    ],
};
