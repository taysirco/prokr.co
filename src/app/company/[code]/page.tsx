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
    ExternalLink,
    Camera,
    CheckCircle
} from 'lucide-react';
import { getCityBySlug, getServiceBySlug, CITIES, SERVICES } from '@/lib/seed';
import { LocalBusinessJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import Footer from '@/components/Footer';
import type { Advertiser, Review } from '@/types';

interface CompanyPageProps {
    params: Promise<{
        code: string;
    }>;
}

// Generate metadata for SEO
export async function generateMetadata({ params }: CompanyPageProps): Promise<Metadata> {
    const resolvedParams = await params;
    const advertiser = getMockAdvertiserByCode(resolvedParams.code);

    if (!advertiser) {
        return { title: 'الشركة غير موجودة' };
    }

    const mainService = advertiser.targeted_services[0];
    const service = getServiceBySlug(mainService);

    const title = `${advertiser.business_name} - ${service?.name_ar || 'خدمات'} | بروكر`;
    const description = `${advertiser.business_name} - ${advertiser.description.slice(0, 150)}...`;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            images: advertiser.logo_url ? [advertiser.logo_url] : [],
            locale: 'ar_SA',
            type: 'website',
        },
        alternates: {
            canonical: `https://prokr.co/company/${resolvedParams.code}`,
        },
    };
}

// Mock function to get advertiser by code (replace with Firestore)
function getMockAdvertiserByCode(code: string): Advertiser | null {
    // Generate consistent mock data based on code
    const isPremium = code.length > 0 && code.charCodeAt(0) % 2 === 0;

    return {
        id: `ad-${code}`,
        short_code: code,
        business_name: `شركة النخبة للخدمات المنزلية`,
        phone_number: '+966501234567',
        whatsapp_number: '+966501234567',
        logo_url: '',
        is_premium: isPremium,
        priority_score: 95,
        subscription_expiry: null,
        targeted_cities: ['riyadh', 'jeddah', 'dammam'],
        targeted_services: ['furniture-moving', 'cleaning', 'pest-control'],
        description: `شركة النخبة للخدمات المنزلية هي إحدى الشركات الرائدة في مجال تقديم الخدمات المنزلية في المملكة العربية السعودية. نقدم خدماتنا بأعلى مستويات الجودة والاحترافية، مع ضمان رضا العملاء التام.

نتميز بفريق عمل مدرب ومؤهل، وأحدث المعدات والتقنيات، وأسعار تنافسية. نعمل على مدار الساعة لتلبية احتياجاتكم.

خدماتنا تشمل:
• نقل العفش والأثاث
• التنظيف الشامل
• مكافحة الحشرات
• كشف التسربات`,
        gallery: [
            '/images/furniture-moving/affordable-furniture-moving-company-riyadh-living-room-sofa.jpg',
            '/images/furniture-moving/best-furniture-moving-company-jeddah-box-packing.jpg',
            '/images/furniture-moving/furniture-movers-saudi-truck-loading-sofa.jpg',
            '/images/furniture-moving/professional-packers-movers-riyadh-wrapped-chair.jpg',
        ],
        reviews: [
            { id: '1', user: 'أحمد محمد', rating: 5, comment: 'خدمة ممتازة وفريق عمل محترف. أنصح بالتعامل معهم بشدة.', date: new Date('2024-01-15') },
            { id: '2', user: 'سارة علي', rating: 5, comment: 'تجربة رائعة، التزام بالمواعيد وجودة عالية في العمل.', date: new Date('2024-01-10') },
            { id: '3', user: 'محمد أحمد', rating: 4, comment: 'خدمة جيدة جداً والأسعار مناسبة. سأتعامل معهم مرة أخرى.', date: new Date('2024-01-05') },
            { id: '4', user: 'فاطمة سعيد', rating: 5, comment: 'أفضل شركة تعاملت معها. شكراً لكم على الخدمة المميزة.', date: new Date('2023-12-28') },
        ],
        is_active: true,
        created_at: new Date(),
        updated_at: new Date(),
    };
}

export default async function CompanyPage({ params }: CompanyPageProps) {
    const resolvedParams = await params;
    const advertiser = getMockAdvertiserByCode(resolvedParams.code);

    if (!advertiser) {
        notFound();
    }

    const mainCity = getCityBySlug(advertiser.targeted_cities[0]);
    const mainService = getServiceBySlug(advertiser.targeted_services[0]);

    // Calculate average rating
    const avgRating = advertiser.reviews.length > 0
        ? advertiser.reviews.reduce((sum, r) => sum + r.rating, 0) / advertiser.reviews.length
        : 0;

    // Links
    const whatsappLink = `https://wa.me/${advertiser.whatsapp_number.replace(/\D/g, '')}`;
    const phoneLink = `tel:${advertiser.phone_number}`;

    // Breadcrumb items
    const breadcrumbs = [
        { name: 'الرئيسية', url: 'https://prokr.co' },
        { name: mainCity?.name_ar || 'المدن', url: `https://prokr.co/${mainCity?.slug || ''}` },
        { name: mainService?.name_ar || 'الخدمات', url: `https://prokr.co/${mainCity?.slug}/${mainService?.slug}` },
        { name: advertiser.business_name, url: `https://prokr.co/company/${advertiser.short_code}` },
    ];

    return (
        <>
            {/* JSON-LD Schema */}
            <LocalBusinessJsonLd advertiser={advertiser} city={mainCity || undefined} />
            <BreadcrumbJsonLd items={breadcrumbs} />

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
                            <Link href={`/${mainCity?.slug}/${mainService?.slug}`} className="hover:text-white transition-colors">
                                {mainService?.name_ar}
                            </Link>
                        </nav>

                        {/* Profile Header */}
                        <div className="flex flex-col md:flex-row gap-6 items-start">
                            {/* Logo */}
                            <div className="relative">
                                <div className="w-28 h-28 md:w-32 md:h-32 bg-white rounded-2xl shadow-xl flex items-center justify-center border-4 border-white">
                                    {advertiser.logo_url ? (
                                        <Image
                                            src={advertiser.logo_url}
                                            alt={advertiser.business_name}
                                            fill
                                            className="object-cover rounded-xl"
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
                                                {avgRating.toFixed(1)} ({advertiser.reviews.length} تقييم)
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
                                                    alt={`${advertiser.business_name} - صورة ${index + 1}`}
                                                    fill
                                                    className="object-cover hover:scale-105 transition-transform duration-300"
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
                                    تقييمات العملاء ({advertiser.reviews.length})
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
                                                بناءً على {advertiser.reviews.length} تقييم
                                            </p>
                                        </div>
                                    </div>
                                )}

                                {/* Review List */}
                                <div className="space-y-4">
                                    {advertiser.reviews.map(review => (
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
                                            return city ? (
                                                <Link
                                                    key={citySlug}
                                                    href={`/${citySlug}/${advertiser.targeted_services[0]}`}
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
