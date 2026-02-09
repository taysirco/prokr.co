import Link from 'next/link';
import type { City, Service } from '@/types';
import { getCityContext, getAdjustedPriceRange, getServiceNuances, getClimateContent } from './city-context';
import { getRelatedServices } from './related-services';
import { getServiceBySlug, getCityBySlug } from './seed';
import { generateContentLayers } from './ai-content-layers';
import { getServiceKeywordProfile, getCityKeyword, resolveKeywordTemplate } from './keyword-strategy';
import { BLOG_ARTICLES } from './blog-data';

// ============================================
// AI-Ready SEO Content Generator
// ============================================

interface SeoContentProps {
    city: City;
    service: Service;
}

// ============================================
// DATA & CONSTANTS
// ============================================

const BASE_PRICING: Record<string, { type: string; unit: string; minPrice: number; maxPrice: number; time?: string }[]> = {
    'furniture-moving': [
        { type: 'شقة صغيرة (غرفة-غرفتين)', unit: 'رحلة واحدة', minPrice: 500, maxPrice: 800, time: '2-4 ساعات' },
        { type: 'شقة متوسطة (3-4 غرف)', unit: 'رحلة واحدة', minPrice: 800, maxPrice: 1200, time: '4-6 ساعات' },
        { type: 'شقة كبيرة (5+ غرف)', unit: 'رحلة واحدة', minPrice: 1200, maxPrice: 2000, time: '6-8 ساعات' },
        { type: 'فيلا صغيرة', unit: 'رحلة واحدة', minPrice: 2000, maxPrice: 3500, time: 'يوم كامل' },
        { type: 'فيلا كبيرة / قصر', unit: 'رحلة واحدة', minPrice: 3500, maxPrice: 7000, time: '1-2 يوم' },
    ],
    'furniture-storage': [
        { type: 'غرفة واحدة', unit: 'شهرياً', minPrice: 200, maxPrice: 400 },
        { type: 'شقة صغيرة', unit: 'شهرياً', minPrice: 400, maxPrice: 700 },
        { type: 'شقة متوسطة', unit: 'شهرياً', minPrice: 700, maxPrice: 1200 },
        { type: 'فيلا', unit: 'شهرياً', minPrice: 1200, maxPrice: 2500 },
    ],
    'dyna': [
        { type: 'دينا صغيرة (3 طن)', unit: 'رحلة داخل المدينة', minPrice: 200, maxPrice: 350 },
        { type: 'دينا متوسطة (5 طن)', unit: 'رحلة داخل المدينة', minPrice: 300, maxPrice: 500 },
        { type: 'دينا كبيرة (7 طن)', unit: 'رحلة داخل المدينة', minPrice: 450, maxPrice: 700 },
    ],
    'cleaning': [
        { type: 'شقة صغيرة', unit: 'تنظيف شامل', minPrice: 200, maxPrice: 350, time: '3-4 ساعات' },
        { type: 'شقة متوسطة', unit: 'تنظيف شامل', minPrice: 350, maxPrice: 500, time: '4-6 ساعات' },
        { type: 'فيلا صغيرة', unit: 'تنظيف شامل', minPrice: 500, maxPrice: 800, time: '6-8 ساعات' },
        { type: 'فيلا كبيرة', unit: 'تنظيف شامل', minPrice: 800, maxPrice: 1500, time: 'يوم كامل' },
        { type: 'تنظيف بالساعة', unit: 'ساعة واحدة', minPrice: 35, maxPrice: 50 },
    ],
    'tanks-cleaning': [
        { type: 'خزان صغير (1-3 طن)', unit: 'تنظيف + تعقيم', minPrice: 150, maxPrice: 250 },
        { type: 'خزان متوسط (4-8 طن)', unit: 'تنظيف + تعقيم', minPrice: 250, maxPrice: 400 },
        { type: 'خزان كبير (10+ طن)', unit: 'تنظيف + تعقيم', minPrice: 400, maxPrice: 700 },
    ],
    'sofa-cleaning': [
        { type: 'كنبة 3 مقاعد', unit: 'قطعة', minPrice: 80, maxPrice: 120 },
        { type: 'كنبة 4 مقاعد', unit: 'قطعة', minPrice: 100, maxPrice: 150 },
        { type: 'طقم كنب كامل', unit: 'طقم', minPrice: 300, maxPrice: 500 },
        { type: 'مجلس عربي', unit: 'للمتر الطولي', minPrice: 30, maxPrice: 50 },
    ],
    'carpet-cleaning': [
        { type: 'سجادة صغيرة (2×3 م)', unit: 'قطعة', minPrice: 50, maxPrice: 80 },
        { type: 'سجادة متوسطة (3×4 م)', unit: 'قطعة', minPrice: 80, maxPrice: 120 },
        { type: 'سجادة كبيرة (4×6 م)', unit: 'قطعة', minPrice: 120, maxPrice: 180 },
        { type: 'موكيت', unit: 'للمتر المربع', minPrice: 8, maxPrice: 15 },
    ],
    'air-conditioner-cleaning': [
        { type: 'مكيف سبليت', unit: 'وحدة', minPrice: 80, maxPrice: 120 },
        { type: 'مكيف شباك', unit: 'وحدة', minPrice: 60, maxPrice: 90 },
        { type: 'مكيف مركزي', unit: 'وحدة', minPrice: 150, maxPrice: 300 },
    ],
    'pest-control': [
        { type: 'شقة صغيرة', unit: 'رش شامل', minPrice: 150, maxPrice: 250 },
        { type: 'شقة متوسطة/كبيرة', unit: 'رش شامل', minPrice: 250, maxPrice: 400 },
        { type: 'فيلا', unit: 'رش شامل', minPrice: 400, maxPrice: 700 },
        { type: 'مكافحة النمل الأبيض', unit: 'للمتر المربع', minPrice: 15, maxPrice: 25 },
        { type: 'عقد سنوي', unit: '4 زيارات', minPrice: 800, maxPrice: 1500 },
    ],
    'termite-control': [
        { type: 'معالجة موضعية', unit: 'نقطة', minPrice: 300, maxPrice: 500 },
        { type: 'معالجة شاملة (شقة)', unit: 'وحدة', minPrice: 1000, maxPrice: 2000 },
        { type: 'معالجة شاملة (فيلا)', unit: 'وحدة', minPrice: 2000, maxPrice: 5000 },
        { type: 'حماية ما قبل البناء', unit: 'للمتر المربع', minPrice: 20, maxPrice: 40 },
    ],
    'water-leak-detection': [
        { type: 'فحص أولي', unit: 'زيارة', minPrice: 150, maxPrice: 300 },
        { type: 'كشف بالأجهزة', unit: 'نقطة تسريب', minPrice: 200, maxPrice: 400 },
        { type: 'إصلاح تسريب بسيط', unit: 'نقطة', minPrice: 300, maxPrice: 500 },
        { type: 'إصلاح تسريب معقد', unit: 'نقطة', minPrice: 500, maxPrice: 1500 },
        { type: 'فحص شامل للمبنى', unit: 'فحص كامل', minPrice: 500, maxPrice: 1000 },
    ],
    'tank-insulation': [
        { type: 'خزان صغير (1-3 طن)', unit: 'عزل كامل', minPrice: 500, maxPrice: 800 },
        { type: 'خزان متوسط (4-8 طن)', unit: 'عزل كامل', minPrice: 800, maxPrice: 1200 },
        { type: 'خزان كبير (10+ طن)', unit: 'عزل كامل', minPrice: 1200, maxPrice: 2000 },
        { type: 'عزل أرضي', unit: 'للخزان', minPrice: 1500, maxPrice: 3000 },
    ],
    'roof-insulation': [
        { type: 'عزل مائي', unit: 'للمتر المربع', minPrice: 25, maxPrice: 45 },
        { type: 'عزل حراري', unit: 'للمتر المربع', minPrice: 30, maxPrice: 50 },
        { type: 'عزل مائي + حراري', unit: 'للمتر المربع', minPrice: 50, maxPrice: 80 },
    ],
    'sewer-cleaning': [
        { type: 'تسليك بسيط', unit: 'نقطة', minPrice: 100, maxPrice: 200 },
        { type: 'تسليك بالسلك', unit: 'نقطة', minPrice: 150, maxPrice: 300 },
        { type: 'تسليك بالكمبروسر', unit: 'نقطة', minPrice: 250, maxPrice: 500 },
    ],
    'sewage-pumping': [
        { type: 'وايت صغير (10 طن)', unit: 'رحلة', minPrice: 150, maxPrice: 250 },
        { type: 'وايت كبير (20 طن)', unit: 'رحلة', minPrice: 250, maxPrice: 400 },
        { type: 'شفط طوارئ', unit: 'رحلة', minPrice: 300, maxPrice: 500 },
    ],
};

