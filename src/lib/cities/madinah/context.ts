import { CityContext } from '../../city-context';

export const madinahContext: CityContext = {
    slug: 'madinah',
    name_ar: 'المدينة المنورة',
    coordinates: { lat: 24.4539, lng: 39.6142 },
    climate: 'dry-hot',
    challenges: [
        'الازدحام في المواسم الدينية',
        'الحرارة العالية صيفاً',
    ],
    urbanTraits: [
        'ثاني أقدس مدينة',
        'توسع عمراني كبير',
        'مشاريع حكومية ضخمة',
    ],
    priceModifier: 1.0,
    neighborhoods: [
        { name_ar: 'العزيزية', name_en: 'Al Aziziyah', type: 'residential' },
        { name_ar: 'قباء', name_en: 'Quba', type: 'mixed' },
        { name_ar: 'العنابيس', name_en: 'Al Anabis', type: 'residential' },
        { name_ar: 'الخالدية', name_en: 'Al Khalidiyah', type: 'residential' },
        { name_ar: 'المبعوث', name_en: 'Al Mab\'uth', type: 'residential' },
    ],
    serviceNuances: {
        cleaning: [
            'تنظيف الفنادق والشقق بعد المواسم',
            'خدمات تعقيم دورية للزوار',
        ],
    },
    responseTime: 'خلال ساعتين',
    nearbyCities: ['ينبع', 'الحناكية', 'بدر'],
    majorLandmark: 'المسجد النبوي الشريف',
    majorLandmarkEn: 'Al+Masjid+an+Nabawi+Madinah',
    coverageRadius: '30 كم',
};
