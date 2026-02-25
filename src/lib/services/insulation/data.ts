import { Service } from '@/types';

export const insulationServices: Service[] = [
    { slug: 'tank-insulation', name_ar: 'عزل خزانات', name_en: 'Tank Insulation', category: 'insulation' },
    { slug: 'roof-insulation', name_ar: 'عزل اسطح', name_en: 'Roof Insulation', category: 'insulation' },
    { slug: 'foam-insulation', name_ar: 'عزل فوم', name_en: 'Foam Insulation', category: 'insulation' },
    { slug: 'water-insulation', name_ar: 'عزل مائي', name_en: 'Water Insulation', category: 'insulation' },
    { slug: 'thermal-insulation', name_ar: 'عزل حراري', name_en: 'Thermal Insulation', category: 'insulation' },
];

export const insulationImages: Record<string, string[]> = {
    'tank-insulation': [
        '/images/leak-detection/Khobar water tank leak detection Saudi Arabia.jpg',
    ],
    'roof-insulation': [
        '/images/leak-detection/Dammam roof leak repair Saudi Arabia.jpg',
    ],
    'foam-insulation': [
        '/images/leak-detection/Dammam roof leak repair Saudi Arabia.jpg',
    ],
    'water-insulation': [
        '/images/leak-detection/Dammam wall moisture detection mold Saudi Arabia.jpg',
    ],
    'thermal-insulation': [
        '/images/leak-detection/Riyadh thermal leak inspection Saudi Arabia.jpg',
    ],
};
