import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Home, ChevronLeft, MapPin } from 'lucide-react';
import { getServiceBySlug, getServiceImage, CITIES, SERVICES, REGION_NAMES, getCitiesByRegion } from '@/lib/seed';
import { generateServiceCategoryMeta } from '@/lib/content-layers';
import { BreadcrumbJsonLd, ServiceJsonLd, ItemListJsonLd, WebPageJsonLd, SpeakableWebPageJsonLd, DefinedTermJsonLd } from '@/components/JsonLd';
import { getCityContext, getAdjustedPriceRange } from '@/lib/city-context';
import { getServiceKeywordProfile } from '@/lib/locale-formatting';
import { CitableSummary } from '@/components/seo/CitableSummary';
import { hasPageOverride } from '@/lib/overrides/registry';
import { isAbsorbedSlug, getCanonicalSlug } from '@/lib/services/super-page-groups';
import Footer from '@/components/Footer';
import FraudAlertBanner from '@/components/FraudAlertBanner';
import { NafathVerifyBanner } from '@/components/NafathVerifyBanner';
import MarketTimingBadge from '@/components/MarketTimingBadge';
import LocalPresence from '@/components/LocalPresence';
import { LiveAvailabilityBanner } from '@/components/LiveAvailabilityBanner';
import { EmergencyNightBanner } from '@/components/EmergencyNightBanner';
import SocialShareWidget from '@/components/SocialShareWidget';
import { VisionAiWatermark } from '@/components/VisionAiWatermark';
import SourceOrderLayout from '@/components/SourceOrderLayout';

// Service definitions for DefinedTerm schema + CitableSummary
const SERVICE_DEFINITIONS: Record<string, string> = {
    'furniture-moving': 'خدمة لوجستية تشمل تغليف ونقل الأثاث المنزلي والمكتبي بين المواقع داخل المدينة أو بين المدن، بما يشمل الفك والتركيب والتأمين',
    'furniture-storage': 'خدمة تخزين الأثاث والممتلكات الشخصية في مستودعات مؤمنة ومكيفة لفترات محددة أو مفتوحة',
    'moving-out': 'خدمة شاملة لإخلاء المنازل والمكاتب تشمل التنظيف والإصلاحات والتسليم للمالك',
    'cleaning': 'خدمة تنظيف شاملة للمنازل والشقق والفلل تشمل التعقيم والتلميع وغسيل السجاد والمفروشات',
    'pest-control': 'خدمة مكافحة الحشرات والقوارض باستخدام مبيدات معتمدة من هيئة الغذاء والدواء السعودية',
    'water-leak-detection': 'خدمة كشف تسربات المياه المخفية بأجهزة إلكترونية متقدمة دون تكسير',
    'tank-insulation': 'خدمة عزل خزانات المياه الأرضية والعلوية بمواد معتمدة لمنع التسرب والتلوث',
    'sewage-unblocking': 'خدمة تسليك المجاري وشفط البيارات باستخدام أجهزة الكمبروسر والضغط العالي',
};

// Major cities for price comparison
const COMPARISON_CITIES = ['riyadh', 'jeddah', 'dammam', 'makkah', 'madinah', 'taif'];

// Base pricing for first item of each service (for comparison)
const BASE_PRICE: Record<string, { label: string; min: number; max: number }> = {
    'furniture-moving': { label: 'شقة متوسطة (3-4 غرف)', min: 800, max: 1200 },
    'cleaning': { label: 'شقة متوسطة', min: 350, max: 500 },
    'pest-control': { label: 'شقة متوسطة/كبيرة', min: 250, max: 400 },
    'water-leak-detection': { label: 'كشف بالأجهزة', min: 200, max: 400 },
    'tank-insulation': { label: 'خزان متوسط (4-8 طن)', min: 800, max: 1200 },
    'sewage-unblocking': { label: 'تسليك بالكمبروسر', min: 250, max: 500 },
};

interface ServicePageProps {
    params: Promise<{
        service: string;
    }>;
}

