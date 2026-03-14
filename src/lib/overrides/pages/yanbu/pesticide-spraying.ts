import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'رش مبيدات بينبع — 70-85% بعوض+صراصير+NaCl+SOx+ميناء — IGR+BTI+Residual! (2026)',
        description: 'رش مبيدات ينبع. 70-85% بعوض+صراصير! NaCl+SOx. ميناء. IGR+BTI+Residual ساحلي+رش مُركّز.',
        h1: 'رش مبيدات بينبع — بعوض+صراصير+ميناء!',
        keywords: ['رش مبيدات ينبع', 'رش مبيد بينبع', 'شركة رش مبيدات ينبع'],
    },
    content: {
        introduction: 'رش مبيدات بينبع = ساحلي-صناعي! 70-85% تكاثر: أعلى رطوبة = بعوض Aedes+صراصير ألمانية+عفن حشري. دورة حياة أقصر = تكاثر مضاعف. BTI بيولوجي للبعوض+IGR للصراصير+Gel Bait. NaCl: ملح لا يأثر على المبيد مباشرة. لكن: رطوبة تُخفف Residual = مدة أقصر. رش أكثر تكراراً. SOx: لا يأثر مباشرة. ميناء: سفن تنقل حشرات غريبة (Pharaoh ants, Tropical roaches). مستودعات = بيئة تكاثر. حرارة 45°م: حشرات أنشط. رش مسائي أفضل. مقارنة: بريدة = 10-20% جاف = لا بعوض! لكن: ΔT حشرات تتكاثر. ينبع: بعوض+صراصير+عفن+ميناء = أكثر تنوع.',
        shortAnswer: 'على عكس [الرش العام السطحي]، يعتمد بروتوكولنا في خدمة [رش المبيدات] بمدينة [ينبع] على [IGR+BTI+Gel+Residual ساحلي+رش مُركّز]. ففي ظل [70-85% تكاثر+ميناء+حرارة+NaCl يُخفف]، تتفاقم ظاهرة [بعوض+صراصير+أنواع غريبة]. لذا؛ يتدخل فنيونا عبر [BTI ← IGR ← Gel ← Residual ساحلي].',
        heroSubtitle: '70-85% بعوض+صراصير + ميناء أنواع غريبة — BTI+IGR!',
    },
    pricing: [
        { type: 'شقة — رش شامل', unit: 'شقة', minPrice: 100, maxPrice: 210, time: '30-60 دقيقة' },
        { type: 'فيلا — شاملة + BTI', unit: 'فيلا', minPrice: 200, maxPrice: 420, time: '1-2h' },
        { type: 'تجاري/مستودع', unit: 'م²', minPrice: 3, maxPrice: 8, time: 'حسب المساحة' },
        { type: 'شهري (4 رشات)', unit: 'شهر', minPrice: 180, maxPrice: 370, time: '4 زيارات' },
    ],
    faq: [
        { question: 'ليش رش ينبع أكثر تكراراً؟', answer: '70-85% يُخفف Residual = مدة أقصر. شهري vs ربع سنوي ببريدة.' },
        { question: 'ليش BTI بينبع وليس بريدة؟', answer: 'بعوض 70-85% ركود. بريدة: 10-20% لا بعوض!' },
        { question: 'هل الميناء يجلب حشرات بينبع؟', answer: 'Pharaoh ants+Tropical roaches. سفن تنقل. فحص دوري.' },
        { question: 'كم تكلفة رش بينبع مقابل بريدة؟', answer: 'أغلى 20-25% — BTI+IGR+تكرار أكثر.' },
        { question: 'هل الرش المسائي أفضل بينبع؟', answer: 'حرارة 45°م = حشرات تختبئ نهاراً. مسائي = أكثر فعالية.' },
    ],
    expertTips: [
        'BTI — بعوض ركود مياه.',
        'IGR — صراصير مانع نمو.',
        'Gel Bait — صراصير ألمانية.',
        'شهري — 70-85% يُخفف.',
        'مسائي — حرارة نهار.',
    ],
    warnings: [
        '70-85% يُخفف Residual = رش أكثر تكراراً — شهري.',
        'ركود مياه + بدون BTI = بعوض ← أمراض YMYL.',
        'ميناء + حشرات غريبة = فحص متخصص.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص شركات المكافحة' },
        { entity: AMANA.MADINAH.entity, url: AMANA.MADINAH.url, role: 'اشتراطات أمانة ينبع' },
    ],
    expertReviewer: EXPERTS.ALKHODAIRY,
    expertCitations: [
        { expert: EXPERTS.ALKHODAIRY.name, quote: 'رش ينبع: 70-85% يُخفف Residual. BTI+IGR. شهري. ميناء.', source: 'حشرات المملكة — رش ساحلي' },
    ],
    saudiRegulations: [REGULATIONS.GHAD_SYSTEM],
    verificationBadges: [{ badge: '✔️ رش مبيدات مرخص', authority: 'بلدي + SFDA', icon: 'shield-check' }],
    equipment: [
        { name: 'BTI Granules', use: 'بعوض — يرقات بيولوجي' },
        { name: 'IGR (Insect Growth Regulator)', use: 'صراصير — مانع نمو' },
        { name: 'Residual ساحلي', use: '70-85% — مدة أطول' },
    ],
    hiddenObjections: [
        { fear: 'رش عام.', solution: 'BTI+IGR+Gel = متخصص ثلاثي.' },
        { fear: 'ربع سنوي.', solution: '70-85% = شهري. Residual يُخفف.' },
    ],
    consumerEducation: [
        { myth: 'رش عام.', truth: 'BTI+IGR+Gel = ثلاثي.' },
        { myth: 'ربع سنوي.', truth: '70-85% = شهري.' },
    ],
    relatedServices: [
        { slug: 'pest-control', context: 'حشرات', priority: 1 },
        { slug: 'bedbugs-control', context: 'بق', priority: 2 },
        { slug: 'termite-control', context: 'نمل أبيض', priority: 3 },
        { slug: 'bird-control', context: 'طيور', priority: 4 },
        { slug: 'cleaning', context: 'تنظيف', priority: 5 },
        { slug: 'tanks-cleaning', context: 'خزانات', priority: 6 },
        { slug: 'sewage-suction', context: 'شفط', priority: 7 },
    ],
};
