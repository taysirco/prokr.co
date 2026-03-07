import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS } from '../../trust-anchors';

export const override: PageOverride = {
    meta: { title: 'تنظيف مسابح بالباحة — ضباب طحالب + أوراق عرعر + ماء بارد 5°م + أمطار صيفية (2026)', description: 'تنظيف مسابح الباحة. ضباب 80% = طحالب موسمية. أوراق عرعر تسقط. ماء 5°م = كلور أبطأ. أمطار صيفية تُخفف. Algaecide + Skimmer + Shock.', h1: 'تنظيف مسابح بالباحة — ضباب + عرعر + برودة + أمطار', keywords: ['تنظيف مسابح بالباحة', 'تنظيف مسبح الباحة', 'شركة تنظيف مسابح بالباحة'] },
    content: { introduction: '4 تحديات: (1) ضباب 80% = طحالب موسمية (يوليو-أكتوبر). Algaecide أسبوعي. (2) أوراق/إبر عرعر تسقط في المسبح ← تتحلل ← تستهلك كلور + تُنتج Tannin (يُلوّن). Skimmer + شبكة + Enzyme. (3) ماء 5°م شتاءً: كلور يعمل أبطأ بـ 50% في الماء البارد — يحتاج جرعة أعلى. (4) أمطار صيفية تُخفف التركيز + تجلب Phosphates = طحالب. Shock بعد كل مطر.', shortAnswer: 'طحالب ضباب + عرعر Tannin + كلور بطيء 5°م + أمطار. Algaecide + Enzyme + Shock.', heroSubtitle: 'ضباب = طحالب + عرعر = Tannin + برودة = كلور بطيء' },
    pricing: [{ type: 'صيانة أسبوعية', unit: 'مسبح', minPrice: 100, maxPrice: 220, time: '1-2 ساعة' }, { type: 'تنظيف عرعر + Enzyme', unit: 'مسبح', minPrice: 150, maxPrice: 300, time: '2-3 ساعات' }, { type: 'عقد شهري', unit: 'شهر', minPrice: 300, maxPrice: 650, time: '4 زيارات' }],
    faq: [{ question: 'مسبح أصفر/بني — عرعر؟', answer: 'أوراق عرعر تُنتج Tannin ← يُلوّن الماء. Enzyme يُكسر Tannin + شبكة تمنع.' }],
    expertTips: ['شبكة تغطية — أوراق عرعر.', 'Algaecide أسبوعي في الضباب.', 'كلور أعلى 50% في الشتاء (5°م = أبطأ).', 'Shock بعد كل مطر صيفي.'],
    warnings: ['أوراق عرعر في المسبح = تستهلك كلور + Tannin = لون.', 'كلور عادي في 5°م = نصف فعالية.'],
    trustAnchors: [{ ...GOV.BALADI, role: 'ترخيص صيانة المسابح' }],
    expertReviewer: EXPERTS.ALJUND,
    expertCitations: [{ expert: EXPERTS.ALJUND.name, quote: 'مسبح الباحة: ضباب + عرعر + برودة = 3 تحديات فريدة. Algaecide + Enzyme + كلور مُضاعف شتاءً.', source: 'موسوعة أخطاء — المسابح الجبلية' }],
    saudiRegulations: [REGULATIONS.SBC_601], verificationBadges: [{ badge: '✔️ صيانة مسابح مرخصة', authority: 'بلدي', icon: 'shield-check' }],
    equipment: [{ name: 'Algaecide', use: 'يمنع طحالب الضباب' }, { name: 'Enzyme', use: 'يُكسر Tannin العرعر' }, { name: 'شبكة تغطية', use: 'تمنع أوراق/إبر العرعر' }],
    hiddenObjections: [{ fear: 'شتاءً المسبح مُغلق.', solution: 'حتى مُغلق: أوراق + ضباب = طحالب + Tannin. صيانة شتوية = أسهل فتح صيفاً.' }],
    counterNarratives: [{ myth: 'الجو بارد = لا طحالب.', truth: 'ضباب 80% = طحالب. + عرعر = Tannin.' }],
    relatedServices: [{ slug: 'pest-control', context: 'حشرات — بعوض', priority: 1 }, { slug: 'villas-cleaning', context: 'فلل — المسبح', priority: 2 }],
};
