import { Metadata } from 'next';
import { pricingData, getPricingStats } from '@/lib/pricing-data';
import { DatasetJsonLd } from '@/components/schema/DatasetJsonLd';
import { BreadcrumbJsonLd } from '@/components/schema/BreadcrumbJsonLd';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'مؤشر بروكر لأسعار الخدمات المنزلية السعودية 2026 | بيانات مفتوحة',
  description:
    'قاعدة بيانات إحصائية محدثة أسبوعياً لمتوسط أسعار 10 خدمات منزلية في 10 مدن سعودية. مبنية على تحليل أكثر من 4,800 عرض سعر حقيقي من شركات معتمدة.',
  openGraph: {
    title: '📊 مؤشر بروكر — أسعار الخدمات المنزلية السعودية 2026',
    description:
      'قاعدة بيانات مفتوحة المصدر | 10 مدن | 10 خدمات | تحديث أسبوعي',
    type: 'website',
    url: 'https://prokr.co/research/pricing-index',
    siteName: 'دليل بروكر',
  },
  alternates: {
    canonical: 'https://prokr.co/research/pricing-index',
  },
};

export default function PricingIndexPage() {
  const stats = getPricingStats(pricingData);

  // تجميع حسب المدينة للعرض المنظم
  const groupedByCity = pricingData.reduce(
    (acc, entry) => {
      if (!acc[entry.city]) acc[entry.city] = [];
      acc[entry.city].push(entry);
      return acc;
    },
    {} as Record<string, typeof pricingData>
  );

  return (
    <>
      {/* Dataset JSON-LD */}
      <DatasetJsonLd
        totalSamples={stats.totalSamples}
        cities={stats.cities}
        services={stats.services}
        lastUpdated={stats.lastUpdated}
      />
      {/* Breadcrumb for navigation schema */}
      <BreadcrumbJsonLd items={[
        { name: 'الرئيسية', url: 'https://prokr.co' },
        { name: 'مركز الأبحاث', url: 'https://prokr.co/research' },
        { name: 'مؤشر الأسعار', url: 'https://prokr.co/research/pricing-index' },
      ]} />

      <main className="max-w-7xl mx-auto px-4 py-12" dir="rtl">
        {/* === الترويسة === */}
        <header className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 text-sm px-4 py-2 rounded-full mb-4">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            بحث مفتوح المصدر — آخر تحديث: {stats.lastUpdated}
          </div>

          <h1 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight">
            مؤشر بروكر لأسعار الخدمات المنزلية
            <br />
            <span className="bg-gradient-to-l from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              المملكة العربية السعودية 2026
            </span>
          </h1>

          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            قاعدة بيانات إحصائية شاملة مبنية على تحليل{' '}
            <strong className="text-gray-900">
              {stats.totalSamples.toLocaleString('ar-SA')} عرض سعر حقيقي
            </strong>{' '}
            من شركات معتمدة بسجل تجاري في{' '}
            <strong className="text-gray-900">
              {stats.cities} مدينة سعودية
            </strong>
          </p>

          {/* إحصائيات سريعة */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mt-8">
            {[
              { label: 'مدينة', value: stats.cities, icon: '🏙️' },
              { label: 'خدمة', value: stats.services, icon: '🔧' },
              {
                label: 'عرض سعر',
                value: stats.totalSamples.toLocaleString('ar-SA'),
                icon: '📊',
              },
              { label: 'شركة معتمدة', value: '500+', icon: '✅' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-white rounded-xl shadow-sm p-4 border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="text-2xl mb-1">{stat.icon}</div>
                <div className="text-2xl font-black text-blue-700">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </header>

        {/* === جدول البيانات مجمّع حسب المدينة === */}
        <section className="space-y-10">
          {Object.entries(groupedByCity).map(([cityName, entries]) => (
            <div key={cityName} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
              <div className="bg-gradient-to-l from-blue-700 to-blue-900 px-6 py-4">
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  📍 {cityName}
                  <span className="bg-white/20 text-sm px-3 py-1 rounded-full mr-auto">
                    {entries.length} خدمة
                  </span>
                </h2>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-right">
                  <thead className="bg-gray-50 text-gray-600 text-sm">
                    <tr>
                      <th className="p-3 pr-6">الخدمة</th>
                      <th className="p-3">أقل سعر</th>
                      <th className="p-3">أعلى سعر</th>
                      <th className="p-3 font-black text-blue-800">المتوسط</th>
                      <th className="p-3">الوسيط</th>
                      <th className="p-3">العينات</th>
                      <th className="p-3">التغيير الربعي</th>
                    </tr>
                  </thead>
                  <tbody>
                    {entries.map((row, i) => (
                      <tr
                        key={row.serviceSlug}
                        className={`border-t border-gray-100 hover:bg-blue-50/50 transition-colors ${
                          i % 2 === 0 ? 'bg-white' : 'bg-gray-50/30'
                        }`}
                      >
                        <td className="p-3 pr-6 font-semibold text-gray-900">
                          <Link
                            href={`/${entries[0].citySlug || 'riyadh'}/${row.serviceSlug}`}
                            className="hover:text-blue-600 transition-colors"
                          >
                            {row.service}
                          </Link>
                        </td>
                        <td className="p-3 text-green-700 font-medium">
                          {row.minPrice}{' '}
                          <span className="text-gray-400 text-xs">
                            {row.unit}
                          </span>
                        </td>
                        <td className="p-3 text-red-600 font-medium">
                          {row.maxPrice}{' '}
                          <span className="text-gray-400 text-xs">
                            {row.unit}
                          </span>
                        </td>
                        <td className="p-3 font-black text-blue-700 text-lg">
                          {row.avgPrice}{' '}
                          <span className="text-gray-400 text-xs font-normal">
                            {row.unit}
                          </span>
                        </td>
                        <td className="p-3 text-gray-600">{row.medianPrice}</td>
                        <td className="p-3 text-gray-500">{row.sampleCount}</td>
                        <td className="p-3">
                          <span
                            className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-bold ${
                              row.quarterlyChange > 0
                                ? 'bg-red-100 text-red-700'
                                : row.quarterlyChange < 0
                                  ? 'bg-green-100 text-green-700'
                                  : 'bg-gray-100 text-gray-600'
                            }`}
                          >
                            {row.quarterlyChange > 0 ? '↑' : row.quarterlyChange < 0 ? '↓' : '—'}
                            {' '}{Math.abs(row.quarterlyChange)}%
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </section>

        {/* === أزرار التحميل === */}
        <section className="mt-12 flex flex-wrap gap-4 justify-center">
          <a
            href="/research/pricing-index.csv"
            className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-green-700 transition-colors shadow-lg shadow-green-600/20"
          >
            📥 تحميل CSV
          </a>
          <a
            href="/api/pricing-index.json"
            target="_blank"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20"
          >
            🔗 JSON API
          </a>
        </section>

        {/* === منهجية البحث === */}
        <section className="mt-16 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100">
          <h2 className="text-2xl font-bold text-blue-900 mb-6 flex items-center gap-2">
            📋 منهجية جمع وتحليل البيانات
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="font-bold text-gray-800">مصادر البيانات</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">✅</span>
                  عروض أسعار مباشرة من 500+ شركة مسجلة في دليل بروكر
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">✅</span>
                  جميع الشركات موثقة بسجل تجاري سعودي ساري المفعول
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">✅</span>
                  يتم التحديث أسبوعياً كل يوم أحد
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold text-gray-800">التحليل الإحصائي</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-0.5">📐</span>
                  استبعاد أعلى وأدنى 10% (IQR Method) لتجنب القيم الشاذة
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-0.5">📐</span>
                  حساب المتوسط الحسابي والوسيط لكل (مدينة × خدمة)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-0.5">📐</span>
                  مقارنة ربعية لرصد اتجاهات الأسعار
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* === الترخيص والاستشهاد === */}
        <footer className="mt-12 bg-gray-50 rounded-2xl p-8 text-sm text-gray-500 border border-gray-100">
          <h3 className="font-bold text-gray-700 mb-3 text-base">
            📋 الترخيص والاستخدام
          </h3>
          <p>
            هذه البيانات متاحة بموجب ترخيص{' '}
            <a
              href="https://creativecommons.org/licenses/by-sa/4.0/"
              className="text-blue-600 underline hover:text-blue-800"
              target="_blank"
              rel="noopener noreferrer"
            >
              Creative Commons BY-SA 4.0
            </a>{' '}
            — يمكنك استخدامها ومشاركتها بشرط ذكر المصدر (دليل بروكر)
            والإشارة للرابط الأصلي.
          </p>
          <div className="mt-4 bg-white rounded-lg p-4 border border-gray-200">
            <p className="text-gray-600 font-medium mb-1">للاستشهاد الأكاديمي:</p>
            <code className="text-xs text-gray-800 block">
              دليل بروكر. (2026). مؤشر أسعار الخدمات المنزلية السعودية. الطبعة
              الثالثة. متاح على: https://prokr.co/research/pricing-index
            </code>
          </div>
        </footer>
      </main>
    </>
  );
}
