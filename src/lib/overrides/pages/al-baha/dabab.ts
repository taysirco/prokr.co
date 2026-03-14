import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'دباب نقل بالباحة — طرق جبلية+ضباب+مطر+Laterite — Mountain-Spec+مغلق! (2026)',
        description: 'دباب نقل الباحة. طرق جبلية وعرة! ضباب 200 يوم رؤية. مطر Laterite انزلاق. Mountain-Spec+مغلق+All-Terrain.',
        h1: 'دباب نقل بالباحة — جبلي+ضباب+مطر!',
        keywords: ['دباب نقل بالباحة', 'دباب نقل الباحة', 'خدمة دباب نقل بالباحة'],
    },
    content: {
        introduction: 'دباب الباحة = جبلي+ضباب+مطر! طرق جبلية: منحدرات ← حمولة تنزلق. تثبيت Mountain-Spec. ضباب: رؤية محدودة 200 يوم. نقل أبطأ. مطر: Laterite طين = طرق زلقة. All-Terrain إطارات. حمولة مكشوفة: مطر+ضباب = تبلل. تغليف مانع مطر أو مغطى. مقارنة: بريدة = طرق مستوية+جاف+لا ضباب = أبسط بكثير. كل شركات بروكر مرخصة من هيئة النقل TGA مع تأمين شامل على الأمتعة. البروتوكول: فك احترافي ← تغليف بابل + كرتون مقوى ← تحميل منظم بأحزمة تثبيت ← نقل بسيارات مجهزة ← تركيب في الموقع الجديد.',
        shortAnswer: 'على عكس [الدباب المكشوف بطرق مستوية]، يعتمد بروتوكولنا في خدمة [الدباب] بمدينة [الباحة] على [Mountain-Spec+تغليف مانع مطر+All-Terrain]. ففي ظل [طرق جبلية+ضباب+مطر+Laterite]، تتفاقم ظاهرة [انزلاق+رؤية+تبلل]. لذا؛ يتدخل فريقنا عبر [Mountain-Spec ← تغليف ← All-Terrain].',
        heroSubtitle: 'طرق جبلية + 200 يوم ضباب + مطر — Mountain-Spec!',
    },
    pricing: [
        { type: 'دباب صغير', unit: 'رحلة', minPrice: 80, maxPrice: 170, time: '1-2h' },
        { type: '+ تغليف مانع مطر', unit: 'رحلة', minPrice: 110, maxPrice: 230, time: '2-3h' },
        { type: 'دباب كبير', unit: 'رحلة', minPrice: 150, maxPrice: 310, time: '2-3h' },
        { type: 'نقل رغدان/المندق', unit: 'رحلة', minPrice: 130, maxPrice: 270, time: '2-4h — جبلي' },
    ],
    faq: [
        { question: 'ليش دباب الباحة أصعب؟', answer: 'طرق جبلية+ضباب+مطر. Mountain-Spec تثبيت.' },
        { question: 'هل المطر مشكلة للدباب بالباحة؟', answer: 'مكشوف = تبلل. تغليف مانع مطر أو مغطى.' },
        { question: 'كم تكلفة دباب بالباحة مقابل بريدة؟', answer: 'أغلى 15-20% — Mountain-Spec. بريدة: طرق مستوية.' },
        { question: 'هل الضباب يأخّر النقل؟', answer: '200 يوم رؤية محدودة = أبطأ. صباحي أفضل.' },
        { question: 'ليش All-Terrain إطارات بالباحة؟', answer: 'Laterite طين بعد مطر = انزلاق. All-Terrain.' },
    ],
    expertTips: [
        'Mountain-Spec — منحدرات.',
        'تغليف مانع مطر — مكشوف.',
        'All-Terrain — Laterite طين.',
        'صباحي — ضباب أقل.',
        'تثبيت إضافي — منعطفات.',
    ],
    warnings: [
        'مكشوف + مطر = حمولة تتبلل — تغليف.',
        'طرق جبلية + تثبيت عادي = حمولة تنزلق.',
        'ضباب + سرعة = خطر — أبطأ.',
    ],
    trustAnchors: [
        { ...GOV.TGA, role: 'ترخيص النقل' },
        { entity: AMANA.BAHA.entity, url: AMANA.BAHA.url, role: 'اشتراطات أمانة الباحة' },
    ],
    expertReviewer: EXPERTS.ALSHABNAN,
    expertCitations: [
        { expert: EXPERTS.ALZUWAYED.name, quote: 'دباب الباحة: جبلي+ضباب. Mountain-Spec+مغطى.', source: 'معايير النقل — جبلي' },
    ],
    saudiRegulations: [REGULATIONS.TGA_LICENSE],
    verificationBadges: [{ badge: '✔️ نقل مرخص TGA', authority: 'TGA', icon: 'shield-check' }],
    equipment: [
        { name: 'Mountain-Spec تثبيت', use: 'منحدرات — لا ينزلق' },
        { name: 'تغليف مانع مطر', use: 'مطر+ضباب — حماية' },
        { name: 'All-Terrain', use: 'Laterite — طين زلق' },
    ],
    commonConcerns: [
        { concern: 'مكشوف.', solution: 'مطر = تبلل. تغليف.' },
        { concern: 'مثل بريدة.', solution: 'جبلي+ضباب ≠ مستوي.' },
    ],
    consumerEducation: [
        { myth: 'أي دباب.', truth: 'Mountain-Spec+All-Terrain.' },
        { myth: 'سريع.', truth: 'ضباب = أبطأ. أمان.' },
    ],
    relatedServices: [
        { slug: 'dyna', context: 'دينا', priority: 1 },
        { slug: 'furniture-moving', context: 'نقل', priority: 2 },
        { slug: 'furniture-storage', context: 'تخزين', priority: 3 },
        { slug: 'cleaning', context: 'تنظيف', priority: 4 },
        { slug: 'auto-cleaning', context: 'سيارات', priority: 5 },
        { slug: 'pest-control', context: 'حشرات', priority: 6 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 7 },
    ],
};
