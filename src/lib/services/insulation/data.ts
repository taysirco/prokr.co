import { Service } from '@/types';

export const insulationServices: Service[] = [
    { slug: 'tank-insulation', name_ar: 'عزل خزانات', name_en: 'Tank Insulation', category: 'insulation' },
    { slug: 'roof-insulation', name_ar: 'عزل اسطح', name_en: 'Roof Insulation', category: 'insulation' },
    { slug: 'foam-insulation', name_ar: 'عزل فوم', name_en: 'Foam Insulation', category: 'insulation' },
    { slug: 'water-insulation', name_ar: 'عزل مائي', name_en: 'Water Insulation', category: 'insulation' },
    { slug: 'thermal-insulation', name_ar: 'عزل حراري', name_en: 'Thermal Insulation', category: 'insulation' },
    { slug: 'epoxy-coating', name_ar: 'دهان ايبوكسي', name_en: 'Epoxy Coating', category: 'insulation' },
    { slug: 'epoxy-insulation', name_ar: 'عزل ايبوكسي', name_en: 'Epoxy Insulation', category: 'insulation' },
    { slug: 'sound-insulation', name_ar: 'عزل صوتي', name_en: 'Sound Insulation', category: 'insulation' },
    { slug: 'insulation', name_ar: 'عزل عام', name_en: 'General Insulation', category: 'insulation' },
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
    'epoxy-coating': [
        '/images/leak-detection/Dammam wall moisture detection mold Saudi Arabia.jpg',
    ],
    'epoxy-insulation': [
        '/images/leak-detection/epoxy-insulation-water-tank-coating-blue-saudi.jpg',
    ],
    'sound-insulation': [
        '/images/leak-detection/sound-insulation-rockwool-wall-cavity-installation.jpg',
    ],
    'insulation': [
        '/images/leak-detection/roof-insulation-polyurethane-foam-spray-riyadh.jpg',
    ],
};
