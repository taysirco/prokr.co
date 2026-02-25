import { CityContext } from '../../city-context';

export const hailContext: CityContext = {
    slug: 'hail',
    name_ar: 'حائل',
    coordinates: { lat: 27.5114, lng: 41.7208 },
    climate: 'desert',
    challenges: [
        'برودة شتوية قارسة',
        'ثلوج في الشتاء',
        'طرق جبلية',
    ],
    urbanTraits: [
        'معروفة بكرم أهلها',
        'جبال أجا وسلمى',
        'تراث ثقافي',
    ],
    priceModifier: 0.78,
    neighborhoods: [
        { name_ar: 'حي المنتزه', name_en: 'Al Muntazah', type: 'residential' },
        { name_ar: 'حي الورود', name_en: 'Al Wurud', type: 'residential' },
        { name_ar: 'حي العزيزية', name_en: 'Al Aziziyah', type: 'mixed' },
        { name_ar: 'حي المحطة', name_en: 'Al Mahattah', type: 'commercial' },
    ],
    serviceNuances: {
        insulation: [
            'عزل الخزانات من التجمد ضروري',
            'العزل الحراري للمنازل',
        ],
    },
    responseTime: 'نفس اليوم',
    nearbyCities: ['تبوك', 'القصيم'],
};
