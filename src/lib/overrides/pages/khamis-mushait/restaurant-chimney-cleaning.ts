import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف مداخن مطاعم بخميس مشيط — Biofilm+كربنة رطبة = أخطر NFPA! شهري إلزامي (2026)',
        description: 'تنظيف مداخن خميس مشيط. Biofilm يحمي كربنة رطبة = أخطر حريق NFPA 96! Anti-Biofilm ← Alkaline. شهري إلزامي.',
        h1: 'تنظيف مداخن بخميس مشيط — Biofilm + كربنة رطبة — أخطر!',
        keywords: ['تنظيف مداخن خميس مشيط', 'تنظيف مداخن بخميس مشيط', 'شركة تنظيف مداخن خميس مشيط'],
    },
    content: {
        introduction: 'مداخن خميس مشيط = من أخطر المداخن بالمملكة NFPA 96! لماذا؟ Biofilm يحمي الكربنة: 60-85% + ضباب = غشاء بيولوجي ينمو فوق الكربنة الدهنية. يحمي الكربنة من Alkaline! Anti-Biofilm إلزامي أولاً. كربنة رطبة أسمك: عنيزة (15-25%) = كربنة جافة هشة رقيقة. خميس (60-85%) = كربنة رطبة لزجة سميكة = وقود أكثر = حريق أسرع. الخطر: Biofilm + كربنة رطبة = طبقة مزدوجة قابلة للاشتعال. مقياس ميكرون بعد التنظيف أعلى من عنيزة. شهري لمطاعم مكثفة — ربع سنوي لمطاعم خفيفة. مقارنة: عنيزة = Alkaline مباشر + ربع سنوي + كربنة جافة. خميس = Anti-Biofilm إضافي + شهري = أغلى 25-30%.',
        shortAnswer: 'على عكس [Alkaline مباشر الذي لا يخترق Biofilm]، يعتمد بروتوكولنا في خدمة [تنظيف مداخن المطاعم] بمدينة [خميس مشيط] على [Anti-Biofilm ← Alkaline ← مقياس ميكرون]. ففي ظل [60-85%+ضباب+كربنة رطبة+Biofilm]، تتفاقم ظاهرة [طبقة مزدوجة قابلة للاشتعال]. لذا؛ يتدخل فنيونا عبر [كشف ← إذابة ← قياس] لسلامة NFPA 96.',
        heroSubtitle: 'Biofilm + كربنة رطبة = أخطر NFPA! شهري إلزامي!',
    },
    pricing: [
        { type: 'مدخنة واحدة', unit: 'مدخنة', minPrice: 260, maxPrice: 550, time: '4-5 ساعات' },
        { type: 'Anti-Biofilm + Alkaline عميق', unit: 'مدخنة', minPrice: 330, maxPrice: 700, time: '5-6 ساعات' },
        { type: 'فحص ميكرون NFPA', unit: 'فحص', minPrice: 110, maxPrice: 230, time: '1 ساعة' },
        { type: 'شهري (12 زيارة/سنة)', unit: 'سنة', minPrice: 2600, maxPrice: 5500, time: '12 زيارة' },
    ],
    faq: [
        { question: 'ليش مداخن خميس أخطر NFPA؟', answer: 'Biofilm يحمي كربنة رطبة = طبقة مزدوجة قابلة للاشتعال. أسمك من عنيزة (كربنة جافة).' },
        { question: 'كم مرة أنظف المدخنة بخميس؟', answer: 'شهري لمطاعم مكثفة! ربع سنوي للخفيفة. عنيزة: ربع سنوي يكفي.' },
        { question: 'كيف Anti-Biofilm يحمي من الحريق؟', answer: 'يكشف الكربنة للـ Alkaline. بدونه = تنظيف سطحي + كربنة كامنة = خطر حريق.' },
        { question: 'كم تكلفة تنظيف مدخنة بخميس مقارنة بعنيزة؟', answer: 'أغلى 25-30%! Anti-Biofilm = خطوة إضافية. 260-700 مقابل 200-550.' },
        { question: 'هل مقياس الميكرون مختلف بخميس؟', answer: 'قراءة ما قبل = أعلى 2× من عنيزة. كربنة رطبة أسمك. بعد التنظيف < 25μm.' },
    ],
    expertTips: [
        'Anti-Biofilm أولاً — يكشف الكربنة.',
        'Alkaline ثانياً — يُذيب الكربنة بعد كشفها.',
        'مقياس ميكرون — NFPA 96 < 25μm.',
        'شهري لمطاعم مكثفة — ربع سنوي خطر.',
        'تجفيف — بدونه Biofilm يرجع.',
    ],
    warnings: [
        'Biofilm + كربنة رطبة = أخطر طبقة — أسرع حريق مدخنة.',
        'Alkaline مباشر بدون Anti-Biofilm = نظافة سطحية فقط.',
        'شهرين بدون تنظيف + 60-85% = ≥ 50μm = خطر NFPA فوري.',
    ],
    trustAnchors: [
        { ...GOV.CIVILDEFENSE, role: 'سلامة مداخن — NFPA 96' },
        { ...GOV.BALADI, role: 'ترخيص مطاعم' },
        { entity: AMANA.ASIR.entity, url: AMANA.ASIR.url, role: 'اشتراطات أمانة عسير' },
    ],
    expertReviewer: EXPERTS.ALMOHAIMED,
    expertCitations: [
        { expert: EXPERTS.ALMOHAIMED.name, quote: 'مداخن خميس: Biofilm يحمي كربنة رطبة. Anti-Biofilm أولاً. شهري. من أخطر NFPA.', source: 'نصائح هندسية — مداخن جبلية' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ مداخن مرخصة', authority: 'دفاع مدني + بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'Anti-Biofilm صناعي', use: 'يكشف الكربنة بإزالة Biofilm' },
        { name: 'Alkaline Degreaser', use: 'يُذيب كربنة رطبة' },
        { name: 'مقياس ميكرون', use: 'NFPA 96 < 25μm' },
    ],
    hiddenObjections: [
        { fear: 'مثل الباحة.', solution: 'متشابه — نفس الفيزياء.' },
        { fear: 'شهري غالي.', solution: 'حريق = خسارة مطعم. شهري أرخص 1000×.' },
    ],
    consumerEducation: [
        { myth: 'ربع سنوي يكفي بخميس.', truth: 'Biofilm + كربنة رطبة = تراكم سريع. شهري.' },
        { myth: 'Alkaline وحده.', truth: 'Biofilm يمنع الوصول. Anti-Biofilm أولاً.' },
    ],
    relatedServices: [
        { slug: 'oven-cleaning', context: 'أفران — Biofilm', priority: 1 },
        { slug: 'cleaning', context: 'تنظيف', priority: 2 },
        { slug: 'pest-control', context: 'حشرات مطاعم', priority: 3 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 4 },
        { slug: 'steam-cleaning', context: 'بخار', priority: 5 },
        { slug: 'office-cleaning', context: 'مكاتب', priority: 6 },
        { slug: 'glass-facades-cleaning', context: 'واجهات', priority: 7 },
    ],
};
