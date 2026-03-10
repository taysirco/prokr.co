import { PricingItem } from '../types';

export const insulationPricing: Record<string, PricingItem[]> = {
    'roof-insulation': [
        { type: 'عزل مائي وحراري (فوم بولي يوريثان)', unit: 'للمتر المربع', minPrice: 25, maxPrice: 45 },
        { type: 'عزل رولات بيتومين SBS', unit: 'للمتر المربع', minPrice: 20, maxPrice: 35 },
        { type: 'عزل إيبوكسي + طبقة حماية UV', unit: 'للمتر المربع', minPrice: 30, maxPrice: 50 },
    ],
    'tank-insulation': [
        { type: 'عزل إيبوكسي لخزان أرضي — غذائي', unit: 'خزان', minPrice: 1500, maxPrice: 3000 },
        { type: 'عزل أسمنتي لخزان أرضي', unit: 'خزان', minPrice: 1000, maxPrice: 2000 },
        { type: 'عزل خزان علوي — إيبوكسي', unit: 'خزان', minPrice: 800, maxPrice: 1500 },
    ],
    'foam-insulation': [
        { type: 'عزل فوم — سطح شقة', unit: 'للمتر المربع', minPrice: 25, maxPrice: 40 },
        { type: 'عزل فوم — سطح فيلا', unit: 'للمتر المربع', minPrice: 25, maxPrice: 45 },
        { type: 'عزل فوم — مستودع / مبنى تجاري', unit: 'للمتر المربع', minPrice: 20, maxPrice: 35 },
    ],
    'water-insulation': [
        { type: 'عزل مائي — حمامات ومطابخ', unit: 'للمتر المربع', minPrice: 30, maxPrice: 50 },
        { type: 'عزل مائي — أسطح', unit: 'للمتر المربع', minPrice: 25, maxPrice: 45 },
        { type: 'عزل مائي — مسابح', unit: 'للمتر المربع', minPrice: 40, maxPrice: 70 },
    ],
    'thermal-insulation': [
        { type: 'عزل حراري — جدران (صوف صخري)', unit: 'للمتر المربع', minPrice: 20, maxPrice: 40 },
        { type: 'عزل حراري — أسطح (فوم)', unit: 'للمتر المربع', minPrice: 25, maxPrice: 45 },
        { type: 'عزل حراري — نوافذ (فيلم عاكس)', unit: 'للمتر المربع', minPrice: 30, maxPrice: 60 },
    ],
    'epoxy-coating': [
        { type: 'دهان إيبوكسي — كراج سيارات', unit: 'للمتر المربع', minPrice: 25, maxPrice: 45 },
        { type: 'دهان إيبوكسي — مستودع / مصنع', unit: 'للمتر المربع', minPrice: 20, maxPrice: 40 },
        { type: 'دهان إيبوكسي — خزان مياه', unit: 'خزان', minPrice: 1000, maxPrice: 2500 },
    ],
};
