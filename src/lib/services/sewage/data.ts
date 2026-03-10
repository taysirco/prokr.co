import { Service } from '@/types';

export const sewageServices: Service[] = [
    { slug: 'sewage-suction', name_ar: 'شفط بيارات', name_en: 'Sewage Suction', category: 'sewage' },
    { slug: 'sewage-unblocking', name_ar: 'تسليك مجاري', name_en: 'Sewage Unblocking', category: 'sewage' },
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
