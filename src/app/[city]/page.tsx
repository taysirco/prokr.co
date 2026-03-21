import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Home, ChevronLeft, MapPin, Truck, Sparkles, Bug, Droplet, Wrench, Building2, Navigation, Clock, ArrowLeft } from 'lucide-react';
import { getCityBySlug, getServiceImage, CITIES, SERVICES, CATEGORY_NAMES, getServicesByCategory } from '@/lib/seed';
import { getSubRegionsByCity } from '@/lib/sub-regions';
import { generateCityMeta } from '@/lib/content-layers';
import { BreadcrumbJsonLd, ItemListJsonLd, SpeakableWebPageJsonLd, WebPageJsonLd } from '@/components/JsonLd';
import { getCityContext } from '@/lib/city-context';
import { getCityKeyword } from '@/lib/locale-formatting';
import { BLOG_ARTICLES } from '@/lib/blog-data';
import { hasPageOverride } from '@/lib/overrides/registry';
import { isAbsorbedSlug } from '@/lib/services/super-page-groups';
import Footer from '@/components/Footer';
import LocalPresence from '@/components/LocalPresence';
import FraudAlertBanner from '@/components/FraudAlertBanner';
import { NafathTrustShield } from '@/components/NafathTrustShield';
import { LiveAvailabilityBanner } from '@/components/LiveAvailabilityBanner';
import { EmergencyNightBanner } from '@/components/EmergencyNightBanner';
import MarketTimingBadge from '@/components/MarketTimingBadge';
import LeadCaptureCTA from '@/components/LeadCaptureCTA';
import WizardFunnelButton from '@/components/WizardFunnelButton';
import WizardFunnelFAB from '@/components/WizardFunnelFAB';

interface CityPageProps {
    params: Promise<{
        city: string;
    }>;
}

// Revalidate every hour — market timing and availability data change daily
export const revalidate = 3600;

