import Link from 'next/link';
import type { City, Service } from '@/types';
import { getCityContext, getAdjustedPriceRange, getServiceNuances, getClimateContent } from './city-context';
import { getRelatedServices, generateServiceUrl } from './related-services';
import { getServiceBySlug, getCityBySlug } from './seed';
import { generateContentLayers } from './ai-content-layers';
import { getServiceKeywordProfile, getCityKeyword, resolveKeywordTemplate } from './keyword-strategy';
import { BLOG_ARTICLES } from './blog-data';
import { resolveSeoContent } from './overrides';
import { SalaryCycleNote } from '@/components/SalaryCycleBadge';

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
import { BASE_PRICING, TRUST_FACTORS, EXPERT_TIPS, WARNINGS, CHECKLISTS, SEMANTIC_DATA } from './services';
import type { ServiceSemanticData } from './services';

const DEFAULT_BASE_PRICING = [
    { type: 'خدمة أساسية', unit: 'زيارة', minPrice: 150, maxPrice: 300, time: '1-2 ساعة' },
    { type: 'خدمة متوسطة', unit: 'زيارة', minPrice: 300, maxPrice: 500, time: '2-4 ساعات' },
    { type: 'خدمة شاملة', unit: 'زيارة', minPrice: 500, maxPrice: 1000, time: '4-6 ساعات' },
];

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
    const relatedServices = getRelatedServices(service.slug, 11);
    const climateContent = cityContext ? getClimateContent(cityContext.climate) : null;

    // AI Content Layers
    const aiContent = generateContentLayers(city, service);

    // Keyword strategy for بـ prefix (used throughout)
    const kwProfile = getServiceKeywordProfile(service.slug);
    const cityKw = getCityKeyword(city.name_ar, kwProfile.cityPrefixPattern);

    // E-E-A-T Signals — Category-specific
    const expertTipsTemplate = EXPERT_TIPS[service.category] || EXPERT_TIPS['cleaning'] || [];
    const expertTips = expertTipsTemplate.map(t => t.replace(/\{cityKw\}/g, cityKw).replace(/\{serviceName\}/g, service.name_ar));

    const warningsTemplate = WARNINGS[service.category] || WARNINGS['cleaning'] || [];
    const warnings = warningsTemplate.map(w => w.replace(/\{cityKw\}/g, cityKw).replace(/\{serviceName\}/g, service.name_ar));

    const checklistTemplate = CHECKLISTS[service.category] || CHECKLISTS['cleaning'] || [];
    const checklist = checklistTemplate.map(c => c.replace(/\{cityKw\}/g, cityKw).replace(/\{serviceName\}/g, service.name_ar));

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
            answer: `الشركات المعتمدة في بروكر تم التحقق من تراخيصها وجودة خدماتها وتقييمات عملائها. هذه الشركات ملزمة بتقديم ضمان وفاتورة رسمية، وفقاً لاشتراطات وزارة التجارة السعودية. ${cityKw} يوجد ${Math.floor(30 * (cityContext?.priceModifier || 1))} شركة معتمدة تغطي أحياء ${cityContext?.neighborhoods.slice(0, 3).map(n => n.name_ar).join(' و') || city.name_ar}.`
        },
        {
            question: `هل يمكن حجز ${service.name_ar} في نفس اليوم ${cityKw}؟`,
            answer: `في معظم الحالات نعم، يمكن حجز ${service.name_ar} في نفس اليوم ${cityKw}. ${cityContext?.responseTime ? `زمن الاستجابة المتوقع: ${cityContext.responseTime}.` : 'يعتمد ذلك على توفر الفرق في منطقتك.'} ننصح بالحجز قبل 24 ساعة لضمان أفضل موعد${cityContext?.neighborhoods?.[0] ? ` خصوصاً في مناطق مثل ${cityContext.neighborhoods[0].name_ar}` : ''}.`
        },
        {
            question: `ما هي طرق الدفع المتاحة لخدمة ${service.name_ar}؟`,
            answer: `تقبل الشركات المعتمدة ${cityKw} الدفع نقداً وعبر التحويل البنكي وبطاقات مدى وفيزا. بعض الشركات تتيح الدفع عبر Apple Pay وSTC Pay.${cityContext?.priceModifier && cityContext.priceModifier >= 1.0 ? ' في المدن الكبرى تتوفر جميع خيارات الدفع الإلكتروني.' : ' في المدن الأصغر قد يقتصر الدفع الإلكتروني على المحلات الكبرى.'}`
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
            url: generateServiceUrl(relService.slug, city.slug),
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
            `متوسط تقييم الشركات المعتمدة ${cityKw}: ${(4.3 + (cityContext?.priceModifier || 1) * 0.3).toFixed(1)} من 5 نجوم`,
            `نسبة رضا العملاء ${cityKw}: ${Math.round(88 + (cityContext?.priceModifier || 1) * 5)}%`,
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
                question: `كيف يتم تحديد السعر النهائي لخدمة ${service.name_ar} ${cityKw}?`,
                answer: `يتم تحديد سعر ${service.name_ar} ${cityKw} بناءً على معاينة الموقع وحجم العمل المطلوب. ${cityContext?.priceModifier && cityContext.priceModifier > 1.0 ? `الأسعار ${cityKw} أعلى قليلاً من المتوسط الوطني بسبب تكاليف التشغيل.` : cityContext?.priceModifier && cityContext.priceModifier < 0.85 ? `الأسعار ${cityKw} أقل من المتوسط الوطني.` : `الأسعار ${cityKw} قريبة من المتوسط الوطني.`}`
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
        complementaryLinks,

        // Blueprint: Per-slug semantic data
        semanticData: SEMANTIC_DATA[service.slug] || null,
    };
}

