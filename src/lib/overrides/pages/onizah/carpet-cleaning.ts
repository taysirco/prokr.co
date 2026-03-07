import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS } from '../../trust-anchors';

export const override: PageOverride = {
    meta: { title: 'تنظيف سجاد بعنيزة — CaCO₃ 600ppm ترسبات بيضاء + Nafud 7 Mohs + حبوب لقاح نخيل + 10% جفاف (2026)', description: 'تنظيف سجاد عنيزة. CaCO₃ 600ppm = ترسبات بيضاء على أقمشة داكنة. Nafud 7 Mohs = خدوش. حبوب لقاح 20-30μm = Van der Waals. 10% = يجف فوراً.', h1: 'تنظيف سجاد بعنيزة — CaCO₃ بيضاء + Nafud خدوش + لقاح نخيل', keywords: ['تنظيف سجاد بعنيزة', 'تنظيف سجاد عنيزة', 'شركة تنظيف سجاد بعنيزة'] },
    content: { introduction: '4 تحديات: (1) CaCO₃ 600ppm: أعسر ماء سعودي. الماء يتبخر ← يترك ترسبات بيضاء على السجاد الداكن. Citric Acid (CaCO₃ + 2H⁺ → Ca²⁺ + H₂O + CO₂). (2) Nafud Sand 7 Mohs: كوارتز يخدش الألياف. HEPA أولاً — أي فرك بدون شفط = خدوش دائمة (Swirl Marks). (3) حبوب لقاح نخيل: 20-30 ميكرون — تلتصق بالألياف عبر Van der Waals. مكنسة عادية لا تسحبها — تحتاج HEPA + Beater Bar. (4) 10% RH = ميزة: السجاد يجف فوراً بعد الغسيل (لا Dehumidifier — عكس جازان/الباحة).', shortAnswer: 'CaCO₃ (Citric Acid) + Nafud (HEPA أولاً) + لقاح (Beater Bar) + ميزة: يجف فوراً.', heroSubtitle: 'CaCO₃ يُبيّض + Nafud يخدش + لقاح يلتصق — لكن يجف فوراً' },
    pricing: [{ type: 'تنظيف سجاد + Descaling', unit: 'غرفة', minPrice: 80, maxPrice: 180, time: '1-2 ساعة' }, { type: 'موسم لقاح (مارس-مايو)', unit: 'غرفة', minPrice: 100, maxPrice: 200, time: '1-2 ساعة' }],
    faq: [{ question: 'بقع بيضاء على السجاد الداكن؟', answer: 'CaCO₃ 600ppm: الماء يتبخر = ترسب أبيض. Citric Acid يُذيب (تفاعل حمض-قاعدة). لا تستخدم ماء الصنبور للغسيل!' }, { question: 'لقاح نخيل — كل سنة؟', answer: 'مارس-مايو: موسم تلقيح. لقاح 20-30μm يلتصق بـ Van der Waals. HEPA + Beater Bar.' }],
    expertTips: ['HEPA أولاً — Nafud 7 Mohs يخدش.', 'Citric Acid لـ CaCO₃ — لا ماء صنبور!', 'Beater Bar للقاح.', '10% = يجف فوراً (ميزة).'],
    warnings: ['ماء صنبور 600ppm للغسيل = ترسبات أكثر!', 'فرك بدون HEPA = Swirl Marks دائمة.'],
    trustAnchors: [{ ...GOV.BALADI, role: 'ترخيص' }],
    expertReviewer: EXPERTS.ALMOHAIMED,
    expertCitations: [{ expert: EXPERTS.ALMOHAIMED.name, quote: 'سجاد عنيزة: 600ppm = لا تغسل بماء الصنبور. RO water فقط. + HEPA أولاً — Nafud = خدوش.', source: 'نصائح هندسية — التنظيف في بيئات الماء العسر' }],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH], verificationBadges: [{ badge: '✔️ مرخص', authority: 'بلدي', icon: 'shield-check' }],
    equipment: [{ name: 'HEPA + Beater Bar', use: 'Nafud + لقاح نخيل' }, { name: 'Citric Acid', use: 'CaCO₃ Descaling' }, { name: 'RO Water', use: 'غسيل بماء نقي — لا صنبور!' }],
    hiddenObjections: [{ fear: 'منظف عادي + ماء.', solution: '600ppm = ترسبات. RO water + Citric Acid.' }],
    counterNarratives: [{ myth: 'اغسل بالماء.', truth: '600ppm = ترسبات بيضاء أكثر. RO water فقط.' }],
    relatedServices: [{ slug: 'sofa-cleaning', context: 'كنب — CaCO₃', priority: 1 }, { slug: 'steam-cleaning', context: 'بخار', priority: 2 }, { slug: 'cleaning', context: 'تنظيف', priority: 3 }],
};
