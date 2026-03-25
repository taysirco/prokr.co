import { PricingItem } from '../types';

export const sewagePricing: Record<string, PricingItem[]> = {
    'sewage-suction': [
        { type: 'وايت شفط صغير (4 طن) — سكني', unit: 'نقلة', minPrice: 100, maxPrice: 150 },
        { type: 'وايت شفط متوسط (8 طن) — فيلا / مبنى', unit: 'نقلة', minPrice: 150, maxPrice: 250 },
        { type: 'وايت شفط كبير (12 طن) — تجاري / مجمع', unit: 'نقلة', minPrice: 250, maxPrice: 400 },
        { type: 'خدمة شفط طوارئ — خارج أوقات الدوام', unit: 'نقلة', minPrice: 200, maxPrice: 400 },
    ],
    'sewage-unblocking': [
        { type: 'تسليك بالضغط العالي (Jet Wash)', unit: 'نقطة', minPrice: 150, maxPrice: 300 },
        { type: 'تسليك بسوستة كهربائية — مجرى رئيسي', unit: 'نقطة', minPrice: 200, maxPrice: 400 },
        { type: 'تنظيف غرف التفتيش + شفط رواسب', unit: 'غرفة', minPrice: 100, maxPrice: 200 },
        { type: 'كشف انسداد بكاميرا CCTV', unit: 'فحص', minPrice: 200, maxPrice: 350 },
    ],
    'drain-cleaning': [
        { type: 'تنظيف مجاري — غسيل بالضغط العالي', unit: 'نقطة', minPrice: 150, maxPrice: 300 },
        { type: 'تنظيف مجاري — وقائي شامل', unit: 'منزل', minPrice: 300, maxPrice: 600 },
        { type: 'تنظيف غرف تفتيش + بالوعات', unit: 'وحدة', minPrice: 100, maxPrice: 200 },
    ],
    'tank-maintenance': [
        { type: 'صيانة خزان — تنظيف + تعقيم', unit: 'خزان', minPrice: 200, maxPrice: 400 },
        { type: 'صيانة خزان — إصلاح تسريب + عزل', unit: 'خزان', minPrice: 500, maxPrice: 1500 },
        { type: 'صيانة خزان — ترميم شامل', unit: 'خزان', minPrice: 1000, maxPrice: 3000 },
    ],
};

