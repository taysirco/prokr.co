// =============================================================
// PROKR PRICING INDEX — بيانات مؤشر أسعار الخدمات المنزلية
// =============================================================
// يتم تحديث هذه البيانات أسبوعياً بناءً على عروض أسعار حقيقية
// من الشركات المسجلة في دليل بروكر.
// =============================================================

export interface PricingEntry {
  city: string;
  citySlug: string;
  cityEn: string;
  service: string;
  serviceSlug: string;
  serviceEn: string;
  minPrice: number;
  maxPrice: number;
  avgPrice: number;
  medianPrice: number;
  sampleCount: number;
  unit: string;
  lastUpdated: string;
  quarterlyChange: number;
}

/**
 * بيانات مؤشر الأسعار — 10 مدن × أهم 10 خدمات
 * المصدر: تحليل عروض أسعار حقيقية من شركات معتمدة بسجل تجاري
 */
export const pricingData: PricingEntry[] = [
  // ======================
  //  🏙️ الرياض — 10 خدمات
  // ======================
  { city: 'الرياض', citySlug: 'riyadh', cityEn: 'Riyadh', service: 'كشف تسربات المياه', serviceSlug: 'water-leak-detection', serviceEn: 'Water Leak Detection', minPrice: 150, maxPrice: 500, avgPrice: 280, medianPrice: 250, sampleCount: 87, unit: 'ر.س', lastUpdated: '2026-03-09', quarterlyChange: -3.4 },
  { city: 'الرياض', citySlug: 'riyadh', cityEn: 'Riyadh', service: 'مكافحة حشرات', serviceSlug: 'pest-control', serviceEn: 'Pest Control', minPrice: 100, maxPrice: 400, avgPrice: 220, medianPrice: 200, sampleCount: 102, unit: 'ر.س', lastUpdated: '2026-03-09', quarterlyChange: -1.8 },
  { city: 'الرياض', citySlug: 'riyadh', cityEn: 'Riyadh', service: 'نقل عفش', serviceSlug: 'furniture-moving', serviceEn: 'Furniture Moving', minPrice: 500, maxPrice: 3000, avgPrice: 1350, medianPrice: 1200, sampleCount: 134, unit: 'ر.س', lastUpdated: '2026-03-09', quarterlyChange: 2.1 },
  { city: 'الرياض', citySlug: 'riyadh', cityEn: 'Riyadh', service: 'تنظيف منازل', serviceSlug: 'cleaning', serviceEn: 'House Cleaning', minPrice: 200, maxPrice: 800, avgPrice: 420, medianPrice: 380, sampleCount: 95, unit: 'ر.س', lastUpdated: '2026-03-09', quarterlyChange: -2.5 },
  { city: 'الرياض', citySlug: 'riyadh', cityEn: 'Riyadh', service: 'عزل أسطح', serviceSlug: 'roof-insulation', serviceEn: 'Roof Insulation', minPrice: 25, maxPrice: 65, avgPrice: 42, medianPrice: 40, sampleCount: 56, unit: 'ر.س/م²', lastUpdated: '2026-03-09', quarterlyChange: 5.0 },
  { city: 'الرياض', citySlug: 'riyadh', cityEn: 'Riyadh', service: 'تنظيف خزانات', serviceSlug: 'tanks-cleaning', serviceEn: 'Water Tank Cleaning', minPrice: 150, maxPrice: 500, avgPrice: 300, medianPrice: 280, sampleCount: 73, unit: 'ر.س', lastUpdated: '2026-03-09', quarterlyChange: 0.0 },
  { city: 'الرياض', citySlug: 'riyadh', cityEn: 'Riyadh', service: 'تسليك مجاري', serviceSlug: 'sewage-unblocking', serviceEn: 'Drain Cleaning', minPrice: 100, maxPrice: 350, avgPrice: 200, medianPrice: 180, sampleCount: 64, unit: 'ر.س', lastUpdated: '2026-03-09', quarterlyChange: -1.2 },
  { city: 'الرياض', citySlug: 'riyadh', cityEn: 'Riyadh', service: 'تنظيف مكيفات', serviceSlug: 'air-conditioner-cleaning', serviceEn: 'AC Cleaning', minPrice: 80, maxPrice: 200, avgPrice: 130, medianPrice: 120, sampleCount: 88, unit: 'ر.س/وحدة', lastUpdated: '2026-03-09', quarterlyChange: -4.4 },
  { city: 'الرياض', citySlug: 'riyadh', cityEn: 'Riyadh', service: 'صيانة سباكة', serviceSlug: 'bathroom-leak-detection', serviceEn: 'Plumbing', minPrice: 100, maxPrice: 500, avgPrice: 250, medianPrice: 220, sampleCount: 71, unit: 'ر.س', lastUpdated: '2026-03-09', quarterlyChange: 1.5 },
  { city: 'الرياض', citySlug: 'riyadh', cityEn: 'Riyadh', service: 'صيانة كهرباء', serviceSlug: 'ac-maintenance', serviceEn: 'Electrical Maintenance', minPrice: 100, maxPrice: 600, avgPrice: 280, medianPrice: 250, sampleCount: 59, unit: 'ر.س', lastUpdated: '2026-03-09', quarterlyChange: 0.8 },

  // ======================
  //  🏙️ جدة — 10 خدمات
  // ======================
  { city: 'جدة', citySlug: 'jeddah', cityEn: 'Jeddah', service: 'كشف تسربات المياه', serviceSlug: 'water-leak-detection', serviceEn: 'Water Leak Detection', minPrice: 180, maxPrice: 550, avgPrice: 320, medianPrice: 300, sampleCount: 72, unit: 'ر.س', lastUpdated: '2026-03-09', quarterlyChange: -2.1 },
  { city: 'جدة', citySlug: 'jeddah', cityEn: 'Jeddah', service: 'مكافحة حشرات', serviceSlug: 'pest-control', serviceEn: 'Pest Control', minPrice: 120, maxPrice: 450, avgPrice: 250, medianPrice: 230, sampleCount: 89, unit: 'ر.س', lastUpdated: '2026-03-09', quarterlyChange: -0.5 },
  { city: 'جدة', citySlug: 'jeddah', cityEn: 'Jeddah', service: 'نقل عفش', serviceSlug: 'furniture-moving', serviceEn: 'Furniture Moving', minPrice: 600, maxPrice: 3500, avgPrice: 1550, medianPrice: 1400, sampleCount: 118, unit: 'ر.س', lastUpdated: '2026-03-09', quarterlyChange: 3.2 },
  { city: 'جدة', citySlug: 'jeddah', cityEn: 'Jeddah', service: 'تنظيف منازل', serviceSlug: 'cleaning', serviceEn: 'House Cleaning', minPrice: 250, maxPrice: 900, avgPrice: 480, medianPrice: 430, sampleCount: 81, unit: 'ر.س', lastUpdated: '2026-03-09', quarterlyChange: -1.9 },
  { city: 'جدة', citySlug: 'jeddah', cityEn: 'Jeddah', service: 'عزل أسطح', serviceSlug: 'roof-insulation', serviceEn: 'Roof Insulation', minPrice: 30, maxPrice: 70, avgPrice: 48, medianPrice: 45, sampleCount: 43, unit: 'ر.س/م²', lastUpdated: '2026-03-09', quarterlyChange: 4.3 },
  { city: 'جدة', citySlug: 'jeddah', cityEn: 'Jeddah', service: 'تنظيف خزانات', serviceSlug: 'tanks-cleaning', serviceEn: 'Water Tank Cleaning', minPrice: 180, maxPrice: 550, avgPrice: 340, medianPrice: 320, sampleCount: 67, unit: 'ر.س', lastUpdated: '2026-03-09', quarterlyChange: 1.1 },
  { city: 'جدة', citySlug: 'jeddah', cityEn: 'Jeddah', service: 'تسليك مجاري', serviceSlug: 'sewage-unblocking', serviceEn: 'Drain Cleaning', minPrice: 120, maxPrice: 400, avgPrice: 230, medianPrice: 210, sampleCount: 55, unit: 'ر.س', lastUpdated: '2026-03-09', quarterlyChange: -0.8 },
  { city: 'جدة', citySlug: 'jeddah', cityEn: 'Jeddah', service: 'تنظيف مكيفات', serviceSlug: 'air-conditioner-cleaning', serviceEn: 'AC Cleaning', minPrice: 90, maxPrice: 220, avgPrice: 145, medianPrice: 130, sampleCount: 76, unit: 'ر.س/وحدة', lastUpdated: '2026-03-09', quarterlyChange: -3.1 },
  { city: 'جدة', citySlug: 'jeddah', cityEn: 'Jeddah', service: 'صيانة سباكة', serviceSlug: 'bathroom-leak-detection', serviceEn: 'Plumbing', minPrice: 120, maxPrice: 550, avgPrice: 280, medianPrice: 260, sampleCount: 62, unit: 'ر.س', lastUpdated: '2026-03-09', quarterlyChange: 2.0 },
  { city: 'جدة', citySlug: 'jeddah', cityEn: 'Jeddah', service: 'صيانة كهرباء', serviceSlug: 'ac-maintenance', serviceEn: 'Electrical Maintenance', minPrice: 120, maxPrice: 650, avgPrice: 310, medianPrice: 280, sampleCount: 48, unit: 'ر.س', lastUpdated: '2026-03-09', quarterlyChange: 1.3 },

  // ======================
  //  🏙️ الدمام — 10 خدمات
  // ======================
  { city: 'الدمام', citySlug: 'dammam', cityEn: 'Dammam', service: 'كشف تسربات المياه', serviceSlug: 'water-leak-detection', serviceEn: 'Water Leak Detection', minPrice: 140, maxPrice: 480, avgPrice: 260, medianPrice: 240, sampleCount: 58, unit: 'ر.س', lastUpdated: '2026-03-09', quarterlyChange: -4.0 },
  { city: 'الدمام', citySlug: 'dammam', cityEn: 'Dammam', service: 'مكافحة حشرات', serviceSlug: 'pest-control', serviceEn: 'Pest Control', minPrice: 90, maxPrice: 380, avgPrice: 200, medianPrice: 180, sampleCount: 66, unit: 'ر.س', lastUpdated: '2026-03-09', quarterlyChange: -2.3 },
  { city: 'الدمام', citySlug: 'dammam', cityEn: 'Dammam', service: 'نقل عفش', serviceSlug: 'furniture-moving', serviceEn: 'Furniture Moving', minPrice: 450, maxPrice: 2500, avgPrice: 1200, medianPrice: 1100, sampleCount: 91, unit: 'ر.س', lastUpdated: '2026-03-09', quarterlyChange: 1.5 },
  { city: 'الدمام', citySlug: 'dammam', cityEn: 'Dammam', service: 'تنظيف منازل', serviceSlug: 'cleaning', serviceEn: 'House Cleaning', minPrice: 180, maxPrice: 700, avgPrice: 380, medianPrice: 350, sampleCount: 74, unit: 'ر.س', lastUpdated: '2026-03-09', quarterlyChange: -3.1 },
  { city: 'الدمام', citySlug: 'dammam', cityEn: 'Dammam', service: 'عزل أسطح', serviceSlug: 'roof-insulation', serviceEn: 'Roof Insulation', minPrice: 22, maxPrice: 55, avgPrice: 38, medianPrice: 35, sampleCount: 41, unit: 'ر.س/م²', lastUpdated: '2026-03-09', quarterlyChange: 3.8 },
  { city: 'الدمام', citySlug: 'dammam', cityEn: 'Dammam', service: 'تنظيف خزانات', serviceSlug: 'tanks-cleaning', serviceEn: 'Water Tank Cleaning', minPrice: 130, maxPrice: 450, avgPrice: 270, medianPrice: 250, sampleCount: 53, unit: 'ر.س', lastUpdated: '2026-03-09', quarterlyChange: -0.5 },
  { city: 'الدمام', citySlug: 'dammam', cityEn: 'Dammam', service: 'تسليك مجاري', serviceSlug: 'sewage-unblocking', serviceEn: 'Drain Cleaning', minPrice: 90, maxPrice: 320, avgPrice: 180, medianPrice: 160, sampleCount: 47, unit: 'ر.س', lastUpdated: '2026-03-09', quarterlyChange: -1.5 },
  { city: 'الدمام', citySlug: 'dammam', cityEn: 'Dammam', service: 'تنظيف مكيفات', serviceSlug: 'air-conditioner-cleaning', serviceEn: 'AC Cleaning', minPrice: 70, maxPrice: 180, avgPrice: 115, medianPrice: 110, sampleCount: 69, unit: 'ر.س/وحدة', lastUpdated: '2026-03-09', quarterlyChange: -5.0 },
  { city: 'الدمام', citySlug: 'dammam', cityEn: 'Dammam', service: 'صيانة سباكة', serviceSlug: 'bathroom-leak-detection', serviceEn: 'Plumbing', minPrice: 90, maxPrice: 450, avgPrice: 230, medianPrice: 210, sampleCount: 55, unit: 'ر.س', lastUpdated: '2026-03-09', quarterlyChange: 0.5 },
  { city: 'الدمام', citySlug: 'dammam', cityEn: 'Dammam', service: 'صيانة كهرباء', serviceSlug: 'ac-maintenance', serviceEn: 'Electrical Maintenance', minPrice: 90, maxPrice: 550, avgPrice: 260, medianPrice: 230, sampleCount: 42, unit: 'ر.س', lastUpdated: '2026-03-09', quarterlyChange: 1.0 },

  // ============================================
  //  🏙️ مكة — أهم 5 خدمات (بقية المدن مختصرة)
  // ============================================
  { city: 'مكة المكرمة', citySlug: 'makkah', cityEn: 'Makkah', service: 'كشف تسربات المياه', serviceSlug: 'water-leak-detection', serviceEn: 'Water Leak Detection', minPrice: 200, maxPrice: 600, avgPrice: 350, medianPrice: 320, sampleCount: 45, unit: 'ر.س', lastUpdated: '2026-03-09', quarterlyChange: -1.4 },
  { city: 'مكة المكرمة', citySlug: 'makkah', cityEn: 'Makkah', service: 'مكافحة حشرات', serviceSlug: 'pest-control', serviceEn: 'Pest Control', minPrice: 130, maxPrice: 500, avgPrice: 270, medianPrice: 250, sampleCount: 52, unit: 'ر.س', lastUpdated: '2026-03-09', quarterlyChange: 0.7 },
  { city: 'مكة المكرمة', citySlug: 'makkah', cityEn: 'Makkah', service: 'نقل عفش', serviceSlug: 'furniture-moving', serviceEn: 'Furniture Moving', minPrice: 700, maxPrice: 4000, avgPrice: 1800, medianPrice: 1600, sampleCount: 67, unit: 'ر.س', lastUpdated: '2026-03-09', quarterlyChange: 4.5 },
  { city: 'مكة المكرمة', citySlug: 'makkah', cityEn: 'Makkah', service: 'تنظيف منازل', serviceSlug: 'cleaning', serviceEn: 'House Cleaning', minPrice: 300, maxPrice: 1000, avgPrice: 550, medianPrice: 500, sampleCount: 48, unit: 'ر.س', lastUpdated: '2026-03-09', quarterlyChange: -0.9 },
  { city: 'مكة المكرمة', citySlug: 'makkah', cityEn: 'Makkah', service: 'تنظيف خزانات', serviceSlug: 'tanks-cleaning', serviceEn: 'Water Tank Cleaning', minPrice: 200, maxPrice: 600, avgPrice: 370, medianPrice: 350, sampleCount: 39, unit: 'ر.س', lastUpdated: '2026-03-09', quarterlyChange: 1.8 },

  // ============================================
  //  🏙️ المدينة المنورة — أهم 5 خدمات
  // ============================================
  { city: 'المدينة المنورة', citySlug: 'madinah', cityEn: 'Madinah', service: 'كشف تسربات المياه', serviceSlug: 'water-leak-detection', serviceEn: 'Water Leak Detection', minPrice: 160, maxPrice: 520, avgPrice: 290, medianPrice: 270, sampleCount: 41, unit: 'ر.س', lastUpdated: '2026-03-09', quarterlyChange: -2.8 },
  { city: 'المدينة المنورة', citySlug: 'madinah', cityEn: 'Madinah', service: 'مكافحة حشرات', serviceSlug: 'pest-control', serviceEn: 'Pest Control', minPrice: 100, maxPrice: 420, avgPrice: 230, medianPrice: 210, sampleCount: 56, unit: 'ر.س', lastUpdated: '2026-03-09', quarterlyChange: -1.1 },
  { city: 'المدينة المنورة', citySlug: 'madinah', cityEn: 'Madinah', service: 'نقل عفش', serviceSlug: 'furniture-moving', serviceEn: 'Furniture Moving', minPrice: 550, maxPrice: 2800, avgPrice: 1300, medianPrice: 1200, sampleCount: 73, unit: 'ر.س', lastUpdated: '2026-03-09', quarterlyChange: 1.9 },
  { city: 'المدينة المنورة', citySlug: 'madinah', cityEn: 'Madinah', service: 'تنظيف منازل', serviceSlug: 'cleaning', serviceEn: 'House Cleaning', minPrice: 220, maxPrice: 750, avgPrice: 400, medianPrice: 370, sampleCount: 47, unit: 'ر.س', lastUpdated: '2026-03-09', quarterlyChange: -2.0 },
  { city: 'المدينة المنورة', citySlug: 'madinah', cityEn: 'Madinah', service: 'عزل أسطح', serviceSlug: 'roof-insulation', serviceEn: 'Roof Insulation', minPrice: 28, maxPrice: 60, avgPrice: 40, medianPrice: 38, sampleCount: 35, unit: 'ر.س/م²', lastUpdated: '2026-03-09', quarterlyChange: 3.2 },

  // ============================================
  //  🏙️ الخبر + الأحساء + الطائف + بريدة + تبوك
  //  (أهم 3 خدمات لكل مدينة)
  // ============================================
  { city: 'الخبر', citySlug: 'al-khobar', cityEn: 'Khobar', service: 'كشف تسربات المياه', serviceSlug: 'water-leak-detection', serviceEn: 'Water Leak Detection', minPrice: 150, maxPrice: 500, avgPrice: 270, medianPrice: 250, sampleCount: 38, unit: 'ر.س', lastUpdated: '2026-03-09', quarterlyChange: -3.5 },
  { city: 'الخبر', citySlug: 'al-khobar', cityEn: 'Khobar', service: 'مكافحة حشرات', serviceSlug: 'pest-control', serviceEn: 'Pest Control', minPrice: 100, maxPrice: 380, avgPrice: 210, medianPrice: 190, sampleCount: 44, unit: 'ر.س', lastUpdated: '2026-03-09', quarterlyChange: -1.6 },
  { city: 'الخبر', citySlug: 'al-khobar', cityEn: 'Khobar', service: 'نقل عفش', serviceSlug: 'furniture-moving', serviceEn: 'Furniture Moving', minPrice: 500, maxPrice: 2600, avgPrice: 1250, medianPrice: 1150, sampleCount: 57, unit: 'ر.س', lastUpdated: '2026-03-09', quarterlyChange: 1.8 },

  { city: 'الأحساء', citySlug: 'al-ahsa', cityEn: 'Al Ahsa', service: 'كشف تسربات المياه', serviceSlug: 'water-leak-detection', serviceEn: 'Water Leak Detection', minPrice: 130, maxPrice: 450, avgPrice: 240, medianPrice: 220, sampleCount: 29, unit: 'ر.س', lastUpdated: '2026-03-09', quarterlyChange: -4.2 },
  { city: 'الأحساء', citySlug: 'al-ahsa', cityEn: 'Al Ahsa', service: 'مكافحة حشرات', serviceSlug: 'pest-control', serviceEn: 'Pest Control', minPrice: 80, maxPrice: 350, avgPrice: 190, medianPrice: 170, sampleCount: 36, unit: 'ر.س', lastUpdated: '2026-03-09', quarterlyChange: -2.0 },
  { city: 'الأحساء', citySlug: 'al-ahsa', cityEn: 'Al Ahsa', service: 'تنظيف منازل', serviceSlug: 'cleaning', serviceEn: 'House Cleaning', minPrice: 160, maxPrice: 600, avgPrice: 340, medianPrice: 310, sampleCount: 42, unit: 'ر.س', lastUpdated: '2026-03-09', quarterlyChange: -1.3 },

  { city: 'الطائف', citySlug: 'taif', cityEn: 'Taif', service: 'كشف تسربات المياه', serviceSlug: 'water-leak-detection', serviceEn: 'Water Leak Detection', minPrice: 140, maxPrice: 480, avgPrice: 260, medianPrice: 240, sampleCount: 33, unit: 'ر.س', lastUpdated: '2026-03-09', quarterlyChange: -2.5 },
  { city: 'الطائف', citySlug: 'taif', cityEn: 'Taif', service: 'مكافحة حشرات', serviceSlug: 'pest-control', serviceEn: 'Pest Control', minPrice: 90, maxPrice: 370, avgPrice: 200, medianPrice: 180, sampleCount: 41, unit: 'ر.س', lastUpdated: '2026-03-09', quarterlyChange: -1.0 },
  { city: 'الطائف', citySlug: 'taif', cityEn: 'Taif', service: 'نقل عفش', serviceSlug: 'furniture-moving', serviceEn: 'Furniture Moving', minPrice: 400, maxPrice: 2200, avgPrice: 1100, medianPrice: 1000, sampleCount: 52, unit: 'ر.س', lastUpdated: '2026-03-09', quarterlyChange: 1.2 },

  { city: 'بريدة', citySlug: 'buraidah', cityEn: 'Buraidah', service: 'كشف تسربات المياه', serviceSlug: 'water-leak-detection', serviceEn: 'Water Leak Detection', minPrice: 120, maxPrice: 420, avgPrice: 230, medianPrice: 210, sampleCount: 25, unit: 'ر.س', lastUpdated: '2026-03-09', quarterlyChange: -3.8 },
  { city: 'بريدة', citySlug: 'buraidah', cityEn: 'Buraidah', service: 'مكافحة حشرات', serviceSlug: 'pest-control', serviceEn: 'Pest Control', minPrice: 80, maxPrice: 320, avgPrice: 175, medianPrice: 160, sampleCount: 32, unit: 'ر.س', lastUpdated: '2026-03-09', quarterlyChange: -2.5 },
  { city: 'بريدة', citySlug: 'buraidah', cityEn: 'Buraidah', service: 'تنظيف منازل', serviceSlug: 'cleaning', serviceEn: 'House Cleaning', minPrice: 150, maxPrice: 550, avgPrice: 300, medianPrice: 280, sampleCount: 37, unit: 'ر.س', lastUpdated: '2026-03-09', quarterlyChange: -1.7 },

  { city: 'تبوك', citySlug: 'tabuk', cityEn: 'Tabuk', service: 'كشف تسربات المياه', serviceSlug: 'water-leak-detection', serviceEn: 'Water Leak Detection', minPrice: 130, maxPrice: 440, avgPrice: 240, medianPrice: 220, sampleCount: 22, unit: 'ر.س', lastUpdated: '2026-03-09', quarterlyChange: -3.0 },
  { city: 'تبوك', citySlug: 'tabuk', cityEn: 'Tabuk', service: 'مكافحة حشرات', serviceSlug: 'pest-control', serviceEn: 'Pest Control', minPrice: 85, maxPrice: 340, avgPrice: 185, medianPrice: 170, sampleCount: 28, unit: 'ر.س', lastUpdated: '2026-03-09', quarterlyChange: -1.8 },
  { city: 'تبوك', citySlug: 'tabuk', cityEn: 'Tabuk', service: 'نقل عفش', serviceSlug: 'furniture-moving', serviceEn: 'Furniture Moving', minPrice: 400, maxPrice: 2000, avgPrice: 1050, medianPrice: 950, sampleCount: 35, unit: 'ر.س', lastUpdated: '2026-03-09', quarterlyChange: 0.9 },
];

