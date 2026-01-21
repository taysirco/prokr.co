import type { City, Service } from '@/types';

// ============================================
// SEO Content Generator for Silo Pages
// Generates pricing tables, FAQs, and rich content
// ============================================

interface SeoContentProps {
    city: City;
    service: Service;
}

// Pricing data by service category
const PRICING_DATA: Record<string, { type: string; unit: string; price: string }[]> = {
    'furniture-moving': [
        { type: 'شقة صغيرة (غرفة-غرفتين)', unit: 'رحلة واحدة', price: '500 - 800' },
        { type: 'شقة متوسطة (3-4 غرف)', unit: 'رحلة واحدة', price: '800 - 1,200' },
        { type: 'شقة كبيرة (5+ غرف)', unit: 'رحلة واحدة', price: '1,200 - 2,000' },
        { type: 'فيلا صغيرة', unit: 'رحلة واحدة', price: '2,000 - 3,500' },
        { type: 'فيلا كبيرة / قصر', unit: 'رحلة واحدة', price: '3,500 - 7,000' },
    ],
    'cleaning': [
        { type: 'شقة صغيرة', unit: 'تنظيف شامل', price: '200 - 350' },
        { type: 'شقة متوسطة', unit: 'تنظيف شامل', price: '350 - 500' },
        { type: 'فيلا صغيرة', unit: 'تنظيف شامل', price: '500 - 800' },
        { type: 'فيلا كبيرة', unit: 'تنظيف شامل', price: '800 - 1,500' },
        { type: 'تنظيف بالساعة', unit: 'ساعة واحدة', price: '35 - 50' },
    ],
    'pest-control': [
        { type: 'شقة صغيرة', unit: 'رش شامل', price: '150 - 250' },
        { type: 'شقة متوسطة/كبيرة', unit: 'رش شامل', price: '250 - 400' },
        { type: 'فيلا', unit: 'رش شامل', price: '400 - 700' },
        { type: 'مكافحة النمل الأبيض', unit: 'للمتر المربع', price: '15 - 25' },
        { type: 'عقد سنوي', unit: '4 زيارات', price: '800 - 1,500' },
    ],
    'water-leak-detection': [
        { type: 'فحص أولي', unit: 'زيارة', price: '150 - 300' },
        { type: 'كشف بالأجهزة', unit: 'نقطة تسريب', price: '200 - 400' },
        { type: 'إصلاح تسريب بسيط', unit: 'نقطة', price: '300 - 500' },
        { type: 'إصلاح تسريب معقد', unit: 'نقطة', price: '500 - 1,500' },
        { type: 'فحص شامل للمبنى', unit: 'فحص كامل', price: '500 - 1,000' },
    ],
    'tank-insulation': [
        { type: 'خزان صغير (1-2 طن)', unit: 'عزل كامل', price: '500 - 800' },
        { type: 'خزان متوسط (3-5 طن)', unit: 'عزل كامل', price: '800 - 1,200' },
        { type: 'خزان كبير (6-10 طن)', unit: 'عزل كامل', price: '1,200 - 2,000' },
        { type: 'عزل أرضي', unit: 'للخزان', price: '1,500 - 3,000' },
    ],
    'sofa-cleaning': [
        { type: 'كنبة 3 مقاعد', unit: 'قطعة', price: '80 - 120' },
        { type: 'كنبة 4 مقاعد', unit: 'قطعة', price: '100 - 150' },
        { type: 'طقم كنب كامل', unit: 'طقم', price: '300 - 500' },
        { type: 'مجلس عربي', unit: 'للمتر الطولي', price: '30 - 50' },
    ],
};

// Default pricing for services without specific data
const DEFAULT_PRICING = [
    { type: 'خدمة أساسية', unit: 'زيارة', price: '150 - 300' },
    { type: 'خدمة متوسطة', unit: 'زيارة', price: '300 - 500' },
    { type: 'خدمة شاملة', unit: 'زيارة', price: '500 - 1,000' },
];

// Trust factors by service category
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
};

const DEFAULT_TRUST_FACTORS = [
    'شركة مرخصة ومعتمدة',
    'خبرة طويلة في المجال',
    'أسعار تنافسية وشفافة',
    'ضمان جودة الخدمة',
    'فريق عمل محترف',
    'خدمة عملاء متميزة',
];

