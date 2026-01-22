import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Home, ChevronLeft, MapPin, Truck, Sparkles, Bug, Droplet, Wrench } from 'lucide-react';
import { getServiceBySlug, getServiceImage, CITIES, SERVICES, REGION_NAMES, getCitiesByRegion } from '@/lib/seed';
import { BreadcrumbJsonLd } from '@/components/JsonLd';
import Footer from '@/components/Footer';

interface ServicePageProps {
    params: Promise<{
        service: string;
    }>;
}

// Generate static params for all services
export async function generateStaticParams() {
    return SERVICES.map(service => ({
        service: service.slug,
    }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
    const resolvedParams = await params;
    const service = getServiceBySlug(resolvedParams.service);

    if (!service) {
        return { title: 'صفحة غير موجودة' };
    }

    const title = `${service.name_ar} في السعودية | بروكر`;
    const description = `اكتشف أفضل شركات ${service.name_ar} في جميع مدن المملكة العربية السعودية. الرياض، جدة، الدمام والمزيد.`;

    return {
        title,
        description,
        keywords: [
            service.name_ar,
            `${service.name_ar} الرياض`,
            `${service.name_ar} جدة`,
            `${service.name_ar} الدمام`,
            `أفضل ${service.name_ar}`,
        ],
        openGraph: {
            title,
            description,
            locale: 'ar_SA',
            type: 'website',
        },
        alternates: {
            canonical: `https://prokr.co/${resolvedParams.service}`,
        },
    };
}

export default async function ServicePage({ params }: ServicePageProps) {
    const resolvedParams = await params;
    const service = getServiceBySlug(resolvedParams.service);

    if (!service) {
        notFound();
    }

    const citiesByRegion = getCitiesByRegion();
    const heroImage = getServiceImage(resolvedParams.service);

    // Breadcrumb items
    const breadcrumbs = [
        { name: 'الرئيسية', url: 'https://prokr.co' },
        { name: service.name_ar, url: `https://prokr.co/${service.slug}` },
    ];

    return (
        <>
            <BreadcrumbJsonLd items={breadcrumbs} />

            <main className="min-h-screen bg-gray-50">
                {/* Hero Section with Image */}
                <section className="relative bg-gradient-to-bl from-emerald-600 via-emerald-700 to-emerald-900 text-white overflow-hidden">
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute inset-0" style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                        }}></div>
                    </div>

                    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                            <div>
                                {/* Breadcrumbs */}
                                <nav className="flex items-center gap-2 text-emerald-100 text-sm mb-6">
                                    <Link href="/" className="hover:text-white transition-colors flex items-center gap-1">
                                        <Home className="w-4 h-4" />
                                        الرئيسية
                                    </Link>
                                    <ChevronLeft className="w-4 h-4" />
                                    <span className="text-white font-medium">{service.name_ar}</span>
                                </nav>

                                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                                    {service.name_ar} في السعودية
                                </h1>
                                <p className="text-lg text-emerald-100 max-w-xl">
                                    اكتشف أفضل شركات {service.name_ar} في جميع مدن المملكة.
                                    شركات معتمدة، أسعار تنافسية، وخدمة احترافية.
                                </p>

                                {/* Stats */}
                                <div className="flex flex-wrap gap-6 mt-8">
                                    <div className="flex items-center gap-2">
                                        <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                                            <MapPin className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="font-bold">{CITIES.length}</p>
                                            <p className="text-xs text-emerald-200">مدينة</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Hero Image */}
                            <div className="hidden lg:block relative">
                                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                                    <Image
                                        src={heroImage}
                                        alt={service.name_ar}
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/50 to-transparent"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Cities by Region */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8">
                        اختر مدينتك
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {Object.entries(citiesByRegion).map(([region, cities]) => (
                            <div key={region} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    <MapPin className="w-5 h-5 text-emerald-500" />
                                    {REGION_NAMES[region] || region}
                                </h3>
                                <div className="space-y-2">
                                    {cities.map(city => (
                                        <Link
                                            key={city.slug}
                                            href={`/${city.slug}/${service.slug}`}
                                            className="flex items-center justify-between p-3 hover:bg-emerald-50 rounded-lg text-gray-700 hover:text-emerald-700 transition-colors group"
                                        >
                                            <span>{city.name_ar}</span>
                                            <ChevronLeft className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* SEO Content */}
                <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <article className="prose prose-lg prose-emerald max-w-none">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">
                            {service.name_ar} في المملكة العربية السعودية
                        </h2>

                        <p className="text-gray-600 leading-relaxed">
                            تقدم بروكر دليلاً شاملاً لأفضل شركات {service.name_ar} في جميع مدن المملكة العربية السعودية.
                            نساعدك في العثور على الشركة المناسبة بسهولة من خلال مقارنة الأسعار والتقييمات
                            والتواصل المباشر مع مقدمي الخدمة.
                        </p>

                        <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">
                            مميزات خدمة {service.name_ar} من بروكر
                        </h3>
                        <ul className="text-gray-600 space-y-2">
                            <li>✓ شركات معتمدة ومرخصة رسمياً</li>
                            <li>✓ أسعار تنافسية ومناسبة</li>
                            <li>✓ تقييمات حقيقية من العملاء</li>
                            <li>✓ تواصل مباشر مع مقدمي الخدمة</li>
                            <li>✓ تغطية شاملة لجميع مدن المملكة</li>
                        </ul>
                    </article>
                </section>

                {/* Other Services */}
                <section className="bg-gray-100 py-12">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-xl font-bold text-gray-900 mb-6">خدمات أخرى</h2>
                        <div className="flex flex-wrap gap-3">
                            {SERVICES.filter(s => s.slug !== service.slug).slice(0, 12).map(otherService => (
                                <Link
                                    key={otherService.slug}
                                    href={`/${otherService.slug}`}
                                    className="px-4 py-2 bg-white border border-gray-200 rounded-lg hover:border-emerald-300 hover:shadow-md transition-all text-gray-700 hover:text-emerald-700"
                                >
                                    {otherService.name_ar}
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                <Footer currentService={resolvedParams.service} />
            </main>
        </>
    );
}
