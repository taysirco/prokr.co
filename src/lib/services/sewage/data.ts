import { Service } from '@/types';

export const sewageServices: Service[] = [
    { slug: 'sewage-suction', name_ar: 'شفط بيارات', name_en: 'Sewage Suction', category: 'sewage' },
    { slug: 'sewage-unblocking', name_ar: 'تسليك مجاري', name_en: 'Sewage Unblocking', category: 'sewage' },
    { slug: 'drain-cleaning', name_ar: 'تنظيف مجاري', name_en: 'Drain Cleaning', category: 'sewage' },
    { slug: 'tank-maintenance', name_ar: 'صيانة خزانات', name_en: 'Tank Maintenance', category: 'sewage' },
];

export const sewageImages: Record<string, string[]> = {
    'sewage-suction': [
        '/images/general-services/Tabuk toilet drain pipe installation Saudi Arabia.jpg',
        '/images/general-services/Riyadh plumbing services Saudi Arabia.jpg',
    ],
    'sewage-unblocking': [
        '/images/general-services/Riyadh plumbing services Saudi Arabia.jpg',
        '/images/general-services/Tabuk toilet drain pipe installation Saudi Arabia.jpg',
    ],
};
