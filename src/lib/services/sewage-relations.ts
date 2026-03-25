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
    'drain-cleaning': [
        { slug: 'sewage-unblocking', context: 'تسليك المجاري المسدودة بالكامل', priority: 3 },
        { slug: 'sewage-suction', context: 'شفط البيارات قبل تنظيف المجاري', priority: 2 },
        { slug: 'plumbing', context: 'أعمال سباكة لإصلاح الأنابيب التالفة', priority: 2 },
        { slug: 'cleaning', context: 'تنظيف المكان بعد أعمال الصرف الصحي', priority: 1 },
    ],
    'tank-maintenance': [
        { slug: 'tanks-cleaning', context: 'تنظيف الخزانات ضمن الصيانة الدورية', priority: 3 },
        { slug: 'tank-insulation', context: 'عزل الخزان بعد الصيانة لمنع التلوث', priority: 3 },
        { slug: 'tank-leak-detection', context: 'فحص تسربات الخزان أثناء الصيانة', priority: 2 },
        { slug: 'sewage-suction', context: 'شفط محتوى الخزان للصيانة الداخلية', priority: 2 },
    ],
};
