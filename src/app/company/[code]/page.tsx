import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
    Home,
    ChevronLeft,
    Star,
    Phone,
    MessageCircle,
    BadgeCheck,
    MapPin,
    Clock,
    Shield,
    Share2,
    Heart,
    Camera,
    CheckCircle
} from 'lucide-react';
import { getCityBySlug, getServiceBySlug } from '@/lib/seed';
import { getCityKeyword } from '@/lib/keyword-strategy';
import { getAdvertiserByCode } from '@/lib/db-actions';
import { getCanonicalSlug } from '@/lib/services/super-page-groups';
import { hasPageOverride } from '@/lib/overrides/registry';
import { LocalBusinessJsonLd, BreadcrumbJsonLd, OrganizationJsonLd, WebPageJsonLd } from '@/components/JsonLd';
import Footer from '@/components/Footer';
import FraudAlertBanner from '@/components/FraudAlertBanner';
import GeoSignals from '@/components/GeoSignals';
import type { Review, City, Service } from '@/types';

// ISR: revalidate every hour for fresh data + fast TTFB
export const revalidate = 3600;

interface CompanyPageProps {
    params: Promise<{
        code: string;
    }>;
}

// Generate metadata for SEO
export async function generateMetadata({ params }: CompanyPageProps): Promise<Metadata> {
    const resolvedParams = await params;
    const advertiser = await getAdvertiserByCode(resolvedParams.code);

    if (!advertiser) {
        return { title: 'الشركة غير موجودة' };
    }

    const mainService = advertiser.targeted_services[0];
    const service = getServiceBySlug(mainService);

    const mainCity = getCityBySlug(advertiser.targeted_cities[0]);
    const cityKw = mainCity ? getCityKeyword(mainCity.name_ar, 'ba') : '';
    const title = `${advertiser.business_name} - ${service?.name_ar || 'خدمات'}${cityKw ? ` ${cityKw}` : ''} | بروكر`;
    const description = `${advertiser.business_name} - ${advertiser.description.slice(0, 120)}. شركة معتمدة ومرخصة${cityKw ? ` ${cityKw}` : ''}.`;

    return {
        title,
        description,
        keywords: [
            advertiser.business_name,
            `${advertiser.business_name} ${service?.name_ar || ''}`,
            `تقييم ${advertiser.business_name}`,
            `رقم ${advertiser.business_name}`,
            ...(mainCity ? [`${service?.name_ar || 'خدمات'} ${mainCity.name_ar}`] : []),
            ...(service ? [`شركة ${service.name_ar}`] : []),
        ],
        openGraph: {
            title,
            description,
            images: advertiser.logo_url ? [advertiser.logo_url] : [],
            locale: 'ar_SA',
            type: 'website',
            siteName: 'بروكر',
            url: `https://prokr.co/company/${resolvedParams.code}`,
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
        },
        alternates: {
            canonical: `https://prokr.co/company/${resolvedParams.code}`,
        },
    };
}

