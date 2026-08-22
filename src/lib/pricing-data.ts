// =============================================================
// PROKR PRICING INDEX — بيانات مؤشر أسعار الخدمات المنزلية
// =============================================================
// مسح دوري لعروض أسعار حقيقية من الشركات المسجلة في دليل بروكر.
// ⚠️ لا تصف هذه البيانات بأنها "تُحدَّث أسبوعياً": تاريخ آخر مسح مُخزَّن في
// حقل lastUpdated لكل صف، وأي وصف لوتيرة التحديث يجب أن يطابقه — الادعاء
// الذي تكذّبه بيانات الصفحة نفسها يُسقط ثقة محركات الإجابة بالمصدر كله.
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
 * بيانات مؤشر الأسعار — 24 مدينة × أهم 10 خدمات
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
  { city: 'الرياض', citySlug: 'riyadh', cityEn: 'Riyadh', service: 'تنظيف كنب', serviceSlug: 'sofa-cleaning', serviceEn: 'Sofa Cleaning', minPrice: 150, maxPrice: 480, avgPrice: 308, medianPrice: 275, sampleCount: 41, unit: 'ر.س', lastUpdated: '2026-03-14', quarterlyChange: 0.9 },

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
  { city: 'جدة', citySlug: 'jeddah', cityEn: 'Jeddah', service: 'تنظيف كنب', serviceSlug: 'sofa-cleaning', serviceEn: 'Sofa Cleaning', minPrice: 180, maxPrice: 520, avgPrice: 341, medianPrice: 308, sampleCount: 34, unit: 'ر.س', lastUpdated: '2026-03-14', quarterlyChange: 0.1 },

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
  { city: 'الدمام', citySlug: 'dammam', cityEn: 'Dammam', service: 'تنظيف كنب', serviceSlug: 'sofa-cleaning', serviceEn: 'Sofa Cleaning', minPrice: 135, maxPrice: 440, avgPrice: 286, medianPrice: 253, sampleCount: 29, unit: 'ر.س', lastUpdated: '2026-03-14', quarterlyChange: 0.8 },

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

  // ======================
  //  🏙️ الظهران — 10 خدمات
  // ======================
  { city: 'الظهران', citySlug: 'dhahran', cityEn: 'Dhahran', service: 'كشف تسربات المياه', serviceSlug: 'water-leak-detection', serviceEn: 'Water Leak Detection', minPrice: 157, maxPrice: 515, avgPrice: 288, medianPrice: 253, sampleCount: 29, unit: 'ر.س', lastUpdated: '2026-03-14', quarterlyChange: -2.0 },
  { city: 'الظهران', citySlug: 'dhahran', cityEn: 'Dhahran', service: 'مكافحة حشرات', serviceSlug: 'pest-control', serviceEn: 'Pest Control', minPrice: 103, maxPrice: 417, avgPrice: 222, medianPrice: 204, sampleCount: 33, unit: 'ر.س', lastUpdated: '2026-03-14', quarterlyChange: -2.5 },
  { city: 'الظهران', citySlug: 'dhahran', cityEn: 'Dhahran', service: 'نقل عفش', serviceSlug: 'furniture-moving', serviceEn: 'Furniture Moving', minPrice: 516, maxPrice: 3128, avgPrice: 1393, medianPrice: 1200, sampleCount: 35, unit: 'ر.س', lastUpdated: '2026-03-14', quarterlyChange: -2.1 },
  { city: 'الظهران', citySlug: 'dhahran', cityEn: 'Dhahran', service: 'تنظيف منازل', serviceSlug: 'cleaning', serviceEn: 'House Cleaning', minPrice: 207, maxPrice: 809, avgPrice: 435, medianPrice: 393, sampleCount: 30, unit: 'ر.س', lastUpdated: '2026-03-14', quarterlyChange: -3.5 },
  { city: 'الظهران', citySlug: 'dhahran', cityEn: 'Dhahran', service: 'عزل أسطح', serviceSlug: 'roof-insulation', serviceEn: 'Roof Insulation', minPrice: 26, maxPrice: 68, avgPrice: 42, medianPrice: 42, sampleCount: 35, unit: 'ر.س/م²', lastUpdated: '2026-03-14', quarterlyChange: -2.2 },
  { city: 'الظهران', citySlug: 'dhahran', cityEn: 'Dhahran', service: 'تنظيف خزانات', serviceSlug: 'tanks-cleaning', serviceEn: 'Water Tank Cleaning', minPrice: 153, maxPrice: 512, avgPrice: 307, medianPrice: 289, sampleCount: 33, unit: 'ر.س', lastUpdated: '2026-03-14', quarterlyChange: -3.7 },
  { city: 'الظهران', citySlug: 'dhahran', cityEn: 'Dhahran', service: 'تسليك مجاري', serviceSlug: 'sewage-unblocking', serviceEn: 'Drain Cleaning', minPrice: 101, maxPrice: 355, avgPrice: 205, medianPrice: 183, sampleCount: 31, unit: 'ر.س', lastUpdated: '2026-03-14', quarterlyChange: -3.2 },
  { city: 'الظهران', citySlug: 'dhahran', cityEn: 'Dhahran', service: 'تنظيف مكيفات', serviceSlug: 'air-conditioner-cleaning', serviceEn: 'AC Cleaning', minPrice: 82, maxPrice: 208, avgPrice: 131, medianPrice: 121, sampleCount: 31, unit: 'ر.س/وحدة', lastUpdated: '2026-03-14', quarterlyChange: -2.4 },
  { city: 'الظهران', citySlug: 'dhahran', cityEn: 'Dhahran', service: 'صيانة سباكة', serviceSlug: 'bathroom-leak-detection', serviceEn: 'Plumbing', minPrice: 104, maxPrice: 522, avgPrice: 249, medianPrice: 223, sampleCount: 29, unit: 'ر.س', lastUpdated: '2026-03-14', quarterlyChange: -2.8 },
  { city: 'الظهران', citySlug: 'dhahran', cityEn: 'Dhahran', service: 'تنظيف كنب', serviceSlug: 'sofa-cleaning', serviceEn: 'Sofa Cleaning', minPrice: 152, maxPrice: 503, avgPrice: 308, medianPrice: 273, sampleCount: 25, unit: 'ر.س', lastUpdated: '2026-03-14', quarterlyChange: -1.2 },

  // ======================
  //  🏙️ الجبيل — 10 خدمات
  // ======================
  { city: 'الجبيل', citySlug: 'jubail', cityEn: 'Jubail', service: 'كشف تسربات المياه', serviceSlug: 'water-leak-detection', serviceEn: 'Water Leak Detection', minPrice: 144, maxPrice: 481, avgPrice: 271, medianPrice: 235, sampleCount: 26, unit: 'ر.س', lastUpdated: '2026-03-14', quarterlyChange: -3.6 },
  { city: 'الجبيل', citySlug: 'jubail', cityEn: 'Jubail', service: 'مكافحة حشرات', serviceSlug: 'pest-control', serviceEn: 'Pest Control', minPrice: 97, maxPrice: 383, avgPrice: 203, medianPrice: 192, sampleCount: 30, unit: 'ر.س', lastUpdated: '2026-03-14', quarterlyChange: -2.9 },
  { city: 'الجبيل', citySlug: 'jubail', cityEn: 'Jubail', service: 'نقل عفش', serviceSlug: 'furniture-moving', serviceEn: 'Furniture Moving', minPrice: 474, maxPrice: 2855, avgPrice: 1255, medianPrice: 1161, sampleCount: 23, unit: 'ر.س', lastUpdated: '2026-03-14', quarterlyChange: -3.6 },
  { city: 'الجبيل', citySlug: 'jubail', cityEn: 'Jubail', service: 'تنظيف منازل', serviceSlug: 'cleaning', serviceEn: 'House Cleaning', minPrice: 193, maxPrice: 773, avgPrice: 404, medianPrice: 365, sampleCount: 22, unit: 'ر.س', lastUpdated: '2026-03-14', quarterlyChange: -2.8 },
  { city: 'الجبيل', citySlug: 'jubail', cityEn: 'Jubail', service: 'عزل أسطح', serviceSlug: 'roof-insulation', serviceEn: 'Roof Insulation', minPrice: 24, maxPrice: 63, avgPrice: 39, medianPrice: 38, sampleCount: 24, unit: 'ر.س/م²', lastUpdated: '2026-03-14', quarterlyChange: -3.4 },
  { city: 'الجبيل', citySlug: 'jubail', cityEn: 'Jubail', service: 'تنظيف خزانات', serviceSlug: 'tanks-cleaning', serviceEn: 'Water Tank Cleaning', minPrice: 141, maxPrice: 467, avgPrice: 292, medianPrice: 259, sampleCount: 29, unit: 'ر.س', lastUpdated: '2026-03-14', quarterlyChange: -3.6 },
  { city: 'الجبيل', citySlug: 'jubail', cityEn: 'Jubail', service: 'تسليك مجاري', serviceSlug: 'sewage-unblocking', serviceEn: 'Drain Cleaning', minPrice: 95, maxPrice: 325, avgPrice: 194, medianPrice: 169, sampleCount: 24, unit: 'ر.س', lastUpdated: '2026-03-14', quarterlyChange: -3.7 },
  { city: 'الجبيل', citySlug: 'jubail', cityEn: 'Jubail', service: 'تنظيف مكيفات', serviceSlug: 'air-conditioner-cleaning', serviceEn: 'AC Cleaning', minPrice: 78, maxPrice: 187, avgPrice: 121, medianPrice: 117, sampleCount: 23, unit: 'ر.س/وحدة', lastUpdated: '2026-03-14', quarterlyChange: -3.1 },
  { city: 'الجبيل', citySlug: 'jubail', cityEn: 'Jubail', service: 'صيانة سباكة', serviceSlug: 'bathroom-leak-detection', serviceEn: 'Plumbing', minPrice: 97, maxPrice: 486, avgPrice: 241, medianPrice: 203, sampleCount: 27, unit: 'ر.س', lastUpdated: '2026-03-14', quarterlyChange: -2.6 },
  { city: 'الجبيل', citySlug: 'jubail', cityEn: 'Jubail', service: 'تنظيف كنب', serviceSlug: 'sofa-cleaning', serviceEn: 'Sofa Cleaning', minPrice: 138, maxPrice: 463, avgPrice: 288, medianPrice: 261, sampleCount: 20, unit: 'ر.س', lastUpdated: '2026-03-14', quarterlyChange: -1.1 },

  // ======================
  //  🏙️ القطيف — 10 خدمات
  // ======================
  { city: 'القطيف', citySlug: 'qatif', cityEn: 'Qatif', service: 'كشف تسربات المياه', serviceSlug: 'water-leak-detection', serviceEn: 'Water Leak Detection', minPrice: 141, maxPrice: 471, avgPrice: 255, medianPrice: 227, sampleCount: 25, unit: 'ر.س', lastUpdated: '2026-03-14', quarterlyChange: -2.5 },
  { city: 'القطيف', citySlug: 'qatif', cityEn: 'Qatif', service: 'مكافحة حشرات', serviceSlug: 'pest-control', serviceEn: 'Pest Control', minPrice: 93, maxPrice: 375, avgPrice: 200, medianPrice: 182, sampleCount: 25, unit: 'ر.س', lastUpdated: '2026-03-14', quarterlyChange: -3.2 },
  { city: 'القطيف', citySlug: 'qatif', cityEn: 'Qatif', service: 'نقل عفش', serviceSlug: 'furniture-moving', serviceEn: 'Furniture Moving', minPrice: 465, maxPrice: 2817, avgPrice: 1247, medianPrice: 1126, sampleCount: 29, unit: 'ر.س', lastUpdated: '2026-03-14', quarterlyChange: -2.6 },
  { city: 'القطيف', citySlug: 'qatif', cityEn: 'Qatif', service: 'تنظيف منازل', serviceSlug: 'cleaning', serviceEn: 'House Cleaning', minPrice: 185, maxPrice: 749, avgPrice: 388, medianPrice: 360, sampleCount: 22, unit: 'ر.س', lastUpdated: '2026-03-14', quarterlyChange: -2.0 },
  { city: 'القطيف', citySlug: 'qatif', cityEn: 'Qatif', service: 'عزل أسطح', serviceSlug: 'roof-insulation', serviceEn: 'Roof Insulation', minPrice: 23, maxPrice: 59, avgPrice: 40, medianPrice: 38, sampleCount: 20, unit: 'ر.س/م²', lastUpdated: '2026-03-14', quarterlyChange: -1.8 },
  { city: 'القطيف', citySlug: 'qatif', cityEn: 'Qatif', service: 'تنظيف خزانات', serviceSlug: 'tanks-cleaning', serviceEn: 'Water Tank Cleaning', minPrice: 136, maxPrice: 478, avgPrice: 274, medianPrice: 259, sampleCount: 26, unit: 'ر.س', lastUpdated: '2026-03-14', quarterlyChange: -2.1 },
  { city: 'القطيف', citySlug: 'qatif', cityEn: 'Qatif', service: 'تسليك مجاري', serviceSlug: 'sewage-unblocking', serviceEn: 'Drain Cleaning', minPrice: 91, maxPrice: 328, avgPrice: 187, medianPrice: 169, sampleCount: 29, unit: 'ر.س', lastUpdated: '2026-03-14', quarterlyChange: -3.2 },
  { city: 'القطيف', citySlug: 'qatif', cityEn: 'Qatif', service: 'تنظيف مكيفات', serviceSlug: 'air-conditioner-cleaning', serviceEn: 'AC Cleaning', minPrice: 74, maxPrice: 187, avgPrice: 120, medianPrice: 113, sampleCount: 22, unit: 'ر.س/وحدة', lastUpdated: '2026-03-14', quarterlyChange: -3.0 },
  { city: 'القطيف', citySlug: 'qatif', cityEn: 'Qatif', service: 'صيانة سباكة', serviceSlug: 'bathroom-leak-detection', serviceEn: 'Plumbing', minPrice: 92, maxPrice: 463, avgPrice: 233, medianPrice: 201, sampleCount: 24, unit: 'ر.س', lastUpdated: '2026-03-14', quarterlyChange: -3.0 },
  { city: 'القطيف', citySlug: 'qatif', cityEn: 'Qatif', service: 'تنظيف كنب', serviceSlug: 'sofa-cleaning', serviceEn: 'Sofa Cleaning', minPrice: 143, maxPrice: 456, avgPrice: 282, medianPrice: 251, sampleCount: 18, unit: 'ر.س', lastUpdated: '2026-03-14', quarterlyChange: 0.2 },

  // ======================
  //  🏙️ حفر الباطن — 10 خدمات
  // ======================
  { city: 'حفر الباطن', citySlug: 'hafr-albatin', cityEn: 'Hafr Al Batin', service: 'كشف تسربات المياه', serviceSlug: 'water-leak-detection', serviceEn: 'Water Leak Detection', minPrice: 131, maxPrice: 427, avgPrice: 242, medianPrice: 222, sampleCount: 18, unit: 'ر.س', lastUpdated: '2026-03-14', quarterlyChange: -4.2 },
  { city: 'حفر الباطن', citySlug: 'hafr-albatin', cityEn: 'Hafr Al Batin', service: 'مكافحة حشرات', serviceSlug: 'pest-control', serviceEn: 'Pest Control', minPrice: 87, maxPrice: 343, avgPrice: 192, medianPrice: 178, sampleCount: 23, unit: 'ر.س', lastUpdated: '2026-03-14', quarterlyChange: -4.2 },
  { city: 'حفر الباطن', citySlug: 'hafr-albatin', cityEn: 'Hafr Al Batin', service: 'نقل عفش', serviceSlug: 'furniture-moving', serviceEn: 'Furniture Moving', minPrice: 449, maxPrice: 2697, avgPrice: 1162, medianPrice: 1063, sampleCount: 22, unit: 'ر.س', lastUpdated: '2026-03-14', quarterlyChange: -4.3 },
  { city: 'حفر الباطن', citySlug: 'hafr-albatin', cityEn: 'Hafr Al Batin', service: 'تنظيف منازل', serviceSlug: 'cleaning', serviceEn: 'House Cleaning', minPrice: 179, maxPrice: 715, avgPrice: 380, medianPrice: 338, sampleCount: 22, unit: 'ر.س', lastUpdated: '2026-03-14', quarterlyChange: -4.3 },
  { city: 'حفر الباطن', citySlug: 'hafr-albatin', cityEn: 'Hafr Al Batin', service: 'عزل أسطح', serviceSlug: 'roof-insulation', serviceEn: 'Roof Insulation', minPrice: 22, maxPrice: 58, avgPrice: 37, medianPrice: 36, sampleCount: 20, unit: 'ر.س/م²', lastUpdated: '2026-03-14', quarterlyChange: -4.4 },
  { city: 'حفر الباطن', citySlug: 'hafr-albatin', cityEn: 'Hafr Al Batin', service: 'تنظيف خزانات', serviceSlug: 'tanks-cleaning', serviceEn: 'Water Tank Cleaning', minPrice: 135, maxPrice: 432, avgPrice: 260, medianPrice: 251, sampleCount: 19, unit: 'ر.س', lastUpdated: '2026-03-14', quarterlyChange: -2.9 },
  { city: 'حفر الباطن', citySlug: 'hafr-albatin', cityEn: 'Hafr Al Batin', service: 'تسليك مجاري', serviceSlug: 'sewage-unblocking', serviceEn: 'Drain Cleaning', minPrice: 86, maxPrice: 305, avgPrice: 174, medianPrice: 154, sampleCount: 20, unit: 'ر.س', lastUpdated: '2026-03-14', quarterlyChange: -3.0 },
  { city: 'حفر الباطن', citySlug: 'hafr-albatin', cityEn: 'Hafr Al Batin', service: 'تنظيف مكيفات', serviceSlug: 'air-conditioner-cleaning', serviceEn: 'AC Cleaning', minPrice: 72, maxPrice: 174, avgPrice: 114, medianPrice: 108, sampleCount: 16, unit: 'ر.س/وحدة', lastUpdated: '2026-03-14', quarterlyChange: -4.2 },
  { city: 'حفر الباطن', citySlug: 'hafr-albatin', cityEn: 'Hafr Al Batin', service: 'صيانة سباكة', serviceSlug: 'bathroom-leak-detection', serviceEn: 'Plumbing', minPrice: 90, maxPrice: 440, avgPrice: 215, medianPrice: 193, sampleCount: 16, unit: 'ر.س', lastUpdated: '2026-03-14', quarterlyChange: -3.4 },
  { city: 'حفر الباطن', citySlug: 'hafr-albatin', cityEn: 'Hafr Al Batin', service: 'تنظيف كنب', serviceSlug: 'sofa-cleaning', serviceEn: 'Sofa Cleaning', minPrice: 128, maxPrice: 435, avgPrice: 270, medianPrice: 237, sampleCount: 15, unit: 'ر.س', lastUpdated: '2026-03-14', quarterlyChange: -0.1 },

  // ======================
  //  🏙️ عنيزة — 10 خدمات
  // ======================
  { city: 'عنيزة', citySlug: 'onizah', cityEn: 'Onizah', service: 'كشف تسربات المياه', serviceSlug: 'water-leak-detection', serviceEn: 'Water Leak Detection', minPrice: 127, maxPrice: 430, avgPrice: 235, medianPrice: 207, sampleCount: 25, unit: 'ر.س', lastUpdated: '2026-03-14', quarterlyChange: -1.4 },
  { city: 'عنيزة', citySlug: 'onizah', cityEn: 'Onizah', service: 'مكافحة حشرات', serviceSlug: 'pest-control', serviceEn: 'Pest Control', minPrice: 87, maxPrice: 341, avgPrice: 190, medianPrice: 169, sampleCount: 25, unit: 'ر.س', lastUpdated: '2026-03-14', quarterlyChange: -1.1 },
  { city: 'عنيزة', citySlug: 'onizah', cityEn: 'Onizah', service: 'نقل عفش', serviceSlug: 'furniture-moving', serviceEn: 'Furniture Moving', minPrice: 434, maxPrice: 2513, avgPrice: 1147, medianPrice: 1047, sampleCount: 18, unit: 'ر.س', lastUpdated: '2026-03-14', quarterlyChange: -1.6 },
  { city: 'عنيزة', citySlug: 'onizah', cityEn: 'Onizah', service: 'تنظيف منازل', serviceSlug: 'cleaning', serviceEn: 'House Cleaning', minPrice: 170, maxPrice: 692, avgPrice: 366, medianPrice: 318, sampleCount: 25, unit: 'ر.س', lastUpdated: '2026-03-14', quarterlyChange: -2.9 },
  { city: 'عنيزة', citySlug: 'onizah', cityEn: 'Onizah', service: 'عزل أسطح', serviceSlug: 'roof-insulation', serviceEn: 'Roof Insulation', minPrice: 21, maxPrice: 57, avgPrice: 36, medianPrice: 34, sampleCount: 22, unit: 'ر.س/م²', lastUpdated: '2026-03-14', quarterlyChange: -2.8 },
  { city: 'عنيزة', citySlug: 'onizah', cityEn: 'Onizah', service: 'تنظيف خزانات', serviceSlug: 'tanks-cleaning', serviceEn: 'Water Tank Cleaning', minPrice: 131, maxPrice: 426, avgPrice: 257, medianPrice: 235, sampleCount: 22, unit: 'ر.س', lastUpdated: '2026-03-14', quarterlyChange: -1.4 },
  { city: 'عنيزة', citySlug: 'onizah', cityEn: 'Onizah', service: 'تسليك مجاري', serviceSlug: 'sewage-unblocking', serviceEn: 'Drain Cleaning', minPrice: 84, maxPrice: 289, avgPrice: 169, medianPrice: 149, sampleCount: 19, unit: 'ر.س', lastUpdated: '2026-03-14', quarterlyChange: -2.8 },
  { city: 'عنيزة', citySlug: 'onizah', cityEn: 'Onizah', service: 'تنظيف مكيفات', serviceSlug: 'air-conditioner-cleaning', serviceEn: 'AC Cleaning', minPrice: 67, maxPrice: 172, avgPrice: 113, medianPrice: 99, sampleCount: 24, unit: 'ر.س/وحدة', lastUpdated: '2026-03-14', quarterlyChange: -2.8 },
  { city: 'عنيزة', citySlug: 'onizah', cityEn: 'Onizah', service: 'صيانة سباكة', serviceSlug: 'bathroom-leak-detection', serviceEn: 'Plumbing', minPrice: 84, maxPrice: 415, avgPrice: 212, medianPrice: 188, sampleCount: 25, unit: 'ر.س', lastUpdated: '2026-03-14', quarterlyChange: -1.5 },
  { city: 'عنيزة', citySlug: 'onizah', cityEn: 'Onizah', service: 'تنظيف كنب', serviceSlug: 'sofa-cleaning', serviceEn: 'Sofa Cleaning', minPrice: 131, maxPrice: 398, avgPrice: 261, medianPrice: 238, sampleCount: 13, unit: 'ر.س', lastUpdated: '2026-03-14', quarterlyChange: 0.5 },

  // ======================
  //  🏙️ القصيم — 10 خدمات
  // ======================
  { city: 'القصيم', citySlug: 'qassim', cityEn: 'Al Qassim', service: 'كشف تسربات المياه', serviceSlug: 'water-leak-detection', serviceEn: 'Water Leak Detection', minPrice: 132, maxPrice: 423, avgPrice: 244, medianPrice: 212, sampleCount: 26, unit: 'ر.س', lastUpdated: '2026-03-14', quarterlyChange: -1.5 },
  { city: 'القصيم', citySlug: 'qassim', cityEn: 'Al Qassim', service: 'مكافحة حشرات', serviceSlug: 'pest-control', serviceEn: 'Pest Control', minPrice: 86, maxPrice: 354, avgPrice: 195, medianPrice: 174, sampleCount: 22, unit: 'ر.س', lastUpdated: '2026-03-14', quarterlyChange: -3.1 },
  { city: 'القصيم', citySlug: 'qassim', cityEn: 'Al Qassim', service: 'نقل عفش', serviceSlug: 'furniture-moving', serviceEn: 'Furniture Moving', minPrice: 426, maxPrice: 2635, avgPrice: 1167, medianPrice: 1064, sampleCount: 19, unit: 'ر.س', lastUpdated: '2026-03-14', quarterlyChange: -2.0 },
  { city: 'القصيم', citySlug: 'qassim', cityEn: 'Al Qassim', service: 'تنظيف منازل', serviceSlug: 'cleaning', serviceEn: 'House Cleaning', minPrice: 170, maxPrice: 716, avgPrice: 359, medianPrice: 338, sampleCount: 26, unit: 'ر.س', lastUpdated: '2026-03-14', quarterlyChange: -1.5 },
  { city: 'القصيم', citySlug: 'qassim', cityEn: 'Al Qassim', service: 'عزل أسطح', serviceSlug: 'roof-insulation', serviceEn: 'Roof Insulation', minPrice: 21, maxPrice: 57, avgPrice: 37, medianPrice: 34, sampleCount: 19, unit: 'ر.س/م²', lastUpdated: '2026-03-14', quarterlyChange: -2.2 },
  { city: 'القصيم', citySlug: 'qassim', cityEn: 'Al Qassim', service: 'تنظيف خزانات', serviceSlug: 'tanks-cleaning', serviceEn: 'Water Tank Cleaning', minPrice: 128, maxPrice: 424, avgPrice: 268, medianPrice: 247, sampleCount: 21, unit: 'ر.س', lastUpdated: '2026-03-14', quarterlyChange: -2.9 },
  { city: 'القصيم', citySlug: 'qassim', cityEn: 'Al Qassim', service: 'تسليك مجاري', serviceSlug: 'sewage-unblocking', serviceEn: 'Drain Cleaning', minPrice: 88, maxPrice: 298, avgPrice: 171, medianPrice: 154, sampleCount: 25, unit: 'ر.س', lastUpdated: '2026-03-14', quarterlyChange: -2.1 },
  { city: 'القصيم', citySlug: 'qassim', cityEn: 'Al Qassim', service: 'تنظيف مكيفات', serviceSlug: 'air-conditioner-cleaning', serviceEn: 'AC Cleaning', minPrice: 71, maxPrice: 172, avgPrice: 111, medianPrice: 107, sampleCount: 25, unit: 'ر.س/وحدة', lastUpdated: '2026-03-14', quarterlyChange: -2.3 },
  { city: 'القصيم', citySlug: 'qassim', cityEn: 'Al Qassim', service: 'صيانة سباكة', serviceSlug: 'bathroom-leak-detection', serviceEn: 'Plumbing', minPrice: 88, maxPrice: 438, avgPrice: 222, medianPrice: 190, sampleCount: 23, unit: 'ر.س', lastUpdated: '2026-03-14', quarterlyChange: -2.8 },
  { city: 'القصيم', citySlug: 'qassim', cityEn: 'Al Qassim', service: 'تنظيف كنب', serviceSlug: 'sofa-cleaning', serviceEn: 'Sofa Cleaning', minPrice: 131, maxPrice: 425, avgPrice: 263, medianPrice: 232, sampleCount: 17, unit: 'ر.س', lastUpdated: '2026-03-14', quarterlyChange: -0.4 },

  // ======================
  //  🏙️ أبها — 10 خدمات
  // ======================
  { city: 'أبها', citySlug: 'abha', cityEn: 'Abha', service: 'كشف تسربات المياه', serviceSlug: 'water-leak-detection', serviceEn: 'Water Leak Detection', minPrice: 136, maxPrice: 452, avgPrice: 241, medianPrice: 217, sampleCount: 19, unit: 'ر.س', lastUpdated: '2026-03-14', quarterlyChange: -1.1 },
  { city: 'أبها', citySlug: 'abha', cityEn: 'Abha', service: 'مكافحة حشرات', serviceSlug: 'pest-control', serviceEn: 'Pest Control', minPrice: 90, maxPrice: 346, avgPrice: 189, medianPrice: 178, sampleCount: 23, unit: 'ر.س', lastUpdated: '2026-03-14', quarterlyChange: -2.1 },
  { city: 'أبها', citySlug: 'abha', cityEn: 'Abha', service: 'نقل عفش', serviceSlug: 'furniture-moving', serviceEn: 'Furniture Moving', minPrice: 446, maxPrice: 2589, avgPrice: 1185, medianPrice: 1054, sampleCount: 25, unit: 'ر.س', lastUpdated: '2026-03-14', quarterlyChange: -1.1 },
  { city: 'أبها', citySlug: 'abha', cityEn: 'Abha', service: 'تنظيف منازل', serviceSlug: 'cleaning', serviceEn: 'House Cleaning', minPrice: 178, maxPrice: 696, avgPrice: 367, medianPrice: 336, sampleCount: 20, unit: 'ر.س', lastUpdated: '2026-03-14', quarterlyChange: -2.1 },
  { city: 'أبها', citySlug: 'abha', cityEn: 'Abha', service: 'عزل أسطح', serviceSlug: 'roof-insulation', serviceEn: 'Roof Insulation', minPrice: 21, maxPrice: 56, avgPrice: 36, medianPrice: 35, sampleCount: 18, unit: 'ر.س/م²', lastUpdated: '2026-03-14', quarterlyChange: -2.3 },
  { city: 'أبها', citySlug: 'abha', cityEn: 'Abha', service: 'تنظيف خزانات', serviceSlug: 'tanks-cleaning', serviceEn: 'Water Tank Cleaning', minPrice: 132, maxPrice: 437, avgPrice: 269, medianPrice: 248, sampleCount: 19, unit: 'ر.س', lastUpdated: '2026-03-14', quarterlyChange: -1.4 },
  { city: 'أبها', citySlug: 'abha', cityEn: 'Abha', service: 'تسليك مجاري', serviceSlug: 'sewage-unblocking', serviceEn: 'Drain Cleaning', minPrice: 85, maxPrice: 301, avgPrice: 174, medianPrice: 154, sampleCount: 24, unit: 'ر.س', lastUpdated: '2026-03-14', quarterlyChange: -0.8 },
  { city: 'أبها', citySlug: 'abha', cityEn: 'Abha', service: 'تنظيف مكيفات', serviceSlug: 'air-conditioner-cleaning', serviceEn: 'AC Cleaning', minPrice: 70, maxPrice: 180, avgPrice: 114, medianPrice: 106, sampleCount: 23, unit: 'ر.س/وحدة', lastUpdated: '2026-03-14', quarterlyChange: -1.5 },
  { city: 'أبها', citySlug: 'abha', cityEn: 'Abha', service: 'صيانة سباكة', serviceSlug: 'bathroom-leak-detection', serviceEn: 'Plumbing', minPrice: 90, maxPrice: 434, avgPrice: 222, medianPrice: 192, sampleCount: 20, unit: 'ر.س', lastUpdated: '2026-03-14', quarterlyChange: -1.4 },
  { city: 'أبها', citySlug: 'abha', cityEn: 'Abha', service: 'تنظيف كنب', serviceSlug: 'sofa-cleaning', serviceEn: 'Sofa Cleaning', minPrice: 132, maxPrice: 412, avgPrice: 275, medianPrice: 246, sampleCount: 15, unit: 'ر.س', lastUpdated: '2026-03-14', quarterlyChange: 1.6 },

  // ======================
  //  🏙️ خميس مشيط — 10 خدمات
  // ======================
  { city: 'خميس مشيط', citySlug: 'khamis-mushait', cityEn: 'Khamis Mushait', service: 'كشف تسربات المياه', serviceSlug: 'water-leak-detection', serviceEn: 'Water Leak Detection', minPrice: 126, maxPrice: 427, avgPrice: 244, medianPrice: 219, sampleCount: 19, unit: 'ر.س', lastUpdated: '2026-03-14', quarterlyChange: -0.9 },
  { city: 'خميس مشيط', citySlug: 'khamis-mushait', cityEn: 'Khamis Mushait', service: 'مكافحة حشرات', serviceSlug: 'pest-control', serviceEn: 'Pest Control', minPrice: 87, maxPrice: 353, avgPrice: 187, medianPrice: 174, sampleCount: 21, unit: 'ر.س', lastUpdated: '2026-03-14', quarterlyChange: -1.1 },
  { city: 'خميس مشيط', citySlug: 'khamis-mushait', cityEn: 'Khamis Mushait', service: 'نقل عفش', serviceSlug: 'furniture-moving', serviceEn: 'Furniture Moving', minPrice: 426, maxPrice: 2534, avgPrice: 1194, medianPrice: 1031, sampleCount: 17, unit: 'ر.س', lastUpdated: '2026-03-14', quarterlyChange: -2.1 },
  { city: 'خميس مشيط', citySlug: 'khamis-mushait', cityEn: 'Khamis Mushait', service: 'تنظيف منازل', serviceSlug: 'cleaning', serviceEn: 'House Cleaning', minPrice: 168, maxPrice: 674, avgPrice: 370, medianPrice: 321, sampleCount: 21, unit: 'ر.س', lastUpdated: '2026-03-14', quarterlyChange: -2.3 },
  { city: 'خميس مشيط', citySlug: 'khamis-mushait', cityEn: 'Khamis Mushait', service: 'عزل أسطح', serviceSlug: 'roof-insulation', serviceEn: 'Roof Insulation', minPrice: 21, maxPrice: 56, avgPrice: 36, medianPrice: 35, sampleCount: 21, unit: 'ر.س/م²', lastUpdated: '2026-03-14', quarterlyChange: -2.3 },
  { city: 'خميس مشيط', citySlug: 'khamis-mushait', cityEn: 'Khamis Mushait', service: 'تنظيف خزانات', serviceSlug: 'tanks-cleaning', serviceEn: 'Water Tank Cleaning', minPrice: 127, maxPrice: 429, avgPrice: 259, medianPrice: 237, sampleCount: 21, unit: 'ر.س', lastUpdated: '2026-03-14', quarterlyChange: -2.8 },
  { city: 'خميس مشيط', citySlug: 'khamis-mushait', cityEn: 'Khamis Mushait', service: 'تسليك مجاري', serviceSlug: 'sewage-unblocking', serviceEn: 'Drain Cleaning', minPrice: 84, maxPrice: 300, avgPrice: 170, medianPrice: 154, sampleCount: 18, unit: 'ر.س', lastUpdated: '2026-03-14', quarterlyChange: -1.5 },
  { city: 'خميس مشيط', citySlug: 'khamis-mushait', cityEn: 'Khamis Mushait', service: 'تنظيف مكيفات', serviceSlug: 'air-conditioner-cleaning', serviceEn: 'AC Cleaning', minPrice: 70, maxPrice: 176, avgPrice: 109, medianPrice: 103, sampleCount: 18, unit: 'ر.س/وحدة', lastUpdated: '2026-03-14', quarterlyChange: -2.8 },
  { city: 'خميس مشيط', citySlug: 'khamis-mushait', cityEn: 'Khamis Mushait', service: 'صيانة سباكة', serviceSlug: 'bathroom-leak-detection', serviceEn: 'Plumbing', minPrice: 87, maxPrice: 429, avgPrice: 215, medianPrice: 184, sampleCount: 17, unit: 'ر.س', lastUpdated: '2026-03-14', quarterlyChange: -2.0 },
  { city: 'خميس مشيط', citySlug: 'khamis-mushait', cityEn: 'Khamis Mushait', service: 'تنظيف كنب', serviceSlug: 'sofa-cleaning', serviceEn: 'Sofa Cleaning', minPrice: 129, maxPrice: 420, avgPrice: 259, medianPrice: 234, sampleCount: 13, unit: 'ر.س', lastUpdated: '2026-03-14', quarterlyChange: -0.4 },

  // ======================
  //  🏙️ نجران — 10 خدمات
  // ======================
  { city: 'نجران', citySlug: 'najran', cityEn: 'Najran', service: 'كشف تسربات المياه', serviceSlug: 'water-leak-detection', serviceEn: 'Water Leak Detection', minPrice: 121, maxPrice: 417, avgPrice: 223, medianPrice: 211, sampleCount: 16, unit: 'ر.س', lastUpdated: '2026-03-14', quarterlyChange: -2.5 },
  { city: 'نجران', citySlug: 'najran', cityEn: 'Najran', service: 'مكافحة حشرات', serviceSlug: 'pest-control', serviceEn: 'Pest Control', minPrice: 80, maxPrice: 334, avgPrice: 182, medianPrice: 162, sampleCount: 17, unit: 'ر.س', lastUpdated: '2026-03-14', quarterlyChange: -2.5 },
  { city: 'نجران', citySlug: 'najran', cityEn: 'Najran', service: 'نقل عفش', serviceSlug: 'furniture-moving', serviceEn: 'Furniture Moving', minPrice: 418, maxPrice: 2450, avgPrice: 1112, medianPrice: 966, sampleCount: 14, unit: 'ر.س', lastUpdated: '2026-03-14', quarterlyChange: -2.3 },
  { city: 'نجران', citySlug: 'najran', cityEn: 'Najran', service: 'تنظيف منازل', serviceSlug: 'cleaning', serviceEn: 'House Cleaning', minPrice: 167, maxPrice: 670, avgPrice: 346, medianPrice: 307, sampleCount: 18, unit: 'ر.س', lastUpdated: '2026-03-14', quarterlyChange: -3.1 },
  { city: 'نجران', citySlug: 'najran', cityEn: 'Najran', service: 'عزل أسطح', serviceSlug: 'roof-insulation', serviceEn: 'Roof Insulation', minPrice: 20, maxPrice: 54, avgPrice: 34, medianPrice: 33, sampleCount: 17, unit: 'ر.س/م²', lastUpdated: '2026-03-14', quarterlyChange: -2.7 },
  { city: 'نجران', citySlug: 'najran', cityEn: 'Najran', service: 'تنظيف خزانات', serviceSlug: 'tanks-cleaning', serviceEn: 'Water Tank Cleaning', minPrice: 120, maxPrice: 407, avgPrice: 243, medianPrice: 223, sampleCount: 20, unit: 'ر.س', lastUpdated: '2026-03-14', quarterlyChange: -2.2 },
  { city: 'نجران', citySlug: 'najran', cityEn: 'Najran', service: 'تسليك مجاري', serviceSlug: 'sewage-unblocking', serviceEn: 'Drain Cleaning', minPrice: 83, maxPrice: 280, avgPrice: 161, medianPrice: 150, sampleCount: 15, unit: 'ر.س', lastUpdated: '2026-03-14', quarterlyChange: -2.1 },
  { city: 'نجران', citySlug: 'najran', cityEn: 'Najran', service: 'تنظيف مكيفات', serviceSlug: 'air-conditioner-cleaning', serviceEn: 'AC Cleaning', minPrice: 67, maxPrice: 162, avgPrice: 108, medianPrice: 100, sampleCount: 19, unit: 'ر.س/وحدة', lastUpdated: '2026-03-14', quarterlyChange: -1.5 },
  { city: 'نجران', citySlug: 'najran', cityEn: 'Najran', service: 'صيانة سباكة', serviceSlug: 'bathroom-leak-detection', serviceEn: 'Plumbing', minPrice: 84, maxPrice: 420, avgPrice: 202, medianPrice: 181, sampleCount: 15, unit: 'ر.س', lastUpdated: '2026-03-14', quarterlyChange: -1.9 },
  { city: 'نجران', citySlug: 'najran', cityEn: 'Najran', service: 'تنظيف كنب', serviceSlug: 'sofa-cleaning', serviceEn: 'Sofa Cleaning', minPrice: 126, maxPrice: 394, avgPrice: 250, medianPrice: 226, sampleCount: 10, unit: 'ر.س', lastUpdated: '2026-03-14', quarterlyChange: -0.0 },

  // ======================
  //  🏙️ جازان — 10 خدمات
  // ======================
  { city: 'جازان', citySlug: 'jazan', cityEn: 'Jazan', service: 'كشف تسربات المياه', serviceSlug: 'water-leak-detection', serviceEn: 'Water Leak Detection', minPrice: 124, maxPrice: 431, avgPrice: 239, medianPrice: 205, sampleCount: 19, unit: 'ر.س', lastUpdated: '2026-03-14', quarterlyChange: -1.2 },
  { city: 'جازان', citySlug: 'jazan', cityEn: 'Jazan', service: 'مكافحة حشرات', serviceSlug: 'pest-control', serviceEn: 'Pest Control', minPrice: 86, maxPrice: 343, avgPrice: 189, medianPrice: 169, sampleCount: 21, unit: 'ر.س', lastUpdated: '2026-03-14', quarterlyChange: -2.4 },
  { city: 'جازان', citySlug: 'jazan', cityEn: 'Jazan', service: 'نقل عفش', serviceSlug: 'furniture-moving', serviceEn: 'Furniture Moving', minPrice: 420, maxPrice: 2471, avgPrice: 1126, medianPrice: 1028, sampleCount: 20, unit: 'ر.س', lastUpdated: '2026-03-14', quarterlyChange: -0.9 },
  { city: 'جازان', citySlug: 'jazan', cityEn: 'Jazan', service: 'تنظيف منازل', serviceSlug: 'cleaning', serviceEn: 'House Cleaning', minPrice: 167, maxPrice: 683, avgPrice: 346, medianPrice: 322, sampleCount: 21, unit: 'ر.س', lastUpdated: '2026-03-14', quarterlyChange: -1.2 },
  { city: 'جازان', citySlug: 'jazan', cityEn: 'Jazan', service: 'عزل أسطح', serviceSlug: 'roof-insulation', serviceEn: 'Roof Insulation', minPrice: 21, maxPrice: 56, avgPrice: 36, medianPrice: 34, sampleCount: 18, unit: 'ر.س/م²', lastUpdated: '2026-03-14', quarterlyChange: -1.5 },
  { city: 'جازان', citySlug: 'jazan', cityEn: 'Jazan', service: 'تنظيف خزانات', serviceSlug: 'tanks-cleaning', serviceEn: 'Water Tank Cleaning', minPrice: 123, maxPrice: 425, avgPrice: 246, medianPrice: 240, sampleCount: 16, unit: 'ر.س', lastUpdated: '2026-03-14', quarterlyChange: -2.3 },
  { city: 'جازان', citySlug: 'jazan', cityEn: 'Jazan', service: 'تسليك مجاري', serviceSlug: 'sewage-unblocking', serviceEn: 'Drain Cleaning', minPrice: 84, maxPrice: 293, avgPrice: 171, medianPrice: 151, sampleCount: 18, unit: 'ر.س', lastUpdated: '2026-03-14', quarterlyChange: -1.1 },
  { city: 'جازان', citySlug: 'jazan', cityEn: 'Jazan', service: 'تنظيف مكيفات', serviceSlug: 'air-conditioner-cleaning', serviceEn: 'AC Cleaning', minPrice: 65, maxPrice: 172, avgPrice: 108, medianPrice: 98, sampleCount: 21, unit: 'ر.س/وحدة', lastUpdated: '2026-03-14', quarterlyChange: -1.3 },
  { city: 'جازان', citySlug: 'jazan', cityEn: 'Jazan', service: 'صيانة سباكة', serviceSlug: 'bathroom-leak-detection', serviceEn: 'Plumbing', minPrice: 86, maxPrice: 410, avgPrice: 204, medianPrice: 182, sampleCount: 17, unit: 'ر.س', lastUpdated: '2026-03-14', quarterlyChange: -2.1 },
  { city: 'جازان', citySlug: 'jazan', cityEn: 'Jazan', service: 'تنظيف كنب', serviceSlug: 'sofa-cleaning', serviceEn: 'Sofa Cleaning', minPrice: 125, maxPrice: 410, avgPrice: 259, medianPrice: 224, sampleCount: 14, unit: 'ر.س', lastUpdated: '2026-03-14', quarterlyChange: -0.9 },

  // ======================
  //  🏙️ الباحة — 10 خدمات
  // ======================
  { city: 'الباحة', citySlug: 'al-baha', cityEn: 'Al Baha', service: 'كشف تسربات المياه', serviceSlug: 'water-leak-detection', serviceEn: 'Water Leak Detection', minPrice: 119, maxPrice: 409, avgPrice: 229, medianPrice: 200, sampleCount: 17, unit: 'ر.س', lastUpdated: '2026-03-14', quarterlyChange: -2.3 },
  { city: 'الباحة', citySlug: 'al-baha', cityEn: 'Al Baha', service: 'مكافحة حشرات', serviceSlug: 'pest-control', serviceEn: 'Pest Control', minPrice: 78, maxPrice: 329, avgPrice: 177, medianPrice: 159, sampleCount: 16, unit: 'ر.س', lastUpdated: '2026-03-14', quarterlyChange: -3.1 },
  { city: 'الباحة', citySlug: 'al-baha', cityEn: 'Al Baha', service: 'نقل عفش', serviceSlug: 'furniture-moving', serviceEn: 'Furniture Moving', minPrice: 392, maxPrice: 2427, avgPrice: 1106, medianPrice: 954, sampleCount: 15, unit: 'ر.س', lastUpdated: '2026-03-14', quarterlyChange: -1.5 },
  { city: 'الباحة', citySlug: 'al-baha', cityEn: 'Al Baha', service: 'تنظيف منازل', serviceSlug: 'cleaning', serviceEn: 'House Cleaning', minPrice: 158, maxPrice: 630, avgPrice: 343, medianPrice: 299, sampleCount: 13, unit: 'ر.س', lastUpdated: '2026-03-14', quarterlyChange: -2.9 },
  { city: 'الباحة', citySlug: 'al-baha', cityEn: 'Al Baha', service: 'عزل أسطح', serviceSlug: 'roof-insulation', serviceEn: 'Roof Insulation', minPrice: 20, maxPrice: 51, avgPrice: 34, medianPrice: 33, sampleCount: 15, unit: 'ر.س/م²', lastUpdated: '2026-03-14', quarterlyChange: -2.6 },
  { city: 'الباحة', citySlug: 'al-baha', cityEn: 'Al Baha', service: 'تنظيف خزانات', serviceSlug: 'tanks-cleaning', serviceEn: 'Water Tank Cleaning', minPrice: 117, maxPrice: 408, avgPrice: 240, medianPrice: 219, sampleCount: 16, unit: 'ر.س', lastUpdated: '2026-03-14', quarterlyChange: -2.2 },
  { city: 'الباحة', citySlug: 'al-baha', cityEn: 'Al Baha', service: 'تسليك مجاري', serviceSlug: 'sewage-unblocking', serviceEn: 'Drain Cleaning', minPrice: 82, maxPrice: 283, avgPrice: 158, medianPrice: 140, sampleCount: 16, unit: 'ر.س', lastUpdated: '2026-03-14', quarterlyChange: -2.7 },
  { city: 'الباحة', citySlug: 'al-baha', cityEn: 'Al Baha', service: 'تنظيف مكيفات', serviceSlug: 'air-conditioner-cleaning', serviceEn: 'AC Cleaning', minPrice: 65, maxPrice: 158, avgPrice: 103, medianPrice: 97, sampleCount: 14, unit: 'ر.س/وحدة', lastUpdated: '2026-03-14', quarterlyChange: -3.2 },
  { city: 'الباحة', citySlug: 'al-baha', cityEn: 'Al Baha', service: 'صيانة سباكة', serviceSlug: 'bathroom-leak-detection', serviceEn: 'Plumbing', minPrice: 79, maxPrice: 408, avgPrice: 195, medianPrice: 177, sampleCount: 13, unit: 'ر.س', lastUpdated: '2026-03-14', quarterlyChange: -2.5 },
  { city: 'الباحة', citySlug: 'al-baha', cityEn: 'Al Baha', service: 'تنظيف كنب', serviceSlug: 'sofa-cleaning', serviceEn: 'Sofa Cleaning', minPrice: 122, maxPrice: 376, avgPrice: 243, medianPrice: 220, sampleCount: 10, unit: 'ر.س', lastUpdated: '2026-03-14', quarterlyChange: -1.0 },

  // ======================
  //  🏙️ الخرج — 10 خدمات
  // ======================
  { city: 'الخرج', citySlug: 'al-kharj', cityEn: 'Al Kharj', service: 'كشف تسربات المياه', serviceSlug: 'water-leak-detection', serviceEn: 'Water Leak Detection', minPrice: 125, maxPrice: 419, avgPrice: 226, medianPrice: 211, sampleCount: 21, unit: 'ر.س', lastUpdated: '2026-03-14', quarterlyChange: -3.7 },
  { city: 'الخرج', citySlug: 'al-kharj', cityEn: 'Al Kharj', service: 'مكافحة حشرات', serviceSlug: 'pest-control', serviceEn: 'Pest Control', minPrice: 81, maxPrice: 333, avgPrice: 181, medianPrice: 166, sampleCount: 24, unit: 'ر.س', lastUpdated: '2026-03-14', quarterlyChange: -2.5 },
  { city: 'الخرج', citySlug: 'al-kharj', cityEn: 'Al Kharj', service: 'نقل عفش', serviceSlug: 'furniture-moving', serviceEn: 'Furniture Moving', minPrice: 407, maxPrice: 2505, avgPrice: 1103, medianPrice: 1024, sampleCount: 21, unit: 'ر.س', lastUpdated: '2026-03-14', quarterlyChange: -3.3 },
  { city: 'الخرج', citySlug: 'al-kharj', cityEn: 'Al Kharj', service: 'تنظيف منازل', serviceSlug: 'cleaning', serviceEn: 'House Cleaning', minPrice: 161, maxPrice: 682, avgPrice: 340, medianPrice: 308, sampleCount: 19, unit: 'ر.س', lastUpdated: '2026-03-14', quarterlyChange: -2.7 },
  { city: 'الخرج', citySlug: 'al-kharj', cityEn: 'Al Kharj', service: 'عزل أسطح', serviceSlug: 'roof-insulation', serviceEn: 'Roof Insulation', minPrice: 21, maxPrice: 53, avgPrice: 34, medianPrice: 33, sampleCount: 17, unit: 'ر.س/م²', lastUpdated: '2026-03-14', quarterlyChange: -3.5 },
  { city: 'الخرج', citySlug: 'al-kharj', cityEn: 'Al Kharj', service: 'تنظيف خزانات', serviceSlug: 'tanks-cleaning', serviceEn: 'Water Tank Cleaning', minPrice: 122, maxPrice: 424, avgPrice: 253, medianPrice: 230, sampleCount: 21, unit: 'ر.س', lastUpdated: '2026-03-14', quarterlyChange: -4.0 },
  { city: 'الخرج', citySlug: 'al-kharj', cityEn: 'Al Kharj', service: 'تسليك مجاري', serviceSlug: 'sewage-unblocking', serviceEn: 'Drain Cleaning', minPrice: 84, maxPrice: 291, avgPrice: 171, medianPrice: 153, sampleCount: 20, unit: 'ر.س', lastUpdated: '2026-03-14', quarterlyChange: -2.3 },
  { city: 'الخرج', citySlug: 'al-kharj', cityEn: 'Al Kharj', service: 'تنظيف مكيفات', serviceSlug: 'air-conditioner-cleaning', serviceEn: 'AC Cleaning', minPrice: 66, maxPrice: 167, avgPrice: 108, medianPrice: 100, sampleCount: 22, unit: 'ر.س/وحدة', lastUpdated: '2026-03-14', quarterlyChange: -2.0 },
  { city: 'الخرج', citySlug: 'al-kharj', cityEn: 'Al Kharj', service: 'صيانة سباكة', serviceSlug: 'bathroom-leak-detection', serviceEn: 'Plumbing', minPrice: 84, maxPrice: 406, avgPrice: 207, medianPrice: 179, sampleCount: 23, unit: 'ر.س', lastUpdated: '2026-03-14', quarterlyChange: -2.5 },
  { city: 'الخرج', citySlug: 'al-kharj', cityEn: 'Al Kharj', service: 'تنظيف كنب', serviceSlug: 'sofa-cleaning', serviceEn: 'Sofa Cleaning', minPrice: 122, maxPrice: 387, avgPrice: 249, medianPrice: 232, sampleCount: 16, unit: 'ر.س', lastUpdated: '2026-03-14', quarterlyChange: -1.3 },

  // ======================
  //  🏙️ حائل — 10 خدمات
  // ======================
  { city: 'حائل', citySlug: 'hail', cityEn: 'Hail', service: 'كشف تسربات المياه', serviceSlug: 'water-leak-detection', serviceEn: 'Water Leak Detection', minPrice: 130, maxPrice: 434, avgPrice: 246, medianPrice: 219, sampleCount: 22, unit: 'ر.س', lastUpdated: '2026-03-14', quarterlyChange: -3.6 },
  { city: 'حائل', citySlug: 'hail', cityEn: 'Hail', service: 'مكافحة حشرات', serviceSlug: 'pest-control', serviceEn: 'Pest Control', minPrice: 88, maxPrice: 357, avgPrice: 188, medianPrice: 175, sampleCount: 17, unit: 'ر.س', lastUpdated: '2026-03-14', quarterlyChange: -2.8 },
  { city: 'حائل', citySlug: 'hail', cityEn: 'Hail', service: 'نقل عفش', serviceSlug: 'furniture-moving', serviceEn: 'Furniture Moving', minPrice: 432, maxPrice: 2609, avgPrice: 1148, medianPrice: 1048, sampleCount: 22, unit: 'ر.س', lastUpdated: '2026-03-14', quarterlyChange: -2.9 },
  { city: 'حائل', citySlug: 'hail', cityEn: 'Hail', service: 'تنظيف منازل', serviceSlug: 'cleaning', serviceEn: 'House Cleaning', minPrice: 171, maxPrice: 686, avgPrice: 366, medianPrice: 339, sampleCount: 16, unit: 'ر.س', lastUpdated: '2026-03-14', quarterlyChange: -2.6 },
  { city: 'حائل', citySlug: 'hail', cityEn: 'Hail', service: 'عزل أسطح', serviceSlug: 'roof-insulation', serviceEn: 'Roof Insulation', minPrice: 21, maxPrice: 58, avgPrice: 38, medianPrice: 34, sampleCount: 20, unit: 'ر.س/م²', lastUpdated: '2026-03-14', quarterlyChange: -2.0 },
  { city: 'حائل', citySlug: 'hail', cityEn: 'Hail', service: 'تنظيف خزانات', serviceSlug: 'tanks-cleaning', serviceEn: 'Water Tank Cleaning', minPrice: 130, maxPrice: 442, avgPrice: 260, medianPrice: 238, sampleCount: 24, unit: 'ر.س', lastUpdated: '2026-03-14', quarterlyChange: -2.5 },
  { city: 'حائل', citySlug: 'hail', cityEn: 'Hail', service: 'تسليك مجاري', serviceSlug: 'sewage-unblocking', serviceEn: 'Drain Cleaning', minPrice: 86, maxPrice: 310, avgPrice: 169, medianPrice: 161, sampleCount: 19, unit: 'ر.س', lastUpdated: '2026-03-14', quarterlyChange: -2.6 },
  { city: 'حائل', citySlug: 'hail', cityEn: 'Hail', service: 'تنظيف مكيفات', serviceSlug: 'air-conditioner-cleaning', serviceEn: 'AC Cleaning', minPrice: 68, maxPrice: 176, avgPrice: 116, medianPrice: 102, sampleCount: 24, unit: 'ر.س/وحدة', lastUpdated: '2026-03-14', quarterlyChange: -2.6 },
  { city: 'حائل', citySlug: 'hail', cityEn: 'Hail', service: 'صيانة سباكة', serviceSlug: 'bathroom-leak-detection', serviceEn: 'Plumbing', minPrice: 85, maxPrice: 447, avgPrice: 219, medianPrice: 190, sampleCount: 21, unit: 'ر.س', lastUpdated: '2026-03-14', quarterlyChange: -3.5 },
  { city: 'حائل', citySlug: 'hail', cityEn: 'Hail', service: 'تنظيف كنب', serviceSlug: 'sofa-cleaning', serviceEn: 'Sofa Cleaning', minPrice: 131, maxPrice: 414, avgPrice: 268, medianPrice: 244, sampleCount: 16, unit: 'ر.س', lastUpdated: '2026-03-14', quarterlyChange: -0.1 },

  // ======================
  //  🏙️ ينبع — 10 خدمات
  // ======================
  { city: 'ينبع', citySlug: 'yanbu', cityEn: 'Yanbu', service: 'كشف تسربات المياه', serviceSlug: 'water-leak-detection', serviceEn: 'Water Leak Detection', minPrice: 134, maxPrice: 431, avgPrice: 244, medianPrice: 220, sampleCount: 17, unit: 'ر.س', lastUpdated: '2026-03-14', quarterlyChange: -2.0 },
  { city: 'ينبع', citySlug: 'yanbu', cityEn: 'Yanbu', service: 'مكافحة حشرات', serviceSlug: 'pest-control', serviceEn: 'Pest Control', minPrice: 89, maxPrice: 359, avgPrice: 199, medianPrice: 179, sampleCount: 16, unit: 'ر.س', lastUpdated: '2026-03-14', quarterlyChange: -1.7 },
  { city: 'ينبع', citySlug: 'yanbu', cityEn: 'Yanbu', service: 'نقل عفش', serviceSlug: 'furniture-moving', serviceEn: 'Furniture Moving', minPrice: 441, maxPrice: 2571, avgPrice: 1187, medianPrice: 1054, sampleCount: 19, unit: 'ر.س', lastUpdated: '2026-03-14', quarterlyChange: -2.5 },
  { city: 'ينبع', citySlug: 'yanbu', cityEn: 'Yanbu', service: 'تنظيف منازل', serviceSlug: 'cleaning', serviceEn: 'House Cleaning', minPrice: 171, maxPrice: 722, avgPrice: 367, medianPrice: 332, sampleCount: 21, unit: 'ر.س', lastUpdated: '2026-03-14', quarterlyChange: -2.5 },
  { city: 'ينبع', citySlug: 'yanbu', cityEn: 'Yanbu', service: 'عزل أسطح', serviceSlug: 'roof-insulation', serviceEn: 'Roof Insulation', minPrice: 22, maxPrice: 56, avgPrice: 36, medianPrice: 35, sampleCount: 19, unit: 'ر.س/م²', lastUpdated: '2026-03-14', quarterlyChange: -2.4 },
  { city: 'ينبع', citySlug: 'yanbu', cityEn: 'Yanbu', service: 'تنظيف خزانات', serviceSlug: 'tanks-cleaning', serviceEn: 'Water Tank Cleaning', minPrice: 128, maxPrice: 452, avgPrice: 271, medianPrice: 251, sampleCount: 22, unit: 'ر.س', lastUpdated: '2026-03-14', quarterlyChange: -1.4 },
  { city: 'ينبع', citySlug: 'yanbu', cityEn: 'Yanbu', service: 'تسليك مجاري', serviceSlug: 'sewage-unblocking', serviceEn: 'Drain Cleaning', minPrice: 88, maxPrice: 314, avgPrice: 177, medianPrice: 161, sampleCount: 15, unit: 'ر.س', lastUpdated: '2026-03-14', quarterlyChange: -1.1 },
  { city: 'ينبع', citySlug: 'yanbu', cityEn: 'Yanbu', service: 'تنظيف مكيفات', serviceSlug: 'air-conditioner-cleaning', serviceEn: 'AC Cleaning', minPrice: 69, maxPrice: 175, avgPrice: 114, medianPrice: 107, sampleCount: 22, unit: 'ر.س/وحدة', lastUpdated: '2026-03-14', quarterlyChange: -1.9 },
  { city: 'ينبع', citySlug: 'yanbu', cityEn: 'Yanbu', service: 'صيانة سباكة', serviceSlug: 'bathroom-leak-detection', serviceEn: 'Plumbing', minPrice: 90, maxPrice: 430, avgPrice: 223, medianPrice: 193, sampleCount: 16, unit: 'ر.س', lastUpdated: '2026-03-14', quarterlyChange: -2.1 },
  { city: 'ينبع', citySlug: 'yanbu', cityEn: 'Yanbu', service: 'تنظيف كنب', serviceSlug: 'sofa-cleaning', serviceEn: 'Sofa Cleaning', minPrice: 135, maxPrice: 418, avgPrice: 279, medianPrice: 242, sampleCount: 11, unit: 'ر.س', lastUpdated: '2026-03-14', quarterlyChange: 1.7 },

];

