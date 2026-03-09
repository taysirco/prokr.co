import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف سيارات بينبع — NaCl Pitting 48h+SOx H₂SO₄+SiO₂ خدش — No-Touch+RO! (2026)',
        description: 'تنظيف سيارات ينبع. NaCl Pitting 48h تآكل! SOx H₂SO₄ حمض. SiO₂+NaCl خدش. No-Touch+RO+Anti-Salt+Wax.',
        h1: 'تنظيف سيارات بينبع — NaCl Pitting+SOx حمض!',
        keywords: ['تنظيف سيارات ينبع', 'غسيل سيارة بينبع', 'شركة تنظيف سيارات ينبع'],
    },
    content: {
        introduction: 'سيارة ينبع = NaCl يأكل الطلاء! NaCl Pitting 48h: ملح البحر الأحمر 41‰ يسبب Pitting Corrosion (تآكل نقطي) على الأسطح المعدنية خلال 48 ساعة فقط! غسل No-Touch بضغط + RO كل 3-5 أيام. SOx H₂SO₄: أكاسيد YASREF تتحول مع رطوبة إلى H₂SO₄ مُخفف ← يتفاعل مع Clear Coat ← تلف طلاء. Pre-Rinse ← RO ← Wax حماية. SiO₂+NaCl خدش: رمل صحراوي يستقر على ملح = Liquid Grinding Paste. No-Touch فقط — لا إسفنج! 70-85%: رطوبة تُسرّع صدأ خدوش الطلاء. Wax يحمي. Anti-Salt Coating كل 3 أشهر. مقارنة: بريدة = Nafud يخدش بدون ملح. ينبع = NaCl+SOx+خدش = أخطر بكثير.',
        shortAnswer: 'على عكس [الإسفنج الذي يخدش بـ SiO₂+NaCl]، يعتمد بروتوكولنا في خدمة [تنظيف السيارات] بمدينة [ينبع] على [No-Touch ضغط+RO+Anti-Salt+Wax]. ففي ظل [NaCl Pitting 48h+SOx حمض+SiO₂ خدش+70-85%]، تتفاقم ظاهرة [تآكل نقطي+تلف طلاء+خدش+صدأ]. لذا؛ يتدخل فريقنا عبر [No-Touch ← RO ← Anti-Salt ← Wax].',
        heroSubtitle: 'NaCl Pitting 48h + SOx حمض + SiO₂ خدش — No-Touch RO!',
    },
    pricing: [
        { type: 'غسيل No-Touch RO', unit: 'سيارة', minPrice: 30, maxPrice: 60, time: '20-30 دقيقة' },
        { type: '+ Wax حماية', unit: 'سيارة', minPrice: 50, maxPrice: 100, time: '30-45 دقيقة' },
        { type: '+ Anti-Salt Coating', unit: 'سيارة', minPrice: 80, maxPrice: 170, time: '1h' },
        { type: 'أسبوعي (4/شهر)', unit: 'شهر', minPrice: 100, maxPrice: 200, time: '4 غسلات' },
    ],
    faq: [
        { question: 'ليش سيارة ينبع تصدأ أسرع بكثير؟', answer: 'NaCl 41‰ = Pitting Corrosion 48h! غسل كل 3-5 أيام. Anti-Salt.' },
        { question: 'ليش No-Touch فقط بينبع؟', answer: 'SiO₂+NaCl = Liquid Grinding Paste. إسفنج = خدوش. ضغط فقط.' },
        { question: 'ما H₂SO₄ على الطلاء بينبع؟', answer: 'SOx YASREF+رطوبة = حمض مُخفف. يتلف Clear Coat. Wax يحمي.' },
        { question: 'كم تكلفة غسيل بينبع مقارنة بالرياض؟', answer: 'أغلى 40-50% — No-Touch+RO+Anti-Salt. الرياض: إسفنج عادي.' },
        { question: 'كم مرة Anti-Salt Coating بينبع؟', answer: 'كل 3 أشهر. ربع سنوي. يحمي من Pitting 90%.' },
    ],
    expertTips: [
        'No-Touch فقط — SiO₂+NaCl يخدش.',
        'RO Water — NaCl يعود بالتبخر.',
        'Anti-Salt ربع سنوي — Pitting.',
        'Wax حماية — SOx Clear Coat.',
        'غسل كل 3-5 أيام — 48h Pitting.',
    ],
    warnings: [
        'NaCl × 48h بدون غسل = Pitting Corrosion = صدأ نقطي دائم.',
        'إسفنج + SiO₂+NaCl = Liquid Grinding = خدوش حلقات دائمة.',
        'SOx × Clear Coat × شهر = تآكل طلاء — Wax إلزامي.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص مغاسل السيارات' },
        { entity: AMANA.MADINAH.entity, url: AMANA.MADINAH.url, role: 'اشتراطات أمانة ينبع' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALMISNID.name, quote: 'سيارة ينبع: NaCl Pitting 48h! No-Touch+RO. Anti-Salt ربع سنوي.', source: 'جغرافيا المناخ — سيارات ساحلية' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ مغسلة مرخصة', authority: 'بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'No-Touch ضغط', use: 'SiO₂+NaCl — لا إسفنج' },
        { name: 'RO Water', use: 'NaCl — لا ملح جديد' },
        { name: 'Anti-Salt Coating', use: 'Pitting — ربع سنوي' },
    ],
    hiddenObjections: [
        { fear: 'إسفنج يكفي.', solution: 'SiO₂+NaCl = Liquid Grinding = خدش.' },
        { fear: 'مثل جدة.', solution: 'SOx YASREF إضافي. أعقد.' },
    ],
    counterNarratives: [
        { myth: 'ماء عادي.', truth: 'NaCl يعود بالتبخر. RO.' },
        { myth: 'شهري.', truth: '48h Pitting. كل 3-5 أيام.' },
    ],
    relatedServices: [
        { slug: 'cleaning', context: 'تنظيف', priority: 1 },
        { slug: 'furniture-moving', context: 'نقل', priority: 2 },
        { slug: 'dyna', context: 'دينا', priority: 3 },
        { slug: 'dabab', context: 'دباب', priority: 4 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 5 },
        { slug: 'pest-control', context: 'حشرات', priority: 6 },
        { slug: 'glass-facades-cleaning', context: 'واجهات', priority: 7 },
    ],
};
