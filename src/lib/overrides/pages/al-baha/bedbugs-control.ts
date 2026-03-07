import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS } from '../../trust-anchors';

export const override: PageOverride = {
    meta: { title: 'مكافحة بق الفراش بالباحة — سياحة مصايف + إيجارات موسمية + شاليهات ضباب = 3 مداخل (2026)', description: 'مكافحة بق فراش الباحة. سياحة مصايف = بق في الحقائب. إيجارات موسمية = أثاث مُصاب. شاليهات ضباب = رطوبة تُخفي. بخار 130°م + Residual.', h1: 'مكافحة بق بالباحة — سياحة + إيجارات + شاليهات', keywords: ['مكافحة بق الفراش بالباحة', 'مكافحة بق فراش الباحة', 'شركة مكافحة بق بالباحة'] },
    content: { introduction: '3 مداخل موسمية: (1) سياحة المصايف: الباحة = وجهة مصيفية. آلاف الزوار يوليو-سبتمبر = بق ينتقل عبر الحقائب. (2) إيجارات موسمية: شقق تُؤجر للمصيفين ← أثاث مُستخدم من عائلات مختلفة ← بق ينتقل. فحص بعد كل مُستأجر. (3) شاليهات الضباب: رطوبة 80%+ في الشاليهات ← البق يتخفّى في الرطوبة أسهل (العفن يُخفي الرائحة). في مناخ الباحة (40-60% عادي): دورة 30-35 يوماً. في الضباب (80%): Residual يدوم أقل (5-7 أيام بدلاً من 10). جلسة ثانية بعد 10-14 يوم.', shortAnswer: 'سياحة + إيجارات + شاليهات ضباب. بخار 130°م + Residual + جلسة 10-14 يوم. في الضباب: Residual أقصر.', heroSubtitle: 'سياحة مصايف + إيجارات موسمية + ضباب يُخفي — 3 مداخل' },
    pricing: [{ type: 'معالجة غرفة', unit: 'غرفة', minPrice: 180, maxPrice: 350, time: '1-2 ساعة' }, { type: 'معالجة شقة إيجار + جلسة', unit: 'شقة', minPrice: 400, maxPrice: 800, time: '3-4 ساعات × 2' }, { type: 'فحص شاليه بعد موسم', unit: 'شاليه', minPrice: 100, maxPrice: 200, time: '30-60 دقيقة' }],
    faq: [{ question: 'الضباب يؤثر على المكافحة؟', answer: '80% ضباب = Residual Spray يدوم أقل (5-7 أيام). جلسة ثانية = إلزامية.' }, { question: 'شاليه مصيفي — كل كم أفحص؟', answer: 'بعد كل مُستأجر. أو مرة/شهر في الموسم (يوليو-سبتمبر).' }],
    expertTips: ['فحص بعد كل مُستأجر في الإيجارات الموسمية.', 'Residual في الضباب يدوم أقل — جلسة ثانية.', 'بخار 130°م في الشاليهات — يخترق الرطوبة.'],
    warnings: ['ضباب 80% = Residual يتحلل أسرع. جلسة ثانية إلزامية.', 'موسم المصايف بدون فحص = انتشار بين المُستأجرين.'],
    trustAnchors: [{ ...GOV.BALADI, role: 'ترخيص شركات مكافحة الآفات' }],
    expertReviewer: EXPERTS.ALKHODAIRY,
    expertCitations: [{ expert: EXPERTS.ALKHODAIRY.name, quote: 'بق الباحة: سياحة مصايف = مدخل أول. الضباب يُقصّر عمر الـ Residual. جلسة ثانية = إلزامية.', source: 'أبحاث حشرات — Cimex في المناطق السياحية الجبلية' }],
    saudiRegulations: [REGULATIONS.GHAD_SYSTEM],
    verificationBadges: [{ badge: '✔️ مكافحة مرخصة', authority: 'بلدي + وقاء', icon: 'shield-check' }],
    equipment: [{ name: 'بخار 130°م', use: 'يخترق رطوبة الضباب' }, { name: 'Residual Spray', use: 'يدوم 5-7 أيام في ضباب (10 عادي)' }],
    hiddenObjections: [{ fear: 'الباحة باردة = لا بق.', solution: 'البق يتحمل 5-35°م. + سياحة = مداخل جديدة.' }],
    counterNarratives: [{ myth: 'البرودة تقتل.', truth: 'البق يتحمل حتى 5°م. يتباطأ لكن لا يموت.' }],
    relatedServices: [{ slug: 'pest-control', context: 'حشرات — شاملة', priority: 1 }, { slug: 'steam-cleaning', context: 'بخار — يخترق', priority: 2 }, { slug: 'sofa-cleaning', context: 'كنب — يأوي', priority: 3 }],
};
