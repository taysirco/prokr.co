import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'مكافحة حشرات بالخبر — جسر البحرين نقل + مولات مطاعم + 85-95% + كورنيش ساحلي (2026)',
        description: 'مكافحة حشرات الخبر. جسر الملك فهد = بوابة عابرة. مولات ومطاعم = صراصير وفئران. 85-95% تكاثر. كورنيش = بعوض. Gel + IGR + مصائد.',
        h1: 'مكافحة حشرات بالخبر — جسر البحرين + مولات + 85-95% + كورنيش',
        keywords: ['مكافحة حشرات بالخبر', 'مكافحة حشرات الخبر', 'شركة مكافحة حشرات بالخبر'],
    },
    content: {
        introduction: 'الخبر = عاصمة تجارية شرقية. 4 مصادر فريدة: (1) جسر الملك فهد: 70,000+ عبور يومي = بوابة حشرات عابرة (بق فنادق + صراصير + ذباب) من البحرين. فنادق الكورنيش = أول ضحية. (2) مولات + مطاعم: الراشد/الظهران مول/Mall of Dhahran = مطاعم 500+ = صراصير ألمانية + فئران مطبخ. Gel + محطات فئران. (3) 85-95% = تكاثر × 2.5 + Residual 3-5 أيام. (4) كورنيش + فلل ساحلية: بعوض Aedes/Culex + ذباب بحري. BTI + مصائد CO₂.',
        shortAnswer: 'على عكس [رش عام]، يعتمد بروتوكولنا على [Gel مولات + K9 فنادق + BTI كورنيش + IGR 85-95%]. ففي [جسر + مولات + كورنيش + 85-95%]، الرش يتحلل 3-5 أيام.',
        heroSubtitle: 'جسر البحرين 70K عبور + مولات 500 مطعم + 85-95% + كورنيش بعوض',
    },
    pricing: [
        { type: 'شقة', unit: 'شقة', minPrice: 150, maxPrice: 320, time: '2-3 ساعات' },
        { type: 'فنادق — غرفة', unit: 'غرفة', minPrice: 120, maxPrice: 250, time: '1-2 ساعة' },
        { type: 'عقد 12-يومي', unit: 'سنة', minPrice: 950, maxPrice: 2100, time: '30 زيارة' },
    ],
    faq: [
        { question: 'جسر البحرين؟', answer: '70,000+ سيارة يومياً. حشرات تعبر مع أمتعة/بضائع. فنادق أول ضحية.' },
        { question: 'مولات؟', answer: '500+ مطعم. صراصير ألمانية. Gel + فخاخ + فحص دوري.' },
        { question: 'Residual 3-5؟', answer: '85-95% = أقل من القطيف (2-4) لكن أسوأ من الجبيل (4-6).' },
    ],
    expertTips: [
        'Gel Bait مولات ومطاعم.',
        'K9 فنادق جسر — بق عابر.',
        'BTI كورنيش + فلل ساحلية.',
        'Residual كل 12 يوم.',
    ],
    warnings: [
        'جسر = حشرات عابرة مُستمرة.',
        'مولات = مصدر دائم.',
        '85-95% = تكاثر سريع.',
    ],
    trustAnchors: [{ ...GOV.BALADI, role: 'ترخيص' }, { ...GOV.WEQAA, role: 'مبيدات' }],
    expertReviewer: EXPERTS.ALKHODAIRY,
    expertCitations: [{ expert: EXPERTS.ALKHODAIRY.name, quote: 'الخبر: جسر البحرين = بوابة عابرة. 70K سيارة = حشرات عابرة مُستمرة. مولات = مصدر. 85-95% = 3-5 أيام.', source: 'أبحاث حشرات — الشرقية' }],
    saudiRegulations: [REGULATIONS.GHAD_SYSTEM],
    verificationBadges: [{ badge: '✔️ مرخصة', authority: 'بلدي + وقاء', icon: 'shield-check' }],
    equipment: [{ name: 'Gel Bait', use: 'مولات' }, { name: 'K9', use: 'فنادق جسر' }, { name: 'BTI', use: 'كورنيش' }, { name: 'IGR', use: '85-95%' }],
    hiddenObjections: [{ fear: 'رش.', solution: '85-95% = 3-5 أيام.' }],
    counterNarratives: [{ myth: 'مثل الدمام.', truth: 'جسر + مولات + كورنيش.' }],
    relatedServices: [{ slug: 'bedbugs-control', context: 'بق — فنادق جسر', priority: 1 }, { slug: 'termite-control', context: 'نمل', priority: 2 }],
};