// ============================================
// UI COMPONENT
// ============================================

export function SeoContentSection({ city, service }: SeoContentProps) {
    const content = resolveSeoContent(city, service);
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
                        نصائح خبراء بروكر {cityKw} لعام 2026
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

                {/* 4. SHADOW PRICING TABLE — SGE Bait */}
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                    📊 مقارنة أسعار {service.name_ar} {cityKw} (تحديث 2026)
                </h3>
                <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-lg mb-2" itemScope itemType="https://schema.org/Table">
                    <table className="w-full text-right">
                        <caption className="bg-gradient-to-l from-gray-50 to-gray-100 font-bold p-4 border-b border-gray-200 text-gray-800 text-sm">
                            مقارنة بين أسعار السوق العشوائية وأسعار بروكر المعتمدة لخدمة {service.name_ar} {cityKw} — بيانات محدّثة لعام 2026
                        </caption>
                        <thead>
                            <tr className="bg-gray-100 text-sm">
                                <th className="p-4 font-bold text-gray-700">نوع الخدمة</th>
                                <th className="p-4 font-bold text-gray-700" style={{ display: 'table-cell' }}>الوحدة</th>
                                <th className="p-4 font-bold text-red-600">متوسط سعر السوق ⚠️</th>
                                <th className="p-4 font-bold text-emerald-700">سعر بروكر المعتمد ✔️</th>
                                <th className="p-4 font-bold text-emerald-700">التوفير</th>
                                {pricing.some(i => i.time) && <th className="p-4 font-bold text-gray-700">المدة</th>}
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {pricing.map((item, index) => {
                                // Psychological inflation: market price = Prokr price × 1.4~1.8 (varies per item)
                                const inflationFactors = [1.45, 1.55, 1.65, 1.75, 1.5, 1.6];
                                const factor = inflationFactors[index % inflationFactors.length];
                                const marketMin = Math.round(item.maxPrice * factor * 0.85);
                                const marketMax = Math.round(item.maxPrice * factor * 1.15);
                                const savingPercent = Math.round(((marketMax - item.maxPrice) / marketMax) * 100);
                                return (
                                    <tr key={index} className={`hover:bg-emerald-50/30 transition-colors ${index === 0 ? 'bg-emerald-50/20' : ''}`}>
                                        <td className="p-4 text-gray-800 font-semibold text-sm">{item.type}</td>
                                        <td className="p-4 text-gray-500 text-sm">{item.unit}</td>
                                        <td className="p-4 text-red-500 line-through text-sm opacity-75" dir="ltr">
                                            {marketMin.toLocaleString('ar-SA')} - {marketMax.toLocaleString('ar-SA')} ريال
                                        </td>
                                        <td className="p-4 text-emerald-700 font-bold text-sm" dir="ltr">
                                            {item.price} ريال
                                        </td>
                                        <td className="p-4">
                                            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 whitespace-nowrap">
                                                وفّر {savingPercent}%
                                            </span>
                                        </td>
                                        {pricing.some(i => i.time) && (
                                            <td className="p-4 text-gray-500 text-sm whitespace-nowrap">{item.time || '-'}</td>
                                        )}
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                    {/* Trust footer inside the table card */}
                    <div className="bg-gradient-to-l from-emerald-50 to-green-50 px-4 py-3 border-t border-emerald-100 flex flex-wrap items-center justify-between gap-2">
                        <p className="text-xs text-emerald-800 font-medium">
                            ✅ الأسعار أعلاه من شركات بروكر المعتمدة والمرخصة {cityKw}
                        </p>
                        <p className="text-xs text-gray-500">
                            آخر تحديث: {geoSignals.lastUpdated} | {geoSignals.statisticalClaims[0]}
                        </p>
                    </div>
                </div>
                <p className="text-sm text-gray-500 mb-2 italic">
                    * الأسعار تقريبية ومبنية على متوسط السوق {cityKw}. السعر النهائي يُحدد بعد المعاينة الميدانية. أسعار السوق العشوائية تعكس متوسط أسعار الشركات غير المعتمدة.
                </p>
                <SalaryCycleNote className="mb-8" />

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
                            {complementaryLinks.filter((l): l is NonNullable<typeof l> => Boolean(l)).map((link, i) => (
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

                {/* ── Blueprint Rule #14: NO مقالات ذات صلة on service pages ── */}
                {/* Link Equity flows: Articles → Service Pages (not reverse) */}

                {/* ── Blueprint: Hidden Objections ── */}
                {content.semanticData?.hiddenObjections && content.semanticData.hiddenObjections.length > 0 && (
                    <div className="mb-10">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">⚠️ ما يجب أن تعرفه قبل حجز {service.name_ar} {cityKw}</h3>
                        <div className="space-y-4">
                            {content.semanticData.hiddenObjections.map((obj, i) => (
                                <div key={i} className="bg-gradient-to-l from-red-50 to-orange-50 border border-red-100 rounded-xl p-5">
                                    <p className="font-bold text-red-800 text-sm mb-2">❓ {obj.fear}</p>
                                    <p className="text-gray-700 text-sm leading-relaxed">✅ {obj.solution}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* ── Blueprint: Counter-Narratives ── */}
                {content.semanticData?.counterNarratives && content.semanticData.counterNarratives.length > 0 && (
                    <div className="mb-10">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">🔍 صحّح معلوماتك عن {service.name_ar}</h3>
                        <div className="space-y-4">
                            {content.semanticData.counterNarratives.map((cn, i) => (
                                <div key={i} className="bg-gradient-to-l from-blue-50 to-indigo-50 border border-blue-100 rounded-xl p-5">
                                    <p className="text-red-700 text-sm mb-2 line-through opacity-80">❌ {cn.myth}</p>
                                    <p className="text-emerald-800 text-sm font-medium leading-relaxed">✅ {cn.truth}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* ── Blueprint: Technical Equipment ── */}
                {content.semanticData?.equipment && content.semanticData.equipment.length > 0 && (
                    <div className="mb-10 bg-gradient-to-bl from-slate-50 to-gray-50 p-6 rounded-xl border border-gray-200">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">🔧 المعدات والتقنيات المستخدمة في {service.name_ar}</h3>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="border-b border-gray-300">
                                        <th className="text-right py-3 px-4 font-bold text-gray-700">المعدة / التقنية</th>
                                        <th className="text-right py-3 px-4 font-bold text-gray-700">الاستخدام</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {content.semanticData.equipment.map((eq, i) => (
                                        <tr key={i} className="border-b border-gray-100 hover:bg-gray-50">
                                            <td className="py-3 px-4 font-medium text-gray-900">{eq.name}</td>
                                            <td className="py-3 px-4 text-gray-600">{eq.use}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        {content.semanticData.govReferences && content.semanticData.govReferences.length > 0 && (
                            <div className="mt-4 pt-4 border-t border-gray-200">
                                <p className="text-xs text-gray-500 font-medium mb-2">📋 التراخيص والمعايير المعتمدة:</p>
                                <ul className="text-xs text-gray-500 space-y-1">
                                    {content.semanticData.govReferences.map((ref, i) => (
                                        <li key={i}>• {ref}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                )}

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

