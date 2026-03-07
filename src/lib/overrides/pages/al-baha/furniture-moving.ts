import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS } from '../../trust-anchors';

export const override: PageOverride = {
    meta: { title: 'نقل عفش بالباحة — منحدرات جبلية + ضباب رؤية صفر + طرق متعرجة + 5°م PVAc (2026)', description: 'نقل عفش الباحة. منحدرات جبلية 15-20%. ضباب يُخفض الرؤية لصفر. طرق متعرجة (عقبة الملك). 5°م PVAc. فرامل هوائية + قيادة ضباب.', h1: 'نقل عفش بالباحة — منحدرات + ضباب + طرق متعرجة', keywords: ['نقل عفش بالباحة', 'نقل اثاث الباحة', 'شركة نقل عفش بالباحة'] },
    content: { introduction: '4 مخاطر جبلية: (1) منحدرات 15-20%: الشاحنة على منحدر = حمولة تنزلق. Ratchet + أحزمة + فرامل هوائية. (2) ضباب رؤية صفر: يوليو-أكتوبر: ضباب يُخفض الرؤية لـ 10-50 متر. لا نقل في ضباب كثيف — أو قيادة بطيئة (30 كم/ساعة). (3) طرق متعرجة: عقبة الملك + طرق المندق = منعطفات حادة. اهتزاز رأسي + جانبي = أخطر من اهتزاز مستقيم. تثبيت جانبي. (4) 5°م شتاءً: PVAc يتصلب — ليس بشدة تبوك لكن كافٍ. شاحنة مُغلقة.', shortAnswer: 'منحدرات + ضباب + منعطفات + 5°م. Ratchet + لا نقل في ضباب + تثبيت جانبي.', heroSubtitle: 'منحدرات جبلية + ضباب رؤية صفر + منعطفات حادة' },
    pricing: [{ type: 'نقل داخل الباحة — شقة', unit: 'نقلة', minPrice: 300, maxPrice: 600, time: '3-5 ساعات' }, { type: 'نقل فيلا', unit: 'نقلة', minPrice: 600, maxPrice: 1200, time: '5-8 ساعات' }, { type: 'باحة ↔ بلجرشي (عقبة)', unit: 'نقلة', minPrice: 500, maxPrice: 1000, time: '3-5 ساعات' }],
    faq: [{ question: 'ضباب — يلغي النقل؟', answer: 'ضباب كثيف (رؤية <50 م) = تأجيل. ضباب خفيف = سرعة 30 كم/ساعة + أضواء ضباب.' }],
    expertTips: ['Ratchet 8+ أحزمة — منحدرات + منعطفات.', 'لا نقل في ضباب كثيف.', 'تثبيت جانبي — المنعطفات = اهتزاز جانبي.', 'فرامل هوائية — المنحدرات.'],
    warnings: ['نقل في ضباب كثيف = حادث. التأجيل = أمان.', 'منحدر + بدون Ratchet = حمولة تنزلق.'],
    trustAnchors: [{ ...GOV.TGA, role: 'ترخيص النقل' }],
    expertReviewer: EXPERTS.ALZUWAYED,
    expertCitations: [{ expert: EXPERTS.ALZUWAYED.name, quote: 'نقل الباحة: منحدرات + ضباب + منعطفات = أخطر نقل جبلي. 8+ أحزمة + لا ضباب كثيف.', source: 'هيئة النقل — النقل الجبلي' }],
    saudiRegulations: [REGULATIONS.TGA_LICENSE], verificationBadges: [{ badge: '✔️ نقل مرخص', authority: 'هيئة النقل', icon: 'shield-check' }],
    equipment: [{ name: 'Ratchet 8+ أحزمة', use: 'منحدرات + منعطفات' }, { name: 'فرامل هوائية', use: 'منحدرات 15-20%' }, { name: 'أضواء ضباب', use: 'رؤية محدودة' }],
    hiddenObjections: [{ fear: 'مكشوفة أرخص.', solution: '5°م + منحدر = PVAc + انزلاق. مُغلقة = حماية.' }],
    counterNarratives: [{ myth: 'طريق سهل.', truth: 'عقبات + منعطفات + ضباب = أصعب نقل.' }],
    relatedServices: [{ slug: 'furniture-storage', context: 'تخزين', priority: 1 }, { slug: 'dyna', context: 'دينا — أجهزة', priority: 2 }, { slug: 'dabab', context: 'دباب — خفيف', priority: 3 }],
};
