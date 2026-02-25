import type { RelatedService } from '../related-services';

export const RELATIONS_SEWAGE: Record<string, RelatedService[]> = {
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
};
