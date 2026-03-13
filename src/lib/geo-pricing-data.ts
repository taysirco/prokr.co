// =============================================================
// 📊 GEO-PRICING — التسعير الجغرافي المتقاطع
// =============================================================
// يولّد جداول تسعير فريدة لكل مدينة × كل فئة خدمة
// باستخدام: أحياء حقيقية + معامل أسعار + خصائص مناخية
// كل مدينة تتميز بـ: أحياء مختلفة + ملاحظات فريدة + offset سعري
// =============================================================

import { getCityContext } from './city-context';

// ============ INTERFACES ============

export interface MovingRoute {
    from: string;
    to: string;
    priceRange: string;
    note: string;
}
export interface CleaningZone {
    zone: string;
    twoRoom: string;
    threeRoom: string;
    smallVilla: string;
    largeVilla: string;
}
export interface PestPricing {
    pest: string;
    smallArea: string;
    mediumArea: string;
    largeArea: string;
    note: string;
}
export interface LeakPricing {
    type: string;
    newBuilding: string;
    midBuilding: string;
    oldBuilding: string;
    note: string;
}
export interface InsulationPricing {
    type: string;
    pricePerSqm: string;
    minimum: string;
    note: string;
}
export interface SewagePricing {
    service: string;
    smallTank: string;
    mediumTank: string;
    largeTank: string;
    note: string;
}
export interface ACPricing {
    service: string;
    splitUnit: string;
    centralUnit: string;
    ducted: string;
    note: string;
}
export interface GeoPricingData {
    moving: MovingRoute[];
    cleaning: CleaningZone[];
    'pest-control': PestPricing[];
    'leak-detection': LeakPricing[];
    insulation: InsulationPricing[];
    sewage: SewagePricing[];
    ac: ACPricing[];
}

// ============ PRICE HELPER ============
function pr(base: number, mod: number, offset: number = 0): number {
    return Math.round((base * mod + offset) / 10) * 10;
}
function range(lo: number, hi: number, mod: number, offset: number = 0): string {
    return `${pr(lo, mod, offset)}-${pr(hi, mod, offset)}`;
}

// ============ CITY-SPECIFIC CONTEXT ============
// Each city gets UNIQUE notes + offset to eliminate duplication

interface CityProfile {
    // Price offset (±) to differentiate cities with same priceModifier
    offset: number;
    // Moving
    movingIntra: string;      // note for same-neighborhood route
    movingCross: string;      // note for cross-city route
    movingInter: string;      // note for intercity route
    nearCity: string;
    nearCityKm: string;
    // Cleaning
    cleanHigh: string;        // description for upscale zone
    cleanMid: string;         // description for mid zone
    cleanLow: string;         // description for economy zone
    // Pest
    pestNote: string;
    pestExtra: string;        // extra pest type unique to this city
    // Leak
    oldArea: string;
    // Insulation
    insulNote: string;
    // Sewage
    sewageNote: string;
    sewageExtra: string;
    // AC
    acNote: string;
}

