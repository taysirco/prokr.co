import Link from 'next/link';
import {
  Truck,
  Sparkles,
  Bug,
  Droplet,
  Wrench,
  ArrowLeft,
  Star,
  Shield,
  Clock,
  Phone,
  MapPin,
  ChevronLeft
} from 'lucide-react';
import { CITIES, SERVICES, getCitiesByRegion, getServicesByCategory } from '@/lib/seed';
import Footer from '@/components/Footer';
import { WebsiteJsonLd } from '@/components/JsonLd';

// Service icons mapping
const serviceIcons: Record<string, React.ReactNode> = {
  'furniture-moving': <Truck className="w-6 h-6" />,
  'cleaning': <Sparkles className="w-6 h-6" />,
  'pest-control': <Bug className="w-6 h-6" />,
  'leak-detection': <Droplet className="w-6 h-6" />,
  'plumbing': <Wrench className="w-6 h-6" />,
};

export default function HomePage() {
  const citiesByRegion = getCitiesByRegion();
  const servicesByCategory = getServicesByCategory();

  // Featured services
  const featuredServices = SERVICES.slice(0, 6);

  // Major cities
  const majorCities = CITIES.filter(c =>
    ['riyadh', 'jeddah', 'dammam', 'makkah', 'madinah'].includes(c.slug)
  );

  return (
    <>
      <WebsiteJsonLd
        url="https://prokr.co"
        name="بروكر - دليل الخدمات السعودي"
        description="دليل شامل لأفضل شركات الخدمات في المملكة العربية السعودية"
      />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-bl from-emerald-600 via-emerald-700 to-emerald-900 text-white overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
            <div className="max-w-3xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                دليل الخدمات السعودي
                <span className="block text-emerald-200">الشامل والموثوق</span>
              </h1>
              <p className="text-xl text-emerald-100 mb-8 max-w-xl">
                اكتشف أفضل شركات الخدمات المعتمدة في مدينتك.
                نقل عفش، تنظيف، مكافحة حشرات، صيانة وأكثر.
              </p>

              {/* Quick City Links */}
              <div className="flex flex-wrap gap-3">
                {majorCities.map(city => (
                  <Link
                    key={city.slug}
                    href={`/${city.slug}/furniture-moving`}
                    className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-full text-sm font-medium transition-colors backdrop-blur-sm"
                  >
                    {city.name_ar}
                  </Link>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-16 max-w-lg">
              <div className="text-center">
                <p className="text-3xl font-bold">+500</p>
                <p className="text-emerald-200 text-sm">شركة مسجلة</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold">25</p>
                <p className="text-emerald-200 text-sm">مدينة</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold">18</p>
                <p className="text-emerald-200 text-sm">خدمة</p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Services */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                خدماتنا الرئيسية
              </h2>
              <p className="text-gray-500 mt-2">
                أكثر من 18 خدمة تغطي جميع احتياجاتك
              </p>
            </div>
            <Link
              href="/services"
              className="hidden sm:flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-medium"
            >
              جميع الخدمات
              <ArrowLeft className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {featuredServices.map(service => (
              <Link
                key={service.slug}
                href={`/riyadh/${service.slug}`}
                className="group p-6 bg-white rounded-2xl border border-gray-200 hover:border-emerald-300 hover:shadow-lg transition-all text-center"
              >
                <div className="w-14 h-14 mx-auto mb-4 bg-emerald-50 group-hover:bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 transition-colors">
                  {serviceIcons[service.slug] || <Wrench className="w-6 h-6" />}
                </div>
                <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors">
                  {service.name_ar}
                </h3>
              </Link>
            ))}
          </div>
        </section>

        {/* Browse by City */}
        <section className="bg-gray-100 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                تصفح حسب المدينة
              </h2>
              <p className="text-gray-500 mt-2">
                25 مدينة سعودية مغطاة بخدماتنا
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(citiesByRegion).map(([region, cities]) => (
                <div key={region} className="bg-white rounded-2xl p-6 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-emerald-500" />
                    {region === 'central' && 'المنطقة الوسطى'}
                    {region === 'western' && 'المنطقة الغربية'}
                    {region === 'eastern' && 'المنطقة الشرقية'}
                    {region === 'northern' && 'المنطقة الشمالية'}
                    {region === 'southern' && 'المنطقة الجنوبية'}
                  </h3>
                  <div className="space-y-2">
                    {cities.map(city => (
                      <Link
                        key={city.slug}
                        href={`/${city.slug}/furniture-moving`}
                        className="flex items-center justify-between p-2 hover:bg-emerald-50 rounded-lg text-gray-700 hover:text-emerald-700 transition-colors"
                      >
                        <span>{city.name_ar}</span>
                        <ChevronLeft className="w-4 h-4" />
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              لماذا بروكر؟
            </h2>
            <p className="text-gray-500 mt-2">
              نقدم لك تجربة موثوقة وسهلة للوصول لأفضل الخدمات
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-emerald-100 rounded-2xl flex items-center justify-center">
                <Shield className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">شركات معتمدة</h3>
              <p className="text-gray-500">
                جميع الشركات المعروضة تم التحقق منها وتقييمها لضمان جودة الخدمة
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-amber-100 rounded-2xl flex items-center justify-center">
                <Star className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">تقييمات حقيقية</h3>
              <p className="text-gray-500">
                آراء وتقييمات من عملاء حقيقيين تساعدك في اتخاذ القرار الصحيح
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-2xl flex items-center justify-center">
                <Phone className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">تواصل مباشر</h3>
              <p className="text-gray-500">
                تواصل مباشرة مع الشركات عبر الهاتف أو الواتساب بضغطة زر
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-l from-emerald-600 to-emerald-700 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              هل لديك شركة خدمات؟
            </h2>
            <p className="text-emerald-100 mb-8 max-w-xl mx-auto">
              انضم إلى بروكر واحصل على عملاء جدد.
              أضف شركتك مجاناً وابدأ باستقبال الطلبات اليوم.
            </p>
            <Link
              href="/advertise"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-emerald-700 font-bold rounded-xl hover:bg-emerald-50 shadow-lg transition-colors"
            >
              أضف شركتك مجاناً
              <ArrowLeft className="w-5 h-5" />
            </Link>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </main>
    </>
  );
}
