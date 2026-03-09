import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'مكافحة طيور بخميس مشيط — ضباب+أمطار = تجمع أكبر + عفن فضلات 60-85% — طارد+شبك (2026)',
        description: 'مكافحة طيور خميس مشيط. ضباب+أمطار = طيور تتجمع. 60-85% = عفن فضلات أسرع. Histoplasma. طارد+شبك+تنظيف Anti-Fungal.',
        h1: 'مكافحة طيور بخميس مشيط — ضباب وعفن فضلات',
        keywords: ['مكافحة طيور خميس مشيط', 'طرد حمام بخميس مشيط', 'شركة مكافحة طيور خميس مشيط'],
    },
    content: {
        introduction: 'الطيور في خميس مشيط أخطر بسبب الرطوبة! أولاً: ضباب+أمطار = مصادر مياه متعددة ← طيور (حمام+عصافير) تتجمع أكثر حول المباني. ثانياً — الأخطر: 60-85% رطوبة = فضلات الطيور تتعفّن أسرع 3× مقارنة بالمدن الصحراوية. في عنيزة (15-25%): فضلات تجف وتتحلل كغبار. في خميس: فضلات رطبة = بيئة مثالية لـ Histoplasma capsulatum (فطر تنفسي خطير). Anti-Fungal للتنظيف إلزامي. الأمطار تغسل فضلات من الأسطح إلى المداخل والممرات ← تلوث أوسع. الحل: طارد بصري+صوتي (لا تسميم — الأنظمة تمنع) + شبك فتحات + تنظيف Anti-Fungal دوري. مقارنة: عنيزة = طارد+شبك يكفي. خميس = +Anti-Fungal تنظيف = أغلى 20%.',
        shortAnswer: 'على عكس [الطرد فقط بدون تنظيف Anti-Fungal]، يعتمد بروتوكولنا في خدمة [مكافحة الطيور] بمدينة [خميس مشيط] على [طارد+شبك+تنظيف Anti-Fungal دوري]. ففي ظل [ضباب+أمطار+60-85%+فضلات تتعفّن 3×]، تتفاقم ظاهرة [Histoplasma+تلوث أوسع+رائحة]. لذا؛ يتدخل فريقنا عبر [طرد ← شبك ← تنظيف ← تعقيم] لبيئة صحية.',
        heroSubtitle: 'ضباب تجمع + 60-85% عفن فضلات — Histoplasma خطير!',
    },
    pricing: [
        { type: 'طارد+شبك (واجهة)', unit: 'متر طولي', minPrice: 25, maxPrice: 55, time: 'يوم' },
        { type: 'تنظيف فضلات + Anti-Fungal', unit: 'خدمة', minPrice: 150, maxPrice: 320, time: '2-3 ساعات' },
        { type: 'سطح كامل', unit: 'سطح', minPrice: 300, maxPrice: 650, time: '4-6 ساعات' },
        { type: 'صيانة ربع سنوية', unit: 'سنة', minPrice: 400, maxPrice: 850, time: '4 زيارات' },
    ],
    faq: [
        { question: 'ليش فضلات الطيور أخطر بخميس مشيط؟', answer: '60-85% = فضلات تتعفّن 3× أسرع = Histoplasma capsulatum (فطر تنفسي). عنيزة: تجف وتتحلل. خميس: تتعفّن.' },
        { question: 'كيف أمنع تجمع الطيور بخميس مشيط؟', answer: 'طارد بصري+صوتي + شبك فتحات. لا تسميم (الأنظمة تمنع). ضباب+أمطار = مصادر مياه تجذبها.' },
        { question: 'كم تكلفة مكافحة طيور بخميس مقارنة بعنيزة؟', answer: 'أغلى 20% — Anti-Fungal تنظيف فضلات إضافي. عنيزة: طارد+شبك يكفي (فضلات تجف).' },
        { question: 'هل تنظيف الفضلات يحتاج Anti-Fungal بخميس مشيط؟', answer: 'إلزامي! Histoplasma ينمو في فضلات رطبة. بدون Anti-Fungal = خطر تنفسي لمن يُنظف.' },
        { question: 'متى أفضل وقت لتركيب طارد بخميس مشيط؟', answer: 'قبل موسم الأمطار (أكتوبر) — الأمطار تجذب الطيور. والربيع (موسم تزاوج).' },
    ],
    expertTips: [
        'طارد بصري+صوتي — لا تسميم (نظام يمنع).',
        'شبك فتحات — يمنع تعشيش داخل المبنى.',
        'Anti-Fungal عند التنظيف — Histoplasma خطير.',
        'كمامة N95 للعمال — فضلات رطبة = فطر تنفسي.',
        'تنظيف دوري — أمطار تغسل فضلات للممرات.',
    ],
    warnings: [
        'تنظيف فضلات بدون Anti-Fungal + 60-85% = خطر Histoplasma تنفسي — YMYL.',
        'فضلات على واجهات + أمطار = حمض يأكل الطلاء والخرسانة.',
        'تعشيش في فتحات تهوية = انسداد + فضلات داخل المبنى = Sick Building.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص مكافحة آفات' },
        { entity: AMANA.ASIR.entity, url: AMANA.ASIR.url, role: 'اشتراطات أمانة عسير' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALMISNID.name, quote: 'فضلات طيور خميس: Histoplasma بسبب رطوبة. Anti-Fungal إلزامي. أخطر من الصحراء.', source: 'أبحاث سموم — فطريات بيئية' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ مكافحة آفات مرخصة', authority: 'بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'طارد بصري+صوتي', use: 'يمنع تجمع بدون تسميم (نظام يمنع)' },
        { name: 'شبك ستانلس', use: 'يمنع تعشيش في فتحات' },
        { name: 'Anti-Fungal صناعي', use: 'يقتل Histoplasma في فضلات رطبة' },
    ],
    hiddenObjections: [
        { fear: 'تسميم أسرع.', solution: 'الأنظمة تمنع. طارد+شبك = حل دائم ومشروع.' },
        { fear: 'مثل عنيزة.', solution: 'فضلات رطبة = Histoplasma. أخطر. Anti-Fungal إلزامي.' },
    ],
    counterNarratives: [
        { myth: 'فضلات طيور غير خطيرة.', truth: '60-85% = Histoplasma فطر تنفسي. خطير بالرطوبة.' },
        { myth: 'طارد يكفي.', truth: 'طارد+شبك+تنظيف Anti-Fungal. الفضلات الموجودة خطيرة.' },
    ],
    relatedServices: [
        { slug: 'pest-control', context: 'حشرات', priority: 1 },
        { slug: 'cleaning', context: 'تنظيف — فضلات', priority: 2 },
        { slug: 'glass-facades-cleaning', context: 'واجهات — فضلات', priority: 3 },
        { slug: 'roof-insulation', context: 'سطح', priority: 4 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف — تعشيش', priority: 5 },
        { slug: 'water-insulation', context: 'عزل مائي', priority: 6 },
        { slug: 'termite-control', context: 'نمل أبيض', priority: 7 },
    ],
};
