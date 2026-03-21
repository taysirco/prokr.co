import { Metadata } from 'next';
import Link from 'next/link';
import { Home, Search, MapPin, ArrowLeft } from 'lucide-react';
import { CITIES, SERVICES } from '@/lib/seed';
import { BreadcrumbJsonLd, WebPageJsonLd } from '@/components/JsonLd';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: 'الصفحة غير موجودة (404) | بروكر',
    description: 'الصفحة المطلوبة غير موجودة. تصفح دليل بروكر لأفضل شركات الخدمات في 24 مدينة سعودية.',
    robots: {
        index: false,
        follow: true,
    },
};

export default function NotFound() {
    const popularCities = CITIES.filter(c =>
        ['riyadh', 'jeddah', 'dammam', 'makkah', 'madinah'].includes(c.slug)
    );
    const popularServices = SERVICES.filter(s =>
        ['furniture-moving', 'cleaning', 'pest-control', 'water-leak-detection', 'tank-insulation'].includes(s.slug)
    );

    const breadcrumbs = [
        { name: 'الرئيسية', url: 'https://prokr.co' },
        { name: 'صفحة غير موجودة', url: 'https://prokr.co/404' },
    ];

    return (
        <>
        <BreadcrumbJsonLd items={breadcrumbs} />
        <WebPageJsonLd
            title="الصفحة غير موجودة"
            description="الصفحة المطلوبة غير موجودة. تصفح دليل بروكر للخدمات."
            url="https://prokr.co/404"
            breadcrumbs={breadcrumbs}
        />
        <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
            <div className="max-w-2xl mx-auto text-center">
                <div className="w-24 h-24 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Search className="w-12 h-12 text-sky-600" />
                </div>

                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                    الصفحة غير موجودة
                </h1>
                <p className="text-lg text-gray-600 mb-8">
                    عذراً، لم نتمكن من العثور على الصفحة المطلوبة. قد تكون قد نُقلت أو حُذفت.
                </p>

                <Link
                    href="/"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-sky-600 text-white font-medium rounded-xl hover:bg-sky-700 transition-colors mb-12"
                >
                    <Home className="w-5 h-5" />
                    العودة للصفحة الرئيسية
                </Link>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-right">
                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                        <h2 className="font-bold text-lg text-gray-900 mb-4 flex items-center gap-2">
                            <MapPin className="w-5 h-5 text-sky-500" />
                            المدن الرئيسية
                        </h2>
                        <ul className="space-y-2">
                            {popularCities.map(city => (
                                <li key={city.slug}>
                                    <Link
                                        href={`/${city.slug}`}
                                        className="flex items-center justify-between text-gray-700 hover:text-sky-600 transition-colors py-1"
                                    >
                                        <span>{city.name_ar}</span>
                                        <ArrowLeft className="w-4 h-4" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                        <h2 className="font-bold text-lg text-gray-900 mb-4 flex items-center gap-2">
                            <Search className="w-5 h-5 text-sky-500" />
                            الخدمات الأكثر طلباً
                        </h2>
                        <ul className="space-y-2">
                            {popularServices.map(service => (
                                <li key={service.slug}>
                                    <Link
                                        href={`/${service.slug}`}
                                        className="flex items-center justify-between text-gray-700 hover:text-sky-600 transition-colors py-1"
                                    >
                                        <span>{service.name_ar}</span>
                                        <ArrowLeft className="w-4 h-4" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
        </>
    );
}
