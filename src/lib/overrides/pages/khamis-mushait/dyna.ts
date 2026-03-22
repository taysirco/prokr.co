import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../gov-references';

export const override: PageOverride = {
    meta: {
        title: 'دينا نقل بخميس مشيط — أمطار+ضباب+منحدرات 6-12% — Waterproof+حمولة آمنة (2026)',
        description: 'دينا نقل خميس مشيط. أمطار+ضباب 200 يوم+منحدرات 6-12%. Waterproof+فرامل+إضاءة. أبها 30 كم. حمولة آمنة.',
        h1: 'دينا نقل بخميس مشيط — أمطار ومنحدرات — حمولة آمنة',
        keywords: ['دينا نقل خميس مشيط', 'دينا نقل بخميس مشيط', 'شركة دينا نقل خميس مشيط'],
    },
    content: {
        introduction: 'الدينا في خميس مشيط تنقل حمولات كبيرة في ظروف جبلية صعبة. أولاً: أمطار موسمية — حمولة مكشوفة كبيرة (3-4 طن) تتلف بالكامل لو بلّلت. Waterproof Tarpaulin مقوّى إلزامي + تثبيت Ratchet Straps. ثانياً: ضباب 200 يوم = رؤية محدودة + طريق مبلل = مسافة فرملة أطول لحمولة ثقيلة. ثالثاً: منحدرات 6-12% — حمولة 3-4 طن على منحدر = ضغط هائل على الفرامل. فحص يومي + فرامل تبريد. رابعاً: 60-85% رطوبة = عفن يصيب المنقولات. Silica Gel. مقارنة: عنيزة = طرق مسطحة + لا مطر + حمولة بدون Waterproof = أرخص 15-20%. خميس = أصعب.',
        shortAnswer: 'على عكس [النقل المكشوف في طرق مسطحة]، يعتمد بروتوكولنا في خدمة [دينا النقل] بمدينة [خميس مشيط] على [Waterproof+Ratchet+فرامل تبريد+Silica Gel]. ففي ظل [أمطار+ضباب 200 يوم+منحدرات 6-12%+حمولة 3-4 طن]، تتفاقم ظاهرة [تلف+انزلاق+ضغط فرامل]. لذا؛ يتدخل سائقونا عبر [تغطية ← تثبيت ← فحص ← حماية] لتوصيل آمن.',
        heroSubtitle: 'أمطار + منحدرات + حمولة ثقيلة — فرامل تبريد!',
    },
    pricing: [
        { type: 'داخل خميس', unit: 'رحلة', minPrice: 80, maxPrice: 180, time: '30-60 دقيقة' },
        { type: 'خميس ← أبها (30 كم)', unit: 'رحلة', minPrice: 120, maxPrice: 260, time: '30-45 دقيقة' },
        { type: 'خميس ← جدة (700 كم)', unit: 'رحلة', minPrice: 700, maxPrice: 1500, time: '7-8 ساعات' },
        { type: 'يومي', unit: 'يوم', minPrice: 350, maxPrice: 750, time: '8 ساعات' },
    ],
    faq: [
        { question: 'كيف أحمي حمولة الدينا من المطر بخميس؟', answer: 'Waterproof Tarpaulin مقوّى + Ratchet Straps تثبيت. 3-4 طن مكشوفة + مطر = خسارة كاملة.' },
        { question: 'ليش الدينا أغلى بخميس من عنيزة؟', answer: 'Waterproof+فرامل تبريد+إضاءة+Silica Gel = تكلفة إضافية 15-20%. طرق أصعب.' },
        { question: 'كم المسافة من خميس لجدة بالدينا؟', answer: '700 كم = 7-8 ساعات عبر الباحة. طرق جبلية. 700-1500 ريال حسب الحمولة.' },
        { question: 'هل المنحدرات خطرة على الدينا بخميس؟', answer: '3-4 طن + منحدر 12% = ضغط هائل. فرامل تبريد + فحص يومي إلزامي.' },
        { question: 'متى أفضل وقت للنقل بالدينا بخميس؟', answer: 'ظهراً — ضباب صباحي يخف. خارج موسم الأمطار (أبريل-أكتوبر) = أفضل.' },
    ],
    expertTips: [
        'Waterproof مقوّى — 3-4 طن مكشوفة = تلف كامل.',
        'Ratchet Straps — حمولة ثقيلة + منحدر = انزلاق.',
        'فرامل تبريد — 3-4 طن + 12% = ضغط هائل.',
        'Silica Gel — 60-85% عفن منقولات.',
        'لا تنقل ضباب صباحي — ظهراً أفضل.',
    ],
    warnings: [
        'حمولة مكشوفة + مطر = خسارة كاملة 3-4 طن — Waterproof إلزامي.',
        '3-4 طن + منحدر 12% + فرامل ضعيفة = كارثة — فحص يومي.',
        'ضباب + رؤية < 150م + حمولة ثقيلة = مسافة فرملة أطول — سرعة منخفضة.',
    ],
    trustAnchors: [
        { ...GOV.TGA, role: 'ترخيص النقل البري' },
        { entity: AMANA.ASIR.entity, url: AMANA.ASIR.url, role: 'اشتراطات أمانة عسير' },
    ],
    expertReviewer: EXPERTS.ALSHABNAN,
    expertCitations: [
        { expert: EXPERTS.ALZUWAYED.name, quote: 'دينا خميس: حمولة ثقيلة+منحدرات+أمطار. فرامل تبريد+Waterproof. أصعب من المسطح.', source: 'هيئة النقل — جنوبية' },
    ],
    saudiRegulations: [REGULATIONS.TGA_LICENSE],
    verificationBadges: [{ badge: '✔️ نقل مرخص TGA', authority: 'هيئة النقل', icon: 'shield-check' }],
    equipment: [
        { name: 'Waterproof Tarpaulin مقوّى', use: 'حماية 3-4 طن من أمطار' },
        { name: 'Ratchet Straps', use: 'تثبيت حمولة — منحدرات 6-12%' },
        { name: 'فرامل تبريد', use: 'حمولة ثقيلة + منحدر = ضغط هائل' },
    ],
    commonConcerns: [
        { concern: 'مثل دباب.', solution: 'دينا 3-4 طن مقابل 500 كجم. فرامل تبريد مختلفة.' },
        { concern: 'غالي.', solution: 'بدون Waterproof = خسارة 3-4 طن = أغلى 100×.' },
    ],
    consumerEducation: [
        { myth: 'دينا عادية تكفي بخميس.', truth: 'أمطار+منحدرات = Waterproof+فرامل تبريد إلزامي.' },
        { myth: 'مثل عنيزة.', truth: 'عنيزة: مسطح+جاف. خميس: جبلي+رطب = أصعب.' },
    ],
    relatedServices: [
        { slug: 'furniture-moving', context: 'نقل عفش', priority: 1 },
        { slug: 'dabab', context: 'دباب', priority: 2 },
        { slug: 'auto-cleaning', context: 'غسيل سيارات', priority: 3 },
        { slug: 'furniture-storage', context: 'تخزين', priority: 4 },
        { slug: 'cleaning', context: 'تنظيف', priority: 5 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 6 },
        { slug: 'pest-control', context: 'حشرات', priority: 7 },
    ],
};