const DEFAULT_BASE_PRICING = [
    { type: 'خدمة أساسية', unit: 'زيارة', minPrice: 150, maxPrice: 300, time: '1-2 ساعة' },
    { type: 'خدمة متوسطة', unit: 'زيارة', minPrice: 300, maxPrice: 500, time: '2-4 ساعات' },
    { type: 'خدمة شاملة', unit: 'زيارة', minPrice: 500, maxPrice: 1000, time: '4-6 ساعات' },
];

const TRUST_FACTORS: Record<string, string[]> = {
    'moving': [
        'ترخيص نقل معتمد من وزارة النقل',
        'تأمين شامل على المنقولات',
        'عمالة مدربة ومحترفة',
        'سيارات نقل حديثة ومجهزة',
        'مواد تغليف عالية الجودة',
        'ضمان وصول الأثاث سليماً',
    ],
    'cleaning': [
        'استخدام مواد تنظيف آمنة ومعتمدة',
        'عمالة مدربة على أحدث التقنيات',
        'معدات تنظيف حديثة',
        'ضمان جودة الخدمة',
        'أسعار شفافة بدون رسوم مخفية',
        'مرونة في المواعيد',
    ],
    'pest-control': [
        'مبيدات آمنة ومعتمدة من هيئة الغذاء والدواء',
        'فنيين معتمدين ومرخصين',
        'ضمان على الخدمة لمدة محددة',
        'تقرير فني مفصل',
        'متابعة دورية مجانية',
        'سرية تامة للعميل',
    ],
    'leak-detection': [
        'أجهزة كشف حديثة ودقيقة',
        'خبرة في جميع أنواع المباني',
        'تقرير فني معتمد',
        'ضمان على الإصلاحات',
        'عمل بدون تكسير إن أمكن',
        'سرعة في التنفيذ',
    ],
    'insulation': [
        'مواد عزل معتمدة ومطابقة للمواصفات',
        'ضمان طويل الأمد (5-10 سنوات)',
        'فريق عمل متخصص',
        'شهادة إتمام العمل',
        'فحص ما بعد التطبيق',
        'أسعار تنافسية',
    ],
    'sewage': [
        'سيارات شفط حديثة',
        'خدمة 24 ساعة',
        'أسعار ثابتة ومعلنة',
        'سرعة في الاستجابة',
        'تنظيف شامل للموقع',
    ],
};

