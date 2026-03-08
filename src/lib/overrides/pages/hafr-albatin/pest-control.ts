import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'مكافحة حشرات بحفر الباطن — عقارب صفراء + ثعابين + وادي فيضان + KKMC عسكري + جراد (2026)',
        description: 'مكافحة حشرات حفر الباطن. عقارب صفراء أخطر سعودي. ثعابين. وادي فيضان. KKMC. جراد. 5-15% Residual 12-18 يوم أفضل سعودي.',
        h1: 'مكافحة حشرات بحفر الباطن — عقارب + ثعابين + وادي + KKMC',
        keywords: ['مكافحة حشرات بحفر الباطن', 'مكافحة حشرات حفر الباطن', 'شركة مكافحة حشرات بحفر الباطن'],
    },
    content: {
        introduction: 'حفر الباطن = أقصى شمال صحراوي. 5 تحديات فريدة لا تتكرر: (1) عقارب صفراء Leiurus quinquestriatus (أخطر عقرب سعودي — سم عصبي!): حدود العراق/الكويت = كثافة عالية. Delta Dust + ختم شقوق + UV Blacklight. بعد فيضان وادي = انتشار. (2) ثعابين (أفاعي قرناء + أم جنيب): صحراء مفتوحة. مصائد غراء + ختم + تنظيف بيئة. (3) وادي الباطن: فيضان شتوي = طرد عقارب وثعابين نحو المنازل + بعوض مؤقت. (4) KKMC عسكريين: سكن مُتنقّل = بق + صراصير. K9. (5) رياح شمالية Shamal: غبار عراقي PM10 = حشرات تختبئ داخلياً. 5-15% = Residual 12-18 يوم (أفضل سعودي!).',
        shortAnswer: 'على عكس [مدن ساحلية]، يتمتع بروتوكولنا بـ [Residual 12-18 يوم — أفضل سعودي]. لكن [عقارب أخطر + ثعابين + فيضان] يتطلب [مكافحة صحراوية شمالية مُتخصصة].',
        heroSubtitle: 'أخطر عقارب سعودية + ثعابين + وادي فيضان + KKMC + Residual 12-18 أفضل!',
    },
    pricing: [
        { type: 'شقة', unit: 'شقة', minPrice: 130, maxPrice: 280, time: '2-3 ساعات' },
        { type: 'KKMC — وحدة', unit: 'وحدة', minPrice: 90, maxPrice: 180, time: '1-2 ساعة' },
        { type: 'عقد شهري', unit: 'سنة', minPrice: 700, maxPrice: 1500, time: '12 زيارة' },
    ],
    faq: [
        { question: 'Residual 12-18؟', answer: '5-15% = أجف سعودي. أفضل Residual. شهري يكفي!' },
        { question: 'عقارب صفراء؟', answer: 'Leiurus = سم عصبي. أخطر سعودي. Delta Dust + UV + ختم.' },
        { question: 'فيضان وادي؟', answer: 'شتاء = طرد عقارب وثعابين. فحص فوري بعد مطر.' },
        { question: 'هل المبيدات آمنة على الأطفال والحيوانات؟', answer: 'مبيدات مسجلة في نظام غد — SFDA. إخلاء 2-4 ساعات بعد الرش. طيور وأسماك: أبِلغ الشركة مسبقاً لاستخدام مواد أخف. الأسطح آمنة بعد الجفاف (1-2 ساعة).' },
        { question: 'كم يدوم مفعول الرش؟', answer: 'رش وقائي: 30-45 يوم. رش علاجي (إصابة نشطة): يحتاج 2-3 جلسات بفاصل 7-14 يوم. عقد ربع سنوي = أفضل حماية.' },
    ],
    expertTips: [
        'Delta Dust عقارب — UV Blacklight.',
        'ختم ثعابين + مصائد غراء.',
        'فحص فوري بعد فيضان وادي.',
        'Residual شهري يكفي (12-18!).',
        'KKMC فحص K9 دوري.',
    ],
    warnings: [
        'عقارب صفراء = سم عصبي خطير!',
        'ثعابين = خطر حقيقي.',
        'فيضان = طوارئ حشرات.',
    ],
    trustAnchors: [{ ...GOV.BALADI, role: 'ترخيص' }, { ...GOV.WEQAA, role: 'مبيدات' },
        { entity: AMANA.HAFR.entity, url: AMANA.HAFR.url, role: 'اشتراطات أمانة حفر الباطن' },
    ],
        expertReviewer: EXPERTS.ALKHODAIRY,
    expertCitations: [{ expert: EXPERTS.ALKHODAIRY.name, quote: 'حفر الباطن: أخطر عقارب + أفضل Residual. صحراء شمالية مُتطرفة.', source: 'أبحاث حشرات — الشمالية' }],
    saudiRegulations: [REGULATIONS.GHAD_SYSTEM],
    verificationBadges: [{ badge: '✔️ مرخصة', authority: 'بلدي + وقاء', icon: 'shield-check' }],
    equipment: [{ name: 'Delta Dust', use: 'عقارب' }, { name: 'UV Blacklight', use: 'كشف' }, { name: 'مصائد غراء', use: 'ثعابين' }, { name: 'K9', use: 'KKMC' }],
    hiddenObjections: [{ fear: 'رش شهري.', solution: '12-18 يوم Residual!' }],
    counterNarratives: [{ myth: 'مثل الرياض.', truth: 'عقارب + ثعابين + فيضان. أكثر تطرفاً.' }],
    relatedServices: [{ slug: 'bedbugs-control', context: 'بق — KKMC', priority: 1 }, { slug: 'termite-control', context: 'نمل', priority: 2 }],
};
