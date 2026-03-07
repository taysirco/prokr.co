import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS } from '../../trust-anchors';

export const override: PageOverride = {
    meta: { title: 'تنظيف مسابح بعنيزة — CaCO₃ 600ppm ترسبات + تبخر 12-15cm/أسبوع + Nafud يخدش + 48°م كلور UV (2026)', description: 'تنظيف مسابح عنيزة. CaCO₃ = ترسبات Scaling. تبخر 12-15cm/أسبوع (10%). Nafud يخدش بلاط. 48°م UV يُدمّر كلور. Descaling + تعويض + Touchless.', h1: 'تنظيف مسابح بعنيزة — CaCO₃ + تبخر + Nafud + حرارة UV', keywords: ['تنظيف مسابح بعنيزة', 'تنظيف مسبح عنيزة'] },
    content: { introduction: '4 تحديات: (1) CaCO₃ 600ppm = Scaling حواف + داخل بياض. Descaling حمضي شهري. (2) تبخر 12-15cm/أسبوع (10% + 48°م) = أعلى معدل سعودي. تعويض ماء RO. (3) Nafud يخدش البلاط. Touchless. (4) 48°م + UV = كلور يتحلل خلال ساعات. Stabilized Chlorine (CYA) أو كلور مسائي.', shortAnswer: 'CaCO₃ Scaling + تبخر 12-15cm + Nafud + UV. Descaling + RO + Touchless + Stabilized.', heroSubtitle: 'CaCO₃ يُرسّب + تبخر أعلى + Nafud يخدش + UV يُدمّر كلور' },
    pricing: [{ type: 'صيانة أسبوعية', unit: 'مسبح', minPrice: 120, maxPrice: 250, time: '1-2 ساعة' }, { type: 'Descaling + Touchless', unit: 'مسبح', minPrice: 300, maxPrice: 600, time: '3-4 ساعات' }],
    faq: [{ question: 'بياض على الحواف؟', answer: 'CaCO₃ 600ppm. Descaling حمضي شهرياً.' }, { question: 'كلور يختفي؟', answer: '48°م UV = يتحلل بالساعات. CYA Stabilizer أو كلور مسائي.' }],
    expertTips: ['Descaling شهري — CaCO₃.', 'CYA Stabilizer للكلور.', 'تعويض RO.', 'Touchless — لا فرك Nafud.'],
    warnings: ['12-15cm/أسبوع = أعلى تبخر سعودي.', 'كلور صباحي في 48°م = يختفي بالظهر.'],
    trustAnchors: [{ ...GOV.BALADI, role: 'ترخيص' }], expertReviewer: EXPERTS.ALJUND,
    expertCitations: [{ expert: EXPERTS.ALJUND.name, quote: 'مسبح عنيزة: CaCO₃ + تبخر + UV = 3 تحديات مُركّبة.', source: 'موسوعة أخطاء' }],
    saudiRegulations: [REGULATIONS.SBC_601], verificationBadges: [{ badge: '✔️ مرخص', authority: 'بلدي', icon: 'shield-check' }],
    equipment: [{ name: 'Descaling حمضي', use: 'CaCO₃' }, { name: 'CYA Stabilizer', use: 'UV حماية كلور' }, { name: 'RO Water', use: 'تعويض تبخر' }],
    hiddenObjections: [{ fear: 'كلور عادي.', solution: 'UV 48°م = يتحلل. CYA.' }], counterNarratives: [{ myth: 'الحرارة تُعقّم.', truth: 'الحرارة تُبخر الكلور.' }],
    relatedServices: [{ slug: 'pest-control', context: 'بعوض', priority: 1 }, { slug: 'villas-cleaning', context: 'فلل', priority: 2 }],
};