const DEFAULT_TRUST_FACTORS = [
    'شركة مرخصة ومعتمدة',
    'خبرة طويلة في المجال',
    'أسعار تنافسية وشفافة',
    'ضمان جودة الخدمة',
    'فريق عمل محترف',
    'خدمة عملاء متميزة',
];

// ============================================
// MAIN SEO CONTENT GENERATOR
// ============================================

export function generateSeoContent({ city, service }: SeoContentProps) {
    const cityContext = getCityContext(city.slug);
    const basePricing = BASE_PRICING[service.slug] || DEFAULT_BASE_PRICING;
    const trustFactors = TRUST_FACTORS[service.category] || DEFAULT_TRUST_FACTORS;
    const serviceNuances = getServiceNuances(city.slug, service.category);
    const relatedServices = getRelatedServices(service.slug, 3);
    const climateContent = cityContext ? getClimateContent(cityContext.climate) : null;

    // AI Content Layers
    const aiContent = generateContentLayers(city, service);

    // Keyword strategy for بـ prefix (used throughout)
    const kwProfile = getServiceKeywordProfile(service.slug);
    const cityKw = getCityKeyword(city.name_ar, kwProfile.cityPrefixPattern);

    // E-E-A-T Signals — Category-specific expert tips
    const categoryTips: Record<string, string[]> = {
        'moving': [
            `قارن بين 3 عروض نقل على الأقل ${cityKw} وتأكد أن العرض يشمل الفك والتركيب والتغليف.`,
            'صوّر أثاثك قبل النقل كإثبات لحالته — خاصة القطع الثمينة والإلكترونيات.',
            'اسأل عن نوع التغليف (بابل راب، كرتون، ستريتش) ولا تقبل التغليف بالبطانيات فقط.',
            'تأكد من وجود تأمين شامل على الأثاث ضد الكسر والخدش مكتوب في العقد.',
            `اطلب فاتورة ضريبية مختومة وعقد يوضح تاريخ وساعة النقل ${cityKw}.`,
        ],
        'cleaning': [
            `قارن بين 3 شركات تنظيف ${cityKw} واسأل عن نوع أجهزة التنظيف المستخدمة.`,
            'تأكد أن مواد التنظيف معتمدة وآمنة — خاصة إذا كان لديك أطفال أو حيوانات أليفة.',
            'حدد نوع الأسطح في منزلك (رخام، سيراميك، باركيه) لأن كل نوع يحتاج مواد مختلفة.',
            'اسأل عن ضمان إعادة التنظيف مجاناً في حال عدم الرضا عن النتيجة.',
            `اطلب فاتورة ضريبية مع تفاصيل الخدمات المقدمة والمواد المستخدمة.`,
        ],
        'pest-control': [
            `قارن بين 3 شركات مكافحة ${cityKw} واسأل عن نوع المبيدات ومدة الضمان.`,
            'تأكد أن المبيدات معتمدة من هيئة الغذاء والدواء وآمنة على الأطفال والحوامل.',
            'اسأل عن خطة المتابعة الدورية — المكافحة الفعالة تحتاج أكثر من جلسة واحدة.',
            'تحقق من ترخيص الشركة لممارسة نشاط مكافحة الآفات من البلدية.',
            'لا تغسل الأرضيات بعد الرش لمدة 48 ساعة على الأقل لضمان فعالية المبيد.',
        ],
        'sewage': [
            `اطلب كشف بالكاميرا قبل التسليك ${cityKw} لمعرفة سبب الانسداد الحقيقي.`,
            'تأكد من أن السعر المتفق عليه ثابت ولا يتغير بعد بدء العمل.',
            'اسأل عن نوع المعدات المستخدمة (كمبروسر، سلك، ضغط مائي) حسب حالتك.',
            'اطلب ضماناً مكتوباً على عدم تكرار الانسداد لمدة محددة.',
            'الصيانة الدورية كل 6 أشهر تمنع 80% من مشاكل الصرف المفاجئة.',
        ],
        'leak-detection': [
            `تأكد أن الشركة تستخدم أجهزة كشف إلكترونية حديثة ${cityKw} وليس طرقاً تقليدية.`,
            'اطلب تقريراً فنياً معتمداً يمكن تقديمه لشركة المياه لتصحيح الفاتورة.',
            'الكشف المبكر يوفر عليك تكاليف إصلاح قد تصل 10 أضعاف تكلفة الفحص.',
            'تأكد أن الفحص يشمل جميع الشبكة (حمامات، مطبخ، خزان، سطح) وليس نقطة واحدة.',
            'اسأل عن ضمان الإصلاح بعد الكشف — الشركات المحترفة تقدم ضماناً على العمل.',
        ],
        'insulation': [
            `قارن بين أنواع مواد العزل (فوم، إيبوكسي، رولات) ${cityKw} واختر الأنسب لمبناك.`,
            'تأكد من أن المواد معتمدة من هيئة المواصفات السعودية (SASO) مع شهادة جودة.',
            'اطلب ضماناً مكتوباً لا يقل عن 5 سنوات — الشركات المحترفة تقدم ضمان 10 سنوات.',
            'العزل الحراري يقلل فاتورة الكهرباء حتى 40% — اطلب قياس الحرارة قبل وبعد.',
            'تأكد من معالجة جميع الفواصل والتشققات قبل تطبيق العزل لضمان فعاليته.',
        ],
    };
    const expertTips = categoryTips[service.category] || categoryTips['cleaning'];

    const categoryWarnings: Record<string, string[]> = {
        'moving': [
            'لا تنقل مع شركة بدون عقد مكتوب يوضح المسؤوليات والتعويضات.',
            'احذر من العمالة السائبة — خطر على أثاثك ولا ضمان ولا تأمين.',
            `${cityKw}، تجنب النقل في أوقات الذروة (نهاية الشهر) لأن الأسعار ترتفع والتأخير يزداد.`,
            'لا تدفع كامل المبلغ قبل التأكد من وصول جميع القطع وتركيبها بشكل سليم.',
        ],
        'cleaning': [
            'لا تقبل مواد تنظيف مجهولة المصدر — قد تتلف الأسطح أو تسبب حساسية.',
            'احذر من العمالة غير المدربة التي تستخدم مواد كاشطة على الرخام والباركيه.',
            `${cityKw}، تجنب التنظيف بالماء الكثير على الباركيه والأرضيات الخشبية.`,
            'لا تدفع كامل المبلغ قبل فحص جميع الغرف والتأكد من جودة التنظيف.',
        ],
        'pest-control': [
            'لا تستخدم مبيدات من السوبرماركت — قد تنشر الحشرات بدل القضاء عليها.',
            'احذر من شركات بدون ترخيص بلدي — المبيدات غير المعتمدة خطر على الصحة.',
            'لا تبقَ في المنزل أثناء الرش إذا كان لديك أطفال أقل من سنتين أو حوامل.',
            `${cityKw}، تجنب الرش في الأيام شديدة الحرارة لأن المبيد يتبخر بسرعة ويفقد فعاليته.`,
        ],
        'sewage': [
            'لا تستخدم مواد كيميائية لفتح الانسداد بنفسك — قد تتلف المواسير.',
            'احذر من الشركات التي تزيد السعر بعد بدء العمل بحجة صعوبة الحالة.',
            'لا تتجاهل بطء تصريف المياه — هذه علامة مبكرة على انسداد قادم.',
            `${cityKw}، تأكد من أن سيارة الشفط مرخصة لتفريغ المخلفات في الأماكن المخصصة.`,
        ],
        'leak-detection': [
            'لا تتجاهل ارتفاع فاتورة المياه — قد يكون مؤشراً على تسريب مخفي.',
            'احذر من الشركات التي تقترح التكسير مباشرة بدون فحص إلكتروني.',
            'لا توافق على إصلاح بدون تقرير مكتوب يحدد موقع وسبب التسريب بدقة.',
            `${cityKw}، راقب ظهور بقع رطبة أو تقشر الدهان — علامات تسريب واضحة.`,
        ],
        'insulation': [
            'لا تقبل عزل بدون تنظيف وتجهيز السطح أولاً — العزل على سطح متسخ يفشل.',
            'احذر من المواد الرخيصة مجهولة المصدر — تتلف بعد موسم واحد.',
            'لا توافق على عزل بدون ضمان مكتوب — الحد الأدنى المقبول 5 سنوات.',
            `${cityKw}، تأكد من عزل جميع الفواصل والزوايا وليس فقط السطح المكشوف.`,
        ],
    };
    const warnings = categoryWarnings[service.category] || categoryWarnings['cleaning'];

    const categoryChecklist: Record<string, string[]> = {
        'moving': [
            'جرد جميع قطع الأثاث والأجهزة قبل النقل',
            'التقاط صور للقطع الثمينة كإثبات',
            'التأكد من رخصة الشركة والتأمين',
            'الاتفاق على السعر الشامل كتابياً',
            'تحديد موعد الوصول والتسليم بدقة',
            'فحص جميع القطع بعد التركيب',
        ],
        'cleaning': [
            'تحديد نوع التنظيف المطلوب (عميق/عادي/بعد بناء)',
            'إبلاغ الشركة بنوع الأسطح والأقمشة',
            'التأكد من سلامة مواد التنظيف المستخدمة',
            'طلب عرض سعر شامل جميع الغرف',
            'الاتفاق على وقت الإنجاز المتوقع',
            'فحص النتيجة قبل مغادرة الفريق',
        ],
        'pest-control': [
            'تحديد نوع الحشرة ودرجة الإصابة',
            'السؤال عن نوع المبيد ومدى أمانه',
            'التأكد من ترخيص الشركة البلدي',
            'الاتفاق على عدد الجلسات ومدة الضمان',
            'تجهيز المنزل قبل الرش (تغطية الطعام والأواني)',
            'مراجعة تعليمات ما بعد الرش',
        ],
        'sewage': [
            'وصف المشكلة بدقة (انسداد كلي/جزئي/طفح)',
            'السؤال عن المعدات المستخدمة والسعر الثابت',
            'التأكد من توفر خدمة الطوارئ 24 ساعة',
            'طلب فحص بالكاميرا لتحديد المشكلة',
            'الاتفاق على ضمان عدم تكرار المشكلة',
            'التأكد من تنظيف الموقع بعد الانتهاء',
        ],
        'leak-detection': [
            'ملاحظة علامات التسريب (بقع، رطوبة، فاتورة مرتفعة)',
            'السؤال عن نوع أجهزة الكشف المستخدمة',
            'التأكد من أن الفحص بدون تكسير',
            'طلب تقرير فني معتمد ومفصل',
            'الاتفاق على إصلاح فوري بعد الكشف',
            'مراجعة الضمان على أعمال الإصلاح',
        ],
        'insulation': [
            'تحديد نوع العزل المطلوب (مائي/حراري/مزدوج)',
            'فحص حالة السطح أو الخزان قبل العزل',
            'السؤال عن نوع المادة وشهادة الجودة',
            'التأكد من تنظيف وتجهيز السطح قبل التطبيق',
            'الاتفاق على مدة الضمان المكتوب',
            'طلب قياس الحرارة قبل وبعد (للعزل الحراري)',
        ],
    };
    const checklist = categoryChecklist[service.category] || categoryChecklist['cleaning'];

    // Service-specific PAA questions from keyword strategy
    const resolveQ = (q: string) => resolveKeywordTemplate(q, { city: cityKw, cityName: city.name_ar, serviceName: service.name_ar });

    // Semantic SEO - People Also Ask (service-specific + generic)
    const paaQuestions = [
        // Service-specific questions (from keyword research)
        ...kwProfile.topQuestions.map((q, idx) => ({
            question: resolveQ(q),
            answer: idx === 0
                ? aiContent.shortAnswer
                : idx === 1
                    ? `ابحث عن الشركات المرخصة ${cityKw} التي توفر ضماناً على الخدمة ولديها تقييمات عالية من عملاء حقيقيين. قارن بين 3 عروض أسعار على الأقل وتأكد من وجود عقد مكتوب يوضح الضمان والأسعار. بروكر يساعدك في مقارنة الشركات المعتمدة ${cityKw}.`
                    : `نعم، ${kwProfile.usp}. جميع الشركات المعتمدة لدينا ${cityKw} ملزمة بتقديم ضمان شامل على الخدمات المقدمة.`
        })),
        // Common questions
        {
            question: `ما هي المناطق التي تغطيها خدمة ${service.name_ar} ${cityKw}؟`,
            answer: `نغطي جميع أحياء ${city.name_ar} بما فيها: ${cityContext?.neighborhoods.slice(0, 5).map(n => n.name_ar).join('، ')} والمناطق المجاورة. فرقنا موزعة لتغطية كافة الأحياء بأسرع وقت.`
        },
        {
            question: `كم يستغرق ${service.name_ar} ${cityKw}؟`,
            answer: `يعتمد الوقت المطلوب على حجم العمل. عادةً يستغرق ${service.name_ar} من 2 إلى 8 ساعات حسب المساحة والمتطلبات. ${cityContext?.responseTime ? `زمن الاستجابة ${cityKw}: ${cityContext.responseTime}.` : ''}`
        },
        {
            question: `ما الفرق بين الشركات المعتمدة وغير المعتمدة ${service.name_ar} ${cityKw}؟`,
            answer: `الشركات المعتمدة في بروكر تم التحقق من تراخيصها وجودة خدماتها وتقييمات عملائها. هذه الشركات ملزمة بتقديم ضمان وفاتورة رسمية، وفقاً لاشتراطات وزارة التجارة السعودية.`
        },
        {
            question: `هل يمكن حجز ${service.name_ar} في نفس اليوم ${cityKw}؟`,
            answer: `في معظم الحالات نعم، يمكن حجز ${service.name_ar} في نفس اليوم ${cityKw}. يعتمد ذلك على توفر الفرق في منطقتك. ننصح بالحجز قبل 24 ساعة لضمان أفضل موعد.`
        },
        {
            question: `ما هي طرق الدفع المتاحة لخدمة ${service.name_ar}؟`,
            answer: `تقبل الشركات المعتمدة الدفع نقداً وعبر التحويل البنكي وبطاقات مدى وفيزا. بعض الشركات تتيح الدفع عبر تطبيقات الدفع الإلكتروني مثل Apple Pay وSTC Pay.`
        }
    ];

    // LSI Keywords (service-specific synonyms + generic)
    const lsiKeywords = [
        // Service synonyms (cover alternative search terms)
        ...kwProfile.synonyms.map(s => `${s} ${cityKw}`),
        // Generic LSI
        `${service.name_ar} ${city.name_ar} رخيص`,
        `أرقام شركات ${service.name_ar} ${cityKw}`,
        `أسعار ${service.name_ar} ${cityKw} 2026`,
        `أفضل شركة ${service.name_ar} ${cityKw} مجربة`,
        `حجز ${service.name_ar} ${cityKw} اونلاين`,
    ];

    // Internal Linking: Nearby cities for the same service
    const nearbyCityLinks = (cityContext?.nearbyCities || []).slice(0, 4).map(nearbyName => {
        const nearbyCity = getCityBySlug(
            nearbyName.toLowerCase()
                .replace(/\s+/g, '-')
                .replace(/^ال/, '')
        );
        return nearbyCity ? {
            name_ar: nearbyCity.name_ar,
            slug: nearbyCity.slug,
            url: `/${nearbyCity.slug}/${service.slug}`,
        } : null;
    }).filter(Boolean) as { name_ar: string; slug: string; url: string }[];

    // Internal Linking: Complementary services with rich context
    const complementaryLinks = relatedServices.map(rel => {
        const relService = getServiceBySlug(rel.slug);
        return relService ? {
            name_ar: relService.name_ar,
            slug: relService.slug,
            url: `/${city.slug}/${relService.slug}`,
            context: rel.context,
        } : null;
    }).filter(Boolean) as { name_ar: string; slug: string; url: string; context: string }[];

    // GEO Content Signals (for AI search engines)
    const geoSignals = {
        lastUpdated: new Date().toISOString().split('T')[0],
        authorityReferences: [
            'وفقاً لاشتراطات وزارة الشؤون البلدية والقروية',
            'بالتوافق مع معايير هيئة المواصفات السعودية (SASO)',
            'بموجب نظام التجارة الإلكترونية السعودي',
        ],
        statisticalClaims: [
            `بناءً على تحليل أكثر من ${Math.floor(50 * (cityContext?.priceModifier || 1))} شركة مسجلة ${cityKw}`,
            `متوسط تقييم الشركات المعتمدة: 4.5 من 5 نجوم`,
            `نسبة رضا العملاء: 92%`,
        ],
    };

    // Pricing Adjustment Logic
    const priceModifier = cityContext?.priceModifier || 1.0;
    const adjustedPricing = basePricing.map(item => ({
        type: item.type,
        unit: item.unit,
        price: getAdjustedPriceRange(item.minPrice, item.maxPrice, city.slug),
        minPrice: Math.round(item.minPrice * priceModifier),
        maxPrice: Math.round(item.maxPrice * priceModifier),
        time: item.time,
    }));

    return {
        priceModifier,
        pricing: adjustedPricing,
        trustFactors,
        faqItems: [
            ...paaQuestions, // PAA are essentially FAQs
            {
                question: `هل تتوفر خدمة ${service.name_ar} في جميع أحياء ${city.name_ar}؟`,
                answer: `نعم، شركاؤنا يغطون كافة أحياء ${city.name_ar}، بما في ذلك ${cityContext?.neighborhoods.map(n => n.name_ar).join('، ')}.`
            },
            {
                question: 'كيف يتم تحديد السعر النهائي؟',
                answer: 'يتم تحديد السعر بناءً على معاينة الموقع وحجم العمل المطلوب. السعر المبدئي يعتمد على المتوسط العام في السوق.'
            }
        ],
        cityContext,
        serviceNuances,
        relatedServices,
        climateContent,

        // New AI Content Fields
        aiContent,
        expertTips,
        warnings,
        checklist,
        lsiKeywords,
        paaQuestions,
        geoSignals,
        nearbyCityLinks,
        complementaryLinks
    };
}

