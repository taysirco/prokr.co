import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Home, ChevronLeft, Truck, Sparkles, Bug, Droplet, Wrench, Building2 } from 'lucide-react';
import { SERVICES, CATEGORY_NAMES, getServicesByCategory, getServiceImage } from '@/lib/seed';
import { BreadcrumbJsonLd } from '@/components/JsonLd';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: 'جميع الخدمات | بروكر - دليل الخدمات السعودي',
    description: 'تصفح جميع خدمات بروكر: نقل عفش، تنظيف، مكافحة حشرات، كشف تسربات، عزل، وأكثر في جميع مدن المملكة.',
    keywords: ['خدمات السعودية', 'نقل عفش', 'تنظيف', 'مكافحة حشرات', 'كشف تسربات'],
    openGraph: {
        title: 'جميع الخدمات | بروكر',
        description: 'تصفح جميع خدمات بروكر في المملكة العربية السعودية',
        locale: 'ar_SA',
        type: 'website',
    },
    alternates: {
        canonical: 'https://prokr.co/services',
    },
};

// Category icons mapping
const categoryIcons: Record<string, React.ReactNode> = {
    'moving': <Truck className="w-6 h-6" />,
    'cleaning': <Sparkles className="w-6 h-6" />,
    'pest-control': <Bug className="w-6 h-6" />,
    'leak-detection': <Droplet className="w-6 h-6" />,
    'insulation': <Building2 className="w-6 h-6" />,
    'sewage': <Wrench className="w-6 h-6" />,
};

export default function ServicesPage() {
    const servicesByCategory = getServicesByCategory();

    const breadcrumbs = [
        { name: 'الرئيسية', url: 'https://prokr.co' },
        { name: 'الخدمات', url: 'https://prokr.co/services' },
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
                            <span className="text-white font-medium">الخدمات</span>
                        </nav>

                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                            جميع الخدمات
                        </h1>
                        <p className="text-lg text-emerald-100 max-w-2xl">
                            تصفح أكثر من {SERVICES.length} خدمة متوفرة في جميع مدن المملكة العربية السعودية.
                            من نقل العفش إلى التنظيف ومكافحة الحشرات.
                        </p>
                    </div>
                </section>

                {/* Services by Category */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    {Object.entries(servicesByCategory).map(([category, services]) => (
                        <div key={category} className="mb-12">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600">
                                    {categoryIcons[category] || <Wrench className="w-6 h-6" />}
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold text-gray-900">
                                        {CATEGORY_NAMES[category] || category}
                                    </h2>
                                    <p className="text-sm text-gray-500">{services.length} خدمة</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                                {services.map(service => (
                                    <Link
                                        key={service.slug}
                                        href={`/services/${service.slug}`}
                                        className="group relative bg-white rounded-xl border border-gray-200 hover:border-emerald-300 hover:shadow-lg transition-all overflow-hidden"
                                    >
                                        <div className="relative aspect-[4/3] bg-gray-100">
                                            <Image
                                                src={getServiceImage(service.slug)}
                                                alt={service.name_ar}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                        </div>

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

                <Footer />
            </main>
        </>
    );
}
