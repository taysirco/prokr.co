import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'مكافحة حشرات بعنيزة — 8 مليون نخلة + Dubas + سوسة حمراء + نمل حريقة + عقارب (2026)',
        description: 'مكافحة حشرات عنيزة. 8M+ نخلة = Dubas + سوسة حمراء RPW. نمل حريقة Fire Ant. عقارب صحراوية. 48°م = دورة 21 يوم. Fipronil + IGR + مصائد فيرومون.',
        h1: 'مكافحة حشرات بعنيزة — نخيل + Dubas + سوسة حمراء + عقارب',
        keywords: ['مكافحة حشرات بعنيزة', 'مكافحة حشرات عنيزة', 'شركة مكافحة حشرات بعنيزة', 'رش حشرات عنيزة'],
    },
    content: {
        introduction: 'عنيزة = عاصمة التمور. 8 مليون+ نخلة = مصنع حشرات مفتوح. المصدر الأول — حشرات النخيل: Dubas Bug (حشرة الدوباس) تُفرز عسلاً لزجاً (Honeydew) يجذب النمل + الذباب. سوسة النخيل الحمراء (Red Palm Weevil — RPW) = أخطر آفة — تقتل النخلة من الداخل. مصائد فيرومون + Phosphine Fumigation. المصدر الثاني — نمل حريقة (Fire Ant): المزارع والأحياء المحاذية (البركة، الناصرية) = لدغة مؤلمة + حساسية. Fipronil Granular. المصدر الثالث — عقارب صحراوية: أطراف عنيزة (قرب النفود) = عقرب أصفر Deathstalker. مصائد + ختم شقوق. المصدر الرابع — دورة حياة مُسرّعة: 48°م = Bedbug lifecycle 21 يوم (بدلاً من 45). تكاثر × 5 شهرياً. IGR إلزامي.',
        shortAnswer: 'على عكس [رش عام]، يعتمد بروتوكولنا في مكافحة حشرات عنيزة على [مصائد فيرومون RPW + Fipronil نمل + مصائد عقارب + IGR دورة 21 يوم]. ففي [8M+ نخلة + 48°م]، الرش العام لا يكفي.',
        heroSubtitle: '8M+ نخلة = Dubas + RPW + نمل حريقة + عقارب + دورة 21 يوم',
    },
    pricing: [
        { type: 'مكافحة شاملة — شقة', unit: 'شقة', minPrice: 150, maxPrice: 300, time: '2-3 ساعات' },
        { type: 'مكافحة شاملة — فيلا + مزرعة', unit: 'فيلا', minPrice: 400, maxPrice: 900, time: '4-6 ساعات' },
        { type: 'مكافحة RPW — نخيل', unit: '10 نخلات', minPrice: 300, maxPrice: 700, time: '2-4 ساعات' },
        { type: 'عقد ربع سنوي', unit: 'سنة', minPrice: 600, maxPrice: 1500, time: '4 زيارات' },
    ],
    faq: [
        { question: 'سوسة حمراء — تقتل النخلة؟', answer: 'RPW تأكل الجذع من الداخل. بدون كشف مبكر = النخلة تموت خلال 6-12 شهراً. مصائد فيرومون + فحص صوتي.' },
        { question: 'Dubas — الندى اللزج؟', answer: 'Honeydew: إفراز سكري يجذب نمل + ذباب + يُنبت فطر أسود (Sooty Mold). يسقط على السيارات والأثاث الخارجي.' },
        { question: 'نمل حريقة — أي أحياء؟', answer: 'البركة، الناصرية، أحياء المزارع. لدغة = حساسية. Fipronil Granular حول المحيط.' },
        { question: '48°م — الحشرات تنشط أكثر؟', answer: 'بق الفراش: دورة 21 يوم بدلاً من 45. تكاثر × 5. IGR يمنع البيض من النضوج.' },
        { question: 'عقارب — أطراف المدينة؟', answer: 'Deathstalker قرب النفود. ختم شقوق أساس + مصائد UV ليلية.' },
    ],
    expertTips: [
        'مصائد فيرومون لـ RPW — كشف مبكر قبل الأعراض.',
        'Fipronil Granular حول محيط الفيلا — نمل حريقة.',
        'IGR مع كل دورة — 48°م = تكاثر × 5.',
        'ختم شقوق أساس — عقارب.',
        'Honeydew: غسيل سيارات فوري — يتصلب.',
    ],
    warnings: [
        'RPW بدون كشف مبكر = نخلة ميتة خلال 6-12 شهراً.',
        'نمل حريقة: لدغة = حساسية مُفرطة (Anaphylaxis) عند بعض الأشخاص.',
        'عقرب Deathstalker: لدغة تحتاج مستشفى فوراً.',
    ],
    trustAnchors: [{ ...GOV.BALADI, role: 'ترخيص شركات مكافحة الآفات' }, { ...GOV.WEQAA, role: 'تسجيل المبيدات' }],
    expertReviewer: EXPERTS.ALKHODAIRY,
    expertCitations: [
        { expert: EXPERTS.ALKHODAIRY.name, quote: 'عنيزة: 8 مليون نخلة = أكبر مصنع حشري مفتوح في المملكة. Dubas + RPW + نمل حريقة = 3 طبقات. + 48°م = دورة 21 يوم. بروتوكول رباعي.', source: 'أبحاث حشرات — حشرات النخيل في القصيم' },
    ],
    saudiRegulations: [REGULATIONS.GHAD_SYSTEM],
    verificationBadges: [{ badge: '✔️ مكافحة مرخصة', authority: 'بلدي + وقاء', icon: 'shield-check' }],
    equipment: [
        { name: 'مصائد فيرومون RPW', use: 'كشف سوسة حمراء مبكر — قبل الأعراض' },
        { name: 'Fipronil Granular', use: 'نمل حريقة — محيط الفيلا' },
        { name: 'IGR (منظم نمو)', use: 'يمنع دورة 21 يوم من التكاثر' },
        { name: 'مصائد UV ليلية', use: 'عقارب Deathstalker — أطراف المدينة' },
    ],
    hiddenObjections: [{ fear: 'رش واحد يكفي.', solution: '4 مصادر مختلفة (نخيل + نمل + عقارب + حرارة). رش واحد ≠ يغطي. بروتوكول رباعي.' }],
    counterNarratives: [{ myth: 'الحرارة تقتل الحشرات.', truth: '48°م = تُسرّع دورة الحياة. بق 21 يوم بدلاً من 45. الحرارة = صديقة الحشرات.' }],
    relatedServices: [
        { slug: 'bedbugs-control', context: 'بق — دورة 21 يوم', priority: 1 },
        { slug: 'termite-control', context: 'نمل أبيض — نخيل سليلوز', priority: 2 },
        { slug: 'cleaning', context: 'تنظيف — بعد مكافحة', priority: 3 },
        { slug: 'tanks-cleaning', context: 'خزانات — CaCO₃', priority: 4 },
    ],
};
