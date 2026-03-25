import type { RelatedService } from '../related-services';

export const RELATIONS_CLEANING: Record<string, RelatedService[]> = {
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
    'house-cleaning': [
        { slug: 'deep-cleaning', context: 'للتنظيف العميق الشامل مع إزالة البقع المستعصية', priority: 3 },
        { slug: 'sterilization', context: 'تعقيم المنزل بعد التنظيف لبيئة صحية', priority: 2 },
        { slug: 'pest-control', context: 'رش وقائي بعد التنظيف لمنع الحشرات', priority: 1 },
    ],
    'deep-cleaning': [
        { slug: 'house-cleaning', context: 'للتنظيف الدوري العادي بعد التنظيف العميق', priority: 2 },
        { slug: 'sterilization', context: 'تعقيم شامل يكمل التنظيف العميق', priority: 3 },
        { slug: 'carpet-cleaning', context: 'تنظيف متخصص للسجاد والموكيت', priority: 2 },
        { slug: 'sofa-cleaning', context: 'تنظيف الكنب بالبخار ضمن الخدمة الشاملة', priority: 2 },
    ],
    'commercial-cleaning': [
        { slug: 'office-cleaning', context: 'تنظيف المكاتب والمساحات الإدارية', priority: 3 },
        { slug: 'glass-facades-cleaning', context: 'تنظيف الواجهات الزجاجية للمباني التجارية', priority: 2 },
        { slug: 'sterilization', context: 'تعقيم المنشآت التجارية لسلامة العملاء', priority: 2 },
        { slug: 'floor-polishing', context: 'جلي وتلميع أرضيات المحلات والمعارض', priority: 1 },
    ],
    'post-construction-cleaning': [
        { slug: 'deep-cleaning', context: 'تنظيف عميق بعد إزالة مخلفات البناء', priority: 3 },
        { slug: 'floor-polishing', context: 'جلي وتلميع الأرضيات الجديدة بعد البناء', priority: 3 },
        { slug: 'glass-facades-cleaning', context: 'تنظيف الواجهات الزجاجية من آثار البناء', priority: 2 },
        { slug: 'pest-control', context: 'رش وقائي للمبنى الجديد قبل السكن', priority: 2 },
    ],
    'sterilization': [
        { slug: 'deep-cleaning', context: 'تنظيف عميق يسبق عملية التعقيم', priority: 3 },
        { slug: 'sanitization', context: 'تعقيم متخصص بالمبيدات المعتمدة', priority: 2 },
        { slug: 'commercial-cleaning', context: 'تعقيم المنشآت التجارية والمستشفيات', priority: 2 },
    ],
    'landscaping': [
        { slug: 'pest-control', context: 'مكافحة حشرات الحدائق والمسطحات الخضراء', priority: 3 },
        { slug: 'swimming-pool-cleaning', context: 'تنظيف المسابح ضمن صيانة الحدائق', priority: 2 },
        { slug: 'villas-cleaning', context: 'تنظيف الفيلا الشامل مع الحديقة', priority: 1 },
    ],
};
