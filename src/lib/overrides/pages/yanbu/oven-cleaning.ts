import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف أفران بينبع — NaCl+دهن=طبقة صلبة+SOx حمض+70-85% عفن — Degreaser+RO! (2026)',
        description: 'تنظيف أفران ينبع. NaCl+دهن=طبقة صلبة! SOx حمض. 70-85% عفن داخل. Degreaser+RO+Anti-Fungal.',
        h1: 'تنظيف أفران بينبع — ملح+دهن+عفن!',
        keywords: ['تنظيف أفران ينبع', 'تنظيف فرن بينبع', 'شركة تنظيف أفران ينبع'],
    },
    content: {
        introduction: 'فرن ينبع = NaCl يُصلّب الدهن! NaCl+دهن: ملح البحر يدخل المطبخ ← يمتزج مع الدهن المتراكم ← يُصلّب = طبقة ملحية-دهنية صلبة لا تُزال بمنظف عادي. Degreaser صناعي + RO. SOx H₂SO₄: حمض YASREF + دهن = طبقة حمضية-دهنية لزجة. Chemical Degreaser. 70-85% عفن: رطوبة + بقايا طعام = عفن داخل الفرن وخلف أسبوعين! Anti-Fungal. SiO₂+NaCl: رمل على ملح داخل الفرن = يخدش الإيناميل. Pre-Rinse. فرن ينبع أصعب من بريدة: بريدة = CaCO₃+دهن. ينبع = NaCl+SOx+دهن+عفن = أعقد.',
        shortAnswer: 'على عكس [المنظف العادي فوق NaCl+دهن]، يعتمد بروتوكولنا في خدمة [تنظيف الأفران] بمدينة [ينبع] على [Degreaser صناعي+RO+Anti-Fungal+Pre-Rinse]. ففي ظل [NaCl+دهن صلب+SOx حمض+70-85% عفن]، تتفاقم ظاهرة [طبقة صلبة+حمض+عفن]. لذا؛ يتدخل فنيونا عبر [Pre-Rinse ← Degreaser ← RO ← Anti-Fungal].',
        heroSubtitle: 'NaCl+دهن = طبقة صلبة + SOx + 70-85% عفن — Degreaser+RO!',
    },
    pricing: [
        { type: 'فرن منزلي', unit: 'فرن', minPrice: 60, maxPrice: 130, time: '30-60 دقيقة' },
        { type: 'فرن + Anti-Fungal', unit: 'فرن', minPrice: 80, maxPrice: 170, time: '1h' },
        { type: 'فرن تجاري', unit: 'فرن', minPrice: 150, maxPrice: 310, time: '2-3h' },
        { type: 'ربع سنوي (4 تنظيف)', unit: 'باقة', minPrice: 200, maxPrice: 420, time: '4 زيارات' },
    ],
    faq: [
        { question: 'ليش فرن ينبع أصعب تنظيف من بريدة؟', answer: 'NaCl+دهن=صلب. بريدة: CaCO₃+دهن. ينبع: +SOx+عفن.' },
        { question: 'ما الطبقة الصلبة داخل الفرن بينبع؟', answer: 'NaCl+دهن = كيمياء صلبة. Degreaser صناعي+RO.' },
        { question: 'هل الفرن يتعفّن بينبع؟', answer: '70-85%+بقايا = عفن أسبوعين. Anti-Fungal.' },
        { question: 'كم تكلفة فرن بينبع مقابل بريدة؟', answer: 'أغلى 20-25% — عفن+حمض. بريدة: Descaler+Degreaser.' },
        { question: 'ليش RO لتنظيف الفرن بينبع؟', answer: 'ماء صنبور = NaCl يعود ← دهن يتصلّب مرة أخرى. RO.' },
    ],
    expertTips: [
        'Degreaser صناعي — NaCl+دهن صلب.',
        'RO Rinse — NaCl لا يعود.',
        'Anti-Fungal — 70-85% عفن فرن.',
        'Pre-Rinse — SiO₂+NaCl إيناميل.',
        'ربع سنوي — ساحلي-صناعي.',
    ],
    warnings: [
        'NaCl+دهن × 3 أشهر = طبقة صلبة — Degreaser صناعي 300+.',
        '70-85%+بقايا = عفن داخل فرن ← صحة غذائية YMYL.',
        'SOx × فرن × حرارة = حمض مُركّز — Chemical Degreaser.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص شركات التنظيف' },
        { ...GOV.SFDA, role: 'سلامة غذائية' },
        { entity: AMANA.MADINAH.entity, url: AMANA.MADINAH.url, role: 'اشتراطات أمانة ينبع' },
    ],
    expertReviewer: EXPERTS.ALMOHAIMED,
    expertCitations: [
        { expert: EXPERTS.ALMOHAIMED.name, quote: 'فرن ينبع: NaCl+دهن=صلب. SOx حمض. عفن. Degreaser+RO.', source: 'نصائح هندسية — أفران ساحلية' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ تنظيف أفران مرخص', authority: 'بلدي + SFDA', icon: 'shield-check' }],
    equipment: [
        { name: 'Degreaser صناعي', use: 'NaCl+دهن — صلب' },
        { name: 'RO Water', use: 'NaCl — لا ملح يعود' },
        { name: 'Anti-Fungal', use: '70-85% — عفن فرن' },
    ],
    hiddenObjections: [
        { fear: 'منظف عادي.', solution: 'NaCl+دهن=صلب. Degreaser صناعي.' },
        { fear: 'مثل بريدة.', solution: 'ملح+حمض+عفن = أعقد.' },
    ],
    consumerEducation: [
        { myth: 'سنوي.', truth: 'ربع سنوي. ملح+دهن.' },
        { myth: 'ماء ساخن.', truth: 'NaCl يعود. RO.' },
    ],
    relatedServices: [
        { slug: 'restaurant-chimney-cleaning', context: 'مداخن', priority: 1 },
        { slug: 'cleaning', context: 'تنظيف', priority: 2 },
        { slug: 'steam-cleaning', context: 'بخار', priority: 3 },
        { slug: 'pest-control', context: 'حشرات', priority: 4 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 5 },
        { slug: 'marble-polishing', context: 'رخام', priority: 6 },
        { slug: 'apartments-cleaning', context: 'شقق', priority: 7 },
    ],
};
