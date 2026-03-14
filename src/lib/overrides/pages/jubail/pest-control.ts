import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'مكافحة حشرات بالجبيل — سكن عمال 200K+ نقل + 70-85% تكاثر + إضاءة صناعية + كيماوي (2026)',
        description: 'مكافحة حشرات الجبيل. سكن عمال صناعي = بق + صراصير مُتنقّلة. 70-85% تكاثر. إضاءة صناعية = حشرات طائرة. كيماوي يجذب. Gel + IGR + LED + فحص.',
        h1: 'مكافحة حشرات بالجبيل — سكن عمال + تكاثر + إضاءة + كيماوي',
        keywords: ['مكافحة حشرات بالجبيل', 'مكافحة حشرات الجبيل', 'شركة مكافحة حشرات بالجبيل'],
    },
    content: {
        introduction: 'الجبيل = أكبر مدينة صناعية في الشرق الأوسط. 4 مصادر: (1) سكن عمال صناعي 200K+: عمالة مُتنقّلة SABIC/Aramco = بق فراش + صراصير تنتقل مع الأمتعة. فحص دوري سكن عمال. (2) 70-85% = تكاثر × 2 + Residual 4-6 أيام. (3) إضاءة صناعية ليلية 24/7: مصانع SABIC/مصافي = جذب حشرات طائرة (عث + خنافس + ذباب) بأعداد ضخمة. LED أصفر + حاجز ضوئي. الفناتير/النخيل (قريبة المصانع) = أكثر. (4) انبعاثات كيماوية: SOₓ/H₂S = بعض الحشرات تتجنب + بعضها تتكيّف (صراصير). تفاعل كيماوي مع مبيدات = يُضعفها. Gel Bait > بخاخ في الجبيل الصناعية.',
        shortAnswer: 'على عكس [رش عام]، يعتمد بروتوكولنا على [Gel + LED + IGR + فحص سكن]. ففي [صناعية + 70-85% + سكن 200K]، الرش يتحلل 4-6 أيام + يتفاعل كيماوياً.',
        heroSubtitle: 'سكن عمال 200K نقل + 70-85% + إضاءة 24/7 + كيماوي يُضعف مبيدات',
    },
    pricing: [
        { type: 'مكافحة شقة', unit: 'شقة', minPrice: 150, maxPrice: 320, time: '2-3 ساعات' },
        { type: 'سكن عمال — وحدة', unit: 'وحدة', minPrice: 80, maxPrice: 160, time: '1-2 ساعة' },
        { type: 'عقد 14-يومي', unit: 'سنة', minPrice: 900, maxPrice: 2000, time: '26 زيارة' },
    ],
    faq: [
        { question: 'كيماوي يُضعف مبيدات؟', answer: 'SOₓ/H₂S يتفاعل = يُحلل بعض المركبات. Gel مُقاوم > بخاخ.' },
        { question: 'سكن عمال؟', answer: '200K+ عامل مُتنقّل. فحص دوري + Gel + حرارة.' },
        { question: 'إضاءة 24/7؟', answer: 'مصانع لا تتوقف. LED أصفر يقلل الجذب 70%.' },
        { question: 'هل المبيدات آمنة على الأطفال والحيوانات؟', answer: 'مبيدات مسجلة في نظام غد — SFDA. إخلاء 2-4 ساعات بعد الرش. طيور وأسماك: أبِلغ الشركة مسبقاً لاستخدام مواد أخف. الأسطح آمنة بعد الجفاف (1-2 ساعة).' },
        { question: 'كم يدوم مفعول الرش؟', answer: 'رش وقائي: 30-45 يوم. رش علاجي (إصابة نشطة): يحتاج 2-3 جلسات بفاصل 7-14 يوم. عقد ربع سنوي = أفضل حماية.' },
    ],
    expertTips: [
        'Gel Bait > بخاخ — كيماوي يُضعف بخاخ.',
        'LED أصفر — مصانع قطاع الفناتير.',
        'فحص سكن عمال دوري.',
        'Residual كل 14 يوم (70-85%).',
        'Dehumidifier 45% داخلي.',
    ],
    warnings: [
        'كيماوي + مبيد = تفاعل — Gel أفضل.',
        'سكن عمال = مصدر دائم.',
        'إضاءة 24/7 = حشرات طائرة.',
    ],
    trustAnchors: [{ ...GOV.BALADI, role: 'ترخيص' }, { ...GOV.WEQAA, role: 'مبيدات' },
        { entity: AMANA.SHARQIA.entity, url: AMANA.SHARQIA.url, role: 'اشتراطات أمانة الشرقية' },
    ],
        expertReviewer: EXPERTS.ALKHODAIRY,
    expertCitations: [{ expert: EXPERTS.ALKHODAIRY.name, quote: 'الجبيل: كيماوي يتفاعل مع مبيدات. Gel مُقاوم. سكن 200K = مصدر. إضاءة 24/7 = جذب.', source: 'أبحاث حشرات — المدن الصناعية' }],
    saudiRegulations: [REGULATIONS.GHAD_SYSTEM],
    verificationBadges: [{ badge: '✔️ مرخصة', authority: 'بلدي + وقاء', icon: 'shield-check' }],
    equipment: [{ name: 'Gel Bait مُقاوم', use: 'كيماوي' }, { name: 'LED أصفر', use: 'إضاءة' }, { name: 'IGR', use: '70-85%' }],
    commonConcerns: [{ concern: 'رش.', solution: 'كيماوي يُحلل.' }],
    consumerEducation: [{ myth: 'مثل القطيف.', truth: 'صناعي كيماوي — لا واحة.' },
        { myth: 'الحشرات تدل على قلة نظافة.', truth: 'الحشرات تبحث عن ماء ودفء وليس قذارة. أنظف بيت يجذب حشرات إذا فيه رطوبة أو شقوق.' },
    ],
    relatedServices: [{ slug: 'bedbugs-control', context: 'بق — سكن عمال', priority: 1 }, { slug: 'termite-control', context: 'نمل', priority: 2 }, { slug: 'tanks-cleaning', context: 'خزانات', priority: 3 },
        { slug: 'pesticide-spraying', context: 'خدمة مكملة — باقة شاملة.', priority: 4 },
        { slug: 'bird-control', context: 'خدمة مكملة — باقة شاملة.', priority: 5 },
        { slug: 'cleaning', context: 'خدمة مكملة — باقة شاملة.', priority: 6 },
        { slug: 'sewage-unblocking', context: 'خدمة مكملة — باقة شاملة.', priority: 7 },
    ],
};