// Generate static params for canonical services only (absorbed slugs redirect to canonical)
export async function generateStaticParams() {
    return SERVICES.filter(s => !isAbsorbedSlug(s.slug)).map(service => ({
        service: service.slug,
    }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
    const resolvedParams = await params;
    const service = getServiceBySlug(resolvedParams.service);

    if (!service) {
        return { title: 'صفحة غير موجودة' };
    }

    const profile = getServiceKeywordProfile(service.slug);
    const aiContent = generateServiceCategoryMeta(service);
    const title = aiContent.title;
    const description = `أفضل شركات ${service.name_ar} في السعودية ✔ الرياض ✔ جدة ✔ الدمام ✔ مكة ✔ المدينة. ${profile.usp}. قارن أسعار الشركات المعتمدة في كل مدن المملكة 2026.`;

    return {
        title,
        description,
        keywords: [
            `شركة ${service.name_ar} في السعودية`,
            `أفضل شركة ${service.name_ar}`,
            `أسعار ${service.name_ar} 2026`,
            `شركات ${service.name_ar}`,
            // Synonyms for national coverage
            ...profile.synonyms.map(s => `${s} السعودية`),
            // Major cities with بـ prefix
            `شركة ${service.name_ar} بالرياض`,
            `شركة ${service.name_ar} بجدة`,
            `شركة ${service.name_ar} بالدمام`,
            `شركة ${service.name_ar} بمكة`,
            `شركة ${service.name_ar} بالمدينة`,
        ],
        openGraph: {
            title,
            description,
            locale: 'ar_SA',
            type: 'website',
            siteName: 'بروكر',
            url: `https://prokr.co/${getCanonicalSlug(resolvedParams.service) || resolvedParams.service}`,
            images: [{
                url: `https://prokr.co/${getCanonicalSlug(resolvedParams.service) || resolvedParams.service}/opengraph-image`,
                width: 1200,
                height: 630,
                alt: `شركات ${service.name_ar} في السعودية - بروكر`,
            }],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
        },
        alternates: {
            canonical: `https://prokr.co/${getCanonicalSlug(resolvedParams.service) || resolvedParams.service}`,
        },
    };
}

export default async function ServicePage({ params }: ServicePageProps) {
    const resolvedParams = await params;
    const service = getServiceBySlug(resolvedParams.service);

    if (!service) {
        notFound();
    }

    const citiesByRegion = getCitiesByRegion();
    const heroImage = getServiceImage(resolvedParams.service);
    const aiContent = generateServiceCategoryMeta(service);

    // Breadcrumb items
    const breadcrumbs = [
        { name: 'الرئيسية', url: 'https://prokr.co' },
        { name: service.name_ar, url: `https://prokr.co/${getCanonicalSlug(service.slug) || service.slug}` },
    ];

    return (
        <>
            {/* JSON-LD Schema - National Service with Cities List */}
            <BreadcrumbJsonLd items={breadcrumbs} />
            <WebPageJsonLd
                title={`${service.name_ar} في السعودية`}
                description={`اكتشف أفضل شركات ${service.name_ar} في جميع مدن المملكة العربية السعودية`}
                url={`https://prokr.co/${getCanonicalSlug(service.slug) || service.slug}`}
                breadcrumbs={breadcrumbs}
            />
            <ServiceJsonLd
                service={service}
                advertisers={[]}
                national={true}
            />
            <ItemListJsonLd
                type="cities"
                listName={`${service.name_ar} في مدن السعودية`}
                description={`قائمة المدن التي تتوفر فيها خدمة ${service.name_ar}`}
                items={CITIES.filter(c => hasPageOverride(c.slug, getCanonicalSlug(service.slug) || service.slug)).map(c => ({
                    name: c.name_ar,
                    url: `https://prokr.co/${c.slug}/${getCanonicalSlug(service.slug) || service.slug}`
                }))}
            />
            {/* DefinedTerm — Declares Prokr as the authority for this service definition */}
            <DefinedTermJsonLd
                termName={service.name_ar}
                termNameEn={service.name_en}
                description={SERVICE_DEFINITIONS[service.slug] || `خدمة ${service.name_ar} من شركات معتمدة في المملكة العربية السعودية`}
                serviceSlug={getCanonicalSlug(service.slug) || service.slug}
                category={service.category}
            />
            {/* Speakable — Tells AI which paragraph to cite */}
            <SpeakableWebPageJsonLd
                title={`${service.name_ar} في السعودية`}
                description={`اكتشف أفضل شركات ${service.name_ar} في جميع مدن المملكة العربية السعودية`}
                url={`https://prokr.co/${getCanonicalSlug(service.slug) || service.slug}`}
                speakableSelectors={['.citable-summary']}
                speakableText={`${service.name_ar} في السعودية — ${SERVICE_DEFINITIONS[service.slug] || `خدمة ${service.name_ar}`}. يتوفر في ${CITIES.length} مدينة سعودية عبر دليل بروكر المعتمد.`}
            />

            <main className="min-h-screen bg-gray-50">
                {/* 🚨 Emergency Night Banner (12AM-6AM only) */}
                <EmergencyNightBanner
                    cityNameAr="المملكة"
                    serviceNameAr={service.name_ar}
                />

                {/* Hero Section with Image */}
                <section className="relative bg-gradient-to-bl from-sky-600 via-sky-700 to-sky-900 text-white overflow-hidden">
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute inset-0" style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                        }}></div>
                    </div>

                    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                            <div>
                                {/* Breadcrumbs */}
                                <nav className="flex items-center gap-2 text-sky-100 text-sm mb-6">
                                    <Link href="/" className="hover:text-white transition-colors flex items-center gap-1">
                                        <Home className="w-4 h-4" />
                                        الرئيسية
                                    </Link>
                                    <ChevronLeft className="w-4 h-4" />
                                    <span className="text-white font-medium">{service.name_ar}</span>
                                </nav>

                                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                                    {aiContent.h1}
                                </h1>
                                <p className="text-lg text-sky-100 max-w-xl">
                                    اكتشف أفضل شركات {service.name_ar} في جميع مدن المملكة.
                                    شركات معتمدة، أسعار تنافسية، وخدمة احترافية.
                                </p>

                                {/* 💰 Market Timing Badge — عروض الشهر */}
                                <div className="mt-4">
                                    <MarketTimingBadge compact />
                                </div>

                                {/* Stats */}
                                <div className="flex flex-wrap gap-6 mt-8">
                                    <div className="flex items-center gap-2">
                                        <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                                            <MapPin className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="font-bold">{CITIES.length}</p>
                                            <p className="text-xs text-sky-200">مدينة</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Hero Image */}
                            <div className="hidden lg:block relative">
                                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                                    <Image
                                        src={heroImage}
                                        alt={`${service.name_ar} في السعودية - أفضل شركات ${service.name_ar} المعتمدة 2026 | تم التحقق عبر نفاذ SBC`}
                                        fill
                                        className="object-cover"
                                        priority
                                        fetchPriority="high"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                                        quality={90}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-sky-900/50 to-transparent"></div>
                                    <VisionAiWatermark position="top-right" size="md" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Live Availability Banner */}
                <LiveAvailabilityBanner
                    cityNameAr="المملكة"
                    serviceNameAr={service.name_ar}
                    serviceCategory={service.category}
                    totalCompanies={CITIES.filter(c => hasPageOverride(c.slug, getCanonicalSlug(service.slug) || service.slug)).length}
                />

                {/* AI-Citable Summary —格式 AI Overview 会直接引用 */}
                <CitableSummary
                    serviceName={service.name_ar}
                    locationName="المملكة العربية السعودية"
                    definition={SERVICE_DEFINITIONS[service.slug] || `خدمة ${service.name_ar} من شركات معتمدة`}
                    statText={`يتوفر في ${CITIES.filter(c => hasPageOverride(c.slug, getCanonicalSlug(service.slug) || service.slug)).length} مدينة سعودية عبر شركات مرخصة من وزارة التجارة`}
                />

                {/* 🔍 Content-first layout
                    Source order: SEO content FIRST (Google reads this first)
                    Visual order: City listings FIRST (user sees this first via column-reverse) */}
                <SourceOrderLayout
                    pageContent={
                        <>
                            {/* SEO Content */}
                            <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                                <article className="prose prose-lg prose-sky max-w-none">
                                    <h2 className="text-2xl font-bold text-gray-900 mb-6">
                                        {service.name_ar} في المملكة العربية السعودية
                                    </h2>

                                    <div className="bg-sky-50 p-6 rounded-xl border-r-4 border-sky-500 mb-8">
                                        <p className="text-gray-700 leading-relaxed font-medium">
                                            تقدم بروكر دليلاً شاملاً لأفضل شركات {service.name_ar} في جميع مدن المملكة العربية السعودية.
                                            بناءً على تحليل أكثر من 500 شركة مسجلة في {CITIES.length} مدينة، نساعدك في العثور على الشركة المناسبة
                                            بسهولة من خلال مقارنة الأسعار والتقييمات والتواصل المباشر مع مقدمي الخدمة.
                                            جميع الشركات المعتمدة مرخصة وفقاً لاشتراطات وزارة التجارة السعودية.
                                        </p>
                                        <p className="text-xs text-gray-500 mt-3">
                                            آخر تحديث: {new Date().toISOString().split('T')[0]} | وفقاً لمعايير هيئة المواصفات السعودية (SASO)
                                        </p>
                                    </div>

                                    {/* Inter-City Price Comparison Table */}
                                    <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">
                                        مقارنة أسعار {service.name_ar} بين المدن الرئيسية (2026)
                                    </h3>
                                    {(() => {
                                        const basePrice = BASE_PRICE[service.slug];
                                        if (!basePrice) return null;
                                        return (
                                            <div className="overflow-x-auto mb-8 not-prose">
                                                <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200">
                                                    <caption className="text-sm text-gray-500 mb-2 text-right">
                                                        * الأسعار تقريبية لخدمة {basePrice.label} بالريال السعودي
                                                    </caption>
                                                    <thead>
                                                        <tr className="bg-sky-50 text-gray-700 border-b border-gray-200">
                                                            <th className="text-right p-4 font-semibold">المدينة</th>
                                                            <th className="text-right p-4 font-semibold">السعر المتوقع</th>
                                                            <th className="text-right p-4 font-semibold">الرابط</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="divide-y divide-gray-100">
                                                        {COMPARISON_CITIES.filter(cs => hasPageOverride(cs, getCanonicalSlug(service.slug) || service.slug)).map(citySlug => {
                                                            const ctx = getCityContext(citySlug);
                                                            if (!ctx) return null;
                                                            return (
                                                                <tr key={citySlug} className="hover:bg-gray-50">
                                                                    <td className="p-4 text-gray-800 font-medium">{ctx.name_ar}</td>
                                                                    <td className="p-4 text-sky-600 font-bold" dir="ltr">
                                                                        {getAdjustedPriceRange(basePrice.min, basePrice.max, citySlug)}
                                                                    </td>
                                                                    <td className="p-4">
                                                                        <Link href={`/${citySlug}/${getCanonicalSlug(service.slug) || service.slug}`} className="text-sky-600 hover:text-sky-800 underline text-sm">
                                                                            عرض الشركات
                                                                        </Link>
                                                                    </td>
                                                                </tr>
                                                            );
                                                        })}
                                                    </tbody>
                                                </table>
                                            </div>
                                        );
                                    })()}

                                    <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">
                                        لماذا تختار بروكر لخدمة {service.name_ar}؟
                                    </h3>
                                    <ul className="text-gray-600 space-y-2">
                                        <li>✓ شركات معتمدة ومرخصة رسمياً من وزارة التجارة</li>
                                        <li>✓ أسعار تنافسية ومناسبة مع ضمان على الخدمة</li>
                                        <li>✓ تقييمات حقيقية من عملاء سابقين</li>
                                        <li>✓ تواصل مباشر مع مقدمي الخدمة عبر الهاتف والواتساب</li>
                                        <li>✓ تغطية شاملة لجميع {CITIES.length} مدينة في المملكة</li>
                                        <li>✓ مقارنة فورية بين العروض والأسعار</li>
                                    </ul>

                                    {/* National FAQ */}
                                    <h3 className="text-xl font-bold text-gray-900 mt-10 mb-4">
                                        أسئلة شائعة عن {service.name_ar}
                                    </h3>
                                    <div className="space-y-4 not-prose" itemScope itemType="https://schema.org/FAQPage">
                                        <div className="bg-white border border-gray-200 rounded-xl p-4" itemScope itemType="https://schema.org/Question">
                                            <h4 className="font-bold text-gray-800 mb-2" itemProp="name">كم تكلفة {service.name_ar} في السعودية؟</h4>
                                            <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                                                <p className="text-gray-600" itemProp="text">تختلف الأسعار حسب المدينة وحجم العمل. الأسعار في الرياض وجدة أعلى بنسبة 10-20% مقارنة بالمدن الأصغر. استخدم بروكر للحصول على عروض أسعار مجانية من شركات معتمدة.</p>
                                            </div>
                                        </div>
                                        <div className="bg-white border border-gray-200 rounded-xl p-4" itemScope itemType="https://schema.org/Question">
                                            <h4 className="font-bold text-gray-800 mb-2" itemProp="name">في أي مدن تتوفر خدمة {service.name_ar}؟</h4>
                                            <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                                                <p className="text-gray-600" itemProp="text">تتوفر خدمة {service.name_ar} عبر بروكر في {CITIES.length} مدينة سعودية تشمل الرياض، جدة، الدمام، مكة، المدينة، والمزيد.</p>
                                            </div>
                                        </div>
                                        <div className="bg-white border border-gray-200 rounded-xl p-4" itemScope itemType="https://schema.org/Question">
                                            <h4 className="font-bold text-gray-800 mb-2" itemProp="name">كيف أختار شركة {service.name_ar} موثوقة؟</h4>
                                            <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                                                <p className="text-gray-600" itemProp="text">تحقق من ترخيص الشركة، اقرأ تقييمات العملاء، قارن بين 3 عروض على الأقل، وتأكد من وجود ضمان مكتوب. بروكر يعرض فقط الشركات التي تم التحقق منها.</p>
                                            </div>
                                        </div>
                                        <div className="bg-white border border-gray-200 rounded-xl p-4" itemScope itemType="https://schema.org/Question">
                                            <h4 className="font-bold text-gray-800 mb-2" itemProp="name">هل يوجد ضمان على {service.name_ar}؟</h4>
                                            <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                                                <p className="text-gray-600" itemProp="text">نعم، جميع الشركات المعتمدة في بروكر ملزمة بتقديم ضمان يتراوح بين 3 أشهر وسنة كاملة حسب نوع الخدمة. الضمان يُوثق في عقد مكتوب.</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Other Services */}
                                    <div className="mt-8 not-prose">
                                        <section className="bg-gray-100 py-12 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 rounded-xl">
                                            <h2 className="text-xl font-bold text-gray-900 mb-6">خدمات أخرى</h2>
                                            <div className="flex flex-wrap gap-3">
                                                {SERVICES.filter(s => s.slug !== service.slug && !isAbsorbedSlug(s.slug)).slice(0, 12).map(otherService => (
                                                    <Link
                                                        key={otherService.slug}
                                                        href={`/${otherService.slug}`}
                                                        className="px-4 py-2 bg-white border border-gray-200 rounded-lg hover:border-sky-300 hover:shadow-md transition-all text-gray-700 hover:text-sky-700"
                                                    >
                                                        {otherService.name_ar}
                                                    </Link>
                                                ))}
                                            </div>
                                        </section>
                                    </div>
                                </article>
                            </section>

                            {/* 🛡️ Consumer Protection Alert */}
                            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                                <FraudAlertBanner serviceName={service.name_ar} serviceSlug={service.slug} cityName="السعودية" />
                            </section>

                            {/* 🛡️ Nafath Trust Shield */}
                            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
                                <NafathVerifyBanner serviceNameAr={service.name_ar} cityNameAr="المملكة" />
                            </section>

                            {/* Local Service Area */}
                            <LocalPresence citySlug="riyadh" serviceSlug={resolvedParams.service} serviceName={service.name_ar} serviceCategory={service.category} />
                        </>
                    }
                >
                    {/* Cities by Region */}
                    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-8">
                            اختر مدينتك لخدمة {service.name_ar}
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {Object.entries(citiesByRegion).map(([region, cities]) => (
                                <div key={region} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                                    <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                                        <MapPin className="w-5 h-5 text-sky-500" />
                                        {REGION_NAMES[region] || region}
                                    </h3>
                                    <div className="space-y-2">
                                        {cities.filter(city => hasPageOverride(city.slug, getCanonicalSlug(service.slug) || service.slug)).map(city => (
                                            <Link
                                                key={city.slug}
                                                href={`/${city.slug}/${getCanonicalSlug(service.slug) || service.slug}`}
                                                className="flex items-center justify-between p-3 hover:bg-sky-50 rounded-lg text-gray-700 hover:text-sky-700 transition-colors group"
                                            >
                                                <span>{city.name_ar}</span>
                                                <ChevronLeft className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Content rule: NO مقالات ذات صلة on silos */}

                    {/* 📱 Dark Social Share — National Service Page */}
                    <SocialShareWidget
                        variant="service"
                        serviceName={service.name_ar}
                        cityName="السعودية"
                        citySlug="saudi"
                        serviceSlug={getCanonicalSlug(service.slug) || service.slug}
                        totalCompanies={CITIES.length}
                    />
                </SourceOrderLayout>

                <Footer currentService={resolvedParams.service} />
            </main>
        </>
    );
}
