import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف خزانات بالباحة — أمطار تلوّث+ضباب Biofilm+Laterite — Algaecide+كلور 1.3×! (2026)',
        description: 'تنظيف خزانات الباحة. أمطار تلوّث! ضباب Biofilm 200 يوم. Laterite طين أحمر. Algaecide+كلور 1.3×+فلتر.',
        h1: 'تنظيف خزانات بالباحة — أمطار+Biofilm+طين!',
        keywords: ['تنظيف خزانات بالباحة', 'تنظيف خزان الباحة', 'شركة تنظيف خزانات بالباحة'],
    },
    content: {
        introduction: 'خزان الباحة = مطر يُلوّث+Biofilm ينمو! أمطار غزيرة: مياه أمطار تدخل الخزان = تُخفف كلور التعقيم+تُدخل Laterite (طين) ← تعكير. كلور 1.3× baseline. إحكام. ضباب Biofilm: 200 يوم ضباب = Biofilm بيولوجي داخل الخزان أسرع 20-30%. Anti-Biofilm+Algaecide. Laterite Fe₂O₃: طين أحمر ينجرف بالأمطار داخل الخزان ← يتراكم = ترسيبات. فلتر مدخل Heavy-Duty. مياه جوفية: الباحة جبلية = مياه جوفية نظيفة لكن Laterite يلوّث. معالجة. مقارنة: بريدة = CaCO₃ Scale+لا مطر+لا Biofilm = أبسط. الباحة = مطر+Biofilm+طين = أعقد.',
        shortAnswer: 'على عكس [التنظيف بدون Anti-Biofilm]، يعتمد بروتوكولنا في خدمة [تنظيف الخزانات] بمدينة [الباحة] على [Algaecide+Anti-Biofilm+كلور 1.3×+فلتر+إحكام]. ففي ظل [أمطار+ضباب Biofilm+Laterite+مياه جوفية]، تتفاقم ظاهرة [تخفيف+بكتيريا+تعكير]. لذا؛ يتدخل فنيونا عبر [إحكام ← فلتر ← Algaecide ← كلور 1.3×].',
        heroSubtitle: 'أمطار تُخفف + Biofilm 20-30% + Laterite — كلور 1.3×!',
    },
    pricing: [
        { type: 'خزان صغير (5 م³)', unit: 'خزان', minPrice: 150, maxPrice: 310, time: '2-3h' },
        { type: '+ Anti-Biofilm+Algaecide', unit: 'خزان', minPrice: 200, maxPrice: 420, time: '3-4h' },
        { type: 'خزان كبير (15+ م³)', unit: 'خزان', minPrice: 300, maxPrice: 620, time: '4-6h' },
        { type: 'ربع سنوي + بعد مطر', unit: 'سنة', minPrice: 500, maxPrice: 1000, time: '6+ تنظيف' },
    ],
    faq: [
        { question: 'ليش خزان الباحة يتلوّث بعد المطر؟', answer: 'مطر ينجرف Laterite+يُخفف كلور = تعكير+بكتيريا. إحكام+فلتر.' },
        { question: 'ليش Biofilm داخل خزان الباحة؟', answer: '200 يوم ضباب = رطوبة تدخل = 20-30% أسرع. Algaecide.' },
        { question: 'كم تكلفة خزان بالباحة مقابل بريدة؟', answer: 'أغلى 25-35% — Anti-Biofilm+فلتر Laterite. بريدة: Descaler فقط.' },
        { question: 'هل مياه الباحة الجوفية نظيفة؟', answer: 'نظيفة. لكن Laterite يلوّث بعد المطر. فلتر.' },
        { question: 'كم مرة تنظيف خزان بالباحة؟', answer: 'ربع سنوي + بعد كل موسم مطر. بريدة: ربع سنوي.' },
    ],
    expertTips: [
        'كلور 1.3× — بعد كل مطر.',
        'إحكام غطاء — مطر+طين.',
        'Algaecide — Biofilm أسبوعي.',
        'فلتر مدخل Heavy-Duty — Laterite.',
        'بعد كل موسم مطر — تنظيف.',
    ],
    warnings: [
        'مطر + خزان مفتوح = Laterite+بكتيريا ← مياه شرب YMYL.',
        'ضباب + بدون Algaecide = Biofilm ← تلوث.',
        'كلور ثابت بعد مطر = لا يكفي ← 1.3×.',
    ],
    trustAnchors: [
        { ...GOV.NWC, role: 'معايير تعقيم خزانات' },
        { ...GOV.BALADI, role: 'ترخيص شركات التنظيف' },
        { entity: AMANA.BAHA.entity, url: AMANA.BAHA.url, role: 'اشتراطات أمانة الباحة' },
    ],
    expertReviewer: EXPERTS.ALMOHAIMED,
    expertCitations: [
        { expert: EXPERTS.ALMOHAIMED.name, quote: 'خزان الباحة: مطر+Biofilm+Laterite. كلور 1.3×+إحكام.', source: 'نصائح هندسية — خزانات جبلية' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ تنظيف خزانات NWC', authority: 'NWC + بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'Algaecide', use: 'Biofilm — أسبوعي' },
        { name: 'Heavy-Duty Filter', use: 'Laterite — مدخل' },
        { name: 'إحكام غطاء', use: 'مطر — لا يدخل' },
    ],
    commonConcerns: [
        { concern: 'مياه جبلية نظيفة.', solution: 'Laterite يلوّث بعد المطر.' },
        { concern: 'مثل بريدة.', solution: 'مطر+Biofilm ≠ CaCO₃ Scale.' },
    ],
    consumerEducation: [
        { myth: 'نصف سنوي.', truth: 'ربع سنوي+بعد مطر.' },
        { myth: 'كلور ثابت.', truth: '1.3× بعد مطر.' },
    ],
    relatedServices: [
        { slug: 'tank-insulation', context: 'عزل', priority: 1 },
        { slug: 'tank-leak-detection', context: 'تسرب', priority: 2 },
        { slug: 'swimming-pool-cleaning', context: 'مسابح', priority: 3 },
        { slug: 'water-leak-detection', context: 'تسرب مياه', priority: 4 },
        { slug: 'cleaning', context: 'تنظيف', priority: 5 },
        { slug: 'pest-control', context: 'حشرات', priority: 6 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 7 },
    ],
};
