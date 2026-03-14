import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'مكافحة حشرات بالظهران — عقارب صحراوية + مشجرات KFUPM + مجمعات أرامكو 40-80 سنة + 70-85% (2026)',
        description: 'مكافحة حشرات الظهران. عقارب صحراوية. مشجرات KFUPM. مجمعات أرامكو قديمة. 70-85% Residual 5-7 أيام.',
        h1: 'مكافحة حشرات بالظهران — عقارب + مشجرات + أرامكو + 70-85%',
        keywords: ['مكافحة حشرات بالظهران', 'مكافحة حشرات الظهران', 'شركة مكافحة حشرات بالظهران'],
    },
    content: {
        introduction: 'الظهران = مقر أرامكو العالمي + KFUPM. 4 تحديات فريدة: (1) عقارب صحراوية (Androctonus + Leiurus): صحراء مُباشرة حول KFUPM والدوحة الجنوبية. Delta Dust + ختم شقوق + UV Blacklight. (2) مشجرات KFUPM/أرامكو: تشجير كثيف ← حشرات مشجرات (خنافس + ذباب أبيض + حشرات ورقية) مختلفة عن بعوض الخبر. IPM مُتخصص. (3) مجمعات أرامكو 40-80 سنة: بنية أمريكية قديمة = شقوق + فراغات = مخابئ صراصير + فئران. Gel + محطات + ختم. (4) 70-85% = Residual 5-7 أيام (أفضل من الخبر 3-5!). أقل من ساحلي.',
        shortAnswer: 'على عكس [رش عام]، يعتمد بروتوكولنا على [Delta Dust عقارب + IPM مشجرات + Gel مجمعات + IGR 70-85%]. ففي [أرامكو + KFUPM + صحراء + 70-85%]، نظام مُتعدد.',
        heroSubtitle: 'عقارب صحراوية + مشجرات KFUPM + مجمعات 40-80 سنة + 70-85%',
    },
    pricing: [
        { type: 'شقة', unit: 'شقة', minPrice: 150, maxPrice: 320, time: '2-3 ساعات' },
        { type: 'مجمع أرامكو — فيلا', unit: 'فيلا', minPrice: 350, maxPrice: 800, time: '3-5 ساعات' },
        { type: 'عقد 16-يومي', unit: 'سنة', minPrice: 900, maxPrice: 1900, time: '22 زيارة' },
    ],
    faq: [
        { question: 'عقارب؟', answer: 'Androctonus + Leiurus. صحراء مُباشرة. Delta Dust + ختم + UV.' },
        { question: 'Residual 5-7؟', answer: '70-85% أقل من الخبر. أفضل.' },
        { question: 'مجمعات قديمة؟', answer: '40-80 سنة. شقوق + فراغات. ختم + Gel.' },
        { question: 'هل المبيدات آمنة على الأطفال والحيوانات؟', answer: 'مبيدات مسجلة في نظام غد — SFDA. إخلاء 2-4 ساعات بعد الرش. طيور وأسماك: أبِلغ الشركة مسبقاً لاستخدام مواد أخف. الأسطح آمنة بعد الجفاف (1-2 ساعة).' },
        { question: 'كم يدوم مفعول الرش؟', answer: 'رش وقائي: 30-45 يوم. رش علاجي (إصابة نشطة): يحتاج 2-3 جلسات بفاصل 7-14 يوم. عقد ربع سنوي = أفضل حماية.' },
    ],
    expertTips: [
        'Delta Dust عقارب.',
        'IPM مشجرات KFUPM.',
        'Gel مجمعات قديمة.',
        'Residual 16 يوم.',
        'UV Blacklight كشف عقارب.',
    ],
    warnings: [
        'عقارب = خطر صحي.',
        'مجمعات قديمة = مخابئ.',
        'مشجرات = حشرات مختلفة.',
    ],
    trustAnchors: [{ ...GOV.BALADI, role: 'ترخيص' }, { ...GOV.WEQAA, role: 'مبيدات' },
        { entity: AMANA.SHARQIA.entity, url: AMANA.SHARQIA.url, role: 'اشتراطات أمانة الشرقية' },
    ],
        expertReviewer: EXPERTS.ALKHODAIRY,
    expertCitations: [{ expert: EXPERTS.ALKHODAIRY.name, quote: 'الظهران: عقارب صحراوية + مشجرات + مجمعات قديمة. 70-85% = أفضل من ساحلي.', source: 'أبحاث حشرات — الشرقية' }],
    saudiRegulations: [REGULATIONS.GHAD_SYSTEM],
    verificationBadges: [{ badge: '✔️ مرخصة', authority: 'بلدي + وقاء', icon: 'shield-check' }],
    equipment: [{ name: 'Delta Dust', use: 'عقارب' }, { name: 'UV Blacklight', use: 'كشف' }, { name: 'Gel Bait', use: 'مجمعات' }, { name: 'IGR', use: '70-85%' }],
    hiddenObjections: [{ fear: 'رش.', solution: '5-7 أيام أفضل.' }],
    consumerEducation: [{ myth: 'مثل الخبر.', truth: 'عقارب + مشجرات + أبعد عن بحر.' },
        { myth: 'الحشرات تدل على قلة نظافة.', truth: 'الحشرات تبحث عن ماء ودفء وليس قذارة. أنظف بيت يجذب حشرات إذا فيه رطوبة أو شقوق.' },
    ],
    relatedServices: [{ slug: 'bedbugs-control', context: 'بق', priority: 1 }, { slug: 'termite-control', context: 'نمل — خشب قديم', priority: 2 },
        { slug: 'pesticide-spraying', context: 'خدمة مكملة — باقة شاملة.', priority: 3 },
        { slug: 'bird-control', context: 'خدمة مكملة — باقة شاملة.', priority: 4 },
        { slug: 'cleaning', context: 'خدمة مكملة — باقة شاملة.', priority: 5 },
        { slug: 'tanks-cleaning', context: 'خدمة مكملة — باقة شاملة.', priority: 6 },
        { slug: 'sewage-unblocking', context: 'خدمة مكملة — باقة شاملة.', priority: 7 },
    ],
};
