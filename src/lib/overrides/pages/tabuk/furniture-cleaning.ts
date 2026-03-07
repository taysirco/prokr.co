import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف أثاث بتبوك — 4 مسارات: جفاف 12% يُشقّق + حسمى يبري + PVAc يتجمد + UV يُبهت (2026)',
        description: 'تنظيف أثاث تبوك. جفاف 12% يُشقّق الجلد/الخشب. حسمى 6 Mohs يبري. PVAc يتجمد -2°م ← MDF ينفصل. UV 10+ يُبهت. Conditioning + HEPA + CaF₂.',
        h1: 'تنظيف أثاث بتبوك — 4 مسارات تدهور متزامنة',
        keywords: ['تنظيف أثاث بتبوك', 'تنظيف اثاث تبوك', 'شركة تنظيف أثاث بتبوك'],
    },
    content: {
        introduction: 'الأثاث في تبوك يتدهور بأربعة مسارات متزامنة — أكثر من أي مدينة سعودية. المسار الأول — جفاف 12% RH يُشقّق الجلد والخشب. المسار الثاني — حجر حسمى 6 Mohs يبري الأسطح. المسار الثالث — PVAc يتجمد فعلاً عند -2°م (ليس يتبلور فقط — يتجمد) ← MDF ينفصل. المسار الرابع — UV 10+ يُبهت الأقمشة والخشب. 4 مسارات متزامنة = بروتوكول رباعي: Conditioning + HEPA + حماية PVAc + UV Filter.',
        shortAnswer: '4 مسارات: [جفاف 12%] يُشقّق + [حسمى 6] يبري + [PVAc -2°م] يتجمد + [UV 10+] يُبهت. بروتوكول رباعي: Conditioning + HEPA + حرارة مُراقبة + UV Filter.',
        heroSubtitle: '4 مسارات تدهور متزامنة — أعقد أثاث في المشروع',
    },
    pricing: [
        { type: 'تنظيف أثاث — غرفة نوم/صالة', unit: 'غرفة', minPrice: 150, maxPrice: 300, time: '1-2 ساعة' },
        { type: 'تنظيف + Conditioning (جلد + خشب)', unit: 'طقم', minPrice: 250, maxPrice: 500, time: '2-3 ساعات' },
        { type: 'فحص + حماية شاملة (4 مسارات)', unit: 'منزل', minPrice: 500, maxPrice: 1000, time: '4-6 ساعات' },
    ],
    faq: [
        { question: 'الخشب يتشقق أسرع في تبوك — ليش؟', answer: '12% RH = أسرع جفاف في المشروع. الخشب يحتاج 40-60%. في 12%: يفقد رطوبته ← ينكمش ← يتشقق. + PVAc -2°م = MDF ينفصل. Conditioning خشب كل 4-6 أشهر.' },
        { question: 'PVAc يتجمد فعلاً في تبوك؟', answer: 'نعم — -2°م = PVAc يتجمد (ليس يتبلور كحائل 0-5°م). بلورات ثلج تُمزّق الروابط ← عند الذوبان: لا يعود. أثاث في غرفة بدون تدفئة ليلة -2°م = تلف. HVAC ≥ 15°م = حماية.' },
    ],
    expertTips: [
        'Conditioning كل 4-6 أشهر — 12% RH = أعلى تواتر في المشروع.',
        'HEPA قبل أي مسح — حسمى 6 Mohs يبري الخشب والجلد.',
        'HVAC ≥ 15°م — يمنع تجمد PVAc. لا أثاث في غرفة بدون تدفئة شتاءً.',
        'UV Filter على النوافذ الجنوبية — UV 10+ يُبهت الأقمشة خلال شهور.',
    ],
    warnings: [
        'جلد بدون Conditioning 3+ أشهر في 12% = شقوق لا تُصلح.',
        'أثاث MDF في غرفة -2°م بدون تدفئة = PVAc يتجمد = تلف دائم.',
    ],
    trustAnchors: [{ ...GOV.BALADI, role: 'ترخيص شركات التنظيف' }],
    expertReviewer: EXPERTS.ALMOHAIMED,
    expertCitations: [
        { expert: EXPERTS.ALMOHAIMED.name, quote: 'أثاث تبوك يواجه 4 مسارات تدهور متزامنة — أعقد مدينة في المشروع. PVAc يتجمد فعلاً عند -2°م = MDF يتلف بشكل دائم.', source: 'نصائح هندسية — صيانة الأثاث في المناخ شبه القاري' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ تنظيف أثاث مرخص', authority: 'بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'HEPA صناعي', use: 'يسحب حسمى قبل المسح — يمنع البري' },
        { name: 'Conditioning (جلد + خشب)', use: 'يُعيد الزيوت في 12% — يمنع التشقق' },
        { name: 'UV Filter / ستائر UV-Block', use: 'يمنع UV 10+ من تبهيت الأقمشة' },
    ],
    hiddenObjections: [{ fear: '4 أدوات — غالي.', solution: '4 مسارات = 4 أدوات. أداة واحدة = 25% حماية فقط.' }],
    counterNarratives: [{ myth: 'الأثاث يتلف من الاستخدام.', truth: 'استخدام = 20%. مناخ تبوك (12% + -2°م + حسمى + UV) = 80%.' }],
    relatedServices: [
        { slug: 'sofa-cleaning', context: 'كنب — نفس 4 مسارات', priority: 1 },
        { slug: 'carpet-cleaning', context: 'سجاد — حسمى + جفاف', priority: 2 },
        { slug: 'furniture-moving', context: 'نقل — خطر تجمد PVAc', priority: 3 },
        { slug: 'furniture-storage', context: 'تخزين — HVAC 12/12', priority: 4 },
        { slug: 'cleaning', context: 'تنظيف — المنزل كاملاً', priority: 5 },
    ],
};
