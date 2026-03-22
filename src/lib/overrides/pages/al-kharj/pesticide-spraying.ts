import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../gov-references';

export const override: PageOverride = {
    meta: {
        title: 'رش مبيدات بالخرج — مبيدات زراعية-حيوانية+ذباب مزارع+سوس صوامع — SFDA غد! (2026)',
        description: 'رش مبيدات الخرج. مبيدات زراعية-حيوانية! ذباب مزارع 5-10×. سوس صوامع. صراصير NH₃. عقارب ΔT. SFDA غد.',
        h1: 'رش مبيدات بالخرج — مبيدات زراعية-حيوانية!',
        keywords: ['رش مبيدات الخرج', 'رش مبيدات بالخرج', 'شركة رش مبيدات الخرج'],
    },
    content: {
        introduction: 'رش المبيدات بالخرج = بروتوكول زراعي-حيواني متخصص! بيئة فريدة: الخرج عاصمة الألبان = 4 أنواع حشرات مختلفة تحتاج 4 مبيدات مختلفة. ذباب مزارع: Adulticide + Larvicide = إبادة بالغ + يرقات. ذباب 5-10× من الرياض = جرعة مقوّاة. سوس صوامع: Contact Insecticide متخصص + فحص أعلاف = Stored Product protocol. صراصير NH₃: Gel Bait + Residual = أكثر فعالية من الرش العام لصراصير NH₃. عقارب ΔT: Residual Dust في الشقوق + سد فتحات = منع دخول. SFDA نظام غد: كل مبيد مسجّل. 15-25% = تجفيف سريع بعد الرش — ميزة! مقارنة: الرياض = 2 نوع (صراصير+نمل). خميس = حشرات رطوبة. الخرج = حشرات زراعية = أعقد.',
        shortAnswer: 'على عكس [الرش العام بمبيد واحد]، يعتمد بروتوكولنا في خدمة [رش المبيدات] بمدينة [الخرج] على [4 مبيدات: Adulticide+Larvicide+Gel Bait+Residual Dust]. ففي ظل [ذباب 5-10×+سوس صوامع+صراصير NH₃+عقارب ΔT]، تتفاقم ظاهرة [4 أنواع مختلفة]. لذا؛ يتدخل فريقنا عبر [بروتوكول 4 مبيدات مسجّلة SFDA].',
        heroSubtitle: '4 أنواع = 4 مبيدات — ذباب + سوس + صراصير + عقارب!',
    },
    pricing: [
        { type: 'رش عام (شقة)', unit: 'شقة', minPrice: 80, maxPrice: 170, time: '1-2 ساعة' },
        { type: 'رش زراعي (4 مبيدات)', unit: 'شقة', minPrice: 130, maxPrice: 270, time: '2-3 ساعات' },
        { type: 'فيلا — شامل', unit: 'فيلا', minPrice: 220, maxPrice: 450, time: '3-5 ساعات' },
        { type: 'ربع سنوي (4 زيارات)', unit: 'سنة', minPrice: 350, maxPrice: 700, time: '4 زيارات' },
    ],
    faq: [
        { question: 'ليش الخرج تحتاج 4 مبيدات وليس 1؟', answer: '4 أنواع حشرات مختلفة: ذباب+سوس+صراصير+عقارب. كل نوع يحتاج مبيد مختلف.' },
        { question: 'هل المبيدات مسجّلة SFDA بالخرج؟', answer: 'كل مبيد مسجّل في نظام غد SFDA. شهادة تسجيل مع كل عملية.' },
        { question: 'كم تكلفة رش مبيدات بالخرج مقارنة بالرياض؟', answer: 'أغلى 30-40% — 4 مبيدات مقابل 1-2. لكن: مبيد واحد لا يكفي بالخرج.' },
        { question: 'هل الرش آمن للحيوانات الأليفة بالخرج؟', answer: 'Gel Bait+Residual Dust = أقل تعرض. فترة خروج 2-4 ساعات. SFDA آمن.' },
        { question: 'كم مرة رش بالخرج؟', answer: 'ربع سنوي — ΔT يسارع تكاثر. قرب مزرعة = كل شهرين.' },
    ],
    expertTips: [
        'Adulticide+Larvicide — ذباب بالغ+يرقات.',
        'Gel Bait — صراصير NH₃ أفعل من رش.',
        'Residual Dust — عقارب شقوق.',
        'فحص أعلاف — سوس صوامع.',
        'كل مبيد SFDA غد — مسجّل.',
    ],
    warnings: [
        'مبيد واحد لأربعة أنواع = لا يقتل الكل — بروتوكول 4 مبيدات.',
        'ذباب بدون Larvicide = بالغين يموتون + يرقات تفقس = مشكلة أسبوع.',
        'عقارب + فتحات مفتوحة = الرش فقط لا يكفي — سد فتحات.',
    ],
    trustAnchors: [
        { ...GOV.SFDA, role: 'تسجيل المبيدات — نظام غد' },
        { ...GOV.BALADI, role: 'ترخيص شركات المكافحة' },
        { entity: AMANA.RIYADH.entity, url: AMANA.RIYADH.url, role: 'اشتراطات أمانة الرياض' },
    ],
    expertReviewer: EXPERTS.ALKHODAIRY,
    expertCitations: [
        { expert: EXPERTS.ALKHODAIRY.name, quote: 'رش الخرج: 4 مبيدات. ذباب مزارع+سوس+صراصير+عقارب. مبيد واحد لا يكفي.', source: 'أبحاث سموم — رش زراعي' },
    ],
    saudiRegulations: [REGULATIONS.GHAD_SYSTEM],
    verificationBadges: [{ badge: '✔️ رش مبيدات SFDA', authority: 'بلدي + SFDA', icon: 'shield-check' }],
    equipment: [
        { name: 'Adulticide+Larvicide', use: 'ذباب — بالغ+يرقات' },
        { name: 'Gel Bait', use: 'صراصير NH₃ — أفعل من رش' },
        { name: 'Residual Dust', use: 'عقارب — شقوق ΔT' },
    ],
    commonConcerns: [
        { concern: 'مبيد واحد يكفي.', solution: '4 أنواع = 4 مبيدات. واحد لا يكفي.' },
        { concern: 'مثل الرياض.', solution: 'ذباب 5-10×+سوس+عقارب = أعقد.' },
    ],
    consumerEducation: [
        { myth: 'رش عام.', truth: '4 أنواع = 4 بروتوكولات مختلفة.' },
        { myth: 'نصف سنوي.', truth: 'ΔT تكاثر سريع = ربع سنوي.' },
    ],
    relatedServices: [
        { slug: 'pest-control', context: 'حشرات', priority: 1 },
        { slug: 'bedbugs-control', context: 'بق', priority: 2 },
        { slug: 'termite-control', context: 'نمل أبيض', priority: 3 },
        { slug: 'bird-control', context: 'طيور', priority: 4 },
        { slug: 'cleaning', context: 'تنظيف', priority: 5 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 6 },
        { slug: 'tanks-cleaning', context: 'خزانات', priority: 7 },
    ],
};
