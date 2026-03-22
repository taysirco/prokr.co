import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../gov-references';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف مداخن مطاعم بالخبر — كربنة + NaCl بحري + 85-95% Biofilm + NFPA 96 (2026)',
        description: 'تنظيف مداخن مطاعم الخبر. كربنة + NaCl من مأكولات بحرية. 85-95% Biofilm شحمي. NFPA 96. Alkaline pH 13 + Anti-Biofilm + RO شطف + ربع سنوي.',
        h1: 'تنظيف مداخن مطاعم بالخبر — كربنة + ملح بحري + Biofilm رطب',
        keywords: ['تنظيف مداخن مطاعم بالخبر', 'تنظيف مداخن الخبر', 'شركة تنظيف مداخن بالخبر'],
    },
    content: {
        introduction: 'مداخن مطاعم الخبر تواجه تحديات ساحلية إضافية فوق الكربنة. التحدي الأول — NaCl من مأكولات بحرية: مطاعم الخبر = أسماك + ربيان = NaCl عالي في الشحوم ← يمتزج بالكربنة ← أصعب إزالة (يمنع Saponification). Alkaline pH 13 مع وقت أطول. التحدي الثاني — 85-95% Biofilm في المدخنة: رطوبة عالية + شحوم رطبة = Biofilm بكتيري/فطري على جدران المدخنة ← طبقة لزجة ← رائحة + بكتيريا. Anti-Biofilm بعد كل تنظيف. التحدي الثالث — كربنة رطبة: 85-95% = الكربنة لا تجف ← تبقى لزجة ← Biofilm ينمو عليها ← طبقة مُركّبة (كربون + Biofilm). أصعب فصلاً. NFPA 96: خطر اشتعال عند 6,000 ميكرون ← Biofilm يُضيف سُمكاً إضافياً.',
        shortAnswer: 'على عكس [تنظيف سنوي بدون Anti-Biofilm] الذي يتجاهل الغشاء، يعتمد بروتوكولنا في خدمة [تنظيف المداخن] بمدينة [الخبر] على [Alkaline pH 13 + Anti-Biofilm + RO + ربع سنوي]. ففي ظل [NaCl بحري + 85-95% + كربنة رطبة]، تتفاقم ظاهرة [تصلب + غشاء + سُمك]. لذا؛ يتدخل خبراؤنا عبر [بروتوكول مدخنة ساحلي].',
        heroSubtitle: 'NaCl مأكولات بحرية + 85-95% Biofilm + كربنة رطبة + NFPA 96',
    },
    pricing: [
        { type: 'تنظيف مدخنة (Alkaline pH 13)', unit: 'مدخنة', minPrice: 280, maxPrice: 650, time: '2-4 ساعات' },
        { type: 'Anti-Biofilm + فلاتر', unit: 'خدمة', minPrice: 180, maxPrice: 350, time: '1-2 ساعة' },
        { type: 'عقد ربع سنوي (4 مداخن + Anti-Biofilm)', unit: 'سنة', minPrice: 900, maxPrice: 2200, time: '4+ زيارات' },
        { type: 'طوارئ (انسداد/دخان)', unit: 'خدمة', minPrice: 350, maxPrice: 750, time: '2-3 ساعات' },
    ],
    faq: [
        { question: 'NaCl بحري — أصعب؟', answer: 'NaCl يمنع Saponification (تصبّن الشحوم) ← Alkaline يحتاج pH أعلى + وقت أطول. مطاعم بحرية = أصعب من مطاعم لحوم.' },
        { question: 'Biofilm في المدخنة — خطر حريق؟', answer: 'Biofilm = طبقة عضوية رطبة. عندما تجف (إذا توقف الطبخ): قابلة للاشتعال. + تُضيف سُمكاً للكربنة = تصل 6,000 ميكرون NFPA أسرع.' },
        { question: 'كل 3 أشهر — ربع سنوي؟', answer: 'NaCl + 85-95% = Biofilm ينمو أسرع + كربنة لا تجف. ربع سنوي = الحد الأدنى. مطاعم بحرية = كل شهرين أفضل.' },
        { question: 'NFPA 96 — ملزم في الخبر؟', answer: 'الدفاع المدني يعتمد NFPA 96. 6,000 ميكرون = خطر اشتعال. في 85-95%: Biofilm يُضيف 1,000-2,000 ميكرون = يصل أسرع.' },
        { question: 'RO للشطف — ضروري؟', answer: 'ماء الخبر = NaCl ← يترسب بعد الشطف ← Biofilm جديد. RO = صفر NaCl = مدخنة نظيفة فعلاً.' },
    ],
    expertTips: [
        'Alkaline pH 13 × 30 دقيقة — NaCl شحمي يحتاج وقت أطول من الشحوم العادية.',
        'Anti-Biofilm بعد كل تنظيف — يمنع إعادة النمو 3 أشهر.',
        'RO للشطف — يمنع NaCl جديد.',
        'فحص سُمك (مقياس ميكرون) — يكشف Biofilm المُضاف.',
        'فلاتر Baffle شهرية — NaCl + Biofilm يسدّان أسرع.',
    ],
    warnings: [
        'NaCl + Biofilm + كربنة = طبقة مُركّبة 6,000 ميكرون+ = خطر اشتعال. Anti-Ignition 260-290°م.',
        'Biofilm في المدخنة = بكتيريا + رائحة = مشكلة صحية + تقييم منخفض.',
        'فلتر مسدود بـ NaCl + Biofilm = كفاءة سحب أقل = شحوم في المطبخ + كربنة أسرع.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص المطاعم' },
        { ...GOV.CIVILDEFENSE, role: 'السلامة — NFPA 96' },
        { entity: AMANA.SHARQIA.entity, url: AMANA.SHARQIA.url, role: 'اشتراطات مطاعم الشرقية' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALMOHAIMED.name, quote: 'مداخن الخبر = ساحلية + بحرية: NaCl مأكولات بحرية + 85-95% Biofilm + كربنة رطبة. Alkaline pH 13 + Anti-Biofilm + RO = بروتوكول ساحلي.', source: 'نصائح هندسية — مداخن المطاعم الساحلية' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [
        { badge: '✔️ تنظيف مداخن مرخص', authority: 'بلدي + الدفاع المدني', icon: 'shield-check' },
    ],
    equipment: [
        { name: 'Alkaline Degreaser pH 13', use: 'يُذيب كربنة + NaCl شحمي — 30 دقيقة' },
        { name: 'Anti-Biofilm Treatment', use: 'يقتل Biofilm + يمنع إعادة النمو' },
        { name: 'RO Water (شطف)', use: 'صفر NaCl = صفر Biofilm جديد' },
        { name: 'مقياس سُمك ميكرون', use: 'يكشف كربنة + Biofilm المُضاف' },
    ],
    commonConcerns: [
        { concern: 'ربع سنوي مكلف.', solution: 'حريق مدخنة = 50,000-200,000 ريال. عقد 900-2,200/سنة = 1-4%.' },
        { concern: 'المدخنة نظيفة.', solution: 'Biofilm شفاف. كربنة رطبة لزجة. مقياس ميكرون يكشف.' },
    ],
    consumerEducation: [
        { myth: 'نصف سنوي.', truth: 'Biofilm 85-95% + NaCl = يصل 6,000 ميكرون أسرع. ربع سنوي = الحد.' },
        { myth: 'ماء عادي للشطف.', truth: 'ماء الخبر = NaCl = Biofilm جديد. RO فقط.' },
        { myth: 'مداخن الخبر مثل الرياض.', truth: 'NaCl + Biofilm + كربنة رطبة = 3 فروقات ساحلية.' },
    ],
    relatedServices: [
        { slug: 'oven-cleaning', context: 'أفران — نفس كربنة', priority: 1 },
        { slug: 'cleaning', context: 'تنظيف — المطعم', priority: 2 },
        { slug: 'pest-control', context: 'حشرات — شحوم', priority: 3 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف — NaCl', priority: 4 },
        { slug: 'steam-cleaning', context: 'بخار — تعقيم', priority: 5 },
        { slug: 'glass-facades-cleaning', context: 'واجهات — NaCl', priority: 6 },
        { slug: 'office-cleaning', context: 'مكاتب — إدارة المطعم', priority: 7 },
    ],
};
