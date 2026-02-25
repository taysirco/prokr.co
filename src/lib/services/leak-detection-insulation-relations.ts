import type { RelatedService } from '../related-services';

export const RELATIONS_LEAK_DETECTION_INSULATION: Record<string, RelatedService[]> = {
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
