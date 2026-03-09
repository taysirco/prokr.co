import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف مسابح بالأحساء — CaSO₄ Scale على البلاط + لقاح عضوي + تبخر 8-10 سم/أسبوع + بعوض واحة (2026)',
        description: 'تنظيف مسابح الأحساء. CaSO₄ يترسب Scale على بلاط المسبح. لقاح عضوي يُغذي طحالب. تبخر 8-10 سم/أسبوع. بعوض Culex من واحة. Citric + Algae Control + CYA.',
        h1: 'تنظيف مسابح بالأحساء — جبس على البلاط ولقاح يُطحلب وماء يتبخر',
        keywords: ['تنظيف مسابح بالأحساء', 'تنظيف مسبح الاحساء', 'شركة تنظيف مسابح بالأحساء'],
    },
    content: {
        introduction: 'المسبح في الأحساء يواجه 4 تحديات واحية. الأولى — CaSO₄ Scale على البلاط: ماء الأحساء الجبسي = Scale أبيض على بلاط وجدران المسبح ← خشونة ← بكتيريا تتراكم في الخشونة. Citric Acid أسبوعي على خط الماء. الثانية — لقاح عضوي يُغذي الطحالب: 2.5M نخلة = لقاح يسقط في المسبح ← غذاء عضوي ← طحالب Chlorophyta تنمو أسرع. Algaecide + Shock أسبوعي. الثالثة — تبخر 8-10 سم/أسبوع: 48°م + هفوف 30-40% = تبخر مُسرّع ← ارتفاع تركيز كيماويات + CaSO₄ ← تعبئة + تعديل كيمياء أسبوعي. الرابعة — بعوض Culex من واحة: 2.5M نخلة = كثافة بعوض عالية ← يبيض في المسبح إذا كلور منخفض. Larvicide BTI حول المسبح.',
        shortAnswer: 'على عكس [صيانة بدون Citric ولا CYA] التي تتجاهل CaSO₄ والـ UV، يعتمد بروتوكولنا في خدمة [تنظيف المسابح] بمدينة [الأحساء] على [Citric Scale + Algaecide + CYA + Larvicide]. ففي ظل [CaSO₄ + لقاح + تبخر + بعوض واحة]، تتفاقم ظاهرة [Scale + طحالب + تركيز + تكاثر]. لذا؛ يتدخل خبراؤنا عبر [بروتوكول مسبح واحي].',
        heroSubtitle: 'CaSO₄ Scale + لقاح طحالب + تبخر مُسرّع + بعوض واحة',
    },
    pricing: [
        { type: 'صيانة أسبوعية', unit: 'مسبح', minPrice: 120, maxPrice: 250, time: '1-2 ساعة' },
        { type: 'Citric Scale إزالة', unit: 'مسبح', minPrice: 200, maxPrice: 400, time: '2-3 ساعات' },
        { type: 'عقد شهري (4 أسبوعية)', unit: 'شهر', minPrice: 400, maxPrice: 800, time: '4 زيارات' },
        { type: 'عقد شهري + Larvicide', unit: 'شهر', minPrice: 500, maxPrice: 1000, time: '4+ زيارات' },
    ],
    faq: [
        { question: 'CaSO₄ على بلاط المسبح — خطر؟', answer: 'Scale = خشونة ← بكتيريا تتراكم في المسام ← Biofilm = مقاوم للكلور. + Scale على المضخة = كفاءة أقل. Citric أسبوعي على خط الماء = يمنع.' },
        { question: 'اللقاح يُنمّي طحالب؟', answer: 'لقاح = بروتين + كربوهيدرات = غذاء لـ Chlorophyta. مسبح مكشوف + 2.5M نخلة = لقاح يسقط يومياً. Shock Chlorination أسبوعي + Algaecide = يمنع.' },
        { question: 'CYA — ليش؟', answer: 'Cyanuric Acid يحمي الكلور من UV 9+. بدونه: كلور يتحلل خلال 2-3 ساعات. CYA 40-60 ppm = يُطيل 3-5×. + تبخر يرفع تركيز CYA ← فحص أسبوعي.' },
        { question: 'تبخر 8-10 سم/أسبوع — كثير؟', answer: '48°م + 30-40% هفوف = تبخر أسرع. مسبح 50 م³ = 400-500 لتر/أسبوع خسارة. + التبخر يُركّز CaSO₄ + كيماويات ← تعديل أسبوعي إلزامي.' },
        { question: 'بعوض واحة — أخطر من مدينة عادية؟', answer: 'نعم — 2.5M نخلة = كثافة حشرية أعلى. Culex pipiens يبحث عن مياه راكدة ← مسبح بكلور منخفض = هدف. BTI Larvicide آمن للسباحة — يقتل اليرقات فقط.' },
    ],
    expertTips: [
        'Citric أسبوعي على خط الماء — يمنع CaSO₄ Scale. بعد تراكم: كشط = خدوش بلاط.',
        'Shock + Algaecide أسبوعي — لقاح يومي = غذاء طحالب. أسبوعي = يسبق النمو.',
        'CYA 40-60 ppm — UV 9+ يُحلل الكلور. CYA = حماية. لكن: التبخر يرفع CYA ← فحص أسبوعي.',
        'غطاء المسبح = يُقلل تبخر 50% + يمنع لقاح + يُقلل UV ← كل شيء أفضل.',
        'Larvicide BTI كل أسبوعين حول المسبح — يقطع دورة حياة بعوض الواحة.',
    ],
    warnings: [
        'CaSO₄ Scale على المضخة = كفاءة أقل ← ضغط أكثر ← عمر أقصر. 2,000-5,000 ريال مضخة جديدة. Citric = 100-200 ريال.',
        'لقاح + كلور منخفض = طحالب خضراء خلال 48 ساعة ← مسبح لا يُسبح فيه ← Shock كامل (300-500 ريال).',
        'تبخر + لا تعديل = تركيز كيماويات مرتفع ← تهيج جلد/عين. أو العكس: كلور يتحلل ← بكتيريا.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص صيانة المسابح' },
        { entity: AMANA.AHSA.entity, url: AMANA.AHSA.url, role: 'اشتراطات المسابح بمحافظة الأحساء' },
    ],
    expertReviewer: EXPERTS.ALMOHAIMED,
    expertCitations: [
        { expert: EXPERTS.ALJUND.name, quote: 'مسبح الأحساء = واحي: CaSO₄ Scale فريد (لا يوجد في مسابح NaCl) + لقاح يُغذي طحالب + تبخر يُركّز + بعوض واحة. Citric + Algaecide + CYA + BTI = بروتوكول واحي.', source: 'موسوعة أخطاء — مسابح الواحات الزراعية' },
    ],
    saudiRegulations: [REGULATIONS.SBC_601],
    verificationBadges: [
        { badge: '✔️ صيانة مسابح مرخصة', authority: 'منصة بلدي', icon: 'shield-check' },
    ],
    equipment: [
        { name: 'Citric Acid (Scale)', use: 'يُذيب CaSO₄ من بلاط وجدران المسبح' },
        { name: 'Algaecide + Shock Chlorination', use: 'يمنع طحالب لقاح + يُعقّم' },
        { name: 'CYA Stabilizer (40-60 ppm)', use: 'يحمي الكلور من UV 9+' },
        { name: 'Larvicide BTI', use: 'يقتل يرقات بعوض واحة حول المسبح' },
    ],
    hiddenObjections: [
        { fear: 'CaSO₄ ميزة — ما يصدّئ.', solution: 'لا يُصدّئ = صحيح (ميزة!). لكن يترسب Scale = خشونة + بكتيريا + مضخة أقصر عمراً. مشكلة مختلفة — ليست أقل.' },
        { fear: 'مسبح مُغطى — ما يحتاج.', solution: 'غطاء يُقلل لقاح + تبخر (ممتاز!). لكن: CaSO₄ من الماء نفسه. + البعوض يبيض حتى تحت غطاء مفتوح. 2 من 4 تحتاج صيانة.' },
    ],
    counterNarratives: [
        { myth: 'مسبح الأحساء مثل الرياض.', truth: 'الرياض = ماء ناعم + بدون واحة. الأحساء = CaSO₄ + لقاح 2.5M + بعوض واحة. 3 فروقات = بروتوكول مختلف.' },
        { myth: 'كلور يكفي.', truth: 'UV يُحلل الكلور + لقاح يُغذي طحالب + CaSO₄ يحمي بكتيريا. الكلور وحده = خطوة من 4.' },
        { myth: 'شهري يكفي.', truth: 'تبخر أسبوعي + لقاح يومي + CaSO₄ يومي. شهري = 3 أسابيع بدون ضبط. أسبوعي = الحد.' },
    ],
    relatedServices: [
        { slug: 'pest-control', context: 'حشرات — بعوض واحة', priority: 1 },
        { slug: 'tanks-cleaning', context: 'خزانات — نفس CaSO₄ + بعوض', priority: 2 },
        { slug: 'villas-cleaning', context: 'فلل — مسبح الفيلا', priority: 3 },
        { slug: 'cleaning', context: 'تنظيف — حول المسبح', priority: 4 },
        { slug: 'marble-polishing', context: 'رخام — أرضية المسبح', priority: 5 },
        { slug: 'glass-facades-cleaning', context: 'واجهات — CaSO₄', priority: 6 },
        { slug: 'steam-cleaning', context: 'بخار — غرفة تبديل', priority: 7 },
    ],
};
