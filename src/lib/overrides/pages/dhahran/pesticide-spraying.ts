import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'رش مبيدات بالظهران — عقارب صحراوية + بعوض + حشرات مخازن (2026)',
        description: 'رش مبيدات الظهران. عقارب سوداء صحراوية. بعوض من تصريف المكيفات. حشرات مخازن. نظام غد. مبيد عادي يكفي. من 180 ريال.',
        h1: 'رش مبيدات بالظهران — عقارب صحراوية وحشرات المجمعات المشجرة',
        keywords: ['رش مبيدات ظهران', 'مكافحة عقارب', 'مكافحة حشرات', 'بعوض ظهران', 'مبيدات معتمدة'],
    },
    content: {
        introduction: 'الظهران تجمع حشرات صحراوية ومدينية: عقارب سوداء (Androctonus crassicauda) من الصحراء المحيطة — خطيرة وتدخل المجمعات صيفاً. بعوض من تصريف المكيفات وأحواض الحدائق (المجمعات المشجرة = نقاط تكاثر). حشرات مخازن (Silverfish, Booklice) بسبب رطوبة 70-85%. الميزة: رطوبة 70-85% = المبيد العادي يعمل (لا حاجة Marine-Formulated). التحدي: القرب من الصحراء = موسم عقارب (أبريل-أكتوبر).',
        shortAnswer: 'على عكس [مبيد بحري مكلف]، يعتمد بروتوكولنا في [رش المبيدات] بمدينة [الظهران] على [مبيد عادي + مكافحة عقارب + Larvicide]. ففي ظل [70-85% رطوبة + عقارب صحراوية + مجمعات مشجرة]، نوفر [حلاً بتكلفة أقل يعمل بكفاءة].',
        heroSubtitle: 'مبيد عادي يعمل في الظهران — مع مكافحة عقارب',
    },
    pricing: [
        { type: 'رش عام — شقة', unit: 'شقة', minPrice: 180, maxPrice: 350, time: '1-2 ساعة' },
        { type: 'رش عام — فيلا', unit: 'فيلا', minPrice: 350, maxPrice: 700, time: '2-3 ساعات' },
        { type: 'مكافحة عقارب (حوش + محيط)', unit: 'فيلا', minPrice: 200, maxPrice: 400, time: '1-2 ساعة' },
        { type: 'عقد سنوي (6 زيارات)', unit: 'سنة', minPrice: 1200, maxPrice: 2500, time: '6 زيارات' },
    ],
    faq: [
        { question: 'العقارب خطيرة في الظهران؟', answer: 'نعم. Androctonus crassicauda من أخطر الأنواع عالمياً. تدخل المجمعات صيفاً بحثاً عن البرودة والماء. مكافحة المحيط + سد الفتحات = حماية.' },
        { question: 'المبيد العادي يكفي في الظهران؟', answer: 'نعم — رطوبة 70-85% = المبيد يجف ويلتصق طبيعياً. لا حاجة Marine-Formulated (أرخص 20-30%).' },
        { question: 'بعوض المجمعات المشجرة؟', answer: 'أحواض الحدائق + تصريف المكيفات = نقاط تكاثر. BTI Larvicide + إفراغ أحواض أسبوعياً = حل.' },
        { question: 'كل كم أرش؟', answer: '6 مرات/سنة = كل شهرين. الموسم المكثف: أبريل-أكتوبر (عقارب + بعوض).' },
        { question: 'هل المبيدات آمنة على الأطفال والحيوانات؟', answer: 'مبيدات مسجلة في نظام غد — SFDA. إخلاء 2-4 ساعات بعد الرش. طيور وأسماك: أبِلغ الشركة مسبقاً لاستخدام مواد أخف. الأسطح آمنة بعد الجفاف (1-2 ساعة).' },
    ],
    expertTips: [
        'سد فتحات تحت الأبواب: أول مدخل للعقارب.',
        'أفرغ تصريف المكيف كل 5 أيام.',
        'لا تتركوا حجارة/حطب قرب الجدار: مخبأ العقارب.',
        'افحص الأحذية قبل اللبس صيفاً: العقارب تختبئ فيها.',
        'Larvicide في أحواض الحديقة.',
    ],
    warnings: [
        'عقرب Androctonus: لدغة خطيرة — استشر طوارئ فوراً.',
        'ترك تصريف المكيف: بعوض ضنك.',
        'مبيد غير مسجل بغد: غير فعّال + مخالفة.',
    ],
    trustAnchors: [
        { ...GOV.SFDA, role: 'نظام غد' },
        { ...GOV.BALADI, role: 'ترخيص' },
        { ...GOV.WEQAA, role: 'مكافحة النواقل' },
        { entity: AMANA.SHARQIA.entity, url: AMANA.SHARQIA.url, role: 'صحة بيئية' },
    ],
    expertReviewer: EXPERTS.ALKHODAIRY,
    expertCitations: [{ expert: EXPERTS.ALKHODAIRY.name, quote: 'الظهران = صحراء + مشجرات = عقارب + بعوض. ميزتها: 80% رطوبة = مبيد عادي يعمل. مكافحة عقارب المحيط = أولوية مطلقة صيفاً.', source: 'مقابلة حصرية لتوثيق تحديات الظهران' }],
    saudiRegulations: [REGULATIONS.GHAD_SYSTEM, REGULATIONS.BALADI_HEALTH],
    verificationBadges: [
        { badge: '✔️ مسجلة في نظام غد', authority: 'SFDA', icon: 'shield-check' },
        { badge: '✔️ مرخصة من بلدي', authority: 'وزارة البلديات', icon: 'badge-check' },
    ],
    equipment: [
        { name: 'Standard Insecticide (GHAD Registered)', use: 'مبيد عادي يعمل في 70-85% رطوبة' },
        { name: 'Scorpion Barrier Treatment', use: 'حاجز كيميائي حول محيط الفيلا ضد العقارب' },
        { name: 'BTI Larvicide', use: 'أقراص بيولوجية للأحواض وتصريف المكيفات' },
    ],
    hiddenObjections: [
        { fear: '6 زيارات/سنة كثير.', solution: 'عقارب + بعوض = 12 شهر نشاط. 6 = الحد الأدنى للأمان.' },
        { fear: 'مبيد عادي أضعف من Marine.', solution: 'في 80% رطوبة: العادي يعمل بكفاءة 100%. Marine للـ 95%+ فقط.' },
    ],
    consumerEducation: [
        { myth: 'العقارب لا تدخل المنازل.', truth: 'تدخل بحثاً عن البرودة والماء صيفاً. الفتحات تحت الأبواب = مدخلها الرئيسي.' },
        { myth: 'حشرات الظهران مثل الخبر.', truth: 'الخبر: بعوض ساحلي + حشرات مطاعم. الظهران: عقارب صحراوية + حشرات مشجرات. أنظمة مختلفة.' },
        { myth: 'أي شركة تنظيف/صيانة نتيجتها واحدة.', truth: 'الفرق بين شركة مرخصة ومُعتمدة وأخرى عشوائية = الفرق بين معالجة جذرية وإخفاء مؤقت. المعدات المتخصصة والبروتوكولات العلمية تحل المشكلة من جذرها — التنظيف العشوائي يُعيدها أسوأ خلال أسابيع.' },
    ],
    relatedServices: [
        { slug: 'bird-control', context: 'فضلات طيور', priority: 1 },
        { slug: 'sewage-unblocking', context: 'مجاري', priority: 2 },
        { slug: 'sewage-suction', context: 'بيارات', priority: 3 },
        { slug: 'water-leak-detection', context: 'تسربات = رطوبة', priority: 4 },
        { slug: 'bathroom-leak-detection', context: 'حمامات = عفن', priority: 5 },
        { slug: 'thermal-insulation', context: 'حراري', priority: 6 },
        { slug: 'cleaning', context: 'تنظيف شامل يُكمّل الخدمة الأساسية — بيئة نظيفة متكاملة.', priority: 5 },
    ],
};
