import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Home, ChevronLeft, Star, Phone, MessageCircle, BadgeCheck, MapPin, Clock, Shield } from 'lucide-react';
import { getCityBySlug, getServiceBySlug, getUniquePageImages, CITIES, SERVICES } from '@/lib/seed';
import { getAdvertisersBySilo } from '@/lib/db-actions';
import { ServiceJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { SeoContentSection, FaqJsonLd, ServiceOfferJsonLd, generateSeoContent } from '@/lib/seo-content';
import { getCityContext } from '@/lib/city-context';
import Footer from '@/components/Footer';
import type { Advertiser } from '@/types';

// Disable static generation, use ISR instead
// Pages will be generated on first request and cached for 60 seconds
export const dynamic = 'force-dynamic';
export const revalidate = 60;

interface SiloPageProps {
    params: Promise<{
        city: string;
        service: string;
    }>;
}

// Generate metadata for SEO
export async function generateMetadata({ params }: SiloPageProps): Promise<Metadata> {
    const resolvedParams = await params;
    const city = getCityBySlug(resolvedParams.city);
    const service = getServiceBySlug(resolvedParams.service);

    if (!city || !service) {
        return { title: 'صفحة غير موجودة' };
    }

    // Get city context for enhanced metadata
    const cityContext = getCityContext(city.slug);
    const priceModifier = cityContext?.priceModifier || 1.0;
    const baseMinPrice = 300; // Base starting price
    const adjustedMinPrice = Math.round(baseMinPrice * priceModifier);
    const neighborhoods = cityContext?.neighborhoods.slice(0, 3).map(n => n.name_ar).join(' و') || '';

    // Enhanced meta title with numbers and year for higher CTR
    const title = `أفضل 15 شركة ${service.name_ar} في ${city.name_ar} | أسعار 2026 وضمان شامل - بروكر`;

    // Enhanced description answering the user's question
    const description = `هل تبحث عن ${service.name_ar} في ${city.name_ar}؟ قائمة بأفضل 15 شركة موثوقة مع أسعار تبدأ من ${adjustedMinPrice} ريال. خدمة احترافية مع ضمان.${neighborhoods ? ` نغطي ${neighborhoods}.` : ''}`;

    return {
        title,
        description,
        keywords: [
            `${service.name_ar} ${city.name_ar}`,
            `شركة ${service.name_ar}`,
            `${service.name_ar} رخيص`,
            `أفضل ${service.name_ar}`,
            city.name_ar,
        ],
        openGraph: {
            title,
            description,
            locale: 'ar_SA',
            type: 'website',
        },
        alternates: {
            canonical: `https://prokr.co/${resolvedParams.city}/${resolvedParams.service}`,
        },
    };
}

export default async function SiloPage({ params }: SiloPageProps) {
    const resolvedParams = await params;
    const city = getCityBySlug(resolvedParams.city);
    const service = getServiceBySlug(resolvedParams.service);

    // Validate city and service exist
    if (!city || !service) {
        notFound();
    }

    // Get advertisers from Firestore (real data) with error handling
    let premium: Advertiser[] = [];
    let standard: Advertiser[] = [];

    try {
        const result = await getAdvertisersBySilo(resolvedParams.city, resolvedParams.service);
        premium = result.premium;
        standard = result.standard;
    } catch (error) {
        console.error('Error fetching advertisers:', error);
        // Continue with empty arrays if index is not ready
    }

    const allAdvertisers = [...premium, ...standard];

    // Breadcrumb items
    const breadcrumbs = [
        { name: 'الرئيسية', url: 'https://prokr.co' },
        { name: city.name_ar, url: `https://prokr.co/${city.slug}` },
        { name: service.name_ar, url: `https://prokr.co/${city.slug}/${service.slug}` },
    ];

    return (
        <>
            {/* JSON-LD Schemas */}
            <ServiceJsonLd service={service} city={city} advertisers={allAdvertisers} />
            <BreadcrumbJsonLd items={breadcrumbs} />
            <FaqJsonLd city={city} service={service} />
            <ServiceOfferJsonLd city={city} service={service} />

            <main className="min-h-screen bg-gray-50">
                {/* Hero Section with Image */}
                <section className="relative bg-gradient-to-bl from-emerald-600 via-emerald-700 to-emerald-900 text-white overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute inset-0" style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                        }}></div>
                    </div>

                    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                            {/* Text Content */}
                            <div>
                                {/* Breadcrumbs */}
                                <nav className="flex items-center gap-2 text-emerald-100 text-sm mb-6">
                                    <Link href="/" className="hover:text-white transition-colors flex items-center gap-1">
                                        <Home className="w-4 h-4" />
                                        الرئيسية
                                    </Link>
                                    <ChevronLeft className="w-4 h-4" />
                                    <Link href={`/${city.slug}`} className="hover:text-white transition-colors">
                                        {city.name_ar}
                                    </Link>
                                    <ChevronLeft className="w-4 h-4" />
                                    <span className="text-white font-medium">{service.name_ar}</span>
                                </nav>

                                {/* Main Title */}
                                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                                    أفضل 15 شركة {service.name_ar} في {city.name_ar}
                                </h1>
                                <p className="text-lg text-emerald-100 max-w-xl">
                                    قارن بين أفضل شركات {service.name_ar} المعتمدة في {city.name_ar}.
                                    احصل على أسعار تنافسية وخدمة احترافية.
                                </p>

                                {/* Stats */}
                                <div className="flex flex-wrap gap-6 mt-8">
                                    <div className="flex items-center gap-2">
                                        <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                                            <Star className="w-5 h-5 text-amber-300" />
                                        </div>
                                        <div>
                                            <p className="font-bold">{premium.length + standard.length}</p>
                                            <p className="text-xs text-emerald-200">شركة مسجلة</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                                            <Shield className="w-5 h-5 text-amber-300" />
                                        </div>
                                        <div>
                                            <p className="font-bold">{premium.length}</p>
                                            <p className="text-xs text-emerald-200">معتمدة</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Hero Image */}
                            <div className="hidden lg:block relative">
                                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                                    <Image
                                        src={getUniquePageImages(resolvedParams.city, resolvedParams.service, service.category, 1)[0]}
                                        alt={`${service.name_ar} في ${city.name_ar}`}
                                        fill
                                        className="object-cover"
                                        priority
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/50 to-transparent"></div>
                                </div>
                                {/* Floating Badge */}
                                <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-xl p-4">
                                    <div className="flex items-center gap-2">
                                        <BadgeCheck className="w-8 h-8 text-emerald-600" />
                                        <div>
                                            <p className="text-sm font-bold text-gray-900">شركات معتمدة</p>
                                            <p className="text-xs text-gray-500">{premium.length} شركة مميزة</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Premium Advertisers Grid */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-1.5 h-8 bg-gradient-to-b from-amber-400 to-amber-600 rounded-full"></div>
                        <h2 className="text-2xl font-bold text-gray-900">الشركات المعتمدة</h2>
                        <span className="px-3 py-1 bg-amber-100 text-amber-700 text-sm font-medium rounded-full">
                            أعلى تقييماً
                        </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {premium.map(advertiser => (
                            <PremiumCard key={advertiser.id} advertiser={advertiser} />
                        ))}
                    </div>
                </section>

                {/* Standard Advertisers List */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-gray-200">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-1.5 h-8 bg-gradient-to-b from-gray-400 to-gray-600 rounded-full"></div>
                        <h2 className="text-xl font-bold text-gray-900">مزيد من الشركات</h2>
                    </div>

                    <div className="space-y-3">
                        {standard.map(advertiser => (
                            <StandardRow key={advertiser.id} advertiser={advertiser} />
                        ))}
                    </div>
                </section>

                {/* Enhanced SEO Content with Pricing Table, FAQ, etc. */}
                <SeoContentSection city={city} service={service} />
                <FaqJsonLd city={city} service={service} />

                {/* Footer */}
                <Footer currentCity={resolvedParams.city} currentService={resolvedParams.service} />
            </main>
        </>
    );
}

