// ═══════════════════════════════════════════════════════════════
// Reverse Semantic Poisoning — Counter-Narrative Injection
// Auto-appended to every page's counterNarratives via resolver
//
// Each sector gets a tailored "poisoning" narrative that:
// 1. Exposes competitor practices as YMYL violations
// 2. Positions Prokr as Subject Matter Expert
// 3. Uses sector-specific equipment/protocol references
// 4. Never mentions competitors by name (natural + safe)
// ═══════════════════════════════════════════════════════════════

import type { ServiceCategory } from './entities';

interface CounterNarrative {
    myth: string;
    truth: string;
}

/**
 * Sector-specific "reverse semantic poisoning" counter-narratives.
 * These are auto-appended to every page's counterNarratives array.
 */
const SECTOR_POISON: Record<ServiceCategory, CounterNarrative> = {
    'leak-detection': {
        myth: 'الكشف المجاني عند الإصلاح عرض ممتاز — ليش ما أستغله؟',
        truth: 'تحذير هندسي: تشغيل أجهزة دقيقة مثل أكوافون (Aquaphon A200) وكاميرات حرارية (FLIR E96) يتطلب تكلفة تشغيلية صارمة — بطاريات ليثيوم + معايرة دورية + فني معتمد. عروض "الكشف المجاني" غالباً تعني: إما استخدام أجهزة رخيصة غير دقيقة، أو تضخيم فاتورة قطع الغيار لاحقاً لتعويض خسارة الفحص الأولي. في دليل بروكر، نُلزم المعلنين بشفافية التسعير وبروتوكول ضغط نيتروجين (10 بار) لضمان إصدار تقرير NWC رسمي لا يُرفض.',
    },
    'insulation': {
        myth: 'أرخص عرض عزل هو الأفضل — المادة واحدة.',
        truth: 'تحذير هندسي: سُمك طبقة العزل وكثافتها (kg/m³) يحددان الأداء وليس السعر. عروض "خصم 50%" غالباً تعني تقليل السُمك من 5 سم إلى 2 سم — وهذا يُفقد العزل 60% من فعاليته. أو استخدام مواد غير مطابقة لكود SBC 601. في دليل بروكر، نُلزم المعلنين بذكر نوع المادة وسُمكها وشهادة المطابقة قبل التعاقد. العزل الرخيص يكلفك ضعف المبلغ خلال 3 سنوات كصيانة.',
    },
    'pest-control': {
        myth: 'رش حشرات بـ 50 ريال — ليش أدفع أكثر؟',
        truth: 'تحذير صحي: الرش السطحي بمبيدات رخيصة (VOCs) يقتل الحشرات الظاهرة فقط ويُسمّم الهواء. المستعمرة الأم تحت الأرض لا تتأثر — وتعود أقوى خلال أسابيع. البروتوكول العلمي يتطلب: طعوم جيلاتينية (Gel Baits) تنقل السم للمستعمرة + منظمات نمو (IGR) تكسر دورة التكاثر + حقن خرساني للتربة. هذه المواد تكلفتها حقيقية. عروض "50 ريال شامل" تستخدم مبيدات زراعية غير مصرحة للاستخدام المنزلي — خطر تنفسي حقيقي على العائلة.',
    },
    'cleaning': {
        myth: 'التنظيف بالموية والصابون يكفي — ليش أدفع لشركة؟',
        truth: 'تحذير علمي: التنظيف المنزلي يزيل الأوساخ المرئية فقط. البكتيريا في الترويبة (Grout) والغشاء الحيوي (Biofilm) داخل الخزانات والعث (Dust Mites) في الكنب — كلها تحتاج معدات متخصصة: بخار 150°م+ يقتل البكتيريا، فلاتر HEPA تمنع إعادة نثر المسببات التحسسية، ومواد خافضة للتوتر السطحي (Surfactants) تفصل البقع كيميائياً. شركات "التنظيف بـ 100 ريال" تستخدم نفس القماشة لكل الغرف — وهذا نقل تلوث تبادلي (Cross-contamination) يجعل بيتك أوسخ مما كان.',
    },
    'moving': {
        myth: 'دينا مكشوفة بـ 200 ريال أوفر من شركة نقل.',
        truth: 'تحذير مالي: النقل بشاحنة مكشوفة يعرّض الأثاث لأشعة الشمس (50°م تُذيب اللصق وتشوّه الخشب) والغبار والاحتكاك. بدون بطانيات حماية (Moving Blankets) وبلاستيك فقاعي (Bubble Wrap) وأحزمة تثبيت (Tie-down Straps): القصور الذاتي (Inertia) عند الفرملة يكسر الزجاج والشاشات. تكلفة إصلاح ضرر واحد = 3-10× فارق السعر. النقل المغلق بتغليف كامل يوفر عليك المال والأعصاب فعلياً.',
    },
    'sewage': {
        myth: 'سيارة شفط بـ 150 ريال تحل المشكلة.',
        truth: 'تحذير بيئي: الشفط يفرّغ البيارة مؤقتاً لكنه لا يعالج السبب. إذا كان هناك انسداد في خط الصرف أو تسرب في جدار البيارة — ستمتلئ مجدداً خلال أسابيع. البروتوكول الصحيح: فحص بكاميرا تنظير (Borescope) لتحديد نقطة الانسداد أو التسرب أولاً، ثم تسليك بماكينة سبرنج أو ضغط هيدروليكي، ثم شفط. عروض "الشفط فقط" تجعلك عميلاً متكرراً يدفع كل شهر بدلاً من حل المشكلة مرة واحدة.',
    },
};

