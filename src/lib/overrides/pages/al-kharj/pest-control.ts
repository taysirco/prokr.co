import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'مكافحة حشرات بالخرج — حشرات مزارع ألبان+صوامع أعلاف+NH₃ — بروتوكول زراعي! (2026)',
        description: 'مكافحة حشرات الخرج. ذباب مزارع ألبان! سوس صوامع أعلاف. صراصير NH₃. بروتوكول زراعي-حيواني. SFDA غد.',
        h1: 'مكافحة حشرات بالخرج — حشرات مزارع — بروتوكول زراعي!',
        keywords: ['مكافحة حشرات الخرج', 'مكافحة حشرات بالخرج', 'شركة مكافحة حشرات الخرج'],
    },
    content: {
        introduction: 'حشرات الخرج = حشرات زراعية-حيوانية فريدة! ذباب مزارع ألبان/دواجن: الخرج عاصمة الألبان = روث+سماد+أعلاف = ذباب بأعداد 5-10× من الرياض. ΔT 48°م تسارع دورة حياة الذباب صيفاً. شبك+طرد+مبيد. سوس صوامع أعلاف: صوامع = Stored Product Insects (سوس+خنافس) تنتقل للمنازل القريبة. فحص أعلاف حيوانات أليفة. صراصير تتغذى على NH₃: أمونيا = مصدر نيتروجين = صراصير أكثر حول المنازل القريبة من مزارع. Gel Bait+Residual. عقارب حرارية: 15-25% + ΔT = عقارب تبحث عن رطوبة داخل المنازل. سد فتحات. مقارنة: خميس = حشرات رطوبة (عث+نمل). الخرج = حشرات زراعية (ذباب+سوس+صراصير).',
        shortAnswer: 'على عكس [الرش العام بدون بروتوكول زراعي]، يعتمد بروتوكولنا في خدمة [مكافحة الحشرات] بمدينة [الخرج] على [Gel Bait+Residual+شبك+فحص صوامع+سد فتحات]. ففي ظل [ذباب مزارع 5-10×+سوس صوامع+صراصير NH₃+عقارب ΔT]، تتفاقم ظاهرة [أعداد ضخمة+أنواع فريدة]. لذا؛ يتدخل فريقنا عبر [بروتوكول زراعي-حيواني متخصص].',
        heroSubtitle: 'ذباب مزارع 5-10× + سوس صوامع + صراصير NH₃ — زراعي!',
    },
    pricing: [
        { type: 'شقة — زراعي', unit: 'شقة', minPrice: 100, maxPrice: 220, time: '1-2 ساعة' },
        { type: 'فيلا — شامل', unit: 'فيلا', minPrice: 220, maxPrice: 450, time: '2-4 ساعات' },
        { type: '+ شبك ذباب', unit: 'إضافي', minPrice: 80, maxPrice: 170, time: '1-2 ساعة' },
        { type: 'ربع سنوي (4 زيارات)', unit: 'سنة', minPrice: 300, maxPrice: 620, time: '4 زيارات' },
    ],
    faq: [
        { question: 'ليش ذباب الخرج أكثر 5-10× من الرياض؟', answer: 'مزارع ألبان+دواجن = روث+سماد+أعلاف = مصدر تكاثر. ΔT يسارع الدورة.' },
        { question: 'ما هي حشرات الصوامع بالخرج؟', answer: 'سوس+خنافس Stored Product Insects. تنتقل للمنازل القريبة من صوامع.' },
        { question: 'كم تكلفة مكافحة حشرات بالخرج مقارنة بالرياض؟', answer: 'أغلى 20-30% — ذباب 5-10× + أنواع زراعية = بروتوكول أعقد.' },
        { question: 'ليش صراصير أكثر قرب مزارع الخرج؟', answer: 'NH₃ = نيتروجين = غذاء. صراصير تتجمع حول مصادر NH₃. Gel Bait.' },
        { question: 'هل عقارب موجودة بالخرج؟', answer: '15-25% + ΔT = عقارب تبحث عن رطوبة داخلياً. سد فتحات + شبك.' },
    ],
    expertTips: [
        'شبك — ذباب مزارع 5-10×.',
        'Gel Bait — صراصير NH₃.',
        'فحص أعلاف أليفة — سوس صوامع.',
        'سد فتحات — عقارب حرارية.',
        'ربع سنوي — تكاثر سريع بالحرارة.',
    ],
    warnings: [
        'ذباب مزارع × صيف = دورة حياة أسرع — أعداد تتضاعف أسبوعياً.',
        'سوس صوامع في أعلاف حيوانات أليفة = انتشار داخل المنزل.',
        'عقارب + فتحات مفتوحة = لدغة — خطر صحي حقيقي.',
    ],
    trustAnchors: [
        { ...GOV.SFDA, role: 'تسجيل المبيدات — نظام غد' },
        { ...GOV.BALADI, role: 'ترخيص شركات المكافحة' },
        { entity: AMANA.RIYADH.entity, url: AMANA.RIYADH.url, role: 'اشتراطات أمانة الرياض' },
    ],
    expertReviewer: EXPERTS.ALKHODAIRY,
    expertCitations: [
        { expert: EXPERTS.ALKHODAIRY.name, quote: 'حشرات الخرج: زراعية-حيوانية. ذباب 5-10×+سوس صوامع. بروتوكول مختلف.', source: 'أبحاث سموم — حشرات زراعية' },
    ],
    saudiRegulations: [REGULATIONS.GHAD_SYSTEM],
    verificationBadges: [{ badge: '✔️ مكافحة مرخصة', authority: 'بلدي + SFDA', icon: 'shield-check' }],
    equipment: [
        { name: 'Gel Bait', use: 'صراصير — NH₃ جذب' },
        { name: 'Residual Spray', use: 'ذباب + سوس — حماية طويلة' },
        { name: 'شبك صناعي', use: 'ذباب مزارع — حاجز فيزيائي' },
    ],
    commonConcerns: [
        { concern: 'مثل الرياض.', solution: 'ذباب 5-10×+سوس+NH₃ = مختلف.' },
        { concern: 'رش عام يكفي.', solution: '4 أنواع مختلفة = بروتوكول متخصص.' },
    ],
    consumerEducation: [
        { myth: 'رش واحد.', truth: 'ذباب+صراصير+سوس+عقارب = 4 بروتوكولات.' },
        { myth: 'مرتين بالسنة.', truth: 'ΔT = تكاثر سريع. ربع سنوي.' },
    ],
    relatedServices: [
        { slug: 'pesticide-spraying', context: 'رش مبيدات', priority: 1 },
        { slug: 'bedbugs-control', context: 'بق فراش', priority: 2 },
        { slug: 'termite-control', context: 'نمل أبيض', priority: 3 },
        { slug: 'bird-control', context: 'طيور', priority: 4 },
        { slug: 'cleaning', context: 'تنظيف', priority: 5 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 6 },
        { slug: 'tanks-cleaning', context: 'خزانات', priority: 7 },
    ],
};
