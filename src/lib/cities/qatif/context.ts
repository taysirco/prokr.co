import { CityContext } from '../../city-context';

export const qatifContext: CityContext = {
    slug: 'qatif',
    name_ar: 'القطيف',
    coordinates: { lat: 26.5196, lng: 50.0115 },
    climate: 'humid-coastal',
    challenges: [
        'رطوبة ساحلية',
        'منطقة زراعية وساحلية',
    ],
    urbanTraits: [
        'مدينة ساحلية تاريخية',
        'واحات نخيل',
        'صيد أسماك',
    ],
    priceModifier: 0.85,
    neighborhoods: [
        { name_ar: 'سيهات', name_en: 'Saihat', type: 'residential' },
        { name_ar: 'العوامية', name_en: 'Al Awamiyah', type: 'residential' },
        { name_ar: 'تاروت', name_en: 'Tarut', type: 'residential' },
        { name_ar: 'الجش', name_en: 'Al Jish', type: 'residential' },
    ],
    serviceNuances: {
        'pest-control': [
            'مكافحة البعوض الساحلي',
            'حشرات المزارع',
        ],
    },
    responseTime: 'خلال ساعة',
    nearbyCities: ['الدمام', 'الجبيل'],
};
