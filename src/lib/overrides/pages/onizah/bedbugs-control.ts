import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS } from '../../trust-anchors';

export const override: PageOverride = {
    meta: { title: 'مكافحة بق الفراش بعنيزة — دورة 21 يوم (48°م) + kdr مقاومة + 10% RH = Residual 12-15 يوم (2026)', description: 'مكافحة بق فراش عنيزة. 48°م = دورة 21 يوم (× 5 شهرياً). kdr مقاومة مبيدات. 10% RH = Residual يدوم 12-15 يوم. حرارة 56°م + IGR.', h1: 'مكافحة بق بعنيزة — دورة 21 يوم + kdr + Residual 12-15 يوم', keywords: ['مكافحة بق الفراش بعنيزة', 'مكافحة بق فراش عنيزة', 'شركة مكافحة بق بعنيزة'] },
    content: { introduction: '3 عوامل فريدة: (1) 48°م = دورة 21 يوم: بدلاً من 45 يوم. تكاثر × 5 شهرياً. كل أسبوع تأخير = جيل جديد. (2) kdr (Knockdown Resistance): بق القصيم يحمل جين مقاومة للمبيدات الشائعة (البيريثرويد). حرارة 56°م × 4-6 ساعات = Protein Denaturation = 100% قتل (لا مقاومة للحرارة). (3) 10% RH = ميزة: Residual Spray يدوم 12-15 يوم (في جازان 80%: 3-5 أيام). لكن 48°م = يتحلل بالحرارة. جلسة ثانية 14 يوم.', shortAnswer: '48°م = 21 يوم + kdr مقاومة. حرارة 56°م + Residual 12-15 يوم + IGR.', heroSubtitle: 'دورة 21 يوم + مقاومة kdr + Residual 12-15 يوم (ميزة جفاف)' },
    pricing: [{ type: 'معالجة حرارية — غرفة', unit: 'غرفة', minPrice: 300, maxPrice: 600, time: '4-6 ساعات' }, { type: 'Residual + IGR — شقة', unit: 'شقة', minPrice: 400, maxPrice: 800, time: '3-4 ساعات × 2' }],
    faq: [{ question: 'ليش المبيد ما يشتغل؟', answer: 'kdr gene: مقاومة البيريثرويد. حرارة 56°م = 100% (لا مقاومة للحرارة).' }, { question: '21 يوم — يعني إيش؟', answer: 'جيل كامل كل 3 أسابيع. تأخير أسبوع = جيل جديد.' }],
    expertTips: ['حرارة 56°م × 4-6 ساعات — kdr لا تقاوم.', 'IGR يمنع بيض 21 يوم.', 'Residual 12-15 يوم (ميزة 10%).', '3 جلسات: أسبوع 0 + 14 + 28.'],
    warnings: ['تأخير أسبوع = جيل كامل.', 'بيريثرويد وحده = kdr تقاوم.'],
    trustAnchors: [{ ...GOV.BALADI, role: 'ترخيص مكافحة' }],
    expertReviewer: EXPERTS.ALKHODAIRY,
    expertCitations: [{ expert: EXPERTS.ALKHODAIRY.name, quote: 'بق عنيزة: kdr + 21 يوم. حرارة 56°م = الحل الوحيد للمقاومة.', source: 'أبحاث حشرات — مقاومة البيريثرويد في القصيم' }],
    saudiRegulations: [REGULATIONS.GHAD_SYSTEM],
    verificationBadges: [{ badge: '✔️ مكافحة مرخصة', authority: 'بلدي + وقاء', icon: 'shield-check' }],
    equipment: [{ name: 'سخّان هواء 56°م', use: 'Protein Denaturation — يتجاوز kdr' }, { name: 'IGR', use: 'يمنع دورة 21 يوم' }, { name: 'Residual Spray', use: '12-15 يوم في 10%' }],
    hiddenObjections: [{ fear: 'رشيت ولا فاد.', solution: 'kdr = مقاومة. حرارة 56°م = 100%.' }],
    counterNarratives: [{ myth: 'الحرارة تقتل البق.', truth: '48°م ≠ 56°م. 48 = تُسرّع. 56 × 4 ساعات = تقتل.' }],
    relatedServices: [{ slug: 'pest-control', context: 'حشرات', priority: 1 }, { slug: 'steam-cleaning', context: 'بخار', priority: 2 }, { slug: 'sofa-cleaning', context: 'كنب', priority: 3 }],
};