const PROFILES: Record<string, CityProfile> = {
    riyadh: {
        offset: 0,
        movingIntra: 'نفس الحي — أسعار أقل بـ 30%',
        movingCross: '+25% ازدحام طريق الملك فهد بعد الظهر',
        movingInter: 'يشمل تغليف + تأمين على الطريق السريع',
        nearCity: 'الخرج', nearCityKm: '80 كم',
        cleanHigh: 'شمال الرياض — فلل ومجمعات حديثة',
        cleanMid: 'وسط الرياض — شقق سكنية',
        cleanLow: 'جنوب الرياض — أحياء اقتصادية',
        pestNote: '+30% الأحياء القديمة (العريجاء، المنفوحة)',
        pestExtra: 'عقارب — أطراف المدينة الصحراوية',
        oldArea: 'المنصورة، العود',
        insulNote: 'الأحياء الشمالية أعلى بـ 10% (طلب مرتفع)',
        sewageNote: '+30% أحياء بعيدة عن محطة المعالجة (الشفا)',
        sewageExtra: 'شمال الرياض أقل — محطة معالجة حديثة',
        acNote: 'الغبار يستلزم تنظيف مكيفات كل 3 أشهر',
    },
    jeddah: {
        offset: 0,
        movingIntra: 'نفس الحي — بدون رسوم مسافة',
        movingCross: '+20% ازدحام شارع الأمير ماجد',
        movingInter: '+25% في موسم الحج والعمرة',
        nearCity: 'مكة المكرمة', nearCityKm: '80 كم',
        cleanHigh: 'أبحر والشاطئ — فلل بحرية فاخرة',
        cleanMid: 'الحمراء والروضة — سكن عائلي',
        cleanLow: 'الجامعة والشرفية — سكن اقتصادي',
        pestNote: '+25% البلد القديمة (رطوبة عالية)',
        pestExtra: 'بعوض — بسبب رطوبة جدة العالية',
        oldArea: 'البلد القديمة',
        insulNote: 'الرطوبة تستلزم طبقتين عزل مائي',
        sewageNote: '+20% جنوب جدة (بعد عن المحطة)',
        sewageExtra: 'أنابيب قديمة في البلد — تسليك أصعب',
        acNote: 'الرطوبة تسبب عفن — تنظيف كل شهرين',
    },
    dammam: {
        offset: 0,
        movingIntra: 'نفس الحي — أسعار منافسة',
        movingCross: 'متصلة بالخبر — يعتبر نفس المنطقة',
        movingInter: 'الأحساء 140 كم — يشمل تغليف',
        nearCity: 'الخبر', nearCityKm: '15 كم',
        cleanHigh: 'الشاطئ الشرقي — شقق ومجمعات حديثة',
        cleanMid: 'الفيصلية والراكة — سكن متوسط',
        cleanLow: 'العنود والمحمدية — سكن اقتصادي',
        pestNote: 'الرطوبة البحرية تزيد خطر النمل الأبيض',
        pestExtra: 'بعوض بحري — رش خارجي ضروري',
        oldArea: 'المحمدية، العنود',
        insulNote: 'ضروري — رطوبة بحرية + حرارة',
        sewageNote: 'شبكة حديثة — أسعار أقل من المتوسط',
        sewageExtra: '',
        acNote: 'الرطوبة البحرية تسبب تآكل — صيانة دورية',
    },
    makkah: {
        offset: 0,
        movingIntra: 'شوارع ضيقة — شاحنات صغيرة فقط',
        movingCross: '+40% في مواسم الحج والعمرة',
        movingInter: 'طريق جدة-مكة السريع — 80 كم',
        nearCity: 'جدة', nearCityKm: '80 كم',
        cleanHigh: 'العزيزية — قرب الحرم، شقق فندقية',
        cleanMid: 'الشوقية والنسيم — سكن عائلي',
        cleanLow: 'جرول والرصيفة — سكن قديم',
        pestNote: '+35% قرب الحرم (كثافة سكانية عالية)',
        pestExtra: 'صراصير المطاعم — بسبب المواسم الدينية',
        oldArea: 'جرول، الشوقية',
        insulNote: 'العزل الحراري أولوية — صيف حار جداً',
        sewageNote: '+25% الأحياء الجبلية (صعوبة وصول)',
        sewageExtra: 'مواسم الحج — ضغط مضاعف على الشبكة',
        acNote: 'الحرارة الشديدة — صيانة مكيفات أساسية',
    },
    madinah: {
        offset: 0,
        movingIntra: 'أحياء متقاربة — أسعار مناسبة',
        movingCross: '+30% في المواسم الدينية',
        movingInter: 'يشمل تغليف خاص للطريق الصحراوي',
        nearCity: 'ينبع', nearCityKm: '240 كم',
        cleanHigh: 'العزيزية — قرب الحرم النبوي',
        cleanMid: 'قباء والجمعة — سكن عائلي',
        cleanLow: 'العنابس والسيح — سكن اقتصادي',
        pestNote: 'النمل منتشر في الأحياء القريبة من المزارع',
        pestExtra: 'ذباب — بسبب واحات النخيل المحيطة',
        oldArea: 'العنابس، السيح',
        insulNote: 'الحرارة الجافة تتطلب عزل حراري قوي',
        sewageNote: '',
        sewageExtra: '',
        acNote: 'جفاف شديد — غبار يتطلب تنظيف دوري',
    },
    'al-khobar': {
        offset: 5,
        movingIntra: 'أحياء صغيرة — أسعار أقل',
        movingCross: 'كوبري الملك فهد مزدحم نهاية الأسبوع',
        movingInter: 'متصلة بالدمام والظهران',
        nearCity: 'الدمام', nearCityKm: '15 كم',
        cleanHigh: 'الكورنيش — شقق بإطلالة بحرية',
        cleanMid: 'الراكة والعقربية — سكن متوسط',
        cleanLow: 'الثقبة — سكن اقتصادي',
        pestNote: 'رطوبة بحرية تزيد إصابة النمل الأبيض',
        pestExtra: '',
        oldArea: 'الثقبة',
        insulNote: '+10% المناطق الساحلية (ملح بحري)',
        sewageNote: 'شبكة حديثة — أسعار مقاربة للدمام',
        sewageExtra: '',
        acNote: 'ملوحة + رطوبة — تآكل مكيفات أسرع',
    },
    taif: {
        offset: 0,
        movingIntra: 'الشوارع الجبلية تحتاج حذر',
        movingCross: 'طرق جبلية — عقبات تحتاج احتياطات',
        movingInter: 'عقبة كرا — سائق محترف مطلوب',
        nearCity: 'مكة المكرمة', nearCityKm: '90 كم',
        cleanHigh: 'الهدا والشفا — فلل سياحية',
        cleanMid: 'القيم والعزيزية — سكن عائلي',
        cleanLow: 'شهار — الحي القديم',
        pestNote: 'الحدائق الزراعية تجلب حشرات',
        pestExtra: 'دبور — بسبب الحدائق والمزارع الجبلية',
        oldArea: 'شهار القديمة',
        insulNote: 'العزل الحراري ضروري للبرودة الشتوية',
        sewageNote: 'أحياء جبلية — وصول الصهريج أصعب',
        sewageExtra: '',
        acNote: 'مناخ معتدل — أقل حاجة لصيانة مكيفات',
    },
    tabuk: {
        offset: 70,
        movingIntra: 'مدينة صغيرة — مسافات قصيرة',
        movingCross: '',
        movingInter: 'طريق صحراوي طويل — تغليف إضافي',
        nearCity: 'حائل', nearCityKm: '600 كم',
        cleanHigh: 'حي المروج — مجمعات حديثة',
        cleanMid: 'حي الفيصلية — سكن متوسط',
        cleanLow: 'حي السلام — سكن اقتصادي',
        pestNote: 'العقارب في المناطق الصحراوية المحيطة',
        pestExtra: '',
        oldArea: 'وسط المدينة القديم',
        insulNote: 'العزل أساسي للشتاء البارد + ثلوج',
        sewageNote: '',
        sewageExtra: '',
        acNote: 'ثلوج أحياناً — حماية أنابيب من التجمد',
    },
    abha: {
        offset: 0,
        movingIntra: 'شوارع جبلية — حذر مطلوب',
        movingCross: '',
        movingInter: 'طريق عقبة ضلع — سائق محترف',
        nearCity: 'خميس مشيط', nearCityKm: '30 كم',
        cleanHigh: 'حي الخالدية — فلل حديثة',
        cleanMid: 'حي القوسية — سكن متوسط',
        cleanLow: 'المناطق التراثية — بيوت قديمة',
        pestNote: 'البعوض ينتشر في موسم الأمطار',
        pestExtra: 'ذباب — بسبب الرطوبة الجبلية',
        oldArea: 'المناطق التراثية',
        insulNote: 'عزل مائي أساسي — أمطار غزيرة',
        sewageNote: 'أحياء مرتفعة — الوصول أصعب',
        sewageExtra: '',
        acNote: 'رطوبة أمطار — تنظيف عفن ضروري',
    },
    'al-kharj': {
        offset: 50,
        movingIntra: 'مدينة مدمجة — مسافات قصيرة',
        movingCross: '',
        movingInter: 'طريق الرياض السريع — 80 كم',
        nearCity: 'الرياض', nearCityKm: '80 كم',
        cleanHigh: 'حي الخالدية — فلل جديدة',
        cleanMid: 'حي اليرموك — سكن عائلي',
        cleanLow: 'حي السلام — سكن اقتصادي',
        pestNote: 'حشرات مزارع (ذباب، بعوض)',
        pestExtra: '',
        oldArea: '',
        insulNote: 'مناخ صحراوي قاسي — عزل حراري ضروري',
        sewageNote: 'شبكة قديمة — تسليك متكرر',
        sewageExtra: '',
        acNote: 'غبار مزارع — تنظيف مكيفات كل شهرين',
    },
    hail: {
        offset: 25,
        movingIntra: 'مدينة صغيرة — مسافات معقولة',
        movingCross: '',
        movingInter: 'طريق صحراوي — تغليف مكثف',
        nearCity: 'بريدة', nearCityKm: '300 كم',
        cleanHigh: 'حي المنتزه — فلل جديدة',
        cleanMid: 'حي الورود — سكن متوسط',
        cleanLow: 'حي المحطة — الحي القديم',
        pestNote: 'العقارب في الأطراف الصحراوية',
        pestExtra: '',
        oldArea: 'حي المحطة',
        insulNote: 'العزل الحراري ضروري — برد شديد شتاءً',
        sewageNote: '',
        sewageExtra: '',
        acNote: 'شتاء بارد — صيانة قبل الصيف مهمة',
    },
    buraidah: {
        offset: 15,
        movingIntra: 'أحياء متقاربة — مسافات قصيرة',
        movingCross: '',
        movingInter: 'عنيزة 30 كم — نقل سهل',
        nearCity: 'عنيزة', nearCityKm: '30 كم',
        cleanHigh: 'حي الخليج — مجمعات حديثة',
        cleanMid: 'حي الفايزية — سكن عائلي',
        cleanLow: 'حي الإسكان — سكن اقتصادي',
        pestNote: 'النمل الأبيض قرب مزارع النخيل',
        pestExtra: '',
        oldArea: 'وسط بريدة القديم',
        insulNote: 'برد شتاء شديد — عزل حراري أولوية',
        sewageNote: '',
        sewageExtra: '',
        acNote: 'غبار كثيف — صيانة فلاتر دورية',
    },
    jubail: {
        offset: 70,
        movingIntra: 'المدينة الصناعية منظمة — نقل سهل',
        movingCross: '',
        movingInter: 'الدمام 80 كم — طريق سريع',
        nearCity: 'الدمام', nearCityKm: '80 كم',
        cleanHigh: 'حي الفناتير — فلل مهندسين',
        cleanMid: 'الجبيل البلد — سكن متنوع',
        cleanLow: 'المنطقة الصناعية — مساكن عمال',
        pestNote: 'حشرات المستودعات الصناعية',
        pestExtra: '',
        oldArea: '',
        insulNote: 'تآكل صناعي — مواد عزل مقاومة مطلوبة',
        sewageNote: 'البنية التحتية الصناعية حديثة',
        sewageExtra: '',
        acNote: 'بيئة صناعية — تنظيف من الأتربة الصناعية',
    },
    jazan: {
        offset: 45,
        movingIntra: 'مدينة ساحلية مدمجة',
        movingCross: '',
        movingInter: 'أبها جبلية — طريق وعر',
        nearCity: 'أبها', nearCityKm: '300 كم',
        cleanHigh: 'حي الشاطئ — إطلالة بحرية',
        cleanMid: 'حي الروضة — سكن متوسط',
        cleanLow: 'حي الصفا — سكن اقتصادي',
        pestNote: 'بعوض + حشرات استوائية — رش شهري',
        pestExtra: 'نمل ناري — بسبب المناخ الاستوائي',
        oldArea: '',
        insulNote: 'عزل مائي أولوية — أمطار استوائية',
        sewageNote: 'رطوبة عالية تسرّع تآكل الأنابيب',
        sewageExtra: '',
        acNote: 'رطوبة عالية جداً — صيانة شهرية ضرورية',
    },
    yanbu: {
        offset: 65,
        movingIntra: 'منطقة صناعية منظمة — نقل مريح',
        movingCross: '',
        movingInter: 'المدينة المنورة 240 كم',
        nearCity: 'المدينة المنورة', nearCityKm: '240 كم',
        cleanHigh: 'ينبع الصناعية — مساكن مهندسين',
        cleanMid: 'ينبع البحر — سكن ساحلي',
        cleanLow: 'الحي المتوسط — سكن عادي',
        pestNote: 'حشرات المستودعات الصناعية',
        pestExtra: '',
        oldArea: '',
        insulNote: 'مقاومة الملوحة البحرية مطلوبة في العزل',
        sewageNote: '',
        sewageExtra: '',
        acNote: 'بيئة ساحلية — تآكل وتنظيف متكرر',
    },
    'khamis-mushait': {
        offset: 80,
        movingIntra: 'مدينة عسكرية منظمة — نقل سلس',
        movingCross: '',
        movingInter: 'أبها 30 كم — يعتبر نفس المنطقة',
        nearCity: 'أبها', nearCityKm: '30 كم',
        cleanHigh: 'حي الضيافة — فلل ضباط',
        cleanMid: 'حي الموظفين — سكن حكومي',
        cleanLow: 'حي الجرف — سكن اقتصادي',
        pestNote: 'بعوض جبلي في الأمطار الموسمية',
        pestExtra: '',
        oldArea: 'وسط المدينة',
        insulNote: 'عزل مائي ضروري — أمطار غزيرة',
        sewageNote: '',
        sewageExtra: '',
        acNote: 'مناخ جبلي معتدل — صيانة أقل تكراراً',
    },
    najran: {
        offset: 15,
        movingIntra: 'مدينة صغيرة — أسعار منخفضة',
        movingCross: '',
        movingInter: 'أبها 280 كم — طريق جبلي',
        nearCity: 'أبها', nearCityKm: '280 كم',
        cleanHigh: 'حي الفيصلية — الأحدث',
        cleanMid: 'حي الفهد — سكن متوسط',
        cleanLow: 'أبا السعود — سكن تقليدي',
        pestNote: 'عقارب صحراوية في الأطراف',
        pestExtra: 'زواحف صحراوية — مناطق حدودية',
        oldArea: 'الأحياء الشرقية القديمة',
        insulNote: 'حرارة صيف شديدة — عزل حراري مهم',
        sewageNote: 'أحياء طرفية — مسافة نقل أطول',
        sewageExtra: '',
        acNote: 'حرارة صيف شديدة — صيانة قبل مايو',
    },
    qatif: {
        offset: 60,
        movingIntra: 'قرى متصلة — مسافات قصيرة',
        movingCross: '',
        movingInter: 'الدمام 20 كم — نقل سريع',
        nearCity: 'الدمام', nearCityKm: '20 كم',
        cleanHigh: 'سيهات — مجمعات حديثة',
        cleanMid: 'تاروت — سكن عائلي',
        cleanLow: 'العوامية — سكن قديم',
        pestNote: 'بعوض ساحلي + حشرات مزارع',
        pestExtra: '',
        oldArea: 'القطيف القديمة',
        insulNote: 'الرطوبة الساحلية تتطلب عزل مائي',
        sewageNote: 'شبكة خليط قديم/جديد — أسعار متفاوتة',
        sewageExtra: '',
        acNote: 'رطوبة بحرية — صيانة دورية كل 3 أشهر',
    },
    dhahran: {
        offset: 0,
        movingIntra: 'مجمعات أرامكو — تصاريح مطلوبة أحياناً',
        movingCross: 'تصاريح دخول محدود لبعض الأحياء',
        movingInter: 'الخبر والدمام بدقائق',
        nearCity: 'الدمام', nearCityKm: '10 كم',
        cleanHigh: 'حي أرامكو — مجمعات فاخرة',
        cleanMid: 'حي الجامعة — سكن أكاديمي',
        cleanLow: 'وسط الظهران — سكن متنوع',
        pestNote: 'مجمعات محروسة — معالجة دورية منتظمة',
        pestExtra: '',
        oldArea: '',
        insulNote: '',
        sewageNote: 'بنية أرامكو التحتية محدّثة',
        sewageExtra: '',
        acNote: 'مكيفات مركزية في المجمعات — صيانة مختلفة',
    },
    onizah: {
        offset: 0,
        movingIntra: 'مدينة تراثية صغيرة — مسافات قصيرة',
        movingCross: '',
        movingInter: 'بريدة 30 كم — يعتبر نفس المنطقة',
        nearCity: 'بريدة', nearCityKm: '30 كم',
        cleanHigh: 'حي الوادي — فلل حديثة',
        cleanMid: 'حي الفيصلية — سكن متوسط',
        cleanLow: 'وسط المدينة — بيوت تراثية',
        pestNote: 'حشرات مزارع النخيل',
        pestExtra: '',
        oldArea: 'وسط المدينة التراثي',
        insulNote: '',
        sewageNote: '',
        sewageExtra: '',
        acNote: 'غبار — فلاتر تحتاج تغيير متكرر',
    },
    'hafr-albatin': {
        offset: 5,
        movingIntra: 'مدينة صحراوية مدمجة',
        movingCross: '',
        movingInter: 'رفحاء 300 كم — طريق صحراوي',
        nearCity: 'رفحاء', nearCityKm: '300 كم',
        cleanHigh: 'حي الخالدية — فلل حديثة',
        cleanMid: 'حي الفيصلية — سكن عائلي',
        cleanLow: 'حي السوق — سكن قديم',
        pestNote: 'عقارب صحراوية — رش وقائي ضروري',
        pestExtra: 'ثعابين صحراوية — مناطق برية محيطة',
        oldArea: 'حي السوق القديم',
        insulNote: 'عواصف رملية — عزل محكم مطلوب',
        sewageNote: 'منطقة حدودية — عدد محدود من المزودين',
        sewageExtra: '',
        acNote: 'عواصف رملية — تنظيف مكثف بعد كل عاصفة',
    },
    'al-ahsa': {
        offset: 35,
        movingIntra: 'واحة كبيرة — مسافات بين القرى',
        movingCross: '',
        movingInter: 'الدمام 150 كم',
        nearCity: 'الدمام', nearCityKm: '150 كم',
        cleanHigh: 'الهفوف الجديدة — مجمعات حديثة',
        cleanMid: 'المبرز — سكن عائلي',
        cleanLow: 'الهفوف القديمة — بيوت تقليدية',
        pestNote: 'حشرات مزارع النخيل — رش موسمي',
        pestExtra: 'نمل أبيض منتشر في الواحات',
        oldArea: 'الهفوف القديمة',
        insulNote: 'رطوبة الواحات تحتاج عزل مائي',
        sewageNote: 'قرى متباعدة — تكلفة نقل أعلى',
        sewageExtra: '',
        acNote: 'واحات — رطوبة + غبار مزدوج',
    },
    'al-baha': {
        offset: 55,
        movingIntra: 'طرق جبلية ملتوية — حذر مطلوب',
        movingCross: 'طرق جبلية ملتوية',
        movingInter: 'الطائف 200 كم — عقبات جبلية',
        nearCity: 'الطائف', nearCityKm: '200 كم',
        cleanHigh: 'الحي الحكومي — فلل حديثة',
        cleanMid: 'وسط الباحة — سكن عائلي',
        cleanLow: 'القرى المحيطة — بيوت جبلية',
        pestNote: 'حشرات جبلية في الأمطار',
        pestExtra: 'عناكب جبلية — مناطق تراثية',
        oldArea: 'القرى التراثية القديمة',
        insulNote: 'عزل مائي — أمطار غزيرة جبلية',
        sewageNote: 'تضاريس جبلية — وصول صهريج أصعب',
        sewageExtra: '',
        acNote: 'مناخ جبلي بارد — صيانة أقل',
    },
    qassim: {
        offset: 25,
        movingIntra: 'منطقة زراعية واسعة',
        movingCross: '',
        movingInter: 'الرياض 350 كم',
        nearCity: 'بريدة', nearCityKm: '15 كم',
        cleanHigh: 'بريدة الجديدة — مجمعات',
        cleanMid: 'عنيزة — سكن عائلي',
        cleanLow: 'الرس — سكن اقتصادي',
        pestNote: 'نمل أبيض قرب مزارع النخيل',
        pestExtra: 'ذباب مزارع — رش خارجي دوري',
        oldArea: 'أسواق القصيم التراثية',
        insulNote: 'فارق حرارة كبير (صيف/شتاء) — عزل مزدوج',
        sewageNote: 'مزارع واسعة — بيارات بعيدة عن الشبكة',
        sewageExtra: '',
        acNote: 'حرارة صيف + برد شتاء — صيانة موسمية',
    },
};

