import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف مداخن مطاعم بالباحة — Biofilm+كربنة رطبة = أخطر NFPA! أسرع حريق بالمملكة (2026)',
        description: 'تنظيف مداخن الباحة. Biofilm يحمي كربنة رطبة = أخطر خطر حريق NFPA 96! Anti-Biofilm أولاً ← Alkaline. أغلى+أخطر.',
        h1: 'تنظيف مداخن بالباحة — Biofilm+كربنة رطبة — أخطر NFPA!',
        keywords: ['تنظيف مداخن الباحة', 'تنظيف مداخن بالباحة', 'شركة تنظيف مداخن الباحة'],
    },
    content: {
        introduction: 'مداخن الباحة = أخطر مداخن بالمملكة من حيث NFPA 96! لماذا؟ Biofilm يحمي الكربنة!: 50-75% رطوبة + غابات عرعر = غشاء بيولوجي ينمو فوق الكربنة الدهنية داخل المدخنة. هذا الغشاء يحمي الكربنة من التنظيف العادي (Alkaline لا يصلها) + يجعل الطبقة أسمك وأكثر قابلية للاشتعال. Anti-Biofilm إلزامي قبل Alkaline. كربنة رطبة أسمك: في عنيزة (15-25% رطوبة) = كربنة جافة هشة رقيقة. في الباحة (50-75%) = كربنة رطبة لزجة سميكة = وقود أكثر = حريق أسرع وأشد. الخطر: Biofilm + كربنة رطبة = طبقة مزدوجة قابلة للاشتعال. مقياس ميكرون بعد التنظيف أعلى قراءة في الباحة مقارنة بأي مدينة. ربع سنوي لا يكفي — شهري لمطاعم ذات استخدام مكثف.',
        shortAnswer: 'على عكس [Alkaline مباشر الذي لا يخترق Biofilm]، يعتمد بروتوكولنا في خدمة [تنظيف مداخن المطاعم] بمدينة [الباحة] على [Anti-Biofilm ← Alkaline ← مقياس ميكرون]. ففي ظل [50-75%+غابات عرعر+كربنة رطبة+Biofilm يحمي الكربنة]، تتفاقم ظاهرة [طبقة مزدوجة قابلة للاشتعال]. لذا؛ يتدخل فنيونا عبر [كشف ← إذابة ← قياس] لضمان سلامة NFPA 96.',
        heroSubtitle: 'Biofilm + كربنة رطبة = أخطر NFPA! شهري إلزامي!',
    },
    pricing: [
        { type: 'مدخنة واحدة', unit: 'مدخنة', minPrice: 280, maxPrice: 600, time: '4-5 ساعات' },
        { type: 'Anti-Biofilm + Alkaline عميق', unit: 'مدخنة', minPrice: 350, maxPrice: 750, time: '5-6 ساعات' },
        { type: 'فحص ميكرون NFPA', unit: 'فحص', minPrice: 120, maxPrice: 250, time: '1 ساعة' },
        { type: 'شهري (12 زيارة/سنة)', unit: 'سنة', minPrice: 2800, maxPrice: 6000, time: '12 زيارة' },
    ],
    faq: [
        { question: 'ليش مداخن الباحة أخطر بالمملكة NFPA؟', answer: 'Biofilm يحمي كربنة رطبة = طبقة مزدوجة قابلة للاشتعال. أسمك وأخطر من عنيزة (كربنة جافة بدون Biofilm).' },
        { question: 'كم مرة أنظف المدخنة بالباحة؟', answer: 'شهري لمطاعم مكثفة! ربع سنوي مقبول للمطاعم الخفيفة. عنيزة: ربع سنوي يكفي.' },
        { question: 'كيف Anti-Biofilm يحمي من الحريق؟', answer: 'يكشف الكربنة للـ Alkaline. بدونه = Alkaline ينظف السطح لكن الكربنة تحت Biofilm = خطر حريق كامن.' },
        { question: 'كم تكلفة تنظيف مدخنة بالباحة مقارنة بعنيزة؟', answer: 'أغلى 30-40%! Anti-Biofilm = خطوة إضافية + كربنة رطبة = وقت أطول. 280-750 مقابل 200-550.' },
        { question: 'هل مقياس الميكرون مختلف بالباحة؟', answer: 'قراءة ما قبل التنظيف أعلى 2-3× من عنيزة. كربنة رطبة أسمك. بعد التنظيف يجب < 25μm.' },
    ],
    expertTips: [
        'Anti-Biofilm أولاً — يكشف الكربنة للـ Alkaline.',
        'Alkaline ثانياً — يُذيب الكربنة الرطبة بعد كشفها.',
        'مقياس ميكرون — NFPA 96 < 25μm.',
        'شهري لمطاعم مكثفة — ربع سنوي خطر بالباحة.',
        'تجفيف كامل — بدونه Biofilm يتكوّن مرة أخرى!',
    ],
    warnings: [
        'Biofilm + كربنة رطبة = أخطر طبقة قابلة للاشتعال — أسرع حريق مدخنة بالمملكة.',
        'Alkaline بدون Anti-Biofilm = نظافة سطحية فقط — كربنة كامنة تحت الغشاء.',
        'شهرين بدون تنظيف بالباحة = سماكة ≥ 50μm = خطر NFPA فوري.',
    ],
    trustAnchors: [
        { ...GOV.CIVILDEFENSE, role: 'سلامة مداخن — NFPA 96' },
        { ...GOV.BALADI, role: 'ترخيص مطاعم' },
        { entity: AMANA.BAHA.entity, url: AMANA.BAHA.url, role: 'اشتراطات أمانة الباحة' },
    ],
    expertReviewer: EXPERTS.ALMOHAIMED,
    expertCitations: [
        { expert: EXPERTS.ALMOHAIMED.name, quote: 'مداخن الباحة: أخطر NFPA بالمملكة. Biofilm يحمي كربنة رطبة. Anti-Biofilm أولاً. شهري إلزامي.', source: 'نصائح هندسية — مداخن جبلية' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [
        { badge: '✔️ مداخن مرخصة', authority: 'بلدي + دفاع مدني', icon: 'shield-check' },
    ],
    equipment: [
        { name: 'Anti-Biofilm صناعي', use: 'يكشف الكربنة بإزالة غشاء بيولوجي — إلزامي بالباحة' },
        { name: 'Alkaline Degreaser', use: 'يُذيب الكربنة الرطبة بعد كشفها' },
        { name: 'مقياس ميكرون', use: 'NFPA 96 compliance — < 25μm' },
    ],
    hiddenObjections: [
        { fear: 'مثل خميس NFPA.', solution: 'غابات = Biofilm أسرع = أخطر قليلاً.' },
        { fear: 'شهري غالي.', solution: 'حريق مدخنة = خسارة مطعم كامل. شهري أرخص 1000×.' },
    ],
    counterNarratives: [
        { myth: 'ربع سنوي يكفي بالباحة.', truth: 'Biofilm + كربنة رطبة = تراكم أسرع. شهري لمطاعم مكثفة.' },
        { myth: 'Alkaline وحده ينظف.', truth: 'Biofilm يمنع الوصول. Anti-Biofilm أولاً = الفرق بين نظافة حقيقية وسطحية.' },
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
