import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف مسابح بالباحة — أمطار غزيرة+ضباب Biofilm+Laterite — Algaecide+كلور 1.3×! (2026)',
        description: 'تنظيف مسابح الباحة. أمطار تُخفف كلور! ضباب Biofilm. Laterite طين أحمر. Algaecide+كلور 1.3×+Anti-Biofilm.',
        h1: 'تنظيف مسابح بالباحة — أمطار+Biofilm+طين!',
        keywords: ['تنظيف مسابح بالباحة', 'تنظيف مسبح الباحة', 'شركة تنظيف مسابح بالباحة'],
    },
    content: {
        introduction: 'مسبح الباحة = مطر يُخفف الكلور! أمطار غزيرة: الباحة أكثر مطراً بالمملكة ← كل مطر يُخفف تركيز الكلور ← بكتيريا. كلور 1.3× baseline بعد كل مطر. ضباب Biofilm: 200 يوم ضباب = Biofilm (طبقة بكتيرية) على جدران المسبح أسرع 20-30% من أي مدينة. Anti-Biofilm+Algaecide أسبوعي. Laterite Fe₂O₃: طين أحمر ينجرف بالأمطار للمسبح ← يُعكّر+يُلوّن. فلتر Heavy-Duty. أشجار عرعر: أوراق+لقاح تسقط بالمسبح = عضويات. Skimmer مُعزَّز. مقارنة: بريدة = لا مطر+لا Biofilm+CaCO₃ Scale = أبسط. الباحة = مطر+Biofilm+طين+غابة = أعقد.',
        shortAnswer: 'على عكس [الصيانة العادية]، يعتمد بروتوكولنا في خدمة [تنظيف المسابح] بمدينة [الباحة] على [Algaecide+Anti-Biofilm+كلور 1.3×+Heavy-Duty فلتر]. ففي ظل [أمطار+ضباب Biofilm+Laterite+عرعر أوراق]، تتفاقم ظاهرة [تخفيف+بكتيريا+تعكير+عضويات]. لذا؛ يتدخل فنيونا عبر [كلور بعد مطر ← Algaecide ← Anti-Biofilm ← فلتر].',
        heroSubtitle: 'أمطار تُخفف كلور + Biofilm 20-30% أسرع — كلور 1.3×!',
    },
    pricing: [
        { type: 'تنظيف مسبح', unit: 'مسبح', minPrice: 250, maxPrice: 520, time: '2-4h' },
        { type: '+ Anti-Biofilm+Algaecide', unit: 'مسبح', minPrice: 350, maxPrice: 720, time: '+ 1h' },
        { type: 'أسبوعي (بعد مطر)', unit: 'شهر', minPrice: 400, maxPrice: 800, time: '4-6 زيارة' },
        { type: 'عقد سنوي', unit: 'سنة', minPrice: 3500, maxPrice: 7000, time: '52+ زيارة' },
    ],
    faq: [
        { question: 'ليش المطر مشكلة لمسبح الباحة؟', answer: 'يُخفف كلور = بكتيريا. كلور 1.3× بعد كل مطر.' },
        { question: 'ليش Biofilm على مسبح الباحة أسرع؟', answer: '200 يوم ضباب+غابة = 20-30% أسرع. Algaecide أسبوعي.' },
        { question: 'هل Laterite يدخل المسبح بالباحة؟', answer: 'مطر ينجرف الطين للمسبح = يُعكّر. فلتر Heavy-Duty.' },
        { question: 'كم تكلفة مسبح بالباحة مقابل بريدة؟', answer: 'أغلى 50-60% — Algaecide+Anti-Biofilm+كلور متكرر.' },
        { question: 'كم مرة صيانة مسبح بالباحة؟', answer: 'أسبوعي + بعد كل مطر. بريدة: ربع سنوي.' },
    ],
    expertTips: [
        'كلور 1.3× — بعد كل مطر.',
        'Algaecide أسبوعي — Biofilm.',
        'Heavy-Duty فلتر — Laterite.',
        'Skimmer مُعزَّز — أوراق عرعر.',
        'Anti-Biofilm — 20-30% أسرع.',
    ],
    warnings: [
        'مطر + بدون كلور = بكتيريا ← سباحة خطرة YMYL.',
        'ضباب + بدون Algaecide = Biofilm أخضر ← انزلاق YMYL.',
        'Laterite + فلتر عادي = يسد ← تلوث.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص صيانة المسابح' },
        { entity: AMANA.BAHA.entity, url: AMANA.BAHA.url, role: 'اشتراطات أمانة الباحة' },
    ],
    expertReviewer: EXPERTS.ALMOHAIMED,
    expertCitations: [
        { expert: EXPERTS.ALMOHAIMED.name, quote: 'مسبح الباحة: مطر يُخفف+Biofilm أسرع. كلور 1.3×+Algaecide.', source: 'نصائح هندسية — مسابح جبلية' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ صيانة مسابح مرخصة', authority: 'بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'Algaecide', use: 'Biofilm — أسبوعي' },
        { name: 'Heavy-Duty Filter', use: 'Laterite — طين' },
        { name: 'Skimmer مُعزَّز', use: 'عرعر — أوراق' },
    ],
    commonConcerns: [
        { concern: 'ربع سنوي.', solution: 'مطر = أسبوعي. كلور يُخفف.' },
        { concern: 'مثل بريدة.', solution: 'مطر+Biofilm+طين ≠ جاف+Scale.' },
    ],
    consumerEducation: [
        { myth: 'كلور ثابت.', truth: 'مطر = 1.3× بعد.' },
        { myth: 'لا Biofilm.', truth: '20-30% أسرع. ضباب+غابة.' },
    ],
    relatedServices: [
        { slug: 'tanks-cleaning', context: 'خزانات', priority: 1 },
        { slug: 'water-leak-detection', context: 'تسرب', priority: 2 },
        { slug: 'cleaning', context: 'تنظيف', priority: 3 },
        { slug: 'pest-control', context: 'حشرات', priority: 4 },
        { slug: 'marble-polishing', context: 'رخام', priority: 5 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 6 },
        { slug: 'water-insulation', context: 'مائي', priority: 7 },
    ],
};