// ============ FACTORY ============

function generateGeoPricing(citySlug: string): GeoPricingData {
    const ctx = getCityContext(citySlug);
    const mod = ctx?.priceModifier || 1.0;
    const n = ctx?.neighborhoods || [];
    const p = PROFILES[citySlug] || PROFILES.riyadh;
    const off = p.offset;

    const hoods = n.map(h => h.name_ar);
    const h = [hoods[0] || 'وسط المدينة', hoods[1] || 'حي سكني', hoods[2] || 'حي آخر', hoods[3] || '', hoods[4] || ''];
    const cityName = ctx?.name_ar || citySlug;

    return {
        moving: [
            { from: h[0], to: h[0], priceRange: `${range(350,500,mod,off)} ريال`, note: p.movingIntra },
            { from: h[0], to: h[1], priceRange: `${range(450,650,mod,off)} ريال`, note: h[3] ? `عبر حي ${h[3]}` : 'أحياء قريبة' },
            { from: h[1], to: h[2], priceRange: `${range(500,750,mod,off)} ريال`, note: p.movingCross || 'حسب المسافة والوقت' },
            { from: `شمال ${cityName}`, to: `جنوب ${cityName}`, priceRange: `${range(600,900,mod,off)} ريال`, note: p.movingCross || '+15% وقت الذروة' },
            { from: cityName, to: p.nearCity, priceRange: `${range(1200,2000,mod,off)} ريال`, note: `${p.nearCityKm} — ${p.movingInter}` },
        ],
        cleaning: [
            { zone: `${h[0]} — ${p.cleanHigh}`, twoRoom: range(280,420,mod,off), threeRoom: range(420,600,mod,off), smallVilla: range(680,1000,mod,off), largeVilla: range(1000,1500,mod,off) },
            { zone: `${h[1]} — ${p.cleanMid}`, twoRoom: range(220,350,mod,off), threeRoom: range(350,500,mod,off), smallVilla: range(550,850,mod,off), largeVilla: range(850,1300,mod,off) },
            { zone: `${h[2]} — ${p.cleanLow}`, twoRoom: range(180,300,mod,off), threeRoom: range(300,430,mod,off), smallVilla: range(450,720,mod,off), largeVilla: range(720,1100,mod,off) },
        ],
        'pest-control': [
            { pest: 'صراصير — رش عام', smallArea: range(80,160,mod,off), mediumArea: range(160,270,mod,off), largeArea: range(270,400,mod,off), note: p.pestNote },
            { pest: 'نمل أبيض — حقن تربة', smallArea: range(1200,2500,mod,off), mediumArea: range(2500,4000,mod,off), largeArea: range(4000,7000,mod,off), note: '⚠️ يتطلب ترخيص SFDA + ضمان 5 سنوات' },
            { pest: 'بق فراش', smallArea: range(170,350,mod,off), mediumArea: range(350,600,mod,off), largeArea: range(600,900,mod,off), note: '' },
            { pest: 'فئران', smallArea: range(130,260,mod,off), mediumArea: range(260,440,mod,off), largeArea: range(440,700,mod,off), note: '' },
            ...(p.pestExtra ? [{ pest: p.pestExtra, smallArea: range(100,200,mod,off), mediumArea: range(200,350,mod,off), largeArea: range(350,500,mod,off), note: '' }] : []),
        ],
        'leak-detection': [
            { type: 'كشف مبدئي — جهاز استماع', newBuilding: range(250,430,mod,off), midBuilding: range(250,430,mod,off), oldBuilding: range(350,530,mod,off), note: p.oldArea ? `+20% أحياء قديمة (${p.oldArea})` : '' },
            { type: 'كشف بالكاميرا الحرارية', newBuilding: range(430,700,mod,off), midBuilding: range(430,700,mod,off), oldBuilding: range(530,870,mod,off), note: 'تقرير معتمد لشركة المياه الوطنية' },
            { type: 'كشف + إصلاح شامل', newBuilding: range(700,1300,mod,off), midBuilding: range(870,1750,mod,off), oldBuilding: range(1050,2200,mod,off), note: '' },
        ],
        insulation: [
            { type: 'عزل مائي — رولات بيتومين', pricePerSqm: `${range(20,40,mod,off)} ريال/م²`, minimum: `${pr(400,mod,off)} ريال`, note: p.insulNote },
            { type: 'عزل فوم بولي يوريثين', pricePerSqm: `${range(30,55,mod,off)} ريال/م²`, minimum: `${pr(600,mod,off)} ريال`, note: '' },
            { type: 'عزل حراري + مائي مزدوج', pricePerSqm: `${range(45,80,mod,off)} ريال/م²`, minimum: `${pr(1000,mod,off)} ريال`, note: '⚠️ لا تقبل أقل من ضمان 10 سنوات' },
        ],
        sewage: [
            { service: 'شفط بيارة بالصهريج', smallTank: range(130,260,mod,off), mediumTank: range(260,430,mod,off), largeTank: range(430,700,mod,off), note: p.sewageNote },
            { service: 'تسليك مجاري — ضغط مياه', smallTank: range(80,180,mod,off), mediumTank: range(180,300,mod,off), largeTank: range(300,450,mod,off), note: p.sewageExtra },
            { service: 'صيانة بيارة + تنظيف', smallTank: range(200,380,mod,off), mediumTank: range(380,600,mod,off), largeTank: range(600,950,mod,off), note: '' },
        ],
        ac: [
            { service: 'تنظيف مكيف اسبليت', splitUnit: range(70,130,mod,off), centralUnit: range(180,350,mod,off), ducted: range(130,260,mod,off), note: p.acNote },
            { service: 'شحن فريون R410A', splitUnit: range(180,320,mod,off), centralUnit: range(360,620,mod,off), ducted: range(310,530,mod,off), note: '⚠️ لازم فحص تسريب أول' },
            { service: 'صيانة شاملة (تنظيف+فحص+شحن)', splitUnit: range(220,400,mod,off), centralUnit: range(450,800,mod,off), ducted: range(380,680,mod,off), note: 'أفضل قيمة — اطلب عقد سنوي' },
        ],
    };
}

