import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Home, ChevronLeft, MapPin, Truck, Sparkles, Bug, Droplet, Wrench, Building2 } from 'lucide-react';
import { getCityBySlug, getServiceBySlug, getServiceImage, CATEGORY_NAMES } from '@/lib/seed';
import { getSubRegion, getSubRegionsByCity, SUB_REGIONS } from '@/lib/sub-regions';
import { BreadcrumbJsonLd } from '@/components/JsonLd';
import Footer from '@/components/Footer';

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

    const title = `خدمات ${subRegion.name_ar} | بروكر`;
    const description = `اكتشف أفضل شركات الخدمات في ${subRegion.name_ar}. نقل عفش، تنظيف، مكافحة حشرات.`;

    return {
        title,
        description,
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
        .filter(Boolean);

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

    const breadcrumbs = [
        { name: 'الرئيسية', url: 'https://prokr.co' },
        { name: city.name_ar, url: `https://prokr.co/${city.slug}` },
        { name: subRegion.name_ar, url: `https://prokr.co/regions/${city.slug}/${subRegion.slug}` },
    ];

    return (
        <>
            <BreadcrumbJsonLd items={breadcrumbs} />

            <main className="min-h-screen bg-gray-50">
                {/* Hero */}
                <section className="relative bg-gradient-to-bl from-emerald-600 via-emerald-700 to-emerald-900 text-white overflow-hidden">
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute inset-0" style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                        }}></div>
                    </div>

                    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
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
                                <p className="text-emerald-100 mt-1">{city.name_ar} - {subRegion.name_en}</p>
                            </div>
                        </div>

                        <p className="text-lg text-emerald-100 max-w-2xl mt-4">
                            {availableServices.length} خدمة متوفرة في {subRegion.name_ar} من شركات معتمدة.
                        </p>
                    </div>
                </section>

                {/* Services */}
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

                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                                {services.map(service => service && (
                                    <Link
                                        key={service.slug}
                                        href={`/${city.slug}/${service.slug}`}
                                        className="group relative bg-white rounded-xl border border-gray-200 hover:border-emerald-300 hover:shadow-lg transition-all overflow-hidden"
                                    >
                                        <div className="relative aspect-[4/3] bg-gray-100">
                                            <Image
                                                src={getServiceImage(service.slug)}
                                                alt={`${service.name_ar} ${subRegion.name_ar}`}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
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

                {/* Other Sub-Regions */}
                {otherSubRegions.length > 0 && (
                    <section className="bg-gray-100 py-12">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <h2 className="text-xl font-bold text-gray-900 mb-6">مناطق أخرى في {city.name_ar}</h2>
                            <div className="flex flex-wrap gap-3">
                                {otherSubRegions.map(sr => (
                                    <Link
                                        key={sr.slug}
                                        href={`/regions/${city.slug}/${sr.slug}`}
                                        className="px-4 py-2 bg-white border border-gray-200 rounded-lg hover:border-emerald-300 hover:shadow-md transition-all"
                                    >
                                        {sr.name_ar}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <Link href={`/${city.slug}`} className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700">
                        <ChevronLeft className="w-4 h-4 rotate-180" />
                        جميع خدمات {city.name_ar}
                    </Link>
                </section>

                <Footer currentCity={resolvedParams.city} />
            </main>
        </>
    );
}
