// ============================================
// Related Services Engine for Internal Linking
// Provides contextual links between related services
// ============================================

export interface RelatedService {
    slug: string;
    context: string; // Natural sentence context for the link
    priority: number; // 1-3, higher = more relevant
}

// Main service relationships map
export const SERVICE_RELATIONS: Record<string, RelatedService[]> = {
    // ============================================
    // MOVING SERVICES
    // ============================================
    'furniture-moving': [
        { slug: 'cleaning', context: 'بعد إتمام النقل، قد تحتاج إلى تنظيف المنزل الجديد لضمان نظافته قبل السكن', priority: 3 },
        { slug: 'pest-control', context: 'ننصح برش مبيدات وقائي قبل فرش الأثاث في المنزل الجديد', priority: 2 },
        { slug: 'furniture-storage', context: 'إذا احتجت لتخزين بعض الأثاث مؤقتاً أثناء الانتقال', priority: 2 },
        { slug: 'air-conditioner-cleaning', context: 'لا تنسَ تنظيف المكيفات في منزلك الجديد', priority: 1 },
    ],
    'furniture-storage': [
        { slug: 'furniture-moving', context: 'عند استرداد أثاثك من المستودع، نوفر خدمة النقل الآمن', priority: 3 },
        { slug: 'pest-control', context: 'نتأكد من خلو المستودعات من الحشرات والقوارض', priority: 2 },
    ],
    'dyna': [
        { slug: 'furniture-moving', context: 'لنقل الأثاث الكامل مع خدمات الفك والتركيب', priority: 3 },
        { slug: 'moving-out', context: 'للنقل بين المدن بسيارات دينا مجهزة', priority: 2 },
    ],
    'moving-out': [
        { slug: 'furniture-moving', context: 'للنقل داخل المدينة الواحدة', priority: 2 },
        { slug: 'furniture-storage', context: 'لتخزين الأثاث أثناء فترة الانتقال بين المدن', priority: 2 },
    ],
    'dabab': [
        { slug: 'furniture-moving', context: 'للقطع الكبيرة والشقق الكاملة', priority: 3 },
        { slug: 'dyna', context: 'للكميات المتوسطة من الأثاث', priority: 2 },
    ],

    // ============================================
    // CLEANING SERVICES
    // ============================================
    'cleaning': [
        { slug: 'sofa-cleaning', context: 'لتنظيف الكنب والمجالس بشكل متخصص', priority: 2 },
        { slug: 'carpet-cleaning', context: 'لتلميع السجاد والموكيت بتقنيات احترافية', priority: 2 },
        { slug: 'pest-control', context: 'بعد التنظيف العميق، ننصح برش وقائي لمنع الحشرات', priority: 1 },
        { slug: 'air-conditioner-cleaning', context: 'لا تنسَ تنظيف المكيفات للحصول على هواء نقي', priority: 2 },
    ],
    'tanks-cleaning': [
        { slug: 'tank-insulation', context: 'بعد التنظيف، قد تحتاج لعزل الخزان لمنع التلوث مستقبلاً', priority: 3 },
        { slug: 'water-leak-detection', context: 'إذا لاحظت نقصاً في مستوى المياه، ننصح بفحص التسربات', priority: 2 },
    ],
    'sofa-cleaning': [
        { slug: 'carpet-cleaning', context: 'لإكمال تنظيف غرفة الجلوس، ننظف السجاد أيضاً', priority: 3 },
        { slug: 'councils-cleaning', context: 'لتنظيف المجالس العربية التقليدية', priority: 2 },
        { slug: 'steam-cleaning', context: 'التنظيف بالبخار يعطي نتائج أعمق للأقمشة', priority: 2 },
    ],
    'carpet-cleaning': [
        { slug: 'sofa-cleaning', context: 'لتنسيق تنظيف الكنب مع السجاد', priority: 3 },
        { slug: 'floor-cleaning', context: 'بعد رفع السجاد، ننظف الأرضيات تحته', priority: 2 },
    ],
    'steam-cleaning': [
        { slug: 'sanitization', context: 'للتعقيم الكامل بعد التنظيف بالبخار', priority: 3 },
        { slug: 'sofa-cleaning', context: 'التنظيف بالبخار مثالي للكنب والمفروشات', priority: 2 },
    ],
    'sanitization': [
        { slug: 'pest-control', context: 'للحماية الكاملة من الجراثيم والحشرات', priority: 2 },
        { slug: 'cleaning', context: 'نبدأ بالتنظيف الشامل ثم التعقيم', priority: 2 },
    ],
    'air-conditioner-cleaning': [
        { slug: 'cleaning', context: 'لتنظيف شامل للمنزل مع المكيفات', priority: 2 },
        { slug: 'sanitization', context: 'تعقيم المكيف لهواء أنظف وأصحّ', priority: 2 },
    ],
    'glass-facades-cleaning': [
        { slug: 'office-cleaning', context: 'لتنظيف المكاتب من الداخل بعد الواجهات', priority: 2 },
        { slug: 'shops-cleaning', context: 'لتنظيف واجهات المحلات التجارية', priority: 2 },
    ],
    'floor-cleaning': [
        { slug: 'floor-polishing', context: 'بعد التنظيف، التلميع يعيد لمعان الأرضيات', priority: 3 },
        { slug: 'marble-polishing', context: 'للرخام والجرانيت تلميع خاص', priority: 2 },
    ],
    'floor-polishing': [
        { slug: 'marble-polishing', context: 'لتلميع الرخام بتقنيات متخصصة', priority: 3 },
        { slug: 'floor-cleaning', context: 'التنظيف العميق قبل عملية الجلي', priority: 2 },
    ],
    'marble-polishing': [
        { slug: 'floor-polishing', context: 'لجلي أنواع الأرضيات الأخرى', priority: 2 },
        { slug: 'floor-cleaning', context: 'صيانة دورية للحفاظ على اللمعان', priority: 2 },
    ],
    'villas-cleaning': [
        { slug: 'swimming-pool-cleaning', context: 'لتنظيف مسابح الفلل والحدائق', priority: 3 },
        { slug: 'pest-control', context: 'رش وقائي لحدائق الفيلا', priority: 2 },
        { slug: 'tanks-cleaning', context: 'لا تنسَ خزانات المياه', priority: 2 },
    ],
    'apartments-cleaning': [
        { slug: 'sofa-cleaning', context: 'تنظيف متخصص للكنب والمفروشات', priority: 2 },
        { slug: 'air-conditioner-cleaning', context: 'تنظيف المكيفات مع الشقة', priority: 2 },
    ],
    'palaces-cleaning': [
        { slug: 'villas-cleaning', context: 'لتنظيف الفلل الملحقة', priority: 2 },
        { slug: 'councils-cleaning', context: 'تنظيف المجالس الفاخرة', priority: 3 },
    ],
    'shops-cleaning': [
        { slug: 'glass-facades-cleaning', context: 'لواجهات المحل الزجاجية', priority: 3 },
        { slug: 'floor-polishing', context: 'جلي أرضيات المحل', priority: 2 },
    ],
    'office-cleaning': [
        { slug: 'air-conditioner-cleaning', context: 'تنظيف مكيفات المكتب لبيئة عمل صحية', priority: 2 },
        { slug: 'floor-cleaning', context: 'تنظيف وتلميع أرضيات المكاتب', priority: 2 },
        { slug: 'sanitization', context: 'تعقيم دوري لسلامة الموظفين', priority: 2 },
    ],
    'furniture-cleaning': [
        { slug: 'sofa-cleaning', context: 'تنظيف متخصص للكنب', priority: 3 },
        { slug: 'carpet-cleaning', context: 'تنظيف السجاد مع الأثاث', priority: 2 },
    ],
    'kitchen-cleaning': [
        { slug: 'oven-cleaning', context: 'تنظيف عميق للفرن والشفاط', priority: 3 },
        { slug: 'sanitization', context: 'تعقيم أسطح المطبخ', priority: 2 },
    ],
    'swimming-pool-cleaning': [
        { slug: 'villas-cleaning', context: 'لتنظيف الفيلا كاملة مع المسبح', priority: 2 },
        { slug: 'sanitization', context: 'تعقيم المسبح للسباحة الآمنة', priority: 2 },
    ],
    'auto-cleaning': [
        { slug: 'steam-cleaning', context: 'التنظيف بالبخار للسيارات', priority: 2 },
    ],
    'oven-cleaning': [
        { slug: 'kitchen-cleaning', context: 'تنظيف المطبخ الشامل', priority: 3 },
    ],
    'councils-cleaning': [
        { slug: 'sofa-cleaning', context: 'تنظيف الكنب والموكيت', priority: 2 },
        { slug: 'carpet-cleaning', context: 'تنظيف سجاد المجالس', priority: 2 },
    ],
    'hourly-cleaning': [
        { slug: 'cleaning', context: 'للتنظيف الشامل بسعر ثابت', priority: 2 },
    ],
    'restaurant-chimney-cleaning': [
        { slug: 'kitchen-cleaning', context: 'تنظيف مطبخ المطعم كاملاً', priority: 3 },
        { slug: 'sanitization', context: 'تعقيم المطبخ للأمان الغذائي', priority: 2 },
    ],

    // ============================================
    // SEWAGE SERVICES
    // ============================================
    'sewer-cleaning': [
        { slug: 'sewage-pumping', context: 'لشفط البيارات الممتلئة', priority: 3 },
        { slug: 'sewage-compressor', context: 'لفتح الانسدادات الصعبة بالكمبروسر', priority: 2 },
    ],
    'sewage-pumping': [
        { slug: 'sewer-cleaning', context: 'بعد الشفط، تسليك المجاري لمنع الانسداد', priority: 3 },
        { slug: 'sewer-suction-trucks', context: 'وايتات شفط متوفرة على مدار الساعة', priority: 2 },
    ],
    'sewer-suction-trucks': [
        { slug: 'sewage-pumping', context: 'لشفط البيارات والآبار', priority: 3 },
    ],
    'sewage-compressor': [
        { slug: 'sewer-cleaning', context: 'تسليك المجاري بطرق تقليدية', priority: 2 },
    ],

    // ============================================
    // PEST CONTROL SERVICES
    // ============================================
    'pest-control': [
        { slug: 'termite-control', context: 'لمكافحة النمل الأبيض (الأرضة) المنتشر في المباني القديمة', priority: 3 },
        { slug: 'sanitization', context: 'تعقيم المنزل بعد مكافحة الحشرات', priority: 2 },
        { slug: 'cleaning', context: 'تنظيف المنزل بعد عملية الرش', priority: 1 },
    ],
    'pesticide-spraying': [
        { slug: 'pest-control', context: 'للمكافحة الشاملة مع الرش', priority: 2 },
        { slug: 'termite-control', context: 'رش مخصص للنمل الأبيض', priority: 2 },
    ],
    'insects-spraying': [
        { slug: 'pest-control', context: 'خطة مكافحة متكاملة', priority: 2 },
        { slug: 'sanitization', context: 'تعقيم بعد رش الحشرات', priority: 1 },
    ],
    'termite-control': [
        { slug: 'pest-control', context: 'للمكافحة الشاملة لجميع الحشرات', priority: 2 },
        { slug: 'water-leak-detection', context: 'التسربات تجذب النمل الأبيض', priority: 2 },
    ],
    'cockroach-control': [
        { slug: 'pest-control', context: 'مكافحة شاملة لجميع الحشرات', priority: 2 },
        { slug: 'kitchen-cleaning', context: 'تنظيف المطبخ لمنع عودة الصراصير', priority: 2 },
    ],
    'bedbugs-control': [
        { slug: 'sofa-cleaning', context: 'تنظيف الكنب بالبخار يقتل بيض البق', priority: 3 },
        { slug: 'sanitization', context: 'تعقيم شامل للغرف', priority: 2 },
    ],
    'rodent-control': [
        { slug: 'pest-control', context: 'مكافحة شاملة للحشرات والقوارض', priority: 2 },
        { slug: 'sewer-cleaning', context: 'تسليك المجاري لسد مداخل الفئران', priority: 1 },
    ],
    'ants-control': [
        { slug: 'termite-control', context: 'لمكافحة النمل الأبيض المدمر', priority: 3 },
        { slug: 'pest-control', context: 'خطة مكافحة متكاملة', priority: 2 },
    ],
    'bird-control': [
        { slug: 'cleaning', context: 'تنظيف آثار الطيور بعد التركيب', priority: 2 },
    ],
    'snakes-control': [
        { slug: 'pest-control', context: 'مكافحة شاملة للزواحف والحشرات', priority: 2 },
    ],

    // ============================================
    // LEAK DETECTION & INSULATION
    // ============================================
    'water-leak-detection': [
        { slug: 'tank-insulation', context: 'عزل الخزانات يمنع التسربات مستقبلاً', priority: 3 },
        { slug: 'bathroom-leak-detection', context: 'فحص خاص لتسربات الحمامات', priority: 2 },
        { slug: 'roof-insulation', context: 'عزل الأسطح لمنع تسربات المطر', priority: 2 },
    ],
    'tank-leak-detection': [
        { slug: 'tank-insulation', context: 'عزل الخزان بعد إصلاح التسريب', priority: 3 },
        { slug: 'tanks-cleaning', context: 'تنظيف الخزان بعد الإصلاح', priority: 2 },
    ],
    'bathroom-leak-detection': [
        { slug: 'water-leak-detection', context: 'فحص شامل لتسربات المبنى', priority: 2 },
        { slug: 'floor-insulation', context: 'عزل أرضيات الحمام', priority: 2 },
    ],
    'tank-insulation': [
        { slug: 'tanks-cleaning', context: 'تنظيف الخزان قبل العزل', priority: 3 },
        { slug: 'roof-insulation', context: 'عزل السطح مع الخزان', priority: 2 },
    ],
    'roof-insulation': [
        { slug: 'water-leak-detection', context: 'فحص التسربات قبل العزل', priority: 2 },
        { slug: 'tank-insulation', context: 'عزل الخزانات على السطح', priority: 2 },
    ],
    'floor-insulation': [
        { slug: 'bathroom-leak-detection', context: 'فحص التسربات في الأرضيات', priority: 2 },
    ],
    'swimming-pool-insulation': [
        { slug: 'swimming-pool-cleaning', context: 'تنظيف المسبح مع العزل', priority: 2 },
    ],
    'foundation-insulation': [
        { slug: 'water-leak-detection', context: 'كشف تسربات الأساسات', priority: 2 },
        { slug: 'termite-control', context: 'مكافحة النمل الأبيض في الأساسات', priority: 2 },
    ],
};

// ============================================
// Helper Functions
// ============================================

/**
 * Get related services for a given service
 */
export function getRelatedServices(serviceSlug: string, limit: number = 3): RelatedService[] {
    const relations = SERVICE_RELATIONS[serviceSlug] || [];
    return relations
        .sort((a, b) => b.priority - a.priority)
        .slice(0, limit);
}

/**
 * Generate internal link HTML for a related service
 */
export function generateInternalLink(
    related: RelatedService,
    citySlug: string,
    serviceName: string
): string {
    return `<a href="/${citySlug}/${related.slug}" class="text-emerald-600 hover:text-emerald-700 font-medium">${serviceName}</a>`;
}

/**
 * Get contextual paragraph with embedded links
 */
export function getRelatedServicesContext(
    serviceSlug: string,
    citySlug: string,
    getServiceName: (slug: string) => string
): { context: string; linkedSlug: string }[] {
    const relations = getRelatedServices(serviceSlug, 3);

    return relations.map(rel => ({
        context: rel.context,
        linkedSlug: rel.slug,
    }));
}