// Generate static params for all cities
export async function generateStaticParams() {
    return CITIES.map(city => ({
        city: city.slug,
    }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: CityPageProps): Promise<Metadata> {
    const resolvedParams = await params;
    const city = getCityBySlug(resolvedParams.city);

    if (!city) {
        return { title: 'صفحة غير موجودة' };
    }

    const cityKw = getCityKeyword(city.name_ar, 'ba');
    const aiContent = generateCityMeta(city);
    const title = aiContent.title;
    const description = `أفضل شركات الخدمات المنزلية ${cityKw} ✔ نقل عفش ✔ تنظيف ✔ مكافحة حشرات ✔ كشف تسربات ✔ عزل. قارن أسعار الشركات المعتمدة ${cityKw} عبر بروكر.`;

    return {
        title,
        description,
        keywords: [
            `خدمات منزلية ${cityKw}`,
            `شركات خدمات ${cityKw}`,
            `أفضل شركات ${cityKw}`,
            `دليل خدمات ${cityKw}`,
            `شركة نقل عفش ${cityKw}`,
            `شركة تنظيف ${cityKw}`,
            `شركة مكافحة حشرات ${cityKw}`,
            `شركة كشف تسربات ${cityKw}`,
            `شركة عزل ${cityKw}`,
            `خدمات ${city.name_ar} 2026`,
        ],
        openGraph: {
            title,
            description,
            locale: 'ar_SA',
            type: 'website',
            siteName: 'بروكر',
            url: `https://prokr.co/${resolvedParams.city}`,
            images: [{
                url: `https://prokr.co/${resolvedParams.city}/opengraph-image`,
                width: 1200,
                height: 630,
                alt: `دليل الخدمات المنزلية ${cityKw} - بروكر`,
            }],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
        },
        alternates: {
            canonical: `https://prokr.co/${resolvedParams.city}`,
        },
    };
}

// Category icons mapping
const categoryIcons: Record<string, React.ReactNode> = {
    'moving': <Truck className="w-6 h-6" />,
    'cleaning': <Sparkles className="w-6 h-6" />,
    'pest-control': <Bug className="w-6 h-6" />,
    'leak-detection': <Droplet className="w-6 h-6" />,
    'insulation': <Building2 className="w-6 h-6" />,
    'sewage': <Wrench className="w-6 h-6" />,
};

export default async function CityPage({ params }: CityPageProps) {
    const resolvedParams = await params;
    const city = getCityBySlug(resolvedParams.city);

    if (!city) {
        notFound();
    }

    const servicesByCategory = getServicesByCategory();
    const subRegions = getSubRegionsByCity(resolvedParams.city);
    const aiContent = generateCityMeta(city);
    const cityContext = getCityContext(city.slug);
    const cityKw = getCityKeyword(city.name_ar, 'ba');


    // Breadcrumb items
    const breadcrumbs = [
        { name: 'الرئيسية', url: 'https://prokr.co' },
        { name: city.name_ar, url: `https://prokr.co/${city.slug}` },
    ];

    return (
        <>
            {/* JSON-LD Schema - City Services List */}
            <BreadcrumbJsonLd items={breadcrumbs} />
            <SpeakableWebPageJsonLd
                title={`خدمات ${city.name_ar}`}
                description={`دليل شامل لأفضل شركات الخدمات ${cityKw}`}
                url={`https://prokr.co/${city.slug}`}
                speakableSelectors={['h1', '.city-seo-intro']}
                about={{ name: city.name_ar, type: 'City' }}
                mentions={[{ name: 'المملكة العربية السعودية', type: 'Country' }]}
            />
            <ItemListJsonLd
                type="services"
                listName={`خدمات ${city.name_ar}`}
                description={`قائمة الخدمات المتاحة ${cityKw}`}
                items={SERVICES.filter(s => hasPageOverride(city.slug, s.slug) && !isAbsorbedSlug(s.slug)).map(s => ({
                    name: s.name_ar,
                    url: `https://prokr.co/${city.slug}/${s.slug}`
                }))}
            />
            <WebPageJsonLd
                title={`خدمات ${city.name_ar}`}
                description={`دليل شامل لأفضل شركات الخدمات المعتمدة ${cityKw} - نقل عفش، تنظيف، مكافحة حشرات وأكثر`}
                url={`https://prokr.co/${city.slug}`}
                breadcrumbs={breadcrumbs}
            />

            <main className="min-h-screen bg-gray-50">
                {/* 🚨 Emergency Night Banner (12AM-6AM only) */}
                <EmergencyNightBanner
                    cityNameAr={city.name_ar}
                    serviceNameAr="خدمات منزلية"
                />

                {/* Hero Section */}
                <section className="relative bg-gradient-to-bl from-emerald-600 via-emerald-700 to-emerald-900 text-white overflow-hidden">
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute inset-0" style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                        }}></div>
                    </div>

                    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
                        {/* Breadcrumbs */}
                        <nav className="flex items-center gap-2 text-emerald-100 text-sm mb-6">
                            <Link href="/" className="hover:text-white transition-colors flex items-center gap-1">
                                <Home className="w-4 h-4" />
                                الرئيسية
                            </Link>
                            <ChevronLeft className="w-4 h-4" />
                            <span className="text-white font-medium">{city.name_ar}</span>
                        </nav>

                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
                                <MapPin className="w-8 h-8" />
                            </div>
                            <div>
                                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                                    {aiContent.h1}
                                </h1>
                                <p className="text-emerald-100 mt-1">{city.name_en}</p>
                            </div>
                        </div>

                        {/* 💰 Market Timing Badge — عروض الشهر */}
                        <div className="mt-3">
                            <MarketTimingBadge compact />
                        </div>

                        <p className="text-lg text-emerald-100 max-w-2xl mt-4">
                            اكتشف أفضل شركات الخدمات المعتمدة في {city.name_ar}.
                            نقل عفش، تنظيف، مكافحة حشرات، كشف تسربات والمزيد.
                        </p>
                    </div>
                </section>

                {/* Live Availability Banner */}
                <LiveAvailabilityBanner
                    cityNameAr={cityKw}
                    serviceNameAr="خدمات منزلية"
                    totalCompanies={SERVICES.filter(s => hasPageOverride(city.slug, s.slug) && !isAbsorbedSlug(s.slug)).length}
                    neighborhoods={cityContext?.neighborhoods.map(n => n.name_ar) || []}
                />

                {/* Services by Category */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    {Object.entries(servicesByCategory).map(([category, services]) => {
                        const validServices = services.filter(service => hasPageOverride(city.slug, service.slug) && !isAbsorbedSlug(service.slug));
                        if (validServices.length === 0) return null;

                        return (
                            <div key={category} className="mb-12">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-600">
                                        {categoryIcons[category] || <Wrench className="w-5 h-5" />}
                                    </div>
                                    <h2 className="text-xl font-bold text-gray-900">
                                        {CATEGORY_NAMES[category] || category} في {city.name_ar}
                                    </h2>
                                </div>

                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                                    {validServices.map(service => (
                                        <Link
                                            key={service.slug}
                                            href={`/${city.slug}/${service.slug}`}
                                            className="group relative bg-white rounded-xl border border-gray-200 hover:border-emerald-300 hover:shadow-lg transition-all overflow-hidden"
                                        >
                                            {/* Image */}
                                            <div className="relative aspect-[4/3] bg-gray-100">
                                                <Image
                                                    src={getServiceImage(service.slug)}
                                                    alt={`شركة ${service.name_ar} ${cityKw} - أفضل الأسعار والشركات المعتمدة من بروكر`}
                                                    fill
                                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                            </div>

                                            {/* Title */}
                                            <div className="absolute bottom-0 left-0 right-0 p-3">
                                                <h3 className="font-semibold text-white text-sm">
                                                    {service.name_ar}
                                                </h3>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )
                    })}
                </section>

                {/* Sub-Regions / Neighborhoods */}
                {subRegions.length > 0 && (
                    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-gray-200">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                                <Navigation className="w-5 h-5" />
                            </div>
                            <h2 className="text-xl font-bold text-gray-900">
                                أحياء ومناطق {city.name_ar}
                            </h2>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                            {subRegions.map(subRegion => (
                                <Link
                                    key={subRegion.slug}
                                    href={`/regions/${city.slug}/${subRegion.slug}`}
                                    className="group bg-white rounded-xl border border-gray-200 p-4 hover:border-blue-300 hover:shadow-lg transition-all"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 group-hover:bg-blue-100 transition-colors">
                                            <MapPin className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                                                {subRegion.name_ar}
                                            </h3>
                                            <p className="text-xs text-gray-500">
                                                {subRegion.services.length} خدمات
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </section>
                )}

                {/* SEO Content Section */}
                <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-gray-200">
                    <article className="prose prose-lg prose-emerald max-w-none">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            دليل الخدمات الشامل في {city.name_ar} (2026)
                        </h2>
                        <div className="city-seo-intro bg-emerald-50 p-6 rounded-xl border-r-4 border-emerald-500 mb-6">
                            <p className="text-gray-700 leading-relaxed">
                                {cityContext
                                    ? `تعد ${city.name_ar} من أهم المدن السعودية التي تتميز بـ${cityContext.urbanTraits.slice(0, 2).join(' و')}. يقدم بروكر دليلاً شاملاً لأفضل الخدمات المتوفرة في جميع أحياء ${city.name_ar}، من نقل العفش إلى التنظيف ومكافحة الحشرات وكشف التسربات والعزل. جميع الشركات مرخصة ومعتمدة وفقاً لاشتراطات وزارة التجارة السعودية.`
                                    : `يقدم بروكر دليلاً شاملاً لأفضل شركات الخدمات ${cityKw}. اكتشف أهم الخدمات المتوفرة مع شركات معتمدة وأأسعار تنافسية.`
                                }
                            </p>
                        </div>

                        {/* City Challenges */}
                        {cityContext && cityContext.challenges.length > 0 && (
                            <div className="mb-8">
                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                    تحديات الخدمات في {city.name_ar}
                                </h3>
                                <ul className="space-y-2 text-gray-700">
                                    {cityContext.challenges.map((challenge, idx) => (
                                        <li key={idx} className="flex items-start gap-2">
                                            <span className="text-amber-500 mt-1">&#9679;</span>
                                            <span>{challenge}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="text-gray-600 mt-3">
                                    شركات بروكر المعتمدة في {city.name_ar} مدربة على التعامل مع هذه التحديات بكفاءة واحترافية.
                                </p>
                            </div>
                        )}

                        {/* Neighborhoods Coverage */}
                        {cityContext && cityContext.neighborhoods.length > 0 && (
                            <div className="mb-8">
                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                    الأحياء التي نغطيها في {city.name_ar}
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {cityContext.neighborhoods.map((n, idx) => (
                                        <span key={idx} className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium">
                                            {n.name_ar}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* City FAQ with Schema Markup */}
                        <div className="mb-8" itemScope itemType="https://schema.org/FAQPage">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">
                                أسئلة شائعة عن الخدمات في {city.name_ar}
                            </h3>
                            <div className="space-y-4">
                                <div className="bg-white border border-gray-200 rounded-xl p-4" itemScope itemType="https://schema.org/Question">
                                    <h4 className="font-bold text-gray-800 mb-2" itemProp="name">ما هي الخدمات المتوفرة في {city.name_ar}؟</h4>
                                    <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                                        <p className="text-gray-600" itemProp="text">يوفر بروكر أهم الخدمات المنزلية والتجارية المتنوعة في {city.name_ar} تشمل نقل العفش، التنظيف، مكافحة الحشرات، كشف التسربات، العزل، وخدمات الصرف الصحي. جميع الشركات مرخصة ومعتمدة.</p>
                                    </div>
                                </div>
                                <div className="bg-white border border-gray-200 rounded-xl p-4" itemScope itemType="https://schema.org/Question">
                                    <h4 className="font-bold text-gray-800 mb-2" itemProp="name">هل الشركات في {city.name_ar} معتمدة؟</h4>
                                    <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                                        <p className="text-gray-600" itemProp="text">نعم، جميع الشركات المعروضة على بروكر في {city.name_ar} تم التحقق من تراخيصها وجودة خدماتها وفقاً لاشتراطات وزارة التجارة.</p>
                                    </div>
                                </div>
                                <div className="bg-white border border-gray-200 rounded-xl p-4" itemScope itemType="https://schema.org/Question">
                                    <h4 className="font-bold text-gray-800 mb-2" itemProp="name">كيف أحجز خدمة في {city.name_ar}؟</h4>
                                    <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                                        <p className="text-gray-600" itemProp="text">اختر الخدمة المطلوبة، تصفح الشركات المتاحة في {city.name_ar}، قارن بين العروض، وتواصل مباشرة مع الشركة المختارة عبر الهاتف أو واتساب.</p>
                                    </div>
                                </div>
                                {cityContext && (
                                    <div className="bg-white border border-gray-200 rounded-xl p-4" itemScope itemType="https://schema.org/Question">
                                        <h4 className="font-bold text-gray-800 mb-2" itemProp="name">ما هي مدة الاستجابة في {city.name_ar}؟</h4>
                                        <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                                            <p className="text-gray-600" itemProp="text">زمن الاستجابة في {city.name_ar}: {cityContext.responseTime}. {cityContext.nearbyCities.length > 0 && `نغطي أيضاً المدن القريبة: ${cityContext.nearbyCities.join('، ')}.`}</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </article>
                </section>

                {/* Service Request Form */}
                <LeadCaptureCTA cityName={city.name_ar} serviceName="خدمات منزلية" serviceSlug="cleaning" citySlug={resolvedParams.city} />

                {/* ⚡ Wizard Funnel CTA — Section 11.3 */}
                <div data-wizard-cta>
                    <WizardFunnelButton
                        placement="inline"
                        citySlug={resolvedParams.city}
                        cityName={city.name_ar}
                    />
                </div>

                {/* 🎯 Wizard FAB — Smart Floating Trigger */}
                <WizardFunnelFAB
                    citySlug={resolvedParams.city}
                    cityName={city.name_ar}
                />

                {/* Related Blog Articles */}
                <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <h2 className="text-xl font-bold text-gray-900 mb-6">مقالات وأدلة مفيدة</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {BLOG_ARTICLES.slice(0, 3).map(article => (
                            <Link key={article.slug} href={`/blog/${article.slug}`} className="group bg-white border border-gray-200 rounded-xl p-4 hover:border-emerald-300 hover:shadow-md transition-all">
                                <span className="text-xs text-emerald-600 font-medium">{article.categoryLabel}</span>
                                <h3 className="font-bold text-gray-900 text-sm mt-1 group-hover:text-emerald-700 transition-colors line-clamp-2">{article.title}</h3>
                                <div className="flex items-center gap-1 mt-2 text-xs text-gray-400">
                                    <Clock className="w-3 h-3" />
                                    <span>{article.readTime} دقائق</span>
                                    <ArrowLeft className="w-3 h-3 mr-auto text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>

                {/* Other Cities */}
                <section className="bg-gray-100 py-12">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-xl font-bold text-gray-900 mb-6">خدمات في مدن أخرى بالسعودية</h2>
                        <div className="flex flex-wrap gap-3">
                            {CITIES.filter(c => c.slug !== city.slug).map(otherCity => (
                                <Link
                                    key={otherCity.slug}
                                    href={`/${otherCity.slug}`}
                                    className="px-4 py-2 bg-white border border-gray-200 rounded-lg hover:border-emerald-300 hover:shadow-md transition-all text-gray-700 hover:text-emerald-700"
                                >
                                    {otherCity.name_ar}
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 🛡️ Consumer Protection Alert — Consumer Protection Banner */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <FraudAlertBanner serviceName="خدمات منزلية" serviceSlug="cleaning" cityName={city.name_ar} />
                </section>

                {/* 🛡️ Nafath Trust Shield — Government Identity Verification */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
                    <NafathTrustShield serviceNameAr="خدمات منزلية" cityNameAr={city.name_ar} />
                </section>

                {/* Local Service Area — City-Level Landmark Signal */}
                <LocalPresence citySlug={resolvedParams.city} serviceSlug="city-hub" serviceName="خدمات منزلية" serviceCategory="cleaning" />

                <Footer currentCity={resolvedParams.city} />
            </main>
        </>
    );
}
