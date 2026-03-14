import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف مجالس بالجبيل — بخور+VOC بلمرة مُركّبة + 85-98% عفن حشوة + عث أقصى (2026)',
        description: 'تنظيف مجالس الجبيل. بخور+VOC بلمرة مُركّبة أقسى. 85-98% عفن حشوة أسبوع. عث Der p 1 أقصى. NaCl Stiffening. Enzymatic+Anti-Fungal+Anti-Mite+Turbo.',
        h1: 'تنظيف مجالس بالجبيل — بخور+بتروكيماويات بلمرة وعفن وعث أقصى',
        keywords: ['تنظيف مجالس الجبيل', 'تنظيف مجلس بالجبيل', 'شركة تنظيف مجالس بالجبيل'],
    },
    content: {
        introduction: 'المجلس في الجبيل يتعرض لأقسى تلويث أقمشة في المملكة. الأول — بخور+VOC بلمرة مُركّبة: Olibanum يتبلمر + VOC بتروكيماوي = Ester+VOC Bonds = أقسى بلمرة في المملكة. Enzymatic تركيز أقصى. الثاني — 85-98% عفن حشوة: أسرع عفن في المملكة. حشوة = بيئة مثالية. Aspergillus أسبوع. Anti-Fungal + تجفيف Turbo. الثالث — عث أقصى: 85-98% > 50% = أقصى Der p 1. بخار 100°م + Anti-Mite إلزامي. الرابع — NaCl Stiffening: ملح يُصلّب الألياف. RO ← Marine.',
        shortAnswer: 'على عكس [شامبو عادي] الذي لا يُكسر بلمرة مُركّبة ولا يقتل عث، يعتمد بروتوكولنا في خدمة [تنظيف المجالس] بمدينة [الجبيل] على [Enzymatic + Anti-Fungal + Anti-Mite + Turbo Dry]. ففي ظل [بخور+VOC + 85-98% + عث + NaCl]، تتفاقم ظاهرة [بلمرة + عفن + عث + تصلب]. لذا؛ يتدخل خبراؤنا عبر [بروتوكول مجلس صناعي-ساحلي].',
        heroSubtitle: 'بخور+VOC بلمرة أقسى + عفن أقصى + عث أقصى + NaCl تصلب',
    },
    pricing: [
        { type: 'مجلس — صناعي-ساحلي', unit: 'مجلس', minPrice: 230, maxPrice: 450, time: '3-4 ساعات' },
        { type: 'مجلس + سجاد', unit: 'مجلس', minPrice: 330, maxPrice: 640, time: '4-6 ساعات' },
        { type: 'عميق (Enzymatic+بخار+عث)', unit: 'مجلس', minPrice: 380, maxPrice: 740, time: '4-6 ساعات' },
        { type: 'ربع سنوي', unit: 'سنة', minPrice: 700, maxPrice: 1400, time: '4 زيارات' },
    ],
    faq: [
        { question: 'بلمرة مُركّبة — أصعب من كل مدينة؟', answer: 'الأصعب. بخور Ester + VOC = Bonds مزدوجة. Enzymatic تركيز أقصى + وقت 35-45 دقيقة. حفر الباطن 52°م: أصلب. الجبيل VOC: أقسى Bonds.' },
        { question: 'عث — أقصى في المملكة؟', answer: '85-98% = أقصى رطوبة = أقصى Der p 1 (أليرجين). بخار 100°م + Anti-Mite كل ربع. في حفر الباطن: لا عث (ميزة!).' },
        { question: 'تجفيف — أبطأ؟', answer: 'أبطأ مجلس في المملكة. 98% = 6-10 ساعات. Turbo + Dehumidifier + فتحات تهوية. بدون = عفن حشوة.' },
        { question: 'NaCl — يُصلّب المجلس؟', answer: 'ألياف + NaCl = بلورات ملحية = تصلب + تكسر. RO أولاً ← Marine ← Enzymatic.' },
        { question: 'ربع سنوي — ليش؟', answer: 'بخور+VOC تراكمي + عفن أسبوعي + عث شهري + NaCl. ربع سنوي = الحد.' },
    ],
    expertTips: [
        'Enzymatic تركيز أقصى — بلمرة VOC+بخور.',
        'بخار 100°م + Anti-Mite — عث أقصى.',
        'Anti-Fungal قبل تجفيف — عفن أثناء 6-10 ساعات.',
        'RO شطف أولاً — NaCl قبل الفرك.',
        'Turbo + Dehumidifier — 98% = إلزامي.',
    ],
    warnings: [
        'بلمرة VOC+بخور × 6 أشهر = طبقة لا تُزال إلا مهنياً.',
        '98% + حشوة = عفن أسبوع + عث أقصى = حساسية.',
        'تجفيف بدون Turbo = عفن حشوة 24 ساعة.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص التنظيف' },
        { entity: AMANA.SHARQIA.entity, url: AMANA.SHARQIA.url, role: 'اشتراطات النظافة بالشرقية' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALMOHAIMED.name, quote: 'مجلس الجبيل = الأقسى: بخور+VOC بلمرة مُركّبة + 98% عفن+عث أقصى. Enzymatic أقصى + بخار + Anti-Mite + Turbo.', source: 'نصائح هندسية — مجالس البيئة الصناعية' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ تنظيف مجالس مرخص', authority: 'منصة بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'Enzymatic أقصى', use: 'بلمرة VOC+بخور مُركّبة' },
        { name: 'بخار 100°م', use: 'عث Der p 1 أقصى' },
        { name: 'Anti-Fungal', use: '98% عفن حشوة' },
        { name: 'Turbo Dryer', use: '98% تجفيف إلزامي' },
    ],
    hiddenObjections: [
        { fear: 'مثل الخبر.', solution: 'VOC بلمرة مُركّبة + 98% > 95% + سخام. أقسى.' },
        { fear: 'شامبو.', solution: 'لا يُكسر VOC+بخور Bonds. Enzymatic.' },
    ],
    consumerEducation: [
        { myth: 'بخار لعفن فقط.', truth: 'بخار = عث + تعقيم + يُحرر NaCl. ثلاثي.' },
        { myth: 'نصف سنوي.', truth: 'عفن أسبوعي + عث شهري. ربع سنوي.' },
        { myth: 'ساحلي فقط.', truth: 'VOC بلمرة مُركّبة = صناعي+ساحلي.' },
    ],
    relatedServices: [
        { slug: 'carpet-cleaning', context: 'سجاد — NaCl+VOC', priority: 1 },
        { slug: 'sofa-cleaning', context: 'كنب — بخور', priority: 2 },
        { slug: 'cleaning', context: 'تنظيف', priority: 3 },
        { slug: 'steam-cleaning', context: 'بخار', priority: 4 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 5 },
        { slug: 'pest-control', context: 'حشرات', priority: 6 },
        { slug: 'marble-polishing', context: 'رخام', priority: 7 },
    ],
};
