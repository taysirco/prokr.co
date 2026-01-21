import Link from 'next/link';
import type { City, Service } from '@/types';
import { getCityContext, getAdjustedPriceRange, getServiceNuances, getClimateContent } from './city-context';
import { getRelatedServices } from './related-services';
import { getServiceBySlug } from './seed';

// ============================================
// AI-Ready SEO Content Generator
// Generates unique, geo-contextual content for each silo page
// Optimized for Google SGE and Featured Snippets
// ============================================

interface SeoContentProps {
    city: City;
    service: Service;
}

// ============================================
// BASE PRICING DATA (Riyadh baseline = 1.0)
// Will be adjusted per city using priceModifier
// ============================================
const BASE_PRICING: Record<string, { type: string; unit: string; minPrice: number; maxPrice: number; time?: string }[]> = {
    // Moving Services
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

    // Cleaning Services
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

    // Pest Control Services
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

    // Leak Detection & Insulation
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

    // Sewage Services
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

// Default pricing for services without specific data
const DEFAULT_BASE_PRICING = [
    { type: 'خدمة أساسية', unit: 'زيارة', minPrice: 150, maxPrice: 300, time: '1-2 ساعة' },
    { type: 'خدمة متوسطة', unit: 'زيارة', minPrice: 300, maxPrice: 500, time: '2-4 ساعات' },
    { type: 'خدمة شاملة', unit: 'زيارة', minPrice: 500, maxPrice: 1000, time: '4-6 ساعات' },
];

// ============================================
// TRUST FACTORS BY SERVICE CATEGORY
// ============================================
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

    // Get climate-based content
    const climateContent = cityContext ? getClimateContent(cityContext.climate) : null;

    // Calculate adjusted pricing for this city
    const priceModifier = cityContext?.priceModifier || 1.0;
    const adjustedPricing = basePricing.map(item => ({
        type: item.type,
        unit: item.unit,
        price: getAdjustedPriceRange(item.minPrice, item.maxPrice, city.slug),
        time: item.time,
    }));

    // Get first price for direct answer
    const firstPrice = basePricing[0];
    const minPriceAdjusted = Math.round(firstPrice.minPrice * priceModifier);
    const maxPriceAdjusted = Math.round(basePricing[basePricing.length - 1].maxPrice * priceModifier);

    // Build geo-specific challenges paragraph
    const geoChallenges = cityContext ? [
        ...cityContext.challenges.slice(0, 2),
        ...serviceNuances.slice(0, 2),
    ] : [];

    // Get neighborhoods
    const neighborhoods = cityContext?.neighborhoods.slice(0, 6).map(n => n.name_ar) || [];
    const responseTime = cityContext?.responseTime || 'نفس اليوم';
    const nearbyCities = cityContext?.nearbyCities || [];

    return {
        // ========================================
        // DIRECT ANSWER SNIPPET (40-50 words)
        // First paragraph - what AI will pull
        // ========================================
        directAnswer: cityContext
            ? `تبدأ أسعار ${service.name_ar} في ${city.name_ar} من ${minPriceAdjusted.toLocaleString('ar-SA')} ريال وتصل إلى ${maxPriceAdjusted.toLocaleString('ar-SA')} ريال حسب حجم العمل. ${city.name_ar} تتميز بتحديات خاصة مثل ${geoChallenges[0] || 'احتياجات محلية متنوعة'}. يوفر بروكر قائمة بأفضل شركات ${service.name_ar} المعتمدة مع أرقام التواصل المباشر.`
            : `${service.name_ar} في ${city.name_ar} تشمل خدمات احترافية مقدمة من شركات معتمدة ومرخصة. تتراوح الأسعار حسب حجم العمل ونوع الخدمة المطلوبة. يوفر بروكر قائمة بأفضل الشركات مع أرقام التواصل المباشر وتقييمات العملاء.`,

        // ========================================
        // GEO-SPECIFIC CHALLENGES SECTION
        // Why this service is different HERE
        // ========================================
        geoChallengesTitle: `لماذا تختلف ${service.name_ar} في ${city.name_ar} عن غيرها؟`,
        geoChallenges: geoChallenges,
        geoContext: cityContext ? `${city.name_ar} مدينة ${cityContext.urbanTraits[0] || 'متنامية'} تتميز بـ${cityContext.urbanTraits.slice(1, 3).join(' و')}. هذه الخصائص تتطلب من شركات ${service.name_ar} خبرة محلية ومعدات مناسبة للتعامل مع ${geoChallenges[0] || 'متطلبات المنطقة'}.` : null,
        climateTips: climateContent?.tips || [],

        // ========================================
        // TRUST FACTORS
        // ========================================
        trustTitle: `معايير اختيار أفضل شركة ${service.name_ar} في ${city.name_ar}`,
        trustFactors,

        // ========================================
        // PRICING TABLE (City-adjusted)
        // ========================================
        pricingTitle: `متوسط أسعار ${service.name_ar} في ${city.name_ar} - تحديث 2026`,
        pricingData: adjustedPricing,
        pricingDisclaimer: `الأسعار تقريبية خاصة بمنطقة ${city.name_ar} وتختلف حسب حجم العمل والشركة. ننصح بطلب عروض أسعار من أكثر من شركة.`,
        priceModifierNote: priceModifier !== 1.0
            ? priceModifier > 1
                ? `* أسعار ${city.name_ar} أعلى بنسبة ${Math.round((priceModifier - 1) * 100)}% من المتوسط بسبب ارتفاع تكاليف التشغيل`
                : `* أسعار ${city.name_ar} أقل بنسبة ${Math.round((1 - priceModifier) * 100)}% من المتوسط`
            : null,

        // ========================================
        // NEIGHBORHOODS SECTION
        // ========================================
        neighborhoodsTitle: `الأحياء التي نغطيها في ${city.name_ar}`,
        neighborhoods,
        neighborhoodsText: neighborhoods.length > 0
            ? `نغطي أحياء ${neighborhoods.slice(0, 3).join(' و')} بشاحنات وفرق مجهزة، ونصل إليك في ${neighborhoods.slice(3, 5).join(' و')} ${responseTime}. جميع الأحياء في ${city.name_ar} مشمولة بخدماتنا.`
            : `جميع أحياء ${city.name_ar} مشمولة بخدماتنا. تواصل معنا لتأكيد التغطية في منطقتك.`,
        responseTime,

        // ========================================
        // RELATED SERVICES (Internal Linking)
        // ========================================
        relatedServicesTitle: 'خدمات ذات صلة قد تحتاجها',
        relatedServices: relatedServices.map(rel => {
            const relatedService = getServiceBySlug(rel.slug);
            return {
                slug: rel.slug,
                name: relatedService?.name_ar || rel.slug,
                context: rel.context,
                link: `/${city.slug}/${rel.slug}`,
            };
        }),

        // ========================================
        // PROCESS STEPS
        // ========================================
        processTitle: `خطوات طلب خدمة ${service.name_ar} في ${city.name_ar}`,
        processSteps: [
            `تصفح قائمة شركات ${service.name_ar} في ${city.name_ar} على بروكر`,
            'قارن بين الشركات واقرأ تقييمات العملاء',
            'تواصل مع الشركة المختارة عبر الهاتف أو الواتساب',
            'احصل على معاينة وعرض سعر',
            'تأكد من الضمانات المقدمة قبل الموافقة',
            'استلم الخدمة وقيّم الشركة لمساعدة الآخرين',
        ],

        // ========================================
        // FAQ (Enhanced with geo-context)
        // ========================================
        faqTitle: `أسئلة شائعة عن ${service.name_ar} في ${city.name_ar}`,
        faqItems: [
            {
                question: `كم تكلفة ${service.name_ar} في ${city.name_ar}؟`,
                answer: `تبدأ أسعار ${service.name_ar} في ${city.name_ar} من ${minPriceAdjusted.toLocaleString('ar-SA')} ريال وتصل إلى ${maxPriceAdjusted.toLocaleString('ar-SA')} ريال حسب حجم العمل ونوع الخدمة. ${priceModifier > 1 ? `الأسعار في ${city.name_ar} أعلى قليلاً من المتوسط بسبب ارتفاع تكاليف التشغيل.` : priceModifier < 1 ? `الأسعار في ${city.name_ar} تنافسية مقارنة بالمدن الكبرى.` : ''} يمكنك الاطلاع على جدول الأسعار أعلاه، وننصح بالتواصل مع أكثر من شركة للحصول على عروض أسعار.`,
            },
            {
                question: `كيف أجد شركة ${service.name_ar} موثوقة في ${city.name_ar}؟`,
                answer: `للعثور على شركة ${service.name_ar} موثوقة في ${city.name_ar}، ابحث عن الشركات التي تحمل شارة "معتمد" في بروكر. هذه الشركات خضعت لعملية تحقق من التراخيص والتقييمات. اقرأ تقييمات العملاء السابقين، واطلب صور أعمال سابقة، وتأكد من وجود ضمان مكتوب على الخدمة.`,
            },
            {
                question: `هل توجد شركات ${service.name_ar} في جميع أحياء ${city.name_ar}؟`,
                answer: `نعم، الشركات المسجلة في بروكر تغطي جميع أحياء ${city.name_ar} بما في ذلك ${neighborhoods.slice(0, 3).join(' و')} والأحياء المجاورة. معظم الشركات تصل إليك ${responseTime}. يمكنك التأكد من نطاق التغطية عند التواصل مع الشركة.`,
            },
            {
                question: `هل تخدمون مناطق خارج ${city.name_ar}؟`,
                answer: nearbyCities.length > 0
                    ? `نعم، العديد من شركات ${service.name_ar} في ${city.name_ar} تخدم أيضاً المدن المجاورة مثل ${nearbyCities.join(' و')}. قد تختلف الأسعار حسب المسافة. تواصل مع الشركة لتأكيد التغطية.`
                    : `نعم، العديد من الشركات تخدم المناطق المحيطة بـ${city.name_ar}. تواصل مع الشركة مباشرة لتأكيد التغطية.`,
            },
            {
                question: `هل الشركات المعروضة تقدم ضمان على الخدمة؟`,
                answer: `معظم شركات ${service.name_ar} المميزة في بروكر تقدم ضمانات على خدماتها. مدة الضمان تختلف حسب نوع الخدمة والشركة. في ${city.name_ar}، الشركات المعتمدة عادةً توفر ضماناً مكتوباً. تأكد من الاستفسار عن الضمان وشروطه قبل طلب الخدمة.`,
            },
        ],
    };
}

