import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS } from '../../trust-anchors';

export const override: PageOverride = {
    meta: { title: 'نقل عفش بعنيزة — 70-85°م سطح شاحنة + 0°م PVAc + Nafud خدوش + عنيزة↔بريدة 30كم يومي (2026)', description: 'نقل عفش عنيزة. 70-85°م سطح = PVAc يسيل + بطارية 60°م. 0°م = PVAc يتصلب. Nafud يخدش. عنيزة↔بريدة 30كم. مُبرّدة + EPE.', h1: 'نقل عفش بعنيزة — حرارة سطح 70°م + تجمد + Nafud + حركة يومية', keywords: ['نقل عفش بعنيزة', 'نقل اثاث عنيزة', 'شركة نقل عفش بعنيزة'] },
    content: { introduction: '4 مخاطر: (1) 70-85°م سطح شاحنة مكشوفة = PVAc يسيل فوق 60°م + بطارية ليثيوم تنتفخ (Thermal Runaway). مُبرّدة أو مُغلقة مُظللة. (2) 0°م شتاءً = PVAc يتصلب. مُبطّنة. (3) Nafud يخدش كل سطح. EPE + Stretch Film. (4) عنيزة ↔ بريدة = 30 كم — حركة يومية = اهتزاز مُتكرر. Anti-Vibration Pads.', shortAnswer: '70°م يُسيل + 0°م يُصلّب + Nafud يخدش + 30كم يومي. مُبرّدة + EPE + Anti-Vibration.', heroSubtitle: 'سطح 70°م يُسيّل PVAc + 0°م يُصلّب + Nafud يخدش' },
    pricing: [{ type: 'نقل داخل عنيزة', unit: 'نقلة', minPrice: 200, maxPrice: 450, time: '3-5 ساعات' }, { type: 'عنيزة ↔ بريدة', unit: 'نقلة', minPrice: 250, maxPrice: 500, time: '2-3 ساعات' }, { type: 'نقل فيلا + مزرعة', unit: 'نقلة', minPrice: 500, maxPrice: 1200, time: '5-8 ساعات' }],
    faq: [{ question: 'مكشوفة صيفاً؟', answer: '70-85°م سطح = PVAc يسيل + بطارية تنتفخ. مُغلقة إلزامية.' }],
    expertTips: ['مُغلقة صيفاً — 70°م.', 'EPE + Stretch — Nafud.', 'Anti-Vibration — 30كم يومي.', 'بطاريات ليثيوم: لا مكشوفة فوق 60°م.'],
    warnings: ['مكشوفة 70°م = PVAc يسيل + بطارية تنتفخ.', 'Nafud بدون EPE = خدوش.'],
    trustAnchors: [{ ...GOV.TGA, role: 'ترخيص' }], expertReviewer: EXPERTS.ALZUWAYED,
    expertCitations: [{ expert: EXPERTS.ALZUWAYED.name, quote: 'نقل عنيزة: 70°م سطح = أخطر حرارة نقل سعودية.', source: 'هيئة النقل' }],
    saudiRegulations: [REGULATIONS.TGA_LICENSE], verificationBadges: [{ badge: '✔️ نقل مرخص', authority: 'هيئة النقل', icon: 'shield-check' }],
    equipment: [{ name: 'شاحنة مُغلقة', use: '70°م' }, { name: 'EPE + Stretch', use: 'Nafud' }, { name: 'Anti-Vibration', use: '30كم' }],
    hiddenObjections: [{ fear: 'مكشوفة أرخص.', solution: '70°م = PVAc + بطارية.' }], counterNarratives: [{ myth: 'الحرارة لا تؤثر.', truth: '70°م = PVAc softening point.' }],
    relatedServices: [{ slug: 'furniture-storage', context: 'تخزين', priority: 1 }, { slug: 'dyna', context: 'دينا', priority: 2 }, { slug: 'dabab', context: 'دباب', priority: 3 }],
};
