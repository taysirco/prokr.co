import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'مكافحة حشرات بالأحساء — أكبر واحة في العالم + 2.5M نخلة + عيون + زراعة + RPW (2026)',
        description: 'مكافحة حشرات الأحساء. أكبر واحة عالمياً. 2.5 مليون نخلة. عيون = بعوض. سوسة حمراء RPW. ذباب زراعي. فيرومون + BTI + IGR.',
        h1: 'مكافحة حشرات بالأحساء — واحة 2.5M نخلة + عيون + RPW',
        keywords: ['مكافحة حشرات بالأحساء', 'مكافحة حشرات الاحساء', 'شركة مكافحة حشرات بالأحساء'],
    },
    content: {
        introduction: 'الأحساء = أكبر واحة عالمياً (UNESCO). 5 مصادر فريدة لم تتكرر: (1) 2.5 مليون نخلة: سوسة حمراء RPW (أخطر آفة نخيل) + حفّار ساق + ذباب فاكهة + نيماتودا. فيرومون RPW + مصائد ضوئية. (2) عيون الأحساء (العيون الحارة + عين نجم): مياه سطحية دائمة = بعوض Culex/Aedes + ذباب. BTI أسبوعي. (3) زراعة (أرز + خضار): حشرات زراعية متنوعة. (4) رطوبة مُتذبذبة 30-70% (واحة 60-70% / صحراء 30-40%): Residual 5-8 أيام (أفضل من ساحلي!). (5) 48°م + 8°م = دورة حرارية واسعة (حشرات تختبئ شتاءً ← تنفجر صيفاً). IGR + فيرومون + BTI + مصائد.',
        shortAnswer: 'على عكس [رش عام]، يعتمد بروتوكولنا على [فيرومون RPW + BTI عيون + IGR واحة + مصائد زراعية]. ففي [أكبر واحة + 2.5M نخلة + عيون]، المكافحة زراعية مُتخصصة.',
        heroSubtitle: 'أكبر واحة عالمياً + 2.5M نخلة + عيون بعوض + RPW + زراعة',
    },
    pricing: [
        { type: 'مكافحة شاملة — شقة', unit: 'شقة', minPrice: 140, maxPrice: 310, time: '2-3 ساعات' },
        { type: 'واحة — فيلا + حديقة نخيل', unit: 'فيلا', minPrice: 400, maxPrice: 950, time: '4-6 ساعات' },
        { type: 'عقد 16-يومي', unit: 'سنة', minPrice: 850, maxPrice: 1800, time: '22 زيارة' },
    ],
    faq: [
        { question: 'Residual 5-8 أيام؟', answer: '30-70% مُتذبذب. أفضل من ساحلي (2-5 أيام) لكن أسوأ من صحراوي (12-15 يوم).' },
        { question: 'RPW؟', answer: 'سوسة حمراء. أخطر آفة نخيل. فيرومون مصائد + فحص جذوع.' },
        { question: 'عيون بعوض؟', answer: 'مياه سطحية دائمة. BTI أسبوعي. عين نجم/العيون الحارة = أكثر.' },
        { question: 'هل المبيدات آمنة على الأطفال والحيوانات؟', answer: 'مبيدات مسجلة في نظام غد — SFDA. إخلاء 2-4 ساعات بعد الرش. طيور وأسماك: أبِلغ الشركة مسبقاً لاستخدام مواد أخف. الأسطح آمنة بعد الجفاف (1-2 ساعة).' },
        { question: 'كم يدوم مفعول الرش؟', answer: 'رش وقائي: 30-45 يوم. رش علاجي (إصابة نشطة): يحتاج 2-3 جلسات بفاصل 7-14 يوم. عقد ربع سنوي = أفضل حماية.' },
    ],
    expertTips: [
        'فيرومون RPW — فحص كل نخلة.',
        'BTI عيون أسبوعي.',
        'IGR 30-70%.',
        'مصائد زراعية ذباب فاكهة.',
        'فحص شتوي — حشرات مختبئة.',
    ],
    warnings: [
        'RPW = تدمير نخلة كاملة.',
        'عيون = بعوض دائم.',
        'صيف = انفجار بعد سبات شتوي.',
    ],
    trustAnchors: [{ ...GOV.BALADI, role: 'ترخيص' }, { ...GOV.WEQAA, role: 'مبيدات' },
        { entity: AMANA.AHSA.entity, url: AMANA.AHSA.url, role: 'اشتراطات أمانة الأحساء' },
    ],
        expertReviewer: EXPERTS.ALKHODAIRY,
    expertCitations: [{ expert: EXPERTS.ALKHODAIRY.name, quote: 'الأحساء: أكبر واحة = أكبر تحدي زراعي. RPW + بعوض عيون + 2.5M نخلة. مكافحة زراعية مُتخصصة — ليست حضرية فقط.', source: 'أبحاث حشرات — واحات الشرقية' }],
    saudiRegulations: [REGULATIONS.GHAD_SYSTEM],
    verificationBadges: [{ badge: '✔️ مرخصة', authority: 'بلدي + وقاء', icon: 'shield-check' }],
    equipment: [{ name: 'فيرومون RPW', use: 'نخيل' }, { name: 'BTI', use: 'عيون' }, { name: 'IGR', use: '30-70%' }, { name: 'مصائد ضوئية', use: 'زراعة' }],
    hiddenObjections: [{ fear: 'رش شهري.', solution: '16-يومي + فيرومون + BTI.' }],
    counterNarratives: [{ myth: 'مثل القطيف.', truth: 'واحة زراعية — لا ساحلي. CaSO₄ — لا NaCl.' }],
    relatedServices: [{ slug: 'termite-control', context: 'نمل — نخيل', priority: 1 }, { slug: 'bedbugs-control', context: 'بق', priority: 2 }, { slug: 'tanks-cleaning', context: 'خزانات', priority: 3 }],
};
