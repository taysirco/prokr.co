import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS } from '../../trust-anchors';

export const override: PageOverride = {
    meta: { title: 'مكافحة نمل أبيض بعنيزة — 8M نخلة سليلوز + جذور 15-20م + ري مزارع رطوبة + 48°م نشاط مُسرّع (2026)', description: 'مكافحة نمل أبيض عنيزة. 8M نخلة = أكبر مصدر سليلوز. جذور 15-20م تخترق أساسات. ري = رطوبة. 48°م = نشاط مُسرّع. Fipronil + Bait + حاجز.', h1: 'مكافحة نمل أبيض بعنيزة — نخيل + جذور + ري + حرارة', keywords: ['مكافحة نمل أبيض بعنيزة', 'مكافحة ارضة عنيزة'] },
    content: { introduction: 'عنيزة = أخطر بيئة نمل أبيض سعودية: (1) 8M+ نخلة = أكبر مصدر سليلوز في المملكة. (2) جذور نخيل 15-20م أفقي = تخترق أساسات المباني ← أنفاق رطبة يعبرها النمل. (3) ري المزارع = رطوبة تربة 30-40% في صحراء 10% RH. بيئة مثالية. (4) 48°م = نشاط مُسرّع (metabolsim × 2). Fipronil 0.06% + Bait Stations + حاجز كيميائي 2م حول المبنى.', shortAnswer: '8M نخلة سليلوز + جذور 15-20م + ري = رطوبة + 48°م نشاط. Fipronil + Bait + حاجز.', heroSubtitle: '8M نخلة = سليلوز + جذور تخترق + ري رطوبة + 48°م مُسرّع' },
    pricing: [{ type: 'فحص + معالجة', unit: 'خدمة', minPrice: 400, maxPrice: 900, time: '3-5 ساعات' }, { type: 'Bait Stations سنوي', unit: 'سنة', minPrice: 900, maxPrice: 2000, time: '12 فحص' }],
    faq: [{ question: 'جذور نخيل تخترق؟', answer: '15-20م أفقي. تبحث عن رطوبة ← تخترق شقوق أساسات ← أنفاق رطبة = جسر للنمل.' }, { question: 'أخطر مدينة؟', answer: '8M نخلة + ري + حرارة = أكثر سليلوز + أفضل رطوبة + أسرع نشاط. نعم.' }],
    expertTips: ['حاجز 2م حول المبنى.', 'Bait Stations سنوي.', 'قطع جذور قريبة من الأساسات.', 'فحص بعد كل ري.'],
    warnings: ['جذور + ري = جسر رطب للنمل.', '8M نخلة بدون حاجز = إصابة شبه مؤكدة.'],
    trustAnchors: [{ ...GOV.BALADI, role: 'ترخيص' }, { ...GOV.WEQAA, role: 'آفات' }], expertReviewer: EXPERTS.ALKHODAIRY,
    expertCitations: [{ expert: EXPERTS.ALKHODAIRY.name, quote: 'عنيزة: 8M نخلة + جذور 15-20م + ري = أخطر بيئة نمل أبيض. حاجز + Bait = الحد الأدنى.', source: 'أبحاث حشرات — النمل في مناطق النخيل' }],
    saudiRegulations: [REGULATIONS.GHAD_SYSTEM], verificationBadges: [{ badge: '✔️ مكافحة مرخصة', authority: 'بلدي + وقاء', icon: 'shield-check' }],
    equipment: [{ name: 'Fipronil 0.06%', use: 'Cascading Kill' }, { name: 'Bait Stations', use: 'مراقبة سنوية' }, { name: 'حاجز كيميائي 2م', use: 'محيط المبنى' }],
    hiddenObjections: [{ fear: 'صحراء جافة.', solution: 'ري مزارع = رطوبة + سليلوز = مثالي.' }], counterNarratives: [{ myth: 'الصحراء لا نمل.', truth: '8M نخلة + ري = بيئة مثالية.' }],
    relatedServices: [{ slug: 'pest-control', context: 'حشرات', priority: 1 }],
};
