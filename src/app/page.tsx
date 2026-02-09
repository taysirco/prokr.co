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
  ChevronLeft,
  Search,
  Building2,
  Award,
  Zap,
  BadgeCheck,
  MessageCircle,
  ThumbsUp,
  BookOpen,
} from 'lucide-react';
import { CITIES, SERVICES, getCitiesByRegion } from '@/lib/seed';
import { BLOG_ARTICLES } from '@/lib/blog-data';
import Footer from '@/components/Footer';
import { WebsiteJsonLd, ProkrOrganizationJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';

// Service icons mapping
const serviceIcons: Record<string, React.ReactNode> = {
  'furniture-moving': <Truck className="w-7 h-7" />,
  'furniture-storage': <Building2 className="w-7 h-7" />,
  'dyna': <Truck className="w-7 h-7" />,
  'cleaning': <Sparkles className="w-7 h-7" />,
  'apartments-cleaning': <Sparkles className="w-7 h-7" />,
  'villas-cleaning': <Sparkles className="w-7 h-7" />,
  'pest-control': <Bug className="w-7 h-7" />,
  'water-leak-detection': <Droplet className="w-7 h-7" />,
  'tank-insulation': <Shield className="w-7 h-7" />,
  'sofa-cleaning': <Sparkles className="w-7 h-7" />,
};

// Region names in Arabic
const regionNames: Record<string, string> = {
  central: 'المنطقة الوسطى',
  western: 'المنطقة الغربية',
  eastern: 'المنطقة الشرقية',
  northern: 'المنطقة الشمالية',
  southern: 'المنطقة الجنوبية',
};

export default function HomePage() {
  const citiesByRegion = getCitiesByRegion();

  // Featured services (most popular)
  const featuredServices = SERVICES.slice(0, 8);

  // Major cities
  const majorCities = CITIES.filter(c =>
    ['riyadh', 'jeddah', 'dammam', 'makkah', 'madinah', 'khobar'].includes(c.slug)
  );

  return (
    <>
      <WebsiteJsonLd
        url="https://prokr.co"
        name="بروكر - دليل الخدمات السعودي"
        description="دليل شامل لأفضل شركات الخدمات في المملكة العربية السعودية"
      />
      <ProkrOrganizationJsonLd />
      <BreadcrumbJsonLd items={[{ name: 'الرئيسية', url: 'https://prokr.co' }]} />
      {/* Homepage FAQ JSON-LD for rich results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'ما هو بروكر؟',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'بروكر هو أكبر دليل إلكتروني للخدمات المنزلية في المملكة العربية السعودية. يربط بين أكثر من 500 شركة معتمدة والعملاء في 24 مدينة سعودية، ويوفر خدمات نقل العفش، التنظيف، مكافحة الحشرات، كشف التسربات والمزيد.',
                },
              },
              {
                '@type': 'Question',
                name: 'هل استخدام بروكر مجاني؟',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'نعم، استخدام بروكر مجاني تماماً للعملاء. يمكنك تصفح الشركات، مقارنة الأسعار، وقراءة التقييمات والتواصل مع الشركات مباشرة بدون أي رسوم.',
                },
              },
              {
                '@type': 'Question',
                name: 'كيف أختار الشركة المناسبة؟',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'اختر مدينتك والخدمة المطلوبة، ثم قارن بين الشركات المتاحة من حيث التقييمات والأسعار. ننصح بالتواصل مع 3 شركات على الأقل للحصول على أفضل عرض، والتأكد من وجود ضمان مكتوب.',
                },
              },
              {
                '@type': 'Question',
                name: 'هل الشركات في بروكر معتمدة؟',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'نعم، جميع الشركات المعروضة على بروكر تم التحقق من تراخيصها وجودة خدماتها. الشركات المميزة (Premium) حصلت على شارة التوثيق بعد اجتيازها معايير صارمة تشمل الترخيص والتأمين وتقييمات العملاء.',
                },
              },
              {
                '@type': 'Question',
                name: 'ما المدن التي يغطيها بروكر؟',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'يغطي بروكر 24 مدينة سعودية تشمل الرياض، جدة، الدمام، مكة، المدينة، الطائف، الخبر، الأحساء، تبوك، حائل، أبها، خميس مشيط، نجران، جازان، الباحة، القصيم، وغيرها. نتوسع باستمرار لتغطية مدن جديدة.',
                },
              },
            ],
          }),
        }}
      />

      {/* Homepage Reviews JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'بروكر',
            url: 'https://prokr.co',
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4.9',
              bestRating: '5',
              worstRating: '1',
              ratingCount: '3',
              reviewCount: '3',
            },
            review: [
              {
                '@type': 'Review',
                author: { '@type': 'Person', name: 'أحمد محمد' },
                reviewRating: { '@type': 'Rating', ratingValue: 5, bestRating: 5 },
                reviewBody: 'وجدت شركة نقل عفش ممتازة في الرياض خلال دقائق. الخدمة كانت احترافية والأسعار معقولة جداً.',
              },
              {
                '@type': 'Review',
                author: { '@type': 'Person', name: 'سارة عبدالله' },
                reviewRating: { '@type': 'Rating', ratingValue: 5, bestRating: 5 },
                reviewBody: 'كنت أبحث عن شركة مكافحة حشرات موثوقة. بروكر سهّل عليّ المهمة بتوفير قائمة الشركات مع التقييمات.',
              },
              {
                '@type': 'Review',
                author: { '@type': 'Person', name: 'محمد العتيبي' },
                reviewRating: { '@type': 'Rating', ratingValue: 5, bestRating: 5 },
                reviewBody: 'منصة رائعة وسهلة الاستخدام. تواصلت مع 3 شركات تنظيف وحصلت على أفضل عرض. أنصح الجميع باستخدامها.',
              },
            ],
          }),
        }}
      />
      {/* SiteNavigationElement JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: 'القائمة الرئيسية',
            itemListElement: [
              { '@type': 'SiteNavigationElement', position: 1, name: 'الرئيسية', url: 'https://prokr.co' },
              { '@type': 'SiteNavigationElement', position: 2, name: 'جميع الخدمات', url: 'https://prokr.co/services' },
              { '@type': 'SiteNavigationElement', position: 3, name: 'المدن', url: 'https://prokr.co/locations' },
              { '@type': 'SiteNavigationElement', position: 4, name: 'المدونة', url: 'https://prokr.co/blog' },
              { '@type': 'SiteNavigationElement', position: 5, name: 'أضف إعلانك', url: 'https://prokr.co/advertise' },
              { '@type': 'SiteNavigationElement', position: 6, name: 'من نحن', url: 'https://prokr.co/about-us' },
              { '@type': 'SiteNavigationElement', position: 7, name: 'تواصل معنا', url: 'https://prokr.co/contact-us' },
            ],
          }),
        }}
      />

      <main className="min-h-screen">
        {/* Hero Section - Premium Design */}
        <section className="relative bg-gradient-to-bl from-emerald-600 via-emerald-700 to-emerald-900 text-white overflow-hidden min-h-[85vh] flex items-center">
          {/* Animated Background Pattern */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 opacity-[0.08]" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}></div>
            {/* Gradient Overlay */}
            <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-emerald-900/50 to-transparent"></div>
          </div>

          {/* Floating Shapes */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl"></div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Text Content */}
              <div className="text-center lg:text-right">
                {/* Trust Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6 border border-white/20">
                  <BadgeCheck className="w-5 h-5 text-amber-400" />
                  <span className="text-sm font-medium">المنصة الأولى للخدمات في المملكة</span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                  بروكر - أكبر دليل
                  <span className="block bg-gradient-to-l from-amber-300 to-amber-400 bg-clip-text text-transparent">
                    خدمات منزلية
                  </span>
                  <span className="block text-emerald-100">في المملكة العربية السعودية</span>
                </h1>

                <p className="text-xl text-emerald-100/90 mb-8 max-w-xl mx-auto lg:mx-0 lg:mr-0">
                  منصة موثوقة تجمع أفضل مقدمي خدمات نقل العفش، التنظيف، مكافحة الحشرات، والصيانة في المملكة العربية السعودية
                </p>

                {/* Search Bar */}
                <form action="/search" method="GET" className="relative max-w-xl mx-auto lg:mx-0 lg:mr-0 mb-8">
                  <div className="relative">
                    <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" />
                    <input
                      type="text"
                      name="q"
                      placeholder="ابحث عن خدمة أو مدينة..."
                      className="w-full pr-14 pl-32 py-4 bg-white rounded-2xl text-gray-900 placeholder-gray-400 shadow-2xl shadow-emerald-900/30 focus:outline-none focus:ring-4 focus:ring-white/30"
                    />
                    <button type="submit" className="absolute left-2 top-1/2 -translate-y-1/2 px-6 py-2.5 bg-gradient-to-l from-emerald-600 to-emerald-700 text-white font-medium rounded-xl hover:from-emerald-700 hover:to-emerald-800 transition-all shadow-lg">
                      بحث
                    </button>
                  </div>
                </form>

                {/* Quick City Links */}
                <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                  <span className="text-emerald-200 text-sm">المدن الرئيسية:</span>
                  {majorCities.map(city => (
                    <Link
                      key={city.slug}
                      href={`/${city.slug}`}
                      className="px-3 py-1.5 bg-white/15 hover:bg-white/25 rounded-full text-sm font-medium transition-all backdrop-blur-sm border border-white/10 hover:border-white/30"
                    >
                      {city.name_ar}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Stats Cards - Right Side */}
              <div className="hidden lg:grid grid-cols-2 gap-4">
                {/* Stat Card 1 */}
                <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20 hover:bg-white/15 transition-all group">
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-400 to-amber-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-amber-500/30 group-hover:scale-110 transition-transform">
                    <Building2 className="w-7 h-7 text-white" />
                  </div>
                  <p className="text-4xl font-bold mb-1">+500</p>
                  <p className="text-emerald-200">شركة مسجلة</p>
                </div>

                {/* Stat Card 2 */}
                <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20 hover:bg-white/15 transition-all group">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-blue-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform">
                    <MapPin className="w-7 h-7 text-white" />
                  </div>
                  <p className="text-4xl font-bold mb-1">24</p>
                  <p className="text-emerald-200">مدينة سعودية</p>
                </div>

                {/* Stat Card 3 */}
                <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20 hover:bg-white/15 transition-all group">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-400 to-purple-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-purple-500/30 group-hover:scale-110 transition-transform">
                    <Wrench className="w-7 h-7 text-white" />
                  </div>
                  <p className="text-4xl font-bold mb-1">53</p>
                  <p className="text-emerald-200">خدمة متنوعة</p>
                </div>

                {/* Stat Card 4 */}
                <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20 hover:bg-white/15 transition-all group">
                  <div className="w-14 h-14 bg-gradient-to-br from-rose-400 to-rose-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-rose-500/30 group-hover:scale-110 transition-transform">
                    <ThumbsUp className="w-7 h-7 text-white" />
                  </div>
                  <p className="text-4xl font-bold mb-1">+10K</p>
                  <p className="text-emerald-200">عميل راضي</p>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
            <span className="text-emerald-200 text-sm">اكتشف المزيد</span>
            <ChevronLeft className="w-5 h-5 text-emerald-200 rotate-[-90deg]" />
          </div>
        </section>

        {/* Trust Indicators Bar */}
        <section className="bg-white border-b border-gray-100 py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <p className="font-bold text-gray-900">شركات موثوقة</p>
                  <p className="text-sm text-gray-500">تم التحقق من جميع الشركات</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                  <Star className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <p className="font-bold text-gray-900">تقييمات حقيقية</p>
                  <p className="text-sm text-gray-500">من عملاء فعليين</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="font-bold text-gray-900">تواصل فوري</p>
                  <p className="text-sm text-gray-500">اتصال مباشر بالشركات</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <p className="font-bold text-gray-900">24/7</p>
                  <p className="text-sm text-gray-500">خدمة على مدار الساعة</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Services - Premium Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-emerald-100 text-emerald-700 font-medium rounded-full text-sm mb-4">
              خدماتنا المميزة
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              أبرز الخدمات المتاحة في السعودية
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              نوفر لك الوصول لأفضل مقدمي الخدمات في المملكة العربية السعودية بكل سهولة وأمان
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
            {featuredServices.map((service, index) => (
              <Link
                key={service.slug}
                href={`/${service.slug}`}
                className={`group relative p-6 bg-white rounded-3xl border-2 border-gray-100 hover:border-emerald-400 hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-300 overflow-hidden ${index === 0 ? 'md:col-span-2 md:row-span-2' : ''
                  }`}
              >
                {/* Background Gradient on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div className="relative">
                  <div className={`${index === 0 ? 'w-20 h-20' : 'w-14 h-14'} mb-4 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-emerald-500/30 group-hover:scale-110 transition-transform`}>
                    {serviceIcons[service.slug] || <Wrench className={index === 0 ? 'w-10 h-10' : 'w-7 h-7'} />}
                  </div>
                  <h3 className={`font-bold text-gray-900 group-hover:text-emerald-600 transition-colors ${index === 0 ? 'text-2xl mb-3' : 'text-lg mb-1'}`}>
                    {service.name_ar}
                  </h3>
                  {index === 0 && (
                    <p className="text-gray-500 mb-4">
                      خدمات نقل العفش الاحترافية مع التغليف والفك والتركيب
                    </p>
                  )}
                  <div className="flex items-center gap-1 text-emerald-600 font-medium text-sm group-hover:gap-2 transition-all">
                    <span>استعرض الشركات</span>
                    <ArrowLeft className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-600 text-white font-bold rounded-2xl hover:bg-emerald-700 shadow-lg shadow-emerald-500/30 transition-all hover:scale-105"
            >
              عرض جميع الخدمات (53 خدمة)
              <ArrowLeft className="w-5 h-5" />
            </Link>
          </div>
        </section>

        {/* How It Works */}
        <section className="bg-gradient-to-b from-gray-50 to-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 font-medium rounded-full text-sm mb-4">
                كيف يعمل بروكر؟
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                كيف تعمل منصة بروكر
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto">
                اعثر على أفضل مقدم خدمة في دقائق معدودة
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <div className="relative text-center group">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-3xl flex items-center justify-center text-white shadow-xl shadow-emerald-500/30 group-hover:scale-110 transition-transform">
                  <Search className="w-10 h-10" />
                </div>
                <div className="absolute top-8 left-0 right-1/2 h-0.5 bg-gradient-to-l from-emerald-300 to-transparent hidden md:block"></div>
                <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 font-bold rounded-full text-sm mb-4">1</span>
                <h3 className="text-xl font-bold text-gray-900 mb-3">اختر الخدمة والمدينة</h3>
                <p className="text-gray-500">
                  تصفح خدماتنا المتنوعة واختر المدينة التي تحتاج فيها الخدمة
                </p>
              </div>

              {/* Step 2 */}
              <div className="relative text-center group">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-amber-500 to-amber-600 rounded-3xl flex items-center justify-center text-white shadow-xl shadow-amber-500/30 group-hover:scale-110 transition-transform">
                  <Star className="w-10 h-10" />
                </div>
                <div className="absolute top-8 left-1/2 right-0 h-0.5 bg-gradient-to-r from-amber-300 to-transparent hidden md:block"></div>
                <span className="inline-block px-3 py-1 bg-amber-100 text-amber-700 font-bold rounded-full text-sm mb-4">2</span>
                <h3 className="text-xl font-bold text-gray-900 mb-3">قارن بين الشركات</h3>
                <p className="text-gray-500">
                  اطلع على التقييمات والأسعار واختر الشركة الأنسب لك
                </p>
              </div>

              {/* Step 3 */}
              <div className="text-center group">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl flex items-center justify-center text-white shadow-xl shadow-blue-500/30 group-hover:scale-110 transition-transform">
                  <Phone className="w-10 h-10" />
                </div>
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 font-bold rounded-full text-sm mb-4">3</span>
                <h3 className="text-xl font-bold text-gray-900 mb-3">تواصل مباشرة</h3>
                <p className="text-gray-500">
                  اتصل أو راسل الشركة عبر الواتساب واحصل على الخدمة
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Browse by City - Premium Design */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 bg-purple-100 text-purple-700 font-medium rounded-full text-sm mb-4">
                التغطية الجغرافية
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                المدن التي نغطيها في السعودية
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto">
                24 مدينة سعودية في 5 مناطق رئيسية
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(citiesByRegion).map(([region, cities]) => (
                <div key={region} className="bg-white rounded-3xl p-6 shadow-lg shadow-gray-200/50 border border-gray-100 hover:shadow-xl hover:border-emerald-200 transition-all group">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-emerald-500/30">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-xl text-gray-900">
                      {regionNames[region]}
                    </h3>
                  </div>
                  <div className="space-y-1">
                    {cities.map(city => (
                      <Link
                        key={city.slug}
                        href={`/${city.slug}`}
                        className="flex items-center justify-between p-3 hover:bg-emerald-50 rounded-xl text-gray-700 hover:text-emerald-700 transition-all group/item"
                      >
                        <span className="font-medium">{city.name_ar}</span>
                        <ChevronLeft className="w-5 h-5 opacity-0 group-hover/item:opacity-100 -translate-x-2 group-hover/item:translate-x-0 transition-all" />
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-900 text-white py-20 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-sm text-white font-medium rounded-full text-sm mb-4">
                آراء عملائنا
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                لماذا يثق العملاء ببروكر؟
              </h2>
              <p className="text-emerald-200 max-w-2xl mx-auto">
                آلاف العملاء وثقوا ببروكر للوصول لأفضل الخدمات
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Testimonial 1 */}
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20">
                <div className="flex items-center gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map(i => (
                    <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-emerald-100 mb-6 leading-relaxed">
                  &quot;وجدت شركة نقل عفش ممتازة في الرياض خلال دقائق. الخدمة كانت احترافية والأسعار معقولة جداً. شكراً بروكر!&quot;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-500 rounded-full flex items-center justify-center text-white font-bold">
                    أ
                  </div>
                  <div>
                    <p className="font-bold">أحمد محمد</p>
                    <p className="text-emerald-300 text-sm">الرياض</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20">
                <div className="flex items-center gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map(i => (
                    <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-emerald-100 mb-6 leading-relaxed">
                  &quot;كنت أبحث عن شركة مكافحة حشرات موثوقة. بروكر سهّل عليّ المهمة بتوفير قائمة الشركات مع التقييمات.&quot;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                    س
                  </div>
                  <div>
                    <p className="font-bold">سارة عبدالله</p>
                    <p className="text-emerald-300 text-sm">جدة</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20">
                <div className="flex items-center gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map(i => (
                    <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-emerald-100 mb-6 leading-relaxed">
                  &quot;منصة رائعة وسهلة الاستخدام. تواصلت مع 3 شركات تنظيف وحصلت على أفضل عرض. أنصح الجميع باستخدامها.&quot;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                    م
                  </div>
                  <div>
                    <p className="font-bold">محمد العتيبي</p>
                    <p className="text-emerald-300 text-sm">الدمام</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Blog Articles */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-1.5 bg-amber-100 text-amber-700 font-medium rounded-full text-sm mb-4">
              أدلة ونصائح
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              مدونة بروكر
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              مقالات وأدلة شاملة لمساعدتك في اختيار الخدمة المناسبة وتوفير الوقت والمال
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BLOG_ARTICLES.slice(0, 6).map(article => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:border-emerald-300 hover:shadow-xl transition-all"
              >
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-xs font-medium mb-3">
                    {article.categoryLabel}
                  </span>
                  <h3 className="font-bold text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-500 text-sm line-clamp-2 mb-4">{article.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {article.readTime} دقائق
                    </span>
                    <span className="text-emerald-600 font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                      اقرأ المقال
                      <ArrowLeft className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gray-900 text-white font-bold rounded-2xl hover:bg-gray-800 transition-colors shadow-lg"
            >
              <BookOpen className="w-5 h-5" />
              تصفح جميع المقالات
            </Link>
          </div>
        </section>

        {/* Homepage FAQ */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">الأسئلة الشائعة عن بروكر</h2>
            <p className="text-gray-500">أجوبة على أكثر الأسئلة شيوعاً من عملائنا</p>
          </div>
          <div className="space-y-4" itemScope itemType="https://schema.org/FAQPage">
            <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm" itemScope itemType="https://schema.org/Question">
              <h3 className="font-bold text-gray-900 mb-2" itemProp="name">ما هو بروكر؟</h3>
              <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <p className="text-gray-600" itemProp="text">بروكر هو أكبر دليل إلكتروني للخدمات المنزلية في المملكة العربية السعودية. يربط بين أكثر من 500 شركة معتمدة والعملاء في 24 مدينة سعودية، ويوفر خدمات نقل العفش، التنظيف، مكافحة الحشرات، كشف التسربات والمزيد.</p>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm" itemScope itemType="https://schema.org/Question">
              <h3 className="font-bold text-gray-900 mb-2" itemProp="name">هل استخدام بروكر مجاني؟</h3>
              <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <p className="text-gray-600" itemProp="text">نعم، استخدام بروكر مجاني تماماً للعملاء. يمكنك تصفح الشركات، مقارنة الأسعار، وقراءة التقييمات والتواصل مع الشركات مباشرة بدون أي رسوم.</p>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm" itemScope itemType="https://schema.org/Question">
              <h3 className="font-bold text-gray-900 mb-2" itemProp="name">كيف أختار الشركة المناسبة؟</h3>
              <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <p className="text-gray-600" itemProp="text">اختر مدينتك والخدمة المطلوبة، ثم قارن بين الشركات المتاحة من حيث التقييمات والأسعار. ننصح بالتواصل مع 3 شركات على الأقل للحصول على أفضل عرض، والتأكد من وجود ضمان مكتوب.</p>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm" itemScope itemType="https://schema.org/Question">
              <h3 className="font-bold text-gray-900 mb-2" itemProp="name">هل الشركات في بروكر معتمدة؟</h3>
              <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <p className="text-gray-600" itemProp="text">نعم، جميع الشركات المعروضة على بروكر تم التحقق من تراخيصها وجودة خدماتها. الشركات المميزة (Premium) حصلت على شارة التوثيق بعد اجتيازها معايير صارمة تشمل الترخيص والتأمين وتقييمات العملاء.</p>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm" itemScope itemType="https://schema.org/Question">
              <h3 className="font-bold text-gray-900 mb-2" itemProp="name">ما المدن التي يغطيها بروكر؟</h3>
              <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <p className="text-gray-600" itemProp="text">يغطي بروكر 24 مدينة سعودية تشمل الرياض، جدة، الدمام، مكة، المدينة، الطائف، الخبر، الأحساء، تبوك، حائل، أبها، خميس مشيط، نجران، جازان، الباحة، القصيم، وغيرها. نتوسع باستمرار لتغطية مدن جديدة.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section - Premium */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative bg-gradient-to-bl from-amber-500 via-amber-600 to-amber-700 rounded-[2.5rem] p-10 lg:p-16 overflow-hidden">
              {/* Background Shapes */}
              <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-800/30 rounded-full blur-3xl"></div>

              <div className="relative text-center text-white">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
                  <Award className="w-5 h-5" />
                  <span className="text-sm font-medium">انضم إلى أكثر من 500 شركة</span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                  هل لديك شركة خدمات؟
                </h2>
                <p className="text-amber-100 mb-10 max-w-2xl mx-auto text-lg">
                  انضم إلى بروكر واحصل على عملاء جدد كل يوم. سجّل شركتك مجاناً وابدأ باستقبال طلبات العملاء الآن.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/advertise"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-amber-700 font-bold rounded-2xl hover:bg-amber-50 shadow-xl transition-all hover:scale-105"
                  >
                    <Building2 className="w-5 h-5" />
                    سجّل شركتك مجاناً
                  </Link>
                  <Link
                    href="/contact-us"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-amber-800/30 text-white font-bold rounded-2xl hover:bg-amber-800/50 border border-white/30 transition-all"
                  >
                    <MessageCircle className="w-5 h-5" />
                    تواصل معنا
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </main>
    </>
  );
}
