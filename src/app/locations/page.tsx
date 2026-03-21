import { Metadata } from 'next';
import Link from 'next/link';
import { Home, ChevronLeft, MapPin } from 'lucide-react';
import { CITIES, SERVICES, REGION_NAMES, getCitiesByRegion } from '@/lib/seed';
import { BreadcrumbJsonLd, ItemListJsonLd, WebPageJsonLd } from '@/components/JsonLd';
import Footer from '@/components/Footer';
import MarketTimingBadge from '@/components/MarketTimingBadge';
import FraudAlertBanner from '@/components/FraudAlertBanner';
import LocalPresence from '@/components/LocalPresence';
import { EmergencyNightBanner } from '@/components/EmergencyNightBanner';
import { LiveAvailabilityBanner } from '@/components/LiveAvailabilityBanner';

export const metadata: Metadata = {
    title: 'مناطق الخدمة في السعودية | 24 مدينة - بروكر',
    description: 'تصفح جميع المدن والمناطق التي تغطيها خدمات بروكر في المملكة العربية السعودية. 24 مدينة في 5 مناطق تشمل الرياض، جدة، الدمام، مكة، المدينة وأكثر. شركات معتمدة في كل مدينة.',
    keywords: [
        'مناطق الخدمة السعودية',
        'مدن بروكر',
        'خدمات الرياض',
        'خدمات جدة',
        'خدمات الدمام',
        'خدمات مكة',
        'خدمات المدينة',
        'شركات خدمات منزلية',
        'دليل مدن السعودية',
        'نقل عفش السعودية',
        'تنظيف السعودية',
        'مكافحة حشرات السعودية',
    ],
    openGraph: {
        title: 'مناطق الخدمة في السعودية | بروكر',
        description: 'تصفح جميع المدن والمناطق التي تغطيها خدمات بروكر - 24 مدينة في المملكة',
        locale: 'ar_SA',
        type: 'website',
        siteName: 'بروكر',
        url: 'https://prokr.co/locations',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'مناطق الخدمة في السعودية | بروكر',
        description: '24 مدينة سعودية مع شركات خدمات معتمدة',
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
            {/* JSON-LD Schema - Cities/Locations List */}
            <BreadcrumbJsonLd items={breadcrumbs} />
            <WebPageJsonLd
                title="مناطق الخدمة"
                description={`تصفح جميع المدن والمناطق التي تغطيها خدمات بروكر - ${CITIES.length} مدينة في المملكة`}
                url="https://prokr.co/locations"
                breadcrumbs={breadcrumbs}
            />
            <ItemListJsonLd
                type="cities"
                listName="مدن ومناطق الخدمة"
                description="قائمة جميع المدن التي تغطيها خدمات بروكر في السعودية"
                items={CITIES.map(c => ({
                    name: c.name_ar,
                    url: `https://prokr.co/${c.slug}`
                }))}
            />

            <main className="min-h-screen bg-gray-50">
                {/* 🚨 Emergency Night Banner — 12AM-6AM */}
                <EmergencyNightBanner cityNameAr="المملكة" serviceNameAr="خدمات منزلية" />

                {/* Hero Section */}
                <section className="relative bg-gradient-to-bl from-sky-600 via-sky-700 to-sky-900 text-white overflow-hidden">
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute inset-0" style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                        }}></div>
                    </div>

                    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
                        <nav className="flex items-center gap-2 text-sky-100 text-sm mb-6">
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

                        <p className="text-lg text-sky-100 max-w-2xl mt-4">
                            نغطي {CITIES.length} مدينة في جميع مناطق المملكة العربية السعودية.
                            اختر مدينتك للوصول لأفضل مقدمي الخدمات.
                        </p>

                        {/* 💰 Market Timing Badge — عروض الشهر */}
                        <div className="mt-3">
                            <MarketTimingBadge compact />
                        </div>
                    </div>
                </section>

                {/* 🚗 Live Dispatch — National Locations Availability */}
                <LiveAvailabilityBanner
                    cityNameAr="المملكة"
                    serviceNameAr="خدمات منزلية"
                    totalCompanies={CITIES.length}
                />

                {/* Map Section */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {Object.entries(citiesByRegion).map(([region, cities]) => (
                            <div key={region} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                <div className="flex items-center gap-3 mb-4 pb-4 border-b border-gray-100">
                                    <div className="w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center">
                                        <MapPin className="w-5 h-5 text-sky-600" />
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
                                            className="flex items-center justify-between p-3 hover:bg-sky-50 rounded-lg text-gray-700 hover:text-sky-700 transition-colors group"
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
                <section className="bg-sky-50 py-12">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                            <div className="bg-white rounded-xl p-6 shadow-sm">
                                <p className="text-3xl font-bold text-sky-600">{CITIES.length}</p>
                                <p className="text-gray-600">مدينة</p>
                            </div>
                            <div className="bg-white rounded-xl p-6 shadow-sm">
                                <p className="text-3xl font-bold text-sky-600">5</p>
                                <p className="text-gray-600">مناطق</p>
                            </div>
                            <div className="bg-white rounded-xl p-6 shadow-sm">
                                <p className="text-3xl font-bold text-sky-600">+500</p>
                                <p className="text-gray-600">شركة مسجلة</p>
                            </div>
                            <div className="bg-white rounded-xl p-6 shadow-sm">
                                <p className="text-3xl font-bold text-sky-600">+50</p>
                                <p className="text-gray-600">خدمة متوفرة</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SEO Content Section */}
                <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <article className="prose prose-lg max-w-none">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            تغطية بروكر الشاملة في المملكة العربية السعودية
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            يغطي بروكر {CITIES.length} مدينة سعودية موزعة على 5 مناطق رئيسية:
                            المنطقة الوسطى (الرياض، الخرج، القصيم)، المنطقة الغربية (جدة، مكة، المدينة)، المنطقة الشرقية (الدمام، الخبر، الأحساء)،
                            المنطقة الشمالية (حائل، تبوك) والمنطقة الجنوبية (أبها، جازان، نجران).
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            في كل مدينة ستجد شركات معتمدة تقدم خدمات نقل العفش، تنظيف المنازل، مكافحة الحشرات، كشف تسربات المياه، عزل خزانات، وخدمات الصرف الصحي.
                            جميع الشركات مرخصة وتقدم ضماناً على خدماتها مع أسعار تنافسية.
                        </p>
                    </article>

                    {/* Locations FAQ */}
                    <div className="mt-8 space-y-4 not-prose" itemScope itemType="https://schema.org/FAQPage">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">أسئلة شائعة عن مناطق الخدمة</h3>
                        <div className="bg-white border border-gray-200 rounded-xl p-4" itemScope itemType="https://schema.org/Question">
                            <h4 className="font-bold text-gray-800 mb-2" itemProp="name">كم مدينة يغطيها بروكر؟</h4>
                            <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                                <p className="text-gray-600" itemProp="text">يغطي بروكر {CITIES.length} مدينة سعودية موزعة على 5 مناطق رئيسية تشمل المنطقة الوسطى والغربية والشرقية والشمالية والجنوبية.</p>
                            </div>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-xl p-4" itemScope itemType="https://schema.org/Question">
                            <h4 className="font-bold text-gray-800 mb-2" itemProp="name">هل تغطون جميع أحياء المدينة؟</h4>
                            <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                                <p className="text-gray-600" itemProp="text">نعم، الشركات المسجلة في بروكر تغطي جميع أحياء ومناطق كل مدينة. يمكنك اختيار المدينة ثم الخدمة المطلوبة للعثور على أقرب شركة لموقعك.</p>
                            </div>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-xl p-4" itemScope itemType="https://schema.org/Question">
                            <h4 className="font-bold text-gray-800 mb-2" itemProp="name">ما الخدمات المتوفرة في كل مدينة؟</h4>
                            <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                                <p className="text-gray-600" itemProp="text">يوفر بروكر خدمات متخصصة في كل مدينة تشمل نقل العفش، التنظيف، مكافحة الحشرات، كشف تسربات المياه، عزل الخزانات والأسطح، وخدمات الصرف الصحي.</p>
                            </div>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-xl p-4" itemScope itemType="https://schema.org/Question">
                            <h4 className="font-bold text-gray-800 mb-2" itemProp="name">هل الأسعار تختلف بين المدن؟</h4>
                            <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                                <p className="text-gray-600" itemProp="text">نعم، تختلف الأسعار بين المدن حسب تكلفة المعيشة والطلب. الأسعار في الرياض وجدة أعلى بنسبة 10-20% مقارنة بالمدن الأصغر. يمكنك مقارنة الأسعار عبر بروكر.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 🛡️ Consumer Protection Alert — Consumer Protection Banner */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <FraudAlertBanner serviceName="خدمات منزلية" serviceSlug="cleaning" cityName="السعودية" />
                </section>

                {/* Local Service Area — National Signal */}
                <LocalPresence citySlug="riyadh" serviceSlug="city-hub" serviceName="خدمات منزلية" serviceCategory="cleaning" />

                <Footer />
            </main>
        </>
    );
}