// ============================================
// UI COMPONENT
// ============================================

export function SeoContentSection({ city, service }: SeoContentProps) {
    const content = generateSeoContent({ city, service });
    const kwProfile = getServiceKeywordProfile(service.slug);
    const cityKw = getCityKeyword(city.name_ar, kwProfile.cityPrefixPattern);

    // Derived UI Data for Render
    const {
        aiContent,
        pricing,
        expertTips,
        warnings,
        geoSignals,
        nearbyCityLinks,
        complementaryLinks
    } = content;

    return (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <article className="prose prose-lg prose-emerald max-w-none">

                {/* 1. INTRODUCTION (AI Generated) */}
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    دليل شامل لخدمة {service.name_ar} {cityKw} (2026)
                </h2>
                <div className="seo-introduction bg-emerald-50 p-6 rounded-xl border-r-4 border-emerald-500 mb-8">
                    <p className="text-gray-700 leading-relaxed font-medium">
                        {aiContent.introduction}
                    </p>
                    <p className="text-xs text-gray-500 mt-3">
                        {geoSignals.statisticalClaims[0]} | {geoSignals.authorityReferences[0]} | آخر تحديث: {geoSignals.lastUpdated}
                    </p>
                </div>

                {/* 2. LOCAL CHALLENGES (Context Aware) */}
                {aiContent.localChallenges.length > 0 && (
                    <div className="mb-10">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">
                            تحديات {service.name_ar} {cityKw} وكيف نتغلب عليها
                        </h3>
                        <div className="grid gap-4">
                            {aiContent.localChallenges.map((challenge, idx) => (
                                <div key={idx} className="bg-white border border-gray-100 p-4 rounded-xl shadow-sm">
                                    <div className="flex items-start gap-3">
                                        <span className="text-amber-500 text-xl">⚠️</span>
                                        <div>
                                            <h4 className="font-bold text-gray-800 mb-1">{challenge}</h4>
                                            <p className="text-gray-600 text-sm">{aiContent.customSolutions[idx]}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* 3. EXPERT TIPS (E-E-A-T) */}
                <div className="bg-sky-50 p-6 rounded-xl mb-10">
                    <h3 className="text-xl font-bold text-sky-900 mb-4 flex items-center gap-2">
                        <span>💡</span>
                        نصائح خبراء بروكر لعام 2026
                    </h3>
                    <ul className="space-y-3">
                        {expertTips.map((tip, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sky-800">
                                <span className="font-bold">•</span>
                                <span>{tip}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* 4. PRICING TABLE */}
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                    أسعار {service.name_ar} {cityKw} (تحديث 2026)
                </h3>
                <div className="overflow-x-auto mb-2">
                    <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200">
                        <thead>
                            <tr className="bg-gray-50 text-gray-700 border-b border-gray-200">
                                <th className="text-right p-4 font-semibold">الخدمة</th>
                                <th className="text-right p-4 font-semibold">الوحدة</th>
                                <th className="text-right p-4 font-semibold">السعر المتوقع</th>
                                {pricing.some(i => i.time) && <th className="text-right p-4 font-semibold">المدة</th>}
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {pricing.map((item, index) => (
                                <tr key={index} className="hover:bg-gray-50">
                                    <td className="p-4 text-gray-800 font-medium">{item.type}</td>
                                    <td className="p-4 text-gray-600">{item.unit}</td>
                                    <td className="p-4 text-emerald-600 font-bold" dir="ltr">{item.price}</td>
                                    {pricing.some(i => i.time) && <td className="p-4 text-gray-500">{item.time || '-'}</td>}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <p className="text-sm text-gray-500 mb-8 italic">
                    * الأسعار تقريبية وقد تختلف حسب المعاينة الميدانية.
                </p>

                {/* 5. SUCCESS STORIES */}
                <div className="mb-10">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">قصص نجاح {service.name_ar} {cityKw}</h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {aiContent.successStories.map((story, idx) => (
                            <div key={idx} className="bg-emerald-50/50 p-4 rounded-xl border border-emerald-100">
                                <h4 className="font-bold text-emerald-800 mb-2">{story.title}</h4>
                                <p className="text-gray-700 text-sm leading-relaxed">{story.result}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 6. WARNINGS */}
                <div className="border-l-4 border-red-500 bg-red-50 p-4 rounded-r-xl mb-10">
                    <h3 className="text-lg font-bold text-red-800 mb-2">تنبيهات هامة</h3>
                    <ul className="list-disc list-inside space-y-1 text-red-700 text-sm">
                        {warnings.map((w, i) => <li key={i}>{w}</li>)}
                    </ul>
                </div>

                {/* 7. COMPLEMENTARY SERVICES (Internal Linking) */}
                {complementaryLinks.length > 0 && (
                    <div className="mb-10">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">خدمات مكملة قد تحتاجها {cityKw}</h3>
                        <div className="grid sm:grid-cols-2 gap-3">
                            {complementaryLinks.map((link, i) => (
                                <Link
                                    key={i}
                                    href={link.url}
                                    className="group flex items-start gap-3 p-4 bg-white border border-gray-200 rounded-xl hover:border-emerald-300 hover:shadow-md transition-all"
                                >
                                    <span className="text-emerald-500 mt-0.5 group-hover:text-emerald-600">&#8592;</span>
                                    <div>
                                        <span className="font-bold text-gray-900 group-hover:text-emerald-700 block text-sm">{link.name_ar} في {city.name_ar}</span>
                                        <span className="text-gray-500 text-xs leading-relaxed">{link.context}</span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}

                {/* 8. NEARBY CITIES (Internal Linking - Geo Cluster) */}
                {nearbyCityLinks.length > 0 && (
                    <div className="mb-10">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">شركات {service.name_ar} في مدن قريبة من {city.name_ar}</h3>
                        <p className="text-gray-600 text-sm mb-4">
                            نقدم خدمة {service.name_ar} أيضاً في المدن المجاورة لـ{city.name_ar}. يمكنك الاطلاع على الشركات المتاحة والأسعار في كل مدينة:
                        </p>
                        <div className="flex flex-wrap gap-3">
                            {nearbyCityLinks.map((nearbyCity, i) => (
                                <Link
                                    key={i}
                                    href={nearbyCity.url}
                                    className="inline-flex items-center gap-2 px-4 py-2.5 bg-blue-50 text-blue-700 hover:bg-blue-100 rounded-lg transition-colors text-sm font-medium border border-blue-100"
                                >
                                    <span>&#128205;</span>
                                    {service.name_ar} في {nearbyCity.name_ar}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}

                {/* 8.5 RELATED BLOG ARTICLES (Topical Authority Cross-Linking) */}
                {(() => {
                    const categoryMap: Record<string, string> = {
                        moving: 'moving', cleaning: 'cleaning', 'pest-control': 'pest-control',
                        'leak-detection': 'leak-detection', insulation: 'insulation', sewage: 'sewage',
                    };
                    const blogCategory = categoryMap[service.category] || 'general';
                    const relatedArticles = BLOG_ARTICLES
                        .filter(a => a.category === blogCategory || a.relatedServices.includes(service.slug))
                        .slice(0, 3);
                    if (relatedArticles.length === 0) return null;
                    return (
                        <div className="mb-10 bg-gradient-to-bl from-amber-50 to-orange-50 p-6 rounded-xl border border-amber-200">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">📖 مقالات ذات صلة بـ{service.name_ar}</h3>
                            <p className="text-gray-600 text-sm mb-4">اقرأ أدلتنا الشاملة للحصول على معلومات أكثر عن {service.name_ar}:</p>
                            <div className="grid gap-3">
                                {relatedArticles.map((article, i) => (
                                    <Link
                                        key={i}
                                        href={`/blog/${article.slug}`}
                                        className="flex items-center justify-between p-3 bg-white rounded-lg border border-amber-100 hover:border-amber-300 hover:shadow-md transition-all group"
                                    >
                                        <div>
                                            <span className="text-xs text-amber-600 font-medium">{article.categoryLabel}</span>
                                            <h4 className="font-bold text-gray-800 text-sm group-hover:text-amber-700 transition-colors">{article.title}</h4>
                                            <span className="text-xs text-gray-500">{article.readTime} دقائق قراءة</span>
                                        </div>
                                        <span className="text-amber-500 text-lg">←</span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    );
                })()}

                {/* 9. FAQs */}
                <div className="space-y-4" itemScope itemType="https://schema.org/FAQPage">
                    <h3 className="text-xl font-bold text-gray-900">الأسئلة الشائعة عن {service.name_ar} {cityKw}</h3>
                    {content.faqItems.map((faq, index) => (
                        <div key={index} className="bg-white border border-gray-200 rounded-xl p-4" itemScope itemType="https://schema.org/Question">
                            <h4 className="font-bold text-gray-900 mb-2" itemProp="name">{faq.question}</h4>
                            <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                                <p className="text-gray-600 text-sm leading-relaxed" itemProp="text">{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </article>
        </section>
    );
}

// ============================================
// ENHANCED JSON-LD SCHEMAS
// ============================================

export function FaqJsonLd({ city, service }: SeoContentProps) {
    const content = generateSeoContent({ city, service });

    const schema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": content.faqItems.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

export function ServiceOfferJsonLd({ city, service }: SeoContentProps) {
    const content = generateSeoContent({ city, service });

    // Pricing data is already adjusted in generateSeoContent
    const schema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": `${service.name_ar} ${getCityKeyword(city.name_ar, getServiceKeywordProfile(service.slug).cityPrefixPattern)}`,
        "description": content.aiContent.shortAnswer, // Use the AI snippet
        "areaServed": {
            "@type": "City",
            "name": city.name_ar,
            "addressCountry": "SA"
        },
        "provider": {
            "@type": "Organization",
            "name": "بروكر",
            "url": "https://prokr.co"
        },
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": `خدمات ${service.name_ar}`,
            "itemListElement": content.pricing.slice(0, 5).map((item) => ({
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": item.type
                },
                "priceSpecification": {
                    "@type": "PriceSpecification",
                    "priceCurrency": "SAR",
                    "minPrice": item.minPrice,
                    "maxPrice": item.maxPrice
                }
            }))
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
