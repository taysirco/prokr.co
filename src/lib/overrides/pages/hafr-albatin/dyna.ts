import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'دينا نقل بحفر الباطن — SiO₂ عواصف ثقيلة + ΔT 54°م حمولات + UV قاري + طرق رملية (2026)',
        description: 'دينا نقل حفر الباطن. SiO₂ عواصف على حمولات ثقيلة. ΔT 54°م Thermal Shock. UV أعلى. طرق رملية. Tarpaulin + EPE + توقيت.',
        h1: 'دينا نقل بحفر الباطن — حمولات ثقيلة تحت عواصف وحرارة قارية',
        keywords: ['دينا نقل حفر الباطن', 'دينا نقل حفر الباطن', 'شركة دينا نقل حفر الباطن'],
    },
    content: {
        introduction: 'الدينا في حفر الباطن = نقل ثقيل في مناخ قاري. الأول — SiO₂ عواصف: حمولات ثقيلة مكشوفة + عاصفة = Micro-Abrasion على كل سطح. Tarpaulin مُحكم. الثاني — ΔT 54°م: 52°م ← مُكيّف 20°م = Thermal Shock على معدات ومواد. Transit cooling. الثالث — UV قاري: أصفى سماء = UV يتلف Tarpaulin نفسه. UV-Resistant. الرابع — طرق رملية: طرق حفر الباطن ← الرياض/الدمام = طويلة + رملية. الميزة — لا تكثّف!: 10-15% = صفر تكثّف = إلكترونيات آمنة.',
        shortAnswer: 'على عكس [دينا مكشوفة] التي تُعرّض لعواصف SiO₂ + UV، يعتمد بروتوكولنا في خدمة [الدينا] بمدينة [حفر الباطن] على [Tarpaulin UV + EPE + توقيت + تتبع]. ففي ظل [SiO₂ + ΔT 54°م + UV + طرق]، تتفاقم ظاهرة [خدش + Shock + تقصّف]. لذا؛ يتدخل خبراؤنا عبر [دينا قارية].',
        heroSubtitle: 'SiO₂ عواصف ثقيلة + ΔT 54°م + UV قاري + لا تكثّف',
    },
    pricing: [
        { type: 'دينا داخل حفر الباطن', unit: 'رحلة', minPrice: 110, maxPrice: 270, time: '1-2 ساعة' },
        { type: 'حفر الباطن ↔ الرياض (500 كم)', unit: 'رحلة', minPrice: 730, maxPrice: 1700, time: '5-7 ساعات' },
        { type: 'حفر الباطن ↔ الدمام (400 كم)', unit: 'رحلة', minPrice: 580, maxPrice: 1400, time: '4-6 ساعات' },
        { type: 'نقل + Tarpaulin UV + EPE', unit: 'رحلة', minPrice: 170, maxPrice: 380, time: '1-3 ساعات' },
    ],
    faq: [
        { question: 'مسافات طويلة — فرق؟', answer: 'حفر الباطن ← الرياض: 500 كم × 5-7 ساعات مكشوف = SiO₂ + UV تراكمي. Tarpaulin UV إلزامي.' },
        { question: 'عاصفة أثناء النقل؟', answer: 'Tarpaulin يحمي. بدون = SiO₂ يخدش في دقائق. نتابع تحذيرات الأرصاد.' },
        { question: 'ΔT — حديد بناء؟', answer: 'حديد + 52°م = يتمدد + SiO₂ يخدش Coating. Tarpaulin + فصل.' },
        { question: 'UV — على Tarpaulin؟', answer: 'Tarpaulin عادي = UV يتلفه سريعاً. UV-Resistant = يدوم. نستخدم حصراً UV-Resistant.' },
        { question: 'لا تكثّف — ميزة كبيرة؟', answer: 'نعم! لا Silica Gel. لا مخاوف Short Circuit. توفير + أمان.' },
    ],
    expertTips: [
        'Tarpaulin UV-Resistant — العادي يتقصّف في حفر الباطن.',
        'توقيت صباح/مساء — أقل UV 70% + أقل حرارة.',
        'EPE بين القطع — Thermal Shock + خدش.',
        'لا Silica Gel — ميزة 10-15%.',
        'تتبع GPS — مسافات طويلة + طرق صحراوية.',
    ],
    warnings: [
        'Tarpaulin عادي + UV = يتقصّف. UV-Resistant فقط.',
        'حمولة مكشوفة 500 كم = SiO₂ × ساعات = تلف.',
        '52°م + حديد بدون فصل = تمدد + خدش.',
    ],
    trustAnchors: [
        { ...GOV.TGA, role: 'ترخيص النقل الثقيل' },
        { entity: AMANA.HAFR.entity, url: AMANA.HAFR.url, role: 'اشتراطات النقل بحفر الباطن' },
    ],
    expertReviewer: EXPERTS.ALSHABNAN,
    expertCitations: [
        { expert: EXPERTS.ALZUWAYED.name, quote: 'دينا حفر الباطن = قارية: SiO₂ عواصف + ΔT 54°م + UV + مسافات. Tarpaulin UV + EPE + توقيت.', source: 'هيئة النقل — النقل القاري' },
    ],
    saudiRegulations: [REGULATIONS.TGA_LICENSE],
    verificationBadges: [{ badge: '✔️ نقل ثقيل مرخص', authority: 'هيئة النقل', icon: 'shield-check' }],
    equipment: [
        { name: 'Tarpaulin UV-Resistant', use: 'SiO₂ + UV + حرارة' },
        { name: 'EPE Foam', use: 'Thermal Shock + خدش' },
        { name: 'GPS', use: 'مسافات + طرق صحراوية' },
    ],
    commonConcerns: [
        { concern: 'غالي.', solution: 'Tarpaulin UV = 50-100. تلف = آلاف. 1-2%.' },
        { concern: 'أي دينا.', solution: 'بدون UV-Resistant = Tarpaulin يتقصّف. فرق.' },
    ],
    consumerEducation: [
        { myth: 'مثل الرياض.', truth: 'ΔT 54°م. UV أعلى. عواصف أكثف. -2°م.' },
        { myth: 'Tarpaulin عادي.', truth: 'UV يتلفه. UV-Resistant فقط.' },
        { myth: 'أي وقت.', truth: 'ظهر = أسوأ UV + حرارة. صباح/مساء.' },
    ],
    relatedServices: [
        { slug: 'dabab', context: 'دباب — أخف', priority: 1 },
        { slug: 'furniture-moving', context: 'نقل عفش', priority: 2 },
        { slug: 'furniture-storage', context: 'تخزين', priority: 3 },
        { slug: 'auto-cleaning', context: 'غسيل', priority: 4 },
        { slug: 'cleaning', context: 'تنظيف', priority: 5 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 6 },
        { slug: 'pest-control', context: 'حشرات', priority: 7 },
    ],
};
