import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../gov-references';

export const override: PageOverride = {
    meta: {
        title: 'تخزين أثاث بالباحة — 60-85% عفن PVAc+ضباب+حشرات غابة — Dehumidifier+Anti-Fungal+IPM! (2026)',
        description: 'تخزين أثاث الباحة. 60-85% عفن PVAc! ضباب 200 يوم. حشرات غابة. Dehumidifier+Anti-Fungal+Anti-Humidity+IPM.',
        h1: 'تخزين أثاث بالباحة — عفن+PVAc+غابة!',
        keywords: ['تخزين أثاث بالباحة', 'تخزين عفش الباحة', 'شركة تخزين أثاث بالباحة'],
    },
    content: {
        introduction: 'تخزين الباحة = أعقد تخزين بالمملكة! 60-85% عفن: رطوبة ضباب تتسلل للمستودع ← عفن على كل شيء أسبوعين! Dehumidifier مُستمر إلزامي. PVAc Swelling: خشب أثاث ينتفخ بالرطوبة ← مفاصل تنكسر أثناء التخزين! Anti-Humidity Sealing. حشرات غابة: خنافس+نمل من الغابة يدخل المستودع ← يهاجم الخشب. IPM Forest. أمطار: تسرب مطر للمستودع ← تلف. Waterproof. مقارنة: بريدة = 10-20% = لا عفن! لكن: ΔT خشب يتشقق. الباحة = عفن+PVAc+حشرات+مطر = أعقد!',
        shortAnswer: 'على عكس [المستودع العادي]، يعتمد بروتوكولنا في خدمة [التخزين] بمدينة [الباحة] على [Dehumidifier مُستمر+Anti-Fungal+Anti-Humidity+IPM]. ففي ظل [60-85% عفن+PVAc+حشرات غابة+مطر]، تتفاقم ظاهرة [عفن+انتفاخ+هجوم+تسرب]. لذا؛ يتدخل فريقنا عبر [Dehumidifier ← Anti-Fungal ← Anti-Humidity ← IPM].',
        heroSubtitle: '60-85% عفن + PVAc ينتفخ + حشرات غابة — Dehumidifier مُستمر!',
    },
    pricing: [
        { type: 'مستودع صغير (10 م³)', unit: 'شهر', minPrice: 300, maxPrice: 620, time: 'شهري' },
        { type: 'مستودع كبير (30 م³)', unit: 'شهر', minPrice: 600, maxPrice: 1200, time: 'شهري' },
        { type: '+ Anti-Humidity معالجة', unit: 'أثاث', minPrice: 150, maxPrice: 310, time: 'معالجة' },
        { type: 'سنوي', unit: 'سنة', minPrice: 3000, maxPrice: 6000, time: 'سنوي' },
    ],
    faq: [
        { question: 'ليش تخزين الباحة الأعقد؟', answer: 'عفن+PVAc+حشرات+مطر = 4 تحديات. بريدة: ΔT فقط.' },
        { question: 'هل الأثاث يتعفّن بالمستودع بالباحة؟', answer: '60-85% = عفن أسبوعين! Dehumidifier مُستمر إلزامي.' },
        { question: 'هل حشرات الغابة تدخل المستودع بالباحة؟', answer: 'خنافس+نمل. IPM Forest+إحكام.' },
        { question: 'كم تكلفة تخزين بالباحة مقابل بريدة؟', answer: 'أغلى 50-60% — Dehumidifier+IPM. الأغلى بالمملكة.' },
        { question: 'كم يستمر الخشب بمستودع الباحة؟', answer: 'بدون Anti-Humidity: PVAc 3-5 سنوات ← يتفكك.' },
    ],
    expertTips: [
        'Dehumidifier مُستمر — 60-85%.',
        'Anti-Fungal شهري — عفن.',
        'Anti-Humidity — PVAc خشب.',
        'IPM — حشرات غابة.',
        'Waterproof — مطر تسرب.',
    ],
    warnings: [
        'مستودع بدون Dehumidifier = عفن كل الأثاث ← YMYL.',
        'PVAc + رطوبة × 3 سنوات = تفكك — Anti-Humidity.',
        'حشرات غابة + مستودع مفتوح = هجوم خشب — IPM.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص مستودعات التخزين' },
        { entity: AMANA.BAHA.entity, url: AMANA.BAHA.url, role: 'اشتراطات أمانة الباحة' },
    ],
    expertReviewer: EXPERTS.ALMOHAIMED,
    expertCitations: [
        { expert: EXPERTS.ALMOHAIMED.name, quote: 'تخزين الباحة: الأعقد! Dehumidifier+IPM+Anti-Humidity. 4 تحديات.', source: 'نصائح هندسية — تخزين جبلي' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ تخزين مرخص', authority: 'بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'Dehumidifier صناعي', use: '60-85% — مُستمر' },
        { name: 'IPM Forest', use: 'خنافس+نمل — غابة' },
        { name: 'Anti-Humidity Sealing', use: 'PVAc — خشب' },
    ],
    commonConcerns: [
        { concern: 'مستودع عادي.', solution: '60-85% = عفن. Dehumidifier.' },
        { concern: 'مثل بريدة.', solution: 'عفن+PVAc+غابة ≠ ΔT.' },
    ],
    consumerEducation: [
        { myth: 'فحص سنوي.', truth: 'Anti-Fungal شهري. غابة.' },
        { myth: 'مستودع يكفي.', truth: 'Dehumidifier+IPM+Waterproof.' },
    ],
    relatedServices: [
        { slug: 'furniture-moving', context: 'نقل', priority: 1 },
        { slug: 'dabab', context: 'دباب', priority: 2 },
        { slug: 'dyna', context: 'دينا', priority: 3 },
        { slug: 'cleaning', context: 'تنظيف', priority: 4 },
        { slug: 'furniture-cleaning', context: 'أثاث', priority: 5 },
        { slug: 'pest-control', context: 'حشرات', priority: 6 },
        { slug: 'termite-control', context: 'نمل أبيض', priority: 7 },
    ],
};
