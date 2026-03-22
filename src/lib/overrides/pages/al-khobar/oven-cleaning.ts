import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../gov-references';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف أفران بالخبر — كربنة + NaCl يُصلّب + 85-95% Biofilm شحمي + Sabkha فتحات (2026)',
        description: 'تنظيف أفران الخبر. 45°م كربنة. NaCl من مأكولات بحرية يُصلّب. 85-95% Biofilm شحمي. Sabkha يسد فتحات. Alkaline + Anti-Biofilm + RO شطف.',
        h1: 'تنظيف أفران بالخبر — كربنة + ملح مأكولات بحرية + Biofilm شحمي',
        keywords: ['تنظيف أفران بالخبر', 'تنظيف فرن الخبر', 'شركة تنظيف أفران بالخبر'],
    },
    content: {
        introduction: 'الفرن في الخبر يتعرض لـ 3 تحديات ساحلية فريدة. الأولى — NaCl من مأكولات بحرية: المنطقة الشرقية = مأكولات بحرية أكثر (أسماك + ربيان). NaCl العالي يمتزج بالشحوم ← يتصلب بشكل مختلف عن الشحوم العادية (Saponification أبطأ). Alkaline pH 12+ مع وقت تلامس أطول. الثانية — 85-95% Biofilm شحمي: رطوبة عالية + شحوم = Biofilm بكتيري/فطري ينمو داخل الفرن ← طبقة لزجة ← رائحة. Anti-Biofilm بعد كل تنظيف عميق. الثالثة — الكربنة تبقى رطبة أطول: في 15% (رياض): الكربنة تجف ← صلبة. في 85-95% (الخبر): الكربنة تبقى رطبة ← لزجة ← Biofilm ينمو عليها. Alkaline + Anti-Biofilm.',
        shortAnswer: 'على عكس [بخاخ فرن عادي] الذي لا يُعالج NaCl الشحمي ولا Biofilm، يعتمد بروتوكولنا في خدمة [تنظيف الأفران] بمدينة [الخبر] على [Alkaline pH 12+ + Anti-Biofilm + RO]. ففي ظل [NaCl بحري + 85-95% + كربنة رطبة]، تتفاقم ظاهرة [تصلب + غشاء + لزوجة]. لذا؛ يتدخل خبراؤنا عبر [بروتوكول فرن ساحلي].',
        heroSubtitle: 'NaCl مأكولات بحرية + 85-95% Biofilm شحمي + كربنة رطبة',
    },
    pricing: [
        { type: 'تنظيف فرن عادي', unit: 'فرن', minPrice: 80, maxPrice: 170, time: '1-2 ساعة' },
        { type: 'تنظيف عميق + Anti-Biofilm', unit: 'فرن', minPrice: 130, maxPrice: 260, time: '2-3 ساعات' },
        { type: 'فرن + شفاط + مطبخ', unit: 'باقة', minPrice: 200, maxPrice: 400, time: '3-5 ساعات' },
        { type: 'عقد ربع سنوي (4 زيارات)', unit: 'سنة', minPrice: 380, maxPrice: 750, time: '4 زيارات' },
    ],
    faq: [
        { question: 'NaCl من الطبخ — مو بس الجو؟', answer: 'مأكولات بحرية = NaCl عالي في الشحوم. الشحم + NaCl = يتصلب بشكل مختلف (يمنع Saponification). Alkaline يحتاج وقت أطول.' },
        { question: 'Biofilm في الفرن — مو بس بكتيريا؟', answer: '85-95% + شحوم رطبة = بيئة مثالية لـ Biofilm بكتيري/فطري. يُنتج رائحة + يحمي البكتيريا. Anti-Biofilm يقتل.' },
        { question: 'الكربنة رطبة — ميزة أم عيب؟', answer: 'عيب: كربنة رطبة = Biofilm ينمو عليها. ميزة: أسهل إزالة من الكربنة الجافة الصلبة. Alkaline يعمل أسرع — لكن Biofilm يحتاج علاج إضافي.' },
        { question: 'RO للشطف — ليش؟', answer: 'ماء الخبر = NaCl يترسب بعد الشطف = بقع ملحية + بيئة Biofilm جديدة. RO = صفر أملاح = فرن نظيف فعلاً.' },
        { question: 'كل 3 أشهر؟', answer: 'مأكولات بحرية + 85-95% = Biofilm ينمو سريعاً. ربع سنوي = قبل التأصّل.' },
    ],
    expertTips: [
        'Alkaline pH 12+ × 20 دقيقة — NaCl الشحمي يحتاج وقت أطول.',
        'Anti-Biofilm بعد كل تنظيف عميق — يمنع إعادة النمو 3 أشهر.',
        'RO للشطف — يمنع NaCl جديد.',
        'تجفيف الفرن بعد التنظيف — 85-95% = لا يجف ← مروحة 30 دقيقة.',
        'فتحات تهوية — Sabkha + NaCl يسدانها. تنظيف شهري.',
    ],
    warnings: [
        'NaCl شحمي + Biofilm 85-95% = رائحة + بكتيريا في كل طبخة. Anti-Biofilm = أمان غذائي.',
        'كربنة رطبة 6 أشهر = Biofilm مُتأصل + خطر اشتعال. ربع سنوي = يمنع.',
        'شطف بماء الخبر = NaCl جديد = Biofilm يعود. RO = صفر أملاح.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص شركات التنظيف' },
        { entity: AMANA.SHARQIA.entity, url: AMANA.SHARQIA.url, role: 'اشتراطات الصحة بالشرقية' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALMOHAIMED.name, quote: 'فرن الخبر = ساحلي + بحري: NaCl من مأكولات بحرية + 85-95% Biofilm شحمي + كربنة رطبة. Alkaline + Anti-Biofilm + RO = ثلاثي ساحلي.', source: 'نصائح هندسية — أفران ساحلية' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ تنظيف أفران مرخص', authority: 'منصة بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'Alkaline Degreaser pH 12+', use: 'يُذيب كربنة + NaCl شحمي' },
        { name: 'Anti-Biofilm Treatment', use: 'يقتل Biofilm بكتيري/فطري' },
        { name: 'RO Water (شطف)', use: 'صفر NaCl = صفر بقع = صفر Biofilm جديد' },
    ],
    commonConcerns: [
        { concern: 'بخاخ يكفي.', solution: 'pH 9-10 لا يصل NaCl. لا يقتل Biofilm. أداة ضعيفة.' },
        { concern: 'أنظف بنفسي.', solution: 'بماء الخبر؟ = NaCl جديد. بدون Anti-Biofilm? = يعود.' },
    ],
    consumerEducation: [
        { myth: 'فرن عادي.', truth: 'NaCl + 85-95% + مأكولات بحرية = 3 فروقات ساحلية.' },
        { myth: 'ماء وصابون.', truth: 'ماء NaCl + صابون < pH 12. لا يكفي لكربنة ولا Biofilm.' },
        { myth: 'نصف سنوي.', truth: 'Biofilm 85-95% = ينمو أسابيع. ربع سنوي.' },
    ],
    relatedServices: [
        { slug: 'restaurant-chimney-cleaning', context: 'مداخن — نفس كربنة', priority: 1 },
        { slug: 'cleaning', context: 'تنظيف — المطبخ', priority: 2 },
        { slug: 'pest-control', context: 'حشرات — شحوم', priority: 3 },
        { slug: 'steam-cleaning', context: 'بخار — تعقيم', priority: 4 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف — شحوم', priority: 5 },
        { slug: 'glass-facades-cleaning', context: 'واجهات — شحوم', priority: 6 },
        { slug: 'hourly-cleaning', context: 'بالساعة — يومي', priority: 7 },
    ],
};
