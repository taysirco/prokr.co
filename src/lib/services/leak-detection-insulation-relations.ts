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
        { slug: 'water-insulation', context: 'عزل مائي لأرضيات الحمام', priority: 2 },
    ],
    'tank-insulation': [
        { slug: 'tanks-cleaning', context: 'تنظيف الخزان قبل العزل', priority: 3 },
        { slug: 'roof-insulation', context: 'عزل السطح مع الخزان', priority: 2 },
    ],
    'roof-insulation': [
        { slug: 'water-leak-detection', context: 'فحص التسربات قبل العزل', priority: 2 },
        { slug: 'tank-insulation', context: 'عزل الخزانات على السطح', priority: 2 },
    ],
    'foam-insulation': [
        { slug: 'roof-insulation', context: 'عزل اسطح شامل مع الفوم', priority: 3 },
        { slug: 'thermal-insulation', context: 'عزل حراري متكامل', priority: 2 },
    ],
    'thermal-insulation': [
        { slug: 'roof-insulation', context: 'عزل الأسطح من الحرارة', priority: 3 },
        { slug: 'foam-insulation', context: 'الفوم أفضل عازل حراري', priority: 2 },
    ],
    'water-insulation': [
        { slug: 'tank-insulation', context: 'عزل الخزانات من التسربات', priority: 3 },
        { slug: 'water-leak-detection', context: 'فحص التسربات قبل العزل', priority: 2 },
    ],
    'leak-detection': [
        { slug: 'water-leak-detection', context: 'كشف تسربات المياه بأحدث الأجهزة', priority: 3 },
        { slug: 'plumbing', context: 'إصلاح الأنابيب بعد كشف التسرب', priority: 3 },
        { slug: 'roof-insulation', context: 'عزل الأسطح لمنع التسربات مستقبلاً', priority: 2 },
    ],
    'plumbing': [
        { slug: 'water-leak-detection', context: 'كشف التسربات قبل أعمال السباكة', priority: 3 },
        { slug: 'bathroom-leak-detection', context: 'فحص تسربات الحمامات قبل الإصلاح', priority: 2 },
        { slug: 'sewage-unblocking', context: 'تسليك المجاري المرتبطة بأعمال السباكة', priority: 2 },
        { slug: 'tank-insulation', context: 'عزل الخزانات بعد إصلاح التمديدات', priority: 1 },
    ],
    'epoxy-insulation': [
        { slug: 'water-insulation', context: 'عزل مائي شامل للأسطح والحمامات', priority: 3 },
        { slug: 'tank-insulation', context: 'طلاء إيبوكسي داخلي لخزانات المياه', priority: 3 },
        { slug: 'water-leak-detection', context: 'فحص التسربات قبل تطبيق الإيبوكسي', priority: 2 },
    ],
    'sound-insulation': [
        { slug: 'thermal-insulation', context: 'العزل الحراري مع الصوتي لراحة متكاملة', priority: 3 },
        { slug: 'foam-insulation', context: 'الفوم يوفر عزل صوتي وحراري معاً', priority: 2 },
        { slug: 'roof-insulation', context: 'عزل الأسطح لمنع الضوضاء الخارجية', priority: 2 },
    ],
    'insulation': [
        { slug: 'roof-insulation', context: 'عزل الأسطح من الحرارة والرطوبة', priority: 3 },
        { slug: 'tank-insulation', context: 'عزل خزانات المياه للحفاظ على نقاء المياه', priority: 3 },
        { slug: 'foam-insulation', context: 'عزل فوم متعدد الاستخدامات', priority: 2 },
        { slug: 'water-leak-detection', context: 'فحص التسربات قبل أعمال العزل', priority: 2 },
    ],
};

