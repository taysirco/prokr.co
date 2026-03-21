import { Metadata } from 'next';
import Link from 'next/link';
import { Search, ArrowLeft } from 'lucide-react';
import { CITIES, SERVICES } from '@/lib/seed';
import { isAbsorbedSlug } from '@/lib/services/super-page-groups';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: 'بحث في بروكر — ابحث عن خدمة أو مدينة',
    description: 'ابحث عن أفضل شركات الخدمات المنزلية في السعودية. نقل عفش، تنظيف، مكافحة حشرات، كشف تسربات والمزيد.',
    robots: { index: false, follow: true },
};

interface SearchPageProps {
    searchParams: Promise<{ q?: string }>;
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
    const resolvedParams = await searchParams;
    const query = resolvedParams.q?.trim().toLowerCase() || '';

    // Filter services and cities based on query (exclude absorbed slugs)
    const canonicalServices = SERVICES.filter(s => !isAbsorbedSlug(s.slug));
    const matchedServices = query
        ? canonicalServices.filter(s =>
            s.name_ar.includes(query) ||
            s.name_en.toLowerCase().includes(query) ||
            s.slug.includes(query)
        )
        : canonicalServices;

    const matchedCities = query
        ? CITIES.filter(c =>
            c.name_ar.includes(query) ||
            c.name_en.toLowerCase().includes(query) ||
            c.slug.includes(query)
        )
        : CITIES;

    return (
        <main className="min-h-screen bg-gray-50">
            {/* Search Header */}
            <section className="bg-gradient-to-bl from-sky-600 via-sky-700 to-sky-900 text-white py-12">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold mb-6">البحث في بروكر</h1>
                    <form action="/search" method="GET" className="relative">
                        <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" />
                        <input
                            type="text"
                            name="q"
                            defaultValue={query}
                            placeholder="ابحث عن خدمة أو مدينة..."
                            className="w-full pr-14 pl-32 py-4 bg-white rounded-2xl text-gray-900 placeholder-gray-400 shadow-xl focus:outline-none focus:ring-4 focus:ring-white/30"
                        />
                        <button
                            type="submit"
                            className="absolute left-2 top-1/2 -translate-y-1/2 px-6 py-2.5 bg-gradient-to-l from-sky-600 to-sky-700 text-white font-medium rounded-xl hover:from-sky-700 hover:to-sky-800 transition-all"
                        >
                            بحث
                        </button>
                    </form>
                </div>
            </section>

            {/* Results */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {query && (
                    <p className="text-gray-500 mb-8">
                        نتائج البحث عن &quot;{resolvedParams.q}&quot; — {matchedServices.length + matchedCities.length} نتيجة
                    </p>
                )}

                {/* Services Results */}
                {matchedServices.length > 0 && (
                    <div className="mb-12">
                        <h2 className="text-xl font-bold text-gray-900 mb-4">الخدمات ({matchedServices.length})</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {matchedServices.map(service => (
                                <Link
                                    key={service.slug}
                                    href={`/${service.slug}`}
                                    className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-xl hover:border-sky-300 hover:shadow-md transition-all group"
                                >
                                    <span className="font-medium text-gray-900 group-hover:text-sky-700">{service.name_ar}</span>
                                    <ArrowLeft className="w-4 h-4 text-gray-400 group-hover:text-sky-500" />
                                </Link>
                            ))}
                        </div>
                    </div>
                )}

                {/* Cities Results */}
                {matchedCities.length > 0 && (
                    <div className="mb-12">
                        <h2 className="text-xl font-bold text-gray-900 mb-4">المدن ({matchedCities.length})</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {matchedCities.map(city => (
                                <Link
                                    key={city.slug}
                                    href={`/${city.slug}`}
                                    className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-xl hover:border-sky-300 hover:shadow-md transition-all group"
                                >
                                    <span className="font-medium text-gray-900 group-hover:text-sky-700">{city.name_ar}</span>
                                    <ArrowLeft className="w-4 h-4 text-gray-400 group-hover:text-sky-500" />
                                </Link>
                            ))}
                        </div>
                    </div>
                )}

                {/* No Results */}
                {query && matchedServices.length === 0 && matchedCities.length === 0 && (
                    <div className="text-center py-16">
                        <p className="text-gray-500 text-lg mb-4">لم يتم العثور على نتائج لـ &quot;{resolvedParams.q}&quot;</p>
                        <Link href="/" className="text-sky-600 font-medium hover:underline">
                            العودة للرئيسية
                        </Link>
                    </div>
                )}
            </div>

            <Footer />
        </main>
    );
}
