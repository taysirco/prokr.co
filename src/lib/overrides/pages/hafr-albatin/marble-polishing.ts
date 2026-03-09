import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'جلي رخام بحفر الباطن — SiO₂ أكثف 7>3 Mohs + ΔT 54°م شقوق + UV أكسدة + لا عفن (2026)',
        description: 'جلي رخام حفر الباطن. SiO₂ أكثف 7>3 Mohs خدش حقيقي. ΔT 54°م شقوق Micro-Cracks. UV أكسدة. 10-15% لا عفن مسامي (ميزة!). جلي + Sealer + UV.',
        h1: 'جلي رخام بحفر الباطن — عواصف أكثف تخدش وحرارة تُشقق وUV يُؤكسد',
        keywords: ['جلي رخام حفر الباطن', 'تلميع رخام حفر الباطن', 'شركة جلي رخام حفر الباطن'],
    },
    content: {
        introduction: 'الرخام في حفر الباطن يتعرض لخدش أكثف + ΔT أقصى + ميزة. الأولى — SiO₂ أكثف 7>3 Mohs: أكثف عواصف = أكثف SiO₂ = أكثف خدش. SiO₂ 7 > رخام 3-5 = خدش حقيقي. + كهرباء ساكنة = يلتصق. HEPA ← Squeegee ← جلي. الثانية — ΔT 54°م Micro-Cracks: 52°م ← -2°م = أقصى Cycling = شعيرات في الرخام = SiO₂ يدخل. Sealer. الثالثة — UV قاري: أصفى سماء = UV يُؤكسد = بهتان أسرع. UV Sealer. الميزة — لا عفن مسامي!: 10-15% = لا Aspergillus في مسام. لا Anti-Fungal. أنظف مسام. توفير!',
        shortAnswer: 'على عكس [ملمّع سطحي] الذي لا يُعالج SiO₂ ولا ΔT، يعتمد بروتوكولنا في خدمة [جلي الرخام] بمدينة [حفر الباطن] على [HEPA ← جلي ← Sealer ← UV Sealer]. ففي ظل [SiO₂ أكثف + ΔT 54°م + UV]، تتفاقم ظاهرة [خدش + شعيرات + أكسدة]. لذا؛ يتدخل خبراؤنا عبر [بروتوكول رخام قاري].',
        heroSubtitle: 'SiO₂ أكثف خدش + ΔT 54°م شعيرات + UV أكسدة + لا عفن',
    },
    pricing: [
        { type: 'جلي + تلميع (10-30 م²)', unit: 'م²', minPrice: 22, maxPrice: 50, time: '1-3 ساعات' },
        { type: 'جلي + Sealer + UV', unit: 'م²', minPrice: 32, maxPrice: 60, time: '3-5 ساعات' },
        { type: 'فيلا كاملة (100+ م²)', unit: 'م²', minPrice: 18, maxPrice: 42, time: '6-12 ساعة' },
        { type: 'ربع سنوي', unit: 'سنة', minPrice: 480, maxPrice: 960, time: '4 زيارات' },
    ],
    faq: [
        { question: 'SiO₂ أكثف — أسوأ من الظهران؟', answer: 'خدش مماثل (7>3). لكن: أكثف كمية = أكثف خدش = أسرع تلف. بدون NaCl (ميزة!). خدش فقط — بلا إبهات.' },
        { question: 'ΔT 54°م — شعيرات حقيقية؟', answer: 'رخام يتمدد في 52°م ← ينكمش في -2°م = 54°م ΔT = Micro-Cracks/شعيرات. SiO₂ يدخل ← يتعمق الخدش. Sealer يسد.' },
        { question: 'لا عفن — ميزة كبيرة؟', answer: 'كبيرة! 10-15% = لا Aspergillus في مسام. لا Anti-Fungal. لا بقع بيولوجية. أنظف.' },
        { question: 'UV Sealer — ضروري؟', answer: 'أصفى سماء = UV كامل = يُؤكسد الرخام أسرع. UV Sealer = حماية.' },
        { question: 'تجفيف — في 10-15%؟', answer: 'ميزة! يجف فوراً. لا خطر عفن. أسرع جلي في المملكة.' },
    ],
    expertTips: [
        'HEPA شفط قبل جلي — SiO₂ + كهرباء ساكنة = يُخدش تحت آلة الجلي.',
        'Sealer بعد كل جلي — ΔT 54°م يفتح شعيرات.',
        'UV Sealer رخام خارجي — UV قاري أعلى.',
        'لا Anti-Fungal — 10-15% = توفير!',
        'تجفيف فوري — ميزة 10-15%.',
    ],
    warnings: [
        'SiO₂ أكثف + جلي بدون HEPA = خدوش تحت آلة الجلي.',
        'ΔT 54°م × سنوات = شعيرات عميقة = SiO₂ يتعمق = تلف إنشائي.',
        'UV + رخام خارجي = بهتان أسرع 30% من الرياض.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص شركات الجلي' },
        { entity: AMANA.HAFR.entity, url: AMANA.HAFR.url, role: 'اشتراطات المباني بحفر الباطن' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALMOHAIMED.name, quote: 'رخام حفر الباطن: SiO₂ أكثف + ΔT 54°م شعيرات + UV أكسدة. لا عفن (ميزة!). HEPA ← جلي ← Sealer ← UV Sealer.', source: 'نصائح هندسية — رخام قاري' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ جلي مرخص', authority: 'منصة بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'HEPA Vacuum', use: 'يحجز SiO₂ قبل الجلي' },
        { name: 'Diamond Pads 7-مراحل', use: 'جلي تدريجي' },
        { name: 'Sealer + UV Sealer', use: 'شعيرات + UV + خدش' },
    ],
    hiddenObjections: [
        { fear: 'لا عفن = سهل.', solution: 'SiO₂ أكثف + ΔT أقصى + UV. 3 تحديات ≠ سهل.' },
        { fear: 'ملمّع.', solution: 'فوق SiO₂ + شعيرات. سطحي.' },
    ],
    counterNarratives: [
        { myth: 'مثل الرياض.', truth: 'ΔT 54°م > 35°م. SiO₂ أكثف. UV أعلى.' },
        { myth: 'مرة.', truth: 'SiO₂ أكثف + ΔT شعيرات. ربع سنوي.' },
        { myth: 'لا NaCl = سهل.', truth: 'صحيح (ميزة!). لكن: SiO₂ + ΔT + UV.' },
    ],
    relatedServices: [
        { slug: 'cleaning', context: 'تنظيف — SiO₂', priority: 1 },
        { slug: 'glass-facades-cleaning', context: 'واجهات — SiO₂', priority: 2 },
        { slug: 'villas-cleaning', context: 'فلل — رخام', priority: 3 },
        { slug: 'apartments-cleaning', context: 'شقق', priority: 4 },
        { slug: 'steam-cleaning', context: 'بخار', priority: 5 },
        { slug: 'carpet-cleaning', context: 'سجاد', priority: 6 },
        { slug: 'thermal-insulation', context: 'عزل — ΔT', priority: 7 },
    ],
};
