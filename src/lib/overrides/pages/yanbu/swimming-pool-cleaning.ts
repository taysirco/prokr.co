import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف مسابح بينبع — NaCl 41‰ ملح مضاعف+SOx حمض+70-85% طحالب — Marine Pool! (2026)',
        description: 'تنظيف مسابح ينبع. NaCl 41‰ ملح مضاعف! SOx H₂SO₄. 70-85% طحالب. Marine Pool Protocol+Anti-Algae.',
        h1: 'تنظيف مسابح بينبع — ملح مضاعف+طحالب!',
        keywords: ['تنظيف مسابح ينبع', 'تنظيف مسبح بينبع', 'شركة تنظيف مسابح ينبع'],
    },
    content: {
        introduction: 'مسبح ينبع = مسبح في بحر من الملح! NaCl 41‰ ملح مضاعف: ملح البحر يدخل المسبح عبر الهواء ← يزيد ملوحة الماء = يتلف الأجهزة البلاستيكية والمعدنية. Salt Chlorinator مختلف. SOx H₂SO₄: حمض YASREF يتفاعل مع ماء المسبح = pH يتغير. pH Balancer مستمر. 70-85% طحالب: أعلى رطوبة = طحالب خضراء أسرع (عكس بريدة 10-20% = لا طحالب!). Algaecide أسبوعي. NaCl + معدن: ملح يصدئ مضخات ومعدات. Marine-Grade مقاومة صدأ. حرارة 45°م: كلور يتبخر أسرع. جرعة مضاعفة + مسائي. مقارنة: بريدة = CaCO₃ Scale+Nafud عكر لكن لا طحالب. ينبع = ملح+حمض+طحالب+صدأ = أعقد.',
        shortAnswer: 'على عكس [الصيانة العادية بدون Marine Pool]، يعتمد بروتوكولنا في خدمة [تنظيف المسابح] بمدينة [ينبع] على [Marine Pool Protocol+Algaecide+pH Balancer+Marine-Grade]. ففي ظل [NaCl مضاعف+SOx حمض+70-85% طحالب+صدأ]، تتفاقم ظاهرة [ملوحة+pH+طحالب+تآكل]. لذا؛ يتدخل فنيونا عبر [Algaecide ← pH ← Marine-Grade ← كلور مسائي].',
        heroSubtitle: 'NaCl مضاعف + SOx حمض + 70-85% طحالب — Marine Pool!',
    },
    pricing: [
        { type: 'تنظيف مسبح صغير', unit: 'مسبح', minPrice: 250, maxPrice: 520, time: '2-4h' },
        { type: '+ Algaecide+pH Balance', unit: 'مسبح', minPrice: 350, maxPrice: 720, time: '+ 1h' },
        { type: 'صيانة أسبوعية', unit: 'شهر', minPrice: 350, maxPrice: 700, time: '4 زيارات' },
        { type: 'عقد سنوي Marine', unit: 'سنة', minPrice: 3000, maxPrice: 6000, time: '52 زيارة' },
    ],
    faq: [
        { question: 'ليش مسبح ينبع تزيد ملوحته؟', answer: 'NaCl 41‰ يدخل من الهواء = ملوحة تزيد. تبديل ماء دوري.' },
        { question: 'ليش طحالب بمسبح ينبع وليس بريدة؟', answer: '70-85% + حرارة = طحالب. بريدة: 10-20% = لا طحالب!' },
        { question: 'هل SOx يأثر على مسبح ينبع؟', answer: 'H₂SO₄ يُغيّر pH = كلور غير فعال. pH Balancer مستمر.' },
        { question: 'كم تكلفة مسبح بينبع مقابل بريدة؟', answer: 'أغلى 40-50% — Algaecide+pH+Marine-Grade. بريدة: Descaler.' },
        { question: 'هل المعدات تصدأ بمسبح ينبع؟', answer: 'NaCl 41‰ = صدأ. Marine-Grade معدات مقاومة.' },
    ],
    expertTips: [
        'Algaecide أسبوعي — 70-85% طحالب.',
        'pH Balancer — SOx يُغيّر.',
        'Marine-Grade معدات — NaCl صدأ.',
        'كلور مسائي — حرارة تبخّر.',
        'تبديل ماء — NaCl يزيد.',
    ],
    warnings: [
        '70-85% + بدون Algaecide = طحالب خضراء أسبوع — YMYL سباحة.',
        'NaCl × معدات عادية × سنة = صدأ — Marine-Grade إلزامي.',
        'SOx × pH بدون Balance = كلور غير فعال — بكتيريا.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص صيانة المسابح' },
        { ...GOV.MAEE, role: 'ترشيد المياه' },
        { entity: AMANA.MADINAH.entity, url: AMANA.MADINAH.url, role: 'اشتراطات أمانة ينبع' },
    ],
    expertReviewer: EXPERTS.ALMOHAIMED,
    expertCitations: [
        { expert: EXPERTS.ALMOHAIMED.name, quote: 'مسبح ينبع: NaCl مضاعف+طحالب+صدأ. Marine Pool Protocol.', source: 'نصائح هندسية — مسابح ساحلية' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ صيانة مسابح مرخصة', authority: 'بلدي + مائي', icon: 'shield-check' }],
    equipment: [
        { name: 'Algaecide', use: '70-85% — طحالب أسبوعي' },
        { name: 'pH Balancer', use: 'SOx — يُغيّر pH' },
        { name: 'Marine-Grade Pump', use: 'NaCl — صدأ مقاوم' },
    ],
    hiddenObjections: [
        { fear: 'مثل بريدة.', solution: 'طحالب+ملح+صدأ = مختلف.' },
        { fear: 'شهري يكفي.', solution: '70-85% طحالب = أسبوعي.' },
    ],
    counterNarratives: [
        { myth: 'كلور يكفي.', truth: 'Algaecide+pH+Marine-Grade.' },
        { myth: 'معدات عادية.', truth: 'NaCl = صدأ. Marine-Grade.' },
    ],
    relatedServices: [
        { slug: 'tanks-cleaning', context: 'خزانات', priority: 1 },
        { slug: 'water-leak-detection', context: 'تسرب', priority: 2 },
        { slug: 'cleaning', context: 'تنظيف', priority: 3 },
        { slug: 'pest-control', context: 'حشرات', priority: 4 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 5 },
        { slug: 'marble-polishing', context: 'رخام', priority: 6 },
        { slug: 'water-insulation', context: 'مائي', priority: 7 },
    ],
};