// ============ CUSTOM OVERRIDES ============

const CUSTOM_MOVING: Record<string, MovingRoute[]> = {
    riyadh: [
        { from: 'الملقا', to: 'النرجس', priceRange: '500-700 ريال', note: 'أحياء متجاورة شمال الرياض' },
        { from: 'النسيم', to: 'الربوة', priceRange: '550-750 ريال', note: 'وسط المدينة — ازدحام متوسط' },
        { from: 'شمال الرياض', to: 'الشفا', priceRange: '700-950 ريال', note: '+25% ازدحام طريق الملك فهد بعد الظهر' },
        { from: 'الرياض', to: 'جدة', priceRange: '4,000-7,000 ريال', note: '950 كم — يشمل تغليف وتأمين شامل' },
    ],
    jeddah: [
        { from: 'الروضة', to: 'الصفا', priceRange: '450-650 ريال', note: 'أحياء متجاورة وسط جدة — حرارة ورطوبة' },
        { from: 'الشرفية', to: 'أبحر الشمالية', priceRange: '650-900 ريال', note: '+15% مسافة طويلة عبر الكورنيش' },
        { from: 'شمال جدة', to: 'جنوب جدة', priceRange: '750-1,000 ريال', note: '+20% ازدحام شارع الأمير ماجد' },
        { from: 'جدة', to: 'مكة المكرمة', priceRange: '1,500-2,500 ريال', note: '80 كم — يتأثر بموسم الحج والعمرة' },
    ],
    dammam: [
        { from: 'الفيصلية', to: 'الراكة', priceRange: '400-550 ريال', note: 'أحياء متقاربة' },
        { from: 'الدمام', to: 'الخبر', priceRange: '500-750 ريال', note: '15 كم — طريق الملك فهد' },
        { from: 'الدمام', to: 'الظهران', priceRange: '550-800 ريال', note: '20 كم — إثراء ومجمعات أرامكو' },
        { from: 'الدمام', to: 'الأحساء', priceRange: '1,000-1,600 ريال', note: '140 كم — نقل بين مدن' },
    ],
    makkah: [
        { from: 'العزيزية', to: 'الشوقية', priceRange: '550-750 ريال', note: 'شوارع ضيقة — شاحنات صغيرة فقط' },
        { from: 'العوالي', to: 'الرصيفة', priceRange: '500-750 ريال', note: 'أحياء جبلية — احتياطات إضافية' },
        { from: 'مكة', to: 'جدة', priceRange: '1,500-2,500 ريال', note: '80 كم — +40% في موسم الحج' },
    ],
    taif: [
        { from: 'القيم', to: 'العزيزية', priceRange: '380-520 ريال', note: 'مركز المدينة — مسافة قصيرة' },
        { from: 'الشفا', to: 'الهدا', priceRange: '600-900 ريال', note: 'طرق جبلية — عقبات تحتاج احتياطات' },
        { from: 'الطائف', to: 'مكة', priceRange: '1,200-2,000 ريال', note: 'عقبة كرا — سائق محترف مطلوب' },
    ],
    abha: [
        { from: 'حي الخالدية', to: 'حي القوسية', priceRange: '350-500 ريال', note: 'أحياء متقاربة وسط أبها' },
        { from: 'أبها', to: 'خميس مشيط', priceRange: '450-650 ريال', note: '30 كم — يعتبر نفس المنطقة' },
    ],
    madinah: [
        { from: 'العزيزية', to: 'قباء', priceRange: '400-600 ريال', note: 'قرب الحرم — ازدحام في المواسم' },
        { from: 'المدينة', to: 'ينبع', priceRange: '1,500-2,500 ريال', note: '240 كم — طريق صحراوي' },
    ],
};

