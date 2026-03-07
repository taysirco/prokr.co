import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف مكيفات بالخرج — NH₃ مزارع ألبان + CaCO₃ 450ppm + SiO₂ + ΔT 48°م (2026)',
        description: 'تنظيف مكيفات الخرج. NH₃ مزارع ألبان/دواجن = رائحة+تآكل. CaCO₃ 450ppm Scale. SiO₂ صحراوي. ΔT 48°م. HEPA Activated Carbon + Descaler.',
        h1: 'تنظيف مكيفات بالخرج — مزارع ألبان تُرسل NH₃ وآبار ترسل كلس',
        keywords: ['تنظيف مكيفات الخرج', 'تنظيف مكيف بالخرج', 'شركة تنظيف مكيفات الخرج'],
    },
    content: {
        introduction: 'مكيف الخرج يواجه بيئة زراعية-حيوانية فريدة. التحدي 1 — NH₃/H₂S مزارع ألبان: الخرج = عاصمة الألبان (الصافي+المراعي+نادك) + دواجن = NH₃ أمونيا + H₂S كبريتيد هيدروجين. يدخل المكيف ← رائحة + تآكل نحاس Evaporator. HEPA Activated Carbon يمتص. فريد! التحدي 2 — CaCO₃ 450ppm: آبار جوفية = Scale. Descaler. التحدي 3 — SiO₂ صحراوي: Microfiber. التحدي 4 — ΔT 48°م: ضغط على Compressor. فحص FeD.',
        shortAnswer: 'على عكس [صيانة عادية] بدون Activated Carbon، يعتمد بروتوكولنا في خدمة [تنظيف المكيفات] بمدينة [الخرج] على [HEPA AC + Descaler + RO + فحص FeD]. ففي ظل [NH₃ مزارع + CaCO₃ + SiO₂ + ΔT]، تتفاقم ظاهرة [رائحة + Scale + خدش + ضغط]. لذا؛ يتدخل خبراؤنا عبر [بروتوكول مكيف زراعي-حيواني].',
        heroSubtitle: 'NH₃ مزارع ألبان + CaCO₃ 450ppm + SiO₂ + ΔT 48°م — رائحة+تآكل!',
    },
    pricing: [
        { type: 'سبليت — زراعي-حيواني', unit: 'مكيف', minPrice: 55, maxPrice: 120, time: '30-45 دقيقة' },
        { type: 'عميق (AC + Descaler)', unit: 'مكيف', minPrice: 100, maxPrice: 220, time: '1-2 ساعة' },
        { type: 'مركزي (دكت)', unit: 'وحدة', minPrice: 200, maxPrice: 420, time: '2-4 ساعات' },
        { type: 'عقد (4 زيارات/سنة)', unit: 'سنة', minPrice: 360, maxPrice: 720, time: '4 زيارات' },
    ],
    faq: [
        { question: 'NH₃ — رائحة من المكيف؟', answer: 'مزارع ألبان/دواجن = NH₃ يدخل المكيف ← يتراكم في Evaporator ← رائحة عند التشغيل. HEPA Activated Carbon يمتص.' },
        { question: 'مقابل بريدة — فرق؟', answer: 'بريدة: 8M نخلة طلع. الخرج: NH₃ مزارع. مختلف: طلع vs أمونيا.' },
        { question: 'CaCO₃ — أقل من بريدة؟', answer: '450ppm < 600ppm بريدة. لكن: Scale حقيقي. Descaler.' },
        { question: 'H₂S — يُتلف؟', answer: 'H₂S يتفاعل مع نحاس = CuS أسود ← يُقلل كفاءة. Activated Carbon.' },
        { question: 'كم مرة يحتاج مكيف الخرج صيانة؟', answer: '4 مرات/سنة — NH₃+CaCO₃+SiO₂ = تراكم أسرع. بريدة: 4 أيضاً لكن طلع. الرياض: 2-3 تكفي.' },
    ],
    expertTips: [
        'HEPA Activated Carbon — NH₃/H₂S.',
        'Descaler — CaCO₃ 450ppm.',
        'Microfiber — SiO₂.',
        'فحص FeD — ΔT 48°م.',
        'قرب مزرعة = AC أعمق.',
    ],
    warnings: [
        'NH₃ + نحاس = تآكل مُسرّع.',
        'H₂S = CuS أسود = كفاءة أقل.',
        'CaCO₃ بدون Descaler = Scale.',
    ],
    trustAnchors: [
        { ...GOV.SCE, role: 'كفاءة الطاقة' },
        { ...GOV.BALADI, role: 'ترخيص الصيانة' },
        { entity: AMANA.RIYADH.entity, url: AMANA.RIYADH.url, role: 'اشتراطات أمانة الرياض' },
    ],
    expertReviewer: EXPERTS.ALJUND,
    expertCitations: [
        { expert: EXPERTS.ALJUND.name, quote: 'مكيف الخرج: NH₃ مزارع ألبان + H₂S = تآكل نحاس. Activated Carbon إلزامي.', source: 'موسوعة أخطاء — مكيفات المناطق الزراعية-الحيوانية' },
    ],
    saudiRegulations: [REGULATIONS.SBC_601],
    verificationBadges: [{ badge: '✔️ صيانة مكيفات مرخصة', authority: 'بلدي + SCE', icon: 'shield-check' }],
    equipment: [
        { name: 'HEPA Activated Carbon', use: 'NH₃/H₂S — يمتص' },
        { name: 'Chemical Descaler', use: 'CaCO₃ 450ppm' },
        { name: 'RO Rinse', use: 'SiO₂' },
    ],
    hiddenObjections: [
        { fear: 'مثل الرياض.', solution: 'NH₃ مزارع. الرياض: لا مزارع ألبان قريبة.' },
        { fear: 'رائحة طبيعية.', solution: 'NH₃ = تآكل. ليس طبيعي.' },
    ],
    counterNarratives: [
        { myth: 'صيانة عادية.', truth: 'NH₃+H₂S. Activated Carbon.' },
        { myth: 'مرتين.', truth: 'NH₃+CaCO₃+SiO₂. 4.' },
    ],
    relatedServices: [
        { slug: 'cleaning', context: 'تنظيف', priority: 1 },
        { slug: 'carpet-cleaning', context: 'سجاد', priority: 2 },
        { slug: 'villas-cleaning', context: 'فلل', priority: 3 },
        { slug: 'apartments-cleaning', context: 'شقق', priority: 4 },
        { slug: 'pest-control', context: 'حشرات', priority: 5 },
        { slug: 'steam-cleaning', context: 'بخار', priority: 6 },
        { slug: 'glass-facades-cleaning', context: 'واجهات', priority: 7 },
    ],
};
