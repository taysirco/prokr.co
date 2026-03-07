import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'نقل عفش بعنيزة — ΔT تشقق خشب+Nafud SiO₂ خدش+48°م حرارة — ΔT Protection+تغليف! (2026)',
        description: 'نقل عفش عنيزة. ΔT تشقق خشب! Nafud خدش. 48°م حرارة. ΔT Protection+تغليف+شاحنة مكيفة.',
        h1: 'نقل عفش بعنيزة — ΔT تشقق+حرارة!',
        keywords: ['نقل عفش بعنيزة', 'نقل أثاث عنيزة', 'شركة نقل عفش بعنيزة'],
    },
    content: {
        introduction: 'نقل عفش عنيزة = ΔT تشقق+48°م حرارة! ΔT تشقق: 48°م نهار ← 25°م ليل = فرق 23°م ← خشب أثاث مُعرّض سابقاً لجفاف 10-20% ← مفاصل ضعيفة تتكسر بالاهتزاز! ΔT Protection تغليف. 48°م حرارة: شاحنة مكشوفة = أثاث يسخن 60°م+ ← شمع طلاء يذوب+خشب يتشقق أكثر. شاحنة مكيّفة أو معزولة. Nafud SiO₂: رمل ينتشر على الأثاث أثناء التحميل ← أي فرك = خدوش! تغليف. طرق مستقيمة: ميزة عنيزة = طرق سهلة+مستوية (عكس الباحة الجبلية). مقارنة: الباحة = جبلي+ضباب+PVAc Swelling. عنيزة = ΔT+48°م+Nafud لكن طرق سهلة.',
        shortAnswer: 'على عكس [الشاحنة المكشوفة]، يعتمد بروتوكولنا في خدمة [نقل العفش] بمدينة [عنيزة] على [ΔT Protection+شاحنة معزولة+تغليف Nafud]. ففي ظل [ΔT تشقق+48°م+Nafud SiO₂]، تتفاقم ظاهرة [كسر+ذوبان+خدش]. لذا؛ يتدخل فريقنا عبر [ΔT Protection ← تغليف ← شاحنة معزولة].',
        heroSubtitle: 'ΔT تشقق + 48°م ذوبان + Nafud خدش — شاحنة معزولة!',
    },
    pricing: [
        { type: 'شقة (غرفتين)', unit: 'نقلة', minPrice: 500, maxPrice: 1000, time: '3-5h' },
        { type: 'شقة (3-4 غرف)', unit: 'نقلة', minPrice: 800, maxPrice: 1600, time: '5-7h' },
        { type: 'فيلا كاملة', unit: 'نقلة', minPrice: 1500, maxPrice: 3000, time: '1-2 يوم' },
        { type: '+ شاحنة معزولة', unit: 'ترقية', minPrice: 200, maxPrice: 400, time: '— حماية' },
    ],
    faq: [
        { question: 'ليش أثاث عنيزة يتكسر أثناء النقل؟', answer: 'ΔT+10-20% = مفاصل جافة ضعيفة. اهتزاز = كسر.' },
        { question: 'ليش شاحنة معزولة بعنيزة؟', answer: '48°م = 60°م داخل شاحنة مكشوفة. شمع يذوب.' },
        { question: 'كم تكلفة نقل بعنيزة مقابل الباحة؟', answer: 'أرخص 15-20% — طرق مستقيمة+لا Mountain-Spec.' },
        { question: 'هل Nafud مشكلة أثناء النقل؟', answer: 'رمل ينتشر = خدوش. تغليف إلزامي.' },
        { question: 'أفضل وقت نقل بعنيزة؟', answer: 'فجر/مغرب. تجنب 48°م الظهر.' },
    ],
    expertTips: [
        'ΔT Protection — مفاصل جافة.',
        'شاحنة معزولة — 48°م.',
        'تغليف — Nafud خدوش.',
        'فجر/مغرب — حرارة أقل.',
        'طرق مستقيمة — ميزة!',
    ],
    warnings: [
        'ΔT + اهتزاز = مفاصل خشب تتكسر — Protection.',
        'مكشوفة + 48°م = 60°م داخل ← ذوبان شمع.',
        'Nafud + تحميل بدون تغليف = خدوش.',
    ],
    trustAnchors: [
        { ...GOV.TGA, role: 'ترخيص النقل' },
        { entity: AMANA.QASSIM.entity, url: AMANA.QASSIM.url, role: 'اشتراطات أمانة القصيم' },
    ],
    expertReviewer: EXPERTS.ALZUWAYED,
    expertCitations: [
        { expert: EXPERTS.ALZUWAYED.name, quote: 'نقل عنيزة: ΔT+48°م+Nafud. شاحنة معزولة+تغليف.', source: 'معايير النقل — القصيم' },
    ],
    saudiRegulations: [REGULATIONS.TGA_LICENSE],
    verificationBadges: [{ badge: '✔️ نقل مرخص TGA', authority: 'TGA', icon: 'shield-check' }],
    equipment: [
        { name: 'شاحنة معزولة', use: '48°م — حماية حرارة' },
        { name: 'ΔT Protection', use: 'تشقق خشب — مفاصل' },
        { name: 'تغليف Nafud', use: 'SiO₂ — لا خدوش' },
    ],
    hiddenObjections: [
        { fear: 'مكشوفة أرخص.', solution: '48°م = 60°م = ذوبان.' },
        { fear: 'مثل الباحة.', solution: 'ΔT vs PVAc. طرق سهلة.' },
    ],
    counterNarratives: [
        { myth: 'أي شاحنة.', truth: 'معزولة. 48°م = ذوبان.' },
        { myth: 'ΔT لا يأثر.', truth: 'مفاصل جافة تتكسر.' },
    ],
    relatedServices: [
        { slug: 'furniture-storage', context: 'تخزين', priority: 1 },
        { slug: 'dabab', context: 'دباب', priority: 2 },
        { slug: 'dyna', context: 'دينا', priority: 3 },
        { slug: 'cleaning', context: 'تنظيف', priority: 4 },
        { slug: 'furniture-cleaning', context: 'أثاث', priority: 5 },
        { slug: 'pest-control', context: 'حشرات', priority: 6 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 7 },
    ],
};
