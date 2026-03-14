import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'مكافحة حشرات بالقطيف — واحة + 80-95% أعلى سعودي + بعوض Aedes/Culex + سبخة + أرامكو (2026)',
        description: 'مكافحة حشرات القطيف. 80-95% = أعلى رطوبة سعودية. واحة القطيف = بعوض + ذباب + نخيل. سبخة. أرامكو. Larvicide + Gel + IGR.',
        h1: 'مكافحة حشرات بالقطيف — واحة + 80-95% + بعوض + سبخة',
        keywords: ['مكافحة حشرات بالقطيف', 'مكافحة حشرات القطيف', 'شركة مكافحة حشرات بالقطيف'],
    },
    content: {
        introduction: 'القطيف = أعلى رطوبة سعودية (80-95%). 5 مصادر: (1) واحة القطيف: أكبر واحة شرقية = نخيل + مياه سطحية + مستنقعات = بعوض Aedes + Culex (حُمى الضنك). BTI + مصائد CO₂. تاروت/صفوى/العوامية = أكثر. (2) منسوب مياه 0.5-2م: رطوبة تربة دائمة = صراصير أمريكية + نمل أبيض. (3) سبخة: أملاح = حشرات ملحية. (4) نخيل واحة: Dubas + RPW + ذباب فاكهة. (5) 80-95% = تكاثر × 3 + Residual 2-4 أيام فقط (أسوأ من ينبع!). IGR + جلسة كل 10-14 يوم.',
        shortAnswer: 'على عكس [رش عام]، يعتمد بروتوكولنا على [BTI واحة + Gel صراصير + فيرومون RPW + IGR 80-95%]. ففي [أعلى رطوبة + واحة + سبخة]، الرش يتحلل 2-4 أيام.',
        heroSubtitle: '80-95% = أعلى رطوبة سعودية + واحة + سبخة + نمل + بعوض',
    },
    pricing: [
        { type: 'مكافحة شاملة — شقة', unit: 'شقة', minPrice: 160, maxPrice: 340, time: '2-3 ساعات' },
        { type: 'مكافحة واحة — فيلا + حديقة', unit: 'فيلا', minPrice: 450, maxPrice: 1000, time: '4-6 ساعات' },
        { type: 'عقد 10-يومي', unit: 'سنة', minPrice: 1000, maxPrice: 2200, time: '36 زيارة' },
    ],
    faq: [
        { question: 'Residual 2-4 أيام؟', answer: '80-95% = أسوأ سعودي. ينبع 70-90%: 3-5 أيام. القطيف أسوأ.' },
        { question: 'منسوب مياه 0.5م؟', answer: 'واحة = مياه قريبة جداً. رطوبة تربة دائمة = حشرات تحت الأساس.' },
        { question: 'بعوض واحة؟', answer: 'مستنقعات + مياه سطحية. Aedes = حُمى الضنك. BTI إلزامي.' },
        { question: 'هل المبيدات آمنة على الأطفال والحيوانات؟', answer: 'مبيدات مسجلة في نظام غد — SFDA. إخلاء 2-4 ساعات بعد الرش. طيور وأسماك: أبِلغ الشركة مسبقاً لاستخدام مواد أخف. الأسطح آمنة بعد الجفاف (1-2 ساعة).' },
        { question: 'كم يدوم مفعول الرش؟', answer: 'رش وقائي: 30-45 يوم. رش علاجي (إصابة نشطة): يحتاج 2-3 جلسات بفاصل 7-14 يوم. عقد ربع سنوي = أفضل حماية.' },
    ],
    expertTips: [
        'Residual كل 10-14 يوم — أقصر دورة سعودية.',
        'BTI واحة — مستنقعات.',
        'Dehumidifier 40% داخلي — يُقلل تكاثر 30-40%.',
        'فيرومون RPW — نخيل واحة.',
        'عقد ربع سنوي أوفر 40% من جلسات منفصلة — ويمنع عودة الحشرات بعد 30-45 يوم.',
    ],
    warnings: [
        'Residual 80-95% = 2-4 أيام — أقصر سعودي!',
        'منسوب 0.5م = حشرات دائمة.',
        'بعوض Aedes = حُمى الضنك.',
    ],
    trustAnchors: [{ ...GOV.BALADI, role: 'ترخيص' }, { ...GOV.WEQAA, role: 'مبيدات' },
        { entity: AMANA.SHARQIA.entity, url: AMANA.SHARQIA.url, role: 'اشتراطات أمانة الشرقية' },
    ],
        expertReviewer: EXPERTS.ALKHODAIRY,
    expertCitations: [{ expert: EXPERTS.ALKHODAIRY.name, quote: 'القطيف: 80-95% = أعلى سعودي. Residual 2-4 أيام. واحة = بعوض دائم. 10-14 يوم إلزامي.', source: 'أبحاث حشرات — الشرقية' }],
    saudiRegulations: [REGULATIONS.GHAD_SYSTEM],
    verificationBadges: [{ badge: '✔️ مرخصة', authority: 'بلدي + وقاء', icon: 'shield-check' }],
    equipment: [{ name: 'BTI', use: 'بعوض واحة' }, { name: 'Gel Bait', use: 'صراصير' }, { name: 'IGR', use: '80-95%' }, { name: 'فيرومون', use: 'RPW' }],
    hiddenObjections: [{ fear: 'رش شهري.', solution: '80-95% = 2-4 أيام.' }],
    consumerEducation: [{ myth: 'مثل الدمام.', truth: 'واحة + سبخة + 80-95%.' },
        { myth: 'الحشرات تدل على قلة نظافة.', truth: 'الحشرات تبحث عن ماء ودفء وليس قذارة. أنظف بيت يجذب حشرات إذا فيه رطوبة أو شقوق.' },
    ],
    relatedServices: [{ slug: 'bedbugs-control', context: 'بق', priority: 1 }, { slug: 'termite-control', context: 'نمل', priority: 2 }, { slug: 'tanks-cleaning', context: 'خزانات', priority: 3 },
        { slug: 'pesticide-spraying', context: 'خدمة مكملة — باقة شاملة.', priority: 4 },
        { slug: 'bird-control', context: 'خدمة مكملة — باقة شاملة.', priority: 5 },
        { slug: 'cleaning', context: 'خدمة مكملة — باقة شاملة.', priority: 6 },
        { slug: 'sewage-unblocking', context: 'خدمة مكملة — باقة شاملة.', priority: 7 },
    ],
};
