import { Service } from '@/types';

export const pestControlServices: Service[] = [
    { slug: 'pest-control', name_ar: 'مكافحة حشرات', name_en: 'Pest Control', category: 'pest-control' },
    { slug: 'pesticide-spraying', name_ar: 'رش مبيدات', name_en: 'Pesticide Spraying', category: 'pest-control' },
    { slug: 'insects-spraying', name_ar: 'رش حشرات', name_en: 'Insect Spraying', category: 'pest-control' },
    { slug: 'termite-control', name_ar: 'مكافحة النمل الابيض', name_en: 'Termite Control', category: 'pest-control' },
    { slug: 'cockroach-control', name_ar: 'مكافحة الصراصير', name_en: 'Cockroach Control', category: 'pest-control' },
    { slug: 'bedbugs-control', name_ar: 'مكافحة البق', name_en: 'Bedbug Control', category: 'pest-control' },
    { slug: 'rodent-control', name_ar: 'مكافحة الفئران', name_en: 'Rodent Control', category: 'pest-control' },
    { slug: 'ants-control', name_ar: 'مكافحة النمل', name_en: 'Ant Control', category: 'pest-control' },
    { slug: 'bird-control', name_ar: 'مكافحة الحمام', name_en: 'Bird Control', category: 'pest-control' },
    { slug: 'snakes-control', name_ar: 'مكافحة الثعابين', name_en: 'Snake Control', category: 'pest-control' },
    { slug: 'fumigation', name_ar: 'تبخير', name_en: 'Fumigation', category: 'pest-control' },
    { slug: 'agricultural-spraying', name_ar: 'رش زراعي', name_en: 'Agricultural Spraying', category: 'pest-control' },
];

export const pestControlImages: Record<string, string[]> = {
    'pest-control': [
        '/images/pest-control/pest-control-saudi-arabia.jpg',
        '/images/pest-control/pest-control-riyadh.jpg',
        '/images/pest-control/pest-control-jeddah.jpg',
        '/images/pest-control/pest-control-company-saudi-arabia-best.jpg',
    ],
    'pesticide-spraying': [
        '/images/pest-control/fumigation-services-ksa.jpg',
        '/images/pest-control/fumigation-company-riyadh.jpg',
        '/images/pest-control/pest-spray-technician-riyadh.jpg',
    ],
    'insects-spraying': [
        '/images/pest-control/insect-spraying-riyadh-baseboard.jpg',
        '/images/pest-control/insect-spraying-jeddah-home.jpg',
    ],
    'termite-control': [
        '/images/pest-control/termite-control-riyadh.jpg',
        '/images/pest-control/termite-treatment-saudi-arabia.jpg',
        '/images/pest-control/white-ants-treatment-saudi.jpg',
    ],
    'cockroach-control': [
        '/images/pest-control/cockroach-control-saudi-wall.jpg',
        '/images/pest-control/cockroach-extermination-riyadh.jpg',
        '/images/pest-control/cockroach-treatment-jeddah-kitchen.jpg',
    ],
    'bedbugs-control': [
        '/images/pest-control/bed-bug-removal-jeddah.jpg',
        '/images/pest-control/furniture-fumigation-saudi-bedroom.jpg',
    ],
    'rodent-control': [
        '/images/pest-control/rodent-removal-saudi-arabia.jpg',
        '/images/pest-control/rodent-proofing-service-saudi.jpg',
    ],
    'ants-control': [
        '/images/pest-control/ant-control-service-saudi-arabia.jpg',
    ],
    'bird-control': [
        '/images/pest-control/pest-prevention-saudi-arabia.jpg',
    ],
    'snakes-control': [
        '/images/pest-control/snake-scorpion-removal-saudi.jpg',
    ],
};
