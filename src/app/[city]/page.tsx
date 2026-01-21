import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Home, ChevronLeft, MapPin, Truck, Sparkles, Bug, Droplet, Wrench, Building2, Navigation } from 'lucide-react';
import { getCityBySlug, getServiceBySlug, getServiceImage, CITIES, SERVICES, CATEGORY_NAMES, getServicesByCategory } from '@/lib/seed';
import { getSubRegionsByCity } from '@/lib/sub-regions';
import { BreadcrumbJsonLd } from '@/components/JsonLd';
import Footer from '@/components/Footer';

interface CityPageProps {
    params: Promise<{
        city: string;
    }>;
}

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

    const title = `جميع الخدمات في ${city.name_ar} | بروكر`;
    const description = `اكتشف أفضل شركات الخدمات في ${city.name_ar}. نقل عفش، تنظيف، مكافحة حشرات، كشف تسربات وأكثر.`;

    return {
        title,
        description,
        keywords: [
            `خدمات ${city.name_ar}`,
            `شركات ${city.name_ar}`,
            `نقل عفش ${city.name_ar}`,
            `تنظيف ${city.name_ar}`,
            `مكافحة حشرات ${city.name_ar}`,
        ],
        openGraph: {
            title,
            description,
            locale: 'ar_SA',
            type: 'website',
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

    // Breadcrumb items
    const breadcrumbs = [
        { name: 'الرئيسية', url: 'https://prokr.co' },
        { name: city.name_ar, url: `https://prokr.co/${city.slug}` },
    ];

    return (
        <>
            <BreadcrumbJsonLd items={breadcrumbs} />

            <main className="min-h-screen bg-gray-50">
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
                                    خدمات {city.name_ar}
                                </h1>
                                <p className="text-emerald-100 mt-1">{city.name_en}</p>
                            </div>
                        </div>

                        <p className="text-lg text-emerald-100 max-w-2xl mt-4">
                            اكتشف أفضل شركات الخدمات المعتمدة في {city.name_ar}.
                            نقل عفش، تنظيف، مكافحة حشرات، كشف تسربات والمزيد.
                        </p>
                    </div>
                </section>

                {/* Services by Category */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    {Object.entries(servicesByCategory).map(([category, services]) => (
                        <div key={category} className="mb-12">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-600">
                                    {categoryIcons[category] || <Wrench className="w-5 h-5" />}
                                </div>
                                <h2 className="text-xl font-bold text-gray-900">
                                    {CATEGORY_NAMES[category] || category}
                                </h2>
                            </div>

                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                                {services.map(service => (
                                    <Link
                                        key={service.slug}
                                        href={`/${city.slug}/${service.slug}`}
                                        className="group relative bg-white rounded-xl border border-gray-200 hover:border-emerald-300 hover:shadow-lg transition-all overflow-hidden"
                                    >
                                        {/* Image */}
                                        <div className="relative aspect-[4/3] bg-gray-100">
                                            <Image
                                                src={getServiceImage(service.slug)}
                                                alt={service.name_ar}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-300"
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
                    ))}
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

                {/* Other Cities */}
                <section className="bg-gray-100 py-12">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-xl font-bold text-gray-900 mb-6">مدن أخرى</h2>
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

                <Footer currentCity={resolvedParams.city} />
            </main>
        </>
    );
}
