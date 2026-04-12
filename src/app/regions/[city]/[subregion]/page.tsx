import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Home, ChevronLeft, MapPin, Truck, Sparkles, Bug, Droplet, Wrench, Building2 } from 'lucide-react';
import { getCityBySlug, getServiceBySlug, getServiceImage, CATEGORY_NAMES } from '@/lib/seed';
import { getSubRegion, getSubRegionsByCity, SUB_REGIONS } from '@/lib/sub-regions';
import { BreadcrumbJsonLd, ItemListJsonLd, WebPageJsonLd, ServiceAreaJsonLd, SpeakableWebPageJsonLd } from '@/components/JsonLd';
import { getCityContext } from '@/lib/city-context';
import { getCityKeyword } from '@/lib/locale-formatting';
import { CitableSummary } from '@/components/seo/CitableSummary';
import { hasPageOverride } from '@/lib/overrides/registry';
import { isAbsorbedSlug } from '@/lib/services/super-page-groups';
import Footer from '@/components/Footer';
import FraudAlertBanner from '@/components/FraudAlertBanner';
import { NafathVerifyBanner } from '@/components/NafathVerifyBanner';
import MarketTimingBadge from '@/components/MarketTimingBadge';
import LocalPresence from '@/components/LocalPresence';
import { LiveAvailabilityBanner } from '@/components/LiveAvailabilityBanner';
import { EmergencyNightBanner } from '@/components/EmergencyNightBanner';
import SocialShareWidget from '@/components/SocialShareWidget';
import { VisionAiWatermark } from '@/components/VisionAiWatermark';
import SourceOrderLayout from '@/components/SourceOrderLayout';
import FaqAccordion from '@/components/FaqAccordion';

interface SubRegionPageProps {
    params: Promise<{
        city: string;
        subregion: string;
    }>;
}

// Generate static params
export async function generateStaticParams() {
    const params: { city: string; subregion: string }[] = [];

    for (const [citySlug, subRegions] of Object.entries(SUB_REGIONS)) {
        for (const subRegion of subRegions) {
            params.push({
                city: citySlug,
                subregion: subRegion.slug,
            });
        }
    }

    return params;
}

// Generate metadata
export async function generateMetadata({ params }: SubRegionPageProps): Promise<Metadata> {
    const resolvedParams = await params;
    const city = getCityBySlug(resolvedParams.city);
    const subRegion = getSubRegion(resolvedParams.city, resolvedParams.subregion);

    if (!city || !subRegion) {
        return { title: 'صفحة غير موجودة' };
    }

    const title = `خدمات ${subRegion.name_ar}، ${city.name_ar} | شركات معتمدة - بروكر`;
    const description = `اكتشف أفضل شركات الخدمات في ${subRegion.name_ar}، ${city.name_ar}. نقل عفش، تنظيف منازل، مكافحة حشرات، كشف تسربات وأكثر. شركات معتمدة بأسعار تنافسية.`;

    return {
        title,
        description,
        keywords: [
            `خدمات ${subRegion.name_ar}`,
            `شركات ${subRegion.name_ar}`,
            `نقل عفش ${subRegion.name_ar}`,
            `تنظيف ${subRegion.name_ar}`,
            `مكافحة حشرات ${subRegion.name_ar}`,
            `خدمات ${subRegion.name_ar} ${city.name_ar}`,
        ],
        openGraph: {
            title,
            description,
            locale: 'ar_SA',
            type: 'website',
            siteName: 'بروكر',
            url: `https://prokr.co/regions/${resolvedParams.city}/${resolvedParams.subregion}`,
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
        },
        alternates: {
            canonical: `https://prokr.co/regions/${resolvedParams.city}/${resolvedParams.subregion}`,
        },
    };
}

const categoryIcons: Record<string, React.ReactNode> = {
    'moving': <Truck className="w-6 h-6" />,
    'cleaning': <Sparkles className="w-6 h-6" />,
    'pest-control': <Bug className="w-6 h-6" />,
    'leak-detection': <Droplet className="w-6 h-6" />,
    'insulation': <Building2 className="w-6 h-6" />,
    'sewage': <Wrench className="w-6 h-6" />,
};

