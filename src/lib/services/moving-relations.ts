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
};
