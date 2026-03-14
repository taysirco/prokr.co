import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف مسابح بتبوك — تجمد فعلي -2°م = أنابيب تنفجر + ثلوج في الماء + أوسع مدى حراري (2026)',
        description: 'تنظيف مسابح تبوك. -2°م = تجمد فعلي (الوحيدة بالسعودية). ثلوج تتراكم في المسبح. 46°م مدى = إجهاد حراري. Winterization كامل + Anti-Freeze + غطاء ثلج.',
        h1: 'تنظيف مسابح بتبوك — تجمد حقيقي وثلوج تتراكم ومدى 46°م',
        keywords: ['تنظيف مسابح بتبوك', 'تنظيف مسبح تبوك', 'شركة تنظيف مسابح بتبوك', 'صيانة مسبح تبوك'],
    },
    content: {
        introduction: 'المسبح في تبوك يواجه أخطر بيئة تشغيل في المملكة — تبوك هي المدينة السعودية الوحيدة التي يتجمد فيها ماء المسبح فعلاً. التهديد الأول — التجمد الحقيقي (True Freeze Damage): -2°م أو أقل يناير-فبراير. الماء يتجمد ← يتمدد 9% ← ضغط هائل على: بلاط المسبح (Frost Spalling — البلاط يتقشر)، أنابيب PVC/PPR (تنفجر)، المضخة (Impeller يتشقق)، الفلتر الرملي (يتشقق). ضرر واحد: 2,000-15,000 ريال. الوقاية: Winterization كامل قبل ديسمبر. التهديد الثاني — الثلوج تتراكم في المسبح (Snow Accumulation): تبوك تشهد تساقط ثلوج فعلية. ثلج يتراكم في المسبح المفتوح ← يذوب ← يُخفف الكلور ← يُغيّر pH ← طحالب تنمو تحت الثلج (لا ترى). ← ثلج يتجمد مرة أخرى ← Frost Spalling مضاعف. الحل: غطاء شتوي محكم (Winter Cover) + كيماويات Winterization. التهديد الثالث — أوسع مدى حراري (46°م Annual Range): -2°م → 44°م. الخرسانة والبلاط يتمددان/ينكمشان مع كل دورة ← إجهاد Thermal Fatigue ← شقوق في الهيكل ← تسرب. + UV 10+ يُحلل HOCl (Free Chlorine) صيفاً ← يحتاج CYA Stabilizer. التهديد الرابع — تبخر صيفي شديد: 44°م + < 15% رطوبة = تبخر 6-10 سم/أسبوع (أعلى من حائل). يُركّز أملاح ← CaCO₃ Scaling ← كلس على البلاط والأنابيب.',
        shortAnswer: 'على عكس [صيانة فصلية عادية] التي تتجاهل التجمد الحقيقي والثلوج، يعتمد بروتوكولنا في خدمة [تنظيف المسابح] بمدينة [تبوك] على [Winterization كامل (تفريغ أنابيب + Anti-Freeze + غطاء ثلج) + CYA Stabilizer صيفاً + Descaling + فحص Thermal Fatigue]. ففي ظل [-2°م تجمد حقيقي + ثلوج + 46°م مدى]، مسبح تبوك = أخطر مسبح في السعودية.',
        heroSubtitle: 'تجمد حقيقي + ثلوج حقيقية + 46°م مدى — أخطر مسبح سعودي',
    },
    pricing: [
        { type: 'صيانة موسمية (كيمياء + نظافة)', unit: 'مسبح', minPrice: 200, maxPrice: 400, time: '2-3 ساعات' },
        { type: 'Winterization كامل (تفريغ + Anti-Freeze + غطاء)', unit: 'مسبح', minPrice: 500, maxPrice: 1200, time: '4-6 ساعات' },
        { type: 'فتح موسم صيف (Spring Opening)', unit: 'مسبح', minPrice: 400, maxPrice: 800, time: '3-5 ساعات' },
        { type: 'عقد سنوي (Winterization + Opening + صيانة شهرية)', unit: 'سنة', minPrice: 2000, maxPrice: 4000, time: '12 زيارة' },
    ],
    faq: [
        { question: 'Winterization — ليش ضروري في تبوك؟', answer: 'تبوك = الوحيدة بالسعودية التي يتجمد فيها ماء المسبح. -2°م = ماء يتمدد 9% ← يُفجّر: أنابيب PVC (300-1,500 ريال إصلاح)، مضخة (1,000-3,000 ريال)، فلتر (500-2,000 ريال)، بلاط (2,000-10,000 ريال). Winterization: تفريغ أنابيب + Propylene Glycol في المتبقي + غطاء = صفر ضرر.' },
        { question: 'الثلج يتراكم في المسبح المفتوح — مشكلة؟', answer: '100% مضاعفة: (1) ثلج يذوب ← يُخفف الكلور ← pH يتغير ← طحالب تحت الثلج. (2) ماء + ثلج يتجمد مجدداً ← Frost Spalling (بلاط يتقشر). غطاء شتوي محكم يمنع الثلج من الدخول ← يمنع المشكلتين.' },
        { question: 'متى Winterization ومتى Spring Opening؟', answer: 'Winterization: نوفمبر (قبل أول صقيع). Spring Opening: أبريل (بعد آخر صقيع). الموسم في تبوك: مايو-أكتوبر (6 أشهر فقط — أقصر موسم مسابح في السعودية). الرياض: 8-9 أشهر. جدة: 10-11 شهراً.' },
        { question: 'CYA Stabilizer — ضروري صيفاً؟', answer: '100% — UV 10+ يُحلل HOCl. بدون CYA: الكلور يتحلل خلال ساعتين ← تحتاج 3-4× كلور ← تكلفة أعلى + كثافة عمل. CYA 30-50 ppm: يحمي الكلور ← يدوم 6-8 ساعات ← توفير 60-70% كلور.' },
        { question: 'التبخر عالي — كم أضيف ماء؟', answer: '6-10 سم/أسبوع صيفاً (44°م + 12% رطوبة = أعلى تبخر في المشروع). إضافة مياه عذبة (تعويض) ← لكن كل إضافة = أملاح جديدة ← CaCO₃ Scaling. Descaling كل 3 أشهر صيفاً = يمنع التراكم.' },
    ],
    expertTips: [
        'Winterization قبل أول صقيع (نوفمبر) — بعد الصقيع = فات الأوان. -2°م ليلة واحدة كافية لتُفجّر أنابيب.',
        'Propylene Glycol (وليس Ethylene) — Anti-Freeze آمن على البيئة والأطفال (Ethylene سام). حتى لو تسرب = لا خطر.',
        'غطاء شتوي يتحمل وزن الثلج — غطاء خفيف ينهار تحت الثلج ← يغرق ← أسوأ من بدون غطاء.',
        'CYA Stabilizer 30-50 ppm صيفاً — أقل = لا يحمي الكلور. أكثر = يمنع الكلور من العمل (Chlorine Lock). الحد الضيق مهم.',
        'Descaling كل 3 أشهر صيفاً — 6-10 سم/أسبوع تبخر = 10-15 ppm أملاح إضافية/أسبوع. التراكم سريع.',
    ],
    warnings: [
        'مسبح بدون Winterization في تبوك = ضرر 2,000-15,000 ريال في ليلة واحدة (-2°م). Winterization 500-1,200 ريال = يمنع الكارثة.',
        'ثلج في مسبح مفتوح = طحالب تحت الثلج + Frost Spalling عند إعادة التجمد = ضرر مضاعف.',
        'Anti-Freeze Ethylene Glycol = سام. Propylene Glycol فقط = آمن.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص صيانة المسابح' },
        { entity: AMANA.TABUK.entity, url: AMANA.TABUK.url, role: 'اشتراطات أمانة تبوك' },
    ],
    expertReviewer: EXPERTS.ALMOHAIMED,
    expertCitations: [
        { expert: EXPERTS.ALJUND.name, quote: 'مسبح تبوك = أخطر مسبح سعودي. -2°م = تجمد حقيقي (ليس مجازاً). + ثلوج تتراكم. + 46°م مدى = Thermal Fatigue. Winterization كامل + غطاء ثلج + Anti-Freeze = الحد الأدنى. بدونه: ليلة واحدة = كارثة.', source: 'موسوعة أخطاء في البناء — المسابح في المناطق ذات الصقيع' },
    ],
    saudiRegulations: [REGULATIONS.SBC_601],
    verificationBadges: [
        { badge: '✔️ صيانة مسابح مرخصة', authority: 'منصة بلدي', icon: 'shield-check' },
    ],
    equipment: [
        { name: 'Winterization Kit (تفريغ + Anti-Freeze)', use: 'يُفرّغ الأنابيب + Propylene Glycol في المتبقي — يمنع تجمد -2°م' },
        { name: 'غطاء شتوي محكم (يتحمل ثلوج)', use: 'يمنع تراكم الثلج + يحمي البلاط من Frost Spalling' },
        { name: 'CYA Stabilizer', use: 'يحمي HOCl من UV 10+ صيفاً — يوفر 60-70% كلور' },
        { name: 'Descaling كيميائي + فرشاة', use: 'يُزيل CaCO₃ من التبخر المكثف (6-10 سم/أسبوع)' },
    ],
    hiddenObjections: [
        { fear: 'Winterization غالي (500-1,200 ريال).', solution: 'أنبوب مُنفجر: 300-1,500 ريال. مضخة: 1,000-3,000 ريال. بلاط Frost Spalling: 2,000-10,000 ريال. ليلة واحدة -2°م = 2,000-15,000 ريال. Winterization = 5-10% من ضرر محتمل.' },
        { fear: '6 أشهر فقط موسم — ما يستاهل مسبح.', solution: '6 أشهر كافية (مايو-أكتوبر). + Winterization يحمي الاستثمار. المسبح = 50,000-200,000 ريال. الصيانة = 2,000-4,000 ريال/سنة = 1-2% من الاستثمار.' },
    ],
    consumerEducation: [
        { myth: 'لا يتجمد ماء المسبح — عميق.', truth: 'الأنابيب + المضخة + الفلتر = ليست عميقة. ماء في أنبوب 2 سم عمقاً يتجمد في -2°م خلال ساعة. الحوض نفسه: القشرة السطحية تتجمد ← Frost Spalling على البلاط.' },
        { myth: 'أتركه بدون غطاء — أبسط.', truth: 'ثلج يتراكم ← يذوب ← يُخفف الكلور ← طحالب ← يتجمد مجدداً ← Frost Spalling. الغطاء المحكم = يمنع كل ذلك.' },
        { myth: 'Winterization للأماكن الباردة جداً — تبوك معتدلة.', truth: '-2°م = تجمد حقيقي. ماء يتمدد 9% عند الصفر — لا يحتاج -20°م. صفر كافٍ. تبوك تتجاوز الصفر = Winterization إلزامي.' },
    ],
    relatedServices: [
        { slug: 'tanks-cleaning', context: 'خزانات — نفس تجمد + Descaling', priority: 1 },
        { slug: 'water-leak-detection', context: 'تسربات — فحص أنابيب بعد التجمد', priority: 2 },
        { slug: 'cleaning', context: 'تنظيف — المنطقة حول المسبح', priority: 3 },
        { slug: 'villas-cleaning', context: 'فلل — المسبح ضمن الفيلا', priority: 4 },
        { slug: 'pest-control', context: 'حشرات — بعوض في ماء راكد', priority: 5 },
        { slug: 'thermal-insulation', context: 'عزل حراري — يحمي أنابيب المسبح من التجمد', priority: 6 },
        { slug: 'marble-polishing', context: 'رخام — رخام حول المسبح', priority: 7 },
    ],
};
