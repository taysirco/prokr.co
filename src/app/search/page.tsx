import { Metadata } from 'next';
import Link from 'next/link';
import {
  Search, MapPin, Briefcase, BookOpen, ArrowLeft,
  Zap, TrendingUp, Clock, Sparkles,
} from 'lucide-react';
import { serverSearch, TRENDING_SEARCHES } from '@/lib/search-engine';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'بحث في بروكر — ابحث عن خدمة أو مدينة',
  description: 'ابحث عن أفضل شركات الخدمات المنزلية في السعودية. نقل عفش، تنظيف، مكافحة حشرات، كشف تسربات والمزيد.',
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noarchive: true,
      noimageindex: true,
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: null,  // Prevent canonical pointing to search
  },
};

interface SearchPageProps {
  searchParams: Promise<{ q?: string }>;
}

// Result type icon
function ResultIcon({ type }: { type: string }) {
  switch (type) {
    case 'composite':
      return (
        <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-lg shrink-0" style={{ background: 'linear-gradient(135deg, #10b981, #059669)' }}>
          <Zap className="w-6 h-6" />
        </div>
      );
    case 'city':
      return (
        <div className="w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center text-violet-600 shrink-0">
          <MapPin className="w-6 h-6" />
        </div>
      );
    case 'service':
      return (
        <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center text-sky-600 shrink-0">
          <Briefcase className="w-6 h-6" />
        </div>
      );
    case 'article':
      return (
        <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center text-amber-600 shrink-0">
          <BookOpen className="w-6 h-6" />
        </div>
      );
    default:
      return (
        <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-gray-500 shrink-0">
          <Search className="w-6 h-6" />
        </div>
      );
  }
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const resolvedParams = await searchParams;
  const query = resolvedParams.q?.trim() || '';
  const results = query ? serverSearch(query) : null;

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Search Header */}
      <section className="relative text-white py-16 overflow-hidden" style={{ background: 'linear-gradient(to bottom left, #0369a1, #0c4a6e, #082f49)' }}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.06]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
        <div className="absolute top-10 left-10 w-72 h-72 bg-sky-400/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl"></div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #38bdf8, #0284c7)' }}>
              <Search className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">البحث في بروكر</h1>
              <p className="text-sky-200 text-sm flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                بحث ذكي يفهم العربية والمرادفات
              </p>
            </div>
          </div>

          <form action="/search" method="GET" className="relative">
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" />
            <input
              type="text"
              name="q"
              defaultValue={query}
              placeholder="نقل عفش الرياض، تنظيف مكيفات، مكافحة حشرات..."
              className="w-full pr-14 pl-32 py-4 bg-white rounded-2xl text-gray-900 placeholder-gray-400 shadow-2xl focus:outline-none focus:ring-4 focus:ring-white/30 text-lg"
              dir="rtl"
              autoComplete="off"
            />
            <button
              type="submit"
              className="absolute left-2 top-1/2 -translate-y-1/2 px-6 py-2.5 text-white font-medium rounded-xl hover:opacity-90 transition-all shadow-lg" style={{ background: 'linear-gradient(to left, #0284c7, #0369a1)' }}
            >
              بحث
            </button>
          </form>
        </div>
      </section>

      {/* Results */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Results summary */}
        {query && results && (
          <div className="flex items-center justify-between mb-8">
            <p className="text-gray-500">
              نتائج البحث عن &quot;{query}&quot; — <span className="font-bold text-gray-900">{results.total}</span> نتيجة
            </p>
            <Link href="/" className="text-sky-600 font-medium hover:underline text-sm flex items-center gap-1">
              <ArrowLeft className="w-3.5 h-3.5" />
              الرئيسية
            </Link>
          </div>
        )}

        {/* Composite Results (Highest Priority) */}
        {results && results.composites.length > 0 && (
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white" style={{ background: 'linear-gradient(135deg, #10b981, #059669)' }}>
                <Zap className="w-4 h-4" />
              </div>
              <h2 className="text-xl font-bold text-gray-900">نتائج مباشرة</h2>
              <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 text-xs font-bold rounded-full">الأكثر صلة</span>
            </div>
            <div className="grid grid-cols-1 gap-3">
              {results.composites.map(result => (
                <Link
                  key={result.href}
                  href={result.href}
                  className="flex items-center gap-4 p-5 bg-white border-2 border-emerald-200 rounded-2xl hover:border-emerald-400 hover:shadow-xl hover:shadow-emerald-500/10 transition-all group"
                >
                  <ResultIcon type="composite" />
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-gray-900 text-lg group-hover:text-emerald-700 transition-colors">{result.title}</p>
                    {result.subtitle && <p className="text-sm text-gray-500">{result.subtitle}</p>}
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="px-3 py-1.5 bg-emerald-600 text-white text-sm font-bold rounded-xl shadow-lg group-hover:scale-105 transition-transform">
                      عرض الشركات
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Services Results */}
        {results && results.services.length > 0 && (
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-sky-100 rounded-lg flex items-center justify-center text-sky-600">
                <Briefcase className="w-4 h-4" />
              </div>
              <h2 className="text-xl font-bold text-gray-900">الخدمات ({results.services.length})</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {results.services.map(result => (
                <Link
                  key={result.href}
                  href={result.href}
                  className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-xl hover:border-sky-300 hover:shadow-lg transition-all group"
                >
                  <ResultIcon type="service" />
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-gray-900 group-hover:text-sky-700 transition-colors">{result.title}</p>
                    {result.subtitle && <p className="text-sm text-gray-500">{result.subtitle}</p>}
                  </div>
                  <ArrowLeft className="w-4 h-4 text-gray-400 group-hover:text-sky-500 shrink-0" />
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Cities Results */}
        {results && results.cities.length > 0 && (
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-violet-100 rounded-lg flex items-center justify-center text-violet-600">
                <MapPin className="w-4 h-4" />
              </div>
              <h2 className="text-xl font-bold text-gray-900">المدن ({results.cities.length})</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {results.cities.map(result => (
                <Link
                  key={result.href}
                  href={result.href}
                  className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-xl hover:border-violet-300 hover:shadow-lg transition-all group"
                >
                  <ResultIcon type="city" />
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-gray-900 group-hover:text-violet-700 transition-colors">{result.title}</p>
                    {result.subtitle && <p className="text-sm text-gray-500">{result.subtitle}</p>}
                  </div>
                  <ArrowLeft className="w-4 h-4 text-gray-400 group-hover:text-violet-500 shrink-0" />
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Articles Results */}
        {results && results.articles.length > 0 && (
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center text-amber-600">
                <BookOpen className="w-4 h-4" />
              </div>
              <h2 className="text-xl font-bold text-gray-900">مقالات ({results.articles.length})</h2>
            </div>
            <div className="grid grid-cols-1 gap-3">
              {results.articles.map(result => (
                <Link
                  key={result.href}
                  href={result.href}
                  className="flex items-center gap-4 p-4 bg-white border border-gray-200 rounded-xl hover:border-amber-300 hover:shadow-lg transition-all group"
                >
                  <ResultIcon type="article" />
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-gray-900 group-hover:text-amber-700 transition-colors line-clamp-1">{result.title}</p>
                    <p className="text-sm text-gray-500 flex items-center gap-2">
                      <span>{result.subtitle}</span>
                      {result.meta && (
                        <>
                          <span className="text-gray-300">·</span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {result.meta}
                          </span>
                        </>
                      )}
                    </p>
                  </div>
                  <ArrowLeft className="w-4 h-4 text-gray-400 group-hover:text-amber-500 shrink-0" />
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* No Results */}
        {query && results && results.total === 0 && (
          <div className="text-center py-16">
            <div className="w-20 h-20 mx-auto mb-6 bg-gray-100 rounded-3xl flex items-center justify-center">
              <Search className="w-10 h-10 text-gray-300" />
            </div>
            <p className="text-gray-500 text-lg mb-2">لم يتم العثور على نتائج لـ &quot;{query}&quot;</p>
            <p className="text-gray-400 mb-6">جرب كلمات مختلفة أو تصفح الخدمات والمدن</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/services" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-sky-600 text-white font-bold rounded-xl hover:bg-sky-700 transition-colors shadow-lg">
                <Briefcase className="w-5 h-5" />
                تصفح الخدمات
              </Link>
              <Link href="/" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-200 text-gray-700 font-bold rounded-xl hover:bg-gray-300 transition-colors">
                <ArrowLeft className="w-5 h-5" />
                العودة للرئيسية
              </Link>
            </div>
          </div>
        )}

        {/* No Query — Show Trending */}
        {!query && (
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-rose-100 rounded-lg flex items-center justify-center text-rose-600">
                <TrendingUp className="w-4 h-4" />
              </div>
              <h2 className="text-xl font-bold text-gray-900">عمليات البحث الشائعة</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {TRENDING_SEARCHES.map((item, i) => (
                <Link
                  key={i}
                  href={item.href}
                  className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-xl hover:border-sky-300 hover:shadow-lg transition-all group"
                >
                  <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center text-gray-400 group-hover:bg-sky-50 group-hover:text-sky-600 transition-colors">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <span className="font-medium text-gray-700 group-hover:text-sky-700 transition-colors">{item.query}</span>
                  <ArrowLeft className="w-4 h-4 text-gray-300 mr-auto shrink-0" />
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      <Footer />
    </main>
  );
}