// Generate rich SEO content
export function generateSeoContent({ city, service }: SeoContentProps) {
    const pricing = PRICING_DATA[service.slug] || DEFAULT_PRICING;
    const trustFactors = TRUST_FACTORS[service.category] || DEFAULT_TRUST_FACTORS;

    return {
        // Direct answer snippet (40-50 words)
        directAnswer: `${service.name_ar} في ${city.name_ar} تشمل خدمات احترافية مقدمة من شركات معتمدة ومرخصة. تتراوح الأسعار حسب حجم العمل ونوع الخدمة المطلوبة. يوفر بروكر قائمة بأفضل الشركات مع أرقام التواصل المباشر وتقييمات العملاء.`,

        // Trust factors list
        trustTitle: `معايير اختيار أفضل شركة ${service.name_ar} في ${city.name_ar}`,
        trustFactors,

        // Pricing table
        pricingTitle: `متوسط أسعار ${service.name_ar} في ${city.name_ar} (لعام 2026)`,
        pricingData: pricing,
        pricingDisclaimer: 'الأسعار تقريبية وتختلف حسب حجم العمل والشركة. ننصح بطلب عروض أسعار من أكثر من شركة.',

        // Process steps
        processTitle: `خطوات طلب خدمة ${service.name_ar} في ${city.name_ar}`,
        processSteps: [
            `تصفح قائمة شركات ${service.name_ar} في ${city.name_ar} على بروكر`,
            'قارن بين الشركات واقرأ تقييمات العملاء',
            'تواصل مع الشركة المختارة عبر الهاتف أو الواتساب',
            'احصل على معاينة وعرض سعر',
            'تأكد من الضمانات المقدمة قبل الموافقة',
            'استلم الخدمة وقيّم الشركة لمساعدة الآخرين',
        ],

        // FAQ
        faqTitle: `أسئلة شائعة عن ${service.name_ar} في ${city.name_ar}`,
        faqItems: [
            {
                question: `كم تكلفة ${service.name_ar} في ${city.name_ar}؟`,
                answer: `تختلف أسعار ${service.name_ar} في ${city.name_ar} حسب حجم العمل ونوع الخدمة. يمكنك الاطلاع على جدول الأسعار التقريبية أعلاه، وننصح بالتواصل مع أكثر من شركة للحصول على عروض أسعار.`,
            },
            {
                question: `هل توجد شركات ${service.name_ar} في جميع أحياء ${city.name_ar}؟`,
                answer: `نعم، الشركات المسجلة في بروكر تغطي جميع أحياء ${city.name_ar} بما في ذلك الأحياء الرئيسية والضواحي. يمكنك التأكد من نطاق التغطية عند التواصل مع الشركة.`,
            },
            {
                question: `هل الشركات المعروضة تقدم ضمان على الخدمة؟`,
                answer: `معظم الشركات المميزة في بروكر تقدم ضمانات على خدماتها. مدة الضمان تختلف حسب نوع الخدمة والشركة. تأكد من الاستفسار عن الضمان قبل طلب الخدمة.`,
            },
            {
                question: `كيف أتحقق من مصداقية الشركة؟`,
                answer: `يمكنك التحقق من خلال: قراءة تقييمات العملاء السابقين، التأكد من وجود شارة "معتمد"، طلب صور لأعمال سابقة، والتحقق من وجود سجل تجاري ساري.`,
            },
            {
                question: `كم تستغرق خدمة ${service.name_ar}؟`,
                answer: `مدة الخدمة تعتمد على حجم العمل المطلوب. بشكل عام، الخدمات البسيطة تستغرق ساعات قليلة بينما الأعمال الكبيرة قد تستغرق يوماً أو أكثر. الشركة ستحدد المدة بدقة عند المعاينة.`,
            },
        ],
    };
}

// SEO Content Component
export function SeoContentSection({ city, service }: SeoContentProps) {
    const content = generateSeoContent({ city, service });

    return (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <article className="prose prose-lg prose-emerald max-w-none">
                {/* Direct Answer */}
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    {service.name_ar} في {city.name_ar}
                </h2>
                <p className="text-gray-600 leading-relaxed bg-emerald-50 p-4 rounded-xl border-r-4 border-emerald-500">
                    {content.directAnswer}
                </p>

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
                            </tr>
                        </thead>
                        <tbody>
                            {content.pricingData.map((item, index) => (
                                <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                                    <td className="p-4 border-t border-gray-100">{item.type}</td>
                                    <td className="p-4 border-t border-gray-100">{item.unit}</td>
                                    <td className="p-4 border-t border-gray-100 font-semibold text-emerald-600">{item.price}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <p className="text-sm text-gray-500 mt-3 italic">
                    * {content.pricingDisclaimer}
                </p>

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

// JSON-LD FAQ Schema
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
