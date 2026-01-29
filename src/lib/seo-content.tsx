import Link from 'next/link';
import type { City, Service } from '@/types';
import { getCityContext, getAdjustedPriceRange, getServiceNuances, getClimateContent, ClimateType } from './city-context';
import { getRelatedServices } from './related-services';
import { getServiceBySlug } from './seed';
import { generateContentLayers } from './ai-content-layers';

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

    // E-E-A-T Signals
    const expertTips = [
        `قارن عروض الأسعار من 3 شركات على الأقل في ${city.name_ar} قبل الاختيار.`,
        `تأكد من وجود بند واضح للضمان في العقد لحفظ حقوقك.`,
        `اسأل عن ${service.category === 'moving' ? 'مواد التغليف المستخدمة' : 'نوعية المواد المستخدمة'} للتأكد من جودتها.`,
        cityContext?.climate === 'humid-coastal'
            ? 'تأكد من معالجة الأسطح ضد الرطوبة لضمان استدامة العمل.'
            : 'احرص على إغلاق النوافذ والأبواب جيداً بعد الخدمة لمنع دخول الغبار.',
        `اطلب فاتورة ضريبية مختومة لضمان حقك في حال وجود شكوى.`,
    ];

    const warnings = [
        'تجنب الشركات التي تقدم أسعاراً منخفضة جداً بشكل غير منطقي.',
        'لا تدفع كامل المبلغ قبل انتهاء العمل والتأكد من جودته.',
        'احذر من التعامل مع عمالة سائبة بدون مرجعية مؤسسية.',
        `في ${city.name_ar}، تجنب تحديد مواعيد العمل في أوقات الذروة لتفادي التأخير.`,
    ];

    const checklist = [
        'تحديد حجم العمل بدقة',
        'طلب عرض سعر مكتوب وتفصيلي',
        'التأكد من رخصة الشركة',
        'قراءة تقييمات العملاء السابقين',
        'الاتفاق على موعد التسليم',
        'مراجعة شروط الضمان',
    ];

    // Semantic SEO - People Also Ask
    const paaQuestions = [
        {
            question: `كم سعر ${service.name_ar} في ${city.name_ar}؟`,
            answer: aiContent.shortAnswer
        },
        {
            question: `كيف أختار أفضل شركة ${service.name_ar}؟`,
            answer: `ابحث عن الشركات المرخصة في ${city.name_ar} التي توفر ضماناً على الخدمة ولديها تقييمات عالية من عملاء حقيقيين.`
        },
        {
            question: `هل تقدمون ضمان على ${service.name_ar}؟`,
            answer: `نعم، جميع الشركات المعتمدة لدينا في ${city.name_ar} ملزمة بتقديم ضمان شامل على الخدمات المقدمة.`
        },
        {
            question: `ما هي المناطق التي تغطيها الخدمة في ${city.name_ar}؟`,
            answer: `نغطي جميع أحياء ${city.name_ar} بما فيها: ${cityContext?.neighborhoods.slice(0, 5).map(n => n.name_ar).join('، ')} والمناطق المجاورة.`
        }
    ];

    // LSI Keywords
    const lsiKeywords = [
        `${service.name_ar} ${city.name_ar} رخيص`,
        `أرقام شركات ${service.name_ar}`,
        `أسعار ${service.name_ar} 2026`,
        `أفضل شركة ${service.name_ar} مجربة`,
        `خدمات ${service.name_ar} عمالة فلبينية`,
        `تطبيقات ${service.name_ar} في ${city.name_ar}`,
    ];

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
        paaQuestions
    };
}

// ============================================
// UI COMPONENT
// ============================================

export function SeoContentSection({ city, service }: SeoContentProps) {
    const content = generateSeoContent({ city, service });

    // Derived UI Data for Render
    const {
        cityContext,
        aiContent,
        pricing,
        expertTips,
        warnings,
        relatedServices
    } = content;

    return (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <article className="prose prose-lg prose-emerald max-w-none">

                {/* 1. INTRODUCTION (AI Generated) */}
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    دليل شامل لخدمة {service.name_ar} في {city.name_ar} (2026)
                </h2>
                <div className="bg-emerald-50 p-6 rounded-xl border-r-4 border-emerald-500 mb-8">
                    <p className="text-gray-700 leading-relaxed font-medium">
                        {aiContent.introduction}
                    </p>
                </div>

                {/* 2. LOCAL CHALLENGES (Context Aware) */}
                {aiContent.localChallenges.length > 0 && (
                    <div className="mb-10">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">
                            تحديات {service.name_ar} في {city.name_ar} وكيف نتغلب عليها
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
                    أسعار {service.name_ar} في {city.name_ar} (تحديث 2026)
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
                    <h3 className="text-xl font-bold text-gray-900 mb-4">قصص نجاح من {city.name_ar}</h3>
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

                {/* 7. RELATED SERVICES */}
                {relatedServices.length > 0 && (
                    <div className="mb-8">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">خدمات أخرى قد تهمك في {city.name_ar}</h3>
                        <div className="flex flex-wrap gap-2">
                            {relatedServices.map((rel, i) => (
                                <Link
                                    key={i}
                                    href={`/${city.slug}/${rel.slug}`}
                                    className="block px-4 py-2 bg-gray-100 hover:bg-emerald-50 hover:text-emerald-700 text-gray-700 rounded-lg transition-colors text-sm font-medium"
                                >
                                    {rel.context}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}

                {/* 8. FAQs */}
                <div className="space-y-4">
                    <h3 className="text-xl font-bold text-gray-900">الأسئلة الشائعة</h3>
                    {content.faqItems.map((faq, index) => (
                        <div key={index} itemScope itemType="https://schema.org/Question">
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
        "name": `${service.name_ar} في ${city.name_ar}`,
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