export default async function CompanyPage({ params }: CompanyPageProps) {
    const resolvedParams = await params;
    const advertiser = await getAdvertiserByCode(resolvedParams.code);

    if (!advertiser) {
        notFound();
    }

    const mainCity = getCityBySlug(advertiser.targeted_cities[0]);
    const mainService = getServiceBySlug(advertiser.targeted_services[0]);

    // Get all targeted cities and services for schema
    const targetedCities: City[] = advertiser.targeted_cities
        .map(citySlug => getCityBySlug(citySlug))
        .filter((city): city is City => city !== undefined);

    const targetedServices: Service[] = advertiser.targeted_services
        .map(serviceSlug => getServiceBySlug(serviceSlug))
        .filter((service): service is Service => service !== undefined);

    // Get reviews (use empty array if not available)
    const reviews = advertiser.reviews || [];

    // Calculate average rating
    const avgRating = reviews.length > 0
        ? reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
        : 0;

    // Links
    const whatsappLink = `https://wa.me/${advertiser.whatsapp_number.replace(/\D/g, '')}`;
    const phoneLink = `tel:${advertiser.phone_number}`;

    // Breadcrumb items
    const breadcrumbs = [
        { name: 'الرئيسية', url: 'https://prokr.co' },
        { name: mainCity?.name_ar || 'المدن', url: `https://prokr.co/${mainCity?.slug || ''}` },
        { name: mainService?.name_ar || 'الخدمات', url: `https://prokr.co/${mainCity?.slug}/${getCanonicalSlug(mainService?.slug || '') || mainService?.slug}` },
        { name: advertiser.business_name, url: `https://prokr.co/company/${advertiser.short_code}` },
    ];

    return (
        <>
            {/* JSON-LD Schema - Company Full Data */}
            <LocalBusinessJsonLd advertiser={advertiser} city={mainCity || undefined} />
            <OrganizationJsonLd
                advertiser={advertiser}
                services={targetedServices}
                cities={targetedCities}
            />
            <BreadcrumbJsonLd items={breadcrumbs} />
            <WebPageJsonLd
                title={advertiser.business_name}
                description={`${advertiser.business_name} - ${advertiser.description.slice(0, 100)}`}
                url={`https://prokr.co/company/${advertiser.short_code}`}
                breadcrumbs={breadcrumbs}
            />

            <main className="min-h-screen bg-gray-50">
                {/* Hero Cover */}
                <section className="relative bg-gradient-to-bl from-emerald-600 via-emerald-700 to-emerald-900 text-white">
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute inset-0" style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                        }}></div>
                    </div>

                    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                        {/* Breadcrumbs */}
                        <nav className="flex items-center gap-2 text-emerald-100 text-sm mb-6">
                            <Link href="/" className="hover:text-white transition-colors flex items-center gap-1">
                                <Home className="w-4 h-4" />
                                الرئيسية
                            </Link>
                            <ChevronLeft className="w-4 h-4" />
                            <Link href={`/${mainCity?.slug}`} className="hover:text-white transition-colors">
                                {mainCity?.name_ar}
                            </Link>
                            <ChevronLeft className="w-4 h-4" />
                            {(() => {
                                const serviceSlug = getCanonicalSlug(mainService?.slug || '') || mainService?.slug;
                                const hasOverride = mainCity && serviceSlug && hasPageOverride(mainCity.slug, serviceSlug);
                                return hasOverride ? (
                                    <Link href={`/${mainCity?.slug}/${serviceSlug}`} className="hover:text-white transition-colors">
                                        {mainService?.name_ar}
                                    </Link>
                                ) : (
                                    <span className="text-emerald-200">{mainService?.name_ar}</span>
                                );
                            })()}
                        </nav>

                        {/* Profile Header */}
                        <div className="flex flex-col md:flex-row gap-6 items-start">
                            {/* Logo */}
                            <div className="relative">
                                <div className="w-28 h-28 md:w-32 md:h-32 bg-white rounded-2xl shadow-xl flex items-center justify-center border-4 border-white">
                                    {advertiser.logo_url ? (
                                        <Image
                                            src={advertiser.logo_url}
                                            alt={`شعار ${advertiser.business_name} - شركة ${mainService?.name_ar || 'خدمات'} معتمدة`}
                                            fill
                                            className="object-cover rounded-xl"
                                            sizes="128px"
                                        />
                                    ) : (
                                        <span className="text-4xl font-bold text-emerald-600">
                                            {advertiser.business_name.charAt(0)}
                                        </span>
                                    )}
                                </div>
                                {advertiser.is_premium && (
                                    <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full flex items-center justify-center shadow-lg">
                                        <BadgeCheck className="w-6 h-6 text-white" />
                                    </div>
                                )}
                            </div>

                            {/* Info */}
                            <div className="flex-1">
                                <div className="flex items-start justify-between gap-4">
                                    <div>
                                        <h1 className="text-2xl md:text-3xl font-bold mb-2">
                                            {advertiser.business_name}
                                        </h1>
                                        {advertiser.is_premium && (
                                            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-gradient-to-l from-amber-400 to-yellow-500 text-amber-900 text-sm font-bold rounded-full">
                                                <BadgeCheck className="w-4 h-4" />
                                                شركة معتمدة
                                            </span>
                                        )}
                                    </div>

                                    {/* Actions */}
                                    <div className="flex gap-2">
                                        <button className="p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors">
                                            <Share2 className="w-5 h-5" />
                                        </button>
                                        <button className="p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors">
                                            <Heart className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>

                                {/* Rating & Stats */}
                                <div className="flex flex-wrap items-center gap-4 mt-4">
                                    {avgRating > 0 && (
                                        <div className="flex items-center gap-2 bg-white/20 rounded-full px-3 py-1.5">
                                            <div className="flex">
                                                {[1, 2, 3, 4, 5].map(star => (
                                                    <Star
                                                        key={star}
                                                        className={`w-4 h-4 ${star <= avgRating ? 'text-amber-300 fill-amber-300' : 'text-white/40'}`}
                                                    />
                                                ))}
                                            </div>
                                            <span className="text-sm font-medium">
                                                {avgRating.toFixed(1)} ({reviews.length} تقييم)
                                            </span>
                                        </div>
                                    )}

                                    <div className="flex items-center gap-1.5 text-emerald-100">
                                        <MapPin className="w-4 h-4" />
                                        <span className="text-sm">
                                            {advertiser.targeted_cities.slice(0, 3).map(c => getCityBySlug(c)?.name_ar).join(' • ')}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Sticky CTA Bar (Mobile) */}
                <div className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm md:hidden">
                    <div className="flex gap-3 p-3">
                        <a
                            href={phoneLink}
                            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-l from-emerald-500 to-emerald-600 text-white font-medium rounded-xl"
                        >
                            <Phone className="w-5 h-5" />
                            اتصل الآن
                        </a>
                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-l from-green-500 to-green-600 text-white font-medium rounded-xl"
                        >
                            <MessageCircle className="w-5 h-5" />
                            واتساب
                        </a>
                    </div>
                </div>

                {/* Main Content */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Left Column - Main Content */}
                        <div className="lg:col-span-2 space-y-8">
                            {/* Services */}
                            <section className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                                <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    <CheckCircle className="w-5 h-5 text-emerald-500" />
                                    خدماتنا
                                </h2>
                                <div className="flex flex-wrap gap-2">
                                    {advertiser.targeted_services.map(serviceSlug => {
                                        const service = getServiceBySlug(serviceSlug);
                                        return service ? (
                                            <span
                                                key={serviceSlug}
                                                className="px-4 py-2 bg-emerald-50 text-emerald-700 rounded-lg text-sm font-medium"
                                            >
                                                {service.name_ar}
                                            </span>
                                        ) : null;
                                    })}
                                </div>
                            </section>

                            {/* About */}
                            <section className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                                <h2 className="text-lg font-bold text-gray-900 mb-4">عن الشركة</h2>
                                <div className="prose prose-emerald max-w-none">
                                    <p className="text-gray-600 whitespace-pre-line leading-relaxed">
                                        {advertiser.description}
                                    </p>
                                </div>
                            </section>

                            {/* Gallery */}
                            {advertiser.gallery.length > 0 && (
                                <section className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                                    <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                                        <Camera className="w-5 h-5 text-emerald-500" />
                                        معرض الصور
                                    </h2>
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                        {advertiser.gallery.map((img, index) => (
                                            <div key={index} className="relative aspect-video rounded-xl overflow-hidden bg-gray-100">
                                                <Image
                                                    src={img}
                                                    alt={`${advertiser.business_name} - ${mainService?.name_ar || 'خدمات'} - صورة ${index + 1}`}
                                                    fill
                                                    className="object-cover hover:scale-105 transition-transform duration-300"
                                                    sizes="(max-width: 768px) 50vw, 33vw"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            )}

                            {/* Reviews */}
                            <section className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                                <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    <Star className="w-5 h-5 text-amber-500" />
                                    تقييمات العملاء ({reviews.length})
                                </h2>

                                {/* Average Rating */}
                                {avgRating > 0 && (
                                    <div className="flex items-center gap-4 p-4 bg-amber-50 rounded-xl mb-6">
                                        <div className="text-4xl font-bold text-amber-600">
                                            {avgRating.toFixed(1)}
                                        </div>
                                        <div>
                                            <div className="flex mb-1">
                                                {[1, 2, 3, 4, 5].map(star => (
                                                    <Star
                                                        key={star}
                                                        className={`w-5 h-5 ${star <= avgRating ? 'text-amber-400 fill-amber-400' : 'text-gray-300'}`}
                                                    />
                                                ))}
                                            </div>
                                            <p className="text-sm text-amber-700">
                                                بناءً على {reviews.length} تقييم
                                            </p>
                                        </div>
                                    </div>
                                )}

                                {/* Review List */}
                                <div className="space-y-4">
                                    {reviews.map(review => (
                                        <ReviewCard key={review.id} review={review} />
                                    ))}
                                </div>
                            </section>
                        </div>

                        {/* Right Column - Sidebar */}
                        <div className="lg:col-span-1">
                            <div className="sticky top-4 space-y-4">
                                {/* Contact Card */}
                                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                                    <h3 className="font-bold text-gray-900 mb-4">تواصل معنا</h3>

                                    <div className="space-y-3">
                                        <a
                                            href={phoneLink}
                                            className="flex items-center justify-center gap-2 w-full px-4 py-3.5 bg-gradient-to-l from-emerald-500 to-emerald-600 text-white font-medium rounded-xl hover:from-emerald-600 hover:to-emerald-700 shadow-lg shadow-emerald-500/30 transition-all"
                                        >
                                            <Phone className="w-5 h-5" />
                                            اتصل الآن
                                        </a>

                                        <a
                                            href={whatsappLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center gap-2 w-full px-4 py-3.5 bg-gradient-to-l from-green-500 to-green-600 text-white font-medium rounded-xl hover:from-green-600 hover:to-green-700 shadow-lg shadow-green-500/30 transition-all"
                                        >
                                            <MessageCircle className="w-5 h-5" />
                                            تواصل عبر واتساب
                                        </a>
                                    </div>

                                    <div className="mt-4 pt-4 border-t border-gray-100">
                                        <div className="flex items-center gap-3 text-gray-600">
                                            <Phone className="w-4 h-4" />
                                            <span dir="ltr">{advertiser.phone_number}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Service Areas */}
                                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                                    <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                                        <MapPin className="w-5 h-5 text-emerald-500" />
                                        مناطق الخدمة
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {advertiser.targeted_cities.map(citySlug => {
                                            const city = getCityBySlug(citySlug);
                                            const serviceSlug = getCanonicalSlug(advertiser.targeted_services[0]) || advertiser.targeted_services[0];
                                            const hasOverride = city && hasPageOverride(citySlug, serviceSlug);
                                            return city ? (
                                                <Link
                                                    key={citySlug}
                                                    href={hasOverride ? `/${citySlug}/${serviceSlug}` : `/${citySlug}`}
                                                    className="px-3 py-1.5 bg-gray-100 hover:bg-emerald-50 text-gray-700 hover:text-emerald-700 rounded-lg text-sm transition-colors"
                                                >
                                                    {city.name_ar}
                                                </Link>
                                            ) : null;
                                        })}
                                    </div>
                                </div>

                                {/* Trust Badges */}
                                <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-6 border border-emerald-200">
                                    <h3 className="font-bold text-emerald-900 mb-4">لماذا تختارنا؟</h3>
                                    <ul className="space-y-3">
                                        <li className="flex items-center gap-3 text-emerald-800">
                                            <div className="w-8 h-8 bg-emerald-200 rounded-lg flex items-center justify-center">
                                                <Shield className="w-4 h-4 text-emerald-700" />
                                            </div>
                                            <span className="text-sm">شركة معتمدة ومرخصة</span>
                                        </li>
                                        <li className="flex items-center gap-3 text-emerald-800">
                                            <div className="w-8 h-8 bg-emerald-200 rounded-lg flex items-center justify-center">
                                                <Clock className="w-4 h-4 text-emerald-700" />
                                            </div>
                                            <span className="text-sm">خدمة على مدار الساعة</span>
                                        </li>
                                        <li className="flex items-center gap-3 text-emerald-800">
                                            <div className="w-8 h-8 bg-emerald-200 rounded-lg flex items-center justify-center">
                                                <Star className="w-4 h-4 text-emerald-700" />
                                            </div>
                                            <span className="text-sm">تقييمات عالية من العملاء</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* SEO Content Section */}
                <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-gray-200">
                    <article className="prose prose-lg max-w-none">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            عن {advertiser.business_name}
                        </h2>
                        <div className="bg-emerald-50 p-6 rounded-xl border-r-4 border-emerald-500 mb-6">
                            <p className="text-gray-700 leading-relaxed">
                                {advertiser.business_name} هي شركة {advertiser.is_premium ? 'معتمدة وموثقة' : 'مسجلة'} في منصة بروكر،
                                تقدم خدمات {targetedServices.map(s => s.name_ar).join(' و')} في {targetedCities.map(c => c.name_ar).join(' و')}.
                                {avgRating > 0 ? ` حاصلة على تقييم ${avgRating.toFixed(1)} من 5 بناءً على ${reviews.length} تقييم من عملاء حقيقيين.` : ''}
                            </p>
                        </div>

                        <h3 className="text-xl font-bold text-gray-900 mb-3">الخدمات المقدمة</h3>
                        <ul className="text-gray-600 space-y-1 mb-6">
                            {targetedServices.map(s => {
                                const slug = getCanonicalSlug(s.slug) || s.slug;
                                const citySlug = advertiser.targeted_cities[0];
                                const hasOverride = hasPageOverride(citySlug, slug);
                                return (
                                    <li key={s.slug}>✓ {hasOverride ? (
                                        <Link href={`/${citySlug}/${slug}`} className="text-emerald-700 hover:underline">{s.name_ar}</Link>
                                    ) : (
                                        <span className="text-gray-600">{s.name_ar}</span>
                                    )}</li>
                                );
                            })}
                        </ul>

                        <h3 className="text-xl font-bold text-gray-900 mb-3">مناطق التغطية</h3>
                        <div className="flex flex-wrap gap-2 mb-8 not-prose">
                            {targetedCities.map(c => (
                                <Link key={c.slug} href={`/${c.slug}`} className="px-3 py-1.5 bg-emerald-50 text-emerald-700 rounded-lg text-sm hover:bg-emerald-100 transition-colors">{c.name_ar}</Link>
                            ))}
                        </div>

                        {/* Company FAQ */}
                        <h3 className="text-xl font-bold text-gray-900 mb-4">أسئلة شائعة عن {advertiser.business_name}</h3>
                        <div className="space-y-4 not-prose" itemScope itemType="https://schema.org/FAQPage">
                            <div className="bg-white border border-gray-200 rounded-xl p-4" itemScope itemType="https://schema.org/Question">
                                <h4 className="font-bold text-gray-800 mb-2" itemProp="name">ما هي الخدمات التي تقدمها {advertiser.business_name}؟</h4>
                                <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                                    <p className="text-gray-600" itemProp="text">تقدم {advertiser.business_name} خدمات {targetedServices.map(s => s.name_ar).join(' و')} في {targetedCities.map(c => c.name_ar).join(' و')}. جميع الخدمات مضمونة ومرخصة.</p>
                                </div>
                            </div>
                            <div className="bg-white border border-gray-200 rounded-xl p-4" itemScope itemType="https://schema.org/Question">
                                <h4 className="font-bold text-gray-800 mb-2" itemProp="name">كيف أتواصل مع {advertiser.business_name}؟</h4>
                                <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                                    <p className="text-gray-600" itemProp="text">يمكنك التواصل مع {advertiser.business_name} عبر الهاتف أو واتساب مباشرة من صفحة الشركة على بروكر. الخدمة متاحة على مدار الساعة.</p>
                                </div>
                            </div>
                            <div className="bg-white border border-gray-200 rounded-xl p-4" itemScope itemType="https://schema.org/Question">
                                <h4 className="font-bold text-gray-800 mb-2" itemProp="name">هل {advertiser.business_name} شركة معتمدة؟</h4>
                                <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                                    <p className="text-gray-600" itemProp="text">{advertiser.is_premium ? `نعم، ${advertiser.business_name} شركة معتمدة وموثقة في منصة بروكر. تم التحقق من تراخيصها وجودة خدماتها.` : `${advertiser.business_name} شركة مسجلة في منصة بروكر. ننصح بالتحقق من التراخيص والضمانات قبل التعاقد.`}</p>
                                </div>
                            </div>
                            {avgRating > 0 && (
                                <div className="bg-white border border-gray-200 rounded-xl p-4" itemScope itemType="https://schema.org/Question">
                                    <h4 className="font-bold text-gray-800 mb-2" itemProp="name">ما تقييم {advertiser.business_name}؟</h4>
                                    <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                                        <p className="text-gray-600" itemProp="text">حصلت {advertiser.business_name} على تقييم {avgRating.toFixed(1)} من 5 نجوم بناءً على {reviews.length} تقييم من عملاء حقيقيين على منصة بروكر.</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </article>
                </section>

                {/* 🛡️ Anti-Scam YMYL Trap — Consumer Protection Banner */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <FraudAlertBanner
                        serviceName={mainService?.name_ar || 'خدمات'}
                        serviceSlug={mainService?.slug || 'cleaning'}
                        cityName={mainCity?.name_ar || 'السعودية'}
                    />
                </section>

                {/* Phantom Geo-Hijacking — Company Signal */}
                <GeoSignals
                    citySlug={advertiser.targeted_cities[0] || 'riyadh'}
                    serviceSlug={advertiser.targeted_services[0] || 'cleaning'}
                    serviceName={mainService?.name_ar || 'خدمات'}
                    serviceCategory={mainService?.category || 'cleaning'}
                />

                {/* Footer */}
                <Footer
                    currentCity={advertiser.targeted_cities[0]}
                    currentService={advertiser.targeted_services[0]}
                />
            </main>
        </>
    );
}

// Review Card Component
function ReviewCard({ review }: { review: Review }) {
    return (
        <div className="p-4 bg-gray-50 rounded-xl">
            <div className="flex items-start justify-between mb-2">
                <div>
                    <h4 className="font-medium text-gray-900">{review.user}</h4>
                    <div className="flex mt-1">
                        {[1, 2, 3, 4, 5].map(star => (
                            <Star
                                key={star}
                                className={`w-4 h-4 ${star <= review.rating ? 'text-amber-400 fill-amber-400' : 'text-gray-300'}`}
                            />
                        ))}
                    </div>
                </div>
                <span className="text-xs text-gray-500">
                    {new Date(review.date).toLocaleDateString('ar-SA')}
                </span>
            </div>
            <p className="text-gray-600 text-sm">{review.comment}</p>
        </div>
    );
}
