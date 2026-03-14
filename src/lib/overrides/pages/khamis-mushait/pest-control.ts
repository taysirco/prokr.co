import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'مكافحة حشرات بخميس مشيط — 60-85% تكاثر أسرع 2×! عفن يجذب+أمطار — IPM جبلي (2026)',
        description: 'مكافحة حشرات خميس مشيط. 60-85% تكاثر 2×! عفن يجذب حشرات. أمطار تكثّر بعوض. IPM جبلي+مبيد SFDA+Dehumidifier.',
        h1: 'مكافحة حشرات بخميس مشيط — رطوبة تكاثر أسرع!',
        keywords: ['مكافحة حشرات خميس مشيط', 'شركة مكافحة حشرات خميس مشيط', 'رش حشرات بخميس مشيط'],
    },
    content: {
        introduction: 'الحشرات في خميس مشيط تتكاثر أسرع 2× بسبب الرطوبة! 60-85% = بيئة مثالية لتكاثر الصراصير والنمل والبعوض. دورات حياة أسرع. عفن Aspergillus يجذب حشرات إضافية: بعض الحشرات تتغذى على العفن الذي ينمو بسبب الرطوبة = علاقة مزدوجة. أمطار موسمية = بعوض يتكاثر في تجمعات المياه. بِركة واحدة راكدة = آلاف يرقات خلال أسبوع. رطوبة تؤثر على المبيدات: 60-85% = المبيد لا يجف بسرعة = فعالية أقل. يحتاج Dehumidifier للتجفيف. مقارنة: عنيزة = تكاثر أبطأ + مبيد يجف فوراً + لا بعوض = أرخص 20%. خميس = IPM جبلي شامل.',
        shortAnswer: 'على عكس [الرش العشوائي بدون IPM]، يعتمد بروتوكولنا في خدمة [مكافحة الحشرات] بمدينة [خميس مشيط] على [IPM جبلي+مبيد SFDA+Dehumidifier+تصريف بِرك]. ففي ظل [60-85% تكاثر 2×+عفن يجذب+أمطار بعوض+مبيد بطيء الجفاف]، تتفاقم ظاهرة [تكاثر سريع+مقاومة+بعوض]. لذا؛ يتدخل فريقنا عبر [تشخيص ← علاج ← تجفيف ← وقاية].',
        heroSubtitle: '60-85% تكاثر 2× + عفن + أمطار بعوض — IPM جبلي!',
    },
    pricing: [
        { type: 'شقة', unit: 'شقة', minPrice: 100, maxPrice: 220, time: '1-2 ساعة' },
        { type: 'فيلا', unit: 'فيلا', minPrice: 200, maxPrice: 420, time: '2-3 ساعات' },
        { type: 'ربع سنوي (4 زيارات)', unit: 'سنة', minPrice: 300, maxPrice: 650, time: '4 زيارات' },
        { type: 'شهري (إصابة شديدة)', unit: 'شهر', minPrice: 150, maxPrice: 320, time: 'زيارة شهرية' },
    ],
    faq: [
        { question: 'ليش الحشرات أكثر بخميس من عنيزة؟', answer: '60-85% = تكاثر 2× أسرع + عفن يجذب + أمطار = بعوض. عنيزة: 15-25% = تكاثر أبطأ.' },
        { question: 'كيف أمنع البعوض بخميس مشيط؟', answer: 'تصريف بِرك مياه + مبيد يرقات + شبك نوافذ. بِركة واحدة = آلاف يرقات.' },
        { question: 'ليش المبيد أقل فعالية بخميس؟', answer: '60-85% = المبيد لا يجف = فعالية أقل. Dehumidifier بعد الرش. عنيزة: يجف فوراً.' },
        { question: 'كم تكلفة مكافحة حشرات بخميس مقارنة بعنيزة؟', answer: 'أغلى 20% — Dehumidifier+تصريف بِرك+IPM. 100-420 مقابل 80-350.' },
        { question: 'هل العفن يجذب الحشرات بخميس؟', answer: 'بعض الحشرات تتغذى على العفن = عفن→حشرات. Anti-Fungal يقلل جذب الحشرات.' },
    ],
    expertTips: [
        'IPM جبلي — تشخيص قبل رش عشوائي.',
        'مبيد SFDA — نظام غد فقط. مسجل.',
        'Dehumidifier بعد الرش — يُجفف المبيد أسرع.',
        'تصريف بِرك — بعوض يتكاثر في مياه راكدة.',
        'Anti-Fungal — يقلل عفن = يقلل حشرات.',
    ],
    warnings: [
        'رش بدون Dehumidifier + 60-85% = مبيد لا يجف = فعالية 50% فقط.',
        'بِركة مياه مهملة + أسبوع = آلاف بعوض — خطر صحي.',
        'مبيد غير SFDA = مواد محظورة + غرامة 10000+ ريال.',
    ],
    trustAnchors: [
        { ...GOV.SFDA, role: 'تسجيل المبيدات — نظام غد' },
        { ...GOV.BALADI, role: 'ترخيص شركات المكافحة' },
        { entity: AMANA.ASIR.entity, url: AMANA.ASIR.url, role: 'اشتراطات أمانة عسير' },
    ],
    expertReviewer: EXPERTS.ALKHODAIRY,
    expertCitations: [
        { expert: EXPERTS.ALKHODAIRY.name, quote: 'حشرات خميس: رطوبة تُسرّع تكاثر 2×. عفن يجذب. IPM جبلي+Dehumidifier.', source: 'أبحاث سموم — حشرات جبلية' },
    ],
    saudiRegulations: [REGULATIONS.GHAD_SYSTEM],
    verificationBadges: [{ badge: '✔️ مكافحة مرخصة SFDA', authority: 'بلدي + SFDA', icon: 'shield-check' }],
    equipment: [
        { name: 'مبيد SFDA مسجل', use: 'نظام غد — فعّال وآمن' },
        { name: 'Dehumidifier', use: 'يُجفف المبيد أسرع — 60-85%' },
        { name: 'مبيد يرقات', use: 'بعوض — بِرك مياه أمطار' },
    ],
    hiddenObjections: [
        { fear: 'رش عادي يكفي.', solution: 'IPM = تشخيص أولاً. الرطوبة تحتاج Dehumidifier.' },
        { fear: 'مثل عنيزة.', solution: 'تكاثر 2× + بعوض + عفن يجذب = مختلف.' },
    ],
    consumerEducation: [
        { myth: 'المبيد يعمل مثل عنيزة.', truth: '60-85% = لا يجف = فعالية أقل. Dehumidifier.' },
        { myth: 'لا بعوض بخميس.', truth: 'أمطار = بِرك = بعوض. تصريف إلزامي.' },
    ],
    relatedServices: [
        { slug: 'pesticide-spraying', context: 'رش مبيدات', priority: 1 },
        { slug: 'bedbugs-control', context: 'بق فراش', priority: 2 },
        { slug: 'termite-control', context: 'نمل أبيض', priority: 3 },
        { slug: 'bird-control', context: 'طيور', priority: 4 },
        { slug: 'cleaning', context: 'تنظيف — عفن', priority: 5 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 6 },
        { slug: 'sewage-suction', context: 'صرف صحي', priority: 7 },
    ],
};
