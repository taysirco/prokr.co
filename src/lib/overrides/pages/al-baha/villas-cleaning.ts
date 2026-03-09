import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف فلل بالباحة — 7 محاور جبلية! ضباب+عرعر+Laterite+Biofilm+عث+Dew Point+حراري — أعقد بالمملكة! (2026)',
        description: 'تنظيف فلل الباحة — أعقد بروتوكول بالمملكة! 7 محاور: Anti-Fungal+Anti-Mite+Dehumidifier+عزل مطر+HEPA+Anti-Biofilm+حراري.',
        h1: 'تنظيف فلل بالباحة — 7 محاور! الأعقد بالمملكة!',
        keywords: ['تنظيف فلل بالباحة', 'تنظيف فيلا الباحة', 'شركة تنظيف فلل بالباحة'],
    },
    content: {
        introduction: 'فيلا الباحة = أعقد بروتوكول تنظيف بالمملكة! 7 محاور: (1) Anti-Fungal: 200 يوم ضباب = عفن Aspergillus+Penicillium في كل زاوية. (2) Anti-Mite: عث الرطوبة يتكاثر بالضباب = أكثر من أي مدينة. (3) Dehumidifier: 6-10h تجفيف+60-85% = يجب تجفيف كل شيء. (4) Waterproofing: الباحة ممطرة = مياه تتسلل ← تنظيف بعد المطر. (5) HEPA: عرعر لقاح+ضباب غبار غابة = فلتر HEPA في كل مكيف. (6) Anti-Biofilm: واجهات+أرضيات خارجية = Biofilm أخضر 20-30% أسرع. (7) Thermal Check: شتاء 0-5°م = تكثّف نوافذ+عفن إطارات. مقارنة: بريدة = 4 محاور فقط! الباحة = 7 محاور = الأغلى والأعقد.',
        shortAnswer: 'على عكس [4 محاور بريدة]، يعتمد بروتوكولنا في خدمة [تنظيف الفلل] بمدينة [الباحة] على [7 محاور جبلية]. ففي ظل [ضباب+عرعر+Laterite+Biofilm+عث+Dew Point+مطر]، تتفاقم ظاهرة [أعقد بيئة تنظيف بالمملكة]. لذا؛ يتدخل فريقنا عبر [7 محاور = Anti-Fungal+Anti-Mite+Dehumidifier+Waterproof+HEPA+Anti-Biofilm+Thermal].',
        heroSubtitle: '7 محاور جبلية — أعقد بروتوكول تنظيف فلل بالمملكة!',
    },
    pricing: [
        { type: 'فيلا صغيرة (7 محاور)', unit: 'فيلا', minPrice: 600, maxPrice: 1200, time: '8-12h' },
        { type: 'فيلا كبيرة (7 محاور)', unit: 'فيلا', minPrice: 1000, maxPrice: 2000, time: '1-2 يوم' },
        { type: 'بعد موسم ضباب — عميق', unit: 'فيلا', minPrice: 800, maxPrice: 1600, time: '1-2 يوم' },
        { type: 'ربع سنوي (4+ضباب)', unit: 'سنة', minPrice: 2000, maxPrice: 4000, time: '5 زيارات' },
    ],
    faq: [
        { question: 'ليش فيلا الباحة 7 محاور وبريدة 4؟', answer: 'ضباب+عرعر+Biofilm+Dew Point = 3 محاور إضافية فريدة.' },
        { question: 'كم تكلفة فيلا بالباحة مقارنة ببريدة؟', answer: 'أغلى 60-80%! 7 vs 4 محاور. الأغلى بالمملكة.' },
        { question: 'ما أهم محور بفيلا الباحة؟', answer: 'Anti-Fungal. 200 يوم ضباب = عفن في كل مكان.' },
        { question: 'هل الـ Thermal Check مهم بالباحة؟', answer: 'شتاء 0-5°م = تكثّف نوافذ = عفن إطارات خشب.' },
        { question: 'كم مرة تنظيف فيلا بالباحة؟', answer: 'ربع سنوي (4) + عميق بعد الضباب = 5. رغدان: شهري.' },
    ],
    expertTips: [
        '7 محاور — لا تحذف أي واحد.',
        'Anti-Fungal — أهم محور. ضباب.',
        'Dehumidifier — 6-10h كل شيء.',
        'HEPA — عرعر كل مكيف.',
        'Anti-Biofilm — واجهات خارجية.',
    ],
    warnings: [
        '4 محاور فقط (بدون 3 الجبلية) = عفن+Biofilm+تكثّف — 7 محاور إلزامي.',
        'بدون Anti-Mite = عث مضاعف ← حساسية YMYL.',
        'بدون Thermal Check شتاء = عفن إطارات نوافذ.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص شركات التنظيف' },
        { entity: AMANA.BAHA.entity, url: AMANA.BAHA.url, role: 'اشتراطات أمانة الباحة' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALMISNID.name, quote: 'فيلا الباحة: 7 محاور. الأعقد بالمملكة. لا تحذف أي محور.', source: 'جغرافيا المناخ — فلل جبلية' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ تنظيف فلل مرخص', authority: 'بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'Anti-Fungal System', use: '200 يوم ضباب — كل زاوية' },
        { name: 'Dehumidifier صناعي', use: '6-10h — كل شيء' },
        { name: 'HEPA Filter', use: 'عرعر — كل مكيف' },
    ],
    hiddenObjections: [
        { fear: '7 محاور كثير.', solution: '7 تحديات فريدة = 7 حلول.' },
        { fear: 'مثل بريدة.', solution: '4 vs 7. الأعقد بالمملكة.' },
    ],
    counterNarratives: [
        { myth: '4 محاور.', truth: '7. الباحة فريدة.' },
        { myth: 'نصف سنوي.', truth: 'ربع سنوي+ضباب = 5.' },
    ],
    relatedServices: [
        { slug: 'cleaning', context: 'تنظيف', priority: 1 },
        { slug: 'apartments-cleaning', context: 'شقق', priority: 2 },
        { slug: 'carpet-cleaning', context: 'سجاد', priority: 3 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 4 },
        { slug: 'pest-control', context: 'حشرات', priority: 5 },
        { slug: 'marble-polishing', context: 'رخام', priority: 6 },
        { slug: 'glass-facades-cleaning', context: 'واجهات', priority: 7 },
    ],
};
