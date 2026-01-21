import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Home, ChevronLeft, MapPin } from 'lucide-react';
import { CITIES, REGION_NAMES, getCitiesByRegion } from '@/lib/seed';
import { BreadcrumbJsonLd } from '@/components/JsonLd';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: 'مناطق الخدمة | بروكر - دليل الخدمات السعودي',
    description: 'تصفح جميع المدن والمناطق التي تغطيها خدمات بروكر في المملكة العربية السعودية. 24 مدينة في 5 مناطق.',
    keywords: ['مناطق الخدمة', 'مدن السعودية', 'الرياض', 'جدة', 'الدمام', 'مكة', 'المدينة'],
    openGraph: {
        title: 'مناطق الخدمة | بروكر',
        description: 'تصفح جميع المدن والمناطق التي تغطيها خدمات بروكر',
        locale: 'ar_SA',
        type: 'website',
    },
    alternates: {
        canonical: 'https://prokr.co/locations',
    },
};

export default function LocationsPage() {
    const citiesByRegion = getCitiesByRegion();

    const breadcrumbs = [
        { name: 'الرئيسية', url: 'https://prokr.co' },
        { name: 'مناطق الخدمة', url: 'https://prokr.co/locations' },
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
                        <nav className="flex items-center gap-2 text-emerald-100 text-sm mb-6">
                            <Link href="/" className="hover:text-white transition-colors flex items-center gap-1">
                                <Home className="w-4 h-4" />
                                الرئيسية
                            </Link>
                            <ChevronLeft className="w-4 h-4" />
                            <span className="text-white font-medium">مناطق الخدمة</span>
                        </nav>

                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
                                <MapPin className="w-8 h-8" />
                            </div>
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                                مناطق الخدمة
                            </h1>
                        </div>

                        <p className="text-lg text-emerald-100 max-w-2xl mt-4">
                            نغطي {CITIES.length} مدينة في جميع مناطق المملكة العربية السعودية.
                            اختر مدينتك للوصول لأفضل مقدمي الخدمات.
                        </p>
                    </div>
                </section>

                {/* Map Section */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {Object.entries(citiesByRegion).map(([region, cities]) => (
                            <div key={region} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                <div className="flex items-center gap-3 mb-4 pb-4 border-b border-gray-100">
                                    <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                                        <MapPin className="w-5 h-5 text-emerald-600" />
                                    </div>
                                    <div>
                                        <h2 className="font-bold text-lg text-gray-900">
                                            {REGION_NAMES[region] || region}
                                        </h2>
                                        <p className="text-sm text-gray-500">{cities.length} مدينة</p>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    {cities.map(city => (
                                        <Link
                                            key={city.slug}
                                            href={`/${city.slug}`}
                                            className="flex items-center justify-between p-3 hover:bg-emerald-50 rounded-lg text-gray-700 hover:text-emerald-700 transition-colors group"
                                        >
                                            <div>
                                                <span className="font-medium">{city.name_ar}</span>
                                                <span className="text-sm text-gray-400 mr-2">({city.name_en})</span>
                                            </div>
                                            <ChevronLeft className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Stats */}
                <section className="bg-emerald-50 py-12">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                            <div className="bg-white rounded-xl p-6 shadow-sm">
                                <p className="text-3xl font-bold text-emerald-600">{CITIES.length}</p>
                                <p className="text-gray-600">مدينة</p>
                            </div>
                            <div className="bg-white rounded-xl p-6 shadow-sm">
                                <p className="text-3xl font-bold text-emerald-600">5</p>
                                <p className="text-gray-600">مناطق</p>
                            </div>
                            <div className="bg-white rounded-xl p-6 shadow-sm">
                                <p className="text-3xl font-bold text-emerald-600">+500</p>
                                <p className="text-gray-600">شركة مسجلة</p>
                            </div>
                            <div className="bg-white rounded-xl p-6 shadow-sm">
                                <p className="text-3xl font-bold text-emerald-600">+50</p>
                                <p className="text-gray-600">خدمة متوفرة</p>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer />
            </main>
        </>
    );
}
