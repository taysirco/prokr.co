import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'دباب نقل بحفر الباطن — SiO₂ عواصف حمولة + ΔT 54°م تمدد/انكماش + UV قاري (2026)',
        description: 'دباب نقل حفر الباطن. SiO₂ عواصف على حمولة مكشوفة. ΔT 54°م تمدد/انكماش. UV قاري. 10-15% لا تكثّف (ميزة!). غطاء + EPE + تتبع.',
        h1: 'دباب نقل بحفر الباطن — رمل عواصف يخدش وحرارة تتلف',
        keywords: ['دباب نقل حفر الباطن', 'دباب نقل حفر الباطن', 'شركة دباب نقل حفر الباطن'],
    },
    content: {
        introduction: 'الدباب في حفر الباطن يواجه تحديات قارية. الأولى — SiO₂ عواصف: حمولة مكشوفة + عاصفة = Micro-Abrasion. أكثف من الرياض. غطاء مُحكم. الثانية — ΔT 54°م: حمولة ساخنة ← تدخل بيئة مُكيّفة = Thermal Shock. بلاستيك يتقصّف. إلكترونيات 52°م خارج ← 20°م داخل = دورة. الثالثة — UV قاري: أصفى سماء = UV يتلف بلاستيك + مطاط في ساعات. غطاء UV. الميزة — لا تكثّف!: 10-15% = لا نقطة ندى = لا Short Circuit. ميزة عن الشرقية (85-95%).',
        shortAnswer: 'على عكس [دباب مكشوف] الذي يُعرّض لعواصف SiO₂، يعتمد بروتوكولنا في خدمة [الدباب] بمدينة [حفر الباطن] على [غطاء + EPE + UV Cover + تتبع]. ففي ظل [SiO₂ + ΔT 54°م + UV + 10-15%]، تتفاقم ظاهرة [خدش + Thermal Shock + تقصّف]. لذا؛ يتدخل خبراؤنا عبر [دباب قاري].',
        heroSubtitle: 'SiO₂ عواصف + ΔT 54°م + UV قاري + لا تكثّف (ميزة!)',
    },
    pricing: [
        { type: 'نقل داخل حفر الباطن', unit: 'رحلة', minPrice: 30, maxPrice: 70, time: '30-60 دقيقة' },
        { type: 'نقل + غطاء UV', unit: 'رحلة', minPrice: 45, maxPrice: 100, time: '30-60 دقيقة' },
        { type: 'اشتراك شهري (8 رحلات)', unit: 'شهر', minPrice: 190, maxPrice: 450, time: '8 رحلات' },
    ],
    faq: [
        { question: 'لا تكثّف — ميزة؟', answer: 'ميزة كبيرة! في الشرقية 85-95%: تكثّف ← Short Circuit. حفر الباطن 10-15%: صفر تكثّف. إلكترونيات آمنة.' },
        { question: 'UV — في ساعات؟', answer: '52°م + أصفى سماء + UV = بلاستيك يتقصّف + مطاط يجف خلال 2-3 ساعات مكشوف. غطاء.' },
        { question: 'ΔT Thermal Shock؟', answer: '52°م خارج ← 20°م داخل = 32°م فرق فوري. إلكترونيات + بلاستيك = Stress.' },
        { question: 'عاصفة أثناء النقل؟', answer: 'غطاء مُحكم = يحمي. بدون = SiO₂ يخدش كل شيء في دقائق.' },
        { question: 'أي وقت أفضل؟', answer: 'صباح/مساء = أقل UV + أقل حرارة. ظهر 52°م = أسوأ. شتاء = الأمثل.' },
    ],
    expertTips: [
        'غطاء مُحكم — حتى 5 دقائق. SiO₂ + UV لا ينتظر.',
        'EPE بين القطع — يمنع Thermal Shock تلامس.',
        'صباح/مساء — أقل UV 70%.',
        'لا Silica Gel — 10-15% = لا تكثّف. توفير!',
        'تتبع GPS — طرق صحراوية.',
    ],
    warnings: [
        'حمولة مكشوفة + عاصفة SiO₂ = Micro-Abrasion فوري.',
        'UV + 52°م + بلاستيك = تقصّف ساعات.',
        'ΔT 54°م + إلكترونيات = Thermal Shock = عطل.',
    ],
    trustAnchors: [
        { ...GOV.TGA, role: 'ترخيص النقل' },
        { entity: AMANA.HAFR.entity, url: AMANA.HAFR.url, role: 'اشتراطات النقل بحفر الباطن' },
    ],
    expertReviewer: EXPERTS.ALSHABNAN,
    expertCitations: [
        { expert: EXPERTS.ALZUWAYED.name, quote: 'دباب حفر الباطن: SiO₂ عواصف + ΔT 54°م + UV. لا تكثّف (ميزة!). غطاء + EPE + توقيت.', source: 'هيئة النقل — النقل القاري' },
    ],
    saudiRegulations: [REGULATIONS.TGA_LICENSE],
    verificationBadges: [{ badge: '✔️ نقل مرخص', authority: 'هيئة النقل', icon: 'shield-check' }],
    equipment: [
        { name: 'غطاء UV مُحكم', use: 'SiO₂ + UV + حرارة' },
        { name: 'EPE Foam', use: 'Thermal Shock + خدش' },
        { name: 'GPS تتبع', use: 'طرق صحراوية' },
    ],
    hiddenObjections: [
        { fear: 'مسافة قصيرة.', solution: 'SiO₂ + UV في دقائق. قصيرة ≠ آمنة.' },
        { fear: 'لا رطوبة.', solution: 'صحيح ← لا تكثّف (ميزة!). لكن: SiO₂ + UV + ΔT = 3 تحديات.' },
    ],
    counterNarratives: [
        { myth: 'مثل الرياض.', truth: 'ΔT 54°م. UV أعلى. عواصف أكثف.' },
        { myth: 'غطاء ما يحتاج.', truth: 'SiO₂ + UV = دقائق. غطاء = حتمي.' },
        { myth: 'أي وقت.', truth: 'ظهر 52°م + UV = أسوأ. صباح/مساء.' },
    ],
    relatedServices: [
        { slug: 'dyna', context: 'دينا — أثقل', priority: 1 },
        { slug: 'furniture-moving', context: 'نقل عفش', priority: 2 },
        { slug: 'auto-cleaning', context: 'غسيل', priority: 3 },
        { slug: 'cleaning', context: 'تنظيف', priority: 4 },
        { slug: 'furniture-storage', context: 'تخزين', priority: 5 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 6 },
        { slug: 'pest-control', context: 'حشرات', priority: 7 },
    ],
};
