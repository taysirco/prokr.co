import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'مكافحة طيور بجدة — نوارس pH 2.5 + ملح يأكل SS304 + رطوبة 80% (2026)',
        description: 'مكافحة طيور جدة. نوارس أشد حمضية. ملح بحري. SS316 إلزامي. سبايك + شبك + نبضات. من 120 ريال/م.',
        h1: 'مكافحة طيور بجدة — فضلات النوارس pH 2.5 والملح يأكل كل شبك رخيص',
        keywords: ['مكافحة طيور بجدة', 'طرد نوارس', 'شبك SS316', 'سبايك'],
    },
    content: {
        introduction: 'جدة تواجه نوارس بحر (pH 2-3) أشد حمضية 10× من حمام المدن الداخلية (pH 3-4). + الملح البحري (NaCl) يأكل SS304 خلال 2-3 سنوات. SS316 (Molybdenum) هو الوحيد المقبول. والرطوبة 80%: الفضلات لا تجف = بكتيريا حية دائمة ← تحتاج Anti-Bacterial وليس مجرد شطف.',
        shortAnswer: 'على عكس [شبك SS304 يصدأ في ملح جدة] يعتمد بروتوكولنا في [مكافحة الطيور] بـ[جدة] على [SS316 + سبايك بولي كربونيت + Anti-Bacterial]. ففي ظل [نوارس pH 2.5 + NaCl + رطوبة 80%]، تتفاقم ظاهرة [Acid Attack + صدأ + تلوث]. لذا؛ يتدخل خبراؤنا عبر [يمنع SS316 الهبوط ← يثبط السبايك الوقوف ← يُطهّر Anti-Bacterial].',
        heroSubtitle: 'النوارس pH 2.5 أشد 10× — والملح يأكل كل شيء رخيص',
    },
    pricing: [
        { type: 'سبايك بولي كربونيت', unit: 'م طولي', minPrice: 120, maxPrice: 200, time: 'فرد' },
        { type: 'شبك SS316', unit: 'م²', minPrice: 100, maxPrice: 180, time: '1-2 يوم' },
        { type: 'نبضات كهربائية', unit: 'م طولي', minPrice: 130, maxPrice: 220, time: '1-2 يوم' },
        { type: 'تنظيف + تعقيم', unit: 'م²', minPrice: 25, maxPrice: 50, time: '1-2 يوم' },
    ],
    faq: [
        { question: 'ليش SS316 وليس SS304؟', answer: 'Cl⁻ في هواء جدة يسبب Pitting في SS304 خلال 2-3 سنوات. SS316 يحتوي Molybdenum = مقاوم. 15-20 سنة.' },
        { question: 'فضلات النوارس أخطر؟', answer: 'pH 2-3 مقابل 3-4 للحمام = أشد حمضية 10×. حجم أكبر. تأكل أسماك = رائحة أشد.' },
        { question: 'التنظيف أصعب بجدة؟', answer: '80% رطوبة: لا تجف = بكتيريا حية دائمة. تحتاج Anti-Bacterial.' },
        { question: 'كم التكلفة vs التجاهل؟', answer: 'حماية: 3,000-7,000. ترميم: 10,000-25,000 كل 5 سنوات. توفير 70%+.' },
        { question: 'النوارس تصل الأحياء الداخلية؟', answer: '20-30 كم. الصفا/النزهة/الزهراء: نوارس + حمام.' },
    ],
    expertTips: [
        'SS316 فقط: SS304 يصدأ في 2-3 سنوات بسبب Cl⁻.',
        'Anti-Bacterial (وليس شطف): فضلات رطبة = بكتيريا حية.',
        'النوارس أذكى: قد تحتاج نبضات + صوتي.',
        'عقد ربع سنوي أوفر 40% من جلسات منفصلة — ويمنع عودة الحشرات بعد 30-45 يوم.',
    ],
    warnings: [
        'SS304 في ملح جدة: Pitting خلال 2-3 سنوات.',
        'فضلات pH 2.5: أشد 10× من حمام — تذيب أسرع.',
        'فضلات رطبة = بكتيريا دائمة.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص + صحة' },
        { ...GOV.WEQAA, role: 'صحة عامة' },
        { entity: AMANA.JEDDAH.entity, url: AMANA.JEDDAH.url, role: 'اشتراطات أمانة جدة' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALKHODAIRY.name, quote: 'نوارس جدة pH 2.5 + ملح = تآكل مزدوج. SS316 ليس رفاهية — الحد الأدنى.', source: 'مكافحة آفات ساحلية' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ SS316', authority: 'مقاوم ملح', icon: 'shield-check' }],
    equipment: [
        { name: 'شبك SS316', use: 'مقاوم Cl⁻ — 15-20 سنة' },
        { name: 'سبايك بولي كربونيت', use: 'لا يصدأ + لا يسخن' },
    ],
    counterNarratives: [
        { myth: 'أي شبك يكفي.', truth: 'SS304 = 2-3 سنوات في ملح. SS316 = الوحيد.' },
        { myth: 'النوارس ساحلية فقط.', truth: '20-30 كم داخلياً.' },
    ],
    relatedServices: [
        { slug: 'pesticide-spraying', context: 'حشرات', priority: 1 },
        { slug: 'roof-insulation', context: 'فضلات تأكل', priority: 2 },
        { slug: 'sewage-unblocking', context: 'فضلات تسد', priority: 3 },
    ],
};
