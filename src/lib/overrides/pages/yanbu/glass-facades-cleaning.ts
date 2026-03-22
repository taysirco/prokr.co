import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../gov-references';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف واجهات زجاجية بينبع — NaCl+SOx = Salt-SOx Etching+SiO₂ خدش — Marine Sealer! (2026)',
        description: 'تنظيف واجهات زجاجية ينبع. NaCl+SOx = Salt-SOx Etching! SiO₂ خدش. Marine Sealer+RO+Pre-Rinse.',
        h1: 'تنظيف واجهات زجاجية بينبع — Salt-SOx Etching!',
        keywords: ['تنظيف واجهات زجاجية ينبع', 'تنظيف واجهات بينبع', 'شركة تنظيف واجهات ينبع'],
    },
    content: {
        introduction: 'واجهات ينبع = NaCl+SOx يأكل الزجاج! Salt-SOx Etching: NaCl+SOx+رطوبة 70-85% = تفاعل كيميائي يُنتج طبقة حمضية-ملحية تأكل سطح الزجاج تدريجياً = Etching. Marine Sealer (Hydrophobic Coating) يحمي. SiO₂+NaCl = Liquid Grinding: رمل صحراوي يستقر على ملح = ورق صنفرة سائل! لو مُسح مباشرة = خدوش دائمة. Pre-Rinse ضغط إلزامي. RO Water: ماء صنبور يترك NaCl ← يعود. RO نقي. 70-85%: رطوبة تُبقي الملح رطباً = أسوأ. لكن: لا مطر = وقت أكثر للتنظيف. مقارنة: بريدة = Nafud+CaCO₃ بدون حمض. ينبع = ملح+حمض+Etching = أخطر.',
        shortAnswer: 'على عكس [المسح بماء صنبور]، يعتمد بروتوكولنا في خدمة [تنظيف الواجهات] بمدينة [ينبع] على [Pre-Rinse+RO+Marine Sealer]. ففي ظل [NaCl+SOx Etching+SiO₂ Liquid Grinding+70-85%]، تتفاقم ظاهرة [حفر زجاج+خدش+رطوبة]. لذا؛ يتدخل فريقنا عبر [Pre-Rinse ← RO ← Clean ← Marine Sealer].',
        heroSubtitle: 'NaCl+SOx = Salt-SOx Etching + SiO₂ خدش — Marine Sealer!',
    },
    pricing: [
        { type: 'فيلا (واجهة)', unit: 'م²', minPrice: 8, maxPrice: 18, time: '2-4h' },
        { type: 'تجاري (برج)', unit: 'م²', minPrice: 12, maxPrice: 25, time: 'حسب الارتفاع' },
        { type: '+ Marine Sealer', unit: 'م²', minPrice: 15, maxPrice: 30, time: '+ يوم' },
        { type: 'أسبوعي (4/شهر)', unit: 'شهر', minPrice: 350, maxPrice: 700, time: '4 زيارات' },
    ],
    faq: [
        { question: 'ما Salt-SOx Etching بينبع؟', answer: 'NaCl+SOx+رطوبة = حمض يأكل سطح الزجاج. Marine Sealer يحمي.' },
        { question: 'ليش واجهات ينبع تُخدش بسهولة؟', answer: 'SiO₂+NaCl = Liquid Grinding Paste. Pre-Rinse ضغط أولاً = لا خدش.' },
        { question: 'كم تكلفة واجهات بينبع مقابل بريدة؟', answer: 'أغلى 50-60% — Marine Sealer+حمض. بريدة: كلس+Nafud فقط.' },
        { question: 'هل Marine Sealer ضروري بينبع؟', answer: 'إلزامي! بدونه = Etching يأكل زجاج. يدوم 6-12 شهر.' },
        { question: 'كم مرة تنظيف واجهات بينبع؟', answer: 'أسبوعي! NaCl+SOx يومي. شهري = Etching.' },
    ],
    expertTips: [
        'Pre-Rinse — SiO₂+NaCl Liquid Grinding!',
        'RO Water — NaCl يعود.',
        'Marine Sealer — Salt-SOx Etching.',
        'أسبوعي — NaCl+SOx يومي.',
        'لا مسح مباشر — Pre-Rinse أولاً!',
    ],
    warnings: [
        'مسح بدون Pre-Rinse = SiO₂+NaCl = خدوش دائمة.',
        'NaCl+SOx × 3 أشهر بدون Sealer = Etching = زجاج تالف.',
        'ماء صنبور = NaCl يعود بالتبخر — RO إلزامي.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص شركات التنظيف' },
        { entity: AMANA.MADINAH.entity, url: AMANA.MADINAH.url, role: 'اشتراطات أمانة ينبع' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALMISNID.name, quote: 'واجهات ينبع: Salt-SOx Etching+SiO₂ Liquid Grinding. Marine Sealer إلزامي.', source: 'جغرافيا المناخ — واجهات ساحلية' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ تنظيف واجهات مرخص', authority: 'بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'Pre-Rinse ضغط', use: 'SiO₂+NaCl — قبل المسح' },
        { name: 'RO Water', use: 'NaCl — لا ملح جديد' },
        { name: 'Marine Sealer', use: 'Salt-SOx Etching — حماية' },
    ],
    commonConcerns: [
        { concern: 'ماء وقماش.', solution: 'SiO₂+NaCl = Liquid Grinding = خدش.' },
        { concern: 'مثل جدة.', solution: 'SOx YASREF = حمض إضافي. Etching.' },
    ],
    consumerEducation: [
        { myth: 'شهري.', truth: 'NaCl+SOx يومي = أسبوعي.' },
        { myth: 'ماء عادي.', truth: 'NaCl يعود. RO.' },
    ],
    relatedServices: [
        { slug: 'cleaning', context: 'تنظيف', priority: 1 },
        { slug: 'marble-polishing', context: 'رخام', priority: 2 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 3 },
        { slug: 'bird-control', context: 'طيور', priority: 4 },
        { slug: 'roof-insulation', context: 'أسطح', priority: 5 },
        { slug: 'water-leak-detection', context: 'تسرب', priority: 6 },
        { slug: 'pest-control', context: 'حشرات', priority: 7 },
    ],
};
