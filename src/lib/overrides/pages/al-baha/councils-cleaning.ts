import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف مجالس بالباحة — 200 يوم ضباب عفن+عرعر لزج+Laterite+PVAc — Anti-Fungal+Dehumidifier! (2026)',
        description: 'تنظيف مجالس الباحة. 200 يوم ضباب عفن! عرعر لزج. Laterite أحمر. PVAc Swelling. Anti-Fungal+Dehumidifier.',
        h1: 'تنظيف مجالس بالباحة — ضباب عفن+عرعر+طين!',
        keywords: ['تنظيف مجالس بالباحة', 'تنظيف مجلس الباحة', 'شركة تنظيف مجالس بالباحة'],
    },
    content: {
        introduction: 'مجلس الباحة = ضباب يدخل من الباب! 200 يوم ضباب: مجالس الباحة تفتح للضيوف = ضباب يدخل مباشرة ← عفن Penicillium في زوايا المجلس + أسفل الجلسات. Anti-Fungal. عرعر لزج: حبوب لقاح تدخل مع الضباب = طبقة صفراء لزجة على المساند. HEPA+Extraction. Laterite Fe₂O₃: زوار يجلبون الطين الأحمر بأحذيتهم ← على السجاد = بقع حمراء. Oxalic Pre-Treatment. PVAc مساند: خشب المساند يمتص رطوبة = ينتفخ. Anti-Humidity. 6-10h تجفيف: Dehumidifier. مقارنة: بريدة = CaCO₃ أثر قهوة+Nafud+جاف = أبسط. الباحة = عفن+عرعر+طين+PVAc = أعقد.',
        shortAnswer: 'على عكس [المنظف العادي]، يعتمد بروتوكولنا في خدمة [تنظيف المجالس] بمدينة [الباحة] على [Oxalic ← HEPA ← Anti-Fungal ← Dehumidifier]. ففي ظل [200 يوم ضباب+عرعر+Laterite+PVAc]، تتفاقم ظاهرة [عفن+لزوجة+طين+انتفاخ]. لذا؛ يتدخل فريقنا عبر [4 ركائز مجلس جبلي].',
        heroSubtitle: '200 يوم ضباب + عرعر + Laterite — 4 ركائز مجلس!',
    },
    pricing: [
        { type: 'مجلس صغير', unit: 'مجلس', minPrice: 150, maxPrice: 310, time: '2-3h' },
        { type: 'مجلس كبير', unit: 'مجلس', minPrice: 250, maxPrice: 520, time: '3-5h' },
        { type: '+ Dehumidifier', unit: 'خدمة', minPrice: 50, maxPrice: 100, time: 'يُقلّل لـ 3-4h' },
        { type: 'ربع سنوي', unit: 'سنة', minPrice: 400, maxPrice: 800, time: '4 تنظيف' },
    ],
    faq: [
        { question: 'ليش مجلس الباحة يتعفّن أسرع؟', answer: 'باب مفتوح+ضباب يدخل = عفن. Anti-Fungal.' },
        { question: 'ليش المبيّض ممنوع لسجاد المجلس؟', answer: 'Laterite Fe₂O₃ + مبيّض = حمراء دائمة. Oxalic.' },
        { question: 'كم تجفيف مجلس بالباحة؟', answer: '6-10h! Dehumidifier يُقلّل لـ 3-4h.' },
        { question: 'ما الطبقة الصفراء على المساند؟', answer: 'عرعر لزج. Extraction+HEPA يُزيل.' },
        { question: 'كم تكلفة مجلس بالباحة مقابل بريدة؟', answer: 'أغلى 35-45% — Anti-Fungal+Dehumidifier+Oxalic.' },
    ],
    expertTips: [
        'Oxalic — Laterite أحذية زوار.',
        'Anti-Fungal — ضباب يدخل.',
        'Dehumidifier — 6-10h!',
        'HEPA AC — عرعر مستمر.',
        'Anti-Humidity — PVAc مساند.',
    ],
    warnings: [
        'ضباب + باب مفتوح = عفن مجلس — Anti-Fungal YMYL.',
        'مبيّض + Laterite = بقعة حمراء — Oxalic.',
        'PVAc مساند + 60-85% × 3 سنوات = تفكك.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص شركات التنظيف' },
        { entity: AMANA.BAHA.entity, url: AMANA.BAHA.url, role: 'اشتراطات أمانة الباحة' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALMISNID.name, quote: 'مجلس الباحة: ضباب يدخل. 4 ركائز. Anti-Fungal+Oxalic.', source: 'جغرافيا المناخ — مجالس جبلية' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ تنظيف مجالس مرخص', authority: 'بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'Oxalic Acid', use: 'Laterite Fe₂O₃ — أحذية' },
        { name: 'Anti-Fungal', use: '200 يوم ضباب — عفن' },
        { name: 'Dehumidifier', use: '6-10h — تجفيف' },
    ],
    commonConcerns: [
        { concern: 'منظف عادي.', solution: '4 تحديات جبلية = 4 ركائز.' },
        { concern: 'مثل بريدة.', solution: 'ضباب+عرعر+طين ≠ كلس.' },
    ],
    consumerEducation: [
        { myth: 'الباحة نظيفة.', truth: 'ضباب = عفن. عرعر = لزج.' },
        { myth: 'مبيّض ينظّف.', truth: 'مبيّض + Laterite = أسوأ.' },
    ],
    relatedServices: [
        { slug: 'cleaning', context: 'تنظيف', priority: 1 },
        { slug: 'carpet-cleaning', context: 'سجاد', priority: 2 },
        { slug: 'sofa-cleaning', context: 'كنب', priority: 3 },
        { slug: 'steam-cleaning', context: 'بخار', priority: 4 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 5 },
        { slug: 'pest-control', context: 'حشرات', priority: 6 },
        { slug: 'villas-cleaning', context: 'فلل', priority: 7 },
    ],
};
