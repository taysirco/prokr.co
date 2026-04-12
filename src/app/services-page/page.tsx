import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Home, ChevronLeft, Truck, Sparkles, Bug, Droplet, Wrench, Building2 } from 'lucide-react';
import { SERVICES, CITIES, CATEGORY_NAMES, getServicesByCategory, getServiceImage } from '@/lib/seed';
import { BreadcrumbJsonLd, ServiceCatalogJsonLd, WebPageJsonLd, SpeakableJsonLd } from '@/components/JsonLd';
import { VisionAiWatermark } from '@/components/VisionAiWatermark';
import { isAbsorbedSlug } from '@/lib/services/super-page-groups';
import Footer from '@/components/Footer';
import FaqAccordion from '@/components/FaqAccordion';
import MarketTimingBadge from '@/components/MarketTimingBadge';
import FraudAlertBanner from '@/components/FraudAlertBanner';
import LocalPresence from '@/components/LocalPresence';
import { EmergencyNightBanner } from '@/components/EmergencyNightBanner';
import { LiveAvailabilityBanner } from '@/components/LiveAvailabilityBanner';

export const metadata: Metadata = {
    title: 'جميع الخدمات المنزلية في السعودية - بروكر',
    description: 'تصفح جميع خدمات بروكر: نقل عفش، تنظيف منازل، مكافحة حشرات، كشف تسربات، عزل خزانات، صرف صحي وأكثر. خدمات متخصصة في 30 مدينة سعودية مع شركات معتمدة.',
    keywords: [
        'خدمات منزلية السعودية',
        'شركات خدمات',
        'نقل عفش في السعودية',
        'أفضل شركة نقل عفش',
        'نقل عفش رخيص',
        'تنظيف منازل',
        'مكافحة حشرات',
        'كشف تسربات المياه',
        'عزل خزانات',
        'صرف صحي',
        'تنظيف كنب',
        'تنظيف سجاد',
        'رش مبيدات',
        'أسعار نقل عفش',
    ],
    openGraph: {
        title: 'جميع الخدمات المنزلية في السعودية | بروكر',
        description: '54 خدمة منزلية في 30 مدينة سعودية - شركات معتمدة وأسعار تنافسية',
        locale: 'ar_SA',
        type: 'website',
        siteName: 'بروكر',
        url: 'https://prokr.co/services',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'جميع الخدمات المنزلية في السعودية | بروكر',
        description: '54 خدمة في 30 مدينة - شركات معتمدة',
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
            {/* JSON-LD Schema - All Services Catalog */}
            <BreadcrumbJsonLd items={breadcrumbs} />
            <WebPageJsonLd
                title="جميع الخدمات"
                description="دليل شامل لجميع خدمات بروكر في المملكة العربية السعودية"
                url="https://prokr.co/services"
                breadcrumbs={breadcrumbs}
            />
            <ServiceCatalogJsonLd services={SERVICES.filter(s => !isAbsorbedSlug(s.slug))} />
            {/* §14 Voice Search — Speakable */}
            <SpeakableJsonLd url="https://prokr.co/services" cssSelector={['h1', '.prose p:first-of-type', '.prose h2']} />
            {/* FAQPage JSON-LD — services FAQ */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'FAQPage',
                        mainEntity: [
                            { '@type': 'Question', name: 'كم عدد الخدمات المتوفرة في بروكر؟', acceptedAnswer: { '@type': 'Answer', text: 'يوفر بروكر خدمات منزلية وتجارية متخصصة تشمل نقل العفش، التنظيف بجميع أنواعه، مكافحة الحشرات، كشف تسربات المياه، عزل الخزانات والأسطح، وخدمات الصرف الصحي.' } },
                            { '@type': 'Question', name: 'كيف أجد شركة لخدمة معينة؟', acceptedAnswer: { '@type': 'Answer', text: 'اختر الخدمة المطلوبة من القائمة، ثم حدد مدينتك، وستظهر لك جميع الشركات المعتمدة التي تقدم هذه الخدمة في منطقتك مع التقييمات والأسعار.' } },
                            { '@type': 'Question', name: 'هل جميع الخدمات متوفرة في كل المدن؟', acceptedAnswer: { '@type': 'Answer', text: `نعم، جميع الخدمات الأساسية متوفرة في كل المدن الـ ${CITIES.length} التي يغطيها بروكر. بعض الخدمات المتخصصة قد تكون متاحة في المدن الكبرى فقط.` } },
                            { '@type': 'Question', name: 'هل يمكنني مقارنة الأسعار بين الشركات؟', acceptedAnswer: { '@type': 'Answer', text: 'نعم، يتيح بروكر مقارنة الأسعار والتقييمات بين الشركات المختلفة. كل شركة تعرض أسعارها التقريبية وتقييمات العملاء السابقين.' } },
                        ],
                    }),
                }}
            />

            <main className="min-h-screen bg-gray-50">
                {/* 🚨 Emergency Night Banner — 12AM-6AM */}
                <EmergencyNightBanner cityNameAr="المملكة" serviceNameAr="خدمات منزلية" />

                {/* Hero Section */}
                <section className="hero-gradient relative text-white overflow-hidden" data-hero-gradient style={{ background: 'linear-gradient(to bottom left, #0369a1, #0c4a6e, #082f49)' }}>
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
                            <span className="text-white font-medium">الخدمات</span>
                        </nav>

                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                            جميع الخدمات
                        </h1>
                        <p className="text-lg text-sky-100 max-w-2xl">
                            تصفح خدماتنا المتخصصة المتوفرة في جميع مدن المملكة العربية السعودية.
                            من نقل العفش إلى التنظيف ومكافحة الحشرات.
                        </p>

                        {/* 💰 Market Timing Badge — عروض الشهر */}
                        <div className="mt-4">
                            <MarketTimingBadge compact />
                        </div>
                    </div>
                </section>

                {/* 🚗 Live Dispatch — National Services Availability */}
                <LiveAvailabilityBanner
                    cityNameAr="المملكة"
                    serviceNameAr="خدمات منزلية"
                    totalCompanies={SERVICES.filter(s => !isAbsorbedSlug(s.slug)).length}
                />

                {/* Services by Category */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    {Object.entries(servicesByCategory).map(([category, services]) => (
                        <div key={category} className="mb-12">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center text-sky-600">
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
                                {services.filter(s => !isAbsorbedSlug(s.slug)).map(service => (
                                    <Link
                                        key={service.slug}
                                        href={`/${service.slug}`}
                                        className="group relative bg-white rounded-xl border border-gray-200 hover:border-sky-300 hover:shadow-lg transition-all overflow-hidden"
                                    >
                                        <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
                                            <Image
                                                src={getServiceImage(service.slug)}
                                                alt={`${service.name_ar} - أفضل شركات ${service.name_ar} في السعودية | تم التحقق عبر نفاذ SBC`}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                                                sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                            <VisionAiWatermark position="top-right" size="xs" />
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

                {/* SEO Content Section */}
                <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-gray-200">
                    <article className="prose prose-lg max-w-none">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            دليل الخدمات المنزلية الشامل في السعودية
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            يقدم بروكر خدمات منزلية وتجارية متخصصة تغطي 30 مدينة سعودية.
                            تشمل خدماتنا نقل العفش بجميع أنواعه، تنظيف المنازل والفلل والشقق،
                            مكافحة الحشرات ورش المبيدات، كشف تسربات المياه، عزل الخزانات والأسطح، وخدمات الصرف الصحي.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            جميع الشركات المدرجة في بروكر معتمدة ومرخصة، وتقدم ضماناً على الخدمات المقدمة.
                            اختر الخدمة التي تحتاجها، ثم اختر مدينتك، وقارن بين الشركات المتاحة من حيث التقييمات والأسعار.
                        </p>
                    </article>

                    {/* Services FAQ — Interactive Accordion + JSON-LD above */}
                    <div className="mt-8">
                        <FaqAccordion
                            items={[
                                { question: 'كم عدد الخدمات المتوفرة في بروكر؟', answer: 'يوفر بروكر خدمات منزلية وتجارية متخصصة تشمل نقل العفش، التنظيف بجميع أنواعه، مكافحة الحشرات، كشف تسربات المياه، عزل الخزانات والأسطح، وخدمات الصرف الصحي.' },
                                { question: 'كيف أجد شركة لخدمة معينة؟', answer: 'اختر الخدمة المطلوبة من القائمة، ثم حدد مدينتك، وستظهر لك جميع الشركات المعتمدة التي تقدم هذه الخدمة في منطقتك مع التقييمات والأسعار.' },
                                { question: 'هل جميع الخدمات متوفرة في كل المدن؟', answer: `نعم، جميع الخدمات الأساسية متوفرة في كل المدن الـ ${CITIES.length} التي يغطيها بروكر. بعض الخدمات المتخصصة قد تكون متاحة في المدن الكبرى فقط.` },
                                { question: 'هل يمكنني مقارنة الأسعار بين الشركات؟', answer: 'نعم، يتيح بروكر مقارنة الأسعار والتقييمات بين الشركات المختلفة. كل شركة تعرض أسعارها التقريبية وتقييمات العملاء السابقين.' },
                            ]}
                            cityName="السعودية"
                            serviceName="الخدمات المنزلية"
                        />
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
