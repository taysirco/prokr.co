import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'نقل عفش بالباحة — PVAc Swelling+طرق جبلية+ضباب+Laterite — Anti-Humidity+Mountain-Spec! (2026)',
        description: 'نقل عفش الباحة. PVAc Swelling! طرق جبلية وعرة. ضباب رؤية. Laterite انزلاق. Anti-Humidity+Mountain-Spec+مغلق.',
        h1: 'نقل عفش بالباحة — جبلي+ضباب+PVAc!',
        keywords: ['نقل عفش بالباحة', 'نقل أثاث الباحة', 'شركة نقل عفش بالباحة'],
    },
    content: {
        introduction: 'نقل عفش الباحة = طرق جبلية+ضباب+PVAc! طرق جبلية: منحدرات حادة+منعطفات ← الأثاث يتحرك أكثر أثناء النقل. تثبيت Mountain-Spec إلزامي. ضباب رؤية: 200 يوم ضباب = نقل أبطأ+أخطر. رؤية محدودة. PVAc Swelling: أثاث رطب أثناء النقل ← مفاصل ضعيفة تتكسر أكثر بالاهتزاز. Anti-Humidity+تغليف حماية. Laterite Fe₂O₃: طرق موحلة بعد المطر ← شاحنة تنزلق ← أثاث يتضرر. إطارات All-Terrain. مطر: أثاث يتبلل أثناء التحميل = عفن. مغلق 100%. مقارنة: بريدة = طرق صحراوية مستقيمة+جاف = أبسط. الباحة = جبلي+ضباب+PVAc+طين = أعقد.',
        shortAnswer: 'على عكس [النقل المكشوف بطرق مستقيمة]، يعتمد بروتوكولنا في خدمة [نقل العفش] بمدينة [الباحة] على [Mountain-Spec تثبيت+مغلق+Anti-Humidity+All-Terrain]. ففي ظل [طرق جبلية+ضباب+PVAc+Laterite+مطر]، تتفاقم ظاهرة [اهتزاز+رؤية+كسر+انزلاق+عفن]. لذا؛ يتدخل فريقنا عبر [Mountain-Spec ← مغلق ← Anti-Humidity ← All-Terrain].',
        heroSubtitle: 'طرق جبلية + ضباب + PVAc — Mountain-Spec إلزامي!',
    },
    pricing: [
        { type: 'شقة (غرفتين)', unit: 'نقلة', minPrice: 700, maxPrice: 1400, time: '5-8h' },
        { type: 'شقة (3-4 غرف)', unit: 'نقلة', minPrice: 1000, maxPrice: 2000, time: '7-10h' },
        { type: 'فيلا كاملة', unit: 'نقلة', minPrice: 1800, maxPrice: 3600, time: '1-2 يوم' },
        { type: '+ Anti-Humidity', unit: 'إضافي', minPrice: 200, maxPrice: 400, time: '+ 2h' },
    ],
    faq: [
        { question: 'ليش نقل عفش الباحة أصعب؟', answer: 'طرق جبلية+ضباب+PVAc+مطر. Mountain-Spec تثبيت.' },
        { question: 'هل الأثاث يتكسر أكثر بالباحة؟', answer: 'PVAc رطب+اهتزاز جبلي = مفاصل. Anti-Humidity+تغليف.' },
        { question: 'كم تكلفة نقل بالباحة مقابل بريدة؟', answer: 'أغلى 20-30% — Mountain-Spec+مغلق. بريدة: طرق مستقيمة.' },
        { question: 'هل الضباب مشكلة للنقل؟', answer: 'رؤية محدودة = أبطأ+أخطر. 200 يوم!' },
        { question: 'ليش مغلق إلزامي بالباحة؟', answer: 'مطر = أثاث يتبلل = عفن. ضباب = رطوبة. مغلق 100%.' },
    ],
    expertTips: [
        'Mountain-Spec تثبيت — منحدرات.',
        'مغلق 100% — مطر+ضباب.',
        'Anti-Humidity — PVAc مفاصل.',
        'All-Terrain إطارات — Laterite.',
        'نقل صباحي — ضباب أقل.',
    ],
    warnings: [
        'طرق جبلية + تثبيت عادي = أثاث يتحرك ← كسر.',
        'PVAc + اهتزاز + رطوبة = مفاصل تتكسر.',
        'مكشوف + مطر = أثاث يتبلل ← عفن.',
    ],
    trustAnchors: [
        { ...GOV.TGA, role: 'ترخيص النقل' },
        { ...GOV.BALADI, role: 'ترخيص شركات النقل' },
        { entity: AMANA.BAHA.entity, url: AMANA.BAHA.url, role: 'اشتراطات أمانة الباحة' },
    ],
    expertReviewer: EXPERTS.ALSHABNAN,
    expertCitations: [
        { expert: EXPERTS.ALZUWAYED.name, quote: 'نقل الباحة: جبلي+ضباب+PVAc. Mountain-Spec+مغلق.', source: 'معايير النقل — جبلي' },
    ],
    saudiRegulations: [REGULATIONS.TGA_LICENSE],
    verificationBadges: [{ badge: '✔️ نقل مرخص TGA', authority: 'TGA', icon: 'shield-check' }],
    equipment: [
        { name: 'Mountain-Spec تثبيت', use: 'منحدرات — لا يتحرك' },
        { name: 'شاحنة مغلقة', use: 'مطر+ضباب — حماية' },
        { name: 'Anti-Humidity', use: 'PVAc — مفاصل' },
    ],
    hiddenObjections: [
        { fear: 'مكشوف أرخص.', solution: 'مطر = عفن. مغلق.' },
        { fear: 'مثل بريدة.', solution: 'جبلي+ضباب ≠ مستقيم+جاف.' },
    ],
    consumerEducation: [
        { myth: 'أي شاحنة.', truth: 'Mountain-Spec+مغلق.' },
        { myth: 'PVAc ينجو.', truth: 'اهتزاز+رطوبة = كسر.' },
    ],
    relatedServices: [
        { slug: 'furniture-storage', context: 'تخزين', priority: 1 },
        { slug: 'dabab', context: 'دباب', priority: 2 },
        { slug: 'dyna', context: 'دينا', priority: 3 },
        { slug: 'cleaning', context: 'تنظيف', priority: 4 },
        { slug: 'furniture-cleaning', context: 'أثاث', priority: 5 },
        { slug: 'pest-control', context: 'حشرات', priority: 6 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 7 },
    ],
};
