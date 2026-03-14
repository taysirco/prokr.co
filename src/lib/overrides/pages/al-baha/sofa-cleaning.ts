import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف كنب بالباحة — 200 يوم ضباب عفن+PVAc Swelling+عرعر — Anti-Fungal+Dehumidifier! (2026)',
        description: 'تنظيف كنب الباحة. 200 يوم ضباب عفن! PVAc Swelling إطار. عرعر لزج. 6-10h. Anti-Fungal+Dehumidifier.',
        h1: 'تنظيف كنب بالباحة — ضباب عفن+PVAc+عرعر!',
        keywords: ['تنظيف كنب بالباحة', 'غسيل كنب الباحة', 'شركة تنظيف كنب بالباحة'],
    },
    content: {
        introduction: 'كنب الباحة = عفن داخل الحشو! 200 يوم ضباب: رطوبة 60-85% تتغلغل في حشو الكنب ← عفن Penicillium خلال أسبوعين! Anti-Fungal Foam إلزامي. PVAc Swelling: غراء خشب إطار الكنب (PVAc) يمتص رطوبة ← ينتفخ ← ضعف مفاصل = كنب يتفكك 3-5 سنوات! Anti-Humidity Sealing. عكس بريدة: خشب يتشقق (جاف) = معاكس تماماً. عرعر لزج: حبوب لقاح تلتصق بالأقمشة = طبقة صفراء لزجة. Extraction+HEPA. 6-10h تجفيف: حشو الكنب الأبطأ تجفيف. Dehumidifier إلزامي. مقارنة: بريدة = CaCO₃+SiO₂ على القماش+تجفيف 15 دقيقة. الباحة = عفن+PVAc+عرعر+6-10h = أعقد.',
        shortAnswer: 'على عكس [الغسل بدون Dehumidifier+Anti-Fungal]، يعتمد بروتوكولنا في خدمة [تنظيف الكنب] بمدينة [الباحة] على [Anti-Fungal ← Extraction ← Dehumidifier ← Anti-Humidity]. ففي ظل [200 يوم ضباب+PVAc Swelling+عرعر+6-10h]، تتفاقم ظاهرة [عفن+انتفاخ+لزوجة+بطء]. لذا؛ يتدخل فريقنا عبر [4 ركائز كنب جبلي].',
        heroSubtitle: '200 يوم ضباب + PVAc Swelling + 6-10h — Dehumidifier إلزامي!',
    },
    pricing: [
        { type: 'كنبة 3 مقاعد', unit: 'قطعة', minPrice: 80, maxPrice: 170, time: '30-60 دقيقة' },
        { type: 'كنبة L-Shape', unit: 'قطعة', minPrice: 120, maxPrice: 250, time: '1-2h' },
        { type: '+ Dehumidifier', unit: 'خدمة', minPrice: 50, maxPrice: 100, time: 'يُقلّل لـ 3-4h' },
        { type: 'ربع سنوي', unit: 'سنة', minPrice: 280, maxPrice: 560, time: '4 غسلات' },
    ],
    faq: [
        { question: 'ليش كنب الباحة يتعفّن من داخل؟', answer: '60-85% رطوبة تتغلغل = عفن حشو أسبوعين. Anti-Fungal Foam.' },
        { question: 'ليش إطار الكنب ينتفخ بالباحة؟', answer: 'PVAc خشب يمتص رطوبة = Swelling. عكس بريدة (تشقق). Anti-Humidity.' },
        { question: 'كم تجفيف كنب بالباحة؟', answer: '6-10h حشو! Dehumidifier يُقلّل لـ 3-4h. أبطأ بالمملكة.' },
        { question: 'كم تكلفة كنب بالباحة مقارنة ببريدة؟', answer: 'أغلى 40-50% — Dehumidifier+Anti-Fungal. بريدة: 15 دقيقة!' },
        { question: 'كم مرة تنظيف كنب بالباحة؟', answer: 'ربع سنوي + بعد الضباب. رغدان: شهري.' },
    ],
    expertTips: [
        'Dehumidifier — 6-10h حشو!',
        'Anti-Fungal Foam — عفن داخلي.',
        'Anti-Humidity Sealing — PVAc إطار.',
        'Extraction — عرعر لزج.',
        'لا تُبلّل كثير — 6-10h!',
    ],
    warnings: [
        'غسيل بدون Dehumidifier = حشو رطب 6-10h = عفن YMYL.',
        'PVAc + رطوبة × 3 سنوات = مفاصل تنتفخ ← كنب يتفكك.',
        'ضباب + كنب قرب نافذة = عفن أسرع ← Anti-Fungal أسبوعي.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص شركات التنظيف' },
        { entity: AMANA.BAHA.entity, url: AMANA.BAHA.url, role: 'اشتراطات أمانة الباحة' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALMISNID.name, quote: 'كنب الباحة: عفن حشو+PVAc. Dehumidifier+Anti-Fungal. 6-10h!', source: 'جغرافيا المناخ — كنب جبلي' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ تنظيف كنب مرخص', authority: 'بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'Dehumidifier صناعي', use: '6-10h → 3-4h — إلزامي' },
        { name: 'Anti-Fungal Foam', use: 'عفن حشو — ضباب' },
        { name: 'Anti-Humidity Sealing', use: 'PVAc — إطار خشب' },
    ],
    commonConcerns: [
        { concern: 'تجفيف طبيعي.', solution: '6-10h = عفن. Dehumidifier.' },
        { concern: 'مثل بريدة.', solution: 'PVAc Swelling vs Cracking.' },
    ],
    consumerEducation: [
        { myth: 'كنب مصنّع.', truth: 'PVAc يمتص. Anti-Humidity.' },
        { myth: 'نصف سنوي.', truth: 'ربع سنوي. ضباب.' },
    ],
    relatedServices: [
        { slug: 'carpet-cleaning', context: 'سجاد', priority: 1 },
        { slug: 'cleaning', context: 'تنظيف', priority: 2 },
        { slug: 'steam-cleaning', context: 'بخار', priority: 3 },
        { slug: 'furniture-cleaning', context: 'أثاث', priority: 4 },
        { slug: 'councils-cleaning', context: 'مجالس', priority: 5 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 6 },
        { slug: 'pest-control', context: 'حشرات', priority: 7 },
    ],
};
