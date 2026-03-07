import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS } from '../../trust-anchors';

export const override: PageOverride = {
    meta: { title: 'دينا نقل بالباحة — منحدرات 15-20% + ضباب مُعدم الرؤية + عقبة الملك + 5°م كمبريسور (2026)', description: 'دينا نقل الباحة. منحدرات 15-20%. ضباب صفر رؤية. عقبة الملك منعطفات حادة. 5°م كمبريسور 4-5 ساعات. فرامل هوائية + Ratchet.', h1: 'دينا نقل بالباحة — منحدرات + ضباب + عقبة الملك + برودة', keywords: ['دينا نقل بالباحة', 'دينا الباحة', 'نقل دينا الباحة'] },
    content: { introduction: '4 مخاطر: (1) منحدرات 15-20%: أجهزة ثقيلة + منحدر = خطر انزلاق. فرامل هوائية + Ratchet 8+. (2) ضباب: يوليو-أكتوبر = رؤية صفر أحياناً. لا نقل في كثيف. (3) عقبة الملك (باحة ↔ تهامة): منعطفات حادة + فرق ارتفاع 1,500م. أخطر قطعة نقل في المملكة. اهتزاز جانبي + رأسي. (4) 5°م شتاءً: كمبريسور يحتاج 4-5 ساعات (بين جازان 2-3 وتبوك 6-8). الزيت لا يتجمد لكن يتكاثف.', shortAnswer: 'منحدرات + ضباب + عقبة الملك + 5°م. فرامل + Ratchet + لا ضباب كثيف + 4-5 ساعات.', heroSubtitle: 'منحدرات + ضباب + عقبة الملك (أخطر قطعة سعودية) + 5°م' },
    pricing: [{ type: 'دينا — داخل الباحة', unit: 'رحلة', minPrice: 80, maxPrice: 180, time: '30-60 دقيقة' }, { type: 'باحة ↔ بلجرشي (عقبة)', unit: 'رحلة', minPrice: 200, maxPrice: 400, time: '2-3 ساعات' }, { type: 'باحة ↔ تهامة (عقبة الملك)', unit: 'رحلة', minPrice: 350, maxPrice: 700, time: '3-5 ساعات' }],
    faq: [{ question: 'عقبة الملك — خطيرة للنقل؟', answer: 'أخطر قطعة: 1,500م فرق ارتفاع + منعطفات حادة. أجهزة ثقيلة = خطر. فرامل هوائية + Ratchet 8+ + سرعة بطيئة.' }, { question: '4-5 ساعات كمبريسور؟', answer: '5°م: الزيت لا يتجمد (ليس -2°م) لكن يتكاثف. 4-5 ساعات = إعادة توزيع.' }],
    expertTips: ['فرامل هوائية إلزامية — منحدرات.', '8+ أحزمة Ratchet.', 'لا نقل في ضباب كثيف.', '4-5 ساعات ثلاجة.', 'عقبة الملك: سرعة 30 كم/ساعة + تأمين جانبي.'],
    warnings: ['عقبة الملك بدون فرامل هوائية = خطر مميت.', 'ضباب + عقبة الملك = لا نقل أبداً.'],
    trustAnchors: [{ ...GOV.TGA, role: 'ترخيص النقل' }],
    expertReviewer: EXPERTS.ALZUWAYED,
    expertCitations: [{ expert: EXPERTS.ALZUWAYED.name, quote: 'عقبة الملك = أخطر قطعة نقل سعودية. فرامل هوائية + 8 أحزمة + لا ضباب = الحد الأدنى.', source: 'هيئة النقل — النقل الجبلي' }],
    saudiRegulations: [REGULATIONS.TGA_LICENSE], verificationBadges: [{ badge: '✔️ نقل مرخص', authority: 'هيئة النقل', icon: 'shield-check' }],
    equipment: [{ name: 'فرامل هوائية', use: 'منحدرات 15-20%' }, { name: 'Ratchet 8+', use: 'عقبة + منعطفات' }, { name: 'EPE + Stretch', use: 'حماية أجهزة' }],
    hiddenObjections: [{ fear: 'مكشوفة أرخص.', solution: 'عقبة الملك + ضباب = خطر. مُغلقة = وقاية.' }],
    counterNarratives: [{ myth: 'طريق عادي.', truth: 'عقبة الملك = 1,500م فرق ارتفاع.' }],
    relatedServices: [{ slug: 'furniture-moving', context: 'نقل عفش', priority: 1 }, { slug: 'dabab', context: 'دباب', priority: 2 }, { slug: 'furniture-storage', context: 'تخزين', priority: 3 }],
};
