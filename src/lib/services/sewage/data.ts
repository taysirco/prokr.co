import { Service } from '@/types';

export const sewageServices: Service[] = [
    { slug: 'sewage-suction', name_ar: 'شفط بيارات', name_en: 'Sewage Suction', category: 'sewage' },
    { slug: 'sewage-unblocking', name_ar: 'تسليك مجاري', name_en: 'Sewage Unblocking', category: 'sewage' },
];

export const sewageImages: Record<string, string[]> = {
    'sewage-suction': [
        '/images/sewage/sewage-truck-saudi-arabia.jpg',
        '/images/sewage/sewage-tanker-riyadh.jpg',
    ],
    'sewage-unblocking': [
        '/images/sewage/pipe-unblocking-plumber-saudi.jpg',
        '/images/sewage/drain-cleaning-service-riyadh.jpg',
    ],
};
