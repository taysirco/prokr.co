import type { RelatedService } from '../related-services';

export const RELATIONS_PEST_CONTROL: Record<string, RelatedService[]> = {
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
        { slug: 'sewage-unblocking', context: 'تسليك المجاري لسد مداخل الفئران', priority: 1 },
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
};
