export interface Service {
    name: string;
    nameAr: string;
    slug: string;
    basePrice: number;
    unit: string;
    nuances: string[];
    tips: string[];
}

export const services: Service[] = [
    {
        name: "Furniture Moving",
        nameAr: "نقل العفش",
        slug: "furniture-moving",
        basePrice: 300,
        unit: "ريال",
        nuances: [
            "التغليف الاحترافي",
            "فك وتركيب غرف النوم والمطابخ",
            "استخدام ونش رفع هيدروليكي",
            "ضمان ضد الخدوش والكسر",
        ],
        tips: [
            "تأكد من جرد العفش قبل النقل",
            "اطلب تغليفاً خاصاً للقطع الثمينة",
            "تأكد من وجود ضمان مكتوب في العقد",
        ],
    },
    {
        name: "Pest Control",
        nameAr: "مكافحة الحشرات",
        slug: "pest-control",
        basePrice: 200,
        unit: "ريال",
        nuances: [
            "مبيدات آمنة وبدون رائحة",
            "ضمان لمدة 6 أشهر أو سنة",
            "القضاء على النمل الأبيض (الأرضة)",
            "رش الصراصير وبق الفراش",
        ],
        tips: [
            "اطلب شهادة ضمان معتمدة",
            "تأكد من أمان المبيدات على الأطفال والحيوانات الأليفة",
            "قم بتهوية المنزل بعد الرش إذا لزم الأمر",
        ],
    },
    {
        name: "Home Cleaning",
        nameAr: "تنظيف المنازل",
        slug: "cleaning",
        basePrice: 250,
        unit: "ريال",
        nuances: [
            "تنظيف عميق بالبخار",
            "جلي وتلميع الرخام",
            "تنظيف واجهات زجاجية",
            "تعقيم شامل للحمامات والمطابخ",
        ],
        tips: [
            "حدد عدد الغرف والحمامات بدقة للحصول على سعر صحيح",
            "اطلب خدمة التنظيف بالبخار للمفروشات",
        ],
    },
];
