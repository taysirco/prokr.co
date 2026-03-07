import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'مكافحة بق الفراش ببريدة — ΔT 45°م بق حراري+نخيل ألياف خبيء+Nafud — Heat+Residual! (2026)',
        description: 'مكافحة بق الفراش بريدة. ΔT 45°م بق حراري! ألياف نخيل خبيء. Nafud غبار. Heat Treatment+Residual+HEPA.',
        h1: 'مكافحة بق الفراش ببريدة — بق حراري ونخيل!',
        keywords: ['مكافحة بق الفراش بريدة', 'مكافحة بق ببريدة', 'شركة مكافحة بق بريدة'],
    },
    content: {
        introduction: 'بق فراش بريدة = بق حراري يتكاثر أسرع! ΔT 45°م: صيف 48°م يسارع دورة حياة البق = يتكاثر أسرع 2× من المدن المعتدلة. لكن: Heat Treatment 55°م يقتل! حرارة الصيف ميزة — سخّن الغرفة إضافي ← يموت أسرع. نخيل ألياف خبيء: 8M نخلة = ألياف نخيل تدخل الغرفة ← البق يختبئ فيها. فحص ألياف النخيل حول الأثاث. Nafud SiO₂: غبار ناعم يدخل الغرفة ← يتراكم حول السرير ← يُخفي أدلة البق (بقع دم+فضلات). تنظيف أولاً ← ثم بحث. 10-20% = لا رطوبة ← البق يبحث عن رطوبة الجسم أكثر. مقارنة: خميس = بق+عفن+عث = 3 مشاكل. بريدة = بق فقط (لا عفن لا عث) = أبسط.',
        shortAnswer: 'على عكس [الرش بدون Heat Treatment الذي لا يقتل البيض]، يعتمد بروتوكولنا في خدمة [مكافحة بق الفراش] بمدينة [بريدة] على [Heat 55°م+Residual+HEPA+فحص ألياف]. ففي ظل [ΔT تكاثر سريع+نخيل خبيء+Nafud إخفاء+10-20% جاف]، تتفاقم ظاهرة [تكاثر 2×+اختباء+إخفاء]. لذا؛ يتدخل فريقنا عبر [Heat ← Residual ← HEPA ← فحص ألياف].',
        heroSubtitle: 'ΔT بق حراري + نخيل خبيء + Nafud إخفاء — Heat 55°م!',
    },
    pricing: [
        { type: 'Heat Treatment (غرفة)', unit: 'غرفة', minPrice: 250, maxPrice: 520, time: '4-6 ساعات' },
        { type: 'Heat + Residual (شقة)', unit: 'شقة', minPrice: 500, maxPrice: 1000, time: '6-8 ساعات' },
        { type: 'فحص + كشف', unit: 'زيارة', minPrice: 100, maxPrice: 200, time: '1-2 ساعة' },
        { type: 'ضمان 3 أشهر (3 زيارات)', unit: 'باقة', minPrice: 600, maxPrice: 1200, time: '3 زيارات' },
    ],
    faq: [
        { question: 'ليش بق بريدة يتكاثر أسرع؟', answer: 'ΔT 45°م صيف = حرارة تسارع دورة الحياة 2×. Heat 55°م يقتل أسرع أيضاً.' },
        { question: 'كيف النخيل يأثر على البق ببريدة؟', answer: 'ألياف نخيل = مخبأ إضافي حول الأثاث. فحص ألياف إلزامي مع كل معالجة.' },
        { question: 'كم تكلفة مكافحة بق ببريدة مقارنة بخميس؟', answer: 'متقاربة — لكن بريدة: بق فقط. خميس: بق+عفن+عث = أعقد.' },
        { question: 'هل الرش يكفي لبق بريدة؟', answer: 'لا! البيض مقاوم. Heat 55°م يقتل الكل. Residual يمنع إعادة الإصابة.' },
        { question: 'هل Nafud يخفي البق ببريدة؟', answer: 'غبار ناعم يتراكم ← يُخفي بقع دم+فضلات = أدلة. تنظيف أولاً ← فحص.' },
    ],
    expertTips: [
        'Heat 55°م — يقتل الكل بما فيه البيض.',
        'الصيف ميزة — سخّن إضافي = أسرع.',
        'فحص ألياف نخيل — مخبأ إضافي.',
        'تنظيف Nafud أولاً — يكشف أدلة.',
        'Residual — يمنع إعادة الإصابة.',
    ],
    warnings: [
        'رش بدون Heat = البيض يبقى ← إعادة إصابة 2-3 أسابيع.',
        'ΔT × صيف = تكاثر 2× ← تأخير أسبوع = ضعف الأعداد.',
        'نخيل ألياف غير مفحوصة = مخبأ ← إعادة إصابة رغم المعالجة.',
    ],
    trustAnchors: [
        { ...GOV.SFDA, role: 'تسجيل المبيدات — نظام غد' },
        { ...GOV.BALADI, role: 'ترخيص شركات المكافحة' },
        { entity: AMANA.QASSIM.entity, url: AMANA.QASSIM.url, role: 'اشتراطات أمانة القصيم' },
    ],
    expertReviewer: EXPERTS.ALKHODAIRY,
    expertCitations: [
        { expert: EXPERTS.ALKHODAIRY.name, quote: 'بق بريدة: حراري يتكاثر أسرع. Heat 55°م. ألياف نخيل: مخبأ إضافي.', source: 'أبحاث سموم — بق حراري' },
    ],
    saudiRegulations: [REGULATIONS.GHAD_SYSTEM],
    verificationBadges: [{ badge: '✔️ مكافحة بق مرخصة', authority: 'بلدي + SFDA', icon: 'shield-check' }],
    equipment: [
        { name: 'Heat Treatment 55°م', use: 'يقتل بق+بيض — حرارة' },
        { name: 'Residual Spray', use: 'حماية طويلة — يمنع إعادة' },
        { name: 'HEPA Vacuum', use: 'ألياف نخيل+Nafud+فضلات' },
    ],
    hiddenObjections: [
        { fear: 'رش يكفي.', solution: 'البيض مقاوم. Heat يقتل الكل.' },
        { fear: 'مثل عنيزة.', solution: 'بريدة: 8M نخلة = ألياف أكثر.' },
    ],
    counterNarratives: [
        { myth: 'رش عام.', truth: 'بيض مقاوم = Heat 55°م.' },
        { myth: 'مرة واحدة.', truth: 'ΔT تكاثر سريع. 3 زيارات ضمان.' },
    ],
    relatedServices: [
        { slug: 'pest-control', context: 'حشرات', priority: 1 },
        { slug: 'pesticide-spraying', context: 'رش مبيدات', priority: 2 },
        { slug: 'cleaning', context: 'تنظيف', priority: 3 },
        { slug: 'steam-cleaning', context: 'بخار', priority: 4 },
        { slug: 'carpet-cleaning', context: 'سجاد', priority: 5 },
        { slug: 'sofa-cleaning', context: 'كنب', priority: 6 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 7 },
    ],
};