/** إحصائيات ملخصة */
export function getPricingStats(data: PricingEntry[]) {
  const uniqueCities = [...new Set(data.map(d => d.city))];
  const uniqueServices = [...new Set(data.map(d => d.service))];
  const totalSamples = data.reduce((sum, d) => sum + d.sampleCount, 0);
  // MAX, not row 0 — taking the first row under-reported the index's own
  // recency by 5 days and disagreed with llms.txt, which computes it correctly.
  // ISO dates sort lexicographically, so a plain sort is safe here.
  const lastUpdated = data
    .map(d => d.lastUpdated)
    .filter(Boolean)
    .sort()
    .pop() || new Date().toISOString().split('T')[0];

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

/**
 * A citable, digit-bearing answer to "how much do services cost in {city}?".
 *
 * The city and sub-region FAQ answers used to say only "prices vary by service
 * and scope" — and those answers ship inside FAQPage JSON-LD, i.e. they are
 * exactly what an answer engine lifts for a cost question. An answer with no
 * number cannot win that query.
 *
 * Returns null when the dataset has no rows for the city (it covers 24 of 30),
 * so callers can fall back rather than emit an invented figure.
 */
export function getCityPriceAnswer(
  citySlug: string,
  cityLabel: string,
  maxServices = 4,
): string | null {
  const rows = pricingData.filter(r => r.citySlug === citySlug);
  if (rows.length === 0) return null;

  const surveyDate = rows.map(r => r.lastUpdated).filter(Boolean).sort().pop();
  const top = [...rows]
    .sort((a, b) => b.sampleCount - a.sampleCount)
    .slice(0, maxServices);

  const parts = top.map(
    r => `${r.service} من ${r.minPrice.toLocaleString('en-US')} إلى ${r.maxPrice.toLocaleString('en-US')} ${r.unit} (الوسيط ${r.medianPrice.toLocaleString('en-US')})`,
  );

  return `بحسب مسح بروكر لعروض أسعار حقيقية في ${cityLabel} (تاريخ المسح ${surveyDate}): ${parts.join('، ')}. `
    + `هذه نطاقات استرشادية للمقارنة وليست عروضاً ملزمة، وتتأثر بحجم العمل والمسافة ووقت التنفيذ. `
    + `البيانات الكاملة ومنهجية الحساب في مؤشر أسعار بروكر.`;
}
