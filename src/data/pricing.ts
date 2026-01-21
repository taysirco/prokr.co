import { City } from './cities';
import { Service } from './services';

export interface PricingTableItem {
    serviceType: string;
    priceRange: string;
    timeEstimate: string;
}

export const getCityMultiplier = (citySlug: string): number => {
    switch (citySlug) {
        case 'riyadh': return 1.2; // Most expensive
        case 'jeddah': return 1.1;
        case 'makkah': return 1.15;
        case 'dammam': return 1.1;
        default: return 1.0;
    }
};

export const getPricingData = (service: Service, city: City): PricingTableItem[] => {
    const multiplier = getCityMultiplier(city.slug);
    const base = service.basePrice;

    // Generate realistic-looking tiered pricing
    return [
        {
            serviceType: `خدمة ${service.nameAr} (صغيرة/ستوديو)`,
            priceRange: `${Math.round(base * multiplier)} - ${Math.round(base * multiplier * 1.5)} ${service.unit}`,
            timeEstimate: "2 - 4 ساعات",
        },
        {
            serviceType: `خدمة ${service.nameAr} (متوسطة/شقة)`,
            priceRange: `${Math.round(base * multiplier * 2)} - ${Math.round(base * multiplier * 3)} ${service.unit}`,
            timeEstimate: "4 - 6 ساعات",
        },
        {
            serviceType: `خدمة ${service.nameAr} (كبيرة/فيلا)`,
            priceRange: `${Math.round(base * multiplier * 4)} - ${Math.round(base * multiplier * 6)} ${service.unit}`,
            timeEstimate: "6 - 10 ساعات",
        },
    ];
};