// ============ PUBLIC API ============

function getServicePricingCategory(serviceSlug: string): keyof GeoPricingData {
    // furniture-cleaning must go to cleaning, not moving
    if (serviceSlug === 'furniture-cleaning') return 'cleaning';
    if (serviceSlug.includes('moving') || serviceSlug.includes('furniture-') || serviceSlug === 'dyna' || serviceSlug === 'dabab' || serviceSlug === 'moving-out') return 'moving';
    if (serviceSlug.includes('ac-') || serviceSlug.includes('air-conditioner')) return 'ac';
    if (serviceSlug.includes('pest') || serviceSlug.includes('termite') || serviceSlug.includes('cockroach') || serviceSlug.includes('bedbug') || serviceSlug.includes('insect') || serviceSlug.includes('spray') || serviceSlug.includes('rodent') || serviceSlug.includes('ants') || serviceSlug.includes('bird') || serviceSlug.includes('snake') || serviceSlug.includes('pigeon')) return 'pest-control';
    if (serviceSlug.includes('insulation') || serviceSlug.includes('foam') || serviceSlug.includes('thermal') || serviceSlug.includes('epoxy')) return 'insulation';
    if (serviceSlug.includes('leak') || serviceSlug.includes('detection')) return 'leak-detection';
    if (serviceSlug.includes('sewage') || serviceSlug.includes('sewer') || serviceSlug.includes('drain')) return 'sewage';
    return 'cleaning';
}

export function getGeoPricing(citySlug: string, serviceSlug: string) {
    const category = getServicePricingCategory(serviceSlug);
    const generated = generateGeoPricing(citySlug);

    // Replace moving with custom routes for major cities
    if (category === 'moving' && CUSTOM_MOVING[citySlug]) {
        generated.moving = CUSTOM_MOVING[citySlug];
    }

    return { category, data: generated[category] };
}
