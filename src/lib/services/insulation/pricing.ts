import { PricingItem } from '../types';

export const insulationPricing: Record<string, PricingItem[]> = {
    'roof-insulation': [
        { type: 'عزل مائي وحراري (فوم بولي يوريثان)', unit: 'للمتر المربع', minPrice: 25, maxPrice: 45 },
        { type: 'عزل رولات بيتومين SBS', unit: 'للمتر المربع', minPrice: 20, maxPrice: 35 },
        { type: 'عزل إيبوكسي + طبقة حماية UV', unit: 'للمتر المربع', minPrice: 30, maxPrice: 50 },
    ],
    'tank-insulation': [
        { type: 'عزل خزان علوي — إيبوكسي', unit: 'خزان', minPrice: 800, maxPrice: 1500 },
        { type: 'عزل أسمنتي لخزان أرضي', unit: 'خزان', minPrice: 1000, maxPrice: 2000 },
        { type: 'عزل إيبوكسي لخزان أرضي — غذائي', unit: 'خزان', minPrice: 1500, maxPrice: 3000 },
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
    'epoxy-insulation': [
        { type: 'عزل ايبوكسي — خزان علوي', unit: 'خزان', minPrice: 800, maxPrice: 1500 },
        { type: 'عزل ايبوكسي — خزان أرضي (Food Grade)', unit: 'خزان', minPrice: 1500, maxPrice: 3000 },
        { type: 'عزل ايبوكسي — حمامات', unit: 'للمتر المربع', minPrice: 35, maxPrice: 55 },
    ],
    'sound-insulation': [
        { type: 'عزل صوتي — جدران (صوف صخري)', unit: 'للمتر المربع', minPrice: 50, maxPrice: 100 },
        { type: 'عزل صوتي — أسقف مستعارة', unit: 'للمتر المربع', minPrice: 60, maxPrice: 120 },
        { type: 'عزل صوتي — استوديو متكامل', unit: 'غرفة', minPrice: 5000, maxPrice: 15000 },
    ],
    'insulation': [
        { type: 'عزل شامل — شقة (مائي + حراري)', unit: 'للمتر المربع', minPrice: 30, maxPrice: 50 },
        { type: 'عزل شامل — فيلا (مائي + حراري + خزان)', unit: 'مشروع', minPrice: 5000, maxPrice: 15000 },
        { type: 'عزل شامل — مبنى تجاري', unit: 'مشروع', minPrice: 10000, maxPrice: 30000 },
    ],
};

