import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تخزين عفش بالخرج — ΔT 48°م تشقق+SiO₂ غبار+NH₃ رائحة — مستودع مُكيّف! (2026)',
        description: 'تخزين عفش الخرج. ΔT 48°م يُشقّق خشب! SiO₂ غبار يتسلل. NH₃ رائحة. مستودع مُكيّف+محكم+AC. لا رطوبة!',
        h1: 'تخزين عفش بالخرج — ΔT وغبار — مُكيّف!',
        keywords: ['تخزين عفش الخرج', 'تخزين أثاث بالخرج', 'شركة تخزين عفش الخرج'],
    },
    content: {
        introduction: 'تخزين عفش بالخرج يحتاج مستودع مُكيّف! ΔT 48°م = أخطر فارق على التخزين: صيف 50°م في مستودع غير مُكيّف = الخشب يفقد رطوبته ← تشققات+التواء. شتاء بارد 2°م = الخشب يتمدد. دورة يومية تُتلف. مستودع مُكيّف 22-25°م ثابت. SiO₂ غبار يتسلل: غبار صحراوي يدخل من الشقوق ← يتراكم على العفش شهرياً. مستودع محكم + تغطية. NH₃ رائحة: لو المستودع قرب مزرعة = أمونيا تتراكم في الأقمشة. فلتر HEPA AC. لكن: 15-25% = لا رطوبة! لا عفن! ميزة كبيرة. مقارنة: خميس = رطوبة+عفن+عث = أغلى 30%. الخرج = حرارة+غبار لكن لا عفن = أبسط.',
        shortAnswer: 'على عكس [المستودع غير المُكيّف الذي يُشقّق الخشب]، يعتمد بروتوكولنا في خدمة [تخزين العفش] بمدينة [الخرج] على [مستودع مُكيّف 22-25°م+محكم+HEPA AC]. ففي ظل [ΔT 48°م+SiO₂ غبار+NH₃ رائحة+15-25%]، تتفاقم ظاهرة [تشقق+غبار+رائحة]. لذا؛ يتدخل فريقنا عبر [مُكيّف ← إحكام ← تغطية ← AC] — ميزة: لا عفن!',
        heroSubtitle: 'ΔT 48°م تشقق + SiO₂ غبار — مُكيّف! لا عفن!',
    },
    pricing: [
        { type: 'غرفة صغيرة (شهري)', unit: 'شهر', minPrice: 200, maxPrice: 400, time: 'شهري' },
        { type: 'غرفة كبيرة (شهري)', unit: 'شهر', minPrice: 350, maxPrice: 700, time: 'شهري' },
        { type: 'مستودع مُكيّف (شهري)', unit: 'شهر', minPrice: 500, maxPrice: 1000, time: 'شهري' },
        { type: 'سنوي (خصم 20%)', unit: 'سنة', minPrice: 4800, maxPrice: 9600, time: 'سنوي' },
    ],
    faq: [
        { question: 'ليش المستودع المُكيّف ضروري بالخرج؟', answer: 'ΔT 48°م = تشقق خشب+التواء. مُكيّف 22-25°م ثابت = لا تشقق.' },
        { question: 'هل الغبار يأثر على العفش المخزّن بالخرج؟', answer: 'SiO₂ يتسلل شهرياً. مستودع محكم + تغطية = حماية.' },
        { question: 'كم تكلفة تخزين بالخرج مقارنة بخميس؟', answer: 'مُكيّف متقارب. لكن: لا يحتاج Dehumidifier+Anti-Fungal = أرخص 15-20%.' },
        { question: 'هل العفش يتعفّن في المستودع بالخرج؟', answer: 'لا! 15-25% = لا عفن لا عث. ميزة كبيرة. خميس: عفن خلال أسبوعين.' },
        { question: 'هل رائحة NH₃ تأثر على العفش المخزّن بالخرج؟', answer: 'لو المستودع قرب مزرعة = NH₃ يتراكم. HEPA AC فلتر إلزامي.' },
    ],
    expertTips: [
        'مُكيّف 22-25°م ثابت — ΔT 48°م.',
        'محكم — SiO₂ يتسلل.',
        'تغطية — حماية إضافية من غبار.',
        'HEPA AC — NH₃ قرب مزرعة.',
        'لا عفن! ميزة — بدون Dehumidifier.',
    ],
    warnings: [
        'مستودع غير مُكيّف + ΔT 48°م = تشقق خشب — 5000+ إصلاح.',
        'غير محكم + 6 أشهر = SiO₂ يتراكم على كل سطح.',
        'قرب مزرعة بدون AC = NH₃ رائحة دائمة في الأقمشة.',
    ],
    trustAnchors: [
        { ...GOV.TGA, role: 'ترخيص التخزين' },
        { ...GOV.BALADI, role: 'ترخيص المستودعات' },
        { entity: AMANA.RIYADH.entity, url: AMANA.RIYADH.url, role: 'اشتراطات أمانة الرياض' },
    ],
    expertReviewer: EXPERTS.ALMOHAIMED,
    expertCitations: [
        { expert: EXPERTS.ALMOHAIMED.name, quote: 'تخزين الخرج: مُكيّف إلزامي. ΔT 48°م. SiO₂ محكم. ميزة: لا عفن.', source: 'لوجستيات — تخزين صحراوي' },
    ],
    saudiRegulations: [REGULATIONS.TGA_LICENSE],
    verificationBadges: [{ badge: '✔️ تخزين مرخص', authority: 'بلدي + TGA', icon: 'shield-check' }],
    equipment: [
        { name: 'مستودع مُكيّف', use: '22-25°م ثابت — ΔT 48°م' },
        { name: 'إحكام+تغطية', use: 'SiO₂ غبار — تسلل' },
        { name: 'HEPA AC', use: 'NH₃ رائحة — قرب مزرعة' },
    ],
    commonConcerns: [
        { concern: 'مُكيّف مبالغة.', solution: 'ΔT 48°م = تشقق. مُكيّف أرخص من إصلاح.' },
        { concern: 'مثل خميس.', solution: 'لا عفن = أرخص 15-20%.' },
    ],
    consumerEducation: [
        { myth: 'أي مستودع.', truth: 'ΔT 48°م = مُكيّف إلزامي.' },
        { myth: 'لا يحتاج إحكام.', truth: 'SiO₂ يتسلل = غبار شهري.' },
    ],
    relatedServices: [
        { slug: 'furniture-moving', context: 'نقل عفش', priority: 1 },
        { slug: 'dyna', context: 'دينا', priority: 2 },
        { slug: 'dabab', context: 'دباب', priority: 3 },
        { slug: 'cleaning', context: 'تنظيف', priority: 4 },
        { slug: 'pest-control', context: 'حشرات', priority: 5 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 6 },
        { slug: 'carpet-cleaning', context: 'سجاد', priority: 7 },
    ],
};