// Premium Card Component
function PremiumCard({ advertiser }: { advertiser: Advertiser }) {
    const avgRating = advertiser.reviews.length > 0
        ? advertiser.reviews.reduce((sum, r) => sum + r.rating, 0) / advertiser.reviews.length
        : 0;

    const whatsappLink = `https://wa.me/${advertiser.whatsapp_number.replace(/\D/g, '')}`;
    const phoneLink = `tel:${advertiser.phone_number}`;

    return (
        <div className="group relative bg-white rounded-2xl border-2 border-amber-400 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-l from-amber-400 via-yellow-300 to-amber-400"></div>

            <div className="absolute top-4 left-4 z-10">
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-gradient-to-l from-amber-400 to-yellow-500 text-amber-900 text-xs font-bold rounded-full shadow-lg">
                    <BadgeCheck className="w-3.5 h-3.5" />
                    معتمد
                </span>
            </div>

            <div className="p-6">
                <div className="flex items-start gap-4">
                    <div className="relative w-20 h-20 flex-shrink-0">
                        <div className="w-full h-full bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-xl flex items-center justify-center border-2 border-amber-200">
                            <span className="text-2xl font-bold text-emerald-600">
                                {advertiser.business_name.charAt(0)}
                            </span>
                        </div>
                    </div>

                    <div className="flex-1 min-w-0">
                        <Link
                            href={`/company/${advertiser.short_code}`}
                            className="block"
                        >
                            <h3 className="font-bold text-lg text-gray-900 group-hover:text-emerald-600 transition-colors truncate">
                                {advertiser.business_name}
                            </h3>
                        </Link>

                        {avgRating > 0 && (
                            <div className="flex items-center gap-1 mt-1">
                                <div className="flex">
                                    {[1, 2, 3, 4, 5].map(star => (
                                        <Star
                                            key={star}
                                            className={`w-4 h-4 ${star <= avgRating ? 'text-amber-400 fill-amber-400' : 'text-gray-300'}`}
                                        />
                                    ))}
                                </div>
                                <span className="text-sm text-gray-500">
                                    ({advertiser.reviews.length})
                                </span>
                            </div>
                        )}

                        <div className="flex flex-wrap gap-1 mt-2">
                            {advertiser.targeted_cities.slice(0, 2).map(citySlug => (
                                <span
                                    key={citySlug}
                                    className="inline-flex items-center gap-1 px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-full"
                                >
                                    <MapPin className="w-3 h-3" />
                                    {getCityBySlug(citySlug)?.name_ar || citySlug}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                <p className="mt-4 text-sm text-gray-600 line-clamp-2">
                    {advertiser.description}
                </p>

                <div className="flex gap-3 mt-5">
                    <a
                        href={phoneLink}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-l from-emerald-500 to-emerald-600 text-white font-medium rounded-xl hover:from-emerald-600 hover:to-emerald-700 shadow-lg shadow-emerald-500/30 transition-all"
                    >
                        <Phone className="w-5 h-5" />
                        اتصل الآن
                    </a>
                    <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-l from-green-500 to-green-600 text-white font-medium rounded-xl hover:from-green-600 hover:to-green-700 shadow-lg shadow-green-500/30 transition-all"
                    >
                        <MessageCircle className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </div>
    );
}

// Standard Row Component
function StandardRow({ advertiser }: { advertiser: Advertiser }) {
    const whatsappLink = `https://wa.me/${advertiser.whatsapp_number.replace(/\D/g, '')}`;
    const phoneLink = `tel:${advertiser.phone_number}`;

    return (
        <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-200 hover:border-emerald-300 hover:shadow-md transition-all">
            <div className="relative w-12 h-12 flex-shrink-0">
                <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                    <span className="text-lg font-bold text-gray-500">
                        {advertiser.business_name.charAt(0)}
                    </span>
                </div>
            </div>

            <div className="flex-1 min-w-0">
                <Link
                    href={`/company/${advertiser.short_code}`}
                    className="font-medium text-gray-900 hover:text-emerald-600 transition-colors truncate block"
                >
                    {advertiser.business_name}
                </Link>
                <p className="text-sm text-gray-500 truncate">
                    {advertiser.targeted_cities.slice(0, 2).map(c => getCityBySlug(c)?.name_ar || c).join(' • ')}
                </p>
            </div>

            <div className="flex gap-2">
                <a
                    href={phoneLink}
                    className="p-2.5 bg-emerald-50 text-emerald-600 rounded-lg hover:bg-emerald-100 transition-colors"
                    aria-label="اتصل"
                >
                    <Phone className="w-5 h-5" />
                </a>
                <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 bg-green-50 text-green-600 rounded-lg hover:bg-green-100 transition-colors"
                    aria-label="واتساب"
                >
                    <MessageCircle className="w-5 h-5" />
                </a>
            </div>
        </div>
    );
}
