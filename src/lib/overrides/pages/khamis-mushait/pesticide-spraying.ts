import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../gov-references';

export const override: PageOverride = {
    meta: {
        title: 'رش مبيدات بخميس مشيط — 60-85% المبيد لا يجف! Dehumidifier بعد الرش — SFDA غد (2026)',
        description: 'رش مبيدات خميس مشيط. 60-85% المبيد لا يجف! Dehumidifier بعد الرش. SFDA نظام غد. IPM جبلي. تكاثر 2×.',
        h1: 'رش مبيدات بخميس مشيط — الرطوبة تُبطئ الجفاف',
        keywords: ['رش مبيدات خميس مشيط', 'رش مبيدات بخميس مشيط', 'شركة رش مبيدات خميس مشيط'],
    },
    content: {
        introduction: 'رش المبيدات في خميس مشيط يحتاج بروتوكولاً مختلفاً عن الصحراء! 60-85% = المبيد لا يجف بسرعة: في عنيزة (15-25%) المبيد يجف خلال 30-60 دقيقة. في خميس: 2-4 ساعات! هذا يعني: الحشرات تتحرك فوق مبيد رطب = فعالية أقل. Dehumidifier بعد الرش يُسرّع الجفاف = فعالية أعلى. IPM جبلي: التشخيص قبل الرش — ليس كل حشرة نفسها. بعوض (تصريف)+صراصير (Gel)+نمل (طُعم) = حلول مختلفة. تكاثر 2× أسرع: دورات حياة أقصر = يحتاج رش أكثر تكراراً. ربع سنوي بدل نصف سنوي. مبيد SFDA فقط: نظام غد = تتبع كل عبوة. مبيدات غير مسجلة = غرامة 10000+ ريال + خطر صحي.',
        shortAnswer: 'على عكس [الرش بدون Dehumidifier حيث المبيد لا يجف]، يعتمد بروتوكولنا في خدمة [رش المبيدات] بمدينة [خميس مشيط] على [IPM+مبيد SFDA+Dehumidifier+تصريف]. ففي ظل [60-85%+تكاثر 2×+مبيد بطيء الجفاف+بعوض أمطار]، تتفاقم ظاهرة [فعالية أقل+تكاثر سريع+مقاومة]. لذا؛ يتدخل فريقنا عبر [تشخيص ← رش ← تجفيف ← وقاية].',
        heroSubtitle: '60-85% المبيد لا يجف! Dehumidifier+IPM — SFDA غد!',
    },
    pricing: [
        { type: 'شقة', unit: 'شقة', minPrice: 80, maxPrice: 180, time: '1-2 ساعة + تجفيف 2-4h' },
        { type: 'فيلا', unit: 'فيلا', minPrice: 160, maxPrice: 350, time: '2-3h + تجفيف' },
        { type: 'حديقة + خارجي', unit: 'خدمة', minPrice: 120, maxPrice: 260, time: '1-2 ساعة' },
        { type: 'ربع سنوي (4 رشات)', unit: 'سنة', minPrice: 250, maxPrice: 540, time: '4 زيارات' },
    ],
    faq: [
        { question: 'ليش المبيد أقل فعالية بخميس من عنيزة؟', answer: '60-85% = المبيد لا يجف (2-4h مقابل 30-60 دقيقة). الحشرات تتحرك فوق مبيد رطب = فعالية أقل.' },
        { question: 'كيف يُحسّن Dehumidifier فعالية المبيد بخميس؟', answer: 'يُسرّع جفاف المبيد = طبقة جافة فعّالة أسرع. بدونه = 2-4 ساعات رطوبة.' },
        { question: 'كم مرة يحتاج رش بخميس مشيط سنوياً؟', answer: 'ربع سنوي (4 مرات) — تكاثر 2× أسرع. عنيزة: نصف سنوي يكفي.' },
        { question: 'هل مبيد غير SFDA خطير؟', answer: 'خطر صحي + غرامة 10000+ ريال. نظام غد يتتبع كل عبوة. SFDA فقط.' },
        { question: 'كم تكلفة رش مبيدات بخميس مقارنة بعنيزة؟', answer: 'أغلى 20% — Dehumidifier+ربع سنوي+IPM. 80-350 مقابل 65-290.' },
    ],
    expertTips: [
        'Dehumidifier بعد الرش — يُسرّع جفاف المبيد.',
        'IPM — تشخيص قبل رش عشوائي.',
        'SFDA نظام غد — مبيدات مسجلة فقط.',
        'ربع سنوي — تكاثر 2× بالرطوبة.',
        'تصريف بِرك — بعوض أمطار.',
    ],
    warnings: [
        'مبيد بدون Dehumidifier + 60-85% = فعالية 50% فقط — هدر مال.',
        'مبيد غير SFDA = خطر صحي + غرامة 10000+ ريال.',
        'نصف سنوي بخميس = تكاثر بين الرشات — ربع سنوي إلزامي.',
    ],
    trustAnchors: [
        { ...GOV.SFDA, role: 'تسجيل المبيدات — نظام غد' },
        { ...GOV.BALADI, role: 'ترخيص شركات المكافحة' },
        { entity: AMANA.ASIR.entity, url: AMANA.ASIR.url, role: 'اشتراطات أمانة عسير' },
    ],
    expertReviewer: EXPERTS.ALKHODAIRY,
    expertCitations: [
        { expert: EXPERTS.ALKHODAIRY.name, quote: 'رش خميس: الرطوبة تُبطئ جفاف المبيد. Dehumidifier يُحسّن الفعالية. IPM أولاً.', source: 'أبحاث سموم — مبيدات جبلية' },
    ],
    saudiRegulations: [REGULATIONS.GHAD_SYSTEM],
    verificationBadges: [{ badge: '✔️ رش مرخص SFDA', authority: 'بلدي + SFDA', icon: 'shield-check' }],
    equipment: [
        { name: 'مبيد SFDA مسجل', use: 'نظام غد — مسجل وآمن' },
        { name: 'Dehumidifier', use: 'يُسرّع جفاف المبيد — 60-85%' },
        { name: 'جهاز ULV', use: 'رش ضبابي دقيق — تغطية أفضل' },
    ],
    commonConcerns: [
        { concern: 'رش عادي يكفي.', solution: 'بدون Dehumidifier = فعالية 50%. IPM أولاً.' },
        { concern: 'مثل عنيزة.', solution: 'المبيد لا يجف + تكاثر 2× = بروتوكول مختلف.' },
    ],
    consumerEducation: [
        { myth: 'نصف سنوي يكفي بخميس.', truth: 'تكاثر 2× = ربع سنوي إلزامي.' },
        { myth: 'أي مبيد يعمل.', truth: 'SFDA نظام غد فقط. غيره = غرامة+خطر.' },
    ],
    relatedServices: [
        { slug: 'pest-control', context: 'مكافحة حشرات', priority: 1 },
        { slug: 'bedbugs-control', context: 'بق فراش', priority: 2 },
        { slug: 'termite-control', context: 'نمل أبيض', priority: 3 },
        { slug: 'bird-control', context: 'طيور', priority: 4 },
        { slug: 'cleaning', context: 'تنظيف', priority: 5 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 6 },
        { slug: 'sewage-suction', context: 'صرف صحي', priority: 7 },
    ],
};
