import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS } from '../../trust-anchors';

export const override: PageOverride = {
    meta: { title: 'تنظيف فلل بالباحة — حديقة غابة عرعر + Laterite 20 نقطة + عفن ضباب + حشرات غابة (2026)', description: 'تنظيف فلل الباحة. حديقة عرعر = حشرات غابة + أوراق. Laterite 20+ نقطة. ضباب 80% عفن. Zone-Based جبلي.', h1: 'تنظيف فلل بالباحة — حديقة غابة + Laterite + ضباب', keywords: ['تنظيف فلل بالباحة', 'تنظيف فيلا الباحة', 'شركة تنظيف فلل بالباحة'] },
    content: { introduction: 'فيلا الباحة = فيلا في غابة. حديقة عرعر = حشرات غابة (سوسة + خنفساء لحاء). Laterite Fe₂O₃ يدخل من 20+ نقطة (كل باب/نافذة). ضباب 80% = عفن في كل زاوية عُرضة. Zone-Based: حديقة (مكافحة غابة — لا رش عام) + خارجي (Biocide Lichen + Laterite) + داخل (HEPA → Anti-Fungal → بخار).', shortAnswer: 'حديقة غابة + Laterite 20+ + ضباب عفن. Zone-Based جبلي.', heroSubtitle: 'فيلا في غابة: حديقة حشرات + Laterite + ضباب عفن' },
    pricing: [{ type: 'تنظيف فيلا — Zone-Based', unit: 'فيلا', minPrice: 600, maxPrice: 1200, time: '6-10 ساعات' }, { type: 'عقد نصف سنوي', unit: 'سنة', minPrice: 1000, maxPrice: 2000, time: '2 زيارات' }],
    faq: [{ question: 'حديقة العرعر — تُنظف؟', answer: 'مكافحة حشرات (Gel Bait + مصائد) + إزالة أوراق راكدة. لا رش عام — يضر الغابة.' }],
    expertTips: ['Zone-Based: حديقة + خارجي + داخل.', 'لا رش عام في الحديقة.', 'Anti-Fungal بعد الضباب.'],
    warnings: ['رش عام في حديقة العرعر = يقتل نحل عسل الباحة.'],
    trustAnchors: [{ ...GOV.BALADI, role: 'ترخيص شركات التنظيف' }],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [{ expert: EXPERTS.ALMISNID.name, quote: 'فيلا الباحة = فيلا في غابة. Zone-Based = الحل.', source: 'جغرافيا المناخ — فلل الغابات الجبلية' }],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH], verificationBadges: [{ badge: '✔️ مرخص', authority: 'بلدي', icon: 'shield-check' }],
    equipment: [{ name: 'Gel Bait غابة', use: 'حشرات عرعر' }, { name: 'Biocide Lichen', use: 'خارجي' }, { name: 'HEPA + Anti-Fungal', use: 'داخل' }],
    hiddenObjections: [{ fear: '600-1,200 غالي.', solution: 'فيلا في غابة = تتسخ أكثر.' }],
    counterNarratives: [{ myth: 'الغابة نظيفة.', truth: 'غابة = حشرات + أوراق + ضباب.' }],
    relatedServices: [{ slug: 'swimming-pool-cleaning', context: 'مسابح', priority: 1 }, { slug: 'pest-control', context: 'حشرات', priority: 2 }, { slug: 'cleaning', context: 'تنظيف', priority: 3 }],
};
