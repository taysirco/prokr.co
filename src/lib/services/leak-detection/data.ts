import { Service } from '@/types';

export const leakDetectionServices: Service[] = [
    { slug: 'water-leak-detection', name_ar: 'كشف تسربات المياه', name_en: 'Water Leak Detection', category: 'leak-detection' },
    { slug: 'tank-leak-detection', name_ar: 'كشف تسربات الخزانات', name_en: 'Tank Leak Detection', category: 'leak-detection' },
    { slug: 'bathroom-leak-detection', name_ar: 'كشف تسربات الحمامات', name_en: 'Bathroom Leak Detection', category: 'leak-detection' },
    { slug: 'leak-detection', name_ar: 'كشف تسربات', name_en: 'Leak Detection', category: 'leak-detection' },
    { slug: 'plumbing', name_ar: 'سباكة', name_en: 'Plumbing', category: 'leak-detection' },
];

export const leakDetectionImages: Record<string, string[]> = {
    'water-leak-detection': [
        '/images/leak-detection/Riyadh water leak detection Saudi Arabia.jpg',
        '/images/leak-detection/Jeddah water leak detection Saudi Arabia.jpg',
        '/images/leak-detection/Dammam water leak detection Saudi Arabia.jpg',
        '/images/leak-detection/Saudi Arabia leak detection services near me.jpg',
    ],
    'tank-leak-detection': [
        '/images/leak-detection/Khobar water tank leak detection Saudi Arabia.jpg',
    ],
    'bathroom-leak-detection': [
        '/images/leak-detection/Jeddah bathroom drain pipe repair Saudi Arabia.jpg',
    ],
    'leak-detection': [
        '/images/leak-detection/leak-detection-thermal-camera-villa-wall-riyadh.jpg',
    ],
    'plumbing': [
        '/images/leak-detection/plumbing-service-ppr-pipes-kitchen-sink-repair.jpg',
    ],
};
