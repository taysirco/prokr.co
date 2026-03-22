import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../gov-references';

export const override: PageOverride = {
    meta: {
        title: 'غسيل سيارات بالخبر — NaCl Undercarriage صدأ + 85-95% بقع ماء + Sabkha ملح + UV Clear Coat (2026)',
        description: 'غسيل سيارات الخبر. NaCl رذاذ بحري يُصدّئ Undercarriage. 85-95% رطوبة Water Spots. Sabkha ملحية تلتصق. UV يُؤكسد Clear Coat. Underbody Wash + Deionized + Ceramic 9H.',
        h1: 'غسيل سيارات بالخبر — الخليج يُصدّئ والرطوبة تُبقّع والملح يلتصق',
        keywords: ['غسيل سيارات بالخبر', 'غسيل سيارة الخبر', 'شركة غسيل سيارات بالخبر'],
    },
    content: {
        introduction: 'غسيل السيارة في الخبر يختلف جذرياً لأن الأوساخ ساحلية — ليست صحراوية. المشكلة الأولى — NaCl Undercarriage صدأ: رذاذ بحري + ماء مطر مالح يترسب تحت السيارة ← Undercarriage (شاسيه + أنابيب عادم + مسامير) = صدأ مُسرّع. Underbody Pressure Wash + Anti-Rust Wax كل 6 أشهر. المشكلة الثانية — 85-95% Water Spots: رطوبة عالية = الماء لا يجف بسرعة ← NaCl + أملاح تتبلور ← Water Spots دائمة. Deionized Rinse + تجفيف فوري Chamois. المشكلة الثالثة — Sabkha ملحية: تربة الخبر ملحية تلتصق بالجوانب والعتلات. أكثر تآكلاً من رمل الرياض. Pre-Wash + Touchless. المشكلة الرابعة — UV + NaCl = Photo-Oxidation + تآكل مُزدوج: Clear Coat يتأكسد + NaCl يخترق ← تقشّر أسرع. Ceramic 9H = حماية مُزدوجة.',
        shortAnswer: 'على عكس [غسيل بالإسفنجة + ماء عادي] الذي يخدش بالملح ويترك بقعاً، يعتمد بروتوكولنا في خدمة [غسيل السيارات] بمدينة [الخبر] على [Underbody Wash + Deionized + Touchless + Ceramic 9H]. ففي ظل [NaCl + 85-95% + Sabkha + UV]، تتفاقم ظاهرة [صدأ + بقع + التصاق + أكسدة]. لذا؛ يتدخل خبراؤنا عبر [بروتوكول غسيل ساحلي].',
        heroSubtitle: 'NaCl صدأ Undercarriage + رطوبة Water Spots + Sabkha تآكل + UV أكسدة',
    },
    pricing: [
        { type: 'غسيل خارجي Touchless + Deionized', unit: 'سيارة', minPrice: 45, maxPrice: 90, time: '20-30 دقيقة' },
        { type: 'غسيل شامل + Underbody', unit: 'سيارة', minPrice: 90, maxPrice: 180, time: '45-60 دقيقة' },
        { type: 'تلميع + Ceramic 9H', unit: 'سيارة', minPrice: 350, maxPrice: 900, time: '3-5 ساعات' },
        { type: 'اشتراك شهري (4 غسلات + Underbody)', unit: 'شهر', minPrice: 150, maxPrice: 300, time: '4 زيارات' },
    ],
    faq: [
        { question: 'NaCl يصل تحت السيارة — كيف؟', answer: 'رذاذ بحري + أمطار ← ماء ملحي على الطريق ← تتطاير للـ Undercarriage. كورنيش = أكثر. + مواقف قريبة من البحر = رذاذ مباشر. Underbody Wash يُزيل + Anti-Rust Wax يحمي 6 أشهر.' },
        { question: 'Water Spots — من الغسل نفسه؟', answer: 'ماء الخبر = NaCl + أملاح. يغسل ← يجف ببطء (85-95%) ← أملاح تتبلور = Water Spots دائمة. Deionized Rinse = صفر أملاح. + تجفيف Chamois فوري.' },
        { question: 'Ceramic أهم من Wax في الخبر؟', answer: 'Wax يذوب في 45°م + NaCl يخترقه = يبقى 2-4 أسابيع. Ceramic 9H = طبقة صلبة لا تتأثر بحرارة ولا NaCl = 2-3 سنوات. في الخبر: Ceramic >> Wax.' },
        { question: 'Sabkha أسوأ من رمل؟', answer: 'رمل (SiO₂) = يخدش لكن لا يتآكل. Sabkha = NaCl + MgCl₂ + CaSO₄ = يتآكل + يخدش. تآكل كيميائي + فيزيائي = أسوأ من رمل بكثير.' },
        { question: 'أسبوعي أو شهري؟', answer: 'NaCl يومي + Sabkha يومية + رطوبة 24/7. أسبوعي = الأمثل (يُزيل قبل التآكل). Underbody: كل أسبوعين أو شهري. Anti-Rust Wax: كل 6 أشهر.' },
    ],
    expertTips: [
        'Underbody Wash كل غسلة — NaCl تحت السيارة = أخطر من فوقها. صدأ Undercarriage = خطر هيكلي.',
        'Deionized Rinse — ماء الخبر يترك بقع. حتى ماء RO قد لا يكفي. Deionized = صفر أملاح.',
        'Ceramic 9H على كل سيارة — NaCl + UV = تآكل Clear Coat. Ceramic = حاجز مُزدوج. Wax = لا يكفي.',
        'تجفيف Chamois فوري — 85-95% = الماء لا يجف طبيعياً. كل ثانية = Water Spot محتمل.',
        'Anti-Rust Wax على Undercarriage كل 6 أشهر — يحمي الشاسيه + العادم + المسامير.',
    ],
    warnings: [
        'Undercarriage بدون غسل 6 أشهر = NaCl صدأ. مسار عادم يتآكل (500-2,000 ريال). مسامير شاسيه تضعف = خطر.',
        'إسفنجة + ملح NaCl = Micro-Swirls أول غسلة. NaCl أكثر خدشاً من SiO₂. Touchless = إلزامي في الخبر.',
        'Clear Coat بدون Ceramic في NaCl + UV = يتقشر خلال 1-2 سنوات. إعادة طلاء = 3,000-8,000 ريال.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص مراكز الغسيل' },
        { entity: AMANA.SHARQIA.entity, url: AMANA.SHARQIA.url, role: 'اشتراطات البيئة بالمنطقة الشرقية' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALZUWAYED.name, quote: 'سيارة الخبر = ساحلية: NaCl يُصدّئ Undercarriage + 85-95% Water Spots + Sabkha تتآكل + UV يُؤكسد. Underbody + Deionized + Ceramic = بروتوكول ساحلي لا يُشبه أي مدينة داخلية.', source: 'هيئة النقل — العناية بالمركبات في البيئات الساحلية' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [
        { badge: '✔️ غسيل سيارات مرخص', authority: 'منصة بلدي', icon: 'shield-check' },
    ],
    equipment: [
        { name: 'Underbody Pressure Wash', use: 'يُزيل NaCl من Undercarriage — يمنع صدأ الشاسيه' },
        { name: 'Deionized Water Rinse', use: 'يمنع Water Spots — ماء بصفر أملاح' },
        { name: 'Ceramic Coating 9H', use: 'يحمي Clear Coat من NaCl + UV — فعّال 2-3 سنوات' },
        { name: 'Anti-Rust Underbody Wax', use: 'يحمي Undercarriage — فعّال 6 أشهر' },
    ],
    commonConcerns: [
        { concern: 'غسلة 45 ريال أغلى من 15.', solution: '15 = إسفنجة + ماء ملحي = خدوش + بقع + بدون Underbody. بعد سنة: Polish + صدأ = 1,000-5,000 ريال.' },
        { concern: 'Ceramic غالي.', solution: '350-900 ريال ÷ 2-3 سنوات. إعادة طلاء في NaCl = 3,000-8,000 ريال. Ceramic = 5-10%.' },
    ],
    consumerEducation: [
        { myth: 'غبار الخبر عادي.', truth: 'NaCl ≠ SiO₂. ملحي ≠ رملي. يتآكل ≠ يخدش فقط. فرق كيميائي = حلول مختلفة.' },
        { myth: 'إسفنجة ناعمة.', truth: 'الإسفنجة + NaCl تحتها = خدوش أقوى من رمل. NaCl بلوري = حاد. Touchless = صفر تلامس.' },
        { myth: 'ماء الخبر نظيف.', truth: 'ماء الخبر = NaCl + أملاح = Water Spots بعد كل غسلة. Deionized = الحل.' },
    ],
    relatedServices: [
        { slug: 'cleaning', context: 'تنظيف — بروتوكول ساحلي', priority: 1 },
        { slug: 'glass-facades-cleaning', context: 'واجهات — نفس NaCl', priority: 2 },
        { slug: 'dabab', context: 'دباب — غسيل بعد النقل', priority: 3 },
        { slug: 'dyna', context: 'دينا — غسيل بعد التحميل', priority: 4 },
        { slug: 'furniture-moving', context: 'نقل — حماية NaCl', priority: 5 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف — NaCl يسد', priority: 6 },
        { slug: 'marble-polishing', context: 'رخام — NaCl المرآب', priority: 7 },
    ],
};
