import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../gov-references';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف بالبخار بينبع — NaCl ملح+SOx حمض+70-85% عفن بعد البخار — Anti-Fungal+RO! (2026)',
        description: 'تنظيف بالبخار ينبع. NaCl ملح يعود! SOx H₂SO₄. 70-85% عفن بعد البخار 6-8h تجفيف. Anti-Fungal+RO+Dehumidifier.',
        h1: 'تنظيف بالبخار بينبع — عفن بعد البخار!',
        keywords: ['تنظيف بالبخار ينبع', 'تنظيف بخار بينبع', 'شركة تنظيف بالبخار ينبع'],
    },
    content: {
        introduction: 'بخار ينبع = رطوبة البخار + رطوبة البحر = عفن! RO Water جهاز: ماء صنبور ينبع محلى (TDS<150) + NaCl = يترسب داخل جهاز البخار ← يتكلّس + يترك ملح. RO إلزامي. NaCl يعود: بخار يُذيب NaCl على السطح ← يتبخر ← NaCl يعود. RO الأصل. SOx H₂SO₄: بخار يُحرّك الطبقة الحمضية ← ينتشر. Pre-Rinse أولاً ← ثم بخار. 70-85% عفن بعد البخار: أخطر مشكلة! بخار يُضيف رطوبة ← 70-85% + بخار = تجفيف 6-8h! عفن بعد البخار لو لا Dehumidifier! Anti-Fungal إلزامي. مقارنة: بريدة = تجفيف 10-15 دقيقة+لا عفن+RO كلس. ينبع = 6-8h+عفن+Anti-Fungal = أعقد.',
        shortAnswer: 'على عكس [البخار بماء صنبور بدون Dehumidifier]، يعتمد بروتوكولنا في خدمة [التنظيف بالبخار] بمدينة [ينبع] على [RO Water جهاز+Pre-Rinse+Anti-Fungal+Dehumidifier]. ففي ظل [NaCl يعود+SOx حمض+70-85% عفن بعد+تجفيف 6-8h]، تتفاقم ظاهرة [ملح يعود+حمض+عفن بعد]. لذا؛ يتدخل فريقنا عبر [Pre-Rinse ← RO بخار ← Anti-Fungal ← Dehumidifier] — 6-8h!',
        heroSubtitle: '70-85% + بخار = عفن بعد! Dehumidifier+Anti-Fungal إلزامي!',
    },
    pricing: [
        { type: 'كنب (طقم 5)', unit: 'طقم', minPrice: 150, maxPrice: 310, time: '1-2h + 6-8h تجفيف' },
        { type: 'سجاد (م²)', unit: 'م²', minPrice: 8, maxPrice: 18, time: '+ تجفيف' },
        { type: 'مطبخ + حمام', unit: 'خدمة', minPrice: 180, maxPrice: 370, time: '2-3h' },
        { type: 'شامل (شقة)', unit: 'شقة', minPrice: 300, maxPrice: 620, time: '4-6h + تجفيف' },
    ],
    faq: [
        { question: 'ليش عفن بعد البخار بينبع؟', answer: '70-85% + رطوبة بخار = تجفيف 6-8h! بدون Dehumidifier = عفن.' },
        { question: 'ليش RO لجهاز البخار بينبع؟', answer: 'ماء محلى+NaCl يترسب داخل الجهاز = تكلّس+ملح. RO إلزامي.' },
        { question: 'كم تجفيف بخار بينبع؟', answer: '6-8 ساعات! بريدة: 10-15 دقيقة. Dehumidifier يُقلّل لـ 3-4h.' },
        { question: 'هل بخار يُذيب NaCl بينبع؟', answer: 'نعم ← يتبخر ← NaCl يعود. Pre-Rinse RO أولاً.' },
        { question: 'كم تكلفة بخار بينبع مقارنة ببريدة؟', answer: 'أغلى 30-40% — Anti-Fungal+Dehumidifier+6-8h.' },
    ],
    expertTips: [
        'RO جهاز — NaCl+تحلية.',
        'Pre-Rinse — NaCl+SOx قبل بخار.',
        'Anti-Fungal — 70-85% عفن بعد.',
        'Dehumidifier — 6-8h تجفيف.',
        'لا بخار بدون Dehumidifier — عفن!',
    ],
    warnings: [
        '70-85% + بخار بدون Dehumidifier = عفن أسود ← صحة YMYL.',
        'ماء صنبور بجهاز البخار = تكلّس+ملح ← جهاز يتلف.',
        'NaCl + بخار = يعود بالتبخر — Pre-Rinse RO أولاً.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص شركات التنظيف' },
        { entity: AMANA.MADINAH.entity, url: AMANA.MADINAH.url, role: 'اشتراطات أمانة ينبع' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALMISNID.name, quote: 'بخار ينبع: 70-85%+بخار = عفن بعد! Dehumidifier إلزامي. RO.', source: 'جغرافيا المناخ — بخار ساحلي' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ تنظيف بخار مرخص', authority: 'بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'جهاز بخار RO', use: 'NaCl+تحلية — لا ملح' },
        { name: 'Anti-Fungal', use: '70-85% — عفن بعد بخار' },
        { name: 'Dehumidifier', use: '6-8h تجفيف — ساحلي' },
    ],
    commonConcerns: [
        { concern: 'بخار آمن.', solution: '70-85%+بخار = عفن بعد! Dehumidifier.' },
        { concern: 'مثل بريدة.', solution: '6-8h vs 15 دقيقة. مختلف.' },
    ],
    consumerEducation: [
        { myth: 'بخار يُجفف.', truth: '70-85% = 6-8h تجفيف.' },
        { myth: 'ماء عادي.', truth: 'NaCl+تحلية = RO.' },
    ],
    relatedServices: [
        { slug: 'cleaning', context: 'تنظيف', priority: 1 },
        { slug: 'sofa-cleaning', context: 'كنب', priority: 2 },
        { slug: 'carpet-cleaning', context: 'سجاد', priority: 3 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 4 },
        { slug: 'marble-polishing', context: 'رخام', priority: 5 },
        { slug: 'oven-cleaning', context: 'أفران', priority: 6 },
        { slug: 'pest-control', context: 'حشرات', priority: 7 },
    ],
};
