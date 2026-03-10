import { CityContext } from '../../city-context';

export const alBahaContext: CityContext = {
    slug: 'al-baha',
    name_ar: 'الباحة',
    coordinates: { lat: 20.0000, lng: 41.4667 },
    climate: 'mountain',
    challenges: [
        'طرق جبلية ضيقة',
        'ضباب وأمطار',
        'برودة شتوية',
    ],
    urbanTraits: [
        'غابات ومناظر طبيعية',
        'سياحة بيئية',
        'مناخ معتدل صيفاً',
    ],
    priceModifier: 0.8,
    neighborhoods: [
        { name_ar: 'المخواة', name_en: 'Al Mikhwah', type: 'residential' },
        { name_ar: 'بني ظبيان', name_en: 'Bani Dhubyan', type: 'residential' },
        { name_ar: 'الحي الحكومي', name_en: 'Government District', type: 'mixed' },
    ],
    serviceNuances: {
        moving: [
            'طرق جبلية صعبة',
            'شاحنات صغيرة فقط',
        ],
        insulation: [
            'عزل من الأمطار الغزيرة',
        ],
    },
    responseTime: 'نفس اليوم',
    nearbyCities: ['أبها', 'الطائف'],
    majorLandmark: 'منتزه غابة رغدان',
    majorLandmarkEn: 'Raghadan+Forest+Park+Al+Baha',
    coverageRadius: '20 كم',
};
