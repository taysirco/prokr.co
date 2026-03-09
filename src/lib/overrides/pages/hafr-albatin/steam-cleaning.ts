import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف بالبخار بحفر الباطن — 10-15% يجف فوراً (ميزة!) + SiO₂ يرفع + لا عفن/عث (2026)',
        description: 'تنظيف بالبخار حفر الباطن. 10-15% يجف فوراً — لا Dehumidifier (ميزة!). بخار يرفع SiO₂. لا عفن ولا عث. ΔT 54°م = اختبار أقمشة. أسرع بخار.',
        h1: 'تنظيف بالبخار بحفر الباطن — يجف فوراً ويرفع الرمل ولا عفن ولا عث',
        keywords: ['تنظيف بالبخار حفر الباطن', 'تنظيف بخار حفر الباطن', 'شركة تنظيف بالبخار حفر الباطن'],
    },
    content: {
        introduction: 'البخار في حفر الباطن = أسهل بخار في المملكة — بسبب 3 ميزات. الميزة 1 — يجف فوراً: 10-15% = البخار يتبخر في 20-30 دقيقة (بدلاً من 4-6 ساعات في الشرقية). لا Dehumidifier! لا خطر عفن! أسرع بخار في المملكة. الميزة 2 — لا عفن بعد البخار: 10-15% = حتى بدون تجفيف مثالي = لا Aspergillus. الميزة 3 — لا عث: 10-15% < 50% = لا Der p 1. البخار يُعقّم فقط — لا يقتل عث (لأنه غير موجود). الفائدة — يرفع SiO₂: بخار 130°م يُحرر SiO₂ الملتصق بكهرباء ساكنة ← يُمسح. التحدي — ΔT 54°م أقمشة: بخار 130°م + أقمشة في 52°م = حرارة مُركّبة. اختبار.',
        shortAnswer: 'على عكس [ممسحة] التي تنقل SiO₂ بكهرباء ساكنة، يعتمد بروتوكولنا في خدمة [التنظيف بالبخار] بمدينة [حفر الباطن] على [بخار 130°م ← تجفيف فوري 20-30 دقيقة]. ففي ظل [SiO₂ + 10-15%]، تتفاقم ظاهرة [كهرباء + التصاق]. لذا؛ يتدخل خبراؤنا عبر [بخار قاري].',
        heroSubtitle: 'يجف 20-30 دقيقة + يرفع SiO₂ + لا عفن/عث + لا Dehumidifier',
    },
    pricing: [
        { type: 'غرفة واحدة', unit: 'غرفة', minPrice: 75, maxPrice: 150, time: '30-60 دقيقة' },
        { type: 'شقة', unit: 'شقة', minPrice: 230, maxPrice: 460, time: '2-4 ساعات' },
        { type: 'بيت/فيلا', unit: 'بيت', minPrice: 370, maxPrice: 740, time: '3-6 ساعات' },
        { type: 'نصف سنوي', unit: 'سنة', minPrice: 410, maxPrice: 820, time: '2 زيارات' },
    ],
    faq: [
        { question: 'أسرع تجفيف في المملكة؟', answer: 'نعم! 10-15% = 20-30 دقيقة. الشرقية 85-95%: 4-6 ساعات. الرياض 15%: 1-2 ساعة. حفر الباطن 10-15%: 20-30 دقيقة. الأسرع.' },
        { question: 'لا Dehumidifier — حقاً؟', answer: 'حقاً! يجف بالهواء. لا Dehumidifier. توفير + بساطة.' },
        { question: 'لا عث — ليش بخار؟', answer: 'البخار = يُعقّم + يُحرر SiO₂ + يُكسر بخور. ليس لعث (غير موجود!).' },
        { question: 'اختبار أقمشة — ليش؟', answer: 'بخار 130°م + القماش في 52°م = حرارة مُركّبة 182°م. بعض الأقمشة لا تتحمل. اختبار.' },
        { question: 'نصف سنوي — ليش؟', answer: 'لا عفن + لا عث = أقل تكراراً. SiO₂ + بخور = نصف سنوي كافٍ.' },
    ],
    expertTips: [
        'لا Dehumidifier — ميزة 10-15%! يجف وحده.',
        'اختبار حرارة أقمشة — 130°م + 52°م = مُركّب.',
        'بخار يُحرر SiO₂ — أفضل من مسح + كهرباء ساكنة.',
        'لا بخار لعث — 10-15% = توفير!',
        'نصف سنوي — أقل من الشرقية (ميزة!).',
    ],
    warnings: [
        'بخار 130°م + 52°م = حرارة مُركّبة. اختبار أقمشة.',
        'بدون بخار = SiO₂ بكهرباء ساكنة = يلتصق = ينتقل.',
        'صوف + حرارة مُركّبة = Shrinkage. اختبار.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص التنظيف' },
        { entity: AMANA.HAFR.entity, url: AMANA.HAFR.url, role: 'اشتراطات النظافة بحفر الباطن' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALMOHAIMED.name, quote: 'بخار حفر الباطن = الأسهل: يجف 20-30 دقيقة. لا Dehumidifier. لا عفن. لا عث. يرفع SiO₂. اختبار أقمشة فقط.', source: 'نصائح هندسية — بخار قاري' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ بخار مرخص', authority: 'منصة بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'Dry Vapor 130°م', use: 'يُحرر SiO₂ + يُعقّم + يُكسر بخور' },
        { name: 'اختبار حرارة', use: 'أقمشة — 130°م + 52°م' },
    ],
    hiddenObjections: [
        { fear: 'يبلل.', solution: '10-15% = يجف 20-30 دقيقة. أسرع في المملكة.' },
        { fear: 'ممسحة أسهل.', solution: 'كهرباء ساكنة = تنقل. بخار = يُحرر.' },
    ],
    counterNarratives: [
        { myth: 'للعفن والعث.', truth: 'لا عفن ولا عث! للتعقيم + SiO₂ + بخور.' },
        { myth: 'Dehumidifier.', truth: 'لا يحتاج! 10-15% = يجف وحده.' },
        { myth: 'ربع سنوي.', truth: 'لا عفن/عث = نصف سنوي.' },
    ],
    relatedServices: [
        { slug: 'carpet-cleaning', context: 'سجاد — SiO₂', priority: 1 },
        { slug: 'sofa-cleaning', context: 'كنب — بخور', priority: 2 },
        { slug: 'councils-cleaning', context: 'مجالس', priority: 3 },
        { slug: 'cleaning', context: 'تنظيف — SiO₂', priority: 4 },
        { slug: 'marble-polishing', context: 'رخام', priority: 5 },
        { slug: 'pest-control', context: 'حشرات', priority: 6 },
        { slug: 'apartments-cleaning', context: 'شقق', priority: 7 },
    ],
};