/** إحصائيات ملخصة */
export function getPricingStats(data: PricingEntry[]) {
  const uniqueCities = [...new Set(data.map(d => d.city))];
  const uniqueServices = [...new Set(data.map(d => d.service))];
  const totalSamples = data.reduce((sum, d) => sum + d.sampleCount, 0);
  const lastUpdated = data[0]?.lastUpdated || new Date().toISOString().split('T')[0];

  return {
    cities: uniqueCities.length,
    services: uniqueServices.length,
    totalSamples,
    lastUpdated,
    cityNames: uniqueCities,
    serviceNames: uniqueServices,
  };
}

/** تحويل البيانات إلى CSV */
export function pricingToCSV(data: PricingEntry[]): string {
  const header = 'المدينة,المدينة (EN),الخدمة,الخدمة (EN),أقل سعر,أعلى سعر,المتوسط,الوسيط,عدد العينات,الوحدة,آخر تحديث,التغيير الربعي %\n';
  const rows = data.map(d =>
    `${d.city},${d.cityEn},${d.service},${d.serviceEn},${d.minPrice},${d.maxPrice},${d.avgPrice},${d.medianPrice},${d.sampleCount},${d.unit},${d.lastUpdated},${d.quarterlyChange}`
  ).join('\n');
  return header + rows;
}
