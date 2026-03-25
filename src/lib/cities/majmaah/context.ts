import { CityContext } from '../../city-context';

export const majmaahContext: CityContext = {
    slug: 'majmaah',
    name_ar: 'المجمعة',
    coordinates: { lat: 25.8754, lng: 45.3444 },
    climate: 'dry-hot',
    challenges: [
        'حرارة صيفية شديدة',
        'عواصف رملية متكررة',
        'بُعد نسبي عن الرياض',
    ],
    urbanTraits: [
        'مدينة جامعية (جامعة المجمعة)',
        'مركز زراعي تقليدي',
        'عقدة طرق شمال الرياض',
    ],
    priceModifier: 0.80,
    neighborhoods: [
        { name_ar: 'حي الملك فهد', name_en: 'King Fahd', type: 'residential' },
        { name_ar: 'حي الإسكان', name_en: 'Al Iskan', type: 'residential' },
        { name_ar: 'حي الفيحاء', name_en: 'Al Fayha', type: 'mixed' },
    ],
    serviceNuances: {
        cleaning: ['حاجة متزايدة لتنظيف خزانات المياه'],
        insulation: ['عزل حراري ضروري للسقف والجدران'],
    },
    responseTime: 'نفس اليوم',
    nearbyCities: ['الرياض', 'بريدة', 'الزلفي'],
    majorLandmark: 'جامعة المجمعة',
    majorLandmarkEn: 'Majmaah+University+Saudi+Arabia',
    coverageRadius: '25 كم',
};