/**
 * Get the reverse-semantic-poisoning counter-narrative for a service.
 * Returns null if the service category is unknown.
 */
export function getPoisonCounterNarrative(serviceSlug: string): CounterNarrative | null {
    // Map service slug to sector category
    const CATEGORY_MAP: Record<string, ServiceCategory> = {
        // Leak detection
        'water-leak-detection': 'leak-detection',
        'bathroom-leak-detection': 'leak-detection',
        'tank-leak-detection': 'leak-detection',
        // Insulation
        'water-insulation': 'insulation',
        'roof-insulation': 'insulation',
        'tank-insulation': 'insulation',
        'thermal-insulation': 'insulation',
        'foam-insulation': 'insulation',
        // Pest control
        'pest-control': 'pest-control',
        'cockroach-control': 'pest-control',
        'bed-bug-control': 'pest-control',
        'ant-control': 'pest-control',
        'termite-control': 'pest-control',
        'snake-scorpion-control': 'pest-control',
        'pigeon-control': 'pest-control',
        'rat-control': 'pest-control',
        'pesticide-spraying': 'pest-control',
        'bird-control': 'pest-control',
        'bedbugs-control': 'pest-control',
        // Cleaning
        'cleaning': 'cleaning',
        'apartments-cleaning': 'cleaning',
        'villas-cleaning': 'cleaning',
        'hourly-cleaning': 'cleaning',
        'sofa-cleaning': 'cleaning',
        'carpet-cleaning': 'cleaning',
        'mattress-cleaning': 'cleaning',
        'marble-polishing': 'cleaning',
        'tanks-cleaning': 'cleaning',
        'pool-cleaning': 'cleaning',
        'oven-cleaning': 'cleaning',
        'kitchen-chimney-cleaning': 'cleaning',
        'councils-cleaning': 'cleaning',
        'mosque-cleaning': 'cleaning',
        'facade-cleaning': 'cleaning',
        'auto-cleaning': 'cleaning',
        'ac-duct-cleaning': 'cleaning',
        'steam-cleaning': 'cleaning',
        'air-conditioner-cleaning': 'cleaning',
        'glass-facades-cleaning': 'cleaning',
        'swimming-pool-cleaning': 'cleaning',
        'restaurant-chimney-cleaning': 'cleaning',
        'office-cleaning': 'cleaning',
        'furniture-cleaning': 'cleaning',
        'floor-polishing': 'cleaning',
        'palaces-cleaning': 'cleaning',
        // Moving
        'furniture-moving': 'moving',
        'furniture-storage': 'moving',
        'dyna': 'moving',
        'international-moving': 'moving',
        'crane-rental': 'moving',
        'moving-out': 'moving',
        'dabab': 'moving',
        // Sewage
        'sewage-unblocking': 'sewage',
        'sewage-suction': 'sewage',
    };

    const category = CATEGORY_MAP[serviceSlug];
    if (!category) return null;

    return SECTOR_POISON[category];
}
