import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS } from '../../trust-anchors';

export const override: PageOverride = {
    meta: { title: 'تنظيف منازل بعنيزة — بروتوكول قصيمي: HEPA Nafud → Citric CaCO₃ → بخار لقاح + يجف فوراً (2026)', description: 'تنظيف منازل عنيزة. بروتوكول قصيمي: HEPA (Nafud 7) → Citric (CaCO₃ 600) → بخار 130°م (لقاح + بق). يجف فوراً (10%). ربع سنوي + لقاح.', h1: 'تنظيف منازل بعنيزة — بروتوكول قصيمي ثلاثي', keywords: ['تنظيف منازل بعنيزة', 'تنظيف بيوت عنيزة'] },
    content: { introduction: 'بروتوكول قصيمي: HEPA أولاً (Nafud 7 Mohs — أي فرك بدون شفط = خدوش) → Citric Acid (CaCO₃ 600ppm حمام/مطبخ — لا ماء صنبور!) → بخار 130°م (لقاح Van der Waals + بق 21 يوم + Der p 1). يجف فوراً (10% — أفضل بيئة تنظيف سعودية). ربع سنوي + تنظيف عميق في موسم لقاح (مارس-مايو). أحياء الأندلس/الفيصلية (قرب مزارع): + مكافحة.', shortAnswer: 'HEPA → Citric → بخار. يجف فوراً. ربع سنوي + لقاح مارس-مايو.', heroSubtitle: 'بروتوكول قصيمي: Nafud شفط → CaCO₃ إذابة → لقاح بخار — يجف فوراً' },
    pricing: [{ type: 'شقة', unit: 'شقة', minPrice: 180, maxPrice: 350, time: '3-5 ساعات' }, { type: 'عقد ربع سنوي', unit: 'سنة', minPrice: 500, maxPrice: 1000, time: '4 + لقاح' }],
    faq: [{ question: 'بروتوكول قصيمي — ليش؟', answer: 'CaCO₃ 600ppm + Nafud 7 + لقاح + 48°م = أي مدينة أخرى لا تواجه الـ 4 معاً. بروتوكول خاص.' }],
    expertTips: ['HEPA أولاً — لا فرك.', 'Citric — لا صنبور.', 'بخار — يجف فوراً.', 'موسم لقاح — مارس-مايو.'],
    warnings: ['فرك Nafud = خدوش.', 'ماء صنبور = CaCO₃.'],
    trustAnchors: [{ ...GOV.BALADI, role: 'ترخيص' }], expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [{ expert: EXPERTS.ALMISNID.name, quote: 'عنيزة: CaCO₃ + Nafud + لقاح + حرارة = بروتوكول رباعي فريد.', source: 'جغرافيا المناخ — القصيم' }],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH], verificationBadges: [{ badge: '✔️ مرخص', authority: 'بلدي', icon: 'shield-check' }],
    equipment: [{ name: 'HEPA', use: 'Nafud' }, { name: 'Citric Acid', use: 'CaCO₃' }, { name: 'بخار 130°م', use: 'لقاح + بق' }],
    hiddenObjections: [{ fear: 'مرة بالسنة.', solution: '4 تحديات = ربع سنوي + لقاح.' }], counterNarratives: [{ myth: 'جاف = نظيف.', truth: 'جاف ≠ نظيف. CaCO₃ + Nafud + لقاح.' }],
    relatedServices: [{ slug: 'apartments-cleaning', context: 'شقق', priority: 1 }, { slug: 'carpet-cleaning', context: 'سجاد', priority: 2 }, { slug: 'steam-cleaning', context: 'بخار', priority: 3 }, { slug: 'pest-control', context: 'حشرات', priority: 4 }],
};
