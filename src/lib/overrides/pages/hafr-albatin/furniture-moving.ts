import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'نقل أثاث بحفر الباطن — ΔT 54°م Thermal Shock + SiO₂ عواصف + UV + مسافات طويلة (2026)',
        description: 'نقل أثاث حفر الباطن. ΔT 54°م Thermal Shock. SiO₂ عواصف. UV قاري. مسافات (500 كم للرياض). 10-15% لا تكثّف (ميزة!). Stretch + EPE + UV Cover.',
        h1: 'نقل أثاث بحفر الباطن — حرارة قارية وعواصف ومسافات',
        keywords: ['نقل أثاث حفر الباطن', 'نقل عفش حفر الباطن', 'شركة نقل أثاث حفر الباطن'],
    },
    content: {
        introduction: 'نقل الأثاث في حفر الباطن = مسافات قارية في بيئة قاسية. الأول — ΔT 54°م Thermal Shock: أثاث من 20°م مُكيّف ← شاحنة 52°م = Shock حراري. PVAc يلين. بلاستيك يتقصّف. الثاني — SiO₂ عواصف: أثناء النقل = عاصفة محتملة. بدون تغليف = خدش كامل. Stretch + EPE. الثالث — UV قاري: 500 كم للرياض = 5-7 ساعات تحت UV. حتى في الشاحنة: UV يتسرب. UV Cover. الرابع — مسافات: حفر الباطن ↔ الرياض = 500 كم. أطول نقل روتيني في المملكة. الميزة — لا تكثّف!: 10-15% = لا Silica Gel. لا Short Circuit. إلكترونيات آمنة.',
        shortAnswer: 'على عكس [نقل بدون تغليف] في مناخ قاري، يعتمد بروتوكولنا في خدمة [نقل الأثاث] بمدينة [حفر الباطن] على [Stretch + EPE + UV Cover + Transit Bolts]. ففي ظل [ΔT 54°م + SiO₂ + UV + مسافات]، تتفاقم ظاهرة [Shock + خدش + تقصّف]. لذا؛ يتدخل خبراؤنا عبر [نقل قاري].',
        heroSubtitle: 'ΔT 54°م + SiO₂ عواصف + UV + 500 كم + لا تكثّف',
    },
    pricing: [
        { type: 'نقل داخل حفر الباطن', unit: 'رحلة', minPrice: 330, maxPrice: 730, time: '3-5 ساعات' },
        { type: 'حفر الباطن ← الرياض (500 كم)', unit: 'رحلة', minPrice: 2100, maxPrice: 5200, time: '8-14 ساعة' },
        { type: 'حفر الباطن ← الدمام (400 كم)', unit: 'رحلة', minPrice: 1700, maxPrice: 4200, time: '7-12 ساعة' },
        { type: 'فك + تغليف + نقل + تركيب', unit: 'باقة', minPrice: 730, maxPrice: 1850, time: '5-10 ساعات' },
    ],
    faq: [
        { question: '500 كم — أطول نقل؟', answer: 'من أطول النقلات الروتينية في المملكة. 5-7 ساعات × SiO₂ + UV = تراكمي. تغليف مُحكم.' },
        { question: 'ΔT Shock — أسوأ؟', answer: '52°م ← 20°م = 32°م فرق فوري. PVAc يلين ← ينقل ← يبرد = مفاصل ضعيفة. Stretch + تثبيت.' },
        { question: 'لا Silica — حقاً؟', answer: '10-15% = لا تكثّف. لا Silica Gel. توفير + أمان. ميزة قارية كبيرة.' },
        { question: 'عاصفة أثناء النقل؟', answer: 'Stretch + EPE + شاحنة مُغلقة = حماية. لكن: نتابع أرصاد. نؤجل إذا شديدة.' },
        { question: 'Transit Bolts — واحات؟', answer: '500 كم = غسالة + ثلاجة + أجهزة = Transit Bolts. 10 ريال = يحمي آلاف.' },
    ],
    expertTips: [
        'توقيت صباح — أقل UV + أقل حرارة = أقل Shock.',
        'Stretch Film — يحمي من SiO₂ حتى في الشاحنة.',
        'EPE بين القطع — Thermal Shock + خدش.',
        'لا Silica Gel — توفير 10-15%.',
        'Transit Bolts — مسافات طويلة = اهتزاز.',
    ],
    warnings: [
        'PVAc + 52°م = يلين + ينقل = مفاصل ضعيفة. تناول حذر.',
        '500 كم بدون تغليف = SiO₂ + UV × ساعات = تلف.',
        'ΔT Shock + مسافة + عاصفة = أسوأ سيناريو. تخطيط.',
    ],
    trustAnchors: [
        { ...GOV.TGA, role: 'ترخيص نقل الأثاث' },
        { entity: AMANA.HAFR.entity, url: AMANA.HAFR.url, role: 'اشتراطات النقل بحفر الباطن' },
    ],
    expertReviewer: EXPERTS.ALSHABNAN,
    expertCitations: [
        { expert: EXPERTS.ALZUWAYED.name, quote: 'نقل حفر الباطن = قاري: ΔT 54°م + مسافات 500 كم + SiO₂ + UV. لا تكثّف (ميزة!). تغليف + توقيت + تخطيط.', source: 'هيئة النقل — النقل القاري' },
    ],
    saudiRegulations: [REGULATIONS.TGA_LICENSE],
    verificationBadges: [{ badge: '✔️ نقل مرخص', authority: 'هيئة النقل', icon: 'shield-check' }],
    equipment: [
        { name: 'Stretch Film', use: 'SiO₂ + UV + خدش' },
        { name: 'EPE Foam', use: 'Thermal Shock + خدش' },
        { name: 'Transit Bolts', use: '500 كم اهتزاز' },
        { name: 'UV Cover', use: 'حماية UV قاري' },
    ],
    hiddenObjections: [
        { fear: 'غالي.', solution: '500 كم × ΔT 54°م = مسافة+مناخ. تلف بدون حماية = أغلى بكثير.' },
        { fear: 'شاحنة مُغلقة.', solution: 'ليست مُعزولة حرارياً. 52°م تدخل. UV يتسرب. Stretch = حماية ثانية.' },
    ],
    counterNarratives: [
        { myth: 'مثل الرياض.', truth: 'ΔT 54°م > 35°م. مسافات أطول. UV أعلى. -2°م.' },
        { myth: 'شاحنة تكفي.', truth: 'لا معزولة. 52°م + SiO₂ + UV = يدخل. تغليف.' },
        { myth: 'أي وقت.', truth: 'ظهر = أسوأ. صباح = أفضل 50%.' },
    ],
    relatedServices: [
        { slug: 'furniture-cleaning', context: 'أثاث — بعد النقل', priority: 1 },
        { slug: 'furniture-storage', context: 'تخزين — ΔT', priority: 2 },
        { slug: 'dabab', context: 'دباب — خفيف', priority: 3 },
        { slug: 'dyna', context: 'دينا — ثقيل', priority: 4 },
        { slug: 'cleaning', context: 'تنظيف — الجديد', priority: 5 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف — تركيب', priority: 6 },
        { slug: 'pest-control', context: 'حشرات — فحص', priority: 7 },
    ],
};
