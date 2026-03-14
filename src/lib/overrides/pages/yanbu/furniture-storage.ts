import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تخزين أثاث بينبع — NaCl صدأ+70-85% عفن خشب+SOx — VCI+Dehumidifier+Anti-Fungal! (2026)',
        description: 'تخزين أثاث ينبع. NaCl صدأ! 70-85% عفن خشب+أقمشة. SOx تآكل. VCI+Dehumidifier+Anti-Fungal.',
        h1: 'تخزين أثاث بينبع — صدأ+عفن+حمض!',
        keywords: ['تخزين أثاث ينبع', 'تخزين عفش بينبع', 'شركة تخزين أثاث ينبع'],
    },
    content: {
        introduction: 'تخزين بينبع = NaCl يصدئ+الرطوبة تُعفّن! NaCl صدأ: ملح بحري يدخل المستودع ← يتراكم على المعدن ← Pitting. VCI أكياس+مستودع مُحكم. 70-85% عفن: أعلى رطوبة = خشب يتعفّن+أقمشة تتعفّن خلال أسبوعين! Dehumidifier مُستمر+Anti-Fungal. SOx YASREF: أكاسيد تدخل المستودع ← H₂SO₄ يتآكل. مستودع صناعي مُفلتر. SiO₂: رمل يخدش. إحكام. مقارنة: بريدة = ΔT تشقق خشب+Nafud لكن 10-20% = لا عفن = أبسط. ينبع = صدأ+عفن+حمض = الأصعب.',
        shortAnswer: 'على عكس [المستودع العادي بدون Dehumidifier+VCI]، يعتمد بروتوكولنا في خدمة [التخزين] بمدينة [ينبع] على [VCI+Dehumidifier+Anti-Fungal+مستودع مُحكم]. ففي ظل [NaCl صدأ+70-85% عفن+SOx تآكل]، تتفاقم ظاهرة [Pitting+عفن+حمض]. لذا؛ يتدخل فريقنا عبر [VCI ← Dehumidifier ← Anti-Fungal ← إحكام].',
        heroSubtitle: 'NaCl صدأ + 70-85% عفن + SOx حمض — VCI+Dehumidifier!',
    },
    pricing: [
        { type: 'مستودع صغير (10 م³)', unit: 'شهر', minPrice: 250, maxPrice: 520, time: 'شهري' },
        { type: 'مستودع كبير (30 م³)', unit: 'شهر', minPrice: 500, maxPrice: 1000, time: 'شهري' },
        { type: '+ VCI+Anti-Fungal', unit: 'إضافي', minPrice: 100, maxPrice: 200, time: 'معالجة' },
        { type: 'سنوي', unit: 'سنة', minPrice: 2500, maxPrice: 5000, time: 'سنوي' },
    ],
    faq: [
        { question: 'ليش تخزين ينبع أصعب؟', answer: 'NaCl صدأ+70-85% عفن+SOx حمض. ثلاثي. بريدة: ΔT فقط.' },
        { question: 'هل الخشب يتعفّن بالمستودع بينبع؟', answer: '70-85% = عفن أسبوعين. Dehumidifier+Anti-Fungal مُستمر.' },
        { question: 'كم تكلفة تخزين بينبع مقابل بريدة؟', answer: 'أغلى 40-50% — Dehumidifier+VCI+Anti-Fungal.' },
        { question: 'ما VCI في التخزين بينبع؟', answer: 'أكياس تحمي المعدن من NaCl طوال فترة التخزين.' },
        { question: 'هل SOx يأثر على المستودع بينبع؟', answer: 'YASREF أكاسيد = حمض. مستودع مُفلتر+مُحكم.' },
    ],
    expertTips: [
        'Dehumidifier مُستمر — 70-85%.',
        'VCI — كل قطعة معدنية.',
        'Anti-Fungal — خشب+أقمشة.',
        'مستودع مُحكم — NaCl+SOx.',
        'فحص شهري — رطوبة+عفن.',
    ],
    warnings: [
        'مستودع عادي + 70-85% = عفن كل الأثاث — Dehumidifier YMYL.',
        'NaCl + تخزين طويل = صدأ شامل — VCI إلزامي.',
        'SOx + مستودع مفتوح = حمض يتآكل — مُحكم+مُفلتر.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص مستودعات التخزين' },
        { entity: AMANA.MADINAH.entity, url: AMANA.MADINAH.url, role: 'اشتراطات أمانة ينبع' },
    ],
    expertReviewer: EXPERTS.ALMOHAIMED,
    expertCitations: [
        { expert: EXPERTS.ALMOHAIMED.name, quote: 'تخزين ينبع: NaCl+70-85%+SOx. VCI+Dehumidifier+Anti-Fungal.', source: 'نصائح هندسية — تخزين ساحلي' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ تخزين مرخص', authority: 'بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'Dehumidifier صناعي', use: '70-85% — مُستمر' },
        { name: 'VCI Bags', use: 'NaCl — حماية معدن' },
        { name: 'Anti-Fungal', use: '70-85% — خشب+أقمشة' },
    ],
    hiddenObjections: [
        { fear: 'مستودع عادي.', solution: '70-85% = عفن. Dehumidifier.' },
        { fear: 'مثل بريدة.', solution: 'صدأ+عفن+حمض ≠ ΔT.' },
    ],
    consumerEducation: [
        { myth: 'أي مستودع.', truth: 'ساحلي = Dehumidifier+VCI.' },
        { myth: 'فحص سنوي.', truth: '70-85% = شهري.' },
    ],
    relatedServices: [
        { slug: 'furniture-moving', context: 'نقل', priority: 1 },
        { slug: 'dabab', context: 'دباب', priority: 2 },
        { slug: 'dyna', context: 'دينا', priority: 3 },
        { slug: 'cleaning', context: 'تنظيف', priority: 4 },
        { slug: 'furniture-cleaning', context: 'أثاث', priority: 5 },
        { slug: 'pest-control', context: 'حشرات', priority: 6 },
        { slug: 'termite-control', context: 'نمل أبيض', priority: 7 },
    ],
};