export default async function SubRegionPage({ params }: SubRegionPageProps) {
    const resolvedParams = await params;
    const city = getCityBySlug(resolvedParams.city);
    const subRegion = getSubRegion(resolvedParams.city, resolvedParams.subregion);

    if (!city || !subRegion) {
        notFound();
    }

    const availableServices = subRegion.services
        .map(slug => getServiceBySlug(slug))
        .filter(Boolean)
        .filter(service => service && hasPageOverride(city.slug, service.slug) && !isAbsorbedSlug(service.slug));

    const servicesByCategory = availableServices.reduce((acc, service) => {
        if (!service) return acc;
        if (!acc[service.category]) {
            acc[service.category] = [];
        }
        acc[service.category].push(service);
        return acc;
    }, {} as Record<string, typeof availableServices>);

    const otherSubRegions = getSubRegionsByCity(resolvedParams.city)
        .filter(sr => sr.slug !== subRegion.slug);

    const cityContext = getCityContext(resolvedParams.city);

    const breadcrumbs = [
        { name: 'الرئيسية', url: 'https://prokr.co' },
        { name: city.name_ar, url: `https://prokr.co/${city.slug}` },
        { name: subRegion.name_ar, url: `https://prokr.co/regions/${city.slug}/${subRegion.slug}` },
    ];

    // SubRegion FAQ items
    const regionFaqItems = [
        {
            question: `ما الخدمات المتوفرة في ${subRegion.name_ar}؟`,
            answer: `تتوفر في ${subRegion.name_ar} ${availableServices.length} خدمة تشمل ${availableServices.slice(0, 5).map(s => s?.name_ar).filter(Boolean).join('، ')}. جميع الشركات معتمدة ومرخصة.`
        },
        {
            question: `كيف أختار شركة خدمات في ${subRegion.name_ar}؟`,
            answer: `قارن بين الشركات المتاحة في ${subRegion.name_ar} من حيث التقييمات والأسعار والضمان. ننصح بطلب عرض سعر من 3 شركات على الأقل قبل الاختيار.`
        },
        {
            question: `هل تغطي الشركات جميع أحياء ${subRegion.name_ar}؟`,
            answer: `نعم، الشركات المسجلة لدينا تغطي كافة أحياء ${subRegion.name_ar} و${city.name_ar}. فرق العمل موزعة لتغطية المنطقة بأسرع وقت ممكن.`
        },
        {
            question: `كم تكلفة الخدمات في ${subRegion.name_ar}؟`,
            answer: `تختلف الأسعار حسب نوع الخدمة وحجم العمل. يمكنك مقارنة الأسعار بين الشركات المتاحة في ${subRegion.name_ar} عبر بروكر والحصول على عروض أسعار مجانية.`
        },
    ];

    return (
        <>
            {/* JSON-LD Schema - Subregion Services List */}
            <BreadcrumbJsonLd items={breadcrumbs} />
            <WebPageJsonLd
                title={`خدمات ${subRegion.name_ar}`}
                description={`خدمات ${subRegion.name_ar} ${getCityKeyword(city.name_ar, 'ba')} - ${availableServices.length} خدمة متوفرة`}
                url={`https://prokr.co/regions/${city.slug}/${subRegion.slug}`}
                breadcrumbs={breadcrumbs}
            />
            <ItemListJsonLd
                type="services"
                listName={`خدمات ${subRegion.name_ar}`}
                description={`قائمة الخدمات المتوفرة في ${subRegion.name_ar} - ${city.name_ar}`}
                items={availableServices.filter(Boolean).map(service => ({
                    name: service!.name_ar,
                    url: `https://prokr.co/${city.slug}/${service!.slug}`
                }))}
            />
            {/* ServiceArea Schema with GeoCoordinates for Local SEO */}
            {cityContext?.coordinates && availableServices[0] && (
                <ServiceAreaJsonLd
                    service={availableServices[0]!}
                    city={city}
                    coordinates={cityContext.coordinates}
                    neighborhoods={[subRegion.name_ar]}
                />
            )}
            {/* Speakable — Tells AI which paragraph to cite on subregion pages */}
            <SpeakableWebPageJsonLd
                title={`خدمات ${subRegion.name_ar}، ${city.name_ar}`}
                description={`خدمات منزلية موثوقة في ${subRegion.name_ar} ${getCityKeyword(city.name_ar, 'ba')}`}
                url={`https://prokr.co/regions/${city.slug}/${subRegion.slug}`}
                speakableSelectors={['.citable-summary']}
                speakableText={`خدمات منزلية في ${subRegion.name_ar}، ${city.name_ar} — يتوفر ${availableServices.length} خدمة منزلية من شركات معتمدة عبر دليل بروكر.`}
            />
            {/* FAQPage Schema — subregion */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": regionFaqItems.map(faq => ({
                        "@type": "Question",
                        "name": faq.question,
                        "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
                    }))
                }) }}
            />

            <main className="min-h-screen bg-gray-50">
                {/* 🚨 Emergency Night Banner (12AM-6AM only) */}
                <EmergencyNightBanner
                    cityNameAr={`${subRegion.name_ar}، ${city.name_ar}`}
                    serviceNameAr="خدمات منزلية"
                />

                {/* Hero */}
                <section className="hero-gradient relative text-white overflow-hidden" data-hero-gradient style={{ background: 'linear-gradient(to bottom left, #0369a1, #0c4a6e, #082f49)' }}>
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute inset-0" style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                        }}></div>
                    </div>

                    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
                        <nav className="flex items-center gap-2 text-sky-100 text-sm mb-6">
                            <Link href="/" className="hover:text-white transition-colors flex items-center gap-1">
                                <Home className="w-4 h-4" />
                                الرئيسية
                            </Link>
                            <ChevronLeft className="w-4 h-4" />
                            <Link href={`/${city.slug}`} className="hover:text-white transition-colors">
                                {city.name_ar}
                            </Link>
                            <ChevronLeft className="w-4 h-4" />
                            <span className="text-white font-medium">{subRegion.name_ar}</span>
                        </nav>

                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
                                <MapPin className="w-8 h-8" />
                            </div>
                            <div>
                                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                                    خدمات {subRegion.name_ar}
                                </h1>
                                <p className="text-sky-100 mt-1">{city.name_ar} - {subRegion.name_en}</p>
                            </div>
                        </div>

                        <p className="text-lg text-sky-100 max-w-2xl mt-4">
                            {availableServices.length} خدمة متوفرة في {subRegion.name_ar} من شركات معتمدة.
                        </p>

                        {/* 💰 Market Timing Badge — عروض الشهر */}
                        <div className="mt-3">
                            <MarketTimingBadge compact />
                        </div>
                    </div>
                </section>

                {/* Live Availability Banner */}
                <LiveAvailabilityBanner
                    cityNameAr={`${subRegion.name_ar}، ${city.name_ar}`}
                    serviceNameAr="خدمات منزلية"
                    totalCompanies={availableServices.length}
                    neighborhoods={[subRegion.name_ar, ...(cityContext?.neighborhoods.map(n => n.name_ar).slice(0, 4) || [])]}
                />

                {/* AI-Citable Summary — SubRegion Page */}
                <CitableSummary
                    serviceName="خدمات منزلية"
                    locationName={`${subRegion.name_ar}، ${city.name_ar}`}
                    definition={`خدمات صيانة وتشغيل منزلية شاملة تقدمها شركات مرخصة في منطقة ${subRegion.name_ar}`}
                    statText={`يتوفر ${availableServices.length} خدمة من شركات معتمدة بسجل تجاري سارٍ`}
                />

                {/* 🔍 Content-first layout
                    Source order: SEO content FIRST (Google reads this first)
                    Visual order: Service listings FIRST (user sees this first via column-reverse) */}
                <SourceOrderLayout
                    pageContent={
                        <>
                            {/* SEO Content Section */}
                            <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                                <article className="prose prose-lg max-w-none">
                                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                        دليل الخدمات في {subRegion.name_ar}، {city.name_ar}
                                    </h2>
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        يوفر بروكر في منطقة {subRegion.name_ar} بـ{city.name_ar} مجموعة شاملة من الخدمات المنزلية والتجارية تشمل {availableServices.slice(0, 4).map(s => s?.name_ar).filter(Boolean).join('، ')} والمزيد.
                                        جميع الشركات المدرجة لدينا معتمدة ومرخصة، وتقدم ضماناً على خدماتها مع أسعار تنافسية تناسب سكان {subRegion.name_ar}.
                                    </p>

                                    <h3 className="text-xl font-bold text-gray-900 mb-3">الأسئلة الشائعة عن خدمات {subRegion.name_ar}</h3>
                                    <FaqAccordion
                                        items={regionFaqItems}
                                        cityName={`${subRegion.name_ar}، ${city.name_ar}`}
                                        serviceName="خدمات منزلية"
                                    />
                                </article>
                            </section>

                            {/* Other Sub-Regions */}
                            {otherSubRegions.length > 0 && (
                                <section className="bg-gray-100 py-12">
                                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                        <h2 className="text-xl font-bold text-gray-900 mb-6">خدمات في مناطق أخرى بـ{city.name_ar}</h2>
                                        <div className="flex flex-wrap gap-3">
                                            {otherSubRegions.map(sr => (
                                                <Link
                                                    key={sr.slug}
                                                    href={`/regions/${city.slug}/${sr.slug}`}
                                                    className="px-4 py-2 bg-white border border-gray-200 rounded-lg hover:border-sky-300 hover:shadow-md transition-all"
                                                >
                                                    {sr.name_ar}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </section>
                            )}

                            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                                <Link href={`/${city.slug}`} className="inline-flex items-center gap-2 text-sky-600 hover:text-sky-700">
                                    <ChevronLeft className="w-4 h-4 rotate-180" />
                                    جميع خدمات {city.name_ar}
                                </Link>
                            </section>

                            {/* 🛡️ Consumer Protection Alert */}
                            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                                <FraudAlertBanner serviceName="خدمات منزلية" serviceSlug="cleaning" cityName={`${subRegion.name_ar}، ${city.name_ar}`} />
                            </section>

                            {/* 🛡️ Nafath Trust Shield */}
                            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
                                <NafathVerifyBanner serviceNameAr="خدمات منزلية" cityNameAr={`${subRegion.name_ar}، ${city.name_ar}`} />
                            </section>

                            {/* Local Service Area */}
                            <LocalPresence citySlug={resolvedParams.city} serviceSlug="city-hub" serviceName="خدمات منزلية" serviceCategory="cleaning" />
                        </>
                    }
                >
                    {/* Services */}
                    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                        {Object.entries(servicesByCategory).map(([category, services]) => (
                            <div key={category} className="mb-12">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center text-sky-600">
                                        {categoryIcons[category] || <Wrench className="w-5 h-5" />}
                                    </div>
                                    <h2 className="text-xl font-bold text-gray-900">
                                        {CATEGORY_NAMES[category] || category} في {subRegion.name_ar}
                                    </h2>
                                </div>

                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                                    {services.map(service => service && (
                                        <Link
                                            key={service.slug}
                                            href={`/${city.slug}/${service.slug}`}
                                            className="group relative bg-white rounded-xl border border-gray-200 hover:border-sky-300 hover:shadow-lg transition-all overflow-hidden"
                                        >
                                            <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
                                                <Image
                                                    src={getServiceImage(service.slug)}
                                                    alt={`شركة ${service.name_ar} في ${subRegion.name_ar}، ${city.name_ar} - أفضل الأسعار من بروكر | تم التحقق عبر نفاذ SBC`}
                                                    fill
                                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                                <VisionAiWatermark position="top-right" size="xs" />
                                            </div>
                                            <div className="absolute bottom-0 left-0 right-0 p-3">
                                                <h3 className="font-semibold text-white text-sm">
                                                    {service.name_ar} {subRegion.name_ar}
                                                </h3>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </section>

                    {/* 📱 Dark Social Share — SubRegion Page */}
                    <SocialShareWidget
                        variant="service"
                        serviceName="خدمات منزلية"
                        cityName={`${subRegion.name_ar}، ${city.name_ar}`}
                        citySlug={resolvedParams.city}
                        serviceSlug={`region-${resolvedParams.subregion}`}
                        totalCompanies={availableServices.length}
                    />
                </SourceOrderLayout>

                <Footer currentCity={resolvedParams.city} />
            </main>
        </>
    );
}
