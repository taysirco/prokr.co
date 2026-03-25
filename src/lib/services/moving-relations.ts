import type { RelatedService } from '../related-services';

export const RELATIONS_MOVING: Record<string, RelatedService[]> = {
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
    'intercity-moving': [
        { slug: 'furniture-moving', context: 'للنقل داخل المدينة الواحدة بسعر أقل', priority: 3 },
        { slug: 'furniture-packaging', context: 'تغليف احترافي للأثاث لحمايته أثناء النقل الطويل', priority: 3 },
        { slug: 'furniture-storage', context: 'تخزين مؤقت للأثاث عند الوصول للمدينة الجديدة', priority: 2 },
        { slug: 'international-moving', context: 'للنقل خارج المملكة مع خدمات التخليص الجمركي', priority: 1 },
    ],
    'international-moving': [
        { slug: 'intercity-moving', context: 'للنقل بين مدن المملكة قبل الشحن الدولي', priority: 3 },
        { slug: 'furniture-packaging', context: 'التغليف الدولي يتطلب معايير خاصة لحماية الأثاث', priority: 3 },
        { slug: 'furniture-storage', context: 'تخزين الأثاث أثناء إجراءات الشحن والتخليص', priority: 2 },
    ],
    'heavy-equipment-moving': [
        { slug: 'vehicle-transport', context: 'لنقل المركبات والمعدات الصغيرة', priority: 2 },
        { slug: 'intercity-moving', context: 'لنقل المعدات الثقيلة بين المدن', priority: 2 },
        { slug: 'dyna', context: 'لنقل المعدات المتوسطة بسيارات دينا مجهزة', priority: 2 },
    ],
    'vehicle-transport': [
        { slug: 'heavy-equipment-moving', context: 'لنقل المعدات الثقيلة والآليات الكبيرة', priority: 2 },
        { slug: 'intercity-moving', context: 'لنقل السيارات بين المدن بشاحنات متخصصة', priority: 2 },
        { slug: 'international-moving', context: 'لشحن السيارات خارج المملكة', priority: 1 },
    ],
    'furniture-packaging': [
        { slug: 'furniture-moving', context: 'التغليف يسبق النقل — نوفر خدمة نقل متكاملة', priority: 3 },
        { slug: 'intercity-moving', context: 'تغليف احترافي خاص للنقل بين المدن', priority: 2 },
        { slug: 'furniture-storage', context: 'تغليف مناسب للتخزين طويل المدى', priority: 2 },
    ],
};
