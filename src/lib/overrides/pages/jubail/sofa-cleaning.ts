import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف كنب بالجبيل — بخور+VOC بلمرة مُركّبة + 85-98% عفن+عث أقصى + NaCl تصلب (2026)',
        description: 'تنظيف كنب الجبيل. بخور+VOC بلمرة مُركّبة. 85-98% عفن حشوة + عث أقصى. NaCl Stiffening. تجفيف أبطأ. Enzymatic + Anti-Fungal + Anti-Mite + Turbo.',
        h1: 'تنظيف كنب بالجبيل — بخور+بتروكيماويات وعفن وعث أقصى',
        keywords: ['تنظيف كنب الجبيل', 'غسيل كنب بالجبيل', 'شركة تنظيف كنب بالجبيل'],
    },
    content: {
        introduction: 'الكنب في الجبيل = أقسى بيئة كنب في المملكة. الأول — بخور+VOC بلمرة: Olibanum + VOC = أقسى Bonds في المملكة. Enzymatic أقصى. الثاني — 85-98% عفن حشوة: عفن أسبوع في الحشوة. Aspergillus أقصى. Anti-Fungal + تجفيف Turbo. الثالث — عث أقصى: 85-98% > 50% = أقصى Der p 1. بخار + Anti-Mite. الرابع — NaCl Stiffening: ألياف + NaCl = تصلب. RO شطف. الخامس — تجفيف: 98% = 6-10 ساعات. أبطأ في المملكة. Turbo + Dehumidifier.',
        shortAnswer: 'على عكس [شامبو] الذي لا يُكسر بلمرة VOC+بخور ولا يقتل عث 98%، يعتمد بروتوكولنا في خدمة [تنظيف الكنب] بمدينة [الجبيل] على [Enzymatic + Anti-Fungal + Anti-Mite + Turbo + RO]. ففي ظل [بخور+VOC + 85-98% + عث + NaCl]، تتفاقم ظاهرة [بلمرة + عفن + عث + تصلب]. لذا؛ يتدخل خبراؤنا عبر [بروتوكول كنب صناعي-ساحلي].',
        heroSubtitle: 'بخور+VOC أقسى بلمرة + عفن+عث أقصى + NaCl تصلب + أبطأ تجفيف',
    },
    pricing: [
        { type: 'كنب (3-5 مقاعد)', unit: 'طقم', minPrice: 190, maxPrice: 380, time: '3-4 ساعات' },
        { type: '+ Anti-Mite + عفن', unit: 'طقم', minPrice: 250, maxPrice: 470, time: '3-5 ساعات' },
        { type: 'جلد + Conditioner + Marine', unit: 'طقم', minPrice: 210, maxPrice: 420, time: '2-3 ساعات' },
        { type: 'ربع سنوي', unit: 'سنة', minPrice: 580, maxPrice: 1150, time: '4 زيارات' },
    ],
    faq: [
        { question: 'بلمرة مُركّبة — أقسى؟', answer: 'بخور Ester + VOC = Bonds مزدوجة. أقسى في المملكة. Enzymatic تركيز أقصى + 35-45 دقيقة.' },
        { question: 'عث أقصى — أسوأ مدينة؟', answer: '98% = أقصى Der p 1. بخار 100°م + Anti-Mite كل ربع. حفر الباطن 10-15%: لا عث (ميزة!).' },
        { question: 'تجفيف — أبطأ كنب؟', answer: 'أبطأ في المملكة — 6-10 ساعات. بدون Turbo = عفن حشوة. Turbo + Dehumidifier.' },
        { question: 'ربع سنوي — ليش؟', answer: 'عفن أسبوعي + عث شهري + بلمرة + NaCl. ربع سنوي = الحد.' },
    ],
    expertTips: [
        'Enzymatic أقصى — بلمرة VOC+بخور.',
        'بخار 100°م + Anti-Mite — عث أقصى.',
        'Anti-Fungal قبل تجفيف — عفن أثناء 6-10 ساعات.',
        'RO شطف — NaCl تصلب.',
        'Turbo + Dehumidifier — 98% = إلزامي.',
    ],
    warnings: [
        'بلمرة VOC+بخور × 6 أشهر = طبقة دائمة.',
        '98% + حشوة = عفن+عث أقصى = حساسية شديدة.',
        'تجفيف بدون Turbo = عفن حشوة 24 ساعة.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص التنظيف' },
        { entity: AMANA.SHARQIA.entity, url: AMANA.SHARQIA.url, role: 'اشتراطات النظافة بالشرقية' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALMOHAIMED.name, quote: 'كنب الجبيل = الأقسى: بخور+VOC + 98% عفن+عث أقصى + NaCl. Enzymatic أقصى + Anti-Mite + Turbo.', source: 'نصائح هندسية — كنب صناعي-ساحلي' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ تنظيف كنب مرخص', authority: 'منصة بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'Enzymatic أقصى', use: 'بلمرة VOC+بخور' },
        { name: 'بخار 100°م', use: 'عث أقصى' },
        { name: 'Anti-Fungal', use: '98% عفن حشوة' },
        { name: 'Turbo + Dehumidifier', use: '98% تجفيف' },
    ],
    hiddenObjections: [
        { fear: 'مثل الخبر.', solution: 'VOC بلمرة + 98%>95% + سخام. أقسى.' },
        { fear: 'شامبو.', solution: 'لا يُكسر VOC+بخور Bonds.' },
    ],
    counterNarratives: [
        { myth: 'بخار لعفن.', truth: 'بخار = عث + تعقيم + NaCl. ثلاثي.' },
        { myth: 'نصف سنوي.', truth: 'عفن أسبوعي + عث شهري. ربع سنوي.' },
    ],
    relatedServices: [
        { slug: 'carpet-cleaning', context: 'سجاد — NaCl+VOC', priority: 1 },
        { slug: 'councils-cleaning', context: 'مجالس — بخور', priority: 2 },
        { slug: 'cleaning', context: 'تنظيف', priority: 3 },
        { slug: 'steam-cleaning', context: 'بخار', priority: 4 },
        { slug: 'furniture-cleaning', context: 'أثاث', priority: 5 },
        { slug: 'pest-control', context: 'حشرات', priority: 6 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 7 },
    ],
};