// ============================================
// SEO CONTENT COMPONENT
// ============================================

export function SeoContentSection({ city, service }: SeoContentProps) {
    const content = generateSeoContent({ city, service });

    return (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <article className="prose prose-lg prose-emerald max-w-none">
                {/* Direct Answer Snippet */}
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    دليل شامل لخدمة {service.name_ar} في {city.name_ar} (2026)
                </h2>
                <p className="text-gray-600 leading-relaxed bg-emerald-50 p-4 rounded-xl border-r-4 border-emerald-500">
                    {content.directAnswer}
                </p>

                {/* Geo-Specific Challenges */}
                {content.geoChallenges.length > 0 && (
                    <>
                        <h3 className="text-xl font-bold text-gray-900 mt-10 mb-4">
                            {content.geoChallengesTitle}
                        </h3>
                        {content.geoContext && (
                            <p className="text-gray-600 leading-relaxed mb-4">
                                {content.geoContext}
                            </p>
                        )}
                        <ul className="space-y-2 text-gray-600 bg-amber-50 p-4 rounded-xl">
                            {content.geoChallenges.map((challenge, index) => (
                                <li key={index} className="flex items-start gap-2">
                                    <span className="text-amber-600 font-bold">⚠</span>
                                    <span>{challenge}</span>
                                </li>
                            ))}
                        </ul>
                    </>
                )}

                {/* Trust Factors */}
                <h3 className="text-xl font-bold text-gray-900 mt-10 mb-4">
                    {content.trustTitle}
                </h3>
                <ul className="space-y-2 text-gray-600">
                    {content.trustFactors.map((factor, index) => (
                        <li key={index} className="flex items-start gap-2">
                            <span className="text-emerald-500 font-bold">✓</span>
                            <span>{factor}</span>
                        </li>
                    ))}
                </ul>

                {/* Pricing Table */}
                <h3 className="text-xl font-bold text-gray-900 mt-10 mb-4">
                    {content.pricingTitle}
                </h3>
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
                        <thead>
                            <tr className="bg-emerald-600 text-white">
                                <th className="text-right p-4">نوع الخدمة</th>
                                <th className="text-right p-4">الوحدة</th>
                                <th className="text-right p-4">السعر (ر.س)</th>
                                {content.pricingData.some(item => item.time) && (
                                    <th className="text-right p-4">المدة التقريبية</th>
                                )}
                            </tr>
                        </thead>
                        <tbody>
                            {content.pricingData.map((item, index) => (
                                <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                                    <td className="p-4 border-t border-gray-100">{item.type}</td>
                                    <td className="p-4 border-t border-gray-100">{item.unit}</td>
                                    <td className="p-4 border-t border-gray-100 font-semibold text-emerald-600">{item.price}</td>
                                    {content.pricingData.some(i => i.time) && (
                                        <td className="p-4 border-t border-gray-100 text-gray-500">{item.time || '-'}</td>
                                    )}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <p className="text-sm text-gray-500 mt-3 italic">
                    * {content.pricingDisclaimer}
                </p>
                {content.priceModifierNote && (
                    <p className="text-sm text-amber-600 mt-1 italic">
                        {content.priceModifierNote}
                    </p>
                )}

                {/* Neighborhoods */}
                {content.neighborhoods.length > 0 && (
                    <>
                        <h3 className="text-xl font-bold text-gray-900 mt-10 mb-4">
                            {content.neighborhoodsTitle}
                        </h3>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            {content.neighborhoodsText}
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {content.neighborhoods.map((neighborhood, index) => (
                                <span
                                    key={index}
                                    className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg text-sm"
                                >
                                    {neighborhood}
                                </span>
                            ))}
                        </div>
                    </>
                )}

                {/* Related Services - Internal Links */}
                {content.relatedServices.length > 0 && (
                    <>
                        <h3 className="text-xl font-bold text-gray-900 mt-10 mb-4">
                            {content.relatedServicesTitle}
                        </h3>
                        <div className="space-y-3 bg-blue-50 p-4 rounded-xl">
                            {content.relatedServices.map((related, index) => (
                                <p key={index} className="text-gray-600">
                                    {related.context}{' '}
                                    <Link
                                        href={related.link}
                                        className="text-emerald-600 hover:text-emerald-700 font-medium"
                                    >
                                        {related.name} في {city.name_ar} ←
                                    </Link>
                                </p>
                            ))}
                        </div>
                    </>
                )}

                {/* Process Steps */}
                <h3 className="text-xl font-bold text-gray-900 mt-10 mb-4">
                    {content.processTitle}
                </h3>
                <ol className="space-y-3 text-gray-600">
                    {content.processSteps.map((step, index) => (
                        <li key={index} className="flex items-start gap-3">
                            <span className="flex-shrink-0 w-7 h-7 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center text-sm font-bold">
                                {index + 1}
                            </span>
                            <span className="pt-0.5">{step}</span>
                        </li>
                    ))}
                </ol>

                {/* FAQ */}
                <h3 className="text-xl font-bold text-gray-900 mt-10 mb-4">
                    {content.faqTitle}
                </h3>
                <div className="space-y-4">
                    {content.faqItems.map((faq, index) => (
                        <div key={index} className="bg-gray-50 rounded-xl p-5">
                            <h4 className="font-bold text-gray-900 mb-2">{faq.question}</h4>
                            <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
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
    const firstPrice = content.pricingData[0];

    const schema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": `${service.name_ar} في ${city.name_ar}`,
        "description": content.directAnswer,
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
            "itemListElement": content.pricingData.slice(0, 3).map((item, index) => ({
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": item.type
                },
                "priceSpecification": {
                    "@type": "PriceSpecification",
                    "priceCurrency": "SAR",
                    "price": item.price
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
