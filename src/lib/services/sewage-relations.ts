import type { RelatedService } from '../related-services';

export const RELATIONS_SEWAGE: Record<string, RelatedService[]> = {
    'sewage-unblocking': [
        { slug: 'sewage-suction', context: 'لشفط البيارات الممتلئة بعد التسليك', priority: 3 },
        { slug: 'cleaning', context: 'تنظيف شامل بعد إصلاح المجاري', priority: 1 },
    ],
    'sewage-suction': [
        { slug: 'sewage-unblocking', context: 'بعد الشفط، تسليك المجاري لمنع الانسداد', priority: 3 },
        { slug: 'tanks-cleaning', context: 'تنظيف الخزانات بعد الشفط', priority: 2 },
    ],
};
